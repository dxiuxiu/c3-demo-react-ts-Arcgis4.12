// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../../nls/common ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators ../../../support/actions/ActionButton".split(" "),function(m,n,g,c,f,h,k,b,d){var e=k.ofType(d),l=[new d({title:f.save,id:"save",buttonType:"primary"}),new d({title:f.cancel,id:"cancel",buttonType:"secondary"})];return function(d){function a(a){a=d.call(this,a)||this;a.formActions=
new e(l);a.label=null;a.menuActions=new e;a.title=null;return a}g(a,d);c([b.property()],a.prototype,"content",void 0);c([b.property({type:e})],a.prototype,"formActions",void 0);c([b.property()],a.prototype,"label",void 0);c([b.property({type:e})],a.prototype,"menuActions",void 0);c([b.property()],a.prototype,"title",void 0);return a=c([b.subclass("esri.widgets.FlowManager.Flow")],a)}(b.declared(h))});