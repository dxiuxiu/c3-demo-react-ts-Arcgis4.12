// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/object ../../core/Warning ./PointCloudBitfieldFilter ./PointCloudReturnFilter ./PointCloudValueFilter".split(" "),function(n,b,g,h,k,l,m){Object.defineProperty(b,"__esModule",{value:!0});var e={pointCloudValueFilter:m,pointCloudBitfieldFilter:k,pointCloudReturnFilter:l};b.read=function(a,f,c){if(a&&Array.isArray(a))return a.map(function(a){var d=a?e[a.type]||null:null;if(d)return d=new d,d.read(a,c),d;c&&c.messages&&a&&c.messages.push(new h("point-cloud-filter:unsupported",
"Point cloud filters of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:c}))})};b.write=function(a,f,c,b){a=a.map(function(a){return a.write({},b)});g.setDeepValue(c,a,f)};b.fromJSON=function(a){var b=a?e[a.type]||null:null;return b?b.fromJSON(a):null}});