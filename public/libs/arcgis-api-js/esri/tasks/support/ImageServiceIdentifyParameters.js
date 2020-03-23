// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../TimeExtent ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/RasterFunction".split(" "),function(t,u,m,d,h,n,p,q,c,e,r,k,f){var l=q.getLogger("esri.tasks.support.ImageServiceIdentifyParameters");return function(g){function b(){var a=
null!==g&&g.apply(this,arguments)||this;a.geometry=null;a.renderingRules=null;a.pixelSize=null;a.returnGeometry=!0;a.returnCatalogItems=!0;a.returnPixelValues=!0;a.maxItemCount=null;a.timeExtent=null;return a}m(b,g);b.prototype.writeGeometry=function(a,b,c){null!=a&&(b.geometryType=r.getJsonType(a),b[c]=JSON.stringify(a.toJSON()))};Object.defineProperty(b.prototype,"mosaicRule",{set:function(a){a&&a.mosaicMethod&&(a=k.fromJSON(h({},a.toJSON(),{mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation})));
this._set("mosaicRule",a)},enumerable:!0,configurable:!0});b.prototype.writeMosaicRule=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};Object.defineProperty(b.prototype,"renderingRule",{set:function(a){a&&a.rasterFunction&&(a=f.fromJSON(h({},a.toJSON(),{rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments})));this._set("renderingRule",a)},enumerable:!0,configurable:!0});b.prototype.writeRenderingRule=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};
b.prototype.writeRenderingRules=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.map(function(a){return a.toJSON()})))};Object.defineProperty(b.prototype,"pixelSizeX",{get:function(){return this._get("pixelSizeX")},set:function(a){this._set("pixelSizeX",a);this.pixelSize||(this.pixelSize=new e);this.pixelSize.x=a;l.warn("pixelSizeX is deprecated, use ImageServiceIdentifyParameters.pixelSize instead.")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pixelSizeY",{get:function(){return this._get("pixelSizeY")},
set:function(a){this._set("pixelSizeY",a);this.pixelSize||(this.pixelSize=new e);this.pixelSize.y=a;l.warn("pixelSizeY is deprecated, use ImageServiceIdentifyParameters.pixelSize instead.")},enumerable:!0,configurable:!0});b.prototype.writePixelSize=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};b.prototype.writeTimeExtent=function(a,b,c){if(null!=a){var d=a.start?a.start.getTime():null;a=a.end?a.end.getTime():null;b[c]=null!=d?null!=a?d+","+a:""+d:null}};d([c.property({json:{write:!0}})],
b.prototype,"geometry",void 0);d([c.writer("geometry")],b.prototype,"writeGeometry",null);d([c.property({type:k,json:{write:!0}})],b.prototype,"mosaicRule",null);d([c.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);d([c.property({type:f,json:{write:!0}})],b.prototype,"renderingRule",null);d([c.writer("renderingRule")],b.prototype,"writeRenderingRule",null);d([c.property({type:[f],json:{write:!0}})],b.prototype,"renderingRules",void 0);d([c.writer("renderingRules")],b.prototype,"writeRenderingRules",
null);d([c.property({json:{write:!1}})],b.prototype,"pixelSizeX",null);d([c.property({json:{write:!1}})],b.prototype,"pixelSizeY",null);d([c.property({type:e,json:{write:!0}})],b.prototype,"pixelSize",void 0);d([c.writer("pixelSize")],b.prototype,"writePixelSize",null);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnGeometry",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnCatalogItems",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,
"returnPixelValues",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"maxItemCount",void 0);d([c.property({type:n,json:{write:{target:"time"}}})],b.prototype,"timeExtent",void 0);d([c.writer("timeExtent")],b.prototype,"writeTimeExtent",null);return b=d([c.subclass("esri.tasks.support.ImageServiceIdentifyParameters")],b)}(c.declared(p))});