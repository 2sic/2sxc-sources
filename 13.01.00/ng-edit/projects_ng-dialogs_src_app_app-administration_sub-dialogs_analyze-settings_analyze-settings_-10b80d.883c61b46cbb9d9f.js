"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_-10b80d"],{2112:function(X,y,a){a.r(y),a.d(y,{AnalyzeSettingsComponent:function(){return Y}});var S=a(2090),u=a(8069),p=a(8047),z=a(1276),d=a(6317),x=a(6562),k=a(635),w=a(9119),O=a(5388),e=a(7133),R=a(2528),m=a(1130),v=a(785),V=function(){var i=function(){function s(t){(0,u.Z)(this,s),this.snackBar=t}return(0,p.Z)(s,[{key:"agInit",value:function(n){this.key=n.value}},{key:"refresh",value:function(n){return!0}},{key:"copy",value:function(){(0,O.v)(this.key),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}]),s}();return i.\u0275fac=function(t){return new(t||i)(e.Y36(R.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-analyze-settings-key"]],decls:3,vars:2,consts:[["matRipple","",1,"key-box","highlight",3,"tippy","click"],[1,"key"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return n.copy()}),e.TgZ(1,"span",1),e._uU(2),e.qZA(),e.qZA()),2&t&&(e.Q6J("tippy",n.key),e.xp6(2),e.Oqu(n.key))},directives:[m.wG,v.$],styles:[".key-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden}"]}),i}(),g=a(6362),h=a(5590);function $(i,s){if(1&i&&(e.TgZ(0,"div",2),e.TgZ(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"mat-icon"),e._uU(5,"search"),e.qZA(),e.qZA(),e.qZA()),2&i){var t=e.oxw();e.xp6(2),e.Oqu(t.totalResults)}}function I(i,s){if(1&i){var t=e.EpF();e.TgZ(0,"div",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().openDetails()}),e.TgZ(1,"div",5),e._uU(2),e.qZA(),e.TgZ(3,"div",6),e.TgZ(4,"mat-icon"),e._uU(5,"search"),e.qZA(),e.qZA(),e.qZA()}if(2&i){var n=e.oxw();e.xp6(2),e.Oqu(n.totalResults)}}var N=function(){var i=function(){function s(){(0,u.Z)(this,s)}return(0,p.Z)(s,[{key:"agInit",value:function(n){this.totalResults=n.value,this.params=n,this.stackItem=this.params.data}},{key:"refresh",value:function(n){return!0}},{key:"openDetails",value:function(){this.params.openDetails(this.stackItem)}}]),s}();return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-analyze-settings-total-results"]],decls:2,vars:2,consts:[["class","input-component no-click",4,"ngIf"],["matRipple","","class","input-component highlight","tippy","Open details",3,"click",4,"ngIf"],[1,"input-component","no-click"],[1,"like-button","disabled"],["matRipple","","tippy","Open details",1,"input-component","highlight",3,"click"],[1,"text"],[1,"like-button"]],template:function(t,n){1&t&&(e.YNc(0,$,6,1,"div",0),e.YNc(1,I,6,1,"div",1)),2&t&&(e.Q6J("ngIf",n.totalResults<=1),e.xp6(1),e.Q6J("ngIf",n.totalResults>1))},directives:[g.O5,h.Hw,m.wG,v.$],styles:[".no-click[_ngcontent-%COMP%]{cursor:default;-webkit-user-select:initial;user-select:initial}"]}),i}(),D=a(6677),J=a(7854),M=a(6873),C=a(5758),f=a(2977),U=a(7317),Z=a(4770),F=a(1434),A=a(587),b=a(1350);function K(i,s){if(1&i&&(e.TgZ(0,"mat-option",8),e._uU(1),e.qZA()),2&i){var t=s.$implicit;e.Q6J("value",t.Guid),e.xp6(1),e.Oqu(t.Name)}}function P(i,s){if(1&i){var t=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeDialog()}),e.TgZ(6,"mat-icon"),e._uU(7,"close"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"p",5),e._uU(9," Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. "),e.qZA(),e._UZ(10,"router-outlet"),e.TgZ(11,"mat-form-field",6),e.TgZ(12,"mat-label"),e._uU(13,"Merge settings / resources of a View"),e.qZA(),e.TgZ(14,"mat-select",7),e.NdJ("ngModelChange",function(c){return e.CHM(t),e.oxw().changeView(c)}),e.TgZ(15,"mat-option",8),e._uU(16,"No view selected - this is how APIs see the data"),e.qZA(),e.YNc(17,K,2,2,"mat-option",9),e.qZA(),e.qZA(),e.TgZ(18,"div",10),e._UZ(19,"ag-grid-angular",11),e._UZ(20,"div",12),e.qZA(),e.qZA()}if(2&i){var n=s.ngIf,o=e.oxw();e.xp6(4),e.hij("Analyze ",o.part,""),e.xp6(10),e.Q6J("ngModel",n.selectedView),e.xp6(1),e.Q6J("value",void 0),e.xp6(2),e.Q6J("ngForOf",n.views),e.xp6(2),e.Q6J("rowData",n.stack)("modules",o.modules)("gridOptions",o.gridOptions)}}var Y=function(){var i=function(){function s(t,n,o,l,c){var r=this;(0,u.Z)(this,s),this.dialogRef=t,this.route=n,this.router=o,this.viewsService=l,this.analyzeSettingsService=c,this.modules=z.F$,this.gridOptions=Object.assign(Object.assign({},w.f),{frameworkComponents:{analyzeSettingsKeyComponent:V,analyzeSettingsValueComponent:D.O,analyzeSettingsTotalComponent:N},columnDefs:[{headerName:"Key",field:"Path",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline",cellRenderer:"analyzeSettingsKeyComponent",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Value",field:"_value",flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline",cellRenderer:"analyzeSettingsValueComponent",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Source",field:"Source",flex:1,minWidth:150,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Total",field:"TotalResults",width:72,headerClass:"dense",cellClass:"secondary-action no-padding no-outline",cellRenderer:"analyzeSettingsTotalComponent",sortable:!0,filter:"agNumberColumnFilter",cellRendererParams:{openDetails:function(Q){r.router.navigate(["details/".concat(r.selectedView$.value,"/").concat(Q.Path)],{relativeTo:r.route})}}}]}),this.part=this.route.snapshot.paramMap.get("part")}return(0,p.Z)(s,[{key:"ngOnInit",value:function(){this.views$=new d.X([]),this.selectedView$=new d.X(void 0),this.stack$=new d.X([]),this.getViews(),this.getStack(),this.templateVars$=(0,x.a)([this.views$,this.selectedView$,this.stack$]).pipe((0,k.U)(function(n){var o=(0,S.Z)(n,3);return{views:o[0],selectedView:o[1],stack:o[2]}}))}},{key:"ngOnDestroy",value:function(){this.views$.complete(),this.selectedView$.complete(),this.stack$.complete()}},{key:"closeDialog",value:function(){this.dialogRef.close()}},{key:"changeView",value:function(n){this.selectedView$.next(n),this.getStack()}},{key:"getViews",value:function(){var n=this;this.viewsService.getAll().subscribe(function(o){n.views$.next(o)})}},{key:"getStack",value:function(){var n=this;this.analyzeSettingsService.getStack(this.part,void 0,this.selectedView$.value,!0).subscribe(function(o){n.stack$.next(o)})}}]),s}();return i.\u0275fac=function(t){return new(t||i)(e.Y36(C.so),e.Y36(f.gz),e.Y36(f.F0),e.Y36(J.h3),e.Y36(M.P))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-analyze-settings"]],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-description"],["appearance","standard","color","accent",1,"view-select-box"],[3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","modules","gridOptions"],[1,"grid-more-actions-box"]],template:function(t,n){1&t&&(e.YNc(0,P,21,7,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.templateVars$))},directives:[g.O5,C.uh,U.lW,v.$,h.Hw,f.lC,Z.KE,Z.hX,F.gD,A.JJ,A.On,m.ey,g.sg,b.N8],pipes:[g.Ov],styles:[".view-select-box[_ngcontent-%COMP%]{width:400px}"]}),i}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.01.00/ng-edit/projects_ng-dialogs_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_-10b80d.883c61b46cbb9d9f.js.map