"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_permissions_index_ts","projects_eav-ui_src_app_permissions_permissions_module_ts","projects_eav-ui_src_app_permissions_permissions_component_ts"],{1092:(E,_,t)=>{t.d(_,{g:()=>h});var i=t(400),s=t(2611),r=t(9039),u=t(4860),o=t(6232);let h=(()=>{class n{constructor(e,a,l){this.http=e,this.context=a,this.dnnContext=l}create(e,a){return this.http.post(`app/auto/data/${e}`,a,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(e,a,l){return this.http.post(`app/auto/data/${e}/${a}`,l,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(e,a,l){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(i.Uo+"delete"),{params:{contentType:e,id:a.toString(),appId:this.context.appId.toString(),force:l.toString()}})}static#t=this.\u0275fac=function(a){return new(a||n)(r.LFG(u.eN),r.LFG(s._),r.LFG(o._y))};static#e=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac})}return n})()},8657:(E,_,t)=>{t.d(_,{i:()=>s});var i=t(196);let s=(()=>{class r{static#t=this.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>t.e("projects_eav-ui_src_app_permissions_permissions_module_ts").then(t.bind(t,806)).then(o=>o.PermissionsModule),data:{title:"Permissions"}};static getUrl(o,h,n){return`permissions/${o}/${h}/${n}`}static getUrlApp(o){return this.getUrl(i.Zy.metadata.app.targetType,i.Zy.metadata.app.keyType,o.toString())}static getUrlAttribute(o){return this.getUrl(i.Zy.metadata.attribute.targetType,i.Zy.metadata.attribute.keyType,o.toString())}static getUrlContentType(o){return this.getUrlEntity(o)}static getUrlEntity(o){return this.getUrl(i.Zy.metadata.entity.targetType,i.Zy.metadata.entity.keyType,o)}static getUrlLanguage(o){return this.getUrl(i.Zy.metadata.language.targetType,i.Zy.metadata.language.keyType,o)}}return r})()},8088:(E,_,t)=>{t.d(_,{Do:()=>h.D,iK:()=>i.i,qQ:()=>n.q});var i=t(8657),h=(t(7641),t(3100),t(8660),t(806),t(7477)),n=t(7782)},7641:(E,_,t)=>{t.d(_,{g:()=>s});var i=t(1670);const s={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:()=>(0,i.Z)(function*(){const{PermissionsComponent:r}=yield t.e("projects_eav-ui_src_app_permissions_permissions_component_ts").then(t.bind(t,8660));return r})()}},3100:(E,_,t)=>{t.d(_,{T:()=>n});var i=t(91),s=t(8226),r=t(891),u=t(7641),o=t(9039);const h=[{path:"",component:r.r,data:{dialog:u.g},children:[{matcher:s.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2022_list_mjs"),t.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"),t.e("default-node_modules_angular_material_fesm2022_card_mjs"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2022_menu_mjs"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_features-6506ca")]).then(t.bind(t,152)).then(g=>g.EditModule)},{matcher:s.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,9703)).then(g=>g.RefreshEditModule)}]}];let n=(()=>{class g{static#t=this.\u0275fac=function(l){return new(l||g)};static#e=this.\u0275mod=o.oAB({type:g});static#s=this.\u0275inj=o.cJS({imports:[i.Bz.forChild(h),i.Bz]})}return g})()},8660:(E,_,t)=>{t.r(_),t.d(_,{PermissionsComponent:()=>A});var i=t(8071),s=t(3839),r=t(9736),u=t(6041),o=t(5253),h=t(6433),n=t(196),g=t(2957),e=t(9039),a=t(9498),l=t(6515),m=t(257);let O=(()=>{class v{agInit(c){this.params=c}refresh(c){return!0}deletePermission(){this.params.onDelete(this.params.data)}static#t=this.\u0275fac=function(d){return new(d||v)};static#e=this.\u0275cmp=e.Xpm({type:v,selectors:[["app-permissions-actions"]],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","tippy","Delete",1,"eav-grid-action-button","highlight",3,"click"]],template:function(d,p){1&d&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return p.deletePermission()}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()())},dependencies:[a.$,l.Hw,m.wG]})}return v})();var P=t(7782),D=t(91),C=t(6861),T=t(9409),f=t(895),M=t(8621),I=t(6575);function U(v,R){if(1&v){const c=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._uU(3,"Permissions"),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){e.CHM(c);const p=e.oxw();return e.KtG(p.closeDialog())}),e.TgZ(5,"mat-icon"),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"div",5),e._UZ(8,"router-outlet"),e.TgZ(9,"div",6),e._UZ(10,"ag-grid-angular",7),e.qZA(),e.TgZ(11,"mat-dialog-actions",8)(12,"button",9),e.NdJ("click",function(){e.CHM(c);const p=e.oxw();return e.KtG(p.editPermission(null))}),e.TgZ(13,"mat-icon"),e._uU(14,"add"),e.qZA()()()()()}if(2&v){const c=e.oxw();e.xp6(10),e.Q6J("rowData",R.permissions)("gridOptions",c.gridOptions)}}let A=(()=>{class v extends u.H{constructor(c,d,p,y,L){super(c,d),this.router=c,this.route=d,this.dialogRef=p,this.permissionsService=y,this.snackBar=L,this.permissions$=new i.X(void 0),this.gridOptions=this.buildGridOptions(),this.targetType=parseInt(this.route.snapshot.paramMap.get("targetType"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key"),this.prefills={[n.Zy.metadata.language.targetType]:{PermissionType:"language"}}}ngOnInit(){this.fetchPermissions(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchPermissions()})),this.viewModel$=(0,s.a)([this.permissions$]).pipe((0,r.U)(([c])=>({permissions:c})))}ngOnDestroy(){this.permissions$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}fetchPermissions(){this.permissionsService.getAll(this.targetType,this.keyType,this.key).subscribe(c=>{this.permissions$.next(c)})}editPermission(c){let d;d=null==c?{items:[{ContentTypeName:n.Zy.contentTypes.permissions,For:{Target:Object.values(n.Zy.metadata).find(y=>y.targetType===this.targetType)?.target??this.targetType.toString(),TargetType:this.targetType,...this.keyType===n.Zy.keyTypes.guid&&{Guid:this.key},...this.keyType===n.Zy.keyTypes.number&&{Number:parseInt(this.key,10)},...this.keyType===n.Zy.keyTypes.string&&{String:this.key}},...this.prefills[this.targetType]&&{Prefill:this.prefills[this.targetType]}}]}:{items:[{EntityId:c.Id}]};const p=(0,g.f)(d);this.router.navigate([`edit/${p}`],{relativeTo:this.route})}deletePermission(c){confirm(`Delete '${c.Title}' (${c.Id})?`)&&(this.snackBar.open("Deleting..."),this.permissionsService.delete(c.Id).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchPermissions()}))}buildGridOptions(){return{...h.f,columnDefs:[{headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter",valueGetter:d=>d.data.Id,cellRenderer:o.m,cellRendererParams:{tooltipGetter:p=>`ID: ${p.Id}\nGUID: ${p.Guid}`}},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,sort:"asc",filter:"agTextColumnFilter",onCellClicked:d=>{this.editPermission(d.data)},valueGetter:d=>d.data.Title},{field:"Identity",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:d=>d.data.Identity},{field:"Condition",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:d=>d.data.Condition},{field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:d=>d.data.Grant},{width:42,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:O,cellRendererParams:(()=>({onDelete:p=>this.deletePermission(p)}))()}]}}static#t=this.\u0275fac=function(d){return new(d||v)(e.Y36(D.F0),e.Y36(D.gz),e.Y36(C.so),e.Y36(P.q),e.Y36(T.ux))};static#e=this.\u0275cmp=e.Xpm({type:v,selectors:[["app-permissions"]],features:[e.qOj],decls:2,vars:3,consts:[["class","eav-dialog nav-component-wrapper"],[1,"eav-dialog","nav-component-wrapper"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content","nav-component-wrapper"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],["align","end"],["mat-fab","","mat-elevation-z24","","tippy","Create a new permission",1,"grid-fab",3,"click"]],template:function(d,p){if(1&d&&(e.YNc(0,U,15,2,"div",0),e.ALo(1,"async")),2&d){let y;e.um2(0,(y=e.lcZ(1,1,p.viewModel$))?0:-1,y)}},dependencies:[D.lC,a.$,C.H8,f.RK,f.cs,l.Hw,M.N8,I.Ov]})}return v})()},806:(E,_,t)=>{t.r(_),t.d(_,{PermissionsModule:()=>D});var i=t(6575),s=t(895),r=t(257),u=t(6861),o=t(6515),h=t(9409),n=t(1092),g=t(3078),e=t(2611),a=t(7138),l=t(3100),m=t(7477),O=t(7782),P=t(9039);let D=(()=>{class C{static#t=this.\u0275fac=function(M){return new(M||C)};static#e=this.\u0275mod=P.oAB({type:C});static#s=this.\u0275inj=P.cJS({providers:[e._,O.q,m.D,n.g],imports:[i.ez,l.T,a.q,u.Is,s.ot,o.Ps,g.o,r.si,h.ZX]})}return C})()},7477:(E,_,t)=>{t.d(_,{D:()=>h});var i=t(2611),s=t(9039),r=t(4860),u=t(6232);let h=(()=>{class n{constructor(e,a,l){this.http=e,this.context=a,this.dnnContext=l}getMetadata(e,a,l,m){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/metadata/get"),{params:{appId:this.context.appId.toString(),targetType:e.toString(),keyType:a,key:l.toString(),...m&&{contentType:m}}})}static#t=this.\u0275fac=function(a){return new(a||n)(s.LFG(r.eN),s.LFG(i._),s.LFG(u._y))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac})}return n})()},7782:(E,_,t)=>{t.d(_,{q:()=>h});var i=t(9736),s=t(1092),r=t(196),u=t(7477),o=t(9039);let h=(()=>{class n{constructor(e,a){this.metadataService=e,this.entitiesService=a}getAll(e,a,l){return this.metadataService.getMetadata(e,a,l,r.Zy.contentTypes.permissions).pipe((0,i.U)(m=>m.Items))}delete(e){return this.entitiesService.delete(r.Zy.contentTypes.permissions,e,!1)}static#t=this.\u0275fac=function(a){return new(a||n)(o.LFG(u.D),o.LFG(s.g))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac})}return n})()},6041:(E,_,t)=>{t.d(_,{H:()=>g});var i=t(91),s=t(4520),r=t(5043),u=t(9736),o=t(9422),h=t(9097),n=t(9039);let g=(()=>{class e extends h.f{constructor(l,m){super(),this.router=l,this.route=m}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,s.h)(l=>l instanceof i.m2),(0,r.O)(!!this.route.snapshot.firstChild.firstChild),(0,u.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,o.G)(),(0,s.h)(([l,m])=>l&&!m))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,s.h)(l=>l instanceof i.m2),(0,r.O)(!!this.route.snapshot.firstChild),(0,u.U)(()=>!!this.route.snapshot.firstChild),(0,o.G)(),(0,s.h)(([l,m])=>l&&!m))}static#t=this.\u0275fac=function(m){return new(m||e)(n.Y36(i.F0),n.Y36(i.gz))};static#e=this.\u0275dir=n.lG2({type:e,features:[n.qOj]})}return e})()},5253:(E,_,t)=>{t.d(_,{m:()=>e});var i=t(4472),s=t(9039),r=t(9409),u=t(6575),o=t(257),h=t(6515),n=t(9498);const g=(a,l)=>({"align-start":a,"align-end":l});let e=(()=>{class a{constructor(m){this.snackBar=m}agInit(m){this.id=m.value,this.align="number"==typeof this.id?"end":"start",this.tooltip=m.tooltipGetter(m.data)}refresh(m){return!0}copy(){(0,i.v)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}static#t=this.\u0275fac=function(O){return new(O||a)(s.Y36(r.ux))};static#e=this.\u0275cmp=s.Xpm({type:a,selectors:[["app-id-field"]],decls:5,vars:6,consts:[["matRipple","",1,"id-box","highlight",3,"tippy","ngClass","click"],[1,"id"],[1,"icon"]],template:function(O,P){1&O&&(s.TgZ(0,"div",0),s.NdJ("click",function(){return P.copy()}),s.TgZ(1,"span",1),s._uU(2),s.qZA(),s.TgZ(3,"mat-icon",2),s._uU(4,"file_copy"),s.qZA()()),2&O&&(s.Q6J("tippy",P.tooltip)("ngClass",s.WLB(3,g,"start"===P.align,"end"===P.align)),s.xp6(2),s.Oqu(P.id))},dependencies:[u.mk,o.wG,h.Hw,n.$],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.id-box.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.id-box.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%]{display:none}.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]})}return a})()},6433:(E,_,t)=>{t.d(_,{f:()=>i});const i={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}},4472:(E,_,t)=>{function i(s){const r=document.createElement("textarea");r.value=s,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r);const u=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);r.select(),document.execCommand("copy"),document.body.removeChild(r),u&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(u))}t.d(_,{v:()=>i})}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.04/dist/ng-edit/default-projects_eav-ui_src_app_permissions_index_ts.6a14f62bceb5ac7f.js.map