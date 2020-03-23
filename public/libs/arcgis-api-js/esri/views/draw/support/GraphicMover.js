// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Evented ../../../core/Handles ../../../core/lang ../../../core/screenUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./drawUtils ./input/GraphicMoverEvents".split(" "),function(x,y,r,g,t,u,n,v,l,w,e,p,k){return function(q){function d(a){a=q.call(this,a)||this;a._activeGraphic=null;a._dragEvent=null;a._handles=new n;a._hoverGraphic=
null;a._initialDragGeometry=null;a._pointerDownEvent=null;a._viewHandles=new n;a.type="graphic-mover";a.callbacks={onGraphicClick:function(a){},onGraphicDoubleClick:function(a){},onGraphicMoveStart:function(a){},onGraphicMove:function(a){},onGraphicMoveStop:function(a){},onGraphicPointerOver:function(a){},onGraphicPointerOut:function(a){},onGraphicPointerDown:function(a){},onGraphicPointerUp:function(a){}};a.enableMoveAllGraphics=!1;a.graphics=[];a.view=null;return a}r(d,q);d.prototype.initialize=
function(){var a=this;this._handles.add([w.whenOnce(this,"view.ready",function(){a._viewHandles.add([a.view.on("click",function(b){return a._clickHandler(b)}),a.view.on("double-click",function(b){return a._doubleClickHandler(b)}),a.view.on("pointer-down",function(b){return a._pointerDownHandler(b)}),a.view.on("pointer-move",function(b){return a._pointerMoveHandler(b)}),a.view.on("pointer-up",function(b){return a._pointerUpHandler(b)}),a.view.on("drag",function(b){return a._dragHandler(b)}),a.view.on("key-down",
function(b){return a._keyDownHandler(b)})])})])};d.prototype.destroy=function(){this.reset();this._viewHandles.removeAll();this._handles.removeAll()};Object.defineProperty(d.prototype,"state",{get:function(){var a=!!this.get("view.ready"),b=!!this.get("graphics.length"),c=this._activeGraphic;return a&&b?c?"moving":"active":a?"ready":"disabled"},enumerable:!0,configurable:!0});d.prototype.reset=function(){this._dragEvent=this._hoverGraphic=this._activeGraphic=null};d.prototype.updateGeometry=function(a,
b){(a=this.graphics[a])&&a.set("geometry",b)};d.prototype._clickHandler=function(a){var b=this;this.view.hitTest(l.createScreenPointFromEvent(a)).then(function(c){c=c.results;c.length&&c[0].graphic&&(c=c[0].graphic,-1<b.graphics.indexOf(c)&&(c=new k.GraphicClickEvent(c,b.graphics.indexOf(c),a.x,a.y,a),b.emit("graphic-click",c),b.callbacks.onGraphicClick&&b.callbacks.onGraphicClick(c)))})};d.prototype._doubleClickHandler=function(a){var b=this;this.view.hitTest(l.createScreenPointFromEvent(a)).then(function(c){c=
c.results;c.length&&c[0].graphic&&(c=c[0].graphic,-1<b.graphics.indexOf(c)&&(c=new k.GraphicDoubleClickEvent(c,b.graphics.indexOf(c),a.x,a.y,a),b.emit("graphic-double-click",c),b.callbacks.onGraphicDoubleClick&&b.callbacks.onGraphicDoubleClick(c)))})};d.prototype._pointerDownHandler=function(a){var b=this;this._pointerDownEvent=a;this.view.hitTest(l.createScreenPointFromEvent(a)).then(function(c){c=c.results;if(c.length&&c[0].graphic)if(c=c[0].graphic,-1<b.graphics.indexOf(c)){b._activeGraphic=c;
var d=a.x,h=a.y;c=new k.GraphicPointerDownEvent(c,b.graphics.indexOf(c),d,h,a);b.emit("graphic-pointer-down",c);b.callbacks.onGraphicPointerDown&&b.callbacks.onGraphicPointerDown(c)}else c!==b._activeGraphic&&(b._pointerDownEvent=null,b._activeGraphic=null);else b._pointerDownEvent=null,b._activeGraphic=null})};d.prototype._pointerUpHandler=function(a){this._pointerDownEvent=null;if(this._activeGraphic){var b=a.x,c=a.y,d=this.graphics.indexOf(this._activeGraphic);a=new k.GraphicPointerUpEvent(this._activeGraphic,
d,b,c,a);this._activeGraphic=null;this.emit("graphic-pointer-up",a);this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}};d.prototype._pointerMoveHandler=function(a){var b=this;this._dragEvent||this.view.hitTest(l.createScreenPointFromEvent(a)).then(function(c){c=c.results;if(c.length&&c[0].graphic){c=c[0].graphic;if(c===b._hoverGraphic)return;if(-1<b.graphics.indexOf(c)){var d=a.x,h=a.y;if(b._hoverGraphic){var f=b.graphics.indexOf(b._hoverGraphic),f=new k.GraphicPointerOutEvent(b.graphics[f],
f,d,h,a);b._hoverGraphic=null;b.emit("graphic-pointer-out",f);b.callbacks.onGraphicPointerOut&&b.callbacks.onGraphicPointerOut(f)}f=b.graphics.indexOf(c);d=new k.GraphicPointerOverEvent(c,f,d,h,a);b._hoverGraphic=c;b.emit("graphic-pointer-over",d);b.callbacks.onGraphicPointerOver&&b.callbacks.onGraphicPointerOver(d);return}}b._hoverGraphic&&(d=a.x,h=a.y,f=b.graphics.indexOf(b._hoverGraphic),d=new k.GraphicPointerOutEvent(b.graphics[f],f,d,h,a),b._hoverGraphic=null,b.emit("graphic-pointer-out",d),
b.callbacks.onGraphicPointerOut&&b.callbacks.onGraphicPointerOut(d))})};d.prototype._dragHandler=function(a){var b=this;if(this._pointerDownEvent&&("start"===a.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){a.stopPropagation();var c=a.x,d=a.y,h=this.graphics.indexOf(this._activeGraphic),f=this._activeGraphic.geometry,e=this._dragEvent?c-this._dragEvent.x:0,g=this._dragEvent?d-this._dragEvent.y:0,l=c-a.origin.x,m=d-a.origin.y;this._activeGraphic.geometry=p.cloneMove(f,
e,g,this.view);this.enableMoveAllGraphics&&this.graphics.forEach(function(a){a!==b._activeGraphic&&(a.geometry=p.cloneMove(a.geometry,e,g,b.view))});this._dragEvent=a;"start"===a.action?(this._initialDragGeometry=v.clone(f),a=new k.GraphicMoveStartEvent(this._activeGraphic,this.graphics,h,c,d,e,g,l,m,a),this.emit("graphic-move-start",a),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(a),a.defaultPrevented&&this._activeGraphic.set("geometry",f)):"update"===a.action?(a=new k.GraphicMoveEvent(this._activeGraphic,
this.graphics,h,c,d,e,g,l,m,a),this.emit("graphic-move",a),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(a),a.defaultPrevented&&this._activeGraphic.set("geometry",f)):(this._dragEvent=null,a=new k.GraphicMoveStopEvent(this._activeGraphic,this.graphics,h,c,d,e,g,l,m,a),this.emit("graphic-move-stop",a),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(a),a.defaultPrevented&&this.graphics[h].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null)}};d.prototype._keyDownHandler=
function(a){"a"!==a.key&&"d"!==a.key&&"n"!==a.key||"moving"!==this.state||a.stopPropagation()};g([e.property()],d.prototype,"_activeGraphic",void 0);g([e.property({readOnly:!0})],d.prototype,"type",void 0);g([e.property()],d.prototype,"callbacks",void 0);g([e.property()],d.prototype,"enableMoveAllGraphics",void 0);g([e.property()],d.prototype,"graphics",void 0);g([e.property({dependsOn:["view.ready","graphics.length","_activeGraphic"],readOnly:!0})],d.prototype,"state",null);g([e.property()],d.prototype,
"view",void 0);return d=g([e.subclass("esri.views.draw.support.GraphicMover")],d)}(e.declared(t,u))});