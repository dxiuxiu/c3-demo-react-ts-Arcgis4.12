// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils"],function(x,n,w){function q(g,b,n,d){void 0===d&&(d=0);var p=g.byteLength/(4*b),r=new Uint32Array(g,0,p*b);g=new Uint32Array(p);var k=Math.floor(1.1*p)+1;if(null==h||h.length<2*k)h=new Uint32Array(w.nextHighestPowerOfTwo(2*k));for(var a=0;a<2*k;a++)h[a]=0;for(var f=0,t=0!==d?Math.ceil(7.84*1.96/(d*d)*d*(1-d)):p,a=0;a<p;a++){if(a===t){var l=1-f/a;if(l+1.96*Math.sqrt(l*(1-l)/a)<d)return null;t*=2}for(var l=a*b,e,c=e=0;c<b;c++)e=r[l+c]+e|0,e=e+(e<<
11)+(e>>>2)|0;e>>>=0;for(var c=e%k,m=f;0!==h[2*c+1];){if(h[2*c]===e){var q=h[2*c+1]-1,u=q*b;a:{for(var v=0;v<b;v++)if(r[l+v]!==r[u+v]){u=!1;break a}u=!0}if(u){m=g[q];break}}c++;c>=k&&(c-=k)}m===f&&(h[2*c]=e,h[2*c+1]=a+1,f++);g[a]=m}if(0!==d&&1-f/p<d)return null;d=new Uint32Array(b*f);for(a=f=0;a<p;a++)if(g[a]===f){k=r;t=a*b;l=d;e=f*b;c=b;for(m=0;m<c;m++)l[e+m]=k[t+m];f++}if(n){b=new Uint32Array(n.length);for(a=0;a<b.length;a++)b[a]=g[n[a]];g=b}return{buffer:d.buffer,indices:g,uniqueCount:f}}Object.defineProperty(n,
"__esModule",{value:!0});n.deduplicate=q;var h=null;n.default=q});