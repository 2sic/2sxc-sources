"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-import_content-import_component_ts"],{4188:(Z,f,a)=>{a.r(f),a.d(f,{ContentImportComponent:()=>Q});var _=a(6861),u=a(8071),x=a(3839),T=a(9736),D=a(4300),m=a(9731),h=a(5530),C=a(5997),t=a(1699),c=a(91),r=a(6575),d=a(2849),p=a(9498),v=a(895),g=a(8849),I=a(2106);function E(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",null,10)(2,"div",11)(3,"div")(4,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(8);return t.KtG(i.click())}),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"input",13,14),t.NdJ("change",function(i){t.CHM(e);const l=t.oxw(3);return t.KtG(l.fileChange(i))}),t.qZA()(),t.TgZ(9,"div")(10,"p",15),t._uU(11,"References to pages / files"),t.qZA(),t.TgZ(12,"mat-radio-group",16),t.NdJ("ngModelChange",function(i){t.CHM(e);const l=t.oxw(3);return t.KtG(l.formValues.resourcesReferences=i)}),t.TgZ(13,"mat-radio-button",17),t._uU(14," Import links as written in the file (for example /Portals/...) "),t.qZA(),t.TgZ(15,"mat-radio-button",18),t._uU(16," Try to resolve paths to references "),t.qZA()()(),t.TgZ(17,"div")(18,"p",15),t._uU(19,"Clear all other entities"),t.qZA(),t.TgZ(20,"mat-radio-group",19),t.NdJ("ngModelChange",function(i){t.CHM(e);const l=t.oxw(3);return t.KtG(l.formValues.clearEntities=i)}),t.TgZ(21,"mat-radio-button",20),t._uU(22," Keep all entities not found in import "),t.qZA(),t.TgZ(23,"mat-radio-button",21),t._uU(24," Remove all entities not found in import "),t.qZA()()(),t.TgZ(25,"p",22),t._uU(26,"Remember to backup your DNN first!"),t.qZA()(),t.TgZ(27,"mat-dialog-actions",23)(28,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.closeDialog())}),t._uU(29,"Cancel"),t.qZA(),t.TgZ(30,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.evaluateContent())}),t._uU(31," Preview Import "),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(6),t.Oqu(e.formValues.file?e.formValues.file.name:"Select or drop file"),t.xp6(6),t.Q6J("ngModel",e.formValues.resourcesReferences),t.xp6(8),t.Q6J("ngModel",e.formValues.clearEntities),t.xp6(10),t.Q6J("disabled",!e.formValues.file||!e.formValues.file.name)}}function y(n,s){1&n&&(t.TgZ(0,"div",11)(1,"p"),t._uU(2,"Please wait while processing..."),t.qZA()())}function M(n,s){if(1&n&&(t.TgZ(0,"div",11)(1,"p",27),t._uU(2),t.qZA(),t.TgZ(3,"p",27),t._uU(4,"File contains:"),t.qZA(),t.TgZ(5,"ul",28)(6,"li"),t._uU(7),t.qZA(),t.TgZ(8,"li"),t._uU(9),t.qZA(),t.TgZ(10,"li"),t._uU(11),t.qZA()(),t.TgZ(12,"p",27),t._uU(13,"If you press Import, it will:"),t.qZA(),t.TgZ(14,"ul",28)(15,"li"),t._uU(16),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.qZA(),t.TgZ(19,"li"),t._uU(20),t.qZA(),t.TgZ(21,"li"),t._uU(22),t.qZA()(),t.TgZ(23,"p",22),t._uU(24,"Note: The import validates much data and may take several minutes."),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(5),t.hij("",e.evaluationResult.Detail.DocumentElementsCount," content-items (records/entities)"),t.xp6(2),t.hij("",e.evaluationResult.Detail.LanguagesInDocumentCount," languages"),t.xp6(2),t.AsE("",e.evaluationResult.Detail.AttributeNamesInDocument.length," columns: ",e.evaluationResult.Detail.AttributeNamesInDocument.join(", "),""),t.xp6(5),t.hij("Create ",e.evaluationResult.Detail.AmountOfEntitiesCreated," content-items"),t.xp6(2),t.hij("Update ",e.evaluationResult.Detail.AmountOfEntitiesUpdated," content-items"),t.xp6(2),t.hij("Delete ",e.evaluationResult.Detail.AmountOfEntitiesDeleted," content-items"),t.xp6(2),t.AsE("Ignore ",e.evaluationResult.Detail.AttributeNamesNotImported.length," columns: ",e.evaluationResult.Detail.AttributeNamesNotImported.join(", "),"")}}function w(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Details: ",e.ErrorDetail,"")}}function O(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-no: ",e.LineNumber,"")}}function S(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-details: ",e.LineDetail,"")}}function R(n,s){if(1&n&&(t.TgZ(0,"li")(1,"div"),t._uU(2),t.qZA(),t.YNc(3,w,3,1,"div",6),t.YNc(4,O,3,1,"div",6),t.YNc(5,S,3,1,"div",6),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(6);t.xp6(2),t.Oqu(o.errors[e.ErrorCode]),t.xp6(1),t.Q6J("ngIf",e.ErrorDetail),t.xp6(1),t.Q6J("ngIf",e.LineNumber),t.xp6(1),t.Q6J("ngIf",e.LineDetail)}}function U(n,s){if(1&n&&(t.TgZ(0,"div",11)(1,"p",27),t._uU(2),t.qZA(),t.TgZ(3,"ul",28),t.YNc(4,R,6,4,"li",29),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(2),t.Q6J("ngForOf",e.evaluationResult.Errors)}}function P(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,M,25,10,"div",26),t.YNc(2,U,5,2,"div",26),t.TgZ(3,"mat-dialog-actions",23)(4,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(4);return t.KtG(i.back())}),t._uU(5,"Back"),t.qZA(),t.TgZ(6,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(4);return t.KtG(i.importContent())}),t._uU(7," Import "),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult.Success),t.xp6(1),t.Q6J("ngIf",!e.evaluationResult.Success),t.xp6(4),t.Q6J("disabled",!e.evaluationResult.Success)}}function b(n,s){if(1&n&&(t.ynx(0),t.YNc(1,P,8,3,"ng-container",6),t.BQk()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult)}}function N(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import done."),t.qZA())}function L(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import failed."),t.qZA())}function $(n,s){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,N,2,0,"p",6),t.YNc(2,L,2,0,"p",6),t.qZA()),2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult.Success),t.xp6(1),t.Q6J("ngIf",!e.importResult.Success)}}function J(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,$,3,2,"div",26),t.TgZ(2,"mat-dialog-actions",23)(3,"button",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.closeDialog())}),t._uU(4,"Close"),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult)}}function B(n,s){if(1&n&&(t.ynx(0)(1,7),t.YNc(2,E,32,4,"form",8),t.YNc(3,y,3,0,"div",9),t.YNc(4,b,2,1,"ng-container",8),t.YNc(5,J,5,1,"ng-container",8),t.BQk()()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngSwitch",e.viewStateSelected),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",2),t.xp6(1),t.Q6J("ngSwitchCase",3)}}function K(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.filesDropped(i))}),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA()(),t.TgZ(4,"div",4)(5,"p"),t._uU(6," This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit "),t.TgZ(7,"a",5),t._uU(8,"https://2sxc.org/help"),t.qZA(),t._uU(9," for more instructions. "),t.qZA()(),t.YNc(10,B,6,5,"ng-container",6),t.qZA()}if(2&n){const e=s.ngIf,o=t.oxw();t.Q6J("allowedFileTypes","xml"),t.xp6(3),t.hij("",null==e.contentType?null:e.contentType.Name," Import Data"),t.xp6(7),t.Q6J("ngIf",null!=o.formValues)}}let Q=(()=>{var n;class s{constructor(o,i,l,A,k,Y){this.dialogData=o,this.dialogRef=i,this.route=l,this.contentImportService=A,this.appDialogConfigService=k,this.contentTypesService=Y,this.hostClass="dialog-component",this.contentType$=new u.X(null),this.loading$=new u.X(!1),this.viewStates={waiting:0,default:1,evaluated:2,imported:3},this.viewStateSelected$=new u.X(this.viewStates.default),this.evaluationResult$=new u.X(null),this.importResult$=new u.X(null),this.viewModel$=(0,x.a)([this.contentType$,this.loading$,this.viewStateSelected$,this.evaluationResult$,this.importResult$]).pipe((0,T.U)(([q,F,W,j,V])=>({contentType:q,loading:F,viewStateSelected:W,evaluationResult:j,importResult:V}))),this.errors={0:"Unknown error occured.",1:"Selected content-type does not exist.",2:"Document is not a valid XML file.",3:"Selected content-type does not match the content-type in the XML file.",4:"The language is not supported.",5:"The document does not specify all languages for all entities.",6:"Language reference cannot be parsed, the language is not supported.",7:"Language reference cannot be parsed, the read-write protection is not supported.",8:"Value cannot be read, because of it has an invalid format."},this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.loading$.next(!0);const o=this.contentTypesService.retrieveContentType(this.contentTypeStaticName),i=this.appDialogConfigService.getShared$();(0,D.D)([o,i]).subscribe(([l,A])=>{this.contentType$.next(l),this.formValues={defaultLanguage:A.Context.Language.Primary,contentType:this.contentTypeStaticName,file:null!=this.dialogData.files?this.dialogData.files[0]:null,resourcesReferences:"Keep",clearEntities:"None"},this.loading$.next(!1)})}ngOnDestroy(){this.contentType$.complete(),this.loading$.complete(),this.viewStateSelected$.complete(),this.evaluationResult$.complete(),this.importResult$.complete()}closeDialog(){this.dialogRef.close()}evaluateContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.evaluateContent(this.formValues).subscribe(o=>{this.evaluationResult$.next(o),this.viewStateSelected$.next(this.viewStates.evaluated)})}importContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.importContent(this.formValues).subscribe(o=>{this.importResult$.next(o),this.viewStateSelected$.next(this.viewStates.imported)})}back(){this.viewStateSelected$.next(this.viewStates.default),this.evaluationResult$.next(null)}fileChange(o){this.formValues.file=o.target.files[0]}filesDropped(o){this.formValues.file=o[0]}}return(n=s).\u0275fac=function(o){return new(o||n)(t.Y36(_.WI),t.Y36(_.so),t.Y36(c.gz),t.Y36(C.B),t.Y36(m.K),t.Y36(h.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content-import"]],hostVars:1,hostBindings:function(o,i){2&o&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[["class","eav-dialog","appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",1,"eav-dialog",3,"allowedFileTypes","filesDropped"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-description"],["href","https://2sxc.org/help","target","_blank"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","eav-dialog-content",4,"ngSwitchCase"],["ngForm","ngForm"],[1,"eav-dialog-content"],["mat-raised-button","","tippy","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"eav-radio-group-label"],["name","ResourcesReferences",1,"eav-radio-group",3,"ngModel","ngModelChange"],["value","Keep"],["value","Resolve"],["name","ClearEntities",1,"eav-radio-group",3,"ngModel","ngModelChange"],["value","None"],["value","All"],[1,"eav-hint"],["align","end"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["class","eav-dialog-content",4,"ngIf"],[1,"eav-evaluation__title"],[1,"eav-evaluation__content"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"click"]],template:function(o,i){1&o&&(t.YNc(0,K,11,3,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.viewModel$))},dependencies:[r.sg,r.O5,r.RF,r.n9,d.z,p.$,_.H8,v.lW,g._Y,g.JJ,g.JL,g.On,g.F,I.VQ,I.U0,r.Ov],styles:[".eav-radio-group-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.eav-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.eav-hint[_ngcontent-%COMP%]{font-size:18px;margin-top:24px;margin-bottom:16px}.eav-evaluation__title[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0;font-weight:700}.eav-evaluation__content[_ngcontent-%COMP%]{font-size:14px}.eav-evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px 0}"]}),s})()},2849:(Z,f,a)=>{a.d(f,{z:()=>D});var _=a(1699),u=a(9016),x=a(9097),T=a(9409);let D=(()=>{var m;class h extends x.f{constructor(t,c,r){super(),this.zone=c,this.snackBar=r,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new _.vpe,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=t.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscription.add((0,u.R)(this.element,"dragover").subscribe(t=>{t.preventDefault(),t.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscription.add((0,u.R)(this.element,"dragleave").subscribe(t=>{t.preventDefault(),t.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(t){t.preventDefault(),t.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let r=Array.from(t.dataTransfer.files);r=this.filterTypes(r,this.allowedFileTypes),r.length>0&&this.filesDropped.emit(r)}clearTimeouts(){for(const t of this.timeouts)clearTimeout(t);this.timeouts=[]}filterTypes(t,c){if(""===c)return t;const r=c.split(",").map(p=>p.toLocaleLowerCase()),d=t.filter(p=>{const v=p.name.lastIndexOf(".");if(v<=0)return!1;const g=p.name.substring(v+1).toLocaleLowerCase();return r.includes(g)});if(t.length!==d.length){const p=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(d.length?"Some files were filtered out. This drop location only accepts file types: "+p:"This drop location only accepts file types: "+p,null,{duration:5e3})}return d}}return(m=h).\u0275fac=function(t){return new(t||m)(_.Y36(_.SBq),_.Y36(_.R0b),_.Y36(T.ux))},m.\u0275dir=_.lG2({type:m,selectors:[["","appDragAndDrop",""]],hostBindings:function(t,c){1&t&&_.NdJ("drop",function(d){return c.onDrop(d)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},features:[_.qOj]}),h})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.08.00/dist/ng-edit/projects_eav-ui_src_app_content-import_content-import_component_ts.66ad753a0d754236.js.map