"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts"],{8018:(v,x,a)=>{a.r(x),a.d(x,{ExportAppPartsComponent:()=>R});var r=a(8071),C=a(3839),c=a(9736),u=a(8834),l=a(196),d=a(5530),h=a(2369),t=a(9039),g=a(6861),T=a(9851),P=a(131),M=a(9498),f=a(895),A=a(6515),E=a(8849),m=a(1268),O=a(6355),D=a(257),Z=a(6658),I=a(6575);function y(n,p){if(1&n&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&n){const o=p.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.name," ")}}function U(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"li",18)(1,"div",19)(2,"mat-checkbox",20),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s._export=i)}),t.TgZ(3,"span",21),t._uU(4),t.qZA()()()()}if(2&n){const o=p.$implicit;t.xp6(2),t.Q6J("ngModel",o._export),t.xp6(2),t.AsE("",o.Name," (",o.Id,")")}}function S(n,p){if(1&n&&(t.TgZ(0,"ul",23)(1,"p",24),t._uU(2,"Templates"),t.qZA(),t.SjG(3,U,5,3,"li",25,t.x6l),t.qZA()),2&n){const o=t.oxw().$implicit;t.xp6(3),t.wJu(o.Templates)}}function K(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"li",18)(1,"div",19)(2,"mat-checkbox",20),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s._export=i)}),t.TgZ(3,"span",21),t._uU(4),t.qZA()()()()}if(2&n){const o=p.$implicit;t.xp6(2),t.Q6J("ngModel",o._export),t.xp6(2),t.AsE("",o.Title," (",o.Id,")")}}function k(n,p){if(1&n&&(t.TgZ(0,"ul",23)(1,"p",24),t._uU(2,"Entities"),t.qZA(),t.SjG(3,K,5,3,"li",25,t.x6l),t.qZA()),2&n){const o=t.oxw().$implicit;t.xp6(3),t.wJu(o.Entities)}}function b(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"li",18)(1,"div",19)(2,"mat-checkbox",20),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s._export=i)}),t.TgZ(3,"span",21),t._uU(4),t.qZA()()(),t.YNc(5,S,5,0,"ul",22)(6,k,5,0,"ul",22),t.qZA()}if(2&n){const o=p.$implicit;t.xp6(2),t.Q6J("ngModel",o._export),t.xp6(2),t.AsE("",o.Name," (",o.Id,")"),t.xp6(1),t.um2(5,o.Templates.length>0?5:-1),t.xp6(1),t.um2(6,o.Entities.length>0?6:-1)}}function B(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"li",18)(1,"div",19)(2,"mat-checkbox",20),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s._export=i)}),t.TgZ(3,"span",21),t._uU(4),t.qZA()()()()}if(2&n){const o=p.$implicit;t.xp6(2),t.Q6J("ngModel",o._export),t.xp6(2),t.AsE("",o.Name," (",o.Id,")")}}function J(n,p){if(1&n&&(t.TgZ(0,"div")(1,"ul",16)(2,"p",17),t._uU(3,"Content Types"),t.qZA(),t.SjG(4,b,7,5,"li",25,t.x6l),t.qZA(),t.TgZ(6,"ul",16)(7,"p",17),t._uU(8,"Templates Without Content Types"),t.qZA(),t.SjG(9,B,5,3,"li",25,t.x6l),t.qZA()()),2&n){const o=t.oxw(2);t.xp6(4),t.wJu(o.contentInfo.ContentTypes),t.xp6(5),t.wJu(o.contentInfo.TemplatesWithoutContentTypes)}}function $(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._uU(3,"Export Content and Templates from this App"),t.qZA()(),t.TgZ(4,"div",4)(5,"p"),t._uU(6," This is an advanced feature to export parts of the app. The export will create an xml file which can be imported into another site or app. To export the entire content of the app (for example when duplicating the entire site), go to the app export. For further help visit "),t.TgZ(7,"a",5),t._uU(8,"2sxc Help"),t.qZA(),t._uU(9,". "),t.qZA(),t.TgZ(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Scope"),t.qZA(),t.TgZ(14,"mat-select",8),t.NdJ("ngModelChange",function(i){t.CHM(o);const _=t.oxw();return t.KtG(_.changeScope(i))}),t.SjG(15,y,2,2,"mat-option",9,t.x6l),t.TgZ(17,"mat-option",9),t._uU(18,"Other..."),t.qZA()(),t.TgZ(19,"button",10)(20,"mat-icon",11),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.unlockScope())}),t._uU(21),t.qZA()()(),t.TgZ(22,"app-field-hint"),t._uU(23," The scope should almost never be changed - "),t.TgZ(24,"a",12),t._uU(25,"see help"),t.qZA()()(),t.YNc(26,J,11,0,"div"),t.qZA(),t.TgZ(27,"mat-dialog-actions",13)(28,"button",14),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.closeDialog())}),t._uU(29," Cancel "),t.qZA(),t.TgZ(30,"button",15),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.exportAppParts())}),t._uU(31," Export "),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(14),t.Q6J("ngModel",o.exportScope)("disabled",o.lockScope),t.xp6(1),t.wJu(o.scopeOptions),t.xp6(2),t.Q6J("value",o.dropdownInsertValue),t.xp6(2),t.Q6J("tippy",o.lockScope?"Unlock":"Lock"),t.xp6(2),t.hij(" ",o.lockScope?"lock":"lock_open"," "),t.xp6(5),t.um2(26,o.contentInfo?26:-1),t.xp6(2),t.Q6J("disabled",p.loading||p.isExporting),t.xp6(2),t.Q6J("disabled",p.loading||p.isExporting)}}let R=(()=>{class n{constructor(o,e,i){this.dialogRef=o,this.exportAppPartsService=e,this.contentTypesService=i,this.hostClass="dialog-component",this.exportScope=l.Zy.scopes.default.value,this.lockScope=!0,this.dropdownInsertValue=u.G,this.loading$=new r.X(!1),this.isExporting$=new r.X(!1),this.viewModel$=(0,C.a)([this.loading$,this.isExporting$]).pipe((0,c.U)(([_,s])=>({loading:_,isExporting:s})))}ngOnInit(){this.fetchScopes(),this.fetchContentInfo()}ngOnDestroy(){this.loading$.complete(),this.isExporting$.complete()}closeDialog(){this.dialogRef.close()}exportAppParts(){this.isExporting$.next(!0);const o=this.selectedContentTypes().map(_=>_.Id),e=this.selectedTemplates().map(_=>_.Id);let i=this.selectedEntities().map(_=>_.Id);i=i.concat(e),this.exportAppPartsService.exportParts(o,i,e),this.isExporting$.next(!1)}changeScope(o){o!==u.G||(o=prompt("This is an advanced feature to show content-types of another scope. Don't use this if you don't know what you're doing, as content-types of other scopes are usually hidden for a good reason.")||l.Zy.scopes.default.value,this.scopeOptions.find(e=>e.value===o))||this.scopeOptions.unshift({name:o,value:o}),this.exportScope=o,this.fetchContentInfo()}unlockScope(){this.lockScope=!this.lockScope,this.lockScope&&(this.exportScope=l.Zy.scopes.default.value,this.fetchContentInfo())}fetchScopes(){this.loading$.next(!0),this.contentTypesService.getScopes().subscribe(o=>{this.scopeOptions=o,this.loading$.next(!1)})}fetchContentInfo(){this.loading$.next(!0),this.exportAppPartsService.getContentInfo(this.exportScope).subscribe(o=>{this.contentInfo=o,this.loading$.next(!1)})}selectedContentTypes(){return this.contentInfo.ContentTypes.filter(o=>o._export)}selectedEntities(){let o=[];for(const e of this.contentInfo.ContentTypes)o=o.concat(e.Entities.filter(i=>i._export));return o}selectedTemplates(){let o=[];for(const e of this.contentInfo.ContentTypes)o=o.concat(e.Templates.filter(i=>i._export));return o=o.concat(this.contentInfo.TemplatesWithoutContentTypes.filter(e=>e._export)),o}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(g.so),t.Y36(h.T),t.Y36(d.s))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-export-app-parts"]],hostVars:1,hostBindings:function(e,i){2&e&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[["class","eav-dialog eav-no-scrollbar"],[1,"eav-dialog","eav-no-scrollbar"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],["href","https://2sxc.org/en/help?tag=export","target","_blank"],[1,"eav-edit-input"],["color","accent",1,"eav-form-field"],["name","Scope",3,"ngModel","disabled","ngModelChange"],[3,"value"],["mat-icon-button","","matTextSuffix","",3,"tippy"],["appClickStopPropagation","",3,"click"],["appClickStopPropagation","","href","https://2sxc.org/help?tag=scope","target","_blank"],["align","end"],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"eav-content-info__list","eav-content-info__base"],[1,"eav-content-info__title"],[1,"eav-content-info__item"],[1,"eav-option-box"],[3,"ngModel","ngModelChange"],[1,"eav-option-box__text"],["class","eav-content-info__list"],[1,"eav-content-info__list"],[1,"eav-content-info__subtitle"],["class","eav-content-info__item"]],template:function(e,i){if(1&e&&(t.YNc(0,$,32,8,"div",0),t.ALo(1,"async")),2&e){let _;t.um2(0,(_=t.lcZ(1,1,i.viewModel$))?0:-1,_)}},dependencies:[T.Y,P.E,M.$,g.H8,f.lW,f.RK,A.Hw,E.JJ,E.On,m.KE,m.hX,m.R9,O.gD,D.ey,Z.oG,I.Ov],styles:[".eav-edit-input[_ngcontent-%COMP%]{padding-bottom:8px}.eav-content-info__title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.eav-content-info__subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.eav-content-info__list[_ngcontent-%COMP%]{font-size:14px;list-style-type:none}.eav-content-info__base[_ngcontent-%COMP%]{padding:0}.eav-content-info__item[_ngcontent-%COMP%]{border-top:1px solid #DDD;padding:2px}.eav-option-box[_ngcontent-%COMP%]{margin:8px 0}.eav-option-box__text[_ngcontent-%COMP%]{white-space:normal;font-size:14px}"]})}return n})()},131:(v,x,a)=>{a.d(x,{E:()=>C});var r=a(9039);let C=(()=>{class c{onClick(l){l.stopPropagation()}static#t=this.\u0275fac=function(d){return new(d||c)};static#o=this.\u0275dir=r.lG2({type:c,selectors:[["","appClickStopPropagation",""]],hostBindings:function(d,h){1&d&&r.NdJ("click",function(g){return h.onClick(g)})}})}return c})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.01/dist/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d.a8b16e90acd5f64c.js.map