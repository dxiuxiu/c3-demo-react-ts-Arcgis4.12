// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/accessorSupport/decorators ./Slide".split(" "),function(n,p,h,e,k,f,l,c,m){var d=k.ofType(m);return function(g){function b(a){a=g.call(this,a)||this;a.slides=new d;return a}h(b,g);Object.defineProperty(b.prototype,"slides",{set:function(a){a&&(a=a.filter(function(a){return!!a.viewpoint}));this._set("slides",f.referenceSetter(a,this._get("slides"),
d))},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new this.constructor({slides:this.slides.clone()})};e([c.property({type:d,nonNullable:!0,json:{write:!0}}),c.cast(f.castForReferenceSetter)],b.prototype,"slides",null);return b=e([c.subclass("esri.webscene.Presentation")],b)}(c.declared(l))});