// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Warning ../../PointCloudClassBreaksRenderer ../../PointCloudRGBRenderer ../../PointCloudStretchRenderer ../../PointCloudUniqueValueRenderer".split(" "),function(m,d,f,g,h,k,l){Object.defineProperty(d,"__esModule",{value:!0});var e={pointCloudClassBreaksRenderer:g,pointCloudRGBRenderer:h,pointCloudStretchRenderer:k,pointCloudUniqueValueRenderer:l};d.read=function(a,b,c){if(b=a?e[a.type]||null:null)return b=new b,b.read(a,c),b;c&&c.messages&&a&&c.messages.push(new f("renderer:unsupported",
"Renderers of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:c}));return null};d.fromJSON=function(a){var b=a?e[a.type]||null:null;return b?b.fromJSON(a):null}});