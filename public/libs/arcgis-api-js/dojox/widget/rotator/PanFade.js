//>>built
define("dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/fx dojo/dom-style dojo/fx".split(" "),function(y,u,n,e,r,v){function l(a,b){var h={node:b.current.node,duration:b.duration,easing:b.easing},d={node:b.next.node,duration:b.duration,easing:b.easing},f=b.rotatorBox,c=a%2;b=c?"left":"top";a=(c?f.w:f.h)*(2>a?-1:1);f={};c={};r.set(d.node,{display:"",opacity:0});f[b]={start:0,end:-a};c[b]={start:a,end:0};return v.combine([e.animateProperty(n.mixin({properties:f},h)),e.fadeOut(h),e.animateProperty(n.mixin({properties:c},
d)),e.fadeIn(d)])}function w(a,b){r.set(a,"zIndex",b)}var p={panFade:function(a){var b=a.wrap,h=a.rotator.panes,d=h.length,f=d,c=a.current.idx,m=a.next.idx,g=Math.abs(m-c),k=Math.abs(d-Math.max(c,m)+Math.min(c,m))%d,e=c<m,q=3,p=[],x=[],t=a.duration;if(!b&&!e||b&&(e&&g>k||!e&&g<k))q=1;if(a.continuous){a.quick&&(t=Math.round(t/(b?Math.min(k,g):g)));w(h[c].node,f--);for(b=3==q;;){g=c;b?++c>=d&&(c=0):0>--c&&(c=d-1);g=h[g];k=h[c];w(k.node,f--);p.push(l(q,n.mixin({easing:function(a){return a}},a,{current:g,
next:k,duration:t})));if(b&&c==m||!b&&c==m)break;x.push(k.node)}a=v.chain(p);var z=u.connect(a,"onEnd",function(){u.disconnect(z);y.forEach(x,function(a){r.set(a,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return a}return l(q,a)},panFadeDown:function(a){return l(0,a)},panFadeRight:function(a){return l(1,a)},panFadeUp:function(a){return l(2,a)},panFadeLeft:function(a){return l(3,a)}};n.mixin(n.getObject("dojox.widget.rotator"),p);return p});