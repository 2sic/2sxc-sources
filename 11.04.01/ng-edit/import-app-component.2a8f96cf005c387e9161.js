(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{BM85:function(e,t,i){"use strict";i.r(t),i.d(t,"ImportAppComponent",(function(){return I}));var o=i("1C3z"),s=i("BLjT"),c=i("ZEis"),n=i("8AiQ"),r=i("nYrE"),a=i("9HSk"),p=i("Qc/f");function l(e,t){1&e&&o.Rb(0,"mat-spinner",4)}function m(e,t){1&e&&(o.Wb(0,"span"),o.Qc(1,"Select file"),o.Vb())}function b(e,t){if(1&e&&(o.Wb(0,"span"),o.Qc(1),o.Vb()),2&e){var i=o.ic(2);o.Bb(1),o.Rc(i.importFile.name)}}function g(e,t){if(1&e){var i=o.Xb();o.Wb(0,"div"),o.Wb(1,"p",5),o.Qc(2," Select an app package (zip) from your computer to import an app. New apps can be downloaded on "),o.Wb(3,"a",6),o.Qc(4,"http://2sxc.org/apps"),o.Vb(),o.Qc(5,". For further help visit "),o.Wb(6,"a",7),o.Qc(7,"2sxc Help"),o.Vb(),o.Qc(8,". "),o.Vb(),o.Wb(9,"div"),o.Wb(10,"button",8),o.ec("click",(function(){return o.Fc(i),o.Dc(14).click()})),o.Oc(11,m,2,0,"span",3),o.Oc(12,b,2,1,"span",3),o.Vb(),o.Wb(13,"input",9,10),o.ec("change",(function(e){return o.Fc(i),o.ic().fileChange(e)})),o.Vb(),o.Vb(),o.Wb(15,"div",11),o.Wb(16,"button",12),o.ec("click",(function(){return o.Fc(i),o.ic().closeDialog()})),o.Qc(17,"Cancel"),o.Vb(),o.Wb(18,"button",13),o.ec("click",(function(){return o.Fc(i),o.ic().importApp()})),o.Qc(19,"Import"),o.Vb(),o.Vb(),o.Vb()}if(2&e){var s=o.ic();o.Bb(11),o.oc("ngIf",!s.importFile),o.Bb(1),o.oc("ngIf",s.importFile),o.Bb(6),o.oc("disabled",!s.importFile||s.isImporting)}}function u(e,t){1&e&&(o.Wb(0,"div",19),o.Qc(1," The import has been done. See the messages below for more information. "),o.Vb())}function f(e,t){1&e&&(o.Wb(0,"div",20),o.Qc(1," The import failed. See the messages below for more information. "),o.Vb())}var d=function(e,t,i){return{"sxc-message-warning":e,"sxc-message-success":t,"sxc-message-error":i}};function h(e,t){if(1&e&&(o.Wb(0,"div",21),o.Qc(1),o.Vb()),2&e){var i=t.$implicit;o.oc("ngClass",o.vc(2,d,0==i.MessageType,1==i.MessageType,2==i.MessageType)),o.Bb(1),o.Sc(" ",i.Text," ")}}function v(e,t){if(1&e){var i=o.Xb();o.Ub(0),o.Wb(1,"div",14),o.Oc(2,u,2,0,"div",15),o.Oc(3,f,2,0,"div",16),o.Oc(4,h,2,6,"div",17),o.Vb(),o.Wb(5,"div",11),o.Wb(6,"button",18),o.ec("click",(function(){return o.Fc(i),o.ic().closeDialog()})),o.Qc(7,"Close"),o.Vb(),o.Vb(),o.Tb()}if(2&e){var s=o.ic();o.Bb(2),o.oc("ngIf",s.importResult.Succeeded),o.Bb(1),o.oc("ngIf",!s.importResult.Succeeded),o.Bb(1),o.oc("ngForOf",s.importResult.Messages)}}var I=function(){function e(e,t){this.dialogRef=e,this.importAppService=t,this.hostClass="dialog-component",this.isImporting=!1}return e.prototype.ngOnInit=function(){},e.prototype.importApp=function(e){var t=this;this.isImporting=!0,this.importAppService.importApp(this.importFile,e).subscribe({next:function(e){if(t.isImporting=!1,t.importResult=e,t.importResult&&t.importResult.Messages&&t.importResult.Messages[0]&&0===t.importResult.Messages[0].MessageType){var i=prompt(t.importResult.Messages[0].Text+" Would you like to install it using another folder name?");i&&t.importApp(i)}},error:function(e){t.isImporting=!1}})},e.prototype.fileChange=function(e){this.importFile=e.target.files[0]},e.prototype.closeDialog=function(){this.dialogRef.close()},e.\u0275fac=function(t){return new(t||e)(o.Qb(s.g),o.Qb(c.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-import-app"]],hostVars:1,hostBindings:function(e,t){2&e&&o.Zb("className",t.hostClass)},decls:6,vars:3,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[4,"ngIf"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-description"],["href","http://2sxc.org/apps"],["href","http://2sxc.org/en/help?tag=import-app","target","_blank"],["mat-raised-button","","matTooltip","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"dialog-component-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"dialog-component-content","fancy-scrollbar-light"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"click"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Qc(2,"Import App"),o.Vb(),o.Vb(),o.Oc(3,l,1,0,"mat-spinner",2),o.Oc(4,g,20,3,"div",3),o.Oc(5,v,8,3,"ng-container",3)),2&e&&(o.Bb(3),o.oc("ngIf",t.isImporting),o.Bb(1),o.oc("ngIf",!t.importResult||t.importResult&&!t.importResult.Messages),o.Bb(1),o.oc("ngIf",t.importResult&&t.importResult.Messages&&!t.isImporting))},directives:[s.h,n.m,r.b,a.a,p.a,n.l,n.k],styles:[""]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.05.00/ng-edit/import-app-component.2a8f96cf005c387e9161.js.map