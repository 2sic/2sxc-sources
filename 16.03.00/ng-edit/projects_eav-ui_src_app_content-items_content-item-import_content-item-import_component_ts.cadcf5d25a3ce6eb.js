"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-items_content-item-import_content-item-import_component_ts"],{3603:(C,m,s)=>{s.r(m),s.d(m,{ContentItemImportComponent:()=>h});var o=s(5758),g=s(8812),f=s(3184),d=s(9262);let h=(()=>{class l{constructor(e,_){var a,u,c,D;null!==(a=e.title)&&void 0!==a||(e.title="Import Single Item"),null!==(u=e.description)&&void 0!==u||(e.description="Select an item file (json) from your computer to import."),null!==(c=e.allowedFileTypes)&&void 0!==c||(e.allowedFileTypes="json"),null!==(D=e.upload$)&&void 0!==D||(e.upload$=T=>_.importItem(T[0]))}}return l.\u0275fac=function(e){return new(e||l)(f.Y36(o.WI),f.Y36(g.l))},l.\u0275cmp=f.Xpm({type:l,selectors:[["app-content-item-import"]],decls:1,vars:0,template:function(e,_){1&e&&f._UZ(0,"app-file-upload-dialog")},directives:[d.U],styles:[""]}),l})()},9262:(C,m,s)=>{s.d(m,{U:()=>Z});var o=s(5758),g=s(6317),f=s(6562),d=s(635),h=s(9295),l=s(5904),v=s(2305),e=s(3184),_=s(2528),a=s(6362),u=s(5982),c=s(4742),D=s(7317),T=s(2376),x=s(1555);function E(i,r){1&i&&e._UZ(0,"mat-spinner",13)}function O(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Select or drop file"),e.qZA())}function U(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.Oqu(t.name)}}function M(i,r){1&i&&(e.TgZ(0,"div",18),e._uU(1," Upload succeeded. See the messages below for more information. "),e.qZA())}function I(i,r){1&i&&(e.TgZ(0,"div",19),e._uU(1," Upload failed. See the messages below for more information. "),e.qZA())}const y=function(i,r,t){return{"sxc-message-warning":i,"sxc-message-success":r,"sxc-message-error":t}};function P(i,r){if(1&i&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&i){const t=r.$implicit,n=e.oxw(3);e.Q6J("ngClass",e.kEZ(2,y,t.MessageType===n.FileUploadMessageTypes.Warning,t.MessageType===n.FileUploadMessageTypes.Success,t.MessageType===n.FileUploadMessageTypes.Error)),e.xp6(1),e.hij(" ",t.Text," ")}}function A(i,r){if(1&i&&(e.TgZ(0,"div",14),e.YNc(1,M,2,0,"div",15),e.YNc(2,I,2,0,"div",16),e.YNc(3,P,2,6,"div",17),e.qZA()),2&i){const t=e.oxw().ngIf;e.xp6(1),e.Q6J("ngIf",t.result.Success),e.xp6(1),e.Q6J("ngIf",!t.result.Success),e.xp6(1),e.Q6J("ngForOf",t.result.Messages)}}function F(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).closeDialog()}),e._uU(2,"Cancel"),e.qZA(),e.TgZ(3,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).upload()}),e._uU(4," Upload "),e.qZA(),e.BQk()}if(2&i){const t=e.oxw().ngIf;e.xp6(3),e.Q6J("disabled",!t.files.length||t.uploading||!!t.result)}}function L(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).closeDialog(!0)}),e._uU(2,"Close"),e.qZA(),e.BQk()}}function B(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("filesDropped",function(p){return e.CHM(t),e.oxw().filesDropped(p)}),e.TgZ(1,"div",2),e._UZ(2,"div",3),e.ALo(3,"safeHtml"),e.qZA(),e.YNc(4,E,1,0,"mat-spinner",4),e._UZ(5,"p",5),e.ALo(6,"safeHtml"),e.TgZ(7,"div")(8,"button",6),e.NdJ("click",function(){return e.CHM(t),e.MAs(12).click()}),e.YNc(9,O,2,0,"div",7),e.YNc(10,U,2,1,"div",8),e.qZA(),e.TgZ(11,"input",9,10),e.NdJ("change",function(p){return e.CHM(t),e.oxw().filesChanged(p)}),e.qZA()(),e.YNc(13,A,4,3,"div",11),e.TgZ(14,"div",12),e.YNc(15,F,5,1,"ng-container",7),e.YNc(16,L,3,0,"ng-container",7),e.qZA()()}if(2&i){const t=r.ngIf,n=e.oxw();e.Q6J("allowedFileTypes",n.dialogData.allowedFileTypes),e.xp6(2),e.Q6J("innerHtml",e.lcZ(3,10,n.dialogData.title),e.oJD),e.xp6(2),e.Q6J("ngIf",t.uploading),e.xp6(1),e.Q6J("innerHtml",e.lcZ(6,12,n.dialogData.description),e.oJD),e.xp6(3),e.Q6J("disabled",t.uploading),e.xp6(1),e.Q6J("ngIf",!t.files.length),e.xp6(1),e.Q6J("ngForOf",t.files),e.xp6(3),e.Q6J("ngIf",t.result),e.xp6(2),e.Q6J("ngIf",!(null!=t.result&&t.result.Success)),e.xp6(1),e.Q6J("ngIf",null==t.result?null:t.result.Success)}}let Z=(()=>{class i extends l.f{constructor(t,n,p){super(),this.dialogData=t,this.dialogRef=n,this.snackBar=p,this.hostClass="dialog-component",this.uploading$=new g.X(!1),this.files$=new g.X([]),this.result$=new g.X(void 0),this.FileUploadMessageTypes=v.D}ngOnInit(){this.subscription.add(this.files$.subscribe(()=>{void 0!==this.result$.value&&this.result$.next(void 0)})),null!=this.dialogData.files&&this.filesDropped(this.dialogData.files),this.viewModel$=(0,f.a)([this.uploading$,this.files$,this.result$]).pipe((0,d.U)(([t,n,p])=>({uploading:t,files:n,result:p})))}ngOnDestroy(){this.uploading$.complete(),this.files$.complete(),this.result$.complete(),super.ngOnDestroy()}closeDialog(t){this.dialogRef.close(t)}filesDropped(t){this.setFiles(t),this.upload()}filesChanged(t){const p=Array.from(t.target.files);this.setFiles(p)}upload(){this.uploading$.next(!0),this.subscription.add(this.dialogData.upload$(this.files$.value).pipe((0,h.q)(1)).subscribe({next:t=>{this.uploading$.next(!1),this.result$.next(t)},error:()=>{this.uploading$.next(!1),this.result$.next(void 0),this.snackBar.open("Upload failed. Please check console for more information",void 0,{duration:3e3})}}))}setFiles(t){this.dialogData.multiple||(t=t.slice(0,1)),this.files$.next(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.WI),e.Y36(o.so),e.Y36(_.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-upload-dialog"]],hostVars:1,hostBindings:function(t,n){2&t&&e.Ikx("className",n.hostClass)},features:[e.qOj],decls:2,vars:3,consts:[["appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box",3,"innerHtml"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[1,"dialog-description",3,"innerHtml"],["mat-raised-button","","tippy","Open file browser",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["type","file","multiple","",1,"hide",3,"change"],["fileInput",""],["class","dialog-component-content fancy-scrollbar-light result-container",4,"ngIf"],[1,"dialog-component-actions"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-component-content","fancy-scrollbar-light","result-container"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,B,17,14,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.viewModel$))},directives:[a.O5,u.z,o.uh,c.Ou,D.lW,T.$,a.sg,a.mk],pipes:[a.Ov,x.z],styles:[".result-container[_ngcontent-%COMP%]{margin-top:16px}"]}),i})()},2305:(C,m,s)=>{s.d(m,{D:()=>o});const o={Warning:0,Success:1,Error:2}},5982:(C,m,s)=>{s.d(m,{z:()=>h});var o=s(3184),g=s(3280),f=s(5904),d=s(2528);let h=(()=>{class l extends f.f{constructor(e,_,a){super(),this.zone=_,this.snackBar=a,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new o.vpe,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=e.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscription.add((0,g.R)(this.element,"dragover").subscribe(e=>{e.preventDefault(),e.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscription.add((0,g.R)(this.element,"dragleave").subscribe(e=>{e.preventDefault(),e.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(e){e.preventDefault(),e.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let a=Array.from(e.dataTransfer.files);a=this.filterTypes(a,this.allowedFileTypes),a.length>0&&this.filesDropped.emit(a)}clearTimeouts(){for(const e of this.timeouts)clearTimeout(e);this.timeouts=[]}filterTypes(e,_){if(""===_)return e;const a=_.split(",").map(c=>c.toLocaleLowerCase()),u=e.filter(c=>{const D=c.name.lastIndexOf(".");if(D<=0)return!1;const T=c.name.substring(D+1).toLocaleLowerCase();return a.includes(T)});if(e.length!==u.length){const c=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(u.length?"Some files were filtered out. This drop location only accepts file types: "+c:"This drop location only accepts file types: "+c,null,{duration:5e3})}return u}}return l.\u0275fac=function(e){return new(e||l)(o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(d.ux))},l.\u0275dir=o.lG2({type:l,selectors:[["","appDragAndDrop",""]],hostBindings:function(e,_){1&e&&o.NdJ("drop",function(u){return _.onDrop(u)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},features:[o.qOj]}),l})()},1555:(C,m,s)=>{s.d(m,{z:()=>f});var o=s(3184),g=s(318);let f=(()=>{class d{constructor(l){this.sanitizer=l}transform(l){return this.sanitizer.bypassSecurityTrustHtml(l)}}return d.\u0275fac=function(l){return new(l||d)(o.Y36(g.H7,16))},d.\u0275pipe=o.Yjl({name:"safeHtml",type:d,pure:!0}),d})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.03.00/ng-edit/projects_eav-ui_src_app_content-items_content-item-import_content-item-import_component_ts.cadcf5d25a3ce6eb.js.map