//>>built
define(["dojo","dojox/math/round"],function(g,k){var h={},l=0;return{radToDeg:function(a){return 180*a/Math.PI},degToRad:function(a){return a*Math.PI/180},angle:function(a,b){return b?(b/=180,a=this.radians(a),b*=Math.PI,a=k(a/b),k(this.radToDeg(a*b))):this.radToDeg(this.radians(a))},oppAngle:function(a){360<(a+=180)?a-=360:a;return a},radians:function(a){return Math.atan2(a.start.y-a.y,a.x-a.start.x)},length:function(a){return Math.sqrt(Math.pow(a.start.x-a.x,2)+Math.pow(a.start.y-a.y,2))},lineSub:function(a,
b,c,d,e){var f=this.distance(this.argsToObj.apply(this,arguments)),f=f<e?e:f,f=(f-e)/f;return{x:a-(a-c)*f,y:b-(b-d)*f}},argsToObj:function(){var a=arguments;return 4>a.length?a[0]:{start:{x:a[0],y:a[1]},x:a[2],y:a[3]}},distance:function(){var a=this.argsToObj.apply(this,arguments);return Math.abs(Math.sqrt(Math.pow(a.start.x-a.x,2)+Math.pow(a.start.y-a.y,2)))},slope:function(a,b){return a.x-b.x?(a.y-b.y)/(a.x-b.x):0},pointOnCircle:function(a,b,c,d){d=d*Math.PI/180;return{x:a+c*Math.cos(d),y:b-c*Math.sin(d)}},
constrainAngle:function(a,b,c){var d=this.angle(a);if(d>=b&&d<=c)return a;var e=this.length(a);return this.pointOnCircle(a.start.x,a.start.y,e,d>c?c:100>b-d?b:c)},snapAngle:function(a,b){var c=this.radians(a),d=this.length(a);b*=Math.PI;c=this.radToDeg(Math.round(c/b)*b);return this.pointOnCircle(a.start.x,a.start.y,d,c)},idSetStart:function(a){l=a},uid:function(a){a=a||"shape";h[a]=void 0===h[a]?l:h[a]+1;return a+h[a]},abbr:function(a){return a.substring(a.lastIndexOf(".")+1).charAt(0).toLowerCase()+
a.substring(a.lastIndexOf(".")+2)},mixin:function(a,b){},objects:{},register:function(a){this.objects[a.id]=a},byId:function(a){return this.objects[a]},attr:function(a,b,c,d){if(!a)return!1;try{a.shape&&a.util&&(a=a.shape);if(!c&&"id"==b&&a.target){for(var e=a.target;e&&!g.attr(e,"id");)e=e.parentNode;return e&&g.attr(e,"id")}if(a.rawNode||a.target){var f=Array.prototype.slice.call(arguments);f[0]=a.rawNode||a.target;return g.attr.apply(g,f)}return g.attr(a,"id")}catch(m){return!1}}}});