//>>built
define("./_WidgetBase ./_TemplatedMixin ./_WidgetsInTemplateMixin dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/kernel".split(" "),function(d,f,g,h,k,l,m){l.extend(d,{waiRole:"",waiState:""});return k("dijit._Templated",[f,g],{constructor:function(){m.deprecated(this.declaredClass+": dijit._Templated deprecated, use dijit._TemplatedMixin and if necessary dijit._WidgetsInTemplateMixin","","2.0")},_processNode:function(b,e){var d=this.inherited(arguments),c=e(b,"waiRole");c&&b.setAttribute("role",
c);(c=e(b,"waiState"))&&h.forEach(c.split(/\s*,\s*/),function(a){-1!=a.indexOf("-")&&(a=a.split("-"),b.setAttribute("aria-"+a[0],a[1]))});return d}})});