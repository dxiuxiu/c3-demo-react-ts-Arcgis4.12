// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/generatorHelper ../../geometry ../../request ../../core/urlUtils ../../geometry/support/jsonUtils".split(" "),function(y,a,h,q,r,t,u,v,w){Object.defineProperty(a,"__esModule",{value:!0});a.cut=function(b,c,a,x){return q(this,void 0,void 0,function(){var d,e,k,l,f,m,g,n;return r(this,function(p){switch(p.label){case 0:return d="string"===typeof b?v.urlToObject(b):b,e=c[0].spatialReference,
k=h({},x,{query:h({},d.query,{f:"json",sr:JSON.stringify(e),target:JSON.stringify({geometryType:w.getJsonType(c[0]),geometries:c}),cutter:JSON.stringify(a)})}),[4,u(d.path+"/cut",k)];case 1:return l=p.sent(),f=l.data,m=f.cutIndexes,g=f.geometries,n=void 0===g?[]:g,[2,{cutIndexes:m,geometries:n.map(function(a){return t.fromJSON(a).set(e)})}]}})})}});