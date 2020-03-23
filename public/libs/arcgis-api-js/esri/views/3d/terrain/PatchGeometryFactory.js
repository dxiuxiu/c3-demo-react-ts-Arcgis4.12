// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4 ../../../geometry/support/aaBoundingBox ../support/earthUtils ../support/mathUtils ../support/buffer/BufferPool ../support/buffer/InterleavedLayout ./ElevationData ./TerrainConst ../webgl-engine/lib/Util ../webgl-engine/materials/internal/MaterialUtil".split(" "),function(oa,P,S,W,X,Y,Q,ia,ja,ka,Z,O,aa,la){function ba(b,c,k,g){var y=0<(k&2),z=c+(g?1024:0)+(y?2048:
0),m=T.get(z);if(!m){var m=c-1,A=c-1,v=c*c,a=2*m+2*A,B=m*A*6,D=6*a,E=6*(2*m+A-1);g&&(B*=2,D*=2,E*=2);for(var a=65536<v+a?new Uint32Array(B+D):new Uint16Array(B+D),q=0,h=0,d=B,e,t,f,n,J=0,p=0;p<=A;p++){y&&(J=0===p?E:p===A?-E:0);for(var d=d+J,r=0;r<=m;r++)f=U(r,p,m,A),-1<f&&(n=0===p&&r!==m?1:r===m&&p!==A?m+1:p===A&&0!==r?-1:0===r&&0!==p?-(m+1):0,0!==n&&(e=q,t=v+f,f=v+(0===r&&1===p?0:f+1),n=q+n,g?(a[d+0]=e,a[d+1]=t,a[d+2]=t,a[d+3]=f,a[d+4]=f,a[d+5]=e,a[d+6]=f,a[d+7]=n,a[d+8]=n,a[d+9]=e,a[d+10]=e,a[d+
11]=f,d+=12):(a[d+0]=e,a[d+1]=t,a[d+2]=f,a[d+3]=f,a[d+4]=n,a[d+5]=e,d+=6))),++q,r<m&&p<A&&(e=p*(m+1)+r,t=e+1,f=t+(m+1),n=f-1,g?(a[h+0]=e,a[h+1]=t,a[h+2]=t,a[h+3]=f,a[h+4]=f,a[h+5]=e,a[h+6]=f,a[h+7]=n,a[h+8]=n,a[h+9]=e,a[h+10]=e,a[h+11]=f,h+=12):(a[h+0]=e,a[h+1]=t,a[h+2]=f,a[h+3]=f,a[h+4]=n,a[h+5]=e,h+=6));d-=J}m={values:a,numSurfaceIndices:B,numSkirtIndices:D};T.set(z,m)}b.indices=m.values;b.numSurfaceIndices=m.numSurfaceIndices;b.numSkirtIndices=m.numSkirtIndices;b.numWithoutSkirtIndices=b.numSurfaceIndices+
(k?6*(c-1)*(g?2:1):0)}function V(b,c,k,g){b<g[0]&&(g[0]=b);b>g[3]&&(g[3]=b);c<g[1]&&(g[1]=c);c>g[4]&&(g[4]=c);k<g[2]&&(g[2]=k);k>g[5]&&(g[5]=k)}function ca(b,c){var k=c>b?1:0;return 2+4*k+(1-2*k)*(b+c)}function U(b,c,k,g){return 0===c?b:b===k?k+c:c===g?k+g+(k-b):0===b&&0<c?2*k+g+(g-c):-1}Object.defineProperty(P,"__esModule",{value:!0});var ma=ka.newLayout().vec3f(aa.VertexAttrConstants.POSITION).vec2f(aa.VertexAttrConstants.UV0),R=new ja.BufferPool(function(b){return ma.createBuffer(b)},function(b){return b.count});
P.clearCaches=function(){R.clear();T.clear()};P.releaseGeometry=function(b){R.release(b.vertexAttributes);b.vertexAttributes=null;b.indices=null};P.createSphericalGlobePatch=function(b,c,k,g,y,z,m,A){var v=z[0],a=z[1],B=z[2];z=z[3];var D=.1*Q.earthRadius*(z-a),E=b.numVertsPerRow-1,q=b.numVertsPerRow-1,h=b.numVertsPerRow*b.numVertsPerRow,d=R.acquire(h+(2*E+2*q)),e=d.position.typedBuffer,t=d.uv0.typedBuffer,f=g.geometryInfo.boundingBox;Y.empty(f);var n=c[2]-c[0],J=c[3]-c[1],p=B-v,B=k[0],r=k[1];k=k[2];
for(var l=0;l<=E;l++){var C=l/E,I=v+C*p;da[l]=Math.sin(I);ea[l]=Math.cos(I);fa[l]=C;ga[l]=c[0]+C*n}v=m&&!!(A&1);n=m&&!!(A&2);for(I=p=0;I<=q;I++){var u=I/q,l=ia.lerp(a,z,u),G=Math.cos(l),L=Math.sin(l),N=void 0;m?(N=Q.halfEarthRadius*Math.log((1+L)/(1-L)),u=(N-c[1])/J):N=180*l/Math.PI;for(l=0;l<=E;l++){var C=fa[l],w=da[l],K=ea[l],H=Q.earthRadius;b.samplerData&&(H+=Z.sample(ga[l],N,b.samplerData)||0);K=K*G*H-B;w=w*G*H-r;H=L*H-k;V(K,w,H,f);var F=O.GEOMETRY_VERTEX_STRIDE*p;e[F+0]=K;e[F+1]=w;e[F+2]=H;t[F+
0]=C;t[F+1]=u;F=U(l,I,E,q);if(-1<F){var F=O.GEOMETRY_VERTEX_STRIDE*(h+F),x=v&&0===I?-1:n&&I===q?1:0,K=0===x?K:-B,w=0===x?w:-r,H=0===x?H:Q.earthRadius*x-k;e[F+0]=K;e[F+1]=w;e[F+2]=H;t[F+0]=0===x?ca(C,u):C;t[F+1]=0===x?D:u;0!==x&&V(K,w,H,f)}++p}}g.geometryInfo.numVertsPerRow=b.numVertsPerRow;g.geometryInfo.vertexAttributes=d;g.geometryInfo.skirtLength=D;X.vec4.set(g.geometryInfo.uvOffsetAndScale,0,0,1,1);ba(g.geometryInfo,b.numVertsPerRow,m?A:0,y)};P.createPlanarGlobePatch=function(b,c,k,g,u){var z=
c[0],m=c[1],A=c[2]-z,v=c[3]-m,a=b.clippingArea,B=a?Math.max(0,(a[0]-c[0])/A):0,D=a?Math.max(0,(a[1]-c[1])/v):0,E=a?Math.min(1,(a[2]-c[0])/A):1;c=a?Math.min(1,(a[3]-c[1])/v):1;var q=E>B?1/(E-B):1,h=c>D?1/(c-D):1,d=-B*q,e=-D*h,t=.1*A,f=b.numVertsPerRow-1,n=b.numVertsPerRow-1,y=b.numVertsPerRow*b.numVertsPerRow,p=R.acquire(y+(2*f+2*n)),r=p.position.typedBuffer,l=p.uv0.typedBuffer,C=g.geometryInfo.boundingBox;Y.empty(C);for(var I=0,M=0;M<=n;M++){var G=M/n,L=e+G*h,G=m+G*v;a&&(G<a[1]?(G=a[1],L=0):G>a[3]&&
(G=a[3],L=1));for(var N=0;N<=f;N++){var w=N/f,K=d+w*q,w=z+w*A;a&&(w<a[0]?(w=a[0],K=0):w>a[2]&&(w=a[2],K=1));var H=b.samplerData?Z.sample(w,G,b.samplerData)||0:0,w=w-k[0],F=G-k[1],H=H-k[2];V(w,F,H,C);var x=O.GEOMETRY_VERTEX_STRIDE*I;r[x+0]=w;r[x+1]=F;r[x+2]=H;l[x+0]=K;l[x+1]=L;x=U(N,M,f,f);-1<x&&(x=O.GEOMETRY_VERTEX_STRIDE*(y+x),r[x+0]=w,r[x+1]=F,r[x+2]=H,l[x+0]=ca(K,L),l[x+1]=t);++I}}g.geometryInfo.numVertsPerRow=b.numVertsPerRow;g.geometryInfo.vertexAttributes=p;g.geometryInfo.skirtLength=t;X.vec4.set(g.geometryInfo.uvOffsetAndScale,
B,D,E-B,c-D);ba(g.geometryInfo,b.numVertsPerRow,0,u)};var T=new Map,ha=Math.pow(2,-52);P.intersectSkirts=function(b,c,k,g,y,z,m,A){var v=z.position;z=z.uv0;var a=b[0],B=b[1];b=b[2];var D=c[0]-a,E=c[1]-B;for(c=c[2]-b;k<g;k++){var q=3*k,h=3*k+1,d=3*k+2,e=v.get(y[q],0),t=v.get(y[q],1),f=v.get(y[q],2),n=v.get(y[h],0),J=v.get(y[h],1),p=v.get(y[h],2),r=v.get(y[d],0),l=v.get(y[d],1),C=v.get(y[d],2),q=z.get(y[q],0),h=z.get(y[h],0),d=z.get(y[d],0);2<=q&&(S.vec3.set(u,e,t,f),m(u),e+=u[0],t+=u[1],f+=u[2]);2<=
h&&(S.vec3.set(u,n,J,p),m(u),n+=u[0],J+=u[1],p+=u[2]);2<=d&&(S.vec3.set(u,r,l,C),m(u),r+=u[0],l+=u[1],C+=u[2]);var n=n-e,J=J-t,p=p-f,r=r-e,l=l-t,C=C-f,q=E*C-l*c,h=c*r-C*D,I=D*l-r*E,d=n*q+J*h+p*I,e=a-e,M=B-t,G=b-f,f=M*p-J*G,t=G*n-p*e,L=e*J-n*M;if(d>ha){e=e*q+M*h+G*I;if(0>e||e>d)continue;q=D*f+E*t+c*L;if(0>q||e+q>d)continue}else if(d<-ha){e=e*q+M*h+G*I;if(0<e||e<d)continue;q=D*f+E*t+c*L;if(0<q||e+q<d)continue}else continue;f=(r*f+l*t+C*L)/d;0<=f&&(n=la.computeNormal(n,J,p,r,l,C,na),A(f,n,k))}};var da=
Array(O.MAX_PATCH_TESSELATION+1),ea=Array(O.MAX_PATCH_TESSELATION+1),fa=Array(O.MAX_PATCH_TESSELATION+1),ga=Array(O.MAX_PATCH_TESSELATION+1),u=W.vec3f64.create(),na=W.vec3f64.create()});