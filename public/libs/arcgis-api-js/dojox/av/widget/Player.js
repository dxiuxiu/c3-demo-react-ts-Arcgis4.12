//>>built
define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(b,d,e,f){b.experimental("dojox.av.widget.Player");return b.declare("dojox.av.widget.Player",[e,f],{playerWidth:"480px",widgetsInTemplate:!0,templateString:b.cache("dojox.av.widget","resources/Player.html"),_fillContent:function(){if(!this.items&&this.srcNodeRef){this.items=[];var a=b.query("*",this.srcNodeRef);b.forEach(a,function(a){this.items.push(a)},this)}},postCreate:function(){b.style(this.domNode,"width",this.playerWidth+
(b.isString(this.playerWidth)?"":"px"));b.isString(this.playerWidth)&&this.playerWidth.indexOf("%")&&b.connect(window,"resize",this,"onResize");this.children=[];b.forEach(this.items,function(a,c){a.id=d.getUniqueId("player_control");switch(b.attr(a,"controlType")){case "play":this.playContainer.appendChild(a);break;case "volume":this.controlsBottom.appendChild(a);break;case "status":this.statusContainer.appendChild(a);break;case "progress":case "slider":this.progressContainer.appendChild(a);break;
case "video":this.mediaNode=a,this.playerScreen.appendChild(a)}this.items[c]=a.id},this)},startup:function(){this.media=d.byId(this.mediaNode.id);b.isAIR||(b.style(this.media.domNode,"width","100%"),b.style(this.media.domNode,"height","100%"));b.forEach(this.items,function(a){a!==this.mediaNode.id&&(a=d.byId(a),this.children.push(a),a&&a.setMedia(this.media,this))},this)},onResize:function(a){var c=b.marginBox(this.domNode);if(this.media&&null!==this.media.onResize)this.media.onResize(c);b.forEach(this.children,
function(a){if(a.onResize)a.onResize(c)})}})});