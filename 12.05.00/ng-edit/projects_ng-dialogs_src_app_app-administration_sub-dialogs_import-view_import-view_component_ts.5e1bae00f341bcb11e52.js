(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_ng-dialogs_src_app_app-administration_sub-dialogs_import-view_import-view_component_ts"],{7097:function(e,t,i){"use strict";i.r(t),i.d(t,{ImportViewComponent:function(){return y}});var o=i(4762),n=i(2935),s=i(8512),r=i(1305),l=i(9996),p=i(1785),c=i(1916),a=i(3589),m=i(1116),u=i(5921),g=i(4369),f=i(7512),d=i(7672);function h(e,t){1&e&&p._UZ(0,"mat-spinner",12)}function x(e,t){1&e&&(p.TgZ(0,"div",17),p._uU(1," The import has been done. See the messages below for more information. "),p.qZA())}function v(e,t){1&e&&(p.TgZ(0,"div",18),p._uU(1," The import failed. See the messages below for more information. "),p.qZA())}var Z=function(e,t,i){return{"sxc-message-warning":e,"sxc-message-success":t,"sxc-message-error":i}};function I(e,t){if(1&e&&(p.TgZ(0,"div",19),p._uU(1),p.qZA()),2&e){var i=t.$implicit;p.Q6J("ngClass",p.kEZ(2,Z,0===i.MessageType,1===i.MessageType,2===i.MessageType)),p.xp6(1),p.hij(" ",i.Text," ")}}function w(e,t){if(1&e&&(p.TgZ(0,"div",13),p.YNc(1,x,2,0,"div",14),p.YNc(2,v,2,0,"div",15),p.YNc(3,I,2,6,"div",16),p.qZA()),2&e){var i=p.oxw().ngIf;p.xp6(1),p.Q6J("ngIf",i.importResult.Success),p.xp6(1),p.Q6J("ngIf",!i.importResult.Success),p.xp6(1),p.Q6J("ngForOf",i.importResult.Messages)}}function b(e,t){if(1&e){var i=p.EpF();p.ynx(0),p.TgZ(1,"button",20),p.NdJ("click",function(){return p.CHM(i),p.oxw(2).closeDialog()}),p._uU(2,"Cancel"),p.qZA(),p.TgZ(3,"button",21),p.NdJ("click",function(){return p.CHM(i),p.oxw(2).importView()}),p._uU(4," Import "),p.qZA(),p.BQk()}if(2&e){var o=p.oxw().ngIf;p.xp6(3),p.Q6J("disabled",!o.importFile||o.isImporting||!!o.importResult)}}function T(e,t){if(1&e){var i=p.EpF();p.ynx(0),p.TgZ(1,"button",22),p.NdJ("click",function(){return p.CHM(i),p.oxw(2).closeDialog()}),p._uU(2,"Close"),p.qZA(),p.BQk()}}function $(e,t){if(1&e){var i=p.EpF();p.TgZ(0,"div",1),p.NdJ("filesDropped",function(e){return p.CHM(i),p.oxw().filesDropped(e)}),p.TgZ(1,"div",2),p.TgZ(2,"div",3),p._uU(3,"Import View"),p.qZA(),p.qZA(),p.YNc(4,h,1,0,"mat-spinner",4),p.TgZ(5,"p",5),p._uU(6,"Select a view file (json) from your computer to import."),p.qZA(),p.TgZ(7,"div"),p.TgZ(8,"button",6),p.NdJ("click",function(){return p.CHM(i),p.MAs(12).click()}),p.TgZ(9,"span"),p._uU(10),p.qZA(),p.qZA(),p.TgZ(11,"input",7,8),p.NdJ("change",function(e){return p.CHM(i),p.oxw().fileChange(e)}),p.qZA(),p.qZA(),p.YNc(13,w,4,3,"div",9),p.TgZ(14,"div",10),p.YNc(15,b,5,1,"ng-container",11),p.YNc(16,T,3,0,"ng-container",11),p.qZA(),p.qZA()}if(2&e){var o=t.ngIf;p.Q6J("allowedFileTypes","json"),p.xp6(4),p.Q6J("ngIf",o.isImporting),p.xp6(4),p.Q6J("disabled",o.isImporting),p.xp6(2),p.Oqu(o.importFile?o.importFile.name:"Select or drop file"),p.xp6(3),p.Q6J("ngIf",o.importResult),p.xp6(2),p.Q6J("ngIf",!(null!=o.importResult&&o.importResult.Success)),p.xp6(1),p.Q6J("ngIf",null==o.importResult?null:o.importResult.Success)}}var y=function(){function e(e,t,i,n){this.dialogData=e,this.dialogRef=t,this.viewsService=i,this.snackBar=n,this.hostClass="dialog-component",this.isImporting$=new s.X(!1),this.importFile$=new s.X(null),this.importResult$=new s.X(null),this.templateVars$=(0,r.aj)([this.isImporting$,this.importFile$,this.importResult$]).pipe((0,l.U)(function(e){var t=(0,o.CR)(e,3);return{isImporting:t[0],importFile:t[1],importResult:t[2]}}))}return e.prototype.ngOnInit=function(){null!=this.dialogData.files&&(this.importFile$.next(this.dialogData.files[0]),this.importView())},e.prototype.ngOnDestroy=function(){this.isImporting$.complete(),this.importFile$.complete(),this.importResult$.complete()},e.prototype.closeDialog=function(){this.dialogRef.close()},e.prototype.filesDropped=function(e){this.importFile$.next(e[0]),this.importResult$.next(null),this.importView()},e.prototype.fileChange=function(e){this.importFile$.next(e.target.files[0]),this.importResult$.next(null)},e.prototype.importView=function(){var e=this;this.isImporting$.next(!0),this.viewsService.import(this.importFile$.value).subscribe({next:function(t){e.isImporting$.next(!1),e.importResult$.next(t)},error:function(t){e.isImporting$.next(!1),e.importResult$.next(null),e.snackBar.open("Import failed. Please check console for more information",null,{duration:3e3})}})},e.\u0275fac=function(t){return new(t||e)(p.Y36(n.WI),p.Y36(n.so),p.Y36(c.h),p.Y36(a.ux))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-import-view"]],hostVars:1,hostBindings:function(e,t){2&e&&p.Ikx("className",t.hostClass)},decls:2,vars:3,consts:[["appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[1,"dialog-description"],["mat-raised-button","","tippy","Open file browser",3,"disabled","click"],["type","file",1,"hide",3,"change"],["fileInput",""],["class","dialog-component-content fancy-scrollbar-light import-result-box",4,"ngIf"],[1,"dialog-component-actions"],[4,"ngIf"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-component-content","fancy-scrollbar-light","import-result-box"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,t){1&e&&(p.YNc(0,$,17,7,"div",0),p.ALo(1,"async")),2&e&&p.Q6J("ngIf",p.lcZ(1,1,t.templateVars$))},directives:[m.O5,u.z,n.uh,g.lW,f.$,d.$g,m.sg,m.mk],pipes:[m.Ov],styles:[".import-result-box[_ngcontent-%COMP%]{margin-top:16px}"]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/12.05.00/ng-edit/projects_ng-dialogs_src_app_app-administration_sub-dialogs_import-view_import-view_component_ts.5e1bae00f341bcb11e52.js.map