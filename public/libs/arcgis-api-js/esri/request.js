// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/awaiterHelper ./core/tsSupport/generatorHelper @dojo/framework/shim/global ./config ./kernel ./core/Error ./core/has ./core/lang ./core/promiseUtils ./core/string ./core/urlUtils @dojo/framework/shim/Promise".split(" "),function(B,ia,K,q,A,G,y,u,H,C,L,z,U,f){function x(a,b){var c=z.createAbortController();return z.create(function(d,l){V(c.signal,a,b).then(d).catch(l)},function(){c.abort()})}function V(a,b,c){return q(this,void 0,
void 0,function(){var d,l,e,g,k,h,D,m;return A(this,function(t){switch(t.label){case 0:return d=f.isDataProtocol(b),(l=f.isBlobProtocol(b))||d||(b=f.normalize(b)),e={url:b,requestOptions:K({},c)},(g=f.getInterceptor(b))?[4,W(g,e)]:[3,2];case 1:k=t.sent();if(null!=k)return[2,{data:k,getHeader:I,requestOptions:e.requestOptions,url:e.url}];g.after||g.error||(g=null);t.label=2;case 2:b=e.url;c=e.requestOptions;if("image"===c.responseType){if(C("host-webworker"))throw v("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),
e);}else if(d)throw v("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+c.responseType),e);if("head"===c.method){if(c.body)throw v("request:invalid-parameters",Error("body parameter cannot be set when method is 'head'"),e);if(d||l)throw v("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),e);}return[4,X()];case 3:t.sent();if(E)return[2,E.execute(b,c)];h=z.createAbortController();z.onAbort(a,function(){return h.abort()});
z.onAbort(c,function(){return h.abort()});D={controller:h,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:g,params:e,redoRequest:!1,useIdentity:y.request.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1};return[4,Y(D)];case 4:return m=t.sent(),g&&g.after&&g.after(m),[2,m]}})})}function Z(a){f.isBlobProtocol(a)||f.isDataProtocol(a)||(a=f.getOrigin(a))&&-1===x._corsServers.indexOf(a)&&x._corsServers.push(a)}function aa(a){a=f.getOrigin(a);return!a||U.endsWith(a,".arcgis.com")||
f.hasSameOrigin(a,f.appUrl)||-1!==x._corsServers.indexOf(a)||f.isTrustedServer(a)}function P(){var a;try{a=new DOMException("Aborted","AbortError")}catch(b){a=Error("Aborted"),a.name="AbortError"}return a}function v(a,b,c,d){var l="Error",e={url:c.url,requestOptions:c.requestOptions,getHeader:I,ssl:!1};if(b instanceof H)return b.details?(b.details=L.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=e,b;if(b){c=d&&function(a){return d.headers.get(a)};var g=d&&
d.status,k=b.message;k&&(l=k);c&&(e.getHeader=c);e.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||g||0;e.subCode=b.subcode;e.messageCode=b.messageCode;e.messages="string"===typeof b.details?[b.details]:b.details}a=new H(a,l,e);b&&"cancel"===b.dojoType&&(a.dojoType="cancel");return a}function X(){return q(this,void 0,void 0,function(){return A(this,function(a){switch(a.label){case 0:return C("host-webworker")?E?[3,2]:[4,new Promise(function(a,c){B(["./core/workers/request"],a,c)})]:[3,3];case 1:E=
a.sent(),a.label=2;case 2:return[3,6];case 3:if(M)return[3,6];if(!C("esri-abortable-fetch"))return[3,4];M=G.default.fetch;return[3,6];case 4:return[4,new Promise(function(a,c){B(["whatwg-fetch"],a,c)})];case 5:M=a.sent().fetch,a.label=6;case 6:return[2]}})})}function J(){return q(this,void 0,void 0,function(){return A(this,function(a){switch(a.label){case 0:return u.id?[3,2]:[4,new Promise(function(a,c){B(["./identity/IdentityManager"],a,c)})];case 1:a.sent(),a.label=2;case 2:return[2]}})})}function ba(a){return q(this,
void 0,void 0,function(){var b,c,d,l,e,g,k,h;return A(this,function(f){switch(f.label){case 0:b=a.params.url;c=a.params.requestOptions;d=a.controller.signal;l=c.body;k=g=e=null;Q&&"HTMLFormElement"in G.default&&(l instanceof FormData?e=l:l instanceof HTMLFormElement&&(g=l,e=new FormData(g)));"string"===typeof l&&(k=l);a.fetchOptions={cache:c.cacheBust&&C("esri-abortable-fetch")?"reload":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===c.method?"HEAD":"GET",mode:"cors",redirect:"follow",
signal:d};if(e||k)a.fetchOptions.body=e||k;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&c.query.token||e&&e.get&&e.get("token")||g&&g.elements.token);if(!a.useIdentity||a.hasToken||a.credentialToken||R(b)||z.isAborted(d))return[3,11];h=void 0;return"immediate"!==c.authMode?[3,3]:[4,J()];case 1:return f.sent(),[4,u.id.getCredential(b,{signal:d})];case 2:return h=f.sent(),a.credential=h,[3,10];case 3:return"no-prompt"!==c.authMode?[3,9]:[4,J()];case 4:f.sent(),
f.label=5;case 5:return f.trys.push([5,7,,8]),[4,u.id.checkSignInStatus(b)];case 6:return h=f.sent(),[3,8];case 7:return f.sent(),[3,8];case 8:return[3,10];case 9:u.id&&(h=u.id.findCredential(b)),f.label=10;case 10:h&&(a.credentialToken=h.token,a.useSSL=!!h.ssl),f.label=11;case 11:return[2]}})})}function R(a){return ca.some(function(b){return b.test(a)})}function da(a){return q(this,void 0,void 0,function(){var b,c,d,l,e,g,k,h,D,m,t,r,q,x,E,F,B,w,p,G,H,I,J,L,O,N;return A(this,function(n){switch(n.label){case 0:b=
a.params.url;c=a.params.requestOptions;d=a.fetchOptions;l=f.isBlobProtocol(b)||f.isDataProtocol(b);e=c.responseType||"json";g=l?0:null!=c.timeout?c.timeout:y.request.timeout;k=!1;if(!l){a.useSSL&&(b=f.toHTTPS(b));c.cacheBust&&"default"===d.cache&&(b=f.addQueryParameter(b,"request.preventCache",Date.now()));h=K({},c.query);a.credentialToken&&(h.token=a.credentialToken);D=f.objectToQuery(h);C("esri-url-encodes-apostrophe")&&(D=D.replace(/'/g,"%27"));m=b.length+1+D.length;t=void 0;k="post"===c.method||
!!c.body||m>y.request.maxUrlLength;if(r=c.useProxy||!!f.getProxyRule(b))q=f.getProxyUrl(b),t=q.path,!k&&t.length+1+m>y.request.maxUrlLength&&(k=!0),q.query&&(h=K({},q.query,h));if("HEAD"===d.method&&(k||r)){if(k){if(m>y.request.maxUrlLength)throw v("request:invalid-parameters",Error("URL exceeds maximum length"),a.params);throw v("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(r)throw v("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),
a.params);}k?(d.method="POST",c.body?b=f.addQueryParameters(b,h):(d.body=f.objectToQuery(h),d.headers["Content-Type"]="application/x-www-form-urlencoded")):b=f.addQueryParameters(b,h);r&&(a.useProxy=!0,b=t+"?"+b);h.token&&Q&&d.body instanceof FormData&&(x=d.body,x.set?x.set("token",h.token):x.append("token",h.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:f.isTrustedServer(b)?a.withCredentials=!0:u.id&&(E=u.id.findServerInfo(b))&&E.webTierAuth&&(a.withCredentials=
!0);a.withCredentials&&(d.credentials="include")}F=0;B=!1;0<g&&(F=setTimeout(function(){B=!0;a.controller.abort()},g));n.label=1;case 1:return n.trys.push([1,24,25,26]),"image"!==c.responseType||"default"!==d.cache||"GET"!==d.method||k||ea(c.headers)||!l&&!a.useProxy&&y.request.proxyUrl&&!aa(b)?[3,3]:[4,S(b,a)];case 2:return p=n.sent(),[3,23];case 3:return[4,M(b,d)];case 4:w=n.sent();a.useProxy||Z(b);if(!w.ok||"HEAD"===d.method)return[3,23];G=e;switch(G){case "array-buffer":return[3,5];case "blob":return[3,
7];case "image":return[3,7];case "document":return[3,9];case "json":return[3,11];case "xml":return[3,13]}return[3,15];case 5:return[4,w.arrayBuffer()];case 6:return p=n.sent(),[3,17];case 7:return[4,w.blob()];case 8:return p=n.sent(),[3,17];case 9:return H=T,[4,w.text()];case 10:return p=H.apply(void 0,[n.sent(),"text/html"]),[3,17];case 11:return[4,w.text()];case 12:return I=n.sent(),p=JSON.parse(I||null),[3,17];case 13:return J=T,[4,w.text()];case 14:return p=J.apply(void 0,[n.sent(),"application/xml"]),
[3,17];case 15:return[4,w.text()];case 16:return p=n.sent(),[3,17];case 17:F&&(clearTimeout(F),F=0);L=w.headers.get("Content-Type");if(!/application\/json|text\/plain/i.test(L)||!(p instanceof ArrayBuffer&&750>=p.byteLength||p instanceof Blob&&750>=p.size))return[3,21];n.label=18;case 18:return n.trys.push([18,20,,21]),[4,(new Response(p)).json()];case 19:return O=n.sent(),O.error&&(p=O),[3,21];case 20:return n.sent(),[3,21];case 21:return"image"===e&&p instanceof Blob?[4,S(URL.createObjectURL(p),
a,!0)]:[3,23];case 22:p=n.sent(),n.label=23;case 23:return[3,26];case 24:N=n.sent();if("AbortError"===N.name){if(B)throw Error("Timeout exceeded");throw z.createAbortError("Request canceled");}if(!w&&N instanceof TypeError&&y.request.proxyUrl&&!c.body&&"post"!==c.method&&"head"!==c.method&&!a.useProxy)a.redoRequest=!0,f.addProxyRule({proxyUrl:y.request.proxyUrl,urlPrefix:f.removeFile(f.urlToObject(b).path)});else throw N;return[3,26];case 25:return F&&clearTimeout(F),[7];case 26:return[2,[w,p]]}})})}
function W(a,b){return q(this,void 0,void 0,function(){var c,d,f;return A(this,function(e){switch(e.label){case 0:if(null!=a.responseData)return[2,a.responseData];a.headers&&(b.requestOptions.headers=K({},b.requestOptions.headers,a.headers));a.query&&(b.requestOptions.query=K({},b.requestOptions.query,a.query));if(!a.before)return[3,5];d=c=void 0;e.label=1;case 1:return e.trys.push([1,3,,4]),[4,a.before(b)];case 2:return d=e.sent(),[3,4];case 3:return f=e.sent(),c=v("request:interceptor",f,b),[3,
4];case 4:if(d instanceof Error||d instanceof H)c=v("request:interceptor",d,b);if(c)throw a.error&&a.error(c),c;return[2,d];case 5:return[2]}})})}function ea(a){if(a)for(var b=0,c=Object.getOwnPropertyNames(a);b<c.length;b++)if(a[c[b]])return!0;return!1}function T(a,b){var c;try{c=(new DOMParser).parseFromString(a,b)}catch(d){}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return c}function Y(a){return q(this,void 0,void 0,function(){var b,c,d,l,e,g,k,
h,q,m,t;return A(this,function(r){switch(r.label){case 0:return[4,ba(a)];case 1:r.sent(),r.label=2;case 2:r.trys.push([2,8,,9]),r.label=3;case 3:return[4,da(a)];case 4:b=r.sent(),c=b[0],d=b[1],r.label=5;case 5:return[4,fa(a,c,d)];case 6:if(!r.sent())return[3,3];r.label=7;case 7:return[3,9];case 8:throw l=r.sent(),e=v("request:server",l,a.params,c),e.details.ssl=a.useSSL,a.interceptor&&a.interceptor.error&&a.interceptor.error(e),e;case 9:return g=a.params.url,/\/sharing\/rest\/(accounts|portals)\/self/i.test(g)&&
!a.hasToken&&!a.credentialToken&&d&&d.user&&d.user.username&&!f.isTrustedServer(g)&&(k=f.getOrigin(g,!0))&&y.request.trustedServers.push(k),(h=a.credential)&&u.id&&(m=(q=u.id.findServerInfo(h.server))&&q.owningSystemUrl)&&(m=m.replace(/\/?$/,"/sharing"),(t=u.id.findCredential(m,h.userId))&&-1===u.id._getIdenticalSvcIdx(m,t)&&t.resources.unshift(m)),[2,{data:d,getHeader:c?function(a){return c.headers.get(a)}:I,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}]}})})}function fa(a,
b,c){return q(this,void 0,void 0,function(){var d,f,e,g,k;return A(this,function(h){switch(h.label){case 0:if(a.redoRequest)return a.redoRequest=!1,[2,!1];if(!b)return[2,!0];if(!b.ok)throw Error("Unable to load "+b.url+" status: "+b.status);c&&c.error&&(d=L.mixin(Error(),c.error));d&&(f=Number(d.code),e=d.hasOwnProperty("subcode")?Number(d.subcode):null,g=(g=d.messageCode)&&g.toUpperCase());return 403===f&&(4===e||d.message&&-1<d.message.toLowerCase().indexOf("ssl")&&-1===d.message.toLowerCase().indexOf("permission"))?
a.useSSL?[3,4]:(a.useSSL=!0,[2,!1]):[3,1];case 1:return a.useIdentity&&"no-prompt"!==a.params.requestOptions.authMode&&-1!==ga.indexOf(f)&&!R(a.params.url)&&(403!==f||-1===ha.indexOf(g)&&(null==e||2===e&&a.credentialToken))?[4,J()]:[3,4];case 2:return h.sent(),[4,u.id.getCredential(a.params.url,{error:v("request:server",d,a.params),signal:a.controller.signal,token:a.credentialToken})];case 3:return k=h.sent(),a.credential=k,a.credentialToken=k.token,a.useSSL=a.useSSL||k.ssl,[2,!1];case 4:if(d)throw d;
return[2,!0]}})})}function S(a,b,c){void 0===c&&(c=!1);return z.create(function(d,f){var e=b.controller.signal;if(z.isAborted(e))return f(P());var g=new Image;g.crossOrigin=b.withCredentials?"use-credentials":"anonymous";var k=function(){m();f(Error("Unable to load "+a))},h=function(){m();d(g)},l=function(){m();g.src="";f(P())},m=function(){C("esri-image-decode")||(g.removeEventListener("error",k),g.removeEventListener("load",h));e.removeEventListener("abort",l);c&&URL.revokeObjectURL(a)};g.alt="";
g.src=a;C("esri-image-decode")?g.decode().then(h,k):(g.addEventListener("error",k),g.addEventListener("load",h));e.addEventListener("abort",l)})}var M,E,Q="FormData"in G.default,ga=[499,498,403,401],ha=["COM_0056","COM_0057"],ca=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],I=function(){return null};x._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];return x});