// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,e){Object.defineProperty(e,"__esModule",{value:!0});var g=Math.PI/180;e.snapToPixel=function(c,a,b){var d=b.resolution;b=b.size;c[0]=d*(Math.round(a[0]/d)+b[0]%2*.5);c[1]=d*(Math.round(a[1]/d)+b[1]%2*.5);return c};e.getOuterSize=function(c,a){var b=a.rotation*g,d=Math.abs(Math.cos(b)),b=Math.abs(Math.sin(b)),f=a.size;a=f[0];f=f[1];c[0]=Math.round(f*b+a*d);c[1]=Math.round(f*d+a*b);return c};e.getBBox=function(c,a,b,d){var f=a[0];a=a[1];var e=d[0];d=d[1];b*=.5;
c[0]=f-b*e;c[1]=a-b*d;c[2]=f+b*e;c[3]=a+b*d;return c};e.bboxIntersects=function(c,a){var b=c[1],d=c[2],f=c[3],e=a[0],g=a[1],h=a[3];return!(c[0]>a[2]||d<e||b>h||f<g)}});