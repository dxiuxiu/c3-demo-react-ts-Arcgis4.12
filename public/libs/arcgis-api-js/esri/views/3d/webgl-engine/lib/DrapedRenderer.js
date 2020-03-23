// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../support/debugFlags ../../webgl-engine/lib/intersectorUtils ./Camera ./DefaultVertexBufferLayouts ./glUtil3D ./GridLocalOriginFactory ./Renderer ../lighting/Lightsources ../materials/ColorMaterial ../materials/HUDMaterial ../materials/RibbonLineMaterial ../shaders/MiscPrograms ../../../webgl/FramebufferObject ../../../webgl/renderState ../../../webgl/Texture ../../../webgl/Util".split(" "),
function(v,N,r,l,z,w,A,B,C,D,E,F,G,H,I,J,K,L,t,M,x){v=function(){function b(a,d,g,c,f,e){var b=this;this._renderTargets={};this._clearColor=z.vec4f64.fromValues(0,0,0,0);this._uniqueIdx=0;this._localOrigins=new E;this._rctx=a;this._canvas=d;this._programRep=g;this._modelDirtySet=e;this._modelDirtySet.onMaterialChanged=function(a){return b._emitContentChanged()};this._renderer=new F(g,c,f,this._rctx,"draped");this._renderer.onHasHighlightsChanged=function(a){if(b.onHasHighlightsChanged)b.onHasHighlightsChanged(a)};
this._renderer.setLighting({lights:[new G.AmbientLight(l.vec3f64.fromValues(1,1,1))],groundLightingFactor:1,globalFactor:0})}b.prototype.dispose=function(){for(var a in this._renderTargets)this._renderTargets[a].dispose();this._renderTargets=null;this._renderer.dispose();this._renderer=null};b.prototype.disposeRenderTarget=function(a){var d=this._renderTargets[a];d&&d.dispose();delete this._renderTargets[a]};b.prototype.getRenderTargetTexture=function(a){return(a=this._renderTargets[a])?a.colorTexture:
null};b.prototype.addRenderGeometries=function(a){var d=this;a.forEach(function(a){null==a.origin&&(a.origin=d._localOrigins.getOrigin(a.center));a.idx=d._uniqueIdx++});this._renderer.modify(a,[]);this._emitContentChanged()};b.prototype.removeRenderGeometries=function(a){this._renderer.modify([],a);this._emitContentChanged()};b.prototype.updateRenderGeometries=function(a,d){a=a.map(function(a){return{renderGeometry:a,updateType:d}});this._renderer.modify([],[],a);this._emitContentChanged()};b.prototype.updateRenderOrder=
function(a){0<a.size&&(this._renderer.modifyRenderOrder(a),this._emitContentChanged())};b.prototype.setBackgroundColor=function(a){this._clearColor=a;this._emitContentChanged()};b.prototype.updateHighlights=function(a){this.updateRenderGeometries(a,16)};b.prototype.isEmpty=function(){return this._renderer.isEmpty()&&!w.OVERLAY_DRAW_TEST_TEXTURE};b.prototype.processDirtyMaterials=function(){var a=this._modelDirtySet.getDirtyMaterials();a&&this._renderer.modify([],[],[],a);this._modelDirtySet.clearDirtyMaterials()};
Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasWater",{get:function(){return this._renderer.hasWater},enumerable:!0,configurable:!0});b.prototype.draw=function(a,d){return this.drawPass(0,a,d)};b.prototype.drawNormals=function(a,d){return this.drawPass(2,a,d)};b.prototype.drawHighlights=function(a,d){return this.drawPass(4,a,d)};b.prototype.drawPass=function(a,d,b){this._pixelRatio=
b.pixelRatio*Math.abs(b.views[0].extent[2]-b.views[0].extent[0])/Math.abs(b.views[0].viewport[2]-b.views[0].viewport[0]);if(this.isEmpty()||4===a&&!this.hasHighlights||2===a&&!this.hasWater)return!1;this.processDirtyMaterials();if(!b.views.some(function(a){return a.extent[0]!==a.extent[2]&&a.extent[1]!==a.extent[3]}))return!1;d=this._renderTargets[d];if(!d)return!1;var c=this._rctx,f=b.width,e=b.height;d.width===f&&d.height===e||d.resize(f,e);var h=u.camera;u.fbo=d;h.near=1;h.far=1E4;h.pixelRatio=
b.pixelRatio||1;c.bindFramebuffer(d);c.setClearColor.apply(c,this._clearColor);c.clearSafe(16384);for(var k=0;k<b.views.length;k++){var g=b.views[k];h.viewport=g.viewport;r.mat4.ortho(h.projectionMatrix,0,g.extent[2]-g.extent[0],0,g.extent[3]-g.extent[1],h.near,h.far);r.mat4.identity(h.viewMatrix);r.mat4.translate(h.viewMatrix,h.viewMatrix,[-g.extent[0],-g.extent[1],0]);h.setGLViewport(this._rctx);w.OVERLAY_DRAW_TEST_TEXTURE&&this._drawTestTexture(f,e,y[b.index%y.length]);this._renderer.renderPass(a,
u)}c.bindFramebuffer(null);c.setViewport(0,0,this._canvas.width,this._canvas.height);d.colorTexture.descriptor.hasMipmap&&d.colorTexture.generateMipmap();return!0};b.prototype._drawTestTexture=function(a,d,b){var c=this._rctx;if(!this._testPatternTexture){for(var f=new Uint8Array(a*d*4),e=0,h=0;h<d;h++)for(var g=0;g<a;g++){var n=Math.floor(g/10),m=Math.floor(h/10);2>n||2>m||10*n>a-20||10*m>d-20?(f[e++]=255,f[e++]=255,f[e++]=255,f[e++]=255):(f[e++]=255,f[e++]=255,f[e++]=255,n&1&&m&1?f[e++]=g&1^h&1?
0:255:f[e++]=n&1^m&1?0:128)}this._testPatternTexture=new M(c,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:d},f);this._testPatternProgram=this._programRep.getProgram(K.texOnly);this._testPatternPipelineState=t.makePipelineState({blending:t.separateBlendingParams(770,1,771,771),colorWrite:t.defaultColorWriteParams});this._quadVAO=D.createQuadVAO(c,C.Pos3Tex)}a=this._testPatternProgram;c.bindProgram(a);c.setPipelineState(this._testPatternPipelineState);a.setUniform4f("color",
b[0],b[1],b[2],1);a.setUniform1i("tex",0);c.bindTexture(this._testPatternTexture,0);c.bindVAO(this._quadVAO);c.drawArrays(5,0,x.vertexCount(this._quadVAO,"geometry"))};b.prototype.updateAnimations=function(a){return this._renderer.updateAnimations(a)};b.prototype._emitContentChanged=function(){if(this.onContentChanged)this.onContentChanged()};b.prototype.createRenderTarget=function(a,b,g,c){for(var d=a,e=0;this._renderTargets[d];)d=a+"_"+ ++e;this._renderTargets[d]=L.createWithAttachments(this._rctx,
{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:c,hasMipmap:b,maxAnisotropy:g,width:0,height:0},{colorTarget:0,depthStencilTarget:0});return d};b.prototype.getGpuMemoryUsage=function(){var a=0,b;for(b in this._renderTargets)a+=x.getGpuMemoryUsage(this._renderTargets[b]);return a};b.prototype.intersect=function(a,b,g){var d=this,f=0;this._renderer.forEachRenderGeometry(function(c){if(!g||g(c)){if(c.material instanceof H||c.material instanceof J||c.material instanceof I){var e=
c.transformation[12],k=c.transformation[13];p[0]=b[0]-e;p[1]=b[1]-k;p[2]=1;q[0]=b[0]-e;q[1]=b[1]-k;q[2]=0;c.pixelRatio=d._pixelRatio;c.material.intersect(c,null,c.getShaderTransformation(),a,p,q,function(b,e,g,h,k,l){d.addIntersectionResult(g,c.material.renderPriority,f,a,c.data.layerUid,c.data.graphicUid)},c.calculateShaderTransformation,!0)}f++}})};b.prototype.addIntersectionResult=function(a,b,g,c,f,e){var d={type:"external",metadata:{layerUid:f,graphicUid:e}};f=function(e){e.set(d,null,c.results.terrain.dist,
c.results.terrain.normal,c.results.terrain.transformation,b,null,null,a,g);e.intersector="DrapedRenderer"};(null==c.results.min.drapedLayerOrder||b>=c.results.min.drapedLayerOrder)&&(null==c.results.min.dist||c.results.terrain.dist<=c.results.min.dist)&&f(c.results.min);(null==c.results.max.drapedLayerOrder||b<c.results.max.drapedLayerOrder)&&(null==c.results.max.dist||c.results.terrain.dist>c.results.max.dist)&&f(c.results.max);c.enable.storeAll&&(e=new A.IntersectorResult(c.ray),f(e),c.results.all.push(e))};
return b}();var y=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],u={fbo:null,camera:new B,lightDirection:l.vec3f64.fromValues(0,0,1)},p=l.vec3f64.create(),q=l.vec3f64.create();return v});