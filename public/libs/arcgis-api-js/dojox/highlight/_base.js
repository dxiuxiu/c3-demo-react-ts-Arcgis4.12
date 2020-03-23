//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/dom","dojo/dom-class"],function(l,e,t,u){function g(a){return a.replace(/&/gm,"\x26amp;").replace(/</gm,"\x26lt;").replace(/>/gm,"\x26gt;")}function v(a){return e.every(a.childNodes,function(a){return 3==a.nodeType||"br"==String(a.nodeName).toLowerCase()})}function m(a){var b=[];e.forEach(a.childNodes,function(a){if(3==a.nodeType)b.push(a.nodeValue);else if("br"==String(a.nodeName).toLowerCase())b.push("\n");else throw"Complex markup";});return b.join("")}
function n(a){if(!a.keywordGroups)for(var b in a.keywords){a.keywordGroups=a.keywords[b]instanceof Object?a.keywords:{keyword:a.keywords};break}}function p(a,b,c){if("code"==String(a.tagName).toLowerCase()&&"pre"==String(a.parentNode.tagName).toLowerCase()){var d=document.createElement("div"),h=a.parentNode.parentNode;d.innerHTML='\x3cpre\x3e\x3ccode class\x3d"'+b+'"\x3e'+c+"\x3c/code\x3e\x3c/pre\x3e";h.replaceChild(d.firstChild,a.parentNode)}else a.className=b,a.innerHTML=c}function q(a,b){b=new k(a,
b);return{result:b.result,langName:a,partialResult:b.partialResult}}function r(a){var b="",c="",d;for(d in f.languages)if(f.languages[d].defaultMode){var h=new k(d,a),e=h.keywordCount+h.relevance,g=0;if(!b||e>g)g=e,b=h.result,c=h.langName}return{result:b,langName:c}}function w(a){var b=r(m(a));b.result&&p(a,b.langName,b.result)}var f=l.getObject("dojox.highlight",!0);f.languages=f.languages||{};f.constants={IDENT_RE:"[a-zA-Z][a-zA-Z0-9_]*",UNDERSCORE_IDENT_RE:"[a-zA-Z_][a-zA-Z0-9_]*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",
C_NUMBER_RE:"\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)",APOS_STRING_MODE:{className:"string",begin:"'",end:"'",illegal:"\\n",contains:["escape"],relevance:0},QUOTE_STRING_MODE:{className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape"],relevance:0},BACKSLASH_ESCAPE:{className:"escape",begin:"\\\\.",end:"^",relevance:0},C_LINE_COMMENT_MODE:{className:"comment",begin:"//",end:"$",relevance:0},C_BLOCK_COMMENT_MODE:{className:"comment",begin:"/\\*",end:"\\*/"},HASH_COMMENT_MODE:{className:"comment",
begin:"#",end:"$"},C_NUMBER_MODE:{className:"number",begin:"\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)",end:"^",relevance:0}};var k=function(a,b){this.langName=a;this.lang=f.languages[a];this.modes=[this.lang.defaultMode];this.keywordCount=this.relevance=0;this.result=[];this.lang.defaultMode.illegalRe||(this.buildRes(),a=this.lang,a.defaultMode&&a.modes&&(n(a.defaultMode),e.forEach(a.modes,n)));try{this.highlight(b),this.result=this.result.join("")}catch(c){if("Illegal"==c)this.keywordCount=this.relevance=
0,this.partialResult=this.result.join(""),this.result=g(b);else throw c;}};l.extend(k,{buildRes:function(){e.forEach(this.lang.modes,function(a){a.begin&&(a.beginRe=this.langRe("^"+a.begin));a.end&&(a.endRe=this.langRe("^"+a.end));a.illegal&&(a.illegalRe=this.langRe("^(?:"+a.illegal+")"))},this);this.lang.defaultMode.illegalRe=this.langRe("^(?:"+this.lang.defaultMode.illegal+")")},subMode:function(a){var b=this.modes[this.modes.length-1].contains;if(b)for(var c=this.lang.modes,d=0;d<b.length;++d)for(var h=
b[d],e=0;e<c.length;++e){var f=c[e];if(f.className==h&&f.beginRe.test(a))return f}return null},endOfMode:function(a){for(var b=this.modes.length-1;0<=b;--b){var c=this.modes[b];if(c.end&&c.endRe.test(a))return this.modes.length-b;if(!c.endsWithParent)break}return 0},isIllegal:function(a){var b=this.modes[this.modes.length-1].illegalRe;return b&&b.test(a)},langRe:function(a,b){return new RegExp(a,"m"+(this.lang.case_insensitive?"i":"")+(b?"g":""))},buildTerminators:function(){var a=this.modes[this.modes.length-
1],b={};a.contains&&e.forEach(this.lang.modes,function(c){0<=e.indexOf(a.contains,c.className)&&(b[c.begin]=1)});for(var c=this.modes.length-1;0<=c;--c){var d=this.modes[c];d.end&&(b[d.end]=1);if(!d.endsWithParent)break}a.illegal&&(b[a.illegal]=1);d=[];for(c in b)d.push(c);a.terminatorsRe=this.langRe("("+d.join("|")+")")},eatModeChunk:function(a,b){var c=this.modes[this.modes.length-1];c.terminatorsRe||this.buildTerminators();a=a.substr(b);return(b=c.terminatorsRe.exec(a))?{buffer:b.index?a.substr(0,
b.index):"",lexeme:b[0],end:!1}:{buffer:a,lexeme:"",end:!0}},keywordMatch:function(a,b){b=b[0];this.lang.case_insensitive&&(b=b.toLowerCase());for(var c in a.keywordGroups)if(b in a.keywordGroups[c])return c;return""},buildLexemes:function(a){var b={};e.forEach(a.lexems,function(a){b[a]=1});var c=[],d;for(d in b)c.push(d);a.lexemsRe=this.langRe("("+c.join("|")+")",!0)},processKeywords:function(a){var b=this.modes[this.modes.length-1];if(!b.keywords||!b.lexems)return g(a);b.lexemsRe||this.buildLexemes(b);
b.lexemsRe.lastIndex=0;for(var c=[],d=0,e=b.lexemsRe.exec(a);e;)c.push(g(a.substr(d,e.index-d))),(d=this.keywordMatch(b,e))?(++this.keywordCount,c.push('\x3cspan class\x3d"'+d+'"\x3e'+g(e[0])+"\x3c/span\x3e")):c.push(g(e[0])),d=b.lexemsRe.lastIndex,e=b.lexemsRe.exec(a);c.push(g(a.substr(d,a.length-d)));return c.join("")},processModeInfo:function(a,b,c){var d=this.modes[this.modes.length-1];if(c)this.result.push(this.processKeywords(d.buffer+a));else{if(this.isIllegal(b))throw"Illegal";if(c=this.subMode(b))d.buffer+=
a,this.result.push(this.processKeywords(d.buffer)),c.excludeBegin?(this.result.push(b+'\x3cspan class\x3d"'+c.className+'"\x3e'),c.buffer=""):(this.result.push('\x3cspan class\x3d"'+c.className+'"\x3e'),c.buffer=b),this.modes.push(c),this.relevance+="number"==typeof c.relevance?c.relevance:1;else if(c=this.endOfMode(b)){d.buffer+=a;for(d.excludeEnd?this.result.push(this.processKeywords(d.buffer)+"\x3c/span\x3e"+b):this.result.push(this.processKeywords(d.buffer+b)+"\x3c/span\x3e");1<c;)this.result.push("\x3c/span\x3e"),
--c,this.modes.pop();this.modes.pop();this.modes[this.modes.length-1].buffer=""}}},highlight:function(a){var b=0;this.lang.defaultMode.buffer="";do{var c=this.eatModeChunk(a,b);this.processModeInfo(c.buffer,c.lexeme,c.end);b+=c.buffer.length+c.lexeme.length}while(!c.end);if(1<this.modes.length)throw"Illegal";}});dojox.highlight.processString=function(a,b){return b?q(b,a):r(a)};dojox.highlight.init=function(a){a=t.byId(a);if(!u.contains(a,"no-highlight")&&v(a)){var b=a.className.split(/\s+/);e.some(b,
function(b){if("_"!=b.charAt(0)&&f.languages[b]){var c=a;b=q(b,m(c));p(c,c.className,b.result);return!0}return!1})||w(a)}};f.Code=function(a,b){f.init(b)};return f});