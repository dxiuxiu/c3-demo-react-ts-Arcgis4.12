// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./MemCache"],function(d,e,b){return function(){function a(c,a){this._storage=new b.MemCacheStorage;this._storage.maxSize=c;a&&this._storage.registerRemoveFunc("",a)}a.prototype.put=function(a,b){this._storage.put(a,b,1,1)};a.prototype.pop=function(a){return this._storage.pop(a)};a.prototype.get=function(a){return this._storage.get(a)};a.prototype.clear=function(){this._storage.clearAll()};a.prototype.destroy=function(){this._storage.clearAll()};return a}()});