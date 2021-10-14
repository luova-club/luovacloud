<?php

declare(strict_types=1);
/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\DAV\Upload;

use OC\Files\ObjectStore\ObjectStoreStorage;
use OC\Files\View;
use OCA\DAV\Connector\Sabre\Directory;
use OCA\DAV\Connector\Sabre\FilesPlugin;
use OCP\Files\ObjectStore\IObjectStoreMultiPartUpload;
use OCP\Files\Storage\IChunkedFileWrite;
use OCP\Files\Storage\IProcessingCallbackStorage;
use OCP\Files\Storage\IStorage;
use OCP\Files\StorageInvalidException;
use OCP\ICache;
use Sabre\DAV\Exception\BadRequest;
use Sabre\DAV\Exception\InsufficientStorage;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAV\Exception\PreconditionFailed;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;
use Sabre\DAV\Xml\Element\Response;
use Sabre\DAV\Xml\Response\MultiStatus;
use Sabre\HTTP\RequestInterface;
use Sabre\HTTP\ResponseInterface;
use Sabre\Uri;

class ChunkingV2Plugin extends ServerPlugin {

	/** @var Server */
	private $server;
	/** @var UploadFolder */
	private $uploadFolder;
	/** @var ICache */
	private $cache;

	private const TEMP_TARGET = '.target';

	public const CACHE_KEY = 's3-multipart';
	public const UPLOAD_TARGET_FILE_ID = 'upload-target-file-id';
	public const UPLOAD_TARGET_PATH = 'upload-target-path';
	public const UPLOAD_ID = 'upload-id';

	private const DESTINATION_HEADER = 'X-S3-Multipart-Destination';

	/**
	 * @inheritdoc
	 */
	public function initialize(Server $server) {
		$server->on('afterMethod:MKCOL', [$this, 'beforeMkcol']);
		$server->on('beforeMethod:PUT', [$this, 'beforePut']);
		$server->on('beforeMethod:DELETE', [$this, 'beforeDelete']);
		$server->on('beforeMove', [$this, 'beforeMove'], 90);

		$this->server = $server;

		$this->cache = \OC::$server->getMemCacheFactory()->createDistributed(self::CACHE_KEY);
	}

	/**
	 * @param string $path
	 * @param bool $createIfNotExists
	 * @return FutureFile|UploadFile|\Sabre\DAV\ICollection|\Sabre\DAV\INode
	 */
	private function getTargetFile(string $path, bool $createIfNotExists = false) {
		try {
			$targetFile = $this->server->tree->getNodeForPath($path);
		} catch (NotFound $e) {
			if ($createIfNotExists) {
				$this->uploadFolder->createFile(self::TEMP_TARGET);
			}
			$targetFile = $this->uploadFolder->getChild(self::TEMP_TARGET);
		}
		return $targetFile;
	}

	public function beforeMkcol(RequestInterface $request, ResponseInterface $response): bool {
		$this->uploadFolder = $this->server->tree->getNodeForPath($request->getPath());
		try {
			$this->checkPrerequisites();
			$storage = $this->getStorage();
		} catch (StorageInvalidException | BadRequest $e) {
			return true;
		}

		$targetPath = $this->server->httpRequest->getHeader(self::DESTINATION_HEADER);
		if (!$targetPath) {
			return true;
		}

		$targetPath = $this->server->calculateUri($targetPath);

		$targetFile = $this->getTargetFile($targetPath, true);

		$uploadId = $storage->beginChunkedFile($targetFile->getInternalPath());

		$this->cache->set($this->uploadFolder->getName(), [
			self::UPLOAD_TARGET_FILE_ID => $targetFile->getId(),
			self::UPLOAD_ID => $uploadId,
			self::UPLOAD_TARGET_PATH => $targetPath,
		]);

		$response->setStatus(201);
		return true;
	}

