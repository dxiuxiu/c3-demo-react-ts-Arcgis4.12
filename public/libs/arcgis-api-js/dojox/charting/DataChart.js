//>>built
define("dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/html dojo/_base/connect dojo/_base/array ./Chart2D ./themes/PlotKit/blue dojo/dom".split(" "),function(l,d,m,g,f,e,n,p,q){l.experimental("dojox.charting.DataChart");var r={vertical:!0,min:0,max:10,majorTickStep:5,minorTickStep:1,natural:!1,stroke:"black",majorTick:{stroke:"black",length:8},minorTick:{stroke:"gray",length:2},majorLabels:!0},t={natural:!0,majorLabels:!0,includeZero:!1,majorTickStep:1,majorTick:{stroke:"black",length:8},
fixUpper:"major",stroke:"black",htmlLabels:!0,from:1},h={markers:!0,tension:2,gap:2};return m("dojox.charting.DataChart",n,{scroll:!0,comparative:!1,query:"*",queryOptions:"",fieldName:"value",chartTheme:p,displayRange:0,stretchToFit:!0,minWidth:200,minHeight:100,showing:!0,label:"name",constructor:function(a,b){this.domNode=q.byId(a);d.mixin(this,b);this.xaxis=d.mixin(d.mixin({},t),b.xaxis);"seriesLabels"==this.xaxis.labelFunc&&(this.xaxis.labelFunc=d.hitch(this,"seriesLabels"));this.yaxis=d.mixin(d.mixin({},
r),b.yaxis);"seriesLabels"==this.yaxis.labelFunc&&(this.yaxis.labelFunc=d.hitch(this,"seriesLabels"));this._events=[];this.convertLabels(this.yaxis);this.convertLabels(this.xaxis);this.onSetItems={};this.dataLength=this.onSetInterval=0;this.seriesData={};this.seriesDataBk={};this.firstRun=!0;this.dataOffset=0;this.chartTheme.plotarea.stroke={color:"gray",width:3};this.setTheme(this.chartTheme);this.displayRange&&(this.stretchToFit=!1);this.stretchToFit||(this.xaxis.to=this.displayRange);if(a=b.type&&
"Pie"!=b.type&&"dojox.charting.plot2d.Pie"!=b.type.prototype.declaredClass)this.addAxis("x",this.xaxis),this.addAxis("y",this.yaxis);h.type=b.type||"Markers";this.addPlot("default",d.mixin(h,b.chartPlot));a&&this.addPlot("grid",d.mixin(b.grid||{},{type:"Grid",hMinorLines:!0}));this.showing&&this.render();b.store&&this.setStore(b.store,b.query,b.fieldName,b.queryOptions)},destroy:function(){e.forEach(this._events,f.disconnect);this.inherited(arguments)},setStore:function(a,b,c,k){this.firstRun=!0;
this.store=a||this.store;this.query=b||this.query;this.fieldName=c||this.fieldName;this.label=this.store.getLabelAttributes();this.queryOptions=k||k;e.forEach(this._events,f.disconnect);this._events=[f.connect(this.store,"onSet",this,"onSet"),f.connect(this.store,"onError",this,"onError")];this.fetch()},show:function(){this.showing||(g.style(this.domNode,"display",""),this.showing=!0,this.render())},hide:function(){this.showing&&(g.style(this.domNode,"display","none"),this.showing=!1)},onSet:function(a){var b=
this.getProperty(a,this.label);if(b in this.runs||this.comparative)clearTimeout(this.onSetInterval),this.onSetItems[b]||(this.onSetItems[b]=a),this.onSetInterval=setTimeout(d.hitch(this,function(){clearTimeout(this.onSetInterval);var b=[],a;for(a in this.onSetItems)b.push(this.onSetItems[a]);this.onData(b);this.onSetItems={}}),200)},onError:function(a){console.error("DataChart Error:",a)},onDataReceived:function(a){},getProperty:function(a,b){if(b==this.label)return this.store.getLabel(a);if("id"==
b)return this.store.getIdentity(a);var c=this.store.getValues(a,b);2>c.length&&(c=this.store.getValue(a,b));return c},onData:function(a){if(a&&a.length){this.items&&this.items.length!=a.length&&(e.forEach(a,function(b){var a=this.getProperty(b,"id");e.forEach(this.items,function(b,c){this.getProperty(b,"id")==a&&(this.items[c]=b)},this)},this),a=this.items);this.stretchToFit&&(this.displayRange=a.length);this.onDataReceived(a);this.items=a;if(this.comparative){var b="default";this.seriesData[b]=[];
this.seriesDataBk[b]=[];e.forEach(a,function(a){a=this.getProperty(a,this.fieldName);this.seriesData[b].push(a)},this)}else e.forEach(a,function(a,b){var c=this.store.getLabel(a);this.seriesData[c]||(this.seriesData[c]=[],this.seriesDataBk[c]=[]);a=this.getProperty(a,this.fieldName);d.isArray(a)?this.seriesData[c]=a:(this.scroll?(this.seriesDataBk[c].length>this.seriesData[c].length&&(this.seriesData[c]=this.seriesDataBk[c]),this.seriesData[c].push(Number(a))):(b=e.map(Array(b+1),function(){return 0}),
b.push(Number(a)),this.seriesData[c]=b),this.seriesDataBk[c].push(Number(a)))},this);var c;if(this.firstRun)for(b in this.firstRun=!1,this.seriesData)this.addSeries(b,this.seriesData[b]),c=this.seriesData[b];else for(b in this.seriesData)c=this.seriesData[b],this.scroll&&c.length>this.displayRange&&(this.dataOffset=c.length-this.displayRange-1,c=c.slice(c.length-this.displayRange,c.length)),this.updateSeries(b,c);this.dataLength=c.length;this.showing&&this.render()}},fetch:function(){this.store&&
this.store.fetch({query:this.query,queryOptions:this.queryOptions,start:this.start,count:this.count,sort:this.sort,onComplete:d.hitch(this,function(a){setTimeout(d.hitch(this,function(){this.onData(a)}),0)}),onError:d.hitch(this,"onError")})},convertLabels:function(a){if(!a.labels||d.isObject(a.labels[0]))return null;a.labels=e.map(a.labels,function(a,c){return{value:c,text:a}});return null},seriesLabels:function(a){a--;if(1>this.series.length||!this.comparative&&a>this.series.length)return"-";if(this.comparative)return this.store.getLabel(this.items[a]);
for(var b=0;b<this.series.length;b++)if(0<this.series[b].data[a])return this.series[b].name;return"-"},resizeChart:function(a){this.resize(Math.max(a.w,this.minWidth),Math.max(a.h,this.minHeight))}})});