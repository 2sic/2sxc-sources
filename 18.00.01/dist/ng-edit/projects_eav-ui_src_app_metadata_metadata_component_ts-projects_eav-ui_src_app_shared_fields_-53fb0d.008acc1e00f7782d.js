"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_metadata_metadata_component_ts-projects_eav-ui_src_app_shared_fields_-53fb0d","projects_eav-ui_src_app_permissions_go-to-permissions_ts","projects_eav-ui_src_app_permissions_permissions_routing_ts"],{7693:(R,C,n)=>{n.d(C,{X:()=>m,g:()=>l});var c=n(271),_=n(8873),s=n(8559),g=n(6443),d=n(4821);const m="admin/type/",E="admin/type/scopes";let l=(()=>{class r{constructor(u,t,x){this.http=u,this.context=t,this.dnnContext=x}apiUrl(u){return this.dnnContext.$2sxc.http.apiUrl(u)}retrieveContentType(u){return this.http.get(this.apiUrl("admin/type/get"),{params:{appId:this.context.appId.toString(),contentTypeId:u}})}retrieveContentTypes(u){return this.http.get(this.apiUrl("admin/type/list"),{params:{appId:this.context.appId.toString(),scope:u}})}getScopes(){return this.http.get(this.apiUrl(E),{params:{appId:this.context.appId.toString()}}).pipe((0,c.T)(u=>{const t=u.old;return Object.keys(t).map(U=>({name:t[U],value:U}))}))}getScopesV2(){return this.http.get(this.apiUrl(E),{params:{appId:this.context.appId.toString()}}).pipe((0,c.T)(u=>u.scopes))}save(u){return this.http.post(this.apiUrl("admin/type/save"),u,{params:{appid:this.context.appId.toString()}})}delete(u){return this.http.delete(this.apiUrl("admin/type/delete"),{params:{appid:this.context.appId.toString(),staticName:u.StaticName}})}import(u){const t=new FormData;for(const x of u)t.append("File",x);return this.http.post(this.apiUrl("admin/type/import"),t,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}createGhost(u){return this.http.post(this.apiUrl("admin/type/addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:u}})}static#t=this.\u0275fac=function(t){return new(t||r)(s.KVO(g.Qq),s.KVO(_.o),s.KVO(d.ob))};static#e=this.\u0275prov=s.jDH({token:r,factory:r.\u0275fac})}return r})()},5445:(R,C,n)=>{n.d(C,{Cu:()=>m.Cu,JL:()=>m.JL,Mk:()=>m.Mk,ei:()=>m.ei,gs:()=>_.g,tn:()=>c.t,vN:()=>m.vN,xR:()=>m.xR,y0:()=>h.y});var c=n(6163),_=n(7693),m=(n(1475),n(320),n(8624),n(4079)),h=n(2570)},4079:(R,C,n)=>{n.d(C,{Cu:()=>r,JL:()=>v,Mk:()=>p,ei:()=>l,vN:()=>u,xR:()=>t});var c=n(4600),_=n(6647),s=n(271),g=n(693),d=n(8873),m=n(9234),h=n(8559),D=n(6443),E=n(4821);const p="admin/query/Run",l="admin/query/DebugStream",r="admin/query/Save",v="admin/query/Get",u="admin/query/DataSources";let t=(()=>{class x{constructor(M,F,$){this.http=M,this.context=F,this.dnnContext=$}getAll(M){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(m.Gg),{params:{appId:this.context.appId.toString(),contentType:M}})}importQuery(M){return(0,c.H)((0,g.n)(M)).pipe((0,_.n)(F=>this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/query/import"),{AppId:this.context.appId.toString(),ContentBase64:F})),(0,s.T)(F=>({Success:F,Messages:[]})))}clonePipeline(M){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/query/Clone"),{params:{Id:M.toString(),appId:this.context.appId.toString()}})}delete(M){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("admin/query/Delete"),{params:{appId:this.context.appId.toString(),Id:M.toString()}})}static#t=this.\u0275fac=function(F){return new(F||x)(h.KVO(D.Qq),h.KVO(d.o),h.KVO(E.ob))};static#e=this.\u0275prov=h.jDH({token:x,factory:x.\u0275fac})}return x})()},2570:(R,C,n)=>{n.d(C,{y:()=>I});var c=n(8873),_=n(8559),s=n(6443),g=n(4821);const d="admin/view/",m=d+"all",h=d+"delete",D=d+"import",E=d+"polymorphism",O=d+"usage";let I=(()=>{class f{constructor(l,r,v){this.http=l,this.context=r,this.dnnContext=v}getAll(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(m),{params:{appId:this.context.appId.toString()}})}delete(l){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(h),{params:{appId:this.context.appId.toString(),Id:l.toString()}})}import(l){const r=new FormData;return r.append("File",l),this.http.post(this.dnnContext.$2sxc.http.apiUrl(D),r,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}export(l){const r=this.dnnContext.$2sxc.http.apiUrl(d+"json")+"?appId="+this.context.appId+"&viewId="+l;window.open(r,"_blank","")}getPolymorphism(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(E),{params:{appId:this.context.appId.toString()}})}getUsage(l){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(O),{params:{appId:this.context.appId.toString(),guid:l}})}static#t=this.\u0275fac=function(r){return new(r||f)(_.KVO(s.Qq),_.KVO(c.o),_.KVO(g.ob))};static#e=this.\u0275prov=_.jDH({token:f,factory:f.\u0275fac})}return f})()},4305:(R,C,n)=>{n.r(C),n.d(C,{MetadataComponent:()=>Ot});var c=n(7941),_=n(2159),s=n(5797),g=n(271),d=n(9999),m=n(4334),h=n(336),D=n(6817),E=n(4096),O=n(1735),I=n(6378),f=n(251),p=n(52),l=n(3216),r=n(4175),v=n(3777),u=n(9914),t=n(8559);function x(a,y){if(1&a&&(t.nrm(0,"mat-card-subtitle",0),t.nI1(1,"safeHtml")),2&a){const e=t.XpG();t.Y8G("innerHtml",t.bMT(1,1,e.dialogData.message),t.npT)}}let U=(()=>{class a{constructor(e,o){this.dialogData=e,this.dialogRef=o,this.hostClass="dialog-component"}closeDialog(e){this.dialogRef.close(e)}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(c.Vh),t.rXU(c.CP))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-confirm-delete-dialog"]],hostVars:1,hostBindings:function(o,i){2&o&&t.Mr5("className",i.hostClass)},standalone:!0,features:[t.aNF],decls:10,vars:3,consts:[[3,"innerHtml"],["align","end"],["mat-raised-button","",1,"eav-card-action-button",3,"click"]],template:function(o,i){1&o&&(t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3),t.k0s(),t.DNE(4,x,2,3,"mat-card-subtitle",0),t.k0s(),t.j41(5,"mat-card-actions",1)(6,"button",2),t.bIt("click",function(){return i.closeDialog()}),t.EFF(7,"Cancel"),t.k0s(),t.j41(8,"button",2),t.bIt("click",function(){return i.closeDialog(!0)}),t.EFF(9,"Delete"),t.k0s()()()),2&o&&(t.R7$(3),t.Lme("Delete ",i.dialogData.entityTitle," (",i.dialogData.entityId,")?"),t.R7$(),t.vxM(4,i.dialogData.message?4:-1))},dependencies:[v.Hu,v.RN,v.YY,v.MM,v.Lc,v.dh,r.Hl,r.$z,u.$],styles:[".eav-card-action-button[_ngcontent-%COMP%]{margin-left:8px}"]})}return a})();var M=n(3840),F=n(5060);let $=(()=>{class a{agInit(e){this.params=e}refresh(e){return!0}deleteMetadata(){this.params.onDelete(this.params.data)}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-metadata-actions"]],standalone:!0,features:[t.aNF],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","tippy","Delete",1,"eav-grid-action-button","highlight",3,"click"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1),t.bIt("click",function(){return i.deleteMetadata()}),t.j41(2,"mat-icon"),t.EFF(3,"delete"),t.k0s()()())},dependencies:[F.pZ,F.r6,M.m_,M.An]})}return a})();var H=n(7896);let z=(()=>{class a{agInit(e){this.value=e.value,this.metadata=e.data}refresh(e){return!0}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-metadata-content-type"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[1,"container",3,"tippy","tippyDisabled"]],template:function(o,i){1&o&&(t.j41(0,"div",0),t.EFF(1),t.k0s()),2&o&&(t.Y8G("tippy",i.metadata._Type.Description)("tippyDisabled",!i.metadata._Type.Description),t.R7$(),t.SpI(" ",i.value,"\n"))},dependencies:[H.e],styles:[".container[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}"]})}return a})();var S=n(4456),L=n(8827),w=n(3037),Q=n(1817),J=n(5445),V=n(5858),A=n(316),k=n(7984),X=n(5175),j=n(5944),Z=n(3758),q=n(9333),B=n(5437);const W=a=>({active:a});function tt(a,y){if(1&a&&(t.j41(0,"mat-option",14),t.EFF(1),t.k0s()),2&a){const e=y.$implicit;t.Y8G("value",e.value),t.R7$(),t.SpI(" ",e.name," ")}}function et(a,y){if(1&a&&(t.j41(0,"mat-form-field",2)(1,"mat-label"),t.EFF(2,"Scope"),t.k0s(),t.j41(3,"mat-select",13),t.Z7z(4,tt,2,2,"mat-option",14,t.fX1),t.j41(6,"mat-option",14),t.EFF(7,"Other..."),t.k0s()()(),t.j41(8,"app-field-hint"),t.EFF(9," The scope should almost never be changed - "),t.j41(10,"a",15),t.EFF(11,"see help"),t.k0s()()),2&a){const e=t.XpG(),o=t.XpG();t.R7$(3),t.Y8G("placeholder",e.scopeOptions.length?"":"No items found"),t.R7$(),t.Dyx(e.scopeOptions),t.R7$(2),t.Y8G("value",o.dropdownInsertValue)}}function nt(a,y){if(1&a&&(t.j41(0,"mat-option",14),t.EFF(1),t.k0s()),2&a){const e=y.$implicit;t.Y8G("value",e.StaticName),t.R7$(),t.SpI(" ",e.Label," ")}}function at(a,y){if(1&a&&(t.j41(0,"mat-select",3),t.Z7z(1,nt,2,2,"mat-option",14,t.fX1),t.k0s()),2&a){const e=t.XpG();t.Y8G("placeholder",e.contentTypes.length?"":"No items found"),t.R7$(),t.Dyx(e.contentTypes)}}function ot(a,y){1&a&&t.nrm(0,"input",4)}function it(a,y){1&a&&(t.j41(0,"app-field-hint",8),t.EFF(1," This field is required "),t.k0s()),2&a&&t.Y8G("isError",!0)}function st(a,y){if(1&a){const e=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Create Metadata"),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5," This is a special operation to add an item which is metadata for another item, see "),t.j41(6,"a",0),t.EFF(7,"docs"),t.k0s(),t.EFF(8,". "),t.k0s()(),t.j41(9,"mat-card-content")(10,"form",1),t.DNE(11,et,12,2),t.j41(12,"mat-form-field",2)(13,"mat-label"),t.EFF(14,"Content Type"),t.k0s(),t.DNE(15,at,3,1,"mat-select",3)(16,ot,1,0,"input",4),t.j41(17,"div",5)(18,"button",6),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.toggleGuidedContentType(!0))}),t.j41(19,"mat-icon"),t.EFF(20,"search"),t.k0s()(),t.j41(21,"button",7),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.toggleGuidedContentType(!1))}),t.j41(22,"mat-icon"),t.EFF(23,"text_fields"),t.k0s()()()(),t.DNE(24,it,2,1,"app-field-hint",8),t.k0s()(),t.j41(25,"mat-card-actions",9)(26,"mat-slide-toggle",10),t.bIt("change",function(i){t.eBV(e);const T=t.XpG();return t.Njj(T.toggleAdvancedMode(i))}),t.EFF(27),t.k0s(),t.j41(28,"div")(29,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.closeDialog())}),t.EFF(30,"Cancel"),t.k0s(),t.j41(31,"button",12),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.confirm())}),t.EFF(32," Confirm "),t.k0s()()()()}if(2&a){const e=t.XpG();t.R7$(10),t.Y8G("formGroup",e.form),t.R7$(),t.vxM(11,e.advancedMode&&e.guidedContentType?11:-1),t.R7$(4),t.vxM(15,e.guidedContentType?15:-1),t.R7$(),t.vxM(16,e.guidedContentType?-1:16),t.R7$(2),t.Y8G("ngClass",t.eq3(10,W,e.guidedContentType)),t.R7$(3),t.Y8G("ngClass",t.eq3(12,W,!e.guidedContentType)),t.R7$(3),t.vxM(24,e.form.controls.contentType.touched&&null!=e.form.controls.contentType.errors&&e.form.controls.contentType.errors.required?24:-1),t.R7$(2),t.Y8G("checked",e.advancedMode),t.R7$(),t.SpI(" ",e.advancedMode?"Advanced":"Simple"," "),t.R7$(4),t.Y8G("disabled",!e.form.valid)}}let rt=(()=>{class a{constructor(e){this.dialogRef=e,this.hostClass="dialog-component",this.dropdownInsertValue=V.O,this.guidedContentType=!0,this.advancedMode=!1,this.contentTypesService=(0,B.d)(J.gs)}ngOnInit(){this.contentTypes$=new s.t([]),this.scopeOptions$=new s.t([]),this.buildForm(),this.fetchScopes(),this.viewModel$=(0,d.z)([this.contentTypes$,this.scopeOptions$]).pipe((0,g.T)(([e,o])=>({contentTypes:e,scopeOptions:o})))}ngOnDestroy(){this.contentTypes$.complete(),this.scopeOptions$.complete()}closeDialog(e){this.dialogRef.close(e)}toggleGuidedContentType(e){this.guidedContentType=e}toggleAdvancedMode(e){this.advancedMode=e.checked}confirm(){const e=this.form.getRawValue();this.closeDialog(e.contentType)}buildForm(){this.form=new S.J3({}),this.form.addControl("contentType",new S.hs(null,[S.k0.required])),this.form.addControl("scope",new S.hs(p.YX.scopes.default.value)),this.form.controls.scope.valueChanges.pipe((0,w.Z)(this.form.controls.scope.value),(0,Q.F)()).subscribe(e=>{null!=this.form.controls.contentType.value&&this.form.controls.contentType.patchValue(null),e===V.O?(e=prompt("This is an advanced feature to show content-types of another scope. Don't use this if you don't know what you're doing, as content-types of other scopes are usually hidden for a good reason.")||p.YX.scopes.default.value,this.scopeOptions$.value.some(o=>o.value===e)||this.scopeOptions$.next([{name:e,value:e},...this.scopeOptions$.value]),this.form.controls.scope.patchValue(e)):this.fetchContentTypes(e)})}fetchContentTypes(e){this.contentTypesService.retrieveContentTypes(e).subscribe(o=>{this.contentTypes$.next(o)})}fetchScopes(){this.contentTypesService.getScopes().subscribe(e=>{this.scopeOptions$.next(e)})}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(c.CP))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-metadata-save-dialog"]],hostVars:1,hostBindings:function(o,i){2&o&&t.Mr5("className",i.hostClass)},standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[["href","https://go.2sxc.org/metadata","target","_blank"],[3,"formGroup"],["color","accent",1,"eav-mat-form-field"],["formControlName","contentType","required","",3,"placeholder"],["matInput","","type","text","formControlName","contentType","required",""],["matTextSuffix",""],["mat-icon-button","","type","button","tippy","Pick existing value",3,"click","ngClass"],["mat-icon-button","","type","button","tippy","Manual entry",3,"click","ngClass"],[3,"isError"],[1,"eav-card-actions"],["color","accent",3,"change","checked"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click","disabled"],["formControlName","scope",3,"placeholder"],[3,"value"],["href","https://2sxc.org/help?tag=scope","target","_blank","appClickStopPropagation",""]],template:function(o,i){if(1&o&&(t.DNE(0,st,33,14,"mat-card"),t.nI1(1,"async")),2&o){let T;t.vxM(0,(T=t.bMT(1,1,i.viewModel$))?0:-1,T)}},dependencies:[v.Hu,v.RN,v.YY,v.m2,v.MM,v.Lc,v.dh,S.YN,S.qT,S.me,S.BC,S.cb,S.YS,S.X1,S.j4,S.JD,j.RG,j.rl,j.nJ,j.yw,X.Ve,X.VO,F.wT,F.Sy,k.fS,k.fg,r.Hl,r.$z,r.iY,A.YU,M.m_,M.An,L.mV,L.sG,A.Jj,Z.F,q.c],styles:[".eav-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.eav-card-action-button[_ngcontent-%COMP%]{margin-left:8px}"]})}return a})();var pt=n(5541),Y=n(6256),N=n(3183),lt=n(7037),ct=n(8147),G=n(1828),dt=n(3347),mt=n(9841);const ht=a=>({"fab-opened":a});function _t(a,y){1&a&&t.EFF(0," This item is not metadata for anything else. ")}function ut(a,y){if(1&a&&(t.nrm(0,"br"),t.EFF(1)),2&a){const e=t.XpG(2);t.R7$(),t.SpI("Key Number: ",e.itemFor.KeyNumber," ")}}function gt(a,y){if(1&a&&(t.nrm(0,"br"),t.EFF(1)),2&a){const e=t.XpG(2);t.R7$(),t.SpI("Key Guid: ",e.itemFor.KeyGuid," ")}}function ft(a,y){if(1&a&&(t.nrm(0,"br"),t.EFF(1)),2&a){const e=t.XpG(2);t.R7$(),t.SpI("Key String: ",e.itemFor.KeyString," ")}}function vt(a,y){if(1&a&&(t.nrm(0,"br"),t.EFF(1)),2&a){const e=t.XpG(2);t.R7$(),t.SpI("Title: ",e.itemFor.Title," ")}}function Ct(a,y){if(1&a&&(t.EFF(0," This item is metadata for: "),t.nrm(1,"br"),t.EFF(2),t.nrm(3,"br"),t.EFF(4),t.DNE(5,ut,2,1)(6,gt,2,1)(7,ft,2,1)(8,vt,2,1)),2&a){const e=t.XpG();t.R7$(2),t.SpI("Target: ",e.itemFor.Target," "),t.R7$(2),t.SpI("TargetType: ",e.itemFor.TargetType," "),t.R7$(),t.vxM(5,e.itemFor.KeyNumber?5:-1),t.R7$(),t.vxM(6,e.itemFor.KeyGuid?6:-1),t.R7$(),t.vxM(7,e.itemFor.KeyString?7:-1),t.R7$(),t.vxM(8,e.itemFor.Title?8:-1)}}function Tt(a,y){if(1&a){const e=t.RV6();t.j41(0,"button",10),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.createMetadata())}),t.j41(1,"mat-icon"),t.EFF(2,"add"),t.k0s()()}}function yt(a,y){if(1&a&&(t.nrm(0,"div",19),t.nI1(1,"safeHtml")),2&a){const e=t.XpG().$implicit;t.Y8G("innerHTML",t.bMT(1,2,e.Icon),t.npT)("matBadgeHidden",e.Enabled)}}function Mt(a,y){1&a&&(t.j41(0,"mat-icon"),t.EFF(1,"add"),t.k0s())}function It(a,y){if(1&a){const e=t.RV6();t.j41(0,"button",18),t.bIt("click",function(){const i=t.eBV(e).$implicit,T=t.XpG(3);return t.Njj(T.createMetadata(i))}),t.DNE(1,yt,2,4,"div",19)(2,Mt,2,0),t.k0s()}if(2&a){const e=y.$implicit;t.BMQ("label",e.Title),t.R7$(),t.vxM(1,e.Icon?1:2)}}function Dt(a,y){if(1&a){const e=t.RV6();t.j41(0,"eco-fab-speed-dial",11),t.bIt("openChange",function(i){t.eBV(e);const T=t.XpG(2);return t.Njj(T.openChange(i))}),t.j41(1,"eco-fab-speed-dial-trigger",12)(2,"button",13)(3,"mat-icon",14),t.EFF(4),t.k0s()()(),t.j41(5,"eco-fab-speed-dial-actions",15)(6,"button",16),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.createMetadata())}),t.j41(7,"mat-icon"),t.EFF(8,"search"),t.k0s()(),t.Z7z(9,It,3,2,"button",17,t.fX1),t.k0s()()}if(2&a){const e=t.XpG();t.Y8G("ngClass",t.eq3(3,ht,e.fabOpen)),t.R7$(),t.Y8G("spin",!0),t.R7$(3),t.JRh(e.fabOpen?"close":"add"),t.R7$(5),t.Dyx(e.recommendations)}}function Et(a,y){if(1&a){const e=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3),t.k0s(),t.j41(4,"button",3),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.closeDialog())}),t.j41(5,"mat-icon"),t.EFF(6,"close"),t.k0s()()(),t.j41(7,"div",4)(8,"p"),t.DNE(9,_t,1,0)(10,Ct,9,6),t.k0s(),t.nrm(11,"router-outlet"),t.j41(12,"div",5),t.nrm(13,"ag-grid-angular",6),t.k0s()(),t.j41(14,"mat-dialog-actions",7),t.DNE(15,Tt,3,0,"button",8)(16,Dt,11,5,"eco-fab-speed-dial",9),t.k0s()()}if(2&a){const e=y,o=t.XpG();t.R7$(3),t.SpI(" ",o.title||"Metadata"," "),t.R7$(6),t.vxM(9,e.itemFor?10:9),t.R7$(4),t.Y8G("rowData",e.metadata)("gridOptions",o.gridOptions),t.R7$(2),t.vxM(15,0===e.recommendations.length?15:-1),t.R7$(),t.vxM(16,e.recommendations.length>0?16:-1)}}let Ot=(()=>{class a extends O.V{constructor(e,o,i,T,b,P,K){super(e,o,new ct.B("MetadataComponent",!1)),this.router=e,this.route=o,this.dialogRef=i,this.snackBar=T,this.dialog=b,this.viewContainerRef=P,this.changeDetectorRef=K,this.gridOptions=this.buildGridOptions(),this.entitiesService=(0,B.d)(D.R),this.metadataService=(0,B.d)(E.TI),this.contentItemsService=(0,B.d)(h.F),this.metadataSet$=new s.t({Items:[],Recommendations:[]}),this.itemFor$=new s.t(void 0),this.fabOpen$=new s.t(!1),this.targetType=parseInt(this.route.snapshot.paramMap.get("targetType"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key"),this.title=decodeURIComponent(this.route.snapshot.paramMap.get("title")??""),this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.fetchFor(),this.fetchMetadata(),this.subscriptions.add(this.childDialogClosed$().subscribe(()=>{this.fetchMetadata()}));const e=this.log.rxTap("filteredRecs$");this.metadataSet$.subscribe(T=>{this.log.a("test 2dm",{set:T})});const o=this.metadataSet$.pipe(e.pipe(),(0,g.T)(T=>T.Recommendations.filter(b=>T.Items.filter(P=>P._Type.Id===b.Id).length<b.Count)),e.map()),i=this.log.rxTap("viewModel$");this.viewModel$=(0,d.z)([this.metadataSet$,o,this.itemFor$,this.fabOpen$]).pipe(i.pipe(),(0,g.T)(([T,b,P,K])=>({metadata:T.Items,recommendations:b,itemFor:P,fabOpen:K})),i.map())}ngOnDestroy(){this.log.a("destroying"),this.metadataSet$.complete(),this.itemFor$.complete(),this.fabOpen$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}openChange(e){this.fabOpen$.next(e)}createMetadata(e){if(e)return e.Enabled?void(e.CreateEmpty?(this.snackBar.open(`Creating ${e.Name}...`),this.entitiesService.create(e.Id,{For:this.calculateItemFor()}).subscribe({error:()=>{this.snackBar.open(`Creating ${e.Name} failed. Please check console for more info`,void 0,{duration:3e3}),this.fetchMetadata()},next:()=>{this.snackBar.open(`Created ${e.Name}`,void 0,{duration:3e3}),this.fetchMetadata()}})):this.createMetadataForm(e.Id)):void(0,pt.j)(this.dialog,e.MissingFeature,this.viewContainerRef,this.changeDetectorRef);this.dialog.open(rt,{autoFocus:!1,viewContainerRef:this.viewContainerRef,width:"650px"}).afterClosed().subscribe(i=>{null!=i&&this.createMetadataForm(i)})}createMetadataForm(e){const o={items:[{ContentTypeName:e,For:this.calculateItemFor()}]},i=(0,l.s)(o);this.router.navigate([`edit/${i}`],{relativeTo:this.route}),this.changeDetectorRef.markForCheck()}calculateItemFor(){return{Target:Object.values(p.YX.metadata).find(o=>o.targetType===this.targetType)?.target??this.targetType.toString(),TargetType:this.targetType,...this.keyType===p.YX.keyTypes.guid&&{Guid:this.key},...this.keyType===p.YX.keyTypes.number&&{Number:parseInt(this.key,10)},...this.keyType===p.YX.keyTypes.string&&{String:this.key}}}fetchFor(){this.contentTypeStaticName&&this.contentItemsService.getAll(this.contentTypeStaticName).subscribe(e=>{const o=e.find(i=>i.Guid===this.key);o?.For&&this.itemFor$.next(o.For)})}fetchMetadata(){const e=this.log.rxTap("getMetadata");this.metadataService.getMetadata(this.targetType,this.keyType,this.key).pipe(e.pipe(),(0,m.s)(1),(0,g.T)(o=>(o.Recommendations.forEach(i=>{i.Icon?.startsWith("base64:")&&(i.Icon=i.Icon.replace("base64:",""),i.Icon=window.atob(i.Icon),i.Icon=i.Icon.replace('fill="#000000"','fill="#ffffff"'))}),o)),e.map()).subscribe(o=>this.metadataSet$.next(o))}editMetadata(e){const i=(0,l.s)({items:[{EntityId:e.Id}]});this.router.navigate([`edit/${i}`],{relativeTo:this.route})}deleteMetadata(e,o=!1){if(o)this.snackBar.open("Deleting..."),this.entitiesService.delete(e._Type.Id,e.Id,!1).subscribe({next:()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchMetadata()},error:()=>{this.snackBar.open("Delete failed. Please check console for more information",null,{duration:3e3})}});else{const i={entityId:e.Id,entityTitle:e.Title,message:this.metadataSet$.value.Recommendations.find(b=>b.Id===e._Type.Id)?.DeleteWarning};this.dialog.open(U,{autoFocus:!1,data:i,viewContainerRef:this.viewContainerRef,width:"400px"}).afterClosed().subscribe(b=>{b&&this.deleteMetadata(e,!0)})}}buildGridOptions(){return{...f.C,columnDefs:[{...G.r.Id,cellRenderer:I.L,cellRendererParams:{tooltipGetter:i=>`ID: ${i.Id}\nGUID: ${i.Guid}`}},{...G.r.TextWide,field:"Title",onCellClicked:o=>{this.editMetadata(o.data)}},{...G.r.TextWide,headerName:"Content Type",field:"ContentType",valueGetter:o=>{const i=o.data;return`${i._Type.Name}${i._Type.Title!==i._Type.Name?` (${i._Type.Title})`:""}`},cellRenderer:z},{...G.r.ActionsPinnedRight1,cellRenderer:$,cellRendererParams:{onDelete:i=>this.deleteMetadata(i)}}]}}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(_.Ix),t.rXU(_.nX),t.rXU(c.CP),t.rXU(dt.UG),t.rXU(c.bZ),t.rXU(t.c1b),t.rXU(t.gRc))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-metadata"]],standalone:!0,features:[t.Vt3,t.aNF],decls:2,vars:3,consts:[[1,"eav-dialog","nav-component-wrapper"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content","nav-component-wrapper"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],["align","end"],["mat-fab","","mat-elevation-z24","","tippy","Create a new metadata for this item",1,"grid-fab"],[1,"eav-eco-fab-speed-dial",3,"ngClass"],["mat-fab","","mat-elevation-z24","","tippy","Create a new metadata for this item",1,"grid-fab",3,"click"],[1,"eav-eco-fab-speed-dial",3,"openChange","ngClass"],[3,"spin"],["mat-fab",""],[1,"spin180"],[1,"eav-eco-fab-speed-dial-actions"],["mat-mini-fab","","label","Other Content Type",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","",1,"eav-eco-fab-speed-dial-action-button"],["mat-mini-fab","",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadge","\u{1f48e}","matBadgePosition","below after","aria-hidden","false",2,"color","white","fill","white",3,"innerHTML","matBadgeHidden"]],template:function(o,i){if(1&o&&(t.DNE(0,Et,17,6,"div",0),t.nI1(1,"async")),2&o){let T;t.vxM(0,(T=t.bMT(1,1,i.viewModel$))?0:-1,T)}},dependencies:[r.Hl,r.iY,r.$0,r.Sr,M.m_,M.An,_.n3,lt.p,mt.xs,c.E7,N.TE,A.YU,N.p1,N.yf,Y.Y,Y.k,A.Jj,u.$],styles:["[_nghost-%COMP%]     .mat-button-wrapper div svg *:not([fill]){fill:#fff}"]})}return a})()},2437:(R,C,n)=>{n.d(C,{k:()=>_});var c=n(52);let _=(()=>{class s{static#t=this.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>n.e("projects_eav-ui_src_app_permissions_permissions_routing_ts").then(n.bind(n,3516)).then(d=>d.permissionRoutes),data:{title:"Permissions"}};static getUrl(d,m,h){return`permissions/${d}/${m}/${h}`}static getUrlApp(d){return this.getUrl(c.YX.metadata.app.targetType,c.YX.metadata.app.keyType,d.toString())}static getUrlAttribute(d){return this.getUrl(c.YX.metadata.attribute.targetType,c.YX.metadata.attribute.keyType,d.toString())}static getUrlContentType(d){return this.getUrlEntity(d)}static getUrlEntity(d){return this.getUrl(c.YX.metadata.entity.targetType,c.YX.metadata.entity.keyType,d)}static getUrlLanguage(d){return this.getUrl(c.YX.metadata.language.targetType,c.YX.metadata.language.keyType,d)}}return s})()},4096:(R,C,n)=>{n.d(C,{Kn:()=>m.K,TI:()=>d.T,k4:()=>c.k});var c=n(2437),d=(n(2365),n(3516),n(2458),n(401)),m=n(4900)},2365:(R,C,n)=>{n.d(C,{v:()=>_});var c=n(9204);const _={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:()=>(0,c.A)(function*(){const{PermissionsComponent:s}=yield Promise.all([n.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"),n.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),n.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),n.e("default-node_modules_angular_material_fesm2022_radio_mjs"),n.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"),n.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts")]).then(n.bind(n,2458));return s})()}},3516:(R,C,n)=>{n.r(C),n.d(C,{permissionRoutes:()=>g});var c=n(5544),_=n(2365),s=n(2134);const g=[{path:"",component:c.U,data:{dialog:_.v},children:s.H3}]},3758:(R,C,n)=>{n.d(C,{F:()=>I});var c=n(316),_=n(5944),s=n(8559);const g=["*"],d=f=>({"hint-box__short":f});function m(f,p){1&f&&s.eu8(0)}function h(f,p){if(1&f&&(s.j41(0,"mat-hint"),s.DNE(1,m,1,0,"ng-container",2),s.k0s()),2&f){s.XpG();const l=s.sdS(4);s.R7$(),s.Y8G("ngTemplateOutlet",l)}}function D(f,p){1&f&&s.eu8(0)}function E(f,p){if(1&f&&(s.j41(0,"mat-error"),s.DNE(1,D,1,0,"ng-container",2),s.k0s()),2&f){s.XpG();const l=s.sdS(4);s.R7$(),s.Y8G("ngTemplateOutlet",l)}}function O(f,p){1&f&&s.SdG(0)}let I=(()=>{class f{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(r){return new(r||f)};static#e=this.\u0275cmp=s.VBU({type:f,selectors:[["app-field-hint"]],inputs:{isError:"isError"},standalone:!0,features:[s.aNF],ngContentSelectors:g,decls:5,vars:4,consts:[["content",""],[1,"hint-box",3,"click","ngClass"],[4,"ngTemplateOutlet"]],template:function(r,v){if(1&r){const u=s.RV6();s.NAR(),s.j41(0,"div",1),s.bIt("click",function(){return s.eBV(u),s.Njj(v.toggleIsShort())}),s.DNE(1,h,2,1)(2,E,2,1),s.k0s(),s.DNE(3,O,1,0,"ng-template",null,0,s.C5r)}if(2&r){let u;s.Y8G("ngClass",s.eq3(2,d,v.isShort)),s.R7$(),s.vxM(1,!1===(u=v.isError)?1:!0===u?2:-1)}},dependencies:[_.RG,_.MV,_.TL,c.YU,c.T3],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return f})()},9333:(R,C,n)=>{n.d(C,{c:()=>s});var c=n(8559);let s=(()=>{class g{constructor(){}onClick(m){m.stopPropagation()}static#t=this.\u0275fac=function(h){return new(h||g)};static#e=this.\u0275dir=c.FsC({type:g,selectors:[["","appClickStopPropagation",""]],hostBindings:function(h,D){1&h&&c.bIt("click",function(O){return D.onClick(O)})},standalone:!0})}return g})()},5959:(R,C,n)=>{n.d(C,{h6:()=>O,zZ:()=>D});var c=n(271),_=n(7693),s=n(8873),g=n(8559),d=n(6443),m=n(4821);const h="admin/field/",D="admin/field/all",E="admin/field/GetSharedFields";let O=(()=>{class I{constructor(p,l,r){this.http=p,this.context=l,this.dnnContext=r}apiUrl(p){return this.dnnContext.$2sxc.http.apiUrl(p)}typeListRetrieve(){return this.http.get(this.apiUrl(h+"DataTypes"),{params:{appid:this.context.appId.toString()}})}getInputTypesList(){return this.http.get(this.apiUrl(h+"InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe((0,c.T)(p=>p.map(r=>({dataType:r.Type.substring(0,r.Type.indexOf("-")),inputType:r.Type,label:r.Label,description:r.Description,isDefault:r.IsDefault,isObsolete:r.IsObsolete,isRecommended:r.IsRecommended,obsoleteMessage:r.ObsoleteMessage,icon:r.IsDefault?"star":r.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.http.get(this.apiUrl(h+"ReservedNames"))}getFields(p){return this.http.get(this.apiUrl(D),{params:{appid:this.context.appId.toString(),staticName:p}}).pipe((0,c.T)(l=>{if(l)for(const r of l){if(!r.Metadata)continue;const v=r.Metadata;v.merged={...v.All,...v[r.Type],...v[r.InputType]}}return l}))}getShareableFields(){return this.http.get(this.apiUrl(E),{params:{appid:this.context.appId.toString()}})}getShareableFieldsFor(p){return this.http.get(this.apiUrl(E),{params:{appid:this.context.appId.toString(),attributeId:p.toString()}})}addInheritedField(p,l,r,v){return this.http.post(this.apiUrl(h+"AddInheritedField"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:p.toString(),SourceType:l,SourceField:r,name:v}})}share(p,l=!0){return this.http.post(this.apiUrl(h+"Share"),null,{params:{appid:this.context.appId.toString(),attributeId:p.toString(),share:l}})}inherit(p,l){return this.http.post(this.apiUrl(h+"Inherit"),null,{params:{appid:this.context.appId.toString(),attributeId:p.toString(),inheritMetadataOf:l}})}reOrder(p,l){return this.http.post(this.apiUrl(h+"Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:l.Id.toString(),order:JSON.stringify(p)}})}setTitle(p,l){return this.http.post(this.apiUrl(_.X+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:l.Id.toString(),attributeId:p.Id.toString()}})}rename(p,l,r){return this.http.post(this.apiUrl(h+"Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:l.toString(),attributeId:p.toString(),newName:r}})}delete(p,l){if(p.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl(h+"Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:l.Id.toString(),attributeId:p.Id.toString()}})}add(p,l){return this.http.post(this.apiUrl(h+"Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:l.toString(),Id:p.Id.toString(),Type:p.Type,InputType:p.InputType,StaticName:p.StaticName,IsTitle:p.IsTitle.toString(),Index:p.SortOrder.toString()}})}updateInputType(p,l,r){return this.http.post(this.apiUrl(h+"InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:p.toString(),field:l,inputType:r}})}static#t=this.\u0275fac=function(l){return new(l||I)(g.KVO(d.Qq),g.KVO(s.o),g.KVO(m.ob))};static#e=this.\u0275prov=g.jDH({token:I,factory:I.\u0275fac})}return I})()},693:(R,C,n)=>{function c(s){return new Promise((g,d)=>{const m=new FileReader;m.readAsDataURL(s),m.onload=()=>{g(m.result.split(",")[1])},m.onerror=h=>{d(h)}})}function _(s){return new Promise((g,d)=>{const m=new FileReader;m.readAsText(s),m.onload=()=>{g(m.result)},m.onerror=h=>{d(h)}})}n.d(C,{d:()=>_,n:()=>c})}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_metadata_metadata_component_ts-projects_eav-ui_src_app_shared_fields_-53fb0d.008acc1e00f7782d.js.map