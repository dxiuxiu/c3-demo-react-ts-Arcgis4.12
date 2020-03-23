// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/jsonMap ../core/lang ../core/accessorSupport/decorators ../geometry/Extent ../geometry/SpatialReference ../geometry/support/webMercatorUtils".split(" "),function(u,v,h,k,d,l,m,n,c,p,q,r){var t=new m.default({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});return function(g){function b(a){a=g.call(this)||
this;a.categories=null;a.disableExtraQuery=!1;a.extent=null;a.num=10;a.query=null;a.sortField=null;a.start=1;return a}k(b,g);f=b;Object.defineProperty(b.prototype,"sortOrder",{get:function(){return this._get("sortOrder")||"asc"},set:function(a){"asc"!==a&&"desc"!==a||this._set("sortOrder",a)},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new f({categories:this.categories?n.clone(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():
null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})};b.prototype.toRequestOptions=function(a,b){var c;this.categories&&(c=this.categories.map(function(a){return Array.isArray(a)?JSON.stringify(a):a}));var d;if(this.extent){var e=r.project(this.extent,q.WGS84);e&&(d=e.xmin+","+e.ymin+","+e.xmax+","+e.ymax)}e=this.query;!this.disableExtraQuery&&a.extraQuery&&(e="("+e+")"+a.extraQuery);a={categories:c,bbox:d,q:e,num:this.num,sortField:null,sortOrder:null,
start:this.start};this.sortField&&(a.sortField=t.toJSON(this.sortField),a.sortOrder=this.sortOrder);return{query:h({},b,a)}};var f;d([c.property()],b.prototype,"categories",void 0);d([c.property()],b.prototype,"disableExtraQuery",void 0);d([c.property({type:p})],b.prototype,"extent",void 0);d([c.property()],b.prototype,"num",void 0);d([c.property()],b.prototype,"query",void 0);d([c.property()],b.prototype,"sortField",void 0);d([c.property()],b.prototype,"sortOrder",null);d([c.property()],b.prototype,
"start",void 0);return b=f=d([c.subclass("esri.portal.PortalQueryParams")],b)}(c.declared(l))});