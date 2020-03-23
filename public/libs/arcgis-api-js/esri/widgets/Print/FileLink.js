// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators".split(" "),function(k,l,e,c,f,g,h,b){return function(d){function a(a){a=d.call(this)||this;a._handles=new g;a.state="pending";a.url="";return a}e(a,d);a.prototype.initialize=function(){var a=this;this._handles.add([h.init(this,["extension","name"],function(){return a._setFormattedFileName()})])};a.prototype.destroy=
function(){this._handles.destroy()};a.prototype._setFormattedFileName=function(){if(this.name&&this.extension){var a=this.name+"."+this.extension;this.count&&(a=this.name+"("+this.count+")."+this.extension);this.formattedName=a}};c([b.property()],a.prototype,"count",void 0);c([b.property()],a.prototype,"extension",void 0);c([b.property()],a.prototype,"formattedName",void 0);c([b.property()],a.prototype,"name",void 0);c([b.property()],a.prototype,"state",void 0);c([b.property()],a.prototype,"url",
void 0);return a=c([b.subclass("esri.widgets.print.FileLink")],a)}(b.declared(f))});