	public function beforePut(RequestInterface $request, ResponseInterface $response): bool {
		$this->uploadFolder = $this->server->tree->getNodeForPath(dirname($request->getPath()));
		if (!$this->uploadFolder instanceof UploadFolder) {
			return true;
		}

		try {
			$this->checkPrerequisites();
			$storage = $this->getStorage();
		} catch (StorageInvalidException | BadRequest $e) {
			return true;
		}

		$properties = $this->getUploadSession();
		$targetPath = $properties[self::UPLOAD_TARGET_PATH] ?? null;
		$uploadId = $properties[self::UPLOAD_ID] ?? null;
		if (empty($targetPath) || empty($uploadId)) {
			throw new PreconditionFailed('Missing metadata for chunked upload');
		}
		$partId = (int)basename($request->getPath());

		if (!($partId >= 1 && $partId <= 10000)) {
			throw new BadRequest('Invalid chunk id');
		}

		$targetFile = $this->getTargetFile($targetPath);
		$cacheEntry = $storage->getCache()->get($targetFile->getInternalPath());
		$tempTargetFile = null;

		$additionalSize = (int)$request->getHeader('Content-Length');
		if ($this->uploadFolder->childExists(self::TEMP_TARGET)) {
			/** @var UploadFile $tempTargetFile */
			$tempTargetFile = $this->uploadFolder->getChild(self::TEMP_TARGET);
			$tempTargetCache = $storage->getCache()->get($tempTargetFile->getInternalPath());

			[$destinationDir, $destinationName] = Uri\split($targetPath);
			/** @var Directory $destinationParent */
			$destinationParent = $this->server->tree->getNodeForPath($destinationDir);
			$free = $storage->free_space($destinationParent->getInternalPath());
			$newSize = $tempTargetCache->getSize() + $additionalSize;
			if ($free >= 0 && ($tempTargetCache->getSize() > $free || $newSize > $free)) {
				throw new InsufficientStorage("Insufficient space in $targetPath");
			}
		}

		$stream = $request->getBodyAsStream();
		$storage->putChunkedFilePart($targetFile->getInternalPath(), $uploadId, (string)$partId, $stream, $additionalSize);

		$storage->getCache()->update($cacheEntry->getId(), ['size' => $cacheEntry->getSize() + $additionalSize]);
		if ($tempTargetFile) {
			$storage->getPropagator()->propagateChange($tempTargetFile->getInternalPath(), time(), $additionalSize);
		}

		$response->setStatus(201);
		return false;
	}

