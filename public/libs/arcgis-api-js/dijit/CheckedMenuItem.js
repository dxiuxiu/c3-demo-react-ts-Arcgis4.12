//>>built
require({cache:{"url:dijit/templates/CheckedMenuItem.html":'\x3ctr class\x3d"dijitReset" data-dojo-attach-point\x3d"focusNode" role\x3d"${role}" tabIndex\x3d"-1" aria-checked\x3d"${checked}"\x3e\r\n\t\x3ctd class\x3d"dijitReset dijitMenuItemIconCell" role\x3d"presentation"\x3e\r\n\t\t\x3cspan class\x3d"dijitInline dijitIcon dijitMenuItemIcon dijitCheckedMenuItemIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\r\n\t\t\x3cspan class\x3d"dijitMenuItemIconChar dijitCheckedMenuItemIconChar"\x3e${!checkedChar}\x3c/span\x3e\r\n\t\x3c/td\x3e\r\n\t\x3ctd class\x3d"dijitReset dijitMenuItemLabel" colspan\x3d"2" data-dojo-attach-point\x3d"containerNode,labelNode,textDirNode"\x3e\x3c/td\x3e\r\n\t\x3ctd class\x3d"dijitReset dijitMenuItemAccelKey" style\x3d"display: none" data-dojo-attach-point\x3d"accelKeyNode"\x3e\x3c/td\x3e\r\n\t\x3ctd class\x3d"dijitReset dijitMenuArrowCell" role\x3d"presentation"\x3e\x26#160;\x3c/td\x3e\r\n\x3c/tr\x3e\r\n'}});
define(["dojo/_base/declare","dojo/dom-class","./MenuItem","dojo/text!./templates/CheckedMenuItem.html","./hccss"],function(b,e,c,d){return b("dijit.CheckedMenuItem",c,{baseClass:"dijitMenuItem dijitCheckedMenuItem",templateString:d,checked:!1,_setCheckedAttr:function(a){this.domNode.setAttribute("aria-checked",a?"true":"false");this._set("checked",a)},iconClass:"",role:"menuitemcheckbox",checkedChar:"\x26#10003;",onChange:function(){},_onClick:function(a){this.disabled||(this.set("checked",!this.checked),
this.onChange(this.checked));this.onClick(a)}})});