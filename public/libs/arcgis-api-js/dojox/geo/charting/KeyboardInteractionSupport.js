//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/event dojo/_base/connect dojo/_base/html dojo/dom dojox/lang/functional dojo/keys".split(" "),function(w,r,t,b,u,v,n,c){return r("dojox.geo.charting.KeyboardInteractionSupport",null,{_map:null,_zoomEnabled:!1,constructor:function(a,d){this._map=a;d&&(this._zoomEnabled=d.enableZoom)},connect:function(){var a=v.byId(this._map.container);u.attr(a,{tabindex:0,role:"presentation","aria-label":"map"});this._keydownListener=b.connect(a,"keydown",this,
"keydownHandler");this._onFocusListener=b.connect(a,"focus",this,"onFocus");this._onBlurListener=b.connect(a,"blur",this,"onBlur")},disconnect:function(){b.disconnect(this._keydownListener);this._keydownListener=null;b.disconnect(this._onFocusListener);this._onFocusListener=null;b.disconnect(this._onBlurListener);this._onBlurListener=null},keydownHandler:function(a){switch(a.keyCode){case c.LEFT_ARROW:this._directTo(-1,-1,1,-1);break;case c.RIGHT_ARROW:this._directTo(-1,-1,-1,1);break;case c.UP_ARROW:this._directTo(1,
-1,-1,-1);break;case c.DOWN_ARROW:this._directTo(-1,1,-1,-1);break;case c.SPACE:this._map.selectedFeature&&!this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomIn();break;case c.ESCAPE:this._map.selectedFeature&&this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomOut();break;default:return}t.stop(a)},onFocus:function(a){if(!this._map.selectedFeature&&!this._map.focused){this._map.focused=!0;var d;a=!1;if(this._map.lastSelectedFeature)d=
this._map.lastSelectedFeature;else{var b=this._map.getMapCenter(),c=Infinity;n.forIn(this._map.mapObj.features,function(a){var f=Math.sqrt(Math.pow(a._center[0]-b.x,2)+Math.pow(a._center[1]-b.y,2));f<c&&(c=f,d=a)});a=!0}d&&(a&&d._onclickHandler(null),this._map.mapObj.marker.show(d.id))}},onBlur:function(){this._map.lastSelectedFeature=this._map.selectedFeature},_directTo:function(a,d,b,c){var p=this._map.selectedFeature,f=p._center[0],q=p._center[1],h=Infinity,g=null;n.forIn(this._map.mapObj.features,
function(e){var l=Math.abs(f-e._center[0]),m=Math.abs(q-e._center[1]),k=l+m;0<(a-d)*(q-e._center[1])&&l<m&&h>k&&(h=k,g=e);0<(b-c)*(f-e._center[0])&&l>m&&h>k&&(h=k,g=e)});g&&(this._map.mapObj.marker.hide(),g._onclickHandler(null),this._map.mapObj.marker.show(g.id))}})});