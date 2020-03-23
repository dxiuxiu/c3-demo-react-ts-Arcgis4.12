// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Error ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(q,r,k,f,l,m,n,g,e){var p=n.getLogger("esri.widgets.Slider.SliderViewModel");return function(h){function b(a){a=h.call(this)||this;a.precision=4;return a}k(b,h);Object.defineProperty(b.prototype,"labelFormatFunction",{set:function(a){this._set("labelFormatFunction",a)},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"labels",{get:function(){var a=this,c=this.max,b=this.min,d=this.values,d=d&&d.length?d.map(function(c,b){return a.getLabelForValue(c,"value",b)}):[];return{max:this.getLabelForValue(c,"max"),min:this.getLabelForValue(b,"min"),values:d}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"max",{set:function(a){this.setMax(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"min",{set:function(a){this.setMin(a)},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.min;return g.isSome(this.max)&&g.isSome(a)?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{set:function(a){var c=this.max,b=this.min,d=this.values;d&&a&&d.length===a.length&&d.every(function(c,b){return c===a[b]})||(this._set("values",null),a&&a.length&&(g.isSome(b)&&a.some(function(a){return a<b})&&(this.min=Math.min.apply(Math,a)),g.isSome(c)&&a.some(function(a){return a>
c})&&(this.max=Math.max.apply(Math,a))),this._set("values",a))},enumerable:!0,configurable:!0});b.prototype.defaultLabelFormatFunction=function(a){var c=this.precision;return parseFloat(a.toFixed(10<this.max-this.min?2:c)).toString()};b.prototype.getLabelForValue=function(a,c,b){return g.isSome(a)?this.labelFormatFunction?this.labelFormatFunction(a,c,b):this.defaultLabelFormatFunction(a):null};b.prototype.setMax=function(a){var c=this.max,b=this.min,d=this.values;if(isNaN(a))this._logError("slider:invalid-value",
"Property 'max' must of type 'number'.");else if(c!==a)if(g.isSome(b)&&a<=b)this._logError("slider:invalid-value","Property 'max' must be greater than 'min'.");else if(this._set("max",a),d&&d.length)for(c=0;c<d.length;c++)a<d[c]&&this.setValue(c,a)};b.prototype.setMin=function(a){var b=this.max,e=this.min,d=this.values;if(isNaN(a))this._logError("slider:invalid-value","Property 'min' must of type 'number'.");else if(e!==a)if(g.isSome(b)&&a>=b)this._logError("slider:invalid-value","Property 'min' must be less than 'max'.");
else if(this._set("min",a),d&&d.length)for(b=0;b<d.length;b++)a>d[b]&&this.setValue(b,a)};b.prototype.setValue=function(a,b){var c=this.max;this.values[a]!==b&&(b<this.min||b>c?this._logError("slider:invalid-value","Members of property 'values' must be within range."):(this.values[a]=b,this.notifyChange("labels")))};b.prototype._logError=function(a,b,e){p.error(new m(a,b,e))};f([e.property()],b.prototype,"labelFormatFunction",null);f([e.property({dependsOn:["labelFormatFunction","max","min","values"],
readOnly:!0})],b.prototype,"labels",null);f([e.property()],b.prototype,"max",null);f([e.property()],b.prototype,"min",null);f([e.property()],b.prototype,"precision",void 0);f([e.property({dependsOn:["max","min"],readOnly:!0})],b.prototype,"state",null);f([e.property()],b.prototype,"values",null);return b=f([e.subclass("esri.widgets.Slider.SliderViewModel")],b)}(e.declared(l))});