"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-fd552b1","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-bb0723","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts"],{4328:(P,m,e)=>{e.d(m,{q:()=>t});var n=e(4172),l=e(6028),a=e(4896),p=e(1332),f=e(3392);let t=(()=>{class h{constructor(s,u,i){this.http=s,this.context=u,this.dnnContext=i}create(s,u){return this.http.post(`app/auto/data/${s}`,u,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(s,u,i){return this.http.post(`app/auto/data/${s}/${u}`,i,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(s,u,i){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(n.ue+"delete"),{params:{contentType:s,id:u.toString(),appId:this.context.appId.toString(),force:i.toString()}})}static#t=this.\u0275fac=function(u){return new(u||h)(a.CoB(p.KK),a.CoB(l.e),a.CoB(f.es))};static#e=this.\u0275prov=a.wxM({token:h,factory:h.\u0275fac})}return h})()},6996:(P,m,e)=>{e.d(m,{y:()=>n});const n={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},4616:(P,m,e)=>{e.d(m,{E:()=>T});var n=e(9244),l=e(7008),a=e(4844),p=e(5876),f=e(604),t=e(4896),h=e(600),g=e(2328),s=e(8200),u=e(5056),i=e(8752);function o(d,B){if(1&d){const E=t.KQA();t.I0R(0,"div",2),t.qCj("click",function(){t.usT(E);const x=t.GaO(2);return t.CGJ(x.openDialog())}),t.wVc(1,"translate"),t.I0R(2,"mat-icon"),t.OEk(3),t.C$Y(),t.I0R(4,"div",3)(5,"div",4),t.OEk(6),t.wVc(7,"translate"),t.C$Y(),t.I0R(8,"div",5),t.OEk(9),t.wVc(10,"translate"),t.C$Y()()()}if(2&d){const E=t.GaO();t.E7m("tippy",t.g7$(1,7,"Features.Tooltip",E.feature)),t.yG2(2),t.uQ9("icon icon-",E.icon,""),t.yG2(1),t.cNF(E.icon),t.yG2(3),t.cNF(t.kDX(7,10,"Features.FeatureNotActivated")),t.yG2(3),t.cNF(t.kDX(10,12,"Features.ClickToFindOutMore"))}}function c(d,B){1&d&&t.yuY(0,o,11,14,"div",1),2&d&&t.C0Y(0,B.show?0:-1)}function v(d,B){1&d&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}function I(d,B){1&d&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}let T=(()=>{class d extends l.C{set asInfo(E){this.asInfo$.next(E)}constructor(E,y,x,F){super(E,y,F,x),this.asInfo$=new a.g(!1),this.viewModel$=(0,p.E)([this.feature$,this.asInfo$,this.show$]).pipe((0,f.k)(([_,O,r])=>({feature:_,icon:O?"info":"warning",show:r})))}static#t=this.\u0275fac=function(y){return new(y||d)(t.GI1(h.qW),t.GI1(t.y8U),t.GI1(n.E),t.GI1(t.kD9))};static#e=this.\u0275cmp=t.In1({type:d,selectors:[["app-feature-text-info"]],inputs:{asInfo:"asInfo"},features:[t.eg9],decls:5,vars:3,consts:[["loading",""],["class","feature-text-info",3,"tippy"],[1,"feature-text-info",3,"tippy","click"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(y,x){if(1&y&&(t.yuY(0,c,1,1),t.wVc(1,"async"),t.yuY(2,v,2,0)(3,I,2,0,"ng-template",null,0,t.gJz)),2&y){let F;t.C0Y(0,(F=t.kDX(1,1,x.viewModel$))?0:2,F)}},dependencies:[g.qL,s.Y,u.a,i.sD],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]})}return d})()},4460:(P,m,e)=>{e.d(m,{y:()=>i});var n=e(5056),l=e(4672),a=e(2328),p=e(988),f=e(8752),t=e(1224),h=e(12),g=e(8512),s=e(3572),u=e(4896);let i=(()=>{class o{static#t=this.\u0275fac=function(I){return new(I||o)};static#e=this.\u0275mod=u.a4G({type:o});static#n=this.\u0275inj=u.s3X({providers:[s.I],imports:[n.MD,l.oJ,a.oB,g.NR,p.q,f.O0.forChild((0,t.C)(h.I))]})}return o})()},3572:(P,m,e)=>{e.d(m,{I:()=>f});var n=e(4896),l=e(1332),a=e(3392);let f=(()=>{class t{constructor(g,s){this.http=g,this.dnnContext=s}getFeatureDetails(g){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:g}})}static#t=this.\u0275fac=function(s){return new(s||t)(n.CoB(l.KK),n.CoB(a.es))};static#e=this.\u0275prov=n.wxM({token:t,factory:t.\u0275fac})}return t})()},7008:(P,m,e)=>{e.d(m,{C:()=>F});var n=e(9244),l=e(600),a=e(5876),p=e(604),f=e(2556),t=e(4896),h=e(4648),g=e(3572),s=e(4672),u=e(2328),i=e(8512),o=e(8200),c=e(5056),v=e(48),I=e(8752);function T(_,O){if(1&_){const r=t.KQA();t.I0R(0,"div",1)(1,"div",2),t.OEk(2,"ID:"),t.C$Y(),t.I0R(3,"div",8)(4,"span",9),t.qCj("click",function(){const D=t.usT(r),R=t.GaO(2);return t.CGJ(R.copyToClipboard(D))}),t.OEk(5),t.C$Y()()()}2&_&&(t.yG2(4),t.E7m("tippy",O),t.yG2(1),t.cNF(O))}function d(_,O){if(1&_){const r=t.KQA();t.I0R(0,"button",10),t.qCj("click",function(){const D=t.usT(r),R=t.GaO(2);return t.CGJ(R.findOutMore(D))}),t.I0R(1,"mat-icon"),t.OEk(2,"open_in_new"),t.C$Y(),t.OEk(3),t.wVc(4,"translate"),t.C$Y()}2&_&&(t.yG2(3),t.oRS(" ",t.kDX(4,1,"Features.FindOutMore")," "))}function B(_,O){if(1&_){const r=t.KQA();t.I0R(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.OEk(3),t.C$Y()(),t.I0R(4,"mat-card-content"),t.wR5(5,"p",0),t.wVc(6,"safeHtml"),t.I0R(7,"div",1)(8,"div",2),t.OEk(9),t.wVc(10,"translate"),t.C$Y(),t.I0R(11,"div",3)(12,"span"),t.OEk(13),t.wVc(14,"translate"),t.C$Y()()(),t.yuY(15,T,6,2,"div",4),t.C$Y(),t.I0R(16,"mat-card-actions",5),t.yuY(17,d,5,3,"button",6),t.I0R(18,"button",7),t.qCj("click",function(){t.usT(r);const M=t.GaO();return t.CGJ(M.closeDialog())}),t.OEk(19),t.wVc(20,"translate"),t.C$Y()()()}if(2&_){let r;t.yG2(3),t.cNF(O.feature.Name),t.yG2(2),t.E7m("innerHtml",t.kDX(6,7,O.feature.Description),t.E3n),t.yG2(4),t.oRS("",t.kDX(10,9,"Features.Status"),":"),t.yG2(4),t.cNF(t.kDX(14,11,O.feature.IsEnabled?"Features.Active":"Features.NotActive")),t.yG2(2),t.C0Y(15,(r=O.feature.NameId)?15:-1,r),t.yG2(2),t.C0Y(17,(r=O.feature.Link)?17:-1,r),t.yG2(2),t.oRS(" ",t.kDX(20,13,"Features.Close")," ")}}let E=(()=>{class _{constructor(r,C,M,D){this.dialogData=r,this.dialogRef=C,this.snackBar=M,this.featureDetailService=D}ngOnInit(){this.viewModel$=(0,a.E)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,p.k)(([r])=>({feature:r})))}copyToClipboard(r){(0,f.y)(r),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(r){window.open(r,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(C){return new(C||_)(t.GI1(l.sR),t.GI1(l.yI),t.GI1(h.yS),t.GI1(g.I))};static#e=this.\u0275cmp=t.In1({type:_,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["class","eav-info-row"],["align","end"],["mat-raised-button","","color","accent","class","eav-card-action-button"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"]],template:function(C,M){if(1&C&&(t.yuY(0,B,21,15,"mat-card"),t.wVc(1,"async")),2&C){let D;t.C0Y(0,(D=t.kDX(1,1,M.viewModel$))?0:-1,D)}},dependencies:[s.Gw,u.qL,i.SM,i.W0,i.WK,i.Uc,i.gp,o.Y,c.a,v.K,I.sD]})}return _})();var y=e(4844),x=e(9432);let F=(()=>{class _{set featureNameId(r){this.featureNameId$.next(r)}set showIf(r){this.showIf$.next(1==r)}constructor(r,C,M,D){this.dialog=r,this.viewContainerRef=C,this.changeDetectorRef=M,this.featuresService=D,this.featureNameId$=new y.g(null),this.showIf$=new y.g(!1),this.feature$=this.featureNameId$.pipe((0,x.G)(R=>this.featuresService.get$(R))),this.show$=(0,a.E)([this.feature$,this.showIf$]).pipe((0,p.k)(([R,A])=>A==(R?.IsEnabled??!1)))}openDialog(){_.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(r,C,M,D){r.open(E,{autoFocus:!1,data:C,viewContainerRef:M,width:"400px"}),D.markForCheck()}static#t=this.\u0275fac=function(C){return new(C||_)(t.GI1(l.qW),t.GI1(t.y8U),t.GI1(t.kD9),t.GI1(n.E))};static#e=this.\u0275dir=t.Sc5({type:_,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return _})()},9084:(P,m,e)=>{e.d(m,{o:()=>i});var n=e(4896),l=e(5056),a=e(244);function p(o,c){1&o&&n.C_f(0)}function f(o,c){if(1&o&&(n.I0R(0,"mat-hint"),n.yuY(1,p,1,0,"ng-container",2),n.C$Y()),2&o){n.GaO();const v=n.Gew(4);n.yG2(1),n.E7m("ngTemplateOutlet",v)}}function t(o,c){1&o&&n.C_f(0)}function h(o,c){if(1&o&&(n.I0R(0,"mat-error"),n.yuY(1,t,1,0,"ng-container",2),n.C$Y()),2&o){n.GaO();const v=n.Gew(4);n.yG2(1),n.E7m("ngTemplateOutlet",v)}}function g(o,c){1&o&&n._Xx(0)}const s=o=>({"hint-box__short":o}),u=["*"];let i=(()=>{class o{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(I){return new(I||o)};static#e=this.\u0275cmp=n.In1({type:o,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:u,decls:5,vars:4,consts:[[1,"hint-box",3,"ngClass","click"],["content",""],[4,"ngTemplateOutlet"]],template:function(I,T){if(1&I&&(n.kPM(),n.I0R(0,"div",0),n.qCj("click",function(){return T.toggleIsShort()}),n.yuY(1,f,2,1)(2,h,2,1),n.C$Y(),n.yuY(3,g,1,0,"ng-template",null,1,n.gJz)),2&I){let d;n.E7m("ngClass",n.S45(2,s,T.isShort)),n.yG2(1),n.C0Y(1,!1===(d=T.isError)?1:!0===d?2:-1)}},dependencies:[l.QF,l.XV,a.MX,a.wJ],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return o})()},504:(P,m,e)=>{e.d(m,{c:()=>l});var n=e(4896);let l=(()=>{class a{onClick(f){f.stopPropagation()}static#t=this.\u0275fac=function(t){return new(t||a)};static#e=this.\u0275dir=n.Sc5({type:a,selectors:[["","appClickStopPropagation",""]],hostBindings:function(t,h){1&t&&n.qCj("click",function(s){return h.onClick(s)})}})}return a})()},2556:(P,m,e)=>{function n(l){const a=document.createElement("textarea");a.value=l,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);const p=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),p&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(p))}e.d(m,{y:()=>n})},32:(P,m,e)=>{e.d(m,{S:()=>h,g:()=>g});var n=e(4896),l=e(6176),a=e(2664),p=e(5056);let f=0;const t="mat-badge-content";let h=(()=>{class s{get color(){return this._color}set color(i){this._setColor(i),this._color=i}get content(){return this._content}set content(i){this._updateRenderedContent(i)}get description(){return this._description}set description(i){this._updateDescription(i)}constructor(i,o,c,v,I){this._ngZone=i,this._elementRef=o,this._ariaDescriber=c,this._renderer=v,this._animationMode=I,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=f++,this._isInitialized=!1,this._interactivityChecker=(0,n.uUt)(a.OE),this._document=(0,n.uUt)(p.Ud)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const i=this._renderer.createElement("span"),o="mat-badge-active";return i.setAttribute("id",`mat-badge-content-${this._id}`),i.setAttribute("aria-hidden","true"),i.classList.add(t),"NoopAnimations"===this._animationMode&&i.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(i),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{i.classList.add(o)})}):i.classList.add(o),i}_updateRenderedContent(i){const o=`${i??""}`.trim();this._isInitialized&&o&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=o),this._content=o}_updateDescription(i){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!i||this._isHostInteractive())&&this._removeInlineDescription(),this._description=i,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,i):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(i){const o=this._elementRef.nativeElement.classList;o.remove(`mat-badge-${this._color}`),i&&o.add(`mat-badge-${i}`)}_clearExistingBadges(){const i=this._elementRef.nativeElement.querySelectorAll(`:scope > .${t}`);for(const o of Array.from(i))o!==this._badgeElement&&o.remove()}static#t=this.\u0275fac=function(o){return new(o||s)(n.GI1(n.WW2),n.GI1(n.GMv),n.GI1(a.o9),n.GI1(n.q87),n.GI1(n.qwP,8))};static#e=this.\u0275dir=n.Sc5({type:s,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(o,c){2&o&&n.eAK("mat-badge-overlap",c.overlap)("mat-badge-above",c.isAbove())("mat-badge-below",!c.isAbove())("mat-badge-before",!c.isAfter())("mat-badge-after",c.isAfter())("mat-badge-small","small"===c.size)("mat-badge-medium","medium"===c.size)("mat-badge-large","large"===c.size)("mat-badge-hidden",c.hidden||!c.content)("mat-badge-disabled",c.disabled)},inputs:{color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap",n.cZD],disabled:["matBadgeDisabled","disabled",n.cZD],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden",n.cZD]},features:[n.QJr]})}return s})(),g=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=n.a4G({type:s});static#n=this.\u0275inj=n.s3X({imports:[a.Ux,l.AN,l.AN]})}return s})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.06.02/dist/ng-edit/projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-fd552b1.ca8232b5d24985eb.js.map