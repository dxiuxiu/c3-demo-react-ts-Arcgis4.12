// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators".split(" "),function(g,h,e,c,f,b){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);Object.defineProperty(a.prototype,"canZoomIn",{get:function(){return!!this.get("view.ready")},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"canZoomOut",{get:function(){return!!this.get("view.ready")},
enumerable:!0,configurable:!0});c([b.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"canZoomIn",null);c([b.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"canZoomOut",null);c([b.property()],a.prototype,"view",void 0);return a=c([b.subclass("esri.widgets.Zoom.ZoomConditions3D")],a)}(b.declared(f))});