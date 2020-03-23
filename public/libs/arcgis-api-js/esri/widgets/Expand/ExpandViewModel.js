// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators".split(" "),function(l,m,g,c,h,k,e,d){return function(f){function a(b){b=f.call(this,b)||this;b._viewpointHandle=null;b._handles=new k;b.group=null;return b}g(a,f);a.prototype.initialize=function(){var b=this;this._handles.add(e.on(this,"view.ui","expand",function(a){(a=a.target)&&a!==b&&a.expanded&&
a.group&&a.group===b.group&&b._collapse()}))};a.prototype.destroy=function(){this.view=this._viewpointHandle=null;this._handles.destroy();this._handles=null};Object.defineProperty(a.prototype,"autoCollapse",{set:function(b){this._set("autoCollapse",b);this._watchViewpoint()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"expanded",{set:function(b){b=!!b;this._set("expanded",b);var a=this.get("view.ui");a&&a.emit("expand",{target:this});this._viewpointHandleChange(b)},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"view",{set:function(a){this._set("view",a);this._watchViewpoint()},enumerable:!0,configurable:!0});a.prototype._viewpointHandleChange=function(a){var b=this;this._viewpointHandle&&(a?e.whenTrueOnce(this.view,"stationary",function(){return b._viewpointHandle.resume()}):this._viewpointHandle.pause())};a.prototype._watchViewpoint=
function(){var a=this;this._handles.remove("viewpoint");this._viewpointHandle=null;var d=this.autoCollapse,c=this.view;c&&d&&c.when(function(){var b=e.pausable(c,"3d"===c.type?"camera":"viewpoint",function(){return a._collapse()});a._handles.add(b,"viewpoint");a._viewpointHandle=b})};a.prototype._collapse=function(){this.expanded=!1};c([d.property({value:!1})],a.prototype,"autoCollapse",null);c([d.property({value:!1})],a.prototype,"expanded",null);c([d.property()],a.prototype,"group",void 0);c([d.property({dependsOn:["view.ready"],
readOnly:!0})],a.prototype,"state",null);c([d.property({value:null})],a.prototype,"view",null);return a=c([d.subclass("esri.widgets.Expand.ExpandViewModel")],a)}(d.declared(h))});