// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/has"],function(d,g,e){function f(){var c=!!e("esri-mobile");return{low:{graphics3D:{maxTotalNumberOfFeatures:25E3,maxTotalNumberOfPrimitives:85E4},sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5},antialiasingEnabled:!1,memoryLimit:200,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},
medium:{graphics3D:{maxTotalNumberOfFeatures:5E4,maxTotalNumberOfPrimitives:17E5},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:c},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,memoryLimit:c?400:500,additionalCacheMemory:c?0:100,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:5E4,maxTotalNumberOfPrimitives:17E5},sceneService:{"3dObject":{lodFactor:1},
point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,memoryLimit:c?600:1E3,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:c?null:4096,maximumPixelRatio:c?1:null}}}d=function(){function c(){}c.isValidProfile=function(a){return a in c.profiles};c.getDefaultProfile=function(){return e("trident")||e("esri-iPhone")?"low":"medium"};c.apply=function(a,b){a=c.profiles[a];
b.graphics3D.maxTotalNumberOfFeatures=a.graphics3D.maxTotalNumberOfFeatures;b.graphics3D.maxTotalNumberOfPrimitives=a.graphics3D.maxTotalNumberOfPrimitives;b.sceneService["3dObject"].lodFactor=a.sceneService["3dObject"].lodFactor;b.sceneService.point.lodFactor=a.sceneService.point.lodFactor;b.sceneService.integratedMesh.lodFactor=a.sceneService.integratedMesh.lodFactor;b.sceneService.pointCloud.lodFactor=a.sceneService.pointCloud.lodFactor;b.sceneService.uncompressedTextureDownsamplingEnabled=a.sceneService.uncompressedTextureDownsamplingEnabled;
b.tiledSurface.lodBias=a.tiledSurface.lodBias;b.tiledSurface.angledSplitBias=a.tiledSurface.angledSplitBias;b.antialiasingEnabled=a.antialiasingEnabled;b.memoryLimit=a.memoryLimit;b.additionalCacheMemory=a.additionalCacheMemory;b.frameRate=a.frameRate;b.maximumRenderResolution=a.maximumRenderResolution;b.maximumPixelRatio=a.maximumPixelRatio};c.debug={reset:function(){var a=f(),b;for(b in a)c.profiles[b]=a[b]}};return c}();(d||(d={})).profiles=f();return d});