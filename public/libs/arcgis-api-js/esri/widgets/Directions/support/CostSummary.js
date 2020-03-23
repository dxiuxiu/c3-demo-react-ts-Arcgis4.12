// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ./directionsUtils".split(" "),function(h,k,f,c,g,b,d){return function(e){function a(){return null!==e&&e.apply(this,arguments)||this}f(a,e);Object.defineProperty(a.prototype,"primary",{get:function(){var a=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),b=this.directionsViewModel.impedanceAttribute,c=this.get("directionsViewModel.routeParameters.directionsLengthUnits");
return d.isTimeUnits(b.units)?d.formatTime(a.totalTime,{unit:b.units.replace("esriNAU","")}):d.formatDistance(a.totalLength,{toUnits:c})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"secondary",{get:function(){var a=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),b=this.get("directionsViewModel.routeParameters.directionsLengthUnits");return d.isTimeUnits(this.directionsViewModel.impedanceAttribute.units)?d.formatDistance(a.totalLength,{toUnits:b}):d.formatTime(a.totalTime)},
enumerable:!0,configurable:!0});c([b.property()],a.prototype,"directionsViewModel",void 0);c([b.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],a.prototype,"primary",null);c([b.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],a.prototype,"secondary",null);return a=c([b.subclass("esri.widgets.Directions.support.CostSummary")],a)}(b.declared(g))});