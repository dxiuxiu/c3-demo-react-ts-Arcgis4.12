// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Evented ../../../../core/Handles ../../../../core/promiseUtils ../../engine".split(" "),function(k,l,p,m,v,w,q,r,t,g){Object.defineProperty(l,"__esModule",{value:!0});var u=function(f){function c(a){var b=f.call(this)||this;b._highlightMap=new Map;b._localToGlobalId=a;return b}m(c,f);Object.defineProperty(c.prototype,
"isEmpty",{get:function(){return 0===this._highlightMap.size},enumerable:!0,configurable:!0});c.prototype.has=function(a){a=this._localToGlobalId(a);return this._highlightMap.has(a)};c.prototype.create=function(a){for(var b=this,h={objectIds:a,objectIdSet:new Set,remove:function(){return b._delete(h)}},c=0;c<a.length;c++){var d=a[c];h.objectIdSet.add(d);this._highlightMap.has(d)||this._highlightMap.set(d,new Set);this._highlightMap.get(d).add(h)}this.emit("change");return h};c.prototype._delete=function(a){for(var b=
0,c=a.objectIds;b<c.length;b++){var e=c[b],d=this._highlightMap.get(e);d.delete(a);0===d.size&&this._highlightMap.delete(e)}this.emit("change")};return c}(q);k=function(f){function c(a){var b=f.call(this)||this;b._displayHeight=0;b._displayWidth=0;b._rendererInfo=new g.WGLRendererInfo;b._tileDataChangeHandles=new r;b.attributeView=new g.AttributeStoreView;b._tileDataChangeHandler=function(a){a.target.buildHLList(b._highlightManager)};b._highlightManagerChangeHandler=function(){for(var a=0,c=b.children;a<
c.length;a++)c[a].buildHLList(b._highlightManager)};b.tileInfoView=a.tileInfoView;b.getMaterialItems=b.getMaterialItems.bind(b);b._highlightManager=new u(a.localToGlobalId);b._highlightManagerChangeHandle=b._highlightManager.on("change",b._highlightManagerChangeHandler.bind(b));return b}m(c,f);c.prototype.dispose=function(){this.removeAllChildren();for(var a=0,b=this.children;a<b.length;a++)b[a].dispose();this._tileDataChangeHandles.removeAll();this._highlightManagerChangeHandle.remove();this.attributeView.destroy()};
c.prototype.disposeWebGLResources=function(){for(var a=0,b=this.children;a<b.length;a++)b[a].clear()};c.prototype.highlight=function(a){return this._highlightManager.create(a)};c.prototype.displayWidth=function(){return this._displayWidth};Object.defineProperty(c.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0});c.prototype.setVisibility=function(a,b){};c.prototype.getMaterialItems=function(a,b){if(!a||0===a.length)return null;for(var c=[],e=this.stage.painter.textureManager,
d=0;d<a.length;d++){var n=a[d];c.push(e.rasterizeItem(n.symbol,n.glyphIds,b))}return t.all(c).then(function(b){return b.map(function(b,c){return{id:a[c].id,mosaicItem:b}})})};c.prototype.addChild=function(a){f.prototype.addChild.call(this,a);var b=a.on("change",this._tileDataChangeHandler);this._tileDataChangeHandles.add(b,a);return a};c.prototype.removeChild=function(a){f.prototype.removeChild.call(this,a);this._tileDataChangeHandles.remove(a);return a};c.prototype.renderChildren=function(a){var b=
this.stage.painter;this._updateTilesTransform(a.state,this.tileInfoView.getClosestInfoForScale(a.state.scale).level);if(a.drawPhase===g.enums.WGLDrawPhase.MAP){this.attributeView.update(this.stage.context);this.attributeView.bindTextures(this.stage.context);var c=this.tileInfoView.getClosestInfoForScale(a.state.scale).level,e=this.tileInfoView.tileInfo.scaleToZoom(a.state.scale);a=p({},a,{rendererInfo:this._rendererInfo,requiredLevel:c,displayLevel:e,context:this.stage.context,painter:b,attributeView:this.attributeView});
this.sortChildren(function(a,b){return 0!==a.key.level-b.key.level?a.key.level-b.key.level:0!==a.key.row-b.key.row?a.key.row-b.key.row:a.key.col-b.key.col});b.draw(a,this.children,a.drawPhase,null);this._highlightManager.isEmpty||b.highlight(a,this.children)}};c.prototype._updateTilesTransform=function(a,b){b=0;for(var c=this.children;b<c.length;b++){var e=c[b];e.setTransform(a,this.tileInfoView.tileInfo.lods[e.key.level].resolution/(a.resolution*a.pixelRatio))}};return c}(g.Container);l.default=
k});