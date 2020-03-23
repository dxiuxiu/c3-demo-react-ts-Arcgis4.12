// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/decorators/cast".split(" "),function(r,t,p,c,e,q,d,k){var f=new e.default({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),g=new e.default({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),l={key:function(c){return"number"===typeof c?"number":
"string"},typeMap:{number:Number,string:String},base:null},m=["high-to-low","above-and-below","centered-on","extremes"],n="seconds minutes hours days months years".split(" ");return function(e){function b(a){a=e.call(this)||this;a.endTime=null;a.field=null;a.maxSliderValue=null;a.minSliderValue=null;a.startTime=null;a.type=null;a.units=null;return a}p(b,e);h=b;b.prototype.castEndTime=function(a){return"string"===typeof a||"number"===typeof a?a:null};b.prototype.castStartTime=function(a){return"string"===
typeof a||"number"===typeof a?a:null};Object.defineProperty(b.prototype,"style",{get:function(){return"color"===this.type?this._get("style"):null},set:function(a){this._set("style",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"theme",{get:function(){return"color"===this.type?this._get("theme")||"high-to-low":null},set:function(a){this._set("theme",a)},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new h({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,
minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})};var h;c([d.property({types:l,json:{write:!0}})],b.prototype,"endTime",void 0);c([k.cast("endTime")],b.prototype,"castEndTime",null);c([d.property({type:String,json:{write:!0}})],b.prototype,"field",void 0);c([d.property({type:Number,json:{write:!0}})],b.prototype,"maxSliderValue",void 0);c([d.property({type:Number,json:{write:!0}})],b.prototype,"minSliderValue",void 0);
c([d.property({types:l,json:{write:!0}})],b.prototype,"startTime",void 0);c([k.cast("startTime")],b.prototype,"castStartTime",null);c([d.property({type:f.apiValues,value:null,dependsOn:["type"],json:{type:f.jsonValues,read:f.read,write:f.write}})],b.prototype,"style",null);c([d.property({type:m,value:null,dependsOn:["type"],json:{type:m,write:!0}})],b.prototype,"theme",null);c([d.property({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],b.prototype,"type",void 0);c([d.property({type:n,
json:{type:n,write:!0}})],b.prototype,"units",void 0);return b=h=c([d.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],b)}(d.declared(q))});