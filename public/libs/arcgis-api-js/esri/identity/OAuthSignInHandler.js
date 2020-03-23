// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("./Credential ../core/domUtils ../core/has ../core/Error ../core/promiseUtils ../core/urlUtils ../intl/substitute dijit/Dialog dijit/registry dojo/dom-attr dojo/i18n!./nls/identity dijit/form/Button".split(" "),function(t,g,u,h,m,k,v,n,p,q,w){var r=v.substitute;return{_oAuthIntervalId:0,_oAuthDialogContent:"\x3cdiv class\x3d'dijitDialogPaneContentArea'\x3e\x3cdiv style\x3d'padding-bottom: 5px; word-wrap: break-word;'\x3e{oAuthInfo}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriErrorMsg' style\x3d'display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'\x3e{invalidUser}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitDialogPaneActionBar'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdSubmit\"'\x3e{lblOk}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdCancel\"'\x3e{lblCancel}\x3c/button\x3e\x3c/div\x3e",
setOAuthRedirectionHandler:function(b){this._oAuthRedirectFunc=b},oAuthSignIn:function(b,d,a,c){var e=this._oAuthDfd=m.createResolver();if(c&&c.signal)m.onAbort(c.signal,function(){var a=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;if(a&&!a.closed)a.close();else if(this.oAuthDialog)this.oAuthDialog.onCancel()}.bind(this));e.resUrl_=b;e.sinfo_=d;e.oinfo_=a;var h=!c||!1!==c.oAuthPopupConfirmation;if(!a.popup||!h)return this._doOAuthSignIn(b,d,a),e.promise;this._nls||(this._nls=w);this.oAuthDialog||(this.oAuthDialog=
this._createOAuthDialog());b=this.oAuthDialog;a=c&&c.error;c=c&&c.token;g.hide(b.errMsg_);a&&a.details&&403==a.details.httpStatus&&c&&(q.set(b.errMsg_,"innerHTML",this._nls.forbidden),g.show(b.errMsg_));q.set(b.serverLink_,{title:d.server,innerHTML:-1!==d.server.toLowerCase().indexOf("arcgis.com")?"ArcGIS Online":d.server});b.show();return e.promise},setOAuthResponseHash:function(b){var d=this._oAuthDfd;this._oAuthDfd=null;if(d&&b)if(clearInterval(this._oAuthIntervalId),"#"===b.charAt(0)&&(b=b.substring(1)),
b=k.queryToObject(b),b.error){var a="access_denied"===b.error;b=new h(a?"identity-manager:user-aborted":"identity-manager:authentication-failed",a?"ABORTED":"OAuth: "+b.error+" - "+b.error_description);d.reject(b)}else{var a=d.oinfo_._oAuthCred,c=new t({userId:b.username,server:d.sinfo_.server,token:b.access_token,expires:Date.now()+1E3*Number(b.expires_in),ssl:"true"===b.ssl,_oAuthCred:a});a.storage=b.persist?window.localStorage:window.sessionStorage;a.token=c.token;a.expires=c.expires;a.userId=
c.userId;a.ssl=c.ssl;a.save();d.resolve(c)}},_createOAuthDialog:function(){var b=this._nls,d=r(this._oAuthDialogContent,b),d=r(d,{server:"\x3cspan class\x3d'serverLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e"}),a=new n({title:b.title,content:d,"class":"esri-widget esriOAuthSignInDialog esriIdentityDialog",style:"min-width: 18em;",esriIdMgr_:this,execute_:function(){var b=a.esriIdMgr_._oAuthDfd;a.hide_();a.esriIdMgr_._doOAuthSignIn(b.resUrl_,b.sinfo_,b.oinfo_)},cancel_:function(){var b=
a.esriIdMgr_._oAuthDfd;a.esriIdMgr_._oAuthDfd=null;a.hide_();var d=new h("identity-manager:user-aborted","ABORTED");b.reject(d)},hide_:function(){g.hide(a.errMsg_);a.hide();n._DialogLevelManager.hide(a)}}),b=a.domNode;a.btnSubmit_=p.byNode(b.getElementsByClassName("esriIdSubmit")[0]);a.btnCancel_=p.byNode(b.getElementsByClassName("esriIdCancel")[0]);a.serverLink_=b.getElementsByClassName("serverLink")[0];a.errMsg_=b.getElementsByClassName("esriErrorMsg")[0];a.connect(a.btnSubmit_,"onClick",a.execute_);
a.connect(a.btnCancel_,"onClick",a.onCancel);a.connect(a,"onCancel",a.cancel_);return a},_doOAuthSignIn:function(b,d,a){var c=this,e={client_id:a.appId,response_type:"token",state:JSON.stringify({portalUrl:a.portalUrl}),expiration:a.expiration,locale:a.locale,redirect_uri:a.popup?k.makeAbsolute(a.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};a.forceLogin&&(e.force_login=!0);var g=a.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",l=g+"?"+k.objectToQuery(e);if(a.popup){var f;
7===u("ie")?(f=window.open(a.popupCallbackUrl,"esriJSAPIOAuth",a.popupWindowFeatures),f.location=l):f=window.open(l,"esriJSAPIOAuth",a.popupWindowFeatures);f?(f.focus(),this._oAuthDfd.oAuthWin_=f,this._oAuthIntervalId=setInterval(function(){if(f.closed){clearInterval(c._oAuthIntervalId);var a=c._oAuthDfd;if(a){var b=new h("identity-manager:user-aborted","ABORTED");a.reject(b)}}},500)):(b=new h("identity-manager:popup-blocked","ABORTED"),this._oAuthDfd.reject(b))}else this._rejectOnPersistedPageShow=
!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:e,authorizeUrl:g,resourceUrl:b,serverInfo:d,oAuthInfo:a}):window.location=l}}});