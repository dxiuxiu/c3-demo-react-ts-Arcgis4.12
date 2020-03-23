// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./ImmutableArray","./languageUtils","../geometry/Geometry"],function(h,k,f,e,g){return function(){function d(a){this.declaredClass="esri.arcade.Dictionary";this.attributes=null;this.plain=!1;this.immutable=!0;this.attributes=a instanceof d?a.attributes:void 0===a?{}:null===a?{}:a}d.prototype.field=function(a){var c=a.toLowerCase();a=this.attributes[a];if(void 0!==a)return a;for(var b in this.attributes)if(b.toLowerCase()===c)return this.attributes[b];throw Error("Field not Found");
};d.prototype.setField=function(a,c){if(this.immutable)throw Error("Dictionary is Immutable");var b=a.toLowerCase();if(void 0===this.attributes[a])for(var d in this.attributes)if(d.toLowerCase()===b){this.attributes[d]=c;return}this.attributes[a]=c};d.prototype.hasField=function(a){var c=a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(var b in this.attributes)if(b.toLowerCase()===c)return!0;return!1};d.prototype.keys=function(){var a=[],c;for(c in this.attributes)a.push(c);return a=a.sort()};
d.prototype.castToText=function(){var a="",c;for(c in this.attributes){""!==a&&(a+=",");var b=this.attributes[c];null==b?a+=JSON.stringify(c)+":null":e.isBoolean(b)||e.isNumber(b)||e.isString(b)?a+=JSON.stringify(c)+":"+JSON.stringify(b):b instanceof g?a+=JSON.stringify(c)+":"+e.toStringExplicit(b):b instanceof f?a+=JSON.stringify(c)+":"+e.toStringExplicit(b):b instanceof Array?a+=JSON.stringify(c)+":"+e.toStringExplicit(b):b instanceof Date?a+=JSON.stringify(c)+":"+JSON.stringify(b):null!==b&&"object"===
typeof b&&void 0!==b.castToText&&(a+=JSON.stringify(c)+":"+b.castToText())}return"{"+a+"}"};return d}()});