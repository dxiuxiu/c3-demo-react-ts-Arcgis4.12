// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Accessor ../../core/arrayUtils ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/support/heightModelInfoUtils ../../geometry/support/webMercatorUtils @dojo/framework/shim/Promise".split(" "),function(t,D,u,h,v,w,x,k,y,z,A,B,g,p,q){function l(g){return g?
JSON.stringify(g.toJSON()):"undefined"}function r(g){switch(g){case 0:return"Waiting";case 1:return"Found";case 2:return"Exhausted"}return"Unknown: "+g}var C=z.getLogger("esri.views.support.DefaultsFromMap");return function(m){function c(){var a=null!==m&&m.apply(this,arguments)||this;a._handles=new y;a._waitTask=null;a._extentProjectController=null;a._isStarted=!1;a._spatialReferenceCandidates=null;a._extentCandidates=null;a.logDebugInformation=!1;a.isSpatialReferenceDone=!1;a.isTileInfoDone=!1;
a.isHeightModelInfoSearching=!1;a.spatialReference=null;a.extent=null;a.heightModelInfo=null;a.vcsWkid=null;a.latestVcsWkid=null;a.mapCollectionPaths=n.DefaultMapCollectionPaths.slice();a.tileInfo=null;return a}u(c,m);n=c;c.prototype.initialize=function(){var a=this;this.watch("mapCollectionPaths",function(){a._isStarted&&(a.reset(),a.start())})};c.prototype.destroy=function(){this._set("view",null);this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1);this._cancelLoading()};
c.prototype.reset=function(){this._handles.removeAll();this._isStarted=!1;this._set("isSpatialReferenceDone",!1);this._set("isTileInfoDone",!1);this._set("isHeightModelInfoSearching",!1);this._set("spatialReference",null);this._set("extent",null);this._set("heightModelInfo",null);this._set("vcsWkid",null);this._set("latestVcsWkid",null);this._set("tileInfo",null);this._extentCandidates=this._spatialReferenceCandidates=null};c.prototype.start=function(){this._handles.removeAll();this._isStarted=!0;
for(var a=this._updateLayerChange.bind(this),b=0,d=this.mapCollectionPaths;b<d.length;b++)this._handles.add(B.on(this.view,"map."+d[b],"change",a,a,a,!0))};c.prototype._ownerNameFromCollectionName=function(a){var b=a.lastIndexOf(".");return-1===b?"view":"view."+a.slice(0,b)};c.prototype._ensureLoadedOwnersFromCollectionName=function(a){for(var b=this._ownerNameFromCollectionName(a).split("."),d,f=0;f<b.length;f++){d=this.get(b.slice(0,f+1).join("."));if(!d)break;if(d.load&&!d.isFulfilled())return{collectionName:a,
owner:null,loading:d.load()}}return{collectionName:a,owner:d}};c.prototype._cancelLoading=function(){this._waitTask=null;this._extentProjectController&&(this._extentProjectController.abort(),this._extentProjectController=null)};c.prototype._updateWhen=function(a){var b=this,d=!0,f=!1,e=a.catch(function(a){}).then(function(){d?f=!0:e===b._waitTask&&b._update()}),d=!1;f||(this._waitTask=e);return f};c.prototype._updateLayerChange=function(){this.isSpatialReferenceDone&&!this.spatialReference&&this._set("isSpatialReferenceDone",
!1);this._update()};c.prototype._update=function(){var a=this;this._cancelLoading();if(this.view){if(!this.isSpatialReferenceDone){this._debugLog("Starting search for spatial reference...");var b=this._processMapCollections(function(b){return a._processSpatialReferenceSource(b)});this._debugLog("Search ended with status '"+r(b)+"'");if(0!==b){var d=null,b=this._spatialReferenceCandidates;!b||1>b.length?(d=this.defaultSpatialReference,this._debugLog("No spatial reference found, locking to default ("+
l(d)+")")):(this.defaultSpatialReference&&1<b.length&&-1<k.findIndex(b,function(b){return b.equals(a.defaultSpatialReference)})&&(b=[this.defaultSpatialReference]),d=b[0],this._debugLog("Locking to "+l(d)));this._set("spatialReference",d);this._set("isSpatialReferenceDone",!0);d&&(b=this.logDebugInformation,this.logDebugInformation=!1,this._processMapCollections(function(b){return a._findExtent(b,d)}),this.extent||this._projectExtentCandidate(),this.logDebugInformation=b)}}null==this.heightModelInfo&&
this.view.isHeightModelInfoRequired&&(this._debugLog("Starting search for height model info..."),b=this._processMapCollections(function(b){return a._processHeightModelInfoSource(b)},function(a){return p.mayHaveHeightModelInfo(a)}),this._debugLog("Search ended with status "+r(b)),this._set("isHeightModelInfoSearching",0===b));null==this.tileInfo&&(b=!1,this.view.isTileInfoRequired()&&(b=this._deriveTileInfo()),b||this._set("isTileInfoDone",!0))}};c.prototype._processMapCollections=function(a,b){var d=
this;this._preloadMapCollections(b);var f=2;this._forAllMapCollectionSources(function(a){if(2!==f)return!1;d._debugLog("Processing collection "+a.collectionName+"...");if(a.loading&&!d._updateWhen(a.loading))return d._debugLog("Collection "+a.collectionName+" owner is loading -\x3e wait"),f=0,!1},function(e){if(2!==f)return!1;if(null!=b&&!b(e))return d._debugLog("Source "+e.id+" is skipped due to predicate"),!1;if(e.load&&!e.isFulfilled()&&!d._updateWhen(e.load()))return d._debugLog("Source "+e.id+
" is loading -\x3e wait"),f=0,!1;if((!e.load||e.isResolved())&&a(e))return f=1,!1});return f};c.prototype._preloadMapCollections=function(a){var b=this,d=10,f=this.logDebugInformation;this.logDebugInformation=!1;this._forAllMapCollectionSources(function(a){return!0},function(e){if(0===d||null!=a&&!a(e))return!1;e.load&&!e.isFulfilled()&&(b.logDebugInformation=f,b._debugLog("Pre-loading source "+e.id),b.logDebugInformation=!1,e.load(),d--)});this.logDebugInformation=f};c.prototype._forAllMapCollectionSources=
function(a,b){for(var d=0,f=this.mapCollectionPaths;d<f.length;d++){var e="map."+f[d],c=this._ensureLoadedOwnersFromCollectionName(e);!1!==a(c)&&(c=c.owner,!c||c.isRejected&&c.isRejected()?this._debugLog("Collection "+e+" owner is invalid or rejected -\x3e skip"):(c=this.view.get(e))?this._forEachSource(c,b):this._debugLog("Collection "+e+" does not exist -\x3e skip"))}};c.prototype._forEachSource=function(a,b){var d=0;for(a=a.items;d<a.length;d++){var c=a[d];!1!==b(c)&&"layers"in c&&this._forEachSource(c.layers,
b)}};c.prototype._processSpatialReferenceSource=function(a){var b=this._getSupportedSpatialReferences(a);if(0===b.length)return!1;this._spatialReferenceCandidates?(b=k.intersect(b,this._spatialReferenceCandidates,function(a,b){return a.equals(b)}),0<b.length?this._spatialReferenceCandidates=b:this._debugLog("Layer "+a.id+" is ignored because its supported spatial\n          references are not compatible with the previous candidates")):this._spatialReferenceCandidates=b;return 1===this._spatialReferenceCandidates.length};
c.prototype._findExtent=function(a,b){var d="fullExtents"in a&&a.fullExtents||(a.fullExtent?[a.fullExtent]:[]),c=k.find(d,function(a){return a.spatialReference.equals(b)});if(c)return this._set("extent",c),!0;0<this._getSupportedSpatialReferences(a).length&&(d=d.map(function(b){return{extent:b,layer:a}}),this._extentCandidates=(this._extentCandidates||[]).concat(d));return!1};c.prototype._projectExtentCandidate=function(){return w(this,void 0,void 0,function(){var a,b,d,c,e;return v(this,function(f){switch(f.label){case 0:if(!this._extentCandidates||
!this._extentCandidates.length)return[2];a=this.spatialReference;b=k.find(this._extentCandidates,function(b){return q.canProject(b.extent.spatialReference,a)});if(!b)return[3,1];this._set("extent",q.project(b.extent,a));return[3,7];case 1:return d=this._extentCandidates[0],this._extentProjectController=A.createAbortController(),[4,new Promise(function(a,b){t(["../../portal/support/geometryServiceUtils"],a,b)})];case 2:c=f.sent(),f.label=3;case 3:return f.trys.push([3,5,,6]),[4,c.projectGeometry(d.extent,
a,d.layer.portalItem,this._extentProjectController.signal)];case 4:return e=f.sent(),this._set("extent",e),[3,6];case 5:return f.sent(),[3,6];case 6:this._extentProjectController=null,f.label=7;case 7:return[2]}})})};c.prototype._getSupportedSpatialReferences=function(a){var b=this,d="supportedSpatialReferences"in a&&a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===d.length)return this._debugLog("Layer "+a.id+" is ignored because it does not have any spatial references"),
[];d=d.filter(function(d){return b.view.isSpatialReferenceSupported(d,a,function(a){return b._debugLog(a)})});0===d.length?this._debugLog("Layer "+a.id+" has spatial references but none of them are supported (or layer doesn't require locking)"):this._debugLog("Layer "+a.id+" has spatial references. Resulting candidate set: "+d.map(l).join(", "));return d};c.prototype._processHeightModelInfoSource=function(a){var b=p.deriveHeightModelInfoFromLayer(a);return b?(this._set("heightModelInfo",b),this._set("isHeightModelInfoSearching",
!1),a.spatialReference&&(this._set("vcsWkid",a.spatialReference.vcsWkid),this._set("latestVcsWkid",a.spatialReference.latestVcsWkid)),!0):!1};c.prototype._deriveTileInfo=function(){if(!this.isSpatialReferenceDone)return!0;var a=this.get("view.map");if(!a)return!0;var b=a.basemap,d=b&&b.get("baseLayers.0"),a=a.get("layers.0"),c=!1,e=null;b&&"failed"!==b.loadStatus?b.loaded?d&&"failed"!==d.loadStatus?d.loaded?e="tileInfo"in d&&d.tileInfo:(this._updateWhen(d.load()),c=!0):a&&"failed"!==a.loadStatus?
a.loaded?e="tileInfo"in a&&a.tileInfo:(this._updateWhen(a.load()),c=!0):c=!0:(this._updateWhen(b.load()),c=!0):a&&"failed"!==a.loadStatus&&(a.loaded?e="tileInfo"in a&&a.tileInfo:(this._updateWhen(a.load()),c=!0));e&&!e.spatialReference.equals(this.spatialReference)&&(e=null);c||this._set("tileInfo",e);return c};c.prototype._debugLog=function(a){this.logDebugInformation&&C.info(a)};var n;c.DefaultMapCollectionPaths=["basemap.baseLayers","layers","ground.layers","basemap.referenceLayers"];h([g.property()],
c.prototype,"logDebugInformation",void 0);h([g.property({readOnly:!0})],c.prototype,"isSpatialReferenceDone",void 0);h([g.property({readOnly:!0})],c.prototype,"isTileInfoDone",void 0);h([g.property({readOnly:!0})],c.prototype,"isHeightModelInfoSearching",void 0);h([g.property({constructOnly:!0})],c.prototype,"view",void 0);h([g.property({readOnly:!0})],c.prototype,"spatialReference",void 0);h([g.property({readOnly:!0})],c.prototype,"extent",void 0);h([g.property({readOnly:!0})],c.prototype,"heightModelInfo",
void 0);h([g.property({readOnly:!0})],c.prototype,"vcsWkid",void 0);h([g.property({readOnly:!0})],c.prototype,"latestVcsWkid",void 0);h([g.property()],c.prototype,"mapCollectionPaths",void 0);h([g.property()],c.prototype,"defaultSpatialReference",void 0);h([g.property({readOnly:!0})],c.prototype,"tileInfo",void 0);return c=n=h([g.subclass("esri.views.support.DefaultsFromMap")],c)}(g.declared(x))});