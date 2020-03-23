// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/arrayUtils ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./IdGen ./ModelContentType ./Octree".split(" "),function(p,q,g,h,e,l,m,n){return function(){function b(a,d,c){this._parentStages=[];this._children=new Set;this.id=b._idGen.gen(a);this.apiLayerUid=c;this.name=a;d=d||{};this.group=d.group||"";this.isVisible=null!=d.isVisible?d.isVisible:!0;this.isPickable=null!=d.isPickable?d.isPickable:!0;this.isSliceable=!1;this.translation=
d.translation?e.vec3f64.clone(d.translation):e.vec3f64.create();this._extent=[e.vec3f64.fromValues(0,0,0),e.vec3f64.fromValues(1E3,1E3,1E3)];this._extentDirty=!0}b.prototype.addParentStage=function(a){-1===this._parentStages.indexOf(a)&&this._parentStages.push(a)};b.prototype.removeParentStage=function(a){a=this._parentStages.indexOf(a);-1<a&&this._parentStages.splice(a,1);this.invalidateSpatialQueryAccelerator()};b.prototype.getName=function(){return this.name};b.prototype.getGroup=function(){return this.group};
b.prototype.getTranslation=function(){return this.translation};b.prototype.getObjectIds=function(){return g.keysOfSet(this._children,function(a){return a.id})};b.prototype.getObjects=function(){return g.keysOfSet(this._children)};b.prototype.getExtent=function(){this._updateExtent();return this._extent};b.prototype.addObject=function(a){this._children.add(a);a.parentLayer=this;this.notifyDirty("layObjectAdded",a);this._invalidateExtent();this._octree&&this._octree.add(a)};b.prototype.hasObject=function(a){return this._children.has(a)};
b.prototype.removeObject=function(a){return this._children.delete(a)?(a.parentLayer=null,this.notifyDirty("layObjectRemoved",a),this._invalidateExtent(),this._octree&&this._octree.remove(a),!0):!1};b.prototype.notifyObjectBBChanged=function(a,b){this._octree&&this._octree.update(a,b)};b.prototype.getCenter=function(){this._updateExtent();var a=e.vec3f64.create();return h.vec3.lerp(a,this._extent[0],this._extent[1],.5)};b.prototype.getBSRadius=function(){this._updateExtent();return.5*h.vec3.distance(this._extent[0],
this._extent[1])};b.prototype.getSpatialQueryAccelerator=function(){!this._octree&&50<this._children.size&&this._createOctree();return this._octree};b.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)};b.prototype.invalidateSpatialQueryAccelerator=function(){this._octree&&(this._octree.destroy(),this._octree=null)};b.prototype.notifyDirty=function(a,b,c,k){c=c||m.LAYER;k=k||this;for(var d=0;d<this._parentStages.length;d++)this._parentStages[d].notifyDirty(c,
k,a,b)};b.prototype._createOctree=function(){for(var a=this.getExtent(),b=0,c=0;3>c;c++)b=Math.max(b,a[1][c]-a[0][c]);c=e.vec3f64.create();h.vec3.lerp(c,a[0],a[1],.5);this._octree=new n(c,1.2*b,{getRadius:function(a){return a.getBSRadius()},getCenter:function(a){return a.getCenter()}});this._octree.add(g.keysOfSet(this._children))};b.prototype._invalidateExtent=function(){this._extentDirty=!0};b.prototype._updateExtent=function(){var a=this;if(this._extentDirty)if(this._extentDirty=!1,0===this._children.size)this._extent=
[[0,0,0],[0,0,0]];else{var b=null;this._children.forEach(function(c){var d=c.getBBMin();c=c.getBBMax();if(b)for(var f=0;3>f;++f)a._extent[0][f]=Math.min(a._extent[0][f],d[f]),a._extent[1][f]=Math.max(a._extent[1][f],c[f]);else b=[e.vec3f64.clone(d),e.vec3f64.clone(c)]});this._extent=b}};b._idGen=new l;return b}()});