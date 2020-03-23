// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/watchUtils ../../core/accessorSupport/decorators".split(" "),function(n,p,g,d,h,k,l,m,e,c){return function(f){function a(a){var b=f.call(this)||this;b._anchorHandles=new l;b.location=null;b.screenLocation=null;b.screenLocationEnabled=!1;b.view=null;b._anchorHandles.add([e.watch(b,["screenLocationEnabled","location",
"view.size","view.stationary"],function(){return b._updateScreenPointAndHandle()}),e.watch(b,["view","view.ready"],function(){return b._wireUpView()})]);return b}g(a,f);a.prototype.destroy=function(){this.view=null;this._anchorHandles&&this._anchorHandles.destroy();this._viewpointHandle=this._anchorHandles=null};a.prototype._wireUpView=function(){var a=this;this._anchorHandles.remove("view");this._viewpointHandle=null;if(this.get("view.ready")){this._setScreenLocation();var b=this.view,b=m.pausable(b,
"3d"===b.type?"camera":"viewpoint",function(){return a._viewpointChange()});this._anchorHandles.add(b,"view");this._viewpointHandle=b;this._toggleWatchingViewpoint()}};a.prototype._viewpointChange=function(){this._setScreenLocation();this.emit("view-change")};a.prototype._updateScreenPointAndHandle=function(){this._setScreenLocation();this._toggleWatchingViewpoint()};a.prototype._toggleWatchingViewpoint=function(){var a=this._viewpointHandle,b=this.screenLocationEnabled;a&&(this.location&&b?a.resume():
a.pause())};a.prototype._setScreenLocation=function(){var a=this.location,b=this.view,c=this.screenLocationEnabled,d=this.get("view.ready"),a=c&&a&&d?b.toScreen(a):null;this._set("screenLocation",a)};d([c.property()],a.prototype,"location",void 0);d([c.property({readOnly:!0})],a.prototype,"screenLocation",void 0);d([c.property()],a.prototype,"screenLocationEnabled",void 0);d([c.property()],a.prototype,"view",void 0);return a=d([c.subclass("esri.widgets.support.AnchorElementViewModel")],a)}(c.declared(h,
k))});