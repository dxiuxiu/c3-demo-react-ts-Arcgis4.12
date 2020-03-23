//>>built
define(["dojo/_base/lang","./_base"],function(g,e){e.matrix={_degToRad:function(a){return Math.PI*a/180},_radToDeg:function(a){return a/Math.PI*180}};e.matrix.Matrix3D=function(a){if(a)if("number"==typeof a)this.xx=this.yy=this.zz=a;else if(a instanceof Array){if(0<a.length){for(var b=e.matrix.normalize(a[0]),f=1;f<a.length;++f){var c=b,d=e.matrix.normalize(a[f]),b=new e.matrix.Matrix3D;b.xx=c.xx*d.xx+c.xy*d.yx+c.xz*d.zx;b.xy=c.xx*d.xy+c.xy*d.yy+c.xz*d.zy;b.xz=c.xx*d.xz+c.xy*d.yz+c.xz*d.zz;b.yx=c.yx*
d.xx+c.yy*d.yx+c.yz*d.zx;b.yy=c.yx*d.xy+c.yy*d.yy+c.yz*d.zy;b.yz=c.yx*d.xz+c.yy*d.yz+c.yz*d.zz;b.zx=c.zx*d.xx+c.zy*d.yx+c.zz*d.zx;b.zy=c.zx*d.xy+c.zy*d.yy+c.zz*d.zy;b.zz=c.zx*d.xz+c.zy*d.yz+c.zz*d.zz;b.dx=c.xx*d.dx+c.xy*d.dy+c.xz*d.dz+c.dx;b.dy=c.yx*d.dx+c.yy*d.dy+c.yz*d.dz+c.dy;b.dz=c.zx*d.dx+c.zy*d.dy+c.zz*d.dz+c.dz}g.mixin(this,b)}}else g.mixin(this,a)};g.extend(e.matrix.Matrix3D,{xx:1,xy:0,xz:0,yx:0,yy:1,yz:0,zx:0,zy:0,zz:1,dx:0,dy:0,dz:0});g.mixin(e.matrix,{identity:new e.matrix.Matrix3D,translate:function(a,
b,f){return 1<arguments.length?new e.matrix.Matrix3D({dx:a,dy:b,dz:f}):new e.matrix.Matrix3D({dx:a.x,dy:a.y,dz:a.z})},scale:function(a,b,f){return 1<arguments.length?new e.matrix.Matrix3D({xx:a,yy:b,zz:f}):"number"==typeof a?new e.matrix.Matrix3D({xx:a,yy:a,zz:a}):new e.matrix.Matrix3D({xx:a.x,yy:a.y,zz:a.z})},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);return new e.matrix.Matrix3D({yy:b,yz:-a,zy:a,zz:b})},rotateXg:function(a){return e.matrix.rotateX(e.matrix._degToRad(a))},rotateY:function(a){var b=
Math.cos(a);a=Math.sin(a);return new e.matrix.Matrix3D({xx:b,xz:a,zx:-a,zz:b})},rotateYg:function(a){return e.matrix.rotateY(e.matrix._degToRad(a))},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);return new e.matrix.Matrix3D({xx:b,xy:-a,yx:a,yy:b})},rotateZg:function(a){return e.matrix.rotateZ(e.matrix._degToRad(a))},cameraTranslate:function(a,b,f){return 1<arguments.length?new e.matrix.Matrix3D({dx:-a,dy:-b,dz:-f}):new e.matrix.Matrix3D({dx:-a.x,dy:-a.y,dz:-a.z})},cameraRotateX:function(a){var b=
Math.cos(-a);a=Math.sin(-a);return new e.matrix.Matrix3D({yy:b,yz:-a,zy:a,zz:b})},cameraRotateXg:function(a){return e.matrix.rotateX(e.matrix._degToRad(a))},cameraRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);return new e.matrix.Matrix3D({xx:b,xz:a,zx:-a,zz:b})},cameraRotateYg:function(a){return e.matrix.rotateY(dojox.gfx3d.matrix._degToRad(a))},cameraRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);return new e.matrix.Matrix3D({xx:b,xy:-a,yx:a,yy:b})},cameraRotateZg:function(a){return e.matrix.rotateZ(e.matrix._degToRad(a))},
normalize:function(a){return a instanceof e.matrix.Matrix3D?a:new e.matrix.Matrix3D(a)},clone:function(a){var b=new e.matrix.Matrix3D,f;for(f in a)"number"==typeof a[f]&&"number"==typeof b[f]&&b[f]!=a[f]&&(b[f]=a[f]);return b},invert:function(a){a=e.matrix.normalize(a);var b=a.xx*a.yy*a.zz+a.xy*a.yz*a.zx+a.xz*a.yx*a.zy-a.xx*a.yz*a.zy-a.xy*a.yx*a.zz-a.xz*a.yy*a.zx;return new e.matrix.Matrix3D({xx:(a.yy*a.zz-a.yz*a.zy)/b,xy:(a.xz*a.zy-a.xy*a.zz)/b,xz:(a.xy*a.yz-a.xz*a.yy)/b,yx:(a.yz*a.zx-a.yx*a.zz)/
b,yy:(a.xx*a.zz-a.xz*a.zx)/b,yz:(a.xz*a.yx-a.xx*a.yz)/b,zx:(a.yx*a.zy-a.yy*a.zx)/b,zy:(a.xy*a.zx-a.xx*a.zy)/b,zz:(a.xx*a.yy-a.xy*a.yx)/b,dx:-1*(a.xy*a.yz*a.dz+a.xz*a.dy*a.zy+a.dx*a.yy*a.zz-a.xy*a.dy*a.zz-a.xz*a.yy*a.dz-a.dx*a.yz*a.zy)/b,dy:(a.xx*a.yz*a.dz+a.xz*a.dy*a.zx+a.dx*a.yx*a.zz-a.xx*a.dy*a.zz-a.xz*a.yx*a.dz-a.dx*a.yz*a.zx)/b,dz:-1*(a.xx*a.yy*a.dz+a.xy*a.dy*a.zx+a.dx*a.yx*a.zy-a.xx*a.dy*a.zy-a.xy*a.yx*a.dz-a.dx*a.yy*a.zx)/b})},_multiplyPoint:function(a,b,e,c){return{x:a.xx*b+a.xy*e+a.xz*c+a.dx,
y:a.yx*b+a.yy*e+a.yz*c+a.dy,z:a.zx*b+a.zy*e+a.zz*c+a.dz}},multiplyPoint:function(a,b,f,c){a=e.matrix.normalize(a);return"number"==typeof b&&"number"==typeof f&&"number"==typeof c?e.matrix._multiplyPoint(a,b,f,c):e.matrix._multiplyPoint(a,b.x,b.y,b.z)},multiply:function(a){for(var b=e.matrix.normalize(a),f=1;f<arguments.length;++f){var c=b,d=e.matrix.normalize(arguments[f]),b=new e.matrix.Matrix3D;b.xx=c.xx*d.xx+c.xy*d.yx+c.xz*d.zx;b.xy=c.xx*d.xy+c.xy*d.yy+c.xz*d.zy;b.xz=c.xx*d.xz+c.xy*d.yz+c.xz*d.zz;
b.yx=c.yx*d.xx+c.yy*d.yx+c.yz*d.zx;b.yy=c.yx*d.xy+c.yy*d.yy+c.yz*d.zy;b.yz=c.yx*d.xz+c.yy*d.yz+c.yz*d.zz;b.zx=c.zx*d.xx+c.zy*d.yx+c.zz*d.zx;b.zy=c.zx*d.xy+c.zy*d.yy+c.zz*d.zy;b.zz=c.zx*d.xz+c.zy*d.yz+c.zz*d.zz;b.dx=c.xx*d.dx+c.xy*d.dy+c.xz*d.dz+c.dx;b.dy=c.yx*d.dx+c.yy*d.dy+c.yz*d.dz+c.dy;b.dz=c.zx*d.dx+c.zy*d.dy+c.zz*d.dz+c.dz}return b},_project:function(a,b,e,c){return{x:a.xx*b+a.xy*e+a.xz*c+a.dx,y:a.yx*b+a.yy*e+a.yz*c+a.dy,z:a.zx*b+a.zy*e+a.zz*c+a.dz}},project:function(a,b,f,c){a=e.matrix.normalize(a);
return"number"==typeof b&&"number"==typeof f&&"number"==typeof c?e.matrix._project(a,b,f,c):e.matrix._project(a,b.x,b.y,b.z)}});e.Matrix3D=e.matrix.Matrix3D;return e.matrix});