"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_permissions_index_ts","projects_eav-ui_src_app_permissions_permissions_module_ts","projects_eav-ui_src_app_permissions_permissions_component_ts"],{4272:(E,c,t)=>{t.d(c,{g:()=>h});var i=t(4856),s=t(5368),o=t(3184),u=t(8784),l=t(2425);let h=(()=>{class n{constructor(e,d,a){this.http=e,this.context=d,this.dnnContext=a}create(e,d){return this.http.post(`app/auto/data/${e}`,d,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(e,d,a){return this.http.post(`app/auto/data/${e}/${d}`,a,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(e,d,a){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(i.Uo+"delete"),{params:{contentType:e,id:d.toString(),appId:this.context.appId.toString(),force:a.toString()}})}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(u.eN),o.LFG(s._),o.LFG(l._y))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})()},325:(E,c,t)=>{t.d(c,{i:()=>s});var i=t(941);let s=(()=>{class o{static getUrl(l,h,n){return`permissions/${l}/${h}/${n}`}static getUrlApp(l){return this.getUrl(i.Zy.metadata.app.targetType,i.Zy.metadata.app.keyType,l.toString())}static getUrlAttribute(l){return this.getUrl(i.Zy.metadata.attribute.targetType,i.Zy.metadata.attribute.keyType,l.toString())}static getUrlContentType(l){return this.getUrlEntity(l)}static getUrlEntity(l){return this.getUrl(i.Zy.metadata.entity.targetType,i.Zy.metadata.entity.keyType,l)}static getUrlLanguage(l){return this.getUrl(i.Zy.metadata.language.targetType,i.Zy.metadata.language.keyType,l)}}return o.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>t.e("projects_eav-ui_src_app_permissions_permissions_module_ts").then(t.bind(t,2965)).then(u=>u.PermissionsModule),data:{title:"Permissions"}},o})()},2925:(E,c,t)=>{t.d(c,{Do:()=>h.D,iK:()=>i.i,qQ:()=>n.q});var i=t(325),h=(t(3749),t(7261),t(61),t(2965),t(1667)),n=t(2023)},3749:(E,c,t)=>{t.d(c,{g:()=>s});var i=t(4929);const s={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,i.mG)(this,void 0,void 0,function*(){const{PermissionsComponent:o}=yield t.e("projects_eav-ui_src_app_permissions_permissions_component_ts").then(t.bind(t,61));return o})}}},7261:(E,c,t)=>{t.d(c,{T:()=>n});var i=t(2977),s=t(2649),o=t(6167),u=t(3749),l=t(3184);const h=[{path:"",component:o.r,data:{dialog:u.g},children:[{matcher:s.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("default-node_modules_angular_material_fesm2015_badge_mjs-node_modules_angular_material_fesm20-df7c03"),t.e("common"),t.e("projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-90acdb0")]).then(t.bind(t,1249)).then(p=>p.EditModule)},{matcher:s.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(p=>p.RefreshEditModule)}]}];let n=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=l.oAB({type:p}),p.\u0275inj=l.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),p})()},61:(E,c,t)=>{t.r(c),t.d(c,{PermissionsComponent:()=>B});var i=t(6317),s=t(6562),o=t(635),u=t(60),l=t(2087),h=t(4153),n=t(941),p=t(2225),e=t(3184),d=t(1130),a=t(2376),_=t(5590);let P=(()=>{class v{agInit(r){this.params=r}refresh(r){return!0}deletePermission(){this.params.onDelete(this.params.data)}}return v.\u0275fac=function(r){return new(r||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-permissions-actions"]],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","tippy","Delete",1,"like-button","highlight",3,"click"]],template:function(r,m){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return m.deletePermission()}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()())},directives:[d.wG,a.$,_.Hw],styles:[""]}),v})();var M=t(2023),f=t(2977),O=t(5758),T=t(2528),D=t(6362),U=t(7317),A=t(4680);function R(v,C){if(1&v){const r=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div"),e._uU(4,"Permissions"),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return e.CHM(r),e.oxw().closeDialog()}),e.TgZ(6,"mat-icon"),e._uU(7,"close"),e.qZA()()()(),e._UZ(8,"router-outlet"),e.TgZ(9,"div",5),e._UZ(10,"ag-grid-angular",6)(11,"div",7),e.TgZ(12,"button",8),e.NdJ("click",function(){return e.CHM(r),e.oxw().editPermission(null)}),e.TgZ(13,"mat-icon"),e._uU(14,"add"),e.qZA()()()()}if(2&v){const r=C.ngIf,m=e.oxw();e.xp6(10),e.Q6J("rowData",r.permissions)("gridOptions",m.gridOptions)}}let B=(()=>{class v extends u.H{constructor(r,m,g,y,I){super(r,m),this.router=r,this.route=m,this.dialogRef=g,this.permissionsService=y,this.snackBar=I,this.permissions$=new i.X(void 0),this.gridOptions=this.buildGridOptions(),this.targetType=parseInt(this.route.snapshot.paramMap.get("targetType"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key"),this.prefills={[n.Zy.metadata.language.targetType]:{PermissionType:"language"}}}ngOnInit(){this.fetchPermissions(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchPermissions()})),this.viewModel$=(0,s.a)([this.permissions$]).pipe((0,o.U)(([r])=>({permissions:r})))}ngOnDestroy(){this.permissions$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}fetchPermissions(){this.permissionsService.getAll(this.targetType,this.keyType,this.key).subscribe(r=>{this.permissions$.next(r)})}editPermission(r){var m,g;let y;y=null==r?{items:[Object.assign({ContentTypeName:n.Zy.contentTypes.permissions,For:Object.assign(Object.assign(Object.assign({Target:null!==(g=null===(m=Object.values(n.Zy.metadata).find(L=>L.targetType===this.targetType))||void 0===m?void 0:m.target)&&void 0!==g?g:this.targetType.toString(),TargetType:this.targetType},this.keyType===n.Zy.keyTypes.guid&&{Guid:this.key}),this.keyType===n.Zy.keyTypes.number&&{Number:parseInt(this.key,10)}),this.keyType===n.Zy.keyTypes.string&&{String:this.key})},this.prefills[this.targetType]&&{Prefill:this.prefills[this.targetType]})]}:{items:[{EntityId:r.Id}]};const I=(0,p.f)(y);this.router.navigate([`edit/${I}`],{relativeTo:this.route})}deletePermission(r){!confirm(`Delete '${r.Title}' (${r.Id})?`)||(this.snackBar.open("Deleting..."),this.permissionsService.delete(r.Id).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchPermissions()}))}buildGridOptions(){return Object.assign(Object.assign({},h.f),{columnDefs:[{headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter",valueGetter:m=>m.data.Id,cellRenderer:l.m,cellRendererParams:{tooltipGetter:g=>`ID: ${g.Id}\nGUID: ${g.Guid}`}},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,sort:"asc",filter:"agTextColumnFilter",onCellClicked:m=>{this.editPermission(m.data)},valueGetter:m=>m.data.Title},{field:"Identity",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:m=>m.data.Identity},{field:"Condition",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:m=>m.data.Condition},{field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:m=>m.data.Grant},{width:42,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:P,cellRendererParams:(()=>({onDelete:g=>this.deletePermission(g)}))()}]})}}return v.\u0275fac=function(r){return new(r||v)(e.Y36(f.F0),e.Y36(f.gz),e.Y36(O.so),e.Y36(M.q),e.Y36(T.ux))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-permissions"]],features:[e.qOj],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],[1,"grid-more-actions-box"],["mat-fab","","mat-elevation-z24","","tippy","Create a new permission",1,"grid-fab",3,"click"]],template:function(r,m){1&r&&(e.YNc(0,R,15,2,"div",0),e.ALo(1,"async")),2&r&&e.Q6J("ngIf",e.lcZ(1,1,m.viewModel$))},directives:[D.O5,O.uh,U.lW,a.$,_.Hw,f.lC,A.N8],pipes:[D.Ov],styles:[""]}),v})()},2965:(E,c,t)=>{t.r(c),t.d(c,{PermissionsModule:()=>f});var i=t(6362),s=t(7317),o=t(1130),u=t(5758),l=t(5590),h=t(2528),n=t(4272),p=t(3077),e=t(5368),d=t(3135),a=t(7261),_=t(1667),P=t(2023),M=t(3184);let f=(()=>{class O{}return O.\u0275fac=function(D){return new(D||O)},O.\u0275mod=M.oAB({type:O}),O.\u0275inj=M.cJS({providers:[e._,P.q,_.D,n.g],imports:[[i.ez,a.T,d.q,u.Is,s.ot,l.Ps,p.o,o.si,h.ZX]]}),O})()},1667:(E,c,t)=>{t.d(c,{D:()=>h});var i=t(5368),s=t(3184),o=t(8784),u=t(2425);let h=(()=>{class n{constructor(e,d,a){this.http=e,this.context=d,this.dnnContext=a}getMetadata(e,d,a,_){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/metadata/get"),{params:Object.assign({appId:this.context.appId.toString(),targetType:e.toString(),keyType:d,key:a.toString()},_&&{contentType:_})})}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(o.eN),s.LFG(i._),s.LFG(u._y))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})()},2023:(E,c,t)=>{t.d(c,{q:()=>h});var i=t(635),s=t(4272),o=t(941),u=t(1667),l=t(3184);let h=(()=>{class n{constructor(e,d){this.metadataService=e,this.entitiesService=d}getAll(e,d,a){return this.metadataService.getMetadata(e,d,a,o.Zy.contentTypes.permissions).pipe((0,i.U)(_=>_.Items))}delete(e){return this.entitiesService.delete(o.Zy.contentTypes.permissions,e,!1)}}return n.\u0275fac=function(e){return new(e||n)(l.LFG(u.D),l.LFG(s.g))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac}),n})()},60:(E,c,t)=>{t.d(c,{H:()=>p});var i=t(2977),s=t(116),o=t(4874),u=t(635),l=t(679),h=t(5904),n=t(3184);let p=(()=>{class e extends h.f{constructor(a,_){super(),this.router=a,this.route=_}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,s.h)(a=>a instanceof i.m2),(0,o.O)(!!this.route.snapshot.firstChild.firstChild),(0,u.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,l.G)(),(0,s.h)(([a,_])=>a&&!_))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,s.h)(a=>a instanceof i.m2),(0,o.O)(!!this.route.snapshot.firstChild),(0,u.U)(()=>!!this.route.snapshot.firstChild),(0,l.G)(),(0,s.h)(([a,_])=>a&&!_))}}return e.\u0275fac=function(a){return new(a||e)(n.Y36(i.F0),n.Y36(i.gz))},e.\u0275dir=n.lG2({type:e,features:[n.qOj]}),e})()},2087:(E,c,t)=>{t.d(c,{m:()=>e});var i=t(9673),s=t(3184),o=t(2528),u=t(1130),l=t(2376),h=t(6362),n=t(5590);const p=function(d,a){return{"align-start":d,"align-end":a}};let e=(()=>{class d{constructor(_){this.snackBar=_}agInit(_){this.id=_.value,this.align="number"==typeof this.id?"end":"start",this.tooltip=_.tooltipGetter(_.data)}refresh(_){return!0}copy(){(0,i.v)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}return d.\u0275fac=function(_){return new(_||d)(s.Y36(o.ux))},d.\u0275cmp=s.Xpm({type:d,selectors:[["app-id-field"]],decls:5,vars:6,consts:[["matRipple","",1,"id-box","highlight",3,"tippy","ngClass","click"],[1,"id"],[1,"icon"]],template:function(_,P){1&_&&(s.TgZ(0,"div",0),s.NdJ("click",function(){return P.copy()}),s.TgZ(1,"span",1),s._uU(2),s.qZA(),s.TgZ(3,"mat-icon",2),s._uU(4,"file_copy"),s.qZA()()),2&_&&(s.Q6J("tippy",P.tooltip)("ngClass",s.WLB(3,p,"start"===P.align,"end"===P.align)),s.xp6(2),s.Oqu(P.id))},directives:[u.wG,l.$,h.mk,n.Hw],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.id-box.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.id-box.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%]{display:none}.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]}),d})()},4153:(E,c,t)=>{t.d(c,{f:()=>i});const i={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}},9673:(E,c,t)=>{function i(s){const o=document.createElement("textarea");o.value=s,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);const u=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select(),document.execCommand("copy"),document.body.removeChild(o),u&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(u))}t.d(c,{v:()=>i})}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.05.00/ng-edit/default-projects_eav-ui_src_app_permissions_index_ts.e7e48db581c8a074.js.map