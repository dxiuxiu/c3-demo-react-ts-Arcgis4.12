// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Point ../../../geometry/support/aaBoundingRect ../support/earthUtils ../webgl-engine/lib/Intersector".split(" "),function(z,k,f,l,u,v,m,w){function n(a,b){return a.renderCoordsHelper.fromRenderCoords(b,p,a.basemapTerrain.spatialReference)?a.basemapTerrain.getElevation(p)||0:0}function q(a,b,c){if(!a.state.isGlobal)return!1;var d=n(a,b);a=a.stateManager.constraintsManager.nearFarHeuristic.compute(b,
c,a.dataExtent,d,x).far;a*=a;return f.vec3.squaredDistance(b,c)>a}function y(a,b,c){void 0===c&&(c=l.vec3f64.create());var d=r[a.viewingMode];d||(d=new w(a.viewingMode),d.enable.backfacesTerrain=!a.state.isGlobal,d.enable.invisibleTerrain=!0,r[a.viewingMode]=d);var e=a.state.isGlobal;return a.sceneIntersectionHelper.intersectRay(b,c,null,d)&&!q(a,b.origin,c)?!0:!a.renderCoordsHelper.intersectManifold(b,0,c)||q(a,b.origin,c)?e?(a=c,c=f.vec3.dot(b.origin,b.origin)-m.earthRadius*m.earthRadius,f.vec3.scale(a,
b.direction,(0<c?Math.sqrt(c)/3:1)/f.vec3.length(b.direction)),f.vec3.add(a,a,b.origin),!0):!1:!0}Object.defineProperty(k,"__esModule",{value:!0});k.eyeWithinExtent=function(a,b,c,d){return a.renderCoordsHelper.fromRenderCoords(b.eye,t,d)&&v.containsPoint(c,t)};k.surfaceElevationBelowEye=function(a,b){return n(a,b.eye)};k.cameraOnContentAlongViewDirection=function(a,b,c,d){var e=a.state.camera.clone();b&&(e.eye=b);c&&(e.center=c);d&&(e.up=d);y(a,e.ray,g)||f.vec3.copy(g,e.center);c=a.state.constraints;
d=c.minimumPoiDistance;f.vec3.squaredDistance(e.eye,g)<d&&(b=c.collision.enabled,f.vec3.copy(h,e.viewForward),f.vec3.scale(h,h,d),b?f.vec3.subtract(e.eye,g,h):f.vec3.add(g,e.eye,h),a=a.renderCoordsHelper,d=a.getAltitude(e.eye),c=c.collision.elevationMargin,b&&d<c&&(f.vec3.subtract(h,g,e.eye),a.setAltitude(c,e.eye),f.vec3.add(g,e.eye,h)));e.center=g;return e};var r={},t=l.vec3f64.create(),g=l.vec3f64.create(),p=new u,h=l.vec3f64.create(),x={near:0,far:0}});