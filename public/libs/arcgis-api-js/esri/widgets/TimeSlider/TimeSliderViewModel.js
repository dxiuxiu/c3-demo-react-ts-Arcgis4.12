// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/Accessor ../../core/compilerUtils ../../core/accessorSupport/decorators ../../layers/support/timeUtils".split(" "),function(r,t,k,d,f,l,m,n,e,p){return function(g){function b(c){c=g.call(this,c)||this;c.fullTimeExtent=null;c.loop=!0;c.mode="time-window";c.stops={count:10};c.timerId=null;c.view=null;return c}k(b,g);b.prototype.destroy=function(){null!=
this.timerId&&(clearInterval(this.timerId),this.timerId=null)};Object.defineProperty(b.prototype,"effectiveStops",{get:function(){var c=this.fullTimeExtent,a=this.stops;if(!a)return[];if("dates"in a){a=a.dates;if(null==a||0===a.length)return null;a=a.sort(function(a,c){return a.getTime()-c.getTime()});return c?a.filter(function(a){var b=c.start,q=c.end;return!(a.getTime()<b.getTime()||a.getTime()>q.getTime())}):a}if("count"in a){var b=a.timeExtent||c;return this._divideTimeExtentByCount(b,a.count)}return"interval"in
a?(b=a.timeExtent||c,this._divideTimeExtentByInterval(b,a.interval)):[]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"playRate",{set:function(c){0>=c||36E5<c||("playing"===this.state&&this._startAnimation(),this._set("playRate",c))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.values&&this.fullTimeExtent?this.timerId?"playing":"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"timeExtent",
{get:function(){var c=this.mode,a=this.values;if(!a||0===a.length)return null;switch(c){case "instant":return new f({start:a[0],end:a[0]});case "time-window":return 1<a.length?new f({start:a[0],end:a[1]}):null;case "cumulative-from-start":return new f({start:null,end:a[0]});case "cumulative-from-end":return new f({start:a[0],end:null});default:n.neverReached(c)}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{set:function(c){this.view&&(this.view.timeExtent=this._toTimeExtent(c));
this._set("values",c)},enumerable:!0,configurable:!0});b.prototype.next=function(){this.values&&this.fullTimeExtent&&this._step(!0)};b.prototype.play=function(){this._clearAnimation();this._startAnimation()};b.prototype.previous=function(){this._step(!1)};b.prototype.stop=function(){this._clearAnimation()};b.prototype._clearAnimation=function(){null!=this.timerId&&(clearInterval(this.timerId),this.timerId=null)};b.prototype._startAnimation=function(){var c=this;this._step();this.timerId=setInterval(function(){c._step()},
this.playRate)};b.prototype._step=function(c){void 0===c&&(c=!0);var a=this.effectiveStops,b=this.values;if(0!==a.length&&b&&0!==b.length){var a=a.map(function(a){return a.getTime()}).sort(function(a,b){return c?a-b:b-a}),b=b.map(function(a){return a.getTime()}),e=Math.min.apply(Math,b),d=Math.max.apply(Math,b)-e,f=this.fullTimeExtent,h=this.mode,b=this.loop,g=this.state,k=f.end,l=f.start.getTime(),m=k.getTime(),f=c?a.filter(function(a){return a>e&&a+d<=m}):a.filter(function(a){return a<e&&a>=l}),
h="time-window"===h;0===f.length?b?(a=a[0],this.values=h?c?[new Date(a),this._getClosestStop(new Date(a+d))]:[this._getClosestStop(new Date(a-d)),new Date(a)]:[new Date(a)]):"playing"===g&&this.stop():(a=f[0],this.values=h?[new Date(a),this._getClosestStop(new Date(a+d))]:[new Date(a)])}};b.prototype._divideTimeExtentByCount=function(c,a){if(!c||!a)return[];var b=c.start,d=c.end;if(!b||!d)return[];a=Math.floor((d.getTime()-b.getTime())/a);a=new l({value:a});return this._divideTimeExtentByInterval(c,
a)};b.prototype._divideTimeExtentByInterval=function(c,a){if(!c||!a)return[];var b=c.start;c=c.end;if(!b||!c)return[];for(var d=[];b.getTime()<=c.getTime();)d.push(new Date(b.getTime())),b=p.appendDate(b,a);return d};b.prototype._getClosestStop=function(b){var a=this.effectiveStops;if(0===a.length)return null;var a=a.map(function(a){return a.getTime()}).sort(function(a,b){return a-b}),c=b.getTime();b=a.reduce(function(a,b){return Math.abs(b-c)<Math.abs(a-c)?b:a});return new Date(b)};b.prototype._toTimeExtent=
function(b){if(!b||0===b.length)return null;var a=b[0];b=1<b.length?b[1]:b[0];switch(this.mode){case "instant":case "time-window":return new f({start:a,end:b});case "cumulative-from-start":return new f({start:null,end:a});case "cumulative-from-end":return new f({start:a,end:null});default:return null}};d([e.property({dependsOn:["stops","fullTimeExtent"],readOnly:!0})],b.prototype,"effectiveStops",null);d([e.property({type:f})],b.prototype,"fullTimeExtent",void 0);d([e.property({nonNullable:!0})],
b.prototype,"loop",void 0);d([e.property({nonNullable:!0})],b.prototype,"mode",void 0);d([e.property({nonNullable:!0,value:1E3})],b.prototype,"playRate",null);d([e.property({dependsOn:["fullTimeExtent","timerId","values"],readOnly:!0})],b.prototype,"state",null);d([e.property()],b.prototype,"stops",void 0);d([e.property({dependsOn:["values"],readOnly:!0})],b.prototype,"timeExtent",null);d([e.property()],b.prototype,"timerId",void 0);d([e.property({value:null})],b.prototype,"values",null);d([e.property()],
b.prototype,"view",void 0);d([e.property()],b.prototype,"next",null);d([e.property()],b.prototype,"play",null);d([e.property()],b.prototype,"previous",null);d([e.property()],b.prototype,"stop",null);return b=d([e.subclass("esri.widgets.TimeSlider.TimeSliderViewModel")],b)}(e.declared(m))});