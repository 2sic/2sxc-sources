"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_content-import_content-import_component_ts"],{8753:(F,g,a)=>{a.r(g),a.d(g,{ContentImportComponent:()=>q});var p=a(5758),l=a(6317),u=a(6562),d=a(1640),f=a(635),v=a(6886),C=a(5005),x=a(5151),t=a(3184),h=a(2977),s=a(6362),T=a(1529),c=a(587),I=a(7317),Z=a(785),m=a(8390);function D(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",11,12)(2,"div",13)(3,"div")(4,"button",14),t.NdJ("click",function(){return t.CHM(e),t.MAs(8).click()}),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"input",15,16),t.NdJ("change",function(_){return t.CHM(e),t.oxw(3).fileChange(_)}),t.qZA()(),t.TgZ(9,"div")(10,"p",17),t._uU(11,"References to pages / files"),t.qZA(),t.TgZ(12,"mat-radio-group",18),t.NdJ("ngModelChange",function(_){return t.CHM(e),t.oxw(3).formValues.resourcesReferences=_}),t.TgZ(13,"mat-radio-button",19),t._uU(14," Import links as written in the file (for example /Portals/...) "),t.qZA(),t.TgZ(15,"mat-radio-button",20),t._uU(16," Try to resolve paths to references "),t.qZA()()(),t.TgZ(17,"div")(18,"p",17),t._uU(19,"Clear all other entities"),t.qZA(),t.TgZ(20,"mat-radio-group",21),t.NdJ("ngModelChange",function(_){return t.CHM(e),t.oxw(3).formValues.clearEntities=_}),t.TgZ(21,"mat-radio-button",22),t._uU(22," Keep all entities not found in import "),t.qZA(),t.TgZ(23,"mat-radio-button",23),t._uU(24," Remove all entities not found in import "),t.qZA()()(),t.TgZ(25,"p",24),t._uU(26,"Remember to backup your DNN first!"),t.qZA()(),t.TgZ(27,"div",25)(28,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).closeDialog()}),t._uU(29,"Cancel"),t.qZA(),t.TgZ(30,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).evaluateContent()}),t._uU(31," Preview Import "),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(6),t.Oqu(e.formValues.file?e.formValues.file.name:"Select or drop file"),t.xp6(6),t.Q6J("ngModel",e.formValues.resourcesReferences),t.xp6(8),t.Q6J("ngModel",e.formValues.clearEntities),t.xp6(10),t.Q6J("disabled",!e.formValues.file||!e.formValues.file.name)}}function A(n,i){1&n&&(t.TgZ(0,"p",28),t._uU(1,"Please wait while processing..."),t.qZA())}function E(n,i){if(1&n&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2),t.qZA(),t.TgZ(3,"p",32),t._uU(4,"File contains:"),t.qZA(),t.TgZ(5,"ul",33)(6,"li"),t._uU(7),t.qZA(),t.TgZ(8,"li"),t._uU(9),t.qZA(),t.TgZ(10,"li"),t._uU(11),t.qZA()(),t.TgZ(12,"p",32),t._uU(13,"If you press Import, it will:"),t.qZA(),t.TgZ(14,"ul",33)(15,"li"),t._uU(16),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.qZA(),t.TgZ(19,"li"),t._uU(20),t.qZA(),t.TgZ(21,"li"),t._uU(22),t.qZA()(),t.TgZ(23,"p",24),t._uU(24,"Note: The import validates much data and may take several minutes."),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(5),t.hij("",e.evaluationResult.Detail.DocumentElementsCount," content-items (records/entities)"),t.xp6(2),t.hij("",e.evaluationResult.Detail.LanguagesInDocumentCount," languages"),t.xp6(2),t.AsE("",e.evaluationResult.Detail.AttributeNamesInDocument.length," columns: ",e.evaluationResult.Detail.AttributeNamesInDocument.join(", "),""),t.xp6(5),t.hij("Create ",e.evaluationResult.Detail.AmountOfEntitiesCreated," content-items"),t.xp6(2),t.hij("Update ",e.evaluationResult.Detail.AmountOfEntitiesUpdated," content-items"),t.xp6(2),t.hij("Delete ",e.evaluationResult.Detail.AmountOfEntitiesDeleted," content-items"),t.xp6(2),t.AsE("Ignore ",e.evaluationResult.Detail.AttributeNamesNotImported.length," columns: ",e.evaluationResult.Detail.AttributeNamesNotImported.join(", "),"")}}function M(n,i){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Details: ",e.ErrorDetail,"")}}function w(n,i){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-no: ",e.LineNumber,"")}}function U(n,i){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-details: ",e.LineDetail,"")}}function S(n,i){if(1&n&&(t.TgZ(0,"li")(1,"div"),t._uU(2),t.qZA(),t.YNc(3,M,3,1,"div",6),t.YNc(4,w,3,1,"div",6),t.YNc(5,U,3,1,"div",6),t.qZA()),2&n){const e=i.$implicit,o=t.oxw(6);t.xp6(2),t.Oqu(o.errors[e.ErrorCode]),t.xp6(1),t.Q6J("ngIf",e.ErrorDetail),t.xp6(1),t.Q6J("ngIf",e.LineNumber),t.xp6(1),t.Q6J("ngIf",e.LineDetail)}}function O(n,i){if(1&n&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2),t.qZA(),t.TgZ(3,"ul",33),t.YNc(4,S,6,4,"li",34),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(2),t.Q6J("ngForOf",e.evaluationResult.Errors)}}function R(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,E,25,10,"div",29),t.YNc(2,O,5,2,"div",29),t.TgZ(3,"div",30)(4,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).back()}),t._uU(5,"Back"),t.qZA(),t.TgZ(6,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).importContent()}),t._uU(7," Import "),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult.Success),t.xp6(1),t.Q6J("ngIf",!e.evaluationResult.Success),t.xp6(4),t.Q6J("disabled",!e.evaluationResult.Success)}}function y(n,i){if(1&n&&(t.ynx(0),t.YNc(1,R,8,3,"ng-container",6),t.BQk()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult)}}function P(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import done."),t.qZA())}function N(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import failed."),t.qZA())}function b(n,i){if(1&n&&(t.TgZ(0,"div",28),t.YNc(1,P,2,0,"p",6),t.YNc(2,N,2,0,"p",6),t.qZA()),2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult.Success),t.xp6(1),t.Q6J("ngIf",!e.importResult.Success)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,b,3,2,"div",35),t.TgZ(2,"div",30)(3,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).closeDialog()}),t._uU(4,"Close"),t.qZA()()()}if(2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult)}}function $(n,i){if(1&n&&(t.ynx(0)(1,7),t.YNc(2,D,32,4,"form",8),t.YNc(3,A,2,0,"p",9),t.YNc(4,y,2,1,"ng-container",10),t.YNc(5,J,5,1,"div",10),t.BQk()()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngSwitch",e.viewStateSelected),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",2),t.xp6(1),t.Q6J("ngSwitchCase",3)}}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(_){return t.CHM(e),t.oxw().filesDropped(_)}),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA()(),t.TgZ(4,"p",4),t._uU(5," This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit "),t.TgZ(6,"a",5),t._uU(7,"https://2sxc.org/help"),t.qZA(),t._uU(8," for more instructions. "),t.qZA(),t.YNc(9,$,6,5,"ng-container",6),t.qZA()}if(2&n){const e=i.ngIf,o=t.oxw();t.Q6J("allowedFileTypes","xml"),t.xp6(3),t.hij("",null==e.contentType?null:e.contentType.Name," Import Data"),t.xp6(6),t.Q6J("ngIf",null!=o.formValues)}}let q=(()=>{class n{constructor(e,o,_,r,Q,B){this.dialogData=e,this.dialogRef=o,this.route=_,this.contentImportService=r,this.appDialogConfigService=Q,this.contentTypesService=B,this.hostClass="dialog-component",this.contentType$=new l.X(null),this.loading$=new l.X(!1),this.viewStates={waiting:0,default:1,evaluated:2,imported:3},this.viewStateSelected$=new l.X(this.viewStates.default),this.evaluationResult$=new l.X(null),this.importResult$=new l.X(null),this.templateVars$=(0,u.a)([this.contentType$,this.loading$,this.viewStateSelected$,this.evaluationResult$,this.importResult$]).pipe((0,f.U)(([Y,V,K,j,W])=>({contentType:Y,loading:V,viewStateSelected:K,evaluationResult:j,importResult:W}))),this.errors={0:"Unknown error occured.",1:"Selected content-type does not exist.",2:"Document is not a valid XML file.",3:"Selected content-type does not match the content-type in the XML file.",4:"The language is not supported.",5:"The document does not specify all languages for all entities.",6:"Language reference cannot be parsed, the language is not supported.",7:"Language reference cannot be parsed, the read-write protection is not supported.",8:"Value cannot be read, because of it has an invalid format."},this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.loading$.next(!0);const e=this.contentTypesService.retrieveContentType(this.contentTypeStaticName),o=this.appDialogConfigService.getDialogSettings();(0,d.D)([e,o]).subscribe(([_,r])=>{this.contentType$.next(_),this.formValues={defaultLanguage:r.Context.Language.Primary,contentType:this.contentTypeStaticName,file:null!=this.dialogData.files?this.dialogData.files[0]:null,resourcesReferences:"Keep",clearEntities:"None"},this.loading$.next(!1)})}ngOnDestroy(){this.contentType$.complete(),this.loading$.complete(),this.viewStateSelected$.complete(),this.evaluationResult$.complete(),this.importResult$.complete()}closeDialog(){this.dialogRef.close()}evaluateContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.evaluateContent(this.formValues).subscribe(e=>{this.evaluationResult$.next(e),this.viewStateSelected$.next(this.viewStates.evaluated)})}importContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.importContent(this.formValues).subscribe(e=>{this.importResult$.next(e),this.viewStateSelected$.next(this.viewStates.imported)})}back(){this.viewStateSelected$.next(this.viewStates.default),this.evaluationResult$.next(null)}fileChange(e){this.formValues.file=e.target.files[0]}filesDropped(e){this.formValues.file=e[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.WI),t.Y36(p.so),t.Y36(h.gz),t.Y36(x.B),t.Y36(v.K),t.Y36(C.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content-import"]],hostVars:1,hostBindings:function(e,o){2&e&&t.Ikx("className",o.hostClass)},decls:2,vars:3,consts:[["class","dialog-form-wrapper","appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",1,"dialog-form-wrapper",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box"],[1,"dialog-description"],["href","https://2sxc.org/help","target","_blank"],[4,"ngIf"],[3,"ngSwitch"],["class","dialog-form",4,"ngSwitchCase"],["class","progress-message",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"dialog-form"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],["mat-raised-button","","tippy","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"field-label"],["name","ResourcesReferences",3,"ngModel","ngModelChange"],["value","Keep"],["value","Resolve"],["name","ClearEntities",3,"ngModel","ngModelChange"],["value","None"],["value","All"],[1,"hint"],[1,"dialog-form-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"progress-message"],["class","dialog-component-content fancy-scrollbar-light",4,"ngIf"],[1,"dialog-component-actions"],[1,"dialog-component-content","fancy-scrollbar-light"],[1,"evaluation__title"],[1,"evaluation__content"],[4,"ngFor","ngForOf"],["class","progress-message",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,L,10,3,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.templateVars$))},directives:[s.O5,T.z,p.uh,s.RF,s.n9,c._Y,c.JL,c.F,I.lW,Z.$,m.VQ,c.JJ,c.On,m.U0,s.sg],pipes:[s.Ov],styles:[".field-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px;font-size:14px}.hint[_ngcontent-%COMP%]{font-size:18px;margin-top:24px;margin-bottom:16px}.progress-message[_ngcontent-%COMP%]{font-size:18px}.evaluation__title[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0;font-weight:700}.evaluation__content[_ngcontent-%COMP%]{font-size:14px}.evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px 0}"]}),n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.04.00/ng-edit/projects_ng-dialogs_src_app_content-import_content-import_component_ts.79a1bec64cc6690e.js.map