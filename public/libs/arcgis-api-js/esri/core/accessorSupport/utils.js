// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../lang"],function(q,d,n){function h(a,b,c){return b?Object.keys(b).reduce(function(a,e){var d=null,f="merge";c&&(d=c.path?c.path+"."+e:e,f=c.policy(d));if("replace"===f)return a[e]=b[e],a;if(void 0===a[e])return a[e]=n.clone(b[e]),a;var g=a[e],f=b[e];if(g===f)return a;if(Array.isArray(f)||Array.isArray(a))g=g?Array.isArray(g)?a[e]=g.concat():a[e]=[g]:a[e]=[],f&&(Array.isArray(f)||(f=[f]),f.forEach(function(a){-1===g.indexOf(a)&&g.push(a)}));else if(f&&"object"===typeof f)if(c){var p=
c.path;c.path=d;a[e]=h(g,f,c);c.path=p}else a[e]=h(g,f,null);else if(!a.hasOwnProperty(e)||b.hasOwnProperty(e))a[e]=f;return a},a||{}):a}function k(a){return Array.isArray(a)?a:a.split(".")}function l(a){if(Array.isArray(a)||-1<a.indexOf(",")){a=Array.isArray(a)?a:a.split(",");for(var b=0;b<a.length;b++)a[b]=a[b].trim();return 1===a.length?a[0]:a}return a.trim()}function m(a){var b=!1;return function(){b||(b=!0,a())}}Object.defineProperty(d,"__esModule",{value:!0});d.getProperties=function(a){return a?
a.__accessor__?a.__accessor__:a.propertyInvalidated?a:null:null};d.isPropertyDeclared=function(a,b){return a&&a.metadatas&&null!=a.metadatas[b]};d.merge=function(a,b,c){return c?h(a,b,{policy:c,path:""}):h(a,b,null)};d.pathToStringOrArray=function(a){return!a||"string"===typeof a&&-1===a.indexOf(".")?a:k(a)};d.pathToArray=k;d.splitPath=l;d.parseConditionalPath=function(a){if(-1===a.indexOf("?"))return null;a=k(a);for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]="?"===d[d.length-1];b[c]&&
(a[c]=d.slice(0,-1))}return{fullPath:a.join("."),conditional:b}};d.parse=function(a,b,c,d){b=l(b);if(Array.isArray(b)){var e=b.map(function(b){return d(a,b.trim(),c)});return{remove:m(function(){return e.forEach(function(a){return a.remove()})})}}return d(a,b.trim(),c)};d.once=m});