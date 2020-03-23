// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/gl-matrix-2/mat2d ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../../../../../symbols/cim/enums ../../color ../../number ../../materialKey/MaterialKey ./util ./WGLBaseMarkerTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),
function(v,z,D,E,F,p,A,G,m,B,H,r,k,C,d,I,J,K){Object.defineProperty(z,"__esModule",{value:!0});var L=3.14159265359/180,b=B.vec2f32.create(),l=G.mat2df32.create(),M=F.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");v=function(v){function q(b,c){var g=v.call(this,c)||this;g._cimMarkerLayer=c;var k=0;d.isFunction(c.color)||(k=r.premultiplyAlphaRGBA(c.color));g._dynamicPropertyMap.set("_fillColor",function(a,e,b){return d.isFunction(c.color)?r.premultiplyAlphaRGBA(c.color(a,e,b)):k});
var a=0;d.isFunction(c.outlineColor)||(a=r.premultiplyAlphaRGBA(c.outlineColor));g._dynamicPropertyMap.set("_outlineColor",function(b,e,f){return d.isFunction(c.outlineColor)?r.premultiplyAlphaRGBA(c.outlineColor(b,e,f)):a});var n;d.isFunction(c.size)||(n=p.pt2px(c.size));g._dynamicPropertyMap.set("_size",function(a,e,b){return d.isFunction(c.size)?p.pt2px(c.size(a,e,b)):n});var l;d.isFunction(c.scaleX)||(l=c.scaleX);g._dynamicPropertyMap.set("_scaleX",function(a,b,f){return d.isFunction(c.scaleX)?
c.scaleX(a,b,f):l});var t;d.isFunction(c.offsetX)||(t=p.pt2px(c.offsetX));g._dynamicPropertyMap.set("xOffset",function(a,b,f){return d.isFunction(c.offsetX)?p.pt2px(c.offsetX(a,b,f)):t});var h;d.isFunction(c.offsetY)||(h=p.pt2px(c.offsetY));g._dynamicPropertyMap.set("yOffset",function(a,b,f){return d.isFunction(c.offsetY)?p.pt2px(c.offsetY(a,b,f)):h});var u;d.isFunction(c.outlineWidth)||(u=p.pt2px(c.outlineWidth));g._dynamicPropertyMap.set("_outlineWidth",function(a,b,f){return d.isFunction(c.outlineWidth)?
p.pt2px(c.outlineWidth(a,b,f)):u});var m;d.isFunction(c.rotation)||(m=c.rotation);g._dynamicPropertyMap.set("_angle",function(a,b,f){return d.isFunction(c.rotation)?c.rotation(a,b,f):m});g._bitSet=(c.alignment===H.Alignment.MAP?1:0)|(c.colorLocked?1:0)<<1|(c.scaleSymbolsProportionally?1:0)<<3;g._materialKey=C.createMaterialKey(g.geometryType,b,!1);return g}D(q,v);q.fromCIMMarker=function(b,c){return new q(b,c)};q.prototype.bindFeature=function(d,c,g){var v=this,a=this._dynamicPropertyMap;a&&a.forEach(function(a,
b){v[b]=a(d,c,g)});a=this._cimMarkerLayer.materialHash;a=a(d,c,g);if((a=this._materialCache.get(a))&&K.ok(a.spriteMosaicItem)&&a.spriteMosaicItem){var a=a.spriteMosaicItem,n=this._cimMarkerLayer.sizeRatio,w=a.width/a.height*this._scaleX,t=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle,h=this._size,u=h*w,q=this.xOffset,r=this.yOffset,e=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/p.pt2px(this._cimMarkerLayer.frameHeight):1,f=this._outlineWidth*
e,z=p.pt2px(this._cimMarkerLayer.referenceSize),x=0,e=0,y=this._cimMarkerLayer.anchorPoint;y&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(x=-y.x/(this._size*w),e=y.y/this._size):(x=y.x,e=y.y));this._sizeOutlineWidth=k.i8888to32(Math.round(Math.sqrt(256*u)),Math.round(Math.sqrt(256*h)),Math.round(Math.sqrt(256*f)),Math.round(Math.sqrt(256*z)));A.mat2d.identity(l);A.mat2d.translate(l,l,B.vec2f32.fromValues(q,-r));t&&A.mat2d.rotate(l,l,L*t);w=a.rect.x/4;t=a.rect.y/4;q=w+a.rect.width/4;r=
t+a.rect.height/4;x=.5-((.5+x)*a.width+1)/a.rect.width;e=.5-((.5+e)*a.height+1)/a.rect.height;f=Math.round(64*n);u*=a.rect.width/a.width*n;h*=a.rect.height/a.height*n;n=(x-.5)*u;e=(e-.5)*h;m.vec2.set(b,n,e);m.vec2.transformMat2d(b,b,l);this._offsetUpperLeft=k.i1616to32(16*b[0],16*b[1]);this._texUpperLeft=k.i8888to32(w,t,this._bitSet,f);m.vec2.set(b,n+u,e);m.vec2.transformMat2d(b,b,l);this._offsetUpperRight=k.i1616to32(16*b[0],16*b[1]);this._texUpperRight=k.i8888to32(q,t,this._bitSet,f);m.vec2.set(b,
n,e+h);m.vec2.transformMat2d(b,b,l);this._offsetBottomLeft=k.i1616to32(16*b[0],16*b[1]);this._texBottomLeft=k.i8888to32(w,r,this._bitSet,f);m.vec2.set(b,n+u,e+h);m.vec2.transformMat2d(b,b,l);this._offsetBottomRight=k.i1616to32(16*b[0],16*b[1]);this._texBottomRight=k.i8888to32(q,r,this._bitSet,f);h=C.MarkerMaterialKey.load(this._materialKey);h.sdf=a.sdf;h.pattern=!0;h.textureBinding=a.textureBinding;this._materialKey=h.data}else M.error(E("mapview-cim","Encountered an error when binding feature"))};
return q}(I.default(J.default));z.default=v});