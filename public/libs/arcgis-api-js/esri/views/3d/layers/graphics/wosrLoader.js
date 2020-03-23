// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../request ../../../../core/asyncUtils ../../../../core/Error ../../../../core/lang ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/Version ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../support/imageUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(na,m,oa,f,k,Y,z,Z,aa,ba,D,r,P,Q,l,ca,da,ea,fa,ga){function ha(d,e){return k(this,void 0,void 0,function(){var a,b;return f(this,function(g){switch(g.label){case 0:return(a=D.isSome(e)&&e.streamDataRequester)?[2,ia(d,a,e)]:[4,z.result(Y(d,D.unwrap(e)))];case 1:b=g.sent();if(!0===b.ok)return[2,b.value.data];r.throwIfAbortError(b.error);E(b.error);return[2]}})})}function ia(d,e,a){return k(this,void 0,void 0,function(){var b;return f(this,function(g){switch(g.label){case 0:return[4,z.result(e(d,
"json",a))];case 1:b=g.sent();if(!0===b.ok)return[2,b.value];r.throwIfAbortError(b.error);E(b.error.details.url);return[2]}})})}function E(d){throw new Z("","Request for object resource failed: "+d);}function A(d,e){return k(this,void 0,void 0,function(){var a,b,g,H,n,I,R,t,w,F,S,J,T,k,G,B,r,x,m,l,z,y,E,A,U,K,L,v,C,V,u,M,W,N,X;return f(this,function(h){switch(h.label){case 0:return g=[],H=[],n=[],I=[],R=P.Version.parse(d.version||"1.0","wosr"),ja.validate(R),t="meshsymbol_"+d.model.name,w=d.textureDefinitions,
[4,ka(t,w,e)];case 1:F=h.sent();for(S in F)I.push(F[S].engineTexObj);J=d.model.geometries;T=d.materialDefinitions;for(G=k=0;G<J.length;G++){var p=B=J[G],c=p.params,f=c.topology;h=!0;c.vertexAttributes||(q.warn("Geometry must specify vertex attributes"),h=!1);switch(c.topology){case "PerAttributeArray":break;case "Indexed":case null:case void 0:f=c.faces;if(!f)q.warn("Indexed geometries must specify faces"),h=!1;else if(c.vertexAttributes){var O=void 0;for(O in c.vertexAttributes)(c=f[O])&&c.values?
(null!=c.valueType&&"UInt32"!==c.valueType&&(q.warn("Unsupported indexed geometry indices type '"+c.valueType+"', only UInt32 is currently supported"),h=!1),null!=c.valuesPerElement&&1!==c.valuesPerElement&&(q.warn("Unsupported indexed geometry values per element '"+c.valuesPerElement+"', only 1 is currently supported"),h=!1)):(q.warn("Indexed geometry does not specify face indices for '"+O+"' attribute"),h=!1)}break;default:q.warn("Unsupported topology '"+f+"'"),h=!1}p.params.material||(q.warn("Geometry requires material"),
h=!1);p=p.params.vertexAttributes;c=void 0;for(c in p)p[c].values||(q.warn("Geometries with externally defined attributes are not yet supported"),h=!1);if(h){h=B.params;a=h.material;b=h.texture;r=B.params.vertexAttributes;x={};for(m in r)l=r[m],z=l.values,x[m]={data:z,size:l.valuesPerElement};y={};if("PerAttributeArray"===B.params.topology){h=E=x.position.data.length/x.position.size;p=new Uint32Array(h);for(c=0;c<h;c++)p[c]=c;A=p;for(U in x)y[U]=A}else for(L in K=B.params.faces,K)y[L]=new Uint32Array(K[L].values);
v=b?F[b]:null;C=n[a]?n[a][b]:null;C||(V=a.substring(a.lastIndexOf("/")+1),u=T[V].params,1===u.transparency&&(u.transparency=0),M=v&&v.alphaChannelUsage,W=0<u.transparency||"transparency"===M||"maskAndTransparency"===M,N={ambient:Q.vec3f64.fromArray(u.diffuse),diffuse:Q.vec3f64.fromArray(u.diffuse),specular:[0,0,0],opacity:1-(u.transparency||0),transparent:W,textureAlphaMode:v?la(v.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:v?v.engineTexObj.id:void 0,textureInitTransparent:!0,doubleSided:!0,
cullFace:"none",flipV:!1,colorMixMode:u.externalColorMixMode||"tint",textureAlphaPremultiplied:!0},D.isSome(e)&&e.materialParamsMixin&&aa.mixin(N,e.materialParamsMixin),C=new ga(N,t),n[a]||(n[a]={}),n[a][b]=C);H.push(C);X=new da(new ea(x,y),t);k+=y.position?y.position.length:0;g.push(X)}}return[2,{stageResources:{textures:I,materials:H,geometries:g},pivotOffset:d.model.pivotOffset,boundingBox:ma(g),numberOfVertices:k,lodThreshold:null}]}})})}function ma(d){var e=l.empty();d.forEach(function(a){a=
a.boundingInfo;l.expand(e,a.getBBMin());l.expand(e,a.getBBMax())});return e}function ka(d,e,a){return k(this,void 0,void 0,function(){var b,g,k,n,m,l,t,w;return f(this,function(f){switch(f.label){case 0:b=[];g=function(f){var g=e[f],k=g.images[0].data;if(!k)return q.warn("Externally referenced texture data is not yet supported"),"continue";var k=g.encoding+";base64,"+k,l="/textureDefinitions/"+f,m={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0};f=D.isSome(a)&&a.disableTextures?r.resolve(null):
ca.requestImage(k,a);b.push(f.then(function(a){return{refId:l,engineTexObj:new fa(a,d,m),alphaChannelUsage:"rgba"===g.channels?g.alphaChannelUsage||"transparency":"none"}}))};for(k in e)g(k);return[4,r.all(b)];case 1:n=f.sent();m={};l=0;for(t=n;l<t.length;l++)w=t[l],m[w.refId]=w;return[2,m]}})})}function la(d){switch(d){case "mask":return"mask";case "maskAndTransparency":return"maskBlend";case "none":return"opaque";case "transparency":return"blend";default:return"blend"}}Object.defineProperty(m,"__esModule",
{value:!0});var q=ba.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");m.load=function(d,e){return k(this,void 0,void 0,function(){var a;return f(this,function(b){switch(b.label){case 0:return[4,ha(d,e)];case 1:return a=b.sent(),[2,A(a,e)]}})})};m.createStageResources=A;var ja=new P.Version(1,2,"wosr")});