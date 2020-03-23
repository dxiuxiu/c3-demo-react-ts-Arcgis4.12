// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../request ../../../../core/arrayUtils ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/SpatialReference ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/webMercatorUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query ./I3SBinaryReader ../../support/projectionUtils ../../support/stack".split(" "),
function(ba,d,J,K,n,r,p,w,x,L,y,M,N,O,P,Q,z,R){function u(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function A(a,b){var c=b[0],f=b[1],e=b[2];b=b[3];var h=a[0]-c,c=c-a[3],k=a[1]-f,f=f-a[4],g=a[2]-e;a=e-a[5];var e=Math.max(h,c,0),d=Math.max(k,f,0),q=Math.max(g,a,0),e=e*e+d*d+q*q;return e>b*b?0:0<e?1:-Math.max(h,c,k,f,g,a)>b?3:2}function v(a,b,c){var f=[],e=c&&c.missingFields;c=c&&c.originalFields;for(var h=0;h<a.length;h++){for(var d=a[h],g=d.toLowerCase(),l=!1,q=0,B=b;q<
B.length;q++){var C=B[q];if(g===C.name.toLowerCase()){f.push(C.name);l=!0;c&&c.push(d);break}}!l&&e&&e.push(d)}return f}function S(a,b){return a.filter(function(a){return a.toLowerCase()!==b.toLowerCase()}).concat([b])}function T(a,b,c,f){b.sort(function(a,b){return a.attributes[c]-b.attributes[c]});var e=b.map(function(a){return a.attributes[c]}),d=[],k=v(f,a.fields,{originalFields:d});return D(a,e,k).then(function(a){for(var c=0;c<b.length;c++){var f=b[c],e=a[c];f.attributes={};for(var h=0;h<d.length;h++)f.attributes[d[h]]=
e[k[h]]}return b})}function U(a,b){for(var c=[],f=0;f<a.length;f++){var e=a[f];e in b.attributes||c.push(e)}return c}function D(a,b,c){if(null!=a.maxRecordCount&&b.length>a.maxRecordCount){var f=V(b,a.maxRecordCount);return p.all(f.map(function(b){return D(a,b,c)})).then(W)}f=new P({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return(new O(a.parsedUrl.path)).execute(f).then(function(a){return a&&a.features&&a.features.length===b.length?a.features.map(function(a){return a.attributes}):
p.reject(new n("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer"))})}function X(a,b,c,f,e,d){for(var h=[],g=0;g<b.length;g++){var l=b[g];l&&-1!==e.indexOf(l.name)&&h.push({url:a+"/nodes/"+c.resources.attributes+"/attributes/"+l.key+"/0",storageInfo:l})}return p.eachAlways(h.map(function(a){return J(a.url,{responseType:"array-buffer"}).then(function(b){return Q.readBinaryAttribute(a.storageInfo,b.data)})})).then(function(a){var b=[];if(!d.ignoreUnavailableFields&&
a.some(function(a){return null==a.value})){for(var b=[],c=0;c<a.length;c++)null==a[c].value&&b.push({name:h[c].storageInfo.name,error:a[c].error});return p.reject(new n("scenelayer:attribute-request-failed","Request for scene layer attributes failed",{failedAttributes:b}))}for(var e=0;e<f.length;e++){for(var g=f[e],k={},c=0;c<a.length;c++)null!=a[c].value&&(k[h[c].storageInfo.name]=E(a[c].value,g));b.push(k)}return b})}function E(a,b){if(!a)return null;b=a[b];return w.isInt16Array(a)?b===Y?null:b:
w.isInt32Array(a)?b===Z?null:b:b!==b?null:b}function V(a,b){var c=a.length;b=Math.ceil(c/b);for(var f=[],e=0;e<b;e++)f.push(a.slice(Math.floor(c*e/b),Math.floor(c*(e+1)/b)));return f}function W(a){for(var b=[],c=0;c<a.length;c++)b=b.concat(a[c]);return b}function F(a){var b=new y(u(a.store.indexCRS||a.store.geographicCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function G(a){var b=new y(u(a.store.vertexCRS||a.store.projectedCRS));return b.equals(a.spatialReference)?a.spatialReference:
b}function t(a,b,c){if(!N.canProject(a,b))throw new n("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&a.isGeographic)throw new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{});}function H(a,b,c){var f=F(a);a=G(a);t(f,b,c);t(a,b,c)}Object.defineProperty(d,"__esModule",{value:!0});d.DDS_ENCODING_STRING="image/vnd-ms.dds";d.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=
["image/jpeg","image/png"];d.extractWkid=u;d.selectEncoding=function(a,b){if(b)for(b=0;b<a.length;b++)if(a[b].encoding===d.DDS_ENCODING_STRING)return a[b];for(b=0;b<a.length;b++)if(-1<d.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b].encoding))return a[b];return null};d.findIntersectingNodes=function(a,b,c,f,e,d){e.traverse(c,function(c){var e=c.mbs;b!==f&&(e=aa,z.mbsToMbs(c.mbs,f,e,b));e=A(a,e);if(0!==e)return d(c,e),!0})};d.filterInPlace=function(a,b,c){for(var f=0,e=0,d=0;d<b.length&&f<a.length;d++)a[f]===
b[d]&&(c(d)&&(a[e]=a[f],e++),f++);a.length=e};var m=M.create();d.getClipAABB=function(a,b){var c=x.mat4.copy(R.sm4d.get(),b.objectTransformation);b=b.getGeometryRecords()[0].getShaderTransformation();x.mat4.multiply(c,c,b);if(0===c[1]&&0===c[2]&&0===c[3]&&0===c[4]&&0===c[6]&&0===c[7]&&0===c[8]&&0===c[9]&&0===c[11]&&1===c[15])return m[0]=(a[0]-c[12])/c[0],m[1]=(a[1]-c[13])/c[5],m[2]=(a[2]-c[14])/c[10],m[3]=(a[3]-c[12])/c[0],m[4]=(a[4]-c[13])/c[5],m[5]=(a[5]-c[14])/c[10],m};var aa=L.vec4f64.create();
d.intersectBoundingBoxWithMbs=A;d.findFieldsCaseInsensitive=v;d.whenGraphicAttributes=function(a,b,c,f,e,d){var h=!0===(d&&d.populateObjectId),g=d.ignoreUnavailableFields?void 0:[],l=1===f.length&&"*"===f[0];!l&&h&&(f=S(f,c));f=l?f:v(f,a.fields,{missingFields:g});if(g&&0!==g.length)return p.reject(new n("scenelayer:unknown-fields","This scene layer does not have the requested fields",{unknownFields:g}));if(0===b.length)return p.resolve(b);var g=a.associatedLayer,q=a.attributeStorageInfo,m=l?a.fields.map(function(a){return a.name}):
f;if(g)return T(g,b,c,m);var r=U(m,b[0]);if(0===r.length)return p.resolve(b);if(q){b=e(b);if(!b)return p.reject(new n("scenelayer:features-not-loaded","Tried to query attributes for unloaded features"));var t=a.parsedUrl.path;return p.all(b.map(function(a){return X(t,q,a.node,a.indices,r,d).then(function(b){for(var c=0;c<a.graphics.length;c++){for(var e=0,f=m;e<f.length;e++){var d=f[e];d in b[c]||(b[c][d]=a.graphics[c].attributes[d])}a.graphics[c].attributes=b[c]}return a.graphics})})).then(K.flatten)}return p.reject(new n("scenelayer:no-attribute-source",
"This scene layer does not have a source for attributes available"))};var Y=-Math.pow(2,15),Z=-Math.pow(2,31);d.getCachedAttributeValue=E;d.convertFlatRangesToOffsets=function(a,b,c){b=null!=b?b:a.length/c;for(var f=new Uint32Array(b+1),e=0;e<b;e++){var d=a[e*c];f[e]=3*d;var k=(e-1)*c+1;if(0<=k&&d-1!==a[k])throw new n("Face ranges are not continuous");}f[f.length-1]=3*(a[(b-1)*c+1]+1);return f};d.getIndexCrs=F;d.getVertexCrs=G;d.getCacheKeySuffix=function(a,b){return b===z.SphericalECEFSpatialReference?
"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:null};d.checkSpatialReference=t;d.checkSpatialReferences=H;d.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null!=a.geometryType&&"triangles"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new n("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",
{});};d.checkSceneLayerCompatibleWithView=function(a,b){H(a,b.spatialReference,b.viewingMode)};d.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new n("pointcloud:unsupported-geometry-schema",
"The geometry schema of this point cloud scene layer is not supported.",{});};d.checkPointCloudLayerCompatibleWithView=function(a,b){t(a.spatialReference,b.spatialReference,b.viewingMode)};d.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(var b=0;b<a.length;b++){var c=a[b];if("mesh-3d"!==c.type||0===c.symbolLayers.length)return!0;
for(var f=0,c=c.symbolLayers.items;f<c.length;f++){var e=c[f];if("fill"!==e.type||r.isNone(e.material)||r.isNone(e.material.color)||"replace"!==e.material.colorMixMode)return!0}}return!1};var I=function(){return function(){this.material=this.edges=null;this.castShadows=!0}}();d.SymbolInfo=I;d.getSymbolInfo=function(a){var b=new I,c=!1,f=!1,e=0;for(a=a.symbolLayers.items;e<a.length;e++){var d=a[e];if("fill"===d.type&&d.enabled){var k=d.material,g=d.edges;r.isSome(k)&&!c&&(c=k.color,k=k.colorMixMode,
r.isSome(c)?b.material={color:[c.r/255,c.g/255,c.b/255],alpha:c.a,colorMixMode:k}:b.material={color:[1,1,1],alpha:1,colorMixMode:"multiply"},b.castShadows=d.castShadows,c=!0);r.isSome(g)&&!f&&(b.edges=g,f=!0)}}b.material||(b.material={color:[1,1,1],alpha:1,colorMixMode:"multiply"});return b};d.addWraparound=function(a,b){return(a|0)+(b|0)|0}});