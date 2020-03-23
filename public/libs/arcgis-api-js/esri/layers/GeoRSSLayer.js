// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../config ../request ../core/Error ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/commonProperties ../symbols/PictureMarkerSymbol ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol".split(" "),
function(k,C,l,m,d,e,f,n,p,q,r,g,c,t,u,v,w,x,y,z,A,B){return function(h){function a(b,a){b=h.call(this)||this;b.description=null;b.title=null;b.lineSymbol=null;b.pointSymbol=null;b.polygonSymbol=null;b.outSpatialReference=null;b.url=null;b.type="geo-rss";return b}m(a,h);a.prototype.normalizeCtorArgs=function(b,a){return"string"===typeof b?l({url:b},a):b};a.prototype.readFeatureCollections=function(b,a){a.featureCollection.layers.forEach(function(a){(a=a.layerDefinition.drawingInfo.renderer.symbol)&&
"esriSFS"===a.type&&a.outline&&-1!==a.outline.style.indexOf("esriSFS")&&(a.outline.style="esriSLSSolid")});return a.featureCollection.layers};a.prototype.load=function(a){var b=this,c=r.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},a).then(function(){return b._fetchService(c)},function(){return b._fetchService(c)}));return this.when()};a.prototype.importLayerViewModule=function(a){return f(this,
void 0,void 0,function(){return e(this,function(b){switch(a.type){case "2d":return[2,g.create(function(a){return k(["../views/2d/layers/GeoRSSLayerView2D"],a)})];case "3d":return[2,g.reject(new q("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))]}return[2]})})};a.prototype._fetchService=function(a){return f(this,void 0,void 0,function(){var b;return e(this,function(c){switch(c.label){case 0:return[4,p(n.geoRSSServiceUrl,{query:{url:this.url,refresh:this.loaded?!0:void 0,outSR:this.outSpatialReference?
JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:a})];case 1:return b=c.sent().data,this.read(b,{origin:"service"}),[2]}})})};d([c.property()],a.prototype,"description",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property()],a.prototype,"featureCollections",void 0);d([c.reader("service","featureCollections",["featureCollection.layers"])],a.prototype,"readFeatureCollections",null);d([c.property({type:B})],a.prototype,"lineSymbol",void 0);d([c.property({type:["show","hide"]})],
a.prototype,"listMode",void 0);d([c.property({type:z})],a.prototype,"pointSymbol",void 0);d([c.property({type:A})],a.prototype,"polygonSymbol",void 0);d([c.property()],a.prototype,"outSpatialReference",void 0);d([c.property(y.url)],a.prototype,"url",void 0);d([c.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],a.prototype,"type",void 0);return a=d([c.subclass("esri.layers.GeoRSSLayer")],a)}(c.declared(t,u,v,w,x))});