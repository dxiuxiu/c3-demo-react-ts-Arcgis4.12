//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/grid/DataGrid,dojox/charting/Chart2D,dojox/charting/widget/Legend,dojox/charting/action2d/Tooltip,dojox/charting/action2d/Highlight,dojo/colors,dojo/data/ItemFileWriteStore"],function(f,G,q){f.provide("dojox.widget.DataPresentation");f.experimental("dojox.widget.DataPresentation");f.require("dojox.grid.DataGrid");f.require("dojox.charting.Chart2D");f.require("dojox.charting.widget.Legend");f.require("dojox.charting.action2d.Tooltip");f.require("dojox.charting.action2d.Highlight");
f.require("dojo.colors");f.require("dojo.data.ItemFileWriteStore");(function(){var C=function(a,b,c,e){var f=[{value:0,text:""}],n=a.length;if("ClusteredBars"!==c&&"StackedBars"!==c&&(c=e.offsetWidth,e=(""+a[0]).length*a.length*7,1==b))for(var h=1;500>h&&!(e/h<c);++h)++b;for(c=0;c<n;c++)f.push({value:c+1,text:!b||c%b?"":a[c]});f.push({value:n+1,text:""});return f},D=function(a,b){b={vertical:!1,labels:b,min:0,max:b.length-1,majorTickStep:1,minorTickStep:1};if("ClusteredBars"===a||"StackedBars"===
a)b.vertical=!0;if("Lines"===a||"Areas"===a||"StackedAreas"===a)b.min++,b.max--;return b},A=function(a,b,c,e){var f={vertical:!0,fixLower:"major",fixUpper:"major",natural:!0};"secondary"===b&&(f.leftBottom=!1);if("ClusteredBars"===a||"StackedBars"===a)f.vertical=!1;c==e&&(f.min=c-1,f.max=e+1);return f},E=function(a,b,c){b={type:a,hAxis:"independent",vAxis:"dependent-"+b,gap:4,lines:!1,areas:!1,markers:!1};if("ClusteredBars"===a||"StackedBars"===a)b.hAxis=b.vAxis,b.vAxis="independent";if("Lines"===
a||"Hybrid-Lines"===a||"Areas"===a||"StackedAreas"===a)b.lines=!0;if("Areas"===a||"StackedAreas"===a)b.areas=!0;"Lines"===a&&(b.markers=!0);"Hybrid-Lines"===a&&(b.shadows={dx:2,dy:2,dw:2},b.type="Lines");"Hybrid-ClusteredColumns"===a&&(b.type="ClusteredColumns");c&&(b.animate=c);return b},F=function(a,b,c,e,B,n,h,v,l,r,w){b||(a.innerHTML="",b=new q.charting.Chart2D(a));h&&(h._clone=function(){var a=new q.charting.Theme({chart:this.chart,plotarea:this.plotarea,axis:this.axis,series:this.series,marker:this.marker,
antiAlias:this.antiAlias,assignColors:this.assignColors,assignMarkers:this.assigneMarkers,colors:f.delegate(this.colors)});a.markers=this.markers;a._buildMarkerArray();return a},b.setTheme(h));var t=l.series_data[0].slice(0);e&&t.reverse();a=C(t,n,c,a);n={};r=h=null;w={};for(var d in b.runs)w[d]=!0;for(var u=l.series_name.length,k=0;k<u;k++)if(l.series_chart[k]&&0<l.series_data[k].length){var g=c,m=l.series_axis[k];"Hybrid"==g&&(g="line"==l.series_charttype[k]?"Hybrid-Lines":"Hybrid-ClusteredColumns");
n[m]||(n[m]={});if(!n[m][g]){var p=m+"-"+g;b.addPlot(p,E(g,m,B));var x={};"string"==typeof v?x.text=function(a){return f.replace(v,[a.element,a.run.name,t[a.index],"ClusteredBars"===g||"StackedBars"===g?a.x:a.y])}:"function"==typeof v&&(x.text=v);new q.charting.action2d.Tooltip(b,p,x);"Lines"!==g&&"Hybrid-Lines"!==g&&new q.charting.action2d.Highlight(b,p);n[m][g]=!0}for(var p=[],x=l.series_data[k].length,y=0;y<x;y++){var z=l.series_data[k][y];p.push(z);if(null===h||z>h)h=z;if(null===r||z<r)r=z}e&&
p.reverse();m={plot:m+"-"+g};l.series_linestyle[k]&&(m.stroke={style:l.series_linestyle[k]});b.addSeries(l.series_name[k],p,m);delete w[l.series_name[k]]}for(d in w)b.removeSeries(d);b.addAxis("independent",D(c,a));b.addAxis("dependent-primary",A(c,"primary",r,h));b.addAxis("dependent-secondary",A(c,"secondary",r,h));return b},y=function(a,b){if(b){b=b.split(/[.\[\]]+/);for(var c=0,e=b.length;c<e;c++)a&&(a=a[b[c]])}return a};f.declare("dojox.widget.DataPresentation",null,{type:"chart",chartType:"clusteredBars",
reverse:!1,animate:null,labelMod:1,legendHorizontal:!0,constructor:function(a,b){f.mixin(this,b);this.domNode=f.byId(a);this[this.type+"Node"]=this.domNode;"string"==typeof this.theme&&(this.theme=f.getObject(this.theme));this.chartNode=f.byId(this.chartNode);this.legendNode=f.byId(this.legendNode);this.gridNode=f.byId(this.gridNode);this.titleNode=f.byId(this.titleNode);this.footerNode=f.byId(this.footerNode);this.legendVertical&&(this.legendHorizontal=!this.legendVertical);this.url?this.setURL(null,
null,this.refreshInterval):this.data?this.setData(null,this.refreshInterval):this.setStore()},setURL:function(a,b,c){c&&this.cancelRefresh();this.url=a||this.url;this.urlContent=b||this.urlContent;this.refreshInterval=c||this.refreshInterval;var e=this;f.xhrGet({url:this.url,content:this.urlContent,handleAs:"json-comment-optional",load:function(a,b){e.setData(a)},error:function(a,b){e.urlError&&"function"==typeof e.urlError&&e.urlError(a,b)}});c&&0<this.refreshInterval&&(this.refreshIntervalPending=
setInterval(function(){e.setURL()},this.refreshInterval))},setData:function(a,b){b&&this.cancelRefresh();this.data=a||this.data;this.refreshInterval=b||this.refreshInterval;var c="function"==typeof this.series?this.series(this.data):this.series,e=[];a=[];for(var q=[],n=[],h=[],v=[],l=[],r=[],w=[],t=0,d=0;d<c.length;d++)e[d]=y(this.data,c[d].datapoints),e[d]&&e[d].length>t&&(t=e[d].length),a[d]=[],q[d]=c[d].name||(c[d].namefield?y(this.data,c[d].namefield):null)||"series "+d,n[d]=!1!==c[d].chart,h[d]=
c[d].charttype||"bar",v[d]=c[d].linestyle,l[d]=c[d].axis||"primary",r[d]=!1!==c[d].grid,w[d]=c[d].gridformatter;var u,k,g,m,p=[];for(u=0;u<t;u++){k={index:u};for(d=0;d<c.length;d++)e[d]&&e[d].length>u&&(g=y(e[d][u],c[d].field),n[d]&&(m=parseFloat(g),isNaN(m)||(g=m)),k["data."+d]=g,a[d].push(g));p.push(k)}0>=t&&p.push({index:0});c=new f.data.ItemFileWriteStore({data:{identifier:"index",items:p}});this.data.title&&(c.title=this.data.title);this.data.footer&&(c.footer=this.data.footer);c.series_data=
a;c.series_name=q;c.series_chart=n;c.series_charttype=h;c.series_linestyle=v;c.series_axis=l;c.series_grid=r;c.series_gridformatter=w;this.setPreparedStore(c);if(b&&0<this.refreshInterval){var x=this;this.refreshIntervalPending=setInterval(function(){x.setData()},this.refreshInterval)}},refresh:function(){this.url?this.setURL(this.url,this.urlContent,this.refreshInterval):this.data&&this.setData(this.data,this.refreshInterval)},cancelRefresh:function(){this.refreshIntervalPending&&(clearInterval(this.refreshIntervalPending),
this.refreshIntervalPending=void 0)},setStore:function(a,b,c){this.setPreparedStore(a,b,c)},setPreparedStore:function(a,b,c){this.preparedstore=a||this.store;this.query=b||this.query;this.queryOptions=c||this.queryOptions;if(this.preparedstore){this.chartNode&&(this.chartWidget=F(this.chartNode,this.chartWidget,this.chartType,this.reverse,this.animate,this.labelMod,this.theme,this.tooltip,this.preparedstore,this.query,this.queryOptions),this.renderChartWidget());this.legendNode&&((a=this.legendWidget)?
a.refresh():a=new q.charting.widget.Legend({chart:this.chartWidget,horizontal:this.legendHorizontal},this.legendNode),this.legendWidget=a);if(this.gridNode){a=this.preparedstore;c=this.query;var e=this.queryOptions;b=this.gridWidget||new q.grid.DataGrid({},this.gridNode);b.startup();b.setStore(a,c,e);c=[];for(e=0;e<a.series_name.length;e++)a.series_grid[e]&&0<a.series_data[e].length&&c.push({field:"data."+e,name:a.series_name[e],width:"auto",formatter:a.series_gridformatter[e]});b.setStructure(c);
this.gridWidget=b;this.renderGridWidget()}this.titleNode&&(a=this.preparedstore,a.title&&(this.titleNode.innerHTML=a.title));this.footerNode&&(a=this.preparedstore,a.footer&&(this.footerNode.innerHTML=a.footer))}},renderChartWidget:function(){this.chartWidget&&this.chartWidget.render()},renderGridWidget:function(){this.gridWidget&&this.gridWidget.render()},getChartWidget:function(){return this.chartWidget},getGridWidget:function(){return this.gridWidget},destroy:function(){this.cancelRefresh();this.chartWidget&&
(this.chartWidget.destroy(),delete this.chartWidget);this.legendWidget&&delete this.legendWidget;this.gridWidget&&delete this.gridWidget;this.chartNode&&(this.chartNode.innerHTML="");this.legendNode&&(this.legendNode.innerHTML="");this.gridNode&&(this.gridNode.innerHTML="");this.titleNode&&(this.titleNode.innerHTML="");this.footerNode&&(this.footerNode.innerHTML="")}})})()});