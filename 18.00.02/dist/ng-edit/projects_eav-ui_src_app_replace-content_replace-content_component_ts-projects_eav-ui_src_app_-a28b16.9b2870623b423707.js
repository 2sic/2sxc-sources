"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_replace-content_replace-content_component_ts-projects_eav-ui_src_app_-a28b16"],{1897:(R,p,e)=>{function t(l,i){return i(l)}function _(l,i){return i(l)}e.d(p,{C:()=>t,z:()=>_})},4513:(R,p,e)=>{e.r(p),e.d(p,{ReplaceContentComponent:()=>L});var t=e(7580),_=e(9771),l=e(7941),i=e(2159),C=e(9669),m=e(3216),M=e(334),E=e(3840),v=e(4175),O=e(5060),h=e(2275),P=e(4456),a=e(7984),o=e(5944),c=e(5437),u=e(1897),I=e(8471),T=e(7993),A=e(3347);function U(f,W){if(1&f&&(t.j41(0,"mat-option",15),t.EFF(1),t.k0s()),2&f){const s=W.$implicit;t.Y8G("value",s.label),t.R7$(),t.JRh(s.label)}}let L=(()=>{class f{#e;#t;constructor(s,r){this.dialogRef=s,this.snackBar=r,this.hostClass="dialog-component",this.#e=(0,c.d)(C.y),this.#t=(0,c.d)(I.c),this.#a=(0,u.C)(this.#t.getParams(["guid","part","index"]),n=>({guid:n.guid,part:n.part,index:parseInt(n.index,10)})),this.isAddMode=(0,T.KX)("isAddMode",!!this.#t.getQueryParam("add")),this.filterText=(0,t.geq)(""),this.#n=(0,T.KX)("options",[]),this.options=(0,T.bo)("filteredOptions",()=>{const n=this.filterText().toLocaleLowerCase();return this.#n().filter(d=>d.label.toLocaleLowerCase().includes(n))}),this.hasSelection=(0,T.bo)("isMatch",()=>this.options().map(n=>n.label).includes(this.filterText()))}#a;#s;#n;ngOnInit(){this.#i(!1,null),this.#t.doOnDialogClosed(()=>{const r=this.#t.router.getCurrentNavigation().extras?.state,n=r?.[Object.keys(r)[0]];this.#i(!0,n)})}closeDialog(){this.dialogRef.close()}select(s){this.filterText.set(s.option.value)}copySelected(){const s=this.#o(),r={items:[M.c.copy(this.#s,s.id)]},n=(0,m.s)(r);this.#t.navRelative([`edit/${n}`])}save(){this.snackBar.open("Saving...");const s=this.#o();this.#e.saveItem(s).subscribe(()=>{this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})}#i(s,r){const n=this.#o();this.#e.getItems(n).subscribe(d=>{const D=Object.entries(d.Items).map(([g,B])=>({id:parseInt(g,10),label:`${B} (${g})`}));if(this.#n.set(D),!n.add&&!s||null!=r){const g=s?r:d.SelectedId,B=this.#n().find(K=>K.id===g)?.label||"";this.filterText.set(B)}this.#s=d.ContentTypeName})}#o(){const s=this.filterText();return{id:this.#n().find(d=>d.label===s)?.id??null,...this.#a,add:this.isAddMode()}}static#r=this.\u0275fac=function(r){return new(r||f)(t.rXU(l.CP),t.rXU(A.UG))};static#l=this.\u0275cmp=t.VBU({type:f,selectors:[["app-replace-content"]],hostVars:1,hostBindings:function(r,n){2&r&&t.Mr5("className",n.hostClass)},inputs:{filterText:[t.Mj6.SignalBased,"filterText"]},outputs:{filterText:"filterTextChange"},standalone:!0,features:[t.aNF],decls:25,vars:10,consts:[["auto","matAutocomplete"],[1,"eav-dialog"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],[1,"eav-options-box"],["color","accent",1,"eav-mat-form-field"],["matInput","",3,"ngModelChange","matAutocomplete","ngModel"],[3,"optionSelected","hideSingleSelectionIndicator"],["itemSize","48","minBufferPx","500","maxBufferPx","1000"],[3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["mat-icon-button","","tippy","Copy",3,"click","disabled"],["align","end"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],[3,"value"]],template:function(r,n){if(1&r){const d=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"div",3),t.EFF(3),t.k0s()(),t.j41(4,"div",4),t.nrm(5,"router-outlet"),t.j41(6,"p"),t.EFF(7),t.k0s(),t.j41(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),t.EFF(11,"Choose item"),t.k0s(),t.j41(12,"input",7),t.mxI("ngModelChange",function(g){return t.eBV(d),t.DH7(n.filterText,g)||(n.filterText=g),t.Njj(g)}),t.k0s(),t.j41(13,"mat-autocomplete",8,0),t.bIt("optionSelected",function(g){return t.eBV(d),t.Njj(n.select(g))}),t.j41(15,"cdk-virtual-scroll-viewport",9),t.DNE(16,U,2,2,"mat-option",10),t.k0s()()(),t.j41(17,"button",11),t.bIt("click",function(){return t.eBV(d),t.Njj(n.copySelected())}),t.j41(18,"mat-icon"),t.EFF(19,"file_copy"),t.k0s()()()(),t.j41(20,"mat-dialog-actions",12)(21,"button",13),t.bIt("click",function(){return t.eBV(d),t.Njj(n.closeDialog())}),t.EFF(22,"Cancel"),t.k0s(),t.j41(23,"button",14),t.bIt("click",function(){return t.eBV(d),t.Njj(n.save())}),t.EFF(24,"Save"),t.k0s()()()}if(2&r){const d=t.sdS(14);t.R7$(3),t.JRh(n.isAddMode()?"Add Existing Item":"Replace Content Item"),t.R7$(4),t.SpI("",n.isAddMode()?"Select a content-item to add to this list.":"By replacing a content-item you can make other content appear in the slot of the original content."," "),t.R7$(5),t.Y8G("matAutocomplete",d),t.R50("ngModel",n.filterText),t.R7$(),t.Y8G("hideSingleSelectionIndicator",!0),t.R7$(2),t.xc7("height",n.options().length<6?48*n.options().length:240,"px"),t.R7$(),t.Y8G("cdkVirtualForOf",n.options()),t.R7$(),t.Y8G("disabled",!n.hasSelection()),t.R7$(6),t.Y8G("disabled",!n.hasSelection())}},dependencies:[i.n3,o.RG,o.rl,o.nJ,a.fS,a.fg,_.jL,_.$3,O.wT,_.pN,P.YN,P.me,P.BC,P.vS,h.d6,h.yg,h.E$,O.Sy,v.Hl,v.$z,v.iY,E.m_,E.An,l.E7],styles:[".eav-options-box[_ngcontent-%COMP%]{display:flex;align-items:flex-end}"]})}return f})()},8471:(R,p,e)=>{e.d(p,{c:()=>O});var t=e(2159),_=e(1567),l=e(3037),i=e(271),C=e(5057),m=e(4979),M=e(4435),E=e(7580);const v={doOnDialogClosed:!0};let O=(()=>{class h extends m.V{constructor(a,o){super(),this.router=a,this.route=o,this.log=(0,M.T)({DialogRoutingService:h},v)}get snapshot(){return this.route.snapshot}get url(){return this.router.url}getParam(a){return this.route.snapshot.paramMap.get(a)}getParams(a){const o=this.route.snapshot.paramMap;return a.reduce((c,u)=>(c[u]=o.get(u),c),{})}getQueryParam(a){return this.route.snapshot.queryParamMap.get(a)}getQueryParams(a){const o=this.route.snapshot.queryParamMap;return a.reduce((c,u)=>(c[u]=o.get(u),c),{})}state(){return this.router.getCurrentNavigation().extras?.state}doOnDialogClosed(a){const o=this.log.fnIf("doOnDialogClosed");this.subscriptions.add(this.childDialogClosed$().subscribe(()=>a())),o.end()}navPath(a,o){return this.router.navigate([a],o)}navRelative(a,o){return this.router.navigate(a,{...o,relativeTo:this.route})}navParentFirstChild(a,o){return this.router.navigate(a,{...o,relativeTo:this.route.parent.firstChild})}childDialogClosed$(){return this.router.events.pipe((0,_.p)(a=>a instanceof t.wF),(0,l.Z)(!!this.route.snapshot.firstChild),(0,i.T)(()=>!!this.route.snapshot.firstChild),(0,C.J)(),(0,_.p)(([a,o])=>a&&!o))}static#e=this.\u0275fac=function(o){return new(o||h)(E.KVO(t.Ix),E.KVO(t.nX))};static#t=this.\u0275prov=E.jDH({token:h,factory:h.\u0275fac})}return h})()},6474:(R,p,e)=>{e.d(p,{D:()=>C});var t=e(7580),_=e(4821),l=e(8873),i=e(6443);let C=(()=>{class m{constructor(){this.dnnContext=(0,t.WQX)(_.ob),this.http=(0,t.WQX)(i.Qq),this.context=(0,t.WQX)(l.o)}apiUrl(E){return this.dnnContext.$2sxc.http.apiUrl(E)}get appId(){return this.context.appId.toString()}get zoneId(){return this.context.zoneId.toString()}static#e=this.\u0275fac=function(v){return new(v||m)};static#t=this.\u0275prov=t.jDH({token:m,factory:m.\u0275fac})}return m})()},4979:(R,p,e)=>{e.d(p,{V:()=>l});var t=e(7092),_=e(7580);let l=(()=>{class i{constructor(){this.subscriptions=new t.yU}ngOnDestroy(){this.destroy()}destroy(){this.subscriptions.unsubscribe()}static#e=this.\u0275fac=function(M){return new(M||i)};static#t=this.\u0275prov=_.jDH({token:i,factory:i.\u0275fac})}return i})()},591:(R,p,e)=>{e.d(p,{c:()=>a});var t=e(8473),_=e(3513),l=e(4334),i=e(819),C=e(1687),m=e(4318),E=e(7378),v=e(1365),O=e(2645);function h(o,c){return c?u=>(0,_.x)(c.pipe((0,l.s)(1),function M(){return(0,i.N)((o,c)=>{o.subscribe((0,C._)(c,m.l))})}()),u.pipe(h(o))):(0,v.Z)((u,I)=>(0,O.Tg)(o(u,I)).pipe((0,l.s)(1),(0,E.u)(u)))}var P=e(4581);function a(o,c=t.E){const u=(0,P.O)(o,c);return h(()=>u)}}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/projects_eav-ui_src_app_replace-content_replace-content_component_ts-projects_eav-ui_src_app_-a28b16.9b2870623b423707.js.map