// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/maybe ../core/accessorSupport/decorators ./Symbol3DLayer ./support/Symbol3DMaterial".split(" "),function(l,m,f,c,g,b,h,k){return function(e){function a(a){a=e.call(this)||this;a.material=null;a.castShadows=!0;a.type="path";a.profile="circle";a.join="miter";a.cap="butt";a.width=void 0;a.height=void 0;a.anchor="center";a.profileRotation="all";return a}f(a,e);d=a;Object.defineProperty(a.prototype,
"size",{get:function(){if(this.width&&this.height){if(this.width===this.height)return this.width}else{if(this.width)return this.width;if(this.height)return this.height}},set:function(a){this.height=this.width=a},enumerable:!0,configurable:!0});a.prototype.readSize=function(a,b){return b.height||b.width?a:b.size};a.prototype.clone=function(){return new d({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:g.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,
size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})};var d;c([b.property({type:k.default,json:{write:!0}})],a.prototype,"material",void 0);c([b.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);c([b.enumeration.serializable()({Path:"path"})],a.prototype,"type",void 0);c([b.property({type:Number})],a.prototype,"size",null);c([b.reader("size")],
a.prototype,"readSize",null);c([b.property({type:String,json:{write:!0,default:"circle"}})],a.prototype,"profile",void 0);c([b.property({type:String,json:{write:!0,default:"miter"}})],a.prototype,"join",void 0);c([b.property({type:String,json:{write:!0,default:"butt"}})],a.prototype,"cap",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"width",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"height",void 0);c([b.property({type:String,json:{write:!0,default:"center"}})],
a.prototype,"anchor",void 0);c([b.property({type:String,json:{write:!0,default:"all"}})],a.prototype,"profileRotation",void 0);return a=d=c([b.subclass("esri.symbols.PathSymbol3DLayer")],a)}(b.declared(h))});