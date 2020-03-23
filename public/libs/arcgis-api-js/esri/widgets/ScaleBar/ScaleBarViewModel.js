// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/Accessor ../../core/screenUtils ../../core/accessorSupport/decorators ../../geometry/support/geodesicUtils ../../geometry/support/normalizeUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/WKIDUnitConversion".split(" "),function(y,z,r,l,h,t,n,k,u,v,w,x,m){function p(e,b){e="decimal-degrees"===e?x.webMercatorToGeographic(b,
!0):b;return[e.x,e.y]}function q(e){var b=e.content,a=e.width;return e.spatialReference.isWrappable&&b.worldScreenWidth<a}return function(e){function b(a){a=e.call(this)||this;a.scaleComputedFrom=n.createScreenPoint();a.view=null;return a}r(b,e);Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.getScaleBarProperties=function(a,f){if("disabled"===this.state||isNaN(a)||
!f)return null;var d=this._getDistanceInKm(this.view,this.scaleComputedFrom);return"metric"===f?this._getScaleBarProps(a,d,"metric"):this._getScaleBarProps(a,d/1.609,"non-metric")};b.prototype._getLocationUnit=function(){var a=this.get("view.spatialReference"),f=a.wkid,d=a.wkt;return a.isWebMercator||d&&-1<d.indexOf("WGS_1984_Web_Mercator")?"decimal-degrees":null!=m[f]||d&&-1<d.indexOf("PROJCS")?"linear-unit":"unknown"};b.prototype._getDistanceInKm=function(a,f){var d=a.extent,c=a.spatialReference,
b=this._getLocationUnit();if("linear-unit"===b)return b=Math.abs(d.xmax-d.xmin),a=c.wkid,null!=m[a]?c=m.values[m[a]]:(c=c.wkt,a=c.lastIndexOf(",")+1,f=c.lastIndexOf("]]"),c=parseFloat(c.substring(a,f))),b*c/1E3;c=this._getScaleMeasuringPoints(a,f);a=c[1];c=new h.Polyline({paths:[[p(b,c[0]),p(b,a)]],spatialReference:4326});c=v.straightLineDensify(c,10);return u.geodesicLengths([c],"kilometers")[0]};b.prototype._getScaleMeasuringPoints=function(a,b){var d=a.extent,c=a.width,f=a.height,e=a.position,
g=a.spatialReference;if(q(a))return c=w.getInfo(g).valid,d=new h.Point(c[0],0,g),c=new h.Point(c[1],0,g),[d,c];a=b.y-e[1];a>f?a=f:0>a&&(a=0);g=n.createScreenPoint(0,a);a=n.createScreenPoint(c,a);g=new h.Point(d.xmin+g.x/(c/d.width),d.ymax-g.y/(f/d.height),d.spatialReference);d=new h.Point(d.xmin+a.x/(c/d.width),d.ymax-a.y/(f/d.height),d.spatialReference);return[g,d]};b.prototype._getScaleBarProps=function(a,b,d){var c=this.view,c=q(c)?c.content.worldScreenWidth:c.width;b=a*b/c;d="metric"===d?"km":
"mi";.1>b&&("mi"===d?(b*=5280,d="ft"):"km"===d&&(b*=1E3,d="m"));for(c=0;1<=b;)b/=10,c++;var e=this._getConstraints(b);if(!e)return null;var f=e.min,e=e.max,f=e/b>=b/f?f:e;return{length:f/b*a,value:Math.pow(10,c)*f,unit:d}};b.prototype._getConstraints=function(a){if(.5<a)return{min:.5,max:1};if(.3<a)return{min:.3,max:.5};if(.2<a)return{min:.2,max:.3};if(.15<a)return{min:.15,max:.2};if(.1<=a)return{min:.15,max:.1}};l([k.property()],b.prototype,"scaleComputedFrom",void 0);l([k.property({readOnly:!0,
dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],b.prototype,"state",null);l([k.property()],b.prototype,"view",void 0);return b=l([k.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],b)}(k.declared(t))});