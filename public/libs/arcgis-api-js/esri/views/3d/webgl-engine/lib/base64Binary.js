// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,d){function g(a){var k=h[a.charAt(a.length-1)],c=h[a.charAt(a.length-2)],b=a.length/4*3;64===k&&b--;64===c&&b--;k=new ArrayBuffer(b);c=new Uint8Array(k);a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var d=0,e=0;e<b;e+=3){var f=h[a.charAt(d++)],g=h[a.charAt(d++)],l=h[a.charAt(d++)],m=h[a.charAt(d++)],n=(g&15)<<4|l>>2,p=(l&3)<<6|m;c[e]=f<<2|g>>4;64!==l&&(c[e+1]=n);64!==m&&(c[e+2]=p)}return k}Object.defineProperty(d,"__esModule",{value:!0});var h={};for(f=0;65>f;f++)h["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[f]]=
f;d.decode=g;d.decodeFloat32=function(a){return new Float32Array(g(a))};d.decodeUint32=function(a){return new Uint32Array(g(a))};d.decodeInt32=function(a){return new Int32Array(g(a))};d.encode=function(a){a=a instanceof Uint8Array?a:new Uint8Array(a.buffer,a.byteOffset,a.byteLength);for(var d=a.length%3,c="",b,f=a.length-d,e=0;e<f;e+=3)b=(a[e]<<16)+(a[e+1]<<8)+a[e+2],c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>18&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>
12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b&63];switch(d){case 1:b=a[a.length-1];c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>2];c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b<<4&63];c+="\x3d\x3d";break;case 2:b=(a[a.length-2]<<8)+a[a.length-1],c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>10],
c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b>>4&63],c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"[b<<2&63],c+="\x3d"}return c}});