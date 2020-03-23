// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../geometry/Extent ./TileInfo".split(" "),function(m,n,g,d,p,h,c,k,l){return function(f){function b(a){a=f.call(this)||this;a.fullExtent=null;a.id=null;a.tileInfo=null;return a}g(b,f);e=b;b.prototype.clone=function(){var a=new e;this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent&&this.fullExtent.clone());
this.hasOwnProperty("id")&&(a.id=this.id);this.hasOwnProperty("tileInfo")&&(a.tileInfo=this.tileInfo&&this.tileInfo.clone());return a};var e;d([c.property({type:k,json:{read:{source:"fullExtent"}}})],b.prototype,"fullExtent",void 0);d([c.property({type:String,json:{read:{source:"id"}}})],b.prototype,"id",void 0);d([c.property({type:l,json:{read:{source:"tileInfo"}}})],b.prototype,"tileInfo",void 0);return b=e=d([c.subclass("esri.layer.support.TileMatrixSet")],b)}(c.declared(h))});