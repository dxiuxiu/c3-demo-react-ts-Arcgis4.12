//>>built
define(["dojo/_base/declare","dojox/gfx","./BarLineIndicator"],function(c,f,g){return c("dojox.gauges.BarCircleIndicator",[g],{_getShapes:function(b){var d=this.color?this.color:"black",e={color:this.strokeColor?this.strokeColor:d,width:1};this.color.type&&!this.strokeColor&&(e.color=this.color.colors[0].color);var c=this._gauge.dataY+this.offset+this.length/2,a=this.value;a<this._gauge.min&&(a=this._gauge.min);a>this._gauge.max&&(a=this._gauge.max);a=this._gauge._getPosition(a);b=[b.createCircle({cx:0,
cy:c,r:this.length/2}).setFill(d).setStroke(e)];b[0].setTransform(f.matrix.translate(a,0));return b}})});