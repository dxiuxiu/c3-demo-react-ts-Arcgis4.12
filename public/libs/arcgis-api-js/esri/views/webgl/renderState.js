// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper"],function(c,b,d){function h(a){return B.intern(a)}function k(a){return C.intern(a)}function l(a){return D.intern(a)}function m(a){return E.intern(a)}function n(a){return F.intern(a)}function p(a){return G.intern(a)}function q(a){return H.intern(a)}function r(a){return I.intern(a)}function e(a){return"["+a.join(",")+"]"}function t(a){return a?e([a.srcRgb,a.srcAlpha,a.dstRgb,a.dstAlpha,a.opRgb,a.opAlpha,a.color.r,a.color.g,a.color.b,a.color.a]):
null}function u(a){return a?e([a.face,a.mode]):null}function v(a){return a?e([a.factor,a.units]):null}function w(a){return a?e([a.func]):null}function x(a){return a?e([a.function.func,a.function.ref,a.function.mask,a.operation.fail,a.operation.zFail,a.operation.zPass]):null}function y(a){return a?e([a.zNear,a.zFar]):null}function z(a){return a?e([a.r,a.g,a.b,a.a]):null}function A(a){return a?e([a.mask]):null}Object.defineProperty(b,"__esModule",{value:!0});b.simpleBlendingParams=function(a,f,b,g){void 0===
b&&(b=32774);void 0===g&&(g=[0,0,0,0]);return{srcRgb:a,srcAlpha:a,dstRgb:f,dstAlpha:f,opRgb:b,opAlpha:b,color:{r:g[0],g:g[1],b:g[2],a:g[3]}}};b.separateBlendingParams=function(a,f,b,g,c,e,d){void 0===c&&(c=32774);void 0===e&&(e=32774);void 0===d&&(d=[0,0,0,0]);return{srcRgb:a,srcAlpha:f,dstRgb:b,dstAlpha:g,opRgb:c,opAlpha:e,color:{r:d[0],g:d[1],b:d[2],a:d[3]}}};b.backFaceCullingParams={face:1029,mode:2305};b.defaultDepthWriteParams={zNear:0,zFar:1};b.defaultColorWriteParams={r:!0,g:!0,b:!0,a:!0};
b.makeBlending=h;b.makeCulling=k;b.makePolygonOffset=l;b.makeDepthTest=m;b.makeStencilTest=n;b.makeDepthWrite=p;b.makeColorWrite=q;b.makeStencilWrite=r;b.makePipelineState=function(a){return J.intern(a)};c=function(){function a(a,b){this.makeKey=a;this.makeRef=b;this.interns=new Map}a.prototype.intern=function(a){if(!a)return null;var f=this.makeKey(a),b=this.interns;b.has(f)||b.set(f,this.makeRef(a));return b.get(f)};return a}();var B=new c(t,function(a){return d({__tag:"Blending"},a)}),C=new c(u,
function(a){return d({__tag:"Culling"},a)}),D=new c(v,function(a){return d({__tag:"PolygonOffset"},a)}),E=new c(w,function(a){return d({__tag:"DepthTest"},a)}),F=new c(x,function(a){return d({__tag:"StencilTest"},a)}),G=new c(y,function(a){return d({__tag:"DepthWrite"},a)}),H=new c(z,function(a){return d({__tag:"ColorWrite"},a)}),I=new c(A,function(a){return d({__tag:"StencilWrite"},a)}),J=new c(function(a){return a?e([t(a.blending),u(a.culling),v(a.polygonOffset),w(a.depthTest),x(a.stencilTest),
y(a.depthWrite),z(a.colorWrite),A(a.stencilWrite)]):null},function(a){return{blending:h(a.blending),culling:k(a.culling),polygonOffset:l(a.polygonOffset),depthTest:m(a.depthTest),stencilTest:n(a.stencilTest),depthWrite:p(a.depthWrite),colorWrite:q(a.colorWrite),stencilWrite:r(a.stencilWrite)}});c=function(){function a(a){this._stencilWriteInvalid=this._colorWriteInvalid=this._depthWriteInvalid=this._stencilTestInvalid=this._depthTestInvalid=this._polygonOffsetInvalid=this._cullingInvalid=this._blendingInvalid=
this._pipelineInvalid=!0;this._stateSetters=a}a.prototype.setPipeline=function(a){if(this._pipelineInvalid||a!==this._pipeline)this.setBlending(a.blending),this.setCulling(a.culling),this.setPolygonOffset(a.polygonOffset),this.setDepthTest(a.depthTest),this.setStencilTest(a.stencilTest),this.setDepthWrite(a.depthWrite),this.setColorWrite(a.colorWrite),this.setStencilWrite(a.stencilWrite),this._pipeline=a;this._pipelineInvalid=!1};a.prototype.invalidateBlending=function(){this._pipelineInvalid=this._blendingInvalid=
!0};a.prototype.invalidateCulling=function(){this._pipelineInvalid=this._cullingInvalid=!0};a.prototype.invalidatePolygonOffset=function(){this._pipelineInvalid=this._polygonOffsetInvalid=!0};a.prototype.invalidateDepthTest=function(){this._pipelineInvalid=this._depthTestInvalid=!0};a.prototype.invalidateStencilTest=function(){this._pipelineInvalid=this._stencilTestInvalid=!0};a.prototype.invalidateDepthWrite=function(){this._pipelineInvalid=this._depthWriteInvalid=!0};a.prototype.invalidateColorWrite=
function(){this._pipelineInvalid=this._colorWriteInvalid=!0};a.prototype.invalidateStencilWrite=function(){this._pipelineInvalid=this._stencilTestInvalid=!0};a.prototype.setBlending=function(a){this._blending=this.setSubState(a,this._blending,this._blendingInvalid,this._stateSetters.setBlending);this._blendingInvalid=!1};a.prototype.setCulling=function(a){this._culling=this.setSubState(a,this._culling,this._cullingInvalid,this._stateSetters.setCulling);this._cullingInvalid=!1};a.prototype.setPolygonOffset=
function(a){this._polygonOffset=this.setSubState(a,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset);this._polygonOffsetInvalid=!1};a.prototype.setDepthTest=function(a){this._depthTest=this.setSubState(a,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest);this._depthTestInvalid=!1};a.prototype.setStencilTest=function(a){this._stencilTest=this.setSubState(a,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest);this._stencilTestInvalid=
!1};a.prototype.setDepthWrite=function(a){this._depthWrite=this.setSubState(a,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite);this._depthWriteInvalid=!1};a.prototype.setColorWrite=function(a){this._colorWrite=this.setSubState(a,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite);this._colorWriteInvalid=!1};a.prototype.setStencilWrite=function(a){this._stencilWrite=this.setSubState(a,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite);
this._stencilTestInvalid=!1};a.prototype.setSubState=function(a,b,c,d){if(c||a!==b)d(a),this._pipelineInvalid=!0;return a};return a}();b.StateTracker=c});