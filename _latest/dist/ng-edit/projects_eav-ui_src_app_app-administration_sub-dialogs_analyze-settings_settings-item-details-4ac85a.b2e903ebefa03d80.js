"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a"],{8253:(f,_,e)=>{e.r(_),e.d(_,{SettingsItemDetailsComponent:()=>P});var g=e(8071),c=e(3839),u=e(9736),m=e(6433),p=e(3220),v=e(3774),t=e(1699),O=e(6861),E=e(91),D=e(9498),r=e(6575),M=e(895),h=e(6515),C=e(8621);function I(s,o){if(1&s){const a=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.closeDialog())}),t.TgZ(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t.TgZ(8,"p",5),t._uU(9," Here you can see where "),t.TgZ(10,"code"),t._uU(11),t.qZA(),t._uU(12," is configured. "),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"ag-grid-angular",7)(15,"div",8),t.qZA()()}if(2&s){const a=o.ngIf,i=t.oxw();t.xp6(4),t.Oqu(i.settingsItemKey),t.xp6(7),t.Oqu(i.settingsItemKey),t.xp6(3),t.Q6J("rowData",a.stack)("gridOptions",i.gridOptions)}}let P=(()=>{var s;class o{constructor(i,n,l){this.dialogRef=i,this.route=n,this.analyzeSettingsService=l,this.gridOptions=this.buildGridOptions(),this.part=this.route.snapshot.parent.paramMap.get("part");const d=this.route.snapshot.paramMap.get("view");this.selectedView=["undefined","null"].includes(d)?void 0:d,this.settingsItemKey=this.route.snapshot.paramMap.get("settingsItemKey")}ngOnInit(){this.stack$=new g.X(void 0),this.analyzeSettingsService.getStack(this.part,this.settingsItemKey,this.selectedView,!0).subscribe(i=>{this.stack$.next(i)}),this.viewModel$=(0,c.a)([this.stack$]).pipe((0,u.U)(([i])=>({stack:i})))}ngOnDestroy(){this.stack$.complete()}closeDialog(){this.dialogRef.close()}buildGridOptions(){return{...m.f,columnDefs:[{field:"Value",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline".split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data._value,cellRenderer:v.O},{field:"Source",flex:1,minWidth:150,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Source}]}}}return(s=o).\u0275fac=function(i){return new(i||s)(t.Y36(O.so),t.Y36(E.gz),t.Y36(p.P))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-settings-item-details"]],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-mdc-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-description"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],[1,"grid-more-actions-box"]],template:function(i,n){1&i&&(t.YNc(0,I,16,4,"div",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,n.viewModel$))},dependencies:[D.$,r.O5,M.RK,h.Hw,C.N8,r.Ov],styles:["code[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px;background-color:#eee}"]}),o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.08.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a.b2e903ebefa03d80.js.map