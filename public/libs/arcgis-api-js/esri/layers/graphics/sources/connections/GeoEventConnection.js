// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../request ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../FeatureLayer ./StreamConnection ../../../../tasks/operations/query ../../../../tasks/support/Query".split(" "),function(x,r,p,v,m,
z,A,q,B,h,w,u,C,D,y,E){Object.defineProperty(r,"__esModule",{value:!0});var n=B.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),t;(function(h){h[h.CONNECTING=0]="CONNECTING";h[h.OPEN=1]="OPEN";h[h.CLOSING=2]="CLOSING";h[h.CLOSED=3]="CLOSED"})(t=r.ReadyState||(r.ReadyState={}));x=function(r){function d(a,b,c,f,e,g){void 0===f&&(f=5);void 0===e&&(e=3);var k=r.call(this)||this;k.errorString=null;k._source=a;k._spatialReference=b;k._filter=c;k._outFields=g;k._maxQueryDepth=f;
k._maxRecordCountFactor=e;k._open();return k}z(d,r);d.prototype._open=function(){return m(this,void 0,void 0,function(){var a,b,c,f;return p(this,function(e){switch(e.label){case 0:return[4,this._fetchServiceDefinition(this._source)];case 1:return a=e.sent(),a.timeInfo.trackIdField?[4,this._fetchWebSocketUrl(a.streamUrls,this._spatialReference)]:(n.error(q("geoevent-connection","Found an invalid GeoEvent service configuration. No TrackIdField found. Unable to establish WebSocket connection.")),[2]);
case 2:return b=e.sent(),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),[4,this._buddyServicesQuery];case 3:return e.sent(),[4,this._tryCreateWebSocket(b)];case 4:return e.sent(),c=this._filter,f=this._outFields,this._setFilter(c,f),[2]}})})};d.prototype.destroy=function(){h.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close());this._websocket=null};Object.defineProperty(d.prototype,
"connectionStatus",{get:function(){if(h.isNone(this._websocket))return"disconnected";switch(this._websocket.readyState){case t.CONNECTING:case t.OPEN:return"connected";case t.CLOSING:case t.CLOSED:return"disconnected"}},enumerable:!0,configurable:!0});d.prototype._tryCreateWebSocket=function(a,b){void 0===b&&(b=1E3);return m(this,void 0,void 0,function(){var c,f,e;return p(this,function(g){switch(g.label){case 0:return g.trys.push([0,2,,4]),c=this,[4,this._createWebSocket(a)];case 1:return c._websocket=
g.sent(),this.notifyChange("connectionStatus"),[3,4];case 2:return f=g.sent(),e=b/1E3,n.error(q("geoevent-connection","Failed to connect. Attempting to reconnect in "+e+"s",f)),[4,w.after(b)];case 3:return g.sent(),[2,this._tryCreateWebSocket(a,1.5*b)];case 4:return[2]}})})};d.prototype._createWebSocket=function(a){var b=this,c=new WebSocket(a);a=w.create(function(a,b){c.onopen=function(){return a(c)};c.onclose=function(a){return b(a)}});a.then(function(){c.onclose=function(a){return b._onClose(a)};
c.onerror=function(a){return b._onError(a)};c.onmessage=function(a){return b._onMessage(a)}});return a};d.prototype._onMessage=function(a){var b;try{b=this._enrich(JSON.parse(a.data))}catch(c){n.error(q("geoevent-connection","Failed to parse message",c));return}this.onFeature(b)};d.prototype._onError=function(a){this._set("errorString","Encountered an error over WebSocket connection");n.error("geoevent-connection","Encountered an error over WebSocket connection")};d.prototype._onClose=function(a){this._websocket=
null;this.notifyChange("connectionStatus");1E3!==a.code&&n.error("geoevent-connection","WebSocket closed unexpectedly with error code "+a.code);this._open()};d.prototype._fetchServiceDefinition=function(a){return m(this,void 0,void 0,function(){var b,c,f,e;return p(this,function(g){switch(g.label){case 0:return b={f:"json"},c=A(a,{query:b,responseType:"json"}),[4,c];case 1:return f=g.sent(),this._serviceDefinition=e=f.data,[2,e]}})})};d.prototype._fetchWebSocketUrl=function(a,b){return m(this,void 0,
void 0,function(){var c,f,e,g;return p(this,function(k){c=a[0];f=c.urls;e=c.token;g=this._inferWebSocketBaseUrl(f);return[2,g+"/subscribe?outSR\x3d"+b.wkid+(e?"\x26token\x3d"+e:"")]})})};d.prototype._inferWebSocketBaseUrl=function(a){if(1===a.length)return a[0];for(var b=0;b<a.length;b++){var c=a[b];if(-1!==c.indexOf("wss"))return c}n.error(q("geoevent-connection","Unable to infer WebSocket url",a));return null};d.prototype._setFilter=function(a,b){return m(this,void 0,void 0,function(){var c,f,e,
g,k,d,l=this;return p(this,function(p){c=this._websocket;this._filter=a;this._outFields=b;if(h.isNone(c)||h.isNone(a)&&h.isNone(b))return[2];f=JSON.stringify({filter:this._serializeFilter(a,b)});e=!1;g=w.createResolver();k=function(){e||(l._websocket===c&&n.error(q("geoevent-connection","Server timed out when setting filter")),g.reject())};d=function(a){a=JSON.parse(a.data);a.filter&&(a.error&&(n.error(q("geoevent-connection","Failed to set service filter",a.error)),l._set("errorString","Could not set service filter - "+
a.error),g.reject(a.error)),c.onmessage=l._onMessage.bind(l),e=!0,g.resolve())};c.onmessage=d;c.send(f);setTimeout(k,1E4);return[2,g.promise]})})};d.prototype._serializeFilter=function(a,b){var c={};if(h.isNone(a)&&h.isNone(b))return c;h.isSome(a)&&a.geometry&&(c.geometry=JSON.stringify(a.geometry));h.isSome(a)&&a.where&&(c.where=a.where);h.isSome(b)&&(c.outFields=b.join(","));return c};d.prototype._enrich=function(a){if(!this._relatedFeatures)return a;var b=a.attributes[this._serviceDefinition.relatedFeatures.joinField];
if(!this._relatedFeatures.has(b))return n.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",a),a;var c=this._relatedFeatures.get(b),b=c.attributes,c=c.geometry,f;for(f in b)a.attributes[f]=b[f];c&&(a.geometry=c);a.geometry||a.centroid||n.error(q("geoevent-connection","Found malformed feature - no geometry found",a));return a};d.prototype._queryBuddyServices=function(){return m(this,void 0,void 0,function(){var a,b,c,f,e,g,d,h,l,m;return p(this,function(k){switch(k.label){case 0:return k.trys.push([0,
3,,4]),a=this._serviceDefinition,b=a.relatedFeatures,c=a.keepLatestArchive,f=this._queryRelatedFeatures(b),e=this._queryArchive(c),[4,f];case 1:return k.sent(),[4,e];case 2:g=k.sent();if(!g)return[2];d=0;for(h=g.features;d<h.length;d++)l=h[d],this.onFeature(this._enrich(l));return[3,4];case 3:return m=k.sent(),n.error(q("geoevent-connection","Encountered an error when querying buddy services",{error:m})),[3,4];case 4:return[2]}})})};d.prototype._queryRelatedFeatures=function(a){return m(this,void 0,
void 0,function(){var b;return p(this,function(c){switch(c.label){case 0:return a?[4,this._queryBuddy(a.featuresUrl)]:[2];case 1:return b=c.sent(),this._addRelatedFeatures(b),[2]}})})};d.prototype._queryArchive=function(a){return m(this,void 0,void 0,function(){return p(this,function(b){return a?[2,this._queryBuddy(a.featuresUrl)]:[2]})})};d.prototype._queryBuddy=function(a){return m(this,void 0,void 0,function(){var b,c,f,e,d,k,m,l,n;return p(this,function(g){switch(g.label){case 0:return b=new C({url:a}),
[4,b.load()];case 1:return c=g.sent().capabilities,f=c.query.supportsMaxRecordCountFactor,e=c.query.supportsPagination,d=c.query.supportsCentroid,k=this._maxRecordCountFactor,m=f?b.maxRecordCount*k:b.maxRecordCount,l=new E,l.outFields=h.unwrapOr(this._outFields,["*"]),l.where=h.unwrapOr(h.get(this._filter,"where"),"1\x3d1"),l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=this._spatialReference,d&&(l.returnCentroid=!0),f&&(l.maxRecordCountFactor=k),e?(l.num=m,b.destroy(),
[2,this._queryPages(a,l)]):[4,y.executeQuery(a,l)];case 2:return n=g.sent(),b.destroy(),[2,n.data]}})})};d.prototype._queryPages=function(a,b,c,f){void 0===c&&(c=[]);void 0===f&&(f=0);return m(this,void 0,void 0,function(){var e;return p(this,function(d){switch(d.label){case 0:return b.start=f*b.num,[4,y.executeQuery(a,b)];case 1:e=d.sent().data;if(e.exceededTransferLimit&&f<this._maxQueryDepth)return e.features.forEach(function(a){return c.push(a)}),[2,this._queryPages(a,b,c,f+1)];c.forEach(function(a){return e.features.push(a)});
return[2,e]}})})};d.prototype._addRelatedFeatures=function(a){var b=new Map,c=this._serviceDefinition.relatedFeatures.joinField,d=0;for(a=a.features;d<a.length;d++){var e=a[d];b.set(e.attributes[c],e)}this._relatedFeatures=b};v([u.property()],d.prototype,"connectionStatus",null);v([u.property()],d.prototype,"errorString",void 0);return d=v([u.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],d)}(u.declared(D.default));r.default=x});