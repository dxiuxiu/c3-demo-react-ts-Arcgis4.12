// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","./Util","../../../webgl/Texture"],function(h,r,m,g,l){var n=m.getLogger("esri.views.3d.webgl-engine.lib.TextureRepository");h=function(){function b(a,c,d,b){this.NUM_PARALLEL=8;this._fallbackTextureTransparent=this._fallbackTexture=null;this.textures=a;this._programRepository=c;this.getViewportToRestore=d;this._rctx=b;this.NUM_PARALLEL=8;this.id2textureRef={};this.loading={};this._queue=[];this.listeners=[];this.maxMaxAnisotropy=(this.afExt=b.capabilities.textureFilterAnisotropic)?
b.parameters.maxMaxAnisotropy:1;this.maxAnisotropy=Math.min(8,this.maxMaxAnisotropy);this._needsRender=!0;this._fallbackTextureData=new Uint8Array(256);this._fallbackTextureTransparentData=new Uint8Array(256);for(a=0;a<this._fallbackTextureData.length;++a)this._fallbackTextureData[a]=255,this._fallbackTextureTransparentData[a]=0!==(a+1)%4?255:0;this._fallbackTextureDesc={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:8,height:8,maxAnisotropy:8}}b.prototype.resetNeedsRender=function(){this._needsRender=
!1};b.prototype.needsRender=function(){return this._needsRender};b.prototype.acquire=function(a,c,d){var p=this,e=this.id2textureRef[a];if(null==e){var f=this.textures[a];g.assert(void 0!==f);f.setUnloadFunc(this._unload.bind(this));c=!0===c;var k=this._createGLTextureDescription(f),e=new b.TextureRef(null);g.assert(null==this.id2textureRef[a]);this.id2textureRef[a]=e;if(f.initializeThroughRender)a=f.initializeThroughRender(this._rctx,k),e.setGLTexture(a),d&&d(e);else if(f.deferredLoading())this.getLoadingCount()<
this.NUM_PARALLEL?this._loadImage(a,k,d):this._queue.push([a,k,d]);else try{f.initializeThroughUpload(this._rctx,k,this._programRepository,this.getViewportToRestore(),function(a){e.setGLTexture(a);p._needsRender=!0;d&&d(e)})}catch(q){n.error("#acquire","Error loading texture: "+q.toString())}null==e.getGLTexture()&&e.setGLTexture(c?this.fallbackTextureTransparent:this.fallbackTexture);this._needsRender=!0}e.incRefCnt();return e};b.prototype.release=function(a){a=this.id2textureRef[a];void 0!==a&&
(a.decRefCnt(),g.assert(0<=a.getRefCnt()))};b.prototype.getLoadingCount=function(){return Object.keys(this.loading).length};b.prototype.getTexture=function(a){return this.textures[a]};b.prototype.getMaxAnisotropy=function(){return this.maxAnisotropy};b.prototype._unload=function(a){var c=this.id2textureRef[a];void 0!==c&&((c=c.getGLTexture())&&c!==this.fallbackTextureTransparent&&c!==this.fallbackTexture&&c.dispose(),delete this.id2textureRef[a]);this.next(a)};b.prototype._createGLTextureDescription=
function(a){return{target:3553,pixelFormat:6408,dataType:5121,maxAnisotropy:this.afExt&&a.params&&a.params.mipmap&&!a.params.disableAnisotropy?this.maxAnisotropy:void 0,wrapMode:a.params&&a.params.wrap}};b.prototype.next=function(a){if(a in this.loading){delete this.loading[a];var c=Object.keys(this.id2textureRef),b=Object.keys(this.loading);this.listeners.forEach(function(d){d(a,c,b)});this.processQueue()}};b.prototype._loadImage=function(a,c,b){var d=this;g.assert(null==this.loading[a]);this.loading[a]=
!0;var e=this.textures[a];g.assert(void 0!==e);setTimeout(function(){var f=d.id2textureRef[a];f&&f.getRefCnt()&&e.initializeThroughUpload(d._rctx,c,d._programRepository,d.getViewportToRestore(),function(c){d.next(a);d._needsRender=!0;f&&f.getRefCnt()&&(f.setGLTexture(c),b&&b(f))})},0)};b.prototype.processQueue=function(){for(var a=[],c=0;c<this._queue.length;++c){var b=this._queue[c][0],g=this.id2textureRef[b];void 0!==g&&(0===g.getRefCnt()?(g.getGLTexture().dispose(),delete this.id2textureRef[b]):
a.push(this._queue[c]))}this._queue=a;a=Math.min(this.NUM_PARALLEL-Object.keys(this.loading).length,this._queue.length);for(c=0;c<a;++c)this._loadImage(this._queue[c][0],this._queue[c][1],this._queue[c][2]);this._queue.splice(0,a)};Object.defineProperty(b.prototype,"fallbackTexture",{get:function(){this._fallbackTexture||(this._fallbackTexture=new l(this._rctx,this._fallbackTextureDesc,this._fallbackTextureData));return this._fallbackTexture},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"fallbackTextureTransparent",{get:function(){this._fallbackTextureTransparent||(this._fallbackTextureTransparent=new l(this._rctx,this._fallbackTextureDesc,this._fallbackTextureTransparentData));return this._fallbackTextureTransparent},enumerable:!0,configurable:!0});return b}();(function(b){var a=function(){function a(a){this._glTexture=null;this._refCount=0;this._glTexture=a}a.prototype.incRefCnt=function(){++this._refCount};a.prototype.decRefCnt=function(){--this._refCount;g.assert(0<=this._refCount)};
a.prototype.getRefCnt=function(){return this._refCount};a.prototype.setGLTexture=function(a){this._glTexture=a};a.prototype.getGLTexture=function(){return this._glTexture};return a}();b.TextureRef=a})(h||(h={}));return h});