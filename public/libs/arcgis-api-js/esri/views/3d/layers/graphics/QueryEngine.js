// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../geometry ../../../../core/Accessor ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../tasks/support/FeatureSet ../../../../tasks/support/Query".split(" "),function(e,l,c,n,g,h,p,q,r,b,t,u,v,
w){Object.defineProperty(l,"__esModule",{value:!0});var x=u.default;e=function(e){function a(a){a=e.call(this)||this;a._dataQueryEngineInstance=null;return a}n(a,e);Object.defineProperty(a.prototype,"queryGeometryType",{get:function(){switch(this.layer.geometryType){case "multipoint":case "point":case "polygon":case "polyline":return this.layer.geometryType;case "mesh":return"polygon"}},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"defaultQueryJSON",{get:function(){return(new w({outSpatialReference:this.spatialReference})).toJSON()},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataQueryEngine",{get:function(){return this.ensureDataQueryEngine()},enumerable:!0,configurable:!0});a.prototype.destroy=function(){this.clear()};a.prototype.clear=function(){return this._dataQueryEngineInstance?(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0):!1};a.prototype.executeQueryForIdSet=function(a,f){return h(this,void 0,void 0,function(){return g(this,function(d){return[2,this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(a),
f)]})})};a.prototype.executeQueryForCount=function(a,f){return h(this,void 0,void 0,function(){return g(this,function(d){return[2,this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(a),f)]})})};a.prototype.executeQueryForExtent=function(a,f){return h(this,void 0,void 0,function(){var d,b,c,k;return g(this,function(m){switch(m.label){case 0:return[4,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),f)];case 1:return d=m.sent(),b=d.count,c=d.extent,k=t.fromJSON(c),[2,{count:b,
extent:k}]}})})};a.prototype.executeQueryForIds=function(a,b){return h(this,void 0,void 0,function(){return g(this,function(d){return[2,this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),b)]})})};a.prototype.executeQuery=function(a,b){return h(this,void 0,void 0,function(){var d,c,f=this;return g(this,function(k){switch(k.label){case 0:return[4,this.dataQueryEngine.executeQuery(this._ensureQueryJSON(a),b)];case 1:return d=k.sent(),c=v.fromJSON(d),c.features.forEach(function(a){a.layer=
f.layer;a.sourceLayer=f.layer}),[2,c]}})})};a.prototype._ensureQueryJSON=function(a){if(r.isNone(a))return this.defaultQueryJSON;"outSpatialReference"in a&&!a.outSpatialReference&&(a.outSpatialReference=this.spatialReference);return a.toJSON()};a.prototype.ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var a="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,b=this.layer.objectIdField,c=p.featureGeometryTypeKebabDictionary.toJSON(this.queryGeometryType),
e=this.layer.fields.map(function(a){return a.toJSON()}),g=this.layerView.view.resourceController.scheduler,k=this.priority,h=this.spatialReference.toJSON(),l=this.layerView;return this._dataQueryEngineInstance=new x({hasZ:l.hasZ,hasM:l.hasM,geometryType:c,fields:e,timeInfo:a,spatialReference:h,objectIdField:b,featureStore:this.layerView.graphics3d.graphicsCore.featureStore,scheduler:g,priority:k})};c([b.property({constructOnly:!0})],a.prototype,"layerView",void 0);c([b.property({constructOnly:!0})],
a.prototype,"priority",void 0);c([b.property({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,aliasOf:"layerView.layer"})],a.prototype,"layer",void 0);c([b.property({readOnly:!0,dependsOn:["layer.geometryType"]})],a.prototype,"queryGeometryType",null);c([b.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"defaultQueryJSON",null);return a=c([b.subclass("esri.views.3d.layers.graphics.QueryEngine")],a)}(b.declared(q));
l.QueryEngine=e;l.default=e});