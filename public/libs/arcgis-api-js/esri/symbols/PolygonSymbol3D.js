// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/maybe ../core/accessorSupport/decorators ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./WaterSymbol3DLayer".split(" "),function(A,B,t,g,c,u,h,v,e,l,k,m,n,p,w,x,q){var y=c.ofType({base:null,key:"type",typeMap:{extrude:l,fill:k,icon:m,line:n,object:p,text:x,water:q}}),
z=c.ofType({base:null,key:"type",typeMap:{extrude:l,fill:k,icon:m,line:n,object:p,water:q}});return function(c){function a(b){b=c.call(this)||this;b.type="polygon-3d";return b}t(a,c);f=a;a.prototype.writeSymbolLayers=function(b,a,c,d){var r=b.filter(function(b){return"text"!==b.type});d&&d.messages&&r.length<b.length&&(b=b.find(function(b){return"text"===b.type}),d.messages.push(new u("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:b})));
a[c]=r.map(function(b){return b.write({},d)}).toArray()};a.prototype.clone=function(){return new f({styleOrigin:h.clone(this.styleOrigin),symbolLayers:h.clone(this.symbolLayers),thumbnail:h.clone(this.thumbnail)})};a.fromJSON=function(b){var a=new f;a.read(b);if(2===a.symbolLayers.length&&"fill"===a.symbolLayers.getItemAt(0).type&&"line"===a.symbolLayers.getItemAt(1).type){var c=a.symbolLayers.getItemAt(0),d=a.symbolLayers.getItemAt(1);!d.enabled||b.symbolLayers&&b.symbolLayers[1]&&!1===b.symbolLayers[1].enable||
(c.outline={size:d.size,color:v.isSome(d.material)?d.material.color:null});a.symbolLayers.removeAt(1)}return a};a.fromSimpleFillSymbol=function(a){return new f({symbolLayers:[k.fromSimpleFillSymbol(a)]})};var f;g([e.property({type:y,json:{type:z}})],a.prototype,"symbolLayers",void 0);g([e.writer("web-scene","symbolLayers")],a.prototype,"writeSymbolLayers",null);g([e.enumeration.serializable()({PolygonSymbol3D:"polygon-3d"})],a.prototype,"type",void 0);return a=f=g([e.subclass("esri.symbols.PolygonSymbol3D")],
a)}(e.declared(w))});