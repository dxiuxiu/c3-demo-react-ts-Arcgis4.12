// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/lang ../../core/accessorSupport/decorators ../../layers/support/AttachmentInfo ./Content".split(" "),function(l,m,f,c,g,b,h,k){return function(e){function a(a){a=e.call(this)||this;a.attachmentInfos=null;a.displayType=null;a.type="attachments";return a}f(a,e);d=a;a.prototype.clone=function(){return new d({displayType:this.displayType,attachmentInfos:this.attachmentInfos?g.clone(this.attachmentInfos):
null})};var d;c([b.property({type:[h]})],a.prototype,"attachmentInfos",void 0);c([b.property({type:["preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0);c([b.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=c([b.subclass("esri.popup.content.AttachmentsContent")],a)}(b.declared(k))});