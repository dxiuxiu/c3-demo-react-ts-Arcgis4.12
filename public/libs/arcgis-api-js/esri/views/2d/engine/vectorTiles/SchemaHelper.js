// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../layers/support/LOD","../../../../layers/support/TileInfo"],function(l,m,h,k){return function(){function b(a,e){this.lockedSchemaPixelSize=a;this.isGCS=e}b.prototype.getLevelRowColumn=function(a){return this.isGCS?[a[0],a[1]>>1,a[2]>>1]:256===this.lockedSchemaPixelSize&&0<a[0]?[a[0]-1,a[1]>>1,a[2]>>1]:a};b.prototype.adjustLevel=function(a){return this.isGCS?a:256===this.lockedSchemaPixelSize?0<a?a-1:0:a};b.prototype.getShift=function(a,e){var b=0,c=0;if(256===
this.lockedSchemaPixelSize||this.isGCS)a[2]%2&&(b=2*e),a[1]%2&&(c=2*e);return[b,c]};b.prototype.getScale=function(a){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 2}else if(256===this.lockedSchemaPixelSize&&0===a)return.5;return 1};b.create256x256CompatibleTileInfo=function(a){if(!a)return null;if(256===a.size[0]&&256===a.size[1])return a;for(var b=a.spatialReference.isGeographic,f=[],c=a.lods.length,d=0;d<c;d++){var g=a.lods[d];f.push(new h({level:g.level,scale:g.scale,resolution:b?g.resolution:
2*g.resolution}))}return new k({size:[256,256],dpi:a.dpi,format:a.format,compressionQuality:a.compressionQuality,origin:a.origin,spatialReference:a.spatialReference,lods:f})};b.create512x512CompatibleTileInfo=function(a){if(!a||256===a.size[0]||256===a.size[1])return null;for(var b=[],f=a.lods.length,c=0;c<f;c++){var d=a.lods[c];b.push(new h({level:d.level,scale:d.scale,resolution:.5*d.resolution}))}return new k({size:[512,512],dpi:a.dpi,format:a.format,compressionQuality:a.compressionQuality,origin:a.origin,
spatialReference:a.spatialReference,lods:b})};return b}()});