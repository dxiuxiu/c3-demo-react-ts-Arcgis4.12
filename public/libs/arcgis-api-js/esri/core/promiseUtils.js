// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports @dojo/framework/shim/AbortController dojo/Deferred dojo/promise/all ./Error ./events ./maybe ./has @dojo/framework/shim/Promise".split(" "),function(H,c,F,t,G,x,y,n,l){function z(a){return l("esri-native-promise")?Promise.all(a):G(a)}function h(a,b){if(l("esri-native-promise"))return new Promise(a);var d=new t(b);try{a(function(a){return r(a).then(d.resolve)},d.reject)}catch(e){d.reject(e)}return d.promise}function q(a){void 0===a&&(a="Aborted");a=new x("AbortError",a);a.dojoType=
"cancel";return a}function A(){return new F.default}function B(a){if(C(a))throw q();}function u(a){return n.isSome(a)?"aborted"in a?a:a.signal:a}function C(a){a=u(a);return n.isSome(a)&&a.aborted}function D(a){return a&&("AbortError"===a.name||"cancel"===a.dojoType)}function v(a){var b=null;a=h(function(a,e){b={resolve:a,reject:e}},a);b.promise=a;b.cancel=function(){b.reject(q())};return b}function w(a){if(a){if("function"!==typeof a.forEach){var b=Object.keys(a),d=b.map(function(b){return a[b]});
return w(d).then(function(a){var d={};b.forEach(function(b,c){return d[b]=a[c]});return d})}var e=null,c=p;return h(function(b,d){var g=[],f=a.length;0===f&&b(g);a.forEach(function(a){var k={promise:a||c(a)};g.push(k);k.promise.then(function(a){k.value=a}).catch(function(a){k.error=a}).then(function(){--f;0===f&&(e?d(q()):b(g))})})},function(b){e=b||"Invocation cancellation";a.forEach(function(a){"cancel"in a&&a.cancel(b)})})}}function p(a){void 0===a&&(a=void 0);if(l("esri-native-promise"))return Promise.resolve(a);
var b=new t;b.resolve(a);return b.promise}function E(a,b){void 0===b&&(b=void 0);var d=0;return h(function(c){d=setTimeout(function(){c(b)},a)},function(){d&&(clearTimeout(d),d=0)})}function r(a){return a&&"object"===typeof a&&"then"in a&&"function"===typeof a.then?a:p(a)}Object.defineProperty(c,"__esModule",{value:!0});l.add("esri-native-promise",!1);c.all=z;c.filter=function(a,b){var d=a.slice();return z(a.map(function(a,d){return b(a,d)})).then(function(a){return d.filter(function(b,d){return a[d]})})};
c.create=h;c.createAbortError=q;c.createAbortController=A;c.throwIfAborted=B;c.isAborted=C;c.throwIfAbortError=function(a){if(D(a))throw a;};c.onAbort=function(a,b){a=u(a);if(!n.isNone(a))if(a.aborted)b();else return y.once(a,"abort",b)};c.onAbortOrThrow=function(a,b){a=u(a);if(!n.isNone(a))return B(a),y.once(a,"abort",b)};c.isAbortError=D;c.createDeferred=v;c.eachAlways=w;c.eachAlwaysValues=function(a){return w(a).then(function(a){return a.filter(function(a){return!!a.value}).map(function(a){return a.value})})};
c.first=function(a){return a&&a.length?h(function(b,d){for(var c=0;c<a.length;c++)a[c].then(b,d)}):p()};c.reject=function(a){if(l("esri-native-promise"))return Promise.reject(a);var b=new t;b.reject(a);return b.promise};c.resolve=p;c.after=E;c.timeout=function(a,b,d,c){var g=setTimeout(function(){g=0;d&&d.abort()},b),f=function(){throw c||new x("promiseUtils:timeout","The wrapped promise did not resolve within "+b+" ms");};return a.then(function(a){if(0===g)throw f();clearTimeout(g);return a},function(a){clearTimeout(g);
throw 0===g?f():a;})};c.wrapCallback=function(a){var b=!1;return h(function(){a(function(a){b||p(a)})},function(){return b=!0})};c.isThenable=function(a){return a&&"function"===typeof a.then};c.when=r;c.debounce=function(a,b){void 0===b&&(b=-1);var c,e,g,f,k=null,h=function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];if(c)return e=d,f&&f.reject(q()),f=v(),d=f.promise,k&&(m=k,k=null,m.abort()),d;g=f||v();f=null;if(0<b){var l=A(),p=c=r(a.apply(void 0,d.concat([l.signal])));E(b).then(function(){c===
p&&(f?l.abort():k=l)})}else c=r(a.apply(void 0,d));var d=function(){var a=e;e=g=c=k=null;null!=a&&h.apply(void 0,a)},m=c,n=g;m.then(d,d);m.then(n.resolve,n.reject);return n.promise};return h};c.createResolver=function(a){var b,c;a=h(function(a,d){b=a;c=d},a);var e=function(a){b(a)};e.resolve=function(a){return b(a)};e.reject=function(a){return c(a)};e.promise=a;return e};c.always=function(a,b){return a.then(b,b)}});