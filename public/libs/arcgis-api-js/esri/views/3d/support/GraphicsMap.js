// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","@dojo/framework/shim/Map","../../../core/Evented"],function(g,h,k,l,m){Object.defineProperty(h,"__esModule",{value:!0});g=function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a._map=new l.default;return a}k(b,f);b.prototype.clear=function(){if(0<this._map.size){var a=this.toArray();this._map.clear();this.emit("change",{added:[],removed:a})}};Object.defineProperty(b.prototype,"length",{get:function(){return this._map.size},
enumerable:!0,configurable:!0});b.prototype.addMany=function(a){if(0!==a.length){for(var d=new Set,c=0;c<a.length;c++){var b=a[c],e=b.uid;this._map.has(e)?(d.add(e),++this._map.get(e).refCount):(b.refCount=1,this._map.set(e,b))}a=0<d.size?a.filter(function(a){return!d.has(a.uid)}):a;this.emit("change",{added:a,removed:[]})}};b.prototype.removeMany=function(a){for(var d=[],c=0;c<a.length;c++){var b=a[c],e=b.uid,f=this._map.get(e);null!=f&&0>=--f.refCount&&this._map.delete(e)&&d.push(b)}0<d.length&&
this.emit("change",{added:[],removed:d})};b.prototype.toArray=function(){var a=Array(this._map.size),b=0;this._map.forEach(function(c){return a[b++]=c});return a};b.prototype.find=function(a){for(var b=this._map.entries(),c=b.next();!c.done;c=b.next())if(a(c.value[1]))return c.value[1]};b.prototype.forEach=function(a){this._map.forEach(function(b){return a(b)})};return b}(m);h.GraphicsMap=g});