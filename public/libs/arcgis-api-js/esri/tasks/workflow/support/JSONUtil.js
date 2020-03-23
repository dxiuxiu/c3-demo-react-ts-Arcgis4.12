// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/json","../../../geometry/Multipoint","./Enum","./Util"],function(h,e,g,k,l){var f=new k,c=new l;return h(null,{declaredClass:"esri.tasks.workflow.support.JSONUtil",_jobCreationParametersToJSON:function(a){var b={f:"json",jobTypeId:a.jobTypeId};a.hasOwnProperty("assignedTo")&&(b.assignedTo=c._formatDomainUsername(a.assignedTo));a.hasOwnProperty("assignedType")&&(b.assignedType=f.jobAssignmentTypeJsonDict.toJSON(a.assignedType));a.hasOwnProperty("autoCommitWorkflow")&&
(b.autoCommitWorkflow=a.autoCommitWorkflow);a.hasOwnProperty("autoExecute")&&(b.autoExecute=a.autoExecute);a.hasOwnProperty("dataWorkspaceId")&&(b.dataWorkspaceId=a.dataWorkspaceId);a.hasOwnProperty("description")&&(b.description=a.description);a.hasOwnProperty("name")&&(b.name=a.name);a.hasOwnProperty("numJobs")&&(b.numJobs=a.numJobs);a.hasOwnProperty("ownedBy")&&(b.ownedBy=c._formatDomainUsername(a.ownedBy));a.hasOwnProperty("parentJobId")&&(b.parentJobId=a.parentJobId);a.hasOwnProperty("parentVersion")&&
(b.parentVersion=a.parentVersion);a.hasOwnProperty("priority")&&(b.priority=a.priority);a.hasOwnProperty("startDate")&&(b.startDate=a.startDate?Date.parse(a.startDate):null);a.hasOwnProperty("dueDate")&&(b.dueDate=a.dueDate?Date.parse(a.dueDate):null);if(a.hasOwnProperty("loi"))if(null==a.loi)b.aoi=null,b.poi=null;else if("polygon"==a.loi.type)b.aoi=e.stringify(a.loi.toJSON());else if("multipoint"==a.loi.type)b.poi=e.stringify(a.loi.toJSON());else if("point"==a.loi.type){var d=new g(a.loi.spatialReference);
d.addPoint(a.loi);b.poi=e.stringify(d.toJSON())}return b},_jobUpdateParametersToJSON:function(a){var b={};a.hasOwnProperty("assignedTo")&&(b.assignedTo=c._formatDomainUsername(a.assignedTo));a.hasOwnProperty("assignedType")&&(b.assignedType=f.jobAssignmentTypeJsonDict.toJSON(a.assignedType));a.hasOwnProperty("dataWorkspaceId")&&(b.dataWorkspaceId=a.dataWorkspaceId);a.hasOwnProperty("description")&&(b.description=a.description);a.hasOwnProperty("name")&&(b.name=a.name);a.hasOwnProperty("ownedBy")&&
(b.ownedBy=c._formatDomainUsername(a.ownedBy));a.hasOwnProperty("parentJobId")&&(b.parentJobId=a.parentJobId);a.hasOwnProperty("parentVersion")&&(b.parentVersion=a.parentVersion);a.hasOwnProperty("percentComplete")&&(b.percent=a.percentComplete);a.hasOwnProperty("priority")&&(b.priority=a.priority);a.hasOwnProperty("status")&&(b.status=a.status);a.hasOwnProperty("versionName")&&(b.versionName=a.versionName);a.hasOwnProperty("startDate")&&(b.startDate=a.startDate?Date.parse(a.startDate):null);a.hasOwnProperty("dueDate")&&
(b.dueDate=a.dueDate?Date.parse(a.dueDate):null);if(a.hasOwnProperty("loi"))if(null==a.loi)b.aoi=null,b.poi=null;else if("polygon"==a.loi.type)b.aoi=a.loi.toJSON();else if("multipoint"==a.loi.type)b.poi=a.loi.toJSON();else if("point"==a.loi.type){var d=new g(a.loi.spatialReference);d.addPoint(a.loi);b.poi=d.toJSON()}a={};a.properties=e.stringify(b);return a},_jobQueryParametersToJSON:function(a){var b={f:"json",fields:c._formatJobQueryCSV(a.fields),tables:c._formatJobQueryCSV(a.tables)};a.aliases&&
(b.aliases=c._formatJobQueryCSV(a.aliases));a.where&&(b.where=c._formatJobQueryCSV(a.where));a.orderBy&&(b.orderBy=c._formatJobQueryCSV(a.orderBy));return b},_jobDependencyParametersToJSON:function(a){return{f:"json",heldOnType:f.jobDependencyTypeJsonDict.toJSON(a.heldOnType),heldOnValue:a.heldOnValue,depJobId:a.depJobId,depOnType:f.jobDependencyTypeJsonDict.toJSON(a.depOnType),depOnValue:a.depOnValue}}})});