// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/has ../../../../core/accessorSupport/decorators ../../../../core/libs/rbush/PooledRBush ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures".split(" "),function(c,g,k,f,l,m,e,n,p,h){Object.defineProperty(g,"__esModule",{value:!0});c=function(c){function b(a){a=c.call(this)||this;a.index=new n.default(9,m("csp-restrictions")?
function(a){return{minX:a.extent[0],minY:a.extent[1],maxX:a.extent[2],maxY:a.extent[3]}}:[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]);a.boundsByFeature=new Map;a.spatialReference=null;a.hasZ=null;a.hasM=null;a.objectIdField=null;return a}k(b,c);b.prototype.destroy=function(){this.index.destroy();this.index=null;this.boundsByFeature.clear();this.boundsByFeature=null};b.prototype.queryGraphicUIDsInExtent=function(a,b,c){b.equals(this.spatialReference)&&(d.minX=a[0],d.minY=a[1],d.maxX=a[2],
d.maxY=a[3],this.index.search(d,function(a){return c(a.graphic.uid)}))};b.prototype.add=function(a){a.computeExtent(this.spatialReference);this.index.insert(a);var b=h.getObjectId(a.graphic,this._get("objectIdField"));null!=b&&this.boundsByFeature.set(b,a.extent)};b.prototype.addMany=function(a,b){void 0===b&&(b=a.length);for(var d=this._get("objectIdField"),c=0;c<b;c++){var e=a[c];e.computeExtent(this.spatialReference);var f=h.getObjectId(e.graphic,d);null!=f&&this.boundsByFeature.set(f,e.extent)}this.index.load(a,
b)};b.prototype.remove=function(a){this.index.remove(a);a=h.getObjectId(a.graphic,this._get("objectIdField"));null!=a&&this.boundsByFeature.delete(a)};b.prototype.clear=function(){this.index.clear();this.boundsByFeature.clear()};b.prototype.forEachInBounds=function(a,b){d.minX=a[0];d.minY=a[1];d.maxX=a[2];d.maxY=a[3];this.index.search(d,function(a){b(a)})};b.prototype.getBounds=function(a,b){return(a=this.boundsByFeature.get(a))?p.fromRect(b,a):null};f([e.property({constructOnly:!0})],b.prototype,
"spatialReference",void 0);f([e.property({constructOnly:!0})],b.prototype,"hasZ",void 0);f([e.property({constructOnly:!0})],b.prototype,"hasM",void 0);f([e.property({constructOnly:!0})],b.prototype,"objectIdField",void 0);return b=f([e.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],b)}(e.declared(l));g.SpatialIndex2D=c;var d={minX:0,minY:0,maxX:0,maxY:0};g.default=c});