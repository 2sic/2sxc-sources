"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e"],{5103:(I,u,s)=>{s.r(u),s.d(u,{AnalyzeSettingsComponent:()=>U});var c=s(6317),f=s(6562),C=s(635),x=s(4153),T=s(4536),A=s(9584),S=s(9673),t=s(3184),w=s(2528),r=s(1130),p=s(6190);let z=(()=>{class n{constructor(e){this.snackBar=e}agInit(e){this.key=e.value}refresh(e){return!0}copy(){(0,S.v)(this.key),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(w.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-analyze-settings-key"]],decls:3,vars:2,consts:[["matRipple","",1,"key-box","highlight",3,"tippy","click"],[1,"key"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return i.copy()}),t.TgZ(1,"span",1),t._uU(2),t.qZA()()),2&e&&(t.Q6J("tippy",i.key),t.xp6(2),t.Oqu(i.key))},directives:[r.wG,p.$],styles:[".key-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden}"]}),n})();var l=s(6362),m=s(5590);function Z(n,a){if(1&n&&(t.TgZ(0,"div",2)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"mat-icon"),t._uU(5,"search"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.totalResults)}}function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDetails()}),t.TgZ(1,"div",5),t._uU(2),t.qZA(),t.TgZ(3,"div",6)(4,"mat-icon"),t._uU(5,"search"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.totalResults)}}let R=(()=>{class n{agInit(e){this.totalResults=e.value,this.params=e,this.stackItem=this.params.data}refresh(e){return!0}openDetails(){this.params.openDetails(this.stackItem)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-analyze-settings-total-results"]],decls:2,vars:2,consts:[["class","input-component no-click",4,"ngIf"],["matRipple","","class","input-component highlight","tippy","Open details",3,"click",4,"ngIf"],[1,"input-component","no-click"],[1,"like-button","disabled"],["matRipple","","tippy","Open details",1,"input-component","highlight",3,"click"],[1,"text"],[1,"like-button"]],template:function(e,i){1&e&&(t.YNc(0,Z,6,1,"div",0),t.YNc(1,O,6,1,"div",1)),2&e&&(t.Q6J("ngIf",i.totalResults<=1),t.xp6(1),t.Q6J("ngIf",i.totalResults>1))},directives:[l.O5,m.Hw,r.wG,p.$],styles:[".no-click[_ngcontent-%COMP%]{cursor:default;-webkit-user-select:initial;user-select:initial}"]}),n})();var k=s(4144),v=s(5758),d=s(2977),$=s(7317),h=s(4770),V=s(1434),y=s(587),b=s(1350);function J(n,a){if(1&n&&(t.TgZ(0,"mat-option",8),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.Guid),t.xp6(1),t.Oqu(e.Name)}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeDialog()}),t.TgZ(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t.TgZ(8,"p",5),t._uU(9," Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. "),t.qZA(),t._UZ(10,"router-outlet"),t.TgZ(11,"mat-form-field",6)(12,"mat-label"),t._uU(13,"Merge settings / resources of a View"),t.qZA(),t.TgZ(14,"mat-select",7),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().changeView(o)}),t.TgZ(15,"mat-option",8),t._uU(16,"No view selected - this is how APIs see the data"),t.qZA(),t.YNc(17,J,2,2,"mat-option",9),t.qZA()(),t.TgZ(18,"div",10),t._UZ(19,"ag-grid-angular",11)(20,"div",12),t.qZA()()}if(2&n){const e=a.ngIf,i=t.oxw();t.xp6(4),t.hij("Analyze ",i.part,""),t.xp6(10),t.Q6J("ngModel",e.selectedView),t.xp6(1),t.Q6J("value",void 0),t.xp6(2),t.Q6J("ngForOf",e.views),t.xp6(2),t.Q6J("rowData",e.stack)("gridOptions",i.gridOptions)}}let U=(()=>{class n{constructor(e,i,o,g,F){this.dialogRef=e,this.route=i,this.router=o,this.viewsService=g,this.analyzeSettingsService=F,this.gridOptions=this.buildGridOptions(),this.part=this.route.snapshot.paramMap.get("part")}ngOnInit(){this.views$=new c.X([]),this.selectedView$=new c.X(void 0),this.stack$=new c.X([]),this.getViews(),this.getStack(),this.templateVars$=(0,f.a)([this.views$,this.selectedView$,this.stack$]).pipe((0,C.U)(([e,i,o])=>({views:e,selectedView:i,stack:o})))}ngOnDestroy(){this.views$.complete(),this.selectedView$.complete(),this.stack$.complete()}closeDialog(){this.dialogRef.close()}changeView(e){this.selectedView$.next(e),this.getStack()}getViews(){this.viewsService.getAll().subscribe(e=>{this.views$.next(e)})}getStack(){this.analyzeSettingsService.getStack(this.part,void 0,this.selectedView$.value,!0).subscribe(e=>{this.stack$.next(e)})}buildGridOptions(){return Object.assign(Object.assign({},x.f),{columnDefs:[{field:"Key",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline".split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:i=>i.data.Path,cellRenderer:z},{field:"Value",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline".split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:i=>i.data._value,cellRenderer:k.O},{field:"Source",flex:1,minWidth:150,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:i=>i.data.Source},{field:"Total",width:72,headerClass:"dense",cellClass:"secondary-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter",valueGetter:i=>i.data.TotalResults,cellRenderer:R,cellRendererParams:(()=>({openDetails:o=>{this.router.navigate([`details/${this.selectedView$.value}/${o.Path}`],{relativeTo:this.route})}}))()}]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.so),t.Y36(d.gz),t.Y36(d.F0),t.Y36(T.h3),t.Y36(A.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-analyze-settings"]],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-description"],["appearance","standard","color","accent",1,"view-select-box"],[3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],[1,"grid-more-actions-box"]],template:function(e,i){1&e&&(t.YNc(0,M,21,6,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.templateVars$))},directives:[l.O5,v.uh,$.lW,p.$,m.Hw,d.lC,h.KE,h.hX,V.gD,y.JJ,y.On,r.ey,l.sg,b.N8],pipes:[l.Ov],styles:[".view-select-box[_ngcontent-%COMP%]{width:400px}"]}),n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/14.11.00/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e.f0ae7e7f0ea027de.js.map