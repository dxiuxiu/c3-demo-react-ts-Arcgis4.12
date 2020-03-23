// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils ../../../webgl-engine/lib/Camera ../../../../animation/easing".split(" "),function(h,l,q,e,k,m,r,t,n,p,u){Object.defineProperty(l,"__esModule",{value:!0});h=function(h){function c(a,d){var b=h.call(this,a.state,a.sceneIntersectionHelper,
"interaction"===d?null:void 0)||this;b.view=a;b.mode=d;b.zoomLocation=k.vec3f64.create();b.tmpCamera=new p;b.tmpViewDir=k.vec3f64.create();b.targetOnSphere=k.vec3f64.create();b.tmpCenter=k.vec3f64.create();b.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new p,interactionDirection:null,tiltMode:0};b.sphere=n.sphere.create();return b}q(c,h);Object.defineProperty(c.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,
configurable:!0});c.prototype.zoomStep=function(a,d){if(this.active){var b=this.view.state,f=this.constraintOptions.interactionStartCamera;this.animation.finished?f.copyFrom(b.camera):this.animation.cameraAt(1,f);f=!1;0<a&&this.intersectionHelper.intersectScreen(d,this.zoomLocation)&&(f=!0);this.tmpCamera.copyFrom(b.camera);f?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?
this.tmpCamera.center=this.zoomLocation:e.vec3.copy(this.zoomLocation,this.tmpCamera.center);this.updateCamera(this.tmpCamera,Math.pow(.6,a),this.zoomLocation,d);this.begin(this.tmpCamera)}};c.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:u.outExpo}};c.prototype.updateCamera=function(a,d,b,f){this.sphere.radius=e.vec3.length(b);e.vec3.subtract(this.tmpViewDir,a.center,a.eye);var g=e.vec3.length(this.tmpViewDir),c=g*d;1>=d&&4>c&&(c=4,d=c/g);1E-6>Math.abs(g-c)||(g=e.vec3.length(a.center),
this.sphere.radius!==g&&e.vec3.scale(a.center,a.center,(this.sphere.radius+d*(g-this.sphere.radius))/g),e.vec3.scale(this.tmpViewDir,this.tmpViewDir,-d),e.vec3.add(a.eye,a.center,this.tmpViewDir),m.applyAll(this.view,a,this.constraintOptions),1E-12<e.vec3.squaredDistance(b,a.center)&&n.sphere.intersectScreen(this.sphere,a,f,this.targetOnSphere)&&t.panToPosition(this.sphere,a,b,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),m.applySurfaceCollision(this.view,a))};return c}(r.PointToPointAnimationController);
l.ZoomStepController=h});