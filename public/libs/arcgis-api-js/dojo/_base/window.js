//>>built
define(["./kernel","./lang","../sniff"],function(a,k,e){var c={global:a.global,doc:a.global.document||null,body:function(b){b=b||a.doc;return b.body||b.getElementsByTagName("body")[0]},setContext:function(b,d){a.global=c.global=b;a.doc=c.doc=d},withGlobal:function(b,d,f,e){var l=a.global;try{return a.global=c.global=b,c.withDoc.call(null,b.document,d,f,e)}finally{a.global=c.global=l}},withDoc:function(b,d,f,k){var l=c.doc,n=e("ie"),g,h,m;try{return a.doc=c.doc=b,a.isQuirks=0,e("ie")&&(m=b.parentWindow)&&
m.navigator&&(g=parseFloat(m.navigator.appVersion.split("MSIE ")[1])||void 0,(h=b.documentMode)&&5!=h&&Math.floor(g)!=h&&(g=h),a.isIE=e.add("ie",g,!0,!0)),f&&"string"==typeof d&&(d=f[d]),d.apply(f,k||[])}finally{a.doc=c.doc=l,a.isQuirks=0,a.isIE=e.add("ie",n,!0,!0)}}};k.mixin(a,c);return c});