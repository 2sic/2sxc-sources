"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_permissions_permissions_module_ts"],{1092:(P,d,t)=>{t.d(d,{g:()=>m});var i=t(400),n=t(2611),o=t(9039),E=t(4860),r=t(6232);let m=(()=>{class _{constructor(a,s,e){this.http=a,this.context=s,this.dnnContext=e}create(a,s){return this.http.post(`app/auto/data/${a}`,s,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(a,s,e){return this.http.post(`app/auto/data/${a}/${s}`,e,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(a,s,e){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(i.Uo+"delete"),{params:{contentType:a,id:s.toString(),appId:this.context.appId.toString(),force:e.toString()}})}static#t=this.\u0275fac=function(s){return new(s||_)(o.LFG(E.eN),o.LFG(n._),o.LFG(r._y))};static#s=this.\u0275prov=o.Yz7({token:_,factory:_.\u0275fac})}return _})()},7641:(P,d,t)=>{t.d(d,{g:()=>n});var i=t(1670);const n={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:()=>(0,i.Z)(function*(){const{PermissionsComponent:o}=yield t.e("projects_eav-ui_src_app_permissions_permissions_component_ts").then(t.bind(t,8660));return o})()}},3100:(P,d,t)=>{t.d(d,{T:()=>_});var i=t(91),n=t(8226),o=t(891),E=t(7641),r=t(9039);const m=[{path:"",component:o.r,data:{dialog:E.g},children:[{matcher:n.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2022_list_mjs"),t.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"),t.e("default-node_modules_angular_material_fesm2022_card_mjs"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2022_menu_mjs"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-41d340")]).then(t.bind(t,152)).then(l=>l.EditModule)},{matcher:n.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,9703)).then(l=>l.RefreshEditModule)}]}];let _=(()=>{class l{static#t=this.\u0275fac=function(e){return new(e||l)};static#s=this.\u0275mod=r.oAB({type:l});static#a=this.\u0275inj=r.cJS({imports:[i.Bz.forChild(m),i.Bz]})}return l})()},806:(P,d,t)=>{t.r(d),t.d(d,{PermissionsModule:()=>u});var i=t(6575),n=t(895),o=t(257),E=t(6861),r=t(6515),m=t(9409),_=t(1092),l=t(3078),a=t(2611),s=t(7138),e=t(3100),c=t(7477),D=t(7782),h=t(9039);let u=(()=>{class M{static#t=this.\u0275fac=function(O){return new(O||M)};static#s=this.\u0275mod=h.oAB({type:M});static#a=this.\u0275inj=h.cJS({providers:[a._,D.q,c.D,_.g],imports:[i.ez,e.T,s.q,E.Is,n.ot,r.Ps,l.o,o.si,m.ZX]})}return M})()},7477:(P,d,t)=>{t.d(d,{D:()=>m});var i=t(2611),n=t(9039),o=t(4860),E=t(6232);let m=(()=>{class _{constructor(a,s,e){this.http=a,this.context=s,this.dnnContext=e}getMetadata(a,s,e,c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/metadata/get"),{params:{appId:this.context.appId.toString(),targetType:a.toString(),keyType:s,key:e.toString(),...c&&{contentType:c}}})}static#t=this.\u0275fac=function(s){return new(s||_)(n.LFG(o.eN),n.LFG(i._),n.LFG(E._y))};static#s=this.\u0275prov=n.Yz7({token:_,factory:_.\u0275fac})}return _})()},7782:(P,d,t)=>{t.d(d,{q:()=>m});var i=t(9736),n=t(1092),o=t(196),E=t(7477),r=t(9039);let m=(()=>{class _{constructor(a,s){this.metadataService=a,this.entitiesService=s}getAll(a,s,e){return this.metadataService.getMetadata(a,s,e,o.Zy.contentTypes.permissions).pipe((0,i.U)(c=>c.Items))}delete(a){return this.entitiesService.delete(o.Zy.contentTypes.permissions,a,!1)}static#t=this.\u0275fac=function(s){return new(s||_)(r.LFG(E.D),r.LFG(n.g))};static#s=this.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac})}return _})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.00/dist/ng-edit/projects_eav-ui_src_app_permissions_permissions_module_ts.bd6d80693724c536.js.map