// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../layers/graphics/dehydratedFeatures ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ../graphics/Graphics3DSymbolCommonCode ./I3SUtil ../../support/geometryUtils ../../support/orientedBoundingBox ../../support/projectionUtils".split(" "),function(x,y,d,g,q,r,t,u,n,p,v,k,l,m){return function(){function c(a,
b,w,d,c,e,h){void 0===h&&(h={});this.indexSR=a;this._renderCoordsHelper=b;this.extent=d;this.elevationProvider=c;this.options=h;this.fp=k.frustum.create();this._poi=g.vec3f64.create();this.minDistance=Infinity;this.maxDistance=0;this.maxLodLevel=2;this._tmp1=g.vec3f64.create();this._tmp2=g.vec3f64.create();this._tmp3=g.vec3f64.create();this._tmp0=g.vec3f64.create();this.screenspaceErrorBias=h.screenspaceErrorBias||1;this.progressiveLoadFactor=h.progressiveLoadFactor||1;this.updateCamera(w);this.engineSR=
this._renderCoordsHelper.spatialReference;this.updateElevationInfo(e.elevationInfo);this.tmpPoint=t.makeDehydratedPoint(0,0,0,a)}c.prototype.updateElevationInfo=function(a){null==a?this._elevationContext=null:(this._elevationContext=new u,this._elevationContext.featureExpressionInfoContext=n.createContext(n.extractExpressionInfo(a,!1)),this._elevationContext.mixinApi(a))};c.prototype.updateCamera=function(a){k.frustum.fromMatrix(a.viewMatrix,a.projectionMatrix,this.fp);this._screenSizeFactor=1/(a.perScreenPixelRatio/
2);this._camPos=a.eye;this.minDistance=Infinity;this.maxDistance=0};c.prototype.setPointOfInterest=function(a){d.vec3.copy(this._poi,a)};c.prototype.updateScreenSpaceErrorBias=function(a){var b=this.screenspaceErrorBias;this.screenspaceErrorBias=a;return b};c.prototype.updateExtent=function(a){this.extent=a};c.prototype.getRenderMbs=function(a){var b=a.renderMbs;b||(b=r.vec4f64.fromValues(a.mbs[0],a.mbs[1],a.mbs[2],-1),a.renderMbs=b);0>b[3]&&(q.vec4.copy(b,a.mbs),this._elevationContext&&1E5>b[3]&&
(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=p.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),m.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};c.prototype.getRenderObb=function(a){if(a.obb&&!(0>a.obb.halfSize[0])&&a.renderObb){var b=a.renderObb;0>b.halfSize[0]&&(l.set(a.obb,b),this._elevationContext&&1E5>a.mbs[3]&&(this.tmpPoint.x=a.obb.center[0],this.tmpPoint.y=a.obb.center[1],this.tmpPoint.z=a.obb.center[2],
b.center[2]=p.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),m.bufferToBuffer(b.center,this.indexSR,0,b.center,this.engineSR,0,1));return b}};c.prototype.isNodeVisible=function(a){var b=this.getRenderMbs(a);return this.isMBSinExtent(b)?a.obb?(a=this.getRenderObb(a),l.isVisible(a,this.fp)):this.isMBSVisible(b):!1};c.prototype.isGeometryVisible=function(a){return(a=this.getRenderObb(a))?l.isVisible(a,this.fp):!0};c.prototype.isMBSinExtent=
function(a){return this.extent?0!==v.intersectBoundingBoxWithMbs(this.extent,a):!0};c.prototype.isMBSVisible=function(a){return k.frustum.intersectsSphere(this.fp.planes,k.sphere.wrap(a[3],a))};c.prototype.screenSpaceDiameterMbs=function(a,b){var c=this.getRenderMbs(a);a=Math.sqrt(d.vec3.squaredDistance(c,this._camPos));c=a-c[3];this._updateMinMaxDistance(a);return 0>c?.5*Number.MAX_VALUE:b/c*this._screenSizeFactor};c.prototype.calcCameraDistance=function(a){return this.calcCameraDistanceToCenter(a)-
this.getRenderMbs(a)[3]};c.prototype.calcCameraDistanceToCenter=function(a){a=this.getRenderMbs(a);a=d.vec3.distance(a,this._camPos);this._updateMinMaxDistance(a);return a};c.prototype.calcAngleDependentLoD=function(a){a=this.getRenderMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/d.vec3.length(a)+b)/d.vec3.distance(a,this._camPos);return Math.min(1,a)};c.prototype.hasLOD=function(a){return 0!==a.lodMetric};c.prototype.getDistancePlanarMode=
function(a,b){var c=a[0]-b[0],d=a[1]-b[1];a=a[2]-b[2];c=c*c+d*d;b=b[3];if(c<=b*b)return Math.abs(a);b=Math.sqrt(c)-b;return Math.sqrt(a*a+b*b)};c.prototype.getDistanceGlobeMode=function(a,b){var c=d.vec3.length(b),g=d.vec3.length(a)-c;d.vec3.scale(this._tmp0,a,d.vec3.dot(a,b)/d.vec3.squaredLength(a));var f=d.vec3.squaredDistance(b,this._tmp0),e=b[3];if(f<=e*e)return Math.abs(g);b=d.vec3.scale(this._tmp0,b,1/c);c=d.vec3.scale(this._tmp1,b,c-e*e/2/c);f=d.vec3.subtract(this._tmp2,a,c);f=d.vec3.subtract(this._tmp2,
f,d.vec3.scale(this._tmp3,b,d.vec3.dot(b,f)));c=d.vec3.add(this._tmp2,c,d.vec3.scale(this._tmp2,f,e/d.vec3.length(f)));e=d.vec3.distance(a,c);2E5<=g&&(a=d.vec3.subtract(this._tmp1,a,c),a=d.vec3.dot(a,b)/d.vec3.length(a),.08>a&&(a=1E-4),e/=a);return e};c.prototype.getDistance=function(a,b){return this.engineSR===m.SphericalECEFSpatialReference?this.getDistanceGlobeMode(a,b):this.getDistancePlanarMode(a,b)};c.prototype._updateMinMaxDistance=function(a){0<a?(this.minDistance=Math.min(this.minDistance,
a),this.maxDistance=Math.max(this.maxDistance,a)):(this.minDistance=0,this.maxDistance=Math.max(this.maxDistance,-a))};c.prototype.getLodLevel=function(a){if(0===a.lodMetric||!a.resources.hasFeatureData)return 0;if(0===a.childCount)return this.maxLodLevel;if(1>this.progressiveLoadFactor){var b=this.screenspaceErrorBias;return this.evaluateLODmetric(a,this.progressiveLoadFactor*this.screenspaceErrorBias)?this.evaluateLODmetric(a,b)?2:1:0}return this.evaluateLODmetric(a,this.screenspaceErrorBias)?this.maxLodLevel:
0};c.prototype.evaluateLODmetric=function(a,b){switch(a.lodMetric){case 2:var c=this.getRenderMbs(a),d=this.getDistance(this._camPos,c),f=2*d/this._screenSizeFactor;this._updateMinMaxDistance(d+c[3]);return a.maxError*b<=f;case 1:return b=this.screenSpaceDiameterMbs(a,a.mbs[3]*b),this.options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),b<a.maxError;case 3:return 10>this.screenSpaceDiameterMbs(a,a.maxError)*b;case 4:return this.calcCameraDistance(a)>a.maxError*b}return!1};c.prototype.distToPOI=
function(a){a=this.getRenderMbs(a);return d.vec3.distance(a,this._poi)-a[3]};c.prototype.distCameraToPOI=function(){return d.vec3.distance(this._camPos,this._poi)};return c}()});