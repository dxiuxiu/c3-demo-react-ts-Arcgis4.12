//>>built
define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff dojo/window ../a11y".split(" "),function(h,k,c,l,e,p,f,d,m,n){return k("dijit.form._FormWidgetMixin",null,{name:"",alt:"",value:"",type:"text","aria-label":"focusNode",tabIndex:"0",_setTabIndexAttr:"focusNode",disabled:!1,intermediateChanges:!1,scrollOnFocus:!0,_setIdAttr:"focusNode",_setDisabledAttr:function(a){this._set("disabled",a);/^(button|input|select|textarea|optgroup|option|fieldset)$/i.test(this.focusNode.tagName)?
(c.set(this.focusNode,"disabled",a),d("trident")&&"readOnly"in this&&c.set(this.focusNode,"readonly",a||this.readOnly)):this.focusNode.setAttribute("aria-disabled",a?"true":"false");this.valueNode&&c.set(this.valueNode,"disabled",a);a?(this._set("hovering",!1),this._set("active",!1),a="tabIndex"in this.attributeMap?this.attributeMap.tabIndex:"_setTabIndexAttr"in this?this._setTabIndexAttr:"focusNode",h.forEach(e.isArray(a)?a:[a],function(a){a=this[a];d("webkit")||n.hasDefaultTabStop(a)?a.setAttribute("tabIndex",
"-1"):a.removeAttribute("tabIndex")},this)):""!=this.tabIndex&&this.set("tabIndex",this.tabIndex)},_onFocus:function(a){if("mouse"==a&&this.isFocusable())var b=this.own(f(this.focusNode,"focus",function(){g.remove();b.remove()}))[0],c=d("pointer-events")?"pointerup":d("touch-events")?"touchend, mouseup":"mouseup",g=this.own(f(this.ownerDocumentBody,c,e.hitch(this,function(a){g.remove();b.remove();this.focused&&("touchend"==a.type?this.defer("focus"):this.focus())})))[0];this.scrollOnFocus&&this.defer(function(){m.scrollIntoView(this.domNode)});
this.inherited(arguments)},isFocusable:function(){return!this.disabled&&this.focusNode&&"none"!=l.get(this.domNode,"display")},focus:function(){if(!this.disabled&&this.focusNode.focus)try{this.focusNode.focus()}catch(a){}},compare:function(a,b){return"number"==typeof a&&"number"==typeof b?isNaN(a)&&isNaN(b)?0:a-b:a>b?1:a<b?-1:0},onChange:function(){},_onChangeActive:!1,_handleOnChange:function(a,b){void 0!=this._lastValueReported||null!==b&&this._onChangeActive||(this._resetValue=this._lastValueReported=
a);this._pendingOnChange=this._pendingOnChange||typeof a!=typeof this._lastValueReported||0!=this.compare(a,this._lastValueReported);(this.intermediateChanges||b||void 0===b)&&this._pendingOnChange&&(this._lastValueReported=a,this._pendingOnChange=!1,this._onChangeActive&&(this._onChangeHandle&&this._onChangeHandle.remove(),this._onChangeHandle=this.defer(function(){this._onChangeHandle=null;this.onChange(a)})))},create:function(){this.inherited(arguments);this._onChangeActive=!0},destroy:function(){this._onChangeHandle&&
(this._onChangeHandle.remove(),this.onChange(this._lastValueReported));this.inherited(arguments)}})});