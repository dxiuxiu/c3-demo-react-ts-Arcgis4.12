// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/mathUtils ../../../core/promiseUtils ../../../core/watchUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./atmosphereUtils ./resources/SimpleAtmosphereTexture ../support/earthUtils ../support/imageUtils ../support/mathUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/Util ../webgl-engine/shaders/SimpleAtmospherePrograms ../../webgl/BufferObject ../../webgl/programUtils ../../webgl/renderState ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(u,Z,G,H,I,v,J,K,L,M,N,k,m,w,O,l,P,x,Q,R,S,y,p,T,z,q,U,A,V){function B(h,c,b,a,f){var e=k.vec3.length(h),g=a*Math.sqrt(e*e-a*a)/e,d=f.silCircleV1,l=f.silCircleV2;k.vec3.scale(f.silCircleCenter,h,Math.sqrt(a*a-g*g)/e);k.vec3.cross(d,h,c);1>k.vec3.squaredLength(d)&&k.vec3.cross(d,h,b);k.vec3.scale(d,d,g/k.vec3.length(d));k.vec3.cross(l,d,h);k.vec3.scale(l,l,g/k.vec3.length(l));return g}function C(h,c,b,a){k.vec3.add(n,a.silCircleCenter,a.silCircleV2);k.vec3.scale(r,n,D);K.mat4.lookAt(t,c,n,
b);y.project(n,t,h.projectionMatrix,h.viewport);y.project(r,t,h.projectionMatrix,h.viewport);return k.vec3.distance(n,r)/h.height}var E=-w.INNER_ATMOSPHERE_DEPTH,W=(l.earthRadius+E)/l.earthRadius,X=(l.earthRadius+0)/l.earthRadius,D=(l.earthRadius+3E5)/l.earthRadius,Y=x.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5E3,.51171875],[5E4,.4140625]]);u=function(){function h(c){this.needsRender=!1;this.didRender=!0;this.slot=13;this._renderData={texV:N.vec2f64.create(),silCircleCenter:m.vec3f64.create(),
silCircleV1:m.vec3f64.create(),silCircleV2:m.vec3f64.create(),altitudeFade:0,innerScale:0,undergroundFadeAlpha:0};this._fadeVaoCount=0;this._readyResolver=v.createResolver();this._readyController=v.createAbortController();this.view=c}h.prototype.when=function(c){return H(this,void 0,void 0,function(){return G(this,function(b){switch(b.label){case 0:return[4,this._readyResolver.promise];case 1:return b.sent(),c(),[2]}})})};h.prototype.initializeRenderContext=function(c){var b=this,a=c.rctx;this._cameraChangeHandle=
J.init(this.view,"state.camera",function(){return b.needsRender=!0},!0);this._program=z.createProgram(a,p.colorPass);this._fadeProgram=z.createProgram(a,p.fadePass);this._vao=this._createRibbon(a);this._vaoCount=A.vertexCount(this._vao,"geometry");this._fadeVao=S.createQuadVAO(a);this._fadeVaoCount=A.vertexCount(this._fadeVao,"geometry");P.requestImage(O,this._readyController).then(function(c){b._texture=new U(a,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},c);b.needsRender=
!0;b._readyController=null;b._readyResolver.resolve()});this._pipelineState=q.makePipelineState({blending:q.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:q.defaultColorWriteParams})};h.prototype.uninitializeRenderContext=function(c){this.destroy()};h.prototype.destroy=function(){this._readyResolver.reject();this._cameraChangeHandle&&(this._cameraChangeHandle.remove(),this._cameraChangeHandle=null);this._texture&&(this._texture.dispose(),this._texture=null);this._program&&(this._program.dispose(),
this._program=null);this._fadeProgram&&(this._fadeProgram.dispose(),this._fadeProgram=null);this._fadeVao&&(this._fadeVao.dispose(),this._fadeVao=null);this._readyController&&(this._readyController.abort(),this._readyController=null)};h.prototype.render=function(c){if(c.slot!==this.slot||0!==c.pass||null==this._texture)return!1;this._update(c.camera);var b=c.rctx;b.setPipelineState(this._pipelineState);if(1>this._renderData.undergroundFadeAlpha){var a=this._program;b.bindProgram(a);a.setUniformMatrix4fv("proj",
c.camera.projectionMatrix);a.setUniformMatrix4fv("view",c.camera.viewMatrix);a.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter);a.setUniform3fv("silCircleV1",this._renderData.silCircleV1);a.setUniform3fv("silCircleV2",this._renderData.silCircleV2);a.setUniform2fv("texV",this._renderData.texV);b.bindTexture(this._texture,0);a.setUniform1i("tex",0);a.setUniform3fv("lightDirection",c.lightingData.direction);a.setUniform1f("altitudeFade",this._renderData.altitudeFade);a.setUniform1f("innerScale",
this._renderData.innerScale);b.bindVAO(this._vao);b.drawArrays(4,0,this._vaoCount)}0<this._renderData.undergroundFadeAlpha&&(a=this._fadeProgram,b.bindProgram(a),a.setUniform1f("undergroundFadeAlpha",this._renderData.undergroundFadeAlpha),a.setUniform3fv("lightDirection",c.lightingData.direction),a.setUniform3fv("cameraPosition",c.camera.eye),b.bindVAO(this._fadeVao),b.drawArrays(5,0,this._fadeVaoCount));this.needsRender=!1;return!0};h.prototype._update=function(c){var b=m.vec3f64.create(),a=l.earthRadius,
f=k.vec3.length(c.eye),e=f-a;this._renderData.undergroundFadeAlpha=0>e?Math.min(-e/5E3,1):0;var g=a+E,d=a+Math.max(50,e);this._renderData.innerScale=d*d/(Math.sqrt(d*d-a*a)*Math.sqrt(d*d-g*g)+a*g)-1;this._renderData.altitudeFade=w.computeInnerAltitudeFade(e);k.vec3.scale(b,c.eye,(a+50)/f);B(b,c.center,c.up,a,this._renderData);b=C(c,b,c.up,this._renderData);f=Y(e);g=.001953125;d=0+b*f*1;50<e&&(B(c.eye,c.center,c.up,a,this._renderData),c=C(c,c.eye,c.up,this._renderData),c=I.clamp((c-1.5)/(b-1.5),0,
1),g=0+.001953125*c,d=0+1*x.lerp(1,b*f,c));M.vec2.set(this._renderData.texV,g,d)};h.prototype._createRibbon=function(c){var b=new Float32Array(1155),a=new Uint32Array(1920);b[0]=0;b[1]=0;b[2]=-1;for(var f=0;128>f;f++){var e=9*f+3;b[e+0]=f;b[e+1]=W;b[e+2]=-1;b[e+3]=f;b[e+4]=X;b[e+5]=0;b[e+6]=f;b[e+7]=D;b[e+8]=1;var e=3*f+1,g=127===f?1:e+3,d=15*f;a[d+0]=e;a[d+1]=e+1;a[d+2]=g+1;a[d+3]=g+1;a[d+4]=g;a[d+5]=e;a[d+6]=e+1;a[d+7]=e+2;a[d+8]=g+2;a[d+9]=g+2;a[d+10]=g+1;a[d+11]=e+1;a[d+12]=e;a[d+13]=g;a[d+14]=
0}e=F.createBuffer(a.length);g=e.position;for(f=0;f<a.length;++f)d=3*a[f],g.set(f,0,b[d]),g.set(f,1,b[d+1]),g.set(f,2,b[d+2]);return new V(c,p.colorPass.attributes,{geometry:Q.glLayout(F)},{geometry:T.createVertex(c,35044,e.buffer)})};return h}();var t=L.mat4f64.create(),n=m.vec3f64.create(),r=m.vec3f64.create(),F=R.newLayout().vec3f("position");return u});