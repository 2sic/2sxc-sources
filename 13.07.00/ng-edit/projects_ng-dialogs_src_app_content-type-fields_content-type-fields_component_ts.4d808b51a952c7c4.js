"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_content-type-fields_content-type-fields_component_ts"],{8542:(I,g,a)=>{a.r(g),a.d(g,{ContentTypeFieldsComponent:()=>ae});var c=a(2977),v=a(6317),A=a(7714),x=a(745),Z=a(1640),C=a(116),w=a(4874),b=a(635),R=a(679),S=a(5005),D=a(9230),O=a(7297),N=a(9119),F=a(1825),E=a(5137),d=a(1226),M=a(9702),e=a(3184),p=a(6362),T=a(1130),m=a(785),u=a(5590),$=a(178),f=a(2796);function J(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().openMetadata()}),e.TgZ(1,"mat-icon",9),e._uU(2," local_offer "),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.metadataCount)("matBadgeHidden",!t.metadataCount)}}function U(i,l){if(1&i&&(e.TgZ(0,"div",10)(1,"mat-icon",11),e._uU(2," local_offer "),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.metadataCount)("matBadgeHidden",!t.metadataCount)}}function k(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().openPermissions()}),e.TgZ(1,"mat-icon",9),e._uU(2," person "),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.field.Permissions.Count)("matBadgeHidden",!t.field.Permissions.Count)}}function B(i,l){if(1&i&&(e.TgZ(0,"div",10)(1,"mat-icon",11),e._uU(2," person "),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.field.Permissions.Count)("matBadgeHidden",!t.field.Permissions.Count)}}function H(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().rename()}),e.TgZ(1,"mat-icon"),e._uU(2,"text_fields"),e.qZA(),e.TgZ(3,"span"),e._uU(4,"Rename"),e.qZA()(),e.TgZ(5,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteField()}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Delete"),e.qZA()()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.field.EditInfo.ReadOnly),e.xp6(5),e.Q6J("disabled",t.field.EditInfo.ReadOnly||t.field.IsTitle)}}let Q=(()=>{class i{constructor(){}agInit(t){this.params=t,this.field=this.params.data,this.metadataCount=this.field.Metadata?Object.keys(this.field.Metadata).filter(n=>"merged"!==n).length:0,this.enablePermissions=this.field.InputType===d.v.StringWysiwyg||this.field.Type===M.Q.Hyperlink}refresh(t){return!0}openMetadata(){this.params.onOpenMetadata(this.field)}rename(){this.params.onRename(this.field)}openPermissions(){this.params.onOpenPermissions(this.field)}deleteField(){this.params.onDelete(this.field)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields-actions"]],decls:11,vars:5,consts:[[1,"actions-component"],["class","like-button highlight","matRipple","","tippy","Metadata",3,"click",4,"ngIf"],["class","like-button disabled",4,"ngIf"],["class","like-button highlight","matRipple","","tippy","Permissions",3,"click",4,"ngIf"],["matRipple","","tippy","More",1,"like-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["menu","matMenu"],["matMenuContent",""],["matRipple","","tippy","Metadata",1,"like-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small",3,"matBadge","matBadgeHidden"],[1,"like-button","disabled"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true",3,"matBadge","matBadgeHidden"],["matRipple","","tippy","Permissions",1,"like-button","highlight",3,"click"],["mat-menu-item","",3,"disabled","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,J,3,2,"div",1),e.YNc(2,U,3,2,"div",2),e.YNc(3,k,3,2,"div",3),e.YNc(4,B,3,2,"div",2),e.TgZ(5,"div",4)(6,"mat-icon"),e._uU(7,"more_horiz"),e.qZA()()(),e.TgZ(8,"mat-menu",5,6),e.YNc(10,H,10,2,"ng-template",7),e.qZA()),2&t){const o=e.MAs(9);e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly&&n.enablePermissions),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly||!n.enablePermissions),e.xp6(1),e.Q6J("matMenuTriggerFor",o)}},directives:[p.O5,T.wG,m.$,u.Hw,$.k,f.p6,f.VK,f.KA,f.OP],styles:[""]}),i})();function P(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){return e.CHM(t),e.oxw().changeInputType()}),e.TgZ(1,"div",3),e._uU(2),e.qZA(),e.TgZ(3,"div",4)(4,"mat-icon"),e._uU(5,"arrow_drop_down"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.value)}}function Y(i,l){if(1&i&&(e.TgZ(0,"div",5)(1,"div",6),e._uU(2),e.qZA(),e.TgZ(3,"div",7)(4,"mat-icon"),e._uU(5,"arrow_drop_down"),e.qZA()()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.value)}}let G=(()=>{class i{agInit(t){this.params=t,this.value=t.value,this.field=t.data}refresh(t){return!0}changeInputType(){this.params.onChangeInputType(this.field)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields-input-type"]],decls:2,vars:2,consts:[["matRipple","","class","input-component highlight",3,"click",4,"ngIf"],["class","input-component disabled",4,"ngIf"],["matRipple","",1,"input-component","highlight",3,"click"],[1,"text"],[1,"like-button"],[1,"input-component","disabled"],[1,"text","disabled"],[1,"like-button","disabled"]],template:function(t,n){1&t&&(e.YNc(0,P,6,1,"div",0),e.YNc(1,Y,6,1,"div",1)),2&t&&(e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly))},directives:[p.O5,T.wG,u.Hw],styles:[""]}),i})();function X(i,l){1&i&&(e.TgZ(0,"mat-icon",3),e._uU(1,"functions"),e.qZA())}function j(i,l){1&i&&(e.TgZ(0,"mat-icon",4),e._uU(1,"mobiledata_off"),e.qZA())}let L=(()=>{class i{agInit(t){const n=t.data;this.hasFormulas=n.HasFormulas,this.isEphemeral=n.IsEphemeral}refresh(t){return!0}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields-special"]],decls:3,vars:2,consts:[[1,"icon-container"],["tippy","Has Formulas",4,"ngIf"],["tippy","Ephemeral / Temporary, won't save",4,"ngIf"],["tippy","Has Formulas"],["tippy","Ephemeral / Temporary, won't save"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,X,2,0,"mat-icon",1),e.YNc(2,j,2,0,"mat-icon",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.hasFormulas),e.xp6(1),e.Q6J("ngIf",n.isEphemeral))},directives:[p.O5,u.Hw,m.$],styles:[""]}),i})();function W(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().setTitle()}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.isTitle?"star":"star_outline")}}function z(i,l){if(1&i&&(e.TgZ(0,"div",4)(1,"mat-icon"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.isTitle?"star":"star_outline")}}let K=(()=>{class i{agInit(t){this.params=t,this.isTitle=t.value,this.field=t.data}refresh(t){return!0}setTitle(){this.params.onSetTitle(this.field)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields-title"]],decls:3,vars:2,consts:[[1,"actions-component"],["class","like-button highlight","matRipple","","tippy","Use as title field",3,"click",4,"ngIf"],["class","like-button disabled",4,"ngIf"],["matRipple","","tippy","Use as title field",1,"like-button","highlight",3,"click"],[1,"like-button","disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,W,3,1,"div",1),e.YNc(2,z,3,1,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly))},directives:[p.O5,T.wG,m.$,u.Hw],styles:[""]}),i})();var V=a(6565);let q=(()=>{class i{agInit(t){this.value=t.value,this.icon=(0,V.x)(this.value)}refresh(t){return!0}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields-type"]],decls:3,vars:2,consts:[[1,"icon-container",3,"tippy"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"mat-icon"),e._uU(2),e.qZA()()),2&t&&(e.Q6J("tippy",n.value),e.xp6(2),e.Oqu(n.icon))},directives:[m.$,u.Hw],styles:[""]}),i})();var ee=a(4722),_=a(5758),te=a(2528),ne=a(7317),ie=a(1350);function oe(i,l){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=l.ngIf;e.xp6(1),e.hij(" ",t.Label||t.Name," ")}}const se=function(i,l){return{"grid-sorted":i,"grid-filtered":l}};let ae=(()=>{class i{constructor(t,n,o,s,r,y){this.dialogRef=t,this.route=n,this.router=o,this.contentTypesService=s,this.contentTypesFieldsService=r,this.snackBar=y,this.contentType$=new v.X(void 0),this.fields$=new v.X(void 0),this.gridOptions=this.buildGridOptions(),this.sortApplied=!1,this.filterApplied=!1,this.rowDragSuppressed=!1,this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName"),this.subscription=new A.w0}ngOnInit(){this.fetchFields(),this.refreshOnChildClosed()}ngOnDestroy(){this.contentType$.complete(),this.fields$.complete(),this.subscription.unsubscribe()}closeDialog(){this.dialogRef.close()}onGridReady(t){this.gridApi=t.api,this.columnApi=t.columnApi}onRowDragEnter(t){this.gridApi.setEnableCellTextSelection(!1)}onRowDragEnd(t){this.gridApi.setSuppressRowDrag(!0);const n=this.fields$.value.map(o=>o.Id);this.contentTypesFieldsService.reOrder(n,this.contentType$.value).subscribe(()=>{this.fetchFields(()=>{this.gridApi.setEnableCellTextSelection(!0),this.gridApi.setSuppressRowDrag(!1)})})}onRowDragMove(t){const n=t.node,o=t.overNode;if(o&&n!==o){const y=o.data,h=[...this.fields$.value],le=h.indexOf(n.data),re=h.indexOf(y);this.moveInArray(h,le,re),this.fields$.next(h),this.gridApi.clearFocusedCell()}}moveInArray(t,n,o){const s=t[n];t.splice(n,1),t.splice(o,0,s)}onSortChanged(t){const n=this.columnApi.getColumnState();this.sortApplied=n.some(o=>null!=o.sort),this.suppressRowDrag()}onFilterChanged(t){const n=this.gridApi.getFilterModel(),o=Object.keys(n);this.filterApplied=o.length>0,this.suppressRowDrag()}suppressRowDrag(){const t=this.sortApplied||this.filterApplied;t&&!this.rowDragSuppressed?(this.rowDragSuppressed=!0,this.gridApi.setSuppressRowDrag(!0)):!t&&this.rowDragSuppressed&&(this.rowDragSuppressed=!1,this.gridApi.setSuppressRowDrag(!1))}add(){this.router.navigate([`add/${this.contentTypeStaticName}`],{relativeTo:this.route})}nameCellRenderer(t){const n=t.data;if([d.v.EmptyDefault,d.v.EmptyEnd].includes(n.InputType))return t.value;let s=!1;for(const r of this.fields$.value)if(r.InputType!==d.v.EmptyDefault)if(r.InputType!==d.v.EmptyEnd){if(r.StaticName===n.StaticName)break}else s=!1;else s=!0;return s?`<span class="is-in-group">${t.value}</span>`:t.value}fetchFields(t){const n=null==this.contentType$.value?this.contentTypesService.retrieveContentType(this.contentTypeStaticName):(0,x.of)(this.contentType$.value),o=this.contentTypesFieldsService.getFields(this.contentTypeStaticName);(0,Z.D)([n,o]).subscribe(([s,r])=>{this.contentType$.next(s),this.fields$.next(r),null!=t&&t()})}editFieldMetadata(t){const n={items:[this.createItemDefinition(t,"All"),this.createItemDefinition(t,t.Type),this.createItemDefinition(t,t.InputType)]},o=(0,E.f)(n);this.router.navigate([`edit/${o}`],{relativeTo:this.route})}createItemDefinition(t,n){return null!=t.Metadata[n]?{EntityId:t.Metadata[n].Id}:{ContentTypeName:"@"+n,For:{Target:F.Z.metadata.attribute.target,TargetType:F.Z.metadata.attribute.targetType,Number:t.Id},Prefill:{Name:t.StaticName}}}setTitle(t){this.snackBar.open("Setting title..."),this.contentTypesFieldsService.setTitle(t,this.contentType$.value).subscribe(()=>{this.snackBar.open("Title set",null,{duration:2e3}),this.fetchFields()})}changeInputType(t){this.router.navigate([`update/${this.contentTypeStaticName}/${t.Id}/inputType`],{relativeTo:this.route})}rename(t){this.router.navigate([`update/${this.contentTypeStaticName}/${t.Id}/name`],{relativeTo:this.route})}delete(t){!confirm(`Are you sure you want to delete '${t.StaticName}' (${t.Id})?`)||(this.snackBar.open("Deleting..."),this.contentTypesFieldsService.delete(t,this.contentType$.value).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchFields()}))}openPermissions(t){this.router.navigate([O.i.getUrlAttribute(t.Id)],{relativeTo:this.route})}openMetadata(t){const n=D.U.getUrlAttribute(t.Id,`Metadata for Field: ${t.StaticName} (${t.Id})`);this.router.navigate([n],{relativeTo:this.route})}refreshOnChildClosed(){this.subscription.add(this.router.events.pipe((0,C.h)(t=>t instanceof c.m2),(0,w.O)(!!this.route.snapshot.firstChild),(0,b.U)(()=>!!this.route.snapshot.firstChild),(0,R.G)(),(0,C.h)(([t,n])=>t&&!n)).subscribe(()=>{this.fetchFields()}))}buildGridOptions(){return Object.assign(Object.assign({},N.f),{getRowClass(n){const o=n.data,s=[];return o.EditInfo.ReadOnly&&s.push("disable-row-drag"),o.InputType===d.v.EmptyDefault&&s.push("group-start-row"),o.InputType===d.v.EmptyEnd&&s.push("group-end-row"),s},columnDefs:[{rowDrag:!0,width:18,cellClass:"no-select no-padding no-outline".split(" ")},{field:"Title",width:42,cellClass:"secondary-action no-padding no-outline".split(" "),valueGetter:n=>n.data.IsTitle,cellRenderer:K,cellRendererParams:(()=>({onSetTitle:o=>this.setTitle(o)}))()},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,filter:"agTextColumnFilter",onCellClicked:n=>{this.editFieldMetadata(n.data)},cellRenderer:n=>this.nameCellRenderer(n),valueGetter:n=>n.data.StaticName},{field:"Type",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Type,cellRenderer:q},{headerName:"Input",field:"InputType",width:160,cellClass:n=>(n.data.EditInfo.ReadOnly?"no-outline no-padding":"secondary-action no-padding").split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{const o=n.data;return o.InputType.substring(o.InputType.indexOf("-")+1)},cellRenderer:G,cellRendererParams:(()=>({onChangeInputType:o=>this.changeInputType(o)}))()},{field:"Label",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{var o,s;return null===(s=null===(o=n.data.Metadata)||void 0===o?void 0:o.All)||void 0===s?void 0:s.Name}},{field:"Special",width:66,headerClass:"dense",cellClass:"no-outline",cellRenderer:L},{field:"Notes",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{var o,s;return null===(s=null===(o=n.data.Metadata)||void 0===o?void 0:o.All)||void 0===s?void 0:s.Notes}},{width:122,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:Q,cellRendererParams:(()=>({onRename:o=>this.rename(o),onDelete:o=>this.delete(o),onOpenPermissions:o=>this.openPermissions(o),onOpenMetadata:o=>this.openMetadata(o)}))()}]})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.so),e.Y36(c.gz),e.Y36(c.F0),e.Y36(S.s),e.Y36(ee.Mr),e.Y36(te.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-content-type-fields"]],decls:20,vars:16,consts:[[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],[4,"ngIf"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions","ngClass","rowDragEnter","rowDragEnd","rowDragMove","gridReady","sortChanged","filterChanged"],[1,"grid-more-actions-box"],["mat-fab","","mat-elevation-z24","","tippy","Add fields",1,"grid-fab",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e.YNc(4,oe,2,1,"ng-container",3),e.ALo(5,"async"),e._uU(6," Fields "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.closeDialog()}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()()(),e._UZ(10,"router-outlet"),e.TgZ(11,"div",5)(12,"ag-grid-angular",6),e.NdJ("rowDragEnter",function(s){return n.onRowDragEnter(s)})("rowDragEnd",function(s){return n.onRowDragEnd(s)})("rowDragMove",function(s){return n.onRowDragMove(s)})("gridReady",function(s){return n.onGridReady(s)})("sortChanged",function(s){return n.onSortChanged(s)})("filterChanged",function(s){return n.onFilterChanged(s)}),e.ALo(13,"async"),e.qZA(),e._UZ(14,"div",7),e.TgZ(15,"button",8),e.NdJ("click",function(){return n.add()}),e.ALo(16,"async"),e.ALo(17,"async"),e.TgZ(18,"mat-icon"),e._uU(19,"add"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",e.lcZ(5,5,n.contentType$)),e.xp6(8),e.Q6J("rowData",e.lcZ(13,7,n.fields$))("gridOptions",n.gridOptions)("ngClass",e.WLB(13,se,n.sortApplied,n.filterApplied)),e.xp6(3),e.Q6J("disabled",null==e.lcZ(16,9,n.contentType$)||e.lcZ(17,11,n.contentType$).EditInfo.ReadOnly))},directives:[_.uh,p.O5,ne.lW,m.$,u.Hw,c.lC,ie.N8,p.mk],pipes:[p.Ov],styles:[""]}),i})()},9119:(I,g,a)=>{a.d(g,{f:()=>c});const c={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.07.00/ng-edit/projects_ng-dialogs_src_app_content-type-fields_content-type-fields_component_ts.4d808b51a952c7c4.js.map