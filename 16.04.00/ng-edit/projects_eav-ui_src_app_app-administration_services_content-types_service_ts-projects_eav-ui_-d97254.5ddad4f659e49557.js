"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_services_content-types_service_ts-projects_eav-ui_-d97254","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts"],{7066:(v,p,t)=>{t.d(p,{_:()=>e,s:()=>r});var c=t(635),h=t(5368),o=t(3184),m=t(8784),i=t(2425);const e="admin/type/";let r=(()=>{class u{constructor(n,l,d){this.http=n,this.context=l,this.dnnContext=d}apiUrl(n){return this.dnnContext.$2sxc.http.apiUrl(n)}retrieveContentType(n){return this.http.get(this.apiUrl(e+"get"),{params:{appId:this.context.appId.toString(),contentTypeId:n}})}retrieveContentTypes(n){return this.http.get(this.apiUrl(e+"list"),{params:{appId:this.context.appId.toString(),scope:n}})}getScopes(){return this.http.get(this.apiUrl(e+"scopes"),{params:{appId:this.context.appId.toString()}}).pipe((0,c.U)(n=>Object.keys(n).map(d=>({name:n[d],value:d}))))}save(n){return this.http.post(this.apiUrl(e+"save"),n,{params:{appid:this.context.appId.toString()}})}delete(n){return this.http.delete(this.apiUrl(e+"delete"),{params:{appid:this.context.appId.toString(),staticName:n.StaticName}})}import(n){const l=new FormData;for(const d of n)l.append("File",d);return this.http.post(this.apiUrl(e+"import"),l,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}createGhost(n){return this.http.post(this.apiUrl(e+"addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:n}})}}return u.\u0275fac=function(n){return new(n||u)(o.LFG(m.eN),o.LFG(h._),o.LFG(i._y))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac}),u})()},3182:(v,p,t)=>{t.r(p),t.d(p,{ManageContentListModule:()=>L});var c=t(7514),h=t(6554),o=t(6362),m=t(7317),i=t(5758),e=t(5590),r=t(2528),u=t(5368),a=t(3135),n=t(2977),l=t(2649),d=t(6167),C=t(4929);const E={name:"MANAGE_CONTENT_LIST_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent(){return(0,C.mG)(this,void 0,void 0,function*(){const{ManageContentListComponent:s}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts")]).then(t.bind(t,3436));return s})}};var g=t(3184);const f=[{path:"",component:d.r,data:{dialog:E},children:[{matcher:l.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_select_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("default-node_modules_angular_material_fesm2015_badge_mjs-node_modules_angular_material_fesm20-df7c03"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-9d77d2")]).then(t.bind(t,1249)).then(s=>s.EditModule)},{matcher:l.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(s=>s.RefreshEditModule)},{path:":guid/:part/:index/replace",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_select_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("common")]).then(t.bind(t,6766)).then(s=>s.ReplaceContentModule)}]}];let O=(()=>{class s{}return s.\u0275fac=function(M){return new(M||s)},s.\u0275mod=g.oAB({type:s}),s.\u0275inj=g.cJS({imports:[[n.Bz.forChild(f)],n.Bz]}),s})();var x=t(9989),P=t(7392),R=t(4856),y=t(4536),I=t(1392);let L=(()=>{class s{}return s.\u0275fac=function(M){return new(M||s)},s.\u0275mod=g.oAB({type:s}),s.\u0275inj=g.cJS({providers:[u._,x.e,R.WV,y.Kw],imports:[[o.ez,O,a.q,i.Is,m.ot,e.Ps,h._t,r.ZX,c.aw.forChild((0,P.f)(I.W))]]}),s})()},6167:(v,p,t)=>{t.d(p,{r:()=>e});var c=t(4480),h=t(5368),o=t(3184),m=t(5758),i=t(2977);let e=(()=>{class r{constructor(a,n,l,d,C,E){var g;this.dialog=a,this.viewContainerRef=n,this.router=l,this.route=d,this.context=C,this.changeDetectorRef=E;const f=this.router.getCurrentNavigation();this.dialogData=(null===(g=null==f?void 0:f.extras)||void 0===g?void 0:g.state)||{}}ngOnInit(){const a=this.route.snapshot.data.dialog;if(null==a)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,c.P)("Open dialog:",a.name,"Context id:",this.context.id,"Context:",this.context),a.getComponent().then(n=>{this.dialog._dialogAnimatingOpen&&this.dialog._lastDialogRef?this.dialog._lastDialogRef.afterOpened().subscribe(()=>{this.openDialogComponent(a,n)}):this.openDialogComponent(a,n)})}ngOnDestroy(){this.dialogRef.close()}openDialogComponent(a,n){a.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(n,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel",`dialog-panel-${a.panelSize}`,a.showScrollbar?"show-scrollbar":"no-scrollbar",...a.panelClass?a.panelClass:[]],position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(l=>{(0,c.P)("Dialog was closed:",a.name,"Data:",l);const d=l;if(null==(null==d?void 0:d.navigateUrl))if(this.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(C){}else this.router.navigate(["./"],this.route.snapshot.url.length>0?{relativeTo:this.route.parent,state:l}:{relativeTo:this.route.parent.parent,state:l});else this.router.navigate([d.navigateUrl])}),this.changeDetectorRef.markForCheck()}}return r.\u0275fac=function(a){return new(a||r)(o.Y36(m.uw),o.Y36(o.s_b),o.Y36(i.F0),o.Y36(i.gz),o.Y36(h._),o.Y36(o.sBO))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(a,n){},styles:[""]}),r})()},9934:(v,p,t)=>{function c(o){return new Promise((m,i)=>{const e=new FileReader;e.readAsDataURL(o),e.onload=()=>{m(e.result.split(",")[1])},e.onerror=r=>{i(r)}})}function h(o){return new Promise((m,i)=>{const e=new FileReader;e.readAsText(o),e.onload=()=>{m(e.result)},e.onerror=r=>{i(r)}})}t.d(p,{B:()=>h,s:()=>c})},7392:(v,p,t)=>{t.d(p,{f:()=>o});var c=t(8784),h=t(7514);function o(m){return{loader:{provide:h.Zw,useFactory:m,deps:[c.eN]},defaultLanguage:"en",isolate:!0}}},1392:(v,p,t)=>{t.d(p,{W:()=>h});var c=t(1183);function h(o){return new c.M(o,"./i18n/",`.js?${window.sxcVersion}`)}},1183:(v,p,t)=>{t.d(p,{M:()=>o});var c=t(3158),h=t(745);class o{constructor(i,e,r){this.http=i,this.prefix=e,this.suffix=r}getTranslation(i){return this.http.get(`${this.prefix}${i}${this.suffix}`).pipe((0,c.K)(e=>(console.warn(`Translation: Failed to get language '${i}' from ${this.prefix}`,e),(0,h.of)({}))))}}}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.04.00/ng-edit/projects_eav-ui_src_app_app-administration_services_content-types_service_ts-projects_eav-ui_-d97254.5ddad4f659e49557.js.map