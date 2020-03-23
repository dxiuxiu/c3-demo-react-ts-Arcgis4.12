// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./ensureType ./extensions ./metadata ./utils ./decorators/cast".split(" "),function(u,m,l,n,h,p,q){function r(a,f){return function(b){b=+a(b);null!=f.min&&(b=Math.max(f.min,b));null!=f.max&&(b=Math.min(f.max,b));return b}}function t(a,f){return null==f.get?function(){return this.__accessor__?this.__accessor__.getterStatic(a,f):f.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(a,f):f.value}}Object.defineProperty(m,"__esModule",{value:!0});m.processPrototype=
function(a){var f=a.declaredClass,b=a.properties||{},d;for(d in b){var c=b[d],e=typeof c;null==c?h.setPropertyMetadata(a,d,{value:c}):Array.isArray(c)?h.setPropertyMetadata(a,d,{type:[c[0]],value:null}):"object"===e?p.getProperties(c)||c instanceof Date?h.setPropertyMetadata(a,d,{type:c.constructor,value:c}):h.setPropertyMetadata(a,d,c):"boolean"===e?h.setPropertyMetadata(a,d,{type:Boolean,value:c}):"string"===e?h.setPropertyMetadata(a,d,{type:String,value:c}):"number"===e?h.setPropertyMetadata(a,
d,{type:Number,value:c}):"function"===e&&h.setPropertyMetadata(a,d,{type:c,value:null})}a=h.getPropertiesMetadata(a);for(d in a){b=a[d];e=b.type;c=b.types;if(!b.cast)if(e){for(var c=b,k=0,g=e;Array.isArray(g)&&1===g.length&&"string"!==typeof g[0]&&"number"!==typeof g[0];)g=g[0],k++;e=l.isOneOf(g)?0===k?l.ensureOneOf(g):l.ensureNArrayTyped(l.ensureOneOf(g),k):1===k?l.ensureArray(g):1<k?l.ensureNArray(g,k):l.ensureType(e);c.cast=e}else c&&(Array.isArray(c)?b.cast=l.ensureArrayTyped(l.ensureOneOfType(c[0])):
b.cast=l.ensureOneOfType(c));b.range&&(b.cast=r(b.cast,b.range))}n.processPrototypeMetadatas(a,f);return a};m.processClass=function(a){for(var f=a.prototype,b=f.declaredClass,d=a._meta.bases,c={},e=d.length-1;0<=e;e--)h.merge(c,h.getMetadata(d[e].prototype));var k=c.properties;n.processClassMetadatas(k,b);Object.defineProperty(a,"__accessorMetadata__",{value:{properties:k,autoDestroy:!!c.autoDestroy}});for(var g={},b=function(a){var b=k[a];g[a]={enumerable:!0,configurable:!0,get:t(a,b),set:function(c){var d=
this.__accessor__;if(!d)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:c});else if(!Object.isFrozen(this)){if(d.initialized&&b.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+a+"' of "+this.declaredClass);if(2===d.lifecycle&&b.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+a+"' of "+this.declaredClass);d.set(a,c)}}}},d=0,e=Object.getOwnPropertyNames(k);d<e.length;d++)b(e[d]);Object.defineProperties(a.prototype,
g);if(c.parameters)for(a=0,b=Object.getOwnPropertyNames(c.parameters);a<b.length;a++)d=b[a],e=Object.getOwnPropertyDescriptor(f,d)||{value:f[d]},(e=q.autocastMethod(f,d,e))&&Object.defineProperty(f,d,e);return c}});