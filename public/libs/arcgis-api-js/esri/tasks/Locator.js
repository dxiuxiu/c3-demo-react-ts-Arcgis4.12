// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../request ../core/accessorSupport/decorators ../geometry/SpatialReference ./Task ./support/AddressCandidate".split(" "),function(x,y,t,g,h,n,e,u,v,k){return function(p){function b(a){a=p.call(this,a)||this;a.outSpatialReference=null;a.url=null;return a}t(b,p);b.prototype.addressToLocations=function(a,d){var c=a.address,m=a.categories,f=a.countryCode,l=a.forStorage,b=a.location,
e=a.locationType,w=a.magicKey,g=a.maxLocations,k=a.outFields;a=a.searchExtent;var p=b?b.clone().normalize():null,q=a?a.shiftCentralMeridian():null,r=this.outSpatialReference,b=this.parsedUrl;a=this.requestOptions;m={f:"json",outSR:r?JSON.stringify(r.toJSON()):null,outFields:k?k.join(","):null,searchExtent:q?JSON.stringify(q.toJSON()):null,category:m?m.join(","):null,countryCode:f||null,magicKey:w||null,location:p,locationType:e||null,maxLocations:g||null,forStorage:l||null};c={query:this._encode(h({},
b.query,c,m))};d=h({},a,d,c);return n(b.path+"/findAddressCandidates",d).then(this._handleAddressToLocationsResponse)};b.prototype.suggestLocations=function(a,d){var c=this.parsedUrl,m=this.requestOptions,f=a.location,b=a.searchExtent,f=f?f.clone().normalize():null,b=b?b.shiftCentralMeridian():null;a={f:"json",text:a.text,maxSuggestions:a.maxSuggestions,searchExtent:b?JSON.stringify(b.toJSON()):null,category:a.categories?a.categories.join(","):null,countryCode:a.countryCode||null,location:f};a={query:this._encode(h({},
c.query,a))};d=h({},m,d,a);return n(c.path+"/suggest",d).then(this._handleSuggestLocationsResponse)};b.prototype.addressesToLocations=function(a,b){var c=this.outSpatialReference,d=this.parsedUrl,f=this.requestOptions,l=a.addresses,e=a.categories,k=a.locationType;a=a.countryCode;var g=[];Array.isArray(l)&&l.forEach(function(a){g.push({attributes:a})});c={category:e?e.join(","):null,sourceCountry:a||null,addresses:JSON.stringify({records:g}),locationType:k||null,f:"json",outSR:c?JSON.stringify(c):
null};c={query:this._encode(h({},d.query,c))};b=h({},f,b,c);return n(d.path+"/geocodeAddresses",b).then(this._handleAddressesToLocationsResponse)};b.prototype.locationToAddress=function(a,b){var c=a.locationType,d=(a=a.location)?a.clone().normalize():null,f="undefined"!==typeof d,l=this.outSpatialReference;a=this.parsedUrl;var e=this.requestOptions,c={outSR:l?JSON.stringify(l.toJSON()):null,location:f?JSON.stringify(d.toJSON()):null,locationType:c||null,f:"json"},c={query:this._encode(h({},a.query,
c))};b=h({},e,b,c);return n(a.path+"/reverseGeocode",b).then(this._handleLocationToAddressResponse)};b.prototype._handleAddressToLocationsResponse=function(a){a=a.data;if(!a)return[];var b=a.candidates,c=a.spatialReference;return b?b.map(function(a){if(a){var b=a.extent,d=a.location,e=b?b&&"number"===typeof b.xmin&&"number"===typeof b.ymin&&"number"===typeof b.xmax&&"number"===typeof b.ymax:!0;if(d&&"number"===typeof d.x&&"number"===typeof d.y&&e)return b&&(b.spatialReference=c),d.spatialReference=
c,k.fromJSON(a)}}):[]};b.prototype._handleSuggestLocationsResponse=function(a){return(a=a.data)?a.suggestions||[]:[]};b.prototype._handleAddressesToLocationsResponse=function(a){a=a.data;if(!a)return[];var b=a.locations,c=a.spatialReference;return b?b.map(function(a){var b=a.location;b&&(b.spatialReference=c);return k.fromJSON(a)}):[]};b.prototype._handleLocationToAddressResponse=function(a){if(a=a.data){var b=a.address;return k.fromJSON({address:b&&b.Match_addr||"",attributes:b||{},location:a.location,
score:100})}};g([e.property({type:u})],b.prototype,"outSpatialReference",void 0);g([e.property()],b.prototype,"url",void 0);return b=g([e.subclass("esri.tasks.Locator")],b)}(e.declared(v))});