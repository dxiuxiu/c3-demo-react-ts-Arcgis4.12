// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../webgl/Rect"],function(h,k,d){return function(){function e(b,c){this._height=this._width=0;this._free=[];this._width=b;this._height=c;this._free.push(new d.default(0,0,b,c))}Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0});e.prototype.allocate=function(b,c){if(b>this._width||c>this._height)return new d.default;
for(var a=null,e=-1,g=0;g<this._free.length;++g){var f=this._free[g];b<=f.width&&c<=f.height&&(null===a||f.y<=a.y&&f.x<=a.x)&&(a=f,e=g)}if(null===a)return new d.default;this._free.splice(e,1);a.width<a.height?(a.width>b&&this._free.push(new d.default(a.x+b,a.y,a.width-b,c)),a.height>c&&this._free.push(new d.default(a.x,a.y+c,a.width,a.height-c))):(a.width>b&&this._free.push(new d.default(a.x+b,a.y,a.width-b,a.height)),a.height>c&&this._free.push(new d.default(a.x,a.y+c,b,a.height-c)));return new d.default(a.x,
a.y,b,c)};e.prototype.release=function(b){for(var c=0;c<this._free.length;++c){var a=this._free[c];if(a.y===b.y&&a.height===b.height&&a.x+a.width===b.x)a.width+=b.width;else if(a.x===b.x&&a.width===b.width&&a.y+a.height===b.y)a.height+=b.height;else if(b.y===a.y&&b.height===a.height&&b.x+b.width===a.x)a.x=b.x,a.width+=b.width;else if(b.x===a.x&&b.width===a.width&&b.y+b.height===a.y)a.y=b.y,a.height+=b.height;else continue;this._free.splice(c,1);this.release(b)}this._free.push(b)};return e}()});