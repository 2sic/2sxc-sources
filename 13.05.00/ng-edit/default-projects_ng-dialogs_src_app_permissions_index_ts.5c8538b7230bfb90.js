"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["default-projects_ng-dialogs_src_app_permissions_index_ts","projects_ng-dialogs_src_app_permissions_permissions_module_ts","projects_ng-dialogs_src_app_permissions_permissions_component_ts"],{8130:(P,c,t)=>{t.d(c,{g:()=>u});var r=t(7638),s=t(8598),i=t(3184),_=t(8784),a=t(2425);let u=(()=>{class n{constructor(o,l,m){this.http=o,this.context=l,this.dnnContext=m}create(o,l){return this.http.post(`app/auto/data/${o}`,l,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(o,l,m){return this.http.post(`app/auto/data/${o}/${l}`,m,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(o,l,m){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(r.Uo+"delete"),{params:{contentType:o,id:l.toString(),appId:this.context.appId.toString(),force:m.toString()}})}}return n.\u0275fac=function(o){return new(o||n)(i.LFG(_.eN),i.LFG(s._),i.LFG(a._y))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})()},7297:(P,c,t)=>{t.d(c,{i:()=>s});var r=t(1825);let s=(()=>{class i{static getUrl(a,u,n){return`permissions/${a}/${u}/${n}`}static getUrlApp(a){return this.getUrl(r.Z.metadata.app.targetType,r.Z.metadata.app.keyType,a.toString())}static getUrlAttribute(a){return this.getUrl(r.Z.metadata.attribute.targetType,r.Z.metadata.attribute.keyType,a.toString())}static getUrlContentType(a){return this.getUrlEntity(a)}static getUrlEntity(a){return this.getUrl(r.Z.metadata.entity.targetType,r.Z.metadata.entity.keyType,a)}static getUrlLanguage(a){return this.getUrl(r.Z.metadata.language.targetType,r.Z.metadata.language.keyType,a)}}return i.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>t.e("projects_ng-dialogs_src_app_permissions_permissions_module_ts").then(t.bind(t,4484)).then(_=>_.PermissionsModule),data:{title:"Permissions"}},i})()},6307:(P,c,t)=>{t.d(c,{iK:()=>r.i,Do:()=>u.D,qQ:()=>n.q});var r=t(7297),u=(t(1157),t(7725),t(5620),t(4484),t(4753)),n=t(7170)},1157:(P,c,t)=>{t.d(c,{g:()=>s});var r=t(4929);const s={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,r.mG)(this,void 0,void 0,function*(){const{PermissionsComponent:i}=yield Promise.all([t.e("default-projects_ng-dialogs_src_app_shared_directives_tippy_directive_ts"),t.e("default-projects_ng-dialogs_src_app_shared_constants_default-grid-options_constants_ts-node_m-956a3f"),t.e("projects_ng-dialogs_src_app_permissions_permissions_component_ts")]).then(t.bind(t,5620));return i})}}},7725:(P,c,t)=>{t.d(c,{T:()=>n});var r=t(2977),s=t(8327),i=t(5487),_=t(1157),a=t(3184);const u=[{path:"",component:i.r,data:{dialog:_.g},children:[{matcher:s.eP,loadChildren:()=>Promise.all([t.e("default-projects_ng-dialogs_src_app_shared_directives_tippy_directive_ts"),t.e("default-projects_ng-dialogs_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-projects_ng-dialogs_src_app_monaco-editor_index_ts-projects_ng-dialogs_src_app_shared-7048b1"),t.e("default-projects_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2015_menu_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("common"),t.e("projects_ng-dialogs_src_app_shared_components_field-hint_field-hint_component_ts-projects_ng--b6f5c6")]).then(t.bind(t,6538)).then(p=>p.EditModule)},{matcher:s.lZ,loadChildren:()=>t.e("projects_edit_refresh-edit_module_ts").then(t.bind(t,3804)).then(p=>p.RefreshEditModule)}]}];let n=(()=>{class p{}return p.\u0275fac=function(l){return new(l||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),p})()},5620:(P,c,t)=>{t.r(c),t.d(c,{PermissionsComponent:()=>K});var r=t(9119),s=t(2977),i=t(6317),_=t(7714),a=t(116),u=t(4874),n=t(635),p=t(679),o=t(5578),l=t(6880),m=t(1825),g=t(5137),e=t(3184),C=t(1130),D=t(785),O=t(5590);let T=(()=>{class E{agInit(d){this.params=d}refresh(d){return!0}deletePermission(){this.params.onDelete(this.params.data)}}return E.\u0275fac=function(d){return new(d||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["app-permissions-actions"]],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","tippy","Delete",1,"like-button","highlight",3,"click"]],template:function(d,v){1&d&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return v.deletePermission()}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()())},directives:[C.wG,D.$,O.Hw],styles:[""]}),E})();var I=t(7170),A=t(5758),R=t(2528),L=t(7317),B=t(1350),W=t(6362);let K=(()=>{class E{constructor(d,v,f,y,U){this.dialogRef=d,this.router=v,this.route=f,this.permissionsService=y,this.snackBar=U,this.permissions$=new i.X(void 0),this.modules=r.F$j,this.gridOptions=Object.assign(Object.assign({},l.f),{columnDefs:[{headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline".split(" "),cellRenderer:o.m,sortable:!0,filter:"agNumberColumnFilter",valueGetter:h=>h.data.Id,cellRendererParams:{tooltipGetter:h=>`ID: ${h.Id}\nGUID: ${h.Guid}`}},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,sort:"asc",filter:"agTextColumnFilter",onCellClicked:h=>this.editPermission(h.data),valueGetter:h=>h.data.Title},{field:"Identity",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:h=>h.data.Identity},{field:"Condition",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:h=>h.data.Condition},{field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:h=>h.data.Grant},{width:42,cellClass:"secondary-action no-padding".split(" "),cellRenderer:T,pinned:"right",cellRendererParams:{onDelete:h=>this.deletePermission(h)}}]}),this.subscription=new _.w0,this.targetType=parseInt(this.route.snapshot.paramMap.get("targetType"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key"),this.prefills={[m.Z.metadata.language.targetType]:{PermissionType:"language"}}}ngOnInit(){this.fetchPermissions(),this.refreshOnChildClosed()}ngOnDestroy(){this.permissions$.complete(),this.subscription.unsubscribe()}closeDialog(){this.dialogRef.close()}fetchPermissions(){this.permissionsService.getAll(this.targetType,this.keyType,this.key).subscribe(d=>{this.permissions$.next(d)})}editPermission(d){var v,f;let y;y=null==d?{items:[Object.assign({ContentTypeName:m.Z.contentTypes.permissions,For:Object.assign(Object.assign(Object.assign({Target:null!==(f=null===(v=Object.values(m.Z.metadata).find(h=>h.targetType===this.targetType))||void 0===v?void 0:v.target)&&void 0!==f?f:this.targetType.toString(),TargetType:this.targetType},this.keyType===m.Z.keyTypes.guid&&{Guid:this.key}),this.keyType===m.Z.keyTypes.number&&{Number:parseInt(this.key,10)}),this.keyType===m.Z.keyTypes.string&&{String:this.key})},this.prefills[this.targetType]&&{Prefill:this.prefills[this.targetType]})]}:{items:[{EntityId:d.Id}]};const U=(0,g.f)(y);this.router.navigate([`edit/${U}`],{relativeTo:this.route})}deletePermission(d){!confirm(`Delete '${d.Title}' (${d.Id})?`)||(this.snackBar.open("Deleting..."),this.permissionsService.delete(d.Id).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchPermissions()}))}refreshOnChildClosed(){this.subscription.add(this.router.events.pipe((0,a.h)(d=>d instanceof s.m2),(0,u.O)(!!this.route.snapshot.firstChild),(0,n.U)(()=>!!this.route.snapshot.firstChild),(0,p.G)(),(0,a.h)(([d,v])=>d&&!v)).subscribe(()=>{this.fetchPermissions()}))}}return E.\u0275fac=function(d){return new(d||E)(e.Y36(A.so),e.Y36(s.F0),e.Y36(s.gz),e.Y36(I.q),e.Y36(R.ux))},E.\u0275cmp=e.Xpm({type:E,selectors:[["app-permissions"]],decls:16,vars:5,consts:[[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","modules","gridOptions"],[1,"grid-more-actions-box"],["mat-fab","","mat-elevation-z24","","tippy","Create a new permission",1,"grid-fab",3,"click"]],template:function(d,v){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e._uU(4,"Permissions"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return v.closeDialog()}),e.TgZ(6,"mat-icon"),e._uU(7,"close"),e.qZA()()()(),e._UZ(8,"router-outlet"),e.TgZ(9,"div",4),e._UZ(10,"ag-grid-angular",5),e.ALo(11,"async"),e._UZ(12,"div",6),e.TgZ(13,"button",7),e.NdJ("click",function(){return v.editPermission(null)}),e.TgZ(14,"mat-icon"),e._uU(15,"add"),e.qZA()()()()),2&d&&(e.xp6(10),e.Q6J("rowData",e.lcZ(11,3,v.permissions$))("modules",v.modules)("gridOptions",v.gridOptions))},directives:[A.uh,L.lW,D.$,O.Hw,s.lC,B.N8],pipes:[W.Ov],styles:[""]}),E})()},4484:(P,c,t)=>{t.r(c),t.d(c,{PermissionsModule:()=>D});var r=t(1350),s=t(6362),i=t(7317),_=t(1130),a=t(5758),u=t(5590),n=t(2528),p=t(8130),o=t(8598),l=t(8450),m=t(7725),g=t(4753),e=t(7170),C=t(3184);let D=(()=>{class O{}return O.\u0275fac=function(I){return new(I||O)},O.\u0275mod=C.oAB({type:O}),O.\u0275inj=C.cJS({providers:[o._,e.q,g.D,p.g],imports:[[s.ez,m.T,l.q,a.Is,i.ot,u.Ps,r.sF.withComponents([]),_.si,n.ZX]]}),O})()},4753:(P,c,t)=>{t.d(c,{D:()=>u});var r=t(8598),s=t(3184),i=t(8784),_=t(2425);let u=(()=>{class n{constructor(o,l,m){this.http=o,this.context=l,this.dnnContext=m}getMetadata(o,l,m,g){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/metadata/get"),{params:Object.assign({appId:this.context.appId.toString(),targetType:o.toString(),keyType:l,key:m.toString()},g&&{contentType:g})})}}return n.\u0275fac=function(o){return new(o||n)(s.LFG(i.eN),s.LFG(r._),s.LFG(_._y))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})()},7170:(P,c,t)=>{t.d(c,{q:()=>u});var r=t(635),s=t(8130),i=t(1825),_=t(4753),a=t(3184);let u=(()=>{class n{constructor(o,l){this.metadataService=o,this.entitiesService=l}getAll(o,l,m){return this.metadataService.getMetadata(o,l,m,i.Z.contentTypes.permissions).pipe((0,r.U)(g=>g.Items))}delete(o){return this.entitiesService.delete(i.Z.contentTypes.permissions,o,!1)}}return n.\u0275fac=function(o){return new(o||n)(a.LFG(_.D),a.LFG(s.g))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac}),n})()},5578:(P,c,t)=>{t.d(c,{m:()=>o});var r=t(5388),s=t(3184),i=t(2528),_=t(1130),a=t(785),u=t(6362),n=t(5590);const p=function(l,m){return{"align-start":l,"align-end":m}};let o=(()=>{class l{constructor(g){this.snackBar=g}agInit(g){this.id=g.value,this.align="number"==typeof this.id?"end":"start",this.tooltip=g.tooltipGetter(g.data)}refresh(g){return!0}copy(){(0,r.v)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}return l.\u0275fac=function(g){return new(g||l)(s.Y36(i.ux))},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-id-field"]],decls:5,vars:6,consts:[["matRipple","",1,"id-box","highlight",3,"tippy","ngClass","click"],[1,"id"],[1,"icon"]],template:function(g,e){1&g&&(s.TgZ(0,"div",0),s.NdJ("click",function(){return e.copy()}),s.TgZ(1,"span",1),s._uU(2),s.qZA(),s.TgZ(3,"mat-icon",2),s._uU(4,"file_copy"),s.qZA()()),2&g&&(s.Q6J("tippy",e.tooltip)("ngClass",s.WLB(3,p,"start"===e.align,"end"===e.align)),s.xp6(2),s.Oqu(e.id))},directives:[_.wG,a.$,u.mk,n.Hw],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.id-box.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.id-box.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%]{display:none}.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]}),l})()},5388:(P,c,t)=>{function r(s){const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i);const _=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);i.select(),document.execCommand("copy"),document.body.removeChild(i),_&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(_))}t.d(c,{v:()=>r})}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.05.00/ng-edit/default-projects_ng-dialogs_src_app_permissions_index_ts.5c8538b7230bfb90.js.map