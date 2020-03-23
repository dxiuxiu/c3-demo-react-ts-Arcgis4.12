// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/LayerView2D":function(){define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../layers/LayerView".split(" "),function(r,k,l,d,f,a,c){return function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.attached=!1;a.lastUpdateId=-1;a.moving=!1;a.updateRequested=!1;return a}l(b,c);b.prototype.initialize=function(){var a=this;this.when(function(){a.requestUpdate()});
var b=function(){return a.notifyChange("rendering")};this.handles.add([f.init(this,"suspended",function(b){a.container&&(a.container.visible=!b);a.view&&!b&&a.updateRequested&&a.view.requestLayerViewUpdate(a)},!0),f.init(this,"fullOpacity",function(b){a.container&&(a.container.opacity=b)},!0),f.on(this,"container","post-render",b),f.on(this,"container","will-render",b)])};b.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach());this.handles.remove("initialize");this.updateRequested=
!1;this.layer=null};Object.defineProperty(b.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0});b.prototype.isVisibleAtScale=function(a){var b=!0,c=this.layer,h=c.minScale,c=c.maxScale;if(null!=h&&null!=
c){var b=!h,d=!c;!b&&a<=h&&(b=!0);!d&&a>=c&&(d=!0);b=b&&d}return b};b.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))};b.prototype.processUpdate=function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(a)))};b.prototype.isUpdating=function(){return!1};b.prototype.isRendering=function(){return!1};
b.prototype.canResume=function(){var a=this.inherited(arguments);a&&(a=this.isVisibleAtScale(this.view.scale));return a};d([a.property()],b.prototype,"attached",void 0);d([a.property()],b.prototype,"container",void 0);d([a.property()],b.prototype,"moving",void 0);d([a.property({dependsOn:["attached","suspended","moving"]})],b.prototype,"rendering",null);d([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],b.prototype,"suspended",void 0);d([a.property({readOnly:!0})],b.prototype,
"updateParameters",void 0);d([a.property()],b.prototype,"updateRequested",void 0);d([a.property({dependsOn:["updateRequested","attached"]})],b.prototype,"updating",null);d([a.property()],b.prototype,"view",void 0);return b=d([a.subclass("esri.views.2d.layers.LayerView2D")],b)}(a.declared(c))})},"esri/views/2d/layers/support/popupUtils2D":function(){define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../geometry/Extent"],function(r,
k,l,d,f){Object.defineProperty(k,"__esModule",{value:!0});k.createQueryGeometry=function(a,c,d){var b=d.get("state.resolution"),b=c*("number"===typeof b?b:1);c=a.clone().offset(-b,-b);a=a.clone().offset(b,b);return new f({xmin:Math.min(c.x,a.x),ymin:Math.min(c.y,a.y),xmax:Math.max(c.x,a.x),ymax:Math.max(c.y,a.y),spatialReference:d.spatialReference})}})},"esri/views/layers/TileLayerView":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils ./RefreshableLayerView".split(" "),
function(r,k,l,d,f,a,c,q,b,h,g){return function(g){function m(a){return g.call(this,a)||this}l(m,g);m.prototype.fetchPopupFeatures=function(b){return a(this,void 0,void 0,function(){var d,g,m,l=this;return f(this,function(k){d=this.layer;if(!b)return[2,q.reject(new c("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:d}))];if("tile"!==d.type)return[2,q.reject(new c("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:d.type}))];g=this.get("view.scale");m=d.allSublayers.toArray().filter(function(a){var b=
0===a.minScale||g<=a.minScale,c=0===a.maxScale||g>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&b&&c});return[2,q.eachAlways(m.map(function(c){return a(l,void 0,void 0,function(){var a,d,e,n;return f(this,function(p){switch(p.label){case 0:return a=c.createQuery(),d=h.calculateTolerance(c.renderer),a.geometry=this.createFetchPopupFeaturesQueryGeometry(b,d),e=a,[4,c.popupTemplate.getRequiredFields()];case 1:return e.outFields=p.sent(),[4,c.queryFeatures(a)];case 2:return n=p.sent(),
[2,n.features]}})})})).then(function(a){return[].concat.apply([],a.map(function(a){return a.value}).filter(Boolean))})]})})};d([b.property()],m.prototype,"layer",void 0);return m=d([b.subclass("esri.views.layers.TileLayerView")],m)}(b.declared(g))})},"esri/renderers/support/clickToleranceUtils":function(){define(["require","exports"],function(r,k){function l(a,c){return c&&c.xoffset?Math.max(a,Math.abs(c.xoffset)):c&&c.yoffset?Math.max(a,Math.abs(c.yoffset)):a}function d(a,c){if("number"===typeof a)return a;
if(a&&a.stops&&a.stops.length){a=a.stops;for(var d=c=0,b=0;b<a.length;b++){var h=a[b].size;"number"===typeof h&&(c+=h,d++)}return c/d}return c}function f(a,c){if(!c)return a;c=c.filter(function(a){return"size"===a.type}).map(function(b){var c=b.minSize;return(d(b.maxSize,a)+d(c,a))/2});for(var f=0,b=c.length,h=0;h<b;h++)f+=c[h];return Math.max(Math.floor(f/b),a)}Object.defineProperty(k,"__esModule",{value:!0});k.calculateTolerance=function(a){if(!a)return 6;var c="visualVariables"in a?f(6,a.visualVariables):
6;if("simple"===a.type)return l(c,a.symbol);if("unique-value"===a.type){var d=c;a.uniqueValueInfos.forEach(function(a){d=l(d,a.symbol)});return d}if("class-breaks"===a.type){var b=c;a.classBreakInfos.forEach(function(a){b=l(b,a.symbol)});return b}return c}})},"esri/views/layers/RefreshableLayerView":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators".split(" "),
function(r,k,l,d,f,a,c,q,b){return function(c){function g(){var b=null!==c&&c.apply(this,arguments)||this;b.refreshTimestamp=null;b.refreshDebounced=q.debounce(function(c,d){return a(b,void 0,void 0,function(){var a;return f(this,function(b){switch(b.label){case 0:return"number"===typeof c?a=c:(a=Date.now(),d=c),this._set("refreshTimestamp",a),this.doRefresh?[4,this.doRefresh(d)]:[3,2];case 1:b.sent(),b.label=2;case 2:return[2]}})})},2E3);return b}l(g,c);g.prototype.refresh=function(a){void 0===a&&
(a=Date.now());this._set("refreshTimestamp",a);this.doRefresh&&this.doRefresh()};d([b.property()],g.prototype,"layer",void 0);d([b.aliasOf("layer.refreshInterval")],g.prototype,"refreshInterval",void 0);d([b.property({readOnly:!0})],g.prototype,"refreshTimestamp",void 0);return g=d([b.subclass("esri.layers.mixins.RefreshableLayerView")],g)}(b.declared(c))})},"*noref":1}});
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine ./LayerView2D ./support/popupUtils2D ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/TileLayerView".split(" "),function(r,k,l,d,
f,a,c,q,b,h,g,m,t,u,v,w,x,y,z){var A=q.getLogger("esri.views.2d.layers.TileLayerView2D"),B=[0,0];return function(k){function e(){var a=null!==k&&k.apply(this,arguments)||this;a._tileStrategy=null;a._tileInfoView=null;a._fetchQueue=null;a.container=new m.BitmapContainer;a.layer=null;return a}l(e,k);e.prototype.initialize=function(){var a=this,b=this.layer.tileInfo,b=b&&b.spatialReference,d;b||(d=new c("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));
b.equals(this.view.spatialReference)||(d=new c("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}));this.watch("resampling",function(b){a.refresh()});d&&this.addResolvingPromise(h.reject(d))};Object.defineProperty(e.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!0,configurable:!0});e.prototype.hitTest=function(a,b){return null};e.prototype.update=
function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};e.prototype.attach=function(){var a=this,b="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new v(this.layer.tileInfo,this.layer.fullExtent);this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:b&&10*b.length||10,process:function(b,c){return a.fetchTile(b,c)}});this._tileStrategy=new y({cachePolicy:"keep",
resampling:this.resampling,acquireTile:function(b){return a.acquireTile(b)},releaseTile:function(b){return a.releaseTile(b)},tileInfoView:this._tileInfoView})};e.prototype.detach=function(){this._tileStrategy.destroy();this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};e.prototype.moveStart=function(){this.requestUpdate()};e.prototype.viewChange=function(){this.requestUpdate()};e.prototype.moveEnd=function(){this.requestUpdate()};
e.prototype.createFetchPopupFeaturesQueryGeometry=function(a,b){return u.createQueryGeometry(a,b,this.view)};e.prototype.doRefresh=function(b){return a(this,void 0,void 0,function(){var a=this;return f(this,function(b){if(this.updateRequested||this.suspended)return[2];this._fetchQueue.reset();this._tileStrategy.tiles.forEach(function(b){return a._enqueueTileFetch(b)});this.notifyChange("updating");return[2]})})};e.prototype.isUpdating=function(){return 0<this._fetchQueue.length};e.prototype.getTileBounds=
function(a,b){return this._tileInfoView.getTileBounds(a,b)};e.prototype.getTileCoords=function(a,b){return this._tileInfoView.getTileCoords(a,b)};e.prototype.getTileResolution=function(a){return this._tileInfoView.getTileResolution(a)};e.prototype.acquireTile=function(a){var b=m.BitmapTile.pool.acquire();b.key.set(a);a=this._tileInfoView.getTileCoords(B,b.key);b.x=a[0];b.y=a[1];b.resolution=this._tileInfoView.getTileResolution(b.key);a=this._tileInfoView.tileInfo.size;b.width=a[0];b.height=a[1];this._enqueueTileFetch(b);
this.requestUpdate();return b};e.prototype.releaseTile=function(a){var b=this;this._fetchQueue.abort(a.key.id);this.container.removeChild(a);a.once("detach",function(){m.BitmapTile.pool.release(a);b.requestUpdate()});this.requestUpdate()};e.prototype.fetchTile=function(c,d){return a(this,void 0,void 0,function(){var a,e,g,n,p,k;return f(this,function(f){switch(f.label){case 0:a="tilemapCache"in this.layer?this.layer.tilemapCache:null;e=!b.isNone(d)&&d.signal;if(a)return[3,4];f.label=1;case 1:return f.trys.push([1,
3,,4]),[4,this._fetchImage(c,e)];case 2:return[2,f.sent()];case 3:g=f.sent();if(!h.isAbortError(g)&&!this.resampling)return[2,this._createBlankImage()];throw g;case 4:n=w.pool.acquire(),f.label=5;case 5:return f.trys.push([5,8,,10]),[4,a.fetchAvailabilityUpsample(c.level,c.row,c.col,n)];case 6:return f.sent(),n.level===c.level||this.resampling?[4,this._fetchImage(n,e)]:[2,this._createBlankImage()];case 7:return p=f.sent(),[3,10];case 8:k=f.sent();if(h.isAbortError(k))throw k;return[4,this._fetchImage(c,
e)];case 9:return p=f.sent(),[3,10];case 10:return this.resampling&&n.level!==c.level?[2,this._resampleImage(p,n.level,n.row,n.col,c.level,c.row,c.col)]:[2,p]}})})};e.prototype._enqueueTileFetch=function(b){return a(this,void 0,void 0,function(){var a,c,d=this;return f(this,function(e){switch(e.label){case 0:if(this._fetchQueue.has(b.key.id))return[2];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this._fetchQueue.push(b.key)];case 2:return a=e.sent(),b.source=a,b.width=this._tileInfoView.tileInfo.size[0],
b.height=this._tileInfoView.tileInfo.size[1],b.once("attach",function(){return d.requestUpdate()}),this.container.addChild(b),[3,4];case 3:return c=e.sent(),h.isAbortError(c)||A.error(c),[3,4];case 4:return this.requestUpdate(),[2]}})})};e.prototype._fetchImage=function(b,c){return a(this,void 0,void 0,function(){return f(this,function(a){return[2,this.layer.fetchTile(b.level,b.row,b.col,{timestamp:this.refreshTimestamp,signal:c})]})})};e.prototype._resampleImage=function(a,b,c,d,e,f,g){var k=this._tileInfoView.tileInfo.size,
h=this._tileInfoView.getTileResolution(b),l=this._tileInfoView.getTileResolution(e);e=this._tileInfoView.getLODInfoAt(e);g=e.getXForColumn(g);f=e.getYForRow(f);e=this._tileInfoView.getLODInfoAt(b);b=e.getXForColumn(d);d=e.getYForRow(c);c=Math.round((g-b)/h);b=Math.round(-(f-d)/h);d=Math.round(l/h*k[0]);h=Math.round(l/h*k[1]);l=this._createBlankImage();l.getContext("2d").drawImage(a,c,b,d,h,0,0,k[0],k[1]);return l};e.prototype._createBlankImage=function(){var a=this._tileInfoView.tileInfo.size,b=document.createElement("canvas");
b.width=a[0];b.height=a[1];return b};d([g.property({dependsOn:["layer.resampling?"]})],e.prototype,"resampling",null);return e=d([g.subclass("esri.views.2d.layers.TileLayerView2D")],e)}(g.declared(t,z))});