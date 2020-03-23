// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/promiseUtils ./support/utils ../support/utils".split(" "),function(r,t,g,c,d,f){function q(b){if(!b||!b.layer||!b.field&&!b.valueExpression)return c.reject(d.createError("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(b.valueExpression&&!b.view)return c.reject(d.createError("class-breaks:missing-parameters","View is required when 'valueExpression' is specified"));var a=
g({},b);a.normalizationType=f.getNormalizationType(a);a.numClasses=a.numClasses||5;b=[0,2,1,3];var e=f.createLayerAdapter(a.layer,b);return(a.layer=e)?e.load().then(function(){var b=a.field,h=a.minValue,k=a.maxValue,g=null!=h||null!=k,m=a.classificationMethod,n="percent-of-total"===a.normalizationType,p=!1!==a.analyzeData,b=b?e.getField(b):null,l=f.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(l=d.verifyBasicFieldValidity(e,l,"class-breaks:invalid-parameters"))return c.reject(l);
if(b&&(b=d.verifyNumericField(e,b,"class-breaks:invalid-parameters")))return c.reject(b);if(a.valueExpression&&a.normalizationType)return c.reject(d.createError("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified"));if(g)if(p){if(n&&null==a.normalizationTotal)return c.reject(d.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified"))}else{if(null==
h||null==k)return c.reject(d.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));if(h>=k)return c.reject(d.createError("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'"));if(m&&"equal-interval"!==m)return c.reject(d.createError("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false"));if(n&&null==a.normalizationTotal)return c.reject(d.createError("class-breaks:missing-parameters",
"'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false"))}else if(!p)return c.reject(d.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));return a}):c.reject(d.createError("class-breaks:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(b).join(", ")))}return function(b){return q(b).then(function(a){return a.layer.classBreaks(a)})}});