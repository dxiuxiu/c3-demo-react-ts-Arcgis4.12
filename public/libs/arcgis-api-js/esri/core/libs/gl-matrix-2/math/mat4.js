// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../factories/vec3f64","./common"],function(Q,m,O,x){function K(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function L(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],k=b[4],h=b[5],l=b[6],n=b[7],p=b[8],u=b[9],q=b[10],v=b[11],r=b[12],t=b[13],m=b[14];b=b[15];var w=c[0],y=c[1],z=c[2],A=c[3];a[0]=w*d+y*k+z*p+A*r;a[1]=w*e+y*h+z*u+A*t;a[2]=w*f+y*l+z*q+A*m;a[3]=w*g+y*n+z*v+A*b;w=c[4];y=c[5];z=c[6];A=
c[7];a[4]=w*d+y*k+z*p+A*r;a[5]=w*e+y*h+z*u+A*t;a[6]=w*f+y*l+z*q+A*m;a[7]=w*g+y*n+z*v+A*b;w=c[8];y=c[9];z=c[10];A=c[11];a[8]=w*d+y*k+z*p+A*r;a[9]=w*e+y*h+z*u+A*t;a[10]=w*f+y*l+z*q+A*m;a[11]=w*g+y*n+z*v+A*b;w=c[12];y=c[13];z=c[14];A=c[15];a[12]=w*d+y*k+z*p+A*r;a[13]=w*e+y*h+z*u+A*t;a[14]=w*f+y*l+z*q+A*m;a[15]=w*g+y*n+z*v+A*b;return a}function M(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],k=d+d,h=e+e,l=f+f;b=d*k;var n=d*h,d=d*l,p=e*h,e=e*l,f=f*l,k=g*k,h=g*h,g=g*l;a[0]=1-(p+f);a[1]=n+g;a[2]=d-h;a[3]=0;a[4]=
n-g;a[5]=1-(b+f);a[6]=e+k;a[7]=0;a[8]=d+h;a[9]=e-k;a[10]=1-(b+p);a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function N(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-c[7];a[8]=b[8]-c[8];a[9]=b[9]-c[9];a[10]=b[10]-c[10];a[11]=b[11]-c[11];a[12]=b[12]-c[12];a[13]=b[13]-c[13];a[14]=b[14]-c[14];a[15]=b[15]-c[15];return a}Object.defineProperty(m,"__esModule",{value:!0});m.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=
b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a};m.set=function(a,b,c,d,e,f,g,k,h,l,n,p,u,q,v,r,t){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;a[6]=k;a[7]=h;a[8]=l;a[9]=n;a[10]=p;a[11]=u;a[12]=q;a[13]=v;a[14]=r;a[15]=t;return a};m.identity=K;m.transpose=function(a,b){if(a===b){var c=b[1],d=b[2],e=b[3],f=b[6],g=b[7],k=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=
f;a[11]=b[14];a[12]=e;a[13]=g;a[14]=k}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a};m.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],k=b[5],h=b[6],l=b[7],n=b[8],p=b[9],u=b[10],q=b[11],v=b[12],r=b[13],t=b[14];b=b[15];var m=c*k-d*g,w=c*h-e*g,y=c*l-f*g,z=d*h-e*k,A=d*l-f*k,x=e*l-f*h,C=n*r-p*v,D=n*t-u*v,E=n*b-q*v,F=p*t-u*r,G=p*b-q*r,H=u*b-q*t,B=m*H-w*
G+y*F+z*E-A*D+x*C;if(!B)return null;B=1/B;a[0]=(k*H-h*G+l*F)*B;a[1]=(e*G-d*H-f*F)*B;a[2]=(r*x-t*A+b*z)*B;a[3]=(u*A-p*x-q*z)*B;a[4]=(h*E-g*H-l*D)*B;a[5]=(c*H-e*E+f*D)*B;a[6]=(t*y-v*x-b*w)*B;a[7]=(n*x-u*y+q*w)*B;a[8]=(g*G-k*E+l*C)*B;a[9]=(d*E-c*G-f*C)*B;a[10]=(v*A-r*y+b*m)*B;a[11]=(p*y-n*A-q*m)*B;a[12]=(k*D-g*F-h*C)*B;a[13]=(c*F-d*D+e*C)*B;a[14]=(r*w-v*z-t*m)*B;a[15]=(n*z-p*w+u*m)*B;return a};m.adjoint=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],k=b[5],h=b[6],l=b[7],n=b[8],p=b[9],u=b[10],q=
b[11],m=b[12],r=b[13],t=b[14];b=b[15];a[0]=k*(u*b-q*t)-p*(h*b-l*t)+r*(h*q-l*u);a[1]=-(d*(u*b-q*t)-p*(e*b-f*t)+r*(e*q-f*u));a[2]=d*(h*b-l*t)-k*(e*b-f*t)+r*(e*l-f*h);a[3]=-(d*(h*q-l*u)-k*(e*q-f*u)+p*(e*l-f*h));a[4]=-(g*(u*b-q*t)-n*(h*b-l*t)+m*(h*q-l*u));a[5]=c*(u*b-q*t)-n*(e*b-f*t)+m*(e*q-f*u);a[6]=-(c*(h*b-l*t)-g*(e*b-f*t)+m*(e*l-f*h));a[7]=c*(h*q-l*u)-g*(e*q-f*u)+n*(e*l-f*h);a[8]=g*(p*b-q*r)-n*(k*b-l*r)+m*(k*q-l*p);a[9]=-(c*(p*b-q*r)-n*(d*b-f*r)+m*(d*q-f*p));a[10]=c*(k*b-l*r)-g*(d*b-f*r)+m*(d*l-f*
k);a[11]=-(c*(k*q-l*p)-g*(d*q-f*p)+n*(d*l-f*k));a[12]=-(g*(p*t-u*r)-n*(k*t-h*r)+m*(k*u-h*p));a[13]=c*(p*t-u*r)-n*(d*t-e*r)+m*(d*u-e*p);a[14]=-(c*(k*t-h*r)-g*(d*t-e*r)+m*(d*h-e*k));a[15]=c*(k*u-h*p)-g*(d*u-e*p)+n*(d*h-e*k);return a};m.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],k=a[6],h=a[7],l=a[8],n=a[9],p=a[10],u=a[11],q=a[12],m=a[13],r=a[14];a=a[15];return(b*g-c*f)*(p*a-u*r)-(b*k-d*f)*(n*a-u*m)+(b*h-e*f)*(n*r-p*m)+(c*k-d*g)*(l*a-u*q)-(c*h-e*g)*(l*r-p*q)+(d*h-e*k)*(l*m-
n*q)};m.multiply=L;m.translate=function(a,b,c){var d=c[0],e=c[1];c=c[2];var f=void 0,g=void 0,k=void 0,h=void 0,l=void 0,n=void 0,p=void 0,m=void 0,q=void 0,v=void 0,r=void 0,t=void 0;b===a?(a[12]=b[0]*d+b[4]*e+b[8]*c+b[12],a[13]=b[1]*d+b[5]*e+b[9]*c+b[13],a[14]=b[2]*d+b[6]*e+b[10]*c+b[14],a[15]=b[3]*d+b[7]*e+b[11]*c+b[15]):(f=b[0],g=b[1],k=b[2],h=b[3],l=b[4],n=b[5],p=b[6],m=b[7],q=b[8],v=b[9],r=b[10],t=b[11],a[0]=f,a[1]=g,a[2]=k,a[3]=h,a[4]=l,a[5]=n,a[6]=p,a[7]=m,a[8]=q,a[9]=v,a[10]=r,a[11]=t,a[12]=
f*d+l*e+q*c+b[12],a[13]=g*d+n*e+v*c+b[13],a[14]=k*d+p*e+r*c+b[14],a[15]=h*d+m*e+t*c+b[15]);return a};m.scale=function(a,b,c){var d=c[0],e=c[1];c=c[2];a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*e;a[5]=b[5]*e;a[6]=b[6]*e;a[7]=b[7]*e;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a};m.rotate=function(a,b,c,d){var e=d[0],f=d[1];d=d[2];var g=Math.sqrt(e*e+f*f+d*d),k=void 0,h=void 0,l=void 0,n=void 0,p=void 0,m=void 0,q=void 0,v=
void 0,r=void 0,t=void 0,J=void 0,w=void 0,y=void 0,z=void 0,A=void 0,I=void 0,C=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,h=k=void 0;if(g<x.EPSILON)return null;g=1/g;e*=g;f*=g;d*=g;k=Math.sin(c);h=Math.cos(c);l=1-h;n=b[0];p=b[1];m=b[2];q=b[3];v=b[4];r=b[5];t=b[6];J=b[7];w=b[8];y=b[9];z=b[10];A=b[11];I=e*e*l+h;C=f*e*l+d*k;D=d*e*l-f*k;E=e*f*l-d*k;F=f*f*l+h;G=d*f*l+e*k;H=e*d*l+f*k;k=f*d*l-e*k;h=d*d*l+h;a[0]=n*I+v*C+w*D;a[1]=p*I+r*C+y*D;a[2]=m*I+t*C+z*D;a[3]=q*I+J*C+A*D;a[4]=n*E+v*F+w*G;a[5]=
p*E+r*F+y*G;a[6]=m*E+t*F+z*G;a[7]=q*E+J*F+A*G;a[8]=n*H+v*k+w*h;a[9]=p*H+r*k+y*h;a[10]=m*H+t*k+z*h;a[11]=q*H+J*k+A*h;b!==a&&(a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);return a};m.rotateX=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[4],f=b[5],g=b[6],k=b[7],h=b[8],l=b[9],n=b[10],p=b[11];b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[4]=e*c+h*d;a[5]=f*c+l*d;a[6]=g*c+n*d;a[7]=k*c+p*d;a[8]=h*c-e*d;a[9]=l*c-f*d;a[10]=n*c-g*d;a[11]=p*c-
k*d;return a};m.rotateY=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[0],f=b[1],g=b[2],k=b[3],h=b[8],l=b[9],n=b[10],p=b[11];b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c-h*d;a[1]=f*c-l*d;a[2]=g*c-n*d;a[3]=k*c-p*d;a[8]=e*d+h*c;a[9]=f*d+l*c;a[10]=g*d+n*c;a[11]=k*d+p*c;return a};m.rotateZ=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[0],f=b[1],g=b[2],k=b[3],h=b[4],l=b[5],n=b[6],p=b[7];b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],
a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c+h*d;a[1]=f*c+l*d;a[2]=g*c+n*d;a[3]=k*c+p*d;a[4]=h*c-e*d;a[5]=l*c-f*d;a[6]=n*c-g*d;a[7]=p*c-k*d;return a};m.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=b[0];a[13]=b[1];a[14]=b[2];a[15]=1;return a};m.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b[1];a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=b[2];a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
m.fromRotation=function(a,b,c){var d=c[0],e=c[1];c=c[2];var f=Math.sqrt(d*d+e*e+c*c),g=void 0,k=void 0,h=void 0;if(f<x.EPSILON)return null;f=1/f;d*=f;e*=f;c*=f;g=Math.sin(b);k=Math.cos(b);h=1-k;a[0]=d*d*h+k;a[1]=e*d*h+c*g;a[2]=c*d*h-e*g;a[3]=0;a[4]=d*e*h-c*g;a[5]=e*e*h+k;a[6]=c*e*h+d*g;a[7]=0;a[8]=d*c*h+e*g;a[9]=e*c*h-d*g;a[10]=c*c*h+k;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};m.fromXRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=c;a[7]=
0;a[8]=0;a[9]=-c;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};m.fromYRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=0;a[2]=-c;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=c;a[9]=0;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};m.fromZRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=0;a[3]=0;a[4]=-c;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};m.fromRotationTranslation=M;m.fromQuat2=function(a,
b){var c=P,d=-b[0],e=-b[1],f=-b[2],g=b[3],k=b[4],h=b[5],l=b[6],n=b[7],p=d*d+e*e+f*f+g*g;0<p?(c[0]=2*(k*g+n*d+h*f-l*e)/p,c[1]=2*(h*g+n*e+l*d-k*f)/p,c[2]=2*(l*g+n*f+k*e-h*d)/p):(c[0]=2*(k*g+n*d+h*f-l*e),c[1]=2*(h*g+n*e+l*d-k*f),c[2]=2*(l*g+n*f+k*e-h*d));M(a,b,c);return a};var P=O.create();m.getTranslation=function(a,b){a[0]=b[12];a[1]=b[13];a[2]=b[14];return a};m.getScaling=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[4],g=b[5],k=b[6],h=b[8],l=b[9];b=b[10];a[0]=Math.sqrt(c*c+d*d+e*e);a[1]=Math.sqrt(f*
f+g*g+k*k);a[2]=Math.sqrt(h*h+l*l+b*b);return a};m.getRotation=function(a,b){var c=b[0]+b[5]+b[10],d=0;0<c?(d=2*Math.sqrt(c+1),a[3]=.25*d,a[0]=(b[6]-b[9])/d,a[1]=(b[8]-b[2])/d,a[2]=(b[1]-b[4])/d):b[0]>b[5]&&b[0]>b[10]?(d=2*Math.sqrt(1+b[0]-b[5]-b[10]),a[3]=(b[6]-b[9])/d,a[0]=.25*d,a[1]=(b[1]+b[4])/d,a[2]=(b[8]+b[2])/d):b[5]>b[10]?(d=2*Math.sqrt(1+b[5]-b[0]-b[10]),a[3]=(b[8]-b[2])/d,a[0]=(b[1]+b[4])/d,a[1]=.25*d,a[2]=(b[6]+b[9])/d):(d=2*Math.sqrt(1+b[10]-b[0]-b[5]),a[3]=(b[1]-b[4])/d,a[0]=(b[8]+b[2])/
d,a[1]=(b[6]+b[9])/d,a[2]=.25*d);return a};m.fromRotationTranslationScale=function(a,b,c,d){var e=b[0],f=b[1],g=b[2],k=b[3],h=e+e,l=f+f,n=g+g;b=e*h;var p=e*l,e=e*n,m=f*l,f=f*n,g=g*n,h=k*h,l=k*l,k=k*n,n=d[0],q=d[1];d=d[2];a[0]=(1-(m+g))*n;a[1]=(p+k)*n;a[2]=(e-l)*n;a[3]=0;a[4]=(p-k)*q;a[5]=(1-(b+g))*q;a[6]=(f+h)*q;a[7]=0;a[8]=(e+l)*d;a[9]=(f-h)*d;a[10]=(1-(b+m))*d;a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a};m.fromRotationTranslationScaleOrigin=function(a,b,c,d,e){var f=b[0],g=b[1],k=
b[2],h=b[3],l=f+f,n=g+g,p=k+k;b=f*l;var m=f*n,q=f*p,f=g*n,g=g*p,v=k*p,k=h*l,n=h*n,r=h*p,t=d[0],x=d[1],p=d[2];d=e[0];h=e[1];e=e[2];var l=(1-(f+v))*t,w=(m+r)*t,t=(q-n)*t,m=(m-r)*x,v=(1-(b+v))*x,x=(g+k)*x,q=(q+n)*p,g=(g-k)*p;b=(1-(b+f))*p;a[0]=l;a[1]=w;a[2]=t;a[3]=0;a[4]=m;a[5]=v;a[6]=x;a[7]=0;a[8]=q;a[9]=g;a[10]=b;a[11]=0;a[12]=c[0]+d-(l*d+m*h+q*e);a[13]=c[1]+h-(w*d+v*h+g*e);a[14]=c[2]+e-(t*d+x*h+b*e);a[15]=1;return a};m.fromQuat=function(a,b){var c=b[0],d=b[1],e=b[2];b=b[3];var f=c+c,g=d+d,k=e+e,c=
c*f,h=d*f,d=d*g,l=e*f,n=e*g,e=e*k,f=b*f,g=b*g;b*=k;a[0]=1-d-e;a[1]=h+b;a[2]=l-g;a[3]=0;a[4]=h-b;a[5]=1-c-e;a[6]=n+f;a[7]=0;a[8]=l+g;a[9]=n-f;a[10]=1-c-d;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};m.frustum=function(a,b,c,d,e,f,g){var k=1/(c-b),h=1/(e-d),l=1/(f-g);a[0]=2*f*k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*f*h;a[6]=0;a[7]=0;a[8]=(c+b)*k;a[9]=(e+d)*h;a[10]=(g+f)*l;a[11]=-1;a[12]=0;a[13]=0;a[14]=g*f*2*l;a[15]=0;return a};m.perspective=function(a,b,c,d,e){b=1/Math.tan(b/2);var f=void 0;a[0]=
b/c;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[11]=-1;a[12]=0;a[13]=0;a[15]=0;null!=e&&Infinity!==e?(f=1/(d-e),a[10]=(e+d)*f,a[14]=2*e*d*f):(a[10]=-1,a[14]=-2*d);return a};m.perspectiveFromFieldOfView=function(a,b,c,d){var e=Math.tan(b.upDegrees*Math.PI/180),f=Math.tan(b.downDegrees*Math.PI/180),g=Math.tan(b.leftDegrees*Math.PI/180);b=Math.tan(b.rightDegrees*Math.PI/180);var k=2/(g+b),h=2/(e+f);a[0]=k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=h;a[6]=0;a[7]=0;a[8]=-((g-b)*k*.5);a[9]=(e-
f)*h*.5;a[10]=d/(c-d);a[11]=-1;a[12]=0;a[13]=0;a[14]=d*c/(c-d);a[15]=0;return a};m.ortho=function(a,b,c,d,e,f,g){var k=1/(b-c),h=1/(d-e),l=1/(f-g);a[0]=-2*k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=-2*h;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=2*l;a[11]=0;a[12]=(b+c)*k;a[13]=(e+d)*h;a[14]=(g+f)*l;a[15]=1;return a};m.lookAt=function(a,b,c,d){var e=void 0,f=void 0,g=void 0,k=void 0,h=void 0,l=void 0,n=void 0,p=void 0,m=void 0,q=void 0,v=b[0],r=b[1];b=b[2];g=d[0];k=d[1];d=d[2];n=c[0];p=c[1];c=c[2];if(Math.abs(v-n)<
x.EPSILON&&Math.abs(r-p)<x.EPSILON&&Math.abs(b-c)<x.EPSILON)return K(a);n=v-n;p=r-p;m=b-c;q=1/Math.sqrt(n*n+p*p+m*m);n*=q;p*=q;m*=q;e=k*m-d*p;f=d*n-g*m;g=g*p-k*n;(q=Math.sqrt(e*e+f*f+g*g))?(q=1/q,e*=q,f*=q,g*=q):g=f=e=0;k=p*g-m*f;h=m*e-n*g;l=n*f-p*e;(q=Math.sqrt(k*k+h*h+l*l))?(q=1/q,k*=q,h*=q,l*=q):l=h=k=0;a[0]=e;a[1]=k;a[2]=n;a[3]=0;a[4]=f;a[5]=h;a[6]=p;a[7]=0;a[8]=g;a[9]=l;a[10]=m;a[11]=0;a[12]=-(e*v+f*r+g*b);a[13]=-(k*v+h*r+l*b);a[14]=-(n*v+p*r+m*b);a[15]=1;return a};m.targetTo=function(a,b,c,
d){var e=b[0],f=b[1];b=b[2];var g=d[0],k=d[1],h=d[2];d=e-c[0];var l=f-c[1];c=b-c[2];var n=d*d+l*l+c*c;0<n&&(n=1/Math.sqrt(n),d*=n,l*=n,c*=n);var m=k*c-h*l,h=h*d-g*c,g=g*l-k*d,n=m*m+h*h+g*g;0<n&&(n=1/Math.sqrt(n),m*=n,h*=n,g*=n);a[0]=m;a[1]=h;a[2]=g;a[3]=0;a[4]=l*g-c*h;a[5]=c*m-d*g;a[6]=d*h-l*m;a[7]=0;a[8]=d;a[9]=l;a[10]=c;a[11]=0;a[12]=e;a[13]=f;a[14]=b;a[15]=1;return a};m.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+
", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"};m.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2))};m.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=
b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];a[9]=b[9]+c[9];a[10]=b[10]+c[10];a[11]=b[11]+c[11];a[12]=b[12]+c[12];a[13]=b[13]+c[13];a[14]=b[14]+c[14];a[15]=b[15]+c[15];return a};m.subtract=N;m.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12]*c;a[13]=b[13]*c;a[14]=b[14]*c;a[15]=b[15]*c;return a};m.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+
c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;a[9]=b[9]+c[9]*d;a[10]=b[10]+c[10]*d;a[11]=b[11]+c[11]*d;a[12]=b[12]+c[12]*d;a[13]=b[13]+c[13]*d;a[14]=b[14]+c[14]*d;a[15]=b[15]+c[15]*d;return a};m.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===
b[14]&&a[15]===b[15]};m.equals=function(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],k=a[5],h=a[6],l=a[7],m=a[8],p=a[9],u=a[10],q=a[11],v=a[12],r=a[13],t=a[14];a=a[15];var J=b[0],w=b[1],y=b[2],z=b[3],A=b[4],I=b[5],C=b[6],D=b[7],E=b[8],F=b[9],G=b[10],H=b[11],B=b[12],K=b[13],L=b[14];b=b[15];return Math.abs(c-J)<=x.EPSILON*Math.max(1,Math.abs(c),Math.abs(J))&&Math.abs(d-w)<=x.EPSILON*Math.max(1,Math.abs(d),Math.abs(w))&&Math.abs(e-y)<=x.EPSILON*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(f-z)<=x.EPSILON*
Math.max(1,Math.abs(f),Math.abs(z))&&Math.abs(g-A)<=x.EPSILON*Math.max(1,Math.abs(g),Math.abs(A))&&Math.abs(k-I)<=x.EPSILON*Math.max(1,Math.abs(k),Math.abs(I))&&Math.abs(h-C)<=x.EPSILON*Math.max(1,Math.abs(h),Math.abs(C))&&Math.abs(l-D)<=x.EPSILON*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(m-E)<=x.EPSILON*Math.max(1,Math.abs(m),Math.abs(E))&&Math.abs(p-F)<=x.EPSILON*Math.max(1,Math.abs(p),Math.abs(F))&&Math.abs(u-G)<=x.EPSILON*Math.max(1,Math.abs(u),Math.abs(G))&&Math.abs(q-H)<=x.EPSILON*Math.max(1,
Math.abs(q),Math.abs(H))&&Math.abs(v-B)<=x.EPSILON*Math.max(1,Math.abs(v),Math.abs(B))&&Math.abs(r-K)<=x.EPSILON*Math.max(1,Math.abs(r),Math.abs(K))&&Math.abs(t-L)<=x.EPSILON*Math.max(1,Math.abs(t),Math.abs(L))&&Math.abs(a-b)<=x.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};m.mul=L;m.sub=N});