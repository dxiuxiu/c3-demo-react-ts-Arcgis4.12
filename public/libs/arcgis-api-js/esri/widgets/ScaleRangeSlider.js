// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("../core/promiseUtils ../core/watchUtils ./support/_Tooltip ./ScaleRangeSlider/_RecommendedScaleRangeBounds ./ScaleRangeSlider/_SlideEvent ./ScaleRangeSlider/ScaleMenu ./ScaleRangeSlider/ScalePreview ./ScaleRangeSlider/ScaleRanges dijit/_WidgetBase dijit/form/DropDownButton dijit/popup dojo/aspect dojo/debounce dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/string dojox/form/HorizontalRangeSlider dojo/i18n!./ScaleRangeSlider/nls/ScaleRangeSlider".split(" "),
function(q,r,t,u,v,l,w,m,x,n,g,e,y,z,p,k,A,B,C,D,E){return x.createSubclass([t],{declaredClass:"esri.dijit.ScaleRangeSlider",baseClass:"esri-scale-range-slider",css:{scaleIndicator:"esri-scale-range-slider__scale-indicator",scaleIndicatorContainer:"esri-scale-range-slider__scale-indicator-container"},disabled:!1,view:null,layer:null,region:"en-US",minScale:0,maxScale:0,intermediateChanges:!1,labels:E,_slider:null,_currentScaleIndicator:null,_scalePreview:null,_maxScaleButton:null,_minScaleButton:null,
_viewUpdateHandler:null,_scaleRanges:null,_scheduleScaleRangeChangeEmit:null,_getSliderIndexRange:function(a){a=Math.floor(a);return{min:a,max:a+.99999}},_setDisabledAttr:function(a){this._slider.set("disabled",a);this._maxScaleButton.set("disabled",a);this._minScaleButton.set("disabled",a);this._set("disabled",a)},_setViewAttr:function(a){this._set("view",a);this._viewUpdateHandler&&this._viewUpdateHandler.remove();this._slider.set("disabled",!0);this._ensureView().then(this._updateFromView)},_setConstraintsAttr:function(a){this._set("constraints",
a);this._setUpSlider({minScale:a.minScale,maxScale:a.maxScale})},_updateFromView:function(a){this._setUpSlider({minScale:a.constraints.effectiveMinScale,maxScale:a.constraints.effectiveMaxScale});this._updateCurrentScaleIndicator();a=r.whenTrue(a,"stationary",this._updateCurrentScaleIndicator.bind(this));this.own(a);this._viewUpdateHandler=a},_setUpSlider:function(a){var b=a.maxScale;a=a.minScale;var c;this._slider.set("disabled",this.get("disabled"));this._scaleRanges.set("scaleRangeBounds",{minScale:a,
maxScale:b});c=this._getSliderIndexRange(this._scaleRanges.length-1);this._slider.set("maximum",c.max);this._silentSliderUpdate({maxScale:b,minScale:a})},_ensureView:function(){return this._untilLoaded(this.view)},_untilLoaded:function(a){return a.when()},_updateCurrentScaleIndicator:function(){var a=this._scaleRanges.clampScale(this.view.scale),a=this._mapScaleToSlider(a)/this._slider.maximum;this.isLeftToRight()||(a=1-a);A.set(this._currentScaleIndicator,{left:100*a+"%"})},_setLayerAttr:function(a){this._set("layer",
a);this._ensureScaleRangeProvider().then(this._ensureLayer).then(this._updateMinMaxScaleFromLayer)},_ensureLayer:function(){return this._untilLoaded(this.layer)},_updateMinMaxScaleFromLayer:function(a){this.set({minScale:a.minScale,maxScale:a.maxScale})},_mapSliderToScale:function(a){var b=this._getSliderIndexRange(a),c=this._scaleRanges.findScaleRangeByIndex(a);return this._mapToRange(a,b.min,b.max,c.minScale,c.maxScale)},_mapToRange:function(a,b,c,d,f){return d+(a-b)*(f-d)/(c-b)},_setRegionAttr:function(a){this._set("region",
a);this._scalePreview.set("source",m.getScalePreviewSource(a))},_getMinimumAttr:function(){return this._mapSliderToScale(this._slider.minimum)},_getMaximumAttr:function(){return this._mapSliderToScale(this._slider.maximum)},_getActualMaxScaleAttr:function(){return this._scaleRanges.clampMaxScale(this.maxScale)},_setMaxScaleAttr:function(a){this._set("maxScale",a);this._ensureScaleRangeProvider().then(function(){a=this._scaleRanges.clampMaxScale(a);this._set("maxScale",this._layerConstrainedMaxScale(a));
this._silentSliderUpdate({maxScale:a});this._scheduleScaleRangeChangeEmit()}.bind(this))},_silentSliderUpdate:function(a){var b=a.minScale,c=a.maxScale,d=this._scaleRanges;a=this._slider;void 0!==b&&(b=this._mapScaleToSlider(d.clampMinScale(b)),a.set("value",b,!1,!1));void 0!==c&&(b=this._mapScaleToSlider(d.clampMaxScale(c)),a.set("value",b,!1,!0))},_mapScaleToSlider:function(a){var b=this._scaleRanges.scaleToRangeIndex(a),c=this._getSliderIndexRange(b),b=this._scaleRanges.findScaleRangeByIndex(b);
return this._mapToRange(a,b.minScale,b.maxScale,c.min,c.max)},_getActualMinScaleAttr:function(){return this._scaleRanges.clampMinScale(this.minScale)},_setMinScaleAttr:function(a){this._set("minScale",a);this._ensureScaleRangeProvider().then(function(){a=this._scaleRanges.clampMinScale(a);this._set("minScale",this._layerConstrainedMinScale(a));this._silentSliderUpdate({minScale:a});this._scheduleScaleRangeChangeEmit()}.bind(this))},_ensureScaleRangeProvider:function(){return this.view?this._ensureView():
q.create(function(a){this.constraints&&a()}.bind(this))},_emitScaleRangeChange:function(){this.emit("change",{minScale:this.minScale,maxScale:this.maxScale})},_layerConstrainedMinScale:function(a){var b=this._getLayerLODS(),c;return 0<b.length?(b=b[0].scale,c=this._scaleRanges.get("firstRange"),(c=.85<this._mapToRange(a,c.maxScale,c.minScale,0,1))?b:a>b?b:a):this._scaleRanges.beyondMinScale(a)?0:a},_layerConstrainedMaxScale:function(a){var b=this._getLayerLODS();return 0<b.length?(b=b[b.length-1].scale,
a<b?b:a):this._scaleRanges.beyondMaxScale(a)?0:a},_getLayerLODS:function(){var a=this.layer;return a&&a.tileInfo&&a.tileInfo.lods||[]},constructor:function(){this._scaleRanges=new (m.createSubclass([u]));this._scheduleScaleRangeChangeEmit=y(this._emitScaleRangeChange.bind(this),0);this._ensureView=this._ensureView.bind(this);this._ensureScaleRangeProvider=this._ensureScaleRangeProvider.bind(this);this._ensureLayer=this._ensureLayer.bind(this);this._updateMinMaxScaleFromLayer=this._updateMinMaxScaleFromLayer.bind(this);
this._updateFromView=this._updateFromView.bind(this)},buildRendering:function(){this.inherited(arguments);this._initSlider();this._initScalePreview();this._initCurrentScaleIndicator();this._initScaleMenus()},_initSlider:function(){var a=new (D.createSubclass([v]))({baseClass:"esri-horizontal-slider",showButtons:!1,intermediateChanges:this.intermediateChanges,disabled:!0});this._slider=a;a.placeAt(this.domNode);a.startup();this.own(a.on("slide-onmousemove, slidemax-onmousemove",function(a){this._updateScalePreview(a.movable.handle)}.bind(this)),
a.on("slide-onmovestop, slidemax-onmovestop",function(a){z.contains(a.movable.handle,"dijitSliderThumbHover")||this._closeScalePreview()}.bind(this)),a.on("change",function(){var a=Math.round(this._mapSliderToScale(this._getSliderMin())),c=Math.round(this._mapSliderToScale(this._getSliderMax()));this.set({minScale:a,maxScale:c})}.bind(this)),e.after(a,"_setValueAttr",this._updateLabelMenus.bind(this)))},_getSliderMin:function(){return this._slider.get("value")[0]},_getSliderMax:function(){return this._slider.get("value")[1]},
_updateLabelMenus:function(){var a=this._maxScaleButton;this._minScaleButton.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMin()));a.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMax()))},_initScalePreview:function(){var a=new w;a.startup();g.moveOffScreen(a);[this._slider._movable.handle,this._slider._movableMax.handle].forEach(function(a){a.onmouseenter=this._updateScalePreview.bind(this,a);a.onmouseleave=this._closeScalePreview.bind(this)},this);this.own(a);
this._scalePreview=a},_closeScalePreview:function(){g.close(this._scalePreview)},_updateScalePreview:function(a){if(!this.disabled){var b=this._scalePreview;g.moveOffScreen(b);var c=this._slider,d=a===c.sliderHandle?this._getSliderMin():this._getSliderMax(),f=k.position(a),h=k.position(b.domNode),c=k.position(c.sliderBarContainer),e=this.isLeftToRight(),d=this._scaleRanges.getScalePreviewSpriteBackgroundPosition(d);b.set("backgroundPosition",d);f=f.x-c.x;h=.5*h.w;g.open({parent:this,popup:b,around:a,
orient:f<h?e?["above","below"]:["above-alt","below-alt"]:f<c.w-h?["above-centered","below-centered"]:e?["above-alt","below-alt"]:["above","below"]})}},_initCurrentScaleIndicator:function(){if(this.view){var a=p.create("div",{className:this.css.scaleIndicatorContainer},this._slider.sliderBarContainer),b=p.create("div",{className:this.css.scaleIndicator},a);this._currentScaleIndicator=b;this.createTooltip(b);a=B(b,"mouseover",function(){var a=C.substitute(this.labels.currentScaleTooltip,{scaleLabel:this._scaleRanges.getScaleRangeLabel(this._mapScaleToSlider(this.view.scale))});
this.findTooltip(b).set("label",a)}.bind(this));this.own(a)}},_initScaleMenus:function(){var a=new l,b=new l,c,d;this.own(a.on("scale-selected",function(a){c.closeDropDown();this.set("minScale",a.scale)}.bind(this)));this.own(b.on("scale-selected",function(a){d.closeDropDown();this.set("maxScale",a.scale)}.bind(this)));c=new n({baseClass:"esri-scale-menu__button esri-scale-menu__button--min",dropDown:a,dropDownPosition:["below","above"]});c.toggleDropDown();c.toggleDropDown();d=new n({baseClass:"esri-scale-menu__button esri-scale-menu__button--max",
dropDown:b,dropDownPosition:["below","above"]});d.toggleDropDown();d.toggleDropDown();this.own(e.before(c,"openDropDown",function(){var b=this._scaleRanges.findScaleRange(this.get("actualMaxScale")).minScale;a.set("options",{label:c.label,scale:{current:this.get("actualMinScale"),map:this._getViewScale(),min:this.get("minimum"),max:b}})}.bind(this)));this.own(e.before(d,"openDropDown",function(){var a=this._scaleRanges.findScaleRange(this.get("actualMinScale")).maxScale;b.set("options",{label:d.label,
scale:{current:this.get("actualMaxScale"),map:this._getViewScale(),min:a,max:this.get("maximum")}})}.bind(this)));c.placeAt(this.domNode);d.placeAt(this.domNode);a.startup();b.startup();c.startup();d.startup();this._minScaleButton=c;this._maxScaleButton=d},_getViewScale:function(){return this.view?this.view.scale:-1},startup:function(){this.inherited(arguments);this.watch("intermediateChanges",function(a,b,c){this._slider.set(a,c)})}})});