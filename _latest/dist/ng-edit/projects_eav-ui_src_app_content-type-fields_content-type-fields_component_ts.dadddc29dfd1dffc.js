"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts"],{8500:(Y,f,s)=>{s.r(f),s.d(f,{ContentTypeFieldsComponent:()=>At});var p=s(4844),d=s(5876),u=s(604),g=s(8916),o=s(4816),h=s(692),_=s(7028),F=s(4720),D=s(2816),S=s(1743),C=s(9224),E=s(5396),A=s(9427),G=s(3132),k=s(6884),t=s(4896),x=s(8200),M=s(2328),P=s(6176),N=s(7848),j=s(32);function H(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",10),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.openMetadata())}),t.I0R(1,"mat-icon",11),t.OEk(2,"local_offer"),t.C$Y()()}if(2&i){const e=t.GaO();t.yG2(1),t.E7m("matBadge",e.metadataCount)("matBadgeHidden",!e.metadataCount)}}function m(i,l){if(1&i&&(t.I0R(0,"div",12)(1,"mat-icon",13),t.OEk(2," local_offer "),t.C$Y()()),2&i){const e=t.GaO();t.yG2(1),t.E7m("matBadge",e.metadataCount)("matBadgeHidden",!e.metadataCount)}}function R(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",14),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.shareOrInherit())}),t.I0R(1,"mat-icon",15),t.OEk(2),t.C$Y()()}if(2&i){const e=t.GaO();t.E7m("tippy",e.shareText()),t.yG2(2),t.oRS(" ",e.shareOrInheritIcon()," ")}}function c(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",16),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.shareOrInherit())}),t.I0R(1,"mat-icon",17),t.OEk(2," share "),t.C$Y()()}if(2&i){const e=t.GaO();t.E7m("tippy",e.shareText())}}function y(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",18),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.openPermissions())}),t.I0R(1,"mat-icon",11),t.OEk(2," person "),t.C$Y()()}if(2&i){const e=t.GaO();t.yG2(1),t.E7m("matBadge",e.field.Permissions.Count)("matBadgeHidden",!e.field.Permissions.Count)}}function O(i,l){if(1&i&&(t.I0R(0,"div",12)(1,"mat-icon",13),t.OEk(2," person "),t.C$Y()()),2&i){const e=t.GaO();t.yG2(1),t.E7m("matBadge",e.field.Permissions.Count)("matBadgeHidden",!e.field.Permissions.Count)}}function v(i,l){if(1&i){const e=t.KQA();t.I0R(0,"button",19),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.rename())}),t.I0R(1,"mat-icon"),t.OEk(2,"text_fields"),t.C$Y(),t.I0R(3,"span"),t.OEk(4,"Rename"),t.C$Y()(),t.I0R(5,"button",19),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.deleteField())}),t.I0R(6,"mat-icon"),t.OEk(7,"delete"),t.C$Y(),t.I0R(8,"span"),t.OEk(9,"Delete"),t.C$Y()()}if(2&i){const e=t.GaO();t.E7m("disabled",e.field.EditInfo.DisableRename),t.yG2(5),t.E7m("disabled",e.field.EditInfo.DisableDelete||e.field.IsTitle)}}let $=(()=>{class i extends k.C{constructor(){super()}ngOnDestroy(){super.ngOnDestroy()}agInit(e){this.params=e,this.field=this.params.data,this.metadataCount=this.field.Metadata?Object.keys(this.field.Metadata).filter(a=>"merged"!==a).length:0,this.enablePermissions=this.field.InputType===G.y.StringWysiwyg||this.field.Type===A.m.Hyperlink}shareText(){const e="click to configure sharing",a=this.field.SysSettings;return a?a.Share?"shared enabled as "+this.field.Guid:a.InheritMetadataOf?"inherits "+a.InheritMetadataOf:e:e}shareOrInheritIcon(){const e=this.field.SysSettings;return e?e.Share?"share":e.InheritMetadataOf?"adjust":"":""}refresh(e){return!0}openMetadata(){this.params.onOpenMetadata(this.field)}rename(){this.params.onRename(this.field)}openPermissions(){this.params.onOpenPermissions(this.field)}deleteField(){this.params.onDelete(this.field)}shareOrInherit(){this.params.onShareOrInherit(this.field)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields-actions"]],features:[t.eg9],decls:13,vars:7,consts:[[1,"actions-component"],["class","eav-grid-action-button highlight","matRipple","","tippy","Metadata"],["class","eav-grid-action-button disabled"],["class","eav-grid-action-button highlight","matRipple","",3,"tippy"],["class","eav-grid-action-button disabled eav-hover-icon-div","matRipple","",3,"tippy"],["class","eav-grid-action-button highlight","matRipple","","tippy","Permissions"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["menu","matMenu"],["matMenuContent",""],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],[1,"eav-grid-action-button","disabled"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matRipple","",1,"eav-grid-action-button","highlight",3,"tippy","click"],["aria-hidden","false"],["matRipple","",1,"eav-grid-action-button","disabled","eav-hover-icon-div",3,"tippy","click"],["aria-hidden","false",1,"eav-hover-icon","disabled"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight",3,"click"],["mat-menu-item","",3,"disabled","click"]],template:function(a,n){if(1&a&&(t.I0R(0,"div",0),t.yuY(1,H,3,2,"div",1)(2,m,3,2,"div",2)(3,R,3,2,"div",3)(4,c,3,1,"div",4)(5,y,3,2,"div",5)(6,O,3,2,"div",2),t.I0R(7,"div",6)(8,"mat-icon"),t.OEk(9,"more_horiz"),t.C$Y()()(),t.I0R(10,"mat-menu",7,8),t.yuY(12,v,10,2,"ng-template",9),t.C$Y()),2&a){const r=t.Gew(11);t.yG2(1),t.C0Y(1,n.field.EditInfo.DisableMetadata?-1:1),t.yG2(1),t.C0Y(2,n.field.EditInfo.DisableMetadata?2:-1),t.yG2(1),t.C0Y(3,""!=n.shareOrInheritIcon()?3:-1),t.yG2(1),t.C0Y(4,""==n.shareOrInheritIcon()?4:-1),t.yG2(1),t.C0Y(5,!n.field.EditInfo.DisableEdit&&n.enablePermissions?5:-1),t.yG2(1),t.C0Y(6,n.field.EditInfo.DisableEdit||!n.enablePermissions?6:-1),t.yG2(1),t.E7m("matMenuTriggerFor",r)}},dependencies:[x.Y,M.qL,P.UZ,N.aM,N.OQ,N.M5,N.yG,j.S],styles:[".eav-hover-icon[_ngcontent-%COMP%]{display:none}.eav-hover-icon-div[_ngcontent-%COMP%]:hover   .eav-hover-icon[_ngcontent-%COMP%]{display:block}"]})}return i})();function J(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",2),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.changeInputType())}),t.I0R(1,"div",3),t.OEk(2),t.C$Y(),t.I0R(3,"div",4)(4,"mat-icon"),t.OEk(5,"arrow_drop_down"),t.C$Y()()()}if(2&i){const e=t.GaO();t.yG2(2),t.cNF(e.value)}}function z(i,l){if(1&i&&(t.I0R(0,"div",5)(1,"div",6),t.OEk(2),t.C$Y(),t.I0R(3,"div",7)(4,"mat-icon"),t.OEk(5,"arrow_drop_down"),t.C$Y()()()),2&i){const e=t.GaO();t.yG2(2),t.cNF(e.value)}}let Z=(()=>{class i{agInit(e){this.params=e,this.value=e.value,this.field=e.data}refresh(e){return!0}changeInputType(){this.params.onChangeInputType(this.field)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields-input-type"]],decls:2,vars:2,consts:[["matRipple","","class","input-component highlight"],["class","input-component disabled"],["matRipple","",1,"input-component","highlight",3,"click"],[1,"text"],[1,"eav-grid-action-button"],[1,"input-component","disabled"],[1,"text","disabled"],[1,"eav-grid-action-button","disabled"]],template:function(a,n){1&a&&t.yuY(0,J,6,1,"div",0)(1,z,6,1,"div",1),2&a&&(t.C0Y(0,n.field.EditInfo.DisableEdit?-1:0),t.yG2(1),t.C0Y(1,n.field.EditInfo.DisableEdit?1:-1))},dependencies:[M.qL,P.UZ]})}return i})();function q(i,l){1&i&&(t.I0R(0,"mat-icon",1),t.OEk(1,"functions"),t.C$Y())}function tt(i,l){1&i&&(t.I0R(0,"mat-icon",2),t.OEk(1,"mobiledata_off"),t.C$Y())}let et=(()=>{class i{agInit(e){const a=e.data;this.hasFormulas=a.HasFormulas,this.isEphemeral=a.IsEphemeral}refresh(e){return!0}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields-special"]],decls:3,vars:2,consts:[[1,"icon-container"],["tippy","Has Formulas"],["tippy","Ephemeral / Temporary, won't save"]],template:function(a,n){1&a&&(t.I0R(0,"div",0),t.yuY(1,q,2,0,"mat-icon",1)(2,tt,2,0,"mat-icon",2),t.C$Y()),2&a&&(t.yG2(1),t.C0Y(1,n.hasFormulas?1:-1),t.yG2(1),t.C0Y(2,n.isEphemeral?2:-1))},dependencies:[x.Y,M.qL]})}return i})();function nt(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",3),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.setTitle())}),t.I0R(1,"mat-icon"),t.OEk(2),t.C$Y()()}if(2&i){const e=t.GaO();t.yG2(2),t.cNF(e.isTitle?"star":"star_outline")}}function it(i,l){if(1&i&&(t.I0R(0,"div",4)(1,"mat-icon"),t.OEk(2),t.C$Y()()),2&i){const e=t.GaO();t.yG2(2),t.cNF(e.isTitle?"star":"star_outline")}}let at=(()=>{class i{agInit(e){this.params=e,this.isTitle=e.value,this.field=e.data}refresh(e){return!0}setTitle(){this.params.onSetTitle(this.field)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields-title"]],decls:3,vars:2,consts:[[1,"actions-component"],["class","eav-grid-action-button highlight","matRipple","","tippy","Use as title field"],["class","eav-grid-action-button disabled"],["matRipple","","tippy","Use as title field",1,"eav-grid-action-button","highlight",3,"click"],[1,"eav-grid-action-button","disabled"]],template:function(a,n){1&a&&(t.I0R(0,"div",0),t.yuY(1,nt,3,1,"div",1)(2,it,3,1,"div",2),t.C$Y()),2&a&&(t.yG2(1),t.C0Y(1,n.field.EditInfo.ReadOnly?-1:1),t.yG2(1),t.C0Y(2,n.field.EditInfo.ReadOnly?2:-1))},dependencies:[x.Y,M.qL,P.UZ]})}return i})();var ot=s(976);let st=(()=>{class i{agInit(e){this.value=e.value,this.icon=(0,ot.i)(this.value)}refresh(e){return!0}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields-type"]],decls:3,vars:2,consts:[[1,"icon-container",3,"tippy"]],template:function(a,n){1&a&&(t.I0R(0,"div",0)(1,"mat-icon"),t.OEk(2),t.C$Y()()),2&a&&(t.E7m("tippy",n.value),t.yG2(2),t.cNF(n.icon))},dependencies:[x.Y,M.qL]})}return i})();var V=s(3764),K=s(8996),lt=s(7496),B=s(600),I=function(i){return i[i.None=0]="None",i[i.Sharing=1]="Sharing",i[i.Inheriting=2]="Inheriting",i}(I||{}),rt=s(7008),X=s(6996),dt=s(9244),U=s(5056),W=s(4672),b=s(956),ct=s(8512),pt=s(2164),ut=s(8752);function ht(i,l){if(1&i){const e=t.KQA();t.I0R(0,"button",6),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.closeDialog())}),t.I0R(1,"mat-icon"),t.OEk(2,"close"),t.C$Y()()}}function mt(i,l){if(1&i&&(t.I0R(0,"div"),t.OEk(1),t.wVc(2,"translate"),t.C$Y()),2&i){const e=t.GaO();t.yG2(1),t.CAO("",t.kDX(2,2,e.message)," ",e.dialogData.Guid,"")}}function gt(i,l){if(1&i&&(t.I0R(0,"div"),t.OEk(1),t.wVc(2,"translate"),t.C$Y()),2&i){const e=t.GaO();t.yG2(1),t.CAO("",t.kDX(2,2,e.message)," ",e.dialogData.SysSettings.InheritMetadataOf,"")}}function Ct(i,l){if(1&i){const e=t.KQA();t.I0R(0,"button",10),t.qCj("click",function(){t.usT(e);const n=t.GaO(2);return t.CGJ(n.chooseShare())}),t.OEk(1,"Share"),t.C$Y()}}function ft(i,l){if(1&i){const e=t.KQA();t.I0R(0,"button",11),t.qCj("click",function(){t.usT(e);const n=t.GaO(2);return t.CGJ(n.chooseInherit())}),t.OEk(1,"Inherit"),t.C$Y()}}function _t(i,l){1&i&&(t.I0R(0,"span"),t.OEk(1,"This will share the field definition"),t.C$Y())}function yt(i,l){1&i&&(t.I0R(0,"th",21)(1,"b"),t.OEk(2,"Content Type"),t.C$Y()())}function vt(i,l){if(1&i&&(t.I0R(0,"td",22),t.OEk(1),t.C$Y()),2&i){const e=l.$implicit;t.yG2(1),t.oRS(" ",e.ContentType.Name," ")}}function It(i,l){1&i&&(t.I0R(0,"th",21)(1,"b"),t.OEk(2,"Name"),t.C$Y()())}function Tt(i,l){if(1&i&&(t.I0R(0,"td",22),t.OEk(1),t.C$Y()),2&i){const e=l.$implicit;t.yG2(1),t.oRS(" ",e.StaticName," ")}}function Ot(i,l){1&i&&(t.I0R(0,"th",21)(1,"b"),t.OEk(2,"Type"),t.C$Y()())}function Dt(i,l){if(1&i&&(t.I0R(0,"td",22),t.OEk(1),t.C$Y()),2&i){const e=l.$implicit;t.yG2(1),t.oRS(" ",e.Type," ")}}function St(i,l){1&i&&t.wR5(0,"tr",23)}const Rt=i=>({"eav-selected-row":i});function Et(i,l){if(1&i){const e=t.KQA();t.I0R(0,"tr",24),t.qCj("click",function(){const r=t.usT(e).$implicit,T=t.GaO(3);return t.CGJ(T.inheritField(r))}),t.C$Y()}if(2&i){const e=l.$implicit,a=t.GaO(3);t.E7m("ngClass",t.S45(1,Rt,a.guid===e.Guid))}}function Gt(i,l){if(1&i&&(t.I0R(0,"mat-card",12)(1,"table",13),t.SAx(2,14),t.yuY(3,yt,3,0,"th",15)(4,vt,2,1,"td",16),t.k70(),t.SAx(5,17),t.yuY(6,It,3,0,"th",15)(7,Tt,2,1,"td",16),t.k70(),t.SAx(8,18),t.yuY(9,Ot,3,0,"th",15)(10,Dt,2,1,"td",16),t.k70(),t.yuY(11,St,1,0,"tr",19)(12,Et,1,3,"tr",20),t.C$Y()()),2&i){const e=t.GaO(2);t.yG2(1),t.E7m("dataSource",l.shareableFields),t.yG2(10),t.E7m("matHeaderRowDef",e.displayedShareableFieldsColumns),t.yG2(1),t.E7m("matRowDefColumns",e.displayedShareableFieldsColumns)}}function bt(i,l){if(1&i&&(t.I0R(0,"div"),t.yuY(1,Ct,2,0,"button",7)(2,ft,2,0,"button",8)(3,_t,2,0,"span")(4,Gt,13,3,"mat-card",9),t.wVc(5,"async"),t.C$Y()),2&i){const e=t.GaO();let a;t.yG2(1),t.C0Y(1,e.state==e.sharingOrInheriting.None?1:-1),t.yG2(1),t.C0Y(2,e.state==e.sharingOrInheriting.None?2:-1),t.yG2(1),t.C0Y(3,e.state==e.sharingOrInheriting.Sharing?3:-1),t.yG2(1),t.C0Y(4,(a=t.kDX(5,4,e.state==e.sharingOrInheriting.Inheriting&&e.viewModel$))?4:-1,a)}}function Ft(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",25)(1,"button",10),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.closeDialog())}),t.OEk(2,"Cancel"),t.C$Y(),t.I0R(3,"button",26),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.save())}),t.I0R(4,"div",27)(5,"span"),t.OEk(6,"Save"),t.C$Y(),t.wR5(7,"app-feature-icon-indicator",28),t.C$Y()()()}if(2&i){const e=t.GaO();t.yG2(3),t.E7m("disabled",e.isSaveDisabled),t.yG2(4),t.E7m("featureNameId","FieldShareConfigManagement")}}let Mt=(()=>{class i extends k.C{constructor(e,a,n,r,T,L,w){super(),this.dialogData=e,this.dialogRef=a,this.contentTypesFieldsService=n,this.featuresService=r,this.dialog=T,this.viewContainerRef=L,this.changeDetectorRef=w,this.displayedShareableFieldsColumns=["contentType","name","type"],this.state=I.None,this.initialState=I.None,this.sharingOrInheriting=I,this.guid=null,this.isSaveDisabled=!0,this.shareableFields$=new p.g(void 0)}ngOnInit(){if(this.initialState=this.dialogData.SysSettings&&(this.dialogData.SysSettings.Share||this.dialogData.SysSettings.InheritMetadataOf)?this.dialogData.SysSettings.Share?I.Sharing:I.Inheriting:I.None,this.initialState===I.None){this.title="SharingOrInheriting.TitleNone";const e=this.contentTypesFieldsService.getShareableFieldsFor(this.dialogData.AttributeId);this.viewModel$=(0,d.E)([e]).pipe((0,u.k)(([a])=>(this.shareableFields$.next(a),{shareableFields:a})))}else this.initialState===I.Sharing?(this.title="SharingOrInheriting.TitleSharing",this.message="SharingOrInheriting.MessageSharing"):this.initialState===I.Inheriting&&(this.title="SharingOrInheriting.TitleInheriting",this.message="SharingOrInheriting.MessageInheriting")}ngOnDestroy(){super.ngOnDestroy()}chooseShare(){this.guid=null,this.state=I.Sharing,this.isSaveDisabled=!1}chooseInherit(){this.guid=null,this.state=I.Inheriting,this.isSaveDisabled=!0}inheritField(e){this.guid=e.Guid,this.isSaveDisabled=!1}save(){this.featuresService.isEnabled$(X.y.FieldShareConfigManagement).pipe((0,lt.U)(1)).subscribe(e=>{e?this.state==I.Sharing?this.subscription.add(this.contentTypesFieldsService.share(this.dialogData.Id).subscribe(()=>this.dialogRef.close())):this.state==I.Inheriting&&this.subscription.add(this.contentTypesFieldsService.inherit(this.dialogData.Id,this.guid).subscribe(()=>this.dialogRef.close())):rt.C.openDialog(this.dialog,X.y.FieldShareConfigManagement,this.viewContainerRef,this.changeDetectorRef)})}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(a){return new(a||i)(t.GI1(B.sR),t.GI1(B.yI),t.GI1(V.Ck),t.GI1(dt.E),t.GI1(B.qW),t.GI1(t.y8U),t.GI1(t.kD9))};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-share-or-inherit-dialog"]],features:[t.eg9],decls:11,vars:8,consts:[[1,"eav-dialog","eav-no-scrollbar"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog"],[1,"eav-dialog-content"],["class","eav-dialog-actions"],["mat-icon-button","","tippy","Close dialog",3,"click"],["mat-raised-button","","type","button","class","eav-dialog-action-button"],["mat-raised-button","","type","button"],["class","eav-table-div"],["mat-raised-button","","type","button",1,"eav-dialog-action-button",3,"click"],["mat-raised-button","","type","button",3,"click"],[1,"eav-table-div"],["mat-table","",1,"mat-elevation-z8","eav-fields-table",3,"dataSource"],["matColumnDef","contentType"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"],[1,"eav-dialog-actions"],["mat-raised-button","","type","submit","color","accent",1,"eav-dialog-action-button",3,"disabled","click"],[1,"eav-button-feature"],[1,"eav-button-feature-icon",3,"featureNameId"]],template:function(a,n){1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2),t.OEk(3),t.wVc(4,"translate"),t.C$Y(),t.yuY(5,ht,3,0,"button",3),t.C$Y(),t.I0R(6,"div",4),t.yuY(7,mt,3,4,"div")(8,gt,3,4,"div")(9,bt,6,6,"div"),t.C$Y(),t.yuY(10,Ft,8,2,"div",5),t.C$Y()),2&a&&(t.yG2(3),t.oRS(" ",t.kDX(4,6,n.title)," "),t.yG2(2),t.C0Y(5,n.initialState!=n.sharingOrInheriting.None?5:-1),t.yG2(2),t.C0Y(7,n.initialState==n.sharingOrInheriting.Sharing?7:-1),t.yG2(1),t.C0Y(8,n.initialState==n.sharingOrInheriting.Inheriting?8:-1),t.yG2(1),t.C0Y(9,n.initialState==n.sharingOrInheriting.None?9:-1),t.yG2(1),t.C0Y(10,n.initialState==n.sharingOrInheriting.None?10:-1))},dependencies:[U.QF,x.Y,W.Gw,W.um,M.qL,b.wL,b.ie,b.aG,b.Af,b.uc,b.gx,b.qC,b.cX,b.yC,b._I,ct.SM,pt.A,U.a,ut.sD],styles:[".eav-table-div[_ngcontent-%COMP%]{margin-top:8px;width:100%;max-height:400px;overflow-y:auto;border:1px solid rgba(0,0,0,.1)}.eav-table-div[_ngcontent-%COMP%]   .eav-selected-row[_ngcontent-%COMP%]{background-color:#00000026}.eav-dialog-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;padding:8px 0}.eav-dialog-action-button[_ngcontent-%COMP%]{margin-right:8px}.eav-dialog-action-button[_ngcontent-%COMP%]   .eav-button-feature[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.eav-dialog-action-button[_ngcontent-%COMP%]   .eav-button-feature[_ngcontent-%COMP%]   .eav-button-feature-icon[_ngcontent-%COMP%]{margin-left:4px;margin-top:6px}"]})}return i})();var Q=s(5204),$t=s(4648),Yt=s(2564),kt=s(4072);const xt=(i,l)=>({"grid-sorted":i,"grid-filtered":l});function wt(i,l){if(1&i){const e=t.KQA();t.I0R(0,"div",1)(1,"div",2)(2,"div",3),t.OEk(3),t.C$Y(),t.I0R(4,"button",4),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.closeDialog())}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"div",5),t.wR5(8,"router-outlet"),t.I0R(9,"div",6)(10,"ag-grid-angular",7),t.qCj("rowDragEnter",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onRowDragEnter(n))})("rowDragEnd",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onRowDragEnd(n))})("rowDragMove",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onRowDragMove(n))})("gridReady",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onGridReady(n))})("sortChanged",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onSortChanged(n))})("filterChanged",function(n){t.usT(e);const r=t.GaO();return t.CGJ(r.onFilterChanged(n))}),t.C$Y()()(),t.I0R(11,"mat-dialog-actions",8)(12,"button",9),t.qCj("click",function(){t.usT(e);const n=t.GaO();return t.CGJ(n.add())}),t.I0R(13,"mat-icon"),t.OEk(14,"add"),t.C$Y()()()()}if(2&i){const e=t.GaO();t.yG2(3),t.oRS(" ",(null==l.contentType?null:l.contentType.Label)||(null==l.contentType?null:l.contentType.Name)," Fields "),t.yG2(7),t.E7m("rowData",l.fields)("gridOptions",e.gridOptions)("ngClass",t.IBC(5,xt,e.sortApplied,e.filterApplied)),t.yG2(2),t.E7m("disabled",null==l.contentType||l.contentType.EditInfo.ReadOnly)}}let At=(()=>{class i extends D.K{constructor(e,a,n,r,T,L,w){super(e,a),this.router=e,this.route=a,this.dialogRef=n,this.contentTypesService=r,this.contentTypesFieldsService=T,this.snackBar=L,this.dialog=w,this.contentType$=new p.g(void 0),this.fields$=new p.g(void 0),this.gridOptions=this.buildGridOptions(),this.sortApplied=!1,this.filterApplied=!1,this.rowDragSuppressed=!1,this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName")}ngOnInit(){this.fetchFields(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchFields()})),this.viewModel$=(0,d.E)([this.contentType$,this.fields$]).pipe((0,u.k)(([e,a])=>({contentType:e,fields:a})))}ngOnDestroy(){this.contentType$.complete(),this.fields$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}onGridReady(e){this.gridApi=e.api,this.columnApi=e.columnApi}onRowDragEnter(e){this.gridApi.setEnableCellTextSelection(!1)}onRowDragEnd(e){this.gridApi.setSuppressRowDrag(!0);const a=this.fields$.value.map(n=>n.Id);this.contentTypesFieldsService.reOrder(a,this.contentType$.value).subscribe(()=>{this.fetchFields(()=>{this.gridApi.setEnableCellTextSelection(!0),this.gridApi.setSuppressRowDrag(!1)})})}onRowDragMove(e){const a=e.node,n=e.overNode;if(n&&a!==n){const L=n.data,w=[...this.fields$.value],Pt=w.indexOf(a.data),Nt=w.indexOf(L);this.moveInArray(w,Pt,Nt),this.fields$.next(w),this.gridApi.clearFocusedCell()}}moveInArray(e,a,n){const r=e[a];e.splice(a,1),e.splice(n,0,r)}onSortChanged(e){const a=this.columnApi.getColumnState();this.sortApplied=a.some(n=>null!=n.sort),this.suppressRowDrag()}onFilterChanged(e){const a=this.gridApi.getFilterModel(),n=Object.keys(a);this.filterApplied=n.length>0,this.suppressRowDrag()}suppressRowDrag(){const e=this.sortApplied||this.filterApplied;e&&!this.rowDragSuppressed?(this.rowDragSuppressed=!0,this.gridApi.setSuppressRowDrag(!0)):!e&&this.rowDragSuppressed&&(this.rowDragSuppressed=!1,this.gridApi.setSuppressRowDrag(!1))}add(){this.router.navigate([`add/${this.contentTypeStaticName}`],{relativeTo:this.route})}nameCellRenderer(e){const a=e.data,n=a.InputType;if(K.O.endsPreviousGroup(n))return e.value;let r=!1;for(const T of this.fields$.value)if(K.O.isGroupStart(n))r=!0;else if(K.O.isGroupEnd(n))r=!1;else if(T.StaticName===a.StaticName)break;return r?`<span class="is-in-group">${e.value}</span>`:e.value}fetchFields(e){const a=null==this.contentType$.value?this.contentTypesService.retrieveContentType(this.contentTypeStaticName):(0,g.of)(this.contentType$.value),n=this.contentTypesFieldsService.getFields(this.contentTypeStaticName);(0,o.y)([a,n]).subscribe(([r,T])=>{this.contentType$.next(r),this.fields$.next(T),e?.()})}editFieldMetadata(e){if(e.SysSettings?.InheritMetadataOf){if(!Object.keys(e.ConfigTypes).length)return void this.snackBar.open("This field inherits all configuration so there is nothing to edit.",null,{duration:3e3});this.snackBar.open("This field inherits some configuration. Edit will only show configuration which is not inherited.",null,{duration:5e3})}e.SysSettings?.Share&&this.snackBar.open("This field is shared, so changing it will affect all other fields inheriting it.",null,{duration:5e3});const a={items:Object.keys(e.ConfigTypes).map(r=>this.createItemDefinition(e,r))},n=(0,E.K)(a);this.router.navigate([`edit/${n}`],{relativeTo:this.route})}createItemDefinition(e,a){const n=a.replace("@",""),r=("@"+a).replace("@@","@"),T=e.Metadata[n];return null!=T?{EntityId:T.Id}:{ContentTypeName:r,For:{Target:C._K.metadata.attribute.target,TargetType:C._K.metadata.attribute.targetType,Number:e.Id},Prefill:{Name:e.StaticName}}}setTitle(e){this.snackBar.open("Setting title..."),this.contentTypesFieldsService.setTitle(e,this.contentType$.value).subscribe(()=>{this.snackBar.open("Title set",null,{duration:2e3}),this.fetchFields()})}changeInputType(e){this.router.navigate([`update/${this.contentTypeStaticName}/${e.Id}/inputType`],{relativeTo:this.route})}rename(e){this.router.navigate([`update/${this.contentTypeStaticName}/${e.Id}/name`],{relativeTo:this.route})}delete(e){confirm(`Are you sure you want to delete '${e.StaticName}' (${e.Id})?`)&&(this.snackBar.open("Deleting..."),this.contentTypesFieldsService.delete(e,this.contentType$.value).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchFields()}))}openPermissions(e){this.router.navigate([F.N.getUrlAttribute(e.Id)],{relativeTo:this.route})}openMetadata(e){const a=_.K.getUrlAttribute(e.Id,`Metadata for Field: ${e.StaticName} (${e.Id})`);this.router.navigate([a],{relativeTo:this.route})}shareOrInherit(e){this.dialog.open(Mt,{autoFocus:!1,width:"800px",data:e}).afterClosed().subscribe(()=>this.fetchFields())}buildGridOptions(){return{...S.A,getRowClass(a){const n=a.data,r=[];return n.EditInfo.DisableSort&&r.push("disable-row-drag"),K.O.isGroupStart(n.InputType)&&r.push("group-start-row"),K.O.isGroupEnd(n.InputType)&&r.push("group-end-row"),r},columnDefs:[{rowDrag:!0,width:18,cellClass:"no-select no-padding no-outline".split(" ")},{field:"Title",width:42,cellClass:"secondary-action no-padding no-outline".split(" "),valueGetter:a=>a.data.IsTitle,cellRenderer:at,cellRendererParams:{onSetTitle:n=>this.setTitle(n)}},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,filter:"agTextColumnFilter",onCellClicked:a=>{this.editFieldMetadata(a.data)},cellRenderer:a=>this.nameCellRenderer(a),valueGetter:a=>a.data.StaticName},{field:"Type",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:a=>a.data.Type,cellRenderer:st},{headerName:"Input",field:"InputType",width:160,cellClass:a=>(a.data.EditInfo.DisableEdit?"no-outline no-padding":"secondary-action no-padding").split(" "),sortable:!0,filter:"agTextColumnFilter",valueGetter:a=>{const n=a.data;return n.InputType.substring(n.InputType.indexOf("-")+1)},cellRenderer:Z,cellRendererParams:{onChangeInputType:n=>this.changeInputType(n)}},{field:"Label",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:a=>a.data.Metadata?.All?.Name},{field:"Special",width:66,headerClass:"dense",cellClass:"no-outline",cellRenderer:et},{field:"Notes",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:a=>a.data.Metadata?.All?.Notes},{width:162,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:$,cellRendererParams:{onRename:n=>this.rename(n),onDelete:n=>this.delete(n),onOpenPermissions:n=>this.openPermissions(n),onOpenMetadata:n=>this.openMetadata(n),onShareOrInherit:n=>this.shareOrInherit(n)}}]}}static#t=this.\u0275fac=function(a){return new(a||i)(t.GI1(Q.E5),t.GI1(Q.gV),t.GI1(B.yI),t.GI1(h.X),t.GI1(V.Ck),t.GI1($t.yS),t.GI1(B.qW))};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-content-type-fields"]],features:[t.eg9],decls:2,vars:3,consts:[["class","eav-dialog nav-component-wrapper","appToggleDebug",""],["appToggleDebug","",1,"eav-dialog","nav-component-wrapper"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content","nav-component-wrapper"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions","ngClass","rowDragEnter","rowDragEnd","rowDragMove","gridReady","sortChanged","filterChanged"],["align","end"],["mat-fab","","mat-elevation-z24","","tippy","Add fields",1,"grid-fab",3,"disabled","click"]],template:function(a,n){if(1&a&&(t.yuY(0,wt,15,8,"div",0),t.wVc(1,"async")),2&a){let r;t.C0Y(0,(r=t.kDX(1,1,n.viewModel$))?0:-1,r)}},dependencies:[U.QF,Q.cP,Yt.U,x.Y,B.Yp,W.um,W.uw,M.qL,kt.U5,U.a]})}return i})()},2164:(Y,f,s)=>{s.d(f,{A:()=>S});var p=s(7008),d=s(4896),u=s(600),g=s(9244),o=s(2328),h=s(8200),_=s(5056),F=s(8752);function D(C,E){1&C&&(d.I0R(0,"mat-icon",0),d.wVc(1,"translate"),d.OEk(2,"diamond"),d.C$Y()),2&C&&d.E7m("tippy",d.kDX(1,1,"Features.NotActivated"))}let S=(()=>{class C extends p.C{constructor(A,G,k,t){super(A,G,t,k)}static#t=this.\u0275fac=function(G){return new(G||C)(d.GI1(u.qW),d.GI1(d.y8U),d.GI1(g.E),d.GI1(d.kD9))};static#e=this.\u0275cmp=d.In1({type:C,selectors:[["app-feature-icon-indicator"]],features:[d.eg9],decls:2,vars:3,consts:[[3,"tippy"]],template:function(G,k){1&G&&(d.yuY(0,D,3,3,"mat-icon",0),d.wVc(1,"async")),2&G&&d.C0Y(0,d.kDX(1,1,k.show$)?0:-1)},dependencies:[o.qL,h.Y,_.a,F.sD]})}return C})()},6996:(Y,f,s)=>{s.d(f,{y:()=>p});const p={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},7008:(Y,f,s)=>{s.d(f,{C:()=>H});var p=s(600),d=s(5876),u=s(604),g=s(2556),o=s(4896),h=s(4648),_=s(3572),F=s(4672),D=s(2328),S=s(8512),C=s(8200),E=s(5056),A=s(48),G=s(8752);function k(m,R){if(1&m){const c=o.KQA();o.I0R(0,"div",1)(1,"div",2),o.OEk(2,"ID:"),o.C$Y(),o.I0R(3,"div",8)(4,"span",9),o.qCj("click",function(){const v=o.usT(c),$=o.GaO(2);return o.CGJ($.copyToClipboard(v))}),o.OEk(5),o.C$Y()()()}2&m&&(o.yG2(4),o.E7m("tippy",R),o.yG2(1),o.cNF(R))}function t(m,R){if(1&m){const c=o.KQA();o.I0R(0,"button",10),o.qCj("click",function(){const v=o.usT(c),$=o.GaO(2);return o.CGJ($.findOutMore(v))}),o.I0R(1,"mat-icon"),o.OEk(2,"open_in_new"),o.C$Y(),o.OEk(3),o.wVc(4,"translate"),o.C$Y()}2&m&&(o.yG2(3),o.oRS(" ",o.kDX(4,1,"Features.FindOutMore")," "))}function x(m,R){if(1&m){const c=o.KQA();o.I0R(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),o.OEk(3),o.C$Y()(),o.I0R(4,"mat-card-content"),o.wR5(5,"p",0),o.wVc(6,"safeHtml"),o.I0R(7,"div",1)(8,"div",2),o.OEk(9),o.wVc(10,"translate"),o.C$Y(),o.I0R(11,"div",3)(12,"span"),o.OEk(13),o.wVc(14,"translate"),o.C$Y()()(),o.yuY(15,k,6,2,"div",4),o.C$Y(),o.I0R(16,"mat-card-actions",5),o.yuY(17,t,5,3,"button",6),o.I0R(18,"button",7),o.qCj("click",function(){o.usT(c);const O=o.GaO();return o.CGJ(O.closeDialog())}),o.OEk(19),o.wVc(20,"translate"),o.C$Y()()()}if(2&m){let c;o.yG2(3),o.cNF(R.feature.Name),o.yG2(2),o.E7m("innerHtml",o.kDX(6,7,R.feature.Description),o.E3n),o.yG2(4),o.oRS("",o.kDX(10,9,"Features.Status"),":"),o.yG2(4),o.cNF(o.kDX(14,11,R.feature.IsEnabled?"Features.Active":"Features.NotActive")),o.yG2(2),o.C0Y(15,(c=R.feature.NameId)?15:-1,c),o.yG2(2),o.C0Y(17,(c=R.feature.Link)?17:-1,c),o.yG2(2),o.oRS(" ",o.kDX(20,13,"Features.Close")," ")}}let M=(()=>{class m{constructor(c,y,O,v){this.dialogData=c,this.dialogRef=y,this.snackBar=O,this.featureDetailService=v}ngOnInit(){this.viewModel$=(0,d.E)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,u.k)(([c])=>({feature:c})))}copyToClipboard(c){(0,g.y)(c),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(c){window.open(c,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(y){return new(y||m)(o.GI1(p.sR),o.GI1(p.yI),o.GI1(h.yS),o.GI1(_.I))};static#e=this.\u0275cmp=o.In1({type:m,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["class","eav-info-row"],["align","end"],["mat-raised-button","","color","accent","class","eav-card-action-button"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"]],template:function(y,O){if(1&y&&(o.yuY(0,x,21,15,"mat-card"),o.wVc(1,"async")),2&y){let v;o.C0Y(0,(v=o.kDX(1,1,O.viewModel$))?0:-1,v)}},dependencies:[F.Gw,D.qL,S.SM,S.W0,S.WK,S.Uc,S.gp,C.Y,E.a,A.K,G.sD]})}return m})();var P=s(4844),N=s(9432),j=s(9244);let H=(()=>{class m{set featureNameId(c){this.featureNameId$.next(c)}set showIf(c){this.showIf$.next(1==c)}constructor(c,y,O,v){this.dialog=c,this.viewContainerRef=y,this.changeDetectorRef=O,this.featuresService=v,this.featureNameId$=new P.g(null),this.showIf$=new P.g(!1),this.feature$=this.featureNameId$.pipe((0,N.G)($=>this.featuresService.get$($))),this.show$=(0,d.E)([this.feature$,this.showIf$]).pipe((0,u.k)(([$,J])=>J==($?.IsEnabled??!1)))}openDialog(){m.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(c,y,O,v){c.open(M,{autoFocus:!1,data:y,viewContainerRef:O,width:"400px"}),v.markForCheck()}static#t=this.\u0275fac=function(y){return new(y||m)(o.GI1(p.qW),o.GI1(o.y8U),o.GI1(o.kD9),o.GI1(j.E))};static#e=this.\u0275dir=o.Sc5({type:m,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return m})()},2816:(Y,f,s)=>{s.d(f,{K:()=>F});var p=s(5204),d=s(6560),u=s(1792),g=s(604),o=s(6536),h=s(6884),_=s(4896);let F=(()=>{class D extends h.C{constructor(C,E){super(),this.router=C,this.route=E}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedShallow(){return this.router.events.pipe((0,d.I)(C=>C instanceof p.cf),(0,u.W)(!!this.route.snapshot.firstChild),(0,g.k)(()=>!!this.route.snapshot.firstChild),(0,o.c)(),(0,d.I)(([C,E])=>C&&!E))}static#t=this.\u0275fac=function(E){return new(E||D)(_.GI1(p.E5),_.GI1(p.gV))};static#e=this.\u0275dir=_.Sc5({type:D,features:[_.eg9]})}return D})()},1743:(Y,f,s)=>{s.d(f,{A:()=>p});const p={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}},2564:(Y,f,s)=>{s.d(f,{U:()=>u});var p=s(5200),d=s(4896);let u=(()=>{class g{constructor(h){this.globalConfigService=h}onClick(h){(navigator.platform.match("Mac")?h.metaKey:h.ctrlKey)&&h.shiftKey&&h.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())}static#t=this.\u0275fac=function(_){return new(_||g)(d.GI1(p.Sq))};static#e=this.\u0275dir=d.Sc5({type:g,selectors:[["","appToggleDebug",""]],hostBindings:function(_,F){1&_&&d.qCj("click",function(S){return F.onClick(S)})}})}return g})()},2556:(Y,f,s)=>{function p(d){const u=document.createElement("textarea");u.value=d,u.setAttribute("readonly",""),u.style.position="absolute",u.style.left="-9999px",document.body.appendChild(u);const g=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);u.select(),document.execCommand("copy"),document.body.removeChild(u),g&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(g))}s.d(f,{y:()=>p})},48:(Y,f,s)=>{s.d(f,{K:()=>u});var p=s(4896),d=s(168);let u=(()=>{class g{constructor(h){this.sanitizer=h}transform(h){return this.sanitizer.bypassSecurityTrustHtml(h)}static#t=this.\u0275fac=function(_){return new(_||g)(p.GI1(d.mI,16))};static#e=this.\u0275pipe=p.UTH({name:"safeHtml",type:g,pure:!0})}return g})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.02.00/dist/ng-edit/projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts.dadddc29dfd1dffc.js.map