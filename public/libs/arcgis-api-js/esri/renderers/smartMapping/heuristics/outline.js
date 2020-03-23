// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../../../geometry/support/scaleUtils ../statistics/spatialStatistics ../support/utils ../../visualVariables/SizeVariable".split(" "),function(w,x,k,l,n,g,p,q,m,r){function t(a){return l(this,void 0,void 0,function(){var c,d,b,f;return k(this,function(e){switch(e.label){case 0:c=a.view;d=a.layer;if(!(a&&c&&d))throw new g("outline:missing-parameters",
"'view' and 'layer' parameters are required");b=n({},a);f=[0,2,3,1];b.layer=m.createLayerAdapter(d,f);if(!b.layer)throw new g("outline:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(f).join(", "));return[4,c.when()];case 1:return e.sent(),[4,b.layer.load()];case 2:e.sent();if("polygon"!==b.layer.geometryType)throw new g("outline:not-supported","outline is not supported for geometryType: "+b.layer.geometryType);return[2,b]}})})}function u(a,c){var d=a.avgSize,b=p.getScaleForResolution(1,
c.view.spatialReference);a=v.map(function(a){return{size:a.width,value:Math.round(d/a.size*b)}});a.sort(function(a,b){return a.value-b.value});return{visualVariables:[new r({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}var v=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return function(a){return l(this,void 0,void 0,function(){var c,d,b,f,e;return k(this,function(h){switch(h.label){case 0:return[4,t(a)];case 1:return c=h.sent(),d=c.view,b=c.layer,
[4,b.getSampleFeatures({view:d,sampleSize:-1})];case 2:return f=h.sent(),[4,q({features:f,geometryType:b.geometryType})];case 3:e=h.sent();if(!("avgSize"in e&&e.avgSize))throw new g("outline:insufficient-info","average polygon size is invalid");return[2,u(e,c)]}})})}});