// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(na,da){function K(b,c,a,d,e,f){if(!(1E-6>c[0]*c[0]+c[1]*c[1]+c[2]*c[2]))for(y(ea,a,c),y(fa,d,c),y(ga,e,c),F(b,c,g),M[1]=g[0],N[1]=g[1],W[1]=N[1]-M[1],a=[a,d,e],d=[ea,fa,ga],e=0;3>e;++e){F(b,a[e],g);M[0]=g[0];N[0]=g[1];F(b,d[e],g);M[2]=g[0];N[2]=g[1];W[0]=N[0]-M[0];W[2]=N[2]-M[2];var n=aa(W);n<f.quality&&(w(f.b0,a[e]),w(f.b1,c),w(f.b2,d[e]),f.quality=n)}}function F(b,c,a){var d=b.data,e=b.offsetIdx;b=b.strideIdx;a[0]=Number.POSITIVE_INFINITY;for(a[1]=Number.NEGATIVE_INFINITY;e<
d.length;e+=b){var f=d[e]*c[0]+d[e+1]*c[1]+d[e+2]*c[2];a[0]=Math.min(a[0],f);a[1]=Math.max(a[1],f)}}function ha(b,c,a){w(a.center,b);L(a.halfSize,c,.5);a.quaternion[0]=0;a.quaternion[1]=0;a.quaternion[2]=0;a.quaternion[3]=1}function ia(b,c,a,d,e,f){F(b,c,g);e[0]=g[0];f[0]=g[1];F(b,a,g);e[1]=g[0];f[1]=g[1];F(b,d,g);e[2]=g[0];f[2]=g[1]}function ja(b,c,a,d,e,f,n){r[0]=b[0];r[1]=b[1];r[2]=b[2];r[3]=c[0];r[4]=c[1];r[5]=c[2];r[6]=a[0];r[7]=a[1];r[8]=a[2];var g=n.quaternion,h=r,l=h[0]+h[4]+h[8];if(0<l)l=
Math.sqrt(l+1),g[3]=.5*l,l=.5/l,g[0]=(h[5]-h[7])*l,g[1]=(h[6]-h[2])*l,g[2]=(h[1]-h[3])*l;else{var p=0;h[4]>h[0]&&(p=1);h[8]>h[3*p+p]&&(p=2);var m=(p+1)%3,k=(p+2)%3,l=Math.sqrt(h[3*p+p]-h[3*m+m]-h[3*k+k]+1);g[p]=.5*l;l=.5/l;g[3]=(h[3*m+k]-h[3*k+m])*l;g[m]=(h[3*m+p]+h[3*p+m])*l;g[k]=(h[3*k+p]+h[3*p+k])*l}X(O,d,e);L(O,O,.5);L(n.center,b,O[0]);L(Y,c,O[1]);X(n.center,n.center,Y);L(Y,a,O[2]);X(n.center,n.center,Y);L(n.halfSize,f,.5)}function aa(b){return b[0]*b[1]+b[0]*b[2]+b[1]*b[2]}function X(b,c,a){b[0]=
c[0]+a[0];b[1]=c[1]+a[1];b[2]=c[2]+a[2]}function z(b,c,a){b[0]=c[0]-a[0];b[1]=c[1]-a[1];b[2]=c[2]-a[2]}function L(b,c,a){b[0]=c[0]*a;b[1]=c[1]*a;b[2]=c[2]*a}function w(b,c,a){void 0===a&&(a=0);b[0]=c[a+0];b[1]=c[a+1];b[2]=c[a+2]}function y(b,c,a){var d=c[0],e=c[1];c=c[2];var f=a[0],g=a[1];a=a[2];b[0]=e*a-c*g;b[1]=c*f-d*a;b[2]=d*g-e*f}function q(b,c){var a=c[0]*c[0]+c[1]*c[1]+c[2]*c[2];0<a&&(a=1/Math.sqrt(a),b[0]=c[0]*a,b[1]=c[1]*a,b[2]=c[2]*a)}function ba(b,c){var a=c[0]-b[0],d=c[1]-b[1];b=c[2]-b[2];
return a*a+d*d+b*b}Object.defineProperty(da,"__esModule",{value:!0});var S=[0,0,0],Z=[0,0,0];da.computeOBB=function(b,c){var a=b.data.length/b.strideIdx;if(!(0>=a)){var d=new la(b);X(S,d.minProj,d.maxProj);L(S,S,.5);z(Z,d.maxProj,d.minProj);var e=aa(Z),f=new ma;f.quality=e;14>a&&(b={data:new Float64Array(d.buffer,112,42),size:3,offsetIdx:0,strideIdx:3});var n=[0,0,0],r=[0,0,0],h=[0,0,0],a=[0,0,0],l=[0,0,0],p=[0,0,0],m=[0,0,0],k;k=b;for(var G=ba(d.maxVert[0],d.minVert[0]),u=0,t=1;7>t;++t){var A=ba(d.maxVert[t],
d.minVert[t]);A>G&&(G=A,u=t)}w(n,d.minVert[u]);w(r,d.maxVert[u]);if(1E-6>ba(n,r))k=1;else{z(a,n,r);q(a,a);d=k.data;G=k.strideIdx;u=Number.NEGATIVE_INFINITY;t=0;for(A=k.offsetIdx;A<d.length;A+=G){B[0]=d[A]-n[0];B[1]=d[A+1]-n[1];B[2]=d[A+2]-n[2];var v=a[0]*B[0]+a[1]*B[1]+a[2]*B[2],v=B[0]*B[0]+B[1]*B[1]+B[2]*B[2]-v*v/(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);v>u&&(u=v,t=A)}w(h,d,t);1E-6>u?k=2:(z(l,r,h),q(l,l),z(p,h,n),q(p,p),y(m,l,a),q(m,m),K(k,m,a,l,p,f),k=0)}switch(k){case 1:ha(S,Z,c);return;case 2:e=b;w(x,
a);Math.abs(a[0])>Math.abs(a[1])&&Math.abs(a[0])>Math.abs(a[2])?x[0]=0:Math.abs(a[1])>Math.abs(a[2])?x[1]=0:x[2]=0;1E-6>x[0]*x[0]+x[1]*x[1]+x[2]*x[2]&&(x[0]=x[1]=x[2]=1);y(P,a,x);q(P,P);y(T,a,P);q(T,T);ia(e,a,P,T,Q,R);z(ka,R,Q);ja(a,P,T,Q,R,ka,c);return}k=b;d=U;G=V;u=g;t=k.data;v=k.offsetIdx;A=k.strideIdx;w(G,t,v);w(d,G);u[0]=ca[0]*m[0]+ca[1]*m[1]+ca[2]*m[2];u[1]=u[0];for(v+=A;v<t.length;v+=A){var F=t[v]*m[0]+t[v+1]*m[1]+t[v+2]*m[2];F<u[0]&&(u[0]=F,w(G,t,v));F>u[1]&&(u[1]=F,w(d,t,v))}m=n[0]*m[0]+
n[1]*m[1]+n[2]*m[2];g[1]-1E-6<=m&&(d[0]=void 0);g[0]+1E-6>=m&&(G[0]=void 0);void 0!==U[0]&&(z(C,U,n),q(C,C),z(D,U,r),q(D,D),z(E,U,h),q(E,E),y(H,D,a),q(H,H),y(I,E,l),q(I,I),y(J,C,p),q(J,J),K(k,H,a,D,C,f),K(k,I,l,E,D,f),K(k,J,p,C,E,f));void 0!==V[0]&&(z(C,V,n),q(C,C),z(D,V,r),q(D,D),z(E,V,h),q(E,E),y(H,D,a),q(H,H),y(I,E,l),q(I,I),y(J,C,p),q(J,J),K(k,H,a,D,C,f),K(k,I,l,E,D,f),K(k,J,p,C,E,f));ia(b,f.b0,f.b1,f.b2,Q,R);b=[0,0,0];z(b,R,Q);f.quality=aa(b);f.quality<e?ja(f.b0,f.b1,f.b2,Q,R,b,c):ha(S,Z,c)}};
var U=[0,0,0],V=[0,0,0],C=[0,0,0],D=[0,0,0],E=[0,0,0],H=[0,0,0],I=[0,0,0],J=[0,0,0],B=[0,0,0],g=[0,0],ea=[0,0,0],fa=[0,0,0],ga=[0,0,0],N=[0,0,0],M=[0,0,0],W=[0,0,0],ca=[0,0,0],x=[0,0,0],P=[0,0,0],T=[0,0,0],Q=[0,0,0],R=[0,0,0],ka=[0,0,0],Y=[0,0,0],r=[1,0,0,0,1,0,0,0,1],O=[0,0,0],la=function(){return function(b){this.minVert=Array(7);this.maxVert=Array(7);this.buffer=new ArrayBuffer(448);var c=0;this.minProj=new Float64Array(this.buffer,c,7);c+=56;this.maxProj=new Float64Array(this.buffer,c,7);for(var c=
c+56,a=0;7>a;++a)this.minVert[a]=new Float64Array(this.buffer,c,3),c+=24;for(a=0;7>a;++a)this.maxVert[a]=new Float64Array(this.buffer,c,3),c+=24;for(a=0;7>a;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;for(var c=Array(7),d=Array(7),e=b.data,f=b.strideIdx,a=b.offsetIdx;a<e.length;a+=f)b=e[a],b<this.minProj[0]&&(this.minProj[0]=b,c[0]=a),b>this.maxProj[0]&&(this.maxProj[0]=b,d[0]=a),b=e[a+1],b<this.minProj[1]&&(this.minProj[1]=b,c[1]=a),b>this.maxProj[1]&&(this.maxProj[1]=
b,d[1]=a),b=e[a+2],b<this.minProj[2]&&(this.minProj[2]=b,c[2]=a),b>this.maxProj[2]&&(this.maxProj[2]=b,d[2]=a),b=e[a]+e[a+1]+e[a+2],b<this.minProj[3]&&(this.minProj[3]=b,c[3]=a),b>this.maxProj[3]&&(this.maxProj[3]=b,d[3]=a),b=e[a]+e[a+1]-e[a+2],b<this.minProj[4]&&(this.minProj[4]=b,c[4]=a),b>this.maxProj[4]&&(this.maxProj[4]=b,d[4]=a),b=e[a]-e[a+1]+e[a+2],b<this.minProj[5]&&(this.minProj[5]=b,c[5]=a),b>this.maxProj[5]&&(this.maxProj[5]=b,d[5]=a),b=e[a]-e[a+1]-e[a+2],b<this.minProj[6]&&(this.minProj[6]=
b,c[6]=a),b>this.maxProj[6]&&(this.maxProj[6]=b,d[6]=a);for(a=0;7>a;++a)b=c[a],w(this.minVert[a],e,b),b=d[a],w(this.maxVert[a],e,b)}}(),ma=function(){return function(){this.b0=[1,0,0];this.b1=[0,1,0];this.b2=[0,0,1];this.quality=0}}()});