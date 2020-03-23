// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(E,h){function r(a,c,b,d){return"0"!==a.min&&b.length<Number(a.min)||"*"!==a.max&&b.length>Number(a.max)?-2:1}function v(a,c,b){if(null!==b.localScope&&void 0!==b.localScope[a.toLowerCase()]){var d=b.localScope[a.toLowerCase()];if("FormulaFunction"===d.type||"any"===d.type)return void 0===d.signature&&(d.signature={min:"0",max:"*"}),r(d.signature,a,c,b)}return void 0!==b.globalScope[a.toLowerCase()]&&(d=b.globalScope[a.toLowerCase()],"FormulaFunction"===d.type||
"any"===d.type)?(void 0===d.signature&&(d.signature={min:"0",max:"*"}),r(d.signature,a,c,b)):-1}function q(a,c){if(a)for(var b=0;b<a.length;b++)e(a[b],c)}function e(a,c){if(a&&!1!==c(a))switch(a.type){case "ArrayExpression":q(a.elements,c);break;case "AssignmentExpression":case "BinaryExpression":e(a.left,c);e(a.right,c);break;case "BlockStatement":q(a.body,c);break;case "CallExpression":e(a.callee,c);q(a.arguments,c);break;case "ConditionalExpression":e(a.test,c);e(a.alternate,c);e(a.consequent,
c);break;case "DoWhileStatement":e(a.test,c);e(a.body,c);break;case "ExpressionStatement":e(a.expression,c);break;case "ForInStatement":e(a.left,c);e(a.right,c);e(a.body,c);break;case "ForStatement":e(a.init,c);e(a.test,c);e(a.update,c);e(a.body,c);break;case "FunctionDeclaration":case "FunctionDeclaration":case "FunctionExpression":e(a.id,c);q(a.params,c);e(a.body,c);break;case "IfStatement":e(a.test,c);e(a.consequent,c);e(a.alternate,c);break;case "LogicalExpression":e(a.left,c);e(a.right,c);break;
case "MemberExpression":e(a.object,c);e(a.property,c);break;case "NewExpression":e(a.callee,c);q(a.arguments,c);break;case "ObjectExpression":q(a.properties,c);break;case "Program":q(a.body,c);break;case "Property":e(a.key,c);e(a.value,c);break;case "ReturnStatement":e(a.argument,c);break;case "UnaryExpression":e(a.argument,c);break;case "UpdateExpression":e(a.argument,c);break;case "VariableDeclaration":q(a.declarations,c);break;case "VariableDeclarator":e(a.id,c),e(a.init,c)}}function k(a,c){void 0===
c&&(c=!0);var b=l(a,"SYNTAX","UNREOGNISED");try{switch(a.type){case "VariableDeclarator":return null!==a.init&&"FunctionExpression"===a.init.type?l(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==a.id.type?l(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==a.init?k(a.init,!1):"";case "VariableDeclaration":for(var d=0;d<a.declarations.length;d++)if(b=k(a.declarations[d],c),""!==b)return b;return"";case "ForInStatement":b=k(a.left,c);if(""!==b)break;if("VariableDeclaration"===a.left.type){if(1<
a.left.declarations.length)return l(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return l(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return l(a,"SYNTAX","LEFTNOTVAR");b=k(a.right,c);if(""!==b)break;b=k(a.body,c);if(""!==b)break;return"";case "ForStatement":if(null!==a.test&&(b=k(a.test,c),""!==b))break;if(null!==a.init&&(b=k(a.init,c),""!==b))break;if(null!==a.update&&(b=k(a.update,c),""!==b))break;if(null!==a.body&&(b=k(a.body,c),""!==b))break;return"";case "ContinueStatement":return"";
case "EmptyStatement":return"";case "BreakStatement":return"";case "IfStatement":b=k(a.test,c);if(""!==b)break;if(null!==a.consequent&&(b=k(a.consequent,!1),""!==b))break;if(null!==a.alternate&&(b=k(a.alternate,!1),""!==b))break;return"";case "BlockStatement":for(var f=[],d=0;d<a.body.length;d++)"EmptyStatement"!==a.body[d].type&&f.push(a.body[d]);a.body=f;for(d=0;d<a.body.length;d++)if(b=k(a.body[d],c),""!==b)return b;return"";case "FunctionDeclaration":return!1===c?l(a,"SYNTAX","GLOBALFUNCTIONSONLY"):
"Identifier"!==a.id.type?l(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):k(a.body,!1);case "ReturnStatement":return null!==a.argument?k(a.argument,c):"";case "UpdateExpression":return"Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type?l(a,"SYNTAX","ASSIGNMENTTOVARSONLY"):k(a.argument,c);case "AssignmentExpression":if("Identifier"!==a.left.type&&"MemberExpression"!==a.left.type)return l(a,"SYNTAX","ASSIGNMENTTOVARSONLY");b=k(a.left,c);if(""!==b)break;switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;
default:return l(a,"SYNTAX","OPERATORNOTRECOGNISED")}return k(a.right,!1);case "ExpressionStatement":return k(a.expression,!1);case "Identifier":b="";break;case "MemberExpression":b=k(a.object,c);if(""!==b)break;return!0===a.computed?k(a.property,c):"";case "Literal":return"";case "CallExpression":if("Identifier"!==a.callee.type)return l(a,"SYNTAX","ONLYNODESSUPPORTED");b="";for(d=0;d<a.arguments.length;d++)if(b=k(a.arguments[d],c),""!==b)return b;return"";case "UnaryExpression":b=k(a.argument,c);
break;case "BinaryExpression":b=k(a.left,c);if(""!==b)break;b=k(a.right,c);if(""!==b)break;switch(a.operator){case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;default:return l(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "LogicalExpression":b=k(a.left,c);if(""!==b)break;b=k(a.right);if(""!==b)break;switch(a.operator){case "\x26\x26":case "||":break;default:return l(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";
case "ConditionalExpression":return l(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(d=0;d<a.elements.length&&(b=k(a.elements[d],c),""===b);d++);break;case "ObjectExpression":b="";for(d=0;d<a.properties.length;d++){b="";if(null!==a.properties[d].key&&("Literal"!==a.properties[d].key.type&&"Identifier"!==a.properties[d].key.type&&(b=l(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===a.properties[d].key.type)){var f=a.properties[d].key,e="value"in f?f.value:null;"string"===typeof e||
e instanceof String||(b=l(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}""===b&&(b=k(a.properties[d],c));if(""!==b)break}break;case "Property":if("Literal"!==a.key.type&&"Identifier"!==a.key.type)return l(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&(b=k(a.key,c),""!==b))break;b=k(a.value,c)}return b}catch(g){throw g;}}function n(a,c){var b=l(a,"SYNTAX","UNREOGNISED"),d=null,f="";try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type)return l(a,"SYNTAX",
"FUNCTIONVARIABLEDECLARATOR");var e=null===a.init?"":n(a.init,c);if(""!==e)return e;"Identifier"===a.id.type&&(null===c.localScope?c.globalScope[a.id.name.toLowerCase()]={type:"any"}:c.localScope[a.id.name.toLowerCase()]={type:"any"});return"";case "FunctionDeclaration":d=w(a.id.name.toLowerCase(),a,c);f=y(a,c);if(""!==f)return f;if(null!==c.localScope)return l(a,"SYNTAX","GLOBALFUNCTIONSONLY");d.isnative=!1;c.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[d]};return"";case "VariableDeclaration":for(var b=
"",g=0;g<a.declarations.length&&(b=n(a.declarations[g],c),""===b);g++);break;case "IfStatement":b=n(a.test,c);if(""!==b)break;if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)return l(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");if(null!==a.consequent&&(b=n(a.consequent,c),""!==b))break;if(null!==a.alternate&&(b=n(a.alternate,c),""!==b))break;return"";case "EmptyStatement":return"";case "BlockStatement":for(g=0;g<a.body.length;g++)if(b=n(a.body[g],c),""!==b)return b;
return"";case "ReturnStatement":return null!==a.argument?n(a.argument,c):"";case "ForInStatement":if("VariableDeclaration"===a.left.type){if(1<a.left.declarations.length)return l(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return l(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return l(a,"SYNTAX","LEFTNOTVAR");b=n(a.left,c);if(""!==b)break;b=n(a.right,c);if(""!==b)break;b=n(a.body,c);if(""!==b)break;return"";case "ForStatement":if(null!==a.init&&(b=n(a.init,c),
""!==b))break;if(null!==a.test&&(b=n(a.test,c),""!==b))break;if(null!==a.body&&(b=n(a.body,c),""!==b))break;if(null!==a.update&&(b=n(a.update,c),""!==b))break;return"";case "BreakStatement":return"";case "ContinueStatement":return"";case "UpdateExpression":if("Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type)return l(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var h=!1;if("MemberExpression"===a.argument.type)return n(a.argument,c);null!==c.localScope&&void 0!==c.localScope[a.argument.name.toLowerCase()]&&
(h=!0);void 0!==c.globalScope[a.argument.name.toLowerCase()]&&(h=!0);return!1===h?"Identifier "+a.argument.name+" has not been declared.":"";case "AssignmentExpression":if("Identifier"!==a.left.type&&"MemberExpression"!==a.left.type)return l(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var k=n(a.right,c);if(""!==k)return k;h=!1;if("MemberExpression"===a.left.type)return k=n(a.left,c),""!==k?k:"";null!==c.localScope&&void 0!==c.localScope[a.left.name.toLowerCase()]&&(h=!0);void 0!==c.globalScope[a.left.name.toLowerCase()]&&
(h=!0);return!1===h?"Identifier "+a.left.name+" has not been declared.":"";case "ExpressionStatement":return n(a.expression,c);case "Identifier":var m=a.name.toLowerCase();if(null!==c.localScope&&void 0!==c.localScope[m])return"";b=void 0!==c.globalScope[m]?"":l(a,"SYNTAX","VARIABLENOTFOUND");break;case "MemberExpression":b=n(a.object,c);if(""!==b)break;return!0===a.computed?n(a.property,c):"";case "Literal":return"";case "CallExpression":if("Identifier"!==a.callee.type)return l(a,"SYNTAX","ONLYNODESSUPPORTED");
b="";for(g=0;g<a.arguments.length;g++)if(b=n(a.arguments[g],c),""!==b)return b;var p=v(a.callee.name,a.arguments,c);-1===p&&(b=l(a,"SYNTAX","NOTFOUND"));-2===p&&(b=l(a,"SYNTAX","WRONGSIGNATURE"));break;case "UnaryExpression":b=n(a.argument,c);break;case "BinaryExpression":b=n(a.left,c);if(""!==b)break;b=n(a.right,c);if(""!==b)break;return"";case "LogicalExpression":b=n(a.left,c);if(""!==b)break;if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)return l(a.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");
b=n(a.right,c);if(""!==b)break;return"AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type?l(a.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"";case "ConditionalExpression":return l(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(g=0;g<a.elements.length&&(b=n(a.elements[g],c),""===b);g++);break;case "ObjectExpression":b="";for(g=0;g<a.properties.length;g++){b="";if(null!==a.properties[g].key&&("Literal"!==a.properties[g].key.type&&"Identifier"!==a.properties[g].key.type&&
(b=l(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===a.properties[g].key.type)){var q=a.properties[g].key,r="value"in q?q.value:null;"string"===typeof r||r instanceof String||(b=l(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}""===b&&(b=n(a.properties[g],c));if(""!==b)break}break;case "Property":if("Literal"!==a.key.type&&"Identifier"!==a.key.type)return l(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&(b=n(a.key,c),""!==b))break;b=n(a.value,c)}return b}catch(C){throw C;}}function z(a,
c){var b=!1,d=c.toLowerCase();e(a,function(a){if(b)return!1;"Identifier"===a.type&&a.name&&a.name.toLowerCase()===d&&(b=!0);return!0});return b}function w(a,c,b){b=[];if(void 0!==c.params&&null!==c.params)for(var d=0;d<c.params.length;d++)b.push("any");return{name:a,return:"any",params:b}}function y(a,c){c={globalScope:c.globalScope,localScope:{}};for(var b=0;b<a.params.length;b++)c.localScope[a.params[b].name.toLowerCase()]={type:"any"};return n(a.body,c)}function x(a,c,b,d){var f={};if(void 0===
a||null===a)a={};if(void 0===b||null===b)b={};f.infinity={type:"any"};f.textformatting={type:"any"};f.pi={type:"any"};for(var e in c)"sync"===d&&void 0!==c[e].min?f[e]={type:"FormulaFunction",signature:{min:c[e].min,max:c[e].max}}:"sync"!==d&&void 0!==c[e].fmin&&(f[e]={type:"FormulaFunction",signature:{min:c[e].fmin,max:c[e].fmax}});for(c=0;c<b.length;c++)e=b[c],f[e.name]={type:"FormulaFunction",signature:e};for(e in a)f[e]=a[e],f[e].type="any";return f}function l(a,c,b){var d="";switch(c){case "SYNTAX":d=
"Syntax Error: ";break;case "RUNTIME":d="Runtime Error: ";break;default:d="Syntax Error: "}try{switch(a.type){case "IfStatement":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":d+=" Assignments not be made in logical tests";break;case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":d+=" Non Boolean used as Condition"}break;case "UpdateExpression":case "AssignmentExpression":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":d+=" Assignments not be made in logical tests";break;case "ASSIGNMENTTOVARSONLY":d+=
" Assignments can only be made to identifiers"}break;case "ExpressionStatement":d+=" Assignments can only be made to identifiers";break;case "FunctionDeclaration":switch(b){case "GLOBALFUNCTIONSONLY":d+=" Functions cannot be declared as variables";break;case "FUNCTIONMUSTHAVEIDENTIFIER":d+=" Function Definition must have an identifier"}break;case "VariableDeclaration":d+=" Only 1 variable can be declared at a time";break;case "VariableDeclarator":switch(b){case "FUNCTIONVARIABLEDECLARATOR":d+=" Functions cannot be declared as variables";
break;case "VARIABLEMUSTHAVEIDENTIFIER":d+=" Variable Definition must have an identifier"}break;case "Identifier":d+=" Identifier Not Found. ";d+=a.name;break;case "ObjectExpression":switch(b){case "OBJECTPROPERTYMUSTBESTRING":d+=" Property name must be a string"}break;case "ForStatement":switch(b){case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":d+=" Non Boolean used as Condition"}break;case "ForInStatement":switch(b){case "ONLY1VAR":d+=" Can only declare 1 var for use with IN";break;case "CANNOTDECLAREVAL":d+=
" Can only declare value for use with IN";break;case "LEFTNOVAR":d+="Must provide a variable to iterate with.";break;case "VARIABLENOTDECLARED":d+="Variable must be declared before it is used..";break;case "CANNOTITERATETHISTYPE":d+="This type cannot be used in an IN loop"}break;case "MemberExpression":switch(b){case "PROPERTYNOTFOUND":d+="Cannot find member property. ";d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":"";break;case "OUTOFBOUNDS":d+="Out of Bounds. ";d+=!1===a.computed?
"Identifier"===a.property.type?a.property.name:"":"";break;case "NOTFOUND":d+="Cannot call member method on null. ";d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":"";break;case "INVALIDTYPE":d+="Cannot call member property on object of this type. ",d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":""}break;case "Property":switch(b){case "ONLYLITERAL":d+="Property names must be literals or identifiers"}break;case "Literal":break;case "CallExpression":switch(b){case "WRONGSIGNATURE":d+=
"Function signature does not match: ";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "ONLYNODESUPPORTED":d+="Functions must be declared.";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "NOTAFUNCTION":d+="Not a Function: ";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "NOTFOUND":d+="Function Not Found: "+("Identifier"===a.callee.type?a.callee.name:"")}break;case "UnaryExpression":switch(b){case "NOTSUPPORTEDUNARYOPERATOR":d+="Operator "+a.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";
break;case "NOTSUPPORTEDTYPE":d+="Unary operator "+a.operator+" cannot be used with this argument."}case "BinaryExpression":switch(b){case "OPERATORNOTRECOGNISED":d+="Binary Operator not recognised "+a.operator}break;case "LogicalExpression":switch(b){case "ONLYBOOLEAN":d+="Operator "+a.operator+" cannot be used. Only || or \x26\x26 are allowed values";break;case "ONLYORORAND":d+="Logical Expression "+a.operator+" being applied to parameters that are not boolean."}break;case "ConditionalExpression":d+=
"Conditional statements not supported.";break;case "ArrayExpression":switch(b){case "FUNCTIONCONTEXTILLEGAL":d+=" Cannot Put Function inside Array."}break;default:d+="Expression contains unrecognised code structures."}}catch(f){throw f;}return d}function p(a,c,b){return{line:a.loc.start.line,character:a.loc.start.column,reason:l(a,c,b)}}function A(a,c,b,d,f){void 0===f&&(f=!0);c={globalScope:c.globalScope,localScope:{}};for(f=0;f<a.params.length;f++)c.localScope[a.params[f].name.toLowerCase()]={type:"any"};
m(a.body,c,b,d,!1)}function m(a,c,b,d,f){void 0===f&&(f=!0);if(null===a)throw Error("Unnexpexted Expression Syntax");var e=null;try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type){d.push(p(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"));break}"Identifier"!==a.id.type?d.push(p(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(a.id.name.toLowerCase(),null===c.localScope?c.globalScope[a.id.name.toLowerCase()]={type:"any"}:c.localScope[a.id.name.toLowerCase()]={type:"any"});
null!==a.init&&m(a.init,c,b,d,f);break;case "FunctionDeclaration":!1===f&&d.push(p(a,"SYNTAX","GLOBALFUNCTIONSONLY"));"Identifier"!==a.id.type&&d.push(p(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"));e=w("",a,c);A(a,c,b,d,f);null!==c.localScope&&d.push(p(a,"SYNTAX","GLOBALFUNCTIONSONLY"));e.isnative=!1;"Identifier"===a.id.type&&(c.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[e]});break;case "VariableDeclaration":for(var g=0;g<a.declarations.length;g++)m(a.declarations[g],c,b,
d,f);break;case "IfStatement":null!==a.test&&(m(a.test,c,b,d,f),"AssignmentExpression"!==a.test.type&&"UpdateExpression"!==a.test.type||d.push(p(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));null!==a.consequent&&m(a.consequent,c,b,d,f);null!==a.alternate&&m(a.alternate,c,b,d,f);break;case "EmptyStatement":break;case "BlockStatement":if(null!==a.body)for(g=0;g<a.body.length;g++)m(a.body[g],c,b,d,f);break;case "ReturnStatement":null!==a.argument&&m(a.argument,c,b,d,f);break;case "ForInStatement":"VariableDeclaration"===
a.left.type?(1<a.left.declarations.length&&d.push(p(a,"SYNTAX","ONLY1VAR")),null!==a.left.declarations[0].init&&d.push(p(a,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==a.left.type&&d.push(p(a,"SYNTAX","LEFTNOTVAR"));m(a.left,c,b,d,f);m(a.right,c,b,d,f);m(a.body,c,b,d,f);break;case "ForStatement":null!==a.init&&m(a.init,c,b,d,f);null!==a.test&&m(a.test,c,b,d,f);null!==a.body&&m(a.body,c,b,d,f);null!==a.update&&m(a.update,c,b,d,f);break;case "BreakStatement":break;case "ContinueStatement":break;case "UpdateExpression":"Identifier"!==
a.argument.type&&"MemberExpression"!==a.argument.type?d.push(p(a,"SYNTAX","ASSIGNMENTTOVARSONLY")):("Identifier"===a.argument.type&&(e=!1,!1===b&&(null!==c.localScope&&void 0!==c.localScope[a.argument.name.toLowerCase()]&&(e=!0),void 0!==c.globalScope[a.argument.name.toLowerCase()]&&(e=!0),!1===e&&d.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."}))),"MemberExpression"===a.argument.type&&m(a.argument,c,b,
d,f));break;case "AssignmentExpression":"Identifier"!==a.left.type&&"MemberExpression"!==a.left.type&&d.push(p(a,"SYNTAX","ASSIGNMENTTOVARSONLY"));switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}m(a.right,c,b,d,f);e=!1;"Identifier"===a.left.type&&(null!==c.localScope&&void 0!==c.localScope[a.left.name.toLowerCase()]&&(e=!0),void 0!==c.globalScope[a.left.name.toLowerCase()]&&(e=!0),!1===b&&!1===
e&&d.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.left.name+" has not been declared."}));"MemberExpression"===a.left.type&&m(a.left,c,b,d,f);break;case "ExpressionStatement":m(a.expression,c,b,d,f);break;case "Identifier":var h=a.name.toLowerCase();if(null!==c.localScope&&void 0!==c.localScope[h])break;if(void 0!==c.globalScope[h])break;!1===b&&d.push(p(a,"SYNTAX","VARIABLENOTFOUND"));break;case "MemberExpression":m(a.object,c,b,d,f);!0===a.computed&&
m(a.property,c,b,d,f);break;case "Literal":return"";case "CallExpression":"Identifier"!==a.callee.type&&d.push(p(a,"SYNTAX","ONLYNODESSUPPORTED"));for(g=0;g<a.arguments.length;g++)m(a.arguments[g],c,b,d,f);if("Identifier"===a.callee.type){var k=v(a.callee.name,a.arguments,c);!1===b&&-1===k&&d.push(p(a,"SYNTAX","NOTFOUND"));-2===k&&d.push(p(a,"SYNTAX","WRONGSIGNATURE"))}break;case "UnaryExpression":m(a.argument,c,b,d,f);break;case "BinaryExpression":m(a.left,c,b,d,f);m(a.right,c,b,d,f);switch(a.operator){case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;
default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}break;case "LogicalExpression":switch(a.operator){case "\x26\x26":case "||":break;default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}m(a.left,c,b,d,f);"AssignmentExpression"!==a.left.type&&"UpdateExpression"!==a.left.type||d.push(p(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));m(a.right,c,b,d,f);"AssignmentExpression"!==a.right.type&&"UpdateExpression"!==a.right.type||d.push(p(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));break;case "ConditionalExpression":d.push(p(a,
"SYNTAX","NOTSUPPORTED"));break;case "ArrayExpression":for(g=0;g<a.elements.length;g++)m(a.elements[g],c,b,d,f);break;case "ObjectExpression":for(g=0;g<a.properties.length;g++)m(a.properties[g],c,b,d,f);break;case "Property":"Literal"!==a.key.type&&"Identifier"!==a.key.type&&d.push(p(a,"SYNTAX","ONLYLITERAL"));"Literal"===a.key.type&&m(a.key,c,b,d,f);m(a.value,c,b,d,f);break;default:d.push(p(a,"SYNTAX","UNRECOGNISED"))}}catch(F){d.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,
reason:"Unnexpected Syntax"})}}function t(a,c){var b=[];e(a,function(a){"CallExpression"===a.type&&"Identifier"===a.callee.type&&b.push(a.callee.name.toLowerCase());return!0});return b}Object.defineProperty(h,"__esModule",{value:!0});h.functionDecls={concatenate:{min:"0",max:"*"},split:{min:"2",max:"4"},guid:{min:"0",max:"1"},today:{min:"0",max:"0"},angle:{min:"2",max:"3"},bearing:{min:"2",max:"3"},urlencode:{min:"1",max:"1"},now:{min:"0",max:"0"},timestamp:{min:"0",max:"0"},day:{min:"1",max:"1"},
month:{min:"1",max:"1"},year:{min:"1",max:"1"},hour:{min:"1",max:"1"},second:{min:"1",max:"1"},millisecond:{min:"1",max:"1"},minute:{min:"1",max:"1"},weekday:{min:"1",max:"1"},toutc:{min:"1",max:"1"},tolocal:{min:"1",max:"1"},date:{min:"0",max:"7"},datediff:{min:"2",max:"3"},dateadd:{min:"2",max:"3"},trim:{min:"1",max:"1"},text:{min:"1",max:"2"},left:{min:"2",max:"2"},right:{min:"2",max:"2"},mid:{min:"2",max:"3"},upper:{min:"1",max:"1"},proper:{min:"1",max:"2"},lower:{min:"1",max:"1"},find:{min:"2",
max:"3"},iif:{min:"3",max:"3"},decode:{min:"2",max:"*"},when:{min:"2",max:"*"},defaultvalue:{min:"2",max:"2"},isempty:{min:"1",max:"1"},domaincode:{min:"2",max:"4"},domainname:{min:"2",max:"4"},polygon:{min:"1",max:"1"},point:{min:"1",max:"1"},polyline:{min:"1",max:"1"},extent:{min:"1",max:"1"},multipoint:{min:"1",max:"1"},ringisclockwise:{min:"1",max:"1"},geometry:{min:"1",max:"1"},count:{min:"0",max:"*"},number:{min:"1",max:"2"},acos:{min:"1",max:"1"},asin:{min:"1",max:"1"},atan:{min:"1",max:"1"},
atan2:{min:"2",max:"2"},ceil:{min:"1",max:"2"},floor:{min:"1",max:"2"},round:{min:"1",max:"2"},cos:{min:"1",max:"1"},exp:{min:"1",max:"1"},log:{min:"1",max:"1"},min:{min:"0",max:"*"},constrain:{min:"3",max:"3"},console:{min:"0",max:"*"},max:{min:"0",max:"*"},pow:{min:"2",max:"2"},random:{min:"0",max:"0"},sqrt:{min:"1",max:"1"},sin:{min:"1",max:"1"},tan:{min:"1",max:"1"},abs:{min:"1",max:"1"},isnan:{min:"1",max:"1"},stdev:{min:"0",max:"*"},average:{min:"0",max:"*"},mean:{min:"0",max:"*"},sum:{min:"0",
max:"*"},variance:{min:"0",max:"*"},distinct:{min:"0",max:"*"},first:{min:"1",max:"1"},top:{min:"2",max:"2"},boolean:{min:"1",max:"1"},dictionary:{min:"0",max:"*"},typeof:{min:"1",max:"1"},reverse:{min:"1",max:"1"},replace:{min:"3",max:"4"},sort:{min:"1",max:"2"},feature:{min:"1",max:"*"},haskey:{min:"2",max:"2"},indexof:{min:"2",max:"2"},disjoint:{min:"2",max:"2"},intersects:{min:"2",max:"2"},touches:{min:"2",max:"2"},crosses:{min:"2",max:"2"},within:{min:"2",max:"2"},contains:{min:"2",max:"2"},
overlaps:{min:"2",max:"2"},equals:{min:"2",max:"2"},relate:{min:"3",max:"3"},intersection:{min:"2",max:"2"},union:{min:"1",max:"2"},difference:{min:"2",max:"2"},symmetricdifference:{min:"2",max:"2"},clip:{min:"2",max:"2"},cut:{min:"2",max:"2"},area:{min:"1",max:"2"},areageodetic:{min:"1",max:"2"},length:{min:"1",max:"2"},lengthgeodetic:{min:"1",max:"2"},distance:{min:"2",max:"3"},densify:{min:"2",max:"3"},densifygeodetic:{min:"2",max:"3"},generalize:{min:"2",max:"4"},buffer:{min:"2",max:"3"},buffergeodetic:{min:"2",
max:"3"},offset:{min:"2",max:"6"},rotate:{min:"2",max:"3"},issimple:{min:"1",max:"1"},simplify:{min:"1",max:"1"},centroid:{min:"1",max:"1"},multiparttosinglepart:{min:"1",max:"1"},setgeometry:{min:"2",max:"2"}};for(var u in h.functionDecls)h.functionDecls[u].fmin=h.functionDecls[u].min,h.functionDecls[u].fmax=h.functionDecls[u].max;var B="featureset featuresetbyid featuresetbyname featuresetbyurl attachments featuresetbyportalitem".split(" "),D="disjoint intersects touches crosses within contains overlaps equals relate intersection union difference symmetricdifference clip cut area areageodetic length lengthgeodetic distance densify densifygeodetic generalize buffer buffergeodetic offset rotate issimple simplify multiparttosinglepart".split(" ");
h.addFunctionDeclaration=function(a,c){var b=h.functionDecls[a.name.toLowerCase()];void 0===b?"sync"===c?h.functionDecls[a.name.toLowerCase()]={min:a.min,max:a.max}:h.functionDecls[a.name.toLowerCase()]={fmin:a.min,fmax:a.max}:"sync"===c?(b.min=a.min,b.max=a.max):(b.fmin=a.min,b.fmax=a.max)};h.checkFunctionSignature=r;h.findFunction=v;h.walk=e;h.validateLanguageNode=k;h.testValidityOfExpression=n;h.referencesMember=z;h.referencesFunction=function(a,c){var b=!1,d=c.toLowerCase();e(a,function(a){return b?
!1:"CallExpression"===a.type&&"Identifier"===a.callee.type&&a.callee.name&&a.callee.name.toLowerCase()===d?(b=!0,!1):!0});return b};h.findFieldLiterals=function(a,c){var b=[];e(a,function(a){if("MemberExpression"!==a.type||"Identifier"!==a.object.type)return!0;!1===a.computed&&a.object&&a.object.name&&a.property&&"Identifier"===a.property.type&&a.property.name?b.push(a.object.name.toLowerCase()+"."+a.property.name.toLowerCase()):a.object&&a.object.name&&a.property&&"Literal"===a.property.type&&"string"===
typeof a.property.value&&b.push(a.object.name.toLowerCase()+"."+a.property.value.toString().toLowerCase());return!1});return b};h.extractFunctionDeclaration=w;h.validateFunction=y;h.constructGlobalScope=x;h.validateScript=function(a,c,b,d){void 0===b&&(b="async");void 0===d&&(d=h.functionDecls);c={globalScope:x(c.vars,d,c.customFunctions,b),localScope:null};return n(a.body[0].body,c)};h.validateLanguage=function(a){return"BlockStatement"!==a.body[0].body.type?"Invalid formula content.":k(a.body[0].body)};
h.nodeErrorMessage=l;h.makeError=p;h.extractAllIssuesInFunction=A;h.extractAllIssues=m;h.checkScript=function(a,c,b,d,e){void 0===d&&(d="async");void 0===e&&(e=h.functionDecls);var f=[];if("BlockStatement"!==a.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];if(null===c||void 0===c)c={vars:{},customFunctions:[]};c={globalScope:x(c.vars,e,c.customFunctions,d),localScope:null};try{m(a.body[0].body,c,b,f)}catch(g){}return f};h.findFunctionCalls=t;h.findScriptDependencies=function(a,
c){void 0===c&&(c=[]);var b=null;if(void 0===a.usesFeatureSet){null===b&&(b=t(a,!1));a.usesFeatureSet=!1;for(var d=0;d<b.length;d++)-1<B.indexOf(b[d])&&(a.usesFeatureSet=!0,a.isAsync=!0);if(!1===a.usesFeatureSet&&c&&0<c.length)for(d=0;d<c.length;d++)if(z(a,c[d])){a.usesFeatureSet=!0;a.isAsync=!0;break}}void 0===a.isAsync&&(a.isAsync=!1);if(void 0===a.usesGeometry)for(a.usesGeometry=!1,null===b&&(b=t(a,!1)),d=0;d<b.length;d++)-1<D.indexOf(b[d])&&(a.usesGeometry=!0)};h.scriptUsesFeatureSet=function(a){a=
t(a,!1);for(var c=0;c<a.length;c++)if(-1<B.indexOf(a[c]))return!0;return!1}});