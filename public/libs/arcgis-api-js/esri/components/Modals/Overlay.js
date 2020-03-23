// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../Component"],function(l){return function(g){function b(a){if(d[a])return d[a].exports;var e=d[a]={i:a,l:!1,exports:{}};return g[a].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var d={};return b.m=g,b.c=d,b.d=function(a,e,d){b.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,e){if((1&e&&(a=
b(a)),8&e)||4&e&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var k in a)b.d(d,k,function(c){return a[c]}.bind(null,k));return d},b.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(e,"a",e),e},b.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},b.p="",b(b.s=412)}({0:function(g,b,d){function a(a,c){function f(){this.constructor=
a}e(a,c);a.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}d.d(b,"b",function(){return a});d.d(b,"a",function(){return h});var e=function(a,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,a){f.__proto__=a}||function(f,a){for(var c in a)a.hasOwnProperty(c)&&(f[c]=a[c])})(a,c)},h=function(){return(h=Object.assign||function(a){for(var c,f=1,e=arguments.length;f<e;f++)for(var b in c=arguments[f])Object.prototype.hasOwnProperty.call(c,b)&&(a[b]=c[b]);return a}).apply(this,
arguments)}},1:function(g,b){g.exports=l},114:function(g,b,d){function a(a){return h[a.vnodeSelector]&&(!a.properties||!a.properties.disabled&&-1!==a.properties.tabindex)||a.properties&&a.properties.tabindex&&-1<parseInt(a.properties.tabindex,10)}var e=d(0),h={a:!0,area:!0,input:!0,select:!0,textarea:!0,button:!0,iframe:!0};g=function(b){function c(a){a=b.call(this,a)||this;return a.registerFirstFocusable=a.registerFirstFocusable.bind(a),a.registerLastFocusable=a.registerLastFocusable.bind(a),a.handleFocusChange=
a.handleFocusChange.bind(a),a}return e.b(c,b),c.prototype.render=function(){var a=this.findFirstFocusable(this.props.children),c=this.findLastFocusable(this.props.children);return a&&c&&(a.properties?a.properties.afterCreate=this.registerFirstFocusable:a.properties={afterCreate:this.registerFirstFocusable},c.properties?c.properties.afterCreate=this.registerLastFocusable:c.properties={afterCreate:this.registerLastFocusable}),this.props.children},c.prototype.findFirstFocusable=function(c){if(c)for(var b=
0;b<c.length;b++){var f=c[b];if(a(f)||f.children&&(f=this.findFirstFocusable(f.children)))return f}},c.prototype.findLastFocusable=function(c){if(c)for(var b=c.length-1;0<=b;b--){var f=c[b];if(a(f)||f.children&&(f=this.findLastFocusable(f.children)))return f}},c.prototype.registerFirstFocusable=function(a){this.firstFocusableElement&&this.firstFocusableElement!==a&&this.firstFocusableElement.removeEventListener("keydown",this.handleFocusChange);a.addEventListener("keydown",this.handleFocusChange);
this.firstFocusableElement=a;setTimeout(function(){a&&a.focus()},10)},c.prototype.registerLastFocusable=function(a){this.lastFocusableElement&&this.lastFocusableElement!==a&&this.lastFocusableElement.removeEventListener("keydown",this.handleFocusChange);this.lastFocusableElement=a;this.lastFocusableElement.addEventListener("keydown",this.handleFocusChange)},c.prototype.handleFocusChange=function(a){"Tab"!==a.key&&9!==a.keyCode||(a.shiftKey?document.activeElement===this.firstFocusableElement&&this.lastFocusableElement&&
(this.lastFocusableElement.focus(),a.preventDefault()):document.activeElement===this.lastFocusableElement&&this.firstFocusableElement&&(this.firstFocusableElement.focus(),a.preventDefault()))},c}(d(1).Component);b.a=g},412:function(g,b,d){d.r(b);var a=d(0);g=d(1);var e=d(114);d=function(b){function d(){return null!==b&&b.apply(this,arguments)||this}return a.b(d,b),d.prototype.componentWillReceiveProps=function(a){!1!==this.props.scrollable&&!1===a.scrollable&&(a=document.getElementsByClassName("mod__overlay-container"),
a[0]&&(a[0].scrollTop=0))},d.prototype.render=function(a){return a(e.a,{key:"overlay-focus-trap"},a("div",{classes:{"mod__overlay-container":!0,"mod__overlay-container--adjustable":this.props.adjustable,"mod__overlay-container--closing":this.props.closing,"mod__overlay-container--no-scroll":!1===this.props.scrollable,"mod__overlay-container--slide-left":"left"===this.props.slide,"mod__overlay-container--slide-right":"right"===this.props.slide},key:this.props.key},this.props.children))},d}(g.Component);
b.default=d}})});