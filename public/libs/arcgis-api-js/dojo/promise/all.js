//>>built
define(["../_base/array","../_base/lang","../Deferred","../when"],function(g,l,k,m){var n=g.some;return function(b){var c,a;l.isArray(b)?a=b:b&&"object"===typeof b&&(c=b);var d,f=[];if(c){a=[];for(var h in c)Object.hasOwnProperty.call(c,h)&&(f.push(h),a.push(c[h]));d={}}else a&&(d=[]);if(!a||!a.length)return(new k).resolve(d);var e=new k;e.promise.always(function(){d=f=null});var g=a.length;n(a,function(a,b){c||f.push(b);m(a,function(a){e.isFulfilled()||(d[f[b]]=a,0===--g&&e.resolve(d))},e.reject);
return e.isFulfilled()});return e.promise}});