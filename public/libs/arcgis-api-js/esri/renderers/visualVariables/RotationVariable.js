// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/accessorSupport/decorators ./VisualVariable".split(" "),function(l,m,g,c,h,b,k){return function(f){function a(a){a=f.call(this,a)||this;a.axis=null;a.type="rotation";a.rotationType="geographic";a.valueExpressionTitle=null;return a}g(a,f);e=a;Object.defineProperty(a.prototype,"cache",{get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,
configurable:!0});a.prototype.writeValueExpressionTitleWebScene=function(a,b,c,d){d&&d.messages&&d.messages.push(new h("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:"visualVariables["+this.index+"].valueExpressionTitle",context:d}))};a.prototype.clone=function(){return new e({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,
valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})};var e;c([b.property({readOnly:!0,dependsOn:["valueExpression"]})],a.prototype,"cache",null);c([b.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0);c([b.property({type:["rotation"],json:{type:["rotationInfo"]}})],a.prototype,"type",void 0);c([b.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,
default:"geographic"}}}})],a.prototype,"rotationType",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);c([b.writer("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null);return a=e=c([b.subclass("esri.renderers.visualVariables.RotationVariable")],a)}(b.declared(k))});