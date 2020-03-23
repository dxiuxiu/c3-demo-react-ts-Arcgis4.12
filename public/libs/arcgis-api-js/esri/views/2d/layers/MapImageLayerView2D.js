// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ../engine ./LayerView2D ./support/ExportStrategy ./support/popupUtils2D ../../layers/MapImageLayerView".split(" "),function(B,
C,l,m,n,p,q,r,t,g,h,u,v,w,x,y,z){var A=t.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(k){function a(){var e=k.call(this)||this;e._handles=new r;e.container=new v.BitmapContainer;return e}m(a,k);a.prototype.hitTest=function(e,a){return null};a.prototype.update=function(a){this.strategy.update(a);this.notifyChange("updating")};a.prototype.attach=function(){var a=this,b=this.layer,f=b.imageMaxWidth,d=b.imageMaxHeight,c=b.version,b=10.3<=c,c=10<=c;this.strategy=new x({container:this.container,
fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:f,imageMaxHeight:d,imageRotationSupported:b,imageNormalizationSupported:c,hidpi:!0});this._exportImageParameters=new u.ExportImageParameters({view:this.view,layer:this.layer});this._handles.add(this._exportImageParameters.watch("version",function(b){a._exportImageVersion!==b&&(a._exportImageVersion=b,a.requestUpdate())}))};a.prototype.detach=function(){this.strategy.destroy();this._handles.removeAll();
this._exportImageParameters.layer=null;this._exportImageParameters.destroy();this._exportImageParameters=null;this.container.removeAllChildren()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.createFetchPopupFeaturesQueryGeometry=function(a,b){return y.createQueryGeometry(a,b,this.view)};a.prototype.doRefresh=function(a){return q(this,void 0,void 0,function(){return p(this,function(a){this.requestUpdate();return[2]})})};
a.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};a.prototype.fetchImage=function(a,b,f,d){var c=this;d=l({timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp},d);return this.layer.fetchImage(a,b,f,d).then(function(a){c.notifyChange("updating");return a}).catch(function(a){g.isAbortError(a)||A.error(a);c.notifyChange("updating");return g.reject(a)})};return a=n([h.subclass("esri.views.2d.layers.MapImageLayerView2D")],
a)}(h.declared(w,z))});