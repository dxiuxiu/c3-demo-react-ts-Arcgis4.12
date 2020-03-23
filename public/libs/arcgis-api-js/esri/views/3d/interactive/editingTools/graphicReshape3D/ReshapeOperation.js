// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/Accessor ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/accessorSupport/decorators ../../../../../layers/graphics/dehydratedFeatures ./ReshapeMoveManipulator ./reshapeUtils ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../../interactive/Manipulator3D ../../../../interactive/manipulatorUtils".split(" "),
function(r,f,k,w,x,y,z,g,A,B,C,D,E,F,p){Object.defineProperty(f,"__esModule",{value:!0});var m=function(){return function(d,b){void 0===d&&(d=!1);void 0===b&&(b=!1);this.isDragging=d;this.fromTranslation=b;this.graphic=null;this.type="reshape-start"}}();f.ReshapeStartEvent=m;var q=function(){return function(d){this.coords=d;this.graphic=null;this.type="vertex-move"}}();f.VertexMoveEvent=q;var t=function(){return function(d,b){this.dxScreen=d;this.dyScreen=b;this.graphic=null;this.type="translate"}}();
f.TranslateEvent=t;var u=function(){return function(d){this.coords=d;this.graphic=null;this.type="vertex-add"}}();f.VertexAddEvent=u;var v=function(){return function(d){this.coords=d;this.graphic=null;this.type="vertex-remove"}}();f.VertexRemoveEvent=v;var n=function(){return function(d,b){void 0===d&&(d=!1);void 0===b&&(b=!1);this.isDragging=d;this.fromTranslation=b;this.graphic=null;this.type="reshape-stop"}}();f.ReshapeStopEvent=n;r=function(d){function b(a){a=d.call(this,a)||this;a._vertexManipulatorMaterial=
p.createManipulatorMaterial([1,.5,0],1);a._edgeManipulatorMaterial=p.createManipulatorMaterial([.5,.5,.5],1);a._selectedManipulatorMaterial=p.createManipulatorMaterial([1,1,1],1);a._manipulatorGeometry=new D(E.createSphereGeometry(1,16,16),"reshape-manipulator");a._handles=new z;a._manipulatorInfos=[];a._reshapeHelper=null;a._moveManipulator=null;a._numDragging=0;a.manipulators=null;return a}w(b,d);b.prototype.destroy=function(){this._clear()};Object.defineProperty(b.prototype,"inputGeometry",{get:function(){return this._reshapeHelper?
this._reshapeHelper.geometry:null},set:function(a){this._recreateManipulators(a)},enumerable:!0,configurable:!0});b.prototype.removeSelectedVertices=function(){var a=this._manipulatorInfos.filter(function(a){return a.manipulator.selected&&"vertex"===a.handle.type});this._removeVertices(a)};b.prototype._clear=function(){this._handles.removeAll();this.manipulators.removeAll();this._manipulatorInfos=[];this._reshapeHelper=this._moveManipulator=null;this._numDragging=0};b.prototype._recreateManipulators=
function(a){var c=this;this._clear();this._reshapeHelper=C.createReshapeHelper(a,"global"===this.view.viewingMode);if(!this._reshapeHelper)return null;this._reshapeHelper.components.forEach(function(a){a.vertices.forEach(function(a){return c._createManipulator(a)});a.edges.forEach(function(a){return c._createManipulator(a)})});this._moveManipulator=new B.ReshapeMoveManipulator({view:this.view,reshapeHelper:this._reshapeHelper,selectable:!1});this._handles.add(this._moveManipulator.watch("grabbing",
function(a){c._manipulatorInfos.forEach(function(c){c.manipulator.interactive=!a})},!0),this._moveManipulator);this._handles.add(this._moveManipulator.watch("dragging",function(a){!0===a?(++c._numDragging,1===c._numDragging&&c.emit("reshape-operation-start",new m(!0,!0))):(--c._numDragging,0===c._numDragging&&c.emit("reshape-operation-stop",new n(!0,!0)))},!0),this._moveManipulator);this._handles.add(this._moveManipulator.watch("hovering",function(a){c.cursor=a?"move":null},!0),this._moveManipulator);
this._moveManipulator.on("drag",function(a){return c._moveManipulatorDragCallback(a)});this._moveManipulator.on("click",function(){return c.emit("click")});this.manipulators.add(this._moveManipulator)};b.prototype._clearManipulatorSelection=function(){this._manipulatorInfos.forEach(function(a){a.manipulator.selected=!1})};b.prototype._createManipulator=function(a){var c=this,e=new F.Manipulator3D({view:this.view,renderObjects:[{geometry:this._manipulatorGeometry,material:this._vertexManipulatorMaterial,
stateMask:h.Vertex|4},{geometry:this._manipulatorGeometry,material:this._edgeManipulatorMaterial,stateMask:h.Edge|4},{geometry:this._manipulatorGeometry,material:this._selectedManipulatorMaterial,stateMask:8}],radius:5});e.alignment="on-the-ground";"vertex"===a.type?(e.state=h.Vertex,e.selectable=!0):(e.state=h.Edge,e.selectable=!1);var b={manipulator:e,handle:a};this._manipulatorInfos.push(b);this.manipulators.add(e);this._setManipulatorPosition(b);this._handles.add(e.watch("grabbing",function(a){c._moveManipulator.interactive=
!a},!0),e);this._handles.add(e.watch("dragging",function(a){!0===a?(++c._numDragging,1===c._numDragging&&c.emit("reshape-operation-start",new m(!0))):(--c._numDragging,0===c._numDragging&&c.emit("reshape-operation-stop",new n(!0)))},!0),e);this._handles.add(e.watch("hovering",function(a){c.cursor=a?"vertex"===b.handle.type?"move":"copy":null},!0),e);e.on("drag",function(){return c._manipulatorMoveCallback(b)});e.on("click",function(a){return c._manipulatorClickCallback(a,b)});return e};b.prototype._removeManipulator=
function(a){a&&(this._handles.remove(a.manipulator),this._manipulatorInfos.splice(this._manipulatorInfos.indexOf(a),1),this.manipulators.remove(a.manipulator))};b.prototype._getManipulatorInfoFromHandle=function(a){if(a)for(var c=0,b=this._manipulatorInfos;c<b.length;c++){var d=b[c];if(a===d.handle)return d}return null};b.prototype._setManipulatorPosition=function(a){a&&("vertex"===a.handle.type?a.manipulator.mapPoint=this._reshapeHelper.getVertexPositionAsPoint(a.handle,l):"edge"===a.handle.type&&
(a.manipulator.mapPoint=this._reshapeHelper.getEdgePositionAsPoint(a.handle,.5,l)))};b.prototype._splitEdgeManipulator=function(a){if("edge"===a.handle.type){var c=this._reshapeHelper.splitEdge(a.handle,.5);a.handle=c;a.manipulator.state=h.Vertex;a.manipulator.selectable=!0;c.left&&this._createManipulator(c.left);c.right&&this._createManipulator(c.right);return c}return null};b.prototype._manipulatorMoveCallback=function(a){var c=this;"edge"===a.handle.type&&this._splitEdgeManipulator(a);if(a.handle&&
"vertex"===a.handle.type){!1===a.manipulator.selected&&(this._clearManipulatorSelection(),a.manipulator.selected=!0);var b=a.handle.pos,d=a.manipulator.mapPoint.x-b[0],f=a.manipulator.mapPoint.y-b[1],b=this._manipulatorInfos.filter(function(a){return a.manipulator.selected&&"vertex"===a.handle.type});b.forEach(function(b){var e=b.handle;e.pos[0]+=d;e.pos[1]+=f;a!==b&&(l.x=e.pos[0],l.y=e.pos[1],l.spatialReference=c._reshapeHelper.geometry.spatialReference,b.manipulator.mapPoint=l)});this.outputGeometry=
this._reshapeHelper.commit();b.forEach(function(a){a=a.handle;c._setManipulatorPosition(c._getManipulatorInfoFromHandle(a.left));c._setManipulatorPosition(c._getManipulatorInfoFromHandle(a.right))});b=b.map(function(a){return a.handle.unnormalizedPos});b=new q(b);this.emit("vertex-move",b)}};b.prototype._removeVertices=function(a){var c=this,b=[];a.forEach(function(a){"vertex"===a.handle.type&&c._reshapeHelper.canRemoveVertex(a.handle)&&(0===b.length&&c.emit("reshape-operation-start",new m),b.push(a.handle.unnormalizedPos),
c._removeManipulator(a),c._removeManipulator(c._getManipulatorInfoFromHandle(a.handle.left)),c._removeManipulator(c._getManipulatorInfoFromHandle(a.handle.right)),(a=c._reshapeHelper.removeVertex(a.handle))&&c._createManipulator(a))});0<b.length&&(this.outputGeometry=this._reshapeHelper.commit(),a=new v(b),this.emit("vertex-remove",a),this.emit("reshape-operation-stop",new n))};b.prototype._manipulatorClickCallback=function(a,b){"vertex"===b.handle.type&&2===a.button&&this._removeVertices([b]);"edge"===
b.handle.type&&0===a.button&&(this.emit("reshape-operation-start",new m),a=this._splitEdgeManipulator(b),this.outputGeometry=this._reshapeHelper.commit(),a=new u([a.unnormalizedPos]),this.emit("vertex-add",a),this.emit("reshape-operation-stop",new n))};b.prototype._moveManipulatorDragCallback=function(a){var b=this,d=[],f=!0;this._manipulatorInfos.forEach(function(c){"vertex"===c.handle.type&&(c.manipulator.grabbing?f=!1:"vertex"===c.handle.type&&(c.handle.pos[0]+=a.dxGeometry,c.handle.pos[1]+=a.dyGeometry,
d.push(c.handle.pos),b._setManipulatorPosition(c)))});this._manipulatorInfos.forEach(function(a){"vertex"!==a.handle.type&&b._setManipulatorPosition(a)});this.outputGeometry=this._reshapeHelper.commit();if(f)this.emit("translate",new t(a.dxScreen,a.dyScreen));else{var g=new q(d);this.emit("vertex-move",g)}};k([g.property({value:null,nonNullable:!0})],b.prototype,"view",void 0);k([g.property({value:null})],b.prototype,"inputGeometry",null);k([g.property({value:null})],b.prototype,"cursor",void 0);
k([g.property({value:null})],b.prototype,"outputGeometry",void 0);k([g.property({constructOnly:!0})],b.prototype,"manipulators",void 0);return b=k([g.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.ReshapeOperation")],b)}(g.declared(x,y));f.ReshapeOperation=r;var l=A.makeDehydratedPoint(0,0,null,null),h;(function(d){d.Vertex=16;d.Edge=32})(h||(h={}))});