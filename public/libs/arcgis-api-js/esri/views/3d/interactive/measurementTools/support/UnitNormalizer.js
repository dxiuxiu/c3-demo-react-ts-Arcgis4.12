// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/unitUtils"],function(d,e,c){return function(){function b(a){void 0===a&&(a=null);this.spatialReference=a;this._updateNormalizationFactors}Object.defineProperty(b.prototype,"spatialReference",{get:function(){return this._spatialReference},set:function(a){a!==this._spatialReference&&(this._spatialReference=a,this._updateNormalizationFactors())},enumerable:!0,configurable:!0});b.prototype.normalizeDistance=function(a){return a*this._metersPerDistanceUnit};
b.prototype.normalizeElevation=function(a){return a*this._metersPerElevationUnit};b.prototype.normalizeArea=function(a){return a*this._squareMetersPerAreaUnit};b.prototype._updateNormalizationFactors=function(){this._metersPerDistanceUnit=c.getMetersPerUnitForSR(this._spatialReference,1);this._metersPerElevationUnit=c.getMetersPerUnitForSR(this._spatialReference,1);this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit};return b}()});