// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix-2/mat2d ../../../../core/libs/gl-matrix-2/mat2df32 ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f32 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f32 ../DisplayObject ./definitions ./DirtyMap ./DisplayRecordStore ./enums ./Fader ./WGLBuffers ./WGLDisplayList ../../tiling/TileKey".split(" "),function(t,x,C,v,D,y,z,E,F,G,n,A,B,u,H,I,J,K){function L(n,
b){return n.sortKey-b.sortKey}Object.defineProperty(x,"__esModule",{value:!0});var w=new Set;t=function(t){function b(a,e,f){void 0===f&&(f=!1);var c=t.call(this)||this;c._data=null;c.hlDisplayList=null;c._displayList=null;c._wglBuffers=null;c._dirtyMap=new A.default;c.coords=[0,0];c.bounds=[0,0,0,0];c.dvsMat3=z.mat3f32.create();c.tileMat3=z.mat3f32.create();c.labelMat2d=D.mat2df32.create();c._labelIndex=null;c._dirty=!0;c.fader=new H.default;c.key=K.pool.acquire(a);c.coords[0]=e[0];c.coords[1]=e[3];
c.bounds=e;c._ensureCorrectZOrder=f;return c}C(b,t);Object.defineProperty(b.prototype,"displayObjects",{get:function(){return this._data.tileDisplayData.displayObjects},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canDisplay",{get:function(){return!!this.attached},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isDirty",{get:function(){return this._dirty},set:function(a){(this._dirty=a)||this.isReady||this.ready();this.requestRender()},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"hasData",{get:function(){return!!this._data},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"labelIndex",{get:function(){return this._labelIndex},enumerable:!0,configurable:!0});b.prototype.getGeometry=function(a){return this._wglBuffers&&this._wglBuffers.has(a)?this._wglBuffers.get(a):null};b.prototype.getDisplayList=function(a){switch(a){case u.WGLDrawPhase.HIGHLIGHT:return this.hlDisplayList;default:return this._data&&this._displayList}};Object.defineProperty(b.prototype,
"data",{get:function(){return this._data},enumerable:!0,configurable:!0});b.prototype.setData=function(a,e,f){var c=a.addOrUpdate,d=a.remove;this.fader.reset();!a.clear&&this.hasData||a.addOrUpdate?!a.clear&&this.hasData||!a.addOrUpdate?this.hasData&&this._doPatchData({addOrUpdate:c,remove:d},e,f):(c.tileDisplayData.computeDisplayList(this._ensureCorrectZOrder),this._dirtyMap=new A.default,this._dispRecStore=B.default.fromTileData(c,this._dirtyMap),this._data=c,this._readyTileIfNoLabels(e,f),this._dirtyMap.markAllDirty(),
this._displayList||(this._displayList=c.tileDisplayData.displayList.clone())):(this.clear(),this.ready());this.emit("change")};b.prototype.commitChanges=function(a){this.isDirty&&this._wglBuffers||(this._wglBuffers||(this._wglBuffers=new I.default(this.stage.context)),this._displayList=this._data.tileDisplayData.displayList.clone(),this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._dirtyMap.markAllClean())};b.prototype.setTransform=function(a,e){var f=this.tileMat3,c=a.toScreenNoRotation([0,
0],this.coords);y.mat3.set(this.tileMat3,e,0,0,0,e,0,c[0],c[1],1);y.mat3.multiply(this.dvsMat3,a.displayViewMat3,f)};b.prototype.setLabelTransform=function(a,e){var f=this.labelMat2d;e=a.getScreenTransform(f,e);var c=F.vec2f32.create();E.vec2.transformMat2d(c,this.coords,e);v.mat2d.identity(f);v.mat2d.translate(f,f,c);v.mat2d.multiply(f,a.viewMat2d,f)};b.prototype.clear=function(){this._dispRecStore=this._displayList=this._data=null;this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null);
this.hlDisplayList&&(this.hlDisplayList=null)};b.prototype.attach=function(){return!0};b.prototype.dispose=function(){this.clear()};b.prototype.doRender=function(a){if(this.isReady&&this.hasData){this.commitChanges(a);this.stage.context.setStencilFunction(514,this.stencilRef,255);if(a.drawPhase===u.WGLDrawPhase.MAP||a.drawPhase===u.WGLDrawPhase.LABEL||a.drawPhase===u.WGLDrawPhase.LABEL_ALPHA)this._displayList.replay(a,this);else for(var e=0,f=this.stage.painter.getBrushes(a.drawPhase);e<f.length;e++)f[e].draw(a,
this);this.fader.step()||this.requestRender()}};b.prototype.buildHLList=function(a){if(this.data&&(this.hlDisplayList&&this.hlDisplayList.clear(),!a.isEmpty)){this.hlDisplayList||(this.hlDisplayList=new J);for(var e=0,f=this.data.tileDisplayData.displayObjects;e<f.length;e++){var c=f[e];if(a.has(c.id)){for(var d=[],b=0,c=c.displayRecords;b<c.length;b++){var m=c[b].copy();m.meshData=null;m.symbolLevel=0;m.zOrder=0;d.push(m)}d.sort(L);this.hlDisplayList.addToList(d)}}}this.requestRender()};b.prototype._readyTileIfNoLabels=
function(a,e){a&&e?(this._rebuildLabelIndex(),this.isDirty=!0):this.isDirty=!1};b.prototype._doPatchData=function(a,e,f){this._patchData(a)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=B.default.fromTileData(this._data,this._dirtyMap));this._readyTileIfNoLabels(e,f);this.requestRender()};b.prototype._rebuildLabelIndex=function(){this._labelIndex=this._initLabelIndex();for(var a=0,e=this.displayObjects;a<e.length;a++)for(var f=0,c=e[a].metrics;f<c.length;f++)this._insertIntoLabelIndex(c[f])};
b.prototype._insertIntoLabelIndex=function(a){-1!==a.xBucket&&this.labelIndex[a.yBucket][a.xBucket].push(a)};b.prototype._initLabelIndex=function(){for(var a=[],e=0;e<n.TILE_SIZE/n.COLLISION_BUCKET_SIZE;e++){a.push([]);for(var f=0;f<n.TILE_SIZE/n.COLLISION_BUCKET_SIZE;f++)a[e].push([])}return a};b.prototype._patchData=function(a){for(var e=!0,f=a.addOrUpdate&&a.addOrUpdate.tileDisplayData&&a.addOrUpdate.tileDisplayData.displayObjects||[],c=(a.remove||[]).slice(),d=0;d<f.length;d++){var b=f[d];null!=
b.insertAfter&&c.push(b.id)}for(b=0;b<c.length;b++){var m=c[b];if(d=this._data.tileDisplayData.displayObjectRegistry.get(m)){this._data.tileDisplayData.displayList.removeFromList(d.displayRecords);for(var l=0,g=d.displayRecords;l<g.length;l++)this._dispRecStore.delete(g[l]);this._data.tileDisplayData.displayObjectRegistry.delete(m);d=this._data.tileDisplayData.displayObjects.indexOf(d);this._data.tileDisplayData.displayObjects.splice(d,1)}}for(c=0;c<f.length;c++){b=f[c];d=this._data.tileDisplayData.displayObjectRegistry.get(b.id);
m=void 0;if(d){l=d.displayRecords;d.set(b);d.displayRecords=l;l=d.displayRecords.length;for(g=0;g<l;++g){var h=d.displayRecords[g],k=b.displayRecords[g];if(g>=b.displayRecords.length||h.geometryType!==k.geometryType||h.symbolLevel!==k.symbolLevel||h.zOrder!==k.zOrder||h.materialKey!==k.materialKey)this._dispRecStore.delete(d.displayRecords[g]),g<b.displayRecords.length&&(d.displayRecords[g]=void 0)}d.displayRecords.length=b.displayRecords.length;d.metrics=b.metrics}else if(d=b.copy(),d.displayRecords=
[],this._data.tileDisplayData.displayObjectRegistry.set(b.id,d),g=void 0,h=this._data.tileDisplayData.displayObjects,null!=d.insertAfter?(m={},0<=d.insertAfter?(l=this._data.tileDisplayData.displayObjectRegistry.get(d.insertAfter))?(g=h.indexOf(l)+1,g<h.length?h.splice(g,0,d):(h.push(d),g=h.length)):(h.push(d),g=h.length):(h.unshift(d),g=0)):(h.push(d),g=h.length),m){k=void 0;if(this._data.tileDisplayData.displayList.unified)k=0<b.displayRecords.length?1:0;else{w.clear();for(var k=0,p=b.displayRecords;k<
p.length;k++)l=this._data.tileDisplayData.displayList.getDPInfoType(p[k].geometryType),w.add(l);k=w.size}p=0;for(--g;0<=g&&p<k;--g)for(var q=h[g].displayRecords.length-1;0<=q&&p<k;--q){var r=h[g].displayRecords[q],l=this._data.tileDisplayData.displayList.getDPInfoType(r.geometryType);m[l]||(m[l]=r,++p)}}p=b.displayRecords.length;for(g=0;g<p;++g){k=b.displayRecords[g];(h=d.displayRecords[g])?(h.meshData=k.meshData,h.materialKey=k.materialKey):(h=k.copy(),h.vertexFrom=void 0,h.indexFrom=void 0,d.displayRecords[g]=
h);var q=k.geometryType,l=this._data.tileDisplayData.displayList.getDPInfoType(q),r=a.addOrUpdate.tileBufferData.geometries[q],q=r.vertexBuffer,r=r.indexBuffer,n=void 0;m&&(n=m[l]?this._data.tileDisplayData.displayList.splitAfter(m[l]):-1);e=this._dispRecStore.setMeshData(h,k,q,r,n)&&e;m&&null!=h.indexFrom&&null!=h.indexFrom&&(m[l]=h)}}return e};return b}(G.DisplayObject);x.WGLTile=t});