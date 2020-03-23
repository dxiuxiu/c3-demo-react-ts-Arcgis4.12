//>>built
(function(f){"object"===typeof module&&"object"===typeof module.exports?(f=f(require,exports),void 0!==f&&(module.exports=f)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","../shim/global"],f)})(function(f,d){function k(b){b=b.toLowerCase();return!!(b in h||b in d.testCache||d.testFunctions[b])}function c(b,a,c){void 0===c&&(c=!1);var g=b.toLowerCase();if(k(g)&&!c&&!(g in h))throw new TypeError('Feature "'+b+'" exists and overwrite not true.');"function"===typeof a?d.testFunctions[g]=
a:(d.testCache[g]=a,delete d.testFunctions[g])}function e(b){var a=b.toLowerCase();if(a in h)b=h[a];else if(d.testFunctions[a])b=d.testCache[a]=d.testFunctions[a].call(null),delete d.testFunctions[a];else if(a in d.testCache)b=d.testCache[a];else throw new TypeError('Attempt to detect unregistered has feature "'+b+'"');return b}Object.defineProperty(d,"__esModule",{value:!0});var l=f("tslib"),a=f("../shim/global");d.testCache={};d.testFunctions={};f=(a.default.DojoHasEnvironment||{}).staticFeatures;
"DojoHasEnvironment"in a.default&&delete a.default.DojoHasEnvironment;var h=f?"function"===typeof f?f.apply(a.default):f:{};d.load=function(a,c,d,e){a?c([a],d):d()};d.normalize=function(a,c){function b(a){var c=d[g++];if(":"===c)return null;if("?"===d[g++]){if(!a&&e(c))return b();b(!0);return b(a)}return c}var d=a.match(/[\?:]|[^:\?]*/g)||[],g=0;return(a=b())&&c(a)};d.exists=k;d.add=c;d.default=e;c("public-path",void 0);c("dojo-debug",!1);c("host-browser","undefined"!==typeof document&&"undefined"!==
typeof location);c("host-node",function(){if("object"===typeof process&&process.versions&&process.versions.node)return process.versions.node});c("fetch","fetch"in a.default&&"function"===typeof a.default.fetch,!0);c("es6-array",function(){return["from","of"].every(function(b){return b in a.default.Array})&&["findIndex","find","copyWithin"].every(function(b){return b in a.default.Array.prototype})},!0);c("es6-array-fill",function(){return"fill"in a.default.Array.prototype?1===[1].fill(9,Number.POSITIVE_INFINITY)[0]:
!1},!0);c("es7-array",function(){return"includes"in a.default.Array.prototype},!0);c("es6-map",function(){if("function"===typeof a.default.Map)try{var b=new a.default.Map([[0,1]]);return b.has(0)&&"function"===typeof b.keys&&e("es6-symbol")&&"function"===typeof b.values&&"function"===typeof b.entries}catch(g){}return!1},!0);c("es6-math",function(){return"clz32 sign log10 log2 log1p expm1 cosh sinh tanh acosh asinh atanh trunc fround cbrt hypot".split(" ").every(function(b){return"function"===typeof a.default.Math[b]})},
!0);c("es6-math-imul",function(){return"imul"in a.default.Math?-5===Math.imul(4294967295,5):!1},!0);c("es6-object",function(){return e("es6-symbol")&&["assign","is","getOwnPropertySymbols","setPrototypeOf"].every(function(b){return"function"===typeof a.default.Object[b]})},!0);c("es2017-object",function(){return["values","entries","getOwnPropertyDescriptors"].every(function(b){return"function"===typeof a.default.Object[b]})},!0);c("es-observable",function(){return"undefined"!==typeof a.default.Observable},
!0);c("es6-promise",function(){return"undefined"!==typeof a.default.Promise&&e("es6-symbol")},!0);c("es2018-promise-finally",function(){return e("es6-promise")&&"undefined"!==typeof a.default.Promise.prototype.finally},!0);c("es6-set",function(){if("function"===typeof a.default.Set){var b=new a.default.Set([1]);return b.has(1)&&"keys"in b&&"function"===typeof b.keys&&e("es6-symbol")}return!1},!0);c("es6-string",function(){return["fromCodePoint"].every(function(b){return"function"===typeof a.default.String[b]})&&
"codePointAt normalize repeat startsWith endsWith includes".split(" ").every(function(b){return"function"===typeof a.default.String.prototype[b]})},!0);c("es6-string-raw",function(){function b(a){for(var b=1;b<arguments.length;b++);b=l.__spread(a);b.raw=a.raw;return b}if("raw"in a.default.String){var c=b(m||(m=l.__makeTemplateObject(["a\n",""],["a\\n",""])),1);c.raw=["a\\n"];return"a\\n"===a.default.String.raw(c,42)}return!1},!0);c("es2017-string",function(){return["padStart","padEnd"].every(function(b){return"function"===
typeof a.default.String.prototype[b]})},!0);c("es6-symbol",function(){return"undefined"!==typeof a.default.Symbol&&"symbol"===typeof Symbol()},!0);c("es6-weakmap",function(){if("undefined"!==typeof a.default.WeakMap){var b={},c={},d=new a.default.WeakMap([[b,1]]);Object.freeze(b);return 1===d.get(b)&&d.set(c,2)===d&&e("es6-symbol")}return!1},!0);c("microtasks",function(){return e("es6-promise")||0||e("dom-mutationobserver")},!0);c("postmessage",function(){return"undefined"!==typeof a.default.window&&
"function"===typeof a.default.postMessage},!0);c("raf",function(){return"function"===typeof a.default.requestAnimationFrame},!0);c("setimmediate",function(){return"undefined"!==typeof a.default.setImmediate},!0);c("dom-mutationobserver",function(){if(e("host-browser")&&(a.default.MutationObserver||a.default.WebKitMutationObserver)){var b=document.createElement("div"),c=new (a.default.MutationObserver||a.default.WebKitMutationObserver)(function(){});c.observe(b,{attributes:!0});b.style.setProperty("display",
"block");return!!c.takeRecords().length}return!1},!0);c("dom-webanimation",function(){return e("host-browser")&&void 0!==a.default.Animation&&void 0!==a.default.KeyframeEffect},!0);c("abort-controller",function(){return"undefined"!==typeof a.default.AbortController});c("abort-signal",function(){return"undefined"!==typeof a.default.AbortSignal});c("dom-intersection-observer",function(){return e("host-browser")&&void 0!==a.default.IntersectionObserver},!0);c("dom-resize-observer",function(){return e("host-browser")&&
void 0!==a.default.ResizeObserver},!0);c("dom-pointer-events",function(){return e("host-browser")&&void 0!==a.default.onpointerdown},!0);c("build-elide",!1);var m});