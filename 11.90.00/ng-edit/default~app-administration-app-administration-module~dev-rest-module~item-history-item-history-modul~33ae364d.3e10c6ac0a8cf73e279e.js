(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3Uyd":function(e,n,t){"use strict";t.d(n,"a",(function(){return Y})),t.d(n,"b",(function(){return Z})),t.d(n,"c",(function(){return B})),t.d(n,"d",(function(){return Q})),t.d(n,"e",(function(){return L})),t.d(n,"f",(function(){return G}));var i=t("MMYH"),a=t("PRnZ"),o=t("sRHE"),s=t("8K1b"),r=t("AqVP"),d=t("9fIP"),c=t("EM62"),l=t("5XID"),p=t("ZTXN"),u=t("bwdy"),h=t("cqs0"),b=0,g=new c.r("CdkAccordion"),f=function(){var e=function(){function e(){Object(d.a)(this,e),this._stateChanges=new p.a,this._openCloseAllActions=new p.a,this.id="cdk-accordion-".concat(b++),this._multi=!1}return Object(i.a)(e,[{key:"openAll",value:function(){this._openCloseAll(!0)}},{key:"closeAll",value:function(){this._openCloseAll(!1)}},{key:"ngOnChanges",value:function(e){this._stateChanges.next(e)}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"_openCloseAll",value:function(e){this.multi&&this._openCloseAllActions.next(e)}},{key:"multi",get:function(){return this._multi},set:function(e){this._multi=Object(l.b)(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=c.Hb({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[c.zb([{provide:g,useExisting:e}]),c.yb]}),e}(),m=0,x=function(){var e=function(){function e(n,t,i){var a=this;Object(d.a)(this,e),this.accordion=n,this._changeDetectorRef=t,this._expansionDispatcher=i,this._openCloseAllSubscription=u.a.EMPTY,this.closed=new c.n,this.opened=new c.n,this.destroyed=new c.n,this.expandedChange=new c.n,this.id="cdk-accordion-child-".concat(m++),this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=i.listen((function(e,n){a.accordion&&!a.accordion.multi&&a.accordion.id===n&&a.id!==e&&(a.expanded=!1)})),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return Object(i.a)(e,[{key:"ngOnDestroy",value:function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}},{key:"toggle",value:function(){this.disabled||(this.expanded=!this.expanded)}},{key:"close",value:function(){this.disabled||(this.expanded=!1)}},{key:"open",value:function(){this.disabled||(this.expanded=!0)}},{key:"_subscribeToOpenCloseAllActions",value:function(){var e=this;return this.accordion._openCloseAllActions.subscribe((function(n){e.disabled||(e.expanded=n)}))}},{key:"expanded",get:function(){return this._expanded},set:function(e){e=Object(l.b)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(l.b)(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(c.Mb(g,12),c.Mb(c.h),c.Mb(h.c))},e.\u0275dir=c.Hb({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[c.zb([{provide:g,useValue:void 0}])]}),e}(),_=function(){var e=function e(){Object(d.a)(this,e)};return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(n){return new(n||e)}}),e}(),y=t("Sv/w"),v=t("2kYt"),k=t("sg/T"),w=t("Ohay"),O=t("jIqt"),j=t("xVbo"),A=t("J+dc"),C=t("fAiE"),M=t("5lCh"),E=t("6Oco"),H=t("g6G6"),T=t("f7+R"),S=["body"];function P(e,n){}var D=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],I=["mat-expansion-panel-header","*","mat-action-row"];function R(e,n){if(1&e&&c.Nb(0,"span",2),2&e){var t=c.ec();c.kc("@indicatorRotate",t._getExpandedState())}}var z=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],V=["mat-panel-title","mat-panel-description","*"],F=new c.r("MAT_ACCORDION"),N="225ms cubic-bezier(0.4,0.0,0.2,1)",J={indicatorRotate:Object(T.n)("indicatorRotate",[Object(T.k)("collapsed, void",Object(T.l)({transform:"rotate(0deg)"})),Object(T.k)("expanded",Object(T.l)({transform:"rotate(180deg)"})),Object(T.m)("expanded <=> collapsed, void => collapsed",Object(T.e)(N))]),bodyExpansion:Object(T.n)("bodyExpansion",[Object(T.k)("collapsed, void",Object(T.l)({height:"0px",visibility:"hidden"})),Object(T.k)("expanded",Object(T.l)({height:"*",visibility:"visible"})),Object(T.m)("expanded <=> collapsed, void => collapsed",Object(T.e)(N))])},q=function(){var e=function e(n){Object(d.a)(this,e),this._template=n};return e.\u0275fac=function(n){return new(n||e)(c.Mb(c.M))},e.\u0275dir=c.Hb({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e}(),K=0,U=new c.r("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),B=function(){var e=function(e){Object(s.a)(t,e);var n=Object(r.a)(t);function t(e,i,a,o,s,r,l){var u;return Object(d.a)(this,t),(u=n.call(this,e,i,a))._viewContainerRef=o,u._animationMode=r,u._hideToggle=!1,u.afterExpand=new c.n,u.afterCollapse=new c.n,u._inputChanges=new p.a,u._headerId="mat-expansion-panel-header-".concat(K++),u._bodyAnimationDone=new p.a,u.accordion=e,u._document=s,u._bodyAnimationDone.pipe(Object(w.a)((function(e,n){return e.fromState===n.fromState&&e.toState===n.toState}))).subscribe((function(e){"void"!==e.fromState&&("expanded"===e.toState?u.afterExpand.emit():"collapsed"===e.toState&&u.afterCollapse.emit())})),l&&(u.hideToggle=l.hideToggle),u}return Object(i.a)(t,[{key:"_hasSpacing",value:function(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}},{key:"_getExpandedState",value:function(){return this.expanded?"expanded":"collapsed"}},{key:"toggle",value:function(){this.expanded=!this.expanded}},{key:"close",value:function(){this.expanded=!1}},{key:"open",value:function(){this.expanded=!0}},{key:"ngAfterContentInit",value:function(){var e=this;this._lazyContent&&this.opened.pipe(Object(O.a)(null),Object(j.a)((function(){return e.expanded&&!e._portal})),Object(A.a)(1)).subscribe((function(){e._portal=new y.h(e._lazyContent._template,e._viewContainerRef)}))}},{key:"ngOnChanges",value:function(e){this._inputChanges.next(e)}},{key:"ngOnDestroy",value:function(){Object(a.a)(Object(o.a)(t.prototype),"ngOnDestroy",this).call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()}},{key:"_containsFocus",value:function(){if(this._body){var e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}},{key:"hideToggle",get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(e){this._hideToggle=Object(l.b)(e)}},{key:"togglePosition",get:function(){return this._togglePosition||this.accordion&&this.accordion.togglePosition},set:function(e){this._togglePosition=e}}]),t}(x);return e.\u0275fac=function(n){return new(n||e)(c.Mb(F,12),c.Mb(c.h),c.Mb(h.c),c.Mb(c.Q),c.Mb(v.e),c.Mb(M.a,8),c.Mb(U,8))},e.\u0275cmp=c.Gb({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,t){var i;1&e&&c.Fb(t,q,!0),2&e&&c.uc(i=c.bc())&&(n._lazyContent=i.first)},viewQuery:function(e,n){var t;1&e&&c.Qc(S,!0),2&e&&c.uc(t=c.bc())&&(n._body=t.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,n){2&e&&c.Eb("mat-expanded",n.expanded)("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[c.zb([{provide:F,useValue:void 0}]),c.xb,c.yb],ngContentSelectors:I,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){1&e&&(c.jc(D),c.ic(0),c.Sb(1,"div",0,1),c.ac("@bodyExpansion.done",(function(e){return n._bodyAnimationDone.next(e)})),c.Sb(3,"div",2),c.ic(4,1),c.Jc(5,P,0,0,"ng-template",3),c.Rb(),c.ic(6,2),c.Rb()),2&e&&(c.Ab(1),c.kc("@bodyExpansion",n._getExpandedState())("id",n.id),c.Bb("aria-labelledby",n._headerId),c.Ab(4),c.kc("cdkPortalOutlet",n._portal))},directives:[y.c],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[J.bodyExpansion]},changeDetection:0}),e}(),L=function(){var e=function(){function e(n,t,i,a,o,s){var r=this;Object(d.a)(this,e),this.panel=n,this._element=t,this._focusMonitor=i,this._changeDetectorRef=a,this._animationMode=s,this._parentChangeSubscription=u.a.EMPTY;var c=n.accordion?n.accordion._stateChanges.pipe(Object(j.a)((function(e){return!(!e.hideToggle&&!e.togglePosition)}))):E.a;this._parentChangeSubscription=Object(H.a)(n.opened,n.closed,c,n._inputChanges.pipe(Object(j.a)((function(e){return!!(e.hideToggle||e.disabled||e.togglePosition)})))).subscribe((function(){return r._changeDetectorRef.markForCheck()})),n.closed.pipe(Object(j.a)((function(){return n._containsFocus()}))).subscribe((function(){return i.focusVia(t,"program")})),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}return Object(i.a)(e,[{key:"_toggle",value:function(){this.disabled||this.panel.toggle()}},{key:"_isExpanded",value:function(){return this.panel.expanded}},{key:"_getExpandedState",value:function(){return this.panel._getExpandedState()}},{key:"_getPanelId",value:function(){return this.panel.id}},{key:"_getTogglePosition",value:function(){return this.panel.togglePosition}},{key:"_showToggle",value:function(){return!this.panel.hideToggle&&!this.panel.disabled}},{key:"_getHeaderHeight",value:function(){var e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}},{key:"_keydown",value:function(e){switch(e.keyCode){case C.n:case C.f:Object(C.s)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}},{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",n=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._element,e,n)}},{key:"ngAfterViewInit",value:function(){var e=this;this._focusMonitor.monitor(this._element).subscribe((function(n){n&&e.panel.accordion&&e.panel.accordion._handleHeaderFocus(e)}))}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}},{key:"disabled",get:function(){return this.panel.disabled}}]),e}();return e.\u0275fac=function(n){return new(n||e)(c.Mb(B,1),c.Mb(c.l),c.Mb(k.h),c.Mb(c.h),c.Mb(U,8),c.Mb(M.a,8))},e.\u0275cmp=c.Gb({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,n){1&e&&c.ac("click",(function(){return n._toggle()}))("keydown",(function(e){return n._keydown(e)})),2&e&&(c.Bb("id",n.panel._headerId)("tabindex",n.disabled?-1:0)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),c.Gc("height",n._getHeaderHeight()),c.Eb("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after","after"===n._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===n._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===n._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:V,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,n){1&e&&(c.jc(z),c.Sb(0,"span",0),c.ic(1),c.ic(2,1),c.ic(3,2),c.Rb(),c.Jc(4,R,1,1,"span",1)),2&e&&(c.Ab(4),c.kc("ngIf",n._showToggle()))},directives:[v.t],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n'],encapsulation:2,data:{animation:[J.indicatorRotate]},changeDetection:0}),e}(),Q=function(){var e=function e(){Object(d.a)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=c.Hb({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),e}(),G=function(){var e=function e(){Object(d.a)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=c.Hb({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),e}(),Y=function(){var e=function(e){Object(s.a)(t,e);var n=Object(r.a)(t);function t(){var e;return Object(d.a)(this,t),(e=n.apply(this,arguments))._ownHeaders=new c.E,e._hideToggle=!1,e.displayMode="default",e.togglePosition="after",e}return Object(i.a)(t,[{key:"ngAfterContentInit",value:function(){var e=this;this._headers.changes.pipe(Object(O.a)(this._headers)).subscribe((function(n){e._ownHeaders.reset(n.filter((function(n){return n.panel.accordion===e}))),e._ownHeaders.notifyOnChanges()})),this._keyManager=new k.g(this._ownHeaders).withWrap().withHomeAndEnd()}},{key:"_handleHeaderKeydown",value:function(e){this._keyManager.onKeydown(e)}},{key:"_handleHeaderFocus",value:function(e){this._keyManager.updateActiveItem(e)}},{key:"hideToggle",get:function(){return this._hideToggle},set:function(e){this._hideToggle=Object(l.b)(e)}}]),t}(f);return e.\u0275fac=function(n){return X(n||e)},e.\u0275dir=c.Hb({type:e,selectors:[["mat-accordion"]],contentQueries:function(e,n,t){var i;1&e&&c.Fb(t,L,!0),2&e&&c.uc(i=c.bc())&&(n._headers=i)},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,n){2&e&&c.Eb("mat-accordion-multi",n.multi)},inputs:{multi:"multi",displayMode:"displayMode",togglePosition:"togglePosition",hideToggle:"hideToggle"},exportAs:["matAccordion"],features:[c.zb([{provide:F,useExisting:e}]),c.xb]}),e}(),X=c.Ub(Y),Z=function(){var e=function e(){Object(d.a)(this,e)};return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(n){return new(n||e)},imports:[[v.c,_,y.g]]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.21.02/ng-edit/default~app-administration-app-administration-module~dev-rest-module~item-history-item-history-modul~33ae364d.3e10c6ac0a8cf73e279e.js.map