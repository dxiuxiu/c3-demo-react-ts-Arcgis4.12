// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper @dojo/framework/shim/Set ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ./attributeSupport ./optimizedFeatureQueryEngineAdapter ./spatialQuerySupport ./timeSupport ./utils ../../../tasks/support/Query".split(" "),function(g,h,k,C,l,f,m,q,r,t,
n,u,v,w,x,y,z,A){Object.defineProperty(h,"__esModule",{value:!0});var p=q.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");g=function(){function b(a){var c=this;this._geometryBounds=n.create();this._idToVisibility=new Map;this.check=function(a){var b=a.objectId,d=c._idToVisibility;a=c._applyFilter(a);d.set(b,a?3:2);return!!(d.get(b)&1)};this._serviceInfo=a}Object.defineProperty(b.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0});b.prototype.clear=
function(){var a=this._resetAllHiddenIds();this.update();return{show:a,hide:[]}};b.prototype.invalidate=function(){var a=this;this._idToVisibility.forEach(function(c,b){a._idToVisibility.set(b,0)})};b.prototype.setKnownIds=function(a){for(var c=0;c<a.length;c++)this._idToVisibility.set(a[c],1)};b.prototype.setTrue=function(a){var c=this,b=[],e=[],B=new f.default(a);this._idToVisibility.forEach(function(a,d){a=!!(c._idToVisibility.get(d)&1);var f=B.has(d);!a&&f?b.push(d):a&&!f&&e.push(d);c._idToVisibility.set(d,
f?3:0)});return{show:b,hide:e}};b.prototype.createQuery=function(){return A.fromJSON({geometry:this.geometry,spatialRel:this.spatialRel,where:this.where,timeExtent:this.timeExtent,objectIds:this.objectIds})};b.prototype.update=function(a,b,d){return k(this,void 0,void 0,function(){var c;return l(this,function(e){switch(e.label){case 0:return this._hash=JSON.stringify(a),[4,z.normalizeQueryLike(a,b,d)];case 1:return c=e.sent(),[4,t.all([this._setGeometryFilter(c),this._setIdFilter(c),this._setAttributeFilter(c),
this._setTimeFilter(c)])];case 2:return e.sent(),[2]}})})};b.prototype._setAttributeFilter=function(a){if(a&&a.where){var c=v.getWhereClause(a.where,this._serviceInfo.fieldsIndex);c.isStandardized?this._clause=c:(c=new m("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",c),p.error(c));this.where=a.where}else this.where=this._clause=null};b.prototype._setIdFilter=function(a){this._idsToShow=a&&a.objectIds&&new f.default(a.objectIds);this._idsToHide=
a&&a.hiddenIds&&new f.default(a.hiddenIds);this.objectIds=a&&a.objectIds};b.prototype._setGeometryFilter=function(a){return k(this,void 0,void 0,function(){var c,b,e;return l(this,function(d){switch(d.label){case 0:if(!a||!a.geometry)return this.spatialRel=this.geometry=this._spatialQueryOperator=null,[2];c=a.geometry;b=a.spatialRel||"esriSpatialRelIntersects";return[4,x.getSpatialQueryOperator(b,c,this._serviceInfo)];case 1:return e=d.sent(),u.getBoundsXY(this._geometryBounds,c),this._spatialQueryOperator=
e,this.geometry=c,this.spatialRel=b,[2]}})})};b.prototype._setTimeFilter=function(a){this.timeExtent=this._timeOperator=null;a&&a.timeExtent&&(this._serviceInfo.timeInfo?(this.timeExtent=a.timeExtent,this._timeOperator=y.getTimeOperator(this._serviceInfo.timeInfo,a.timeExtent,w.optimizedFeatureQueryEngineAdapter)):(a=new m("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",a.timeExtent),p.error(a)))};b.prototype._applyFilter=function(a){return this._filterByGeometry(a)&&
this._filterById(a)&&this._filterByTime(a)&&this._filterByExpression(a)};b.prototype._filterByExpression=function(a){return this.where?this._clause.testFeature(a):!0};b.prototype._filterById=function(a){return(!this._idsToHide||!this._idsToHide.has(a.objectId))&&(!this._idsToShow||this._idsToShow.has(a.objectId))};b.prototype._filterByGeometry=function(a){return this.geometry?this._earlyGeometryReject(a)?this._spatialQueryOperator(a.geometry):!1:!0};b.prototype._filterByTime=function(a){return r.isSome(this._timeOperator)?
this._timeOperator(a):!0};b.prototype._earlyGeometryReject=function(a){return a.geometry&&a.geometry.coords.length?a.centroid&&"esriSpatialRelContains"===this.spatialRel?n.containsPoint(this._geometryBounds,a.centroid.coords):!0:!1};b.prototype._resetAllHiddenIds=function(){var a=this,b=[];this._idToVisibility.forEach(function(c,e){c&1||(a._idToVisibility.set(e,1),b.push(e))});return b};return b}();h.default=g});