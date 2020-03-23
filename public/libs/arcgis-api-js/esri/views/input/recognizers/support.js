// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/screenUtils"],function(w,g,v){Object.defineProperty(g,"__esModule",{value:!0});g.manhattanDistance=function(a,b){return Math.abs(b.x-a.x)+Math.abs(b.y-a.y)};g.euclideanDistance=function(a,b){var f=b.x-a.x;a=b.y-a.y;return Math.sqrt(f*f+a*a)};g.fitCircleLSQ=function(a,b){b?(b.radius=0,b.center.x=0,b.center.y=0):b={radius:0,center:v.createScreenPoint()};if(0===a.length)return b;if(1===a.length)return b.center.x=a[0].x,b.center.y=a[0].y,b;if(2===a.length){var f=
a[0];a=a[1];var c=[a.x-f.x,a.y-f.y],d=c[0],c=c[1];b.radius=Math.sqrt(d*d+c*c)/2;b.center.x=(f.x+a.x)/2;b.center.y=(f.y+a.y)/2;return b}for(var k=0,l=0,e=0;e<a.length;e++)k+=a[e].x,l+=a[e].y;for(var k=k/a.length,l=l/a.length,m=a.map(function(a){return a.x-k}),g=a.map(function(a){return a.y-l}),r=f=b=0,n=0,h=d=0,e=c=0;e<m.length;e++){var p=m[e],q=g[e],t=p*p,u=q*q;b+=t;f+=u;r+=p*q;n+=t*p;d+=u*q;h+=p*u;c+=q*t}e=b;m=r;g=f;n=.5*(n+h);d=.5*(d+c);c=e*g-r*m;h=(n*g-d*m)/c;d=(e*d-r*n)/c;c=v.createScreenPoint(h+
k,d+l);return{radius:Math.sqrt(h*h+d*d+(b+f)/a.length),center:c}}});