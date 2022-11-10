/*! For license information please see files_versions-files_versions.js.LICENSE.txt */
!function(){var e,n={23164:function(e,n,r){"use strict";var s=r(20144),i=r(9944),o=r(79753),a=r(65358),u=r(26932),l=r(22200),c=r(81063),f=r(4820);(0,c.getPatcher)().patch("request",f.default);var d=(0,o.generateRemoteUrl)("dav"),m=(0,c.createClient)(d),v='<?xml version="1.0"?>\n<d:propfind xmlns:d="DAV:"\n\txmlns:oc="http://owncloud.org/ns"\n\txmlns:nc="http://nextcloud.org/ns"\n\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t</d:prop>\n</d:propfind>',p=(0,r(17499).IY)().setApp("files_version").detectUser().build(),h=r(80351),j=r.n(h);function A(e,n,t,r,s,i,o){try{var a=e[i](o),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,s)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){A(i,r,s,o,a,"next",e)}function a(e){A(i,r,s,o,a,"throw",e)}o(void 0)}))}}function y(e){return b.apply(this,arguments)}function b(){return(b=g(regeneratorRuntime.mark((function e(n){var t,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/versions/".concat(null===(t=(0,l.getCurrentUser)())||void 0===t?void 0:t.uid,"/versions/").concat(n.id),e.prev=1,e.next=4,m.getDirectoryContents(r,{data:v});case 4:return s=e.sent,e.abrupt("return",s.filter((function(e){return""!==e.mime})).map((function(e){return C(e,n)})));case 8:throw e.prev=8,e.t0=e.catch(1),p.error("Could not fetch version",{exception:e.t0}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=g(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.debug("Restoring version",{url:n.url}),e.next=4,m.moveFile("/versions/".concat(null===(t=(0,l.getCurrentUser)())||void 0===t?void 0:t.uid,"/versions/").concat(n.fileId,"/").concat(n.fileVersion),"/versions/".concat(null===(r=(0,l.getCurrentUser)())||void 0===r?void 0:r.uid,"/restore/target"));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),p.error("Could not restore version",{exception:e.t0}),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function C(e,n){return{fileId:n.id,title:"",fileName:e.filename,mimeType:e.mime,size:e.size,type:e.type,mtime:1e3*j()(e.lastmod).unix(),preview:(0,o.generateUrl)("/apps/files_versions/preview?file={file}&version={fileVersion}",{file:(0,a.RQ)(n.path,n.name),fileVersion:e.basename}),url:(0,a.RQ)("/remote.php/dav",e.filename),fileVersion:e.basename}}function w(e){return k.apply(this,arguments)}function k(){return(k=g(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,n){return O.apply(this,arguments)}function O(){return(O=g(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return N.apply(this,arguments)}function N(){return(N=g(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=r(37368),I=r(2470),S=r(91482),P=r(14625),D=r(33691),B=r(15961),F={name:"Version",components:{NcActionLink:B.ih,NcActionButton:B.Js,NcListItem:B.hx,NcModal:B.Jc,NcButton:B.P2,NcTextField:B.h3,BackupRestore:R.Z,Download:I.Z,Pencil:S.default,Check:P.default,Delete:D.Z},filters:{humanReadableSize:function(e){return OC.Util.humanFileSize(e)},humanDateFromNow:function(e){return j()(e).fromNow()}},props:{version:{type:Object,required:!0},isCurrent:{type:Boolean,default:!1},isFirstVersion:{type:Boolean,default:!1}},data:function(){var e;return{showVersionNameForm:!1,formVersionNameValue:this.version.title,experimental:null!==(e=OC.experimental)&&void 0!==e&&e}},computed:{versionTitle:function(){return this.isCurrent&&""===this.version.title?(0,i.translate)("files_versions","Current version"):this.isFirstVersion&&""===this.version.title?(0,i.translate)("files_versions","Initial version"):this.version.title}},methods:{openVersionNameModal:function(){var e=this;this.showVersionNameForm=!0,this.$nextTick((function(){e.$refs.nameInput.$el.getElementsByTagName("input")[0].focus()}))},restoreVersion:function(){this.$emit("restore",this.version)},setVersionName:function(e){this.formVersionNameValue=e,this.showVersionNameForm=!1,this.$emit("name-update",this.version,e)},deleteVersion:function(){this.$emit("delete",this.version)}}},T=r(93379),E=r.n(T),U=r(7795),Z=r.n(U),$=r(90569),M=r.n($),q=r(3565),L=r.n(q),Y=r(19216),Q=r.n(Y),G=r(44589),J=r.n(G),W=r(515),H={};H.styleTagTransform=J(),H.setAttributes=L(),H.insert=M().bind(null,"head"),H.domAPI=Z(),H.insertStyleElement=Q(),E()(W.Z,H),W.Z&&W.Z.locals&&W.Z.locals;var K=r(51900);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){ne(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e,n,t,r,s,i,o){try{var a=e[i](o),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,s)}function re(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){te(i,r,s,o,a,"next",e)}function a(e){te(i,r,s,o,a,"throw",e)}o(void 0)}))}}function se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var ie={name:"VersionTab",components:{Version:(0,K.Z)(F,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("NcListItem",{staticClass:"version",attrs:{title:e.versionTitle,href:e.version.url},scopedSlots:e._u([{key:"icon",fn:function(){return[t("img",{staticClass:"version__image",attrs:{lazy:"true",src:e.version.preview,alt:"",height:"256",width:"256"}})]},proxy:!0},{key:"subtitle",fn:function(){return[t("div",{staticClass:"version__info"},[t("span",[e._v(e._s(e._f("humanDateFromNow")(e.version.mtime)))]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v("•")]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v(e._s(e._f("humanReadableSize")(e.version.size)))])])]},proxy:!0},{key:"actions",fn:function(){return[e.experimental?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.openVersionNameModal},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil",{attrs:{size:22}})]},proxy:!0}],null,!1,3072546167)},[e._v("\n\t\t\t\t"+e._s(""===e.version.title?e.t("files_versions","Name this version"):e.t("files_versions","Edit version name"))+"\n\t\t\t")]):e._e(),e._v(" "),e.isCurrent?e._e():t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.restoreVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("BackupRestore",{attrs:{size:22}})]},proxy:!0}],null,!1,2239038444)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Restore version"))+"\n\t\t\t")]),e._v(" "),t("NcActionLink",{attrs:{href:e.version.url,"close-after-click":!0,download:e.version.url},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Download",{attrs:{size:22}})]},proxy:!0}])},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Download version"))+"\n\t\t\t")]),e._v(" "),e.experimental&&!e.isCurrent?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.deleteVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Delete",{attrs:{size:22}})]},proxy:!0}],null,!1,2429175571)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Delete version"))+"\n\t\t\t")]):e._e()]},proxy:!0}])}),e._v(" "),e.showVersionNameForm?t("NcModal",{attrs:{title:e.t("files_versions","Name this version")},on:{close:function(n){e.showVersionNameForm=!1}}},[t("form",{staticClass:"version-name-modal",on:{submit:function(n){return e.setVersionName(e.formVersionNameValue)}}},[t("label",[t("div",{staticClass:"version-name-modal__title"},[e._v(e._s(e.t("photos","Version name")))]),e._v(" "),t("NcTextField",{ref:"nameInput",attrs:{value:e.formVersionNameValue,placeholder:e.t("photos","Version name"),"label-outside":!0},on:{"update:value":function(n){e.formVersionNameValue=n}}})],1),e._v(" "),t("div",{staticClass:"version-name-modal__info"},[e._v("\n\t\t\t\t"+e._s(e.t("photos","Named versions are persisted, and excluded from automatic cleanups when your storage quota is full."))+"\n\t\t\t")]),e._v(" "),t("div",{staticClass:"version-name-modal__actions"},[t("NcButton",{attrs:{disabled:0===e.formVersionNameValue.trim().length},on:{click:function(n){return e.setVersionName("")}}},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Remove version name"))+"\n\t\t\t\t")]),e._v(" "),t("NcButton",{attrs:{type:"primary","native-type":"submit"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check")]},proxy:!0}],null,!1,2308323205)},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Save version name"))+"\n\t\t\t\t")])],1)])]):e._e()],1)}),[],!1,null,"6029157a",null).exports},data:function(){return{fileInfo:null,versions:[],loading:!1}},computed:{currentVersion:function(){return{fileId:this.fileInfo.id,title:"",fileName:this.fileInfo.filename,mimeType:this.fileInfo.mimeType,size:this.fileInfo.size,type:this.fileInfo.type,mtime:this.fileInfo.mtime,preview:(0,o.generateUrl)("/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0",{fileId:this.fileInfo.id,fileEtag:this.fileInfo.etag}),url:(0,a.RQ)("/remote.php/webdav",this.fileInfo.path,this.fileInfo.name),fileVersion:null}},orderedVersions:function(){return(e=this.versions,function(e){if(Array.isArray(e))return se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?se(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(e,n){return n.mtime-e.mtime}));var e}},methods:{update:function(e){var n=this;return re(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.fileInfo=e,n.resetState(),n.fetchVersions();case 3:case"end":return t.stop()}}),t)})))()},fetchVersions:function(){var e=this;return re(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loading=!0,n.next=4,y(e.fileInfo);case 4:e.versions=n.sent;case 5:return n.prev=5,e.loading=!1,n.finish(5);case 8:case"end":return n.stop()}}),n,null,[[0,,5,8]])})))()},handleRestore:function(e){var n=this;return re(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=ee({},n.fileInfo),n.fileInfo.size=e.size,n.fileInfo.mtime=e.mtime,i=n.versions.indexOf(e),n.versions.splice(i,1),r.prev=5,r.next=8,_(e);case 8:return(0,u.s$)(t("files_versions","Version restored")),r.next=11,n.fetchVersions();case 11:r.next=19;break;case 13:r.prev=13,r.t0=r.catch(5),n.fileInfo.size=s.size,n.fileInfo.mtime=s.mtime,n.versions.push(e),(0,u.x2)(t("files_versions","Could not restore version"));case 19:case"end":return r.stop()}}),r,null,[[5,13]])})))()},handleNameUpdate:function(e,n){return re(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=e.title,e.title=n,r.prev=2,r.next=5,V(e,n);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r.catch(2),e.title=s,(0,u.x2)(t("files_versions","Could not set version name"));case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},handleCreateVersion:function(e,n){var r=this;return re(regeneratorRuntime.mark((function s(){var i,o;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=ee(ee({},e),{},{title:n}),r.versions.push(i),s.prev=2,s.next=5,w(i);case 5:s.next=12;break;case 7:s.prev=7,s.t0=s.catch(2),o=r.versions.indexOf(i),r.versions.splice(o,1),(0,u.x2)(t("files_versions","Could not set version name"));case 12:case"end":return s.stop()}}),s,null,[[2,7]])})))()},handleDelete:function(e){var n=this;return re(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=n.versions.indexOf(e),n.versions.splice(s,1),r.prev=2,r.next=5,z(e);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r.catch(2),n.versions.push(e),(0,u.x2)(t("files_versions","Could not delete version"));case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},resetState:function(){this.$set(this,"versions",[])}}},oe=(0,K.Z)(ie,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[e.loading||e.currentVersion.mtime===e.orderedVersions[0].mtime?e._e():t("Version",{attrs:{version:e.currentVersion,"is-current":!0},on:{"name-update":e.handleCreateVersion}}),e._v(" "),e._l(e.orderedVersions,(function(n){return t("Version",{key:n.mtime,attrs:{version:n,"is-first-version":n===e.orderedVersions[e.orderedVersions.length-1]},on:{restore:e.handleRestore,"name-update":e.handleNameUpdate,delete:e.handleDelete}})}))],2)}),[],!1,null,null,null).exports,ae=r(34741),ue=r(27608);function le(e,n,t,r,s,i,o){try{var a=e[i](o),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,s)}s.ZP.prototype.t=i.translate,s.ZP.prototype.n=i.translatePlural,s.ZP.use(ae.default);var ce=s.ZP.extend(oe),fe=null;window.addEventListener("DOMContentLoaded",(function(){var e;void 0!==(null===(e=OCA.Files)||void 0===e?void 0:e.Sidebar)&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"version_vue",name:(0,i.translate)("files_versions","Version"),iconSvg:ue,mount:function(e,n,t){return(r=regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return fe&&fe.$destroy(),fe=new ce({parent:t}),r.next=4,fe.update(n);case 4:fe.$mount(e);case 5:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,s){var i=r.apply(e,n);function o(e){le(i,t,s,o,a,"next",e)}function a(e){le(i,t,s,o,a,"throw",e)}o(void 0)}))})();var r},update:function(e){fe.update(e)},destroy:function(){fe.$destroy(),fe=null},enabled:function(e){var n;return!(null===(n=null==e?void 0:e.isDirectory())||void 0===n||n)}}))}))},515:function(e,n,t){"use strict";var r=t(87537),s=t.n(r),i=t(23645),o=t.n(i)()(s());o.push([e.id,".version[data-v-6029157a]{display:flex;flex-direction:row}.version__info[data-v-6029157a]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.version__info__size[data-v-6029157a]{color:var(--color-text-lighter)}.version__image[data-v-6029157a]{width:3rem;height:3rem;border:1px solid var(--color-border);margin-right:1rem;border-radius:var(--border-radius-large)}.version-name-modal[data-v-6029157a]{display:flex;justify-content:space-between;flex-direction:column;height:250px;padding:16px}.version-name-modal__title[data-v-6029157a]{margin-bottom:12px;font-weight:600}.version-name-modal__info[data-v-6029157a]{margin-top:12px;color:var(--color-text-maxcontrast)}.version-name-modal__actions[data-v-6029157a]{display:flex;justify-content:space-between;margin-top:64px}","",{version:3,sources:["webpack://./apps/files_versions/src/components/Version.vue"],names:[],mappings:"AAwMA,0BACC,YAAA,CACA,kBAAA,CAEA,gCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,SAAA,CAEA,sCACC,+BAAA,CAIF,iCACC,UAAA,CACA,WAAA,CACA,oCAAA,CACA,iBAAA,CACA,wCAAA,CAIF,qCACC,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,YAAA,CACA,YAAA,CAEA,4CACC,kBAAA,CACA,eAAA,CAGD,2CACC,eAAA,CACA,mCAAA,CAGD,8CACC,YAAA,CACA,6BAAA,CACA,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.version {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\t&__info {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 0.5rem;\n\n\t\t&__size {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n\t&__image {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t\tborder: 1px solid var(--color-border);\n\t\tmargin-right: 1rem;\n\t\tborder-radius: var(--border-radius-large);\n\t}\n}\n\n.version-name-modal {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\theight: 250px;\n\tpadding: 16px;\n\n\t&__title {\n\t\tmargin-bottom: 12px;\n\t\tfont-weight: 600;\n\t}\n\n\t&__info {\n\t\tmargin-top: 12px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 64px;\n\t}\n}\n"],sourceRoot:""}]),n.Z=o},46700:function(e,n,t){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=46700},69862:function(){},40964:function(){}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=n,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=function(n,t,r,i){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,u=0;u<t.length;u++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](t[u])}))?t.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,r,i]},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,{a:n}),n},s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=1358,function(){s.b=document.baseURI||self.location.href;var e={1358:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,o=t[0],a=t[1],u=t[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(u)var c=u(s)}for(n&&n(t);l<o.length;l++)i=o[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),s.nc=void 0;var i=s.O(void 0,[7874],(function(){return s(23164)}));i=s.O(i)}();
//# sourceMappingURL=files_versions-files_versions.js.map?v=8faf42d537429fbecb88