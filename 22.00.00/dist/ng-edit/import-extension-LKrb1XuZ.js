import {b}from'./chunk-Cw9QiC03.js';import {j as je,a as j,V}from'./chunk-BCajn17J.js';import {A}from'./chunk-DPd4Q7K6.js';import {I}from'./chunk-B756El1x.js';import {v as ve,n as ne$2}from'./feature-info-dialog-D2_VHw0y.js';import {w as we,t as te$1}from'./chunk-DwMMXiZ-.js';import {F as Ft$1,m,a3 as Qt$1,t as it,M as Mt$1,aS as xl,aG as Zt$1,aX as sc,aF as bn,u as ue,az as SN,j as jb,$ as Yd,D as oe$1,a1 as ne$1,J,Z,ap as ti,A as yt,ew as gM,am as Qm,K as Ks,a as wy,c as M_,y as yd,l as kT,d as pC,e as wd,n as FT,_ as _y,I as e_,N as t_,bj as rr,bk as en,ak as At$1,bl as ve$1,bz as I$1,aU as Vd,b4 as Ut$1,fF as GH,b5 as H,bo as tn,f7 as Q,bR as q,b1 as Ee,bq as or,bm as be,bn as Pt,fG as Dt,br as pe,bs as j$1,bt as It,dg as je$1,bO as dE,bx as FS,bb as KT,p as py,bc as XT,bB as V_,aw as Ey,by as dy,be as v_,ac as ky,bC as Ty,bY as le,bM as Bs,aH as $f,ag as lc,bN as Dt$1,bZ as vE,bI as vd,bJ as Dd,bv as PS,P as zT,Y as YT,ae as zy,E as jT,G as BT,a4 as Qy,a5 as KC,a6 as Yy,a7 as JC,b6 as Xo,f as fy,aj as Eg,Q as Hp,U as Up,a8 as O_,R as r_,an as Y_,ao as K_,aC as Yg,T as Zg}from'./main-RLZDMJKP.js';import {y}from'./chunk-DXU0aMhn.js';import {c}from'./chunk-D2cDVkcc.js';import {f as fn,x as xn,F as Fe,N as Ne,u as un}from'./chunk-DkHP1Mn9.js';import {L as Lt$1}from'./chunk-3GV9srft.js';import {d}from'./chunk-KxYaZ0CL.js';import {a as an,f as fe,R as Rn,F as Fn,J as Jt$1}from'./chunk-CHNg4A0o.js';import {z}from'./chunk-BCWY2NDx.js';import {r as rp}from'./chunk-DSAih7A1.js';import {q as qe,V as V$1,a as Vt$1,N as Nt}from'./chunk-BcxaMtzh.js';import'./chunk-D5adBR8G.js';import'./chunk-Bo82Tm4z.js';import'./chunk-OLykfOlz.js';import'./chunk-BrTRpkiH.js';import'./chunk-C7cpcpmg.js';import'./chunk-Cef4MioX.js';import'./chunk-BHb9Qvef.js';import'./chunk-FigxxvaU.js';import'./chunk-C7DtPr8-.js';var Bt=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ot=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Lt(n,d){n&1&&(Ks(0,"span",3),XT(1,1),yd());}function Vt(n,d){n&1&&(Ks(0,"span",6),XT(1,2),yd());}var zt=["*"];var Ht=new I$1("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Et=new I$1("MatChipAvatar"),kt=new I$1("MatChipTrailingIcon"),St=new I$1("MatChipEdit"),Mt=new I$1("MatChipRemove"),Ft=new I$1("MatChip"),At=(()=>{class n{_elementRef=m(Ut$1);_parentChip=m(Ft);_isPrimary=true;_isLeading=false;get disabled(){return this._disabled||this._parentChip?.disabled||false}set disabled(i){this._disabled=i;}_disabled=false;tabIndex=-1;_allowFocusWhenDisabled=false;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){m(j$1).load(It),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button");}focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Xo({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,t){e&2&&(dy("disabled",t._getDisabledAttribute())("aria-disabled",t.disabled),ky("mdc-evolution-chip__action--primary",t._isPrimary)("mdc-evolution-chip__action--secondary",!t._isPrimary)("mdc-evolution-chip__action--trailing",!t._isPrimary&&!t._isLeading));},inputs:{disabled:[2,"disabled","disabled",FS],tabIndex:[2,"tabIndex","tabIndex",i=>i==null?-1:PS(i)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),jt=(()=>{class n extends At{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(i){!this.disabled&&this._isPrimary&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}_handleKeydown(i){(i.keyCode===13||i.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}static \u0275fac=(()=>{let i;return function(t){return (i||(i=Eg(n)))(t||n)}})();static \u0275dir=Xo({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,t){e&1&&wy("click",function(c){return t._handleClick(c)})("keydown",function(c){return t._handleKeydown(c)}),e&2&&(dy("tabindex",t._getTabindex()),ky("mdc-evolution-chip__action--presentational",false));},features:[Qm]})}return n})();var ei=(()=>{class n{_changeDetectorRef=m(Vd);_elementRef=m(Ut$1);_tagName=m(GH);_ngZone=m(H);_focusMonitor=m(tn);_globalRippleOptions=m(Q,{optional:true});_document=m(q);_onFocus=new Ee;_onBlur=new Ee;_isBasicChip=false;role=null;_hasFocusInternal=false;_pendingFocus=false;_actionChanges;_animationsDisabled=or();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=m(be).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=false;_hadFocusOnRemove=false;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(i){this._value=i;}_value;color;removable=true;highlighted=false;disableRipple=false;get disabled(){return this._disabled||this._chipListDisabled}set disabled(i){this._disabled=i;}_disabled=false;removed=new Pt;destroyed=new Pt;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=m(Dt);_injector=m(pe);constructor(){let i=m(j$1);i.load(It),i.load(je$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()});}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName;}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=false,this.focus());}ngAfterContentInit(){this._actionChanges=dE(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck());}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled());}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe();}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}));}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return !!(this.trailingIcon||this.removeIcon)}_handleKeydown(i){(i.keyCode===8&&!i.repeat||i.keyCode===46)&&(i.preventDefault(),this.remove());}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=true);}_getSourceAction(i){return this._getActions().find(e=>{let t=e._elementRef.nativeElement;return t===i||t.contains(i)})}_getActions(){let i=[];return this.editIcon&&i.push(this.editIcon),this.primaryAction&&i.push(this.primaryAction),this.removeIcon&&i.push(this.removeIcon),i}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(i){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,true).subscribe(i=>{let e=i!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))));});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=jb({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,t,a){if(e&1&&Ty(a,Et,5)(a,St,5)(a,kt,5)(a,Mt,5)(a,Et,5)(a,kt,5)(a,St,5)(a,Mt,5),e&2){let c;e_(c=t_())&&(t.leadingIcon=c.first),e_(c=t_())&&(t.editIcon=c.first),e_(c=t_())&&(t.trailingIcon=c.first),e_(c=t_())&&(t.removeIcon=c.first),e_(c=t_())&&(t._allLeadingIcons=c),e_(c=t_())&&(t._allTrailingIcons=c),e_(c=t_())&&(t._allEditIcons=c),e_(c=t_())&&(t._allRemoveIcons=c);}},viewQuery:function(e,t){if(e&1&&_y(jt,5),e&2){let a;e_(a=t_())&&(t.primaryAction=a.first);}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,t){e&1&&wy("keydown",function(c){return t._handleKeydown(c)}),e&2&&(Ey("id",t.id),dy("role",t.role)("aria-label",t.ariaLabel),v_("mat-"+(t.color||"primary")),ky("mdc-evolution-chip",!t._isBasicChip)("mdc-evolution-chip--disabled",t.disabled)("mdc-evolution-chip--with-trailing-action",t._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",t.leadingIcon)("mdc-evolution-chip--with-primary-icon",t.leadingIcon)("mdc-evolution-chip--with-avatar",t.leadingIcon)("mat-mdc-chip-with-avatar",t.leadingIcon)("mat-mdc-chip-highlighted",t.highlighted)("mat-mdc-chip-disabled",t.disabled)("mat-mdc-basic-chip",t._isBasicChip)("mat-mdc-standard-chip",!t._isBasicChip)("mat-mdc-chip-with-trailing-icon",t._hasTrailingIcon())("_mat-animation-noopable",t._animationsDisabled));},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",FS],highlighted:[2,"highlighted","highlighted",FS],disableRipple:[2,"disableRipple","disableRipple",FS],disabled:[2,"disabled","disabled",FS]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[V_([{provide:Ft,useExisting:n}])],ngContentSelectors:Ot,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,t){e&1&&(KT(Bt),py(0,"span",0),Ks(1,"span",1)(2,"span",2),kT(3,Lt,2,0,"span",3),Ks(4,"span",4),XT(5),py(6,"span",5),yd()()(),kT(7,Vt,2,0,"span",6)),e&2&&(pC(3),FT(t.leadingIcon?3:-1),pC(4),FT(t._hasTrailingIcon()?7:-1));},dependencies:[At],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Rt=(()=>{class n{_elementRef=m(Ut$1);_changeDetectorRef=m(Vd);_dir=m(le,{optional:true});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Ee;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(i=>i._onFocus)}get chipDestroyedChanges(){return this._getChipStream(i=>i.destroyed)}get chipRemovedChanges(){return this._getChipStream(i=>i.removed)}get disabled(){return this._disabled}set disabled(i){this._disabled=i,this._syncChipsState();}_disabled=false;get empty(){return !this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(i){this._explicitRole=i;}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Bs;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip();}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete();}_hasFocusedChip(){return this._chips&&this._chips.some(i=>i._hasFocus())}_syncChipsState(){this._chips?.forEach(i=>{i._chipListDisabled=this._disabled,i._changeDetectorRef.markForCheck();});}focus(){}_handleKeydown(i){this._originatesFromChip(i)&&this._keyManager.onKeydown(i);}_isValidIndex(i){return i>=0&&i<this._chips.length}_allowFocusEscape(){let i=this._elementRef.nativeElement.tabIndex;i!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=i));}_getChipStream(i){return this._chips.changes.pipe($f(null),lc(()=>dE(...this._chips.map(i))))}_originatesFromChip(i){let e=i.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-mdc-chip"))return  true;e=e.parentElement;}return  false}_setUpFocusManagement(){this._chips.changes.pipe($f(this._chips)).subscribe(i=>{let e=[];i.forEach(t=>t._getActions().forEach(a=>e.push(a))),this._chipActions.reset(e),this._chipActions.notifyOnChanges();}),this._keyManager=new Dt$1(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(i=>this._skipPredicate(i)),this.chipFocusChanges.pipe(vE(this._destroyed)).subscribe(({chip:i})=>{let e=i._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e);}),this._dir?.change.pipe(vE(this._destroyed)).subscribe(i=>this._keyManager.withHorizontalOrientation(i));}_skipPredicate(i){return i.disabled}_trackChipSetChanges(){this._chips.changes.pipe($f(null),vE(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus();});}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(vE(this._destroyed)).subscribe(i=>{let t=this._chips.toArray().indexOf(i.chip),a=i.chip._hasFocus(),c=i.chip._hadFocusOnRemove&&this._keyManager.activeItem&&i.chip._getActions().includes(this._keyManager.activeItem),I=a||c;this._isValidIndex(t)&&I&&(this._lastDestroyedFocusedChipIndex=t);});}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let i=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[i];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus();}else this.focus();this._lastDestroyedFocusedChipIndex=null;}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=jb({type:n,selectors:[["mat-chip-set"]],contentQueries:function(e,t,a){if(e&1&&Ty(a,ei,5),e&2){let c;e_(c=t_())&&(t._chips=c);}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(e,t){e&1&&wy("keydown",function(c){return t._handleKeydown(c)}),e&2&&dy("role",t.role);},inputs:{disabled:[2,"disabled","disabled",FS],role:"role",tabIndex:[2,"tabIndex","tabIndex",i=>i==null?0:PS(i)]},ngContentSelectors:zt,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,t){e&1&&(KT(),vd(0,"div",0),XT(1),Dd());},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var Tt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=rr({type:n});static \u0275inj=en({providers:[d,{provide:Ht,useValue:{separatorKeyCodes:[13]}}],imports:[At$1,ve$1]})}return n})();var qt=["installerWindow"],Gt=(n,d)=>d.key,Qt=(n,d)=>d.edition;function Kt(n,d){if(n&1){let i=zT();Ks(0,"p"),M_(1),yd(),Ks(2,"p"),M_(3,"Drag and drop files here or click to select"),yd(),Ks(4,"input",13,0),wy("change",function(t){Hp(i);let a=YT(2);return Up(a.filesChanged(t))}),yd(),Ks(6,"button",14),wy("click",function(){Hp(i);let t=r_(5);return Up(t.click())}),M_(7," Select Files "),yd(),Ks(8,"button",15),wy("click",function(){Hp(i);let t=YT(2);return Up(t.toggleShowExtensionCatalog())}),M_(9," Extensions Catalog "),yd();}if(n&2){let i=YT(2);pC(),zy(i.dialogData.description),pC(3),fy("accept",i.dialogData.allowedFileTypes)("multiple",i.dialogData.multiple);}}function Ut(n,d){if(n&1&&py(0,"iframe",16,1),n&2){let i=YT(3);fy("src",i.remoteInstallerUrl,Yg);}}function Wt(n,d){if(n&1&&kT(0,Ut,2,1,"iframe",16),n&2){let i=YT(2);FT(i.ready?0:-1);}}function $t(n,d){if(n&1){let i=zT();Ks(0,"div",12),wy("filesDropped",function(t){Hp(i);let a=YT();return Up(a.filesDropped(t))}),kT(1,Kt,10,3),kT(2,Wt,1,1),yd();}if(n&2){let i=YT();pC(),FT(i.showExtensionCatalog()?-1:1),pC(),FT(i.showExtensionCatalog()?2:-1);}}function Zt(n,d){n&1&&(Ks(0,"div",6),py(1,"mat-spinner",17),Ks(2,"p"),M_(3,"Running preflight check..."),yd()());}function Jt(n,d){if(n&1){let i=zT();Ks(0,"div",7)(1,"h3"),M_(2,"Error"),yd(),Ks(3,"p"),M_(4),yd(),Ks(5,"button",18),wy("click",function(){Hp(i);let t=YT();return Up(t.cancelPreflight())}),M_(6," Back "),yd()();}if(n&2){let i=YT();pC(4),zy(i.preflightError());}}function Yt(n,d){if(n&1&&(M_(0," File: "),Ks(1,"em"),M_(2),yd()),n&2){let i=YT(2);pC(2),zy(i.currentFile?.name);}}function Xt(n,d){if(n&1&&(M_(0," Remote Source: "),Ks(1,"em")(2,"a",27),M_(3),yd()()),n&2){let i=YT(2);pC(2),fy("href",i.preflightSource,Zg),pC(),wd(" ",i.preflightSource.toString().substring(0,50),"... ");}}function ie(n,d){if(n&1&&(Ks(0,"mat-chip"),M_(1),yd()),n&2){let i=d.$implicit;ky("disabled",!i.value),pC(),wd(" ",i.key.split("Inside").join("")," ");}}function te(n,d){if(n&1&&(Ks(0,"mat-accordion")(1,"mat-expansion-panel",19)(2,"mat-expansion-panel-header")(3,"mat-panel-title"),M_(4,"Extension Details"),yd()(),Ks(5,"div",20),kT(6,Yt,3,1)(7,Xt,4,2),Ks(8,"h4"),M_(9),yd(),Ks(10,"span"),M_(11),yd(),py(12,"br"),Ks(13,"div",21)(14,"div",22)(15,"span",23),M_(16,"File Count:"),yd(),Ks(17,"span",24),M_(18),yd()(),Ks(19,"div",22)(20,"span",23),M_(21,"Supports Editions:"),yd(),Ks(22,"span",24),M_(23),yd()()(),Ks(24,"div",25)(25,"h4"),M_(26,"Features used by this Extension"),yd(),Ks(27,"mat-chip-set"),jT(28,ie,2,3,"mat-chip",26,Gt),Y_(30,"keyvalue"),yd()()()()()),n&2){let i=YT();pC(),fy("expanded",true),pC(5),FT(i.isFileSource?6:7),pC(3),wd("",i.extension().name," Details"),pC(2),wd("Version ",i.extension().version),pC(7),wd(" ",i.extension().fileCount," "),pC(5),wd(" ",i.extension().editionsSupported?"Yes":"No"," "),pC(5),BT(K_(30,6,i.extension().features));}}function ee(n,d){if(n&1){let i=zT();Ks(0,"mat-checkbox",30),wy("change",function(t){let a=Hp(i).$implicit,c=YT(2);return Up(c.onEditionToggle(a.edition,t.checked))}),M_(1),yd();}if(n&2){let i=d.$implicit,e=YT(2);fy("checked",e.selectedEditions().includes(i.edition)),pC(),wd(" ",i.edition||"Default"," ");}}function ne(n,d){if(n&1&&(Ks(0,"div",8)(1,"h4"),M_(2,"Editions to install this Extension to"),yd(),Ks(3,"div",28),jT(4,ee,2,2,"mat-checkbox",29,Qt),yd()()),n&2){let i=YT();pC(4),BT(i.editions());}}function ae(n,d){if(n&1){let i=zT();Ks(0,"div",9)(1,"h4"),M_(2,"Caution: Import causes an Overwrite"),yd(),Ks(3,"p"),M_(4," Upgrading this extension will overwrite your changes. You must enable Force Install to proceed. "),yd(),Ks(5,"mat-slide-toggle",31),Qy("ngModelChange",function(t){Hp(i);let a=YT();return O_(a.forceInstall,t)||(a.forceInstall=t),Up(t)}),M_(6," Force / Overwrite "),yd(),KC(),yd();}if(n&2){let i=YT();pC(5),Yy("ngModel",i.forceInstall),JC();}}function oe(n,d){n&1&&(Ks(0,"div",9)(1,"h4"),M_(2,"Upgrade Available"),yd(),Ks(3,"p"),M_(4," This extension is already installed, but no local changes were detected. Force Install is "),Ks(5,"strong"),M_(6,"not required"),yd(),M_(7,". "),yd()());}function ce(n,d){n&1&&(Ks(0,"div",10),py(1,"mat-spinner",17),Ks(2,"p"),M_(3,"Installing extension..."),yd()());}function re(n,d){if(n&1){let i=zT();Ks(0,"button",32),wy("click",function(){Hp(i);let t=YT();return Up(t.cancelPreflight())}),M_(1," Cancel "),yd(),Ks(2,"button",33),wy("click",function(){Hp(i);let t=YT();return Up(t.install())}),M_(3," Install "),yd();}if(n&2){let i=YT();fy("disabled",i.isInstalling()),pC(2),fy("disabled",!i.canInstall());}}var In=(()=>{class n extends c{#i;#e;#n;#a;#t;constructor(i,e,t){super(),this.dialogData=i,this.dialogRef=e,this.sanitizer=t,this.#i=Ft$1(b),this.#e=Ft$1(A),this.#n=Ft$1(an),this.#a=m(Qt$1),this.uploadType=je.Extension,this.importModeValues=j,this.fallbackEditions=["staging","live"],this.extension=it(null),this.isLoadingPreflight=it(false),this.isInstalling=it(false),this.preflightError=it(null),this.editions=it([]),this.showExtensionCatalog=it(false),this.forceInstall=false,this.alreadyInstalled=Mt$1(()=>{let a=this.extension();return !a||!this.selectedEditions().length?false:a.editions?.some(c=>this.selectedEditions().includes(c.edition??"")&&c.isInstalled)??false}),this.hasChanges=Mt$1(()=>{let a=this.extension();return !a||!this.selectedEditions().length?false:a.editions?.some(c=>this.selectedEditions().includes(c.edition??"")&&c.hasFileChanges)??false}),this.selectedEditions=it([]),this.preflightSource=null,this.urlChangeImportMode="",this.ready=false,this.#t=false,this.importForm=this.#n.group({importMode:[this.importModeValues.importOriginal,fe.required],name:[""]}),this.context=m(xl),this.messages=new V(this.context.moduleId),i.title??="Import Extension",i.description??="Select Extension folder from your computer to import.",i.allowedFileTypes??="zip",i.multiple??=true,i.file&&this.runFilePreflight(i.file),this.subscriptions.add(this.#e.settings$.subscribe(a=>{this.settings=a,this.urlChangeImportMode=a.remoteUrl,this.updateRemoteUrl(),this.ready=true;}));}ngOnInit(){this.#o(),this.#e.loadGettingStarted(false),this.importForm.get("importMode")?.valueChanges.subscribe(()=>{this.updateRemoteUrl();}),this.subscriptions.add(this.messages.messages$.pipe(Zt$1(i=>i.action==="specs")).subscribe(()=>{})),this.subscriptions.add(sc(window,"message").pipe(Zt$1(()=>!!this.installerWindow)).subscribe(i=>{let e;try{e=typeof i.data=="string"?JSON.parse(i.data):i.data;}catch(t){return}if(this.showExtensionCatalog()&&e.action==="install"&&e.packages){let t=Object.values(e.packages)[0];if(!t?.url||this.#t)return;this.#t=true,this.handleRemotePreflight(t.url);}}));}get isFileSource(){return this.preflightSource instanceof File}get currentFile(){return this.isFileSource?this.preflightSource:null}updateRemoteUrl(){this.remoteInstallerUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.buildRemoteUrl(this.urlChangeImportMode,{view:"app-extensions",selectOnlyMode:"true",excludeInstalled:"true"}));}buildRemoteUrl(i,e={}){let[t,a]=i.split("?"),c=new URLSearchParams(a||"");for(let I in e)c.set(I,e[I]);return `${t}?${c.toString()}`}#o(){this.dialogRef.keydownEvents().subscribe(i=>{y(i)&&(i.preventDefault(),this.install());});}filesDropped(i){this.runFilePreflight(i[0]);}filesChanged(i){let e=i.target.files[0];this.runFilePreflight(e);}toggleShowExtensionCatalog(){this.showExtensionCatalog.set(!this.showExtensionCatalog());}closeDialog(){this.dialogRef.close(false);}cancelPreflight(){this.extension.set(null),this.preflightSource=null,this.selectedEditions.set([]),this.preflightError.set(null),this.forceInstall=false,this.#t=false;}runFilePreflight(i){this.isLoadingPreflight.set(true),this.#i.installPreflightExtension([i]).pipe(bn(1)).subscribe({next:e=>this.handlePreflightResult(e.extensions[0],i),error:e=>this.handlePreflightError(e)});}handleRemotePreflight(i){this.showExtensionCatalog.set(false),this.isLoadingPreflight.set(true),this.#i.installPreflightExtensionFromUrl(i).pipe(bn(1)).subscribe({next:e=>this.handlePreflightResult(e.extensions[0],i),error:e=>this.handlePreflightError(e)});}handlePreflightResult(i,e){this.isLoadingPreflight.set(false),this.preflightError.set(null),this.extension.set(i),this.preflightSource=e,this.forceInstall=false;let t=i.editions?.length>0?i.editions:this.fallbackEditions.map(a=>({edition:a}));this.editions.set(t),this.selectedEditions.set([this.editions()[0].edition??""]);}handlePreflightError(i){this.isLoadingPreflight.set(false),this.extension.set(null),this.preflightSource=null,this.preflightError.set(i?.message||"Preflight check failed"),this.#t=false;}canInstall(){return !(!this.preflightSource||this.preflightError()||this.isInstalling()||this.isLoadingPreflight()||!this.extension()||this.selectedEditions().length===0)}install(){if(!this.canInstall())return;if(this.hasChanges()&&this.alreadyInstalled()&&!this.forceInstall){this.#a.open('Installation requires force. Please enable "Force Install" and try again.',"OK",{duration:1e4});return}this.isInstalling.set(true);let i=this.forceInstall||!this.hasChanges()&&this.alreadyInstalled(),e,t=this.selectedEditions().length?this.selectedEditions().join(","):void 0;if(this.preflightSource instanceof File)e=this.#i.uploadExtensions(this.preflightSource,t,i);else if(typeof this.preflightSource=="string")e=this.#i.installRemoteExtension(this.preflightSource,t,i);else return;e.pipe(bn(1)).subscribe({next:()=>{this.isInstalling.set(false),this.dialogRef.close(true);},error:a=>{this.isInstalling.set(false),this.preflightError.set(a?.message||"Installation failed"),console.error("Installation error:",a);}});}onEditionToggle(i,e){e?this.selectedEditions().includes(i)||this.selectedEditions.set([...this.selectedEditions(),i]):this.selectedEditions.set(this.selectedEditions().filter(t=>t!==i));}static{this.\u0275fac=function(e){return new(e||n)(ue(qe),ue(V$1),ue(SN))};}static{this.\u0275cmp=jb({type:n,selectors:[["ng-component"]],viewQuery:function(e,t){if(e&1&&_y(qt,5),e&2){let a;e_(a=t_())&&(t.installerWindow=a.first);}},features:[Qm],decls:14,vars:10,consts:[["fileInput",""],["installerWindow",""],[1,"eav-dialog"],[3,"close"],[1,"eav-dialog-content"],["appDragAndDrop","",1,"file-drop-zone"],[1,"preflight-loading"],[1,"preflight-error"],[1,"ext-editions"],[1,"install-options",2,"margin-top","16px"],[1,"installing"],["align","end"],["appDragAndDrop","",1,"file-drop-zone",3,"filesDropped"],["type","file",2,"display","none",3,"change","accept","multiple"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","tippy","Open extension catalog",1,"eav-app-catalog-button","eav-action-button",3,"click"],[1,"eav-app-catalog-iframe",3,"src"],["diameter","40"],["mat-stroked-button","",3,"click"],[3,"expanded"],[1,"unified-preflight-details"],[1,"ext-info"],[1,"info-row"],[1,"label"],[1,"value"],[1,"ext-features"],[3,"disabled"],[3,"href"],[1,"edition-selector"],["color","accent",3,"checked"],["color","accent",3,"change","checked"],["color","primary",3,"ngModelChange","ngModel"],["mat-stroked-button","",3,"click","disabled"],["mat-raised-button","",1,"eav-action-button",3,"click","disabled"]],template:function(e,t){e&1&&(Ks(0,"div",2)(1,"app-dialog-header",3),wy("close",function(){return t.closeDialog()}),M_(2),yd(),Ks(3,"div",4),kT(4,$t,3,2,"div",5),kT(5,Zt,4,0,"div",6),kT(6,Jt,7,1,"div",7),kT(7,te,31,8,"mat-accordion"),kT(8,ne,6,0,"div",8),kT(9,ae,7,1,"div",9),kT(10,oe,8,0,"div",9),kT(11,ce,4,0,"div",10),yd(),Ks(12,"mat-dialog-actions",11),kT(13,re,4,2),yd()()),e&2&&(pC(2),wd(" ",t.dialogData.title," "),pC(2),FT(!t.extension()&&!t.isLoadingPreflight()?4:-1),pC(),FT(t.isLoadingPreflight()?5:-1),pC(),FT(t.preflightError()?6:-1),pC(),FT(t.extension()&&!t.isLoadingPreflight()?7:-1),pC(),FT(t.extension()?.editionsSupported&&t.editions()?.length>1?8:-1),pC(),FT(t.alreadyInstalled()&&t.hasChanges()?9:-1),pC(),FT(t.alreadyInstalled()&&!t.hasChanges()?10:-1),pC(),FT(t.isInstalling()?11:-1),pC(2),FT(t.extension()&&!t.isLoadingPreflight()?13:-1));},dependencies:[Yd,oe$1,ne$1,J,Z,Vt$1,Nt,Tt,ei,Rt,ti,Lt$1,ve,ne$2,Rn,Fn,Jt$1,I,yt,rp,we,te$1,fn,xn,Fe,Ne,un,z,gM],styles:[`.eav-app-catalog-button[_ngcontent-%COMP%]{margin-left:12px}.eav-app-catalog-iframe[_ngcontent-%COMP%]{margin-top:16px;width:100%;height:500px;border:none}.eav-progress[_ngcontent-%COMP%]{position:absolute;inset:0;background:#fffc;display:flex;flex-direction:column;justify-content:center;text-align:center}.eav-progress[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%]{margin:0 auto}.eav-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:48px}.disabled[_ngcontent-%COMP%]{opacity:.25;pointer-events:none}mat-slide-toggle[_ngcontent-%COMP%]{margin-left:5px}
/*# sourceMappingURL=import-extension-WEI5S7H7.css.map */`]});}}return n})();var importExtensionBTLODUFC=/*#__PURE__*/Object.freeze({__proto__:null,ImportExtensionComponent:In});export{In as I,Rt as R,Tt as T,ei as e,importExtensionBTLODUFC as i};//# sourceMappingURL=https://sources.2sxc.org/22.00.00/dist/ng-edit/import-extension-LKrb1XuZ.js.map
