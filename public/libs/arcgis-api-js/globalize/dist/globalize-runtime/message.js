//>>built
(function(c,d){"function"===typeof define&&define.amd?define(["../globalize-runtime"],d):"object"===typeof exports?module.exports=d(require("../globalize-runtime")):d(c.Globalize)})(this,function(c){var d=c._runtimeKey,f=c._validateParameterType,e=function(a,b){f(a,b,void 0===a||null!==a&&"[object Object]"===""+a||Array.isArray(a),"Array or Plain Object")};c._messageFormatterFn=function(a){return function(b){if("number"===typeof b||"string"===typeof b)b=[].slice.call(arguments,0);e(b,"variables");
return a(b)}};c._messageFormat=function(){return{number:function(a,b){if(isNaN(a))throw Error("'"+a+"' isn't a number.");return a-(b||0)},plural:function(a,b,c,d,e){if({}.hasOwnProperty.call(d,a))return d[a]();b&&(a-=b);a=c(a,e);return a in d?d[a]():d.other()},select:function(a,b){return{}.hasOwnProperty.call(b,a)?b[a]():b.other()}}}();c._validateParameterTypeMessageVariables=e;c.messageFormatter=c.prototype.messageFormatter=function(){return c[d("messageFormatter",this._locale,[].slice.call(arguments,
0))]};c.formatMessage=c.prototype.formatMessage=function(a){return this.messageFormatter(a).apply({},[].slice.call(arguments,1))};return c});