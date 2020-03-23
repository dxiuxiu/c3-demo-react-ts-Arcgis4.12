// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ./SpatialReference".split(" "),function(k,l,g,d,h,c,e){return function(f){function a(){var b=f.call(this)||this;b.type=null;b.extent=null;b.hasM=!1;b.hasZ=!1;b.spatialReference=e.WGS84;return b}g(a,f);Object.defineProperty(a.prototype,"cache",{get:function(){return{}},enumerable:!0,configurable:!0});a.prototype.readSpatialReference=function(b,a){if(b instanceof
e)return b;if(null!=b){var c=new e;c.read(b,a);return c}return b};a.prototype.clone=function(){console.warn(".clone() is not implemented for "+this.declaredClass);return null};a.prototype.clearCache=function(){this.notifyChange("cache")};a.prototype.getCacheValue=function(b){return this.cache[b]};a.prototype.setCacheValue=function(b,a){this.cache[b]=a};d([c.property()],a.prototype,"type",void 0);d([c.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"cache",null);d([c.property({readOnly:!0,
dependsOn:["spatialReference"]})],a.prototype,"extent",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],a.prototype,"hasM",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],a.prototype,"hasZ",void 0);d([c.property({type:e,json:{write:!0}})],a.prototype,"spatialReference",void 0);d([c.reader("spatialReference")],a.prototype,"readSpatialReference",null);return a=d([c.subclass("esri.geometry.Geometry")],
a)}(c.declared(h))});