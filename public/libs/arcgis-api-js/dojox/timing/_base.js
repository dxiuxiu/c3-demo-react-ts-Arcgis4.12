//>>built
define(["dojo/_base/kernel","dojo/_base/lang"],function(a){a.experimental("dojox.timing");a.getObject("timing",!0,dojox);dojox.timing.Timer=function(a){this.timer=null;this.isRunning=!1;this.interval=a;this.onStop=this.onStart=null};a.extend(dojox.timing.Timer,{onTick:function(){},setInterval:function(b){this.isRunning&&window.clearInterval(this.timer);this.interval=b;this.isRunning&&(this.timer=window.setInterval(a.hitch(this,"onTick"),this.interval))},start:function(){if("function"==typeof this.onStart)this.onStart();
this.isRunning=!0;this.timer=window.setInterval(a.hitch(this,"onTick"),this.interval)},stop:function(){if("function"==typeof this.onStop)this.onStop();this.isRunning=!1;window.clearInterval(this.timer)}});return dojox.timing});