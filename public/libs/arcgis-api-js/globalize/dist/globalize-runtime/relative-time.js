//>>built
(function(a,c){"function"===typeof define&&define.amd?define(["../globalize-runtime","./number","./plural"],c):"object"===typeof exports?module.exports=c(require("../globalize-runtime"),require("./number"),require("./plural")):c(a.Globalize)})(this,function(a){var c=a._formatMessage,k=a._runtimeKey,g=a._validateParameterPresence,h=a._validateParameterTypeNumber;a._relativeTimeFormatterFn=function(a,d,f){return function(b){g(b,"value");h(b,"value");var e;(e=f["relative-type-"+b])?b=e:(e=0>=b?f["relativeTime-type-past"]:
f["relativeTime-type-future"],b=Math.abs(b),e=e["relativeTimePattern-count-"+d(b)],b=c(e,[a(b)]));return b}};a.formatRelativeTime=a.prototype.formatRelativeTime=function(a,d,c){g(a,"value");h(a,"value");return this.relativeTimeFormatter(d,c)(a)};a.relativeTimeFormatter=a.prototype.relativeTimeFormatter=function(c,d){d=d||{};return a[k("relativeTimeFormatter",this._locale,[c,d])]};return a});