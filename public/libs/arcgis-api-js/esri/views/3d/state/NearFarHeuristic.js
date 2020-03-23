// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/unitUtils ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../support/earthUtils ../support/mathUtils".split(" "),function(D,p,q,v,k,r,t,w){function u(c,b,d,a){d=x/d;c/b>d?(a.far=c,a.near=a.far/b):(a.near=d,a.far=a.near*b);return a}Object.defineProperty(p,"__esModule",{value:!0});p.createNearFarHeuristic=function(c,b,d){return"global"===c?new y:new z(b,d)};var z=function(){function c(b,d){this.elevationProvider=
b;this.unitInMeters=v.getMetersPerUnitForSR(d)}c.prototype.compute=function(b,d,a,c,m){m||(m={near:0,far:0});var l=t.earthRadius,e=b[2]*this.unitInMeters,g=e;c=e-c;var n=this.elevationProvider?this.elevationProvider.getElevationBounds():null;n&&(e=0<=c?g-this.unitInMeters*n[0]:this.unitInMeters*n[1]-g);g=Math.max(a.xmax-a.xmin,a.ymax-a.ymin,4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin));k.vec3.subtract(f,d,b);h[0]=0<f[0]?a.xmax:a.xmin;h[1]=0<f[1]?a.ymax:a.ymin;h[2]=0<f[2]?g/2:-g/2;k.vec3.subtract(h,h,b);
k.vec3.normalize(f,f);b=1.1*k.vec3.dot(h,f)*this.unitInMeters;l=Math.sqrt(e*(e+2*l));a=Math.max(a.xmax-a.xmin,a.ymax-a.ymin);d=a*A*this.unitInMeters;e=q.clamp((e-d)/(a*B*this.unitInMeters-d),0,1);e=w.lerp(l,b,e*e*e);e*=Math.max(Math.log(Math.abs(c)),1);e=Math.min(e,Math.max(34064E4,g));e/=this.unitInMeters;return u(e,C,this.unitInMeters,m)};return c}(),y=function(){function c(){}c.prototype.compute=function(b,d,a,c,f){f||(f={near:0,far:0});d=t.earthRadius;b=k.vec3.length(b)-d;b=Math.max(Math.abs(b-
c),Math.abs(b));c=Math.sqrt(b*(b+2*(d+Math.min(0,c))));b=q.clamp(2E4-(Math.log(b)-7.983)/9.011*19E3,1E3,2E4);return u(1.2*c,b,1,f)};return c}(),C=2E4,x=2,B=.001,A=1E-4,h=r.vec3f64.create(),f=r.vec3f64.create()});