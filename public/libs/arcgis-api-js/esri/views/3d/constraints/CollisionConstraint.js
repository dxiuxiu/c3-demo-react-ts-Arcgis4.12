// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/_base/kernel ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(a,c,f,e,g,h,d){Object.defineProperty(c,"__esModule",{value:!0});a=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);Object.defineProperty(b.prototype,"enabled",{set:function(a){g.deprecated("SceneView.constraint.collision.enabled","Use Map.ground.navigationConstraint instead",
"4.8");this._set("enabled",a)},enumerable:!0,configurable:!0});e([d.property({value:!0})],b.prototype,"enabled",null);return b=e([d.subclass("esri.views.3d.constraints.CollisionConstraint")],b)}(d.declared(h));c.CollisionConstraint=a;c.default=a});