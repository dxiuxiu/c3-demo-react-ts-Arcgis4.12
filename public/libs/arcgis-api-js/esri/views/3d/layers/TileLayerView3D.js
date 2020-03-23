// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./TiledLayerView3D ./support/tiledLayerUtils ../terrain/terrainUtils ../../layers/TileLayerView ../../support/drapedUtils".split(" "),function(t,u,g,d,h,k,l,m,c,n,f,p,q,r){return function(e){function a(){return null!==e&&e.apply(this,
arguments)||this}g(a,e);Object.defineProperty(a.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataLevelRange",{get:function(){var b=this.tileInfo.lods,b=this.levelRangeFromScaleRange(b[0].scale,b[b.length-1].scale);b.maxLevel=Math.min(b.maxLevel,p.getKnownTiledServiceLevelCap(this.layer.url));return b},enumerable:!0,configurable:!0});a.prototype.initialize=function(){var b=this,a=
this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);a?this.addResolvingPromise(l.reject(a)):(a=m.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){f.throwIfError(b._getTileInfoCompatibilityError(b.tileInfo,b.view.basemapTerrain.tilingScheme))}),this.addResolvingPromise(a));"version"in this.layer&&this.addResolvingPromise(f.checkArcGISServiceVersionCompatibility(this.layer))};a.prototype.createFetchPopupFeaturesQueryGeometry=function(a,c){return r.createQueryGeometry(a,
c,this.view)};a.prototype.doRefresh=function(a){return k(this,void 0,void 0,function(){return h(this,function(a){if(this.suspended)return[2];this.emit("data-changed");return[2]})})};d([c.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],a.prototype,"imageFormatIsOpaque",null);d([c.property({aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);d([c.property()],a.prototype,"layer",void 0);d([c.property({aliasOf:"layer.tileInfo"})],a.prototype,"tileInfo",void 0);d([c.property({readOnly:!0,
dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.url"]})],a.prototype,"dataLevelRange",null);return a=d([c.subclass("esri.views.3d.layers.TileLayerView3D")],a)}(c.declared(n,q))});