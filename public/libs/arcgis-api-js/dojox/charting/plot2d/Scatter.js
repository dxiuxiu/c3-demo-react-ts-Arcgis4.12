//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx dojox/gfx/gradutils".split(" "),function(k,f,z,A,B,C,w,D,E,q,F,G){var H=E.lambda("item.purgeGroup()");return z("dojox.charting.plot2d.Scatter",[B,C],{defaultParams:{shadows:null,animate:null},optionalParams:{markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",markerFontColor:"",styleFunc:null},
constructor:function(l,e){this.opt=k.clone(k.mixin(this.opt,this.defaultParams));q.updateWithObject(this.opt,e);q.updateWithPattern(this.opt,e,this.optionalParams);this.animate=this.opt.animate},render:function(l,e){if(this.zoom&&!this.isDataDirty())return this.performZoom(l,e);this.resetEvents();this.dirty=this.isDirty();var m;this.dirty&&(f.forEach(this.series,H),this._eventSeries={},this.cleanGroup(),m=this.getGroup(),D.forEachRev(this.series,function(b){b.cleanGroup(m)}));for(var r=this.chart.theme,
k=this.events(),v=0;v<this.series.length;v++){var a=this.series[v];if(this.dirty||a.dirty)if(a.cleanGroup(),a.data.length){var p=r.next("marker",[this.opt,a]),g,q=this._hScaler.scaler.getTransformerFromModel(this._hScaler),x=this._vScaler.scaler.getTransformerFromModel(this._vScaler);if(a.hidden)a.dyn.marker=p.symbol,a.dyn.markerFill=p.marker.fill,a.dyn.markerStroke=p.marker.stroke;else{m=a.group;g="number"==typeof a.data[0]?f.map(a.data,function(b,a){return{x:q(a+1)+e.l,y:l.height-e.b-x(b)}},this):
f.map(a.data,function(a,c){return{x:q(a.x)+e.l,y:l.height-e.b-x(a.y)}},this);var t=Array(g.length),h=Array(g.length),u=Array(g.length);f.forEach(g,function(b,c){var g=a.data[c],d;this.opt.styleFunc||"number"!=typeof g?(d="number"!=typeof g?[g]:[],this.opt.styleFunc&&d.push(this.opt.styleFunc(g)),d=r.addMixin(p,"marker",d,!0)):d=r.post(p,"marker");var k="M"+b.x+" "+b.y+" "+d.symbol;d.marker.shadow&&(t[c]=m.createPath("M"+(b.x+d.marker.shadow.dx)+" "+(b.y+d.marker.shadow.dy)+" "+d.symbol).setStroke(d.marker.shadow).setFill(d.marker.shadow.color),
this.animate&&this._animateScatter(t[c],l.height-e.b));if(d.marker.outline){var n=w.makeStroke(d.marker.outline);n.width=2*n.width+(d.marker.stroke&&d.marker.stroke.width||0);u[c]=m.createPath(k).setStroke(n);this.animate&&this._animateScatter(u[c],l.height-e.b)}var n=w.makeStroke(d.marker.stroke),f=this._plotFill(d.marker.fill,l,e);!f||"linear"!==f.type&&"radial"!=f.type?h[c]=m.createPath(k).setStroke(n).setFill(f):(b=G.getColor(f,{x:b.x,y:b.y}),n&&(n.color=b),h[c]=m.createPath(k).setStroke(n).setFill(b));
this.opt.labels&&(b=h[c].getBoundingBox(),this.createLabel(m,g,b,d));this.animate&&this._animateScatter(h[c],l.height-e.b)},this);h.length&&(a.dyn.marker=p.symbol,a.dyn.markerStroke=h[h.length-1].getStroke(),a.dyn.markerFill=h[h.length-1].getFill());if(k){var y=Array(h.length);f.forEach(h,function(b,c){b={element:"marker",index:c,run:a,shape:b,outline:u&&u[c]||null,shadow:t&&t[c]||null,cx:g[c].x,cy:g[c].y};"number"==typeof a.data[0]?(b.x=c+1,b.y=a.data[c]):(b.x=a.data[c].x,b.y=a.data[c].y);this._connectEvents(b);
y[c]=b},this);this._eventSeries[a.name]=y}else delete this._eventSeries[a.name];a.dirty=!1}}else a.dirty=!1,r.skip();else r.skip(),this._reconnectEvents(a.name)}this.dirty=!1;A("dojo-bidi")&&this._checkOrientation(this.group,l,e);return this},_animateScatter:function(f,e){F.animateTransform(k.delegate({shape:f,duration:1200,transform:[{name:"translate",start:[0,e],end:[0,0]},{name:"scale",start:[0,0],end:[1,1]},{name:"original"}]},this.animate)).play()}})});