// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/extendsHelper ../../../Color ./support/colors ./support/SymbologyBase ./support/utils".split(" "),function(l,m,p,q,c,r,t,k){function n(a,b,d){var c=a.theme||"default";if(b=r[b]){var g=b.stops,e="mesh"!==a.geometryType&&a.worldScale?a.view:null;switch(a.geometryType){case "point":case "multipoint":return"point-cloud-class"===c?u({theme:c,name:b.name,tags:b.tags,colors:g}):v({name:b.name,tags:b.tags,theme:c,colors:g,
noDataColor:d.noDataColor,opacity:1,outline:d.outline,size:d.size},e);case "polyline":return w({name:b.name,tags:b.tags,theme:c,colors:g,noDataColor:d.noDataColor,opacity:1,width:d.width},e);case "polygon":return x({name:b.name,tags:b.tags,theme:c,colors:g,noDataColor:d.noDataColor,opacity:d.fillOpacity||1,outline:d.outline,size:"12px"},e);case "mesh":return y({name:b.name,tags:b.tags,theme:c,colors:g,noDataColor:d.noDataColor,opacity:d.fillOpacity||1})}}}function u(a){return{name:a.name,tags:a.tags.slice(),
theme:a.theme,colors:a.colors.map(function(a){return new c(a)})}}function v(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),outline:{color:new c(a.outline.color),width:a.outline.width},size:b?k.toWorldScale(a.size,b):a.size,opacity:a.opacity}}function w(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),width:b?k.toWorldScale(a.width,
b):a.width,opacity:a.opacity}}function x(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),outline:{color:new c(a.outline.color),width:a.outline.width},opacity:a.opacity,size:b?k.toWorldScale(a.size,b):a.size}}function y(a){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),opacity:a.opacity}}var h={color:[153,153,153,.25],
width:"1px"},e="tropical-bliss desert-blooms under-the-sea vibrant-rainbow ocean-bay prairie-summer pastel-chalk".split(" "),f="predominant-v1 predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ");l={light:{common:{noDataColor:"#aaaaaa",outline:h,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(f)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,
26,26,.25],width:"1px"},size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(f)}};m={light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(f)},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(f)}};var h={light:{common:{noDataColor:"#aaaaaa",outline:h,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(f)},dark:{common:{noDataColor:"#aaaaaa",
outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(f)}},z={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:l,polyline:m,polygon:h}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},
dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}};return new (function(a){function b(){return a.call(this,{themeDictionary:z})||this}q(b,a);b.prototype.getSchemes=function(a){var d=a.theme||"default",b=this.getRawSchemes({theme:d,basemap:a.basemap,geometryType:a.geometryType});if(b){var d=this.getBasemapId(a.basemap,d),c=b.common;return{primaryScheme:n(a,b.primary,c),secondarySchemes:b.secondary.map(function(d){return n(a,d,c)}).filter(Boolean),basemapId:d}}};b.prototype.getSchemeByName=
function(a){return this.filterSchemesByName(a)};b.prototype.getSchemesByTag=function(a){return this.filterSchemesByTag(a)};b.prototype.cloneScheme=function(a){if(a)return a=p({},a),a.colors=a.colors.map(function(a){return new c(a)}),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new c(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new c(a.outline.color),width:a.outline.width}),a};return b}(t))});