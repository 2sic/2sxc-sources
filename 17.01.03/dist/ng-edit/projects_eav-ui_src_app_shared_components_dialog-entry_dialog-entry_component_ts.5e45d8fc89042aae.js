"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts"],{891:(f,g,n)=>{n.d(g,{r:()=>p});var r=n(1766),c=n(2611),e=n(9039),_=n(6861),l=n(91);let p=(()=>{class i{constructor(t,o,a,s,h,u){this.dialog=t,this.viewContainerRef=o,this.router=a,this.route=s,this.context=h,this.changeDetectorRef=u;const d=this.router.getCurrentNavigation();this.dialogData=d?.extras?.state||{}}ngOnInit(){const t=this.route.snapshot.data.dialog;if(null==t)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,r.P)("Open dialog:",t.name,"Context id:",this.context.id,"Context:",this.context),t.getComponent().then(o=>{this.dialog._dialogAnimatingOpen&&this.dialog._lastDialogRef?this.dialog._lastDialogRef.afterOpened().subscribe(()=>{this.openDialogComponent(t,o)}):this.openDialogComponent(t,o)})}ngOnDestroy(){this.dialogRef.close()}openDialogComponent(t,o){t.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(o,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel",`dialog-panel-${t.panelSize}`,t.showScrollbar?"show-scrollbar":"no-scrollbar",...t.panelClass?t.panelClass:[]],position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(a=>{(0,r.P)("Dialog was closed:",t.name,"Data:",a);const s=a;if(null==s?.navigateUrl)if(this.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch{}else this.router.navigate(["./"],this.route.snapshot.url.length>0?{relativeTo:this.route.parent,state:a}:{relativeTo:this.route.parent.parent,state:a});else this.router.navigate([s.navigateUrl])}),this.changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(o){return new(o||i)(e.Y36(_.uw),e.Y36(e.s_b),e.Y36(l.F0),e.Y36(l.gz),e.Y36(c._),e.Y36(e.sBO))};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(o,a){}})}return i})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.03/dist/ng-edit/projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts.5e45d8fc89042aae.js.map