// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(g,h){return function(d){function b(a){if(e[a])return e[a].exports;var c=e[a]={i:a,l:!1,exports:{}};return d[a].call(c.exports,c,c.exports,b),c.l=!0,c.exports}var e={};return b.m=d,b.c=e,b.d=function(a,c,f){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:f})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},
b.t=function(a,c){if((1&c&&(a=b(a)),8&c)||4&c&&"object"==typeof a&&a&&a.__esModule)return a;var f=Object.create(null);if(b.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var d in a)b.d(f,d,function(b){return a[b]}.bind(null,d));return f},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=367)}({14:function(d,b){d.exports=
g},25:function(d,b){d.exports=h},367:function(d,b,e){e.r(b);var a=e(14);d=e(25);var c=e.n(d);b.default=function(b,d){var e=b.user,e=e?e.orgId?"Org":"Public":"Anon";return d(c.a,{backgroundColor:"#DBEDFA",textColor:"#196FA6",key:"subscriber-badge",size:b.size,text:a.subscriber,title:a.tooltips["subscriber"+e],tooltip:b.tooltip?a.tooltips["subscriber"+e]:void 0,tooltipDirection:b.tooltipDirection},d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},d("path",{d:"M8.05371,15.5H8.0498a.49939.49939,0,0,1-.25-.06689C.59961,11.27539,1.542,2.0376,1.55225,1.94434A.49966.49966,0,0,1,1.811,1.56152a.50721.50721,0,0,1,.46338-.0083A5.15007,5.15007,0,0,0,7.73291.61328a.51762.51762,0,0,1,.6377,0,5.14642,5.14642,0,0,0,5.4585.93994.50711.50711,0,0,1,.46338.0083.49966.49966,0,0,1,.25879.38281c.01025.09326.95264,9.33105-6.24756,13.48877A.49939.49939,0,0,1,8.05371,15.5Zm0-.5h0ZM2.50977,2.70557c-.05615,2.05469.22266,8.45508,5.542,11.71387,5.31934-3.25879,5.59814-9.65967,5.542-11.71387a6.17691,6.17691,0,0,1-5.542-1.07324A6.18289,6.18289,0,0,1,2.50977,2.70557Z",
fill:"#196fa6"})))}}})});