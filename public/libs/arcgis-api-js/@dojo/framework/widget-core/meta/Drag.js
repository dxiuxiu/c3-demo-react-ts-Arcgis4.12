//>>built
(function(c){"object"===typeof module&&"object"===typeof module.exports?(c=c(require,exports),void 0!==c&&(module.exports=c)):"function"===typeof define&&define.amd&&define("require exports tslib ../../core/util ../../shim/global ../../shim/object ../../shim/WeakMap ./Base".split(" "),c)})(function(c,f){function m(a){return{dragResults:e.deepAssign({},g),invalidate:a,last:k(),start:k()}}function k(){return{client:{x:0,y:0},offset:{x:0,y:0},page:{x:0,y:0},screen:{x:0,y:0}}}function h(a){return{client:{x:a.clientX,
y:a.clientY},offset:{x:a.offsetX,y:a.offsetY},page:{x:a.pageX,y:a.pageY},screen:{x:a.screenX,y:a.screenY}}}function l(a,d){return{x:d.client.x-a.client.x,y:d.client.y-a.client.y}}Object.defineProperty(f,"__esModule",{value:!0});var n=c("tslib"),e=c("../../core/util"),p=c("../../shim/global"),q=c("../../shim/object"),r=c("../../shim/WeakMap");c=c("./Base");var g=Object.freeze({delta:Object.freeze({x:0,y:0}),isDragging:!1}),t=new (function(){function a(){var d=this;this._nodeMap=new r.default;this._dragging=
void 0;this._onDragStart=function(a){var b=d._dragging;if(!a.isPrimary&&b)b=d._nodeMap.get(b),b.dragResults.isDragging=!1,b.invalidate(),d._dragging=void 0;else if(0===a.button){var c=d._getData(a.target);c&&(b=c.state,d._dragging=c.target,b.last=b.start=h(a),b.dragResults.delta={x:0,y:0},b.dragResults.start=e.deepAssign({},b.start),b.dragResults.isDragging=!0,b.invalidate(),a.preventDefault(),a.stopPropagation())}};this._onDrag=function(a){var b=d._dragging;b&&(b=d._nodeMap.get(b),b.last=h(a),b.dragResults.delta=
l(b.start,b.last),b.dragResults.start||(b.dragResults.start=e.deepAssign({},b.start)),b.invalidate(),a.preventDefault(),a.stopPropagation())};this._onDragStop=function(a){var b=d._dragging;b&&(b=d._nodeMap.get(b),b.last=h(a),b.dragResults.delta=l(b.start,b.last),b.dragResults.start||(b.dragResults.start=e.deepAssign({},b.start)),b.dragResults.isDragging=!1,b.invalidate(),d._dragging=void 0,a.preventDefault(),a.stopPropagation())};var a=p.default.window;a.addEventListener("pointerdown",this._onDragStart);
a.addEventListener("pointermove",this._onDrag,!0);a.addEventListener("pointerup",this._onDragStop,!0)}a.prototype._getData=function(a){if(this._nodeMap.has(a))return{state:this._nodeMap.get(a),target:a};if(a.parentElement)return this._getData(a.parentElement)};a.prototype.get=function(a,c){var d=this._nodeMap;if(!d.has(a))return d.set(a,m(c)),a.style.touchAction="none",a.setAttribute("touch-action","none"),g;a=d.get(a);c=q.assign({},a.dragResults);a.start=a.last;a.dragResults.delta={x:0,y:0};delete a.dragResults.start;
return c};return a}());c=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c._boundInvalidate=c.invalidate.bind(c);return c}n.__extends(c,a);c.prototype.get=function(a){return(a=this.getNode(a))?t.get(a,this._boundInvalidate):g};return c}(c.Base);f.Drag=c;f.default=c});