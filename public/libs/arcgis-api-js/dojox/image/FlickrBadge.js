//>>built
define(["dojo","dojox/main","dojox/image/Badge","dojox/data/FlickrRestStore"],function(a,c){a.getObject("image",!0,c);return a.declare("dojox.image.FlickrBadge",c.image.Badge,{children:"a.flickrImage",userid:"",username:"",setid:"",tags:"",searchText:"",target:"",apikey:"8c6803164dbc395fb7131c9d54843627",_store:null,postCreate:function(){this.username&&!this.userid&&a.io.script.get({url:"https://www.flickr.com/services/rest/",preventCache:!0,content:{format:"json",method:"flickr.people.findByUsername",
api_key:this.apikey,username:this.username},callbackParamName:"jsoncallback"}).addCallback(this,function(a){a.user&&a.user.nsid&&(this.userid=a.user.nsid,this._started||this.startup())})},startup:function(){if(!this._started&&this.userid){var b={userid:this.userid};this.setid&&(b.setid=this.setid);this.tags&&(b.tags=this.tags);this.searchText&&(b.text=this.searchText);var e=arguments;this._store=new c.data.FlickrRestStore({apikey:this.apikey});this._store.fetch({count:this.cols*this.rows,query:b,
onComplete:a.hitch(this,function(b){a.forEach(b,function(b){var d=a.doc.createElement("a");a.addClass(d,"flickrImage");d.href=this._store.getValue(b,"link");this.target&&(d.target=this.target);var c=a.doc.createElement("img");c.src=this._store.getValue(b,"imageUrlThumb");a.style(c,{width:"100%",height:"100%"});d.appendChild(c);this.domNode.appendChild(d)},this);c.image.Badge.prototype.startup.call(this,e)})})}}})});