(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_ng-dialogs_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_-614257"],{9419:function(e,t,i){"use strict";i.r(t),i.d(t,{AnalyzeSettingsComponent:function(){return V}});var n=i(4762),o=i(9206),a=i(8512),s=i(1305),l=i(9996),r=i(8579),c=i(8838),p=i(1785),u=i(3589),g=i(7064),d=i(7512),h=function(){function e(e){this.snackBar=e}return e.prototype.agInit=function(e){this.key=e.value},e.prototype.refresh=function(e){return!0},e.prototype.copy=function(){(0,c.v)(this.key),this.snackBar.open("Copied to clipboard",null,{duration:2e3})},e.\u0275fac=function(t){return new(t||e)(p.Y36(u.ux))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-analyze-settings-key"]],decls:3,vars:2,consts:[["matRipple","",1,"key-box","highlight",3,"tippy","click"],[1,"key"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.NdJ("click",function(){return t.copy()}),p.TgZ(1,"span",1),p._uU(2),p.qZA(),p.qZA()),2&e&&(p.Q6J("tippy",t.key),p.xp6(2),p.Oqu(t.key))},directives:[g.wG,d.$],styles:[".key-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden}"]}),e}(),f=i(1116),m=i(7307);function v(e,t){if(1&e&&(p.TgZ(0,"div",2),p.TgZ(1,"div"),p._uU(2),p.qZA(),p.TgZ(3,"div",3),p.TgZ(4,"mat-icon"),p._uU(5,"search"),p.qZA(),p.qZA(),p.qZA()),2&e){var i=p.oxw();p.xp6(2),p.Oqu(i.totalResults)}}function y(e,t){if(1&e){var i=p.EpF();p.TgZ(0,"div",4),p.NdJ("click",function(){return p.CHM(i),p.oxw().openDetails()}),p.TgZ(1,"div",5),p._uU(2),p.qZA(),p.TgZ(3,"div",6),p.TgZ(4,"mat-icon"),p._uU(5,"search"),p.qZA(),p.qZA(),p.qZA()}if(2&e){var n=p.oxw();p.xp6(2),p.Oqu(n.totalResults)}}var w=function(){function e(){}return e.prototype.agInit=function(e){this.totalResults=e.value,this.params=e,this.stackItem=this.params.data},e.prototype.refresh=function(e){return!0},e.prototype.openDetails=function(){this.params.openDetails(this.stackItem)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-analyze-settings-total-results"]],decls:2,vars:2,consts:[["class","input-component no-click",4,"ngIf"],["matRipple","","class","input-component highlight","tippy","Open details",3,"click",4,"ngIf"],[1,"input-component","no-click"],[1,"like-button","disabled"],["matRipple","","tippy","Open details",1,"input-component","highlight",3,"click"],[1,"text"],[1,"like-button"]],template:function(e,t){1&e&&(p.YNc(0,v,6,1,"div",0),p.YNc(1,y,6,1,"div",1)),2&e&&(p.Q6J("ngIf",t.totalResults<=1),p.xp6(1),p.Q6J("ngIf",t.totalResults>1))},directives:[f.O5,m.Hw,g.wG,d.$],styles:[".no-click[_ngcontent-%COMP%]{cursor:default;-webkit-user-select:initial;user-select:initial}"]}),e}(),Z=i(8669),k=i(2935),x=i(1282),C=i(5151),T=i(8758),_=i(4369),b=i(3070),A=i(3841),q=i(1041),O=i(9825);function $(e,t){if(1&e&&(p.TgZ(0,"mat-option",8),p._uU(1),p.qZA()),2&e){var i=t.$implicit;p.Q6J("value",i.Guid),p.xp6(1),p.Oqu(i.Name)}}function S(e,t){if(1&e){var i=p.EpF();p.TgZ(0,"div",1),p.TgZ(1,"div",2),p.TgZ(2,"div",3),p.TgZ(3,"div"),p._uU(4),p.qZA(),p.TgZ(5,"button",4),p.NdJ("click",function(){return p.CHM(i),p.oxw().closeDialog()}),p.TgZ(6,"mat-icon"),p._uU(7,"close"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"p",5),p._uU(9," Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. "),p.qZA(),p._UZ(10,"router-outlet"),p.TgZ(11,"mat-form-field",6),p.TgZ(12,"mat-label"),p._uU(13,"Merge settings / resources of a View"),p.qZA(),p.TgZ(14,"mat-select",7),p.NdJ("ngModelChange",function(e){return p.CHM(i),p.oxw().changeView(e)}),p.TgZ(15,"mat-option",8),p._uU(16,"No view selected - this is how APIs see the data"),p.qZA(),p.YNc(17,$,2,2,"mat-option",9),p.qZA(),p.qZA(),p.TgZ(18,"div",10),p._UZ(19,"ag-grid-angular",11),p._UZ(20,"div",12),p.qZA(),p.qZA()}if(2&e){var n=t.ngIf,o=p.oxw();p.xp6(4),p.hij("Analyze ",o.part,""),p.xp6(10),p.Q6J("ngModel",n.selectedView),p.xp6(1),p.Q6J("value",void 0),p.xp6(2),p.Q6J("ngForOf",n.views),p.xp6(2),p.Q6J("rowData",n.stack)("modules",o.modules)("gridOptions",o.gridOptions)}}var V=function(){function e(e,t,i,a,s){var l=this;this.dialogRef=e,this.route=t,this.router=i,this.viewsService=a,this.analyzeSettingsService=s,this.modules=o.F$,this.gridOptions=(0,n.pi)((0,n.pi)({},r.f),{frameworkComponents:{analyzeSettingsKeyComponent:h,analyzeSettingsValueComponent:Z.O,analyzeSettingsTotalComponent:w},columnDefs:[{headerName:"Key",field:"Path",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline",cellRenderer:"analyzeSettingsKeyComponent",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Value",field:"_value",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline",cellRenderer:"analyzeSettingsValueComponent",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Source",field:"Source",flex:1,minWidth:150,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Total",field:"TotalResults",width:70,headerClass:"dense",cellClass:"secondary-action no-padding no-outline",cellRenderer:"analyzeSettingsTotalComponent",sortable:!0,filter:"agNumberColumnFilter",cellRendererParams:{openDetails:function(e){l.router.navigate(["details/"+l.selectedView$.value+"/"+e.Path],{relativeTo:l.route})}}}]}),this.part=this.route.snapshot.paramMap.get("part")}return e.prototype.ngOnInit=function(){this.views$=new a.X([]),this.selectedView$=new a.X(void 0),this.stack$=new a.X([]),this.getViews(),this.getStack(),this.templateVars$=(0,s.aj)([this.views$,this.selectedView$,this.stack$]).pipe((0,l.U)(function(e){var t=(0,n.CR)(e,3);return{views:t[0],selectedView:t[1],stack:t[2]}}))},e.prototype.ngOnDestroy=function(){this.views$.complete(),this.selectedView$.complete(),this.stack$.complete()},e.prototype.closeDialog=function(){this.dialogRef.close()},e.prototype.changeView=function(e){this.selectedView$.next(e),this.getStack()},e.prototype.getViews=function(){var e=this;this.viewsService.getAll().subscribe(function(t){e.views$.next(t)})},e.prototype.getStack=function(){var e=this;this.analyzeSettingsService.getStack(this.part,void 0,this.selectedView$.value,!0).subscribe(function(t){e.stack$.next(t)})},e.\u0275fac=function(t){return new(t||e)(p.Y36(k.so),p.Y36(x.gz),p.Y36(x.F0),p.Y36(C.h3),p.Y36(T.P))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-analyze-settings"]],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-description"],["appearance","standard","color","accent",1,"view-select-box"],[3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","modules","gridOptions"],[1,"grid-more-actions-box"]],template:function(e,t){1&e&&(p.YNc(0,S,21,7,"div",0),p.ALo(1,"async")),2&e&&p.Q6J("ngIf",p.lcZ(1,1,t.templateVars$))},directives:[f.O5,k.uh,_.lW,d.$,m.Hw,x.lC,b.KE,b.hX,A.gD,q.JJ,q.On,g.ey,f.sg,O.N8],pipes:[f.Ov],styles:[".view-select-box[_ngcontent-%COMP%]{width:400px}"]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/12.08.01/ng-edit/projects_ng-dialogs_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_-614257.48f2817bb44ecbc51090.js.map