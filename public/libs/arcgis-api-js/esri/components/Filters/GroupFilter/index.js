// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../Component","../../Dropdowns/AccordionDropdown/index","dojo/i18n!../../Filters/GroupFilter/nls/resources"],function(h,l,m){return function(f){function b(a){if(d[a])return d[a].exports;var e=d[a]={i:a,l:!1,exports:{}};return f[a].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var d={};return b.m=f,b.c=d,b.d=function(a,e,d){b.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,e){if((1&e&&(a=b(a)),8&e)||4&e&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var f in a)b.d(d,f,function(e){return a[e]}.bind(null,f));return d},b.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(e,"a",e),e},b.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,
e)},b.p="",b(b.s=387)}({0:function(f,b,d){function a(a,b){function d(){this.constructor=a}e(a,b);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}d.d(b,"b",function(){return a});d.d(b,"a",function(){return g});var e=function(a,b){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},g=function(){return(g=Object.assign||function(a){for(var b,e=1,d=arguments.length;e<d;e++)for(var c in b=
arguments[e])Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);return a}).apply(this,arguments)}},101:function(f,b){f.exports=m},20:function(f,b){f.exports=l},387:function(f,b,d){d.r(b);var a=d(0),e=d(101);f=d(4);var g=d(20),h=d.n(g),k=d(87);d=function(b){function d(c){c=b.call(this,c)||this;return c.handleToggleKeyDown=Object(k.a)(c.handleToggleFilter.bind(c)),c.handleClearKeyDown=Object(k.a)(c.handleClearFilter.bind(c)),c.state={filterString:""},c.handleFilterStringChange=c.handleFilterStringChange.bind(c),
c.handleToggleFilter=c.handleToggleFilter.bind(c),c.handleClearFilter=c.handleClearFilter.bind(c),c.mapGroupsToLinks=c.mapGroupsToLinks.bind(c),c}return a.b(d,b),d.prototype.render=function(c){return c(h.a,{key:"group-accordion",title:this.props.title?this.props.title:e.groups,clearable:!!this.props.groupFilter,onClear:this.handleClearFilter,padding:!1},c("div",{class:"ftr-group__input-area"},c("input",{class:"ftr-group__input",id:"filter-group-filters",type:"search",placeholder:e.filterGroups,"aria-label":e.filterGroups,
oninput:this.handleFilterStringChange,value:this.state.filterString})),c("ul",{id:"group-accordion-tree",class:"ftr-group__list"},this.mapGroupsToLinks(c)))},d.prototype.handleFilterStringChange=function(c){this.setState({filterString:c.target.value})},d.prototype.handleToggleFilter=function(c){var a=c.target.dataset;c=a.id;a=a.title;this.props.groupFilter&&this.props.groupFilter.id===c||this.props.onGroupSelect({id:c,title:a})},d.prototype.handleClearFilter=function(){this.props.groupFilter&&this.props.onGroupSelect()},
d.prototype.preventCloseDropdown=function(a){a.stopPropagation()},d.prototype.mapGroupsToLinks=function(c){var b=this,d={"ftr-group__link":!0,"ftr-group__link--active":!this.props.groupFilter};return this.props.availableGroups?[c("li",{class:"ftr-group__item",key:"all-user-groups"},c("a",{classes:d,"data-id":"all-group-content","data-title":e.allGroups,onclick:this.handleClearFilter,onkeydown:this.handleClearKeyDown,tabindex:"0"},c("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},c("path",{fill:"currentColor",
d:"M8 1.998a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm-2 1a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-2 4h1v5a1 1 0 0 1-1-1H3a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h3.78a3.05 3.05 0 0 0-.596 1H4a1 1 0 0 0-1 1v4h1zm8-1a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm-2 1a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm2 1H8a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1h1a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2zm1 3v3h-1v-3h-1v4H9v-4H8v3H7v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"})),e.allGroups))].concat(this.props.availableGroups.filter(function(a){return-1!==
a.title.toLowerCase().indexOf(b.state.filterString.toLowerCase())}).map(function(e){var f=a.a({},d,{"ftr-group__link--active":b.props.groupFilter&&b.props.groupFilter.id===e.id});return c("li",{class:"ftr-group__item",key:e.id},c("a",{classes:f,"data-id":e.id,"data-title":e.title,onclick:b.handleToggleFilter,onkeydown:b.handleToggleKeyDown,tabindex:"0"},c("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},c("path",{fill:"currentColor",d:"M8 1.998a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm-2 1a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-2 4h1v5a1 1 0 0 1-1-1H3a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h3.78a3.05 3.05 0 0 0-.596 1H4a1 1 0 0 0-1 1v4h1zm8-1a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm-2 1a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm2 1H8a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1h1a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2zm1 3v3h-1v-3h-1v4H9v-4H8v3H7v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"})),
e.title))})):null},d}(f.Component);b.default=d},4:function(f,b){f.exports=h},87:function(f,b,d){d.d(b,"a",function(){return a});var a=function(a){return function(b){13===b.keyCode&&a(b)}}}})});