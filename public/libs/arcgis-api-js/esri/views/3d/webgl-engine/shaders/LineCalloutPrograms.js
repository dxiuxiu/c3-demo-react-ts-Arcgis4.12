// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(g,b,e,c,f){Object.defineProperty(b,"__esModule",{value:!0});var d=function(a){return f.glslifyDefineMap({OCCL_TEST:a.occlTest,VERTICAL_OFFSET:a.verticalOffset,SCREEN_SIZE_PERSPECTIVE:a.screenSizePerspective,DEPTH_HUD:a.depthHud,DEPTH_HUD_ALIGN_START:a.depthHudAlignStart,CENTER_OFFSET_UNITS_SCREEN:a.centerOffsetUnitsScreen,SLICE:a.slice})};b.program={name:"line-callout",
shaders:function(a){return{vertexShader:d(a)+c.resolveIncludes("materials/lineCallout/lineCallout.vert"),fragmentShader:d(a)+c.resolveIncludes("materials/lineCallout/lineCallout.frag")}},attributes:e.Default3D}});