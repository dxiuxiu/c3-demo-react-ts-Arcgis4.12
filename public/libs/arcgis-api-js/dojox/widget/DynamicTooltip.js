//>>built
define(["dojo","dijit","dojox","dojo/i18n!dijit/nls/loading","dojo/require!dijit/Tooltip"],function(a,b,d){a.provide("dojox.widget.DynamicTooltip");a.experimental("dojox.widget.DynamicTooltip");a.require("dijit.Tooltip");a.requireLocalization("dijit","loading");a.declare("dojox.widget.DynamicTooltip",b.Tooltip,{hasLoaded:!1,href:"",label:"",preventCache:!1,postMixInProperties:function(){this.inherited(arguments);this._setLoadingLabel()},_setLoadingLabel:function(){this.href&&(this.label=a.i18n.getLocalization("dijit",
"loading",this.lang).loadingState)},_setHrefAttr:function(a){this.href=a;this.hasLoaded=!1},loadContent:function(c){!this.hasLoaded&&this.href&&(this._setLoadingLabel(),this.hasLoaded=!0,a.xhrGet({url:this.href,handleAs:"text",tooltipWidget:this,load:function(a,b){this.tooltipWidget.label=a;this.tooltipWidget.close();this.tooltipWidget.open(c)},preventCache:this.preventCache}))},refresh:function(){this.hasLoaded=!1},open:function(a){if(a=a||this._connectNodes&&this._connectNodes[0])this.loadContent(a),
this.inherited(arguments)}})});