// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/nextTick","../../../../core/promiseUtils"],function(d,c,e,b){Object.defineProperty(c,"__esModule",{value:!0});c.createOrReuseTileRenderer=function(c,f,g){if(!f)return b.resolve(null);switch(f.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":return b.create(function(a){e(function(){return d(["./tileRenderers/SymbolTileRenderer"],a)})}).then(function(a){return a.default}).then(function(a){return new a(g)});
case "heatmap":return b.create(function(a){e(function(){return d(["./tileRenderers/HeatmapTileRenderer"],a)})}).then(function(a){return a.default}).then(function(a){return new a(g)})}return b.resolve(null)}});