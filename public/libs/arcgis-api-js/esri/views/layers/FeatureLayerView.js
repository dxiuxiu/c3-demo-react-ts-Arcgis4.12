// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Set ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/support/fieldUtils ../../layers/support/timeUtils ../../support/arcadeOnDemand ../../tasks/support/Query ./RefreshableLayerView ./support/FeatureEffect ./support/FeatureFilter ./support/popupUtils".split(" "),
function(M,N,B,d,O,w,l,C,D,r,E,t,u,F,e,g,G,H,I,J,K,L,v){var y=E.getLogger("esri.views.layers.FeatureLayerView");return function(z){function a(b){b=z.call(this,b)||this;b.effect=null;b.filter=null;b.layer=null;b.requiredFields=null;b.view=null;return b}B(a,z);a.prototype.initialize=function(){var b=this;F.init(this,"layer.renderer layer.labelingInfo layer.elevationInfo.featureExpressionInfo filter effect layer.timeInfo timeExtent".split(" "),function(){return b._updateRequiredFields()})};Object.defineProperty(a.prototype,
"availableFields",{get:function(){var b=this.layer,a=this.layer.fields,c=this.requiredFields;return"outFields"in b&&b.outFields?g.fixFields(a,g.unpackFieldNames(a,b.outFields).concat(c)):g.fixFields(a,c)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(b){y.error("#maximumNumberOfFeatures\x3d","Setting maximum number of features is not supported")},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maximumNumberOfFeaturesExceeded",
{get:function(){return!1},enumerable:!0,configurable:!0});a.prototype.highlight=function(b,a){void 0===a&&(a={});return this.inherited(arguments)};a.prototype.createQuery=function(){var b={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},b=t.isSome(this.filter)?this.filter.createQuery(b):new I(b);this.timeExtent&&(b.timeExtent=b.timeExtent?b.timeExtent.intersection(this.timeExtent):this.timeExtent.clone());return b};a.prototype.queryFeatures=function(b,a){return this.inherited(arguments)};
a.prototype.queryObjectIds=function(b,a){return this.inherited(arguments)};a.prototype.queryFeatureCount=function(b,a){return this.inherited(arguments)};a.prototype.queryExtent=function(b,a){return this.inherited(arguments)};a.prototype._updateRequiredFields=function(){return l(this,void 0,void 0,function(){var b,a,c,h,x,e,d,f,m,n,k,p,q;return w(this,function(A){switch(A.label){case 0:if(!this.layer||!this.view)return[2];b="3d"===this.view.type;a=this;h=c=a.layer;x=h.fields;e=h.objectIdField;d=h.renderer;
f=new D.default;return[4,u.eachAlways([d?d.collectRequiredFields(f,x):null,g.collectLabelingFields(f,c),b?g.collectElevationFields(f,c):null,t.isSome(this.filter)?g.collectFilterFields(f,c,this.filter):null,this.effect?g.collectFilterFields(f,c,this.effect.filter):null])];case 1:m=A.sent();c.timeInfo&&this.timeExtent&&g.collectFields(f,c.fields,[c.timeInfo.startField,c.timeInfo.endField]);n=0;for(k=m;n<k.length;n++)p=k[n],p.error&&y.error(p.error);g.collectField(f,x,e);q=C.from(f).sort();this._set("requiredFields",
q);return[2]}})})};a.prototype.validateFetchPopupFeatures=function(a){var b=this.layer;if(!this.layer.popupEnabled)return new r("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:b});if(!v.getFetchPopupTemplate(this.layer,a))return new r("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:b})};a.prototype.fetchClientPopupFeatures=function(a){return l(this,void 0,void 0,function(){var b,c,d,e,l,r,f,m,n,k,p,q;return w(this,function(h){switch(h.label){case 0:b=
t.isSome(a)?a.clientGraphics:null;if(!b||0===b.length)return[2,u.resolve([])];c=[];d=[];e=this.layer;l=v.getFetchPopupTemplate(e,a);return t.isSome(l)?[4,H.loadArcade()]:[2,u.resolve([])];case 1:return r=h.sent().arcadeUtils,f=r.hasGeometryOperations(l),[4,this.createPopupQuery(a)];case 2:m=h.sent();n=g.unpackFieldNames(e.fields,m.outFields);k=0;for(p=b;k<p.length;k++)q=p[k],f||!g.featureHasFields(n,q)?d.push(q):c.push(q);if(0===d.length)return[2,u.resolve(c)];m.objectIds=d.map(function(a){return a.attributes[e.objectIdField]});
return[2,e.queryFeatures(m).then(function(a){return c.concat(a.features)}).catch(function(){return d})]}})})};a.prototype.createPopupQuery=function(a){return l(this,void 0,void 0,function(){var b,c,d;return w(this,function(e){switch(e.label){case 0:return b=this.layer,c=b.createQuery(),c.returnGeometry=!0,c.returnZ=!0,c.returnM=!0,d=c,[4,v.getRequiredFields(this.layer,v.getFetchPopupTemplate(this.layer,a))];case 1:return d.outFields=e.sent(),c.outSpatialReference=this.view.spatialReference,[2,c]}})})};
d([e.property({readOnly:!0,dependsOn:["layer.outFields?","requiredFields"]})],a.prototype,"availableFields",null);d([e.property({type:K})],a.prototype,"effect",void 0);d([e.property({type:L})],a.prototype,"filter",void 0);d([e.property(G.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0);d([e.property()],a.prototype,"layer",void 0);d([e.property({type:Number})],a.prototype,"maximumNumberOfFeatures",null);d([e.property({readOnly:!0,type:Boolean})],a.prototype,"maximumNumberOfFeaturesExceeded",
null);d([e.property({readOnly:!0})],a.prototype,"requiredFields",void 0);d([e.property()],a.prototype,"view",void 0);return a=d([e.subclass("esri.views.layers.FeatureLayerView")],a)}(e.declared(J))});