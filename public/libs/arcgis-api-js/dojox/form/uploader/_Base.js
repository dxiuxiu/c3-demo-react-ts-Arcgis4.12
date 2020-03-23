//>>built
define("dojo/dom-form dojo/dom-style dojo/dom-construct dojo/dom-attr dojo/has dojo/_base/declare dojo/_base/event dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin".split(" "),function(n,p,q,f,b,g,h,k,l,m){b.add("FormData",function(){return!!window.FormData});b.add("xhr-sendAsBinary",function(){var a=window.XMLHttpRequest&&new window.XMLHttpRequest;return a&&!!a.sendAsBinary});b.add("file-multiple",function(){return!!{"true":1,"false":1}[f.get(document.createElement("input",{type:"file"}),
"multiple")]});return g("dojox.form.uploader._Base",[k,l,m],{getForm:function(){if(!this.form)for(var a=this.domNode;a&&a.tagName&&a!==document.body;){if("form"==a.tagName.toLowerCase()){this.form=a;break}a=a.parentNode}return this.form},getUrl:function(){this.uploadUrl&&(this.url=this.uploadUrl);if(this.url)return this.url;this.getForm()&&(this.url=this.form.action);return this.url},connectForm:function(){this.url=this.getUrl();!this._fcon&&this.getForm()&&(this._fcon=!0,this.connect(this.form,"onsubmit",
function(a){console.log("SUBMIT");h.stop(a);this.submit(this.form)}))},supports:function(a){switch(a){case "multiple":if("flash"==this.force||"iframe"==this.force)break;return b("file-multiple");case "FormData":return b(a);case "sendAsBinary":return b("xhr-sendAsBinary")}return!1},getMimeType:function(){return"application/octet-stream"},getFileType:function(a){return a.substring(a.lastIndexOf(".")+1).toUpperCase()},convertBytes:function(a){var b=Math.round(a/1024*1E5)/1E5,d=Math.round(a/1048576*1E5)/
1E5,e=Math.round(a/1073741824*1E5)/1E5,c=a;1<b&&(c=b.toFixed(1)+" kb");1<d&&(c=d.toFixed(1)+" mb");1<e&&(c=e.toFixed(1)+" gb");return{kb:b,mb:d,gb:e,bytes:a,value:c}}})});