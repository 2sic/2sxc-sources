"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-import_content-import_component_ts"],{4188:(D,h,a)=>{a.r(h),a.d(h,{ContentImportComponent:()=>q});var r=a(6861),u=a(8071),f=a(3839),v=a(9736),T=a(4300),m=a(9731),A=a(5530),l=a(5997),t=a(9039),c=a(91),C=a(2849),p=a(9498),g=a(895),d=a(8849),x=a(2106),Z=a(6575);function E(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",null,6)(2,"div",7)(3,"div")(4,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(8);return t.KtG(i.click())}),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"input",9,10),t.NdJ("change",function(i){t.CHM(e);const _=t.oxw(3);return t.KtG(_.fileChange(i))}),t.qZA()(),t.TgZ(9,"div")(10,"p",11),t._uU(11,"References to pages / files"),t.qZA(),t.TgZ(12,"mat-radio-group",12),t.NdJ("ngModelChange",function(i){t.CHM(e);const _=t.oxw(3);return t.KtG(_.formValues.resourcesReferences=i)}),t.TgZ(13,"mat-radio-button",13),t._uU(14," Import links as written in the file (for example /Portals/...) "),t.qZA(),t.TgZ(15,"mat-radio-button",14),t._uU(16," Try to resolve paths to references "),t.qZA()()(),t.TgZ(17,"div")(18,"p",11),t._uU(19,"Clear all other entities"),t.qZA(),t.TgZ(20,"mat-radio-group",15),t.NdJ("ngModelChange",function(i){t.CHM(e);const _=t.oxw(3);return t.KtG(_.formValues.clearEntities=i)}),t.TgZ(21,"mat-radio-button",16),t._uU(22," Keep all entities not found in import "),t.qZA(),t.TgZ(23,"mat-radio-button",17),t._uU(24," Remove all entities not found in import "),t.qZA()()(),t.TgZ(25,"p",18),t._uU(26,"Remember to backup your DNN first!"),t.qZA()(),t.TgZ(27,"mat-dialog-actions",19)(28,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.closeDialog())}),t._uU(29,"Cancel"),t.qZA(),t.TgZ(30,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.evaluateContent())}),t._uU(31," Preview Import "),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(6),t.Oqu(e.formValues.file?e.formValues.file.name:"Select or drop file"),t.xp6(6),t.Q6J("ngModel",e.formValues.resourcesReferences),t.xp6(8),t.Q6J("ngModel",e.formValues.clearEntities),t.xp6(10),t.Q6J("disabled",!e.formValues.file||!e.formValues.file.name)}}function I(n,s){1&n&&(t.TgZ(0,"div",7)(1,"p"),t._uU(2,"Please wait while processing..."),t.qZA()())}function M(n,s){if(1&n&&(t.TgZ(0,"div",7)(1,"p",23),t._uU(2),t.qZA(),t.TgZ(3,"p",23),t._uU(4,"File contains:"),t.qZA(),t.TgZ(5,"ul",24)(6,"li"),t._uU(7),t.qZA(),t.TgZ(8,"li"),t._uU(9),t.qZA(),t.TgZ(10,"li"),t._uU(11),t.qZA()(),t.TgZ(12,"p",23),t._uU(13,"If you press Import, it will:"),t.qZA(),t.TgZ(14,"ul",24)(15,"li"),t._uU(16),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.qZA(),t.TgZ(19,"li"),t._uU(20),t.qZA(),t.TgZ(21,"li"),t._uU(22),t.qZA()(),t.TgZ(23,"p",18),t._uU(24,"Note: The import validates much data and may take several minutes."),t.qZA()()),2&n){const e=t.oxw(4),o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(5),t.hij("",e.evaluationResult.Detail.DocumentElementsCount," content-items (records/entities)"),t.xp6(2),t.hij("",e.evaluationResult.Detail.LanguagesInDocumentCount," languages"),t.xp6(2),t.AsE("",e.evaluationResult.Detail.AttributeNamesInDocument.length," columns: ",e.evaluationResult.Detail.AttributeNamesInDocument.join(", "),""),t.xp6(5),t.hij("Create ",e.evaluationResult.Detail.AmountOfEntitiesCreated," content-items"),t.xp6(2),t.hij("Update ",e.evaluationResult.Detail.AmountOfEntitiesUpdated," content-items"),t.xp6(2),t.hij("Delete ",e.evaluationResult.Detail.AmountOfEntitiesDeleted," content-items"),t.xp6(2),t.AsE("Ignore ",e.evaluationResult.Detail.AttributeNamesNotImported.length," columns: ",e.evaluationResult.Detail.AttributeNamesNotImported.join(", "),"")}}function y(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Details: ",e.ErrorDetail,"")}}function w(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-no: ",e.LineNumber,"")}}function O(n,s){if(1&n&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("Line-details: ",e.LineDetail,"")}}function U(n,s){if(1&n&&(t.TgZ(0,"li")(1,"div"),t._uU(2),t.qZA(),t.YNc(3,y,3,1,"div")(4,w,3,1,"div")(5,O,3,1,"div"),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(6);t.xp6(2),t.Oqu(o.errors[e.ErrorCode]),t.xp6(1),t.um2(3,e.ErrorDetail?3:-1),t.xp6(1),t.um2(4,e.LineNumber?4:-1),t.xp6(1),t.um2(5,e.LineDetail?5:-1)}}function R(n,s){if(1&n&&(t.TgZ(0,"div",7)(1,"p",23),t._uU(2),t.qZA(),t.TgZ(3,"ul",24),t.SjG(4,U,6,4,"li",null,t.x6l),t.qZA()()),2&n){const e=t.oxw(4),o=t.oxw();t.xp6(2),t.hij("Try to import file '",o.formValues.file.name,"'"),t.xp6(2),t.wJu(e.evaluationResult.Errors)}}function S(n,s){if(1&n){const e=t.EpF();t.YNc(0,M,25,10,"div",22)(1,R,6,1,"div",22),t.TgZ(2,"mat-dialog-actions",19)(3,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(4);return t.KtG(i.back())}),t._uU(4,"Back"),t.qZA(),t.TgZ(5,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(4);return t.KtG(i.importContent())}),t._uU(6," Import "),t.qZA()()}if(2&n){const e=t.oxw(3);t.um2(0,e.evaluationResult.Success?0:-1),t.xp6(1),t.um2(1,e.evaluationResult.Success?-1:1),t.xp6(4),t.Q6J("disabled",!e.evaluationResult.Success)}}function P(n,s){if(1&n&&t.YNc(0,S,7,3,"mat-dialog-actions",19),2&n){const e=t.oxw(2);t.um2(0,e.evaluationResult?0:-1)}}function b(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import done."),t.qZA())}function L(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"Import failed."),t.qZA())}function N(n,s){if(1&n&&(t.TgZ(0,"div",7),t.YNc(1,b,2,0,"p")(2,L,2,0,"p"),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.um2(1,e.importResult.Success?1:-1),t.xp6(1),t.um2(2,e.importResult.Success?-1:2)}}function $(n,s){if(1&n){const e=t.EpF();t.YNc(0,N,3,2,"div",22),t.TgZ(1,"mat-dialog-actions",19)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.closeDialog())}),t._uU(3,"Close"),t.qZA()()}if(2&n){const e=t.oxw(2);t.um2(0,e.importResult?0:-1)}}function K(n,s){if(1&n&&t.YNc(0,E,32,4)(1,I,3,0)(2,P,1,1)(3,$,4,1),2&n){const e=t.oxw();let o;t.um2(0,1===(o=e.viewStateSelected)?0:0===o?1:2===o?2:3===o?3:-1)}}function B(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("filesDropped",function(i){t.CHM(e);const _=t.oxw();return t.KtG(_.filesDropped(i))}),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA()(),t.TgZ(4,"div",4)(5,"p"),t._uU(6," This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit "),t.TgZ(7,"a",5),t._uU(8,"https://2sxc.org/help"),t.qZA(),t._uU(9," for more instructions. "),t.qZA()(),t.YNc(10,K,4,1),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("allowedFileTypes","xml"),t.xp6(3),t.hij("",null==s.contentType?null:s.contentType.Name," Import Data"),t.xp6(7),t.um2(10,null!=e.formValues?10:-1)}}let q=(()=>{class n{constructor(e,o,i,_,F,k){this.dialogData=e,this.dialogRef=o,this.route=i,this.contentImportService=_,this.appDialogConfigService=F,this.contentTypesService=k,this.hostClass="dialog-component",this.contentType$=new u.X(null),this.loading$=new u.X(!1),this.viewStates={waiting:0,default:1,evaluated:2,imported:3},this.viewStateSelected$=new u.X(this.viewStates.default),this.evaluationResult$=new u.X(null),this.importResult$=new u.X(null),this.viewModel$=(0,f.a)([this.contentType$,this.loading$,this.viewStateSelected$,this.evaluationResult$,this.importResult$]).pipe((0,v.U)(([W,j,J,V,Y])=>({contentType:W,loading:j,viewStateSelected:J,evaluationResult:V,importResult:Y}))),this.errors={0:"Unknown error occured.",1:"Selected content-type does not exist.",2:"Document is not a valid XML file.",3:"Selected content-type does not match the content-type in the XML file.",4:"The language is not supported.",5:"The document does not specify all languages for all entities.",6:"Language reference cannot be parsed, the language is not supported.",7:"Language reference cannot be parsed, the read-write protection is not supported.",8:"Value cannot be read, because of it has an invalid format."},this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.loading$.next(!0);const e=this.contentTypesService.retrieveContentType(this.contentTypeStaticName),o=this.appDialogConfigService.getShared$();(0,T.D)([e,o]).subscribe(([i,_])=>{this.contentType$.next(i),this.formValues={defaultLanguage:_.Context.Language.Primary,contentType:this.contentTypeStaticName,file:null!=this.dialogData.files?this.dialogData.files[0]:null,resourcesReferences:"Keep",clearEntities:"None"},this.loading$.next(!1)})}ngOnDestroy(){this.contentType$.complete(),this.loading$.complete(),this.viewStateSelected$.complete(),this.evaluationResult$.complete(),this.importResult$.complete()}closeDialog(){this.dialogRef.close()}evaluateContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.evaluateContent(this.formValues).subscribe(e=>{this.evaluationResult$.next(e),this.viewStateSelected$.next(this.viewStates.evaluated)})}importContent(){this.viewStateSelected$.next(this.viewStates.waiting),this.contentImportService.importContent(this.formValues).subscribe(e=>{this.importResult$.next(e),this.viewStateSelected$.next(this.viewStates.imported)})}back(){this.viewStateSelected$.next(this.viewStates.default),this.evaluationResult$.next(null)}fileChange(e){this.formValues.file=e.target.files[0]}filesDropped(e){this.formValues.file=e[0]}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(r.WI),t.Y36(r.so),t.Y36(c.gz),t.Y36(l.B),t.Y36(m.K),t.Y36(A.s))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-content-import"]],hostVars:1,hostBindings:function(o,i){2&o&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[["class","eav-dialog","appDragAndDrop","",3,"allowedFileTypes"],["appDragAndDrop","",1,"eav-dialog",3,"allowedFileTypes","filesDropped"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-description"],["href","https://2sxc.org/help","target","_blank"],["ngForm","ngForm"],[1,"eav-dialog-content"],["mat-raised-button","","tippy","Open file browser",3,"click"],["type","file",1,"hide",3,"change"],["fileInput",""],[1,"eav-radio-group-label"],["name","ResourcesReferences",1,"eav-radio-group",3,"ngModel","ngModelChange"],["value","Keep"],["value","Resolve"],["name","ClearEntities",1,"eav-radio-group",3,"ngModel","ngModelChange"],["value","None"],["value","All"],[1,"eav-hint"],["align","end"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["class","eav-dialog-content"],[1,"eav-evaluation__title"],[1,"eav-evaluation__content"],["mat-raised-button","","color","accent",3,"click"]],template:function(o,i){if(1&o&&(t.YNc(0,B,11,3,"div",0),t.ALo(1,"async")),2&o){let _;t.um2(0,(_=t.lcZ(1,1,i.viewModel$))?0:-1,_)}},dependencies:[C.z,p.$,r.H8,g.lW,d._Y,d.JJ,d.JL,d.On,d.F,x.VQ,x.U0,Z.Ov],styles:[".eav-radio-group-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.eav-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.eav-hint[_ngcontent-%COMP%]{font-size:18px;margin-top:24px;margin-bottom:16px}.eav-evaluation__title[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0;font-weight:700}.eav-evaluation__content[_ngcontent-%COMP%]{font-size:14px}.eav-evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px 0}"]})}return n})()},2849:(D,h,a)=>{a.d(h,{z:()=>T});var r=a(9039),u=a(9016),f=a(9097),v=a(9409);let T=(()=>{class m extends f.f{constructor(l,t,c){super(),this.zone=t,this.snackBar=c,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new r.vpe,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=l.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscription.add((0,u.R)(this.element,"dragover").subscribe(l=>{l.preventDefault(),l.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscription.add((0,u.R)(this.element,"dragleave").subscribe(l=>{l.preventDefault(),l.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(l){l.preventDefault(),l.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let c=Array.from(l.dataTransfer.files);c=this.filterTypes(c,this.allowedFileTypes),c.length>0&&this.filesDropped.emit(c)}clearTimeouts(){for(const l of this.timeouts)clearTimeout(l);this.timeouts=[]}filterTypes(l,t){if(""===t)return l;const c=t.split(",").map(p=>p.toLocaleLowerCase()),C=l.filter(p=>{const g=p.name.lastIndexOf(".");if(g<=0)return!1;const d=p.name.substring(g+1).toLocaleLowerCase();return c.includes(d)});if(l.length!==C.length){const p=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(C.length?"Some files were filtered out. This drop location only accepts file types: "+p:"This drop location only accepts file types: "+p,null,{duration:5e3})}return C}static#t=this.\u0275fac=function(t){return new(t||m)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(v.ux))};static#e=this.\u0275dir=r.lG2({type:m,selectors:[["","appDragAndDrop",""]],hostBindings:function(t,c){1&t&&r.NdJ("drop",function(p){return c.onDrop(p)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},features:[r.qOj]})}return m})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.00/dist/ng-edit/projects_eav-ui_src_app_content-import_content-import_component_ts.8f980d3adfee7bd0.js.map