"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_apps-management_module_ts"],{1352:(u,d,t)=>{t.r(d),t.d(d,{AppsManagementModule:()=>H});var e=t(6362),l=t(587),a=t(7317),m=t(1961),c=t(1130),i=t(5758),o=t(6531),p=t(5590),s=t(4683),h=t(2796),r=t(1434),v=t(6623),g=t(2528),I=t(2379),O=t(7465),S=t(4536),U=t(3436),R=t(5368),j=t(6500),y=t(3135),D=t(2977),P=t(2649),E=t(6167),f=t(1425),M=t(4929);const T={name:"APPS_MANAGEMENT_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{AppsManagementNavComponent:n}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts")]).then(t.bind(t,2337));return n})}},z={name:"CREATE_APP_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{CreateAppComponent:n}=yield t.e("projects_eav-ui_src_app_apps-management_create-app_create-app_component_ts").then(t.bind(t,3640));return n})}},F={name:"CREATE_INHERITED_APP_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{CreateInheritedAppComponent:n}=yield t.e("projects_eav-ui_src_app_apps-management_create-inherited-app_create-inherited-app_component_ts").then(t.bind(t,5364));return n})}};var L=t(639),C=t(3184);const G=[{path:"",component:E.r,data:{dialog:T},children:[{path:"",redirectTo:"system",pathMatch:"full"},{path:"system",component:f.O,data:{title:"System Info"},children:[L.U.getRoute()]},{path:"list",component:f.O,children:[{path:"import",loadChildren:()=>t.e("common").then(t.bind(t,6066)).then(n=>n.ImportAppModule)},{path:"create",component:E.r,data:{dialog:z}},{path:"create-inherited",component:E.r,data:{dialog:F}},{path:":appId",loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_permissions_index_ts"),t.e("default-projects_eav-ui_src_app_dev-rest_index_ts-projects_eav-ui_src_app_shared_components_f-c34542"),t.e("default-projects_eav-ui_src_app_content-export_services_content-export_service_ts-projects_ea-a04fea"),t.e("default-projects_eav-ui_src_app_app-administration_app-administration_module_ts")]).then(t.bind(t,4883)).then(n=>n.AppAdministrationModule)},{matcher:P.sB,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-projects_eav-ui_src_app_shared_translation_translate-configuration_ts-projects_eav-ui-de1a04"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-7da752")]).then(t.bind(t,7155)).then(n=>n.EditModule)},{matcher:P.dQ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(n=>n.RefreshEditModule)}],data:{title:"Apps in this Zone"}},{path:"languages",component:f.O,data:{title:"Zone Languages"}},{path:"license",component:f.O,data:{title:"Extensions / Features"},children:[L.U.getRoute()]}]}];let B=(()=>{class n{}return n.\u0275fac=function(x){return new(x||n)},n.\u0275mod=C.oAB({type:n}),n.\u0275inj=C.cJS({imports:[[D.Bz.forChild(G)],D.Bz]}),n})();var K=t(5446),W=t(1528),N=t(5256),$=t(3231);let H=(()=>{class n{}return n.\u0275fac=function(x){return new(x||n)},n.\u0275mod=C.oAB({type:n}),n.\u0275inj=C.cJS({providers:[R._,K.A,$.b,W.G,N.a,j.x,S.Kw],imports:[[B,y.q,i.Is,e.ez,U.o,a.ot,p.Ps,v.rP,I.Nh,c.si,O.jb,m.QW,l.u5,s.c,h.Tx,l.UX,r.LD,g.ZX,o.To]]}),n})()},5446:(u,d,t)=>{t.d(d,{A:()=>i});var e=t(9322),l=t(5368),a=t(3184),m=t(8784),c=t(2425);let i=(()=>{class o{constructor(s,h,r){this.http=s,this.context=h,this.dnnContext=r}apiUrl(s){return this.dnnContext.$2sxc.http.apiUrl(s)}getAll(){return this.http.get(this.apiUrl(e.H+"list"),{params:{zoneId:this.context.zoneId.toString()}})}getInheritable(){return this.http.get(this.apiUrl(e.H+"InheritableApps"),{params:{zoneId:this.context.zoneId.toString()}})}create(s,h){return this.http.post(this.apiUrl(e.H+"app"),{},{params:Object.assign({zoneId:this.context.zoneId.toString(),name:s},null!=h&&{inheritAppId:h})})}delete(s){return this.http.delete(this.apiUrl(e.H+"app"),{params:{zoneId:this.context.zoneId.toString(),appId:s.toString()}})}flushCache(s){return this.http.get(this.apiUrl(e.H+"flushcache"),{params:{zoneId:this.context.zoneId.toString(),appId:s.toString()}})}}return o.\u0275fac=function(s){return new(s||o)(a.LFG(m.eN),a.LFG(l._),a.LFG(c._y))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac}),o})()},1528:(u,d,t)=>{t.d(d,{G:()=>p});var e=t(635),l=t(3889),a=t(3184),m=t(8784),c=t(2425);const o="sys/license/";let p=(()=>{class s{constructor(r,v){this.http=r,this.dnnContext=v}saveFeatures(r){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/feature/SaveNew"),r)}getLicenses(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(o+"Summary"))}uploadLicense(r){const v=new FormData;return v.append("File",r),this.http.post(this.dnnContext.$2sxc.http.apiUrl(o+"Upload"),v).pipe((0,e.U)(g=>({Success:g.Success,Messages:[{MessageType:g.Success?l.D.Success:l.D.Error,Text:`License ${g.Success?"uploaded":"upload failed"}: ${g.Message}`}]})))}retrieveLicense(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(o+"Retrieve"))}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(m.eN),a.LFG(c._y))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac}),s})()},5256:(u,d,t)=>{t.d(d,{a:()=>c});var e=t(3184),l=t(8784),a=t(2425);let c=(()=>{class i{constructor(p,s){this.http=p,this.dnnContext=s}activatePageLog(p){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("sys/log/EnableDebug"),{params:{duration:p.toString()}})}}return i.\u0275fac=function(p){return new(p||i)(e.LFG(l.eN),e.LFG(a._y))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})()},639:(u,d,t)=>{t.d(d,{U:()=>m});var e=t(6167),l=t(4929);const a={name:"REGISTRATION_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,l.mG)(this,void 0,void 0,function*(){const{RegistrationComponent:c}=yield t.e("projects_eav-ui_src_app_apps-management_sub-dialogs_registration_registration_component_ts").then(t.bind(t,3561));return c})}};class m{static getRoute(){return{path:"registration",component:e.r,data:{dialog:a,title:"Registration"}}}static getUrl(){return"registration"}}}}]);
//# sourceMappingURL=https://sources.2sxc.org/14.11.00/ng-edit/projects_eav-ui_src_app_apps-management_apps-management_module_ts.da083f0609ac64a0.js.map