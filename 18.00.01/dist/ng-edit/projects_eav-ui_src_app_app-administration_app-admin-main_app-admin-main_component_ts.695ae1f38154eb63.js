"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts"],{6192:(J,u,i)=>{i.r(u),i.d(u,{AppAdminMainComponent:()=>H});var c=i(2159),f=i(5797),C=i(9999),b=i(1567),m=i(271),y=i(3037),S=i(1735),I=i(1477),_=i(6666),r=i(7049),D=i(52),d=i(5898),g=i(261),P=i(7214);const O=[{name:"App Info",path:"home",icon:"info",svgIcon:!1,tippy:"App Info"},{name:"Data",path:`data/${D.YX.scopes.default.value}`,icon:"menu",svgIcon:!1,tippy:"Data / Content",child:[{...d.u.routeDefinition("data"),tippy:"Autogenerate content types "},{...g.N.routeDataDefinition,tippy:"Rest-Api Data "}]},{name:"Queries",path:"queries",icon:"filter_list",svgIcon:!1,tippy:"Queries / Visual Query Designer",child:[{...g.N.routeQueryDefinition,tippy:"Rest-Api Queries"}]},{name:"Views",path:"views",icon:"layers",svgIcon:!1,tippy:"Views / Templates",child:[{...d.u.routeDefinition("views"),tippy:"Autogenerate Razor Views"}]},{name:"Web API",path:"web-api",icon:"offline_bolt",svgIcon:!1,tippy:"WebApi",child:[{...d.u.routeDefinition("web-api"),tippy:P.r.webApi.teaser},{...g.N.routeWebApiDefinition,tippy:"Rest-Api Queries"}]},{name:"App",path:"app",icon:"settings_applications",svgIcon:!1,tippy:"App Settings",child:[{name:"Export App",path:"export-app",icon:"deployed_code_update",svgIcon:!1,tippy:"Export this entire App"},{name:"Export Parts",path:"export-parts",icon:"cloud_download",svgIcon:!1,tippy:"Export parts of this App"},{name:"Imports Parts",path:"import-parts",icon:"cloud_upload",svgIcon:!1,tippy:"Import parts of this App"},{name:"App-State Git Sync",path:"app-state",icon:"sync",svgIcon:!1,tippy:"App-State Versioning"}]}];var $=i(8147),F=i(316),A=i(4175),h=i(3011),x=i(3840),M=i(9552),T=i(1808),E=i(5699),j=i(2743),G=i(5437),t=i(8559),N=i(7941),R=i(7912);const V=["sidenav"],X=(o,s)=>s.path;function Q(o,s){if(1&o){const n=t.RV6();t.j41(0,"img",14),t.bIt("click",function(){t.eBV(n),t.XpG();const a=t.sdS(22);return t.Njj(a.opened=!a.opened)}),t.k0s()}if(2&o){const n=t.XpG();t.Y8G("src",(null==n.dialogSettings?null:n.dialogSettings.Context.App.Icon)+"?w=40&h=40&mode=crop",t.B4B)}}function B(o,s){if(1&o){const n=t.RV6();t.j41(0,"mat-icon",15),t.bIt("click",function(){t.eBV(n),t.XpG();const a=t.sdS(22);return t.Njj(a.opened=!a.opened)}),t.EFF(1,"menu"),t.k0s()}}function Y(o,s){1&o&&t.EFF(0," Global ")}function z(o,s){if(1&o&&t.EFF(0),2&o){const n=t.XpG();t.SpI(" ",null==n.dialogSettings?null:n.dialogSettings.Context.App.Name," ")}}function U(o,s){if(1&o&&(t.j41(0,"mat-icon",16),t.EFF(1,"chevron_right"),t.k0s(),t.EFF(2)),2&o){const n=t.XpG().$implicit;t.R7$(2),t.SpI(" ",n," ")}}function W(o,s){if(1&o&&(t.qex(0),t.DNE(1,U,3,1),t.bVm()),2&o){const n=s.last;t.R7$(),t.vxM(1,n?1:-1)}}function L(o,s){}function w(o,s){1&o&&t.nrm(0,"app-nav-item-list",12),2&o&&t.Y8G("navItem",s.$implicit)}function Z(o,s){if(1&o){const n=t.RV6();t.j41(0,"mat-toolbar",2)(1,"div",3),t.DNE(2,Q,1,1,"img",4)(3,B,2,0),t.j41(4,"div",5),t.DNE(5,Y,1,0)(6,z,1,1),t.j41(7,"span")(8,"span",6)(9,"mat-icon"),t.EFF(10,"settings"),t.k0s()(),t.EFF(11," Admin "),t.k0s()(),t.j41(12,"xng-breadcrumb",7),t.DNE(13,W,2,1,"ng-container",8),t.k0s(),t.DNE(14,L,0,0,"ng-template",null,0,t.C5r),t.k0s(),t.nrm(16,"span",9),t.j41(17,"button",10),t.bIt("click",function(){t.eBV(n);const a=t.XpG();return t.Njj(a.closeDialog())}),t.j41(18,"mat-icon"),t.EFF(19,"close"),t.k0s()()(),t.j41(20,"mat-sidenav-container",2)(21,"mat-sidenav",11,1),t.Z7z(23,w,1,1,"app-nav-item-list",12,X),t.j41(25,"div",13)(26,"p"),t.EFF(27,"use App logo to show/hide menu"),t.k0s()()(),t.j41(28,"mat-sidenav-content"),t.nrm(29,"router-outlet"),t.k0s()()}if(2&o){const n=s,e=t.sdS(15),a=t.XpG();t.R7$(2),t.vxM(2,null!=n.dialogSettings&&n.dialogSettings.Context.App.Icon?2:3),t.R7$(3),t.vxM(5,(null==n.dialogSettings?null:n.dialogSettings.Context.App.SettingsScope)===a.AppScopes.Global?5:-1),t.R7$(),t.vxM(6,(null==n.dialogSettings?null:n.dialogSettings.Context.App.SettingsScope)!==a.AppScopes.Global?6:-1),t.R7$(6),t.Y8G("separator",e),t.R7$(9),t.Y8G("mode",a.smallScreen.matches?"over":"side")("opened",a.sideNavOpened),t.R7$(2),t.Dyx(a.navItems)}}let H=(()=>{class o extends S.V{constructor(n,e,a,p){super(n,e,new $.B("AppAdminMainComponent",!1)),this.router=n,this.route=e,this.dialogRef=a,this.media=p,this.dialogConfigSvc=(0,G.d)(j.b),this.AppScopes=_.F,this.dialogSettings$=new f.t(void 0),this.pathsArray$=new f.t(void 0),this.currentPath$=(0,C.z)([this.pathsArray$,this.router.events.pipe((0,b.p)(l=>l instanceof c.wF),(0,m.T)(()=>this.route.snapshot.firstChild.url[0].path),(0,y.Z)(this.route.snapshot.firstChild.url[0].path))]).pipe((0,m.T)(([l,v])=>{if(null!=l)return v})),this.viewModel$=(0,C.z)([this.dialogSettings$,this.currentPath$]).pipe((0,m.T)(([l,v])=>({dialogSettings:l,currentPath:v}))),this.smallScreen=this.media.matchMedia("(max-width: 1000px)"),this.sideNavOpened=!this.smallScreen.matches,this.navItems=O,this.log.a("constructor")}ngOnInit(){this.fetchDialogSettings(),this.subscriptions.add(this.childDialogClosed$().subscribe(()=>{this.fetchDialogSettings()})),this.smallScreen.addEventListener("change",n=>(this.sidenav.opened=!n.matches,this.sidenav.mode=n.matches?"over":"side"))}ngOnDestroy(){this.dialogSettings$.complete(),this.pathsArray$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}fetchDialogSettings(){this.dialogConfigSvc.getCurrent$().subscribe(n=>{(0,I.W)(n.Context.App),this.dialogSettings$.next(n),n.Context.Enable.Query||(this.navItems=this.navItems.filter(e=>"Queries"!==e.name&&"Web API"!==e.name)),this.pathsArray$.next(this.navItems.map(e=>e.path))})}static#t=this.\u0275fac=function(e){return new(e||o)(t.rXU(c.Ix),t.rXU(c.nX),t.rXU(N.CP),t.rXU(R.DY))};static#n=this.\u0275cmp=t.VBU({type:o,selectors:[["app-app-admin-main"]],viewQuery:function(e,a){if(1&e&&t.GBs(V,5),2&e){let p;t.mGM(p=t.lsd())&&(a.sidenav=p.first)}},standalone:!0,features:[t.Vt3,t.aNF],decls:2,vars:3,consts:[["emptyTemplate",""],["sidenav",""],["appToggleDebug",""],[1,"toolbar-container"],[3,"src"],[1,"d-flex"],[1,"mat-icon-admin"],[3,"separator"],[4,"xngBreadcrumbItem"],[1,"toolbar-spacer"],["mat-icon-button","","tippy","Close dialog",3,"click"],[3,"mode","opened"],[3,"navItem"],[1,"sideNav-bottom-info"],[3,"click","src"],[1,"menu-container",3,"click"],[1,"breadcrumb-icon"]],template:function(e,a){if(1&e&&(t.DNE(0,Z,30,6),t.nI1(1,"async")),2&e){let p;t.vxM(0,(p=t.bMT(1,1,a.viewModel$))?0:-1,p)}},dependencies:[M.s5,M.KQ,x.m_,x.An,h._S,h.Dg,h._Y,A.Hl,A.iY,r.vg,r.LG,r.US,r.El,c.n3,F.Jj,T.a,E.V],styles:["mat-toolbar[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid rgba(0,0,0,.1);position:sticky;top:0;z-index:10;flex:1 0 74px}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{display:flex;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{margin-right:16px;cursor:pointer}mat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border:1px solid rgba(0,0,0,.2);border-radius:16px 0;margin-right:16px;-webkit-user-select:none;user-select:none;text-shadow:none;cursor:pointer;display:flex;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px}mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:295px;border-right:1px solid rgba(0,0,0,.1)}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%]{position:absolute;bottom:0;text-align:center;width:100%;font-size:12px}.container-content[_ngcontent-%COMP%]{height:100%}.active[_ngcontent-%COMP%]{background-color:#8080801a}  .xng-breadcrumb-separator{margin-left:0!important;margin-right:0!important}  .mat-drawer-container{background-color:transparent!important}"]})}return o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts.695ae1f38154eb63.js.map