//>>built
define(function(){return{computeTotalAngle:function(a,b,d){return a==b?360:this.computeAngle(a,b,d,360)},modAngle:function(a,b){void 0==b&&(b=6.28318530718);if(a>=b){do a-=b;while(a>=b)}else for(;0>a;)a+=b;return a},computeAngle:function(a,b,d,c){void 0==c&&(c=6.28318530718);return b==a?c:this.modAngle("clockwise"==d?b<a?c-(a-b):b-a:b<a?a-b:c-(b-a),c)},toRadians:function(a){return a*Math.PI/180},toDegrees:function(a){return 180*a/Math.PI}}});