//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","./global","../has/has","./Symbol"],a)})(function(a,b){Object.defineProperty(b,"__esModule",{value:!0});var e=a("./global"),f=a("../has/has"),g=a("./Symbol");f.default("es6-object")?(a=e.default.Object,b.assign=a.assign,b.getOwnPropertyDescriptor=a.getOwnPropertyDescriptor,b.getOwnPropertyNames=a.getOwnPropertyNames,
b.getOwnPropertySymbols=a.getOwnPropertySymbols,b.is=a.is,b.keys=a.keys):(b.keys=function(d){return Object.keys(d).filter(function(c){return!c.match(/^@@.+/)})},b.assign=function(d){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(null==d)throw new TypeError("Cannot convert undefined or null to object");var e=Object(d);c.forEach(function(c){c&&b.keys(c).forEach(function(a){e[a]=c[a]})});return e},b.getOwnPropertyDescriptor=function(a,c){g.isSymbol(c);return Object.getOwnPropertyDescriptor(a,
c)},b.getOwnPropertyNames=function(a){return Object.getOwnPropertyNames(a).filter(function(a){return!a.match(/^@@.+/)})},b.getOwnPropertySymbols=function(a){return Object.getOwnPropertyNames(a).filter(function(a){return!!a.match(/^@@.+/)}).map(function(a){return Symbol.for(a.substring(2))})},b.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b});f.default("es2017-object")?(a=e.default.Object,b.getOwnPropertyDescriptors=a.getOwnPropertyDescriptors,b.entries=a.entries,b.values=a.values):(b.getOwnPropertyDescriptors=
function(a){return b.getOwnPropertyNames(a).reduce(function(c,d){c[d]=b.getOwnPropertyDescriptor(a,d);return c},{})},b.entries=function(a){return b.keys(a).map(function(b){return[b,a[b]]})},b.values=function(a){return b.keys(a).map(function(b){return a[b]})})});