// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/has","./FreeList","./Utils"],function(u,v,x,n,t){function w(c){c=c.getStrides();var a={},b;for(b in c)a[r[b]]=c[b];return a}Object.defineProperty(v,"__esModule",{value:!0});var r=["FILL","LINE","MARKER","TEXT","LABEL"];u=function(){function c(a,b,e,c){this._strides=a;this._displayList=b;this._freeListsAndStorage={};this._dirtyMap=null;this._dirtyMap=e;for(var h in a){this._freeListsAndStorage[h]={vtxFreeList:c?new n.FreeList(c):null,idxFreeList:c?new n.FreeList(c):
null,vertexBuffers:{},indexBuffer:c?new Uint32Array(c):null};for(var f in a[h])this._freeListsAndStorage[h].vertexBuffers[f]={data:c?t.allocateTypedArrayBuffer(c,a[h][f]):null,stride:a[h][f]}}}c.fromTileData=function(a,b){var e=w(a),p=[0,0,0,0,0],h=[0,0,0,0,0],f=[];a.tileDisplayData.displayObjectRegistry.forEach(function(a){f.push(a)});for(var q=0;q<f.length;q++)for(var g=0,m=f[q].displayRecords;g<m.length;g++){var d=m[g];p[d.geometryType]=Math.max(p[d.geometryType],d.vertexFrom+d.vertexCount);h[d.geometryType]=
Math.max(h[d.geometryType],d.indexFrom+d.indexCount)}b=new c(e,a.tileDisplayData.displayList,b,null);for(e=0;e<a.tileBufferData.geometries.length;++e){var q=p[e],m=h[e],d=a.tileBufferData.geometries[e],g=b._storageFor(r[e]),k=a.tileBufferData.geometries[e].indexBuffer;g.indexBuffer=k;g.idxFreeList=new n.FreeList(k.length);g.idxFreeList.allocate(m);var m=void 0,l;for(l in d.vertexBuffer)d=a.tileBufferData.geometries[e].vertexBuffer[l],g.vertexBuffers[l].data=d.data,g.vertexBuffers[l].stride=d.stride,
k=t.strideToPackingFactor(d.stride),d=d.data.length*k/d.stride,m||(m=d);g.vtxFreeList=new n.FreeList(m);g.vtxFreeList.allocate(q)}return b};c.prototype.delete=function(a){var b=r[a.geometryType];this._freeVertices(b,a.vertexFrom,a.vertexCount);this._freeIndices(b,a.indexFrom,a.indexCount);this._displayList.removeFromList(a);a.vertexFrom=void 0;a.indexFrom=void 0};c.prototype.setMeshData=function(a,b,c,p,h){var f=r[a.geometryType];a.meshData=null;var e=void 0,g=void 0;void 0===a.vertexFrom?(g=b.vertexCount,
e=this._allocateVertices(f,g)):b.vertexCount>a.vertexCount?(this._freeVertices(f,a.vertexFrom,a.vertexCount),g=b.vertexCount,e=this._allocateVertices(f,g)):b.vertexCount===a.vertexCount?(e=a.vertexFrom,g=a.vertexCount):(this._freeVertices(f,a.vertexFrom+b.vertexCount,a.vertexCount-b.vertexCount),e=a.vertexFrom,g=b.vertexCount);var m=!0,d=void 0,k=void 0,l=void 0;void 0===a.indexFrom?(d=h,l=b.indexCount,k=this._allocateIndices(f,l)):b.indexCount>a.indexCount?(d=this._displayList.removeFromList(a),
this._freeIndices(f,a.indexFrom,a.indexCount),l=b.indexCount,k=this._allocateIndices(f,l)):b.indexCount===a.indexCount?(m=!1,k=a.indexFrom,l=a.indexCount):(d=this._displayList.removeFromList(a),this._freeIndices(f,a.indexFrom+b.indexCount,a.indexCount-b.indexCount),k=a.indexFrom,l=b.indexCount);if(-1!==e&&-1!==k){h=this._storageFor(f);t.copyMeshData(e,k,h.vertexBuffers,h.indexBuffer,b,c,p);a.vertexFrom=e;a.indexFrom=k;a.vertexCount=b.vertexCount;a.indexCount=b.indexCount;if(this._dirtyMap){this._dirtyMap.markDirtyIndices(a.geometryType,
a.indexFrom,a.indexCount);for(var n in c)this._dirtyMap.markDirtyVertices(a.geometryType,n,a.vertexFrom,a.vertexCount)}m&&this._displayList.addToList(a,d);return!0}-1!==e&&this._freeVertices(f,e,g);-1!==k&&this._freeIndices(f,k,l);a.setMeshDataFromBuffers(b,c,p);a.vertexFrom=void 0;a.vertexCount=0;a.indexFrom=void 0;a.indexCount=0;return!1};c.prototype._allocateVertices=function(a,b){a=this._storageFor(a);b=a.vtxFreeList.allocate(b);return-1===b||.5<a.vtxFreeList.fragmentation?-1:b};c.prototype._freeVertices=
function(a,b,c){this._storageFor(a).vtxFreeList.free(b,c)};c.prototype._freeIndices=function(a,b,c){this._storageFor(a).idxFreeList.free(b,c)};c.prototype._allocateIndices=function(a,b){a=this._storageFor(a);b=a.idxFreeList.allocate(b);return-1===b||.5<a.idxFreeList.fragmentation?-1:b};c.prototype._storageFor=function(a){return this._freeListsAndStorage[a]};c.prototype._stridesFor=function(a,b){return this._strides[a][b]};return c}();v.default=u});