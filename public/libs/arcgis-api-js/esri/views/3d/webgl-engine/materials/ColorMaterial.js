// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../support/buffer/InterleavedLayout ../lib/GLMaterial ../lib/Material ../lib/Util ./internal/bufferWriters ./internal/MaterialUtil ./renderers/MergedRenderer ../shaders/ColorPrograms ../../../webgl/renderState".split(" "),function(l,B,h,t,n,u,k,v,e,w,p,f){l=function(c){function a(b,a){a=c.call(this,a)||this;a.supportsEdges=!0;a.params=e.copyParameters(b,x);return a}h(a,c);a.prototype.setParameterValues=function(b){var a=this.params,
g;for(g in b)a[g]=b[g];this.notifyDirty("matChanged")};a.prototype.getParameters=function(){return this.params};a.prototype.setColor=function(b){this.params.color=b;this.notifyDirty("matChanged")};a.prototype.getColor=function(){return this.params.color};a.prototype.setTransparent=function(b){this.params.transparent=b;this.notifyDirty("matChanged")};a.prototype.getTransparent=function(){return this.params.transparent};a.prototype.intersect=function(b,a,g,c,f,h,k,m,l){e.intersectTriangleGeometry(b,
a,g,c,f,h,k,l)};a.prototype.getGLMaterials=function(){return{color:y,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:z}};a.prototype.createBufferWriter=function(){return new A};a.prototype.createRenderer=function(b,a){return new w(b,a,this)};return a}(u);var y=function(c){function a(b,a,g){b=c.call(this,b,a)||this;b.updateParameters();return b}h(a,c);a.prototype.updateParameters=function(){this.params=e.copyParameters(this.material.getParameters());this.selectProgram()};a.prototype.selectProgram=
function(){var b=this.params;this.program=this.programRep.getProgram(p.colorPass,{vertexColors:b.vertexColors,slice:b.slicePlaneEnabled});this.pipelineState=f.makePipelineState({blending:b.transparent&&f.separateBlendingParams(770,1,771,771),polygonOffset:b.polygonOffset&&q,culling:r(b.cullFace),depthTest:b.testDepth&&{func:513},depthWrite:b.writeDepth&&f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams})};a.prototype.beginSlot=function(b){var a=5;this.params.transparent&&(a=this.params.writeDepth?
7:10);return b===a};a.prototype.getProgram=function(){return this.program};a.prototype.bind=function(b,a){a=this.program;var d=this.params;b.bindProgram(a);b.setPipelineState(this.pipelineState);a.setUniform4fv("eColor",d.color)};a.prototype.release=function(a){};a.prototype.bindView=function(a,d){a=this.program;var b=this.params;e.bindView(d.origin,d.view,a);b.slicePlaneEnabled&&e.bindSlicePlane(d.origin,d.slicePlane,a)};a.prototype.bindInstance=function(a,d){this.program.setUniformMatrix4fv("model",
d.transformation)};a.prototype.getDrawMode=function(){return 4};return a}(n),z=function(c){function a(a,d,g){a=c.call(this,a,d)||this;a.updateParameters();return a}h(a,c);a.prototype.updateParameters=function(){this.params=e.copyParameters(this.material.getParameters());this.selectProgram()};a.prototype.selectProgram=function(){var a=this.params;this.program=this.programRep.getProgram(p.colorPass,{vertexColors:a.vertexColors,slice:a.slicePlaneEnabled});this.pipelineState=f.makePipelineState({polygonOffset:a.polygonOffset&&
q,culling:r(a.cullFace),depthTest:a.testDepth&&{func:513},depthWrite:a.writeDepth&&f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams})};a.prototype.beginSlot=function(a){return 5===a};a.prototype.getProgram=function(){return this.program};a.prototype.bind=function(a,d){var b=this.program,c=this.params;a.bindProgram(b);a.setPipelineState(this.pipelineState);e.bindHighlightRendering(a,d,b);b.setUniform4fv("eColor",c.color)};a.prototype.release=function(a){};a.prototype.bindView=function(a,
d){a=this.program;var b=this.params;e.bindView(d.origin,d.view,a);b.slicePlaneEnabled&&e.bindSlicePlane(d.origin,d.slicePlane,a)};a.prototype.bindInstance=function(a,d){this.program.setUniformMatrix4fv("model",d.transformation)};a.prototype.getDrawMode=function(){return 4};return a}(n),x={color:[1,1,1,1],transparent:!1,writeDepth:!0,testDepth:!0,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:"none"},m=t.newLayout().vec3f(k.VertexAttrConstants.POSITION).vec4u8(k.VertexAttrConstants.COLOR),
A=function(){function c(){this.vertexBufferLayout=m}c.prototype.allocate=function(a){return m.createBuffer(a)};c.prototype.elementCount=function(a){return a.indices[k.VertexAttrConstants.POSITION].length};c.prototype.write=function(a,b,d,c){v.writeDefaultAttributes(b,m,a.transformation,a.invTranspTransformation,d,c)};return c}(),q={factor:1,units:1},r=function(c){return"none"!==c&&{face:"front"===c?1028:1029,mode:2305}};return l});