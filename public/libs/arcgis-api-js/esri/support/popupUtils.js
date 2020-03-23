// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper dojo/i18n!../widgets/Popup/nls/Popup ../PopupTemplate ../popup/content ../popup/FieldInfo ../popup/support/FieldInfoFormat".split(" "),function(v,h,k,l,m,f,n,e){function p(a,b){var c=a;b.ignoreFieldTypes&&(a=a.filter(function(a){return-1===b.ignoreFieldTypes.indexOf(a.type)}));if(0===a.length)return null;var d=b.maximumFields&&a.length>b.maximumFields;d&&(a=a.slice(0,b.maximumFields));a===c&&(a=a.slice());a.sort(q);return{fields:a,limitExceeded:d}}
function q(a,b){return"oid"===a.type?-1:"oid"===b.type?1:g(a)?-1:g(b)?1:(a.alias||a.name).toLocaleLowerCase().localeCompare((b.alias||b.name).toLocaleLowerCase())}function r(a){return a.map(function(a){return new n({fieldName:a.name,label:a.alias,format:t(a),visible:!0})})}function t(a){switch(a.type){case "small-integer":case "integer":case "single":return new e({digitSeparator:!0,places:0});case "double":return new e({digitSeparator:!0,places:2});case "date":return new e({dateFormat:"long-month-day-year"});
default:return null}}function g(a){if("name"===(a.name&&a.name.toLowerCase())||"name"===(a.alias&&a.alias.toLowerCase()))return!0}Object.defineProperty(h,"__esModule",{value:!0});h.createPopupTemplate=function(a,b){var c=a.fields;a=a.title;if(!c)return null;b=k({},u,b);c=p(c,b);if(!c)return null;a:{b=0;for(var d=c.fields;b<d.length;b++){var e=d[b];if(g(e)){a=a+": {"+e.name+"}";break a}}}d=c.limitExceeded;b=[new f.FieldsContent,new f.AttachmentsContent];d&&b.push(new f.TextContent({text:"\x3csmall\x3e"+
l.tooManyFields+"\x3c/small\x3e"}));c=r(c.fields);return new m({title:a,content:b,fieldInfos:c})};var u={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}});