// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../Component","../Dropdowns/BasicDropdown"],function(k,l){return function(e){function b(a){if(d[a])return d[a].exports;var c=d[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,b),c.l=!0,c.exports}var d={};return b.m=e,b.c=d,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},
b.t=function(a,c){if((1&c&&(a=b(a)),8&c)||4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var h in a)b.d(d,h,function(b){return a[b]}.bind(null,h));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=379)}({0:function(e,b,d){function a(a,
b){function f(){this.constructor=a}c(a,b);a.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)}d.d(b,"b",function(){return a});d.d(b,"a",function(){return g});var c=function(a,b){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])})(a,b)},g=function(){return(g=Object.assign||function(a){for(var b,f=1,d=arguments.length;f<d;f++)for(var c in b=arguments[f])Object.prototype.hasOwnProperty.call(b,
c)&&(a[c]=b[c]);return a}).apply(this,arguments)}},1:function(e,b){e.exports=k},104:function(e,b){e.exports=l},379:function(e,b,d){d.r(b);var a=d(0);e=d(1);var c=d(104),g=d.n(c);d=function(b){function c(a){a=b.call(this,a)||this;return a.state={active:!!a.props.active&&a.props.active,closing:!1},a.handleDrpClick=a.handleDrpClick.bind(a),a}return a.b(c,b),c.prototype.render=function(a){var b={"drp-ago2018__menu":!0,"drp-ago2018__menu--active":this.state.active&&!this.state.closing};if(this.props.children&&
this.props.children[0]&&this.props.children[1])return a(g.a,{key:this.props.key,active:this.state.active,onToggle:this.handleDrpClick,tabindex:this.props.tabindex},this.props.children[0],a("div",{classes:b},this.props.children[1]));console.error("The Ago2018Dropdown component requires 2 children")},c.prototype.componentWillReceiveProps=function(a){!1===a.active&&!0===this.props.active&&this.close()},c.prototype.close=function(a){var b=this;this.setState({closing:!0});setTimeout(function(){b.setState({active:!1,
closing:!1});b.props.onToggle&&a&&b.props.onToggle()},200)},c.prototype.handleDrpClick=function(){this.state.active?this.close(!0):this.state.closing||(this.setState({active:!0}),this.props.onToggle&&this.props.onToggle())},c}(e.Component);b.default=d}})});