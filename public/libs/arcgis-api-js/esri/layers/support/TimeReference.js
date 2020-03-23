// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){a=e.call(this)||this;a.respectsDaylightSaving=!1;a.timezone=null;return a}f(a,e);d=a;a.prototype.readRespectsDaylightSaving=function(a,b){return void 0!==b.respectsDaylightSaving?b.respectsDaylightSaving:void 0!==b.respectDaylightSaving?b.respectDaylightSaving:!1};a.prototype.clone=
function(){return new d({respectsDaylightSaving:this.respectsDaylightSaving,timezone:this.timezone})};var d;c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"respectsDaylightSaving",void 0);c([b.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],a.prototype,"readRespectsDaylightSaving",null);c([b.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],a.prototype,"timezone",void 0);return a=d=c([b.subclass("esri.layers.support.TimeReference")],
a)}(b.declared(g))});