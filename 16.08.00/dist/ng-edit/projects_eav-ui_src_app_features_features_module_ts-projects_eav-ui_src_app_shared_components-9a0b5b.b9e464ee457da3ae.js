"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-9a0b5b","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-86af18"],{597:(d,i,e)=>{e.d(i,{S:()=>E});var t=e(6575),_=e(895),n=e(6515),r=e(7138),s=e(1916),a=e(3739),c=e(5020),m=e(8497),l=e(8737),f=e(1699);let E=(()=>{var o;class u{}return(o=u).\u0275fac=function(g){return new(g||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({providers:[l.f],imports:[t.ez,_.ot,n.Ps,m.QW,r.q,s.aw.forChild((0,a.f)(c.W))]}),u})()},8737:(d,i,e)=>{e.d(i,{f:()=>s});var t=e(1699),_=e(4860),n=e(6232);let s=(()=>{var a;class c{constructor(l,f){this.http=l,this.dnnContext=f}getFeatureDetails(l){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:l}})}}return(a=c).\u0275fac=function(l){return new(l||a)(t.LFG(_.eN),t.LFG(n._y))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),c})()},9851:(d,i,e)=>{e.d(i,{Y:()=>E});var t=e(1699),_=e(6575),n=e(1268);function r(o,u){1&o&&t.GkF(0)}function s(o,u){if(1&o&&(t.TgZ(0,"mat-hint"),t.YNc(1,r,1,0,"ng-container",3),t.qZA()),2&o){t.oxw();const p=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",p)}}function a(o,u){1&o&&t.GkF(0)}function c(o,u){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,a,1,0,"ng-container",3),t.qZA()),2&o){t.oxw();const p=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",p)}}function m(o,u){1&o&&t.Hsn(0)}const l=function(o){return{"hint-box__short":o}},f=["*"];let E=(()=>{var o;class u{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}}return(o=u).\u0275fac=function(g){return new(g||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:f,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(g,h){1&g&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return h.toggleIsShort()}),t.YNc(1,s,2,1,"mat-hint",1),t.YNc(2,c,2,1,"mat-error",1),t.qZA(),t.YNc(3,m,1,0,"ng-template",null,2,t.W1O)),2&g&&(t.Q6J("ngClass",t.VKq(4,l,h.isShort))("ngSwitch",h.isError),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(1),t.Q6J("ngSwitchCase",!0))},dependencies:[_.mk,_.tP,_.RF,_.n9,n.bx,n.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),u})()},131:(d,i,e)=>{e.d(i,{E:()=>_});var t=e(1699);let _=(()=>{var n;class r{onClick(a){a.stopPropagation()}}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","appClickStopPropagation",""]],hostBindings:function(a,c){1&a&&t.NdJ("click",function(l){return c.onClick(l)})}}),r})()},4472:(d,i,e)=>{function t(_){const n=document.createElement("textarea");n.value=_,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))}e.d(i,{v:()=>t})},6537:(d,i,e)=>{e.d(i,{z:()=>n});var t=e(1699),_=e(6480);let n=(()=>{var r;class s{constructor(c){this.sanitizer=c}transform(c){return this.sanitizer.bypassSecurityTrustHtml(c)}}return(r=s).\u0275fac=function(c){return new(c||r)(t.Y36(_.H7,16))},r.\u0275pipe=t.Yjl({name:"safeHtml",type:r,pure:!0}),s})()},3739:(d,i,e)=>{e.d(i,{f:()=>n});var t=e(4860),_=e(1916);function n(r){return{loader:{provide:_.Zw,useFactory:r,deps:[t.eN]},defaultLanguage:"en",isolate:!0}}},5020:(d,i,e)=>{e.d(i,{W:()=>_});var t=e(8206);function _(n){return new t.M(n,"./i18n/",`.js?${window.sxcVersion}`)}},8206:(d,i,e)=>{e.d(i,{M:()=>n});var t=e(2389),_=e(4980);class n{constructor(s,a,c){this.http=s,this.prefix=a,this.suffix=c}getTranslation(s){return this.http.get(`${this.prefix}${s}${this.suffix}`).pipe((0,t.K)(a=>(console.warn(`Translation: Failed to get language '${s}' from ${this.prefix}`,a),(0,_.of)({}))))}}}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.08.00/dist/ng-edit/projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-9a0b5b.b9e464ee457da3ae.js.map