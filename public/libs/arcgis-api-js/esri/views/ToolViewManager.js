// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/decorateHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/tsSupport/assignHelper ../core/Accessor ../core/Collection ../core/Handles ../core/Logger ../core/maybe ../core/screenUtils ../core/watchUtils ../core/accessorSupport/decorators ./input/ViewEvents ./interactive/interactiveToolUtils".split(" "),function(D,E,k,t,u,v,w,n,x,y,z,e,l,A,h,B,p){function q(e){e=e.native;return!(!e.ctrlKey&&
!e.metaKey)}function m(e){return!1!==e.visible&&!1!==e.editable&&(null==e.hasEditableFlag||e.hasEditableFlag(1))}var C=z.getLogger("esri.views.ToolViewManager");return function(r){function f(a){a=r.call(this)||this;a._handles=new y;a._ignorePopupEventId=null;a._ignoreClickEventId=null;a._stopDrag=!1;a._dragStartScreenPoints=new Map;a._dragPreviousScreenPoints=new Map;a._hoveredManipulators=new Map;a._grabbedManipulators=new Map;a._revertToActiveTool=null;a.tools=p.newToolCollection();a.cursor=null;
return a}t(f,r);f.prototype.initialize=function(){var a=this,c=this.view;this._handles.add(B.eventTypes.map(function(b){return c.on(b,function(d){a._handleInputEvent(d)})}).concat([this.tools.on("change",function(b){b.removed.forEach(function(d){a._clearManipulatorPointers(d)});a._refreshToolWatchers()})]))};f.prototype.destroy=function(){this.tools.forEach(function(a){a.destroy&&a.destroy()});this._handles.destroy();this._handles=null};Object.defineProperty(f.prototype,"activeTool",{set:function(a){var c=
this;e.isSome(a)&&!this.view.ready?C.error("#activeTool\x3d","cannot set active tool while view is not ready"):p.swap(this,a,function(a){c._set("activeTool",a);c.tools.forEach(function(a){var b=e.isNone(c.activeTool)||a===c.activeTool;a.setEditableFlag&&a.setEditableFlag(1,b);!e.isNone(c.activeTool)&&m(a)||c._clearManipulatorPointers(a)})})},enumerable:!0,configurable:!0});f.prototype.createTool=function(a,c,b){return v(this,void 0,void 0,function(){var d;return u(this,function(e){switch(e.label){case 0:return[4,
this.view.whenReady()];case 1:return e.sent(),b?[4,this.removeTool(b)]:[3,3];case 2:e.sent(),e.label=3;case 3:return d=new a(w({},c,{view:this.view})),this.tools.add(d),[2,d]}})})};f.prototype.removeTool=function(a){this.tools.remove(a)};f.prototype.attach=function(){var a=this;this.tools.forEach(function(a){a.attach&&a.attach()});"3d"===this.view.type&&this._handles.add([this.view.state.watch("camera",function(c){a.tools.forEach(function(a){a.manipulators.forEach(function(a){a=a.manipulator;if(null!=
a.onCameraChange)a.onCameraChange(c)})})}),this.view.elevationProvider.on("elevation-change",function(c){a.tools.forEach(function(a){a.manipulators.forEach(function(a){a=a.manipulator;if(null!=a.onElevationChange)a.onElevationChange(c)})})})],"manipulators")};f.prototype.detach=function(){this.tools.forEach(function(a){a.detach&&a.detach()});this._handles.remove("manipulators")};f.prototype.handlesClickEvent=function(a){return e.isSome(this.activeTool)||a.eventId===this._ignorePopupEventId||e.isSome(this._intersectManipulator(l.createScreenPointFromEvent(a),
a.pointerType))};f.prototype._handleInputEvent=function(a){var c=this.activeTool;"click"===a.type&&a.eventId===this._ignoreClickEventId||"double-click"===a.type&&a.eventId===this._ignoreClickEventId+2?a.stopPropagation():(e.isSome(this.activeTool)?(this.activeTool.handleInputEvent&&this.activeTool.handleInputEvent(a),"immediate-click"===a.type&&e.isNone(this.activeTool)&&(this._ignoreClickEventId=a.eventId)):this.tools.forEach(function(b){!1!==b.visible&&b.handleInputEvent&&b.handleInputEvent(a)}),
this._handleManipulatorEvent(a)&&(a.stopPropagation(),this._setToolCursor()),e.isSome(c)&&"pointer-up"===a.type&&(this._ignorePopupEventId=a.eventId))};f.prototype._handleManipulatorEvent=function(a){var c=!1;switch(a.type){case "drag":0<this._grabbedManipulators.size&&(this._stopDrag=!0);this._stopDrag&&(a.stopPropagation(),"end"===a.action&&(this._stopDrag=!1));break;case "pointer-down":if("mouse"===a.pointerType&&0!==a.button||q(a))break;var b=l.createScreenPointFromEvent(a),d=this._intersectManipulator(b,
a.pointerType);if(e.isNone(d))break;var g=this._findManipulatorByKey(d);e.isSome(g)&&g.interactive&&!g.grabbing&&(c=!0,this._grabbedManipulators.set(a.pointerId,d),this._dragStartScreenPoints.set(a.pointerId,b),this._dragPreviousScreenPoints.set(a.pointerId,b),1===this._grabbedManipulators.size&&(this._revertToActiveTool=this.activeTool,this.activeTool=d.tool),g.grabbing=!0,g.grab&&g.grab({screenPoint:b}));break;case "pointer-up":d=this._findManipulatorByKey(this._grabbedManipulators.get(a.pointerId));
e.isSome(d)&&(c=!0,d.grabbing=!1,1===this._grabbedManipulators.size&&(this.activeTool=this._revertToActiveTool,this._revertToActiveTool=null));this._grabbedManipulators.delete(a.pointerId);this._dragStartScreenPoints.delete(a.pointerId);this._dragPreviousScreenPoints.delete(a.pointerId);this._updateHover(a)&&(c=!0);break;case "pointer-drag":if("mouse"===a.pointerType&&0!==a.button)break;b=this._grabbedManipulators.get(a.pointerId);d=this._findManipulatorByKey(b);if(e.isNone(d))break;b=l.createScreenPointFromEvent(a);
b.x=Math.max(0,Math.min(this.view.width,b.x));b.y=Math.max(0,Math.min(this.view.height,b.y));c={start:this._dragStartScreenPoints.get(a.pointerId),previous:this._dragPreviousScreenPoints.get(a.pointerId)};switch(a.action){case "start":case "update":d.dragging=!0;d.attemptDragTo({screenPoint:b},c);break;case "end":d.dragging=!1}this._dragPreviousScreenPoints.set(a.pointerId,b);c=!0;break;case "immediate-click":case "pointer-move":c=this._updateHover(a);break;case "click":b=l.createScreenPointFromEvent(a),
d=this._intersectManipulator(b,a.pointerType),g=this._findManipulatorByKey(d),q(a)||this.tools.forEach(function(a){a.manipulators&&a.manipulators.forEach(function(a){a.manipulator.selected=!1})}),!e.isNone(g)&&g.interactive&&(g.selectable&&(g.selected=!0),g.click({screenPoint:b,button:a.button}),c=!0)}return c};f.prototype._updateHover=function(a){if("touch"===a.pointerType)return!1;var c=this._findManipulatorByKey(this._hoveredManipulators.get(a.pointerId)),b=this._intersectManipulator(l.createScreenPointFromEvent(a),
a.pointerType),d=this._findManipulatorByKey(b);if(c===d)return!1;e.isSome(c)&&(c.hovering=!1);e.isSome(b)&&e.isSome(d)&&d.interactive?(d.hovering=!0,this._hoveredManipulators.set(a.pointerId,b)):this._hoveredManipulators.delete(a.pointerId);return!0};f.prototype._refreshToolWatchers=function(){var a=this;this._handles.remove("tools");this._setToolCursor();this.tools.forEach(function(c){if(c instanceof n){var b=A.watch(c,["cursor","visible","editable"],function(){m(c)||a._clearManipulatorPointers(c);
a._setToolCursor()});a._handles.add(b,"tools")}c.manipulators&&a._handles.add(c.manipulators.on("change",function(b){b.removed.forEach(function(b){a._clearManipulatorPointers(c,b.id)})}),"tools")})};f.prototype._clearManipulatorPointers=function(a,c){var b=this;this._hoveredManipulators.forEach(function(d,g){d.tool!==a||!e.isNone(c)&&d.manipulatorId!==c||(b._hoveredManipulators.delete(g),d=b._findManipulatorByKey(d),e.isSome(d)&&(d.hovering=!1))});this._grabbedManipulators.forEach(function(d,g){d.tool!==
a||!e.isNone(c)&&d.manipulatorId!==c||(b._grabbedManipulators.delete(g),b._dragStartScreenPoints.delete(g),b._dragPreviousScreenPoints.delete(g),d=b._findManipulatorByKey(d),e.isSome(d)&&(d.grabbing=!1,d.dragging=!1))});this._setToolCursor()};f.prototype._setToolCursor=function(){for(var a=null,c=0;c<this.tools.length;c++){var b=this.tools.getItemAt(c);if(null!=b.cursor&&!1!==b.visible){a=b.cursor;break}}!a&&0<this._grabbedManipulators.size&&(a="grabbing");!a&&0<this._hoveredManipulators.size&&(a=
"pointer");this._set("cursor",a)};f.prototype._intersectManipulator=function(a,c){var b=null,d=this.tools.find(function(d){if(null==d.manipulators||!m(d))return!1;b=d.manipulators.intersect(a,c);return e.isSome(b)});return e.applySome(b,function(a){return{tool:d,manipulatorId:a}})};f.prototype._findManipulatorByKey=function(a){if(e.isNone(a))return null;var c=null;this.tools.some(function(b){if(b!==a.tool||null==b.manipulators||!m(b))return!1;c=b.manipulators.findById(a.manipulatorId);return e.isSome(c)});
return c};k([h.property({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0);k([h.property({value:null})],f.prototype,"activeTool",null);k([h.property({readOnly:!0,type:x})],f.prototype,"tools",void 0);k([h.property({readOnly:!0})],f.prototype,"cursor",void 0);return f=k([h.subclass("esri.views.ToolViewManager")],f)}(h.declared(n))});