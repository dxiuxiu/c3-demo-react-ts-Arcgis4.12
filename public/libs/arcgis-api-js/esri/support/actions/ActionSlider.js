// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./ActionBase".split(" "),function(h,k,f,c,b,g){return function(e){function a(a){a=e.call(this)||this;a.displayValueEnabled=!1;a.max=1;a.min=0;a.step=.1;a.type="slider";a.value=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,
visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})};var d;c([b.property()],a.prototype,"displayValueEnabled",void 0);c([b.property()],a.prototype,"max",void 0);c([b.property()],a.prototype,"min",void 0);c([b.property()],a.prototype,"step",void 0);c([b.property()],a.prototype,"value",void 0);return a=d=c([b.subclass("esri.support.Action.ActionSlider")],a)}(b.declared(g))});