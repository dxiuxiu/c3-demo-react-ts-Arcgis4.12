//>>built
define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-style dojo/_base/lang ../_WidgetBase ./_LayoutWidget ./utils".split(" "),function(d,c,e,f,g,h,k,l){c=c("dijit.layout.LayoutContainer",k,{design:"headline",baseClass:"dijitLayoutContainer",startup:function(){this._started||(d.forEach(this.getChildren(),this._setupChild,this),this.inherited(arguments))},_setupChild:function(a){this.inherited(arguments);a.region&&e.add(a.domNode,this.baseClass+"Pane")},_getOrderedChildren:function(){var a=
d.map(this.getChildren(),function(b,a){return{pane:b,weight:["center"==b.region?Infinity:0,b.layoutPriority,("sidebar"==this.design?1:-1)*(/top|bottom/.test(b.region)?1:-1),a]}},this);a.sort(function(a,c){a=a.weight;c=c.weight;for(var b=0;b<a.length;b++)if(a[b]!=c[b])return a[b]-c[b];return 0});return d.map(a,function(a){return a.pane})},layout:function(){l.layoutChildren(this.domNode,this._contentBox,this._getOrderedChildren())},addChild:function(a,b){this.inherited(arguments);this._started&&this.layout()},
removeChild:function(a){this.inherited(arguments);this._started&&this.layout();e.remove(a.domNode,this.baseClass+"Pane");f.set(a.domNode,{top:"auto",bottom:"auto",left:"auto",right:"auto",position:"static"});f.set(a.domNode,/top|bottom/.test(a.region)?"width":"height","auto")}});c.ChildWidgetProperties={region:"",layoutAlign:"",layoutPriority:0};g.extend(h,c.ChildWidgetProperties);return c});