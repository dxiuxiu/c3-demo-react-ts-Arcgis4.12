// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/gl-matrix-2/mat2d ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../../../../../symbols/cim/enums ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./WGLBaseMarkerTemplate ./WGLMeshTemplate".split(" "),
function(w,A,H,I,J,k,E,K,u,F,B,y,L,n,G,M,N){Object.defineProperty(A,"__esModule",{value:!0});var O=J.getLogger("esri.views.2d.engine.webgl.WGLMeshTemplate");w=function(w){function p(h,a,k,q,m,c,f,r,l,p,z,C,y,D,b,x,t,v){var g=w.call(this)||this;if(200<c||200<f)O.error(new I("mapview-oversized-resource","Marker size was clamped to the maximum allowed value of 200x200 pixels")),c>f?(f*=200/c,c=200):(c*=200/f,f=200);g.height=f;g.width=c;g.xOffset=a;g.yOffset=k;var d=F.vec2f32.create(),e=K.mat2df32.create();
z=(D===B.Alignment.MAP?1:0)|(z?1:0)<<1|(y?1:0)<<2|(C?1:0)<<3;C=b&&b.sdf;E.mat2d.translate(e,e,F.vec2f32.fromValues(a,-k));q&&E.mat2d.rotate(e,e,3.14159265359/180*q);h=G.MarkerMaterialKey.load(G.createMaterialKey(g.geometryType,h,!1));h.sdf=C;h.pattern=!0;h.textureBinding=b.textureBinding;g._materialKey=h.data;g._fillColor=m;g._outlineColor=l;g._sizeOutlineWidth=n.i8888to32(Math.round(Math.sqrt(256*c)),Math.round(Math.sqrt(256*f)),Math.round(Math.sqrt(256*p)),Math.round(Math.sqrt(256*r)));m=b.rect.x/
4;r=b.rect.y/4;l=m+b.rect.width/4;p=r+b.rect.height/4;x=.5-((.5+x)*b.width+1)/b.rect.width;t=.5-((.5+t)*b.height+1)/b.rect.height;h=Math.round(Math.min(64*v,255));c*=b.rect.width/b.width*v;f*=b.rect.height/b.height*v;b=(x-.5)*c;t=(t-.5)*f;u.vec2.set(d,b,t);u.vec2.transformMat2d(d,d,e);g._offsetUpperLeft=n.i1616to32(16*d[0],16*d[1]);g._texUpperLeft=n.i8888to32(m,r,z,h);u.vec2.set(d,b+c,t);u.vec2.transformMat2d(d,d,e);g._offsetUpperRight=n.i1616to32(16*d[0],16*d[1]);g._texUpperRight=n.i8888to32(l,r,
z,h);u.vec2.set(d,b,t+f);u.vec2.transformMat2d(d,d,e);g._offsetBottomLeft=n.i1616to32(16*d[0],16*d[1]);g._texBottomLeft=n.i8888to32(m,p,z,h);u.vec2.set(d,b+c,t+f);u.vec2.transformMat2d(d,d,e);g._offsetBottomRight=n.i1616to32(16*d[0],16*d[1]);g._texBottomRight=n.i8888to32(l,p,z,h);return g}H(p,w);p.fromCIMMarker=function(h,a,e){var q=a.size,m=(e&&e.width||1)/(e&&e.height||1)*a.scaleX,c=a.scaleSymbolsProportionally&&a.frameHeight?q/a.frameHeight:1,f=y.premultiplyAlphaRGBA(a.color),r=y.premultiplyAlphaRGBA(a.outlineColor),
l=k.pt2px(q),n=l*m,u=k.pt2px(a.offsetX||0),w=k.pt2px(a.offsetY||0),c=k.pt2px(a.outlineWidth||0)*c,A=a.alignment||B.Alignment.SCREEN,D=k.pt2px(a.referenceSize),b=a.rotation||0;a.rotateClockwise||(b=-b);var x=0,t=0,v=a.anchorPoint;v&&(a.isAbsoluteAnchorPoint?q&&(x=-v.x/(q*m),t=v.y/q):(x=v.x,t=v.y));return new p(h,u,w,b,f,n,l,D,r,c,a.colorLocked,a.scaleSymbolsProportionally,!1,A,e,x,t,a.sizeRatio)};p.fromPictureMarker=function(h,a,e){var q=Math.round(k.pt2px(a.width)),m=Math.round(k.pt2px(a.height)),
c=L.PICTURE_FILL_COLOR,f=Math.round(k.pt2px(a.xoffset||0)),r=Math.round(k.pt2px(a.yoffset||0));return new p(h,f,r,a.angle,c,q,m,m,0,0,!1,!1,!1,B.Alignment.SCREEN,e,0,0,1)};p.fromSimpleMarker=function(h,a,e){var q=y.premultiplyAlphaRGBA(a.color),m=Math.round(k.pt2px(a.size)),c=Math.round(k.pt2px(a.xoffset||0)),f=Math.round(k.pt2px(a.yoffset||0)),r=a.style,l=a.outline,n=(l&&l.color&&y.premultiplyAlphaRGBA(l.color))|0,l=(l&&l.width&&Math.round(k.pt2px(l.width)))|0;return new p(h,c,f,a.angle,q,m,m,m,
n,l,!1,!1,"cross"===r||"x"===r,B.Alignment.SCREEN,e,0,0,1.96875)};return p}(M.default(N.default));A.default=w});