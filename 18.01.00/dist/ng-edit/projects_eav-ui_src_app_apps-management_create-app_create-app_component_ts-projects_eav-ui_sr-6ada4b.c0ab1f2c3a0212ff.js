"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_create-app_create-app_component_ts-projects_eav-ui_sr-6ada4b"],{7001:(D,_,n)=>{n.r(_),n.d(_,{CreateAppComponent:()=>P});var s=n(4456),u=n(7941),e=n(5797),v=n(271);const C=/^[A-Za-z](?:[A-Za-z0-9\s\(\)-]+)*$/;var E=n(3583),m=n(316),M=n(4175),d=n(5060),h=n(5175),o=n(7984),l=n(5944),p=n(2159),f=n(3758),F=n(5437),t=n(7580),j=n(3347);function A(r,x){1&r&&(t.j41(0,"app-field-hint",14),t.EFF(1," Required "),t.k0s()),2&r&&t.Y8G("isError",!0)}function O(r,x){if(1&r&&(t.j41(0,"app-field-hint",14),t.EFF(1),t.k0s()),2&r){const a=t.XpG(3);t.Y8G("isError",!0),t.R7$(),t.SpI(" ",a.appNameError," ")}}function R(r,x){if(1&r&&t.DNE(0,A,2,1,"app-field-hint",14)(1,O,2,2,"app-field-hint",14),2&r){const a=t.XpG(2);t.vxM(0,null!=a.form.controls.name.errors&&a.form.controls.name.errors.required?0:-1),t.R7$(),t.vxM(1,null!=a.form.controls.name.errors&&a.form.controls.name.errors.pattern?1:-1)}}function I(r,x){if(1&r){const a=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3,"Create App"),t.k0s()(),t.j41(4,"div",3),t.nrm(5,"router-outlet"),t.j41(6,"form",4)(7,"mat-form-field",5)(8,"mat-label"),t.EFF(9,"Name"),t.k0s(),t.nrm(10,"input",6),t.k0s(),t.j41(11,"app-field-hint"),t.EFF(12," App name will also be used for the folder "),t.k0s(),t.DNE(13,R,2,2),t.nrm(14,"br"),t.j41(15,"mat-form-field",5)(16,"mat-label"),t.EFF(17,"Template"),t.k0s(),t.j41(18,"mat-select",7),t.mxI("valueChange",function(c){t.eBV(a);const T=t.XpG();return t.DH7(T.appTemplateId,c)||(T.appTemplateId=c),t.Njj(c)}),t.j41(19,"mat-option",8),t.EFF(20," Completely Naked / Raw App "),t.k0s(),t.j41(21,"mat-option",9),t.EFF(22," App Template Empty with some instructions "),t.k0s(),t.j41(23,"mat-option",10),t.EFF(24," App Template Basic with instructions and some data "),t.k0s()()()()(),t.j41(25,"mat-dialog-actions",11)(26,"button",12),t.bIt("click",function(){t.eBV(a);const c=t.XpG();return t.Njj(c.closeDialog())}),t.EFF(27," Cancel "),t.k0s(),t.j41(28,"button",13),t.bIt("click",function(){t.eBV(a);const c=t.XpG();return t.Njj(c.create())}),t.EFF(29," Create "),t.k0s()()()}if(2&r){const a=x,i=t.XpG();t.R7$(6),t.Y8G("formGroup",i.form),t.R7$(7),t.vxM(13,i.form.controls.name.touched?13:-1),t.R7$(5),t.R50("value",i.appTemplateId),t.R7$(8),t.Y8G("disabled",a.loading),t.R7$(2),t.Y8G("disabled",a.loading||!i.form.valid)}}let P=(()=>{class r{constructor(a,i){this.dialogRef=a,this.snackBar=i,this.hostClass="dialog-component",this.appNameError="Standard letters, numbers, spaces, hyphens and round brackets are allowed. Must start with a letter.",this.appTemplateId="1",this.appsListService=(0,F.d)(E.U),this.form=this.buildForm(),this.loading$=new e.t(!1)}ngOnInit(){this.viewModel$=this.loading$.pipe((0,v.T)(a=>({loading:a})))}ngOnDestroy(){this.loading$.complete()}closeDialog(){this.dialogRef.close()}create(){this.form.disable(),this.loading$.next(!0);const a=this.form.controls.name.value?.trim().replace(/\s\s+/g," "),i=Number(this.appTemplateId);this.snackBar.open("Creating app..."),this.appsListService.create(a,null,i).subscribe({error:()=>{this.form.enable(),this.loading$.next(!1),this.snackBar.open("Failed to create app. Please check console for more information",void 0,{duration:3e3})},next:()=>{this.form.enable(),this.snackBar.open("Created app",void 0,{duration:2e3}),this.closeDialog()}})}buildForm(){return new s.J3({name:new s.hs(null,[s.k0.required,s.k0.pattern(C)])})}static#t=this.\u0275fac=function(i){return new(i||r)(t.rXU(u.CP),t.rXU(j.UG))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-create-app"]],hostVars:1,hostBindings:function(i,c){2&i&&t.Mr5("className",c.hostClass)},standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[1,"eav-dialog"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],[3,"formGroup"],["color","accent",1,"eav-mat-form-field"],["matInput","","type","text","formControlName","name"],["required","true",3,"valueChange","value"],["value","0"],["value","1"],["value","2"],["align","end"],["type","button","mat-raised-button","",3,"click","disabled"],["type","button","mat-raised-button","","color","accent",3,"click","disabled"],[3,"isError"]],template:function(i,c){if(1&i&&(t.DNE(0,I,30,5,"div",0),t.nI1(1,"async")),2&i){let T;t.vxM(0,(T=t.bMT(1,1,c.viewModel$))?0:-1,T)}},dependencies:[p.n3,s.YN,s.qT,s.me,s.BC,s.cb,s.X1,s.j4,s.JD,l.RG,l.rl,l.nJ,o.fS,o.fg,h.Ve,h.VO,d.wT,d.Sy,u.E7,M.Hl,M.$z,m.Jj,f.F]})}return r})()},1772:(D,_,n)=>{n.d(_,{I:()=>E,u:()=>g});var s=n(6647),u=n(9452),e=n(3550),v=n(6474),C=n(7580);const g="admin/app/";let E=(()=>{class m extends v.D{importApp(d,h,o=!1){const l=new FormData;return l.append("File",d),l.append("Name",h??""),this.http.post(this.apiUrl(g+"Import"),l,{params:{zoneId:this.zoneId}}).pipe((0,s.n)(p=>{if(o&&p.Messages[0]?.MessageType===e.G1.Warning){const f=prompt(p.Messages[0].Text+" Would you like to install it using another folder name?");if(f)return this.importApp(d,f,!0)}return(0,u.of)(p)}))}static#t=this.\u0275fac=(()=>{let d;return function(o){return(d||(d=C.xGo(m)))(o||m)}})();static#e=this.\u0275prov=C.jDH({token:m,factory:m.\u0275fac})}return m})()},3758:(D,_,n)=>{n.d(_,{F:()=>h});var s=n(316),u=n(5944),e=n(7580);const v=["*"],C=o=>({"hint-box__short":o});function g(o,l){1&o&&e.eu8(0)}function E(o,l){if(1&o&&(e.j41(0,"mat-hint"),e.DNE(1,g,1,0,"ng-container",2),e.k0s()),2&o){e.XpG();const p=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",p)}}function m(o,l){1&o&&e.eu8(0)}function M(o,l){if(1&o&&(e.j41(0,"mat-error"),e.DNE(1,m,1,0,"ng-container",2),e.k0s()),2&o){e.XpG();const p=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",p)}}function d(o,l){1&o&&e.SdG(0)}let h=(()=>{class o{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(f){return new(f||o)};static#e=this.\u0275cmp=e.VBU({type:o,selectors:[["app-field-hint"]],inputs:{isError:"isError"},standalone:!0,features:[e.aNF],ngContentSelectors:v,decls:5,vars:4,consts:[["content",""],[1,"hint-box",3,"click","ngClass"],[4,"ngTemplateOutlet"]],template:function(f,F){if(1&f){const t=e.RV6();e.NAR(),e.j41(0,"div",1),e.bIt("click",function(){return e.eBV(t),e.Njj(F.toggleIsShort())}),e.DNE(1,E,2,1)(2,M,2,1),e.k0s(),e.DNE(3,d,1,0,"ng-template",null,0,e.C5r)}if(2&f){let t;e.Y8G("ngClass",e.eq3(2,C,F.isShort)),e.R7$(),e.vxM(1,!1===(t=F.isError)?1:!0===t?2:-1)}},dependencies:[u.RG,u.MV,u.TL,s.YU,s.T3],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.01.00/dist/ng-edit/projects_eav-ui_src_app_apps-management_create-app_create-app_component_ts-projects_eav-ui_sr-6ada4b.c0ab1f2c3a0212ff.js.map