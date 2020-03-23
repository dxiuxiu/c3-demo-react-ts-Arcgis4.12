// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../factories/mat3f64 ../factories/quatf64 ../factories/vec3f64 ./common ./vec3 ./vec4".split(" "),function(D,d,z,t,q,r,n,k){function u(b,a,c){c*=.5;var e=Math.sin(c);b[0]=e*a[0];b[1]=e*a[1];b[2]=e*a[2];b[3]=Math.cos(c);return b}function v(b,a,c){var e=a[0],g=a[1],f=a[2];a=a[3];var d=c[0],k=c[1],l=c[2];c=c[3];b[0]=e*c+a*d+g*l-f*k;b[1]=g*c+a*k+f*d-e*l;b[2]=f*c+a*l+e*k-g*d;b[3]=a*c-e*d-g*k-f*l;return b}function p(b,a,c,e){var g=a[0],d=a[1],h=a[2];a=a[3];var k=c[0],l=c[1],n=c[2];
c=c[3];var p,m,q;m=g*k+d*l+h*n+a*c;0>m&&(m=-m,k=-k,l=-l,n=-n,c=-c);1-m>r.EPSILON?(p=Math.acos(m),q=Math.sin(p),m=Math.sin((1-e)*p)/q,e=Math.sin(e*p)/q):m=1-e;b[0]=m*g+e*k;b[1]=m*d+e*l;b[2]=m*h+e*n;b[3]=m*a+e*c;return b}function w(b,a){var c=a[0]+a[4]+a[8];if(0<c)c=Math.sqrt(c+1),b[3]=.5*c,c=.5/c,b[0]=(a[5]-a[7])*c,b[1]=(a[6]-a[2])*c,b[2]=(a[1]-a[3])*c;else{var e=0;a[4]>a[0]&&(e=1);a[8]>a[3*e+e]&&(e=2);var g=(e+1)%3,d=(e+2)%3,c=Math.sqrt(a[3*e+e]-a[3*g+g]-a[3*d+d]+1);b[e]=.5*c;c=.5/c;b[3]=(a[3*g+d]-
a[3*d+g])*c;b[g]=(a[3*g+e]+a[3*e+g])*c;b[d]=(a[3*d+e]+a[3*e+d])*c}return b}Object.defineProperty(d,"__esModule",{value:!0});d.identity=function(b){b[0]=0;b[1]=0;b[2]=0;b[3]=1;return b};d.setAxisAngle=u;d.getAxisAngle=function(b,a){var c=2*Math.acos(a[3]),e=Math.sin(c/2);e>r.EPSILON?(b[0]=a[0]/e,b[1]=a[1]/e,b[2]=a[2]/e):(b[0]=1,b[1]=0,b[2]=0);return c};d.multiply=v;d.rotateX=function(b,a,c){c*=.5;var e=a[0],d=a[1],f=a[2];a=a[3];var h=Math.sin(c);c=Math.cos(c);b[0]=e*c+a*h;b[1]=d*c+f*h;b[2]=f*c-d*h;
b[3]=a*c-e*h;return b};d.rotateY=function(b,a,c){c*=.5;var e=a[0],d=a[1],f=a[2];a=a[3];var h=Math.sin(c);c=Math.cos(c);b[0]=e*c-f*h;b[1]=d*c+a*h;b[2]=f*c+e*h;b[3]=a*c-d*h;return b};d.rotateZ=function(b,a,c){c*=.5;var e=a[0],d=a[1],f=a[2];a=a[3];var h=Math.sin(c);c=Math.cos(c);b[0]=e*c+d*h;b[1]=d*c-e*h;b[2]=f*c+a*h;b[3]=a*c-f*h;return b};d.calculateW=function(b,a){var c=a[0],e=a[1];a=a[2];b[0]=c;b[1]=e;b[2]=a;b[3]=Math.sqrt(Math.abs(1-c*c-e*e-a*a));return b};d.slerp=p;d.random=function(b){var a=r.RANDOM(),
c=r.RANDOM(),e=r.RANDOM(),d=Math.sqrt(1-a),a=Math.sqrt(a);b[0]=d*Math.sin(2*Math.PI*c);b[1]=d*Math.cos(2*Math.PI*c);b[2]=a*Math.sin(2*Math.PI*e);b[3]=a*Math.cos(2*Math.PI*e);return b};d.invert=function(b,a){var c=a[0],e=a[1],d=a[2];a=a[3];var f=c*c+e*e+d*d+a*a,f=f?1/f:0;b[0]=-c*f;b[1]=-e*f;b[2]=-d*f;b[3]=a*f;return b};d.conjugate=function(b,a){b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};d.fromMat3=w;d.fromEuler=function(b,a,c,e){var d=.5*Math.PI/180;a*=d;c*=d;e*=d;d=Math.sin(a);a=Math.cos(a);
var f=Math.sin(c);c=Math.cos(c);var h=Math.sin(e);e=Math.cos(e);b[0]=d*c*e-a*f*h;b[1]=a*f*e+d*c*h;b[2]=a*c*h-d*f*e;b[3]=a*c*e+d*f*h;return b};d.str=function(b){return"quat("+b[0]+", "+b[1]+", "+b[2]+", "+b[3]+")"};d.copy=k.copy;d.set=k.set;d.add=k.add;d.mul=v;d.scale=k.scale;d.dot=k.dot;d.lerp=k.lerp;d.length=k.length;d.len=d.length;d.squaredLength=k.squaredLength;d.sqrLen=d.squaredLength;d.normalize=k.normalize;d.exactEquals=k.exactEquals;d.equals=k.equals;d.rotationTo=function(b,a,c){var e=n.dot(a,
c);if(-.999999>e)return n.cross(l,A,a),1E-6>n.len(l)&&n.cross(l,B,a),n.normalize(l,l),u(b,l,Math.PI),b;if(.999999<e)return b[0]=0,b[1]=0,b[2]=0,b[3]=1,b;n.cross(l,a,c);b[0]=l[0];b[1]=l[1];b[2]=l[2];b[3]=1+e;return d.normalize(b,b)};var l=q.create(),A=q.fromValues(1,0,0),B=q.fromValues(0,1,0);d.sqlerp=function(b,a,c,d,g,f){p(x,a,g,f);p(y,c,d,f);p(b,x,y,2*f*(1-f));return b};var x=t.create(),y=t.create();d.setAxes=function(b,a,c,e){var g=C;g[0]=c[0];g[3]=c[1];g[6]=c[2];g[1]=e[0];g[4]=e[1];g[7]=e[2];
g[2]=-a[0];g[5]=-a[1];g[8]=-a[2];return d.normalize(b,w(b,g))};var C=z.create()});