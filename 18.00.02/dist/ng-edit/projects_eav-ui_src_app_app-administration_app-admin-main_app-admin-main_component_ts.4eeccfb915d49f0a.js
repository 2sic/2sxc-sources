"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts"],{6192:(k,g,i)=>{i.r(g),i.d(g,{AppAdminMainComponent:()=>Z});var h=i(2159),v=i(5797),u=i(9999),M=i(1567),c=i(271),y=i(3037),b=i(1477),S=i(6666),l=i(7049),I=i(52),r=i(5898),m=i(261),P=i(7214);const D=[{name:"App Info",path:"home",icon:"info",svgIcon:!1,tippy:"App Info"},{name:"Data",path:`data/${I.YX.scopes.default.value}`,icon:"menu",svgIcon:!1,tippy:"Data / Content",child:[{...r.u.routeDefinition("data"),tippy:"Autogenerate content types "},{...m.N.routeDataDefinition,tippy:"Rest-Api Data "}]},{name:"Queries",path:"queries",icon:"filter_list",svgIcon:!1,tippy:"Queries / Visual Query Designer",child:[{...m.N.routeQueryDefinition,tippy:"Rest-Api Queries"}]},{name:"Views",path:"views",icon:"layers",svgIcon:!1,tippy:"Views / Templates",child:[{...r.u.routeDefinition("views"),tippy:"Autogenerate Razor Views"}]},{name:"Web API",path:"web-api",icon:"offline_bolt",svgIcon:!1,tippy:"WebApi",child:[{...r.u.routeDefinition("web-api"),tippy:P.r.webApi.teaser},{...m.N.routeWebApiDefinition,tippy:"Rest-Api Queries"}]},{name:"App",path:"app",icon:"settings_applications",svgIcon:!1,tippy:"App Settings",child:[{name:"Export App",path:"export-app",icon:"deployed_code_update",svgIcon:!1,tippy:"Export this entire App"},{name:"Export Parts",path:"export-parts",icon:"cloud_download",svgIcon:!1,tippy:"Export parts of this App"},{name:"Imports Parts",path:"import-parts",icon:"cloud_upload",svgIcon:!1,tippy:"Import parts of this App"},{name:"App-State Git Sync",path:"app-state",icon:"sync",svgIcon:!1,tippy:"App-State Versioning"}]}];var O=i(316),f=i(4175),d=i(3011),C=i(3840),A=i(9552),_=i(1808),$=i(5699),F=i(4699),x=i(5437),T=i(8471),E=i(4435),t=i(7580),j=i(7941),G=i(7912);const N=["sidenav"],R=(o,s)=>s.path;function V(o,s){if(1&o){const n=t.RV6();t.j41(0,"img",14),t.bIt("click",function(){t.eBV(n),t.XpG();const e=t.sdS(22);return t.Njj(e.opened=!e.opened)}),t.k0s()}if(2&o){const n=t.XpG();t.Y8G("src",(null==n.dialogSettings?null:n.dialogSettings.Context.App.Icon)+"?w=40&h=40&mode=crop",t.B4B)}}function Q(o,s){if(1&o){const n=t.RV6();t.j41(0,"mat-icon",15),t.bIt("click",function(){t.eBV(n),t.XpG();const e=t.sdS(22);return t.Njj(e.opened=!e.opened)}),t.EFF(1,"menu"),t.k0s()}}function X(o,s){1&o&&t.EFF(0," Global ")}function B(o,s){if(1&o&&t.EFF(0),2&o){const n=t.XpG();t.SpI(" ",null==n.dialogSettings?null:n.dialogSettings.Context.App.Name," ")}}function Y(o,s){if(1&o&&(t.j41(0,"mat-icon",16),t.EFF(1,"chevron_right"),t.k0s(),t.EFF(2)),2&o){const n=t.XpG().$implicit;t.R7$(2),t.SpI(" ",n," ")}}function z(o,s){if(1&o&&(t.qex(0),t.DNE(1,Y,3,1),t.bVm()),2&o){const n=s.last;t.R7$(),t.vxM(1,n?1:-1)}}function W(o,s){}function L(o,s){1&o&&t.nrm(0,"app-nav-item-list",12),2&o&&t.Y8G("navItem",s.$implicit)}function U(o,s){if(1&o){const n=t.RV6();t.j41(0,"mat-toolbar",2)(1,"div",3),t.DNE(2,V,1,1,"img",4)(3,Q,2,0),t.j41(4,"div",5),t.DNE(5,X,1,0)(6,B,1,1),t.j41(7,"span")(8,"span",6)(9,"mat-icon"),t.EFF(10,"settings"),t.k0s()(),t.EFF(11," Admin "),t.k0s()(),t.j41(12,"xng-breadcrumb",7),t.DNE(13,z,2,1,"ng-container",8),t.k0s(),t.DNE(14,W,0,0,"ng-template",null,0,t.C5r),t.k0s(),t.nrm(16,"span",9),t.j41(17,"button",10),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.closeDialog())}),t.j41(18,"mat-icon"),t.EFF(19,"close"),t.k0s()()(),t.j41(20,"mat-sidenav-container",2)(21,"mat-sidenav",11,1),t.Z7z(23,L,1,1,"app-nav-item-list",12,R),t.j41(25,"div",13)(26,"p"),t.EFF(27,"use App logo to show/hide menu"),t.k0s()()(),t.j41(28,"mat-sidenav-content"),t.nrm(29,"router-outlet"),t.k0s()()}if(2&o){const n=s,a=t.sdS(15),e=t.XpG();t.R7$(2),t.vxM(2,null!=n.dialogSettings&&n.dialogSettings.Context.App.Icon?2:3),t.R7$(3),t.vxM(5,(null==n.dialogSettings?null:n.dialogSettings.Context.App.SettingsScope)===e.AppScopes.Global?5:-1),t.R7$(),t.vxM(6,(null==n.dialogSettings?null:n.dialogSettings.Context.App.SettingsScope)!==e.AppScopes.Global?6:-1),t.R7$(6),t.Y8G("separator",a),t.R7$(9),t.Y8G("mode",e.smallScreen.matches?"over":"side")("opened",e.sideNavOpened),t.R7$(2),t.Dyx(e.navItems)}}let Z=(()=>{class o{#n;#t;constructor(n,a){this.dialogRef=n,this.media=a,this.log=(0,E.T)({AppAdminMainComponent:o}),this.#n=(0,x.d)(F.L),this.#t=(0,x.d)(T.c),this.AppScopes=S.F,this.dialogSettings$=new v.t(void 0),this.pathsArray$=new v.t(void 0),this.currentPath$=(0,u.z)([this.pathsArray$,this.#t.router.events.pipe((0,M.p)(e=>e instanceof h.wF),(0,c.T)(()=>this.#t.snapshot.firstChild.url[0].path),(0,y.Z)(this.#t.snapshot.firstChild.url[0].path))]).pipe((0,c.T)(([e,p])=>{if(null!=e)return p})),this.viewModel$=(0,u.z)([this.dialogSettings$,this.currentPath$]).pipe((0,c.T)(([e,p])=>({dialogSettings:e,currentPath:p}))),this.smallScreen=this.media.matchMedia("(max-width: 1000px)"),this.sideNavOpened=!this.smallScreen.matches,this.navItems=D,this.log.a("constructor")}ngOnInit(){this.fetchDialogSettings(),this.#t.doOnDialogClosed(()=>this.fetchDialogSettings()),this.smallScreen.addEventListener("change",n=>(this.sidenav.opened=!n.matches,this.sidenav.mode=n.matches?"over":"side"))}ngOnDestroy(){this.dialogSettings$.complete(),this.pathsArray$.complete()}closeDialog(){this.dialogRef.close()}fetchDialogSettings(){this.#n.getCurrent$().subscribe(n=>{(0,b.W)(n.Context.App),this.dialogSettings$.next(n),n.Context.Enable.Query||(this.navItems=this.navItems.filter(a=>"Queries"!==a.name&&"Web API"!==a.name)),this.pathsArray$.next(this.navItems.map(a=>a.path))})}static#i=this.\u0275fac=function(a){return new(a||o)(t.rXU(j.CP),t.rXU(G.DY))};static#o=this.\u0275cmp=t.VBU({type:o,selectors:[["app-app-admin-main"]],viewQuery:function(a,e){if(1&a&&t.GBs(N,5),2&a){let p;t.mGM(p=t.lsd())&&(e.sidenav=p.first)}},standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[["emptyTemplate",""],["sidenav",""],["appToggleDebug",""],[1,"toolbar-container"],[3,"src"],[1,"d-flex"],[1,"mat-icon-admin"],[3,"separator"],[4,"xngBreadcrumbItem"],[1,"toolbar-spacer"],["mat-icon-button","","tippy","Close dialog",3,"click"],[3,"mode","opened"],[3,"navItem"],[1,"sideNav-bottom-info"],[3,"click","src"],[1,"menu-container",3,"click"],[1,"breadcrumb-icon"]],template:function(a,e){if(1&a&&(t.DNE(0,U,30,6),t.nI1(1,"async")),2&a){let p;t.vxM(0,(p=t.bMT(1,1,e.viewModel$))?0:-1,p)}},dependencies:[A.s5,A.KQ,C.m_,C.An,d._S,d.Dg,d._Y,f.Hl,f.iY,l.vg,l.LG,l.US,l.El,h.n3,O.Jj,_.a,$.V],styles:["mat-toolbar[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid rgba(0,0,0,.1);position:sticky;top:0;z-index:10;flex:1 0 74px}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{display:flex;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{margin-right:16px;cursor:pointer}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border:1px solid rgba(0,0,0,.2);border-radius:16px 0;margin-right:16px;-webkit-user-select:none;user-select:none;text-shadow:none;cursor:pointer;display:flex;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px}mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:295px;border-right:1px solid rgba(0,0,0,.1)}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%]{position:absolute;bottom:0;text-align:center;width:100%;font-size:12px}.container-content[_ngcontent-%COMP%]{height:100%}.active[_ngcontent-%COMP%]{background-color:#8080801a}  .xng-breadcrumb-separator{margin-left:0!important;margin-right:0!important}  .mat-drawer-container{background-color:transparent!important}"]})}return o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts.4eeccfb915d49f0a.js.map