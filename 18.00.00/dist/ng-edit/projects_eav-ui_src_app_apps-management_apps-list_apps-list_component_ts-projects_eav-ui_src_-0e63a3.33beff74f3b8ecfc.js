"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-0e63a3","projects_eav-ui_src_app_shared_components_base-with-child-dialog_component_ts"],{1609:(I,f,e)=>{e.r(f),e.d(f,{AppsListComponent:()=>ot});var t=e(8559),d=e(9184),o=e(5797),g=e(4205),n=e(3037),p=e(6647),r=e(1318),_=e(9452),u=e(6301),v=e(9999),m=e(271),l=e(8136),C=e(1735),c=e(1960),E=e(6378),T=e(251),P=e(3216),U=e(8873),W=e(4858),S=e(3583),b=e(1034),B=e(5060),y=e(6256),D=e(3840),$=e(1657),N=e(4601);function G(h,M){1&h&&(t.j41(0,"mat-icon"),t.EFF(1,"foundation"),t.k0s())}function K(h,M){1&h&&(t.j41(0,"mat-icon"),t.EFF(1,"holiday_village"),t.k0s())}function V(h,M){if(1&h){const i=t.RV6();t.j41(0,"button",7),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.do("flushCache"))}),t.j41(1,"mat-icon"),t.EFF(2,"cached"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Flush cache"),t.k0s()(),t.j41(5,"button",8),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.do("deleteApp"))}),t.j41(6,"mat-icon"),t.EFF(7,"delete"),t.k0s(),t.j41(8,"span"),t.EFF(9,"Delete"),t.k0s()()}if(2&h){const i=t.XpG();t.R7$(5),t.Y8G("disabled",!i.app.IsApp)}}let X=(()=>{class h{agInit(i){this.params=i,this.app=this.params.data}refresh(i){return!0}do(i){this.params.do(i,this.app)}static#t=this.\u0275fac=function(a){return new(a||h)};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["app-apps-list-actions"]],standalone:!0,features:[t.aNF],decls:11,vars:8,consts:[["menu","matMenu"],[1,"actions-component"],[1,"eav-grid-action-button","icon",3,"tippy","tippyDisabled"],[3,"lightSpeedOwner","params","lightSpeed"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["matMenuContent",""],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click","disabled"]],template:function(a,s){if(1&a&&(t.j41(0,"div",1)(1,"div",2),t.DNE(2,G,2,0,"mat-icon")(3,K,2,0,"mat-icon"),t.k0s(),t.nrm(4,"app-lightspeed-action",3),t.j41(5,"div",4)(6,"mat-icon"),t.EFF(7,"more_horiz"),t.k0s()()(),t.j41(8,"mat-menu",5,0),t.DNE(10,V,10,1,"ng-template",6),t.k0s()),2&a){const A=t.sdS(9);t.R7$(),t.Y8G("tippy",s.app.IsGlobal?"This app is global":s.app.IsInherited?"This app is inherited":"")("tippyDisabled",!s.app.IsGlobal&&!s.app.IsInherited),t.R7$(),t.vxM(2,s.app.IsGlobal?2:-1),t.R7$(),t.vxM(3,s.app.IsInherited?3:-1),t.R7$(),t.Y8G("lightSpeedOwner",s.app)("params",s.params)("lightSpeed",s.app.lightSpeed),t.R7$(),t.Y8G("matMenuTriggerFor",A)}},dependencies:[N.e,D.m_,D.An,y.Y,B.pZ,B.r6,b.Cn,b.kk,b.fb,b.z8,b.Cp,$.E],encapsulation:2})}return h})();var k=e(6838),x=e(7941),Y=e(8713);const w={states:{true:{tooltip:"Show this app to users",icon:"visibility"},false:{tooltip:"Hide this app from users",icon:"visibility_off"}}},z={states:{true:{clickable:!0,tooltip:"This App uses obsolete code which will cause problems on future upgrades. Click to see details.",icon:"bug_report",getUrl:h=>window.$2sxc.http.apiUrl("sys/insights/logs?key=warnings-obsolete&filter=AppId="+h.Id)},false:{tooltip:"Hide this app from users",icon:""}}};var j=e(8991),H=e(3472),O=e(4175),L=e(316),R=e(3183),J=e(8824),Z=e(9509),F=e(1828),Q=e(4575),q=e(7037),tt=e(5437),et=e(3347),nt=e(9841);const it=h=>({"fab-opened":h});function at(h,M){if(1&h){const i=t.RV6();t.j41(0,"div",0)(1,"ag-grid-angular",1),t.bIt("filesDropped",function(s){t.eBV(i);const A=t.XpG();return t.Njj(A.importApp(s))}),t.k0s(),t.j41(2,"mat-dialog-actions",2)(3,"eco-fab-speed-dial",3),t.bIt("openChange",function(s){t.eBV(i);const A=t.XpG();return t.Njj(A.openChange(s))}),t.j41(4,"eco-fab-speed-dial-trigger",4)(5,"button",5)(6,"mat-icon",6),t.EFF(7),t.k0s()()(),t.j41(8,"eco-fab-speed-dial-actions",7)(9,"button",8),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.browseCatalog())}),t.j41(10,"mat-icon"),t.EFF(11,"search"),t.k0s()(),t.j41(12,"button",9),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.createInheritedApp())}),t.j41(13,"mat-icon"),t.EFF(14,"holiday_village"),t.k0s()(),t.j41(15,"button",10),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.addFromFolder())}),t.j41(16,"mat-icon",11),t.EFF(17," add "),t.k0s()(),t.j41(18,"button",12),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.importApp())}),t.j41(19,"mat-icon"),t.EFF(20,"cloud_upload"),t.k0s()(),t.j41(21,"button",13),t.bIt("click",function(){t.eBV(i);const s=t.XpG();return t.Njj(s.createApp())}),t.j41(22,"mat-icon"),t.EFF(23,"add"),t.k0s()()()()()()}if(2&h){const i=M,a=t.XpG();t.R7$(),t.Y8G("rowData",i.apps)("gridOptions",a.gridOptions)("allowedFileTypes","zip"),t.R7$(2),t.Y8G("ngClass",t.eq3(7,it,i.fabOpen)),t.R7$(),t.Y8G("spin",!0),t.R7$(3),t.JRh(i.fabOpen?"close":"add"),t.R7$(9),t.Y8G("matBadgeHidden",a.isAddFromFolderEnabled())}}let ot=(()=>{class h extends C.V{constructor(i,a,s,A,lt,rt,dt){super(i,a,new H.B("AppsListComponent",!1)),this.router=i,this.route=a,this.snackBar=s,this.context=A,this.dialog=lt,this.viewContainerRef=rt,this.changeDetectorRef=dt,this.fabOpen$=new o.t(!1),this.gridOptions=this.buildGridOptions(),this.refreshApps$=new g.B,this.features=(0,t.WQX)(W.D),this.isAddFromFolderEnabled=this.features.isEnabled(l.T.AppSyncWithSiteFiles),this.appsListService=(0,tt.d)(S.U),J.syG.registerModules([Z.Q])}ngOnInit(){const i=this.log.rxTap("apps$");this.apps$=this.refreshApps$.pipe(i.pipe(),(0,n.Z)(void 0),(0,p.n)(()=>this.appsListService.getAll().pipe((0,r.W)(()=>(0,_.of)(void 0)))),(0,u.t)(1),i.shareReplay()),this.subscriptions.add(this.childDialogClosed$().subscribe(()=>{this.refreshApps$.next()})),this.viewModel$=(0,v.z)([this.apps$,this.fabOpen$]).pipe((0,m.T)(([a,s])=>({apps:a,fabOpen:s})))}ngOnDestroy(){this.fabOpen$.complete(),this.refreshApps$.complete(),super.ngOnDestroy()}openChange(i){this.fabOpen$.next(i)}browseCatalog(){window.open("https://2sxc.org/apps","_blank")}createApp(){this.router.navigate(["create"],{relativeTo:this.route.parent.firstChild})}createInheritedApp(){this.router.navigate(["create-inherited"],{relativeTo:this.route.parent.firstChild})}addFromFolder(){this.router.navigate(["add-app-from-folder"],{relativeTo:this.route.parent.firstChild})}importApp(i){this.router.navigate(["import"],{relativeTo:this.route.parent.firstChild,state:{files:i}})}deleteApp(i){const a=prompt(`This cannot be undone. To really delete this app, type 'yes!' or type/paste the app-name here. Are you sure want to delete '${i.Name}' (${i.Id})?`);null!==a&&(a===i.Name||"yes!"===a?(this.snackBar.open("Deleting..."),this.appsListService.delete(i.Id).subscribe({error:()=>{this.snackBar.open("Delete failed. Please check console for more information",void 0,{duration:3e3}),this.refreshApps$.next()},next:()=>{this.snackBar.open("Deleted",void 0,{duration:2e3}),this.refreshApps$.next()}})):alert("Input did not match - will not delete"))}flushApp(i){confirm(`Flush the App Cache for ${i.Name} (${i.Id})?`)&&(this.snackBar.open("Flushing cache..."),this.appsListService.flushCache(i.Id).subscribe({error:()=>{this.snackBar.open("Cache flush failed. Please check console for more information",void 0,{duration:3e3})},next:()=>{this.snackBar.open("Cache flushed",void 0,{duration:2e3})}}))}openLightSpeed(i){const a=(0,P.s)(Y.g.getLightSpeedEditParams(i.Id));this.router.navigate([`${this.context.zoneId}/${i.Id}/edit/${a}`],{relativeTo:this.route.parent.firstChild})}openApp(i){this.router.navigate([i.Id.toString()],{relativeTo:this.route.parent.firstChild})}openLightSpeedFeatInfo(){(0,k.jr)(this.dialog,l.T.LightSpeed,this.viewContainerRef,this.changeDetectorRef)}buildGridOptions(){return{...T.C,columnDefs:[{...F.r.Id,cellRenderer:E.L,cellRendererParams:{tooltipGetter:s=>`ID: ${s.Id}\nGUID: ${s.Guid}`}},{...F.r.IconShow,cellRenderer:j.N,cellRendererParams:{settings:()=>w}},{...F.r.TextWide,field:"Name",cellClass:"apps-list-primary-action highlight".split(" "),sort:"asc",onCellClicked:a=>{this.openApp(a.data)},cellRenderer:a=>{const s=a.data;return`\n            <div class="container">\n              ${s.Thumbnail?`<img class="image logo" src="${s.Thumbnail}?w=40&h=40&mode=crop"></img>`:'<div class="image logo"><span class="material-icons-outlined">star_border</span></div>'}\n              <div class="text">${a.value}</div>\n            </div>\n            `}},{...F.r.TextWide,field:"Folder"},{...F.r.Character,field:"Version",width:78},{...F.r.Number,field:"Items"},{...F.r.Boolean,field:"HasCodeWarnings",headerName:"Code",filter:c.y,cellRenderer:j.N,cellRendererParams:{settings:a=>z}},{...F.r.ActionsPinnedRight3,cellRenderer:X,cellRendererParams:{onOpenLightspeed:a=>this.openLightSpeed(a),openLightspeedFeatureInfo:()=>this.openLightSpeedFeatInfo(),do:(a,s)=>{switch(a){case"deleteApp":this.deleteApp(s);break;case"flushCache":this.flushApp(s)}}}}]}}static#t=this.\u0275fac=function(a){return new(a||h)(t.rXU(d.Ix),t.rXU(d.nX),t.rXU(et.UG),t.rXU(U.o),t.rXU(x.bZ),t.rXU(t.c1b),t.rXU(t.gRc))};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["app-apps-list"]],standalone:!0,features:[t.Vt3,t.aNF],decls:3,vars:3,consts:[[1,"grid-wrapper","mat-tab-grid-wrapper"],["appDragAndDrop","",1,"ag-theme-material",3,"filesDropped","rowData","gridOptions","allowedFileTypes"],["align","end"],[1,"eav-eco-fab-speed-dial",3,"openChange","ngClass"],[3,"spin"],["mat-fab",""],[1,"spin180"],[1,"eav-eco-fab-speed-dial-actions"],["mat-mini-fab","","label","Find more apps",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Create inherited app",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Add from folder",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadge","\u{1f48e}","matBadgePosition","below after","aria-hidden","false",3,"matBadgeHidden"],["mat-mini-fab","","label","Import app",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Create app",1,"eav-eco-fab-speed-dial-action-button",3,"click"]],template:function(a,s){if(1&a&&(t.DNE(0,at,24,9,"div",0),t.nI1(1,"async"),t.nrm(2,"router-outlet")),2&a){let A;t.vxM(0,(A=t.bMT(1,1,s.viewModel$))?0:-1,A)}},dependencies:[q.p,nt.xs,x.E7,R.TE,L.YU,R.p1,O.Hl,O.$0,O.Sr,D.m_,D.An,R.yf,y.Y,y.k,d.n3,L.Jj,Q.S]})}return h})()},5437:(I,f,e)=>{e.d(f,{d:()=>d});var t=e(8559);function d(o,g){return g??=(0,t.WQX)(t.zZn),t.zZn.create({providers:[o],parent:g}).get(o,void 0,{self:!0})}},2871:(I,f,e)=>{e.d(f,{J:()=>o});var t=e(3840),d=e(8559);let o=(()=>{class g{constructor(){this.trueIcon="check_circle",this.falseIcon="circle"}agInit(p){let r=p.value;p.reverse&&(r=!r),p.trueIcon&&(this.trueIcon=p.trueIcon),p.falseIcon&&(this.falseIcon=p.falseIcon),this.icon=r?this.trueIcon:this.falseIcon}refresh(p){return!0}static#t=this.\u0275fac=function(r){return new(r||g)};static#e=this.\u0275cmp=d.VBU({type:g,selectors:[["app-rest-api-true-false"]],standalone:!0,features:[d.aNF],decls:3,vars:1,consts:[[1,"icon-container"]],template:function(r,_){1&r&&(d.j41(0,"div",0)(1,"mat-icon"),d.EFF(2),d.k0s()()),2&r&&(d.R7$(2),d.JRh(_.icon))},dependencies:[t.m_,t.An],encapsulation:2})}return g})()},8136:(I,f,e)=>{e.d(f,{T:()=>t});const t={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",FieldShareConfigManagement:"FieldShareConfigManagement"}},1772:(I,f,e)=>{e.d(f,{I:()=>u,u:()=>_});var t=e(6647),d=e(9452),o=e(3550),g=e(8873),n=e(8559),p=e(6443),r=e(4821);const _="admin/app/";let u=(()=>{class v{constructor(l,C,c){this.http=l,this.context=C,this.dnnContext=c}importApp(l,C,c=!1){const E=new FormData;return E.append("File",l),E.append("Name",C??""),this.http.post(this.dnnContext.$2sxc.http.apiUrl(_+"Import"),E,{params:{zoneId:this.context.zoneId.toString()}}).pipe((0,t.n)(T=>{if(c&&T.Messages[0]?.MessageType===o.G1.Warning){const P=prompt(T.Messages[0].Text+" Would you like to install it using another folder name?");if(P)return this.importApp(l,P,!0)}return(0,d.of)(T)}))}static#t=this.\u0275fac=function(C){return new(C||v)(n.KVO(p.Qq),n.KVO(g.o),n.KVO(r.ob))};static#e=this.\u0275prov=n.jDH({token:v,factory:v.\u0275fac})}return v})()},8991:(I,f,e)=>{e.d(f,{N:()=>m});const t={states:{true:{tooltip:"true/on",icon:"radio_button_checked"},false:{tooltip:"false/off",icon:"radio_button_unchecked"}}};var d=e(4601),o=e(3840),g=e(316),n=e(8559);const p=l=>({clickable:l});function r(l,C){1&l&&n.eu8(0)}function _(l,C){if(1&l&&(n.j41(0,"a",2),n.DNE(1,r,1,0,"ng-container",3),n.k0s()),2&l){const c=n.XpG(),E=n.sdS(4);n.Y8G("href",c.data.url,n.B4B),n.R7$(),n.Y8G("ngTemplateOutlet",E)}}function u(l,C){if(1&l&&(n.j41(0,"div",4)(1,"mat-icon"),n.EFF(2),n.k0s()()),2&l){const c=n.XpG();n.Y8G("ngClass",n.eq3(3,p,c.data.clickable))("tippy",c.data.tooltip),n.R7$(2),n.JRh(c.data.icon)}}function v(l,C){if(1&l&&(n.j41(0,"div",4)(1,"mat-icon"),n.EFF(2),n.k0s()()),2&l){const c=n.XpG();n.Y8G("ngClass",n.eq3(3,p,c.data.clickable))("tippy",c.data.tooltip),n.R7$(2),n.JRh(c.data.icon)}}let m=(()=>{class l{agInit(c){this.value=c.value,this.allSettings=c.settings?.(c.data)??t;const E=this.allSettings.states[this.value?"true":"false"];this.data={...E,url:E.url??E.getUrl?.(c.data)}}refresh(c){return!0}static#t=this.\u0275fac=function(E){return new(E||l)};static#e=this.\u0275cmp=n.VBU({type:l,selectors:[["app-ag-bool-icon-renderer"]],standalone:!0,features:[n.aNF],decls:5,vars:1,consts:[["showIcon",""],[1,"icon-container"],["target","_blank",3,"href"],[4,"ngTemplateOutlet"],[1,"icon-cell","icon",3,"ngClass","tippy"]],template:function(E,T){1&E&&(n.j41(0,"div",1),n.DNE(1,_,2,2,"a",2)(2,u,3,5),n.k0s(),n.DNE(3,v,3,5,"ng-template",null,0,n.C5r)),2&E&&(n.R7$(),n.vxM(1,T.data.url?1:2))},dependencies:[d.e,o.m_,o.An,g.YU],encapsulation:2})}return l})()},1828:(I,f,e)=>{e.d(f,{r:()=>g});var t=e(1960),d=e(8991),o=e(2871);class g{static#t=this.ActionsPinnedRight1={width:42,cellClass:"secondary-action no-padding".split(" "),pinned:"right"};static#e=this.ActionsPinnedRight3={width:122,cellClass:"secondary-action no-padding".split(" "),pinned:"right"};static#n=this.ActionsPinnedRight4={width:162,cellClass:"secondary-action no-padding".split(" "),pinned:"right"};static#i=this.ActionsPinnedRight5={width:202,cellClass:"secondary-action no-padding".split(" "),pinned:"right"};static#a=this.ActionsPinnedRight6={width:82,cellClass:"secondary-action no-padding".split(" "),pinned:"right"};static#s=this.ActionsPinnedRight7={width:62,cellClass:"secondary-action no-outline no-padding".split(" "),pinned:"right"};static#o=this.IconShow={headerName:"Show",width:70,headerClass:"dense",cellClass:"icons no-outline".split(" "),sortable:!0,filter:t.y,valueGetter:p=>!p.data.IsHidden,cellRenderer:d.N};static#l=this.Items={width:102,headerClass:"dense",cellClass:"secondary-action no-padding".split(" "),sortable:!0,filter:"agNumberColumnFilter"};static#r=this.Fields={width:94,headerClass:"dense",cellClass:"secondary-action no-padding".split(" "),sortable:!0,filter:"agNumberColumnFilter"};static#d=this.Character={width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"};static#c=this.Id={headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter"};static#p=this.Boolean={width:70,headerClass:"dense",cellClass:"number-cell no-outline".split(" "),sortable:!0};static#h=this.Boolean2={width:100,sortable:!0,cellClass:"no-outline",filter:t.y};static#u=this.Boolean3={headerClass:"dense",width:80,cellClass:"no-outline",cellRenderer:o.J,cellRendererParams:{reverse:!1}};static#m=this.Number={width:70,headerClass:"dense",cellClass:"number-cell no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter"};static#g=this.TextWideType={flex:3,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,filter:"agTextColumnFilter"};static#f=this.TextWide={flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"};static#_=this.TextWideMin100={flex:1,minWidth:100,sortable:!0,filter:"agTextColumnFilter"};static#C=this.TextWideFlex3={flex:3,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"};static#v=this.TextNarrow={flex:1,minWidth:150,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"};static#E=this.TextWideActionClass={flex:2,minWidth:250,cellClass:"primary-action no-padding no-outline".split(" "),sortable:!0,filter:"agTextColumnFilter"}}},1735:(I,f,e)=>{e.d(f,{V:()=>u});var t=e(9184),d=e(1567),o=e(3037),g=e(271),n=e(5057),p=e(3176),r=e(3472);class u extends p.${constructor(m,l,C){super(),this.router=m,this.route=l,this.log=C,this.log??=new r.B("BaseComponent",!1)}childDialogClosed$(){return this.router.events.pipe((0,d.p)(m=>m instanceof t.wF),(0,o.Z)(!!this.route.snapshot.firstChild),(0,g.T)(()=>!!this.route.snapshot.firstChild),(0,n.J)(),(0,d.p)(([m,l])=>m&&!l))}}},1960:(I,f,e)=>{e.d(f,{y:()=>g});var t=e(4456),d=e(3804),o=e(8559);let g=(()=>{class n{constructor(){this.filter=""}agInit(r){this.filterParams=r}isFilterActive(){return""!==this.filter}doesFilterPass(r){const u=this.filterParams.valueGetter({api:this.filterParams.api,colDef:this.filterParams.colDef,column:this.filterParams.column,columnApi:this.filterParams.columnApi,context:this.filterParams.context,data:r.node.data,getValue:v=>r.node.data[v],node:r.node});return null!=u&&u.toString()===this.filter}getModel(){if(this.isFilterActive())return{filterType:"boolean",filter:this.filter}}setModel(r){this.filter=r?r.filter:""}afterGuiAttached(r){}filterChanged(){this.filterParams.filterChangedCallback()}static#t=this.\u0275fac=function(_){return new(_||n)};static#e=this.\u0275cmp=o.VBU({type:n,selectors:[["app-boolean-filter"]],standalone:!0,features:[o.aNF],decls:7,vars:1,consts:[[3,"ngModelChange","ngModel"],["value",""],["value","true"],["value","false"]],template:function(_,u){1&_&&(o.j41(0,"mat-radio-group",0),o.mxI("ngModelChange",function(m){return o.DH7(u.filter,m)||(u.filter=m),m}),o.bIt("ngModelChange",function(){return u.filterChanged()}),o.j41(1,"mat-radio-button",1),o.EFF(2,"All"),o.k0s(),o.j41(3,"mat-radio-button",2),o.EFF(4,"True"),o.k0s(),o.j41(5,"mat-radio-button",3),o.EFF(6,"False"),o.k0s()()),2&_&&o.R50("ngModel",u.filter)},dependencies:[t.YN,t.BC,t.vS,d.Wk,d.VT,d._g],styles:[".mat-mdc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:12px;width:160px;height:104px}"]})}return n})()},6378:(I,f,e)=>{e.d(f,{L:()=>_});var t=e(519),d=e(316),o=e(3840),g=e(4601),n=e(8559),p=e(3347);const r=(u,v)=>({"align-start":u,"align-end":v});let _=(()=>{class u{constructor(m){this.snackBar=m}agInit(m){this.id=m.value,this.align="number"==typeof this.id?"end":"start",this.tooltip=m.tooltipGetter(m.data)}refresh(m){return!0}copy(){(0,t.l)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}static#t=this.\u0275fac=function(l){return new(l||u)(n.rXU(p.UG))};static#e=this.\u0275cmp=n.VBU({type:u,selectors:[["app-id-field"]],standalone:!0,features:[n.aNF],decls:5,vars:6,consts:[["matRipple","",1,"id-box","highlight",3,"click","tippy","ngClass"],[1,"id"],[1,"icon"]],template:function(l,C){1&l&&(n.j41(0,"div",0),n.bIt("click",function(){return C.copy()}),n.j41(1,"span",1),n.EFF(2),n.k0s(),n.j41(3,"mat-icon",2),n.EFF(4,"file_copy"),n.k0s()()),2&l&&(n.Y8G("tippy",C.tooltip)("ngClass",n.l_i(3,r,"start"===C.align,"end"===C.align)),n.R7$(2),n.JRh(C.id))},dependencies:[d.YU,o.m_,o.An,g.e],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.id-box.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.id-box.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%]{display:none}.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]})}return u})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.00/dist/ng-edit/projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-0e63a3.33beff74f3b8ecfc.js.map