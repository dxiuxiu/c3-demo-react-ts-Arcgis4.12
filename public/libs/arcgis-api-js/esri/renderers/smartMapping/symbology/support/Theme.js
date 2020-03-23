// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/lang","./utils"],function(k,l,m,f,e){var g={light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};return function(){function c(a){this.schemes=this.basemapGroups=this.supportedBasemaps=this.description=this.label=this.name=
null;var b=a.label,h=a.description,d=a.schemes;this.name=a.name;this.label=b;this.description=h;this.schemes=d;a=a.basemapGroups||g;b=[];if(a)for(var c in a)b=b.concat(a[c]);this.supportedBasemaps=b;this.basemapGroups=a}c.prototype.isBasemapSupported=function(a){return(a=e.getBasemapId(a,this.supportedBasemaps))&&-1<this.supportedBasemaps.indexOf(a)?!0:!1};c.prototype.getRawSchemes=function(a){var b=e.getBasemapId(a.basemap,this.supportedBasemaps);if(this.isBasemapSupported(b)){a:{var c=this.basemapGroups,
d;for(d in c)if(-1<c[d].indexOf(b)){b=d;break a}b=void 0}a=a.geometryType;"multipoint"===a?a="point":"mesh"===a&&(a="polygon");return f.clone((this.schemes[a]||this.schemes["default"])[b])}};return c}()});