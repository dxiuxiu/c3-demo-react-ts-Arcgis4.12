// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Error","../../../../core/promiseUtils"],function(m,l,n,e){function h(b){return e.create(function(d,a){b.oncomplete=function(){return d()};b.onerror=function(){return a(b.error)};b.onabort=function(){return a(b.error)}})}function g(b){return e.create(function(d,a){"done"===b.readyState?null!=b.error?a(b.error):d(b.result):(b.onsuccess=function(){return d(b.result)},b.onerror=function(){return a(b.error)})})}Object.defineProperty(l,"__esModule",{value:!0});
m=function(){function b(d,a,c){void 0===c&&(c=14);this._version=c;this._quotaReductionPromise=this._db=null;this._miss=this._hit=this._gcCounter=0;this._destroyed=!1;this.gcFrequency=50;this.maxByteSize=1073741824;this.quotaReductionFactor=.2;this._dbName=d;this._storeName=a}b.prototype.init=function(){var d=this;return e.resolve().then(function(){var a=indexedDB.open(d._dbName,d._version);a.onupgradeneeded=function(c){var f=a.result,b=a.transaction,e=f.objectStoreNames.contains(d._storeName)?b.objectStore(d._storeName):
f.createObjectStore(d._storeName),f=f.objectStoreNames.contains("last_access")?b.objectStore("last_access"):f.createObjectStore("last_access");f.indexNames.contains("date")||f.createIndex("date","date",{unique:!1});f.indexNames.contains("byteSize")||f.createIndex("byteSize","byteSize",{unique:!1});c.oldVersion<d._version&&(e.clear(),f.clear())};return g(a)}).then(function(a){d._destroyed?a.close():d._db=a})};b.prototype.destroy=function(){this._db&&(this._db.close(),this._db=null);this._destroyed=
!0};Object.defineProperty(b.prototype,"initialized",{get:function(){return null!=this._db},enumerable:!0,configurable:!0});b.prototype.getHitRate=function(){return this._hit/(this._hit+this._miss)};b.prototype.put=function(d,a){var c=this;return null==this._db?e.reject(n("indexedb:not-initialized","IndexedDB Cache is not initialized")):(null!=this._quotaReductionPromise?this._quotaReductionPromise:e.resolve()).then(function(){return c._put(d,a)}).catch(function(f){if(f&&"QuotaExceededError"===f.name)return null==
c._quotaReductionPromise&&(c._quotaReductionPromise=c._getCacheSize().then(function(d){return c._removeLeastRecentlyAccessed(a.byteSize+Math.ceil(d*c.quotaReductionFactor))}),c._quotaReductionPromise.then(function(){return c._quotaReductionPromise=null},function(){return c._quotaReductionPromise=null})),c._quotaReductionPromise.then(function(){return c._put(d,a)});throw f;}).then(function(){c._gcCounter--;0>c._gcCounter&&null!=c._db&&(c._gcCounter=c.gcFrequency,c._getCacheSize().then(function(a){return c._removeLeastRecentlyAccessed(a-
c.maxByteSize)}))})};b.prototype.get=function(d){var a=this;return null==this._db?e.resolve(null):e.resolve().then(function(){var c=a._db.transaction(a._storeName,"readonly").objectStore(a._storeName).get(d);return g(c)}).then(function(c){null==c?++a._miss:a._db&&(++a._hit,a._db.transaction("last_access","readwrite").objectStore("last_access").put({date:Date.now(),byteSize:c.byteSize},d));return c}).catch(function(c){++a._miss;return null})};b.prototype.remove=function(d){var a=this;return null==
this._db?e.resolve():e.resolve().then(function(){var c=a._db.transaction([a._storeName,"last_access"],"readwrite"),b=c.objectStore(a._storeName),k=c.objectStore("last_access"),b=b.delete(d),k=k.delete(d);return e.all([g(b),g(k),h(c)])})};b.prototype._put=function(d,a){var c=this._db.transaction([this._storeName,"last_access"],"readwrite"),b=c.objectStore(this._storeName),k=c.objectStore("last_access"),b=b.put(a,d);d=k.put({date:Date.now(),byteSize:a.byteSize},d);return e.all([g(b),g(d),h(c)])};b.prototype._removeLeastRecentlyAccessed=
function(b){if(!(0>=b)){var a=this._db.transaction([this._storeName,"last_access"],"readwrite"),c=a.objectStore(this._storeName),d=a.objectStore("last_access"),e=0,g=d.index("date").openCursor(null,"next");g.onsuccess=function(a){a=g.result;null!=a&&(null!=a.value.byteSize&&(e+=a.value.byteSize),c.delete(a.primaryKey),d.delete(a.primaryKey),e<b&&a.continue())};return h(a)}};b.prototype._getCacheSize=function(){var b=this._db.transaction("last_access"),a=0,c=b.objectStore("last_access").index("byteSize").openKeyCursor();
c.onsuccess=function(b){if(b=c.result){var d=b.key;null!=d&&(a+=d);b.continue()}};return h(b).then(function(){return a})};return b}();l.IDBCache=m;l.whenTransaction=h;l.whenRequest=g});