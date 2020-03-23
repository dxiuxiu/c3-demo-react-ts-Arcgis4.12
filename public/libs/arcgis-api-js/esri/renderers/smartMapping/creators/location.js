// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../.. ../../../core/Error ./support/utils ../heuristics/outline ../support/utils ../symbology/location".split(" "),function(A,g,v,r,t,w,h,m,x,u,n){function y(b){return t(this,void 0,void 0,function(){var a,c,d,e;return r(this,function(k){switch(k.label){case 0:if(!b||!b.layer)throw new h("location-renderer:missing-parameters","'layer' parameter is required");a=
v({},b);a.symbolType=a.symbolType||"2d";c=[0,2,1,3];d=u.createLayerAdapter(a.layer,c);a.layer=d;if(!d)throw new h("location-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(c).join(", "));return[4,d.load()];case 1:k.sent();e=d.geometryType;a.outlineOptimizationEnabled="polygon"===e?a.outlineOptimizationEnabled:!1;if("mesh"===e)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===
a.symbolType&&"point"!==e)throw new h("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new h("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}return[2,a]}})})}function z(b,a){var c=b.locationScheme,d=b.basemap;c?c=n.cloneScheme(c):(c=(b=n.getSchemes({basemap:b.basemap,
geometryType:a,worldScale:-1<b.symbolType.indexOf("3d-volumetric"),view:b.view}))&&b.primaryScheme,d=b&&b.basemapId);return{scheme:c,basemapId:d}}Object.defineProperty(g,"__esModule",{value:!0});g.createRenderer=function(b){return t(this,void 0,void 0,function(){var a,c,d,e,k,f,p,g,q;return r(this,function(l){switch(l.label){case 0:return[4,y(b)];case 1:a=l.sent();c=a.layer.geometryType;d=z(a,c);e=d.scheme;if(!e)throw new h("location-renderer:insufficient-info","Unable to find location scheme");k=
{layer:a.layer,view:a.view};return a.outlineOptimizationEnabled?[4,x(k)]:[3,3];case 2:return p=l.sent(),[3,4];case 3:p=null,l.label=4;case 4:return g=(f=p)&&f.opacity,q=new w.SimpleRenderer({symbol:m.createSymbol(c,{type:a.symbolType,color:e.color,size:m.getSymbolSizeFromScheme(e,c),outline:m.getSymbolOutlineFromScheme(e,c,g),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}})}),f&&f.visualVariables&&f.visualVariables.length&&(q.visualVariables=f.visualVariables.map(function(a){return a.clone()})),
[2,{renderer:q,locationScheme:n.cloneScheme(e),basemapId:d.basemapId}]}})})}});