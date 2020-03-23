// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/promiseUtils ../../../../../../symbols/cim/cimAnalyzer ./WGLMeshTemplate".split(" "),function(b,d,k,l,g,m,n){Object.defineProperty(d,"__esModule",{value:!0});var p=l.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");b=function(b){function c(q){var a=b.call(this)||this;a._materialCache=new Map;a._dynamicPropertyMap=new Map;a._cimLayer=q;return a}k(c,b);c.prototype.analyze=
function(b,a,c,d){var f=this._materialCache,h=this._cimLayer.materialHash;if(!h)return p.error("A Dynamic mesh template must have a material hash function!"),g.reject(null);var e=h(a,c,d);if(f.has(e))return b=f.get(e),g.resolve(b);a=m.analyzeCIMResource(a,this._cimLayer.cim,this._cimLayer.materialOverrides);a.mosaicHash=e;return b.getCIMMosaicItem(a).then(function(a){f.set(e,a);return a})};return c}(n.default);d.default=b});