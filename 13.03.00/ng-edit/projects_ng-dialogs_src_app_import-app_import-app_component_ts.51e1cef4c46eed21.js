"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_import-app_import-app_component_ts"],{9441:function(J,f,s){s.r(f),s.d(f,{ImportAppComponent:function(){return k}});var v=s(2090),x=s(8069),I=s(8047),g=s(5758),d=s(6317),h=s(6562),A=s(635),C=s(8854),t=s(7133),T=s(2528),c=s(6362),D=s(1529),E=s(7317),M=s(785),Z=s(4742);function O(o,p){1&o&&t._UZ(0,"mat-spinner",14)}function R(o,p){1&o&&(t.TgZ(0,"div",19),t._uU(1," The import has been done. See the messages below for more information. "),t.qZA())}function P(o,p){1&o&&(t.TgZ(0,"div",20),t._uU(1," The import failed. See the messages below for more information. "),t.qZA())}var U=function(p,e,i){return{"sxc-message-warning":p,"sxc-message-success":e,"sxc-message-error":i}};function y(o,p){if(1&o&&(t.TgZ(0,"div",21),t._uU(1),t.qZA()),2&o){var e=p.$implicit;t.Q6J("ngClass",t.kEZ(2,U,0===e.MessageType,1===e.MessageType,2===e.MessageType)),t.xp6(1),t.hij(" ",e.Text," ")}}function $(o,p){if(1&o&&(t.TgZ(0,"div",15),t.YNc(1,R,2,0,"div",16),t.YNc(2,P,2,0,"div",17),t.YNc(3,y,2,6,"div",18),t.qZA()),2&o){var e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult.Success),t.xp6(1),t.Q6J("ngIf",!e.importResult.Success),t.xp6(1),t.Q6J("ngForOf",e.importResult.Messages)}}function b(o,p){if(1&o){var e=t.EpF();t.ynx(0),t.TgZ(1,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeDialog()}),t._uU(2,"Cancel"),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).importApp()}),t._uU(4," Import "),t.qZA(),t.BQk()}if(2&o){var i=t.oxw().ngIf;t.xp6(3),t.Q6J("disabled",!i.importFile||i.isImporting||!!i.importResult)}}function F(o,p){if(1&o){var e=t.EpF();t.ynx(0),t.TgZ(1,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeDialog()}),t._uU(2,"Close"),t.qZA(),t.BQk()}}function B(o,p){if(1&o){var e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(r){return t.CHM(e),t.oxw().filesDropped(r)}),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._uU(3,"Import App"),t.qZA(),t.qZA(),t.YNc(4,O,1,0,"mat-spinner",4),t.TgZ(5,"p",5),t._uU(6," Select an app package (zip) from your computer to import an app. New apps can be downloaded on "),t.TgZ(7,"a",6),t._uU(8,"https://2sxc.org/apps"),t.qZA(),t._uU(9,". For further help visit "),t.TgZ(10,"a",7),t._uU(11,"2sxc Help"),t.qZA(),t._uU(12,". "),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"button",8),t.NdJ("click",function(){return t.CHM(e),t.MAs(18).click()}),t.TgZ(15,"span"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"input",9,10),t.NdJ("change",function(r){return t.CHM(e),t.oxw().fileChange(r)}),t.qZA(),t.qZA(),t.YNc(19,$,4,3,"div",11),t.TgZ(20,"div",12),t.YNc(21,b,5,1,"ng-container",13),t.YNc(22,F,3,0,"ng-container",13),t.qZA(),t.qZA()}if(2&o){var i=p.ngIf;t.Q6J("allowedFileTypes","zip"),t.xp6(4),t.Q6J("ngIf",i.isImporting),t.xp6(10),t.Q6J("disabled",i.isImporting),t.xp6(2),t.Oqu(i.importFile?i.importFile.name:"Select or drop file"),t.xp6(3),t.Q6J("ngIf",i.importResult),t.xp6(2),t.Q6J("ngIf",!(null!=i.importResult&&i.importResult.Success)),t.xp6(1),t.Q6J("ngIf",null==i.importResult?null:i.importResult.Success)}}var k=function(){var o=function(){function p(e,i,n,r){(0,x.Z)(this,p),this.dialogData=e,this.dialogRef=i,this.importAppService=n,this.snackBar=r,this.hostClass="dialog-component",this.isImporting$=new d.X(!1),this.importFile$=new d.X(null),this.importResult$=new d.X(null),this.templateVars$=(0,h.a)([this.isImporting$,this.importFile$,this.importResult$]).pipe((0,A.U)(function(l){var a=(0,v.Z)(l,3);return{isImporting:a[0],importFile:a[1],importResult:a[2]}}))}return(0,I.Z)(p,[{key:"ngOnInit",value:function(){null!=this.dialogData.files&&(this.importFile$.next(this.dialogData.files[0]),this.importApp())}},{key:"ngOnDestroy",value:function(){this.isImporting$.complete(),this.importFile$.complete(),this.importResult$.complete()}},{key:"closeDialog",value:function(){this.dialogRef.close()}},{key:"filesDropped",value:function(i){this.importFile$.next(i[0]),this.importResult$.next(null),this.importApp()}},{key:"fileChange",value:function(i){this.importFile$.next(i.target.files[0]),this.importResult$.next(null)}},{key:"importApp",value:function(i){var n=this;this.isImporting$.next(!0),this.importAppService.importApp(this.importFile$.value,i).subscribe({next:function(l){var a,_,m;if(n.isImporting$.next(!1),n.importResult$.next(l),0===(null===(m=null===(_=null===(a=n.importResult$.value)||void 0===a?void 0:a.Messages)||void 0===_?void 0:_[0])||void 0===m?void 0:m.MessageType)){var u=prompt(n.importResult$.value.Messages[0].Text+" Would you like to install it using another folder name?");if(!u)return;n.importApp(u)}},error:function(l){n.isImporting$.next(!1),n.importResult$.next(null),n.snackBar.open("Import failed. Please check console for more information",null,{duration:3e3})}})}}]),p}();return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.WI),t.Y36(g.so),t.Y36(C.a),t.Y36(T.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-import-app"]],hostVars:1,hostBindings:function(e,i){2&e&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[["appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[1,"dialog-description"],["href","https://2sxc.org/apps"],["href","https://2sxc.org/en/help?tag=import-app","target","_blank"],["mat-raised-button","","tippy","Open file browser",3,"disabled","click"],["type","file",1,"hide",3,"change"],["fileInput",""],["class","dialog-component-content fancy-scrollbar-light import-result-box",4,"ngIf"],[1,"dialog-component-actions"],[4,"ngIf"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-component-content","fancy-scrollbar-light","import-result-box"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,B,23,7,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.templateVars$))},directives:[c.O5,D.z,g.uh,E.lW,M.$,Z.$g,c.sg,c.mk],pipes:[c.Ov],styles:[".import-result-box[_ngcontent-%COMP%]{margin-top:16px}"]}),o}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.03.00/ng-edit/projects_ng-dialogs_src_app_import-app_import-app_component_ts.51e1cef4c46eed21.js.map