"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-86af18","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts","projects_eav-ui_src_app_features_features_module_ts"],{801:(f,m,e)=>{e.d(m,{S:()=>v});var t=e(6362),s=e(7317),d=e(5590),l=e(3135),c=e(7514),o=e(7392),p=e(1392),_=e(1961),M=e(3265),C=e(3184);let v=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=C.oAB({type:i}),i.\u0275inj=C.cJS({providers:[M.f],imports:[[t.ez,s.ot,d.Ps,_.QW,l.q,c.aw.forChild((0,o.f)(p.W))]]}),i})()},3265:(f,m,e)=>{e.d(m,{f:()=>c});var t=e(3184),s=e(8784),d=e(2425);let c=(()=>{class o{constructor(_,M){this.http=_,this.dnnContext=M}getFeatureDetails(_){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:_}})}}return o.\u0275fac=function(_){return new(_||o)(t.LFG(s.eN),t.LFG(d._y))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})()},8352:(f,m,e)=>{e.d(m,{Y:()=>v});var t=e(3184),s=e(6362),d=e(4770);function l(i,u){1&i&&t.GkF(0)}function c(i,u){if(1&i&&(t.TgZ(0,"mat-hint"),t.YNc(1,l,1,0,"ng-container",3),t.qZA()),2&i){t.oxw();const g=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",g)}}function o(i,u){1&i&&t.GkF(0)}function p(i,u){if(1&i&&(t.TgZ(0,"mat-error"),t.YNc(1,o,1,0,"ng-container",3),t.qZA()),2&i){t.oxw();const g=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",g)}}function _(i,u){1&i&&t.Hsn(0)}const M=function(i){return{"hint-box__short":i}},C=["*"];let v=(()=>{class i{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}}return i.\u0275fac=function(g){return new(g||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:C,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(g,D){1&g&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return D.toggleIsShort()}),t.YNc(1,c,2,1,"mat-hint",1),t.YNc(2,p,2,1,"mat-error",1),t.qZA(),t.YNc(3,_,1,0,"ng-template",null,2,t.W1O)),2&g&&(t.Q6J("ngClass",t.VKq(4,M,D.isShort))("ngSwitch",D.isError),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(1),t.Q6J("ngSwitchCase",!0))},directives:[s.mk,s.RF,s.n9,d.bx,s.tP,d.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),i})()},7294:(f,m,e)=>{e.d(m,{E:()=>s});var t=e(3184);let s=(()=>{class d{onClick(c){c.stopPropagation()}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275dir=t.lG2({type:d,selectors:[["","appClickStopPropagation",""]],hostBindings:function(c,o){1&c&&t.NdJ("click",function(_){return o.onClick(_)})}}),d})()},1555:(f,m,e)=>{e.d(m,{z:()=>d});var t=e(3184),s=e(318);let d=(()=>{class l{constructor(o){this.sanitizer=o}transform(o){return this.sanitizer.bypassSecurityTrustHtml(o)}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(s.H7,16))},l.\u0275pipe=t.Yjl({name:"safeHtml",type:l,pure:!0}),l})()},7392:(f,m,e)=>{e.d(m,{f:()=>d});var t=e(8784),s=e(7514);function d(l){return{loader:{provide:s.Zw,useFactory:l,deps:[t.eN]},defaultLanguage:"en",isolate:!0}}},1392:(f,m,e)=>{e.d(m,{W:()=>s});var t=e(1183);function s(d){return new t.M(d,"./i18n/",`.js?${window.sxcVersion}`)}},1183:(f,m,e)=>{e.d(m,{M:()=>d});var t=e(3158),s=e(745);class d{constructor(c,o,p){this.http=c,this.prefix=o,this.suffix=p}getTranslation(c){return this.http.get(`${this.prefix}${c}${this.suffix}`).pipe((0,t.K)(o=>(console.warn(`Translation: Failed to get language '${c}' from ${this.prefix}`,o),(0,s.of)({}))))}}},1961:(f,m,e)=>{e.d(m,{$j:()=>i,QW:()=>y,a8:()=>I,dk:()=>P,dn:()=>C,hq:()=>u,kc:()=>E,n5:()=>v});var t=e(3184),s=e(7481),d=e(1130);const l=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],o=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],p=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let C=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),a})(),v=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),a})(),i=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),a})(),u=(()=>{class a{constructor(){this.align="start"}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(n,h){2&n&&t.ekj("mat-card-actions-align-end","end"===h.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),a})(),E=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=t.lG2({type:a,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),a})(),I=(()=>{class a{constructor(n){this._animationMode=n}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(s.Qb,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(n,h){2&n&&t.ekj("_mat-animation-noopable","NoopAnimations"===h._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(n,h){1&n&&(t.F$t(l),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),a})(),P=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:p,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(n,h){1&n&&(t.F$t(o),t.Hsn(0),t.TgZ(1,"div",0),t.Hsn(2,1),t.qZA(),t.Hsn(3,2))},encapsulation:2,changeDetection:0}),a})(),y=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[d.BQ],d.BQ]}),a})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.06.00/dist/ng-edit/projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-86af18.ad52da62f555782b.js.map