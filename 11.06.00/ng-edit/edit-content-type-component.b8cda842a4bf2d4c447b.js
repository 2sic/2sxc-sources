(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{YLeX:function(t,e,n){"use strict";n.r(e);var o=n("D57K"),c=n("LiEJ"),i=n("3riI"),a=n("pN2L"),s=n("Jg5f"),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o.d)(e,t),e}(function(){return function(){}}()),r=n("o9tz"),b=/(^[A-Za-z][A-Za-z0-9]+$)|(^@[A-Za-z][A-Za-z0-9-]*$)/,l=n("1C3z"),d=n("BLjT"),u=n("5/c3"),h=n("S36y"),f=n("2pW/"),m=n("8AiQ"),g=n("ZSGP"),y=n("hOvr"),v=n("TDrE"),O=n("FONI"),S=n("LuBX"),T=n("OeRG"),U=n("9HSk"),V=n("Qc/f"),$=n("r4gC"),k=n("Uk43"),B=n("Zfm5");function N(t,e){1&t&&(l.Vb(0,"app-field-hint",24),l.Oc(1,"This field is required"),l.Ub()),2&t&&l.nc("isError",!0)}function w(t,e){if(1&t&&(l.Vb(0,"app-field-hint",24),l.Oc(1),l.Ub()),2&t){var n=l.hc(4);l.nc("isError",!0),l.Bb(1),l.Pc(n.contentTypeNameError)}}function M(t,e){if(1&t&&(l.Tb(0),l.Mc(1,N,2,1,"app-field-hint",23),l.Mc(2,w,2,2,"app-field-hint",23),l.Sb()),2&t){l.hc();var n=l.Bc(8);l.Bb(1),l.nc("ngIf",n.errors.required),l.Bb(1),l.nc("ngIf",n.errors.pattern)}}function I(t,e){if(1&t&&(l.Vb(0,"mat-option",25),l.Oc(1),l.Ub()),2&t){var n=e.$implicit;l.nc("value",n.value),l.Bb(1),l.Qc(" ",n.name," ")}}function C(t,e){if(1&t&&(l.Vb(0,"div",7),l.Vb(1,"h3"),l.Oc(2,"Shared Content Type (Ghost)"),l.Ub(),l.Vb(3,"p"),l.Oc(4,"Note: this can't be edited in the UI, for now if you really know what you're doing, do it in the DB"),l.Ub(),l.Vb(5,"p"),l.Oc(6),l.Ub(),l.Ub()),2&t){var n=l.hc(2).ngIf;l.Bb(6),l.Qc("Uses Type Definition of: ",n.contentType.SharedDefId,"")}}function j(t,e){if(1&t){var n=l.Wb();l.Vb(0,"form",4,5),l.dc("ngSubmit",(function(){return l.Dc(n),l.hc(2).save()})),l.Vb(2,"div",6),l.Vb(3,"div",7),l.Vb(4,"mat-form-field",8),l.Vb(5,"mat-label"),l.Oc(6,"Name"),l.Ub(),l.Vb(7,"input",9,10),l.dc("ngModelChange",(function(t){return l.Dc(n),l.hc(2).changeContentTypeName(t)})),l.Ub(),l.Ub(),l.Mc(9,M,3,2,"ng-container",2),l.Ub(),l.Vb(10,"mat-accordion"),l.Vb(11,"mat-expansion-panel",11),l.Vb(12,"mat-expansion-panel-header"),l.Vb(13,"mat-panel-title"),l.Oc(14,"Advanced"),l.Ub(),l.Qb(15,"mat-panel-description"),l.Ub(),l.Vb(16,"div",7),l.Vb(17,"mat-form-field",8),l.Vb(18,"mat-label"),l.Oc(19,"Scope"),l.Ub(),l.Vb(20,"mat-select",12),l.dc("ngModelChange",(function(t){return l.Dc(n),l.hc(2).changeScope(t)})),l.Mc(21,I,2,2,"mat-option",13),l.Vb(22,"mat-option",14),l.Oc(23,"Other..."),l.Ub(),l.Ub(),l.Vb(24,"button",15),l.Vb(25,"mat-icon",16),l.dc("click",(function(t){return l.Dc(n),l.hc(2).unlockScope(t)})),l.Oc(26),l.Ub(),l.Ub(),l.Ub(),l.Vb(27,"app-field-hint"),l.Oc(28," The scope should almost never be changed - "),l.Vb(29,"a",17),l.Oc(30,"see help"),l.Ub(),l.Ub(),l.Ub(),l.Vb(31,"div",7),l.Vb(32,"mat-form-field",8),l.Vb(33,"mat-label"),l.Oc(34,"Static Name"),l.Ub(),l.Qb(35,"input",18),l.Ub(),l.Ub(),l.Mc(36,C,7,1,"div",19),l.Ub(),l.Ub(),l.Ub(),l.Vb(37,"div",20),l.Vb(38,"button",21),l.dc("click",(function(){return l.Dc(n),l.hc(2).closeDialog()})),l.Oc(39,"Cancel"),l.Ub(),l.Vb(40,"button",22),l.Oc(41," Save "),l.Ub(),l.Ub(),l.Ub()}if(2&t){var o=l.Bc(1),c=l.Bc(8),i=l.hc().ngIf,a=l.hc();l.Bb(7),l.nc("pattern",a.contentTypeNamePattern)("ngModel",i.contentType.Name),l.Bb(2),l.nc("ngIf",c.touched&&c.errors),l.Bb(1),l.nc("@.disabled",i.disableAnimation),l.Bb(10),l.nc("ngModel",i.contentType.Scope)("disabled",i.lockScope),l.Bb(1),l.nc("ngForOf",i.scopeOptions),l.Bb(3),l.nc("matTooltip",i.lockScope?"Unlock":"Lock"),l.Bb(2),l.Qc(" ",i.lockScope?"lock":"lock_open"," "),l.Bb(9),l.nc("ngModel",i.contentType.StaticName),l.Bb(1),l.nc("ngIf",i.contentType.SharedDefId),l.Bb(4),l.nc("disabled",!o.form.valid||i.loading)}}function x(t,e){if(1&t&&(l.Tb(0),l.Mc(1,j,42,12,"form",3),l.Sb()),2&t){var n=e.ngIf;l.Bb(1),l.nc("ngIf",n.contentType)}}n.d(e,"EditContentTypeComponent",(function(){return D}));var D=function(){function t(t,e,n,a){this.dialogRef=t,this.route=e,this.contentTypesService=n,this.snackBar=a,this.hostClass="dialog-component",this.id=parseInt(this.route.snapshot.paramMap.get("id"),10),this.contentTypeNamePattern=b,this.contentTypeNameError="Standard letters and numbers are allowed. Must start with a letter.",this.contentType$=new c.a(null),this.lockScope$=new c.a(!0),this.scopeOptions$=new c.a(null),this.disableAnimation$=new c.a(!0),this.loading$=new c.a(!1),this.templateVars$=Object(i.a)([this.contentType$,this.lockScope$,this.scopeOptions$,this.disableAnimation$,this.loading$]).pipe(Object(s.a)((function(t){var e=Object(o.f)(t,5);return{contentType:e[0],lockScope:e[1],scopeOptions:e[2],disableAnimation:e[3],loading:e[4]}}))),this.scope=this.route.snapshot.paramMap.get("scope")}return t.prototype.ngOnInit=function(){var t=this,e=this.id?this.contentTypesService.retrieveContentTypes(this.scope).pipe(Object(s.a)((function(e){var n=e.find((function(e){return e.Id===t.id}));return Object(o.a)(Object(o.a)({},n),{ChangeStaticName:!1,NewStaticName:n.StaticName})}))):Object(a.a)(Object(o.a)(Object(o.a)({},new p),{StaticName:"",Name:"",Description:"",Scope:this.scope,ChangeStaticName:!1,NewStaticName:""})),n=this.contentTypesService.getScopes();Object(i.a)([e,n]).subscribe((function(e){var n=Object(o.f)(e,2),c=n[1];t.contentType$.next(n[0]),t.scopeOptions$.next(c)}))},t.prototype.ngOnDestroy=function(){this.contentType$.complete(),this.lockScope$.complete(),this.scopeOptions$.complete(),this.disableAnimation$.complete(),this.loading$.complete()},t.prototype.ngAfterViewInit=function(){var t=this;setTimeout((function(){return t.disableAnimation$.next(!1)}))},t.prototype.changeContentTypeName=function(t){this.contentType$.next(Object(o.a)(Object(o.a)({},this.contentType$.value),{Name:t}))},t.prototype.changeScope=function(t){if("Other"===t)if(t=prompt("This is an advanced feature to show content-types of another scope. Don't use this if you don't know what you're doing, as content-types of other scopes are usually hidden for a good reason.")){if(!this.scopeOptions$.value.find((function(e){return e.value===t}))){var e={name:t,value:t};this.scopeOptions$.next(Object(o.g)(this.scopeOptions$.value,[e]))}}else t=r.a.scopes.default.value;this.contentType$.next(Object(o.a)(Object(o.a)({},this.contentType$.value),{Scope:t}))},t.prototype.unlockScope=function(t){t.stopPropagation(),this.lockScope$.next(!this.lockScope$.value),this.lockScope$&&this.contentType$.next(Object(o.a)(Object(o.a)({},this.contentType$.value),{Scope:this.scope}))},t.prototype.save=function(){var t=this;this.loading$.next(!0),this.snackBar.open("Saving..."),this.contentTypesService.save(this.contentType$.value).subscribe((function(e){t.loading$.next(!1),t.snackBar.open("Saved",null,{duration:2e3}),t.closeDialog()})),document.activeElement instanceof HTMLElement&&document.activeElement.blur()},t.prototype.closeDialog=function(){this.dialogRef.close()},t.\u0275fac=function(e){return new(e||t)(l.Pb(d.g),l.Pb(u.a),l.Pb(h.a),l.Pb(f.b))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-edit-content-type"]],hostVars:1,hostBindings:function(t,e){2&t&&l.Yb("className",e.hostClass)},decls:5,vars:4,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],[4,"ngIf"],["class","dialog-form",3,"ngSubmit",4,"ngIf"],[1,"dialog-form",3,"ngSubmit"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],[1,"edit-input"],["appearance","standard","color","accent"],["matInput","","type","text","required","","name","Name",3,"pattern","ngModel","ngModelChange"],["name","ngModel"],["expanded","false"],["name","Scope",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","Other"],["mat-icon-button","","type","button","matSuffix","",3,"matTooltip"],[3,"click"],["href","http://2sxc.org/help?tag=scope","target","_blank","appClickStopPropagation",""],["matInput","","type","text","name","StaticName","disabled","",3,"ngModel"],["class","edit-input",4,"ngIf"],[1,"dialog-form-actions"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","type","submit","color","accent",3,"disabled"],[3,"isError",4,"ngIf"],[3,"isError"],[3,"value"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Oc(2),l.Ub(),l.Ub(),l.Mc(3,x,2,1,"ng-container",2),l.ic(4,"async")),2&t&&(l.Bb(2),l.Pc(e.id?"Edit Content Type":"New Content Type"),l.Bb(1),l.nc("ngIf",l.jc(4,2,e.templateVars$)))},directives:[d.h,m.m,g.u,g.m,g.n,y.c,y.g,v.b,g.b,g.s,g.q,g.l,g.o,O.a,O.c,O.e,O.f,O.d,S.a,m.l,T.l,U.a,y.h,V.a,$.a,k.a,B.a],pipes:[m.b],styles:[".edit-input[_ngcontent-%COMP%]{padding-bottom:8px}.mat-hint[_ngcontent-%COMP%]{font-size:12px}.mat-accordion[_ngcontent-%COMP%]{padding-bottom:8px;display:block}"],changeDetection:0}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.06.00/ng-edit/edit-content-type-component.b8cda842a4bf2d4c447b.js.map