//>>built
(function(c){"object"===typeof module&&"object"===typeof module.exports?(c=c(require,exports),void 0!==c&&(module.exports=c)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","./Pointer","./compare"],c)})(function(c,g){function l(a,c){if(a.op===d.ADD){var h={op:d.REMOVE,path:a.path};a={op:d.TEST,path:a.path,value:a.value};return[a,h]}if(a.op===d.REPLACE){var m=a.path.get(c),h=void 0,h=void 0===m?{op:d.REMOVE,path:a.path}:{op:d.REPLACE,path:a.path,value:a.path.get(c)};a=
{op:d.TEST,path:a.path,value:a.value};return[a,h]}return[{op:d.ADD,path:a.path,value:a.path.get(c)}]}Object.defineProperty(g,"__esModule",{value:!0});var n=c("tslib"),p=c("./Pointer"),k=c("./compare"),d;(function(a){a.ADD="add";a.REMOVE="remove";a.REPLACE="replace";a.TEST="test"})(d=g.OperationType||(g.OperationType={}));c=function(){function a(a){this._operations=Array.isArray(a)?a:[a]}a.prototype.apply=function(a){var c=[];return{object:this._operations.reduce(function(a,e){var b;b=p.walk(e.path.segments,
a);switch(e.op){case d.ADD:var f=e.value;Array.isArray(b.target)?b.target.splice(parseInt(b.segment,10),0,f):b.target[b.segment]=f;b=b.object;break;case d.REPLACE:f=e.value;Array.isArray(b.target)?b.target.splice(parseInt(b.segment,10),1,f):b.target[b.segment]=f;b=b.object;break;case d.REMOVE:Array.isArray(b.target)?b.target.splice(parseInt(b.segment,10),1):delete b.target[b.segment];b=b.object;break;case d.TEST:b=b.target[b.segment];if(!k.isEqual(b,e.value))throw Error('Test operation failure at "'+
e.path.path+'". '+k.getFriendlyDifferenceMessage(e.value,b)+".");return a;default:throw Error("Unknown operation");}c=n.__spread(l(e,a),c);return b},a),undoOperations:c}};return a}();g.Patch=c});