"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts"],{8785:(Z,f,s)=>{s.r(f),s.d(f,{ContentTypeFieldsComponent:()=>se});var d=s(6317),g=s(6562),v=s(635),_=s(745),x=s(1640),A=s(7066),h=s(2409),w=s(325),c=s(60),O=s(4153),r=s(941),u=s(2225),E=s(6386),S=s(3789),e=s(3184),m=s(6362),D=s(1130),y=s(2376),T=s(5590),N=s(178),F=s(2796);function U(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().openMetadata()}),e.TgZ(1,"mat-icon",9),e._uU(2,"local_offer"),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.metadataCount)("matBadgeHidden",!t.metadataCount)}}function P(o,a){if(1&o&&(e.TgZ(0,"div",10)(1,"mat-icon",11),e._uU(2,"local_offer"),e.qZA()()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.metadataCount)("matBadgeHidden",!t.metadataCount)}}function $(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().openPermissions()}),e.TgZ(1,"mat-icon",9),e._uU(2,"person"),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.field.Permissions.Count)("matBadgeHidden",!t.field.Permissions.Count)}}function B(o,a){if(1&o&&(e.TgZ(0,"div",10)(1,"mat-icon",11),e._uU(2,"person"),e.qZA()()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("matBadge",t.field.Permissions.Count)("matBadgeHidden",!t.field.Permissions.Count)}}function H(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().rename()}),e.TgZ(1,"mat-icon"),e._uU(2,"text_fields"),e.qZA(),e.TgZ(3,"span"),e._uU(4,"Rename"),e.qZA()(),e.TgZ(5,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteField()}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Delete"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.field.EditInfo.ReadOnly),e.xp6(5),e.Q6J("disabled",t.field.EditInfo.ReadOnly||t.field.IsTitle)}}let J=(()=>{class o{constructor(){}agInit(t){this.params=t,this.field=this.params.data,this.metadataCount=this.field.Metadata?Object.keys(this.field.Metadata).filter(n=>"merged"!==n).length:0,this.enablePermissions=this.field.InputType===S.v.StringWysiwyg||this.field.Type===E.Q.Hyperlink}refresh(t){return!0}openMetadata(){this.params.onOpenMetadata(this.field)}rename(){this.params.onRename(this.field)}openPermissions(){this.params.onOpenPermissions(this.field)}deleteField(){this.params.onDelete(this.field)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields-actions"]],decls:11,vars:5,consts:[[1,"actions-component"],["class","like-button highlight","matRipple","","tippy","Metadata",3,"click",4,"ngIf"],["class","like-button disabled",4,"ngIf"],["class","like-button highlight","matRipple","","tippy","Permissions",3,"click",4,"ngIf"],["matRipple","","tippy","More",1,"like-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["menu","matMenu"],["matMenuContent",""],["matRipple","","tippy","Metadata",1,"like-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after",3,"matBadge","matBadgeHidden"],[1,"like-button","disabled"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true","matBadgePosition","below after",3,"matBadge","matBadgeHidden"],["matRipple","","tippy","Permissions",1,"like-button","highlight",3,"click"],["mat-menu-item","",3,"disabled","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,U,3,2,"div",1),e.YNc(2,P,3,2,"div",2),e.YNc(3,$,3,2,"div",3),e.YNc(4,B,3,2,"div",2),e.TgZ(5,"div",4)(6,"mat-icon"),e._uU(7,"more_horiz"),e.qZA()()(),e.TgZ(8,"mat-menu",5,6),e.YNc(10,H,10,2,"ng-template",7),e.qZA()),2&t){const i=e.MAs(9);e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly&&n.enablePermissions),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly||!n.enablePermissions),e.xp6(1),e.Q6J("matMenuTriggerFor",i)}},directives:[m.O5,D.wG,y.$,T.Hw,N.k,F.p6,F.VK,F.KA,F.OP],styles:[""]}),o})();function k(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){return e.CHM(t),e.oxw().changeInputType()}),e.TgZ(1,"div",3),e._uU(2),e.qZA(),e.TgZ(3,"div",4)(4,"mat-icon"),e._uU(5,"arrow_drop_down"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.value)}}function G(o,a){if(1&o&&(e.TgZ(0,"div",5)(1,"div",6),e._uU(2),e.qZA(),e.TgZ(3,"div",7)(4,"mat-icon"),e._uU(5,"arrow_drop_down"),e.qZA()()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.value)}}let Q=(()=>{class o{agInit(t){this.params=t,this.value=t.value,this.field=t.data}refresh(t){return!0}changeInputType(){this.params.onChangeInputType(this.field)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields-input-type"]],decls:2,vars:2,consts:[["matRipple","","class","input-component highlight",3,"click",4,"ngIf"],["class","input-component disabled",4,"ngIf"],["matRipple","",1,"input-component","highlight",3,"click"],[1,"text"],[1,"like-button"],[1,"input-component","disabled"],[1,"text","disabled"],[1,"like-button","disabled"]],template:function(t,n){1&t&&(e.YNc(0,k,6,1,"div",0),e.YNc(1,G,6,1,"div",1)),2&t&&(e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly))},directives:[m.O5,D.wG,T.Hw],styles:[""]}),o})();function Y(o,a){1&o&&(e.TgZ(0,"mat-icon",3),e._uU(1,"functions"),e.qZA())}function j(o,a){1&o&&(e.TgZ(0,"mat-icon",4),e._uU(1,"mobiledata_off"),e.qZA())}let W=(()=>{class o{agInit(t){const n=t.data;this.hasFormulas=n.HasFormulas,this.isEphemeral=n.IsEphemeral}refresh(t){return!0}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields-special"]],decls:3,vars:2,consts:[[1,"icon-container"],["tippy","Has Formulas",4,"ngIf"],["tippy","Ephemeral / Temporary, won't save",4,"ngIf"],["tippy","Has Formulas"],["tippy","Ephemeral / Temporary, won't save"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Y,2,0,"mat-icon",1),e.YNc(2,j,2,0,"mat-icon",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.hasFormulas),e.xp6(1),e.Q6J("ngIf",n.isEphemeral))},directives:[m.O5,T.Hw,y.$],styles:[""]}),o})();function L(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().setTitle()}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.isTitle?"star":"star_outline")}}function z(o,a){if(1&o&&(e.TgZ(0,"div",4)(1,"mat-icon"),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.isTitle?"star":"star_outline")}}let K=(()=>{class o{agInit(t){this.params=t,this.isTitle=t.value,this.field=t.data}refresh(t){return!0}setTitle(){this.params.onSetTitle(this.field)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields-title"]],decls:3,vars:2,consts:[[1,"actions-component"],["class","like-button highlight","matRipple","","tippy","Use as title field",3,"click",4,"ngIf"],["class","like-button disabled",4,"ngIf"],["matRipple","","tippy","Use as title field",1,"like-button","highlight",3,"click"],[1,"like-button","disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,L,3,1,"div",1),e.YNc(2,z,3,1,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!n.field.EditInfo.ReadOnly),e.xp6(1),e.Q6J("ngIf",n.field.EditInfo.ReadOnly))},directives:[m.O5,D.wG,y.$,T.Hw],styles:[""]}),o})();var X=s(1282);let V=(()=>{class o{agInit(t){this.value=t.value,this.icon=(0,X.x)(this.value)}refresh(t){return!0}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields-type"]],decls:3,vars:2,consts:[[1,"icon-container",3,"tippy"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"mat-icon"),e._uU(2),e.qZA()()),2&t&&(e.Q6J("tippy",n.value),e.xp6(2),e.Oqu(n.icon))},directives:[y.$,T.Hw],styles:[""]}),o})();var q=s(898),C=s(1809),R=s(2977),b=s(5758),ee=s(2528),te=s(7317),ne=s(4680);const ie=function(o,a){return{"grid-sorted":o,"grid-filtered":a}};function oe(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div"),e.ynx(4),e._uU(5),e.BQk(),e._uU(6," Fields "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeDialog()}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()()(),e._UZ(10,"router-outlet"),e.TgZ(11,"div",5)(12,"ag-grid-angular",6),e.NdJ("rowDragEnter",function(i){return e.CHM(t),e.oxw().onRowDragEnter(i)})("rowDragEnd",function(i){return e.CHM(t),e.oxw().onRowDragEnd(i)})("rowDragMove",function(i){return e.CHM(t),e.oxw().onRowDragMove(i)})("gridReady",function(i){return e.CHM(t),e.oxw().onGridReady(i)})("sortChanged",function(i){return e.CHM(t),e.oxw().onSortChanged(i)})("filterChanged",function(i){return e.CHM(t),e.oxw().onFilterChanged(i)}),e.qZA(),e._UZ(13,"div",7),e.TgZ(14,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e.TgZ(15,"mat-icon"),e._uU(16,"add"),e.qZA()()()()}if(2&o){const t=a.ngIf,n=e.oxw();e.xp6(5),e.hij(" ",(null==t.contentType?null:t.contentType.Label)||(null==t.contentType?null:t.contentType.Name)," "),e.xp6(7),e.Q6J("rowData",t.fields)("gridOptions",n.gridOptions)("ngClass",e.WLB(5,ie,n.sortApplied,n.filterApplied)),e.xp6(2),e.Q6J("disabled",null==t.contentType||t.contentType.EditInfo.ReadOnly)}}let se=(()=>{class o extends c.H{constructor(t,n,i,l,p,M){super(t,n),this.router=t,this.route=n,this.dialogRef=i,this.contentTypesService=l,this.contentTypesFieldsService=p,this.snackBar=M,this.contentType$=new d.X(void 0),this.fields$=new d.X(void 0),this.gridOptions=this.buildGridOptions(),this.sortApplied=!1,this.filterApplied=!1,this.rowDragSuppressed=!1,this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.fetchFields(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchFields()})),this.viewModel$=(0,g.a)([this.contentType$,this.fields$]).pipe((0,v.U)(([t,n])=>({contentType:t,fields:n})))}ngOnDestroy(){this.contentType$.complete(),this.fields$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}onGridReady(t){this.gridApi=t.api,this.columnApi=t.columnApi}onRowDragEnter(t){this.gridApi.setEnableCellTextSelection(!1)}onRowDragEnd(t){this.gridApi.setSuppressRowDrag(!0);const n=this.fields$.value.map(i=>i.Id);this.contentTypesFieldsService.reOrder(n,this.contentType$.value).subscribe(()=>{this.fetchFields(()=>{this.gridApi.setEnableCellTextSelection(!0),this.gridApi.setSuppressRowDrag(!1)})})}onRowDragMove(t){const n=t.node,i=t.overNode;if(i&&n!==i){const M=i.data,I=[...this.fields$.value],ae=I.indexOf(n.data),le=I.indexOf(M);this.moveInArray(I,ae,le),this.fields$.next(I),this.gridApi.clearFocusedCell()}}moveInArray(t,n,i){const l=t[n];t.splice(n,1),t.splice(i,0,l)}onSortChanged(t){const n=this.columnApi.getColumnState();this.sortApplied=n.some(i=>null!=i.sort),this.suppressRowDrag()}onFilterChanged(t){const n=this.gridApi.getFilterModel(),i=Object.keys(n);this.filterApplied=i.length>0,this.suppressRowDrag()}suppressRowDrag(){const t=this.sortApplied||this.filterApplied;t&&!this.rowDragSuppressed?(this.rowDragSuppressed=!0,this.gridApi.setSuppressRowDrag(!0)):!t&&this.rowDragSuppressed&&(this.rowDragSuppressed=!1,this.gridApi.setSuppressRowDrag(!1))}add(){this.router.navigate([`add/${this.contentTypeStaticName}`],{relativeTo:this.route})}nameCellRenderer(t){const n=t.data,i=n.InputType;if(C.z.endsPreviousGroup(i))return t.value;let l=!1;for(const p of this.fields$.value)if(C.z.isGroupStart(i))l=!0;else if(C.z.isGroupEnd(i))l=!1;else if(p.StaticName===n.StaticName)break;return l?`<span class="is-in-group">${t.value}</span>`:t.value}fetchFields(t){const n=null==this.contentType$.value?this.contentTypesService.retrieveContentType(this.contentTypeStaticName):(0,_.of)(this.contentType$.value),i=this.contentTypesFieldsService.getFields(this.contentTypeStaticName);(0,x.D)([n,i]).subscribe(([l,p])=>{this.contentType$.next(l),this.fields$.next(p),null!=t&&t()})}editFieldMetadata(t){const n={items:[this.createItemDefinition(t,"All"),this.createItemDefinition(t,t.Type),this.createItemDefinition(t,t.InputType)]},i=(0,u.f)(n);this.router.navigate([`edit/${i}`],{relativeTo:this.route})}createItemDefinition(t,n){return null!=t.Metadata[n]?{EntityId:t.Metadata[n].Id}:{ContentTypeName:"@"+n,For:{Target:r.Zy.metadata.attribute.target,TargetType:r.Zy.metadata.attribute.targetType,Number:t.Id},Prefill:{Name:t.StaticName}}}setTitle(t){this.snackBar.open("Setting title..."),this.contentTypesFieldsService.setTitle(t,this.contentType$.value).subscribe(()=>{this.snackBar.open("Title set",null,{duration:2e3}),this.fetchFields()})}changeInputType(t){this.router.navigate([`update/${this.contentTypeStaticName}/${t.Id}/inputType`],{relativeTo:this.route})}rename(t){this.router.navigate([`update/${this.contentTypeStaticName}/${t.Id}/name`],{relativeTo:this.route})}delete(t){!confirm(`Are you sure you want to delete '${t.StaticName}' (${t.Id})?`)||(this.snackBar.open("Deleting..."),this.contentTypesFieldsService.delete(t,this.contentType$.value).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchFields()}))}openPermissions(t){this.router.navigate([w.i.getUrlAttribute(t.Id)],{relativeTo:this.route})}openMetadata(t){const n=h.U.getUrlAttribute(t.Id,`Metadata for Field: ${t.StaticName} (${t.Id})`);this.router.navigate([n],{relativeTo:this.route})}buildGridOptions(){return Object.assign(Object.assign({},O.f),{getRowClass(n){const i=n.data,l=[];return i.EditInfo.ReadOnly&&l.push("disable-row-drag"),C.z.isGroupStart(i.InputType)&&l.push("group-start-row"),C.z.isGroupEnd(i.InputType)&&l.push("group-end-row"),l},columnDefs:[{rowDrag:!0,width:18,cellClass:"no-select no-padding no-outline".split(" ")},{field:"Title",width:42,cellClass:"secondary-action no-padding no-outline".split(" "),valueGetter:n=>n.data.IsTitle,cellRenderer:K,cellRendererParams:(()=>({onSetTitle:i=>this.setTitle(i)}))()},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,filter:"agTextColumnFilter",onCellClicked:n=>{this.editFieldMetadata(n.data)},cellRenderer:n=>this.nameCellRenderer(n),valueGetter:n=>n.data.StaticName},{field:"Type",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Type,cellRenderer:V},{headerName:"Input",field:"InputType",width:160,cellClass:n=>(n.data.EditInfo.ReadOnly?"no-outline no-padding":"secondary-action no-padding").split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{const i=n.data;return i.InputType.substring(i.InputType.indexOf("-")+1)},cellRenderer:Q,cellRendererParams:(()=>({onChangeInputType:i=>this.changeInputType(i)}))()},{field:"Label",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{var i,l;return null===(l=null===(i=n.data.Metadata)||void 0===i?void 0:i.All)||void 0===l?void 0:l.Name}},{field:"Special",width:66,headerClass:"dense",cellClass:"no-outline",cellRenderer:W},{field:"Notes",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>{var i,l;return null===(l=null===(i=n.data.Metadata)||void 0===i?void 0:i.All)||void 0===l?void 0:l.Notes}},{width:122,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:J,cellRendererParams:(()=>({onRename:i=>this.rename(i),onDelete:i=>this.delete(i),onOpenPermissions:i=>this.openPermissions(i),onOpenMetadata:i=>this.openMetadata(i)}))()}]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(R.F0),e.Y36(R.gz),e.Y36(b.so),e.Y36(A.s),e.Y36(q.Mr),e.Y36(ee.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-content-type-fields"]],features:[e.qOj],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions","ngClass","rowDragEnter","rowDragEnd","rowDragMove","gridReady","sortChanged","filterChanged"],[1,"grid-more-actions-box"],["mat-fab","","mat-elevation-z24","","tippy","Add fields",1,"grid-fab",3,"disabled","click"]],template:function(t,n){1&t&&(e.YNc(0,oe,17,8,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.viewModel$))},directives:[m.O5,b.uh,te.lW,y.$,T.Hw,R.lC,ne.N8,m.mk],pipes:[m.Ov],styles:[""]}),o})()},60:(Z,f,s)=>{s.d(f,{H:()=>w});var d=s(2977),g=s(116),v=s(4874),_=s(635),x=s(679),A=s(5904),h=s(3184);let w=(()=>{class c extends A.f{constructor(r,u){super(),this.router=r,this.route=u}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,g.h)(r=>r instanceof d.m2),(0,v.O)(!!this.route.snapshot.firstChild.firstChild),(0,_.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,x.G)(),(0,g.h)(([r,u])=>r&&!u))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,g.h)(r=>r instanceof d.m2),(0,v.O)(!!this.route.snapshot.firstChild),(0,_.U)(()=>!!this.route.snapshot.firstChild),(0,x.G)(),(0,g.h)(([r,u])=>r&&!u))}}return c.\u0275fac=function(r){return new(r||c)(h.Y36(d.F0),h.Y36(d.gz))},c.\u0275dir=h.lG2({type:c,features:[h.qOj]}),c})()},4153:(Z,f,s)=>{s.d(f,{f:()=>d});const d={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.06.00/dist/ng-edit/projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts.aae54f9378a6e9e2.js.map