"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-41d340","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts","projects_eav-ui_src_app_features_features_module_ts-node_modules_angular_material_fesm2022_ba-6782aa","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-9a0b5b","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-86af18"],{597:(p,d,t)=>{t.d(d,{S:()=>m});var e=t(6575),s=t(895),a=t(6515),_=t(7138),l=t(1916),r=t(3739),c=t(5020),h=t(8497),g=t(8737),f=t(1699);let m=(()=>{var o;class u{}return(o=u).\u0275fac=function(i){return new(i||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({providers:[g.f],imports:[e.ez,s.ot,a.Ps,h.QW,_.q,l.aw.forChild((0,r.f)(c.W))]}),u})()},8737:(p,d,t)=>{t.d(d,{f:()=>l});var e=t(1699),s=t(4860),a=t(6232);let l=(()=>{var r;class c{constructor(g,f){this.http=g,this.dnnContext=f}getFeatureDetails(g){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:g}})}}return(r=c).\u0275fac=function(g){return new(g||r)(e.LFG(s.eN),e.LFG(a._y))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),c})()},9851:(p,d,t)=>{t.d(d,{Y:()=>m});var e=t(1699),s=t(6575),a=t(1268);function _(o,u){1&o&&e.GkF(0)}function l(o,u){if(1&o&&(e.TgZ(0,"mat-hint"),e.YNc(1,_,1,0,"ng-container",3),e.qZA()),2&o){e.oxw();const n=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",n)}}function r(o,u){1&o&&e.GkF(0)}function c(o,u){if(1&o&&(e.TgZ(0,"mat-error"),e.YNc(1,r,1,0,"ng-container",3),e.qZA()),2&o){e.oxw();const n=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",n)}}function h(o,u){1&o&&e.Hsn(0)}const g=function(o){return{"hint-box__short":o}},f=["*"];let m=(()=>{var o;class u{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}}return(o=u).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:f,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(i,E){1&i&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(){return E.toggleIsShort()}),e.YNc(1,l,2,1,"mat-hint",1),e.YNc(2,c,2,1,"mat-error",1),e.qZA(),e.YNc(3,h,1,0,"ng-template",null,2,e.W1O)),2&i&&(e.Q6J("ngClass",e.VKq(4,g,E.isShort))("ngSwitch",E.isError),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0))},dependencies:[s.mk,s.tP,s.RF,s.n9,a.bx,a.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),u})()},131:(p,d,t)=>{t.d(d,{E:()=>s});var e=t(1699);let s=(()=>{var a;class _{onClick(r){r.stopPropagation()}}return(a=_).\u0275fac=function(r){return new(r||a)},a.\u0275dir=e.lG2({type:a,selectors:[["","appClickStopPropagation",""]],hostBindings:function(r,c){1&r&&e.NdJ("click",function(g){return c.onClick(g)})}}),_})()},4472:(p,d,t)=>{function e(s){const a=document.createElement("textarea");a.value=s,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);const _=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),_&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(_))}t.d(d,{v:()=>e})},6537:(p,d,t)=>{t.d(d,{z:()=>a});var e=t(1699),s=t(6480);let a=(()=>{var _;class l{constructor(c){this.sanitizer=c}transform(c){return this.sanitizer.bypassSecurityTrustHtml(c)}}return(_=l).\u0275fac=function(c){return new(c||_)(e.Y36(s.H7,16))},_.\u0275pipe=e.Yjl({name:"safeHtml",type:_,pure:!0}),l})()},3739:(p,d,t)=>{t.d(d,{f:()=>a});var e=t(4860),s=t(1916);function a(_){return{loader:{provide:s.Zw,useFactory:_,deps:[e.eN]},defaultLanguage:"en",isolate:!0}}},5020:(p,d,t)=>{t.d(d,{W:()=>s});var e=t(8206);function s(a){return new e.M(a,"./i18n/",`.js?${window.sxcVersion}`)}},8206:(p,d,t)=>{t.d(d,{M:()=>a});var e=t(2389),s=t(4980);class a{constructor(l,r,c){this.http=l,this.prefix=r,this.suffix=c}getTranslation(l){return this.http.get(`${this.prefix}${l}${this.suffix}`).pipe((0,e.K)(r=>(console.warn(`Translation: Failed to get language '${l}' from ${this.prefix}`,r),(0,s.of)({}))))}}},5392:(p,d,t)=>{t.d(d,{g:()=>f,k:()=>g});var e=t(1699),s=t(257),a=t(3170),_=t(5998),l=t(6575);let r=0;const c=(0,s.Id)(class{}),h="mat-badge-content";let g=(()=>{var m;class o extends c{get color(){return this._color}set color(n){this._setColor(n),this._color=n}get overlap(){return this._overlap}set overlap(n){this._overlap=(0,_.Ig)(n)}get content(){return this._content}set content(n){this._updateRenderedContent(n)}get description(){return this._description}set description(n){this._updateDescription(n)}get hidden(){return this._hidden}set hidden(n){this._hidden=(0,_.Ig)(n)}constructor(n,i,E,v,D){super(),this._ngZone=n,this._elementRef=i,this._ariaDescriber=E,this._renderer=v,this._animationMode=D,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=r++,this._isInitialized=!1,this._interactivityChecker=(0,e.f3M)(a.ic),this._document=(0,e.f3M)(l.K0)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const n=this._renderer.createElement("span"),i="mat-badge-active";return n.setAttribute("id",`mat-badge-content-${this._id}`),n.setAttribute("aria-hidden","true"),n.classList.add(h),"NoopAnimations"===this._animationMode&&n.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(n),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{n.classList.add(i)})}):n.classList.add(i),n}_updateRenderedContent(n){const i=`${n??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(n){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!n||this._isHostInteractive())&&this._removeInlineDescription(),this._description=n,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,n):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(n){const i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),n&&i.add(`mat-badge-${n}`)}_clearExistingBadges(){const n=this._elementRef.nativeElement.querySelectorAll(`:scope > .${h}`);for(const i of Array.from(n))i!==this._badgeElement&&i.remove()}}return(m=o).\u0275fac=function(n){return new(n||m)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(a.$s),e.Y36(e.Qsj),e.Y36(e.QbO,8))},m.\u0275dir=e.lG2({type:m,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(n,i){2&n&&e.ekj("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small","small"===i.size)("mat-badge-medium","medium"===i.size)("mat-badge-large","large"===i.size)("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[e.qOj]}),o})(),f=(()=>{var m;class o{}return(m=o).\u0275fac=function(n){return new(n||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[a.rt,s.BQ,s.BQ]}),o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.08.00/dist/ng-edit/projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-41d340.52ba56192521e310.js.map