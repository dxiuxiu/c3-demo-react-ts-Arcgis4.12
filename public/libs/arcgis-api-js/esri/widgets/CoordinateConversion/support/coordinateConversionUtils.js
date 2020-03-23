// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../geometry ../../../core/Error ../../../core/promiseUtils ../../../geometry/support/webMercatorUtils ../../../tasks/support/ProjectParameters".split(" "),function(x,d,t,l,m,p,u,v){function q(a,b){b=r(b);return[a[0].toFixed(b),a[1].toFixed(b)]}function r(a){return 500<=a?6:500>a&&50<=a?7:50>a&&5<=a?8:9}function h(a){return"number"===typeof a&&isFinite(a)}function n(a){return a&&h(a.x)&&h(a.y)}function k(a,b){return a.spatialReference.isGeographic&&
b?(a=q([a.x,a.y],b),a[0]+", "+a[1]):a.x.toFixed(3)+", "+a.y.toFixed(3)}Object.defineProperty(d,"__esModule",{value:!0});var w={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},g=Array(3);d.clipLonLat=q;d.getDegreePrecision=r;d.fromGeoCoordinateString=function(a){var b=a.coordinate,c=a.spatialReference,e=a.formatName;return a.geometryServicePromise.then(function(a){return a.fromGeoCoordinateString({strings:[b],sr:c,conversionType:e}).then(function(a){var b=
new l.Point({x:a[0][0],y:a[0][1],spatialReference:c});if(!n(b))throw a;return b}).catch(function(a){throw new m("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:a});})})};d.fromXY=function(a,b){var c=0<=a.indexOf(",")?",":" ",e=a.split(c).map(function(a){return(a=a.trim())?Number(a):null});a=e[0];c=e[1];e=e[2];if(!h(a)||!h(c))return null;b=new l.Point({x:a,y:c,spatialReference:b||l.SpatialReference.WGS84});e&&(b.z=e,b.hasZ=!0);return b};
d.isValidPoint=n;d.pointToCoordinate=k;d.project=function(a,b){var c=a.spatialReference,e=a.geometryServicePromise,f=a.location,d=a.scale;if(!c||f.spatialReference.wkid===c.wkid)return p.resolve({location:f,coordinate:k(f,d)});if((f.spatialReference.isWGS84||f.spatialReference.isWebMercator)&&(c.isWGS84||c.isWebMercator))return p.resolve({location:u.project(f,c),coordinate:k(f,d)});if(g[0]===f&&g[1]===c.wkid)return g[2];g[0]=f;g[1]=c.wkid;a=e.then(function(a){return a.project(new v({geometries:[f],
outSpatialReference:c}),{signal:b}).then(function(a){if(!n(a[0]))throw a[0];return{location:a[0],coordinate:k(a[0],d)}}).catch(function(a){throw new m("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:a});})});return g[2]=a};d.toGeoCoordinateString=function(a){var b=a.formatName,c=a.location;a=a.geometryServicePromise;var d=t({coordinates:[[c.x,c.y]],sr:c.spatialReference,conversionType:b},w[b]||{});return a.then(function(a){return a.toGeoCoordinateString(d).then(function(a){var b=
a[0];if(!b)throw a;return b}).catch(function(a){throw new m("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:a});})})};d.isSupportedNotation=function(a){return"dd"===a||"dms"===a||"ddm"===a||"mgrs"===a||"usng"===a||"utm"===a}});