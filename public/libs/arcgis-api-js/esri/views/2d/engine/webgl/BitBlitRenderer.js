// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../webgl","./shaders/BitBlitPrograms"],function(f,g,e,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function c(){this._initialized=!1}c.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null);this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)};c.prototype.render=function(b,c,d,a){b&&(this._initialized||this._initialize(b),b.setBlendFunctionSeparate(1,771,1,771),b.bindVAO(this._vertexArrayObject),
b.bindProgram(this._program),c.setSamplingMode(d),b.bindTexture(c,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",a),b.drawArrays(5,0,4),b.bindVAO())};c.prototype._initialize=function(b){if(this._initialized)return!0;var c=h.bitBlit.attributes,d=e.createProgram(b,h.bitBlit);if(!d)return!1;var a=new Int8Array(16);a[0]=-1;a[1]=-1;a[2]=0;a[3]=0;a[4]=1;a[5]=-1;a[6]=1;a[7]=0;a[8]=-1;a[9]=1;a[10]=0;a[11]=1;a[12]=1;a[13]=1;a[14]=1;a[15]=1;b=new e.VertexArrayObject(b,c,{geometry:[{name:"a_pos",
count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:e.BufferObject.createVertex(b,35044,a)});this._program=d;this._vertexArrayObject=b;return this._initialized=!0};return c}();g.BitBlitRenderer=f});