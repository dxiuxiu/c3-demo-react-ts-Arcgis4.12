// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../arrayUtils ../Error ../Logger ./PropertyOrigin ./utils ./extensions/serializableProperty".split(" "),function(w,k,r,t,u,m,l,n){function p(a,f,d,g,e,c){if(!g||!g.write)return!1;var b=a.get(d);if(!e&&g.write.overridePolicy){var h=g.write.overridePolicy.call(a,b,d,c);void 0!==h&&(e=h)}e||(e=g.write);if(!e||!1===e.enabled)return!1;if((null===b&&!e.allowNull||void 0===b)&&e.isRequired)return(f=new t("web-document-write:property-required","Missing value for required property '"+
d+"' on '"+a.declaredClass+"'",{propertyName:d,target:a}),c)&&c.messages?c.messages.push(f):f&&!c&&v.error(f.name,f.message),!1;if(void 0===b||null===b&&!e.allowNull)return!1;h=g.default;void 0===h?b=!1:"function"===typeof h?Array.isArray(b)?(a=h.call(a,d,c),b=r.equals(a,b)):b=!1:b=h===b;return b?!1:void 0!==g.default?!0:!e.ignoreOrigin&&c&&c.origin&&f.store.originOf(d)<m.nameToId(c.origin)?!1:!0}function q(a,f,d){if(a&&"function"===typeof a.toJSON&&(!a.toJSON.isDefaultToJSON||!a.write))return l.merge(f,
a.toJSON());var g=l.getProperties(a),e=g.metadatas,c;for(c in e){var b=n.originSpecificWritePropertyDefinition(e[c],d);if(p(a,g,c,b,null,d)){var h=a.get(c),k={};b.write.writer.call(a,h,k,"string"===typeof b.write.target?b.write.target:c,d);b=k;0<Object.keys(b).length&&(f=l.merge(f,b),d&&d.writtenProperties&&d.writtenProperties.push({target:a,propName:c,oldOrigin:m.idToReadableName(g.store.originOf(c)),newOrigin:d.origin}))}}return f}Object.defineProperty(k,"__esModule",{value:!0});var v=u.getLogger("esri.core.accessorSupport.write");
k.willPropertyWrite=function(a,f,d,g){var e=l.getProperties(a),c=n.originSpecificWritePropertyDefinition(e.metadatas[f],g);return c?p(a,e,f,c,d,g):!1};k.write=q;k.default=q});