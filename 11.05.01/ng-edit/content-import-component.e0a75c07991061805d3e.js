(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{kp6J:function(e,t,n){"use strict";n.r(t),n.d(t,"ContentImportComponent",(function(){return x}));var i=n("D57K"),o=n("1C3z"),c=n("BLjT"),a=n("5/c3"),r=n("i7Fo"),l=n("KoVM"),s=n("8AiQ"),b=n("ZSGP"),u=n("9HSk"),f=n("Qc/f"),d=n("+raR");function p(e,t){if(1&e&&(o.Tb(0),o.Oc(1),o.Sb()),2&e){var n=o.hc();o.Bb(1),o.Qc("Step ",n.viewStateSelected," of 3")}}function g(e,t){1&e&&(o.Vb(0,"span"),o.Oc(1,"Select file"),o.Ub())}function m(e,t){if(1&e&&(o.Vb(0,"span"),o.Oc(1),o.Ub()),2&e){var n=o.hc(3);o.Bb(1),o.Pc(n.formValues.file.name)}}function h(e,t){if(1&e){var n=o.Wb();o.Vb(0,"form",9,10),o.Vb(2,"div",11),o.Vb(3,"div"),o.Vb(4,"button",12),o.dc("click",(function(){return o.Dc(n),o.Bc(8).click()})),o.Mc(5,g,2,0,"span",2),o.Mc(6,m,2,1,"span",2),o.Ub(),o.Vb(7,"input",13,14),o.dc("change",(function(e){return o.Dc(n),o.hc(2).fileChange(e)})),o.Ub(),o.Ub(),o.Vb(9,"div"),o.Vb(10,"p",15),o.Oc(11,"References to pages / files"),o.Ub(),o.Vb(12,"mat-radio-group",16),o.dc("ngModelChange",(function(e){return o.Dc(n),o.hc(2).formValues.resourcesReferences=e})),o.Vb(13,"mat-radio-button",17),o.Oc(14," Import links as written in the file (for example /Portals/...) "),o.Ub(),o.Vb(15,"mat-radio-button",18),o.Oc(16," Try to resolve paths to references "),o.Ub(),o.Ub(),o.Ub(),o.Vb(17,"div"),o.Vb(18,"p",15),o.Oc(19,"Clear all other entities"),o.Ub(),o.Vb(20,"mat-radio-group",19),o.dc("ngModelChange",(function(e){return o.Dc(n),o.hc(2).formValues.clearEntities=e})),o.Vb(21,"mat-radio-button",20),o.Oc(22," Keep all entities not found in import "),o.Ub(),o.Vb(23,"mat-radio-button",21),o.Oc(24," Remove all entities not found in import "),o.Ub(),o.Ub(),o.Ub(),o.Vb(25,"p",22),o.Oc(26,"Remember to backup your DNN first!"),o.Ub(),o.Ub(),o.Vb(27,"div",23),o.Vb(28,"button",24),o.dc("click",(function(){return o.Dc(n),o.hc(2).closeDialog()})),o.Oc(29,"Cancel"),o.Ub(),o.Vb(30,"button",25),o.dc("click",(function(){return o.Dc(n),o.hc(2).evaluateContent()})),o.Oc(31," Preview Import "),o.Ub(),o.Ub(),o.Ub()}if(2&e){var i=o.hc(2);o.Bb(5),o.nc("ngIf",!i.formValues.file),o.Bb(1),o.nc("ngIf",i.formValues.file),o.Bb(6),o.nc("ngModel",i.formValues.resourcesReferences),o.Bb(8),o.nc("ngModel",i.formValues.clearEntities),o.Bb(10),o.nc("disabled",!i.formValues.file||!i.formValues.file.name)}}function v(e,t){1&e&&(o.Vb(0,"p",26),o.Oc(1,"Please wait while processing..."),o.Ub())}function V(e,t){if(1&e&&(o.Vb(0,"div",29),o.Vb(1,"p",30),o.Oc(2),o.Ub(),o.Vb(3,"p",30),o.Oc(4,"File contains:"),o.Ub(),o.Vb(5,"ul",31),o.Vb(6,"li"),o.Oc(7),o.Ub(),o.Vb(8,"li"),o.Oc(9),o.Ub(),o.Vb(10,"li"),o.Oc(11),o.Ub(),o.Ub(),o.Vb(12,"p",30),o.Oc(13,"If you press Import, it will:"),o.Ub(),o.Vb(14,"ul",31),o.Vb(15,"li"),o.Oc(16),o.Ub(),o.Vb(17,"li"),o.Oc(18),o.Ub(),o.Vb(19,"li"),o.Oc(20),o.Ub(),o.Vb(21,"li"),o.Oc(22),o.Ub(),o.Ub(),o.Vb(23,"p",22),o.Oc(24,"Note: The import validates much data and may take several minutes."),o.Ub(),o.Ub()),2&e){var n=o.hc(4);o.Bb(2),o.Qc("Try to import file '",n.formValues.file.name,"'"),o.Bb(5),o.Qc("",n.evaluationResult.Detail.DocumentElementsCount," content-items (records/entities)"),o.Bb(2),o.Qc("",n.evaluationResult.Detail.LanguagesInDocumentCount," languages"),o.Bb(2),o.Rc("",n.evaluationResult.Detail.AttributeNamesInDocument.length," columns: ",n.evaluationResult.Detail.AttributeNamesInDocument.join(", "),""),o.Bb(5),o.Qc("Create ",n.evaluationResult.Detail.AmountOfEntitiesCreated," content-items"),o.Bb(2),o.Qc("Update ",n.evaluationResult.Detail.AmountOfEntitiesUpdated," content-items"),o.Bb(2),o.Qc("Delete ",n.evaluationResult.Detail.AmountOfEntitiesDeleted," content-items"),o.Bb(2),o.Rc("Ignore ",n.evaluationResult.Detail.AttributeNamesNotImported.length," columns: ",n.evaluationResult.Detail.AttributeNamesNotImported.join(", "),"")}}function U(e,t){if(1&e&&(o.Vb(0,"div"),o.Vb(1,"i"),o.Oc(2),o.Ub(),o.Ub()),2&e){var n=o.hc().$implicit;o.Bb(2),o.Qc("Details: ",n.ErrorDetail,"")}}function O(e,t){if(1&e&&(o.Vb(0,"div"),o.Vb(1,"i"),o.Oc(2),o.Ub(),o.Ub()),2&e){var n=o.hc().$implicit;o.Bb(2),o.Qc("Line-no: ",n.LineNumber,"")}}function S(e,t){if(1&e&&(o.Vb(0,"div"),o.Vb(1,"i"),o.Oc(2),o.Ub(),o.Ub()),2&e){var n=o.hc().$implicit;o.Bb(2),o.Qc("Line-details: ",n.LineDetail,"")}}function w(e,t){if(1&e&&(o.Vb(0,"li"),o.Vb(1,"div"),o.Oc(2),o.Ub(),o.Mc(3,U,3,1,"div",2),o.Mc(4,O,3,1,"div",2),o.Mc(5,S,3,1,"div",2),o.Ub()),2&e){var n=t.$implicit,i=o.hc(5);o.Bb(2),o.Pc(i.errors[n.ErrorCode]),o.Bb(1),o.nc("ngIf",n.ErrorDetail),o.Bb(1),o.nc("ngIf",n.LineNumber),o.Bb(1),o.nc("ngIf",n.LineDetail)}}function C(e,t){if(1&e&&(o.Vb(0,"div",29),o.Vb(1,"p",30),o.Oc(2),o.Ub(),o.Vb(3,"ul",31),o.Mc(4,w,6,4,"li",32),o.Ub(),o.Ub()),2&e){var n=o.hc(4);o.Bb(2),o.Qc("Try to import file '",n.formValues.file.name,"'"),o.Bb(2),o.nc("ngForOf",n.evaluationResult.Detail)}}function B(e,t){if(1&e){var n=o.Wb();o.Tb(0),o.Mc(1,V,25,10,"div",27),o.Mc(2,C,5,2,"div",27),o.Vb(3,"div",28),o.Vb(4,"button",24),o.dc("click",(function(){return o.Dc(n),o.hc(3).back()})),o.Oc(5,"Back"),o.Ub(),o.Vb(6,"button",25),o.dc("click",(function(){return o.Dc(n),o.hc(3).importContent()})),o.Oc(7," Import "),o.Ub(),o.Ub(),o.Sb()}if(2&e){var i=o.hc(3);o.Bb(1),o.nc("ngIf",i.evaluationResult.Succeeded),o.Bb(1),o.nc("ngIf",!i.evaluationResult.Succeeded),o.Bb(4),o.nc("disabled",!i.evaluationResult.Succeeded)}}function D(e,t){if(1&e&&(o.Tb(0),o.Mc(1,B,8,3,"ng-container",2),o.Sb()),2&e){var n=o.hc(2);o.Bb(1),o.nc("ngIf",n.evaluationResult)}}function M(e,t){1&e&&(o.Vb(0,"p"),o.Oc(1,"Import done."),o.Ub())}function I(e,t){1&e&&(o.Vb(0,"p"),o.Oc(1,"Import failed."),o.Ub())}function R(e,t){if(1&e&&(o.Vb(0,"div",26),o.Mc(1,M,2,0,"p",2),o.Mc(2,I,2,0,"p",2),o.Ub()),2&e){var n=o.hc(3);o.Bb(1),o.nc("ngIf",n.importResult.Succeeded),o.Bb(1),o.nc("ngIf",!n.importResult.Succeeded)}}function y(e,t){if(1&e){var n=o.Wb();o.Vb(0,"div"),o.Mc(1,R,3,2,"div",33),o.Vb(2,"div",28),o.Vb(3,"button",34),o.dc("click",(function(){return o.Dc(n),o.hc(2).closeDialog()})),o.Oc(4,"Close"),o.Ub(),o.Ub(),o.Ub()}if(2&e){var i=o.hc(2);o.Bb(1),o.nc("ngIf",i.importResult)}}function k(e,t){if(1&e&&(o.Tb(0),o.Tb(1,5),o.Mc(2,h,32,5,"form",6),o.Mc(3,v,2,0,"p",7),o.Mc(4,D,2,1,"ng-container",8),o.Mc(5,y,5,1,"div",8),o.Sb(),o.Sb()),2&e){var n=o.hc();o.Bb(1),o.nc("ngSwitch",n.viewStateSelected),o.Bb(1),o.nc("ngSwitchCase",1),o.Bb(1),o.nc("ngSwitchCase",0),o.Bb(1),o.nc("ngSwitchCase",2),o.Bb(1),o.nc("ngSwitchCase",3)}}var x=function(){function e(e,t,n,i){this.dialogRef=e,this.route=t,this.contentImportService=n,this.appDialogConfigService=i,this.hostClass="dialog-component",this.errors={0:"Unknown error occured.",1:"Selected content-type does not exist.",2:"Document is not a valid XML file.",3:"Selected content-type does not match the content-type in the XML file.",4:"The language is not supported.",5:"The document does not specify all languages for all entities.",6:"Language reference cannot be parsed, the language is not supported.",7:"Language reference cannot be parsed, the read-write protection is not supported.",8:"Value cannot be read, because of it has an invalid format."},this.viewStates={waiting:0,default:1,evaluated:2,imported:3},this.viewStateSelected=this.viewStates.default}return e.prototype.ngOnInit=function(){var e=this;this.appDialogConfigService.getDialogSettings().subscribe((function(t){e.formValues={defaultLanguage:t.Context.Language.Primary,contentType:e.route.snapshot.paramMap.get("contentTypeStaticName"),file:null,resourcesReferences:"Keep",clearEntities:"None"}}))},e.prototype.evaluateContent=function(){return Object(i.b)(this,void 0,void 0,(function(){var e=this;return Object(i.e)(this,(function(t){switch(t.label){case 0:return this.viewStateSelected=this.viewStates.waiting,[4,this.contentImportService.evaluateContent(this.formValues)];case 1:return t.sent().subscribe((function(t){e.evaluationResult=t,e.viewStateSelected=e.viewStates.evaluated})),[2]}}))}))},e.prototype.importContent=function(){return Object(i.b)(this,void 0,void 0,(function(){var e=this;return Object(i.e)(this,(function(t){switch(t.label){case 0:return this.viewStateSelected=this.viewStates.waiting,[4,this.contentImportService.importContent(this.formValues)];case 1:return t.sent().subscribe((function(t){e.importResult=t,e.viewStateSelected=e.viewStates.imported})),[2]}}))}))},e.prototype.back=function(){this.viewStateSelected=this.viewStates.default,this.evaluationResult=void 0},e.prototype.closeDialog=function(){this.dialogRef.close()},e.prototype.fileChange=function(e){this.formValues.file=e.target.files[0]},e.\u0275fac=function(t){return new(t||e)(o.Pb(c.g),o.Pb(a.a),o.Pb(r.a),o.Pb(l.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-content-import"]],hostVars:1,hostBindings:function(e,t){2&e&&o.Yb("className",t.hostClass)},decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],[4,"ngIf"],[1,"dialog-description"],["href","http://2sxc.org/help","target","_blank"],[3,"ngSwitch"],["class","dialog-form",4,"ngSwitchCase"],["class","progress-message",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"dialog-form"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],["mat-raised-button","","matTooltip","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"field-label"],["name","ResourcesReferences",3,"ngModel","ngModelChange"],["value","Keep"],["value","Resolve"],["name","ClearEntities",3,"ngModel","ngModelChange"],["value","None"],["value","All"],[1,"hint"],[1,"dialog-form-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"progress-message"],["class","dialog-component-content fancy-scrollbar-light",4,"ngIf"],[1,"dialog-component-actions"],[1,"dialog-component-content","fancy-scrollbar-light"],[1,"evaluation__title"],[1,"evaluation__content"],[4,"ngFor","ngForOf"],["class","progress-message",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Oc(2," Import Content / Data "),o.Mc(3,p,2,1,"ng-container",2),o.Ub(),o.Ub(),o.Vb(4,"p",3),o.Oc(5," This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit "),o.Vb(6,"a",4),o.Oc(7,"http://2sxc.org/help"),o.Ub(),o.Oc(8," for more instructions.\n"),o.Ub(),o.Mc(9,k,6,5,"ng-container",2)),2&e&&(o.Bb(3),o.nc("ngIf",t.viewStateSelected>0),o.Bb(6),o.nc("ngIf",null!=t.formValues))},directives:[c.h,s.m,s.o,s.p,b.u,b.m,b.n,u.a,f.a,d.b,b.l,b.o,d.a,s.l],styles:[".field-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px;font-size:14px}.hint[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:16px}.hint[_ngcontent-%COMP%], .progress-message[_ngcontent-%COMP%]{font-size:18px}.evaluation__title[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0;font-weight:700}.evaluation__content[_ngcontent-%COMP%]{font-size:14px}.evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px 0}"]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.05.01/ng-edit/content-import-component.e0a75c07991061805d3e.js.map