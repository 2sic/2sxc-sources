(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0p6s":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL"),a=n("QibW"),r=n("3Pt+"),o=function(){function t(){this.filter=""}return t.prototype.agInit=function(t){this.params=t},t.prototype.isFilterActive=function(){return""!==this.filter},t.prototype.doesFilterPass=function(t){var e=this.params.valueGetter(t.node);return null!=e&&e.toString()===this.filter},t.prototype.getModel=function(){if(this.isFilterActive())return{filterType:"boolean",filter:this.filter}},t.prototype.setModel=function(t){this.filter=t?t.filter:""},t.prototype.afterGuiAttached=function(t){},t.prototype.filterChanged=function(){this.params.filterChangedCallback()},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-boolean-filter"]],decls:7,vars:1,consts:[[3,"ngModel","ngModelChange"],["value",""],["value","true"],["value","false"]],template:function(t,e){1&t&&(i.Vb(0,"mat-radio-group",0),i.dc("ngModelChange",function(t){return e.filter=t})("ngModelChange",function(){return e.filterChanged()}),i.Vb(1,"mat-radio-button",1),i.Mc(2,"All"),i.Ub(),i.Vb(3,"mat-radio-button",2),i.Mc(4,"True"),i.Ub(),i.Vb(5,"mat-radio-button",3),i.Mc(6,"False"),i.Ub(),i.Ub()),2&t&&i.nc("ngModel",e.filter)},directives:[a.b,r.m,r.p,a.a],styles:[".mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:12px;width:160px;height:104px}"]}),t}()},"1jcm":function(t,e,n){"use strict";n.d(e,"a",function(){return O}),n.d(e,"b",function(){return I});var i=n("vuIU"),a=n("Ji7U"),r=n("LK+K"),o=n("1OyB"),s=n("GU7r"),c=n("fXoL"),l=n("FKr1"),d=n("8LU1"),u=n("3Pt+"),p=n("R1ws"),h=n("u47x"),m=["thumbContainer"],g=["toggleBar"],f=["input"],b=function(){return{enterDuration:150}},y=["*"],v=new c.r("mat-slide-toggle-default-options",{providedIn:"root",factory:function(){return{disableToggleValue:!1}}}),x=0,_={provide:u.k,useExisting:Object(c.V)(function(){return O}),multi:!0},k=function t(e,n){Object(o.a)(this,t),this.source=e,this.checked=n},C=function t(e){Object(o.a)(this,t),this._elementRef=e},w=Object(l.z)(Object(l.u)(Object(l.v)(Object(l.w)(C)),"accent")),O=function(){var t=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(t,i,a,r,s,l){var d;return Object(o.a)(this,n),(d=e.call(this,t))._focusMonitor=i,d._changeDetectorRef=a,d.defaults=s,d._animationMode=l,d._onChange=function(t){},d._onTouched=function(){},d._uniqueId="mat-slide-toggle-".concat(++x),d._required=!1,d._checked=!1,d.name=null,d.id=d._uniqueId,d.labelPosition="after",d.ariaLabel=null,d.ariaLabelledby=null,d.change=new c.n,d.toggleChange=new c.n,d.tabIndex=parseInt(r)||0,d}return Object(i.a)(n,[{key:"required",get:function(){return this._required},set:function(t){this._required=Object(d.b)(t)}},{key:"checked",get:function(){return this._checked},set:function(t){this._checked=Object(d.b)(t),this._changeDetectorRef.markForCheck()}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}},{key:"ngAfterContentInit",value:function(){var t=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe(function(e){"keyboard"===e||"program"===e?t._inputElement.nativeElement.focus():e||Promise.resolve().then(function(){return t._onTouched()})})}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"_onChangeEvent",value:function(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}},{key:"_onInputClick",value:function(t){t.stopPropagation()}},{key:"writeValue",value:function(t){this.checked=!!t}},{key:"registerOnChange",value:function(t){this._onChange=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"setDisabledState",value:function(t){this.disabled=t,this._changeDetectorRef.markForCheck()}},{key:"focus",value:function(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}},{key:"toggle",value:function(){this.checked=!this.checked,this._onChange(this.checked)}},{key:"_emitChangeEvent",value:function(){this._onChange(this.checked),this.change.emit(new k(this,this.checked))}},{key:"_onLabelTextChange",value:function(){this._changeDetectorRef.detectChanges()}}]),n}(w);return t.\u0275fac=function(e){return new(e||t)(c.Pb(c.l),c.Pb(h.h),c.Pb(c.h),c.ac("tabindex"),c.Pb(v),c.Pb(p.a,8))},t.\u0275cmp=c.Jb({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(t,e){var n;1&t&&(c.Rc(m,1),c.Rc(g,1),c.Rc(f,1)),2&t&&(c.xc(n=c.ec())&&(e._thumbEl=n.first),c.xc(n=c.ec())&&(e._thumbBarEl=n.first),c.xc(n=c.ec())&&(e._inputElement=n.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,e){2&t&&(c.Yb("id",e.id),c.Eb("tabindex",e.disabled?null:-1)("aria-label",null)("aria-labelledby",null),c.Hb("mat-checked",e.checked)("mat-disabled",e.disabled)("mat-slide-toggle-label-before","before"==e.labelPosition)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[c.Cb([_]),c.Ab],ngContentSelectors:y,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,e){if(1&t&&(c.mc(),c.Vb(0,"label",0,1),c.Vb(2,"div",2,3),c.Vb(4,"input",4,5),c.dc("change",function(t){return e._onChangeEvent(t)})("click",function(t){return e._onInputClick(t)}),c.Ub(),c.Vb(6,"div",6,7),c.Qb(8,"div",8),c.Vb(9,"div",9),c.Qb(10,"div",10),c.Ub(),c.Ub(),c.Ub(),c.Vb(11,"span",11,12),c.dc("cdkObserveContent",function(){return e._onLabelTextChange()}),c.Vb(13,"span",13),c.Mc(14,"\xa0"),c.Ub(),c.lc(15),c.Ub(),c.Ub()),2&t){var n=c.yc(1),i=c.yc(12);c.Eb("for",e.inputId),c.Db(2),c.Hb("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),c.Db(2),c.nc("id",e.inputId)("required",e.required)("tabIndex",e.tabIndex)("checked",e.checked)("disabled",e.disabled),c.Eb("name",e.name)("aria-checked",e.checked.toString())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),c.Db(5),c.nc("matRippleTrigger",n)("matRippleDisabled",e.disableRipple||e.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",c.qc(17,b))}},directives:[l.p,s.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),t}(),S=function(){var t=function t(){Object(o.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({}),t}(),I=function(){var t=function t(){Object(o.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({imports:[[S,l.q,l.h,s.c],S,l.h]}),t}()},"78Og":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL"),a=function(){function t(){}return t.prototype.onMousedown=function(t){t.stopPropagation()},t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Kb({type:t,selectors:[["","appMousedownStopPropagation",""]],hostBindings:function(t,e){1&t&&i.dc("mousedown",function(t){return e.onMousedown(t)})}}),t}()},"8gzK":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("bv8H");function a(t){switch(t){case i.a.String:return"text_fields";case i.a.Entity:return"share";case i.a.Boolean:return"toggle_on";case i.a.Number:return"dialpad";case i.a.Custom:return"extension";case i.a.DateTime:return"today";case i.a.Hyperlink:return"link";case i.a.Empty:return"crop_free";default:return"device_unknown"}}},ALMk:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),a=n("jhN1"),r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)},t.\u0275fac=function(e){return new(e||t)(i.Pb(a.b))},t.\u0275pipe=i.Ob({name:"safeResourceUrl",type:t,pure:!0}),t}()},BJZ3:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),a=n("tyNb"),r=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-empty-route"]],decls:1,vars:0,template:function(t,e){1&t&&i.Qb(0,"router-outlet")},directives:[a.e],encapsulation:2}),t}()},HQci:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r});var i="MyController.cs",a="_MyFile.cshtml",r="MyFile.html"},"L/cq":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL"),a=function(){function t(){}return t.prototype.onClick=function(t){t.stopPropagation()},t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Kb({type:t,selectors:[["","appClickStopPropagation",""]],hostBindings:function(t,e){1&t&&i.dc("click",function(t){return e.onClick(t)})}}),t}()},L6al:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("BToE"),a=n("fXoL"),r=n("tk/3"),o=n("1O52"),s=n("GJBw"),c=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.apiUrl=function(t){return this.dnnContext.$2sxc.http.apiUrl(t)},t.prototype.getAll=function(){return this.http.get(this.apiUrl(i.b+"list"),{params:{zoneId:this.context.zoneId.toString()}})},t.prototype.create=function(t){return this.http.post(this.apiUrl(i.b+"app"),{},{params:{zoneId:this.context.zoneId.toString(),name:t}})},t.prototype.delete=function(t){return this.http.delete(this.apiUrl(i.b+"app"),{params:{zoneId:this.context.zoneId.toString(),appId:t.toString()}})},t.prototype.flushCache=function(t){return this.http.get(this.apiUrl(i.b+"flushcache"),{params:{zoneId:this.context.zoneId.toString(),appId:t.toString()}})},t.\u0275fac=function(e){return new(e||t)(a.Zb(r.b),a.Zb(o.a),a.Zb(s.a))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac}),t}()},PRNy:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var i=n("fXoL"),a=n("ofXK"),r=n("kmnG");function o(t,e){1&t&&i.Rb(0)}function s(t,e){if(1&t&&(i.Vb(0,"mat-hint"),i.Kc(1,o,1,0,"ng-container",3),i.Ub()),2&t){i.hc();var n=i.yc(4);i.Db(1),i.nc("ngTemplateOutlet",n)}}function c(t,e){1&t&&i.Rb(0)}function l(t,e){if(1&t&&(i.Vb(0,"mat-error"),i.Kc(1,c,1,0,"ng-container",3),i.Ub()),2&t){i.hc();var n=i.yc(4);i.Db(1),i.nc("ngTemplateOutlet",n)}}function d(t,e){1&t&&i.lc(0)}var u=function(t){return{"hint-box__short":t}},p=["*"],h=function(){function t(){this.isError=!1,this.isShort=!0}return t.prototype.toggleIsShort=function(){this.isShort=!this.isShort},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:p,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(t,e){1&t&&(i.mc(),i.Vb(0,"div",0),i.dc("click",function(){return e.toggleIsShort()}),i.Kc(1,s,2,1,"mat-hint",1),i.Kc(2,l,2,1,"mat-error",1),i.Ub(),i.Kc(3,d,1,0,"ng-template",null,2,i.Lc)),2&t&&(i.nc("ngClass",i.rc(4,u,e.isShort))("ngSwitch",e.isError),i.Db(1),i.nc("ngSwitchCase",!1),i.Db(1),i.nc("ngSwitchCase",!0))},directives:[a.l,a.p,a.q,r.f,a.s,r.b],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),t}()},Sbq5:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("mrSG"),a=n("X158"),r=n("bazF"),o=n("fXoL"),s=n("1O52"),c=function(){function t(t){this.context=t}return t.prototype.openCodeFile=function(t,e){void 0===e&&(e=!1);var n=a.a.Develop,o={items:[{Path:t}]},s=Object(i.a)(Object(i.a)(Object(i.a)({},this.buildHashParam(r.f,n)),this.buildHashParam(r.i,e.toString())),this.buildHashParam(r.j,JSON.stringify(o.items))),c=this.buildFullUrl(s);window.open(c,"_blank")},t.prototype.openQueryDesigner=function(t){var e=a.a.PipelineDesigner,n={items:[{EntityId:t}]},o=Object(i.a)(Object(i.a)(Object(i.a)({},this.buildHashParam(r.f,e)),this.buildHashParam(r.m,t.toString())),this.buildHashParam(r.j,JSON.stringify(n.items))),s=this.buildFullUrl(o);window.open(s,"_blank")},t.prototype.openAppAdministration=function(t,e,n,o){var s=n&&o?{tab:n,scope:o}:null,c=Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},this.buildHashParam(r.r,t.toString())),this.buildHashParam(r.b,e.toString())),this.buildHashParam(r.f,a.a.App)),s?this.buildHashParam(r.g,JSON.stringify(s)):""),l=this.buildFullUrl(c);window.open(l,"_blank")},t.prototype.buildSharedHashParams=function(){return Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},this.buildHashParam(r.r,this.context.zoneId.toString())),this.buildHashParam(r.b,this.context.appId.toString())),this.buildHashParam(r.p,this.context.tabId.toString())),this.buildHashParam(r.k,this.context.moduleId.toString())),this.buildHashParam(r.c,this.context.contentBlockId.toString())),this.buildHashParam(r.l)),this.buildHashParam(r.o)),this.buildHashParam(r.a)),sessionStorage.getItem(r.e)?this.buildHashParam(r.e):{})},t.prototype.buildHashParam=function(t,e){var n,i=t.replace(r.s,""),a=null!=e?e:sessionStorage.getItem(t),o=encodeURIComponent(a);return(n={})[i]=o,n},t.prototype.buildFullUrl=function(t){var e=sessionStorage.getItem(r.q),n=new URL(e),a=n.origin+n.pathname+n.search,o=Object(i.a)(Object(i.a)({},this.buildSharedHashParams()),t);return a+Object.entries(o).reduce(function(t,e){var n=Object(i.g)(e,2);return t+"&"+n[0]+"="+n[1]},"").replace("&","#")},t.\u0275fac=function(e){return new(e||t)(o.Zb(s.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()},TU8p:function(t,e,n){"use strict";n.d(e,"a",function(){return g}),n.d(e,"b",function(){return f});var i=n("vuIU"),a=n("Ji7U"),r=n("LK+K"),o=n("1OyB"),s=n("FKr1"),c=n("u47x"),l=n("8LU1"),d=n("R1ws"),u=n("fXoL"),p=0,h=function t(){Object(o.a)(this,t)},m=Object(s.w)(h),g=function(){var t=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(t,i,a,r,s){var c;return Object(o.a)(this,n),(c=e.call(this))._ngZone=t,c._elementRef=i,c._ariaDescriber=a,c._renderer=r,c._animationMode=s,c._hasContent=!1,c._color="primary",c._overlap=!0,c.position="above after",c.size="medium",c._id=p++,c}return Object(i.a)(n,[{key:"color",get:function(){return this._color},set:function(t){this._setColor(t),this._color=t}},{key:"overlap",get:function(){return this._overlap},set:function(t){this._overlap=Object(l.b)(t)}},{key:"description",get:function(){return this._description},set:function(t){if(t!==this._description){var e=this._badgeElement;this._updateHostAriaDescription(t,this._description),this._description=t,e&&(t?e.setAttribute("aria-label",t):e.removeAttribute("aria-label"))}}},{key:"hidden",get:function(){return this._hidden},set:function(t){this._hidden=Object(l.b)(t)}},{key:"isAbove",value:function(){return-1===this.position.indexOf("below")}},{key:"isAfter",value:function(){return-1===this.position.indexOf("before")}},{key:"ngOnChanges",value:function(t){var e=t.content;if(e){var n=e.currentValue;this._hasContent=null!=n&&"".concat(n).trim().length>0,this._updateTextContent()}}},{key:"ngOnDestroy",value:function(){var t=this._badgeElement;t&&(this.description&&this._ariaDescriber.removeDescription(t,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(t))}},{key:"getBadgeElement",value:function(){return this._badgeElement}},{key:"_updateTextContent",value:function(){return this._badgeElement?this._badgeElement.textContent=this._stringifyContent():this._badgeElement=this._createBadgeElement(),this._badgeElement}},{key:"_createBadgeElement",value:function(){var t=this._renderer.createElement("span"),e="mat-badge-active",n="mat-badge-content";return this._clearExistingBadges(n),t.setAttribute("id","mat-badge-content-".concat(this._id)),t.classList.add(n),t.textContent=this._stringifyContent(),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this.description&&t.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(function(){requestAnimationFrame(function(){t.classList.add(e)})}):t.classList.add(e),t}},{key:"_updateHostAriaDescription",value:function(t,e){var n=this._updateTextContent();e&&this._ariaDescriber.removeDescription(n,e),t&&this._ariaDescriber.describe(n,t)}},{key:"_setColor",value:function(t){if(t!==this._color){var e=this._elementRef.nativeElement.classList;this._color&&e.remove("mat-badge-".concat(this._color)),t&&e.add("mat-badge-".concat(t))}}},{key:"_clearExistingBadges",value:function(t){for(var e=this._elementRef.nativeElement,n=e.children.length;n--;){var i=e.children[n];i.classList.contains(t)&&e.removeChild(i)}}},{key:"_stringifyContent",value:function(){var t=this.content;return null==t?"":"".concat(t)}}]),n}(m);return t.\u0275fac=function(e){return new(e||t)(u.Pb(u.A),u.Pb(u.l),u.Pb(c.c),u.Pb(u.F),u.Pb(d.a,8))},t.\u0275dir=u.Kb({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,e){2&t&&u.Hb("mat-badge-overlap",e.overlap)("mat-badge-above",e.isAbove())("mat-badge-below",!e.isAbove())("mat-badge-before",!e.isAfter())("mat-badge-after",e.isAfter())("mat-badge-small","small"===e.size)("mat-badge-medium","medium"===e.size)("mat-badge-large","large"===e.size)("mat-badge-hidden",e.hidden||!e._hasContent)("mat-badge-disabled",e.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[u.Ab,u.Bb]}),t}(),f=function(){var t=function t(){Object(o.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Nb({type:t}),t.\u0275inj=u.Mb({imports:[[c.a,s.h],s.h]}),t}()},VNq2:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("5t3I"),a=n("uwFg"),r=n("fXoL"),o=n("1O52"),s=n("GJBw"),c=function(){function t(t,e){this.context=t,this.dnnContext=e}return t.prototype.exportContent=function(t,e){var n=e?"&selectedids="+e.join():"",a=this.dnnContext.$2sxc.http.apiUrl(i.t+"Download")+"?appId="+this.context.appId+"&language="+t.language+"&defaultLanguage="+t.defaultLanguage+"&contentType="+t.contentTypeStaticName+"&recordExport="+t.recordExport+"&resourcesReferences="+t.resourcesReferences+"&languageReferences="+t.languageReferences+n;window.open(a,"_blank","")},t.prototype.exportJson=function(t){var e=this.dnnContext.$2sxc.http.apiUrl(a.b+"Json")+"?appId="+this.context.appId+"&name="+t;window.open(e,"_blank","")},t.prototype.exportEntity=function(t,e,n){var a=this.dnnContext.$2sxc.http.apiUrl(i.t+"Json")+"?appId="+this.context.appId+"&id="+t+"&prefix="+e+"&withMetadata="+n;window.open(a,"_blank","")},t.\u0275fac=function(e){return new(e||t)(r.Zb(o.a),r.Zb(s.a))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac}),t}()},WRrS:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("Cfvw"),a=n("5+tZ"),r=n("5t3I"),o=n("spPA"),s=n("LNjK"),c=n("fXoL"),l=n("tk/3"),d=n("1O52"),u=n("GJBw"),p=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.getAll=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(r.s),{params:{appId:this.context.appId.toString(),contentType:t}})},t.prototype.getColumns=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(o.b),{params:{appId:this.context.appId.toString(),staticName:t}})},t.prototype.importItem=function(t){var e=this;return Object(i.a)(Object(s.a)(t)).pipe(Object(a.a)(function(t){return e.http.post(e.dnnContext.$2sxc.http.apiUrl(r.t+"upload"),{AppId:e.context.appId.toString(),ContentBase64:t})}))},t.\u0275fac=function(e){return new(e||t)(c.Zb(l.b),c.Zb(d.a),c.Zb(u.a))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac}),t}()},Wp6s:function(t,e,n){"use strict";n.d(e,"a",function(){return m}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return g}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return p});var i=n("1OyB"),a=n("R1ws"),r=n("FKr1"),o=n("fXoL"),s=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],l=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],d=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],u=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Kb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t}(),p=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Kb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t}(),h=function(){var t=function t(){Object(i.a)(this,t),this.align="start"};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Kb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&o.Hb("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t}(),m=function(){var t=function t(e){Object(i.a)(this,t),this._animationMode=e};return t.\u0275fac=function(e){return new(e||t)(o.Pb(a.a,8))},t.\u0275cmp=o.Jb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&o.Hb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,e){1&t&&(o.mc(s),o.lc(0),o.lc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t}(),g=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:d,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(o.mc(l),o.lc(0),o.Vb(1,"div",0),o.lc(2,1),o.Ub(),o.lc(3,2))},encapsulation:2,changeDetection:0}),t}(),f=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[r.h],r.h]}),t}()},XCsS:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),a=n("XWDa"),r=function(){function t(t){this.globalConfigService=t}return t.prototype.onClick=function(t){(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&t.shiftKey&&t.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())},t.\u0275fac=function(e){return new(e||t)(i.Pb(a.g))},t.\u0275dir=i.Kb({type:t,selectors:[["","appToggleDebug",""]],hostBindings:function(t,e){1&t&&i.dc("click",function(t){return e.onClick(t)})}}),t}()},bv8H:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={String:"String",Entity:"Entity",Boolean:"Boolean",Number:"Number",Custom:"Custom",DateTime:"DateTime",Hyperlink:"Hyperlink",Empty:"Empty"}},hcId:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),a=n("jhN1"),r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return this.sanitizer.bypassSecurityTrustHtml(t)},t.\u0275fac=function(e){return new(e||t)(i.Pb(a.b))},t.\u0275pipe=i.Ob({name:"safeHtml",type:t,pure:!0}),t}()},jSe7:function(t,e,n){"use strict";function i(){return/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i}n.d(e,"a",function(){return i})},n63V:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL"),a=n("tk/3"),r=n("1O52"),o=n("GJBw"),s=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.getItems=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("cms/contentgroup/replace"),{params:{appId:this.context.appId.toString(),guid:t.guid,part:t.part,index:t.index.toString()}})},t.prototype.saveItem=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("cms/contentgroup/replace"),{},{params:{guid:t.guid,part:t.part,index:t.index.toString(),entityId:t.id.toString(),add:""+t.add}})},t.prototype.getList=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("cms/contentgroup/itemlist"),{params:{appId:this.context.appId.toString(),guid:t.guid,part:t.part}})},t.prototype.saveList=function(t,e){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("cms/contentgroup/itemlist"),e,{params:{appId:this.context.appId.toString(),guid:t.guid,part:t.part}})},t.prototype.getHeader=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("cms/contentgroup/header"),{params:{appId:this.context.appId.toString(),guid:t.guid}})},t.\u0275fac=function(e){return new(e||t)(i.Zb(a.b),i.Zb(r.a),i.Zb(o.a))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac}),t}()},pXf0:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("mrSG"),a=n("fXoL"),r=n("quSY"),o=n("xgIS"),s=n("dNgK"),c=function(){function t(t,e,n){this.zone=e,this.snackBar=n,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new a.n,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.subscription=new r.a,this.element=t.nativeElement}return t.prototype.ngOnInit=function(){var t=this;this.markStyleClass="eav-droparea-"+this.markStyle,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(function(){t.subscription.add(Object(o.a)(t.element,"dragover").subscribe(function(e){e.preventDefault(),e.stopPropagation(),t.clearTimeouts(),t.element.classList.add(t.dragClass)})),t.subscription.add(Object(o.a)(t.element,"dragleave").subscribe(function(e){e.preventDefault(),e.stopPropagation(),t.timeouts.push(window.setTimeout(function(){t.element.classList.remove(t.dragClass)},50))}))})},t.prototype.ngOnDestroy=function(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),this.subscription.unsubscribe()},t.prototype.onDrop=function(t){t.preventDefault(),t.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);var e=Array.from(t.dataTransfer.files);(e=this.filterTypes(e,this.allowedFileTypes)).length>0&&this.filesDropped.emit(e)},t.prototype.clearTimeouts=function(){var t,e;try{for(var n=Object(i.i)(this.timeouts),a=n.next();!a.done;a=n.next())clearTimeout(a.value)}catch(r){t={error:r}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.timeouts=[]},t.prototype.filterTypes=function(t,e){if(""===e)return t;var n=e.split(",").map(function(t){return t.toLocaleLowerCase()}),i=t.filter(function(t){var e=t.name.lastIndexOf(".");if(e<=0)return!1;var i=t.name.substring(e+1).toLocaleLowerCase();return n.includes(i)});if(t.length!==i.length){var a=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(i.length?"Some files were filtered out. This drop location only accepts file types: "+a:"This drop location only accepts file types: "+a,null,{duration:5e3})}return i},t.\u0275fac=function(e){return new(e||t)(a.Pb(a.l),a.Pb(a.A),a.Pb(s.b))},t.\u0275dir=a.Kb({type:t,selectors:[["","appDragAndDrop",""]],hostBindings:function(t,e){1&t&&a.dc("drop",function(t){return e.onDrop(t)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"}}),t}()},spPA:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"a",function(){return u});var i=n("mrSG"),a=n("lJxs"),r=n("uwFg"),o=n("fXoL"),s=n("tk/3"),c=n("1O52"),l=n("GJBw"),d="admin/field/all",u=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.apiUrl=function(t){return this.dnnContext.$2sxc.http.apiUrl(t)},t.prototype.typeListRetrieve=function(){return this.http.get(this.apiUrl("admin/field/DataTypes"),{params:{appid:this.context.appId.toString()}})},t.prototype.getInputTypesList=function(){return this.http.get(this.apiUrl("admin/field/InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe(Object(a.a)(function(t){return t.map(function(t){return{dataType:t.Type.substring(0,t.Type.indexOf("-")),inputType:t.Type,label:t.Label,description:t.Description}})}))},t.prototype.getReservedNames=function(){return this.http.get(this.apiUrl("admin/field/ReservedNames"))},t.prototype.getFields=function(t){return this.http.get(this.apiUrl(d),{params:{appid:this.context.appId.toString(),staticName:t.StaticName}}).pipe(Object(a.a)(function(t){var e,n;if(t)try{for(var a=Object(i.i)(t),r=a.next();!r.done;r=a.next()){var o=r.value;if(o.Metadata){var s=o.Metadata,c=s.All,l=s[o.Type],d=s[o.InputType];s.merged=Object(i.a)(Object(i.a)(Object(i.a)({},c),l),d)}}}catch(u){e={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return t}))},t.prototype.reOrder=function(t,e){return this.http.post(this.apiUrl("admin/field/Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),order:JSON.stringify(t)}})},t.prototype.setTitle=function(t,e){return this.http.post(this.apiUrl(r.b+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),attributeId:t.Id.toString()}})},t.prototype.rename=function(t,e,n){return this.http.post(this.apiUrl("admin/field/Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.toString(),attributeId:t.toString(),newName:n}})},t.prototype.delete=function(t,e){if(t.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl("admin/field/Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),attributeId:t.Id.toString()}})},t.prototype.add=function(t,e){return this.http.post(this.apiUrl("admin/field/Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:e.toString(),Id:t.Id.toString(),Type:t.Type,InputType:t.InputType,StaticName:t.StaticName,IsTitle:t.IsTitle.toString(),Index:t.SortOrder.toString()}})},t.prototype.updateInputType=function(t,e,n){return this.http.post(this.apiUrl("admin/field/InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:t.toString(),field:e,inputType:n}})},t.\u0275fac=function(e){return new(e||t)(o.Zb(s.b),o.Zb(c.a),o.Zb(l.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()},umSf:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return c});var i=n("tk/3"),a=n("sYmb");function r(t){return{loader:{provide:a.a,useFactory:t,deps:[i.b]},defaultLanguage:"en",isolate:!0}}var o=n("LRne"),s=n("JIr8"),c=function(){function t(t,e,n){this.http=t,this.prefix=e,this.suffix=n}return t.prototype.getTranslation=function(t){var e=this;return this.http.get(""+this.prefix+t+this.suffix).pipe(Object(s.a)(function(n){return console.warn("Translation: Failed to get language '"+t+"' from "+e.prefix,n),Object(o.a)({})}))},t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/12.03.00/ng-edit/common.2f546888766009b0bcda.js.map