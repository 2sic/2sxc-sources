"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_-0d3a5d"],{6052:function(J,g,s){s.r(g),s.d(g,{ImportAppPartsComponent:function(){return F}});var u=s(2090),d=s(8069),f=s(8047),_=s(5758),m=s(6317),v=s(6562),x=s(635),I=s(7003),t=s(7133),h=s(2528),l=s(6362),A=s(1529),P=s(7317),C=s(785),T=s(4742);function D(n,o){1&n&&t._UZ(0,"mat-spinner",13)}function E(n,o){1&n&&(t.TgZ(0,"div",18),t._uU(1," The import has been done. See the messages below for more information. "),t.qZA())}function M(n,o){1&n&&(t.TgZ(0,"div",19),t._uU(1," The import failed. See the messages below for more information. "),t.qZA())}var Z=function(o,e,i){return{"sxc-message-warning":o,"sxc-message-success":e,"sxc-message-error":i}};function O(n,o){if(1&n&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&n){var e=o.$implicit;t.Q6J("ngClass",t.kEZ(2,Z,0===e.MessageType,1===e.MessageType,2===e.MessageType)),t.xp6(1),t.hij(" ",e.Text," ")}}function R(n,o){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,E,2,0,"div",15),t.YNc(2,M,2,0,"div",16),t.YNc(3,O,2,6,"div",17),t.qZA()),2&n){var e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult.Success),t.xp6(1),t.Q6J("ngIf",!e.importResult.Success),t.xp6(1),t.Q6J("ngForOf",e.importResult.Messages)}}function U(n,o){if(1&n){var e=t.EpF();t.ynx(0),t.TgZ(1,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeDialog()}),t._uU(2,"Cancel"),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).importAppParts()}),t._uU(4," Import "),t.qZA(),t.BQk()}if(2&n){var i=t.oxw().ngIf;t.xp6(3),t.Q6J("disabled",!i.importFile||i.isImporting||!!i.importResult)}}function y(n,o){if(1&n){var e=t.EpF();t.ynx(0),t.TgZ(1,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeDialog()}),t._uU(2,"Close"),t.qZA(),t.BQk()}}function b(n,o){if(1&n){var e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(p){return t.CHM(e),t.oxw().filesDropped(p)}),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._uU(3,"Import Content and Templates into this App"),t.qZA(),t.qZA(),t.YNc(4,D,1,0,"mat-spinner",4),t.TgZ(5,"p",5),t._uU(6," Import content and templates from a content export (zip) or partial export (xml) to this app. The entire content of the selected file will be imported. If you want to import an entire app, go to the "),t.TgZ(7,"em"),t._uU(8,"Apps Management"),t.qZA(),t._uU(9,". For further help visit "),t.TgZ(10,"a",6),t._uU(11,"2sxc Help"),t.qZA(),t._uU(12,". "),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"button",7),t.NdJ("click",function(){return t.CHM(e),t.MAs(18).click()}),t.TgZ(15,"span"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"input",8,9),t.NdJ("change",function(p){return t.CHM(e),t.oxw().fileChange(p)}),t.qZA(),t.qZA(),t.YNc(19,R,4,3,"div",10),t.TgZ(20,"div",11),t.YNc(21,U,5,1,"ng-container",12),t.YNc(22,y,3,0,"ng-container",12),t.qZA(),t.qZA()}if(2&n){var i=o.ngIf;t.Q6J("allowedFileTypes","xml"),t.xp6(4),t.Q6J("ngIf",i.isImporting),t.xp6(10),t.Q6J("disabled",i.isImporting),t.xp6(2),t.Oqu(i.importFile?i.importFile.name:"Select or drop file"),t.xp6(3),t.Q6J("ngIf",i.importResult),t.xp6(2),t.Q6J("ngIf",!(null!=i.importResult&&i.importResult.Success)),t.xp6(1),t.Q6J("ngIf",null==i.importResult?null:i.importResult.Success)}}var F=function(){var n=function(){function o(e,i,r,p){(0,d.Z)(this,o),this.dialogData=e,this.dialogRef=i,this.importAppPartsService=r,this.snackBar=p,this.hostClass="dialog-component",this.isImporting$=new m.X(!1),this.importFile$=new m.X(null),this.importResult$=new m.X(null),this.templateVars$=(0,v.a)([this.isImporting$,this.importFile$,this.importResult$]).pipe((0,x.U)(function(a){var c=(0,u.Z)(a,3);return{isImporting:c[0],importFile:c[1],importResult:c[2]}}))}return(0,f.Z)(o,[{key:"ngOnInit",value:function(){null!=this.dialogData.files&&(this.importFile$.next(this.dialogData.files[0]),this.importAppParts())}},{key:"ngOnDestroy",value:function(){this.isImporting$.complete(),this.importFile$.complete(),this.importResult$.complete()}},{key:"closeDialog",value:function(){this.dialogRef.close()}},{key:"filesDropped",value:function(i){this.importFile$.next(i[0]),this.importResult$.next(null),this.importAppParts()}},{key:"fileChange",value:function(i){this.importFile$.next(i.target.files[0]),this.importResult$.next(null)}},{key:"importAppParts",value:function(){var i=this;this.isImporting$.next(!0),this.importAppPartsService.importAppParts(this.importFile$.value).subscribe({next:function(p){i.isImporting$.next(!1),i.importResult$.next(p)},error:function(p){i.isImporting$.next(!1),i.importResult$.next(null),i.snackBar.open("Import failed. Please check console for more information",null,{duration:3e3})}})}}]),o}();return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.WI),t.Y36(_.so),t.Y36(I.z),t.Y36(h.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-import-app-parts"]],hostVars:1,hostBindings:function(e,i){2&e&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[["appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[1,"dialog-description"],["href","https://2sxc.org/en/help?tag=import","target","_blank"],["mat-raised-button","","tippy","Open file browser",3,"disabled","click"],["type","file",1,"hide",3,"change"],["fileInput",""],["class","dialog-component-content fancy-scrollbar-light import-result-box",4,"ngIf"],[1,"dialog-component-actions"],[4,"ngIf"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-component-content","fancy-scrollbar-light","import-result-box"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,b,23,7,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.templateVars$))},directives:[l.O5,A.z,_.uh,P.lW,C.$,T.$g,l.sg,l.mk],pipes:[l.Ov],styles:[".import-result-box[_ngcontent-%COMP%]{margin-top:16px}"]}),n}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.02.00/ng-edit/projects_ng-dialogs_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_-0d3a5d.b993787acb71f067.js.map