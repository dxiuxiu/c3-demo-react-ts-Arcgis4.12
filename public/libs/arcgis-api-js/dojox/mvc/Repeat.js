//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/sniff dojo/_base/window dojo/dom dojo/dom-construct dojo/_base/array dojo/query dojo/when dijit/registry ./_Container".split(" "),function(n,e,h,m,g,k,r,t,p,l,q){return n("dojox.mvc.Repeat",q,{index:0,useParent:"",removeRepeatNode:!1,children:null,_relTargetProp:"children",startup:function(){this.removeRepeatNode&&e.isFunction(this.getParent)&&this.getParent()&&(this.select=this.getParent().select,this.onCheckStateChanged=this.getParent().onCheckStateChanged);
this.inherited(arguments);this._setChildrenAttr(this.children)},postscript:function(a,b){this.useParent&&g.byId(this.useParent)?this.srcNodeRef=g.byId(this.useParent):this.srcNodeRef=g.byId(b);if(this.srcNodeRef){var c=this._attachTemplateNodes?"inlineTemplateString":"templateString";""==this[c]&&(this[c]=this.srcNodeRef.innerHTML);try{this.srcNodeRef.innerHTML=""}catch(d){for(;this.srcNodeRef.firstChild;)this.srcNodeRef.removeChild(this.srcNodeRef.firstChild)}}this.inherited(arguments)},_setChildrenAttr:function(a){var b=
this.children;this._set("children",a);this.binding!=a&&this.set("ref",a);!this._started||this._builtOnce&&b==a||(this._builtOnce=!0,this._buildContained(a))},_buildContained:function(a){if(a){this.useParent&&g.byId(this.useParent)&&(this.srcNodeRef=g.byId(this.useParent));this._destroyBody();this._updateAddRemoveWatch(a);var b=[],c=this._attachTemplateNodes?"inlineTemplateString":"templateString";for(this.index=0;e.isFunction(a.get)?a.get(this.index):a[this.index];this.index++)b.push(this._exprRepl(this[c]));
a=this.containerNode||this.srcNodeRef||this.domNode;if(h("ie")&&/^(table|tbody)$/i.test(a.tagName))for(c=m.doc.createElement("div"),c.innerHTML="\x3ctable\x3e\x3ctbody\x3e"+b.join("")+"\x3c/tbody\x3e\x3c/table\x3e",b=c.getElementsByTagName("tbody")[0];b.firstChild;)a.appendChild(b.firstChild);else if(h("ie")&&/^td$/i.test(a.tagName))for(c=m.doc.createElement("div"),c.innerHTML="\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e"+b.join("")+"\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e",b=c.getElementsByTagName("tr")[0];b.firstChild;)a.appendChild(b.firstChild);
else a.innerHTML=b.join("");this.srcNodeRef=a;var d=this;p(this._createBody(),function(){if(d.removeRepeatNode){var a=d.domNode;!d.savedParentId&&d.domNode.parentNode&&d.domNode.parentNode.id&&(d.savedParentId=d.domNode.parentNode.id);var b=g.byId(d.savedParentId);if(a&&a.children){for(var c=l.findWidgets(a),f=c.length;0<f;f--)if("dojox.mvc.Group"==c[f-1].declaredClass)for(var e=a.children[f-1].children.length,h=l.byId(b.id).select;0<e;e--)l.byId(a.children[f-1].id).select=h,k.place(a.children[f-
1].removeChild(a.children[f-1].children[e-1]),b,"first");else k.place(a.removeChild(a.children[f-1]),b,"first");k.destroy(a)}}})}},_updateAddRemoveWatch:function(a){this._addRemoveWatch&&this._addRemoveWatch.unwatch();var b=this;this._addRemoveWatch=e.isFunction(a.watchElements)&&a.watchElements(function(a,d,e){d&&e&&!d.length&&!e.length||b._buildContained(b.children)})}})});