"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts"],{1902:(A,u,a)=>{a.r(u),a.d(u,{CopilotPageComponent:()=>X});var h=a(4175),c=a(3777),f=a(3840),d=a(5175),g=a(8873),l=a(271),v=a(4334),C=a(316),G=a(4979),E=a(8147),T=a(6301),t=a(8559),F=a(6443);let $=(()=>{class n extends G.V{static#t=this.webApiEditions="admin/code/getEditions";static#e=this.webApiGeneratedCode="admin/code/generateDataModels";constructor(e,o){super(new E.B("CopilotService",!1)),this.http=e,this.context=o,this.specs=this.getCopilotSpecs()}getEditions(){return this.specs.pipe((0,l.T)(e=>e.editions))}getDefaultEdition(){return this.specs.pipe((0,l.T)(e=>e.editions.find(o=>o.isDefault)))}getGenerators(){return this.specs.pipe((0,l.T)(e=>e.generators))}getCopilotSpecs(){return this.http.get(n.webApiEditions,{params:{appId:this.context.appId.toString()}}).pipe((0,l.T)(e=>{const o=this.findDefaultEdition(e.editions),i=e.editions.map(s=>{const p=s==o;return{...s,isDefault:p,description:(s.description||"no description provided")+(p?" \u2705":""),label:`/${s.name}/AppCode/Data`.replace(/\/\//g,"/")}});return{...e,editions:i}}),(0,T.t)(1))}findDefaultEdition(e){return e.find(o=>o.isDefault)??e.find(o=>""===o.name)??e[0]}static#n=this.\u0275fac=function(o){return new(o||n)(t.KVO(F.Qq),t.KVO(g.o))};static#o=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac})}return n})();var R=a(5437),y=a(3347),m=a(5944),D=a(5060);function k(n,r){if(1&n&&(t.j41(0,"mat-option",9)(1,"strong"),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.EFF(4),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.name),t.R7$(2),t.Lme("",e.name," v",e.version,""),t.R7$(2),t.SpI(" ",e.description," ")}}function b(n,r){1&n&&t.nrm(0,"mat-hint",10),2&n&&t.Y8G("innerHTML",r.descriptionHtml,t.npT)}function I(n,r){if(1&n){const e=t.RV6();t.j41(0,"mat-form-field",3)(1,"mat-label"),t.EFF(2,"Generator"),t.k0s(),t.j41(3,"mat-select",8),t.mxI("valueChange",function(i){t.eBV(e);const s=t.XpG();return t.DH7(s.selectedGenerator,i)||(s.selectedGenerator=i),t.Njj(i)}),t.j41(4,"mat-select-trigger"),t.EFF(5),t.k0s(),t.Z7z(6,k,5,4,"mat-option",9,t.fX1),t.k0s(),t.DNE(8,b,1,1,"mat-hint",10),t.nI1(9,"async"),t.k0s(),t.nrm(10,"br")}if(2&n){let e;const o=t.XpG();t.R7$(3),t.R50("value",o.selectedGenerator),t.R7$(2),t.SpI(" ",o.selectedGenerator," "),t.R7$(),t.Dyx(r.sort()),t.R7$(2),t.vxM(8,(e=t.bMT(9,3,o.selectedGenerator$))?8:-1,e)}}function M(n,r){if(1&n&&(t.j41(0,"mat-option",9)(1,"strong"),t.EFF(2),t.k0s(),t.EFF(3),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.name),t.R7$(2),t.JRh(e.label),t.R7$(),t.SpI(" (",e.description,") ")}}function x(n,r){if(1&n){const e=t.RV6();t.j41(0,"mat-form-field",3)(1,"mat-label"),t.EFF(2,"Select an Edition to generate code for"),t.k0s(),t.j41(3,"mat-select",8),t.mxI("valueChange",function(i){t.eBV(e);const s=t.XpG();return t.DH7(s.selectedEdition,i)||(s.selectedEdition=i),t.Njj(i)}),t.Z7z(4,M,4,3,"mat-option",9,t.fX1),t.k0s(),t.j41(6,"mat-hint"),t.EFF(7," Editions are managed in the "),t.j41(8,"code"),t.EFF(9,"/App_Data/app.json"),t.k0s(),t.EFF(10," file. See "),t.j41(11,"a",11),t.EFF(12,"docs"),t.k0s(),t.EFF(13,". "),t.k0s()()}if(2&n){const e=t.XpG();t.R7$(3),t.R50("value",e.selectedEdition),t.R7$(),t.Dyx(r.sort())}}let S=(()=>{class n{constructor(e,o,i){this.http=e,this.context=o,this.snackBar=i,this.title="Copilot Generator",this.copilotSvc=(0,R.d)($),this.webApiGeneratedCode="admin/code/generateDataModels",this.editions$=this.copilotSvc.getEditions(),this.generators$=this.copilotSvc.getGenerators().pipe((0,l.T)(s=>s.filter(p=>p.outputType===this.outputType))),this.selectedGenerator$=this.generators$.pipe((0,l.T)(s=>s.find(p=>p.name===this.selectedGenerator))),this.selectedGenerator="",this.selectedEdition=""}ngOnInit(){this.generators$.pipe((0,v.s)(1)).subscribe(e=>{this.selectedGenerator=e[0]?.name??""}),this.copilotSvc.specs.pipe((0,v.s)(1)).subscribe(e=>{this.selectedEdition=e.editions.find(o=>o.isDefault)?.name??""})}autoGeneratedCode(){this.http.get(this.webApiGeneratedCode,{params:{appId:this.context.appId.toString(),edition:this.selectedEdition,generator:this.selectedGenerator}}).subscribe(e=>{console.log(e),this.snackBar.open(e.message+`\n (this took ${e.timeTaken}ms)`,null,{duration:5e3})})}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(F.Qq),t.rXU(g.o),t.rXU(y.UG))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-copilot-generator"]],inputs:{outputType:"outputType",title:"title"},standalone:!0,features:[t.aNF],decls:21,vars:7,consts:[[1,"eav-cards-box"],[1,"eav-card"],[1,"eav-card-header"],["color","accent",1,"eav-mat-form-field"],[1,"eav-card-space-div"],["align","end"],["mat-button","",1,"eav-button__with-icon",3,"click"],[1,"eav-icon"],["required","",3,"valueChange","value"],[3,"value"],[3,"innerHTML"],["href","https://go.2sxc.org/app-json","target","_blank"]],template:function(o,i){if(1&o&&(t.j41(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2)(3,"mat-card-title"),t.EFF(4),t.k0s(),t.j41(5,"mat-icon"),t.EFF(6,"support_agent"),t.k0s()(),t.j41(7,"mat-card-content"),t.nrm(8,"br"),t.DNE(9,I,11,5),t.nI1(10,"async"),t.nrm(11,"br"),t.DNE(12,x,14,1,"mat-form-field",3),t.nI1(13,"async"),t.k0s(),t.nrm(14,"div",4),t.j41(15,"mat-card-actions",5)(16,"button",6),t.bIt("click",function(){return i.autoGeneratedCode()}),t.j41(17,"mat-icon",7),t.EFF(18,"code"),t.k0s(),t.j41(19,"span"),t.EFF(20,"Generate Code"),t.k0s()()()()()),2&o){let s,p;t.R7$(4),t.JRh(i.title),t.R7$(5),t.vxM(9,(s=t.bMT(10,3,i.generators$))?9:-1,s),t.R7$(3),t.vxM(12,(p=t.bMT(13,5,i.editions$))?12:-1,p)}},dependencies:[d.Ve,m.rl,m.nJ,m.MV,d.VO,d.$2,D.wT,h.Hl,h.$z,c.Hu,c.RN,c.YY,c.m2,c.MM,c.dh,f.m_,f.An,C.MD,C.Jj],encapsulation:2})}return n})();var V=a(2159);let X=(()=>{class n{constructor(e){this.data=e.snapshot.data}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(V.nX))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-data-copilot"]],standalone:!0,features:[t.aNF],decls:6,vars:4,consts:[[1,"outer-container"],[3,"outputType","title"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s()(),t.nrm(5,"app-copilot-generator",1)),2&o&&(t.R7$(2),t.JRh(i.data.heading),t.R7$(2),t.SpI(" ",i.data.intro," "),t.R7$(),t.Y8G("outputType",i.data.outputType)("title",i.data.title))},dependencies:[S],styles:[".outer-container[_ngcontent-%COMP%]{padding:10px 20px}"]})}return n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts.4c29490774ac0837.js.map