//>>built
define(["dojo/_base/declare","dojo/_base/lang","./_base","./shape","./svg"],function(e,c,g,f,d){c.extend(d.Shape,{mask:null,setMask:function(a){var b=this.rawNode;a?(b.setAttribute("mask","url(#"+a.shape.id+")"),this.mask=a):(b.removeAttribute("mask"),this.mask=null);return this},getMask:function(){return this.mask}});var b=d.Mask=e("dojox.gfx.svg.Mask",d.Shape,{constructor:function(){f.Container._init.call(this);this.shape=b.defaultMask},setRawNode:function(a){this.rawNode=a},setShape:function(a){a.id||
(a=c.mixin({id:g._base._getUniqueId()},a));this.inherited(arguments,[a])}});b.nodeType="mask";b.defaultMask={id:null,x:0,y:0,width:1,height:1,maskUnits:"objectBoundingBox",maskContentUnits:"userSpaceOnUse"};c.extend(b,d.Container);c.extend(b,f.Creator);c.extend(b,d.Creator);e=d.Surface;var h=e.prototype.add,k=e.prototype.remove;c.extend(e,{createMask:function(a){return this.createObject(b,a)},add:function(a){a instanceof b?(this.defNode.appendChild(a.rawNode),a.parent=this):h.apply(this,arguments);
return this},remove:function(a,c){a instanceof b&&this.defNode==a.rawNode.parentNode?(this.defNode.removeChild(a.rawNode),a.parent=null):k.apply(this,arguments);return this}})});