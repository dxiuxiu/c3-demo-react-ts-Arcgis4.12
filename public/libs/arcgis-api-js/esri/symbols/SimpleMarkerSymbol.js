// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Color ../core/jsonMap ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./MarkerSymbol ./SimpleLineSymbol".split(" "),function(t,u,l,d,m,n,p,q,b,r,h){var f=new n.default({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});return function(k){function a(c,a,b,d){c=k.call(this,c)||this;
c.color=new m([255,255,255,.25]);c.type="simple-marker";c.size=12;c.style="circle";c.outline=new h;return c}l(a,k);g=a;a.prototype.normalizeCtorArgs=function(c,a,b,d){if(c&&"string"!==typeof c)return c;var e={};c&&(e.style=c);null!=a&&(e.size=q.toPt(a));b&&(e.outline=b);d&&(e.color=d);return e};a.prototype.writeColor=function(a,b){a&&"x"!==this.style&&"cross"!==this.style&&(b.color=a.toJSON())};Object.defineProperty(a.prototype,"path",{set:function(a){this.style="path";this._set("path",a)},enumerable:!0,
configurable:!0});a.prototype.clone=function(){return new g({angle:this.angle,color:p.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})};var g;d([b.property()],a.prototype,"color",void 0);d([b.writer("color")],a.prototype,"writeColor",null);d([b.enumeration.serializable()({esriSMS:"simple-marker"})],a.prototype,"type",void 0);d([b.property()],a.prototype,"size",void 0);d([b.property({type:f.apiValues,
json:{read:f.read,write:f.write}})],a.prototype,"style",void 0);d([b.property({type:String,json:{write:!0}})],a.prototype,"path",null);d([b.property({type:h,json:{default:null,write:!0}})],a.prototype,"outline",void 0);return a=g=d([b.subclass("esri.symbols.SimpleMarkerSymbol")],a)}(b.declared(r))});