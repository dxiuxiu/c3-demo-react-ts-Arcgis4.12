// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/compilerUtils","./Util"],function(f,m,g,h){var k=function(){function b(a){this.refCnt=0;this.glMaterial=a}b.prototype.incRefCnt=function(){++this.refCnt};b.prototype.decRefCnt=function(){--this.refCnt;h.assert(0<=this.refCnt)};b.prototype.getRefCnt=function(){return this.refCnt};b.prototype.getGLMaterial=function(){return this.glMaterial};return b}();f=function(){function b(a,c){this._textureRep=a;this._programRep=c;this._id2glMaterialRef=new Map}b.prototype.acquire=
function(a,c){var b=a.id+"_"+c,d=this._id2glMaterialRef.get(b);null==d?(a=(d=a.getGLMaterials()[c])?new d(a,this._programRep,this._textureRep):void 0,d=new k(a),this._id2glMaterialRef.set(b,d)):a=d.getGLMaterial();d.incRefCnt();a&&this.increaseProgramReferences(a);return a};b.prototype.release=function(a,c){a=a+"_"+c;c=this._id2glMaterialRef.get(a);c.decRefCnt();if(0===c.getRefCnt()){if(c=c.getGLMaterial())this.decreaseProgramReferences(c),c.dispose();this._id2glMaterialRef.delete(a)}};b.prototype.updateMaterialParameters=
function(a){for(var c=0,b=l;c<b.length;c++){var d=this._id2glMaterialRef.get(a+"_"+b[c]);d&&d.getGLMaterial()&&this.updateParamsForMat(d.getGLMaterial())}};b.prototype.updateParamsForMat=function(a){a.updateParameters&&(this.decreaseProgramReferences(a),a.updateParameters(),this.increaseProgramReferences(a))};b.prototype.increaseProgramReferences=function(a){a=a.getPrograms();for(var c=this._programRep,b=0;b<a.length;b++)c.increaseRefCount(a[b])};b.prototype.decreaseProgramReferences=function(a){a=
a.getPrograms();for(var b=this._programRep,e=0;e<a.length;e++)b.decreaseRefCount(a[e])};return b}();var l=g.tuple("color","depth","depthShadowMap","normal","highlight");return f});