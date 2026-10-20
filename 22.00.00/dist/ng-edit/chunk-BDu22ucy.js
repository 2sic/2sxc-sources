import {B}from'./chunk-CoOQAGbg.js';import {r as rp}from'./chunk-DSAih7A1.js';import {bj as rr,bk as en,bL as ct,bl as ve$1,c7 as nl,cP as H,aj as Eg,j as jb,cR as ht$1,am as Qm,bb as KT,K as Ks,bc as XT,y as yd,bB as V_,by as dy,dm as Oy,ac as ky,l as kT,n as FT,d as pC,bz as I,bC as Ty,I as e_,N as t_,aa as ZH,m,s as F,A as yt$1,B as wt$1,aV as rM,dz as $t$1,dA as ta,a as wy,c as M_,f as fy,ae as zy,e as wd,X as Xm,R as r_,b4 as Ut,cN as dn,bo as tn,c5 as y,b5 as H$1,bp as Yo,cO as cn,bR as q,t as it,b1 as Ee,bn as Pt$1,aG as Zt$1,ax as Ie,dB as gc,br as pe,aU as Vd,bZ as vE,bP as Xe,bw as $w,aF as bn,_ as _y,bY as le,bq as or,bM as Bs,ci as J,aH as $f,dC as pE,bO as dE,P as zT,Y as YT,co as Xf,p as py,aW as $_,E as jT,G as BT,bG as $r,W,$ as Yd,b7 as iM,ay as cM,dD as oa,ab as LT,an as Y_,ao as K_,b6 as Xo,dE as Ed,dF as Da,bD as oo,k as w,x as x$1,as as N,a2 as U_,dG as q_,b8 as my,Q as Hp,U as Up,dH as Rt$1,S as eS}from'./main-RLZDMJKP.js';var Y=["*"],vt=["content"],ut=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],ht=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function wt(r,s){if(r&1){let e=zT();Ks(0,"div",1),wy("click",function(){Hp(e);let n=YT();return Up(n._onBackdropClicked())}),yd();}if(r&2){let e=YT();ky("mat-drawer-shown",e._isShowingBackdrop());}}function Ct(r,s){r&1&&(Ks(0,"mat-drawer-content"),XT(1,2),yd());}function xt(r,s){if(r&1){let e=zT();Ks(0,"div",1),wy("click",function(){Hp(e);let n=YT();return Up(n._onBackdropClicked())}),yd();}if(r&2){let e=YT();ky("mat-drawer-shown",e._isShowingBackdrop());}}function yt(r,s){r&1&&(Ks(0,"mat-sidenav-content"),XT(1,2),yd());}var kt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Bt=new I("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),Ce=new I("MAT_DRAWER_CONTAINER"),V=(()=>{class r extends ht$1{_platform=m(y);_changeDetectorRef=m(Vd);_element=m(Ut);_ngZone=m(H$1);_isInert=false;_container=m(ve);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Xf(50),bn(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(n){return (e||(e=Eg(r)))(n||r)}})();static \u0275cmp=jb({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Oy("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),ky("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[V_([{provide:ht$1,useExisting:r}]),Qm],ngContentSelectors:Y,decls:1,vars:0,template:function(t,n){t&1&&(KT(),XT(0));},encapsulation:2})}return r})(),ge=(()=>{class r{_elementRef=m(Ut);_focusTrapFactory=m(dn);_focusMonitor=m(tn);_platform=m(y);_ngZone=m(H$1);_renderer=m(Yo);_interactivityChecker=m(cn);_doc=m(q);_container=m(Ce,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=nl(e);}_disableClose=false;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=nl(e)),this._autoFocus=e;}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(nl(e));}_opened=it(false);_openedVia=null;_animationStarted=new Ee;_animationEnd=new Ee;openedChange=new Pt$1(true);_openedStream=this.openedChange.pipe(Zt$1(e=>e),Ie(()=>{}));openedStart=this._animationStarted.pipe(Zt$1(()=>this.opened),gc(void 0));_closedStream=this.openedChange.pipe(Zt$1(e=>!e),Ie(()=>{}));closedStart=this._animationStarted.pipe(Zt$1(()=>!this.opened),gc(void 0));_destroyed=new Ee;onPositionChanged=new Pt$1;_content;_modeChanged=new Ee;_injector=m(pe);_changeDetectorRef=m(Vd);constructor(){this.openedChange.pipe(vE(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return [e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Xe(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),S(),n.removeAttribute("tabindex");},a=this._renderer.listen(n,"blur",i),S=this._renderer.listen(n,"mousedown",i);})),n.focus(t));}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":$w(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let e=this._doc.activeElement;return !!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(e){return this.toggle(true,e)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(i=>{this.openedChange.pipe(bn(1)).subscribe(a=>i(a?"open":"close"));}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor);}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(e);});};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=jb({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&_y(vt,5),t&2){let i;e_(i=t_())&&(n._content=i.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(dy("align",null)("tabIndex",n.mode!=="side"?"-1":null),Oy("visibility",!n._container&&!n.opened?"hidden":null),ky("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Y,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(KT(),Ks(0,"div",1,0),XT(2),yd());},dependencies:[ht$1],encapsulation:2})}return r})(),ve=(()=>{class r{_dir=m(le,{optional:true});_element=m(Ut);_ngZone=m(H$1);_changeDetectorRef=m(Vd);_animationDisabled=or();_transitionsEnabled=false;_allDrawers;_drawers=new Bs;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=nl(e);}_autosize=m(Bt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:nl(e);}_backdropOverride=null;backdropClick=new Pt$1;_start=null;_end=null;_left=null;_right=null;_destroyed=new Ee;_doCheckSubject=new Ee;_contentMargins={left:null,right:null};_contentMarginChanges=new Ee;get scrollable(){return this._userContent||this._content}_injector=m(pe);constructor(){let e=m(y),t=m(J);this._dir?.change.pipe(vE(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),t.change().pipe(vE(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe($f(this._allDrawers),vE(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe($f(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(pE(10),vE(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(e=>e.open());}close(){this._drawers.forEach(e=>e.close());}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n;}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(e){e._animationStarted.pipe(vE(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),e.mode!=="side"&&e.openedChange.pipe(vE(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened));}_watchDrawerPosition(e){e.onPositionChanged.pipe(vE(this._drawers.changes)).subscribe(()=>{$w({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(e){e._modeChanged.pipe(vE(dE(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=jb({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,i){if(t&1&&Ty(i,V,5)(i,ge,5),t&2){let a;e_(a=t_())&&(n._content=a.first),e_(a=t_())&&(n._allDrawers=a);}},viewQuery:function(t,n){if(t&1&&_y(V,5),t&2){let i;e_(i=t_())&&(n._userContent=i.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&ky("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[V_([{provide:Ce,useExisting:r}])],ngContentSelectors:ht,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(KT(ut),kT(0,wt,1,2,"div",0),XT(1),XT(2,1),kT(3,Ct,2,0,"mat-drawer-content")),t&2&&(FT(n.hasBackdrop?0:-1),pC(3),FT(n._content?-1:3));},dependencies:[V],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return r})(),pt=(()=>{class r extends V{static \u0275fac=(()=>{let e;return function(n){return (e||(e=Eg(r)))(n||r)}})();static \u0275cmp=jb({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[V_([{provide:ht$1,useExisting:r},{provide:V,useExisting:r}]),Qm],ngContentSelectors:Y,decls:1,vars:0,template:function(t,n){t&1&&(KT(),XT(0));},encapsulation:2})}return r})(),Dt=(()=>{class r extends ge{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=nl(e);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=H(e);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=H(e);}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Eg(r)))(n||r)}})();static \u0275cmp=jb({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(dy("tabIndex",n.mode!=="side"?"-1":null)("align",null),Oy("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),ky("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[V_([{provide:ge,useExisting:r}]),Qm],ngContentSelectors:Y,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(KT(),Ks(0,"div",1,0),XT(2),yd());},dependencies:[ht$1],encapsulation:2})}return r})(),hn=(()=>{class r extends ve{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Eg(r)))(n||r)}})();static \u0275cmp=jb({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,i){if(t&1&&Ty(i,pt,5)(i,Dt,5),t&2){let a;e_(a=t_())&&(n._content=a.first),e_(a=t_())&&(n._allDrawers=a);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&ky("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[V_([{provide:Ce,useExisting:r},{provide:ve,useExisting:r}]),Qm],ngContentSelectors:ht,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(KT(ut),kT(0,xt,1,2,"div",0),XT(1),XT(2,1),kT(3,yt,2,0,"mat-sidenav-content")),t&2&&(FT(n.hasBackdrop?0:-1),pC(3),FT(n._content?-1:3));},dependencies:[pt],styles:[kt],encapsulation:2})}return r})(),_n=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=rr({type:r});static \u0275inj=en({imports:[ct,ve$1,ct]})}return r})();var Mt=(r,s)=>({closed:r,open:s,"ml-auto":true}),It=(r,s)=>s.path;function Tt(r,s){if(r&1&&py(0,"app-feature-icon-indicator",2),r&2){let e=YT();fy("featureNameId",e.navItem().featureRequired);}}function Et(r,s){if(r&1&&(Ks(0,"mat-icon",3),M_(1," expand_more"),yd()),r&2){let e=YT();fy("ngClass",$_(1,Mt,!e.isOpenMenu,e.isOpenMenu));}}function Ft(r,s){if(r&1&&py(0,"app-nav-item-list",5),r&2){let e=s.$implicit;fy("navItem",e);}}function St(r,s){if(r&1&&(Ks(0,"div",4),jT(1,Ft,1,1,"app-nav-item-list",5,It),yd()),r&2){let e=YT();pC(),BT(e.navItem().child);}}var Bn=(()=>{class r{constructor(){this.navItem=ZH(),this.isOpenMenu=false,this.router=m(F);}ngOnInit(){this.#e(),this.router.events.subscribe(()=>this.#e());}#e(){if(!this.navItem().child?.length)return;let e=this.router.url.split("/");this.navItem().child.find(n=>e.includes(n.path))&&(this.isOpenMenu=true);}static{this.\u0275fac=function(t){return new(t||r)};}static{this.\u0275cmp=jb({type:r,selectors:[["app-nav-item-list"]],inputs:{navItem:[1,"navItem"]},decls:8,vars:7,consts:[["routerLinkActive","active","matRipple","",1,"app-menu-container",3,"click","routerLink","tippy"],[1,"link-text"],[3,"featureNameId"],[3,"ngClass"],[1,"paddingLink"],[3,"navItem"]],template:function(t,n){t&1&&(Ks(0,"a",0),wy("click",function(){return n.isOpenMenu=!n.isOpenMenu}),Ks(1,"mat-icon"),M_(2),yd(),Ks(3,"div",1),M_(4),kT(5,Tt,1,1,"app-feature-icon-indicator",2),yd(),kT(6,Et,2,4,"mat-icon",3),yd(),kT(7,St,3,0,"div",4)),t&2&&(fy("routerLink",n.navItem().path)("tippy",n.navItem().tippy),pC(2),zy(n.navItem().icon),pC(2),wd("",n.navItem().name," "),pC(),FT(n.navItem().featureRequired?5:-1),pC(),FT(n.navItem().child?6:-1),pC(),FT(n.isOpenMenu?7:-1));},dependencies:[r,yt$1,wt$1,rM,$t$1,ta,rp,B],styles:[`.paddingLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:40px}.active[_ngcontent-%COMP%]{background-color:#8080801a}.app-menu-container[_ngcontent-%COMP%]{padding:15px 25px;display:flex;align-items:center;text-decoration:none;color:#000;transition:all 225ms ease-in-out}.app-menu-container[_ngcontent-%COMP%]:hover{background-color:#80808033}.app-menu-container[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-left:25px}.app-menu-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transition:all 225ms ease-in-out}.app-menu-container[_ngcontent-%COMP%]   .mat-icon.ml-auto[_ngcontent-%COMP%]{margin-left:auto}.app-menu-container[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]{transform:rotate(180deg)}
/*# sourceMappingURL=nav-item-list-M2KPBGET.css.map */`]});}}return r})();var Rt=r=>({"xng-breadcrumb-link-disabled":r}),ft=(r,s,e,t,n,i)=>({$implicit:r,info:s,last:e,first:t,index:n,count:i});function Pt(r,s){r&1&&my(0);}function Ot(r,s){if(r&1&&M_(0),r&2){let e=YT(2).$implicit;wd(" ",e.label," ");}}function At(r,s){if(r&1&&(Ks(0,"a",3),Xm(1,Pt,1,0,"ng-container",6),kT(2,Ot,1,1),yd()),r&2){let e=YT(),t=e.$implicit,n=e.$index,i=e.$count,a=YT();fy("ngClass",U_(10,Rt,t.disable))("routerLink",t.routeInterceptor?t.routeInterceptor(t.routeLink,t):t.routeLink)("queryParams",a.preserveQueryParams?t.queryParams:void 0)("fragment",a.preserveFragment?t.fragment:void 0)("target",a.anchorTarget?a.anchorTarget:"_self"),dy("aria-disabled",t.disable)("tabIndex",t.disable?-1:0),pC(),fy("ngTemplateOutlet",a.itemTemplate)("ngTemplateOutletContext",q_(12,ft,t.label,t.info,n===i-1,n===0,n,i)),pC(),FT(a.itemTemplate?-1:2);}}function Lt(r,s){r&1&&my(0);}function jt(r,s){if(r&1&&M_(0),r&2){let e=YT(2).$implicit;wd(" ",e.label," ");}}function Vt(r,s){if(r&1&&(Ks(0,"span",4),Xm(1,Lt,1,0,"ng-container",6),kT(2,jt,1,1),yd()),r&2){let e=YT(),t=e.$implicit,n=e.$index,i=e.$count,a=YT();pC(),fy("ngTemplateOutlet",a.itemTemplate)("ngTemplateOutletContext",q_(3,ft,t.label,t.info,n===i-1,n===0,n,i)),pC(),FT(a.itemTemplate?-1:2);}}function zt(r,s){r&1&&my(0);}function Qt(r,s){if(r&1&&M_(0),r&2){let e=YT(3);wd(" ",e.separator," ");}}function Gt(r,s){if(r&1&&(Ks(0,"li",5),Xm(1,zt,1,0,"ng-container",7),kT(2,Qt,1,1),yd()),r&2){let e=YT(2);pC(),fy("ngTemplateOutlet",e.separatorTemplate),pC(),FT(e.separatorTemplate?-1:2);}}function $t(r,s){if(r&1&&(Ks(0,"li",2),kT(1,At,3,19,"a",3),kT(2,Vt,3,10,"span",4),yd(),kT(3,Gt,3,2,"li",5)),r&2){let e=s.$index,t=s.$count;pC(),FT(e!==t-1?1:-1),pC(),FT(e===t-1?2:-1),pC(),FT(e!==t-1?3:-1);}}var xe=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)};}static{this.\u0275dir=Xo({type:r,selectors:[["","xngBreadcrumbItem",""]]});}}return r})(),ee={PREFIX:":",REGEX_IDENTIFIER:"/:[^/]+",REGEX_REPLACER:"/[^/]+"},Nt="@",_t=r=>!!r&&Object.keys(r).length>0,Wt=(()=>{class r{constructor(){this.baseHref="/",this.dynamicBreadcrumbStore=[],this.currentBreadcrumbs=[],this.previousBreadcrumbs=[],this.breadcrumbs=new oo([]),this.breadcrumbs$=this.breadcrumbs.asObservable(),this.activatedRoute=m(W),this.router=m(F),this.detectRouteChanges();}detectRouteChanges(){this.setupBreadcrumbs(this.activatedRoute.snapshot),this.router.events.pipe(Zt$1(e=>e instanceof Rt$1)).subscribe(e=>{e.shouldActivate&&this.setupBreadcrumbs(e.state.root);});}setupBreadcrumbs(e){this.previousBreadcrumbs=this.currentBreadcrumbs;let t=this.getRootBreadcrumb();this.currentBreadcrumbs=t?[t]:[],this.prepareBreadcrumbList(e,this.baseHref);}getRootBreadcrumb(){let e=this.router.config.find(i=>i.path===""),t=this.extractObject(e?.data?.breadcrumb),n=this.getFromStore(t.alias,"/");if(_t(t)||_t(n))return w(x$1(w(w({},n),t),{routeLink:this.baseHref}),this.getQueryParamsFromPreviousList("/"))}prepareBreadcrumbItem(e,t){let{path:n,breadcrumb:i}=this.parseRouteData(e.routeConfig),a=this.resolvePathSegment(n,e),S=`${t}${a}`,ye=this.getFromStore(i.alias,S),ke=this.extractLabel(ye?.label||i?.label,a),te=false,Be="";return ke||(te=true,Be=a),w(x$1(w(w({},ye),i),{label:te?Be:ke,routeLink:S,isAutoGeneratedLabel:te}),this.getQueryParamsFromPreviousList(S))}prepareBreadcrumbList(e,t){if(e.routeConfig?.path){let a=this.prepareBreadcrumbItem(e,t);if(this.currentBreadcrumbs.push(a),e.firstChild)return this.prepareBreadcrumbList(e.firstChild,a.routeLink+"/")}else if(e.firstChild)return this.prepareBreadcrumbList(e.firstChild,t);let n=this.currentBreadcrumbs[this.currentBreadcrumbs.length-1];this.setQueryParamsForActiveBreadcrumb(n,e);let i=this.currentBreadcrumbs.filter(a=>!a.skip);this.breadcrumbs.next(i);}getFromStore(e,t){return this.dynamicBreadcrumbStore.find(n=>e&&e===n.alias||t&&t===n.routeLink||this.matchRegex(t,n.routeRegex))}matchRegex(e,t){return e.match(new RegExp(t))?.[0]===e}resolvePathSegment(e,t){return e.includes(ee.PREFIX)&&Object.entries(t.params).forEach(([n,i])=>{e=e.replace(`:${n}`,`${i}`);}),e}getQueryParamsFromPreviousList(e){let{queryParams:t,fragment:n}=this.previousBreadcrumbs.find(i=>i.routeLink===e)||{};return {queryParams:t,fragment:n}}setQueryParamsForActiveBreadcrumb(e,t){if(e){let{queryParams:n,fragment:i}=t;e.queryParams=n?w({},n):void 0,e.fragment=i;}}parseRouteData(e){let{path:t,data:n}=e,i=this.mergeWithBaseChildData(e,n?.breadcrumb);return {path:t,breadcrumb:i}}mergeWithBaseChildData(e,t){if(!e)return this.extractObject(t);let n;e.loadChildren?n=e._loadedRoutes.find(a=>a.path===""):e.children&&(n=e.children.find(a=>a.path===""));let i=n?.data?.breadcrumb;return i?this.mergeWithBaseChildData(n,w(w({},this.extractObject(t)),this.extractObject(i))):this.extractObject(t)}set(e,t){let n=this.extractObject(t),i;e.startsWith(Nt)?i=["alias",x$1(w({},n),{alias:e.slice(1)})]:e.includes(ee.PREFIX)?i=["routeRegex",x$1(w({},n),{routeRegex:this.buildRegex(e)})]:i=["routeLink",x$1(w({},n),{routeLink:this.ensureLeadingSlash(e)})],i[1].isAutoGeneratedLabel=false,this.updateStore(...i),this.updateCurrentBreadcrumbs(...i);}updateStore(e,t){let n=this.dynamicBreadcrumbStore.findIndex(i=>t[e]===i[e]);n>-1?this.dynamicBreadcrumbStore[n]=w(w({},this.dynamicBreadcrumbStore[n]),t):this.dynamicBreadcrumbStore.push(w({},t));}updateCurrentBreadcrumbs(e,t){let n=this.currentBreadcrumbs.findIndex(i=>e==="routeRegex"?this.matchRegex(i.routeLink,t[e]):t[e]===i[e]);if(n>-1){this.currentBreadcrumbs[n]=w(w({},this.currentBreadcrumbs[n]),t);let i=this.currentBreadcrumbs.filter(a=>!a.skip);this.breadcrumbs.next([...i]);}}buildRegex(e){return this.ensureLeadingSlash(e).replace(new RegExp(ee.REGEX_IDENTIFIER,"g"),ee.REGEX_REPLACER)}ensureLeadingSlash(e){return e.startsWith("/")?e:`/${e}`}extractLabel(e,t){let n=typeof e=="object"?e.label:e;return typeof n=="function"?n(t):n}extractObject(e){return e&&(typeof e=="string"||typeof e=="function")?{label:e}:e||{}}static{this.\u0275fac=function(t){return new(t||r)};}static{this.\u0275prov=N({token:r,factory:r.\u0275fac,providedIn:"root"});}}return r})(),bt=(()=>{class r{set separator(e){e instanceof $r?(this.separatorTemplate=e,this._separator=void 0):(this.separatorTemplate=void 0,this._separator=e||"/");}get separator(){return this._separator}constructor(){this._separator="/",this.autoGenerate=true,this.preserveQueryParams=true,this.preserveFragment=true,this.class="",this.setupMessage="not set up yet",this.someParameterValue=null,this.breadcrumbService=m(Wt),this.activateRoute=m(W),this.activateRoute.params.subscribe(e=>{this.setupComponent(e.someParam);});}setupComponent(e){this.setupMessage="set up at "+new Date,this.someParameterValue=e;}ngOnInit(){this.breadcrumbs$=this.breadcrumbService.breadcrumbs$.pipe(Ie(e=>e.filter(t=>this.autoGenerate?true:!t.isAutoGeneratedLabel).map(t=>{let{routeInterceptor:n,routeLink:i}=t;return x$1(w({},t),{routeLink:n?.(i,t)||i})})));}static{this.\u0275fac=function(t){return new(t||r)};}static{this.\u0275cmp=jb({type:r,selectors:[["xng-breadcrumb"]],contentQueries:function(t,n,i){if(t&1&&Ty(i,xe,5,$r),t&2){let a;e_(a=t_())&&(n.itemTemplate=a.first);}},inputs:{autoGenerate:"autoGenerate",preserveQueryParams:"preserveQueryParams",preserveFragment:"preserveFragment",class:"class",anchorTarget:"anchorTarget",separator:"separator"},decls:5,vars:3,consts:[["aria-label","breadcrumb",1,"xng-breadcrumb-root",3,"ngClass"],[1,"xng-breadcrumb-list"],[1,"xng-breadcrumb-item"],["rel","noopener noreferrer",1,"xng-breadcrumb-link",3,"ngClass","routerLink","queryParams","fragment","target"],[1,"xng-breadcrumb-trail"],["aria-hidden","true",1,"xng-breadcrumb-separator"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"]],template:function(t,n){t&1&&(Ks(0,"nav",0)(1,"ol",1),jT(2,$t,4,3,null,null,LT),Y_(4,"async"),yd()()),t&2&&(fy("ngClass",n.class),pC(2),BT(K_(4,1,n.breadcrumbs$)));},dependencies:[Yd,rM,iM,cM,oa,$t$1],styles:[`.xng-breadcrumb-root{margin:0}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}
`],encapsulation:2,changeDetection:1});}}return r})();function Ht(r,s){if(r&1&&(Ks(0,"mat-icon",3),M_(1,"chevron_right"),yd(),M_(2)),r&2){let e=YT().$implicit;pC(2),wd(" ",e," ");}}function qt(r,s){if(r&1&&(Ed(0),kT(1,Ht,3,1),Da()),r&2){let e=s.last;pC(),FT(e?1:-1);}}function Zt(r,s){}var Nn=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)};}static{this.\u0275cmp=jb({type:r,selectors:[["app-breadcrumb"]],decls:4,vars:1,consts:[["emptyTemplate",""],[3,"separator"],[4,"xngBreadcrumbItem"],[1,"breadcrumb-icon"]],template:function(t,n){if(t&1&&(Ks(0,"xng-breadcrumb",1),Xm(1,qt,2,1,"ng-container",2),yd(),Xm(2,Zt,0,0,"ng-template",null,0,eS)),t&2){let i=r_(3);fy("separator",i);}},dependencies:[bt,xe,wt$1],encapsulation:2});}}return r})();export{Bn as B,Dt as D,Nn as N,_n as _,hn as h,pt as p};//# sourceMappingURL=https://sources.2sxc.org/22.00.00/dist/ng-edit/chunk-BDu22ucy.js.map
