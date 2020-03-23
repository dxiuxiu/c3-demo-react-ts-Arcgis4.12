//>>built
define("dojox/main dojo/_base/lang dojo/_base/array dojo/date dojo/i18n dojo/regexp dojo/string ./Date ./numerals dojo/i18n!dojo/cldr/nls/hebrew".split(" "),function(x,n,p,C,m,y,z,u,t){function A(a,d,c,e,h){return h.replace(/([a-z])\1*/ig,function(f){var b,g,q=f.charAt(0);f=f.length;var e=["abbr","wide","narrow"];switch(q){case "G":b=d[4>f?"eraAbbr":"eraNames"][0];break;case "y":b=c.match(/^he(?:-.+)?$/)?t.getYearHebrewLetters(a.getFullYear()):String(a.getFullYear());break;case "M":b=a.getMonth();
3>f?(!a.isLeapYear(a.getFullYear())&&5<b&&b--,c.match(/^he(?:-.+)?$/)?b=t.getMonthHebrewLetters(b):(b+=1,g=!0)):b=k.getNames("months",e[f-3],"format",c,a)[b];break;case "d":c.match(/^he(?:-.+)?$/)?b=a.getDateLocalized(c):(b=a.getDate(),g=!0);break;case "E":b=a.getDay();3>f?(b+=1,g=!0):(q=["days-format",e[f-3]].join("-"),b=d[q][b]);break;case "a":b=12>a.getHours()?"am":"pm";b=d["dayPeriods-format-wide-"+b];break;case "h":case "H":case "K":case "k":g=a.getHours();switch(q){case "h":b=g%12||12;break;
case "H":b=g;break;case "K":b=g%12;break;case "k":b=g||24}g=!0;break;case "m":b=a.getMinutes();g=!0;break;case "s":b=a.getSeconds();g=!0;break;case "S":b=Math.round(a.getMilliseconds()*Math.pow(10,f-3));g=!0;break;case "z":b="";break;default:throw Error("dojox.date.hebrew.locale.formatPattern: invalid pattern char: "+h);}g&&(b=z.pad(b,f));return b})}function v(a,d,c,e){var h=function(b){return b};d=d||h;c=c||h;e=e||h;var f=a.match(/(''|[^'])+/g),b="'"==a.charAt(0);p.forEach(f,function(a,e){a?(f[e]=
(b?c:d)(a),b=!b):f[e]=""});return e(f.join(""))}function B(a,d,c,e){e=y.escapeString(e);var h=m.normalizeLocale(c.locale);return e.replace(/([a-z])\1*/ig,function(f){var b;b=f.charAt(0);var g=f.length,e="";c.strict?1<g&&(e="0{"+(g-1)+"}"):e="0?";switch(b){case "y":b="\\S+";break;case "M":b=h.match("^he(?:-.+)?$")?2<g?"\\S+ ?\\S+":"\\S{1,4}":2<g?"\\S+ ?\\S+":e+"[1-9]|1[0-3]";break;case "d":b=h.match("^he(?:-.+)?$")?"\\S['\"'\u05f3]{1,2}\\S?":"[12]\\d|"+e+"[1-9]|30";break;case "E":b=h.match("^he(?:-.+)?$")?
3<g?"\\S+ ?\\S+":"\\S":"\\S+";break;case "h":b=e+"[1-9]|1[0-2]";break;case "k":b=e+"\\d|1[01]";break;case "H":b=e+"\\d|1\\d|2[0-3]";break;case "K":b=e+"[1-9]|1\\d|2[0-4]";break;case "m":case "s":b=e+"\\d|[0-5]\\d";break;case "S":b="\\d{"+g+"}";break;case "a":g=c.am||d["dayPeriods-format-wide-am"];e=c.pm||d["dayPeriods-format-wide-pm"];c.strict?b=g+"|"+e:(b=g+"|"+e,g!=g.toLowerCase()&&(b+="|"+g.toLowerCase()),e!=e.toLowerCase()&&(b+="|"+e.toLowerCase()));break;default:b=".*"}a&&a.push(f);return"("+
b+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var k=n.getObject("date.hebrew.locale",!0,x);m.getLocalization("dojo.cldr","hebrew");k.format=function(a,d){d=d||{};var c=m.normalizeLocale(d.locale),e=d.formatLength||"short",h=k._getHebrewBundle(c),f=[],b=n.hitch(this,A,a,h,c,d.fullYear);if("year"==d.selector)return f=a.getFullYear(),c.match(/^he(?:-.+)?$/)?t.getYearHebrewLetters(f):f;"time"!=d.selector&&(c=d.datePattern||h["dateFormat-"+e])&&f.push(v(c,b));"date"!=d.selector&&(d=d.timePattern||h["timeFormat-"+
e])&&f.push(v(d,b));return f.join(" ")};k.regexp=function(a){return k._parseInfo(a).regexp};k._parseInfo=function(a){a=a||{};var d=m.normalizeLocale(a.locale),d=k._getHebrewBundle(d),c=a.formatLength||"short",e=a.datePattern||d["dateFormat-"+c],c=a.timePattern||d["timeFormat-"+c],h=[];return{regexp:v("date"==a.selector?e:"time"==a.selector?c:void 0===c?e:e+" "+c,n.hitch(this,B,h,d,a)),tokens:h,bundle:d}};k.parse=function(a,d){a=a.replace(/[\u200E\u200F\u202A-\u202E]/g,"");d||(d={});var c=k._parseInfo(d),
e=c.tokens,h=c.bundle;a=(new RegExp("^"+c.regexp+"$")).exec(a);var f=m.normalizeLocale(d.locale);if(!a)return null;var b=[5730,3,23,0,0,0,0],g="",q=0,n=["abbr","wide","narrow"];p.every(a,function(a,c){if(!c)return!0;var l=e[c-1];c=l.length;switch(l.charAt(0)){case "y":f.match(/^he(?:-.+)?$/)?b[0]=t.parseYearHebrewLetters(a):b[0]=Number(a);break;case "M":if(2<c){var l=k.getNames("months",n[c-3],"format",f,new u(5769,1,1)),r=k.getNames("months",n[c-3],"format",f,new u(5768,1,1));d.strict||(a=a.replace(".",
"").toLowerCase(),l=p.map(l,function(a){return a?a.replace(".","").toLowerCase():a}),r=p.map(r,function(a){return a?a.replace(".","").toLowerCase():a}));var m=a;a=p.indexOf(l,m);if(-1==a&&(a=p.indexOf(r,m),-1==a))return!1;q=c}else f.match(/^he(?:-.+)?$/)?a=t.parseMonthHebrewLetters(a):a--;b[1]=Number(a);break;case "D":b[1]=0;case "d":f.match(/^he(?:-.+)?$/)?b[2]=t.parseDayHebrewLetters(a):b[2]=Number(a);break;case "a":c=d.am||h["dayPeriods-format-wide-am"];l=d.pm||h["dayPeriods-format-wide-pm"];d.strict||
(r=/\./g,a=a.replace(r,"").toLowerCase(),c=c.replace(r,"").toLowerCase(),l=l.replace(r,"").toLowerCase());if(d.strict&&a!=c&&a!=l)return!1;g=a==l?"p":a==c?"a":"";break;case "K":24==a&&(a=0);case "h":case "H":case "k":b[3]=Number(a);break;case "m":b[4]=Number(a);break;case "s":b[5]=Number(a);break;case "S":b[6]=Number(a)}return!0});a=+b[3];"p"===g&&12>a?b[3]=a+12:"a"===g&&12==a&&(b[3]=0);a=new u(b[0],b[1],b[2],b[3],b[4],b[5],b[6]);3>q&&5<=b[1]&&!a.isLeapYear(a.getFullYear())&&a.setMonth(b[1]+1);return a};
var w=[];k.addCustomFormats=function(a,d){w.push({pkg:a,name:d})};k._getHebrewBundle=function(a){var d={};p.forEach(w,function(c){c=m.getLocalization(c.pkg,c.name,a);d=n.mixin(d,c)},this);return d};k.addCustomFormats("dojo.cldr","hebrew");k.getNames=function(a,d,c,e,h){var f;e=k._getHebrewBundle(e);d=[a,c,d];"standAlone"==c&&(c=d.join("-"),f=e[c],1==f[0]&&(f=void 0));d[1]="format";c=(f||e[d.join("-")]).concat();"months"==a&&(h.isLeapYear(h.getFullYear())?(d.push("leap"),c[6]=e[d.join("-")]):delete c[5]);
return c};return k});