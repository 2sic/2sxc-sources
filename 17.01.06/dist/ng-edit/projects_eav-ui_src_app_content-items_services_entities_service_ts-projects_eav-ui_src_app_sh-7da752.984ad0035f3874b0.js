"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-7da752","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts"],{1092:(g,_,o)=>{o.d(_,{g:()=>l});var t=o(8953),a=o(2611),e=o(9039),d=o(4860),r=o(6232);let l=(()=>{class s{constructor(i,c,p){this.http=i,this.context=c,this.dnnContext=p}create(i,c){return this.http.post(`app/auto/data/${i}`,c,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(i,c,p){return this.http.post(`app/auto/data/${i}/${c}`,p,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(i,c,p){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(t.Uo+"delete"),{params:{contentType:i,id:c.toString(),appId:this.context.appId.toString(),force:p.toString()}})}static#t=this.\u0275fac=function(c){return new(c||s)(e.LFG(d.eN),e.LFG(a._),e.LFG(r._y))};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac})}return s})()},9851:(g,_,o)=>{o.d(_,{Y:()=>p});var t=o(9039),a=o(6575),e=o(1268);function d(n,u){1&n&&t.GkF(0)}function r(n,u){if(1&n&&(t.TgZ(0,"mat-hint"),t.YNc(1,d,1,0,"ng-container",2),t.qZA()),2&n){t.oxw();const m=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",m)}}function l(n,u){1&n&&t.GkF(0)}function s(n,u){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,l,1,0,"ng-container",2),t.qZA()),2&n){t.oxw();const m=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",m)}}function v(n,u){1&n&&t.Hsn(0)}const i=n=>({"hint-box__short":n}),c=["*"];let p=(()=>{class n{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(h){return new(h||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:c,decls:5,vars:4,consts:[[1,"hint-box",3,"ngClass","click"],["content",""],[4,"ngTemplateOutlet"]],template:function(h,C){if(1&h&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return C.toggleIsShort()}),t.YNc(1,r,2,1)(2,s,2,1),t.qZA(),t.YNc(3,v,1,0,"ng-template",null,1,t.W1O)),2&h){let f;t.Q6J("ngClass",t.VKq(2,i,C.isShort)),t.xp6(1),t.um2(1,!1===(f=C.isError)?1:!0===f?2:-1)}},dependencies:[a.mk,a.tP,e.bx,e.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return n})()},131:(g,_,o)=>{o.d(_,{E:()=>a});var t=o(9039);let a=(()=>{class e{onClick(r){r.stopPropagation()}static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275dir=t.lG2({type:e,selectors:[["","appClickStopPropagation",""]],hostBindings:function(l,s){1&l&&t.NdJ("click",function(i){return s.onClick(i)})}})}return e})()},4472:(g,_,o)=>{function t(a){const e=document.createElement("textarea");e.value=a,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);const d=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);e.select(),document.execCommand("copy"),document.body.removeChild(e),d&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(d))}o.d(_,{v:()=>t})}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.06/dist/ng-edit/projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-7da752.984ad0035f3874b0.js.map