// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/tsSupport/assignHelper ../symbols ../symbols ../core/jsonMap ../core/lang ../core/Logger ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesRenderer ./support/ClassBreakInfo ./support/LegendOptions ../support/arcadeOnDemand ../symbols/support/jsonUtils".split(" "),
function(H,I,z,e,A,n,p,v,w,h,B,k,C,c,q,r,D,E,l,F,x,g){var t=C.getLogger("esri.renderers.ClassBreaksRenderer"),m=new B.default({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),G=q.ensureType(l.ClassBreakInfo);return function(y){function a(b){b=y.call(this)||this;b.backgroundFillSymbol=null;b.classBreakInfos=null;b.defaultLabel=null;b.defaultSymbol=null;b.field=null;b.isMaxInclusive=!0;b.legendOptions=null;b.normalizationField=null;b.normalizationTotal=
null;b.type="class-breaks";b.valueExpression=null;b.valueExpressionTitle=null;b._set("classBreakInfos",[]);return b}z(a,y);u=a;Object.defineProperty(a.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!0,configurable:!0});a.prototype.readClassBreakInfos=function(b,d,f){if(Array.isArray(b)){var a=d.minValue;return b.map(function(b){var d=new l.ClassBreakInfo;d.read(b,f);null==d.minValue&&(d.minValue=a);null==d.maxValue&&(d.maxValue=d.minValue);a=d.maxValue;return d})}};a.prototype.writeClassBreakInfos=
function(b,d,f,a){b=b.map(function(b){return b.write({},a)});this._areClassBreaksConsecutive()&&b.forEach(function(b){return delete b.classMinValue});d[f]=b};a.prototype.readDefaultSymbol=function(b,d,f){return g.read(b,d,f)};a.prototype.writeDefaultSymbolWebScene=function(b,d,f,a){g.writeTarget(b,d,f,a)};a.prototype.writeDefaultSymbol=function(b,d,f,a){g.writeTarget(b,d,f,a)};a.prototype.castField=function(b){return null==b?b:"function"===typeof b?(t.error(".field: field must be a string value"),
null):q.ensureString(b)};Object.defineProperty(a.prototype,"minValue",{get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"normalizationType",{get:function(){var b=this._get("normalizationType"),d=!!this.normalizationField,a=null!=this.normalizationTotal;if(d||a)b=d&&"field"||a&&"percent-of-total"||null,d&&a&&t.warn("warning: both normalizationField and normalizationTotal are set!");
else if("field"===b||"percent-of-total"===b)b=null;return b},set:function(b){this._set("normalizationType",b)},enumerable:!0,configurable:!0});a.prototype.addClassBreakInfo=function(b,d,a){var f=null,f="number"===typeof b?new l.ClassBreakInfo({minValue:b,maxValue:d,symbol:a}):G(k.clone(b));this.classBreakInfos.push(f);1===this.classBreakInfos.length&&this.notifyChange("minValue")};a.prototype.removeClassBreakInfo=function(b,d){for(var a=this.classBreakInfos.length,c=0;c<a;c++){var e=[this.classBreakInfos[c].minValue,
this.classBreakInfos[c].maxValue];if(e[0]===b&&e[1]===d){this.classBreakInfos.splice(c,1);break}}};a.prototype.getBreakIndex=function(b,a){return this.valueExpression?this._getBreakIndexForExpression(b,a):this._getBreakIndexForField(b)};a.prototype.getClassBreakInfo=function(b,a){return p(this,void 0,void 0,function(){var d,c,e;return n(this,function(f){switch(f.label){case 0:return d=a,this.valueExpression?[4,x.loadArcade()]:[3,2];case 1:c=f.sent().arcadeUtils,d=v({},d,{arcadeUtils:c}),f.label=2;
case 2:return e=this.getBreakIndex(b,d),[2,-1!==e?this.classBreakInfos[e]:null]}})})};a.prototype.getSymbol=function(b,a){if(!this.valueExpression||a&&a.arcadeUtils)return b=this.getBreakIndex(b,a),-1<b?this.classBreakInfos[b].symbol:this.defaultSymbol;t.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")};a.prototype.getSymbolAsync=function(b,a){return p(this,void 0,void 0,function(){var d,c,e;return n(this,function(f){switch(f.label){case 0:return d=a,this.valueExpression?
[4,x.loadArcade()]:[3,2];case 1:c=f.sent().arcadeUtils,d=v({},d,{arcadeUtils:c}),f.label=2;case 2:return e=this.getBreakIndex(b,d),[2,-1<e?this.classBreakInfos[e].symbol:this.defaultSymbol]}})})};a.prototype.getSymbols=function(){var b=[];this.classBreakInfos.forEach(function(a){a.symbol&&b.push(a.symbol)});this.defaultSymbol&&b.push(this.defaultSymbol);return b};a.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(b,a){return b+a.getAttributeHash()},
"")};a.prototype.getMeshHash=function(){var b=JSON.stringify(this.backgroundFillSymbol),a=JSON.stringify(this.defaultSymbol),f=this.normalizationField+"."+this.normalizationType+"."+this.normalizationTotal,c=this.classBreakInfos.reduce(function(b,a){return b+a.getMeshHash()},"");return b+"."+a+"."+c+"."+f+"."+this.field+"."+this.valueExpression};a.prototype.clone=function(){return new u({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,
defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:k.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:k.clone(this.visualVariables),legendOptions:k.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};
a.prototype.collectRequiredFields=function(b,a){return p(this,void 0,void 0,function(){return n(this,function(d){switch(d.label){case 0:return this.getSymbols().forEach(function(d){return d.collectRequiredFields(b,a)}),[4,this.collectVVRequiredFields(b,a)];case 1:return d.sent(),r.collectField(b,a,this.field),r.collectField(b,a,this.normalizationField),[4,r.collectArcadeFieldNames(b,a,this.valueExpression)];case 2:return d.sent(),[2]}})})};a.prototype._getBreakIndexForExpression=function(b,a){var d=
a.arcadeUtils,c=a.viewingMode,e=a.scale;a=a.spatialReference;var g=this._cache.compiledFunc;g||(g=d.createSyntaxTree(this.valueExpression),g=d.createFunction(g),this._cache.compiledFunc=g);b=d.executeFunction(g,d.createExecContext(b,d.getViewInfo({viewingMode:c,scale:e,spatialReference:a})));return this._getBreakIndexfromInfos(b)};a.prototype._getBreakIndexForField=function(b){var a=b.attributes;b=this.normalizationType;var f=parseFloat(a[this.field]);if(b){var c=this.normalizationTotal,a=parseFloat(a[this.normalizationField]);
if("log"===b)f=Math.log(f)*Math.LOG10E;else if("percent-of-total"===b&&!isNaN(c))f=f/c*100;else if("field"===b&&!isNaN(a)){if(isNaN(f)||isNaN(a))return-1;f/=a}}return this._getBreakIndexfromInfos(f)};a.prototype._getBreakIndexfromInfos=function(a){var b=this.isMaxInclusive;if(null!=a&&"number"===typeof a&&!isNaN(a))for(var c=0;c<this.classBreakInfos.length;c++){var e=[this.classBreakInfos[c].minValue,this.classBreakInfos[c].maxValue];if(e[0]<=a&&(b?a<=e[1]:a<e[1]))return c}return-1};a.prototype._areClassBreaksConsecutive=
function(){for(var a=this.classBreakInfos,d=a.length,c=1;c<d;c++)if(a[c-1].maxValue!==a[c].minValue)return!1;return!0};var u;e([c.property({readOnly:!0,dependsOn:["valueExpression"]})],a.prototype,"_cache",null);e([c.property({types:{base:w.BaseSymbol,key:"type",typeMap:{"simple-fill":h.symbolTypesRenderer.typeMap["simple-fill"],"picture-fill":h.symbolTypesRenderer.typeMap["picture-fill"],"polygon-3d":h.symbolTypesRenderer.typeMap["polygon-3d"]}},json:{origins:{"web-scene":{type:w.PolygonSymbol3D,
read:g.read,write:g.writeTarget}},read:g.read,write:g.writeTarget}})],a.prototype,"backgroundFillSymbol",void 0);e([c.property({type:[l.ClassBreakInfo]})],a.prototype,"classBreakInfos",void 0);e([c.reader("classBreakInfos")],a.prototype,"readClassBreakInfos",null);e([c.writer("classBreakInfos")],a.prototype,"writeClassBreakInfos",null);e([c.property({type:String,json:{write:!0}})],a.prototype,"defaultLabel",void 0);e([c.property({types:h.symbolTypesRenderer})],a.prototype,"defaultSymbol",void 0);
e([c.reader("defaultSymbol")],a.prototype,"readDefaultSymbol",null);e([c.writer("web-scene","defaultSymbol",{defaultSymbol:{types:h.symbolTypesRenderer3D}})],a.prototype,"writeDefaultSymbolWebScene",null);e([c.writer("defaultSymbol")],a.prototype,"writeDefaultSymbol",null);e([c.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);e([c.cast("field")],a.prototype,"castField",null);e([c.property({type:Boolean})],a.prototype,"isMaxInclusive",void 0);e([c.property({type:F.default,json:{write:!0}})],
a.prototype,"legendOptions",void 0);e([c.property({type:Number,readOnly:!0,value:null,dependsOn:["classBreakInfos"],json:{read:!1,write:{overridePolicy:function(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],a.prototype,"minValue",null);e([c.property({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0);e([c.property({type:Number,cast:function(a){return q.ensureNumber(a)},json:{write:!0}})],a.prototype,"normalizationTotal",
void 0);e([c.property({type:m.apiValues,value:null,dependsOn:["normalizationField","normalizationTotal"],json:{type:m.jsonValues,read:m.read,write:m.write}})],a.prototype,"normalizationType",null);e([c.enumeration.serializable()({classBreaks:"class-breaks"})],a.prototype,"type",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);e([A(2,c.cast(h.ensureType))],a.prototype,
"addClassBreakInfo",null);return a=u=e([c.subclass("esri.renderers.ClassBreaksRenderer")],a)}(c.declared(D,E))});