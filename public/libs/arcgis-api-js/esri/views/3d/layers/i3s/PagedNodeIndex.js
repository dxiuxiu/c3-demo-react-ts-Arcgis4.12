// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/quat ../../../../core/libs/gl-matrix-2/quatf32 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../support/orientedBoundingBox ../../support/projectionUtils".split(" "),function(v,B,x,w,y,z,A,t,r,q){var u=A.vec3f64.create();v=function(){function c(a,b,d){this._pages=[];this.pageSize=0;this._renderSR=this._nodeSR=null;this._nodeSR=
a;this._renderSR=b;this.pageSize=d}c.prototype.addPage=function(a,b,d){for(void 0===d&&(d=0);this._pages.length<a;)this._pages.push(null);for(var c=this._nodeSR,f=this._renderSR,p=new r.ObbArray(b.length),g=0;g<b.length;g++){var e=b[g].obb,m=p.obbs[g];r.set(e,m);z.vec3.set(u,e.center[0],e.center[1],e.center[2]+d);c.isGeographic||f!==q.SphericalECEFSpatialReference||(q.computeLinearTransformation(c,u,l,f),e=2*Math.sqrt(1+l[0]+l[5]+l[10]),h[0]=(l[9]-l[6])/e,h[1]=(l[2]-l[8])/e,h[2]=(l[4]-l[1])/e,h[3]=
.25*e,w.quat.conjugate(h,h),w.quat.multiply(m.quaternion,h,m.quaternion));q.bufferToBuffer(u,c,0,m.center,f,0,1)}this._pages[a]={nodes:b,renderObbs:p.obbs,parents:new Uint32Array(this.pageSize)};a=this._pages;b=this.pageSize;for(c=[0];c.length;)for(f=c.pop(),d=a[f/b|0].nodes[f%b],p=0;p<d.childCount;p++)g=d.firstChild+p,null!=a[g/b|0]&&(a[g/b|0].parents[g%b]=f,c.push(g))};c.prototype.hasPage=function(a){return!!this._pages[a]};c.prototype.getNode=function(a){var b=this.pageSize;return this._pages[a/
b|0].nodes[a%b]};c.prototype.getRenderObb=function(a){var b=this.pageSize;return this._pages[a/b|0].renderObbs[a%b]};c.prototype.getRenderCenter=function(a){return this.getRenderObb(a).center};c.prototype.setRenderObb=function(a,b){var c=this.pageSize;r.set(b,this._pages[a/c|0].renderObbs[a%c])};c.prototype.getParentId=function(a){var b=this.pageSize;return this._pages[a/b|0].parents[a%b]};c.prototype.hasNodes=function(a,b){b=(a+b-1)/this.pageSize|0;for(a=a/this.pageSize|0;a<=b;a++)if(null==this._pages[a])return!1;
return!0};c.prototype.createVisibilityTraverse=function(){var a=this,b=[],c=[],l=t.create();return function(f,p){if(a.hasNodes(0,1))for(b.length=0,b.push(0),c.length=0,c.push(0);0<b.length;){var g=b.pop(),e=c.pop(),m=a.getNode(g),d=a.getRenderObb(g),h=!0;if(null!=f.clippingBox){var n=1<<f.frustumPlanes.length;if(0===(e&n)){var k=r.toAaBoundingBox(d,l);t.contains(f.clippingBox,k)?e|=n:t.intersects(f.clippingBox,k)||(h=!1)}}for(k=0;k<f.frustumPlanes.length&&h;k++)if(n=1<<k,0===(e&n)){var q=r.intersectPlane(d,
f.frustumPlanes[k]);0<q?h=!1:0>q&&(e|=n)}if(p.predicate(g,m,h)){d=m.firstChild;m=m.childCount;k=!1;h=(d+m-1)/a.pageSize|0;for(n=d/a.pageSize|0;n<=h;n++)if(!a.hasPage(n)){p.pageMiss(g,n);k=!0;break}if(!k)for(k=0;k<m;k++)b.push(d+k),c.push(e)}}}};return c}();var l=x.mat4f64.create(),h=y.quatf32.create();return v});