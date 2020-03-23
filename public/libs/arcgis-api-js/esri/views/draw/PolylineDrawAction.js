// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Evented ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/DrawEvents ./input/Keys".split(" "),function(u,v,n,g,p,q,r,k,l,d,t,f,h){return function(m){function c(a){a=m.call(this,a)||this;a._cursorScreenPoint=null;a._panEnabled=!1;a._cursorVertexAdded=!1;a._popVertexOnPointerMove=!1;a._addVertexOnPointerUp=
!1;a._activePointerId=null;a._viewHandles=new r;a.mode="hybrid";a.vertices=[];a.view=null;return a}n(c,m);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};Object.defineProperty(c.prototype,"_clickEnabled",{get:function(){return-1!==["hybrid","click"].indexOf(this.mode)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_dragEnabled",{get:function(){return-1!==["hybrid",
"freehand"].indexOf(this.mode)},enumerable:!0,configurable:!0});c.prototype.addVertex=function(a,b){var e=this;this.vertices.splice(b,0,a);this.history.push({vertex:a,vertexIndex:b,undo:function(){return e._undoVertexAdd(null,a,b)},redo:function(){return e._redoVertexAdd(null,a,b)}});this._set("redoHistory",[]);var c=new f.VertexAddEvent(this.view,null,b,this.vertices);this.emit("vertex-add",c);c.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())};c.prototype.removeVertex=function(a){var b=
this,e=this.vertices.splice(a,1)[0];this.history.push({vertex:e,vertexIndex:a,undo:function(){return b._undoVertexRemove(null,e,a)},redo:function(){return b._redoVertexRemove(null,e,a)}});this._set("redoHistory",[]);this.emit("vertex-remove",new f.VertexRemoveEvent(this.view,null,a,this.vertices))};c.prototype.updateVertex=function(a,b){var e=this,c=this.vertices[b];this.vertices[b]=a;this.history.push({vertex:a,vertexIndex:b,undo:function(){return e._undoVertexUpdate(null,c,b)},redo:function(){return e._redoVertexUpdate(null,
a,b)}});this._set("redoHistory",[]);this.emit("vertex-update",new f.VertexUpdateEvent(this.view,null,b,this.vertices))};c.prototype.complete=function(){this._completeDrawing()};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("click",function(a){a.stopPropagation()}),this.view.on("pointer-down",function(b){a._shouldHandlePointerEvent(b)&&!a._panEnabled&&(a._activePointerId=b.pointerId,a._addVertexOnPointerUp=!0,a._cursorScreenPoint=l.createScreenPointFromEvent(b),
"touch"===b.pointerType&&a._updateCursor(b.native))}),this.view.on("pointer-move",function(b){a._popVertexOnPointerMove&&(a.vertices.pop(),a._popVertexOnPointerMove=!1);a._cursorScreenPoint=l.createScreenPointFromEvent(b);"touch"!==b.pointerType&&a._updateCursor(b.native)}),this.view.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&(a._cursorScreenPoint=l.createScreenPointFromEvent(b),a._dragEnabled&&!a._panEnabled?a._vertexAddHandler(b):a._addVertexOnPointerUp=!1)}),this.view.on("pointer-up",
function(b){a._shouldHandlePointerEvent(b)&&(a._activePointerId=null,a._addVertexOnPointerUp?a._clickEnabled?a._vertexAddHandler(b):(1===a.vertices.length&&a.vertices.pop(),a._drawCompleteHandler(b)):a._updateCursor(b.native,"touch"===b.pointerType))}),this.view.on("drag",function(b){a._dragEnabled&&k.isSome(a._activePointerId)&&!a._panEnabled&&b.stopPropagation()}),this.view.on("drag",["Shift"],function(a){a.stopPropagation()}),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b)}),
this.view.on("double-click",["Control"],function(b){b.stopPropagation();a._drawCompleteHandler(b)}),this.view.on("key-down",function(b){var e=b.key,c=b.repeat;e===h.KEYS.vertexAddKey&&!c&&a._cursorScreenPoint?a._vertexAddHandler(b):e===h.KEYS.drawCompleteKey&&!c&&a._cursorScreenPoint&&1<a.vertices.length?(a._vertexAddHandler(b),a._drawCompleteHandler(b)):e!==h.KEYS.undoKey||c?e!==h.KEYS.redoKey||c?e!==h.KEYS.panKey||c||(a._panEnabled=!0):a.redo():a.undo()}),this.view.on("key-up",function(b){b.key===
h.KEYS.panKey&&(a._panEnabled=!1)})])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._addVertex=function(a,b){var c=this;this._popCursorVertex();if(!this.isDuplicateVertex(this.vertices,a)){this.vertices.push(a);var d=this.vertices.length-1;this.history.push({vertex:a,vertexIndex:d,undo:function(){return c._undoVertexAdd(b,a,d)},redo:function(){return c._redoVertexAdd(b,a,d)}});this._set("redoHistory",[]);var g=new f.VertexAddEvent(this.view,b,d,this.vertices);
this.emit("vertex-add",g);g.defaultPrevented&&this.history.pop()}};c.prototype._updateCursor=function(a,b){void 0===b&&(b=!1);this._popCursorVertex();var c=this.view.toMap(this._cursorScreenPoint),d=null;c&&!b&&(d=this._pushCursorVertex([c.x,c.y]));a=new f.CursorUpdateEvent(this.view,a,d,this.vertices,c);this.emit("cursor-update",a)};c.prototype._completeDrawing=function(a){this._activePointerId=null;this._popCursorVertex();2>this.vertices.length||(a=new f.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",
a),a.defaultPrevented||this._removeViewHandles())};c.prototype._undoVertexAdd=function(a,b,c){this.vertices.splice(c,1);this.emit("undo",new f.VertexRemoveEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexAdd=function(a,b,c){this.vertices.splice(c,0,b);this.emit("redo",new f.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexRemove=function(a,b,c){this.vertices.splice(c,0,b);this.emit("undo",new f.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexRemove=
function(a,b,c){this.vertices.splice(c,1);this.emit("redo",new f.VertexRemoveEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("undo",new f.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("redo",new f.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._pushCursorVertex=function(a){this._popCursorVertex();this.vertices.push(a);this._cursorVertexAdded=!0;
return this.vertices.length-1};c.prototype._popCursorVertex=function(){this._cursorVertexAdded&&(this.vertices.pop(),this._cursorVertexAdded=!1)};c.prototype._shouldHandlePointerEvent=function(a){return("mouse"!==a.pointerType||0===a.button)&&(k.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};c.prototype._vertexAddHandler=function(a){if(this._cursorVertexAdded)this._addVertex(this.vertices[this.vertices.length-1],a.native);else{var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);
k.isSome(b)&&this._addVertex(b,a.native)}};c.prototype._drawCompleteHandler=function(a){this._completeDrawing(a.native)};g([d.property({dependsOn:["mode"]})],c.prototype,"_clickEnabled",null);g([d.property({dependsOn:["mode"]})],c.prototype,"_dragEnabled",null);g([d.property({cast:function(a){return-1===["hybrid","freehand","click"].indexOf(a)?"hybrid":a}})],c.prototype,"mode",void 0);g([d.property({readOnly:!0})],c.prototype,"vertices",void 0);g([d.property()],c.prototype,"view",void 0);return c=
g([d.subclass("esri.views.draw.PolylineDrawAction")],c)}(d.declared(t,p,q))});