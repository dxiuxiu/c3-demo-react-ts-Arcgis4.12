// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/has ../../../../core/promiseUtils ../../../webgl ./Rect ./RectangleBinPack".split(" "),function(t,u,v,l,q,r,n){return function(){function c(d,b,a){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;this.width=d;this.height=b;this._glyphSource=a;this._binPack=new n(d-4,b-4);this._glyphData.push(new Uint8Array(d*b));this._dirties.push(!0);this._textures.push(void 0);
this._addDecorationGlyph()}c.prototype.getGlyphItems=function(d,b,a){for(var f=this,e=[],p=this._glyphSource,c=new Set,h=1/256,g=0;g<b.length;g++)c.add(Math.floor(b[g]*h));var m=[];c.forEach(function(b){if(256>=b){var e=d+b;f._rangePromises.has(e)?m.push(f._rangePromises.get(e)):(b=p.getRange(d,b,a).then(function(){f._rangePromises["delete"](e)}).catch(function(b){f._rangePromises["delete"](e);if(!l.isAbortError(b))throw Error("Unable to query resource");}),f._rangePromises.set(e,b),m.push(b))}});
return l.all(m).then(function(a){var c=f._glyphIndex[d];c||(c={},f._glyphIndex[d]=c);for(var g=0;g<b.length;g++){a=b[g];var k=c[a];if(k)e[a]={sdf:!0,rect:k.rect,metrics:k.metrics,page:k.page};else if((k=p.getGlyph(d,a))&&k.metrics){var h=f._recordGlyph(k,a);c[a]={rect:h,metrics:k.metrics,tileIDs:null,page:f._currentPage};e[a]={sdf:!0,rect:h,metrics:k.metrics,page:f._currentPage};f._dirties[f._currentPage]=!0}}return e})};c.prototype._recordGlyph=function(d,b){var a=d.metrics;if(0===a.width)a=new r.default(0,
0,0,0);else{b=a.width+6;var f=a.height+6,e=b%4?4-b%4:4,c=f%4?4-f%4:4;1===e&&(e=5);1===c&&(c=5);a=this._binPack.allocate(b+e,f+c);a.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new n(this.width-4,this.height-4),a=this._binPack.allocate(b+e,f+c));e=this._glyphData[this._currentPage];d=d.bitmap;
var l=c=void 0;if(d)for(var h=0;h<f;h++)for(var c=b*h,l=this.width*(a.y+h+1)+a.x,g=0;g<b;g++)e[l+g+1]=d[c+g]}return a};c.prototype._addDecorationGlyph=function(){for(var d=[117,149,181,207,207,181,149,117],b=[],a=0;a<d.length;a++)for(var c=d[a],e=0;11>e;e++)b.push(c);d={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(b)};this._recordGlyph(d,0)};c.prototype.bind=function(d,b,a,c){this._textures[a]||(this._textures[a]=new q.Texture(d,{pixelFormat:6406,dataType:5121,width:this.width,
height:this.height},new Uint8Array(this.width*this.height)));var e=this._textures[a];e.setSamplingMode(b);this._dirties[a]&&e.setData(this._glyphData[a]);d.bindTexture(e,c);this._dirties[a]=!1};c.prototype.dispose=function(){this._binPack=null;for(var c=0,b=this._textures;c<b.length;c++){var a=b[c];a&&a.dispose()}this._textures.length=0;this._glyphData.length=0};return c}()});