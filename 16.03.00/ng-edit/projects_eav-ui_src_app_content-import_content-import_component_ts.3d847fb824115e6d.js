"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-import_content-import_component_ts"],{9010:(A,f,i)=>{i.r(f),i.d(f,{ContentImportComponent:()=>Q});var _=i(5758),g=i(6317),h=i(6562),C=i(635),x=i(1640),d=i(722),v=i(7066),a=i(3799),t=i(3184),l=i(2977),c=i(6362),u=i(5982),p=i(587),T=i(7317),D=i(2376),I=i(8390);function Z(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",11,12)(2,"div",13)(3,"div")(4,"button",14),t.NdJ("click",function(){return t.CHM(e),t.MAs(8).click()}),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"input",15,16),t.NdJ("change",function(r){return t.CHM(e),t.oxw(3).fileChange(r)}),t.qZA()(),t.TgZ(9,"div")(10,"p",17),t._uU(11,"References to pages / files"),t.qZA(),t.TgZ(12,"mat-radio-group",18),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw(3).formValues.resourcesReferences=r}),t.TgZ(13,"mat-radio-button",19),t._uU(14," Import links as written in the file (for example /Portals/...) "),t.qZA(),t.TgZ(15,"mat-radio-button",20),t._uU(16," Try to resolve paths to references "),t.qZA()()(),t.TgZ(17,"div")(18,"p",17),t._uU(19,"Clear all other entities"),t.qZA(),t.TgZ(20,"mat-radio-group",21),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw(3).formValues.clearEntities=r}),t.TgZ(21,"mat-radio-button",22),t._uU(22," Keep all entities not found in import "),t.qZA(),t.TgZ(23,"mat-radio-button",23),t._uU(24," Remove all entities not found in import "),t.qZA()()(),t.TgZ(25,"p",24),t._uU(26,"Remember to backup your DNN first!"),t.qZA()(),t.TgZ(27,"div",25)(28,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).closeDialog()}),t._uU(29,"Cancel"),t.qZA(),t.TgZ(30,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).evaluateContent()}),t._uU(31," Preview Import "),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(6),t.Oqu(e.formValues.file?e.formValues.file.name:"Select or drop file"),t.xp6(6),t.Q6J("ngModel",e.formValues.resourcesReferences),t.xp6(8),t.Q6J("ngModel",e.formValues.clearEntities),t.xp6(10),t.Q6J("disabled",!e.formValues.file||!e.formValues.file.name)}}function E(n,s){1&n&&(t.TgZ(0,"p",28),t._uU(1,"Please wait while processing..."),t.qZA())}function y(n,s){if(1&n&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2),t.qZA(),t.TgZ(3,"p",32),t._uU(4,"File contains:"),t.qZA(),t.TgZ(5,"ul",33)(6,"li"),t._uU(7),t.qZA(),t.TgZ(8,"li"),t._uU(9),t.qZA(),t.TgZ(10,"li"),t._uU(11),t.qZA()(),t.TgZ(12,"p",32),t._uU(13,"If you press Import, it will:"),t.qZA(),t.TgZ(14,"ul",33)(15,"li"),t._uU(16),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.qZA(),t.TgZ(19,"li"),t._uU(20),t.qZA(),t.TgZ(21,"li"),t._uU(22),t.qZA()(),t.TgZ(23,"p",24),t._uU(24,"Note: The import validates much data and may take several minutes."),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(5),t.hij("",e.evaluationResult.Detail.DocumentElementsCount," content-items (records/entities)"),t.xp6(2),t.hij("",e.evaluationResult.Detail.LanguagesInDocumentCount," languages"),t.xp6(2),t.AsE("",e.evaluationResult.Detail.AttributeNamesInDocument.length," columns: ",e.evaluationResult.Detail.AttributeNamesInDocument.join(", "),""),t.xp6(5),t.hij("Create ",e.evaluationResult.Detail.AmountOfEntitiesCreated," content-items"),t.xp6(2),t.hij("Update ",e.evaluationResult.Detail.AmountOfEntitiesUpdated," content-items"),t.xp6(2),t.hij("Delete ",e.evaluationResult.Detail.AmountOfEntitiesDeleted," content-items"),t.xp6(2),t.AsE("Ignore ",e.evaluationResult.Detail.AttributeNamesNotImported.length," columns: ",e.evaluationResult.Detail.AttributeNamesNotImported.join(", "),"")}}function M(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Details: ",e.ErrorDetail,"")}}function w(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-no: ",e.LineNumber,"")}}function O(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-details: ",e.LineDetail,"")}}function S(n,s){if(1&n&&(t.TgZ(0,"li")(1,"div"),t._uU(2),t.qZA(),t.YNc(3,M,3,1,"div",6),t.YNc(4,w,3,1,"div",6),t.YNc(5,O,3,1,"div",6),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(6);t.xp6(2),t.Oqu(o.errors[e.ErrorCode]),t.xp6(1),t.Q6J("ngIf",e.ErrorDetail),t.xp6(1),t.Q6J("ngIf",e.LineNumber),t.xp6(1),t.Q6J("ngIf",e.LineDetail)}}function R(n,s){if(1&n&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2),t.qZA(),t.TgZ(3,"ul",33),t.YNc(4,S,6,4,"li",34),t.qZA()()),2&n){const e=t.oxw(4).ngIf,o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(2),t.Q6J("ngForOf",e.evaluationResult.Errors)}}function U(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,y,25,10,"div",29),t.YNc(2,R,5,2,"div",29),t.TgZ(3,"div",30)(4,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).back()}),t._uU(5,"Back"),t.qZA(),t.TgZ(6,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).importContent()}),t._uU(7," Import "),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult.Success),t.xp6(1),t.Q6J("ngIf",!e.evaluationResult.Success),t.xp6(4),t.Q6J("disabled",!e.evaluationResult.Success)}}function P(n,s){if(1&n&&(t.ynx(0),t.YNc(1,U,8,3,"ng-container",6),t.BQk()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.evaluationResult)}}function b(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import done."),t.qZA())}function N(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import failed."),t.qZA())}function L(n,s){if(1&n&&(t.TgZ(0,"div",28),t.YNc(1,b,2,0,"p",6),t.YNc(2,N,2,0,"p",6),t.qZA()),2&n){const e=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult.Success),t.xp6(1),t.Q6J("ngIf",!e.importResult.Success)}}function $(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,L,3,2,"div",35),t.TgZ(2,"div",30)(3,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).closeDialog()}),t._uU(4,"Close"),t.qZA()()()}if(2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.importResult)}}function J(n,s){if(1&n&&(t.ynx(0)(1,7),t.YNc(2,Z,32,4,"form",8),t.YNc(3,E,2,0,"p",9),t.YNc(4,P,2,1,"ng-container",10),t.YNc(5,$,5,1,"div",10),t.BQk()()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngSwitch",e.viewStateSelected),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",2),t.xp6(1),t.Q6J("ngSwitchCase",3)}}function B(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(r){return t.CHM(e),t.oxw().filesDropped(r)}),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA()(),t.TgZ(4,"p",4),t._uU(5," This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit "),t.TgZ(6,"a",5),t._uU(7,"https://2sxc.org/help"),t.qZA(),t._uU(8," for more instructions. "),t.qZA(),t.YNc(9,J,6,5,"ng-container",6),t.qZA()}if(2&n){const e=s.ngIf,o=t.oxw();t.Q6J("allowedFileTypes","xml"),t.xp6(3),t.hij("",null==e.contentType?null:e.contentType.Name," Import Data"),t.xp6(6),t.Q6J("ngIf",null!=o.formValues)}}let Q=(()=>{class n{constructor(e,o,r,m,Y,k){this.dialogData=e,this.dialogRef=o,this.route=r,this.contentImportService=m,this.appDialogConfigService=Y,this.contentTypesService=k,this.hostClass="dialog-component",this.contentType$=new g.X(null),this.loading$=new g.X(!1),this.viewStates={waiting:0,default:1,evaluated:2,imported:3},this.viewStateSelected$=new g.X(this.viewStates.default),this.evaluationResult$=new g.X(null),this.importResult$=new g.X(null),this.viewModel$=(0,h.a)([this.contentType$,this.loading$,this.viewStateSelected$,this.evaluationResult$,this.importResult$]).pipe((0,C.U)(([q,K,F,W,j])=>({contentType:q,loading:K,viewStateSelected:F,evaluationResult:W,importResult:j}))),this.errors={0:"Unknown error occured.",1:"Selected content-type does not exist.",2:"Document is not a valid XML file.",3:"Selected content-type does not match the content-type in the XML file.",4:"The language is not supported.",5:"The document does not specify all languages for all entities.",6:"Language reference cannot be parsed, the language is not supported.",7:"Language reference cannot be parsed, the read-write protection is not supported.",8:"Value cannot be read, because of it has an invalid format."},this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.loading$.next(!0);const e=this.contentTypesService.retrieveContentType(this.contentTypeStaticName),o=this.appDialogConfigService.getShared$();(0,x.D)([e,o]).subscribe(([r,m])=>{this.contentType$.next(r),this.formValues={defaultLanguage:m.Context.Language.Primary,contentType:this.contentTypeStaticName,file:null!=this.dialogData.files?this.dialogData.files[0]:null,resourcesReferences:"Keep",clearEntities:"None"},this.loading$.next(!1)})}ngOnDestroy(){this.contentType$.complete(),this.loading$.complete(),this.viewStateSelected$.complete(),this.evaluationResult$.complete(),this.importResult$.complete()}closeDialog(){this.dialogRef.close()}evaluateContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.evaluateContent(this.formValues).subscribe(e=>{this.evaluationResult$.next(e),this.viewStateSelected$.next(this.viewStates.evaluated)})}importContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.importContent(this.formValues).subscribe(e=>{this.importResult$.next(e),this.viewStateSelected$.next(this.viewStates.imported)})}back(){this.viewStateSelected$.next(this.viewStates.default),this.evaluationResult$.next(null)}fileChange(e){this.formValues.file=e.target.files[0]}filesDropped(e){this.formValues.file=e[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.WI),t.Y36(_.so),t.Y36(l.gz),t.Y36(a.B),t.Y36(d.K),t.Y36(v.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content-import"]],hostVars:1,hostBindings:function(e,o){2&e&&t.Ikx("className",o.hostClass)},decls:2,vars:3,consts:[["class","dialog-form-wrapper","appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",1,"dialog-form-wrapper",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box"],[1,"dialog-description"],["href","https://2sxc.org/help","target","_blank"],[4,"ngIf"],[3,"ngSwitch"],["class","dialog-form",4,"ngSwitchCase"],["class","progress-message",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"dialog-form"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],["mat-raised-button","","tippy","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"field-label"],["name","ResourcesReferences",3,"ngModel","ngModelChange"],["value","Keep"],["value","Resolve"],["name","ClearEntities",3,"ngModel","ngModelChange"],["value","None"],["value","All"],[1,"hint"],[1,"dialog-form-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"progress-message"],["class","dialog-component-content fancy-scrollbar-light",4,"ngIf"],[1,"dialog-component-actions"],[1,"dialog-component-content","fancy-scrollbar-light"],[1,"evaluation__title"],[1,"evaluation__content"],[4,"ngFor","ngForOf"],["class","progress-message",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,B,10,3,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.viewModel$))},directives:[c.O5,u.z,_.uh,c.RF,c.n9,p._Y,p.JL,p.F,T.lW,D.$,I.VQ,p.JJ,p.On,I.U0,c.sg],pipes:[c.Ov],styles:[".field-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px;font-size:14px}.hint[_ngcontent-%COMP%]{font-size:18px;margin-top:24px;margin-bottom:16px}.progress-message[_ngcontent-%COMP%]{font-size:18px}.evaluation__title[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0;font-weight:700}.evaluation__content[_ngcontent-%COMP%]{font-size:14px}.evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px 0}"]}),n})()},5982:(A,f,i)=>{i.d(f,{z:()=>x});var _=i(3184),g=i(3280),h=i(5904),C=i(2528);let x=(()=>{class d extends h.f{constructor(a,t,l){super(),this.zone=t,this.snackBar=l,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new _.vpe,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=a.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscription.add((0,g.R)(this.element,"dragover").subscribe(a=>{a.preventDefault(),a.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscription.add((0,g.R)(this.element,"dragleave").subscribe(a=>{a.preventDefault(),a.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(a){a.preventDefault(),a.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let l=Array.from(a.dataTransfer.files);l=this.filterTypes(l,this.allowedFileTypes),l.length>0&&this.filesDropped.emit(l)}clearTimeouts(){for(const a of this.timeouts)clearTimeout(a);this.timeouts=[]}filterTypes(a,t){if(""===t)return a;const l=t.split(",").map(u=>u.toLocaleLowerCase()),c=a.filter(u=>{const p=u.name.lastIndexOf(".");if(p<=0)return!1;const T=u.name.substring(p+1).toLocaleLowerCase();return l.includes(T)});if(a.length!==c.length){const u=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(c.length?"Some files were filtered out. This drop location only accepts file types: "+u:"This drop location only accepts file types: "+u,null,{duration:5e3})}return c}}return d.\u0275fac=function(a){return new(a||d)(_.Y36(_.SBq),_.Y36(_.R0b),_.Y36(C.ux))},d.\u0275dir=_.lG2({type:d,selectors:[["","appDragAndDrop",""]],hostBindings:function(a,t){1&a&&_.NdJ("drop",function(c){return t.onDrop(c)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},features:[_.qOj]}),d})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.03.00/ng-edit/projects_eav-ui_src_app_content-import_content-import_component_ts.3d847fb824115e6d.js.map