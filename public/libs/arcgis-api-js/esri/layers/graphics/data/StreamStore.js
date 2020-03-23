// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/extendsHelper ../../../core/CircularArray ../../../core/maybe ./FeatureStore".split(" "),function(g,e,p,l,m,f,n){Object.defineProperty(e,"__esModule",{value:!0});e.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";g=function(h){function c(a,d,b,c,g,k){void 0===k&&(k=128);b=h.call(this,b)||this;b._trackIdToObservations=new Map;b._idCounter=0;b._lastPurge=Date.now();b._addOrUpdated=new Map;b._removed=[];b._maxAge=0;b._timeInfo=
d;b._maximumTrackCount=c;b._purgeOptions=g;b.purgeInterval=k;b.objectIdField=f.unwrapOr(a,e.DEFAULT_STREAM_ID_FIELD);b._useGeneratedIds=b.objectIdField===e.DEFAULT_STREAM_ID_FIELD;return b}l(c,h);c.prototype.add=function(a){this._useGeneratedIds&&(a.attributes[this.objectIdField]=this._nextId(),a.objectId=a.attributes[this.objectIdField]);h.prototype.add.call(this,a);this._addOrUpdated.set(a.objectId,a);var d=a.attributes[this._timeInfo.trackIdField];this._trackIdToObservations.has(d)||this._trackIdToObservations.set(d,
new m.default(this._maximumTrackCount));this._maxAge=Math.max(this._maxAge,a.attributes[this._timeInfo.startTimeField]);a=this._trackIdToObservations.get(d).enqueue(a.attributes[this.objectIdField]);f.isSome(a)&&(d=this.removeById(a),f.isSome(d)&&(this._addOrUpdated.has(a)?this._addOrUpdated.delete(a):this._removed.push(d)))};c.prototype.checkForUpdates=function(){var a=this._getToAdd(),d=this._getToRemove(),b=Date.now();b-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=b);(a||
d)&&this.events.emit("update",{addOrUpdated:a,removed:d})};c.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var a=Array(this._addOrUpdated.size),d=0;this._addOrUpdated.forEach(function(b){return a[d++]=b});this._addOrUpdated.clear();return a};c.prototype._getToRemove=function(){var a=this._removed;if(!this._removed.length)return null;this._removed=[];return a};c.prototype._nextId=function(){var a=this._idCounter;this._idCounter=(this._idCounter+1)%4294967294+1;return a};c.prototype._purge=
function(){var a=this._purgeOptions;f.isSome(a)&&(this._purgeSomeByDisplayCount(a),this._purgeByAge(a))};c.prototype._purgeSomeByDisplayCount=function(a){var d=this;if(a.displayCount){var b=this.numFeatures;b>a.displayCount&&this._trackIdToObservations.forEach(function(c,e){b>a.displayCount&&c.size&&(c=d.removeById(c.dequeue()),f.isSome(c)&&d._removed.push(c),b--)})}};c.prototype._purgeByAge=function(a){if(a.age){var c=this._maxAge-6E4*a.age,b=this._timeInfo.startTimeField;this.removeIf(this._removed,
function(a){return a.attributes[b]<c})}};return c}(n.default);e.default=g});