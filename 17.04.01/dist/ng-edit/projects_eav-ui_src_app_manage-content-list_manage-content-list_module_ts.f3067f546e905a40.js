"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_manage-content-list_manage-content-list_module_ts","projects_eav-ui_src_app_import-app_services_import-app_service_ts-projects_eav-ui_src_app_sha-1ab7ba","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts","projects_eav-ui_src_app_app-administration_services_app-dialog-config_service_ts-_86580","projects_eav-ui_src_app_app-administration_services_app-dialog-config_service_ts-_86581"],{533:(D,h,t)=>{t.d(h,{m:()=>p});var l=t(7488),d=t(604),n=t(8600),g=t(5200),i=t(6028),s=t(4896),a=t(1332),E=t(3392),e=t(9244);let p=(()=>{class _{constructor(c,r,x,m,C){this.http=c,this.context=r,this.dnnContext=x,this.globalConfigService=m,this.dialogSettings$={},C.loadFromService(this)}getShared$(c){return c??=this.context.appId,this.dialogSettings$[c]||(this.dialogSettings$[c]=this.getDialogSettings(c).pipe((0,l.C)({refCount:!1}))),this.dialogSettings$[c]}getDialogSettings(c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/dialog/settings"),{params:{appId:c??this.context.appId.toString()}}).pipe((0,d.k)(r=>(r.Context.Language.List=r.Context.Language.List.filter(x=>x.IsEnabled),r)),(0,n.y)(r=>{this.globalConfigService.allowDebug(r.Context.Enable.DebugMode)}))}static#t=this.\u0275fac=function(r){return new(r||_)(s.CoB(a.KK),s.CoB(i.e),s.CoB(E.es),s.CoB(g.Sq),s.CoB(e.E))};static#n=this.\u0275prov=s.wxM({token:_,factory:_.\u0275fac})}return _})()},692:(D,h,t)=>{t.d(h,{O:()=>s,X:()=>c});var l=t(604),d=t(6028),n=t(4896),g=t(1332),i=t(3392);const s="admin/type/",e="admin/type/scopes";let c=(()=>{class r{constructor(m,C,M){this.http=m,this.context=C,this.dnnContext=M}apiUrl(m){return this.dnnContext.$2sxc.http.apiUrl(m)}retrieveContentType(m){return this.http.get(this.apiUrl("admin/type/get"),{params:{appId:this.context.appId.toString(),contentTypeId:m}})}retrieveContentTypes(m){return this.http.get(this.apiUrl("admin/type/list"),{params:{appId:this.context.appId.toString(),scope:m}})}getScopes(){return this.http.get(this.apiUrl(e),{params:{appId:this.context.appId.toString()}}).pipe((0,l.k)(m=>{const C=m.old;return Object.keys(C).map(O=>({name:C[O],value:O}))}))}getScopesV2(){return this.http.get(this.apiUrl(e),{params:{appId:this.context.appId.toString()}}).pipe((0,l.k)(m=>m.scopes))}save(m){return this.http.post(this.apiUrl("admin/type/save"),m,{params:{appid:this.context.appId.toString()}})}delete(m){return this.http.delete(this.apiUrl("admin/type/delete"),{params:{appid:this.context.appId.toString(),staticName:m.StaticName}})}import(m){const C=new FormData;for(const M of m)C.append("File",M);return this.http.post(this.apiUrl("admin/type/import"),C,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}createGhost(m){return this.http.post(this.apiUrl("admin/type/addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:m}})}static#t=this.\u0275fac=function(C){return new(C||r)(n.CoB(g.KK),n.CoB(d.e),n.CoB(i.es))};static#n=this.\u0275prov=n.wxM({token:r,factory:r.\u0275fac})}return r})()},6964:(D,h,t)=>{t.d(h,{M:()=>s});var l=t(6028),d=t(9644),n=t(4896),g=t(1332),i=t(3392);let s=(()=>{class a{constructor(e,o,p){this.http=e,this.context=o,this.dnnContext=p}getContentInfo(e){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(d._+"Get"),{params:{appid:this.context.appId.toString(),zoneId:this.context.zoneId.toString(),scope:e}})}exportParts(e,o,p){const _=this.dnnContext.$2sxc.http.apiUrl(d._+"Export")+"?appId="+this.context.appId.toString()+"&zoneId="+this.context.zoneId.toString()+"&contentTypeIdsString="+e.join(";")+"&entityIdsString="+o.join(";")+"&templateIdsString="+p.join(";");window.open(_,"_blank","")}static#t=this.\u0275fac=function(o){return new(o||a)(n.CoB(g.KK),n.CoB(l.e),n.CoB(i.es))};static#n=this.\u0275prov=n.wxM({token:a,factory:a.\u0275fac})}return a})()},6503:(D,h,t)=>{t.d(h,{S:()=>s});var l=t(5343),d=t(6028),n=t(4896),g=t(1332),i=t(3392);let s=(()=>{class a{constructor(e,o,p){this.http=e,this.context=o,this.dnnContext=p}getAppInfo(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(l.i+"Statistics"),{params:{appid:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}exportApp(e,o){const p=this.dnnContext.$2sxc.http.apiUrl(l.i+"Export")+"?appId="+this.context.appId+"&zoneId="+this.context.zoneId+"&includeContentGroups="+e+"&resetAppGuid="+o;window.open(p,"_blank","")}exportForVersionControl({includeContentGroups:e,resetAppGuid:o,withFiles:p}){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(l.i+"SaveData"),{params:{appid:this.context.appId.toString(),zoneId:this.context.zoneId.toString(),includeContentGroups:e.toString(),resetAppGuid:o.toString(),withPortalFiles:p.toString()}})}static#t=this.\u0275fac=function(o){return new(o||a)(n.CoB(g.KK),n.CoB(d.e),n.CoB(i.es))};static#n=this.\u0275prov=n.wxM({token:a,factory:a.\u0275fac})}return a})()},9644:(D,h,t)=>{t.d(h,{M:()=>a,_:()=>s});var l=t(5343),d=t(6028),n=t(4896),g=t(1332),i=t(3392);const s="admin/appParts/";let a=(()=>{class E{constructor(o,p,_){this.http=o,this.context=p,this.dnnContext=_}importAppParts(o){const p=new FormData;return p.append("File",o),this.http.post(this.dnnContext.$2sxc.http.apiUrl(s+"Import"),p,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}resetApp(o){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(l.i+"Reset"),{},{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString(),withPortalFiles:o.toString()}})}static#t=this.\u0275fac=function(p){return new(p||E)(n.CoB(g.KK),n.CoB(d.e),n.CoB(i.es))};static#n=this.\u0275prov=n.wxM({token:E,factory:E.\u0275fac})}return E})()},8112:(D,h,t)=>{t.d(h,{K0:()=>s.K0,Xi:()=>d.X,cV:()=>s.cV,fn:()=>s.fn,kN:()=>s.kN,kX:()=>s.kX,mK:()=>l.m,ot:()=>s.ot,sj:()=>a.s});var l=t(533),d=t(692),s=(t(6964),t(6503),t(9644),t(900)),a=t(7184)},900:(D,h,t)=>{t.d(h,{K0:()=>m,cV:()=>c,fn:()=>r,kN:()=>x,kX:()=>C,ot:()=>v});var l=t(9616),d=t(9432),n=t(604),g=t(4172),i=t(616),s=t(6028),a=t(4896),E=t(1332),e=t(3392);const v="admin/query/Run",c="admin/query/DebugStream",r="admin/query/Save",x="admin/query/Get",m="admin/query/DataSources";let C=(()=>{class M{constructor(I,P,f){this.http=I,this.context=P,this.dnnContext=f}getAll(I){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(g.U1),{params:{appId:this.context.appId.toString(),contentType:I}})}importQuery(I){return(0,l.Q)((0,i.S)(I)).pipe((0,d.G)(P=>this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/query/import"),{AppId:this.context.appId.toString(),ContentBase64:P})),(0,n.k)(P=>({Success:P,Messages:[]})))}clonePipeline(I){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/query/Clone"),{params:{Id:I.toString(),appId:this.context.appId.toString()}})}delete(I){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("admin/query/Delete"),{params:{appId:this.context.appId.toString(),Id:I.toString()}})}static#t=this.\u0275fac=function(P){return new(P||M)(a.CoB(E.KK),a.CoB(s.e),a.CoB(e.es))};static#n=this.\u0275prov=a.wxM({token:M,factory:M.\u0275fac})}return M})()},7184:(D,h,t)=>{t.d(h,{s:()=>p});var l=t(6028),d=t(4896),n=t(1332),g=t(3392);const i="admin/view/",s=i+"all",a=i+"delete",E=i+"import",e=i+"polymorphism",o=i+"usage";let p=(()=>{class _{constructor(c,r,x){this.http=c,this.context=r,this.dnnContext=x}getAll(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(s),{params:{appId:this.context.appId.toString()}})}delete(c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(a),{params:{appId:this.context.appId.toString(),Id:c.toString()}})}import(c){const r=new FormData;return r.append("File",c),this.http.post(this.dnnContext.$2sxc.http.apiUrl(E),r,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}export(c){const r=this.dnnContext.$2sxc.http.apiUrl(i+"json")+"?appId="+this.context.appId+"&viewId="+c;window.open(r,"_blank","")}getPolymorphism(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(e),{params:{appId:this.context.appId.toString()}})}getUsage(c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(o),{params:{appId:this.context.appId.toString(),guid:c}})}static#t=this.\u0275fac=function(r){return new(r||_)(d.CoB(n.KK),d.CoB(l.e),d.CoB(g.es))};static#n=this.\u0275prov=d.wxM({token:_,factory:_.\u0275fac})}return _})()},5343:(D,h,t)=>{t.d(h,{i:()=>E,t:()=>e});var l=t(9432),d=t(8916),n=t(8288),g=t(6028),i=t(4896),s=t(1332),a=t(3392);const E="admin/app/";let e=(()=>{class o{constructor(_,v,c){this.http=_,this.context=v,this.dnnContext=c}importApp(_,v,c=!1){const r=new FormData;return r.append("File",_),r.append("Name",v??""),this.http.post(this.dnnContext.$2sxc.http.apiUrl(E+"Import"),r,{params:{zoneId:this.context.zoneId.toString()}}).pipe((0,l.G)(x=>{if(c&&x.Messages[0]?.MessageType===n.cB.Warning){const m=prompt(x.Messages[0].Text+" Would you like to install it using another folder name?");if(m)return this.importApp(_,m,!0)}return(0,d.of)(x)}))}static#t=this.\u0275fac=function(v){return new(v||o)(i.CoB(s.KK),i.CoB(g.e),i.CoB(a.es))};static#n=this.\u0275prov=i.wxM({token:o,factory:o.\u0275fac})}return o})()},9016:(D,h,t)=>{t.r(h),t.d(h,{ManageContentListModule:()=>f});var l=t(8752),d=t(9540),n=t(5056),g=t(4672),i=t(600),s=t(2328),a=t(4648),E=t(6028),e=t(988),o=t(5204),p=t(404),_=t(6232),v=t(5392);const c={name:"MANAGE_CONTENT_LIST_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent:()=>(0,v.c)(function*(){const{ManageContentListComponent:u}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts")]).then(t.bind(t,1403));return u})()};var r=t(4896);const x=[{path:"",component:_.Y,data:{dialog:c},children:[{matcher:p.aM,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2022_list_mjs"),t.e("default-node_modules_angular_material_fesm2022_select_mjs"),t.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"),t.e("default-node_modules_angular_material_fesm2022_card_mjs"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_material_fesm2022_menu_mjs"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-fd552b1")]).then(t.bind(t,3548)).then(u=>u.EditModule)},{matcher:p.CK,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,320)).then(u=>u.RefreshEditModule)},{path:":guid/:part/:index/replace",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2022_select_mjs"),t.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"),t.e("common")]).then(t.bind(t,4488)).then(u=>u.ReplaceContentModule)}]}];let m=(()=>{class u{static#t=this.\u0275fac=function(A){return new(A||u)};static#n=this.\u0275mod=r.a4G({type:u});static#o=this.\u0275inj=r.s3X({imports:[o.qQ.forChild(x),o.qQ]})}return u})();var C=t(4660),M=t(1224),O=t(4172),I=t(8112),P=t(12);let f=(()=>{class u{static#t=this.\u0275fac=function(A){return new(A||u)};static#n=this.\u0275mod=r.a4G({type:u});static#o=this.\u0275inj=r.s3X({providers:[E.e,C.e,O.yY,I.mK],imports:[n.MD,m,e.q,i.sr,g.oJ,s.oB,d.OI,a.uE,l.O0.forChild((0,M.C)(P.I))]})}return u})()},6232:(D,h,t)=>{t.d(h,{Y:()=>s});var l=t(624),d=t(6028),n=t(4896),g=t(600),i=t(5204);let s=(()=>{class a{constructor(e,o,p,_,v,c){this.dialog=e,this.viewContainerRef=o,this.router=p,this.route=_,this.context=v,this.changeDetectorRef=c;const r=this.router.getCurrentNavigation();this.dialogData=r?.extras?.state||{}}ngOnInit(){const e=this.route.snapshot.data.dialog;if(null==e)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,l.y)("Open dialog:",e.name,"Context id:",this.context.id,"Context:",this.context),e.getComponent().then(o=>{this.dialog._dialogAnimatingOpen&&this.dialog._lastDialogRef?this.dialog._lastDialogRef.afterOpened().subscribe(()=>{this.openDialogComponent(e,o)}):this.openDialogComponent(e,o)})}ngOnDestroy(){this.dialogRef.close()}openDialogComponent(e,o){e.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(o,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel",`dialog-panel-${e.panelSize}`,e.showScrollbar?"show-scrollbar":"no-scrollbar",...e.panelClass?e.panelClass:[]],position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(p=>{(0,l.y)("Dialog was closed:",e.name,"Data:",p);const _=p;if(null==_?.navigateUrl)if(this.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch{}else this.router.navigate(["./"],this.route.snapshot.url.length>0?{relativeTo:this.route.parent,state:p}:{relativeTo:this.route.parent.parent,state:p});else this.router.navigate([_.navigateUrl])}),this.changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(o){return new(o||a)(n.GI1(g.qW),n.GI1(n.y8U),n.GI1(i.E5),n.GI1(i.gV),n.GI1(d.e),n.GI1(n.kD9))};static#n=this.\u0275cmp=n.In1({type:a,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(o,p){}})}return a})()},616:(D,h,t)=>{function l(n){return new Promise((g,i)=>{const s=new FileReader;s.readAsDataURL(n),s.onload=()=>{g(s.result.split(",")[1])},s.onerror=a=>{i(a)}})}function d(n){return new Promise((g,i)=>{const s=new FileReader;s.readAsText(n),s.onload=()=>{g(s.result)},s.onerror=a=>{i(a)}})}t.d(h,{M:()=>d,S:()=>l})},1224:(D,h,t)=>{t.d(h,{C:()=>n});var l=t(1332),d=t(8752);function n(g){return{loader:{provide:d._E,useFactory:g,deps:[l.KK]},defaultLanguage:"en",isolate:!0}}},12:(D,h,t)=>{t.d(h,{I:()=>d});var l=t(8228);function d(n){return new l.A(n,"./i18n/",`.js?${window.sxcVersion}`)}},8228:(D,h,t)=>{t.d(h,{A:()=>n});var l=t(1672),d=t(8916);class n{constructor(i,s,a){this.http=i,this.prefix=s,this.suffix=a}getTranslation(i){return this.http.get(`${this.prefix}${i}${this.suffix}`).pipe((0,l.a)(s=>(console.warn(`Translation: Failed to get language '${i}' from ${this.prefix}`,s),(0,d.of)({}))))}}}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.04.01/dist/ng-edit/projects_eav-ui_src_app_manage-content-list_manage-content-list_module_ts.f3067f546e905a40.js.map