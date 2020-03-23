// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(e,f,g,h,k){Object.defineProperty(f,"__esModule",{value:!0});e=function(e){function b(l,a,b){var c,d=e.call(this,!0)||this;d.view=l;d.disableMovements={pan:!0,zoom:!0,ascend:!0,rotate:!1,mode:"local"};d.keyToNumber=(c={},c[a.left]=0,c[a.right]=1,c[a.forward]=2,c[a.backward]=3,c[a.up]=4,c[a.down]=5,c[a.headingLeft]=6,c[a.headingRight]=7,c[a.tiltUp]=
8,c[a.tiltDown]=9,c);d.registerIncoming("key-down",b,function(a){return d.handleKeyDown(a)});d.registerIncoming("key-up",b,function(a){return d.handleKeyUp(a)});d.registerIncoming("blur",b,function(){return d.handleBlur()});return d}g(b,e);b.prototype.handleKeyDown=function(b){var a=this.keyToNumber[b.data.key];null!=a&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new h.GamepadKeyboardController(this.view,void 0,this.disableMovements),this.view.state.switchCameraController(this.cameraControllerKeyboard)),
this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(a),b.stopPropagation()))};b.prototype.handleBlur=function(){this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.finishController(),this.cameraControllerKeyboard=null)};b.prototype.handleKeyUp=function(b){var a=this.keyToNumber[b.data.key];null!=a&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(a),
b.stopPropagation())};return b}(k.InputHandler);f.KeyboardNavigation=e});