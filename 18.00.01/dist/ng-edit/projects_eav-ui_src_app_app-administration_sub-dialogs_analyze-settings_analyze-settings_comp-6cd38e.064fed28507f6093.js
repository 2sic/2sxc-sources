"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e"],{5445:(A,g,e)=>{e.d(g,{Cu:()=>a.Cu,JL:()=>a.JL,Mk:()=>a.Mk,ei:()=>a.ei,gs:()=>c.g,tn:()=>u.t,vN:()=>a.vN,xR:()=>a.xR,y0:()=>p.y});var u=e(6163),c=e(7693),a=(e(1475),e(320),e(8624),e(4079)),p=e(2570)},4079:(A,g,e)=>{e.d(g,{Cu:()=>h,JL:()=>D,Mk:()=>I,ei:()=>r,vN:()=>P,xR:()=>S});var u=e(4600),c=e(6647),v=e(271),y=e(693),l=e(8873),a=e(9234),p=e(8559),E=e(6443),_=e(4821);const I="admin/query/Run",r="admin/query/DebugStream",h="admin/query/Save",D="admin/query/Get",P="admin/query/DataSources";let S=(()=>{class x{constructor(d,m,M){this.http=d,this.context=m,this.dnnContext=M}getAll(d){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(a.Gg),{params:{appId:this.context.appId.toString(),contentType:d}})}importQuery(d){return(0,u.H)((0,y.n)(d)).pipe((0,c.n)(m=>this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/query/import"),{AppId:this.context.appId.toString(),ContentBase64:m})),(0,v.T)(m=>({Success:m,Messages:[]})))}clonePipeline(d){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/query/Clone"),{params:{Id:d.toString(),appId:this.context.appId.toString()}})}delete(d){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("admin/query/Delete"),{params:{appId:this.context.appId.toString(),Id:d.toString()}})}static#t=this.\u0275fac=function(m){return new(m||x)(p.KVO(E.Qq),p.KVO(l.o),p.KVO(_.ob))};static#e=this.\u0275prov=p.jDH({token:x,factory:x.\u0275fac})}return x})()},2570:(A,g,e)=>{e.d(g,{y:()=>t});var u=e(8873),c=e(8559),v=e(6443),y=e(4821);const l="admin/view/",a=l+"all",p=l+"delete",E=l+"import",_=l+"polymorphism",R=l+"usage";let t=(()=>{class C{constructor(r,h,D){this.http=r,this.context=h,this.dnnContext=D}getAll(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(a),{params:{appId:this.context.appId.toString()}})}delete(r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(p),{params:{appId:this.context.appId.toString(),Id:r.toString()}})}import(r){const h=new FormData;return h.append("File",r),this.http.post(this.dnnContext.$2sxc.http.apiUrl(E),h,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}export(r){const h=this.dnnContext.$2sxc.http.apiUrl(l+"json")+"?appId="+this.context.appId+"&viewId="+r;window.open(h,"_blank","")}getPolymorphism(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_),{params:{appId:this.context.appId.toString()}})}getUsage(r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(R),{params:{appId:this.context.appId.toString(),guid:r}})}static#t=this.\u0275fac=function(h){return new(h||C)(c.KVO(v.Qq),c.KVO(u.o),c.KVO(y.ob))};static#e=this.\u0275prov=c.jDH({token:C,factory:C.\u0275fac})}return C})()},8852:(A,g,e)=>{e.r(g),e.d(g,{AnalyzeSettingsComponent:()=>K});var u=e(2159),c=e(5797),v=e(9999),y=e(271),l=e(251),a=e(5445),p=e(8362),E=e(519),_=e(5060),R=e(7896),t=e(8559),C=e(3347);let I=(()=>{class s{constructor(n){this.snackBar=n}agInit(n){this.key=n.value}refresh(n){return!0}copy(){(0,E.l)(this.key),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}static#t=this.\u0275fac=function(i){return new(i||s)(t.rXU(C.UG))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["app-analyze-settings-key"]],standalone:!0,features:[t.aNF],decls:3,vars:2,consts:[["matRipple","",1,"key-box","highlight",3,"click","tippy"],[1,"key"]],template:function(i,o){1&i&&(t.j41(0,"div",0),t.bIt("click",function(){return o.copy()}),t.j41(1,"span",1),t.EFF(2),t.k0s()()),2&i&&(t.Y8G("tippy",o.key),t.R7$(2),t.JRh(o.key))},dependencies:[_.pZ,_.r6,R.e],styles:[".key-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden}"]})}return s})();var r=e(3840);function h(s,O){if(1&s&&(t.j41(0,"div",0)(1,"div"),t.EFF(2),t.k0s(),t.j41(3,"div",2)(4,"mat-icon"),t.EFF(5,"search"),t.k0s()()()),2&s){const n=t.XpG();t.R7$(2),t.JRh(n.totalResults)}}function D(s,O){if(1&s){const n=t.RV6();t.j41(0,"div",3),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.openDetails())}),t.j41(1,"div",4),t.EFF(2),t.k0s(),t.j41(3,"div",5)(4,"mat-icon"),t.EFF(5,"search"),t.k0s()()()}if(2&s){const n=t.XpG();t.R7$(2),t.JRh(n.totalResults)}}let P=(()=>{class s{agInit(n){this.totalResults=n.value,this.params=n,this.stackItem=this.params.data}refresh(n){return!0}openDetails(){this.params.openDetails(this.stackItem)}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["app-analyze-settings-total-results"]],standalone:!0,features:[t.aNF],decls:2,vars:2,consts:[[1,"input-component","no-click"],["matRipple","","tippy","Open details",1,"input-component","highlight"],[1,"eav-grid-action-button","disabled"],["matRipple","","tippy","Open details",1,"input-component","highlight",3,"click"],[1,"text"],[1,"eav-grid-action-button"]],template:function(i,o){1&i&&t.DNE(0,h,6,1,"div",0)(1,D,6,1,"div",1),2&i&&(t.vxM(0,o.totalResults<=1?0:-1),t.R7$(),t.vxM(1,o.totalResults>1?1:-1))},dependencies:[r.m_,r.An,_.pZ,_.r6],styles:[".no-click[_ngcontent-%COMP%]{cursor:default;-webkit-user-select:initial;user-select:initial}"]})}return s})();var S=e(1423),x=e(316),T=e(4456),d=e(5175),m=e(5944),M=e(4175),$=e(7037),w=e(1828),U=e(5437),F=e(7941),V=e(9841);function B(s,O){if(1&s&&(t.j41(0,"mat-option",8),t.EFF(1),t.k0s()),2&s){const n=O.$implicit;t.Y8G("value",n.Guid),t.R7$(),t.JRh(n.Name)}}function j(s,O){if(1&s){const n=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t.EFF(4),t.k0s(),t.j41(5,"button",3),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.closeDialog())}),t.j41(6,"mat-icon"),t.EFF(7,"close"),t.k0s()()()(),t.j41(8,"div",4)(9,"p",5),t.EFF(10," Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. "),t.k0s(),t.nrm(11,"router-outlet"),t.j41(12,"mat-form-field",6)(13,"mat-label"),t.EFF(14,"Merge settings / resources of a View"),t.k0s(),t.j41(15,"mat-select",7),t.bIt("ngModelChange",function(o){t.eBV(n);const f=t.XpG();return t.Njj(f.changeView(o))}),t.j41(16,"mat-option",8),t.EFF(17,"No view selected - this is how APIs see the data"),t.k0s(),t.Z7z(18,B,2,2,"mat-option",8,t.fX1),t.k0s()()(),t.j41(20,"div",9),t.nrm(21,"ag-grid-angular",10)(22,"div",11),t.k0s()()}if(2&s){const n=O,i=t.XpG();t.R7$(4),t.SpI("Analyze ",i.part,""),t.R7$(11),t.Y8G("ngModel",n.selectedView),t.R7$(),t.Y8G("value",void 0),t.R7$(2),t.Dyx(n.views),t.R7$(3),t.Y8G("rowData",n.stack)("gridOptions",i.gridOptions)}}let K=(()=>{class s{constructor(n,i,o){this.dialogRef=n,this.route=i,this.router=o,this.gridOptions=this.buildGridOptions(),this.viewsService=(0,U.d)(a.y0),this.analyzeSettingsService=(0,U.d)(p.l),this.part=this.route.snapshot.paramMap.get("part")}ngOnInit(){this.views$=new c.t([]),this.selectedView$=new c.t(void 0),this.stack$=new c.t([]),this.getViews(),this.getStack(),this.viewModel$=(0,v.z)([this.views$,this.selectedView$,this.stack$]).pipe((0,y.T)(([n,i,o])=>({views:n,selectedView:i,stack:o})))}ngOnDestroy(){this.views$.complete(),this.selectedView$.complete(),this.stack$.complete()}closeDialog(){this.dialogRef.close()}changeView(n){this.selectedView$.next(n),this.getStack()}getViews(){this.viewsService.getAll().subscribe(n=>{this.views$.next(n)})}getStack(){this.analyzeSettingsService.getStack(this.part,void 0,this.selectedView$.value,!0).subscribe(n=>{this.stack$.next(n)})}buildGridOptions(){return{...l.C,columnDefs:[{...w.r.TextWideActionClass,headerName:"Key",field:"Path",cellRenderer:I},{...w.r.TextWideActionClass,headerName:"Value",field:"_value",cellRenderer:S.g},{field:"Source",...w.r.TextNarrow},{headerName:"Total",field:"TotalResults",width:72,headerClass:"dense",cellClass:"secondary-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter",cellRenderer:P,cellRendererParams:{openDetails:o=>{this.router.navigate([`details/${this.selectedView$.value}/${o.Path}`],{relativeTo:this.route})}}}]}}static#t=this.\u0275fac=function(i){return new(i||s)(t.rXU(F.CP),t.rXU(u.nX),t.rXU(u.Ix))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["app-analyze-settings"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[1,"nav-component-wrapper"],["mat-mdc-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"padding-class"],[1,"dialog-description"],["color","accent",1,"view-select-box"],[3,"ngModelChange","ngModel"],[3,"value"],[1,"grid-wrapper","padding-class"],[1,"ag-theme-material",3,"rowData","gridOptions"],[1,"grid-more-actions-box"]],template:function(i,o){if(1&i&&(t.DNE(0,j,23,5,"div",0),t.nI1(1,"async")),2&i){let f;t.vxM(0,(f=t.bMT(1,1,o.viewModel$))?0:-1,f)}},dependencies:[M.Hl,M.iY,r.m_,r.An,u.n3,m.RG,m.rl,m.nJ,d.Ve,d.VO,_.wT,T.YN,T.BC,T.vS,_.Sy,x.Jj,$.p,V.xs],styles:[".view-select-box[_ngcontent-%COMP%]{width:400px}.padding-class[_ngcontent-%COMP%]{padding:0 24px}"]})}return s})()},693:(A,g,e)=>{function u(v){return new Promise((y,l)=>{const a=new FileReader;a.readAsDataURL(v),a.onload=()=>{y(a.result.split(",")[1])},a.onerror=p=>{l(p)}})}function c(v){return new Promise((y,l)=>{const a=new FileReader;a.readAsText(v),a.onload=()=>{y(a.result)},a.onerror=p=>{l(p)}})}e.d(g,{d:()=>c,n:()=>u})}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e.064fed28507f6093.js.map