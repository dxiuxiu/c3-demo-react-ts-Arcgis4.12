//>>built
define(["dojo","../../util/oo","../_Plugin"],function(d,b,q){b=b.declare(q,function(a){a.gap&&(this.major=a.gap);this.majorColor=a.majorColor||this.majorColor;this.minorColor=a.minorColor||this.minorColor;this.setGrid();d.connect(this.canvas,"setZoom",this,"setZoom")},{type:"dojox.drawing.plugins.drawing.Grid",gap:100,major:100,minor:0,majorColor:"#00ffff",minorColor:"#d7ffff",zoom:1,setZoom:function(a){this.zoom=a;this.setGrid()},setGrid:function(a){a=Math.floor(this.major*this.zoom);var b=this.minor?
Math.floor(this.minor*this.zoom):a;this.grid&&this.grid.removeShape();var e,h,f,k,c,l,m,g=this.canvas.underlay.createGroup(),d=this.majorColor,n=this.minorColor,p=function(a,b,c,d,e){g.createLine({x1:a,y1:b,x2:c,y2:d}).setStroke({style:"Solid",width:1,cap:"round",color:e})};c=1;for(m=1E3/b;c<m;c++)e=0,h=2E3,k=f=b*c,l=f%a?n:d,p(e,f,h,k,l);c=1;for(m=2E3/b;c<m;c++)f=0,k=1E3,h=e=b*c,l=e%a?n:d,p(e,f,h,k,l);g.moveToBack();this.grid=g;this.util.attr(g,"id","grid");return g}});d.setObject("dojox.drawing.plugins.drawing.Grid",
b);return b});