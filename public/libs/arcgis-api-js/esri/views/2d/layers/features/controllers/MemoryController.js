// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../geometry ../../../../../core/Logger ../../../../../core/promiseUtils ../../../../../core/workers ../../../../../core/accessorSupport/decorators ../../../../../geometry/support/spatialReferenceUtils ../../../../../layers/graphics/featureConversionUtils ../../../engine ./BaseController ../support/TileUpdateQueue".split(" "),
function(t,u,z,p,v,w,x,A,B,q,C,l,y,m,n,D,E){Object.defineProperty(u,"__esModule",{value:!0});var F=B.getLogger("esri.views.2d.layers.features.controllers.MemoryController");t=function(r){function d(){var a=null!==r&&r.apply(this,arguments)||this;a.type="memory";return a}z(d,r);d.prototype.initialize=function(){var a=this;this._tileQueue=new E.default({tileInfoView:this.tileStore.tileScheme,process:function(c,f,e){return a._fetchFeatureSet(c,f,e)}});this._memorySource=C.openWithPorts(this.service.source,
{client:this});this.refresh();this._tileQueue.resume()};d.prototype.destroy=function(){this._memorySource.close();this._memorySource=null;this._tileQueue.clear();this._tileQueue.pause()};Object.defineProperty(d.prototype,"updating",{get:function(){return this._tileQueue.updating},enumerable:!0,configurable:!0});d.prototype.update=function(a,c){return x(this,void 0,void 0,function(){var f,e=this;return w(this,function(b){switch(b.label){case 0:return this.validateConfig(a,c),f=this.renderer.getAttributeHash(),
this._set("config",a),[4,this.updatePixelBuffer()];case 1:return b.sent(),c?f===this.renderer.getAttributeHash()?[3,3]:[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,5];case 2:b.sent(),b.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return b.sent(),this.refresh(),[2];case 5:return"heatmap"===this.renderer.type?[2]:f===this.renderer.getAttributeHash()?[3,8]:[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)];case 6:return b.sent(),
[4,q.all(this.tileStore.tiles.map(function(a){return e._updateTileAttrData(a)}))];case 7:b.sent(),b.label=8;case 8:return[4,this.attributeStore.updateFilters(this)];case 9:return b.sent(),[4,this.attributeStore.sendUpdates()];case 10:return b.sent(),[2]}})})};d.prototype.invalidate=function(){this.refresh()};d.prototype.onEdits=function(a){this.refresh()};d.prototype.queryFeatures=function(a){return this._memorySource.invoke("queryFeatures",a)};d.prototype.queryFeatureCount=function(a){return this._memorySource.invoke("queryFeatureCount",
a)};d.prototype.queryObjectIds=function(a){return this._memorySource.invoke("queryObjectIds",a)};d.prototype.queryExtent=function(a){return this._memorySource.invoke("queryExtent",a)};d.prototype.redraw=function(){this.refresh()};d.prototype.refresh=function(){this._tileQueue.refresh();for(var a=0,c=this.tileStore.tiles;a<c.length;a++){var f=c[a];this._tileQueue.push(f.id,f.updateTimestamp)}};d.prototype.setViewState=function(a){this.inherited(arguments);this._tileQueue.state=a};d.prototype.onTileUpdate=
function(a){this._tileQueue.pause();for(var c=0,f=a.removed;c<f.length;c++){var e=f[c];this._tileQueue.abort(e.id)}c=0;for(a=a.added;c<a.length;c++)e=a[c],this._tileQueue.push(e.id,e.updateTimestamp);this.processor&&this._tileQueue.resume()};d.prototype._updateTileAttrData=function(a){return x(this,void 0,void 0,function(){var c,f,e,b,h,k;return w(this,function(g){switch(g.label){case 0:return[4,this._query(a,this.queryInfo)];case 1:c=g.sent();f=m.convertFromFeatureSet(c,this.service.objectIdField);
f=m.hydrateOptimizedFeatureSet(f);e=0;for(b=f.features;e<b.length;e++)h=b[e],k=this.attributeStore.createLocalId(h.objectId),this.attributeStore.setAttributeData(k,h,this.geometryInfo,this.viewParams);return[2]}})})};d.prototype._fetchFeatureSet=function(a,c,f){var e=this,b=this.tileStore.get(a),h=this.queryInfo;return this._query(b,h,f).then(function(a){return e._wrapPoints(a,h)}).then(function(a){return e._sortFeatures(a,h)}).then(function(a){return a.features.length?a:null}).then(function(a){b.updateTimestamp=
c;return e.processor.onTileData(b,{addOrUpdate:a&&a.features,clear:!0,transformParams:a&&n.Utils.getTransformParams(a)},f)}).catch(function(a){b.updateTimestamp=c;q.isAbortError(a)||(e.processor.onTileError(b,a.message,f),F.error("query-error",{error:a}));return q.reject(a)})};d.prototype._query=function(a,c,f){var e=this,b=this._pixelBuffer*a.resolution,h=a.bounds.slice();h[0]-=b;h[1]-=b;h[2]+=b;h[3]+=b;b=A.Extent.fromBounds(h,this.spatialReference);a=this._createQuery(b,a.extent,a.resolution,this.queryInfo);
return this.queryFeatures(a.toJSON()).then(function(a){a.features=c.returnCentroid?a.features.filter(function(a){return null!=a.geometry&&null!=a.centroid}):a.features.filter(function(a){return null!=a.geometry});return a}).then(function(a){return e._applyProcessing(a,f)}).then(function(a){for(var b=m.convertFromFeatureSet(a,e.service.objectIdField),b=m.hydrateOptimizedFeatureSet(b),c=0;c<a.features.length;c++){var f=a.features[c],h=b.features[c],d=e.attributeStore.getLocalId(h.objectId);null==d&&
(d=e.attributeStore.createLocalId(h.objectId));f.localId=d;e.attributeStore.setAttributeData(d,h,e.geometryInfo,e.viewParams)}e.attributeStore.sendUpdates();return a})};d.prototype._wrapPoints=function(a,c){if(0===a.features.length)return a;var f=c.returnCentroid;c=this._pixelBuffer;var e=a.geometryType,b=a.spatialReference,d=a.transform;if("esriGeometryPoint"!==e&&"esriGeometryMultipoint"!==e&&!f||!y.isWrappable(b))return a;f=a.features;b=y.getInfo(b);d=Math.round((b.valid[1]-b.valid[0])/d.scale[0]);
if(d===n.definitions.TILE_SIZE){b=[];for(e=0;e<f.length;e++){var k=f[e],g=k.geometry,k=k.attributes;g&&(g.x<c?(g={geometry:v({},g),attributes:k},g.geometry.x+=d,b.push(g)):g.x>n.definitions.TILE_SIZE-c&&(g={geometry:v({},g),attributes:k},g.geometry.x-=d,b.push(g)))}f.push.apply(f,b)}else for(b=0;b<f.length;b++)if(g=f[b].geometry)g.x<-c?g.x+=d:g.x>n.definitions.TILE_SIZE+c&&(g.x-=d);return a};d.prototype._sortFeatures=function(a,c){if(c=c.orderByFields){c=c[0].split(" ");var d=c[0];"DESC"===c[1]&&
a.features.sort(function(a,b){return b.attributes[d]-a.attributes[d]})}return a};p([l.property()],d.prototype,"_tileQueue",void 0);p([l.property({dependsOn:["_tileQueue.updating"]})],d.prototype,"updating",null);return d=p([l.subclass("esri.views.2d.layers.features.controllers.MemoryController")],d)}(l.declared(D.default));u.default=t});