// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../geometry/Extent ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/WKIDUnitConversion ./TileInfo".split(" "),function(K,r,A,B,u,C,t,D){function l(a,c){return(a=c.getElementsByTagName(a))&&0<a.length?a[0]:null}function p(a,c){return Array.prototype.slice.call(c.getElementsByTagName(a)).map(function(a){return a.textContent})}function k(a,c){a.split("\x3e").forEach(function(a){c=l(a,c)});return c&&c.textContent}function q(a,c,b,
e){var d;Array.prototype.slice.call(e.childNodes).some(function(e){if(-1<e.nodeName.indexOf(a)){var g=l(c,e),g=g&&g.textContent;return g===b||b.split(":")&&b.split(":")[1]===g?(d=e,!0):!1}});return d}function v(a){var c=[],b=w.get(a);if(b){var e=Array.prototype.slice.call(b.getElementsByTagName("ResourceURL")),b=b.getElementsByTagName("Dimension"),d,f,g,h;b.length&&(d=k("Identifier",b[0]),f=p("Default",b[0])||p("Value",b[0]));1<b.length&&(g=k("Identifier",b[1]),h=p("Default",b[1])||p("Value",b[1]));
m.set(a,{dimensions:f,dimensions2:h});e.forEach(function(a){var b=a.getAttribute("template");if("tile"===a.getAttribute("resourceType")){if(d&&f.length)if(-1<b.indexOf("{"+d+"}"))b=b.replace("{"+d+"}","{dimensionValue}");else{var e=b.toLowerCase().indexOf("{"+d.toLowerCase()+"}");-1<e&&(b=b.substring(0,e)+"{dimensionValue}"+b.substring(e+d.length+2))}g&&h.length&&(-1<b.indexOf("{"+g+"}")?b=b.replace("{"+g+"}","{dimensionValue2}"):(e=b.toLowerCase().indexOf("{"+g.toLowerCase()+"}"),-1<e&&(b=b.substring(0,
e)+"{dimensionValue2}"+b.substring(e+g.length+2))));c.push({template:b,format:a.getAttribute("format"),resourceType:"tile"})}});return c}}function F(a,c){return Array.prototype.slice.call(a.getElementsByTagName("Style")).map(function(a){var b=l("LegendURL",a),d=l("Keywords",a),d=d&&p("Keyword",d),b=b&&b.getAttribute("xlink:href");c&&(b=b&&b.replace(/^http:/i,"https:"));return{abstract:k("Abstract",a),id:k("Identifier",a),isDefault:"true"===a.getAttribute("isDefault"),keywords:d,legendUrl:b,title:k("Title",
a)}})}function G(a,c){return p("TileMatrixSet",a).map(function(b){return H(b,a,c)})}function H(a,c,b){c=q("TileMatrixSetLink","TileMatrixSet",a,c);c=p("TileMatrix",c);var e=q("TileMatrixSet","Identifier",a,b);b=I(e);var d=b.spatialReference,f=d.wkid,g=l("TileMatrix",e),g=[parseInt(k("TileWidth",g),10),parseInt(k("TileHeight",g),10)],h=[];c.length?c.forEach(function(b,c){b=q("TileMatrix","Identifier",b,e);h.push(x(b,f,c,a))}):Array.prototype.slice.call(e.getElementsByTagName("TileMatrix")).forEach(function(b,
c){h.push(x(b,f,c,a))});c=J(e,b,g,h[0]);return{id:a,fullExtent:c.toJSON(),tileInfo:(new D({dpi:96,spatialReference:d,size:g,origin:b,lods:h})).toJSON()}}function I(a){var c=k("SupportedCRS",a);c&&(c=c.toLowerCase());var b=parseInt(c.split(":").pop(),10);if(900913===b||3857===b)b=102100;var e=!1;if(-1<c.indexOf("crs84")||-1<c.indexOf("crs:84"))b=4326,e=!0;else if(-1<c.indexOf("crs83")||-1<c.indexOf("crs:83"))b=4269,e=!0;else if(-1<c.indexOf("crs27")||-1<c.indexOf("crs:27"))b=4267,e=!0;var d=new C({wkid:b});
a=l("TileMatrix",a);var f=k("TopLeftCorner",a).split(" ");a=f[0].split("E").map(function(a){return Number(a)});var f=f[1].split("E").map(function(a){return Number(a)}),g=a[0],h=f[0],n;1<a.length&&(g=a[0]*Math.pow(10,a[1]));1<f.length&&(h=f[0]*Math.pow(10,f[1]));var E=e&&4326===b&&90===g&&-180===h;y.some(function(a,f){var k=Number(c.split(":").pop());if(k>=a[0]&&k<=a[1]||4326===b&&(!e||E))return n=new u(h,g,d),!0;f===y.length-1&&(n=new u(g,h,d));return!1});return n}function J(a,c,b,e){var d=l("BoundingBox",
a),f,g;d&&(f=k("LowerCorner",d).split(" "),g=k("UpperCorner",d).split(" "));f&&1<f.length&&g&&1<g.length?(a=parseFloat(f[0]),b=parseFloat(f[1]),f=parseFloat(g[0]),g=parseFloat(g[1])):(a=l("TileMatrix",a),f=parseFloat(k("MatrixWidth",a)),d=parseFloat(k("MatrixHeight",a)),a=c.x,g=c.y,f=a+f*b[0]*e.resolution,b=g-d*b[1]*e.resolution);return new B(a,b,f,g,c.spatialReference)}function x(a,c,b,e){var d=k("Identifier",a);a=k("ScaleDenominator",a).split("E").map(function(a){return Number(a)});a=1<a.length?
a[0]*Math.pow(10,a[1]):a[0];c=z(c,a,e);return{level:b,levelValue:d,scale:1.058267716535433*a,resolution:c}}function z(a,c,b){a=t.hasOwnProperty(String(a))?t.values[t[a]]:"default028mm"===b?6370997*Math.PI/180:6378137*Math.PI/180;return 7*c/25E3/a}Object.defineProperty(r,"__esModule",{value:!0});var y=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,
4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,
2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,
5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],m=new Map,w=new Map;r.parseCapabilities=function(a,c){a=a.replace(/ows:/gi,"");a=(new DOMParser).parseFromString(a,"text/xml").documentElement;var b=l("Contents",a);if(!b)throw new A("wmtslayer:wmts-capabilities-xml-is-not-valid");
var e=l("OperationsMetadata",a),e=(e=(e=e&&e.querySelector("[name\x3d'GetTile']"))&&e.getElementsByTagName("Get"))&&Array.prototype.slice.call(e),d=c.url&&-1<c.url.indexOf("https"),f=c.serviceMode,g,h,n;e&&e.length&&e.some(function(a){var b=l("Constraint",a);if(!b||q("AllowedValues","Value",f,b))return h=a.attributes[0].nodeValue,!0;if(!b||q("AllowedValues","Value","RESTful",b)||q("AllowedValues","Value","REST",b))n=a.attributes[0].nodeValue;else if(!b||q("AllowedValues","Value","KVP",b))g=a.attributes[0].nodeValue;
return!1});h||(n?(h=n,f="RESTful"):g?(h=g,f="KVP"):h=l("ServiceMetadataURL",a).getAttribute("xlink:href"));c=h.indexOf("1.0.0/");-1===c&&"RESTful"===f?h+="/":-1<c&&(h=h.substring(0,c));"KVP"===f&&(h+=-1<c?"":"?");d&&(h=h.replace(/^http:/i,"https:"));c=k("ServiceIdentification\x3eAccessConstraints",a);a=Array.prototype.slice.call(b.getElementsByTagName("Layer")).map(function(a){var c=k("Identifier",a);w.set(c,a);var e=k("Abstract",a),g=p("Format",a),f,h=l("WGS84BoundingBox",a);f=h?k("LowerCorner",
h).split(" "):["-180","-90"];h=h?k("UpperCorner",h).split(" "):["180","90"];f={xmin:parseFloat(f[0]),ymin:parseFloat(f[1]),xmax:parseFloat(h[0]),ymax:parseFloat(h[1]),spatialReference:{wkid:4326}};var h=F(a,d),n=k("Title",a);a=G(a,b);return{id:c,fullExtent:f,description:e,formats:g,styles:h,title:n,tileMatrixSets:a}});return{copyright:c,layers:a,tileUrl:h,serviceMode:f}};r.parseResourceInfo=function(a){a.layers.forEach(function(a){a.tileMatrixSets.forEach(function(a){var b=a.tileInfo;96!==b.dpi&&
(b.lods.forEach(function(c){c.scale=96*c.scale/b.dpi;c.resolution=z(b.spatialReference.wkid,90.71428571428571*c.scale/96,a.id)}),b.dpi=96)})});return a};r.getTileUrlFromResourceUrls=function(a,c,b,e,d,f){var g=v(a),h=m.get(a).dimensions&&m.get(a).dimensions[0];a=m.get(a).dimensions2&&m.get(a).dimensions2[0];var k="";g&&0<g.length&&(k=g[d%g.length].template.replace(/\{Style\}/gi,b).replace(/\{TileMatrixSet\}/gi,c).replace(/\{TileMatrix\}/gi,e).replace(/\{TileRow\}/gi,d).replace(/\{TileCol\}/gi,f).replace(/\{dimensionValue\}/gi,
h).replace(/\{dimensionValue2\}/gi,a));return k};r.getTileUrlTemplateFromResourceUrls=function(a,c,b,e){b=v(a);var d="";if(b&&0<b.length){var f=m.get(a).dimensions&&m.get(a).dimensions[0];a=m.get(a).dimensions2&&m.get(a).dimensions2[0];d=b[0].template;d.indexOf(".xxx")===d.length-4&&(d=d.slice(0,d.length-4));d=d.replace(/\{Style\}/gi,e);d=d.replace(/\{TileMatrixSet\}/gi,c);d=d.replace(/\{TileMatrix\}/gi,"{level}");d=d.replace(/\{TileRow\}/gi,"{row}");d=d.replace(/\{TileCol\}/gi,"{col}");d=d.replace(/\{dimensionValue\}/gi,
f);d=d.replace(/\{dimensionValue2\}/gi,a)}return d}});