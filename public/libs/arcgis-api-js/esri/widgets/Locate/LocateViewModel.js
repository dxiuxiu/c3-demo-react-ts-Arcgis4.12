// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper dojo/i18n!./nls/Locate ../../PopupTemplate ../../core/Error ../../core/geolocationUtils ../../core/Handles ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../Popup/actions ../support/GeolocationPositioning".split(" "),function(v,w,h,e,k,l,a,m,f,n,p,q,r,d,g,t){var u={title:a.currentLocation,
fieldInfos:[{fieldName:"timestamp",label:a.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:a.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:a.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:a.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:a.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:a.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",
label:a.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:a.speed,format:{places:0,digitSeparator:!0}}],actions:[g.removeSelectedFeature.clone()],content:[{type:"fields"}]};return function(a){function b(b){var c=a.call(this,b)||this;c._locateController=null;c._handles=new p;c.locate=c.locate.bind(c);c.graphic&&(c.graphic.popupTemplate=new m(u));c._handles.add(r.on(c,"view.popup","trigger-action",function(b){return g.triggerAction({event:b,view:c.view})}));return c}h(b,a);b.prototype.destroy=
function(){this.cancelLocate();this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0});b.prototype.locate=function(){return l(this,void 0,void 0,function(){var b,c,a=this;return k(this,function(d){switch(d.label){case 0:this.cancelLocate();if("disabled"===this.state)throw new f("locate:disabled-state",
"Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new f("locate:feature-unsupported-state","Cannot locate in unsecure domain.");this._locateController=b=q.createAbortController();d.label=1;case 1:return d.trys.push([1,3,,4]),[4,n.getCurrentPosition(this.geolocationOptions).then(function(c){return a._setPosition(c,{signal:b.signal})}).then(function(b){a.view.graphics.remove(a.graphic);a.graphic&&(a.graphic=a.graphic.clone(),a.view.graphics.push(a.graphic));a.emit("locate",
{position:b});a._locateController=null;return b})];case 2:return[2,d.sent()];case 3:return c=d.sent(),this._locateController=null,this.emit("locate-error",{error:c}),[3,4];case 4:return[2]}})})};b.prototype.cancelLocate=function(){this._locateController&&this._locateController.abort();this._locateController=null};e([d.property()],b.prototype,"_locateController",void 0);e([d.property({dependsOn:["view.ready","_locateController","_geolocationUsable"],readOnly:!0})],b.prototype,"state",null);e([d.property()],
b.prototype,"locate",null);e([d.property()],b.prototype,"cancelLocate",null);return b=e([d.subclass("esri.widgets.Locate.LocateViewModel")],b)}(d.declared(t))});