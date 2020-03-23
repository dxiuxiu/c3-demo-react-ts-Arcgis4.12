// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./TimeReference ./timeUtils".split(" "),function(r,t,n,e,k,f,p,l,d,q,g){return function(m){function c(a){a=m.call(this)||this;a.cumulative=!1;a.endField=null;a.hasLiveData=!1;a.interval=null;a.offset=null;a.startField=null;a.timeReference=null;a.fullTimeExtent=null;a.trackIdField=null;
a.useTime=!0;return a}n(c,m);h=c;c.prototype.readInterval=function(a,b){return b.timeInterval&&b.timeIntervalUnits?new f({value:b.timeInterval,unit:g.timeUnitKebabDictionary.fromJSON(b.timeIntervalUnits)}):b.defaultTimeInterval&&b.defaultTimeIntervalUnits?new f({value:b.defaultTimeInterval,unit:g.timeUnitKebabDictionary.fromJSON(b.defaultTimeIntervalUnits)}):null};c.prototype.writeInterval=function(a,b){a?(a=a.toJSON(),b.timeInterval=a.value,b.timeIntervalUnits=a.unit):(b.timeInterval=null,b.timeIntervalUnits=
null)};c.prototype.readOffset=function(a,b){a=b.exportOptions.timeOffset;b=g.timeUnitKebabDictionary.fromJSON(b.exportOptions.timeOffsetUnits);return a&&b?new f({value:a,unit:b}):null};c.prototype.writeOffset=function(a,b){b.exportOptions||(b.exportOptions={});a?(a=a.toJSON(),b.exportOptions.timeOffset=a.value,b.exportOptions.timeOffsetUnits=a.unit):(b.exportOptions.timeOffset=null,b.exportOptions.timeOffsetUnits=null)};c.prototype.readFullTimeExtent=function(a,b){return b.timeExtent&&Array.isArray(b.timeExtent)&&
2===b.timeExtent.length?new k({start:b.timeExtent[0],end:b.timeExtent[1]}):null};c.prototype.writeFullTimeExtent=function(a,b,c){b.timeExtent=a&&a.start&&a.end?[a.start.getTime(),a.end.getTime()]:null};c.prototype.clone=function(){var a=this.fullTimeExtent,b=this.trackIdField,c=this.useTime;return new h({cumulative:this.cumulative,endField:this.endField,hasLiveData:this.hasLiveData,interval:this.interval,offset:this.offset,startField:this.startField,timeReference:l.clone(this.timeReference),fullTimeExtent:l.clone(a),
trackIdField:b,useTime:c})};var h;e([d.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],c.prototype,"cumulative",void 0);e([d.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],c.prototype,"endField",void 0);e([d.property({type:Boolean,json:{write:!0}})],c.prototype,"hasLiveData",void 0);e([d.property({type:f,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,
"interval",void 0);e([d.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],c.prototype,"readInterval",null);e([d.writer("interval")],c.prototype,"writeInterval",null);e([d.property({type:f,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"offset",void 0);e([d.reader("offset",["exportOptions.timeOffset","exportOptions.timeOffset"])],c.prototype,"readOffset",null);e([d.writer("offset")],c.prototype,"writeOffset",null);e([d.property({type:String,
json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],c.prototype,"startField",void 0);e([d.property({type:q,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"timeReference",void 0);e([d.property({type:k,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"fullTimeExtent",void 0);e([d.reader("fullTimeExtent",["timeExtent"])],c.prototype,"readFullTimeExtent",null);e([d.writer("fullTimeExtent")],c.prototype,"writeFullTimeExtent",null);e([d.property({type:String,
json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"trackIdField",void 0);e([d.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],c.prototype,"useTime",void 0);return c=h=e([d.subclass("esri.layers.support.TimeInfo")],c)}(d.declared(p))});