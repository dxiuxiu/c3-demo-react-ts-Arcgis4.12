// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../Graphic ../../core/compilerUtils ../../geometry/SpatialReference ../../layers/graphics/dehydratedFeatures ../../layers/support/Field".split(" "),function(g,h,l,m,n,k,p){function q(b,a,d,c){return a}function r(b,a,d,c){switch(d){case 0:return f(b,a+c,0);case 1:return b.translate[1]-(a+c)*b.scale[1]}}function t(b,a,d,c){switch(d){case 0:return f(b,a+c,0);case 1:return b.translate[1]-(a+c)*b.scale[1];case 2:return f(b,a,2)}}function u(b,a,d,c){switch(d){case 0:return f(b,
a+c,0);case 1:return b.translate[1]-(a+c)*b.scale[1];case 2:return f(b,a,3)}}function v(b,a,d,c){switch(d){case 0:return f(b,a+c,0);case 1:return b.translate[1]-(a+c)*b.scale[1];case 2:return f(b,a,3);case 3:return f(b,a,3)}}function f(b,a,d){return b.translate[d]+a*b.scale[d]}Object.defineProperty(h,"__esModule",{value:!0});g=function(){function b(a){this.options=a;this.geometryTypes=["point","multipoint","polyline","polygon"];this.previousCoordinate=[0,0];this.transform=null;this.applyTransform=
q;this.lengths=[];this.vertexDimension=this.toAddInCurrentPath=this.currentLengthIndex=0;this.coordinateBuffer=null;this.coordinateBufferPtr=0;this.AttributesConstructor=function(){}}b.prototype.createFeatureResult=function(){return new k.DehydratedFeatureSetClass};b.prototype.finishFeatureResult=function(a){this.options.applyTransform&&(a.transform=null);this.AttributesConstructor=function(){};this.coordinateBuffer=null;this.lengths.length=0};b.prototype.createSpatialReference=function(){return new n};
b.prototype.addField=function(a,d){a.fields.push(p.fromJSON(d));var b=a.fields.map(function(a){return a.name});this.AttributesConstructor=function(){for(var a=0;a<b.length;a++)this[b[a]]=null}};b.prototype.addFeature=function(a,d){var b=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(0<b)for(var e in d.attributes){var f=d.attributes[e];"string"===typeof f&&f.length>b&&(d.attributes[e]="")}a.features.push(d)};b.prototype.prepareFeatures=function(a){this.options.applyTransform&&
a.transform&&(this.transform=a.transform,this.applyTransform=this.deriveApplyTransform(a));this.vertexDimension=2;a.hasZ&&this.vertexDimension++;a.hasM&&this.vertexDimension++;switch(a.geometryType){case "point":this.addCoordinate=this.addCoordinatePoint.bind(this);this.createGeometry=this.createPointGeometry.bind(this);break;case "polygon":this.addCoordinate=this.addCoordinatePolygon.bind(this);this.createGeometry=this.createPolygonGeometry.bind(this);break;case "polyline":this.addCoordinate=this.addCoordinatePolyline.bind(this);
this.createGeometry=this.createPolylineGeometry.bind(this);break;case "multipoint":this.addCoordinate=this.addCoordinateMultipoint.bind(this);this.createGeometry=this.createMultipointGeometry.bind(this);break;default:m.neverReached(a.geometryType)}};b.prototype.createFeature=function(a){this.currentLengthIndex=this.lengths.length=0;this.previousCoordinate[0]=0;this.previousCoordinate[1]=0;this.coordinateBuffer=null;this.coordinateBufferPtr=0;return new k.DehydratedFeatureClass(l.generateUID(),null,
new this.AttributesConstructor)};b.prototype.addLength=function(a,b,c){0===this.lengths.length&&(this.toAddInCurrentPath=b);this.lengths.push(b)};b.prototype.createPointGeometry=function(a){a={type:"point",x:0,y:0,spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM};a.hasZ&&(a.z=0);a.hasM&&(a.m=0);return a};b.prototype.addCoordinatePoint=function(a,b,c,e){b=this.applyTransform(this.transform,b,e,0);switch(e){case 0:a.x=b;break;case 1:a.y=b;break;case 2:a.hasZ?a.z=b:a.m=b;break;case 3:a.m=
b}};b.prototype.transformPathLikeValue=function(a,b){var d=0;1>=b&&(d=this.previousCoordinate[b],this.previousCoordinate[b]+=a);return this.applyTransform(this.transform,a,b,d)};b.prototype.addCoordinatePolyline=function(a,b,c,e){this.dehydratedAddPointsCoordinate(a.paths,b,c,e)};b.prototype.addCoordinatePolygon=function(a,b,c,e){this.dehydratedAddPointsCoordinate(a.rings,b,c,e)};b.prototype.addCoordinateMultipoint=function(a,b,c){0===c&&a.points.push([]);b=this.transformPathLikeValue(b,c);a.points[a.points.length-
1].push(b)};b.prototype.createPolygonGeometry=function(a){return{type:"polygon",rings:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.createPolylineGeometry=function(a){return{type:"polyline",paths:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.createMultipointGeometry=function(a){return{type:"multipoint",points:[],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.dehydratedAddPointsCoordinate=function(a,
b,c,e){null===this.coordinateBuffer&&(c=this.lengths.reduce(function(a,b){return a+b},0),this.coordinateBuffer=new Float64Array(c*this.vertexDimension));0===e&&0===this.toAddInCurrentPath--&&(a.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);b=this.transformPathLikeValue(b,e);a=a[a.length-1];0===e&&a.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension));
this.coordinateBuffer[this.coordinateBufferPtr++]=b};b.prototype.deriveApplyTransform=function(a){var b=a.hasZ;a=a.hasM;return b&&a?v:b?t:a?u:r};return b}();h.Context=g});