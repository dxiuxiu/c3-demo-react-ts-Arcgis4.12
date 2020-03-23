//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define("require exports tslib ./WidgetBase ./vdom ../shim/array ./d ../shim/global ./mixins/Themed ./decorators/alwaysRender".split(" "),a)})(function(a,h){function r(d){return function(a){function f(){return null!==a&&a.apply(this,arguments)||this}g.__extends(f,a);f.prototype.render=function(){var a=this,g=Object.keys(this.properties).reduce(function(d,
b){var c=a.properties[b];0===b.indexOf("on")&&(b="__"+b);d[b]=c;return d},{});return m.dom({node:d,props:g,diffType:"dom"})};Object.defineProperty(f,"domNode",{get:function(){return d},enumerable:!0,configurable:!0});return f=g.__decorate([w.alwaysRender()],f)}(t.WidgetBase)}function n(a,h){var d=a.childType,v=a.registryFactory,l={};a.attributes.forEach(function(a){var b=a.toLowerCase();l[b]=a});return function(f){function b(){var c=null!==f&&f.apply(this,arguments)||this;c._properties={};c._children=
[];c._eventProperties={};c._initialised=!1;return c}g.__extends(b,f);b.prototype.connectedCallback=function(){var c=this;if(!this._initialised){var b={},e=a.attributes,f=a.properties,x=a.events;this._properties=g.__assign({},this._properties,this._attributesToProperties(e));g.__spread(e,f).forEach(function(a){var e=c[a],u=a.replace(/^on/,"__");void 0!==e&&(c._properties[a]=e);u!==a&&(b[u]={get:function(){return c._getProperty(a)},set:function(b){return c._setProperty(a,b)}});b[a]={get:function(){return c._getProperty(a)},
set:function(b){return c._setProperty(a,b)}}});x.forEach(function(a){var e=a.replace(/^on/,"").toLowerCase(),d=a.replace(/^on/,"__on");b[d]={get:function(){return c._getEventProperty(a)},set:function(b){return c._setEventProperty(a,b)}};c._eventProperties[a]=void 0;c._properties[a]=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];d=c._getEventProperty(a);"function"===typeof d&&d.apply(void 0,g.__spread(b));c.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:b}))}});Object.defineProperties(this,
b);y.from(d===p.TEXT?this.childNodes:this.children).forEach(function(a){d===p.DOJO?(a.addEventListener("dojo-ce-render",function(){return c._render()}),a.addEventListener("dojo-ce-connected",function(){return c._render()}),c._children.push(r(a))):c._children.push(m.dom({node:a,diffType:"dom"}))});this.addEventListener("dojo-ce-connected",function(a){return c._childConnected(a)});var l=this._properties,n=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}g.__extends(b,a);b.prototype.render=
function(){return m.w(h,l,c.__children__())};return b}(t.WidgetBase),e=v(),q=z.registerThemeInjector(this._getTheme(),e);k.default.addEventListener("dojo-theme-set",function(){return q.set(c._getTheme())});this._renderer=f=A.renderer(function(){return m.w(n,{})});f.mount({domNode:this,merge:!1,registry:e});if(e=this.children[0])e=k.default.getComputedStyle(e).display,this.style.display=void 0===e?"block":e;this._initialised=!0;this.dispatchEvent(new CustomEvent("dojo-ce-connected",{bubbles:!0,detail:this}))}};
b.prototype._getTheme=function(){if(k.default&&k.default.dojoce&&k.default.dojoce.theme)return k.default.dojoce.themes[k.default.dojoce.theme]};b.prototype._childConnected=function(a){var c=this,b=a.detail;b.parentNode!==this||this._children.some(function(a){return a.domNode===b})||(b.addEventListener("dojo-ce-render",function(){return c._render()}),this._children.push(r(b)),this._render())};b.prototype._render=function(){this._renderer&&(this._renderer.invalidate(),this.dispatchEvent(new CustomEvent("dojo-ce-render",
{bubbles:!1,detail:this})))};b.prototype.__properties__=function(){return g.__assign({},this._properties,this._eventProperties)};b.prototype.__children__=function(){return d===p.DOJO?this._children.filter(function(a){return a.domNode.isWidget}).map(function(a){var b=a.domNode;return m.w(a,g.__assign({},b.__properties__()),g.__spread(b.__children__()))}):this._children};b.prototype.attributeChangedCallback=function(a,b,d){this._setProperty(l[a],d)};b.prototype._setEventProperty=function(a,b){this._eventProperties[a]=
b};b.prototype._getEventProperty=function(a){return this._eventProperties[a]};b.prototype._setProperty=function(a,b){"function"===typeof b&&(b[t.noBind]=!0);this._properties[a]=b;this._render()};b.prototype._getProperty=function(a){return this._properties[a]};b.prototype._attributesToProperties=function(a){var b=this;return a.reduce(function(a,d){var c=d.toLowerCase(),c=b.getAttribute(c);null!==c&&(a[d]=c);return a},{})};Object.defineProperty(b,"observedAttributes",{get:function(){return Object.keys(l)},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isWidget",{get:function(){return!0},enumerable:!0,configurable:!0});return b}(HTMLElement)}function q(a){var d=a.prototype&&a.prototype.__customElementDescriptor;if(!d)throw Error("Cannot get descriptor for Custom Element, have you added the @customElement decorator to your Widget?");k.default.customElements.define(d.tagName,n(d,a))}Object.defineProperty(h,"__esModule",{value:!0});var g=a("tslib"),t=a("./WidgetBase"),A=a("./vdom"),
y=a("../shim/array"),m=a("./d"),k=a("../shim/global"),z=a("./mixins/Themed"),w=a("./decorators/alwaysRender"),p;(function(a){a.DOJO="DOJO";a.NODE="NODE";a.TEXT="TEXT"})(p=h.CustomElementChildType||(h.CustomElementChildType={}));h.DomToWidgetWrapper=r;h.create=n;h.register=q;h.default=q});