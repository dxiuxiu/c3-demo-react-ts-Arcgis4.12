//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/fx dojo/_base/html dojo/_base/connect dijit/_Widget dojo/dom-construct dojo/dom-class".split(" "),function(d,e,f,g,h,k,c,l){return e("dojox.gauges._Indicator",[k],{value:0,type:"",color:"black",strokeColor:"",label:"",font:{family:"sans-serif",size:"12px"},length:0,width:0,offset:0,hover:"",front:!1,easing:f._defaultEasing,duration:1E3,hideValue:!1,noChange:!1,interactionMode:"indicator",_gauge:null,title:"",startup:function(){this.onDragMove&&
(this.onDragMove=d.hitch(this.onDragMove));""===this.strokeColor&&(this.strokeColor=void 0)},postCreate:function(){""===this.title&&g.style(this.domNode,"display","none");d.isString(this.easing)&&(this.easing=d.getObject(this.easing))},buildRendering:function(){var a=this.domNode=this.srcNodeRef?this.srcNodeRef:c.create("div");l.add(a,"dojoxGaugeIndicatorDiv");var b=c.create("label");this.title&&(b.innerHTML=this.title+":");c.place(b,a);this.valueNode=c.create("input",{className:"dojoxGaugeIndicatorInput",
size:5,value:this.value});c.place(this.valueNode,a);h.connect(this.valueNode,"onchange",this,this._update)},_update:function(){this._updateValue(!0)},_updateValue:function(a){var b=this.valueNode.value;""===b?this.value=null:(this.value=Number(b),this.hover=this.title+": "+b);this._gauge&&(this.draw(this._gauge._indicatorsGroup,a||void 0==a?!1:!0),this.valueNode.value=this.value,("Target"==this.title||this.front)&&this._gauge.moveIndicator&&this._gauge.moveIndicatorToFront(this),this.valueChanged())},
valueChanged:function(){},update:function(a,b){this.noChange||(this.valueNode.value=a,this._updateValue(b))},handleMouseOver:function(a){this._gauge._handleMouseOverIndicator(this,a)},handleMouseOut:function(a){this._gauge._handleMouseOutIndicator(this,a);this._gauge.gaugeContent.style.cursor=""},handleMouseDown:function(a){this._gauge._handleMouseDownIndicator(this,a)},handleTouchStart:function(a){this._gauge.handleTouchStartIndicator(this,a)},onDragMove:function(){this.value=Math.floor(this.value);
this.valueNode.value=this.value;this.hover=this.title+": "+this.value},draw:function(a){},remove:function(){this.shape&&this.shape.parent.remove(this.shape);this.shape=null;this.text&&this.text.parent.remove(this.text);this.text=null}})});