<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = $vendorDir;

return array(
    'Composer\\InstalledVersions' => $vendorDir . '/composer/InstalledVersions.php',
    'OCA\\Files_Versions\\AppInfo\\Application' => $baseDir . '/../lib/AppInfo/Application.php',
    'OCA\\Files_Versions\\BackgroundJob\\ExpireVersions' => $baseDir . '/../lib/BackgroundJob/ExpireVersions.php',
    'OCA\\Files_Versions\\Capabilities' => $baseDir . '/../lib/Capabilities.php',
    'OCA\\Files_Versions\\Command\\CleanUp' => $baseDir . '/../lib/Command/CleanUp.php',
    'OCA\\Files_Versions\\Command\\Expire' => $baseDir . '/../lib/Command/Expire.php',
    'OCA\\Files_Versions\\Command\\ExpireVersions' => $baseDir . '/../lib/Command/ExpireVersions.php',
    'OCA\\Files_Versions\\Controller\\PreviewController' => $baseDir . '/../lib/Controller/PreviewController.php',
    'OCA\\Files_Versions\\Db\\VersionEntity' => $baseDir . '/../lib/Db/VersionEntity.php',
    'OCA\\Files_Versions\\Db\\VersionsMapper' => $baseDir . '/../lib/Db/VersionsMapper.php',
    'OCA\\Files_Versions\\Events\\CreateVersionEvent' => $baseDir . '/../lib/Events/CreateVersionEvent.php',
    'OCA\\Files_Versions\\Expiration' => $baseDir . '/../lib/Expiration.php',
    'OCA\\Files_Versions\\Hooks' => $baseDir . '/../lib/Hooks.php',
    'OCA\\Files_Versions\\Listener\\LoadAdditionalListener' => $baseDir . '/../lib/Listener/LoadAdditionalListener.php',
    'OCA\\Files_Versions\\Listener\\LoadSidebarListener' => $baseDir . '/../lib/Listener/LoadSidebarListener.php',
    'OCA\\Files_Versions\\Migration\\Version1020Date20221114144058' => $baseDir . '/../lib/Migration/Version1020Date20221114144058.php',
    'OCA\\Files_Versions\\Sabre\\Plugin' => $baseDir . '/../lib/Sabre/Plugin.php',
    'OCA\\Files_Versions\\Sabre\\RestoreFolder' => $baseDir . '/../lib/Sabre/RestoreFolder.php',
    'OCA\\Files_Versions\\Sabre\\RootCollection' => $baseDir . '/../lib/Sabre/RootCollection.php',
    'OCA\\Files_Versions\\Sabre\\VersionCollection' => $baseDir . '/../lib/Sabre/VersionCollection.php',
    'OCA\\Files_Versions\\Sabre\\VersionFile' => $baseDir . '/../lib/Sabre/VersionFile.php',
    'OCA\\Files_Versions\\Sabre\\VersionHome' => $baseDir . '/../lib/Sabre/VersionHome.php',
    'OCA\\Files_Versions\\Sabre\\VersionRoot' => $baseDir . '/../lib/Sabre/VersionRoot.php',
    'OCA\\Files_Versions\\Storage' => $baseDir . '/../lib/Storage.php',
    'OCA\\Files_Versions\\Versions\\BackendNotFoundException' => $baseDir . '/../lib/Versions/BackendNotFoundException.php',
    'OCA\\Files_Versions\\Versions\\IDeletableVersionBackend' => $baseDir . '/../lib/Versions/IDeletableVersionBackend.php',
    'OCA\\Files_Versions\\Versions\\INameableVersion' => $baseDir . '/../lib/Versions/INameableVersion.php',
    'OCA\\Files_Versions\\Versions\\INameableVersionBackend' => $baseDir . '/../lib/Versions/INameableVersionBackend.php',
    'OCA\\Files_Versions\\Versions\\IVersion' => $baseDir . '/../lib/Versions/IVersion.php',
    'OCA\\Files_Versions\\Versions\\IVersionBackend' => $baseDir . '/../lib/Versions/IVersionBackend.php',
    'OCA\\Files_Versions\\Versions\\IVersionManager' => $baseDir . '/../lib/Versions/IVersionManager.php',
    'OCA\\Files_Versions\\Versions\\LegacyVersionsBackend' => $baseDir . '/../lib/Versions/LegacyVersionsBackend.php',
    'OCA\\Files_Versions\\Versions\\Version' => $baseDir . '/../lib/Versions/Version.php',
    'OCA\\Files_Versions\\Versions\\VersionManager' => $baseDir . '/../lib/Versions/VersionManager.php',
);
