(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_ng-dialogs_src_app_item-history_item-history_module_ts"],{8150:function(t,e,i){"use strict";i.d(e,{NW:function(){return V},TU:function(){return X}});var n=i(1998),s=i(8784),o=i(2250),a=i(1112),r=i(1116),l=i(1785),u=i(7064),h=i(4369),p=i(3841),c=i(4568),d=i(5333),g=i(7388),f=i(83),_=i(9861),v=i(9235),m=i(4546),y=i(3169),b=i(2151),x=i(5959),P=i(5416),I=i(611),k=i(9713),T=i(4720),w={tooltipState:(0,k.X$)("state",[(0,k.SB)("initial, void, hidden",(0,k.oB)({opacity:0,transform:"scale(0)"})),(0,k.SB)("visible",(0,k.oB)({transform:"scale(1)"})),(0,k.eR)("* => visible",(0,k.jt)("200ms cubic-bezier(0, 0, 0.2, 1)",(0,k.F4)([(0,k.oB)({opacity:0,transform:"scale(0)",offset:0}),(0,k.oB)({opacity:.5,transform:"scale(0.99)",offset:.5}),(0,k.oB)({opacity:1,transform:"scale(1)",offset:1})]))),(0,k.eR)("* => hidden",(0,k.jt)("100ms cubic-bezier(0, 0, 0.2, 1)",(0,k.oB)({opacity:0})))])},S="tooltip-panel",z=(0,y.i$)({passive:!0}),O=new l.OlP("mat-tooltip-scroll-strategy"),Z={provide:O,deps:[d.aV],useFactory:function(t){return function(){return t.scrollStrategies.reposition({scrollThrottle:20})}}},D=new l.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),C=function(){var t=function(){function t(e,i,n,s,o,r,l,u,h,p,c,d){var g=this;(0,a.Z)(this,t),this._overlay=e,this._elementRef=i,this._scrollDispatcher=n,this._viewContainerRef=s,this._ngZone=o,this._platform=r,this._ariaDescriber=l,this._focusMonitor=u,this._dir=p,this._defaultOptions=c,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new x.xQ,this._handleKeydown=function(t){g._isTooltipVisible()&&t.keyCode===v.hY&&!(0,v.Vb)(t)&&(t.preventDefault(),t.stopPropagation(),g._ngZone.run(function(){return g.hide(0)}))},this._scrollStrategy=h,this._document=d,c&&(c.position&&(this.position=c.position),c.touchGestures&&(this.touchGestures=c.touchGestures)),p.change.pipe((0,P.R)(this._destroyed)).subscribe(function(){g._overlayRef&&g._updatePosition(g._overlayRef)}),o.runOutsideAngular(function(){i.nativeElement.addEventListener("keydown",g._handleKeydown)})}return(0,n.Z)(t,[{key:"position",get:function(){return this._position},set:function(t){var e;t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),null===(e=this._tooltipInstance)||void 0===e||e.show(0),this._overlayRef.updatePosition()))}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=(0,_.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}},{key:"message",get:function(){return this._message},set:function(t){var e=this;this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(function(){Promise.resolve().then(function(){e._ariaDescriber.describe(e._elementRef.nativeElement,e.message,"tooltip")})}))}},{key:"tooltipClass",get:function(){return this._tooltipClass},set:function(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}},{key:"ngAfterViewInit",value:function(){var t=this;this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,P.R)(this._destroyed)).subscribe(function(e){e?"keyboard"===e&&t._ngZone.run(function(){return t.show()}):t._ngZone.run(function(){return t.hide(0)})})}},{key:"ngOnDestroy",value:function(){var t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),t.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach(function(e){var i=(0,c.Z)(e,2);t.removeEventListener(i[0],i[1],z)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}},{key:"show",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.showDelay;if(!this.disabled&&this.message&&(!this._isTooltipVisible()||this._tooltipInstance._showTimeoutId||this._tooltipInstance._hideTimeoutId)){var i=this._createOverlay();this._detach(),this._portal=this._portal||new b.C5(this._tooltipComponent,this._viewContainerRef),this._tooltipInstance=i.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe((0,P.R)(this._destroyed)).subscribe(function(){return t._detach()}),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(e)}}},{key:"hide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.hideDelay;this._tooltipInstance&&this._tooltipInstance.hide(t)}},{key:"toggle",value:function(){this._isTooltipVisible()?this.hide():this.show()}},{key:"_isTooltipVisible",value:function(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}},{key:"_createOverlay",value:function(){var t=this;if(this._overlayRef)return this._overlayRef;var e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".".concat(this._cssClassPrefix,"-tooltip")).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return i.positionChanges.pipe((0,P.R)(this._destroyed)).subscribe(function(e){t._updateCurrentPositionClass(e.connectionPair),t._tooltipInstance&&e.scrollableViewProperties.isOverlayClipped&&t._tooltipInstance.isVisible()&&t._ngZone.run(function(){return t.hide(0)})}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:"".concat(this._cssClassPrefix,"-").concat(S),scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,P.R)(this._destroyed)).subscribe(function(){return t._detach()}),this._overlayRef}},{key:"_detach",value:function(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}},{key:"_updatePosition",value:function(t){var e=t.getConfig().positionStrategy,i=this._getOrigin(),n=this._getOverlayPosition();e.withPositions([this._addOffset(Object.assign(Object.assign({},i.main),n.main)),this._addOffset(Object.assign(Object.assign({},i.fallback),n.fallback))])}},{key:"_addOffset",value:function(t){return t}},{key:"_getOrigin",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;"above"==i||"below"==i?t={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&e||"right"==i&&!e?t={originX:"start",originY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(t={originX:"end",originY:"center"});var n=this._invertPosition(t.originX,t.originY);return{main:t,fallback:{originX:n.x,originY:n.y}}}},{key:"_getOverlayPosition",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;"above"==i?t={overlayX:"center",overlayY:"bottom"}:"below"==i?t={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&e||"right"==i&&!e?t={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(t={overlayX:"start",overlayY:"center"});var n=this._invertPosition(t.overlayX,t.overlayY);return{main:t,fallback:{overlayX:n.x,overlayY:n.y}}}},{key:"_updateTooltipMessage",value:function(){var t=this;this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,I.q)(1),(0,P.R)(this._destroyed)).subscribe(function(){t._tooltipInstance&&t._overlayRef.updatePosition()}))}},{key:"_setTooltipClass",value:function(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}},{key:"_invertPosition",value:function(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}},{key:"_updateCurrentPositionClass",value:function(t){var e,i=t.overlayY,n=t.originX;if((e="center"===i?this._dir&&"rtl"===this._dir.value?"end"===n?"left":"right":"start"===n?"left":"right":"bottom"===i&&"top"===t.originY?"above":"below")!==this._currentPosition){var s=this._overlayRef;if(s){var o="".concat(this._cssClassPrefix,"-").concat(S,"-");s.removePanelClass(o+this._currentPosition),s.addPanelClass(o+e)}this._currentPosition=e}}},{key:"_setupPointerEnterEventsIfNeeded",value:function(){var t=this;!this._disabled&&this.message&&this._viewInitialized&&!this._passiveListeners.length&&(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",function(){t._setupPointerExitEventsIfNeeded(),t.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",function(){t._setupPointerExitEventsIfNeeded(),clearTimeout(t._touchstartTimeout),t._touchstartTimeout=setTimeout(function(){return t.show()},500)}])),this._addListeners(this._passiveListeners))}},{key:"_setupPointerExitEventsIfNeeded",value:function(){var t,e=this;if(!this._pointerExitEventsInitialized){this._pointerExitEventsInitialized=!0;var i=[];if(this._platformSupportsMouseEvents())i.push(["mouseleave",function(){return e.hide()}],["wheel",function(t){return e._wheelListener(t)}]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();var n=function(){clearTimeout(e._touchstartTimeout),e.hide(e._defaultOptions.touchendHideDelay)};i.push(["touchend",n],["touchcancel",n])}this._addListeners(i),(t=this._passiveListeners).push.apply(t,i)}}},{key:"_addListeners",value:function(t){var e=this;t.forEach(function(t){var i=(0,c.Z)(t,2);e._elementRef.nativeElement.addEventListener(i[0],i[1],z)})}},{key:"_platformSupportsMouseEvents",value:function(){return!this._platform.IOS&&!this._platform.ANDROID}},{key:"_wheelListener",value:function(t){if(this._isTooltipVisible()){var e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e===i||i.contains(e)||this.hide()}}},{key:"_disableNativeGesturesIfNecessary",value:function(){var t=this.touchGestures;if("off"!==t){var e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),"on"!==t&&e.draggable||(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(d.aV),l.Y36(l.SBq),l.Y36(f.mF),l.Y36(l.s_b),l.Y36(l.R0b),l.Y36(y.t4),l.Y36(g.$s),l.Y36(g.tE),l.Y36(void 0),l.Y36(T.Is),l.Y36(void 0),l.Y36(r.K0))},t.\u0275dir=l.lG2({type:t,inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),t}(),L=function(){var t=function(t){(0,s.Z)(i,t);var e=(0,o.Z)(i);function i(t,n,s,o,r,l,u,h,p,c,d,g){var f;return(0,a.Z)(this,i),(f=e.call(this,t,n,s,o,r,l,u,h,p,c,d,g))._tooltipComponent=E,f}return i}(C);return t.\u0275fac=function(e){return new(e||t)(l.Y36(d.aV),l.Y36(l.SBq),l.Y36(f.mF),l.Y36(l.s_b),l.Y36(l.R0b),l.Y36(y.t4),l.Y36(g.$s),l.Y36(g.tE),l.Y36(O),l.Y36(T.Is,8),l.Y36(D,8),l.Y36(r.K0))},t.\u0275dir=l.lG2({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],exportAs:["matTooltip"],features:[l.qOj]}),t}(),Y=function(){var t=function(){function t(e){(0,a.Z)(this,t),this._changeDetectorRef=e,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new x.xQ}return(0,n.Z)(t,[{key:"show",value:function(t){var e=this;clearTimeout(this._hideTimeoutId),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout(function(){e._visibility="visible",e._showTimeoutId=void 0,e._onShow(),e._markForCheck()},t)}},{key:"hide",value:function(t){var e=this;clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(function(){e._visibility="hidden",e._hideTimeoutId=void 0,e._markForCheck()},t)}},{key:"afterHidden",value:function(){return this._onHide}},{key:"isVisible",value:function(){return"visible"===this._visibility}},{key:"ngOnDestroy",value:function(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._onHide.complete()}},{key:"_animationStart",value:function(){this._closeOnInteraction=!1}},{key:"_animationDone",value:function(t){var e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}},{key:"_handleBodyInteraction",value:function(){this._closeOnInteraction&&this.hide(0)}},{key:"_markForCheck",value:function(){this._changeDetectorRef.markForCheck()}},{key:"_onShow",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(l.sBO))},t.\u0275dir=l.lG2({type:t}),t}(),E=function(){var t=function(t){(0,s.Z)(i,t);var e=(0,o.Z)(i);function i(t,n){var s;return(0,a.Z)(this,i),(s=e.call(this,t))._breakpointObserver=n,s._isHandset=s._breakpointObserver.observe(m.u3.Handset),s}return i}(Y);return t.\u0275fac=function(e){return new(e||t)(l.Y36(l.sBO),l.Y36(m.Yg))},t.\u0275cmp=l.Xpm({type:t,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&l.NdJ("click",function(){return e._handleBodyInteraction()},!1,l.pYS)("auxclick",function(){return e._handleBodyInteraction()},!1,l.pYS),2&t&&l.Udp("zoom","visible"===e._visibility?1:null)},features:[l.qOj],decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){var i;1&t&&(l.TgZ(0,"div",0),l.NdJ("@state.start",function(){return e._animationStart()})("@state.done",function(t){return e._animationDone(t)}),l.ALo(1,"async"),l._uU(2),l.qZA()),2&t&&(l.ekj("mat-tooltip-handset",null==(i=l.lcZ(1,5,e._isHandset))?null:i.matches),l.Q6J("ngClass",e.tooltipClass)("@state",e._visibility),l.xp6(2),l.Oqu(e.message))},directives:[r.mk],pipes:[r.Ov],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[w.tooltipState]},changeDetection:0}),t}(),R=function(){var t=function t(){(0,a.Z)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[Z],imports:[[g.rt,r.ez,d.U8,u.BQ],u.BQ,f.ZD]}),t}(),B=i(3070);function A(t,e){if(1&t&&(l.TgZ(0,"mat-option",19),l._uU(1),l.qZA()),2&t){var i=e.$implicit;l.Q6J("value",i),l.xp6(1),l.hij(" ",i," ")}}function F(t,e){if(1&t){var i=l.EpF();l.TgZ(0,"mat-form-field",16),l.TgZ(1,"mat-select",17),l.NdJ("selectionChange",function(t){return l.CHM(i),l.oxw(2)._changePageSize(t.value)}),l.YNc(2,A,2,2,"mat-option",18),l.qZA(),l.qZA()}if(2&t){var n=l.oxw(2);l.Q6J("appearance",n._formFieldAppearance)("color",n.color),l.xp6(1),l.Q6J("value",n.pageSize)("disabled",n.disabled)("aria-label",n._intl.itemsPerPageLabel),l.xp6(1),l.Q6J("ngForOf",n._displayedPageSizeOptions)}}function N(t,e){if(1&t&&(l.TgZ(0,"div",20),l._uU(1),l.qZA()),2&t){var i=l.oxw(2);l.xp6(1),l.Oqu(i.pageSize)}}function M(t,e){if(1&t&&(l.TgZ(0,"div",12),l.TgZ(1,"div",13),l._uU(2),l.qZA(),l.YNc(3,F,3,6,"mat-form-field",14),l.YNc(4,N,2,1,"div",15),l.qZA()),2&t){var i=l.oxw();l.xp6(2),l.hij(" ",i._intl.itemsPerPageLabel," "),l.xp6(1),l.Q6J("ngIf",i._displayedPageSizeOptions.length>1),l.xp6(1),l.Q6J("ngIf",i._displayedPageSizeOptions.length<=1)}}function q(t,e){if(1&t){var i=l.EpF();l.TgZ(0,"button",21),l.NdJ("click",function(){return l.CHM(i),l.oxw().firstPage()}),l.O4$(),l.TgZ(1,"svg",7),l._UZ(2,"path",22),l.qZA(),l.qZA()}if(2&t){var n=l.oxw();l.Q6J("matTooltip",n._intl.firstPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("matTooltipPosition","above")("disabled",n._previousButtonsDisabled()),l.uIk("aria-label",n._intl.firstPageLabel)}}function J(t,e){if(1&t){var i=l.EpF();l.O4$(),l.kcU(),l.TgZ(0,"button",23),l.NdJ("click",function(){return l.CHM(i),l.oxw().lastPage()}),l.O4$(),l.TgZ(1,"svg",7),l._UZ(2,"path",24),l.qZA(),l.qZA()}if(2&t){var n=l.oxw();l.Q6J("matTooltip",n._intl.lastPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("matTooltipPosition","above")("disabled",n._nextButtonsDisabled()),l.uIk("aria-label",n._intl.lastPageLabel)}}var G=function(){var t=function t(){(0,a.Z)(this,t),this.changes=new x.xQ,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=function(t,e,i){if(0==i||0==e)return"0 of ".concat(i);var n=t*e,s=n<(i=Math.max(i,0))?Math.min(n+e,i):n+e;return"".concat(n+1," \u2013 ").concat(s," of ").concat(i)}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t}(),U={provide:G,deps:[[new l.FiY,new l.tp0,G]],useFactory:function(t){return t||new G}},j=new l.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),H=(0,u.Id)((0,u.dB)(function(){return function t(){(0,a.Z)(this,t)}}())),Q=function(){var t=function(t){(0,s.Z)(i,t);var e=(0,o.Z)(i);function i(t,n,s){var o;if((0,a.Z)(this,i),(o=e.call(this))._intl=t,o._changeDetectorRef=n,o._pageIndex=0,o._length=0,o._pageSizeOptions=[],o._hidePageSize=!1,o._showFirstLastButtons=!1,o.page=new l.vpe,o._intlChanges=t.changes.subscribe(function(){return o._changeDetectorRef.markForCheck()}),s){var r=s.pageSize,u=s.pageSizeOptions,h=s.hidePageSize,p=s.showFirstLastButtons;null!=r&&(o._pageSize=r),null!=u&&(o._pageSizeOptions=u),null!=h&&(o._hidePageSize=h),null!=p&&(o._showFirstLastButtons=p)}return o}return(0,n.Z)(i,[{key:"pageIndex",get:function(){return this._pageIndex},set:function(t){this._pageIndex=Math.max((0,_.su)(t),0),this._changeDetectorRef.markForCheck()}},{key:"length",get:function(){return this._length},set:function(t){this._length=(0,_.su)(t),this._changeDetectorRef.markForCheck()}},{key:"pageSize",get:function(){return this._pageSize},set:function(t){this._pageSize=Math.max((0,_.su)(t),0),this._updateDisplayedPageSizeOptions()}},{key:"pageSizeOptions",get:function(){return this._pageSizeOptions},set:function(t){this._pageSizeOptions=(t||[]).map(function(t){return(0,_.su)(t)}),this._updateDisplayedPageSizeOptions()}},{key:"hidePageSize",get:function(){return this._hidePageSize},set:function(t){this._hidePageSize=(0,_.Ig)(t)}},{key:"showFirstLastButtons",get:function(){return this._showFirstLastButtons},set:function(t){this._showFirstLastButtons=(0,_.Ig)(t)}},{key:"ngOnInit",value:function(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}},{key:"ngOnDestroy",value:function(){this._intlChanges.unsubscribe()}},{key:"nextPage",value:function(){if(this.hasNextPage()){var t=this.pageIndex;this.pageIndex++,this._emitPageEvent(t)}}},{key:"previousPage",value:function(){if(this.hasPreviousPage()){var t=this.pageIndex;this.pageIndex--,this._emitPageEvent(t)}}},{key:"firstPage",value:function(){if(this.hasPreviousPage()){var t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}}},{key:"lastPage",value:function(){if(this.hasNextPage()){var t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}}},{key:"hasPreviousPage",value:function(){return this.pageIndex>=1&&0!=this.pageSize}},{key:"hasNextPage",value:function(){var t=this.getNumberOfPages()-1;return this.pageIndex<t&&0!=this.pageSize}},{key:"getNumberOfPages",value:function(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}},{key:"_changePageSize",value:function(t){var e=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/t)||0,this.pageSize=t,this._emitPageEvent(e)}},{key:"_nextButtonsDisabled",value:function(){return this.disabled||!this.hasNextPage()}},{key:"_previousButtonsDisabled",value:function(){return this.disabled||!this.hasPreviousPage()}},{key:"_updateDisplayedPageSizeOptions",value:function(){this._initialized&&(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort(function(t,e){return t-e}),this._changeDetectorRef.markForCheck())}},{key:"_emitPageEvent",value:function(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}]),i}(H);return t.\u0275fac=function(e){return new(e||t)(l.Y36(G),l.Y36(l.sBO),l.Y36(void 0))},t.\u0275dir=l.lG2({type:t,inputs:{pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",color:"color"},outputs:{page:"page"},features:[l.qOj]}),t}(),V=function(){var t=function(t){(0,s.Z)(i,t);var e=(0,o.Z)(i);function i(t,n,s){var o;return(0,a.Z)(this,i),o=e.call(this,t,n,s),s&&null!=s.formFieldAppearance&&(o._formFieldAppearance=s.formFieldAppearance),o}return i}(Q);return t.\u0275fac=function(e){return new(e||t)(l.Y36(G),l.Y36(l.sBO),l.Y36(j,8))},t.\u0275cmp=l.Xpm({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[l.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.YNc(2,M,5,3,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l._uU(5),l.qZA(),l.YNc(6,q,3,5,"button",5),l.TgZ(7,"button",6),l.NdJ("click",function(){return e.previousPage()}),l.O4$(),l.TgZ(8,"svg",7),l._UZ(9,"path",8),l.qZA(),l.qZA(),l.kcU(),l.TgZ(10,"button",9),l.NdJ("click",function(){return e.nextPage()}),l.O4$(),l.TgZ(11,"svg",7),l._UZ(12,"path",10),l.qZA(),l.qZA(),l.YNc(13,J,3,5,"button",11),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(2),l.Q6J("ngIf",!e.hidePageSize),l.xp6(3),l.hij(" ",e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length)," "),l.xp6(1),l.Q6J("ngIf",e.showFirstLastButtons),l.xp6(1),l.Q6J("matTooltip",e._intl.previousPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),l.uIk("aria-label",e._intl.previousPageLabel),l.xp6(3),l.Q6J("matTooltip",e._intl.nextPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),l.uIk("aria-label",e._intl.nextPageLabel),l.xp6(3),l.Q6J("ngIf",e.showFirstLastButtons))},directives:[r.O5,h.lW,L,B.KE,p.gD,r.sg,u.ey],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"],encapsulation:2,changeDetection:0}),t}(),X=function(){var t=function t(){(0,a.Z)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[U],imports:[[r.ez,h.ot,p.LD,R,u.BQ]]}),t}()},1690:function(t,e,i){"use strict";i.r(e),i.d(e,{ItemHistoryModule:function(){return I}});var n=i(1116),s=i(4369),o=i(2935),a=i(6278),r=i(6489),l=i(3070),u=i(7307),h=i(8150),p=i(3841),c=i(3589),d=i(3582),g=i(2677),f=i(1282),_=i(9350),v=i(4762),m={name:"ITEM_HISTORY_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent:function(){return(0,v.mG)(this,void 0,void 0,function(){return(0,v.Jh)(this,function(t){switch(t.label){case 0:return[4,Promise.all([i.e("default-projects_ng-dialogs_src_app_shared_directives_tippy_directive_ts"),i.e("projects_ng-dialogs_src_app_item-history_item-history_component_ts")]).then(i.bind(i,6152))];case 1:return[2,t.sent().ItemHistoryComponent]}})})}},y=i(1785),b=[{path:"",component:_.r,data:{dialog:m,title:"Item History"}}],x=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({imports:[[f.Bz.forChild(b)],f.Bz]}),t}(),P=i(4931),I=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({providers:[d._,P.Z],imports:[[n.ez,x,g.q,o.Is,s.ot,u.Ps,r.To,c.ZX,h.TU,l.lN,p.LD,a.t]]}),t}()},4931:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n=i(1785),s=i(2693),o=i(3582),a=i(2837),r=function(){function t(t,e,i){this.http=t,this.context=e,this.dnnContext=i}return t.prototype.fetchVersions=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("cms/history/get"),{entityId:t},{params:{appId:this.context.appId.toString()}})},t.prototype.restore=function(t,e){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("cms/history/restore"),{entityId:t},{params:{appId:this.context.appId.toString(),changeId:e.toString()}})},t.\u0275fac=function(e){return new(e||t)(n.LFG(s.eN),n.LFG(o._),n.LFG(a._y))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.00.00/ng-edit/default-projects_ng-dialogs_src_app_item-history_item-history_module_ts.d0f2be7983e0a344a03f.js.map