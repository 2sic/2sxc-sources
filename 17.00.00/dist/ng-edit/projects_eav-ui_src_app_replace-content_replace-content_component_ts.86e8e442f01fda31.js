"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_replace-content_replace-content_component_ts"],{9271:(I,h,n)=>{n.r(h),n.d(h,{ReplaceContentComponent:()=>W});var _=n(8071),c=n(3839),p=n(9736),m=n(712),g=n(6041),E=n(2957),t=n(9039),u=n(91),d=n(6861),R=n(9409),a=n(6575),r=n(9498),T=n(895),U=n(6515),x=n(1268),B=n(257),M=n(8849),P=n(9892),K=n(9674),O=n(5918);function L(l,v){if(1&l&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&l){const e=v.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function y(l,v){if(1&l){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4),t._UZ(6,"router-outlet"),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Choose item"),t.qZA(),t.TgZ(13,"input",7),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.setFilter(o))}),t.qZA(),t.TgZ(14,"mat-autocomplete",8,9),t.NdJ("optionSelected",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.select(o))}),t.TgZ(16,"cdk-virtual-scroll-viewport",10),t.YNc(17,L,2,2,"mat-option",11),t.qZA()()(),t.TgZ(18,"button",12),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.copySelected())}),t.TgZ(19,"mat-icon"),t._uU(20,"file_copy"),t.qZA()()()(),t.TgZ(21,"mat-dialog-actions",13)(22,"button",14),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.closeDialog())}),t._uU(23,"Cancel"),t.qZA(),t.TgZ(24,"button",15),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.save())}),t._uU(25,"Save"),t.qZA()()(),t.BQk()}if(2&l){const e=v.ngIf,i=t.MAs(15);t.xp6(4),t.Oqu(e.isAddMode?"Add Existing Item":"Replace Content Item"),t.xp6(4),t.hij("",e.isAddMode?"Select a content-item to add to this list.":"By replacing a content-item you can make other content appear in the slot of the original content."," "),t.xp6(5),t.Q6J("matAutocomplete",i)("ngModel",e.filterText),t.xp6(1),t.Q6J("hideSingleSelectionIndicator",!0),t.xp6(2),t.Udp("height",e.filteredOptions.length<6?48*e.filteredOptions.length:240,"px"),t.xp6(1),t.Q6J("cdkVirtualForOf",e.filteredOptions),t.xp6(1),t.Q6J("disabled",!e.isMatch),t.xp6(6),t.Q6J("disabled",!e.isMatch)}}let W=(()=>{class l extends g.H{constructor(e,i,o,s,f){super(e,i),this.router=e,this.route=i,this.dialogRef=o,this.contentGroupService=s,this.snackBar=f,this.hostClass="dialog-component"}ngOnInit(){this.guid=this.route.snapshot.paramMap.get("guid"),this.part=this.route.snapshot.paramMap.get("part"),this.index=parseInt(this.route.snapshot.paramMap.get("index"),10),this.add=!!this.route.snapshot.queryParamMap.get("add"),this.filterText$=new _.X(""),this.options$=new _.X([]);const e=(0,c.a)([this.filterText$,this.options$]).pipe((0,p.U)(([i,o])=>o.filter(s=>s.label.toLocaleLowerCase().includes(i.toLocaleLowerCase())).map(s=>s.label)));this.viewModel$=(0,c.a)([this.filterText$,e]).pipe((0,p.U)(([i,o])=>({filterText:i,filteredOptions:o,isAddMode:this.add,isMatch:o.includes(i)}))),this.fetchConfig(!1,null),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{const o=this.router.getCurrentNavigation().extras?.state,s=o?.[Object.keys(o)[0]];this.fetchConfig(!0,s)}))}ngOnDestroy(){this.filterText$.complete(),this.options$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}setFilter(e){this.filterText$.next(e)}select(e){this.filterText$.next(e.option.value)}copySelected(){const e=this.buildContentGroup(),o=(0,E.f)({items:[{ContentTypeName:this.contentTypeName,DuplicateEntity:e.id}]});this.router.navigate([`edit/${o}`],{relativeTo:this.route})}save(){this.snackBar.open("Saving...");const e=this.buildContentGroup();this.contentGroupService.saveItem(e).subscribe(()=>{this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})}fetchConfig(e,i){const o=this.buildContentGroup();this.contentGroupService.getItems(o).subscribe(s=>{const f=Object.entries(s.Items).map(([C,D])=>({id:parseInt(C,10),label:`${D} (${C})`}));if(this.options$.next(f),!o.add&&!e||null!=i){const C=e?i:s.SelectedId,D=this.options$.value.find(A=>A.id===C)?.label||"";this.filterText$.next(D)}this.contentTypeName=s.ContentTypeName})}buildContentGroup(){return{id:this.options$.value.find(o=>o.label===this.filterText$.value)?.id??null,guid:this.guid,part:this.part,index:this.index,add:this.add}}static#t=this.\u0275fac=function(i){return new(i||l)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(d.so),t.Y36(m.e),t.Y36(R.ux))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-replace-content"]],hostVars:1,hostBindings:function(i,o){2&i&&t.Ikx("className",o.hostClass)},features:[t.qOj],decls:2,vars:3,consts:[[4,"ngIf"],[1,"eav-dialog"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],[1,"eav-options-box"],["color","accent",1,"eav-form-field"],["matInput","",3,"matAutocomplete","ngModel","ngModelChange"],[3,"hideSingleSelectionIndicator","optionSelected"],["auto","matAutocomplete"],["itemSize","48","minBufferPx","500","maxBufferPx","1000"],[3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["mat-icon-button","","tippy","Copy",3,"disabled","click"],["align","end"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"value"]],template:function(i,o){1&i&&(t.YNc(0,y,26,10,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,o.viewModel$))},dependencies:[a.O5,u.lC,r.$,d.H8,T.lW,T.RK,U.Hw,x.KE,x.hX,B.ey,M.Fj,M.JJ,M.On,P.XC,P.ZL,K.Nt,O.xd,O.x0,O.N7,a.Ov],styles:[".eav-options-box[_ngcontent-%COMP%]{display:flex;align-items:flex-end}"]})}return l})()},6041:(I,h,n)=>{n.d(h,{H:()=>u});var _=n(91),c=n(4520),p=n(5043),m=n(9736),g=n(9422),E=n(9097),t=n(9039);let u=(()=>{class d extends E.f{constructor(a,r){super(),this.router=a,this.route=r}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,c.h)(a=>a instanceof _.m2),(0,p.O)(!!this.route.snapshot.firstChild.firstChild),(0,m.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,g.G)(),(0,c.h)(([a,r])=>a&&!r))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,c.h)(a=>a instanceof _.m2),(0,p.O)(!!this.route.snapshot.firstChild),(0,m.U)(()=>!!this.route.snapshot.firstChild),(0,g.G)(),(0,c.h)(([a,r])=>a&&!r))}static#t=this.\u0275fac=function(r){return new(r||d)(t.Y36(_.F0),t.Y36(_.gz))};static#e=this.\u0275dir=t.lG2({type:d,features:[t.qOj]})}return d})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.00.00/dist/ng-edit/projects_eav-ui_src_app_replace-content_replace-content_component_ts.86e8e442f01fda31.js.map