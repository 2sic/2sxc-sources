"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-f4d799"],{5016:(L,I,o)=>{o.r(I),o.d(I,{EditContentTypeFieldsComponent:()=>Vt});var l=o(1904),c=o(4844),C=o(3584),y=o(9432),i=o(604),g=o(4816),v=o(8916),x=o(6560),Y=o(211),E=o(1672),S=o(6348),f=o(5976);const F=(n,d)=>(n.push(d),n);function O(){return(0,f.i)((n,d)=>{(function G(n,d){return(0,f.i)((0,S.g)(n,d,arguments.length>=2,!1,!0))})(F,[])(n).subscribe(d)})}const M=/^[A-Za-z][A-Za-z0-9]+$/,w="Standard letters and numbers are allowed. Must start with a letter.";var W=o(692),B=o(6884),$=o(9427),H=o(3132),b=o(976),h=o(3764);const R={Boolean:{label:(0,b.u)($.m.Boolean),description:"Yes/no or true/false values"},Custom:{label:(0,b.u)($.m.Custom),description:"Use for things like gps-pickers (which writes into multiple fields) or for custom-data which serializes something exotic into the db like an array, a custom json or anything"},DateTime:{label:(0,b.u)($.m.DateTime),description:"For date, time or combined values"},Empty:{label:(0,b.u)($.m.Empty),description:"Use to structure your form"},Entity:{label:(0,b.u)($.m.Entity),description:"One or more other content-items"},Hyperlink:{label:(0,b.u)($.m.Hyperlink),description:"Hyperlink or reference to a picture / file"},Number:{label:(0,b.u)($.m.Number),description:"Any kind of number"},String:{label:(0,b.u)($.m.String),description:"Any kind of text"}};var T=o(5200),_=o(600),u=o(956),N=o(7496),K=o(6996),it=o(7008),t=o(4896),V=o(4648),ot=o(9244),J=o(9084),Q=o(4672),z=o(2536),U=o(244),at=o(8512),st=o(2164);let Z=(()=>{class n{constructor(){this.reservedNames={}}validate(e){if(!e.value)return null;const a=e.value.toLocaleLowerCase(),s=Object.keys(this.reservedNames).find(r=>r.toLocaleLowerCase()===a);return s?{reservedNames:this.reservedNames[s]}:null}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275dir=t.Sc5({type:n,selectors:[["","appReservedNames",""]],inputs:{reservedNames:["appReservedNames","reservedNames"]},features:[t.M5G([{provide:l.WM,useExisting:n,multi:!0}])]})}return n})();var j=o(5056),q=o(8752);const lt=["ngForm"];function rt(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Content Type"),t.C$Y()())}function dt(n,d){if(1&n&&(t.I0R(0,"td",27),t.OEk(1),t.C$Y()),2&n){const e=d.$implicit;t.yG2(1),t.oRS(" ",e.ContentType.Name," ")}}function ct(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Name"),t.C$Y()())}function pt(n,d){if(1&n&&(t.I0R(0,"td",27),t.OEk(1),t.C$Y()),2&n){const e=d.$implicit;t.yG2(1),t.oRS(" ",e.StaticName," ")}}function mt(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Type"),t.C$Y()())}function ut(n,d){if(1&n&&(t.I0R(0,"td",27),t.OEk(1),t.C$Y()),2&n){const e=d.$implicit;t.yG2(1),t.oRS(" ",e.Type," ")}}function ft(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Share"),t.C$Y()())}function ht(n,d){if(1&n){const e=t.KQA();t.I0R(0,"td",27)(1,"button",22),t.qCj("click",function(){const r=t.usT(e).$implicit,m=t.GaO();return t.CGJ(m.selectField(r))}),t.OEk(2,"Select"),t.C$Y()()}}function Ct(n,d){1&n&&t.wR5(0,"tr",28)}function gt(n,d){1&n&&t.wR5(0,"tr",29)}function yt(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"New Name"),t.C$Y()())}function _t(n,d){if(1&n&&(t.I0R(0,"app-field-hint",33),t.OEk(1),t.C$Y()),2&n){const e=t.GaO(3);t.E7m("isError",!0),t.yG2(1),t.cNF(e.fieldNameError)}}function vt(n,d){if(1&n&&(t.I0R(0,"app-field-hint",33),t.OEk(1),t.C$Y()),2&n){t.GaO(2);const e=t.Gew(5);t.E7m("isError",!0),t.yG2(1),t.oRS(" ",e.errors.reservedNames," ")}}function Tt(n,d){if(1&n&&t.yuY(0,_t,2,2,"app-field-hint",33)(1,vt,2,2,"app-field-hint",33),2&n){t.GaO();const e=t.Gew(5);t.C0Y(0,e.errors.pattern?0:-1),t.yG2(1),t.C0Y(1,e.errors.reservedNames?1:-1)}}function It(n,d){if(1&n){const e=t.KQA();t.I0R(0,"td",27)(1,"mat-form-field",30)(2,"mat-label"),t.OEk(3,"New Name"),t.C$Y(),t.I0R(4,"input",31,32),t.qCj("ngModelChange",function(s){const m=t.usT(e).$implicit;return t.CGJ(m.newName=s)}),t.C$Y()(),t.yuY(6,Tt,2,2),t.C$Y()}if(2&n){const e=d.$implicit,a=d.index,s=t.Gew(5),r=t.GaO();t.yG2(4),t.E7m("pattern",r.fieldNamePattern)("ngModel",e.newName)("name","StaticName"+a)("appReservedNames",r.reservedNames),t.yG2(2),t.C0Y(6,s.errors?6:-1)}}function Ft(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Source"),t.C$Y()())}function Et(n,d){if(1&n&&(t.I0R(0,"td",34),t.OEk(1),t.C$Y()),2&n){const e=d.$implicit;t.yG2(1),t.MjK(" ",e.field.ContentType.Name,"/",e.field.StaticName," (",e.field.Type,") ")}}function St(n,d){1&n&&(t.I0R(0,"th",26)(1,"b"),t.OEk(2,"Remove"),t.C$Y()())}function Ot(n,d){if(1&n){const e=t.KQA();t.I0R(0,"td",27)(1,"button",22),t.qCj("click",function(){const r=t.usT(e).$implicit,m=t.GaO();return t.CGJ(m.removeField(r))}),t.OEk(2,"Remove"),t.C$Y()()}}function bt(n,d){1&n&&t.wR5(0,"tr",28)}function Gt(n,d){1&n&&t.wR5(0,"tr",29)}let Rt=(()=>{class n extends B.C{constructor(e,a,s,r,m,A,k,P){super(),this.dialogData=e,this.dialogRef=a,this.contentTypesFieldsService=s,this.snackBar=r,this.featuresService=m,this.dialog=A,this.viewContainerRef=k,this.changeDetectorRef=P,this.hostClass="dialog-component",this.displayedShareableFieldsColumns=["contentType","name","type","share"],this.displayedSelectedFieldsColumns=["newName","source","remove"],this.shareableFields=new u._c([]),this.selectedFields=new u._c([]),this.fieldNamePattern=M,this.fieldNameError=w,this.saving$=new c.g(!1),this.dialogRef.disableClose=!0,this.subscription.add(this.dialogRef.backdropClick().subscribe(()=>{(this.form.dirty||this.selectedFields.data.length>0)&&!confirm("You have unsaved changes. Are you sure you want to close this dialog?")||this.closeDialog()}))}ngOnInit(){this.subscription.add(this.contentTypesFieldsService.getShareableFields().subscribe(e=>{this.shareableFields.data=e})),this.subscription.add(this.contentTypesFieldsService.getReservedNames().subscribe(e=>{const a={};this.dialogData.existingFields.forEach(s=>{a[s.StaticName]="Field with this name already exists"}),this.reservedNames={...e,...a}}))}ngOnDestroy(){this.saving$.complete(),super.ngOnDestroy()}selectField(e){const a=this.selectedFields.data;a.push({newName:e.StaticName,field:e}),this.selectedFields.data=a}removeField(e){const a=this.selectedFields.data;a.splice(a.indexOf(e),1),this.selectedFields.data=a}save(){this.featuresService.isEnabled$(K.y.FieldShareConfigManagement).pipe((0,N.U)(1)).subscribe(e=>{e?(this.saving$.next(!0),this.snackBar.open("Saving..."),(0,v.of)(...this.selectedFields.data).pipe((0,x.I)(a=>!!a.newName),(0,Y.m)(a=>this.contentTypesFieldsService.addInheritedField(this.dialogData.contentType.Id,a.field.ContentType.Id,a.field.Guid,a.newName).pipe((0,E.a)(s=>(0,v.of)(null)))),O()).subscribe(a=>{this.saving$.next(!1),this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})):it.C.openDialog(this.dialog,K.y.FieldShareConfigManagement,this.viewContainerRef,this.changeDetectorRef)})}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(a){return new(a||n)(t.GI1(_.sR),t.GI1(_.yI),t.GI1(h.Ck),t.GI1(V.yS),t.GI1(ot.E),t.GI1(_.qW),t.GI1(t.y8U),t.GI1(t.kD9))};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-add-sharing-fields"]],viewQuery:function(a,s){if(1&a&&t.CC$(lt,5,l.SC),2&a){let r;t.wto(r=t.Gqi())&&(s.form=r.first)}},hostVars:1,hostBindings:function(a,s){2&a&&t.SoX("className",s.hostClass)},features:[t.eg9],decls:50,vars:16,consts:[[1,"eav-dialog","eav-no-scrollbar"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],[1,"eav-tables-div"],[1,"eav-table-div-left"],["mat-table","",1,"eav-fields-table",3,"dataSource"],["matColumnDef","contentType"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","eav-table-cell",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","share"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"eav-table-div-right"],["ngForm","ngForm"],["matColumnDef","newName"],["matColumnDef","source"],["mat-cell","","style","word-break:break-all;","class","eav-table-cell",4,"matCellDef"],["matColumnDef","remove"],["align","end"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","type","submit","color","accent",3,"disabled","click"],[1,"eav-button-feature"],[1,"eav-button-feature-icon",3,"featureNameId"],["mat-header-cell",""],["mat-cell","",1,"eav-table-cell"],["mat-header-row",""],["mat-row",""],["color","accent",1,"eav-form-field"],["matInput","",3,"pattern","ngModel","name","appReservedNames","ngModelChange"],["newName","ngModel"],[3,"isError"],["mat-cell","",1,"eav-table-cell",2,"word-break","break-all"]],template:function(a,s){if(1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2),t.OEk(3),t.wVc(4,"translate"),t.C$Y()(),t.I0R(5,"div",3)(6,"span"),t.OEk(7),t.wVc(8,"translate"),t.C$Y(),t.I0R(9,"div",4)(10,"mat-card",5)(11,"table",6),t.SAx(12,7),t.yuY(13,rt,3,0,"th",8)(14,dt,2,1,"td",9),t.k70(),t.SAx(15,10),t.yuY(16,ct,3,0,"th",8)(17,pt,2,1,"td",9),t.k70(),t.SAx(18,11),t.yuY(19,mt,3,0,"th",8)(20,ut,2,1,"td",9),t.k70(),t.SAx(21,12),t.yuY(22,ft,3,0,"th",8)(23,ht,3,0,"td",9),t.k70(),t.yuY(24,Ct,1,0,"tr",13)(25,gt,1,0,"tr",14),t.C$Y()(),t.I0R(26,"mat-card",15)(27,"form",null,16)(29,"table",6),t.SAx(30,17),t.yuY(31,yt,3,0,"th",8)(32,It,7,5,"td",9),t.k70(),t.SAx(33,18),t.yuY(34,Ft,3,0,"th",8)(35,Et,2,3,"td",19),t.k70(),t.SAx(36,20),t.yuY(37,St,3,0,"th",8)(38,Ot,3,0,"td",9),t.k70(),t.yuY(39,bt,1,0,"tr",13)(40,Gt,1,0,"tr",14),t.C$Y()()()(),t.I0R(41,"mat-dialog-actions",21)(42,"button",22),t.qCj("click",function(){return s.closeDialog()}),t.OEk(43,"Cancel"),t.C$Y(),t.I0R(44,"button",23),t.qCj("click",function(){return s.save()}),t.wVc(45,"async"),t.I0R(46,"div",24)(47,"span"),t.OEk(48,"Save"),t.C$Y(),t.wR5(49,"app-feature-icon-indicator",25),t.C$Y()()()()()),2&a){const r=t.Gew(28);t.yG2(3),t.oRS(" ",t.kDX(4,10,"SharingOrInheriting.TitleAddFieldsWhichInherit")," "),t.yG2(4),t.cNF(t.kDX(8,12,"SharingOrInheriting.PickFieldsToInheritFrom")),t.yG2(4),t.E7m("dataSource",s.shareableFields),t.yG2(13),t.E7m("matHeaderRowDef",s.displayedShareableFieldsColumns),t.yG2(1),t.E7m("matRowDefColumns",s.displayedShareableFieldsColumns),t.yG2(4),t.E7m("dataSource",s.selectedFields),t.yG2(10),t.E7m("matHeaderRowDef",s.displayedSelectedFieldsColumns),t.yG2(1),t.E7m("matRowDefColumns",s.displayedSelectedFieldsColumns),t.yG2(4),t.E7m("disabled",!r.form.valid||0==s.selectedFields.data.length||t.kDX(45,14,s.saving$)),t.yG2(5),t.E7m("featureNameId","FieldShareConfigManagement")}},dependencies:[J.o,_.Yp,Q.Gw,l.sz,l.ot,l.ue,l.u,l.E1,l._G,l.SC,z.yi,U.Up,U.w5,u.wL,u.ie,u.aG,u.Af,u.uc,u.gx,u.qC,u.cX,u.yC,u._I,at.SM,st.A,Z,j.a,q.sD],styles:[".eav-tables-div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-top:4px;padding-top:4px;height:400px}.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-left[_ngcontent-%COMP%]{width:50%;height:100%;margin-right:4px;overflow-y:auto;border:1px solid rgba(0,0,0,.1)}.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-right[_ngcontent-%COMP%]{width:50%;height:100%;margin-left:4px;overflow-y:auto;border:1px solid rgba(0,0,0,.1)}.eav-tables-div[_ngcontent-%COMP%]   .eav-table-div-right[_ngcontent-%COMP%]   .eav-form-field[_ngcontent-%COMP%]{max-width:150px}.eav-tables-div[_ngcontent-%COMP%]   .eav-table-cell[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.1)}.eav-tables-div[_ngcontent-%COMP%]   .mat-column-source[_ngcontent-%COMP%]{min-width:150px}.eav-button-feature[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.eav-button-feature[_ngcontent-%COMP%]   .eav-button-feature-icon[_ngcontent-%COMP%]{margin-left:4px;margin-top:6px}"]})}return n})();var Dt=o(5204),$t=o(2564),xt=o(2328),tt=o(7872),Mt=o(6176);const Yt=["ngForm"];function Nt(n,d){1&n&&t.OEk(0," Fields ")}function kt(n,d){1&n&&t.OEk(0," Add Fields ")}function wt(n,d){1&n&&t.OEk(0," Edit Field ")}function At(n,d){if(1&n&&(t.I0R(0,"app-field-hint",18),t.OEk(1),t.C$Y()),2&n){const e=t.GaO(4);t.E7m("isError",!0),t.yG2(1),t.cNF(e.fieldNameError)}}function Pt(n,d){if(1&n&&(t.I0R(0,"app-field-hint",18),t.OEk(1),t.C$Y()),2&n){t.GaO(2);const e=t.Gew(6);t.E7m("isError",!0),t.yG2(1),t.oRS(" ",e.errors.reservedNames," ")}}function Lt(n,d){if(1&n&&t.yuY(0,At,2,2,"app-field-hint",18)(1,Pt,2,2,"app-field-hint",18),2&n){t.GaO();const e=t.Gew(6);t.C0Y(0,e.errors.pattern?0:-1),t.yG2(1),t.C0Y(1,e.errors.reservedNames?1:-1)}}function Bt(n,d){if(1&n&&(t.I0R(0,"mat-option",19)(1,"mat-icon",16),t.OEk(2),t.C$Y(),t.I0R(3,"span"),t.OEk(4),t.C$Y()()),2&n){const e=d.$implicit;t.E7m("value",e.name),t.yG2(2),t.cNF(e.icon),t.yG2(2),t.cNF(e.label)}}function Ht(n,d){if(1&n&&(t.I0R(0,"mat-icon",17),t.OEk(1),t.C$Y()),2&n){const e=t.GaO().$implicit;t.yG2(1),t.cNF(e.icon)}}const Kt=n=>({"eav-input-obsolete":n});function Ut(n,d){if(1&n&&(t.I0R(0,"mat-option",20)(1,"div")(2,"span"),t.OEk(3),t.C$Y(),t.yuY(4,Ht,2,1,"mat-icon",21),t.C$Y()()),2&n){const e=d.$implicit;t.E7m("value",e.inputType)("ngClass",t.S45(4,Kt,e.isObsolete)),t.yG2(3),t.cNF(e.label),t.yG2(1),t.C0Y(4,e.icon?4:-1)}}function Wt(n,d){if(1&n){const e=t.KQA();t.I0R(0,"div",10)(1,"div",11)(2,"mat-form-field",12)(3,"mat-label"),t.OEk(4,"Name"),t.C$Y(),t.I0R(5,"input",13,14),t.qCj("ngModelChange",function(s){const m=t.usT(e).$implicit;return t.CGJ(m.StaticName=s)}),t.C$Y()(),t.yuY(7,Lt,2,2),t.C$Y(),t.I0R(8,"div",11)(9,"mat-form-field",12)(10,"mat-label"),t.OEk(11,"Data Type"),t.C$Y(),t.I0R(12,"mat-select",15),t.qCj("selectionChange",function(){const r=t.usT(e).$index,m=t.GaO(2);return m.filterInputTypeOptions(r),m.resetInputType(r),t.CGJ(m.calculateHints(r))})("ngModelChange",function(s){const m=t.usT(e).$implicit;return t.CGJ(m.Type=s)}),t.I0R(13,"mat-select-trigger")(14,"mat-icon",16),t.OEk(15),t.C$Y(),t.I0R(16,"span"),t.OEk(17),t.C$Y()(),t.c53(18,Bt,5,3,"mat-option",19,t.oxv),t.C$Y()(),t.I0R(20,"app-field-hint"),t.OEk(21),t.C$Y()(),t.I0R(22,"div",11)(23,"mat-form-field",12)(24,"mat-label"),t.OEk(25,"Input Type"),t.C$Y(),t.I0R(26,"mat-select",15),t.qCj("selectionChange",function(){const r=t.usT(e).$index,m=t.GaO(2);return t.CGJ(m.calculateHints(r))})("ngModelChange",function(s){const m=t.usT(e).$implicit;return t.CGJ(m.InputType=s)}),t.I0R(27,"mat-select-trigger")(28,"span"),t.OEk(29),t.C$Y(),t.I0R(30,"mat-icon",17),t.OEk(31),t.C$Y()(),t.c53(32,Ut,5,6,"mat-option",20,t.oxv),t.C$Y()(),t.I0R(34,"app-field-hint"),t.OEk(35),t.C$Y()()()}if(2&n){const e=d.$implicit,a=d.$index,s=t.Gew(6),r=t.GaO(2);let m,A;t.yG2(5),t.E7m("pattern",r.fieldNamePattern)("appReservedNames",r.reservedNames)("ngModel",e.StaticName)("name","StaticName"+a)("disabled","inputType"===r.editMode),t.yG2(2),t.C0Y(7,s.touched&&s.errors?7:-1),t.yG2(5),t.E7m("ngModel",e.Type)("name","Type"+a)("disabled",null!=r.editMode),t.yG2(3),t.cNF(r.findIcon(e.Type)),t.yG2(2),t.cNF(r.findLabel(e.Type)),t.yG2(1),t.oho(r.dataTypes),t.yG2(3),t.cNF(r.dataTypeHints[a]),t.yG2(5),t.E7m("ngModel",e.InputType)("name","InputType"+a)("disabled","name"===r.editMode),t.yG2(3),t.cNF(null==(m=r.getInputTypeOption(e.InputType))?null:m.label),t.yG2(2),t.cNF(null==(A=r.getInputTypeOption(e.InputType))?null:A.icon),t.yG2(1),t.oho(r.filteredInputTypeOptions[a]),t.yG2(3),t.cNF(r.inputTypeHints[a])}}function jt(n,d){if(1&n){const e=t.KQA();t.I0R(0,"button",8),t.qCj("click",function(){t.usT(e);const s=t.GaO(2);return t.CGJ(s.addSharedField())}),t.OEk(1),t.wVc(2,"translate"),t.C$Y()}2&n&&(t.yG2(1),t.cNF(t.kDX(2,1,"SharingOrInheriting.AddSharedField")))}function Xt(n,d){if(1&n){const e=t.KQA();t.I0R(0,"form",3,4),t.qCj("ngSubmit",function(){t.usT(e);const s=t.GaO();return t.CGJ(s.save())}),t.I0R(2,"div",5),t.c53(3,Wt,36,18,"div",22,t.oxv),t.C$Y(),t.I0R(5,"mat-dialog-actions"),t.yuY(6,jt,3,3,"button",6),t.wVc(7,"async"),t.wR5(8,"div",7),t.I0R(9,"button",8),t.qCj("click",function(){t.usT(e);const s=t.GaO();return t.CGJ(s.closeDialog())}),t.OEk(10,"Cancel"),t.C$Y(),t.I0R(11,"button",9),t.wVc(12,"async"),t.OEk(13," Save "),t.C$Y()()()}if(2&n){const e=t.Gew(1),a=t.GaO();t.yG2(3),t.oho(a.fields),t.yG2(3),t.C0Y(6,t.kDX(7,2,a.debugEnabled$)?6:-1),t.yG2(5),t.E7m("disabled",!e.form.valid||t.kDX(12,4,a.saving$))}}let Vt=(()=>{class n extends B.C{constructor(e,a,s,r,m,A,k){super(),this.dialogRef=e,this.route=a,this.contentTypesService=s,this.contentTypesFieldsService=r,this.globalConfigService=m,this.snackBar=A,this.dialog=k,this.hostClass="dialog-component",this.fields=[],this.existingFields=[],this.filteredInputTypeOptions=[],this.dataTypeHints=[],this.inputTypeHints=[],this.fieldNamePattern=M,this.fieldNameError=w,this.findIcon=b.i,this.findLabel=b.u,this.loading$=new c.g(!0),this.saving$=new c.g(!1),this.debugEnabled$=this.globalConfigService.getDebugEnabled$(),this.dialogRef.disableClose=!0,this.subscription.add(this.dialogRef.backdropClick().subscribe(P=>{this.form.dirty&&!confirm("You have unsaved changes. Are you sure you want to close this dialog?")||this.closeDialog()}))}ngOnInit(){this.editMode=this.route.snapshot.paramMap.get("editMode");const e=this.route.snapshot.paramMap.get("contentTypeStaticName"),a=this.contentTypesService.retrieveContentType(e).pipe((0,C.o)()),s=a.pipe((0,y.G)(k=>this.contentTypesFieldsService.getFields(k.StaticName))),r=this.contentTypesFieldsService.typeListRetrieve().pipe((0,i.k)(k=>function p(n){const d=[];for(const e of n)d.push({name:e,label:R[e].label,icon:(0,b.i)(e),description:R[e].description});return d}(k))),m=this.contentTypesFieldsService.getInputTypesList(),A=this.contentTypesFieldsService.getReservedNames();(0,g.y)([a,s,r,m,A]).subscribe(([k,P,X,Jt,Qt])=>{this.contentType=k,this.dataTypes=X,this.inputTypeOptions=Jt,this.existingFields=P;const et={};if(P.forEach(D=>{et[D.StaticName]="Field with this name already exists"}),this.reservedNames={...Qt,...et},null!=this.editMode){const D=this.route.snapshot.paramMap.get("id")?parseInt(this.route.snapshot.paramMap.get("id"),10):null,nt=P.find(zt=>zt.Id===D);"name"===this.editMode&&delete this.reservedNames[nt.StaticName],this.fields.push(nt)}else for(let D=1;D<=8;D++)this.fields.push({Id:0,Type:$.m.String,InputType:H.y.StringDefault,StaticName:"",IsTitle:0===P.length,SortOrder:P.length+D});for(let D=0;D<this.fields.length;D++)this.filterInputTypeOptions(D),this.calculateHints(D);this.loading$.next(!1)})}ngOnDestroy(){this.loading$.complete(),this.saving$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}filterInputTypeOptions(e){this.filteredInputTypeOptions[e]=this.inputTypeOptions.filter(a=>a.dataType===this.fields[e].Type.toLocaleLowerCase())}resetInputType(e){let a=this.fields[e].Type.toLocaleLowerCase()+H.y.DefaultSuffix;this.filteredInputTypeOptions[e].some(r=>r.inputType===a)||(a=this.filteredInputTypeOptions[e][0].inputType),this.fields[e].InputType=a}calculateHints(e){const a=this.dataTypes.find(r=>r.name===this.fields[e].Type),s=this.inputTypeOptions.find(r=>r.inputType===this.fields[e].InputType);this.dataTypeHints[e]=a?.description??"",this.inputTypeHints[e]=s?.isObsolete?`OBSOLETE - ${s.obsoleteMessage}`:s?.description??""}getInputTypeOption(e){return this.inputTypeOptions.find(a=>a.inputType===e)}addSharedField(){this.dialog.open(Rt,{autoFocus:!1,width:"1600px",data:{contentType:this.contentType,existingFields:this.existingFields}})}save(){if(this.saving$.next(!0),this.snackBar.open("Saving..."),null!=this.editMode){const e=this.fields[0];"name"===this.editMode?this.contentTypesFieldsService.rename(e.Id,this.contentType.Id,e.StaticName).subscribe(()=>{this.saving$.next(!1),this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()}):"inputType"===this.editMode&&this.contentTypesFieldsService.updateInputType(e.Id,e.StaticName,e.InputType).subscribe(()=>{this.saving$.next(!1),this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})}else(0,v.of)(...this.fields).pipe((0,x.I)(e=>!!e.StaticName),(0,Y.m)(e=>this.contentTypesFieldsService.add(e,this.contentType.Id).pipe((0,E.a)(a=>(0,v.of)(null)))),O()).subscribe(e=>{this.saving$.next(!1),this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})}static#t=this.\u0275fac=function(a){return new(a||n)(t.GI1(_.yI),t.GI1(Dt.gV),t.GI1(W.X),t.GI1(h.Ck),t.GI1(T.Sq),t.GI1(V.yS),t.GI1(_.qW))};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-edit-content-type-fields"]],viewQuery:function(a,s){if(1&a&&t.CC$(Yt,5,l.SC),2&a){let r;t.wto(r=t.Gqi())&&(s.form=r.first)}},hostVars:1,hostBindings:function(a,s){2&a&&t.SoX("className",s.hostClass)},features:[t.eg9],decls:8,vars:6,consts:[["appToggleDebug","",1,"eav-dialog","eav-no-scrollbar"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[3,"ngSubmit"],["ngForm","ngForm"],[1,"eav-dialog-content"],["mat-raised-button","","type","button"],[1,"spacer"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","type","submit","color","accent",3,"disabled"],[1,"eav-row-container"],[1,"eav-edit-input"],["color","accent",1,"eav-form-field"],["matInput","",3,"pattern","appReservedNames","ngModel","name","disabled","ngModelChange"],["staticName","ngModel"],[3,"ngModel","name","disabled","selectionChange","ngModelChange"],[1,"eav-type-icon"],[1,"eav-input-icon"],[3,"isError"],[3,"value"],[3,"value","ngClass"],["class","eav-input-icon"],["class","eav-row-container"]],template:function(a,s){1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2),t.yuY(3,Nt,1,0)(4,kt,1,0)(5,wt,1,0),t.C$Y()(),t.yuY(6,Xt,14,6,"form"),t.wVc(7,"async"),t.C$Y()),2&a&&(t.yG2(3),t.C0Y(3,void 0===s.editMode?3:-1),t.yG2(1),t.C0Y(4,null===s.editMode?4:-1),t.yG2(1),t.C0Y(5,null!=s.editMode?5:-1),t.yG2(1),t.C0Y(6,!1===t.kDX(7,4,s.loading$)?6:-1))},dependencies:[j.QF,J.o,$t.U,_.Yp,Q.Gw,xt.qL,l.sz,l.ot,l.ue,l.u,l.E1,l._G,l.SC,z.yi,U.Up,U.w5,tt.kX,tt.gl,Mt.I5,Z,j.a,q.sD],styles:[".eav-row-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.eav-edit-input[_ngcontent-%COMP%]{padding-bottom:8px;width:30%}.eav-type-icon[_ngcontent-%COMP%]{width:inherit;height:inherit;margin-right:8px;font-size:inherit;vertical-align:top;line-height:inherit}.eav-input-icon[_ngcontent-%COMP%]{width:inherit;height:inherit;margin-left:8px;font-size:inherit;vertical-align:top;line-height:inherit}.eav-input-obsolete[_ngcontent-%COMP%]{-webkit-text-decoration:black line-through;text-decoration:black line-through;color:#696969}"]})}return n})()},2164:(L,I,o)=>{o.d(I,{A:()=>E});var l=o(7008),c=o(4896),C=o(600),y=o(9244),i=o(2328),g=o(8200),v=o(5056),x=o(8752);function Y(S,f){1&S&&(c.I0R(0,"mat-icon",0),c.wVc(1,"translate"),c.OEk(2,"diamond"),c.C$Y()),2&S&&c.E7m("tippy",c.kDX(1,1,"Features.NotActivated"))}let E=(()=>{class S extends l.C{constructor(G,F,O,M){super(G,F,M,O)}static#t=this.\u0275fac=function(F){return new(F||S)(c.GI1(C.qW),c.GI1(c.y8U),c.GI1(y.E),c.GI1(c.kD9))};static#e=this.\u0275cmp=c.In1({type:S,selectors:[["app-feature-icon-indicator"]],features:[c.eg9],decls:2,vars:3,consts:[[3,"tippy"]],template:function(F,O){1&F&&(c.yuY(0,Y,3,3,"mat-icon",0),c.wVc(1,"async")),2&F&&c.C0Y(0,c.kDX(1,1,O.show$)?0:-1)},dependencies:[i.qL,g.Y,v.a,x.sD]})}return S})()},6996:(L,I,o)=>{o.d(I,{y:()=>l});const l={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},7008:(L,I,o)=>{o.d(I,{C:()=>b});var l=o(600),c=o(5876),C=o(604),y=o(2556),i=o(4896),g=o(4648),v=o(3572),x=o(4672),Y=o(2328),E=o(8512),S=o(8200),f=o(5056),G=o(48),F=o(8752);function O(h,R){if(1&h){const p=i.KQA();i.I0R(0,"div",1)(1,"div",2),i.OEk(2,"ID:"),i.C$Y(),i.I0R(3,"div",8)(4,"span",9),i.qCj("click",function(){const u=i.usT(p),N=i.GaO(2);return i.CGJ(N.copyToClipboard(u))}),i.OEk(5),i.C$Y()()()}2&h&&(i.yG2(4),i.E7m("tippy",R),i.yG2(1),i.cNF(R))}function M(h,R){if(1&h){const p=i.KQA();i.I0R(0,"button",10),i.qCj("click",function(){const u=i.usT(p),N=i.GaO(2);return i.CGJ(N.findOutMore(u))}),i.I0R(1,"mat-icon"),i.OEk(2,"open_in_new"),i.C$Y(),i.OEk(3),i.wVc(4,"translate"),i.C$Y()}2&h&&(i.yG2(3),i.oRS(" ",i.kDX(4,1,"Features.FindOutMore")," "))}function w(h,R){if(1&h){const p=i.KQA();i.I0R(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),i.OEk(3),i.C$Y()(),i.I0R(4,"mat-card-content"),i.wR5(5,"p",0),i.wVc(6,"safeHtml"),i.I0R(7,"div",1)(8,"div",2),i.OEk(9),i.wVc(10,"translate"),i.C$Y(),i.I0R(11,"div",3)(12,"span"),i.OEk(13),i.wVc(14,"translate"),i.C$Y()()(),i.yuY(15,O,6,2,"div",4),i.C$Y(),i.I0R(16,"mat-card-actions",5),i.yuY(17,M,5,3,"button",6),i.I0R(18,"button",7),i.qCj("click",function(){i.usT(p);const _=i.GaO();return i.CGJ(_.closeDialog())}),i.OEk(19),i.wVc(20,"translate"),i.C$Y()()()}if(2&h){let p;i.yG2(3),i.cNF(R.feature.Name),i.yG2(2),i.E7m("innerHtml",i.kDX(6,7,R.feature.Description),i.E3n),i.yG2(4),i.oRS("",i.kDX(10,9,"Features.Status"),":"),i.yG2(4),i.cNF(i.kDX(14,11,R.feature.IsEnabled?"Features.Active":"Features.NotActive")),i.yG2(2),i.C0Y(15,(p=R.feature.NameId)?15:-1,p),i.yG2(2),i.C0Y(17,(p=R.feature.Link)?17:-1,p),i.yG2(2),i.oRS(" ",i.kDX(20,13,"Features.Close")," ")}}let W=(()=>{class h{constructor(p,T,_,u){this.dialogData=p,this.dialogRef=T,this.snackBar=_,this.featureDetailService=u}ngOnInit(){this.viewModel$=(0,c.E)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,C.k)(([p])=>({feature:p})))}copyToClipboard(p){(0,y.y)(p),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(p){window.open(p,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(T){return new(T||h)(i.GI1(l.sR),i.GI1(l.yI),i.GI1(g.yS),i.GI1(v.I))};static#e=this.\u0275cmp=i.In1({type:h,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["class","eav-info-row"],["align","end"],["mat-raised-button","","color","accent","class","eav-card-action-button"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"]],template:function(T,_){if(1&T&&(i.yuY(0,w,21,15,"mat-card"),i.wVc(1,"async")),2&T){let u;i.C0Y(0,(u=i.kDX(1,1,_.viewModel$))?0:-1,u)}},dependencies:[x.Gw,Y.qL,E.SM,E.W0,E.WK,E.Uc,E.gp,S.Y,f.a,G.K,F.sD]})}return h})();var B=o(4844),$=o(9432),H=o(9244);let b=(()=>{class h{set featureNameId(p){this.featureNameId$.next(p)}set showIf(p){this.showIf$.next(1==p)}constructor(p,T,_,u){this.dialog=p,this.viewContainerRef=T,this.changeDetectorRef=_,this.featuresService=u,this.featureNameId$=new B.g(null),this.showIf$=new B.g(!1),this.feature$=this.featureNameId$.pipe((0,$.G)(N=>this.featuresService.get$(N))),this.show$=(0,c.E)([this.feature$,this.showIf$]).pipe((0,C.k)(([N,K])=>K==(N?.IsEnabled??!1)))}openDialog(){h.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(p,T,_,u){p.open(W,{autoFocus:!1,data:T,viewContainerRef:_,width:"400px"}),u.markForCheck()}static#t=this.\u0275fac=function(T){return new(T||h)(i.GI1(l.qW),i.GI1(i.y8U),i.GI1(i.kD9),i.GI1(H.E))};static#e=this.\u0275dir=i.Sc5({type:h,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return h})()},9084:(L,I,o)=>{o.d(I,{o:()=>S});var l=o(4896),c=o(5056),C=o(244);function y(f,G){1&f&&l.C_f(0)}function i(f,G){if(1&f&&(l.I0R(0,"mat-hint"),l.yuY(1,y,1,0,"ng-container",2),l.C$Y()),2&f){l.GaO();const F=l.Gew(4);l.yG2(1),l.E7m("ngTemplateOutlet",F)}}function g(f,G){1&f&&l.C_f(0)}function v(f,G){if(1&f&&(l.I0R(0,"mat-error"),l.yuY(1,g,1,0,"ng-container",2),l.C$Y()),2&f){l.GaO();const F=l.Gew(4);l.yG2(1),l.E7m("ngTemplateOutlet",F)}}function x(f,G){1&f&&l._Xx(0)}const Y=f=>({"hint-box__short":f}),E=["*"];let S=(()=>{class f{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static#t=this.\u0275fac=function(O){return new(O||f)};static#e=this.\u0275cmp=l.In1({type:f,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:E,decls:5,vars:4,consts:[[1,"hint-box",3,"ngClass","click"],["content",""],[4,"ngTemplateOutlet"]],template:function(O,M){if(1&O&&(l.kPM(),l.I0R(0,"div",0),l.qCj("click",function(){return M.toggleIsShort()}),l.yuY(1,i,2,1)(2,v,2,1),l.C$Y(),l.yuY(3,x,1,0,"ng-template",null,1,l.gJz)),2&O){let w;l.E7m("ngClass",l.S45(2,Y,M.isShort)),l.yG2(1),l.C0Y(1,!1===(w=M.isError)?1:!0===w?2:-1)}},dependencies:[c.QF,c.XV,C.MX,C.wJ],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return f})()},2564:(L,I,o)=>{o.d(I,{U:()=>C});var l=o(5200),c=o(4896);let C=(()=>{class y{constructor(g){this.globalConfigService=g}onClick(g){(navigator.platform.match("Mac")?g.metaKey:g.ctrlKey)&&g.shiftKey&&g.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())}static#t=this.\u0275fac=function(v){return new(v||y)(c.GI1(l.Sq))};static#e=this.\u0275dir=c.Sc5({type:y,selectors:[["","appToggleDebug",""]],hostBindings:function(v,x){1&v&&c.qCj("click",function(E){return x.onClick(E)})}})}return y})()},2556:(L,I,o)=>{function l(c){const C=document.createElement("textarea");C.value=c,C.setAttribute("readonly",""),C.style.position="absolute",C.style.left="-9999px",document.body.appendChild(C);const y=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);C.select(),document.execCommand("copy"),document.body.removeChild(C),y&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(y))}o.d(I,{y:()=>l})},48:(L,I,o)=>{o.d(I,{K:()=>C});var l=o(4896),c=o(168);let C=(()=>{class y{constructor(g){this.sanitizer=g}transform(g){return this.sanitizer.bypassSecurityTrustHtml(g)}static#t=this.\u0275fac=function(v){return new(v||y)(l.GI1(c.mI,16))};static#e=this.\u0275pipe=l.UTH({name:"safeHtml",type:y,pure:!0})}return y})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.03.01/dist/ng-edit/projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-f4d799.9847a8e63029d64c.js.map