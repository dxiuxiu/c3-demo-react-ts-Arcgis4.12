//>>built
define("dojo/_base/lang ../_Widget ../_Container ../_Contained ../Viewport dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style".split(" "),function(g,k,l,m,n,p,d,e,h){return p("dijit.layout._LayoutWidget",[k,l,m],{baseClass:"dijitLayoutContainer",isLayoutContainer:!0,_setTitleAttr:null,buildRendering:function(){this.inherited(arguments);d.add(this.domNode,"dijitContainer")},startup:function(){if(!this._started){this.inherited(arguments);var a=this.getParent&&this.getParent();a&&a.isLayoutContainer||
(this.resize(),this.own(n.on("resize",g.hitch(this,"resize"))))}},resize:function(a,b){var c=this.domNode;a&&e.setMarginBox(c,a);b=b||{};g.mixin(b,a||{});"h"in b&&"w"in b||(b=g.mixin(e.getMarginBox(c),b));a=h.getComputedStyle(c);var f=e.getMarginExtents(c,a),d=e.getBorderExtents(c,a);b=this._borderBox={w:b.w-(f.w+d.w),h:b.h-(f.h+d.h)};f=e.getPadExtents(c,a);this._contentBox={l:h.toPixelValue(c,a.paddingLeft),t:h.toPixelValue(c,a.paddingTop),w:b.w-f.w,h:b.h-f.h};this.layout()},layout:function(){},
_setupChild:function(a){d.add(a.domNode,this.baseClass+"-child "+(a.baseClass?this.baseClass+"-"+a.baseClass:""))},addChild:function(a,b){this.inherited(arguments);this._started&&this._setupChild(a)},removeChild:function(a){d.remove(a.domNode,this.baseClass+"-child"+(a.baseClass?" "+this.baseClass+"-"+a.baseClass:""));this.inherited(arguments)}})});