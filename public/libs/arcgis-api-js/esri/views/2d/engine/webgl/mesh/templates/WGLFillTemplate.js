// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/earcut/earcut ../../color ../../definitions ../../enums ../../number ../../TileClipper ../../WGLDisplayRecord ../../materialKey/MaterialKey ../Tesselator ./WGLMeshTemplate".split(" "),function(E,H,L,M,w,I,J,F,N,k,O,K,G,P,Q){Object.defineProperty(H,"__esModule",{value:!0});var R=M.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),
x=[],A=[];E=function(E){function m(h,a,d,c,f,b,e,g,p){var l=E.call(this)||this;l.fillColor=d;l.tl=c;l.br=f;l.aux1=b;l.aux2=e;l.aux3=g;l.isBFS=p;l.geometryType=N.WGLGeometryType.FILL;l.forceLibtess=!1;h=G.FillMaterialKey.load(G.createMaterialKey(l.geometryType,h,!1));a&&(h.sdf=a.sdf,h.pattern=!0,h.textureBinding=a.textureBinding);l._materialKey=h.data;l._tesselator=new P.default;l._tileClipper=new O.TileClipper(0,0,0,1,8);l._tileClipper.setExtent(F.TILE_SIZE);return l}L(m,E);m.fromCIMFill=function(h,
a,d,c){void 0===c&&(c=!1);var f=a.color,f=f&&J.premultiplyAlphaRGBA(f)||0,b=k.i8888to32(0,0,0,a.colorLocked?1:0);if(!d)return new m(h,null,f,0,0,0,0,b,c);var b=d.rect,e=d.width,g=d.height,p=b.x+1,l=b.y+1,y=p+e,z=l+g,b=k.nextHighestPowerOfTwo(w.pt2px(a.height||0));255<b?b=255:0>=b&&(b=k.nextHighestPowerOfTwo(z-l));e=k.nextHighestPowerOfTwo(w.pt2px(a.height/g*e||0));255<e?e=255:0>=e&&(e=k.nextHighestPowerOfTwo(y-p));g=w.pt2px(a.offsetX||0)+128;255<g&&(g=255);var n=w.pt2px(-a.offsetY||0)+128;255<n&&
(n=255);a=a.scaleX||1;p=k.i1616to32(p,l);y=k.i1616to32(y,z);b=k.i8888to32(e,b,g,n);a=k.i1616to32(128*a,128);return new m(h,d,f,p,y,b,a,0,c)};m.fromSimpleFill=function(h,a,d,c){void 0===c&&(c=!1);var f=a.color;a=f&&"none"!==a.style&&J.premultiplyAlphaRGBA(f)||0;f=k.i8888to32(0,0,0,c?255:0);if(!d)return new m(h,null,a,0,0,0,0,f,c);var b=d.rect,e=b.x+1,g=b.y+1,p=b.x+1+d.width,l=b.y+1+d.height,b=k.i1616to32(e,g),y=k.i1616to32(p,l),e=k.i8888to32(k.nextHighestPowerOfTwo(p-e),k.nextHighestPowerOfTwo(l-g),
0,0),g=k.i1616to32(128,128);return new m(h,d,a,b,y,e,g,f,c)};m.fromPictureFill=function(h,a,d,c){void 0===c&&(c=!1);var f=F.PICTURE_FILL_COLOR,b=d.rect,e=b.x+1,g=b.y+1,b=e+d.width,p=g+d.height,e=k.i1616to32(e,g),b=k.i1616to32(b,p),p=k.nextHighestPowerOfTwo(w.pt2px(a.width));255<p&&(p=255);g=k.nextHighestPowerOfTwo(w.pt2px(a.height));255<g&&(g=255);var l=w.pt2px(a.xoffset)+128;255<l&&(l=255);var y=w.pt2px(-a.yoffset)+128;255<y&&(y=255);p=k.i8888to32(p,g,l,y);a=k.i1616to32(128*a.xscale,128*a.yscale);
g=k.i8888to32(0,0,0,c?255:0);return new m(h,d,f,e,b,p,a,g,c)};m.prototype.writeMesh=function(h,a,d,c,f){x.length=0;if("esriGeometryPolygon"!==d)R.error("Unable to handle geometryType: "+d);else{var b=f.geometry;d=G.FillMaterialKey.load(this._materialKey);var e=(f=this._isClippingRequired(b))?this._clip(b,!1):b.rings;if(d.dotDensity){for(var b=b.rings,g=0,p=0;p<b.length;p++)for(var l=b[p],k=l[0],m=k[0],k=k[1],n=1;n<l.length;n++)var t=l[n],q=m+t[0],t=k+t[1],g=g-(q-m)*(t+k)/2,m=q,k=t;b=g}else b=0;this.forceLibtess?
this._writeMeshLibtess(h,a,c,e,f,d,b):this._writeMeshEarcut(h,a,c,e,f,d,b)||this._writeMeshLibtess(h,a,c,e,f,d,b)}};m.prototype._isClippingRequired=function(h){var a=F.TILE_SIZE+8,d=0;for(h=h.rings;d<h.length;d++){var c=h[d],f=c.length;if(!(3>f)){var b=c[0][0],e=c[0][1];if(-8>b||b>a||-8>e||e>a)return!0;for(var g=1;g<f;++g)if(b+=c[g][0],e+=c[g][1],-8>b||b>a||-8>e||e>a)return!0}}return!1};m.prototype._clip=function(h,a){var d;this._tileClipper.reset(3);for(var c=0,f=h.rings;c<f.length;c++){var b=f[c],
e=b.length;if(!(3>e)){h=b[0][0];d=b[0][1];this._tileClipper.moveTo(h,d);for(var g=1;g<e;++g)h+=b[g][0],d+=b[g][1],this._tileClipper.lineTo(h,d);this._tileClipper.close()}}return this._tileClipper.result(a)};m.prototype._writeMeshLibtess=function(h,a,d,c,f,b,e){if(c&&c.length){var g=[],p=a.indexVector;a=a.getVector("geometry");var l=new K(d,this.geometryType,this._materialKey),k=a.vertexCount;l.vertexFrom=k;l.indexFrom=p.length;this._tesselator.beginPolygon(x,g);for(var m=0;m<c.length;m++){var n=c[m];
if(!(3>n.length)){this._tesselator.beginContour();var t=void 0,q=void 0;f?(t=n[0].x,q=n[0].y):(t=n[0][0],q=n[0][1]);var r=[t,q,0];this._tesselator.addVertex(r,r);for(r=1;r<n.length-1;r++){var u=void 0,v=void 0;f?(t=n[r].x,q=n[r].y):(u=n[r][0],v=n[r][1],t+=u,q+=v);u=[t,q,0];this._tesselator.addVertex(u,u)}this._tesselator.endContour()}}this._tesselator.endPolygon();this._writeVerticesLibTess(l,a,d,x,b,e);this._writeIndicesLibTess(l,p,k,g);0<l.indexCount&&h.push(l)}};m.prototype._writeMeshEarcut=function(h,
a,d,c,f,b,e){if(c&&c.length){var g=a.indexVector;a=a.getVector("geometry");var k=new K(d,this.geometryType,this._materialKey),l=g.length,m=a.data.length;k.vertexFrom=a.vertexCount;k.indexFrom=g.length;for(var z=0,n=0,t=0;t<c.length;t++){var q=c[t],r=n,u=void 0,v=void 0;f?(u=q[0].x,v=q[0].y):(u=q[0][0],v=q[0][1]);x[n++]=u;x[n++]=v;for(var w=0,B=1;B<q.length;++B){var C=void 0,D=void 0;f?(C=u,D=v,u=q[B].x,v=q[B].y,C=u-C,D=v-D):(C=q[B][0],D=q[B][1],u+=C,v+=D);w-=C*(v+v-D);x[n++]=u;x[n++]=v}if(0<w){if(0<
r-z){if(!this._write(k,g,a,d,x,A,z,r,b,e))return g.seek(l),a.data.seek(m),x.length=A.length=0,!1;z=r}A.length=0}else 0>w?0<r-z?A.push(.5*(r-z)):n=r:n=r}if(0<n-z&&!this._write(k,g,a,d,x,A,z,n,b,e))return g.seek(l),a.data.seek(m),x.length=A.length=0,!1;x.length=A.length=0;h.push(k);return!0}};m.prototype._write=function(h,a,d,c,f,b,e,g,k,l){f=f.slice(e,g);e=I(f,b,2);if(I.deviation(f,b,2,e))return!1;if(e.length)return b=d.vertexCount,this._writeVertices(h,d,c,f,k,l),this._writeIndices(h,a,b,e),!0};m.prototype._writeVertices=
function(h,a,d,c,f,b){for(var e=0;e<c.length;e+=2){var g=k.i1616to32(c[e],c[e+1]);a.data.push(g);a.data.push(d);f.dotDensity?a.data.writeF32(1/b):(a.data.push(this.fillColor),a.data.push(this.tl),a.data.push(this.br),a.data.push(this.aux1),a.data.push(this.aux2),a.data.push(this.aux3));h.vertexCount++}};m.prototype._writeIndices=function(h,a,d,c){for(var f=0;f<c.length;f+=3)a.push(d+c[f]),a.push(d+c[f+1]),a.push(d+c[f+2]),h.indexCount+=3};m.prototype._writeVerticesLibTess=function(h,a,d,c,f,b){for(var e=
0;e<c.length;e+=2){var g=k.i1616to32(c[e],c[e+1]);a.data.push(g);a.data.push(d);f.dotDensity?a.data.writeF32(1/b):(a.data.push(this.fillColor),a.data.push(this.tl),a.data.push(this.br),a.data.push(this.aux1),a.data.push(this.aux2),a.data.push(this.aux3));h.vertexCount++}};m.prototype._writeIndicesLibTess=function(h,a,d,c){for(var f=0;f<c.length;f++)a.push(d+c[f]),h.indexCount++};return m}(Q.default);H.default=E});