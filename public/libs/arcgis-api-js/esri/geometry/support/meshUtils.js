// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/promiseUtils ../Mesh ./meshUtils/georeference ./meshUtils/merge".split(" "),function(e,a,f,g,h,m,k,n){Object.defineProperty(a,"__esModule",{value:!0});a.createFromElevation=function(d,c,b){return g(this,void 0,void 0,function(){var a;return f(this,function(l){switch(l.label){case 0:return[4,h.create(function(a){return e(["./meshUtils/elevation"],a)})];case 1:return a=l.sent(),[2,a.create(d,c,
b)]}})})};a.createElevationSampler=function(a,c){return g(this,void 0,void 0,function(){var b;return f(this,function(d){switch(d.label){case 0:return[4,h.create(function(a){return e(["./meshUtils/elevationSampler"],a)})];case 1:return b=d.sent(),[2,b.create(a,c)]}})})};a.georeference=function(a,c,b){return k.georeference(a,c,b)};a.ungeoreference=function(a,c,b){return k.ungeoreference(a,c,b)};a.merge=function(a){return new m(n.merge(a))}});