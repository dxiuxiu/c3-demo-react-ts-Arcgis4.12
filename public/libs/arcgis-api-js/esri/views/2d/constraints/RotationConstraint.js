// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.enabled=!0;a.rotationEnabled=!0;return a}f(a,d);e=a;a.prototype.constrain=function(a,b){if(!this.enabled||!b)return a;this.rotationEnabled||(a.rotation=b.rotation);return a};a.prototype.clone=function(){return new e({enabled:this.enabled,
rotationEnabled:this.rotationEnabled})};var e;c([b.property()],a.prototype,"enabled",void 0);c([b.property()],a.prototype,"rotationEnabled",void 0);return a=e=c([b.subclass("esri.views.2d.constraints.RotationConstraint")],a)}(b.declared(g))});