//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","../process","../state/Pointer","../../shim/WeakMap"],a)})(function(a,g){Object.defineProperty(g,"__esModule",{value:!0});var h=a("../process"),k=a("../state/Pointer"),m=a("../../shim/WeakMap");a=function(){function a(){var d=this;this._storeMap=new m.default;this.after=function(b,a){b=a.operations;var e=a.undoOperations,
c=a.id;a=a.store;var f=d._storeMap.get(a)||{history:[],undo:[]},l=f.history,f=f.undo;l.push({id:c,operations:b});f.push({id:c,operations:e});d._storeMap.set(a,{history:l,undo:f,redo:[]})};this.callback=function(){return{after:d.after}}}a.prototype.canUndo=function(a){if(a=this._storeMap.get(a)){var b=a.history;if(a.undo.length&&b.length)return!0}return!1};a.prototype.canRedo=function(a){return(a=this._storeMap.get(a))&&a.redo.length?!0:!1};a.prototype.redo=function(a){var b=this._storeMap.get(a);
if(b){var d=b.history,e=b.redo,b=b.undo;if(e.length){var c=e.pop(),f=c.id,c=c.operations,n=a.apply(c);d.push({id:f,operations:c});b.push({id:f,operations:n});this._storeMap.set(a,{history:d,undo:b,redo:e})}}};a.prototype.undo=function(a){var b=this._storeMap.get(a);if(b){var d=b.history,e=b.undo,b=b.redo;if(e.length&&d.length){var c=e.pop(),f=c.id,c=c.operations;d.pop();c=a.apply(c);b.push({id:f,operations:c});this._storeMap.set(a,{history:d,undo:e,redo:b})}}};a.prototype.deserialize=function(a,b){var d=
b.redo;b.history.forEach(function(b){var c=b.id,d=b.operations,d=d.map(function(a){a.path=new k.Pointer(String(a.path));return a}),e,g;if(b=h.getProcess(c))e=b[2],g=b[3];h.processExecutor(c,[function(){return d}],a,e,g,void 0)({})});b=this._storeMap.get(a);d.forEach(function(a){a=a.operations;a=a.map(function(a){a.path=new k.Pointer(String(a.path));return a})});b.redo=d};a.prototype.serialize=function(a){return(a=this._storeMap.get(a))?{history:a.history,redo:a.redo}:{history:[],redo:[]}};return a}();
g.HistoryManager=a;g.default=a});