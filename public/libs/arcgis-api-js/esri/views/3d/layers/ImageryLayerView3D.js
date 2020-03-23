// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/watchUtils ../../../core/accessorSupport/decorators ./DynamicLayerView3D ../../layers/ImageryLayerView".split(" "),function(m,n,g,f,p,h,d,k,l){return function(e){function c(){var a=null!==e&&e.apply(this,arguments)||this;a.updateWhenStationary=!0;return a}g(c,e);c.prototype.initialize=function(){var a=this;this.handles.add([h.whenOnce(this.view.basemapTerrain,
"ready",function(){return a.initializeMaximumDataResolution()}),this.layer.watch("exportImageServiceParameters.version",function(b){a.refreshDebounced()}),this.watch("timeExtent",function(){return a.refreshDebounced()}),this.layer.on("redraw",function(){return a.redraw(function(b){return a.redrawImage(b)})})])};c.prototype.initializeMaximumDataResolution=function(){var a=this.view.basemapTerrain.spatialReference,b=this.layer.fullExtent;b&&a.equals(b.spatialReference)&&(this.maximumDataResolution=
{x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})};c.prototype.getFetchOptions=function(){return{timeExtent:this.timeExtent}};c.prototype.processResult=function(a,b){b.imageElement?a.image=b.imageElement:(a.image=document.createElement("canvas"),a.pixelData=b.pixelData,this.redrawImage(a))};c.prototype.redrawImage=function(a){if(!(a.image instanceof HTMLCanvasElement&&a.pixelData))return!1;var b=a.image,c=b.getContext("2d");a=this.layer.applyFilter(a.pixelData).pixelBlock;var d=c.createImageData(a.width,
a.height),e=a.getAsRGBA();b.width=a.width;b.height=a.height;d.data.set(e);c.putImageData(d,0,0);return!0};f([d.property()],c.prototype,"layer",void 0);return c=f([d.subclass("esri.views.3d.layers.ImageryLayerView3D")],c)}(d.declared(k,l))});