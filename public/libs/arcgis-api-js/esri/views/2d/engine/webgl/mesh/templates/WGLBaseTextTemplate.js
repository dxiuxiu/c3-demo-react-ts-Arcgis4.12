// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/libs/gl-matrix-2/mat2d ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../definitions ../../enums ../../number ../../TextShapingNew ../../WGLDisplayRecord ../../collisions/BoundingBox ../../materialKey/MaterialKey ./ComputedGlyph".split(" "),function(M,
p,C,D,E,r,F,q,u,v,G,w,x,A,H,B,I){Object.defineProperty(p,"__esModule",{value:!0});var J=E.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),K=Math.PI/180,L=F.mat2df32.create(),y=u.vec2f32.create();p.default=function(p){return function(p){function h(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];b=p.apply(this,b)||this;b.geometryType=G.WGLGeometryType.TEXT;return b}C(h,p);h.prototype.bindTextInfo=function(b,a,c){b=this._computeShaping(b,this._justify).getShaping(a,c);isNaN(this._decorationTop)||
x.TextShaping.addDecoration(b,this._decorationTop);this._shapedGlyphs=b;this._shapedBox=x.TextShaping.getBox(b)};h.prototype.writeMesh=function(b,a,c,e,d){var f=this._computedGlyphs;if(f){var g=B.TextMaterialKey.load(this._materialKey),m=w.i8888to32(0,0,0,this._bitset);switch(c){case "esriGeometryPoint":d=d.geometry;c=d.x;d=d.y;for(var k=0;k<f.length;k++){var l=f[k];l.anchorX=c;l.anchorY=d}this._writeVertices(b,a,e,f,g,m,0,0);break;case "esriGeometryPolygon":if(d.centroid){d=d.centroid;c=d.x;d=d.y;
for(k=0;k<f.length;k++)l=f[k],l.anchorX=c,l.anchorY=d;this._writeVertices(b,a,e,f,g,m,0,0);break}case "esriGeometryMultipoint":for(var k=d.geometry.points,z=d=c=0;z<k.length;z++){l=k[z];c+=l[0];d+=l[1];for(var n=0,h=f;n<h.length;n++)l=h[n],l.anchorX=c,l.anchorY=d;this._writeVertices(b,a,e,f,g,m,0,0)}break;default:b=void 0,void 0===b&&(b="mapview-processing"),J.error(D(b,"Unable to handle geometryType: "+c))}}};h.prototype._computeGlyphs=function(b,a){if(b&&0!==b.length){var c=Array(b.length);a=this._computeGlyphTransform(a);
for(var e=B.MaterialKeyBase.load(this._materialKey),d=0;d<b.length;d++){var f=b[d],g=f.x,m=f.y,k=f.codePoint,f=f.glyphMosaicItem;e.textureBinding=f.textureBinding;c[d]=I.default.from(g,m,0,0,-1,0,25,f,k,e.data,a,this._size,this._haloSize,!1,!0)}this._computedGlyphs=c}};h.prototype._createBounds=function(b,a){var c=b.width/2,e=b.height/2,d=a[4],f=a[5],g;if(this._angle){b=u.vec2f32.fromValues(-c,-e);g=u.vec2f32.fromValues(c,-e);var m=u.vec2f32.fromValues(-c,e),k=u.vec2f32.fromValues(c,e);q.vec2.transformMat2d(b,
b,a);q.vec2.transformMat2d(g,g,a);q.vec2.transformMat2d(m,m,a);q.vec2.transformMat2d(k,k,a);a=e=Infinity;var l=0,h=c=0;for(b=[b,g,m,k];h<b.length;h++)g=b[h],e=Math.min(g[0],e),l=Math.max(g[0],l),a=Math.min(g[1],a),c=Math.max(g[1],c);g=l-e;b=c-a}else g=b.width*this._scale,b=b.height*this._scale;return new H.default(d,f,g+v.COLLISION_BOX_PADDING,b+v.COLLISION_BOX_PADDING)};h.prototype._computeShaping=function(b,a){return new x.TextShaping([b],512,v.TEXT_LINE_HEIGHT,v.TEXT_SPACING,[0,.5*-v.TEXT_LINE_HEIGHT],
.5*(1-this._xAlignD),0,a)};h.prototype._computeGlyphTransform=function(b){var a=this._scale,c=this._angle*K,e=r.mat2d.identity(L);r.mat2d.rotate(e,e,c);r.mat2d.translate(e,e,q.vec2.set(y,this._xOffset,-this._yOffset));r.mat2d.scale(e,e,q.vec2.set(y,a,a));r.mat2d.translate(e,e,q.vec2.set(y,-4,-4-(this._baseline?25:b.y+(1-this._yAlignD)*b.height*.5)));return e};h.prototype._writeVertices=function(b,a,c,e,d,f,g,h){this._writeHalos(b,a,c,e,d,f,g,h);this._writeText(b,a,c,e,d,f,g,h)};h.prototype._writeHalos=
function(b,a,c,e,d,f,g,h){d=a.indexVector;var k=a.getVector("geometry").vertexCount,l=0;if(this._haloSize)for(var m=0;m<e.length;m++,l+=4){var n=e[m],p=w.i1616to32(2*n.anchorX+1,2*n.anchorY),q=null==g?Math.floor(10*n.minZoom):g,r=null==h?Math.floor(10*n.maxZoom):h,t=new A(c,this.geometryType,n.materialKey,q,r);t.vertexFrom=k+l;t.indexFrom=d.length;this._writeVertex(t,a,c,p,this._haloColor,n,f,q,r);this._writeIndices(t,d,k+l);b.push(t)}};h.prototype._writeText=function(b,a,c,e,d,f,g,h){d=a.indexVector;
for(var k=a.getVector("geometry").vertexCount,l=0,m=0;m<e.length;m++,l+=4){var n=e[m],q=w.i1616to32(2*n.anchorX,2*n.anchorY),p=null==g?Math.floor(10*n.minZoom):g,r=null==h?Math.floor(10*n.maxZoom):h,t=new A(c,this.geometryType,n.materialKey,p,r);t.vertexFrom=k+l;t.indexFrom=d.length;this._writeVertex(t,a,c,q,this._color,n,f,p,r);this._writeIndices(t,d,k+l);b.push(t)}};h.prototype._writeVertex=function(b,a,c,e,d,f,g,h,k){a=a.get("geometry");a.push(e);a.push(c);a.push(d);a.push(f.vertexOffsetUpperLeft);
a.push(f.texFontSizeUpperLeft);a.push(g);a.push(e);a.push(c);a.push(d);a.push(f.vertexOffsetUpperRight);a.push(f.texFontSizeUpperRight);a.push(g);a.push(e);a.push(c);a.push(d);a.push(f.vertexOffsetLowerLeft);a.push(f.texFontSizeLowerLeft);a.push(g);a.push(e);a.push(c);a.push(d);a.push(f.vertexOffsetLowerRight);a.push(f.texFontSizeLowerRight);a.push(g);b.vertexCount+=4};h.prototype._writeIndices=function(b,a,c){a.push(c+0);a.push(c+1);a.push(c+2);a.push(c+1);a.push(c+3);a.push(c+2);b.indexCount+=6};
return h}(p)}});