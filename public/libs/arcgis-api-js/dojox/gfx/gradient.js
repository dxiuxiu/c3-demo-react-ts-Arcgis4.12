//>>built
define(["dojo/_base/lang","./matrix","dojo/_base/Color"],function(q,h,f){function n(a,d,l,e,f,c){a=h.multiplyPoint(l,a,d);e=h.multiplyPoint(e,a);return{r:a,p:e,o:h.multiplyPoint(f,e).x/c}}function r(a,d){return a.o-d.o}var p=q.getObject("dojox.gfx.gradient",!0);p.rescale=function(a,d,l){var e=a.length,h=l<d,c;h&&(c=d,d=l,l=c);if(!e)return[];if(l<=a[0].offset)c=[{offset:0,color:a[0].color},{offset:1,color:a[0].color}];else if(d>=a[e-1].offset)c=[{offset:0,color:a[e-1].color},{offset:1,color:a[e-1].color}];
else{var g=l-d,b,m,k;c=[];0>d&&c.push({offset:0,color:new f(a[0].color)});for(k=0;k<e&&!(b=a[k],b.offset>=d);++k);k?(m=a[k-1],c.push({offset:0,color:f.blendColors(new f(m.color),new f(b.color),(d-m.offset)/(b.offset-m.offset))})):c.push({offset:0,color:new f(b.color)});for(;k<e;++k){b=a[k];if(b.offset>=l)break;c.push({offset:(b.offset-d)/g,color:new f(b.color)})}k<e?(m=a[k-1],c.push({offset:1,color:f.blendColors(new f(m.color),new f(b.color),(l-m.offset)/(b.offset-m.offset))})):c.push({offset:1,color:new f(a[e-
1].color)})}if(h)for(c.reverse(),k=0,e=c.length;k<e;++k)b=c[k],b.offset=1-b.offset;return c};p.project=function(a,d,l,e,f,c){a=a||h.identity;var g=h.multiplyPoint(a,d.x1,d.y1),b=h.multiplyPoint(a,d.x2,d.y2);f=Math.atan2(b.y-g.y,b.x-g.x);c=h.project(b.x-g.x,b.y-g.y);g=h.multiplyPoint(c,g);b=h.multiplyPoint(c,b);g=new h.Matrix2D([h.rotate(-f),{dx:-g.x,dy:-g.y}]);b=h.multiplyPoint(g,b).x;a=[n(l.x,l.y,a,c,g,b),n(e.x,e.y,a,c,g,b),n(l.x,e.y,a,c,g,b),n(e.x,l.y,a,c,g,b)].sort(r);d=p.rescale(d.colors,a[0].o,
a[3].o);return{type:"linear",x1:a[0].p.x,y1:a[0].p.y,x2:a[3].p.x,y2:a[3].p.y,colors:d,angle:f}};return p});