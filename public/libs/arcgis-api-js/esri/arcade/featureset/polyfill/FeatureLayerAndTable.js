// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/accessorSupport/decorators ../../../layers/FeatureLayer".split(" "),function(h,k,e,f,b,c,g){return function(d){function a(a){a=d.call(this,a)||this;a.handleAsTable=!1;return a}e(a,d);a.prototype._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new b("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");
}else if(!this.url)throw new b("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");};return a=f([c.subclass("esri.arcade.featureset.polyfill.FeatureLayerAndTable")],a)}(c.declared(g))});