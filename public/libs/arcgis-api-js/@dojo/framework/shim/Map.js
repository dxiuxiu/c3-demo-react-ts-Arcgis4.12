//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define("require exports tslib ./iterator ./global ./object ../has/has ./Symbol".split(" "),a)})(function(a,d){Object.defineProperty(d,"__esModule",{value:!0});var k=a("tslib"),g=a("./iterator"),l=a("./global"),m=a("./object"),n=a("../has/has");a("./Symbol");d.Map=l.default.Map;n.default("es6-map")||(d.Map=(h=function(){function b(c){this._keys=
[];this._values=[];this[Symbol.toStringTag]="Map";if(c)if(g.isArrayLike(c))for(var e=0;e<c.length;e++){var f=c[e];this.set(f[0],f[1])}else try{for(var e=k.__values(c),b=e.next();!b.done;b=e.next())f=b.value,this.set(f[0],f[1])}catch(p){a={error:p}}finally{try{b&&!b.done&&(d=e.return)&&d.call(e)}finally{if(a)throw a.error;}}var a,d}b.prototype._indexOfKey=function(c,b){for(var f=0,a=c.length;f<a;f++)if(m.is(c[f],b))return f;return-1};Object.defineProperty(b.prototype,"size",{get:function(){return this._keys.length},
enumerable:!0,configurable:!0});b.prototype.clear=function(){this._keys.length=this._values.length=0};b.prototype.delete=function(c){c=this._indexOfKey(this._keys,c);if(0>c)return!1;this._keys.splice(c,1);this._values.splice(c,1);return!0};b.prototype.entries=function(){var c=this,b=this._keys.map(function(b,a){return[b,c._values[a]]});return new g.ShimIterator(b)};b.prototype.forEach=function(c,b){for(var a=this._keys,e=this._values,d=0,g=a.length;d<g;d++)c.call(b,e[d],a[d],this)};b.prototype.get=
function(c){c=this._indexOfKey(this._keys,c);return 0>c?void 0:this._values[c]};b.prototype.has=function(c){return-1<this._indexOfKey(this._keys,c)};b.prototype.keys=function(){return new g.ShimIterator(this._keys)};b.prototype.set=function(c,b){var a=this._indexOfKey(this._keys,c),a=0>a?this._keys.length:a;this._keys[a]=c;this._values[a]=b;return this};b.prototype.values=function(){return new g.ShimIterator(this._values)};b.prototype[Symbol.iterator]=function(){return this.entries()};return b}(),
h[Symbol.species]=h,h));d.default=d.Map;var h});