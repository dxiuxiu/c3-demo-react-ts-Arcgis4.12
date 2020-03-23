// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports dojox/gfx dojox/gfx/matrix ../../kernel ../../request ../../core/colorUtils ../../core/Error ../../core/has ../../core/promiseUtils".split(" "),function(G,v,z,u,x,A,w,B,y,C){function D(a){return a.map(function(d){return d.command+" "+d.values.join(",")}).join(" ").trim()}function E(a,d,e,p){var l=p&&p.node||document.createElement("div"),f=z.createSurface(l,d,e);null!=p.opacity&&(l.style.opacity=p.opacity.toString());try{a.forEach(function(a){var k=f.createGroup(),g=0;a.forEach(function(c){var b=
c.shape,a=c.fill,d=c.stroke;g+=d&&d.width||0;var e=null;b&&("path"===b.type&&"string"!==typeof b.path&&(b.path=D(b.path)),e=k.createShape(b).setFill(a).setStroke(d?d:{width:0}),"text"===b.type&&e.setFont(c.font))});a=d/2;var l=e/2,h=k.getBoundingBox(),m=h.width,b=h.height,c=!1;if(p.scale&&0!==h.width&&0!==h.height){var q=h.width/h.height,c=(d>e?d:e)-2*g,r=1,n=1;isNaN(c)||(1<q?(r=c/h.width,n=c/q/h.height):(n=c/h.height,r=c*q/h.width));k.applyTransform(u.scaleAt(r,n,a,l));c=!0}q=h.x+m/2;h=h.y+b/2;k.applyTransform(u.translate(a-
q,l-h));!c&&(m>d||b>e)&&(c=m/d>b/e,m=((c?d:e)-5)/(c?m:b),k.applyTransform(u.scaleAt(m,m,a,l)));p.rotation&&k.applyTransform(u.rotategAt(p.rotation,q,h))})}catch(n){return f.clear(),f.destroy(),null}return l}function F(a,d,e){return a?A(a,{responseType:"image"}).then(function(a){a=a.data;var l=a.width,f=a.height,n=l/f,k=d;e&&(k=Math.min(k,Math.max(l,f)));return{image:a,width:1>=n?Math.ceil(k*n):k,height:1>=n?k:Math.ceil(k/n)}}):C.reject(new B("renderUtils: imageDataSize","href not provided."))}Object.defineProperty(v,
"__esModule",{value:!0});v.renderSymbol=function(a,d,e){var p=Math.ceil(d[0]);d=Math.ceil(d[1]);return a.some(function(a){return!!a.length})?E(a,p,d,e):null};v.tintImageWithColor=function(a,d,e,p,l){return F(a,d,l).then(function(f){var n=f.width?f.width:d,k=f.height?f.height:d,g;if(g=f.image)g=e&&"ignore"!==p?"multiply"===p&&255===e.r&&255===e.g&&255===e.b&&1===e.a?!1:!0:!1;if(g){var l=f.image.width,h=f.image.height;(y("edge")||y("ie"))&&/\.svg$/i.test(a)&&(--l,--h);var m,b;m=Math.ceil(n);b=Math.ceil(k);
g=document.createElement("canvas");g.width=m;g.height=b;g.style.width=m+"px";g.style.height=b+"px";g=g.getContext("2d");g.clearRect(0,0,m,b);g.drawImage(f.image,0,0,l,h,0,0,n,k);f=g.getImageData(0,0,n,k);l=[e.r/255,e.g/255,e.b/255,e.a];h=w.toHSV(e);for(m=0;m<f.data.length;m+=4){b=f.data;var c=m,q=l,r=h;switch(p){case "multiply":b[c+0]*=q[0];b[c+1]*=q[1];b[c+2]*=q[2];b[c+3]*=q[3];break;default:var t=w.toHSV({r:b[c+0],g:b[c+1],b:b[c+2]});t.h=r.h;t.s=r.s;t.v=t.v/100*r.v;r=w.toRGB(t);b[c+0]=r.r;b[c+1]=
r.g;b[c+2]=r.b;b[c+3]*=q[3]}}g.putImageData(f,0,0);a=g.canvas.toDataURL("image/png")}else(g=x.id&&x.id.findCredential(a))&&g.token&&(f=-1===a.indexOf("?")?"?":"\x26",a=""+a+f+"token\x3d"+g.token);return{url:a,width:n,height:k}}).catch(function(){return{url:a,width:d,height:d}})}});