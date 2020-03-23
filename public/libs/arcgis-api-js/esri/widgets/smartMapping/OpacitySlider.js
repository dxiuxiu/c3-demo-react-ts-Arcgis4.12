// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./OpacitySlider/nls/OpacitySlider ../../core/accessorSupport/decorators ./SmartMappingSliderBase ./OpacitySlider/OpacitySliderViewModel ./../support/widget".split(" "),function(n,p,q,h,e,k,d,l,m,c){return function(g){function a(b){b=g.call(this)||this;b._bgFillId=null;b._rampFillId=null;b.label=k.widgetLabel;b.stops=null;b.viewModel=new m;b._rampFillId=
b.id+"-ramp-fill";b._bgFillId=b.id+"-bg-fill";return b}h(a,g);f=a;a.fromVisualVariableResult=function(b,a){var c=b.statistics;return new f({max:c.max,min:c.min,stops:b.visualVariable.stops,histogramConfig:{average:c.avg,standardDeviation:c.stddev,bins:a?a.bins:[]}})};a.prototype.updateFromVisualVariableResult=function(b,a){var c=b.statistics;this.set({max:c.max,min:c.min,stops:b.visualVariable.stops,histogramConfig:{average:c.avg,standardDeviation:c.stddev,bins:a?a.bins:[]}})};a.prototype.render=
function(){var b=this.viewModel.state,a=this.label,d=this.classes("esri-opacity-slider","esri-widget--panel","esri-widget","disabled"===b?"esri-disabled":null);return c.tsx("div",{"aria-label":a,class:d},"disabled"===b?null:this.renderContent())};a.prototype.renderContent=function(){this.slider.extraNodes=[this.renderRamp(),this.renderHistogram()];return c.tsx("div",{class:"esri-opacity-slider__slider-container"},this.slider.render())};a.prototype.renderRamp=function(){var b="url(#"+this._rampFillId+
")",a="url(#"+this._bgFillId+")";return c.tsx("div",{class:"esri-opacity-slider__ramp"},c.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},c.tsx("defs",null,this.renderRampFillDefinition(),this.renderBackgroundFillDefinition()),c.tsx("rect",{x:"0",y:"0",fill:a,height:"100%",width:"100%"}),c.tsx("rect",{x:"0",y:"0",fill:b,height:"100%",width:"100%"})))};a.prototype.renderHistogram=function(){return this.histogramConfig?c.tsx("div",{class:"esri-opacity-slider__histogram-container"},this.histogram.render()):
null};a.prototype.renderRampFillDefinition=function(){return c.tsx("linearGradient",{id:this._rampFillId,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops())};a.prototype.renderBackgroundFillDefinition=function(){return c.tsx("pattern",{id:this._bgFillId,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},c.tsx("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))};
a.prototype.renderRampFillStops=function(){var b=this;return this.viewModel.getStopInfo().reverse().map(function(a,c){return b.renderStop(a,c)})};a.prototype.renderStop=function(b,a){b=this.getPropsForStop(b);return c.tsx("stop",{key:a+"-stop",offset:b.offset,"stop-color":b.color,"stop-opacity":b.opacity})};var f;e([d.property()],a.prototype,"label",void 0);e([d.aliasOf("viewModel.stops")],a.prototype,"stops",void 0);e([d.property(),c.renderable(["viewModel.hasTimeData","viewModel.labelFormatFunction",
"viewModel.max","viewModel.min","viewModel.values"])],a.prototype,"viewModel",void 0);return a=f=e([d.subclass("esri.widgets.smartMapping.OpacitySlider")],a)}(d.declared(l.SmartMappingSliderBase))});