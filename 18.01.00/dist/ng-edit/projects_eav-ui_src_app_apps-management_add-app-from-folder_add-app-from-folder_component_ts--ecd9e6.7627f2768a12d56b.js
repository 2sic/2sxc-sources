"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6"],{8242:(b,v,e)=>{e.r(v),e.d(v,{AddAppFromFolderComponent:()=>R});var t=e(7580),F=e(7941),A=e(8136),P=e(251),I=e(4824),T=e(3583),_=e(3840),u=e(7896);let n=(()=>{class c{agInit(s){this.name=s.value,this.tooltip=s.tooltipGetter(s.data)}refresh(s){return!0}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275cmp=t.VBU({type:c,selectors:[["app-app-name-show"]],standalone:!0,features:[t.aNF],decls:5,vars:2,consts:[[1,"name-box"],[1,"info-icon",3,"tippy"]],template:function(r,i){1&r&&(t.j41(0,"div",0)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"mat-icon",1),t.EFF(4,"info"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(i.name),t.R7$(),t.Y8G("tippy",i.tooltip))},dependencies:[_.m_,_.An,u.e],styles:[".name-box[_ngcontent-%COMP%]{display:flex;align-items:center}.info-icon[_ngcontent-%COMP%]{margin-left:7px;margin-bottom:3px}"]})}return c})(),m=(()=>{class c{agInit(s){this.params=s}refresh(s){return!0}onChange(s){this.params.onChange(this.params.data,s.currentTarget.checked)}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275cmp=t.VBU({type:c,selectors:[["app-checkbox-cell"]],standalone:!0,features:[t.aNF],decls:2,vars:2,consts:[[1,"checkbox-box"],["type","checkbox",1,"checkbox-input",3,"change","disabled","checked"]],template:function(r,i){1&r&&(t.j41(0,"div",0)(1,"input",1),t.bIt("change",function(x){return i.onChange(x)}),t.k0s()()),2&r&&(t.R7$(),t.Y8G("disabled",i.params.isDisabled)("checked",i.params.value))},styles:[".checkbox-box[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center}.checkbox-input[_ngcontent-%COMP%]{height:15px;width:15px}"]})}return c})();var C=e(4175),f=e(5469),E=e(7037),M=e(5437),l=e(1828),y=e(3347),p=e(9841);function h(c,$){1&c&&(t.j41(0,"p"),t.EFF(1," Nothing to show. All apps in the 2sxc folder are already installed. "),t.k0s())}function D(c,$){if(1&c&&(t.j41(0,"div"),t.nrm(1,"ag-grid-angular",8),t.k0s()),2&c){const s=t.XpG();t.R7$(),t.Y8G("rowData",s.pendingApps())("gridOptions",s.gridOptions)}}let R=(()=>{class c{#t;constructor(s,r){this.dialogRef=s,this.snackBar=r,this.hostClass="dialog-component",this.gridOptions=this.buildGridOptions(),this.installing=!1,this.pendingApps=(0,t.vPA)([]),this.features=(0,t.WQX)(I.t),this.#t=this.features.isEnabled[A.T.AppSyncWithSiteFiles],this.appsListService=(0,M.d)(T.U)}ngOnInit(){this.appsListService.getPendingApps().subscribe(s=>{this.pendingApps.set(s)})}closeDialog(){this.dialogRef.close()}onChange(s,r){const i=this.pendingApps();r?i.push(s):i.splice(i.indexOf(s),1),this.pendingApps.set(i)}install(){this.installing=!0,this.snackBar.open("Installing",void 0,{duration:2e3}),this.appsListService.installPendingApps(this.pendingApps()).subscribe({error:()=>{this.installing=!1,this.snackBar.open("Failed to install app. Please check console for more information",void 0,{duration:3e3})},next:()=>{this.installing=!1,this.snackBar.open("Installed app",void 0,{duration:2e3}),this.closeDialog()}})}buildGridOptions(){return{...P.C,columnDefs:[{field:"",width:40,cellClass:"no-outline",sortable:!0,cellRenderer:m,cellRendererParams:()=>({isDisabled:!this.#t(),onChange:(i,a)=>this.onChange(i,a)})},{...l.r.ItemsText,field:"Name",flex:1,sort:"asc",cellRenderer:n,cellRendererParams:{tooltipGetter:i=>`Server folder: ${i.ServerFolder}\nFolder: ${i.Folder}\nVersion: ${i.Version}\nDescription: ${i.Description}`}}]}}static#e=this.\u0275fac=function(r){return new(r||c)(t.rXU(F.CP),t.rXU(y.UG))};static#n=this.\u0275cmp=t.VBU({type:c,selectors:[["app-add-app-from-folder"]],hostVars:1,hostBindings:function(r,i){2&r&&t.Mr5("className",i.hostClass)},standalone:!0,features:[t.aNF],decls:15,vars:4,consts:[[1,"eav-dialog"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],[1,"eav-dialog-content"],[3,"featureNameId"],["align","end"],["type","button","mat-raised-button","",3,"click"],["type","button","mat-raised-button","","color","accent",3,"click","disabled"],[1,"ag-theme-material","eav-grid",3,"rowData","gridOptions"]],template:function(r,i){if(1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3,"Add App from Folder"),t.k0s()(),t.j41(4,"div",3),t.nrm(5,"app-feature-text-info",4),t.j41(6,"p"),t.EFF(7," Select an app from the apps-folder which has been copied there (or git-cloned) but not installed yet. "),t.k0s(),t.DNE(8,h,2,0,"p")(9,D,2,2,"div"),t.k0s(),t.j41(10,"mat-dialog-actions",5)(11,"button",6),t.bIt("click",function(){return i.closeDialog()}),t.EFF(12," Cancel "),t.k0s(),t.j41(13,"button",7),t.bIt("click",function(){return i.install()}),t.EFF(14," Install "),t.k0s()()()),2&r){let a,x;t.R7$(5),t.Y8G("featureNameId","AppSyncWithSiteFiles"),t.R7$(3),t.vxM(8,0==(null==(a=i.pendingApps())?null:a.length)?8:-1),t.R7$(),t.vxM(9,(null==(x=i.pendingApps())?null:x.length)>0?9:-1),t.R7$(4),t.Y8G("disabled",0===i.pendingApps().length||i.installing)}},dependencies:[F.E7,C.Hl,C.$z,f.L,E.p,p.xs],styles:[".eav-grid[_ngcontent-%COMP%]{height:200px;width:auto}"]})}return c})()},8136:(b,v,e)=>{e.d(v,{T:()=>t});const t={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement",AppExportAssetsAdvanced:"AppExportAssetsAdvanced",PickerUiCheckbox:"PickerUiCheckbox",PickerUiRadio:"PickerUiRadio",PickerSourceCsv:"PickerSourceCsv",PickerFormulas:"PickerFormulas",PickerUiMoreInfo:"PickerUiMoreInfo"}},5469:(b,v,e)=>{e.d(v,{L:()=>M});var t=e(5541),F=e(5797),A=e(9999),P=e(271),I=e(852),T=e(316),_=e(3840),u=e(7896),n=e(7580);function m(l,y){if(1&l){const p=n.RV6();n.j41(0,"div",2),n.nI1(1,"translate"),n.bIt("click",function(){n.eBV(p);const D=n.XpG(2);return n.Njj(D.openDialog())}),n.j41(2,"mat-icon"),n.EFF(3),n.k0s(),n.j41(4,"div",3)(5,"div",4),n.EFF(6),n.nI1(7,"translate"),n.k0s(),n.j41(8,"div",5),n.EFF(9),n.nI1(10,"translate"),n.k0s()()()}if(2&l){const p=n.XpG();n.Y8G("tippy",n.i5U(1,7,"Features.Tooltip",p.feature)),n.R7$(2),n.ZvI("icon icon-",p.icon,""),n.R7$(),n.JRh(p.icon),n.R7$(3),n.JRh(n.bMT(7,10,"Features.FeatureNotActivated")),n.R7$(3),n.JRh(n.bMT(10,12,"Features.ClickToFindOutMore"))}}function C(l,y){1&l&&n.DNE(0,m,11,14,"div",1),2&l&&n.vxM(0,y.show?0:-1)}function f(l,y){1&l&&(n.j41(0,"div"),n.EFF(1,"loading..."),n.k0s())}function E(l,y){1&l&&(n.j41(0,"div"),n.EFF(1,"loading..."),n.k0s())}let M=(()=>{class l extends t.x{set asInfo(p){this.asInfo$.next(p)}constructor(){super(),this.asInfo$=new F.t(!1),this.viewModel$=(0,A.z)([this.feature$,this.asInfo$,this.show$]).pipe((0,P.T)(([p,h,D])=>({feature:p,icon:h?"info":"warning",show:D})))}static#t=this.\u0275fac=function(h){return new(h||l)};static#e=this.\u0275cmp=n.VBU({type:l,selectors:[["app-feature-text-info"]],inputs:{asInfo:"asInfo"},standalone:!0,features:[n.Vt3,n.aNF],decls:5,vars:3,consts:[["loading",""],[1,"feature-text-info",3,"tippy"],[1,"feature-text-info",3,"click","tippy"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(h,D){if(1&h&&(n.DNE(0,C,1,1),n.nI1(1,"async"),n.DNE(2,f,2,0)(3,E,2,0,"ng-template",null,0,n.C5r)),2&h){let R;n.vxM(0,(R=n.bMT(1,1,D.viewModel$))?0:2,R)}},dependencies:[_.m_,_.An,T.Jj,I.h,I.D9,u.e],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]})}return l})()},5541:(b,v,e)=>{e.d(v,{x:()=>r,j:()=>i});var t=e(7580),F=e(7941),A=e(4824),P=e(519),I=e(6474);let _=(()=>{class a extends I.D{getFeatureDetails(o){return this.http.get(this.apiUrl("admin/feature/details"),{params:{nameId:o}})}static#t=this.\u0275fac=(()=>{let o;return function(g){return(o||(o=t.xGo(a)))(g||a)}})();static#e=this.\u0275prov=t.jDH({token:a,factory:a.\u0275fac})}return a})();var u=e(852),n=e(316),m=e(3840),C=e(4175),f=e(3777),E=e(7896),M=e(9914),l=e(5437),y=e(3347);function p(a,x){if(1&a){const o=t.RV6();t.j41(0,"div",1)(1,"div",2),t.EFF(2,"ID:"),t.k0s(),t.j41(3,"div",7)(4,"span",8),t.bIt("click",function(){const g=t.eBV(o),O=t.XpG(2);return t.Njj(O.copyToClipboard(g))}),t.EFF(5),t.k0s()()()}if(2&a){const o=x;t.R7$(4),t.Y8G("tippy",o),t.R7$(),t.JRh(o)}}function h(a,x){if(1&a){const o=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3),t.k0s()(),t.j41(4,"mat-card-content"),t.nrm(5,"p",0),t.nI1(6,"safeHtml"),t.j41(7,"div",1)(8,"div",2),t.EFF(9),t.nI1(10,"translate"),t.k0s(),t.j41(11,"div",3)(12,"span"),t.EFF(13),t.nI1(14,"translate"),t.k0s()()(),t.DNE(15,p,6,2,"div",1),t.k0s(),t.j41(16,"mat-card-actions",4)(17,"button",5),t.bIt("click",function(){const g=t.eBV(o),O=t.XpG();return t.Njj(O.findOutMore(g.link))}),t.j41(18,"mat-icon"),t.EFF(19,"open_in_new"),t.k0s(),t.EFF(20),t.nI1(21,"translate"),t.k0s(),t.j41(22,"button",6),t.bIt("click",function(){t.eBV(o);const g=t.XpG();return t.Njj(g.closeDialog())}),t.EFF(23),t.nI1(24,"translate"),t.k0s()()()}if(2&a){let o;const d=x;t.R7$(3),t.JRh(d.name),t.R7$(2),t.Y8G("innerHtml",t.bMT(6,7,d.description),t.npT),t.R7$(4),t.SpI("",t.bMT(10,9,"Features.Status"),":"),t.R7$(4),t.JRh(t.bMT(14,11,d.isEnabled?"Features.Active":"Features.NotActive")),t.R7$(2),t.vxM(15,(o=d.nameId)?15:-1,o),t.R7$(5),t.SpI(" ",t.bMT(21,13,"Features.FindOutMore")," "),t.R7$(3),t.SpI(" ",t.bMT(24,15,"Features.Close")," ")}}let D=(()=>{class a{constructor(o,d,g){this.dialogData=o,this.dialogRef=d,this.snackBar=g,this.featureDetailService=(0,l.d)(_)}ngOnInit(){this.viewModel$=this.featureDetailService.getFeatureDetails(this.dialogData)}copyToClipboard(o){(0,P.l)(o),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(o){window.open(o,"_blank")}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(d){return new(d||a)(t.rXU(F.Vh),t.rXU(F.CP),t.rXU(y.UG))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-feature-info-dialog"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["align","end"],["mat-raised-button","","color","accent",1,"eav-card-action-button",3,"click"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"click","tippy"]],template:function(d,g){if(1&d&&(t.DNE(0,h,25,17,"mat-card"),t.nI1(1,"async")),2&d){let O;t.vxM(0,(O=t.bMT(1,1,g.viewModel$))?0:-1,O)}},dependencies:[f.Hu,f.RN,f.YY,f.m2,f.MM,f.dh,C.Hl,C.$z,m.m_,m.An,n.Jj,u.h,u.D9,E.e,M.$]})}return a})();var R=e(5797),c=e(6647),$=e(9999),s=e(271);let r=(()=>{class a{set featureNameId(o){this.featureNameId$.next(o)}set showIf(o){this.showIf$.next(1==o)}#t;#e;#n;#o;constructor(){this.featureNameId$=new R.t(null),this.showIf$=new R.t(!1),this.#t=(0,t.WQX)(F.bZ),this.#e=(0,t.WQX)(t.c1b),this.#n=(0,t.WQX)(t.gRc),this.#o=(0,t.WQX)(A.t),this.feature$=this.featureNameId$.pipe((0,c.n)(o=>this.#o.get$(o))),this.show$=(0,$.z)([this.feature$,this.showIf$]).pipe((0,s.T)(([o,d])=>d==(o?.isEnabled??!1)))}openDialog(){i(this.#t,this.featureNameId$.value,this.#e,this.#n)}static#a=this.\u0275fac=function(d){return new(d||a)};static#i=this.\u0275dir=t.FsC({type:a,inputs:{featureNameId:"featureNameId",showIf:"showIf"}})}return a})();function i(a,x,o,d){a.open(D,{autoFocus:!1,data:x,viewContainerRef:o,width:"400px"}),d.markForCheck()}},1772:(b,v,e)=>{e.d(v,{I:()=>_,u:()=>T});var t=e(6647),F=e(9452),A=e(3550),P=e(6474),I=e(7580);const T="admin/app/";let _=(()=>{class u extends P.D{importApp(m,C,f=!1){const E=new FormData;return E.append("File",m),E.append("Name",C??""),this.http.post(this.apiUrl(T+"Import"),E,{params:{zoneId:this.zoneId}}).pipe((0,t.n)(M=>{if(f&&M.Messages[0]?.MessageType===A.G1.Warning){const l=prompt(M.Messages[0].Text+" Would you like to install it using another folder name?");if(l)return this.importApp(m,l,!0)}return(0,F.of)(M)}))}static#t=this.\u0275fac=(()=>{let m;return function(f){return(m||(m=I.xGo(u)))(f||u)}})();static#e=this.\u0275prov=I.jDH({token:u,factory:u.\u0275fac})}return u})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.01.00/dist/ng-edit/projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6.7627f2768a12d56b.js.map