// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Histogram/nls/Histogram ../intl ../core/maybe ../core/accessorSupport/decorators ./Widget ./Histogram/HistogramViewModel ./support/widget".split(" "),function(w,x,y,q,d,n,r,t,e,u,v,g){return function(l){function b(a){a=l.call(this,a)||this;a._containerNode=null;a._defaultBarColor="#d8d8d8";a.average=null;a.barCreatedFunction=null;a.bins=null;a.dataLines=null;a.dataLineCreatedFunction=
null;a.label=n.title;a.labelFormatFunction=null;a.max=null;a.min=null;a.state=null;a.viewModel=new v;return a}q(b,l);k=b;Object.defineProperty(b.prototype,"layout",{set:function(a){"vertical"!==a&&(a="horizontal");this._set("layout",a)},enumerable:!0,configurable:!0});b.fromHistogramResult=function(a){return new k({bins:a.bins,max:a.maxValue,min:a.minValue})};b.prototype.render=function(){var a=this.label,b=this.state,c=this.classes("esri-histogram","esri-widget","horizontal"===this.layout?"esri-histogram--horizontal":
"esri-histogram--vertical","disabled"===b?"esri-disabled":null);return g.tsx("div",{"aria-label":a,afterCreate:g.storeNode,bind:this,class:c,"data-node-ref":"_containerNode"},"ready"===b?this.renderContent():null)};b.prototype.renderContent=function(){if(this._containerNode)return g.tsx("div",{class:"esri-histogram__content"},g.tsx("svg",{class:"esri-histogram__svg",xmlns:"http://www.w3.org/2000/svg"},this.renderBarsGroup(),this.renderLinesGroup()))};b.prototype.renderBarsGroup=function(){return g.tsx("g",
{class:this.classes("esri-histogram__bars")},this.renderBars())};b.prototype.renderBars=function(){var a=this,b=this.layout,c=this.viewModel,f=c.binRange,c=c.range;if(f&&c){var f=f/c,h=this._getContainerDimensions(),c=h[0],h=h[1];if(0!==c||0!==h)if(0===c&&0!==h)this.scheduleRender();else return b="vertical"===b?[c*f,h]:[c,h*f],this._getBarDimensions(b[0],b[1]).map(function(c,b){return a.renderBar(b,c[0],c[1])})}};b.prototype.renderBar=function(a,b,c){var f=this.bins,p=this.layout,e=this.max,d=this.viewModel.range,
m=this._getContainerDimensions(),k=m[0],l=m[1],f=f.slice()[a],m=f.maxValue,e=e-m,d="vertical"===p?[0,k/d*e]:[l-c-l/d*e,k-b],p=d[0],d=d[1],f=r.substitute(n.barLabel,{count:f.count,maxValue:m,minValue:f.minValue});return g.tsx("rect",{"aria-label":f,afterCreate:this._afterBarCreate,bind:this,class:"esri-histogram__bar","data-index":a,fill:this._defaultBarColor,height:b,role:"img","shape-rendering":"crispEdges","stroke-width":"0",tabindex:0,width:c,x:p,y:d})};b.prototype.renderLinesGroup=function(){return g.tsx("g",
{class:this.classes("esri-histogram__data-lines")},this.renderAverageLine(),this.renderCustomLines())};b.prototype.renderAverageLine=function(){var a=this.average;if(t.isSome(a)){var b=[g.tsx("tspan",{class:this.classes("esri-histogram__average-symbol")},n.xAverage),g.tsx("tspan",{class:this.classes("esri-histogram__average-label")},this.labelFormatFunction?this.labelFormatFunction(a,"average"):a)];return g.tsx("g",{afterCreate:this._afterLinesSubgroupCreate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup")},
this.renderLine(a,this.classes("esri-histogram__average-data-line")),this.renderLabel(a,b))}};b.prototype.renderCustomLines=function(){var a=this;if(this.dataLines&&this.dataLines.length)return this.dataLines.map(function(b,c){return a.renderLineSubgroup(c,b.value,b.label)})};b.prototype.renderLineSubgroup=function(a,b,c){return g.tsx("g",{afterCreate:this._afterLinesSubgroupCreate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup"),"data-index":a},this.renderLine(b),this.renderLabel(b,
c))};b.prototype.renderLine=function(a,b){var c=this._getLinePosition(a);a=c[0];var f=c[1],d=c[2],c=c[3];return g.tsx("line",{class:this.classes("esri-histogram__data-line",b),x1:a,x2:f,y1:d,y2:c,"shape-rendering":"crispEdges"})};b.prototype.renderLabel=function(a,b,c){var f=this._getLabelPosition(a);a=f[0];f=f[1];return g.tsx("text",{class:this.classes("esri-histogram__label",c),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:a,y:f-2},b)};b.prototype._afterBarCreate=
function(a){if(this.barCreatedFunction){var b=a.dataset?parseInt(a.dataset.index,10):a.getAttribute("data-index")?parseInt(a.getAttribute("data-index"),10):null;this.barCreatedFunction(isNaN(b)?null:b,a)}};b.prototype._afterLinesSubgroupCreate=function(a){if(this.dataLineCreatedFunction){var b=a.dataset?parseInt(a.dataset.index,10):a.getAttribute("data-index")?parseInt(a.getAttribute("data-index"),10):null;this.dataLineCreatedFunction(a.childNodes[0],a.childNodes[1]?a.childNodes[1]:null,isNaN(b)?
null:b)}};b.prototype._getContainerDimensions=function(){var a=this._containerNode;return a?[a.offsetHeight,a.offsetWidth]:[0,0]};b.prototype._getBarDimensions=function(a,b){var c=this.bins,f=this.layout,d=c?c.map(function(a){return a.count}):[],e=Math.max.apply(Math,d);return d.map(function(c,g){return"vertical"===f?[a/d.length,c/e*b]:[c/e*a,b/d.length]})};b.prototype._getLinePosition=function(a){var b=this.layout;a=(a-this.min)/this.viewModel.range;var c=this._getContainerDimensions(),d=c[0],c=
[a*c[1],d-a*d];a=c[0];c=c[1];return"vertical"===b?[0,"100%",c,c]:[a,a,"100%",0]};b.prototype._getLabelPosition=function(a){var b=this.layout;a=(a-this.min)/this.viewModel.range;var c=this._getContainerDimensions(),d=c[0],c=c[1];return"vertical"===b?[c,d-a*d]:[0,a*c]};var k;d([e.aliasOf("viewModel.average")],b.prototype,"average",void 0);d([e.property(),g.renderable()],b.prototype,"barCreatedFunction",void 0);d([e.aliasOf("viewModel.bins")],b.prototype,"bins",void 0);d([e.property(),g.renderable()],
b.prototype,"dataLines",void 0);d([e.property(),g.renderable()],b.prototype,"dataLineCreatedFunction",void 0);d([e.property()],b.prototype,"label",void 0);d([e.aliasOf("viewModel.labelFormatFunction")],b.prototype,"labelFormatFunction",void 0);d([e.property({value:"horizontal"})],b.prototype,"layout",null);d([e.aliasOf("viewModel.max")],b.prototype,"max",void 0);d([e.aliasOf("viewModel.min")],b.prototype,"min",void 0);d([e.aliasOf("viewModel.state")],b.prototype,"state",void 0);d([e.property(),g.renderable("viewModel.average viewModel.bins viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.state".split(" "))],
b.prototype,"viewModel",void 0);return b=k=d([e.subclass("esri.widgets.Histogram")],b)}(e.declared(u))});