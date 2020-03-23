// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/Error ../../core/promiseUtils ../../layers/support/lazyLayerLoader ../Portal ./jsonContext ../../renderers/support/styleUtils".split(" "),function(B,l,m,n,u,p,k,f,v,w,x){function y(c,d){return n(this,void 0,void 0,function(){var a,b,g,h,e,q;return m(this,function(f){switch(f.label){case 0:a=c.instance;b=a.portalItem;g=b.url;h=b.title;e=w.createForItem(b);if("group"===a.type)return a.read({title:h},
e),[2,z(a,c)];g&&a.read({url:g},e);return[4,r(c,d)];case 1:return(q=f.sent())&&a.read(q,e),a.read({title:h},e),[2,x.loadStyleRenderer(a,e)]}})})}function z(c,d){var a;a=c.portalItem.type;switch(a){case "Feature Service":a=f.layerLookupMap.FeatureLayer;break;case "Stream Service":a=f.layerLookupMap.StreamLayer;break;case "Scene Service":a=f.layerLookupMap.SceneLayer;break;case "Feature Collection":a=f.layerLookupMap.FeatureLayer;break;default:throw new p("portal:unsupported-item-type-as-group","The item type '"+
a+"' is not supported as a 'GroupLayer'");}var b;return a().then(function(a){b=a;return r(d)}).then(function(a){return a&&Array.isArray(a.layers)?t(c,b,a,d):A(c,b,d)})}function A(c,d,a){return c.portalItem.url?u(c.portalItem.url,{responseType:"json",query:{f:"json"}}).then(function(b){if((b=b.data)&&Array.isArray(b.layers))return b=b.layers.map(function(a){return{id:a.id,name:a.name}}),t(c,d,{layers:b},a)}):k.resolve()}function t(c,d,a,b){var g=a.showLegend;a=a.layers.slice();a.reverse();a.forEach(function(a){var b=
new d({portalItem:c.portalItem,layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===c.portalItem.type){var h={origin:"portal-item",portal:c.portalItem.portal||v.getDefault()};b.read(a,h);null!=g&&b.read({showLegend:g},h)}c.add(b)})}function r(c,d){if(!1===c.supportsData)return k.resolve();var a=c.instance;return a.portalItem.fetchData("json",d).catch(function(){return null}).then(function(b){var c,d;d="stream"===a.type?!1:"layerId"in a;if(d){d=!0;if(b&&Array.isArray(b.layers)){null==
a.layerId&&(a.layerId=b.layers[0].id);for(var e=0;e<b.layers.length;e++)if(b.layers[e].id===a.layerId){c=b.layers[e];break}c&&(1===b.layers.length&&(d=!1),null!=b.showLegend&&(c.showLegend=b.showLegend))}d&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name");return c}return b})}Object.defineProperty(l,"__esModule",{value:!0});l.load=function(c,d){return n(this,void 0,void 0,function(){var a;return m(this,function(b){switch(b.label){case 0:return(a=c.instance.portalItem)&&
a.id?[4,a.load(d)]:[2,k.resolve()];case 1:b.sent();b=c.instance.portalItem;if(-1===c.supportedTypes.indexOf(b.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:b.type,expectedType:c.supportedTypes.join(", ")});return[2,y(c,d)]}})})}});