// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./Attachment ./Dictionary ./Feature ./FunctionWrapper ./ImmutablePathArray ./ImmutablePointArray ./languageUtils ./treeAnalysis ./functions/date ./functions/geomasync ./functions/geometry ./functions/maths ./functions/stats ./functions/string ../core/promiseUtils ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/SpatialReference".split(" "),function(Q,t,ea,u,w,D,R,fa,f,m,ga,ha,ia,ja,ka,la,h,
ma,S,na,oa,pa,qa,ra){function p(b){return b instanceof Error?h.reject(b):h.reject(Error(b))}function T(b){return h.resolve(b)}function G(b,a){for(var c=[],d=0;d<a.arguments.length;d++)c.push(l(b,a.arguments[d]));return h.all(c)}function v(b,a,c){return h.create(function(d,e){G(b,a).then(function(g){try{d(c(b,a,g))}catch(k){e(k)}},e)})}function A(b,a,c){try{return G(b,a).then(function(d){try{var e=c(b,a,d);return e&&"function"===typeof e.then?e:h.resolve(e)}catch(g){return p(g)}})}catch(d){return p(d)}}
function l(b,a){try{switch(a.type){case "VariableDeclarator":return sa(b,a);case "VariableDeclaration":return U(b,a,0);case "BlockStatement":var c;try{c=V(b,a,0)}catch(g){c=p(g)}return c;case "FunctionDeclaration":var d;try{var e=a.id.name.toLowerCase();b.globalScope[e]={valueset:!0,node:null,value:new D(a,b)};d=h.resolve(f.voidOperation)}catch(g){d=p(g)}return d;case "ReturnStatement":return ta(b,a);case "IfStatement":return ua(b,a);case "ExpressionStatement":return va(b,a);case "UpdateExpression":return wa(b,
a);case "AssignmentExpression":return xa(b,a);case "ForStatement":return ya(b,a);case "ForInStatement":return za(b,a);case "BreakStatement":return h.resolve(f.breakResult);case "EmptyStatement":return h.resolve(f.voidOperation);case "ContinueStatement":return h.resolve(f.continueResult);case "Identifier":return H(b,a);case "MemberExpression":return Aa(b,a);case "Literal":return T(a.value);case "CallExpression":return Ba(b,a);case "UnaryExpression":return Ca(b,a);case "BinaryExpression":return Da(b,
a);case "LogicalExpression":return Ea(b,a);case "ConditionalExpression":return p(m.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":return Fa(b,a);case "ObjectExpression":return Ga(b,a);case "Property":return Ha(b,a);default:return p(m.nodeErrorMessage(a,"RUNTIME","UNREOGNISED"))}}catch(g){return p(g)}}function Ga(b,a){try{for(var c=[],d=0;d<a.properties.length;d++)c.push(l(b,a.properties[d]));return h.all(c).then(function(a){return h.create(function(b,c){c={};for(var d=0;d<a.length;d++){var e=
a[d];if(f.isFunctionParameter(e.value))throw Error("Illegal Argument");if(!1===f.isString(e.key))throw Error("Illegal Argument");c[e.key.toString()]=e.value===f.voidOperation?null:e.value}c=new u(c);c.immutable=!1;b(c)})})}catch(e){return p(e)}}function Ha(b,a){try{return l(b,a.value).then(function(c){return h.create(function(d,e){"Identifier"===a.key.type?d({key:a.key.name,value:c}):l(b,a.key).then(function(a){d({key:a,value:c})})})})}catch(c){return h.reject(c)}}function W(b,a,c){try{return l(b,
a.body).then(function(d){try{return c.lastAction=d,c.lastAction===f.breakResult||c.lastAction instanceof f.ReturnResult?(c.testResult=!1,h.resolve(c)):null!==a.update?l(b,a.update).then(function(a){return h.resolve(c)}):h.resolve(c)}catch(e){return h.reject(e)}})}catch(d){return h.reject(d)}}function Ia(b,a,c){try{return null!==a.test?l(b,a.test).then(function(d){try{if(!0===b.abortSignal.aborted)return h.reject(Error("Cancelled"));c.testResult=d;return!1===c.testResult?h.resolve(c):!0!==c.testResult?
h.reject(Error(m.nodeErrorMessage(a,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):W(b,a,c)}catch(e){return h.reject(e)}}):W(b,a,c)}catch(d){return h.reject(d)}}function E(b,a,c,d,e,g){try{Ia(b,a,c).then(function(){try{!0===c.testResult?(g++,100<g?(g=0,setTimeout(function(){E(b,a,c,function(a){d(a)},function(a){e(a)},g)})):E(b,a,c,function(a){d(a)},function(a){e(a)},g)):c.lastAction instanceof f.ReturnResult?d(c.lastAction):d(f.voidOperation)}catch(k){e(k)}},function(a){e(a)})}catch(k){e(k)}}function ya(b,
a){try{return null!==a.init?l(b,a.init).then(function(){return h.create(function(c,d){E(b,a,{testResult:!0,lastAction:f.voidOperation},function(a){c(a)},function(a){d(a)},0)})}):h.create(function(c,d){E(b,a,{testResult:!0,lastAction:f.voidOperation},function(a){c(a)},function(a){d(a)},0)})}catch(c){return h.reject(c)}}function I(b,a,c,d,e,g,k,n,h,m){try{d<=g?n(f.voidOperation):(e.value="k"===k?c[g]:g,l(b,a.body).then(function(l){try{l instanceof f.ReturnResult?n(l):l===f.breakResult?n(f.voidOperation):
(m++,100<m?(m=0,setTimeout(function(){I(b,a,c,d,e,g+1,k,function(a){n(a)},function(a){h(a)},m)})):I(b,a,c,d,e,g+1,k,function(a){n(a)},function(a){h(a)},m))}catch(K){h(K)}},function(a){h(a)}))}catch(B){h(B)}}function L(b,a,c,d,e,g,k,n,h){try{c.length()<=e?k(f.voidOperation):(d.value="k"===g?c.get(e):e,l(b,a.body).then(function(l){l instanceof f.ReturnResult?k(l):l===f.breakResult?k(f.voidOperation):(h++,100<h?(h=0,setTimeout(function(){L(b,a,c,d,e+1,g,function(a){k(a)},function(a){n(a)},h)})):L(b,
a,c,d,e+1,g,function(a){k(a)},function(a){n(a)},h))},function(a){n(a)}))}catch(J){n(J)}}function M(b,a,c,d,e,g){try{void 0===g&&(g="i"),0===c.length?d.resolve(f.voidOperation):I(b,a,c,c.length,e,0,g,function(a){d.resolve(a)},function(a){d.reject(a)},0)}catch(k){d.reject(k)}}function Ja(b,a,c,d,e,g){try{void 0===g&&(g="i"),0===c.length?d.resolve(f.voidOperation):L(b,a,c,e,0,g,function(a){d.resolve(a)},function(a){d.reject(a)},0)}catch(k){d.reject(k)}}function Ka(b,a,c,d,e){try{var g=c.keys();M(b,a,
g,d,e,"k")}catch(k){d.reject(k)}}function N(b,a,c,d,e,g,k,n){try{b.next().then(function(h){try{if(null===h)g(f.voidOperation);else{var m=w.createFromGraphicLikeObject(h.geometry,h.attributes,d);m._underlyingGraphic=h;e.value=m;l(a,c.body).then(function(h){try{h===f.breakResult?g(f.voidOperation):h instanceof f.ReturnResult?g(h):(n++,100<n?(n=0,setTimeout(function(){N(b,a,c,d,e,function(a){g(a)},function(a){k(a)},n)})):N(b,a,c,d,e,function(a){g(a)},function(a){k(a)},n))}catch(K){k(K)}},function(a){k(a)})}}catch(B){k(B)}},
function(a){k(a)})}catch(r){k(r)}}function za(b,a){return h.create(function(c,d){l(b,a.right).then(function(e){try{var g=null,g="VariableDeclaration"===a.left.type?l(b,a.left):h.resolve();g.then(function(){try{var g="";if("VariableDeclaration"===a.left.type){var n=a.left.declarations[0].id;"Identifier"===n.type&&(g=n.name)}else"Identifier"===a.left.type&&(g=a.left.name);if(!g)throw Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDVARIABLE"));g=g.toLowerCase();n=null;null!==b.localScope&&void 0!==b.localScope[g]&&
(n=b.localScope[g]);null===n&&void 0!==b.globalScope[g]&&(n=b.globalScope[g]);null===n?d(Error(m.nodeErrorMessage(a,"RUNTIME","VARIABLENOTDECLARED"))):f.isArray(e)||f.isString(e)?M(b,a,e,{reject:d,resolve:c},n):f.isImmutableArray(e)?Ja(b,a,e,{reject:d,resolve:c},n):e instanceof u||e instanceof w?Ka(b,a,e,{reject:d,resolve:c},n):f.isFeatureSet(e)?N(e.iterator(b.abortSignal),b,a,e,n,function(a){c(a)},function(a){d(a)},0):M(b,a,[],{reject:d,resolve:c},n)}catch(r){d(r)}},d)}catch(k){d(k)}},d)})}function wa(b,
a){try{var c=a.argument;if("MemberExpression"===c.type){var d=null;return l(b,c.object).then(function(a){var e=null;d=a;!0===c.computed?e=l(b,c.property):"Identifier"===c.property.type&&(e=h.resolve(c.property.name));return e}).then(function(b){return h.create(function(c,e){e=d;var g;if(f.isArray(e))if(f.isNumber(b)){0>b&&(b=e.length+b);if(0>b||b>=e.length)throw Error("Assignment outside of array bounds");g=f.toNumber(e[b]);e[b]="++"===a.operator?g+1:g-1}else throw Error("Invalid Parameter");else if(e instanceof
u){if(!1===f.isString(b))throw Error("Dictionary accessor must be a string");if(!0===e.hasField(b))g=f.toNumber(e.field(b)),e.setField(b,"++"===a.operator?g+1:g-1);else throw Error("Invalid Parameter");}else if(e instanceof w){if(!1===f.isString(b))throw Error("Feature accessor must be a string");if(!0===e.hasField(b))g=f.toNumber(e.field(b)),e.setField(b,"++"===a.operator?g+1:g-1);else throw Error("Invalid Parameter");}else{if(f.isImmutableArray(e))throw Error("Array is Immutable");throw Error("Invalid Parameter");
}!1===a.prefix?c(g):c("++"===a.operator?g+1:g-1)})})}return h.create(function(c,d){var e="Identifier"===a.argument.type?a.argument.name.toLowerCase():"";if(!e)throw Error("Invalid identifier");null!==b.localScope&&void 0!==b.localScope[e]?(d=f.toNumber(b.localScope[e].value),b.localScope[e]={value:"++"===a.operator?d+1:d-1,valueset:!0,node:a},!1===a.prefix?c(d):c("++"===a.operator?d+1:d-1)):void 0!==b.globalScope[e]?(d=f.toNumber(b.globalScope[e].value),b.globalScope[e]={value:"++"===a.operator?d+
1:d-1,valueset:!0,node:a},!1===a.prefix?c(d):c("++"===a.operator?d+1:d-1)):d(Error("Variable not recognised"))})}catch(e){return h.reject(e)}}function y(b,a,c,d){switch(a){case "\x3d":return b===f.voidOperation?null:b;case "/\x3d":return f.toNumber(c)/f.toNumber(b);case "*\x3d":return f.toNumber(c)*f.toNumber(b);case "-\x3d":return f.toNumber(c)-f.toNumber(b);case "+\x3d":return f.isString(c)||f.isString(b)?f.toString(c)+f.toString(b):f.toNumber(c)+f.toNumber(b);case "%\x3d":return f.toNumber(c)%
f.toNumber(b);default:throw Error(m.nodeErrorMessage(d,"RUNTIME","OPERATORNOTRECOGNISED"));}}function xa(b,a){return h.create(function(c,d){var e=a.left;if("MemberExpression"===e.type)l(b,a.right).then(function(g){try{l(b,e.object).then(function(k){try{var n=null;if(!0===e.computed)n=l(b,e.property);else if("Identifier"===e.property.type)n=h.resolve(e.property.name);else throw Error("Expected computed or identifier for assignemnt target");n.then(function(b){try{if(f.isArray(k))if(f.isNumber(b)){0>
b&&(b=k.length+b);if(0>b||b>k.length)throw Error("Assignment outside of array bounds");if(b===k.length&&"\x3d"!==a.operator)throw Error("Invalid Parameter");k[b]=y(g,a.operator,k[b],a)}else throw Error("Invalid Parameter");else if(k instanceof u){if(!1===f.isString(b))throw Error("Dictionary accessor must be a string");if(!0===k.hasField(b))k.setField(b,y(g,a.operator,k.field(b),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");k.setField(b,y(g,a.operator,null,a))}}else if(k instanceof
w){if(!1===f.isString(b))throw Error("Feature accessor must be a string");if(!0===k.hasField(b))k.setField(b,y(g,a.operator,k.field(b),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");k.setField(b,y(g,a.operator,null,a))}}else{if(f.isImmutableArray(k))throw Error("Array is Immutable");throw Error("Invalid Parameter");}c(f.voidOperation)}catch(B){d(B)}},d)}catch(J){d(J)}},d)}catch(n){d(n)}},d);else{var g=e.name.toLowerCase();null!==b.localScope&&void 0!==b.localScope[g]&&l(b,a.right).then(function(e){try{b.localScope[g]=
{value:y(e,a.operator,b.localScope[g].value,a),valueset:!0,node:a.right},c(f.voidOperation)}catch(n){d(n)}},d);void 0!==b.globalScope[g]?l(b,a.right).then(function(e){try{b.globalScope[g]={value:y(e,a.operator,b.globalScope[g].value,a),valueset:!0,node:a.right},c(f.voidOperation)}catch(n){d(n)}},d):d(Error("Cannot assign undeclared variable"))}})}function va(b,a){try{return"AssignmentExpression"===a.expression.type?l(b,a.expression):l(b,a.expression).then(function(a){return h.create(function(b,c){a===
f.voidOperation?b(f.voidOperation):b(new f.ImplicitResult(a))})})}catch(c){return h.reject(c)}}function ua(b,a){return h.create(function(c,d){"AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type?d(Error(m.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):l(b,a.test).then(function(e){try{!0===e?l(b,a.consequent).then(c,d):!1===e?null!==a.alternate?l(b,a.alternate).then(c,d):c(f.voidOperation):d(Error(m.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(g){d(g)}},
d)})}function V(b,a,c){try{return c>=a.body.length?h.resolve(f.voidOperation):h.create(function(d,e){l(b,a.body[c]).then(function(g){try{g instanceof f.ReturnResult||g===f.breakResult||g===f.continueResult?d(g):c===a.body.length-1?d(g):V(b,a,c+1).then(d,e)}catch(k){e(k)}},e)})}catch(d){return p(d)}}function ta(b,a){return h.create(function(c,d){null===a.argument?c(new f.ReturnResult(f.voidOperation)):l(b,a.argument).then(function(a){try{c(new f.ReturnResult(a))}catch(g){d(g)}},d)})}function U(b,a,
c){return h.create(function(d,e){c>=a.declarations.length?d(f.voidOperation):l(b,a.declarations[c]).then(function(g){c===a.declarations.length-1?d(f.voidOperation):U(b,a,c+1).then(function(a){d(f.voidOperation)},e)},e)})}function sa(b,a){try{var c=null,c=null===a.init?h.resolve(null):l(b,a.init);return null!==b.localScope?c.then(function(c){return h.create(function(d,g){c===f.voidOperation&&(c=null);if("Identifier"!==a.id.type)throw Error("Can only assign a regular variable");g=a.id.name.toLowerCase();
b.localScope[g]={value:c,valueset:!0,node:a.init};d(f.voidOperation)})}):c.then(function(c){return h.create(function(d,g){if("Identifier"!==a.id.type)throw Error("Can only assign a regular variable");g=a.id.name.toLowerCase();c===f.voidOperation&&(c=null);b.globalScope[g]={value:c,valueset:!0,node:a.init};d(f.voidOperation)})})}catch(d){return p(d)}}function X(b,a,c,d){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=
b.spatialReference._arcadeCacheId,void 0===a&&(c=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&(c=!1),c&&(x++,a=b.spatialReference._arcadeCacheId=x)),b=new u({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=
b.cache._arcadeCacheId,void 0===a&&(x++,a=x,b.cache._arcadeCacheId=a),b=new R(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=b.cache._arcadeCacheId,void 0===a&&(x++,a=x,b.cache._arcadeCacheId=a),b=new R(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;
case "multipoint":switch(a){case "points":return a=b.cache._arcadeCacheId,void 0===a&&(x++,a=x,b.cache._arcadeCacheId=a),b=new fa(b.points,b.spatialReference,!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(m.nodeErrorMessage(d,"RUNTIME","PROPERTYNOTFOUND"));}function Aa(b,a){try{return l(b,a.object).then(function(c){try{return null===c?h.reject(Error(m.nodeErrorMessage(a,"RUNTIME","NOTFOUND"))):!1===a.computed?"Identifier"===a.property.type?c instanceof u||c instanceof w?
h.resolve(c.field(a.property.name)):c instanceof S?h.resolve(X(c,a.property.name,b,a)):h.reject(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"))):h.reject(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"))):l(b,a.property).then(function(d){return h.create(function(e,g){if(c instanceof u||c instanceof w)f.isString(d)?e(c.field(d)):g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")));else if(c instanceof S)f.isString(d)?e(X(c,d,b,a)):g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")));
else if(f.isArray(c))if(f.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||0>d)throw Error(m.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));e(c[d])}else g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")));else if(f.isImmutableArray(c))if(f.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length()+d);if(d>=c.length()||0>d)throw Error(m.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));e(c.get(d))}else g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")));else if(f.isString(c))if(f.isNumber(d)&&
isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||0>d)throw Error(m.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));e(c[d])}else g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")));else g(Error(m.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE")))})})}catch(d){return p(d)}})}catch(c){return p(c)}}function Ca(b,a){try{return l(b,a.argument).then(function(b){return h.create(function(c,e){f.isBoolean(b)?"!"===a.operator?c(!b):"-"===a.operator?c(-1*f.toNumber(b)):"+"===a.operator?c(1*f.toNumber(b)):
e(Error(m.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))):"-"===a.operator?c(-1*f.toNumber(b)):"+"===a.operator?c(1*f.toNumber(b)):e(Error(m.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))})})}catch(c){return p(c)}}function Fa(b,a){try{for(var c=[],d=0;d<a.elements.length;d++)c.push(l(b,a.elements[d]));return h.all(c).then(function(b){return h.create(function(c,d){for(var e=0;e<b.length;e++){if(f.isFunctionParameter(b[e])){d(Error(m.nodeErrorMessage(a,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));
return}b[e]===f.voidOperation&&(b[e]=null)}c(b)})})}catch(e){return p(e)}}function Da(b,a){try{return h.all([l(b,a.left),l(b,a.right)]).then(function(b){return h.create(function(c,e){var d=b[0],k=b[1];switch(a.operator){case "\x3d\x3d":c(f.equalityTest(d,k));break;case "!\x3d":c(!f.equalityTest(d,k));break;case "\x3c":c(f.greaterThanLessThan(d,k,a.operator));break;case "\x3e":c(f.greaterThanLessThan(d,k,a.operator));break;case "\x3c\x3d":c(f.greaterThanLessThan(d,k,a.operator));break;case "\x3e\x3d":c(f.greaterThanLessThan(d,
k,a.operator));break;case "+":f.isString(d)||f.isString(k)?c(f.toString(d)+f.toString(k)):c(f.toNumber(d)+f.toNumber(k));break;case "-":c(f.toNumber(d)-f.toNumber(k));break;case "*":c(f.toNumber(d)*f.toNumber(k));break;case "/":c(f.toNumber(d)/f.toNumber(k));break;case "%":c(f.toNumber(d)%f.toNumber(k));break;default:e(Error(m.nodeErrorMessage(a,"RUNTIME","OPERATORNOTRECOGNISED")))}})})}catch(c){return p(c)}}function Ea(b,a){return h.create(function(c,d){"AssignmentExpression"===a.left.type||"UpdateExpression"===
a.left.type?d(Error(m.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):"AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type?d(Error(m.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):l(b,a.left).then(function(e){try{if(f.isBoolean(e))switch(a.operator){case "||":!0===e?c(e):l(b,a.right).then(function(b){try{if(f.isBoolean(b))c(b);else throw Error(m.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}catch(k){d(k)}},d);break;case "\x26\x26":!1===
e?c(e):l(b,a.right).then(function(b){try{if(f.isBoolean(b))c(b);else throw Error(m.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}catch(k){d(k)}},d);break;default:throw Error(m.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}else throw Error(m.nodeErrorMessage(a,"RUNTIME","ONLYBOOLEAN"));}catch(g){d(g)}},d)})}function H(b,a){return h.create(function(c,d){var e=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[e]){var f=b.localScope[e];!0===f.valueset?c(f.value):null!==f.d?f.d.then(c,
d):(f.d=l(b,f.node),f.d.then(function(a){try{f.value=a,f.valueset=!0,c(a)}catch(r){d(r)}},d))}else if(void 0!==b.globalScope[e]){var k=b.globalScope[e];!0===k.valueset?c(k.value):null!==k.d?k.d.then(c,d):(k.d=l(b,k.node),k.d.then(function(a){try{k.value=a,k.valueset=!0,c(a)}catch(r){d(r)}},d))}else d(Error(m.nodeErrorMessage(a,"RUNTIME","VARIABLENOTFOUND")))})}function Ba(b,a){try{if("Identifier"!==a.callee.type)return p(m.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==b.localScope&&
void 0!==b.localScope[a.callee.name.toLowerCase()]){var c=b.localScope[a.callee.name.toLowerCase()];return c.value instanceof f.NativeFunction?c.value.fn(b,a):c.value instanceof D?Y(b,a,c.value.definition):p(m.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"))}return void 0!==b.globalScope[a.callee.name.toLowerCase()]?(c=b.globalScope[a.callee.name.toLowerCase()],c.value instanceof f.NativeFunction?c.value.fn(b,a):c.value instanceof D?Y(b,a,c.value.definition):p(m.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"))):
p(m.nodeErrorMessage(a,"RUNTIME","NOTFOUND"))}catch(d){return p(d)}}function Z(b){return null===b?"":f.isArray(b)||f.isImmutableArray(b)?"Array":f.isDate(b)?"Date":f.isString(b)?"String":f.isBoolean(b)?"Boolean":f.isNumber(b)?"Number":b instanceof ea?"Attachment":b instanceof u?"Dictionary":b instanceof w?"Feature":b instanceof oa?"Point":b instanceof pa?"Polygon":b instanceof qa?"Polyline":b instanceof na?"Multipoint":b instanceof ma?"Extent":f.isFunctionParameter(b)?"Function":f.isFeatureSet(b)?
"FeatureSet":f.isFeatureSetCollection(b)?"FeatureSetCollection":b===f.voidOperation?"":"number"===typeof b&&isNaN(b)?"Number":"Unrecognised Type"}function aa(b,a,c,d){return h.create(function(e,g){l(b,a.arguments[c]).then(function(k){try{if(f.equalityTest(k,d))l(b,a.arguments[c+1]).then(e,g);else{var h=a.arguments.length-c;1===h?l(b,a.arguments[c]).then(e,g):(2===h&&e(null),3===h?l(b,a.arguments[c+2]).then(e,g):aa(b,a,c+2,d).then(e,g))}}catch(r){g(r)}},g)})}function ba(b,a,c,d){return h.create(function(e,
g){!0===d?l(b,a.arguments[c+1]).then(e,g):3===a.arguments.length-c?l(b,a.arguments[c+2]).then(e,g):l(b,a.arguments[c+2]).then(function(d){try{!1===f.isBoolean(d)?g(Error("WHEN needs boolean test conditions")):ba(b,a,c+2,d).then(e,g)}catch(n){g(n)}})})}function O(b,a){try{var c=b.length,d=Math.floor(c/2);return 0===c?h.resolve([]):1===c?h.resolve([b[0]]):h.create(function(e,f){var g=[O(b.slice(0,d),a),O(b.slice(d,c),a)];h.all(g).then(function(b){try{F(b[0],b[1],a,[]).then(e,f)}catch(r){f(r)}},f)})}catch(e){return p(e)}}
function F(b,a,c,d){return h.create(function(e,f){0<b.length||0<a.length?0<b.length&&0<a.length?c(b[0],a[0]).then(function(g){try{isNaN(g)&&(g=1),0>=g?(d.push(b[0]),b=b.slice(1)):(d.push(a[0]),a=a.slice(1)),F(b,a,c,d).then(e,f)}catch(n){f(n)}},f):0<b.length?(d.push(b[0]),b=b.slice(1),F(b,a,c,d).then(e,f)):0<a.length&&(d.push(a[0]),a=a.slice(1),F(b,a,c,d).then(e,f)):e(d)})}function z(b,a){var c=b.length,d=Math.floor(c/2);a||(a=function(a,b){return a<b?-1:a===b?0:1});return 0===c?[]:1===c?[b[0]]:La(z(b.slice(0,
d),a),z(b.slice(d,c),a),a)}function La(b,a,c){for(var d=[];0<b.length||0<a.length;)if(0<b.length&&0<a.length){var e=c(b[0],a[0]);isNaN(e)&&(e=1);0>=e?(d.push(b[0]),b=b.slice(1)):(d.push(a[0]),a=a.slice(1))}else 0<b.length?(d.push(b[0]),b=b.slice(1)):0<a.length&&(d.push(a[0]),a=a.slice(1));return d}function ca(b,a,c){try{var d=b.body;if(c.length!==b.params.length)return p(Error("Invalid Parameter calls to function."));for(var e=0;e<c.length;e++){var g=b.params[e];"Identifier"===g.type&&(a.localScope[g.name.toLowerCase()]=
{d:null,value:c[e],valueset:!0,node:null})}return l(a,d).then(function(a){return h.create(function(b,c){a instanceof f.ReturnResult?b(a.value):a===f.breakResult?c(Error("Cannot Break from a Function")):a===f.continueResult?c(Error("Cannot Continue from a Function")):a instanceof f.ImplicitResult?b(a.value):b(a)})})}catch(k){return h.reject(k)}}function Y(b,a,c){return A(b,a,function(a,e,f){a={spatialReference:b.spatialReference,services:b.services,console:b.console,lrucache:b.lrucache,localScope:{},
abortSignal:b.abortSignal,globalScope:b.globalScope,depthCounter:b.depthCounter+1};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return ca(c,a,f)})}function P(b){return function(){var a={abortSignal:b.context.abortSignal,spatialReference:b.context.spatialReference,console:b.context.console,lrucache:b.context.lrucache,services:b.context.services,localScope:{},globalScope:b.context.globalScope,depthCounter:b.context.depthCounter+1};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");
return ca(b.definition,a,arguments)}}function Ma(b,a){var c=new C;if(void 0===b||null===b)b={};if(void 0===a||null===a)a={};var d=new u({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});d.immutable=!1;c.textformatting={value:d,valueset:!0,node:null};for(var e in a)c[e]={value:new f.NativeFunction(a[e]),native:!0,valueset:!0,node:null};for(e in b)c[e]=b[e]&&"esri.Graphic"===b[e].declaredClass?{value:w.createFromGraphic(b[e]),valueset:!0,node:null}:{value:b[e],
valueset:!0,node:null};return c}function Na(b){console.log(b)}Object.defineProperty(t,"__esModule",{value:!0});var x=0,q={};ga.registerFunctions(q,v);la.registerFunctions(q,v);ja.registerFunctions(q,v);ia.registerFunctions(q,v);ka.registerFunctions(q,v);ha.registerFunctions({functions:q,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:v,standardFunctionAsync:A});q.typeof=function(b,a){return v(b,a,function(a,b,e){f.pcCheck(e,
1,1);a=Z(e[0]);if("Unrecognised Type"===a)throw Error("Unrecognised Type");return a})};q.iif=function(b,a){return h.create(function(c,d){f.pcCheck(null===a.arguments?[]:a.arguments,3,3);l(b,a.arguments[0]).then(function(e){try{!1===f.isBoolean(e)?d(Error("IF Function must have a boolean test condition")):h.all([l(b,a.arguments[1]),l(b,a.arguments[2])]).then(function(a){e?c(a[0]):c(a[1])},d)}catch(g){d(g)}},d)})};q.decode=function(b,a){return h.create(function(c,d){2>a.arguments.length?d(Error("Missing Parameters")):
2===a.arguments.length?l(b,a.arguments[1]).then(c,d):0===(a.arguments.length-1)%2?d(Error("Must have a default value result.")):l(b,a.arguments[0]).then(function(e){try{aa(b,a,1,e).then(c,d)}catch(g){d(g)}},d)})};q.when=function(b,a){try{return 3>a.arguments.length?p("Missing Parameters"):0===a.arguments.length%2?p("Must have a default value result."):l(b,a.arguments[0]).then(function(c){return h.create(function(d,e){!1===f.isBoolean(c)?e(Error("WHEN needs boolean test conditions")):ba(b,a,0,c).then(d,
e)})})}catch(c){return p(c)}};q.sort=function(b,a){return A(b,a,function(a,b,e){f.pcCheck(e,1,2);a=e[0];f.isImmutableArray(a)&&(a=a.toArray());if(!1===f.isArray(a))return p(Error("Illegal Argument"));if(1<e.length){if(!1===f.isFunctionParameter(e[1]))return p(Error("Illegal Argument"));var c=P(e[1]);return O(a,c)}if(0===a.length)return h.resolve([]);e={};for(b=0;b<a.length;b++){var d=Z(a[b]);""!==d&&(e[d]=!0)}if(!0===e.Array||!0===e.Dictionary||!0===e.Feature||!0===e.Point||!0===e.Polygon||!0===e.Polyline||
!0===e.Multipoint||!0===e.Extent||!0===e.Function)return h.resolve(a.slice(0));b=0;d="";for(c in e)b++,d=c;1<b||"String"===d?a=z(a,function(a,b){if(null===a||void 0===a||a===f.voidOperation)return null===b||void 0===b||b===f.voidOperation?0:1;if(null===b||void 0===b||b===f.voidOperation)return-1;a=f.toString(a);b=f.toString(b);return a<b?-1:a===b?0:1}):"Number"===d?a=z(a,function(a,b){return a-b}):"Boolean"===d?a=z(a,function(a,b){return a===b?0:b?-1:1}):"Date"===d&&(a=z(a,function(a,b){return b-
a}));return h.resolve(a)})};Q={failDefferred:p,resolveDeffered:T,fixSpatialReference:f.fixSpatialReference,parseArguments:G,standardFunction:v,standardFunctionAsync:A,evaluateIdentifier:H,arcadeCustomFunction:P};for(var da in q)q[da]={value:new f.NativeFunction(q[da]),valueset:!0,node:null};var C=function(){};C.prototype=q;C.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};C.prototype.pi={value:Math.PI,valueset:!0,node:null};t.functionHelper=Q;t.extend=function(b){for(var a=
{mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:v,standardFunctionAsync:A,failDefferred:p,evaluateIdentifier:H,arcadeCustomFunctionHandler:P},c=0;c<b.length;c++)b[c].registerFunctions(a);for(var d in a.functions)q[d]={value:new f.NativeFunction(a.functions[d]),valueset:!0,node:null},C.prototype[d]=q[d];for(c=0;c<a.signatures.length;c++)m.addFunctionDeclaration(a.signatures[c],"async")};t.executeScript=function(b,a){var c=a.spatialReference;if(null===c||void 0===c)c=new ra({wkid:102100});
var d=Ma(a.vars,a.customfunctions);return l({spatialReference:c,services:a.services,abortSignal:void 0===a.abortSignal||null===a.abortSignal?{aborted:!1}:a.abortSignal,globalScope:d,console:a.console?a.console:Na,lrucache:a.lrucache,localScope:null,depthCounter:1},b.body[0].body).then(function(a){return h.create(function(b,c){a instanceof f.ReturnResult&&(a=a.value);a instanceof f.ImplicitResult&&(a=a.value);a===f.voidOperation&&(a=null);a===f.breakResult?c(Error("Cannot return BREAK")):a===f.continueResult?
c(Error("Cannot return CONTINUE")):a instanceof f.NativeFunction?c(Error("Cannot return FUNCTION")):a instanceof D?c(Error("Cannot return FUNCTION")):b(a)})})};t.extractFieldLiterals=function(b,a){void 0===a&&(a=!1);return m.findFieldLiterals(b,a)};t.validateScript=function(b,a){return m.validateScript(b,a,"full")};t.referencesMember=function(b,a){return m.referencesMember(b,a)};t.referencesFunction=function(b,a){return m.referencesFunction(b,a)};t.findFunctionCalls=function(b){return m.findFunctionCalls(b,
!1)}});