//>>built
define("./_base dojo/_base/lang dojo/_base/declare dojo/_base/kernel dojo/_base/sniff dojo/on dojo/_base/array dojo/dom-construct dojo/_base/Color ./matrix".split(" "),function(c,h,g,q,k,n,l,p,r,f){function m(a,b){for(var d=a.length-1;b<d;)a[b]=a[++b];a.length=d}var e=c.shape={};e.Shape=g("dojox.gfx.shape.Shape",null,{constructor:function(){this.parentMatrix=this.parent=this.bbox=this.strokeStyle=this.fillStyle=this.matrix=this.shape=this.rawNode=null;if(k("gfxRegistry")){var a=e.register(this);this.getUID=
function(){return a}}},destroy:function(){k("gfxRegistry")&&e.dispose(this);this.rawNode&&"__gfxObject__"in this.rawNode&&(this.rawNode.__gfxObject__=null);this.rawNode=null},getNode:function(){return this.rawNode},getShape:function(){return this.shape},getTransform:function(){return this.matrix},getFill:function(){return this.fillStyle},getStroke:function(){return this.strokeStyle},getParent:function(){return this.parent},getBoundingBox:function(){return this.bbox},getTransformedBoundingBox:function(){var a=
this.getBoundingBox();if(!a)return null;var b=this._getRealMatrix();return[f.multiplyPoint(b,a.x,a.y),f.multiplyPoint(b,a.x+a.width,a.y),f.multiplyPoint(b,a.x+a.width,a.y+a.height),f.multiplyPoint(b,a.x,a.y+a.height)]},getEventSource:function(){return this.rawNode},setClip:function(a){this.clip=a},getClip:function(){return this.clip},setShape:function(a){this.shape=c.makeParameters(this.shape,a);this.bbox=null;return this},setFill:function(a){if(!a)return this.fillStyle=null,this;var b=null;if("object"==
typeof a&&"type"in a)switch(a.type){case "linear":b=c.makeParameters(c.defaultLinearGradient,a);break;case "radial":b=c.makeParameters(c.defaultRadialGradient,a);break;case "pattern":b=c.makeParameters(c.defaultPattern,a)}else b=c.normalizeColor(a);this.fillStyle=b;return this},setStroke:function(a){if(!a)return this.strokeStyle=null,this;if("string"==typeof a||h.isArray(a)||a instanceof r)a={color:a};a=this.strokeStyle=c.makeParameters(c.defaultStroke,a);a.color=c.normalizeColor(a.color);return this},
setTransform:function(a){this.matrix=f.clone(a?f.normalize(a):f.identity);return this._applyTransform()},_applyTransform:function(){return this},moveToFront:function(){var a=this.getParent();a&&(a._moveChildToFront(this),this._moveToFront());return this},moveToBack:function(){var a=this.getParent();a&&(a._moveChildToBack(this),this._moveToBack());return this},_moveToFront:function(){},_moveToBack:function(){},applyRightTransform:function(a){return a?this.setTransform([this.matrix,a]):this},applyLeftTransform:function(a){return a?
this.setTransform([a,this.matrix]):this},applyTransform:function(a){return a?this.setTransform([this.matrix,a]):this},removeShape:function(a){this.parent&&this.parent.remove(this,a);return this},_setParent:function(a,b){this.parent=a;return this._updateParentMatrix(b)},_updateParentMatrix:function(a){this.parentMatrix=a?f.clone(a):null;return this._applyTransform()},_getRealMatrix:function(){for(var a=this.matrix,b=this.parent;b;)b.matrix&&(a=f.multiply(b.matrix,a)),b=b.parent;return a}});e._eventsProcessing=
{on:function(a,b){return n(this.getEventSource(),a,e.fixCallback(this,c.fixTarget,b))},connect:function(a,b,d){"on"==a.substring(0,2)&&(a=a.substring(2));return this.on(a,d?h.hitch(b,d):b)},disconnect:function(a){return a.remove()}};e.fixCallback=function(a,b,d,c){c||(c=d,d=null);if(h.isString(c)){d=d||q.global;if(!d[c])throw['dojox.gfx.shape.fixCallback: scope["',c,'"] is null (scope\x3d"',d,'")'].join("");return function(e){return b(e,a)?d[c].apply(d,arguments||[]):void 0}}return d?function(e){return b(e,
a)?c.apply(d,arguments||[]):void 0}:function(e){return b(e,a)?c.apply(d,arguments):void 0}};h.extend(e.Shape,e._eventsProcessing);e.Container={_init:function(){this.children=[];this._batch=0},openBatch:function(){return this},closeBatch:function(){return this},add:function(a){var b=a.getParent();b&&b.remove(a,!0);this.children.push(a);return a._setParent(this,this._getRealMatrix())},remove:function(a,b){for(var d=0;d<this.children.length;++d)if(this.children[d]==a){b||(a.parent=null,a.parentMatrix=
null);m(this.children,d);break}return this},clear:function(a){for(var b,d=0;d<this.children.length;++d)b=this.children[d],b.parent=null,b.parentMatrix=null,a&&b.destroy();this.children=[];return this},getBoundingBox:function(){if(this.children){var a=null;l.forEach(this.children,function(b){var d=b.getBoundingBox();d&&((b=b.getTransform())&&(d=f.multiplyRectangle(b,d)),a?(a.x=Math.min(a.x,d.x),a.y=Math.min(a.y,d.y),a.endX=Math.max(a.endX,d.x+d.width),a.endY=Math.max(a.endY,d.y+d.height)):a={x:d.x,
y:d.y,endX:d.x+d.width,endY:d.y+d.height})});a&&(a.width=a.endX-a.x,a.height=a.endY-a.y);return a}return null},_moveChildToFront:function(a){for(var b=0;b<this.children.length;++b)if(this.children[b]==a){m(this.children,b);this.children.push(a);break}return this},_moveChildToBack:function(a){for(var b=0;b<this.children.length;++b)if(this.children[b]==a){m(this.children,b);this.children.unshift(a);break}return this}};e.Surface=g("dojox.gfx.shape.Surface",null,{constructor:function(){this._parent=this.rawNode=
null;this._nodes=[];this._events=[]},destroy:function(){l.forEach(this._nodes,p.destroy);this._nodes=[];l.forEach(this._events,function(a){a&&a.remove()});this._events=[];this.rawNode=null;if(k("ie"))for(;this._parent.lastChild;)p.destroy(this._parent.lastChild);else this._parent.innerHTML="";this._parent=null},getEventSource:function(){return this.rawNode},_getRealMatrix:function(){return null},isLoaded:!0,onLoad:function(a){},whenLoaded:function(a,b){var d=h.hitch(a,b);if(this.isLoaded)d(this);
else n.once(this,"load",function(a){d(a)})}});h.extend(e.Surface,e._eventsProcessing);e.Rect=g("dojox.gfx.shape.Rect",e.Shape,{constructor:function(a){this.shape=c.getDefault("Rect");this.rawNode=a},getBoundingBox:function(){return this.shape}});e.Ellipse=g("dojox.gfx.shape.Ellipse",e.Shape,{constructor:function(a){this.shape=c.getDefault("Ellipse");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.rx,y:a.cy-a.ry,width:2*a.rx,height:2*a.ry}}return this.bbox}});
e.Circle=g("dojox.gfx.shape.Circle",e.Shape,{constructor:function(a){this.shape=c.getDefault("Circle");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r}}return this.bbox}});e.Line=g("dojox.gfx.shape.Line",e.Shape,{constructor:function(a){this.shape=c.getDefault("Line");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:Math.min(a.x1,a.x2),y:Math.min(a.y1,a.y2),width:Math.abs(a.x2-
a.x1),height:Math.abs(a.y2-a.y1)}}return this.bbox}});e.Polyline=g("dojox.gfx.shape.Polyline",e.Shape,{constructor:function(a){this.shape=c.getDefault("Polyline");this.rawNode=a},setShape:function(a,b){a&&a instanceof Array?(this.inherited(arguments,[{points:a}]),b&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.inherited(arguments,[a]);return this},_normalizePoints:function(){var a=this.shape.points,b=a&&a.length;if(b&&"number"==typeof a[0]){for(var d=[],c=0;c<b;c+=
2)d.push({x:a[c],y:a[c+1]});this.shape.points=d}},getBoundingBox:function(){if(!this.bbox&&this.shape.points.length){for(var a=this.shape.points,b=a.length,d=a[0],c=d.x,e=d.y,f=d.x,g=d.y,h=1;h<b;++h)d=a[h],c>d.x&&(c=d.x),f<d.x&&(f=d.x),e>d.y&&(e=d.y),g<d.y&&(g=d.y);this.bbox={x:c,y:e,width:f-c,height:g-e}}return this.bbox}});e.Image=g("dojox.gfx.shape.Image",e.Shape,{constructor:function(a){this.shape=c.getDefault("Image");this.rawNode=a},getBoundingBox:function(){return this.shape},setStroke:function(){return this},
setFill:function(){return this}});e.Text=g(e.Shape,{constructor:function(a){this.fontStyle=null;this.shape=c.getDefault("Text");this.rawNode=a},getFont:function(){return this.fontStyle},setFont:function(a){this.fontStyle="string"==typeof a?c.splitFontString(a):c.makeParameters(c.defaultFont,a);this._setFont();return this},getBoundingBox:function(){var a=null;this.getShape().text&&(a=c._base._computeTextBoundingBox(this));return a}});e.Creator={createShape:function(a){switch(a.type){case c.defaultPath.type:return this.createPath(a);
case c.defaultRect.type:return this.createRect(a);case c.defaultCircle.type:return this.createCircle(a);case c.defaultEllipse.type:return this.createEllipse(a);case c.defaultLine.type:return this.createLine(a);case c.defaultPolyline.type:return this.createPolyline(a);case c.defaultImage.type:return this.createImage(a);case c.defaultText.type:return this.createText(a);case c.defaultTextPath.type:return this.createTextPath(a)}return null},createGroup:function(){return this.createObject(c.Group)},createRect:function(a){return this.createObject(c.Rect,
a)},createEllipse:function(a){return this.createObject(c.Ellipse,a)},createCircle:function(a){return this.createObject(c.Circle,a)},createLine:function(a){return this.createObject(c.Line,a)},createPolyline:function(a){return this.createObject(c.Polyline,a)},createImage:function(a){return this.createObject(c.Image,a)},createText:function(a){return this.createObject(c.Text,a)},createPath:function(a){return this.createObject(c.Path,a)},createTextPath:function(a){return this.createObject(c.TextPath,{}).setText(a)},
createObject:function(a,b){return null}};return e});