(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"0bV3":function(t,n,e){"use strict";e.r(n),e.d(n,"ExportAppPartsComponent",(function(){return I}));var o=e("D57K"),c=e("o9tz"),i=e("1C3z"),p=e("BLjT"),r=e("bkzA"),a=e("S36y"),s=e("hOvr"),l=e("LuBX"),b=e("ZSGP"),f=e("8AiQ"),u=e("OeRG"),h=e("9HSk"),d=e("Qc/f"),g=e("Uk43"),m=e("Zfm5"),x=e("r4gC"),v=e("mPmy");function _(t,n){if(1&t&&(i.Vb(0,"mat-option",17),i.Oc(1),i.Ub()),2&t){var e=n.$implicit;i.nc("value",e.value),i.Bb(1),i.Qc(" ",e.name," ")}}function O(t,n){if(1&t){var e=i.Wb();i.Vb(0,"mat-icon",18),i.dc("click",(function(t){return i.Dc(e),i.hc().unlockScope(t)})),i.Oc(1,"lock"),i.Ub()}}function U(t,n){if(1&t){var e=i.Wb();i.Vb(0,"mat-icon",18),i.dc("click",(function(t){return i.Dc(e),i.hc().unlockScope(t)})),i.Oc(1,"lock_open"),i.Ub()}}function V(t,n){if(1&t){var e=i.Wb();i.Vb(0,"li",22),i.Vb(1,"div",23),i.Vb(2,"mat-checkbox",24),i.dc("ngModelChange",(function(t){return i.Dc(e),n.$implicit._export=t})),i.Vb(3,"span",25),i.Oc(4),i.Ub(),i.Ub(),i.Ub(),i.Ub()}if(2&t){var o=n.$implicit;i.Bb(2),i.nc("ngModel",o._export),i.Bb(2),i.Rc("",o.Name," (",o.Id,")")}}function y(t,n){if(1&t&&(i.Vb(0,"ul",27),i.Vb(1,"p",28),i.Oc(2,"Templates"),i.Ub(),i.Mc(3,V,5,3,"li",21),i.Ub()),2&t){var e=i.hc().$implicit;i.Bb(3),i.nc("ngForOf",e.Templates)}}function C(t,n){if(1&t){var e=i.Wb();i.Vb(0,"li",22),i.Vb(1,"div",23),i.Vb(2,"mat-checkbox",24),i.dc("ngModelChange",(function(t){return i.Dc(e),n.$implicit._export=t})),i.Vb(3,"span",25),i.Oc(4),i.Ub(),i.Ub(),i.Ub(),i.Ub()}if(2&t){var o=n.$implicit;i.Bb(2),i.nc("ngModel",o._export),i.Bb(2),i.Rc("",o.Title," (",o.Id,")")}}function k(t,n){if(1&t&&(i.Vb(0,"ul",27),i.Vb(1,"p",28),i.Oc(2,"Entities"),i.Ub(),i.Mc(3,C,5,3,"li",21),i.Ub()),2&t){var e=i.hc().$implicit;i.Bb(3),i.nc("ngForOf",e.Entities)}}function S(t,n){if(1&t){var e=i.Wb();i.Vb(0,"li",22),i.Vb(1,"div",23),i.Vb(2,"mat-checkbox",24),i.dc("ngModelChange",(function(t){return i.Dc(e),n.$implicit._export=t})),i.Vb(3,"span",25),i.Oc(4),i.Ub(),i.Ub(),i.Ub(),i.Mc(5,y,4,1,"ul",26),i.Mc(6,k,4,1,"ul",26),i.Ub()}if(2&t){var o=n.$implicit;i.Bb(2),i.nc("ngModel",o._export),i.Bb(2),i.Rc("",o.Name," (",o.Id,")"),i.Bb(1),i.nc("ngIf",o.Templates.length>0),i.Bb(1),i.nc("ngIf",o.Entities.length>0)}}function M(t,n){if(1&t){var e=i.Wb();i.Vb(0,"li",22),i.Vb(1,"div",23),i.Vb(2,"mat-checkbox",24),i.dc("ngModelChange",(function(t){return i.Dc(e),n.$implicit._export=t})),i.Vb(3,"span",25),i.Oc(4),i.Ub(),i.Ub(),i.Ub(),i.Ub()}if(2&t){var o=n.$implicit;i.Bb(2),i.nc("ngModel",o._export),i.Bb(2),i.Rc("",o.Name," (",o.Id,")")}}function T(t,n){if(1&t&&(i.Vb(0,"div"),i.Vb(1,"ul",19),i.Vb(2,"p",20),i.Oc(3,"Content Types"),i.Ub(),i.Mc(4,S,7,5,"li",21),i.Ub(),i.Vb(5,"ul",19),i.Vb(6,"p",20),i.Oc(7,"Templates Without Content Types"),i.Ub(),i.Mc(8,M,5,3,"li",21),i.Ub(),i.Ub()),2&t){var e=i.hc();i.Bb(4),i.nc("ngForOf",e.contentInfo.ContentTypes),i.Bb(4),i.nc("ngForOf",e.contentInfo.TemplatesWithoutContentTypes)}}var I=function(){function t(t,n,e){this.dialogRef=t,this.exportAppPartsService=n,this.contentTypesService=e,this.hostClass="dialog-component",this.exportScope=c.a.scopes.default.value,this.lockScope=!0,this.isExporting=!1}return t.prototype.ngOnInit=function(){this.fetchScopes(),this.fetchContentInfo()},t.prototype.exportAppParts=function(){this.isExporting=!0;var t=this.selectedContentTypes().map((function(t){return t.Id})),n=this.selectedTemplates().map((function(t){return t.Id})),e=this.selectedEntities().map((function(t){return t.Id}));e=e.concat(n),this.exportAppPartsService.exportParts(t,e,n),this.isExporting=!1},t.prototype.changeScope=function(t){var n=t.value;"Other"===n&&((n=prompt("This is an advanced feature to show content-types of another scope. Don't use this if you don't know what you're doing, as content-types of other scopes are usually hidden for a good reason."))?this.scopeOptions.find((function(t){return t.value===n}))||this.scopeOptions.push({name:n,value:n}):n=c.a.scopes.default.value),this.exportScope=n,this.fetchContentInfo()},t.prototype.unlockScope=function(t){t.stopPropagation(),this.lockScope=!this.lockScope,this.lockScope&&(this.exportScope=c.a.scopes.default.value,this.fetchContentInfo())},t.prototype.closeDialog=function(){this.dialogRef.close()},t.prototype.fetchScopes=function(){var t=this;this.contentTypesService.getScopes().subscribe((function(n){t.scopeOptions=n}))},t.prototype.fetchContentInfo=function(){var t=this;this.exportAppPartsService.getContentInfo(this.exportScope).subscribe((function(n){t.contentInfo=n}))},t.prototype.selectedContentTypes=function(){return this.contentInfo.ContentTypes.filter((function(t){return t._export}))},t.prototype.selectedEntities=function(){var t,n,e=[];try{for(var c=Object(o.i)(this.contentInfo.ContentTypes),i=c.next();!i.done;i=c.next())e=e.concat(i.value.Entities.filter((function(t){return t._export})))}catch(p){t={error:p}}finally{try{i&&!i.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return e},t.prototype.selectedTemplates=function(){var t,n,e=[];try{for(var c=Object(o.i)(this.contentInfo.ContentTypes),i=c.next();!i.done;i=c.next())e=e.concat(i.value.Templates.filter((function(t){return t._export})))}catch(p){t={error:p}}finally{try{i&&!i.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return e.concat(this.contentInfo.TemplatesWithoutContentTypes.filter((function(t){return t._export})))},t.\u0275fac=function(n){return new(n||t)(i.Pb(p.g),i.Pb(r.a),i.Pb(a.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-export-app-parts"]],hostVars:1,hostBindings:function(t,n){2&t&&i.Yb("className",n.hostClass)},decls:30,vars:9,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],[1,"dialog-description"],["href","http://2sxc.org/en/help?tag=export","target","_blank"],[1,"dialog-component-content","fancy-scrollbar-light"],[1,"edit-input"],["appearance","standard","color","accent"],["name","Scope",3,"ngModel","disabled","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["value","Other"],["mat-icon-button","","type","button","matSuffix","",3,"matTooltip"],[3,"click",4,"ngIf"],["href","http://2sxc.org/help?tag=scope","target","_blank","appClickStopPropagation",""],[4,"ngIf"],[1,"dialog-component-actions"],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"value"],[3,"click"],[1,"content-info__list","content-info__base"],[1,"content-info__title"],["class","content-info__item",4,"ngFor","ngForOf"],[1,"content-info__item"],[1,"option-box"],[3,"ngModel","ngModelChange"],[1,"option-box__text"],["class","content-info__list",4,"ngIf"],[1,"content-info__list"],[1,"content-info__subtitle"]],template:function(t,n){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Oc(2,"Export Content and Templates from this App"),i.Ub(),i.Ub(),i.Vb(3,"p",2),i.Oc(4," This is an advanced feature to export parts of the app. The export will create an xml file which can be imported into another site or app. To export the entire content of the app (for example when duplicating the entire site), go to the app export. For further help visit "),i.Vb(5,"a",3),i.Oc(6,"2sxc Help"),i.Ub(),i.Oc(7,".\n"),i.Ub(),i.Vb(8,"div",4),i.Vb(9,"div",5),i.Vb(10,"mat-form-field",6),i.Vb(11,"mat-label"),i.Oc(12,"Scope"),i.Ub(),i.Vb(13,"mat-select",7),i.dc("selectionChange",(function(t){return n.changeScope(t)})),i.Mc(14,_,2,2,"mat-option",8),i.Vb(15,"mat-option",9),i.Oc(16,"Other..."),i.Ub(),i.Ub(),i.Vb(17,"button",10),i.Mc(18,O,2,0,"mat-icon",11),i.Mc(19,U,2,0,"mat-icon",11),i.Ub(),i.Ub(),i.Vb(20,"app-field-hint"),i.Oc(21," The scope should almost never be changed - "),i.Vb(22,"a",12),i.Oc(23,"see help"),i.Ub(),i.Ub(),i.Ub(),i.Mc(24,T,9,2,"div",13),i.Ub(),i.Vb(25,"div",14),i.Vb(26,"button",15),i.dc("click",(function(){return n.closeDialog()})),i.Oc(27,"Cancel"),i.Ub(),i.Vb(28,"button",16),i.dc("click",(function(){return n.exportAppParts()})),i.Oc(29,"Export"),i.Ub(),i.Ub()),2&t&&(i.Bb(13),i.nc("ngModel",n.exportScope)("disabled",n.lockScope),i.Bb(1),i.nc("ngForOf",n.scopeOptions),i.Bb(3),i.nc("matTooltip",n.lockScope?"Unlock":"Lock"),i.Bb(1),i.nc("ngIf",n.lockScope),i.Bb(1),i.nc("ngIf",!n.lockScope),i.Bb(5),i.nc("ngIf",n.contentInfo),i.Bb(2),i.nc("disabled",n.isExporting),i.Bb(2),i.nc("disabled",n.isExporting))},directives:[p.h,s.c,s.g,l.a,b.l,b.o,f.l,u.l,h.a,s.h,d.a,f.m,g.a,m.a,x.a,v.a],styles:[".edit-input[_ngcontent-%COMP%]{padding-bottom:8px}.mat-hint[_ngcontent-%COMP%]{font-size:12px}.content-info__title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.content-info__subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.content-info__list[_ngcontent-%COMP%]{font-size:14px;list-style-type:none}.content-info__base[_ngcontent-%COMP%]{padding:0}.content-info__item[_ngcontent-%COMP%]{border-top:1px solid #ddd;padding:2px}.option-box[_ngcontent-%COMP%]{margin:8px 0}.option-box__text[_ngcontent-%COMP%]{white-space:normal;font-size:14px}"]}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.06.00/ng-edit/export-app-parts-component.921e63e7a4070399e216.js.map