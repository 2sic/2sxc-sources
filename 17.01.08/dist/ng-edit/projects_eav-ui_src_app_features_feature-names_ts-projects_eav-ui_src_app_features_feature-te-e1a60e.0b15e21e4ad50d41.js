"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-e1a60e"],{6996:(M,c,e)=>{e.d(c,{y:()=>n});const n={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},4616:(M,c,e)=>{e.d(c,{E:()=>A});var n=e(7008),_=e(4844),d=e(5876),g=e(604),t=e(4896),l=e(600),I=e(9244),p=e(2328),r=e(8200),D=e(5056),i=e(8752);function o(u,B){if(1&u){const h=t.KQA();t.I0R(0,"div",2),t.qCj("click",function(){t.usT(h);const P=t.GaO(2);return t.CGJ(P.openDialog())}),t.wVc(1,"translate"),t.I0R(2,"mat-icon"),t.OEk(3),t.C$Y(),t.I0R(4,"div",3)(5,"div",4),t.OEk(6),t.wVc(7,"translate"),t.C$Y(),t.I0R(8,"div",5),t.OEk(9),t.wVc(10,"translate"),t.C$Y()()()}if(2&u){const h=t.GaO();t.E7m("tippy",t.g7$(1,7,"Features.Tooltip",h.feature)),t.yG2(2),t.uQ9("icon icon-",h.icon,""),t.yG2(1),t.cNF(h.icon),t.yG2(3),t.cNF(t.kDX(7,10,"Features.FeatureNotActivated")),t.yG2(3),t.cNF(t.kDX(10,12,"Features.ClickToFindOutMore"))}}function m(u,B){1&u&&t.yuY(0,o,11,14,"div",1),2&u&&t.C0Y(0,B.show?0:-1)}function R(u,B){1&u&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}function y(u,B){1&u&&(t.I0R(0,"div"),t.OEk(1,"loading..."),t.C$Y())}let A=(()=>{class u extends n.C{set asInfo(h){this.asInfo$.next(h)}constructor(h,O,P,x){super(h,O,x,P),this.asInfo$=new _.g(!1),this.viewModel$=(0,d.E)([this.feature$,this.asInfo$,this.show$]).pipe((0,g.k)(([s,v,a])=>({feature:s,icon:v?"info":"warning",show:a})))}static#t=this.\u0275fac=function(O){return new(O||u)(t.GI1(l.qW),t.GI1(t.y8U),t.GI1(I.E),t.GI1(t.kD9))};static#e=this.\u0275cmp=t.In1({type:u,selectors:[["app-feature-text-info"]],inputs:{asInfo:"asInfo"},features:[t.eg9],decls:5,vars:3,consts:[["loading",""],["class","feature-text-info",3,"tippy"],[1,"feature-text-info",3,"tippy","click"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(O,P){if(1&O&&(t.yuY(0,m,1,1),t.wVc(1,"async"),t.yuY(2,R,2,0)(3,y,2,0,"ng-template",null,0,t.gJz)),2&O){let x;t.C0Y(0,(x=t.kDX(1,1,P.viewModel$))?0:2,x)}},dependencies:[p.qL,r.Y,D.a,i.sD],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]})}return u})()},4460:(M,c,e)=>{e.d(c,{y:()=>i});var n=e(5056),_=e(4672),d=e(2328),g=e(988),t=e(8752),l=e(1224),I=e(12),p=e(8512),r=e(3572),D=e(4896);let i=(()=>{class o{static#t=this.\u0275fac=function(y){return new(y||o)};static#e=this.\u0275mod=D.a4G({type:o});static#n=this.\u0275inj=D.s3X({providers:[r.I],imports:[n.MD,_.oJ,d.oB,p.NR,g.q,t.O0.forChild((0,l.C)(I.I))]})}return o})()},3572:(M,c,e)=>{e.d(c,{I:()=>t});var n=e(4896),_=e(1332),d=e(3392);let t=(()=>{class l{constructor(p,r){this.http=p,this.dnnContext=r}getFeatureDetails(p){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:p}})}static#t=this.\u0275fac=function(r){return new(r||l)(n.CoB(_.KK),n.CoB(d.es))};static#e=this.\u0275prov=n.wxM({token:l,factory:l.\u0275fac})}return l})()},7008:(M,c,e)=>{e.d(c,{C:()=>x});var n=e(600),_=e(5876),d=e(604),g=e(2556),t=e(4896),l=e(4648),I=e(3572),p=e(4672),r=e(2328),D=e(8512),i=e(8200),o=e(5056),m=e(48),R=e(8752);function y(s,v){if(1&s){const a=t.KQA();t.I0R(0,"div",1)(1,"div",2),t.OEk(2,"ID:"),t.C$Y(),t.I0R(3,"div",8)(4,"span",9),t.qCj("click",function(){const E=t.usT(a),T=t.GaO(2);return t.CGJ(T.copyToClipboard(E))}),t.OEk(5),t.C$Y()()()}2&s&&(t.yG2(4),t.E7m("tippy",v),t.yG2(1),t.cNF(v))}function A(s,v){if(1&s){const a=t.KQA();t.I0R(0,"button",10),t.qCj("click",function(){const E=t.usT(a),T=t.GaO(2);return t.CGJ(T.findOutMore(E))}),t.I0R(1,"mat-icon"),t.OEk(2,"open_in_new"),t.C$Y(),t.OEk(3),t.wVc(4,"translate"),t.C$Y()}2&s&&(t.yG2(3),t.oRS(" ",t.kDX(4,1,"Features.FindOutMore")," "))}function u(s,v){if(1&s){const a=t.KQA();t.I0R(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.OEk(3),t.C$Y()(),t.I0R(4,"mat-card-content"),t.wR5(5,"p",0),t.wVc(6,"safeHtml"),t.I0R(7,"div",1)(8,"div",2),t.OEk(9),t.wVc(10,"translate"),t.C$Y(),t.I0R(11,"div",3)(12,"span"),t.OEk(13),t.wVc(14,"translate"),t.C$Y()()(),t.yuY(15,y,6,2,"div",4),t.C$Y(),t.I0R(16,"mat-card-actions",5),t.yuY(17,A,5,3,"button",6),t.I0R(18,"button",7),t.qCj("click",function(){t.usT(a);const C=t.GaO();return t.CGJ(C.closeDialog())}),t.OEk(19),t.wVc(20,"translate"),t.C$Y()()()}if(2&s){let a;t.yG2(3),t.cNF(v.feature.Name),t.yG2(2),t.E7m("innerHtml",t.kDX(6,7,v.feature.Description),t.E3n),t.yG2(4),t.oRS("",t.kDX(10,9,"Features.Status"),":"),t.yG2(4),t.cNF(t.kDX(14,11,v.feature.IsEnabled?"Features.Active":"Features.NotActive")),t.yG2(2),t.C0Y(15,(a=v.feature.NameId)?15:-1,a),t.yG2(2),t.C0Y(17,(a=v.feature.Link)?17:-1,a),t.yG2(2),t.oRS(" ",t.kDX(20,13,"Features.Close")," ")}}let B=(()=>{class s{constructor(a,f,C,E){this.dialogData=a,this.dialogRef=f,this.snackBar=C,this.featureDetailService=E}ngOnInit(){this.viewModel$=(0,_.E)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,d.k)(([a])=>({feature:a})))}copyToClipboard(a){(0,g.y)(a),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(a){window.open(a,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(f){return new(f||s)(t.GI1(n.sR),t.GI1(n.yI),t.GI1(l.yS),t.GI1(I.I))};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["class","eav-info-row"],["align","end"],["mat-raised-button","","color","accent","class","eav-card-action-button"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"]],template:function(f,C){if(1&f&&(t.yuY(0,u,21,15,"mat-card"),t.wVc(1,"async")),2&f){let E;t.C0Y(0,(E=t.kDX(1,1,C.viewModel$))?0:-1,E)}},dependencies:[p.Gw,r.qL,D.SM,D.W0,D.WK,D.Uc,D.gp,i.Y,o.a,m.K,R.sD]})}return s})();var h=e(4844),O=e(9432),P=e(9244);let x=(()=>{class s{set featureNameId(a){this.featureNameId$.next(a)}set showIf(a){this.showIf$.next(1==a)}constructor(a,f,C,E){this.dialog=a,this.viewContainerRef=f,this.changeDetectorRef=C,this.featuresService=E,this.featureNameId$=new h.g(null),this.showIf$=new h.g(!1),this.feature$=this.featureNameId$.pipe((0,O.G)(T=>this.featuresService.get$(T))),this.show$=(0,_.E)([this.feature$,this.showIf$]).pipe((0,d.k)(([T,F])=>F==(T?.IsEnabled??!1)))}openDialog(){s.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(a,f,C,E){a.open(B,{autoFocus:!1,data:f,viewContainerRef:C,width:"400px"}),E.markForCheck()}static#t=this.\u0275fac=function(f){return new(f||s)(t.GI1(n.qW),t.GI1(t.y8U),t.GI1(t.kD9),t.GI1(P.E))};static#e=this.\u0275dir=t.Sc5({type:s,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return s})()},1224:(M,c,e)=>{e.d(c,{C:()=>d});var n=e(1332),_=e(8752);function d(g){return{loader:{provide:_._E,useFactory:g,deps:[n.KK]},defaultLanguage:"en",isolate:!0}}},12:(M,c,e)=>{e.d(c,{I:()=>_});var n=e(8228);function _(d){return new n.A(d,"./i18n/",`.js?${window.sxcVersion}`)}},8228:(M,c,e)=>{e.d(c,{A:()=>d});var n=e(1672),_=e(8916);class d{constructor(t,l,I){this.http=t,this.prefix=l,this.suffix=I}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`).pipe((0,n.a)(l=>(console.warn(`Translation: Failed to get language '${t}' from ${this.prefix}`,l),(0,_.of)({}))))}}},32:(M,c,e)=>{e.d(c,{S:()=>I,g:()=>p});var n=e(4896),_=e(6176),d=e(2664),g=e(5056);let t=0;const l="mat-badge-content";let I=(()=>{class r{get color(){return this._color}set color(i){this._setColor(i),this._color=i}get content(){return this._content}set content(i){this._updateRenderedContent(i)}get description(){return this._description}set description(i){this._updateDescription(i)}constructor(i,o,m,R,y){this._ngZone=i,this._elementRef=o,this._ariaDescriber=m,this._renderer=R,this._animationMode=y,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=t++,this._isInitialized=!1,this._interactivityChecker=(0,n.uUt)(d.OE),this._document=(0,n.uUt)(g.Ud)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const i=this._renderer.createElement("span"),o="mat-badge-active";return i.setAttribute("id",`mat-badge-content-${this._id}`),i.setAttribute("aria-hidden","true"),i.classList.add(l),"NoopAnimations"===this._animationMode&&i.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(i),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{i.classList.add(o)})}):i.classList.add(o),i}_updateRenderedContent(i){const o=`${i??""}`.trim();this._isInitialized&&o&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=o),this._content=o}_updateDescription(i){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!i||this._isHostInteractive())&&this._removeInlineDescription(),this._description=i,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,i):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(i){const o=this._elementRef.nativeElement.classList;o.remove(`mat-badge-${this._color}`),i&&o.add(`mat-badge-${i}`)}_clearExistingBadges(){const i=this._elementRef.nativeElement.querySelectorAll(`:scope > .${l}`);for(const o of Array.from(i))o!==this._badgeElement&&o.remove()}static#t=this.\u0275fac=function(o){return new(o||r)(n.GI1(n.WW2),n.GI1(n.GMv),n.GI1(d.o9),n.GI1(n.q87),n.GI1(n.qwP,8))};static#e=this.\u0275dir=n.Sc5({type:r,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(o,m){2&o&&n.eAK("mat-badge-overlap",m.overlap)("mat-badge-above",m.isAbove())("mat-badge-below",!m.isAbove())("mat-badge-before",!m.isAfter())("mat-badge-after",m.isAfter())("mat-badge-small","small"===m.size)("mat-badge-medium","medium"===m.size)("mat-badge-large","large"===m.size)("mat-badge-hidden",m.hidden||!m.content)("mat-badge-disabled",m.disabled)},inputs:{color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap",n.cZD],disabled:["matBadgeDisabled","disabled",n.cZD],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden",n.cZD]},features:[n.QJr]})}return r})(),p=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=n.a4G({type:r});static#n=this.\u0275inj=n.s3X({imports:[d.Ux,_.AN,_.AN]})}return r})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.08/dist/ng-edit/projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_feature-te-e1a60e.0b15e21e4ad50d41.js.map