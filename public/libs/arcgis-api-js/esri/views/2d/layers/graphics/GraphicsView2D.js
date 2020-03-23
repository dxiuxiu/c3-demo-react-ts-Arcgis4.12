// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/HandleOwner ../../../../core/Identifiable ../../../../core/MapPool ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/jsonUtils ../../../../geometry/support/spatialReferenceUtils ../../../../layers/graphics/data/projectionSupport ../../../../symbols/support/cimSymbolUtils ../../../../symbols/support/defaults ../../engine ../features/support/AttributeStore ../features/support/TileStore ./GraphicContainer ./GraphicProcessingQueue ./GraphicStore ./graphicsUtils ../../../layers/GraphicsView".split(" "),
function(w,D,K,t,W,y,z,x,L,M,E,F,l,N,O,q,P,r,p,A,G,H,B,u,Q,R,S,T,U,I,V){function C(l,d,a){if(a.has(l))return a.get(l);d={tile:d,addedOrModified:[],removed:[]};a.set(l,d);return d}Object.defineProperty(D,"__esModule",{value:!0});w=function(w){function d(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=w.apply(this,a)||this;a._tiles=new Map;a._graphicStoreUpdate=!1;a._graphicsSet=new Set;a._matcher=l.resolve(null);a._tileUpdateSet=new Set;a._tilesToUpdate=new Map;a._graphicIdToAbortController=
new Map;a._pendingUpdates=0;a._attached=!1;a.lastUpdateId=-1;a.updateRequested=!1;a.graphicUpdateHandler=a.graphicUpdateHandler.bind(a);a.addOrUpdateGraphic=a.addOrUpdateGraphic.bind(a);a._processAnalyzedGraphics=a._processAnalyzedGraphics.bind(a);a._graphicsChangeHandler=a._graphicsChangeHandler.bind(a);return a}K(d,w);d.prototype.initialize=function(){var a=this;this._tileStore=new R.default(this.view.featuresTilingScheme);this.container=new S.default({tileInfoView:this.view.featuresTilingScheme,
localToGlobalId:function(b){return a._attributeStore.getFeatureId(b)}});this._attributeStore=new Q.default({type:"local",initialize:function(b){return l.resolve(a.container.attributeView.initialize(b))},update:function(b){return x.safeCast(a.container.attributeView.requestUpdate(b))},render:function(){return a.container.requestRender()}});this._graphicStore=new U.default(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,function(b){var c=a._attributeStore.createLocalId(b.uid);
a._attributeStore.setData(c,0,0,b.visible?1:0)},function(b){a._attributeStore.freeLocalId(b.uid)});this._graphicProcessingQueue=new T.default({process:this.addOrUpdateGraphic});var b=new u.WGLTemplateStore(this.container.getMaterialItems),c=this._tileStore.tileScheme.tileInfo;this.renderer&&(this._matcher=u.createMatcher(this.renderer,b,null));this._meshFactory=new u.WGLMeshFactory(null,this.uid,null,b,null,c);this.watch("renderer",function(c){c&&(a._matcher=u.createMatcher(a.renderer,b,null))});
this._tileStore.on("update",this._onTileUpdate.bind(this));this.container.on("attach",function(){0<a.graphics.items.length&&a._graphicsChangeHandler({target:a.graphics,added:a.graphics.items,removed:[],moved:[]});a.handles.add(a.graphics.on("change",a._graphicsChangeHandler),"graphics");a._attached=!0;a.notifyChange("updating")});this.container.on("detach",function(){a._graphicProcessingQueue&&a._graphicProcessingQueue.clear()})};d.prototype.destroy=function(){this.container.dispose();this._set("graphics",
null);this._graphicProcessingQueue&&(this._graphicProcessingQueue.destroy(),this._graphicProcessingQueue=null);this._graphicStore.clear();this._tileStore.destroy();this._attributeStore=null};Object.defineProperty(d.prototype,"updating",{get:function(){return!this._attached||0!==this._pendingUpdates||this._graphicProcessingQueue.updating||0<this._tileUpdateSet.size||0<this._tilesToUpdate.size},enumerable:!0,configurable:!0});d.prototype.install=function(a){a.addChild(this.container)};d.prototype.uninstall=
function(a){a.removeChild(this.container)};d.prototype.hitTest=function(a,b){if(!this.view||!this.view.position)return l.resolve();a=this.view.toMap(O.createScreenPoint(a,b));return this.searchFeatures(a).then(function(a){return a&&a.length?a[0]:null})};d.prototype.searchFeatures=function(a,b){var c=this;void 0===b&&(b=2);return l.create(function(f){f(c._graphicStore.hitTest(a.x,a.y,b,c.view.state.resolution,c.view.state.rotation))})};d.prototype.update=function(a){a=a.state;var b=this.view.featuresTilingScheme.getClosestInfoForScale(a.scale).level;
this._graphicStore.updateLevel(b);this._tileStore.setViewState(a);this._graphicStoreUpdate=!0;this.updateRequested=!1};d.prototype.viewChange=function(){this.requestUpdate()};d.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))};d.prototype.processUpdate=function(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))};d.prototype.graphicUpdateHandler=function(a){var b=a.newValue,c=a.graphic;switch(a.property){case "geometry":case "symbol":this._graphicProcessingQueue.push(c,
"update");break;case "visible":this._setVisible(c.uid,b),this._attributeStore.sendUpdates()}};d.prototype.highlight=function(a){return this.container.highlight(a)};d.prototype._getIntersectingTiles=function(a){return(a=this._graphicStore.getBounds(a))&&0!==r.width(a)&&0!==r.height(a)?this._tileStore.boundsIntersections(a):[]};d.prototype._updateTile=function(a){var b=this,c=a.tile,f=this._getGraphicsData(c,a.addedOrModified);return x.safeCast(this._processGraphics(c.key,f)).then(function(f){b._patchTile(c.key,
{addOrUpdate:f,remove:a.removed});return f})};d.prototype._graphicsChangeHandler=function(a){var b=this;this._pendingUpdates++;this.notifyChange("updating");if(!this._graphicStoreUpdate){var c=this.view.state,f=this.view.featuresTilingScheme.getClosestInfoForScale(c.scale).level;this._graphicStore.updateLevel(f);this._tileStore.setViewState(c)}var d=a.added,f=a.removed;a=a.moved;for(var g=this._tilesToUpdate,e,c=[],n=Array(d.length),m=0;m<d.length;m++){var k=d[m];n[m]=k;this._graphicsSet.add(k);c.push(this.addGraphic(k))}for(m=
0;m<f.length;m++){k=f[m];this._abortProcessingGraphic(k.uid);for(var d=this._getIntersectingTiles(k),v=0,J=d;v<J.length;v++)d=J[v],e=d.key.id,d=C(e,d,g),d.removed.push(this._attributeStore.getLocalId(k.uid));this._graphicsSet.delete(k);this._graphicStore.remove(k)}for(f=0;f<a.length;f++)for(m=a[f],d=this._getIntersectingTiles(m),k=0,v=d;k<v.length;k++)d=v[k],e=d.key.id,d=C(e,d,g),d.addedOrModified.push(m);l.all(c).then(function(){for(var a,c=0;c<n.length;c++){a=n[c];for(var d=0,f=b._getIntersectingTiles(a);d<
f.length;d++){var h=f[d];e=h.key.id;C(e,h,g).addedOrModified.push(a)}}b._graphicStore.updateZ();var k=[];g.forEach(function(a){return k.push(b._updateTile(a))});return l.all(k).then(function(){g.clear();b._pendingUpdates--;b.notifyChange("updating")})}).catch(function(){g.clear();b._pendingUpdates--;b.notifyChange("updating")})};d.prototype._getSymbolResources=function(a,b){return z(this,void 0,void 0,function(){var c,d,h,g,e,n,m,k;return y(this,function(f){switch(f.label){case 0:return this.container.attached?
(c=F.isSome(a.symbol)?a.symbol:null)?[3,3]:this.renderer?[4,this.renderer.getSymbolAsync(a,{scale:this.view.scale})]:[3,2]:[2,l.resolve(null)];case 1:return c=f.sent(),[3,3];case 2:c=this._getNullSymbol(a),f.label=3;case 3:return[4,H.expandSymbol(c,H.constructUrlFn,b)];case 4:c=f.sent();d=[];if("text"===c.type){h=new Set;g=c;e=g.text;for(n=0;n<e.length;n++)h.add(e.charCodeAt(n));m=[];h.forEach(function(a){return m.push(a)});d.push({symbol:g.toJSON(),id:0,glyphIds:m})}else d.push({symbol:c.toJSON(),
id:a.uid,glyphIds:null});return[4,this.container.getMaterialItems(d,b).then(function(a){return a&&0<a.length?a[0].mosaicItem:null})];case 5:return k=f.sent(),[2,{symbol:c,mosaicItem:k}]}})})};d.prototype._projectAndNormalizeGeometry=function(a){return z(this,void 0,void 0,function(){var b,c,d,h=this;return y(this,function(f){if(F.isNone(a.geometry))return[2,l.resolve(null)];b=a.geometry;p.isPolygon(b)?(c=b.rings,b.rings=c):p.isPolyline(b)?(d=b.paths,b.paths=d):p.isExtent(b)&&(b=P.fromExtent(b));return[2,
G.checkProjectionSupport(b.spatialReference,this.view.spatialReference).then(function(){var a=I.normalizeCentralMeridian(b),a=G.project(a,b.spatialReference,h.view.spatialReference);I.ensureClosedRings(a);return a})]})})};d.prototype._onTileUpdate=function(a){var b=A.getInfo(this.view.spatialReference);if(a.added&&0<a.added.length)for(var c=0,d=a.added;c<d.length;c++)this._addNewTile(d[c],b);if(a.removed&&0<a.removed.length)for(b=0,a=a.removed;b<a.length;b++)this._removeTile(a[b].key)};d.prototype.addOrUpdateGraphic=
function(a,b,c){return this._addOrUpdateGraphic(a,b,c)};d.prototype.addGraphic=function(a){var b=this;this._abortProcessingGraphic(a.uid);var c=N.createAbortController();this._graphicIdToAbortController.set(a.uid,c);return this._addOrUpdateGraphic(a,"add",{signal:c.signal}).then(function(){b._graphicIdToAbortController.delete(a.uid)}).catch(function(c){b._graphicIdToAbortController.delete(a.uid);if(!l.isAbortError(c))throw c;})};d.prototype._addOrUpdateGraphic=function(a,b,c){var d=this,h=this._projectAndNormalizeGeometry(a),
g=this._getSymbolResources(a,c);return l.all([h,g]).then(function(f){var e=f[0];f=f[1];return"add"===b?d._addProjectedGraphic(a,f,e):d._updateGraphic(a,f,e,c)})};d.prototype._addProjectedGraphic=function(a,b,c){this._graphicsSet.has(a)&&this._graphicStore.add(a,b,c)};d.prototype._updateGraphic=function(a,b,c,d){var f=this;if(!this._graphicStore.has(a)||l.isAborted(d))return l.resolve();c=this._graphicStore.update(a,b,c);b=c.oldBounds;c=c.newBounds;var g=0===r.width(b)&&0===r.height(b),e=0===r.width(c)&&
0===r.height(c),g=g?[]:this._tileStore.boundsIntersections(b);b=e?[]:this._tileStore.boundsIntersections(c);c=E.acquire();for(var n=0;n<g.length;n++)e=g[n],c.set(e.key,{addOrUpdate:null,remove:[this._attributeStore.getLocalId(a.uid)]});for(g=0;g<b.length;g++)e=b[g],n=this._getGraphicData(e,a),c.has(e.key)?(e=c.get(e.key),e.remove.length=0,e.addOrUpdate=n):c.set(e.key,{addOrUpdate:n,remove:null});var m=[];c.forEach(function(a,b){var c=x.safeCast(f._processGraphics(b,a.addOrUpdate,d)).then(function(c){f._patchTile(b,
{addOrUpdate:c,remove:a.remove})});m.push(c)});E.release(c);return l.all(m).then(function(){})};d.prototype._addTile=function(a,b){var c=r.create();this.view.featuresTilingScheme.getTileBounds(c,a);c=new u.WGLTile(a,c,!0);b={clear:!0,addOrUpdate:b,remove:[]};this._tiles.set(a,c);this.container.addChild(c);c.setData(b,!1,!1)};d.prototype._addNewTile=function(a,b){var c=this,d=this._graphicStore.queryTileData(a);if(b){b=Math.round((b.valid[1]-b.valid[0])/a.resolution);for(var h=0;h<d.length;h++){var g=
d[h];g.geometry&&p.isPoint(g.geometry)&&this._wrapPoints(g,b)}}var e=a.key;this._tileUpdateSet.add(a.key);this.notifyChange("updating");this._processGraphics(e,d).then(function(a){c._addTile(e,a);c._tileUpdateSet.delete(e);c.notifyChange("updating")}).catch(function(a){c._tileUpdateSet.delete(e);c.notifyChange("updating");if(!l.isAbortError(a))throw a;})};d.prototype._removeTile=function(a){this._tiles.has(a)&&(a=this._tiles.get(a),this.container.removeChild(a))};d.prototype._patchTile=function(a,
b){this._tiles.has(a)&&(this._tiles.get(a).setData(b,!1,!1),this.container.requestRender())};d.prototype._setVisible=function(a,b){a=this._attributeStore.getLocalId(a);this._attributeStore.setData(a,0,0,b?1:0)};d.prototype._getGraphicsData=function(a,b){var c=A.getInfo(this.view.spatialReference);b=this._graphicStore.getGraphicsData(a,b);if(c)for(a=Math.round((c.valid[1]-c.valid[0])/a.resolution),c=0;c<b.length;c++){var d=b[c];d.geometry&&p.isPoint(d.geometry)&&this._wrapPoints(d,a)}b.sort(function(a,
b){return a.insertAfter-b.insertAfter});return b};d.prototype._getGraphicData=function(a,b){b=this._graphicStore.getGraphicData(a,b);var c=[b],d=A.getInfo(this.view.spatialReference);d&&(a=Math.round((d.valid[1]-d.valid[0])/a.resolution),b.geometry&&p.isPoint(b.geometry)&&this._wrapPoints(b,a));return c};d.prototype._wrapPoints=function(a,b){var c=a.geometry;512===b?20>c.x?a.geometry={points:[[c.x,c.y],[b,0]]}:492<c.x&&(a.geometry={points:[[c.x,c.y],[-b,0]]}):-20>c.x?a.geometry={points:[[c.x,c.y],
[b,0]]}:532<c.x&&(a.geometry={points:[[c.x,c.y],[-b,0]]})};d.prototype._processGraphics=function(a,b,c){return z(this,void 0,void 0,function(){var d,h,g;return y(this,function(e){switch(e.label){case 0:d=b&&b.length;if(!d||!this._meshFactory)return[2,null];h=this._meshFactory;return[4,x.safeCast(this._matcher.then(function(a){return h.analyze(b,a,null,null,c)}))];case 1:return g=e.sent(),this._attributeStore.sendUpdates(),[2,this._processAnalyzedGraphics(a,g)]}})})};d.prototype._processAnalyzedGraphics=
function(a,b){for(var c=this._meshFactory,d=c.createMeshData(b.length),h=this._attributeStore,g=0;g<b.length;g++){var e=b[g];e.insertAfter=-1===e.insertAfter?-1:h.getLocalId(e.insertAfter);e.localId=h.getLocalId(e.attributes[this.uid]);c.write(d,e,null,null,a.level)}return u.TileData.fromMeshData(d)};d.prototype._abortProcessingGraphic=function(a){this._graphicIdToAbortController.has(a)&&this._graphicIdToAbortController.get(a).abort()};d.prototype._getNullSymbol=function(a){a=a.geometry;return p.isPolyline(a)?
B.errorPolylineSymbol2D:p.isPolygon(a)||p.isExtent(a)?B.errorPolygonSymbol2D:B.errorPointSymbol2D};t([q.property()],d.prototype,"_graphicProcessingQueue",void 0);t([q.property({constructOnly:!0})],d.prototype,"graphics",void 0);t([q.property({dependsOn:["_graphicProcessingQueue.updating"]})],d.prototype,"updating",null);t([q.property()],d.prototype,"view",void 0);t([q.property()],d.prototype,"updateRequested",void 0);return d=t([q.subclass("esri.views.2d.layers.support.GraphicsView2D")],d)}(q.declared(V,
L,M.Identifiable));D.default=w});