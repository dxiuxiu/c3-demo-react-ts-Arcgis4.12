// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Graphic ../../../PopupTemplate ../../../core/Collection ../../../core/Handles ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../renderers/SimpleRenderer ../../../renderers/support/jsonUtils ../../../tasks/support/FeatureSet ../engine ./LayerView2D ./graphics/GraphicsView2D ../../layers/RefreshableLayerView".split(" "),function(J,K,
x,y,z,A,B,C,m,h,n,p,D,E,F,G,H,I){return function(l){function d(){var a=null!==l&&l.apply(this,arguments)||this;a._handles=new C;a._graphicsViewMap={};a._popupTemplates=new Map;a.container=new F.Container;a.graphicsViews=[];return a}x(d,l);d.prototype.hitTest=function(a,b){var c=this;if(this.suspended||!this.graphicsViews.length)return m.resolve();var d=this.graphicsViews.reverse().map(function(c){return c.hitTest(a,b)});return m.all(d).then(function(a){return a.filter(function(a,b){a&&(a.popupTemplate=
c._popupTemplates.get(c.graphicsViews[b]),a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};d.prototype.update=function(a){if(this.graphicsViews)for(var b=0,c=this.graphicsViews;b<c.length;b++)c[b].update(a)};d.prototype.attach=function(){var a=this;this.layer.featureCollections.forEach(function(b){var c=E.fromJSON(b.featureSet),d=new (B.ofType(z))(c.features);if("polygon"===c.geometryType)for(var e=0,k=c.features;e<k.length;e++){var r=k[e];if("rings"in r.geometry)for(var h=r.geometry.rings,
p=h.length,t=0;t<p;++t){for(var u=h[t],l=u.length,w=0,m=0,n=0,v=0;v<l;v++){var f=u[v],g=u[(v+1)%l],q=2,w=w+(f[0]*g[1]-g[0]*f[1]);2<f.length&&2<g.length&&r.geometry.hasZ&&(m+=f[0]*g[2]-g[0]*f[2],q=3);f.length>q&&g.length>q&&r.geometry.hasM&&(n+=f[0]*g[q]-g[0]*f[q])}0>=w&&0>=m&&0>=n||(h[t]=u.reverse())}}a._graphicsViewMap[c.geometryType]?(e=a._graphicsViewMap[c.geometryType],e.graphics.addMany(d)):(e=b.layerDefinition.drawingInfo,b=b.popupInfo?A.fromJSON(b.popupInfo):null,k=D.fromJSON(e.renderer),e=
new H.default({view:a.view,graphics:d,renderer:k}),a._graphicsViewMap[c.geometryType]=e,a._popupTemplates.set(e,b),"polygon"!==c.geometryType||a.layer.polygonSymbol?"polyline"!==c.geometryType||a.layer.lineSymbol?"point"!==c.geometryType||a.layer.pointSymbol||(a.layer.pointSymbol=k.symbol):a.layer.lineSymbol=k.symbol:a.layer.polygonSymbol=k.symbol,a.graphicsViews.push(e),a.container.addChild(e.container))});this._handles.add(h.init(this.layer,"polygonSymbol",function(b){a._graphicsViewMap.polygon.renderer=
new p({symbol:b})}));this._handles.add(h.init(this.layer,"lineSymbol",function(b){a._graphicsViewMap.polyline.renderer=new p({symbol:b})}));this._handles.add(h.init(this.layer,"pointSymbol",function(b){a._graphicsViewMap.point.renderer=new p({symbol:b})}))};d.prototype.detach=function(){this._handles.removeAll();this.container.removeAllChildren();this.graphicsViews.forEach(function(a){a.destroy();a.view=null;a.renderer=null});this.graphicsViews.length=0};d.prototype.moveStart=function(){this.requestUpdate()};
d.prototype.viewChange=function(){this.requestUpdate()};d.prototype.moveEnd=function(){this.requestUpdate()};return d=y([n.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],d)}(n.declared(G,I))});