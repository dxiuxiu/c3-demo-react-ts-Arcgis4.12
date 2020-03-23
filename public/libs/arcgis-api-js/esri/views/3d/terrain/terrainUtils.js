// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../layers/ElevationLayer ../../../layers/TileLayer ../../../layers/VectorTileLayer ../../../support/basemapDefinitions ./terrainUtilsPlanar ./terrainUtilsSpherical".split(" "),function(x,b,r,t,u,h,v,w){function k(a){return a&&"esri.views.3d.layers.TileLayerView3D"===a.declaredClass}function l(a){return a&&"esri.views.3d.layers.VectorTileLayerView3D"===a.declaredClass}function m(a){return a&&"esri.views.3d.layers.WMTSLayerView3D"===a.declaredClass}function n(a){return a&&
"esri.views.3d.layers.ElevationLayerView3D"===a.declaredClass}function p(){d={};for(var a in h)h[a].baseMapLayers.forEach(function(a){d[a.url]=19});d["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function g(a,b,f,e){return q["local"===e||"planar"===e?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(a,b,f)}Object.defineProperty(b,"__esModule",{value:!0});var q={planar:v,spherical:w};b.weakAssert=function(a,b){a||console.warn("Terrain: "+b)};b.autoUpdateSkirtsVisibility=
function(a,b,f){var e=q[a.manifold],c,d=e.isInsideExtent(a,b);d?c=a.getElevation(b):(c=a.getElevationBounds(),c=.5*(c[0]+c[1]));c=b[2]-c;f=.9*Math.abs(c)<f?0:0>c?-1:1;d||(e.isInsideExtent(a,b,a.hideSkirtsDistanceFromExtentMargin)?(b=e.tiltToExtentEdge(a,b),b>a.hideSkirtsMinimumCameraTilt&&b<a.hideSkirtsMaximumCameraTilt&&(f=0)):f=0);a.skirtScale=f};b.isTiledLayer=function(a){return a&&"base-tile"===a.type||"tile"===a.type||"elevation"===a.type||"base-elevation"===a.type||"open-street-map"===a.type||
"web-tile"===a.type||"wmts"===a.type||"vector-tile"===a.type};b.isVectorTileLayer=function(a){return a&&a.isInstanceOf(u)};b.isTileLayerView=k;b.isVectorTileLayerView=l;b.isWMTSLayerView=m;b.isElevationLayerView=n;b.isTiledLayerView=function(a){return a&&(k(a)||n(a)||l(a)||m(a))};b.useFetchTileForLayer=function(a){return a.fetchTile&&!(a.fetchTile===t.prototype.fetchTile||a.fetchTile===r.prototype.fetchTile)};var d=null;b.getKnownTiledServiceLevelCap=function(a){d||p();a=a&&a.replace(/https?:/,"");
return a in d?d[a]:Infinity};b.prepareKnownTiledServiceLevelCaps=p;b.checkIfTileInfoSupportedForView=g;b.getTiledLayerInfo=function(a,b,f){var e,c;if("wmts"===a.type){if(a=a.activeLayer){var d=a.tileMatrixSet;if(d)e=d.tileInfo,c=d.fullExtent;else if(a=a.tileMatrixSets)if(a=a.find(function(a){return null==g(a.tileInfo,a.fullExtent,b,f)}))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent}}}else e="vector-tile"===a.type?a.compatibleTileInfo256:a.tileInfo,c=a.fullExtent;return e&&c&&null==g(e,c,b,f)?
{tileInfo:e,fullExtent:c}:{tileInfo:null,fullExtent:null}}});