// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./object"],function(g,h,e){function f(b,d){return b.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,function(a,c,b){if(""===c)return"$";a=e.getDeepValue(c,d);a=null==a?"":a;if("undefined"===typeof a)throw Error('could not find key "'+c+'" in template');return a.toString()})}return function(){function b(d,a,c){this instanceof b&&(this.name=d,this.message=a&&f(a,c)||"",this.details=c)}b.prototype.toString=function(){return"["+this.name+"]: "+this.message};return b}()});