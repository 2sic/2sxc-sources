"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-be445c","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts-_bbc80","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts-_bbc81","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts-_bbc82","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-bb0723","projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-8bd3ae","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts","projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-e1a60e","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-96acc80","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-96acc81","projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-ae176b0","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-1d1f1e","projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-ae176b1"],{4328:(C,d,e)=>{e.d(d,{q:()=>t});var n=e(4172),s=e(6028),o=e(4896),_=e(1332),r=e(3392);let t=(()=>{class u{constructor(l,m,a){this.http=l,this.context=m,this.dnnContext=a}create(l,m){return this.http.post(`app/auto/data/${l}`,m,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(l,m,a){return this.http.post(`app/auto/data/${l}/${m}`,a,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(l,m,a){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(n.ue+"delete"),{params:{contentType:l,id:m.toString(),appId:this.context.appId.toString(),force:a.toString()}})}static#t=this.\u0275fac=function(m){return new(m||u)(o.CoB(_.KK),o.CoB(s.e),o.CoB(r.es))};static#e=this.\u0275prov=o.wxM({token:u,factory:u.\u0275fac})}return u})()},6996:(C,d,e)=>{e.d(d,{y:()=>n});const n={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},4616:(C,d,e)=>{e.d(d,{E:()=>O});var n=e(9244),s=e(7008),o=e(4844),_=e(5876),r=e(604),t=e(4896),u=e(600),v=e(2328),l=e(8200),m=e(5056),a=e(8752);function i(h,x){if(1&h){const I=t.KQA();t.I0R(0,"div",2),t.qCj("click",function(){t.usT(I);const R=t.GaO(2);return t.CGJ(R.openDialog())}),t.wVc(1,"translate"),t.I0R(2,"mat-icon"),t.OEk(3),t.C$Y(),t.I0R(4,"div",3)(5,"div",4),t.OEk(6),t.wVc(7,"translate"),t.C$Y(),t.I0R(8,"div",5),t.OEk(9),t.wVc(10,"translate"),t.C$Y()()()}if(2&h){const I=t.GaO();t.E7m("tippy",t.g7$(1,7,"Features.Tooltip",I.feature)),t.yG2(2),t.uQ9("icon icon-",I.icon,""),t.yG2(1),t.cNF(I.icon),t.yG2(3),t.cNF(t.kDX(7,10,"Features.FeatureNotActivated")),t.yG2(3),t.cNF(t.kDX(10,12,"Features.ClickToFindOutMore"))}}function c(h,x){1&h&&t.yuY(0,i,11,14,"div",1),2&h&&t.C0Y(0,x.show?0:-1)}function g(h,x){1&h&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}function E(h,x){1&h&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}let O=(()=>{class h extends s.C{set asInfo(I){this.asInfo$.next(I)}constructor(I,T,R,A){super(I,T,A,R),this.asInfo$=new o.g(!1),this.viewModel$=(0,_.E)([this.feature$,this.asInfo$,this.show$]).pipe((0,r.k)(([f,M,p])=>({feature:f,icon:M?"info":"warning",show:p})))}static#t=this.\u0275fac=function(T){return new(T||h)(t.GI1(u.qW),t.GI1(t.y8U),t.GI1(n.E),t.GI1(t.kD9))};static#e=this.\u0275cmp=t.In1({type:h,selectors:[["app-feature-text-info"]],inputs:{asInfo:"asInfo"},features:[t.eg9],decls:5,vars:3,consts:[["loading",""],["class","feature-text-info",3,"tippy"],[1,"feature-text-info",3,"tippy","click"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(T,R){if(1&T&&(t.yuY(0,c,1,1),t.wVc(1,"async"),t.yuY(2,g,2,0)(3,E,2,0,"ng-template",null,0,t.gJz)),2&T){let A;t.C0Y(0,(A=t.kDX(1,1,R.viewModel$))?0:2,A)}},dependencies:[v.qL,l.Y,m.a,a.sD],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]})}return h})()},4460:(C,d,e)=>{e.d(d,{y:()=>a});var n=e(5056),s=e(4672),o=e(2328),_=e(988),r=e(8752),t=e(1224),u=e(12),v=e(8512),l=e(3572),m=e(4896);let a=(()=>{class i{static#t=this.\u0275fac=function(E){return new(E||i)};static#e=this.\u0275mod=m.a4G({type:i});static#n=this.\u0275inj=m.s3X({providers:[l.I],imports:[n.MD,s.oJ,o.oB,v.NR,_.q,r.O0.forChild((0,t.C)(u.I))]})}return i})()},3572:(C,d,e)=>{e.d(d,{I:()=>r});var n=e(4896),s=e(1332),o=e(3392);let r=(()=>{class t{constructor(v,l){this.http=v,this.dnnContext=l}getFeatureDetails(v){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:v}})}static#t=this.\u0275fac=function(l){return new(l||t)(n.CoB(s.KK),n.CoB(o.es))};static#e=this.\u0275prov=n.wxM({token:t,factory:t.\u0275fac})}return t})()},7008:(C,d,e)=>{e.d(d,{C:()=>A});var n=e(9244),s=e(600),o=e(5876),_=e(604),r=e(2556),t=e(4896),u=e(4648),v=e(3572),l=e(4672),m=e(2328),a=e(8512),i=e(8200),c=e(5056),g=e(48),E=e(8752);function O(f,M){if(1&f){const p=t.KQA();t.I0R(0,"div",1)(1,"div",2),t.OEk(2,"ID:"),t.C$Y(),t.I0R(3,"div",8)(4,"span",9),t.qCj("click",function(){const y=t.usT(p),B=t.GaO(2);return t.CGJ(B.copyToClipboard(y))}),t.OEk(5),t.C$Y()()()}2&f&&(t.yG2(4),t.E7m("tippy",M),t.yG2(1),t.cNF(M))}function h(f,M){if(1&f){const p=t.KQA();t.I0R(0,"button",10),t.qCj("click",function(){const y=t.usT(p),B=t.GaO(2);return t.CGJ(B.findOutMore(y))}),t.I0R(1,"mat-icon"),t.OEk(2,"open_in_new"),t.C$Y(),t.OEk(3),t.wVc(4,"translate"),t.C$Y()}2&f&&(t.yG2(3),t.oRS(" ",t.kDX(4,1,"Features.FindOutMore")," "))}function x(f,M){if(1&f){const p=t.KQA();t.I0R(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.OEk(3),t.C$Y()(),t.I0R(4,"mat-card-content"),t.wR5(5,"p",0),t.wVc(6,"safeHtml"),t.I0R(7,"div",1)(8,"div",2),t.OEk(9),t.wVc(10,"translate"),t.C$Y(),t.I0R(11,"div",3)(12,"span"),t.OEk(13),t.wVc(14,"translate"),t.C$Y()()(),t.yuY(15,O,6,2,"div",4),t.C$Y(),t.I0R(16,"mat-card-actions",5),t.yuY(17,h,5,3,"button",6),t.I0R(18,"button",7),t.qCj("click",function(){t.usT(p);const P=t.GaO();return t.CGJ(P.closeDialog())}),t.OEk(19),t.wVc(20,"translate"),t.C$Y()()()}if(2&f){let p;t.yG2(3),t.cNF(M.feature.Name),t.yG2(2),t.E7m("innerHtml",t.kDX(6,7,M.feature.Description),t.E3n),t.yG2(4),t.oRS("",t.kDX(10,9,"Features.Status"),":"),t.yG2(4),t.cNF(t.kDX(14,11,M.feature.IsEnabled?"Features.Active":"Features.NotActive")),t.yG2(2),t.C0Y(15,(p=M.feature.NameId)?15:-1,p),t.yG2(2),t.C0Y(17,(p=M.feature.Link)?17:-1,p),t.yG2(2),t.oRS(" ",t.kDX(20,13,"Features.Close")," ")}}let I=(()=>{class f{constructor(p,D,P,y){this.dialogData=p,this.dialogRef=D,this.snackBar=P,this.featureDetailService=y}ngOnInit(){this.viewModel$=(0,o.E)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,_.k)(([p])=>({feature:p})))}copyToClipboard(p){(0,r.y)(p),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(p){window.open(p,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(D){return new(D||f)(t.GI1(s.sR),t.GI1(s.yI),t.GI1(u.yS),t.GI1(v.I))};static#e=this.\u0275cmp=t.In1({type:f,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["class","eav-info-row"],["align","end"],["mat-raised-button","","color","accent","class","eav-card-action-button"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"]],template:function(D,P){if(1&D&&(t.yuY(0,x,21,15,"mat-card"),t.wVc(1,"async")),2&D){let y;t.C0Y(0,(y=t.kDX(1,1,P.viewModel$))?0:-1,y)}},dependencies:[l.Gw,m.qL,a.SM,a.W0,a.WK,a.Uc,a.gp,i.Y,c.a,g.K,E.sD]})}return f})();var T=e(4844),R=e(9432);let A=(()=>{class f{set featureNameId(p){this.featureNameId$.next(p)}set showIf(p){this.showIf$.next(1==p)}constructor(p,D,P,y){this.dialog=p,this.viewContainerRef=D,this.changeDetectorRef=P,this.featuresService=y,this.featureNameId$=new T.g(null),this.showIf$=new T.g(!1),this.feature$=this.featureNameId$.pipe((0,R.G)(B=>this.featuresService.get$(B))),this.show$=(0,o.E)([this.feature$,this.showIf$]).pipe((0,_.k)(([B,F])=>F==(B?.IsEnabled??!1)))}openDialog(){f.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(p,D,P,y){p.open(I,{autoFocus:!1,data:D,viewContainerRef:P,width:"400px"}),y.markForCheck()}static#t=this.\u0275fac=function(D){return new(D||f)(t.GI1(s.qW),t.GI1(t.y8U),t.GI1(t.kD9),t.GI1(n.E))};static#e=this.\u0275dir=t.Sc5({type:f,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return f})()},6232:(C,d,e)=>{e.d(d,{Y:()=>l});var n=e(624),s=e(6028),o=e(316),_=e(2376),r=e(4896),t=e(600),u=e(5204);let l=(()=>{class m extends o.o{constructor(i,c,g,E,O,h){super(new _.W("DialogEntryComponent",!1)),this.dialog=i,this.viewContainerRef=c,this.router=g,this.route=E,this.context=O,this.changeDetectorRef=h;const x=this.router.getCurrentNavigation();this.dialogData=x?.extras?.state||{}}ngOnInit(){const i=this.route.snapshot.data.dialog;if(null==i)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,n.y)("Open dialog:",i.name,"Context id:",this.context.id,"Context:",this.context),i.getComponent().then(c=>{this.dialog._dialogAnimatingOpen&&this.dialog._lastDialogRef?this.dialog._lastDialogRef.afterOpened().subscribe(()=>{this.openDialogComponent(i,c)}):this.openDialogComponent(i,c)})}ngOnDestroy(){this.dialogRef.close()}openDialogComponent(i,c){this.log.add(`Open dialog(initContext: ${i.initContext})`,i.name,"Context id:",this.context.log.svcId,"Context:",this.context),i.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(c,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel",`dialog-panel-${i.panelSize}`,i.showScrollbar?"show-scrollbar":"no-scrollbar",...i.panelClass?i.panelClass:[]],position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(g=>{(0,n.y)("Dialog was closed:",i.name,"Data:",g);const E=g;if(null==E?.navigateUrl)if(this.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch{}else this.router.navigate(["./"],this.route.snapshot.url.length>0?{relativeTo:this.route.parent,state:g}:{relativeTo:this.route.parent.parent,state:g});else this.router.navigate([E.navigateUrl])}),this.changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(c){return new(c||m)(r.GI1(t.qW),r.GI1(r.y8U),r.GI1(u.E5),r.GI1(u.gV),r.GI1(s.e),r.GI1(r.kD9))};static#e=this.\u0275cmp=r.In1({type:m,selectors:[["app-dialog-entry"]],features:[r.eg9],decls:0,vars:0,template:function(c,g){}})}return m})()},9084:(C,d,e)=>{e.d(d,{o:()=>a});var n=e(4896),s=e(5056),o=e(244);function _(i,c){1&i&&n.C_f(0)}function r(i,c){if(1&i&&(n.I0R(0,"mat-hint"),n.yuY(1,_,1,0,"ng-container",2),n.C$Y()),2&i){n.GaO();const g=n.Gew(4);n.yG2(1),n.E7m("ngTemplateOutlet",g)}}function t(i,c){1&i&&n.C_f(0)}function u(i,c){if(1&i&&(n.I0R(0,"mat-error"),n.yuY(1,t,1,0,"ng-container",2),n.C$Y()),2&i){n.GaO();const g=n.Gew(4);n.yG2(1),n.E7m("ngTemplateOutlet",g)}}function v(i,c){1&i&&n._Xx(0)}const l=i=>({"hint-box__short":i}),m=["*"];let a=(()=>{class i{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(E){return new(E||i)};static#e=this.\u0275cmp=n.In1({type:i,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:m,decls:5,vars:4,consts:[[1,"hint-box",3,"ngClass","click"],["content",""],[4,"ngTemplateOutlet"]],template:function(E,O){if(1&E&&(n.kPM(),n.I0R(0,"div",0),n.qCj("click",function(){return O.toggleIsShort()}),n.yuY(1,r,2,1)(2,u,2,1),n.C$Y(),n.yuY(3,v,1,0,"ng-template",null,1,n.gJz)),2&E){let h;n.E7m("ngClass",n.S45(2,l,O.isShort)),n.yG2(1),n.C0Y(1,!1===(h=O.isError)?1:!0===h?2:-1)}},dependencies:[s.QF,s.XV,o.MX,o.wJ],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return i})()},504:(C,d,e)=>{e.d(d,{c:()=>s});var n=e(4896);let s=(()=>{class o{onClick(r){r.stopPropagation()}static#t=this.\u0275fac=function(t){return new(t||o)};static#e=this.\u0275dir=n.Sc5({type:o,selectors:[["","appClickStopPropagation",""]],hostBindings:function(t,u){1&t&&n.qCj("click",function(l){return u.onClick(l)})}})}return o})()},760:(C,d,e)=>{e.d(d,{q:()=>o});var n=e(5924),s=e(4896);let o=(()=>{class _{constructor(t){this.elementRef=t}ngOnChanges(t){if(null==this.tooltip&&(this.tooltip=(0,n.cp)(this.elementRef.nativeElement,{animation:"scale-subtle",arrow:!!this.tippyArrow,duration:[100,50],placement:"bottom",theme:"2sxc",allowHTML:!!this.tippyAllowHtml})),null!=t.tippy&&this.tooltip.setContent(this.tippy),null!=t.tippyDisabled&&(this.tippyDisabled?this.tooltip.disable():this.tooltip.enable()),null!=t.tippyPlacement&&this.tooltip.setProps({placement:this.tippyPlacement}),null!=t.tippyShowDelay){const u="number"==typeof this.tippyShowDelay?this.tippyShowDelay:parseInt(this.tippyShowDelay,10);this.tooltip.setProps({delay:[u,null]})}}ngOnDestroy(){this.tooltip?.destroy()}static#t=this.\u0275fac=function(u){return new(u||_)(s.GI1(s.GMv))};static#e=this.\u0275dir=s.Sc5({type:_,selectors:[["","tippy",""]],inputs:{tippy:"tippy",tippyDisabled:"tippyDisabled",tippyPlacement:"tippyPlacement",tippyShowDelay:"tippyShowDelay",tippyAllowHtml:"tippyAllowHtml",tippyArrow:"tippyArrow"},standalone:!0,features:[s.SYr]})}return _})()},2556:(C,d,e)=>{function n(s){const o=document.createElement("textarea");o.value=s,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);const _=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select(),document.execCommand("copy"),document.body.removeChild(o),_&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(_))}e.d(d,{y:()=>n})},48:(C,d,e)=>{e.d(d,{K:()=>o});var n=e(4896),s=e(168);let o=(()=>{class _{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustHtml(t)}static#t=this.\u0275fac=function(u){return new(u||_)(n.GI1(s.mI,16))};static#e=this.\u0275pipe=n.UTH({name:"safeHtml",type:_,pure:!0})}return _})()},1224:(C,d,e)=>{e.d(d,{C:()=>o});var n=e(1332),s=e(8752);function o(_){return{loader:{provide:s._E,useFactory:_,deps:[n.KK]},defaultLanguage:"en",isolate:!0}}},12:(C,d,e)=>{e.d(d,{I:()=>s});var n=e(8228);function s(o){return new n.A(o,"./i18n/",`.js?${window.sxcVersion}`)}},8228:(C,d,e)=>{e.d(d,{A:()=>o});var n=e(1672),s=e(8916);class o{constructor(r,t,u){this.http=r,this.prefix=t,this.suffix=u}getTranslation(r){return this.http.get(`${this.prefix}${r}${this.suffix}`).pipe((0,n.a)(t=>(console.warn(`Translation: Failed to get language '${r}' from ${this.prefix}`,t),(0,s.of)({}))))}}},32:(C,d,e)=>{e.d(d,{S:()=>u,g:()=>v});var n=e(4896),s=e(6176),o=e(2664),_=e(5056);let r=0;const t="mat-badge-content";let u=(()=>{class l{get color(){return this._color}set color(a){this._setColor(a),this._color=a}get content(){return this._content}set content(a){this._updateRenderedContent(a)}get description(){return this._description}set description(a){this._updateDescription(a)}constructor(a,i,c,g,E){this._ngZone=a,this._elementRef=i,this._ariaDescriber=c,this._renderer=g,this._animationMode=E,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=r++,this._isInitialized=!1,this._interactivityChecker=(0,n.uUt)(o.OE),this._document=(0,n.uUt)(_.Ud)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const a=this._renderer.createElement("span"),i="mat-badge-active";return a.setAttribute("id",`mat-badge-content-${this._id}`),a.setAttribute("aria-hidden","true"),a.classList.add(t),"NoopAnimations"===this._animationMode&&a.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(a),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{a.classList.add(i)})}):a.classList.add(i),a}_updateRenderedContent(a){const i=`${a??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(a){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!a||this._isHostInteractive())&&this._removeInlineDescription(),this._description=a,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,a):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(a){const i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),a&&i.add(`mat-badge-${a}`)}_clearExistingBadges(){const a=this._elementRef.nativeElement.querySelectorAll(`:scope > .${t}`);for(const i of Array.from(a))i!==this._badgeElement&&i.remove()}static#t=this.\u0275fac=function(i){return new(i||l)(n.GI1(n.WW2),n.GI1(n.GMv),n.GI1(o.o9),n.GI1(n.q87),n.GI1(n.qwP,8))};static#e=this.\u0275dir=n.Sc5({type:l,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,c){2&i&&n.eAK("mat-badge-overlap",c.overlap)("mat-badge-above",c.isAbove())("mat-badge-below",!c.isAbove())("mat-badge-before",!c.isAfter())("mat-badge-after",c.isAfter())("mat-badge-small","small"===c.size)("mat-badge-medium","medium"===c.size)("mat-badge-large","large"===c.size)("mat-badge-hidden",c.hidden||!c.content)("mat-badge-disabled",c.disabled)},inputs:{color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap",n.cZD],disabled:["matBadgeDisabled","disabled",n.cZD],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden",n.cZD]},features:[n.QJr]})}return l})(),v=(()=>{class l{static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275mod=n.a4G({type:l});static#n=this.\u0275inj=n.s3X({imports:[o.Ux,s.AN,s.AN]})}return l})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.07.00/dist/ng-edit/projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-be445c.f2f438b00a63efa2.js.map