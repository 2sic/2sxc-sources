(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"4rFR":function(e,t,i){"use strict";i.r(t),i.d(t,"ImportAppPartsComponent",(function(){return I}));var o=i("1C3z"),n=i("BLjT"),c=i("WlMA"),s=i("8AiQ"),r=i("nYrE"),a=i("9HSk"),p=i("Qc/f");function l(e,t){1&e&&o.Rb(0,"mat-spinner",4)}function m(e,t){1&e&&(o.Wb(0,"span"),o.Qc(1,"Select file"),o.Vb())}function b(e,t){if(1&e&&(o.Wb(0,"span"),o.Qc(1),o.Vb()),2&e){var i=o.ic(2);o.Bb(1),o.Rc(i.importFile.name)}}function g(e,t){if(1&e){var i=o.Xb();o.Wb(0,"div"),o.Wb(1,"p",5),o.Qc(2," Import content and templates from a content export (zip) or partial export (xml) to this app. The entire content of the selected file will be imported. If you want to import an entire app, go to the "),o.Wb(3,"em"),o.Qc(4,"App-Management"),o.Vb(),o.Qc(5,". For further help visit "),o.Wb(6,"a",6),o.Qc(7,"2sxc Help"),o.Vb(),o.Qc(8,". "),o.Vb(),o.Wb(9,"div"),o.Wb(10,"button",7),o.ec("click",(function(){return o.Fc(i),o.Dc(14).click()})),o.Oc(11,m,2,0,"span",3),o.Oc(12,b,2,1,"span",3),o.Vb(),o.Wb(13,"input",8,9),o.ec("change",(function(e){return o.Fc(i),o.ic().fileChange(e)})),o.Vb(),o.Vb(),o.Wb(15,"div",10),o.Wb(16,"button",11),o.ec("click",(function(){return o.Fc(i),o.ic().closeDialog()})),o.Qc(17,"Cancel"),o.Vb(),o.Wb(18,"button",12),o.ec("click",(function(){return o.Fc(i),o.ic().importAppParts()})),o.Qc(19,"Import"),o.Vb(),o.Vb(),o.Vb()}if(2&e){var n=o.ic();o.Bb(11),o.oc("ngIf",!n.importFile),o.Bb(1),o.oc("ngIf",n.importFile),o.Bb(4),o.oc("disabled",n.isImporting),o.Bb(2),o.oc("disabled",!n.importFile||n.isImporting)}}function f(e,t){1&e&&(o.Wb(0,"div",18),o.Qc(1," The import has been done. See the messages below for more information. "),o.Vb())}function u(e,t){1&e&&(o.Wb(0,"div",19),o.Qc(1," The import failed. See the messages below for more information. "),o.Vb())}var d=function(e,t,i){return{"sxc-message-warning":e,"sxc-message-success":t,"sxc-message-error":i}};function h(e,t){if(1&e&&(o.Wb(0,"div",20),o.Qc(1),o.Vb()),2&e){var i=t.$implicit;o.oc("ngClass",o.vc(2,d,0===i.MessageType,1===i.MessageType,2===i.MessageType)),o.Bb(1),o.Sc(" ",i.Text," ")}}function v(e,t){if(1&e){var i=o.Xb();o.Ub(0),o.Wb(1,"div",13),o.Oc(2,f,2,0,"div",14),o.Oc(3,u,2,0,"div",15),o.Oc(4,h,2,6,"div",16),o.Vb(),o.Wb(5,"div",10),o.Wb(6,"button",17),o.ec("click",(function(){return o.Fc(i),o.ic().closeDialog()})),o.Qc(7,"Close"),o.Vb(),o.Vb(),o.Tb()}if(2&e){var n=o.ic();o.Bb(2),o.oc("ngIf",n.importResult.Succeeded),o.Bb(1),o.oc("ngIf",!n.importResult.Succeeded),o.Bb(1),o.oc("ngForOf",n.importResult.Messages)}}var I=function(){function e(e,t){this.dialogRef=e,this.importAppPartsService=t,this.hostClass="dialog-component",this.isImporting=!1}return e.prototype.ngOnInit=function(){},e.prototype.fileChange=function(e){this.importFile=e.target.files[0]},e.prototype.importAppParts=function(){var e=this;this.isImporting=!0,this.importAppPartsService.importAppParts(this.importFile).subscribe({next:function(t){e.importResult=t,e.isImporting=!1},error:function(t){e.isImporting=!1}})},e.prototype.closeDialog=function(){this.dialogRef.close()},e.\u0275fac=function(t){return new(t||e)(o.Qb(n.g),o.Qb(c.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-import-app-parts"]],hostVars:1,hostBindings:function(e,t){2&e&&o.Zb("className",t.hostClass)},decls:6,vars:3,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[4,"ngIf"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-description"],["href","http://2sxc.org/en/help?tag=import","target","_blank"],["mat-raised-button","","matTooltip","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"dialog-component-actions"],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"dialog-component-content","fancy-scrollbar-light"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"click"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Qc(2,"Import Content and Templates into this App"),o.Vb(),o.Vb(),o.Oc(3,l,1,0,"mat-spinner",2),o.Oc(4,g,20,4,"div",3),o.Oc(5,v,8,3,"ng-container",3)),2&e&&(o.Bb(3),o.oc("ngIf",t.isImporting),o.Bb(1),o.oc("ngIf",!t.importResult||t.importResult&&!t.importResult.Messages),o.Bb(1),o.oc("ngIf",t.importResult&&t.importResult.Messages&&!t.isImporting))},directives:[n.h,s.m,r.b,a.a,p.a,s.l,s.k],styles:[""]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.05.00/ng-edit/import-app-parts-component.a41619c069b5c73991bb.js.map