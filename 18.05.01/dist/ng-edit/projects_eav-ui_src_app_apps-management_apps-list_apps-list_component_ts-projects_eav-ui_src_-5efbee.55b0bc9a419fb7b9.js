"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-5efbee"],{1609:(T,m,e)=>{e.r(m),e.d(m,{AppsListComponent:()=>V});var r=e(9509),g=e(8824),C=e(316),t=e(9148),E=e(6256),d=e(4175),D=e(7941),n=e(3840),u=e(2159),c=e(3183),h=e(2938),f=e(8713),i=e(8136),l=e(4824),A=e(9006),y=e(8991),b=e(1828),O=e(1960),R=e(251),L=e(4575),U=e(3216),M=e(4435),B=e(7037),k=e(8471),_=e(8873),j=e(3583);const W={states:{true:{tooltip:"Show this app to users",icon:"visibility"},false:{tooltip:"Hide this app from users",icon:"visibility_off"}}},$={states:{true:{clickable:!0,tooltip:"This App uses obsolete code which will cause problems on future upgrades. Click to see details.",icon:"bug_report",getUrl:p=>window.$2sxc.http.apiUrl("sys/insights/logs?key=warnings-obsolete&filter=AppId="+p.Id)},false:{tooltip:"Hide this app from users",icon:""}}};var F=e(1034),I=e(5060),G=e(1657),K=e(4601);function N(p,S){1&p&&(t.j41(0,"mat-icon"),t.EFF(1,"foundation"),t.k0s())}function x(p,S){1&p&&(t.j41(0,"mat-icon"),t.EFF(1,"holiday_village"),t.k0s())}function w(p,S){if(1&p){const a=t.RV6();t.j41(0,"button",7),t.bIt("click",function(){t.eBV(a);const s=t.XpG();return t.Njj(s.do("flushCache"))}),t.j41(1,"mat-icon"),t.EFF(2,"cached"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Flush cache"),t.k0s()(),t.j41(5,"button",8),t.bIt("click",function(){t.eBV(a);const s=t.XpG();return t.Njj(s.do("deleteApp"))}),t.j41(6,"mat-icon"),t.EFF(7,"delete"),t.k0s(),t.j41(8,"span"),t.EFF(9,"Delete"),t.k0s()()}if(2&p){const a=t.XpG();t.R7$(5),t.Y8G("disabled",!a.app.IsApp)}}let X=(()=>{class p{agInit(a){this.params=a,this.app=this.params.data}refresh(a){return!0}do(a){this.params.do(a,this.app)}static{this.\u0275fac=function(o){return new(o||p)}}static{this.\u0275cmp=t.VBU({type:p,selectors:[["app-apps-list-actions"]],standalone:!0,features:[t.aNF],decls:11,vars:8,consts:[["menu","matMenu"],[1,"actions-component"],[1,"eav-grid-action-button","icon",3,"tippy","tippyDisabled"],[3,"lightSpeedOwner","params","lightSpeed"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["matMenuContent",""],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click","disabled"]],template:function(o,s){if(1&o&&(t.j41(0,"div",1)(1,"div",2),t.DNE(2,N,2,0,"mat-icon")(3,x,2,0,"mat-icon"),t.k0s(),t.nrm(4,"app-lightspeed-action",3),t.j41(5,"div",4)(6,"mat-icon"),t.EFF(7,"more_horiz"),t.k0s()()(),t.j41(8,"mat-menu",5,0),t.DNE(10,w,10,1,"ng-template",6),t.k0s()),2&o){const v=t.sdS(9);t.R7$(),t.Y8G("tippy",s.app.IsGlobal?"This app is global":s.app.IsInherited?"This app is inherited":"")("tippyDisabled",!s.app.IsGlobal&&!s.app.IsInherited),t.R7$(),t.vxM(s.app.IsGlobal?2:-1),t.R7$(),t.vxM(s.app.IsInherited?3:-1),t.R7$(),t.Y8G("lightSpeedOwner",s.app)("params",s.params)("lightSpeed",s.app.lightSpeed),t.R7$(),t.Y8G("matMenuTriggerFor",v)}},dependencies:[K.e,n.m_,n.An,E.Y,I.pZ,I.r6,F.Cn,F.kk,F.fb,F.z8,F.Cp,G.E],encapsulation:2})}}return p})();var H=e(3347),Y=e(9841);const z=p=>({"fab-opened":p});let V=(()=>{class p{#e;#t;constructor(a,o,s,v,P){this.snackBar=a,this.context=o,this.matDialog=s,this.viewContainerRef=v,this.changeDetectorRef=P,this.log=(0,M.T)({AppsListComponent:p}),this.gridOptions=this.#r(),this.features=(0,t.WQX)(l.t),this.isAddFromFolderEnabled=this.features.isEnabled[i.T.AppSyncWithSiteFiles],this.#e=(0,h.d)(j.U),this.#t=(0,h.d)(k.c),this.fabOpen=(0,t.vPA)(!1),this.#s=(0,t.vPA)(0),this.apps=(0,t.EWP)(()=>(this.#s(),this.#e.getAll())),g.syG.registerModules([r.Q])}#s;ngOnInit(){this.#t.doOnDialogClosed(()=>this.#a())}openChange(a){this.fabOpen.set(a)}browseCatalog(){window.open("https://2sxc.org/apps","_blank")}createApp(){this.#t.navRelative(["create"])}createInheritedApp(){this.#t.navRelative(["create-inherited"])}addFromFolder(){this.#t.navRelative(["add-app-from-folder"])}importApp(a){this.#t.navRelative(["import"],{state:{files:a}})}#i(a){const o=prompt(`This cannot be undone. To really delete this app, type 'yes!' or type/paste the app-name here. Are you sure want to delete '${a.Name}' (${a.Id})?`);null!==o&&(o===a.Name||"yes!"===o?(this.snackBar.open("Deleting..."),this.#e.delete(a.Id).subscribe({error:()=>{this.snackBar.open("Delete failed. Please check console for more information",void 0,{duration:3e3}),this.#a()},next:()=>{this.snackBar.open("Deleted",void 0,{duration:2e3}),this.#a()}})):alert("Input did not match - will not delete"))}#n(a){confirm(`Flush the App Cache for ${a.Name} (${a.Id})?`)&&(this.snackBar.open("Flushing cache..."),this.#e.flushCache(a.Id).subscribe({error:()=>this.snackBar.open("Cache flush failed. Please check console.",void 0,{duration:3e3}),next:()=>this.snackBar.open("Cache flushed",void 0,{duration:2e3})}))}#o(a){const o=(0,U.s)(f.g.getLightSpeedEditParams(a.Id));return this.#t.urlSubRoute(`${this.context.zoneId}/${a.Id}/edit/${o}`)}openLightSpeedFeatInfo(){(0,A.j)(this.matDialog,i.T.LightSpeed,this.viewContainerRef,this.changeDetectorRef)}#r(){return{...R.C,columnDefs:[{...b.r.IdWithDefaultRenderer,cellRendererParams:b.r.idFieldParamsTooltipGetter()},{...b.r.IconShow,cellRenderer:y.N,cellRendererParams:{settings:()=>W}},{...b.r.TextWide,field:"Name",cellClass:"apps-list-primary-action highlight".split(" "),sort:"asc",cellRenderer:o=>{const s=o.data;return`\n              <a class="default-link fill-cell" href="#${this.#t.urlSubRoute(s.Id.toString())}">\n                <div class="container">\n                  ${s.Thumbnail?`<img class="image logo" src="${s.Thumbnail}?w=40&h=40&mode=crop"></img>`:'<div class="image logo"><span class="material-symbols-outlined">star</span></div>'}\n                  ${o.value}\n                </div>\n              </a>\n            `}},{...b.r.TextWide,field:"Folder"},{...b.r.Character,field:"Version",width:78},{...b.r.Number,field:"Items"},{...b.r.Boolean,field:"HasCodeWarnings",headerName:"Code",filter:O.y,cellRenderer:y.N,cellRendererParams:{settings:()=>$}},{...b.r.ActionsPinnedRight3,cellRenderer:X,cellRendererParams:{lightSpeedLink:o=>this.#o(o),openLightspeedFeatureInfo:()=>this.openLightSpeedFeatInfo(),do:(o,s)=>{switch(o){case"deleteApp":this.#i(s);break;case"flushCache":this.#n(s)}}}}]}}#a(){this.#s.update(a=>a+1)}static{this.\u0275fac=function(o){return new(o||p)(t.rXU(H.UG),t.rXU(_.o),t.rXU(D.bZ),t.rXU(t.c1b),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:p,selectors:[["app-apps-list"]],standalone:!0,features:[t.aNF],decls:25,vars:9,consts:[[1,"grid-wrapper","mat-tab-grid-wrapper"],["appDragAndDrop","",1,"ag-theme-material",3,"filesDropped","rowData","gridOptions","allowedFileTypes"],["align","end"],[1,"eav-eco-fab-speed-dial",3,"openChange","ngClass"],[3,"spin"],["mat-fab",""],[1,"spin180"],[1,"eav-eco-fab-speed-dial-actions"],["mat-mini-fab","","label","Find more apps",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Create inherited app",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Add from folder",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadge","\u{1f48e}","matBadgePosition","below after","aria-hidden","false",3,"matBadgeHidden"],["mat-mini-fab","","label","Import app",1,"eav-eco-fab-speed-dial-action-button",3,"click"],["mat-mini-fab","","label","Create app",1,"eav-eco-fab-speed-dial-action-button",3,"click"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"ag-grid-angular",1),t.bIt("filesDropped",function(P){return s.importApp(P)}),t.k0s(),t.j41(2,"mat-dialog-actions",2)(3,"eco-fab-speed-dial",3),t.bIt("openChange",function(P){return s.openChange(P)}),t.j41(4,"eco-fab-speed-dial-trigger",4)(5,"button",5)(6,"mat-icon",6),t.EFF(7),t.k0s()()(),t.j41(8,"eco-fab-speed-dial-actions",7)(9,"button",8),t.bIt("click",function(){return s.browseCatalog()}),t.j41(10,"mat-icon"),t.EFF(11,"search"),t.k0s()(),t.j41(12,"button",9),t.bIt("click",function(){return s.createInheritedApp()}),t.j41(13,"mat-icon"),t.EFF(14,"holiday_village"),t.k0s()(),t.j41(15,"button",10),t.bIt("click",function(){return s.addFromFolder()}),t.j41(16,"mat-icon",11),t.EFF(17," add "),t.k0s()(),t.j41(18,"button",12),t.bIt("click",function(){return s.importApp()}),t.j41(19,"mat-icon"),t.EFF(20,"cloud_upload"),t.k0s()(),t.j41(21,"button",13),t.bIt("click",function(){return s.createApp()}),t.j41(22,"mat-icon"),t.EFF(23,"add"),t.k0s()()()()()(),t.nrm(24,"router-outlet")),2&o&&(t.R7$(),t.Y8G("rowData",s.apps()())("gridOptions",s.gridOptions)("allowedFileTypes","zip"),t.R7$(2),t.Y8G("ngClass",t.eq3(7,z,s.fabOpen())),t.R7$(),t.Y8G("spin",!0),t.R7$(3),t.JRh(s.fabOpen()?"close":"add"),t.R7$(9),t.Y8G("matBadgeHidden",s.isAddFromFolderEnabled()))},dependencies:[B.p,Y.xs,D.E7,c.TE,C.YU,c.p1,d.Hl,d.$0,d.Sr,n.m_,n.An,c.yf,E.Y,E.k,u.n3,L.S],encapsulation:2})}}return p})()},8136:(T,m,e)=>{e.d(m,{T:()=>r});const r={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",ContentTypeFieldsReuseDefinitions:"ContentTypeFieldsReuseDefinitions",AppExportAssetsAdvanced:"AppExportAssetsAdvanced",PickerUiCheckbox:"PickerUiCheckbox",PickerUiRadio:"PickerUiRadio",PickerSourceCsv:"PickerSourceCsv",PickerSourceAppAssets:"PickerSourceAppAssets",PickerFormulas:"PickerFormulas",PickerUiMoreInfo:"PickerUiMoreInfo"}},3140:(T,m,e)=>{e.d(m,{J:()=>C});var r=e(7092),g=e(9148);let C=(()=>{class t{constructor(){this.subscriptions=new r.yU}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(D){return new(D||t)}}static{this.\u0275dir=g.FsC({type:t})}}return t})()},4575:(T,m,e)=>{e.d(m,{S:()=>E});var r=e(9148),g=e(8537),C=e(3140),t=e(3347);let E=(()=>{class d extends C.J{constructor(n,u,c){super(),this.zone=u,this.snackBar=c,this.markStyle=(0,r.hFB)("outline"),this.allowedFileTypes=(0,r.hFB)(""),this.filesDropped=(0,r.CGW)(),this.dropAreaClass="eav-droparea",this.markStyleClass=(0,r.vPA)(""),this.dragClass="eav-dragover",this.timeouts=[],this.element=n.nativeElement}ngOnInit(){this.markStyleClass.set(`eav-droparea-${this.markStyle()}`),this.element.classList.add(this.dropAreaClass,this.markStyleClass()),this.zone.runOutsideAngular(()=>{this.subscriptions.add((0,g.R)(this.element,"dragover").subscribe(n=>{n.preventDefault(),n.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscriptions.add((0,g.R)(this.element,"dragleave").subscribe(n=>{n.preventDefault(),n.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass(),this.dragClass),super.ngOnDestroy()}onDrop(n){n.preventDefault(),n.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let c=Array.from(n.dataTransfer.files);c=this.filterTypes(c,this.allowedFileTypes()),c.length>0&&this.filesDropped.emit(c)}clearTimeouts(){for(const n of this.timeouts)clearTimeout(n);this.timeouts=[]}filterTypes(n,u){if(""===u)return n;const c=u.split(",").map(f=>f.toLocaleLowerCase()),h=n.filter(f=>{const i=f.name.lastIndexOf(".");if(i<=0)return!1;const l=f.name.substring(i+1).toLocaleLowerCase();return c.includes(l)});if(n.length!==h.length){const f=this.allowedFileTypes().replace(/\,/g,", ");this.snackBar.open(h.length?"Some files were filtered out. This drop location only accepts file types: "+f:"This drop location only accepts file types: "+f,null,{duration:5e3})}return h}static{this.\u0275fac=function(u){return new(u||d)(r.rXU(r.aKT),r.rXU(r.SKi),r.rXU(t.UG))}}static{this.\u0275dir=r.FsC({type:d,selectors:[["","appDragAndDrop",""]],hostBindings:function(u,c){1&u&&r.bIt("drop",function(f){return c.onDrop(f)})},inputs:{markStyle:[1,"markStyle"],allowedFileTypes:[1,"allowedFileTypes"]},outputs:{filesDropped:"filesDropped"},standalone:!0,features:[r.Vt3]})}}return d})()},9914:(T,m,e)=>{e.d(m,{$:()=>C});var r=e(9148),g=e(436);let C=(()=>{class t{constructor(d){this.sanitizer=d}transform(d){return this.sanitizer.bypassSecurityTrustHtml(d)}static{this.\u0275fac=function(D){return new(D||t)(r.rXU(g.up,16))}}static{this.\u0275pipe=r.EJ8({name:"safeHtml",type:t,pure:!0,standalone:!0})}}return t})()},8471:(T,m,e)=>{e.d(m,{c:()=>c});var r=e(2159),g=e(1567),C=e(3037),t=e(271),E=e(5057),d=e(4435),D=e(4979),n=e(9148);const u={doOnDialogClosed:!0};let c=(()=>{class h extends D.V{constructor(i,l){super(),this.router=i,this.route=l,this.log=(0,d.T)({DialogRoutingService:h},u)}get snapshot(){return this.route.snapshot}get url(){return this.router.url}getParam(i){return this.route.snapshot.paramMap.get(i)}getParams(i){const l=this.route.snapshot.paramMap;return i.reduce((A,y)=>(A[y]=l.get(y),A),{})}getQueryParam(i){return this.route.snapshot.queryParamMap.get(i)}getQueryParams(i){const l=this.route.snapshot.queryParamMap;return i.reduce((A,y)=>(A[y]=l.get(y),A),{})}state(){return this.router.getCurrentNavigation().extras?.state}doOnDialogClosed(i){const l=this.log.fnIf("doOnDialogClosed");this.subscriptions.add(this.childDialogClosed$().subscribe(()=>i())),l.end()}urlSubRoute(i){const l=this.router.createUrlTree([i],{relativeTo:this.route});return this.router.serializeUrl(l)}navPath(i,l){return this.router.navigate([i],l)}navRelative(i,l){return this.router.navigate(i,{...l,relativeTo:this.route})}childDialogClosed$(){return this.router.events.pipe((0,g.p)(i=>i instanceof r.wF),(0,C.Z)(!!this.route.snapshot.firstChild),(0,t.T)(()=>!!this.route.snapshot.firstChild),(0,E.J)(),(0,g.p)(([i,l])=>i&&!l))}static{this.\u0275fac=function(l){return new(l||h)(n.KVO(r.Ix),n.KVO(r.nX))}}static{this.\u0275prov=n.jDH({token:h,factory:h.\u0275fac})}}return h})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.05.01/dist/ng-edit/projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-5efbee.55b0bc9a419fb7b9.js.map