	public function beforeMove($sourcePath, $destination): bool {
		$this->uploadFolder = $this->server->tree->getNodeForPath(dirname($sourcePath));
		try {
			$this->checkPrerequisites();
			$storage = $this->getStorage();
		} catch (StorageInvalidException | BadRequest $e) {
			return true;
		}
		$properties = $this->getUploadSession();
		$targetPath = $properties[self::UPLOAD_TARGET_PATH] ?? null;
		$uploadId = $properties[self::UPLOAD_ID] ?? null;

		// FIXME: check if $destination === TARGET
		if (empty($targetPath) || empty($uploadId)) {
			throw new PreconditionFailed('Missing metadata for chunked upload');
		}

		$targetFile = $this->getTargetFile($targetPath);

		[$destinationDir, $destinationName] = Uri\split($destination);
		/** @var Directory $destinationParent */
		$destinationParent = $this->server->tree->getNodeForPath($destinationDir);
		$destinationExists = $destinationParent->childExists($destinationName);

		// Using a multipart status here in order to be able to sent the actual status after processing the move
		$this->server->httpResponse->setStatus(207);
		$this->server->httpResponse->setHeader('Content-Type', 'application/xml; charset=utf-8');

		// allow sync clients to send the modification and creation time along in a header
		$updateFileInfo = [];
		if ($this->server->httpRequest->getHeader('X-OC-MTime') !== null) {
			$updateFileInfo['mtime'] = $this->sanitizeMtime($this->server->httpRequest->getHeader('X-OC-MTime'));
			$this->server->httpResponse->setHeader('X-OC-MTime', 'accepted');
		}
		if ($this->server->httpRequest->getHeader('X-OC-CTime') !== null) {
			$updateFileInfo['creation_time'] = $this->sanitizeMtime($this->server->httpRequest->getHeader('X-OC-CTime'));
			$this->server->httpResponse->setHeader('X-OC-CTime', 'accepted');
		}

		$rootView = new View();
		if ($storage->instanceOfStorage(ObjectStoreStorage::class)) {
			/** @var ObjectStoreStorage $storage */
			$objectStore = $storage->getObjectStore();
			if ($objectStore instanceof IObjectStoreMultiPartUpload) {
				$parts = $objectStore->getMultipartUploads($storage->getURN($targetFile->getId()), $uploadId);
				$size = 0;
				foreach ($parts as $part) {
					$size += $part['Size'];
				}
				$free = $storage->free_space($destinationParent->getInternalPath());
				if ($free >= 0 && ($size > $free)) {
					throw new InsufficientStorage("Insufficient space in $targetPath");
				}
			}
		}
		if ($storage->instanceOfStorage(IProcessingCallbackStorage::class)) {
			/** @var IProcessingCallbackStorage $storage */
			$lastTick = time();
			$storage->processingCallback('writeChunkedFile', function () use ($lastTick) {
				if ($lastTick < time()) {
					\OC_Util::obEnd();
					echo ' ';
					flush();
				}
				$lastTick = time();
			});
		}

		$this->server->httpResponse->setBody(function () use ($targetFile, $rootView, $uploadId, $destinationName, $destinationParent, $destinationExists, $sourcePath, $destination, $updateFileInfo) {
			$rootView->writeChunkedFile($targetFile->getAbsoluteInternalPath(), $uploadId);
			$destinationInView = $destinationParent->getFileInfo()->getPath() . '/' . $destinationName;
			if (!$destinationExists) {
				$rootView->rename($targetFile->getAbsoluteInternalPath(), $destinationInView);
			}

			$rootView->putFileInfo($destinationInView, $updateFileInfo);

			$sourceNode = $this->server->tree->getNodeForPath($sourcePath);
			if ($sourceNode instanceof FutureFile) {
				$this->uploadFolder->delete();
			}

			$this->server->emit('afterMove', [$sourcePath, $destination]);
			$this->server->emit('afterUnbind', [$sourcePath]);
			$this->server->emit('afterBind', [$destination]);

			$response = new Response(
				$destination,
				['200' => [
					FilesPlugin::SIZE_PROPERTYNAME => $rootView->filesize($destinationInView)
				]],
				$destinationExists ? '204' : '201'
			);
			echo $this->server->xml->write(
				'{DAV:}multistatus',
				new MultiStatus([$response])
			);
		});
		return false;
	}

	public function beforeDelete(RequestInterface $request, ResponseInterface $response) {
		$this->uploadFolder = $this->server->tree->getNodeForPath($request->getPath());
		try {
			if (!$this->uploadFolder instanceof UploadFolder) {
				return true;
			}
			$storage = $this->getStorage();
		} catch (StorageInvalidException | BadRequest $e) {
			return true;
		}

		$properties = $this->getUploadSession();
		$targetPath = $properties[self::UPLOAD_TARGET_PATH];
		$uploadId = $properties[self::UPLOAD_ID];
		if (!$targetPath || !$uploadId) {
			return true;
		}
		$targetFile = $this->getTargetFile($targetPath);
		$storage->cancelChunkedFile($targetFile->getInternalPath(), $uploadId);
		return true;
	}

	/** @throws BadRequest */
	private function checkPrerequisites(): void {
		if (!$this->uploadFolder instanceof UploadFolder || !$this->server->httpRequest->getHeader(self::DESTINATION_HEADER)) {
			throw new BadRequest('Chunking destination header not set');
		}
	}

	/**
	 * @return IChunkedFileWrite
	 * @throws BadRequest
	 * @throws StorageInvalidException
	 */
	private function getStorage(): IStorage {
		$this->checkPrerequisites();
		$storage = $this->uploadFolder->getStorage();
		if (!$storage->instanceOfStorage(IChunkedFileWrite::class)) {
			throw new StorageInvalidException('Storage does not support chunked file write');
		}
		/** @var IChunkedFileWrite $storage */
		return $storage;
	}

	protected function sanitizeMtime($mtimeFromRequest) {
		if (!is_numeric($mtimeFromRequest)) {
			throw new \InvalidArgumentException('X-OC-MTime header must be an integer (unix timestamp).');
		}

		return (int)$mtimeFromRequest;
	}

	public function getUploadSession(): array {
		return $this->cache->get($this->uploadFolder->getName()) ?? [];
	}
}