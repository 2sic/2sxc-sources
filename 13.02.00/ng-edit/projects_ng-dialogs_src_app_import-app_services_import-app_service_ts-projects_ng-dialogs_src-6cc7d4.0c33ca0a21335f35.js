"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_import-app_services_import-app_service_ts-projects_ng-dialogs_src-6cc7d4"],{8854:function(U,I,s){s.d(I,{H:function(){return C},a:function(){return x}});var E=s(8069),A=s(8047),D=s(8598),w=s(7133),M=s(8784),v=s(2425),C="admin/app/",x=function(){var b=function(){function h(g,_,u){(0,E.Z)(this,h),this.http=g,this.context=_,this.dnnContext=u}return(0,A.Z)(h,[{key:"importApp",value:function(_,u){var p=new FormData;return p.append("File",_),p.append("Name",u||""),this.http.post(this.dnnContext.$2sxc.http.apiUrl(C+"Import"),p,{params:{zoneId:this.context.zoneId.toString()}})}}]),h}();return b.\u0275fac=function(g){return new(g||b)(w.LFG(M.eN),w.LFG(D._),w.LFG(v._y))},b.\u0275prov=w.Yz7({token:b,factory:b.\u0275fac}),b}()},5487:function(U,I,s){s.d(I,{r:function(){return b}});var E=s(6170),A=s(8069),D=s(8047),w=s(5738),M=s(8598),v=s(7133),C=s(5758),x=s(2977),b=function(){var h=function(){function g(_,u,p,d,P,m){var S;(0,A.Z)(this,g),this.dialog=_,this.viewContainerRef=u,this.router=p,this.route=d,this.context=P,this.changeDetectorRef=m;var T=this.router.getCurrentNavigation();this.dialogData=(null===(S=null==T?void 0:T.extras)||void 0===S?void 0:S.state)||{}}return(0,D.Z)(g,[{key:"ngOnInit",value:function(){var u=this,p=this.route.snapshot.data.dialog;if(null==p)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,w.P)("Open dialog:",p.name,"Context id:",this.context.id,"Context:",this.context),p.getComponent().then(function(d){u.dialog._dialogAnimatingOpen&&u.dialog._lastDialogRef?u.dialog._lastDialogRef.afterOpened().subscribe(function(){u.openDialogComponent(p,d)}):u.openDialogComponent(p,d)})}},{key:"ngOnDestroy",value:function(){this.dialogRef.close()}},{key:"openDialogComponent",value:function(u,p){var d=this;u.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(p,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel","dialog-panel-".concat(u.panelSize),u.showScrollbar?"show-scrollbar":"no-scrollbar"].concat((0,E.Z)(u.panelClass?u.panelClass:[])),position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(function(P){(0,w.P)("Dialog was closed:",u.name,"Data:",P);var m=P;if(null==(null==m?void 0:m.navigateUrl))if(d.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(S){}else d.router.navigate(["./"],d.route.snapshot.url.length>0?{relativeTo:d.route.parent,state:P}:{relativeTo:d.route.parent.parent,state:P});else d.router.navigate([m.navigateUrl])}),this.changeDetectorRef.markForCheck()}}]),g}();return h.\u0275fac=function(_){return new(_||h)(v.Y36(C.uw),v.Y36(v.s_b),v.Y36(x.F0),v.Y36(x.gz),v.Y36(M._),v.Y36(v.sBO))},h.\u0275cmp=v.Xpm({type:h,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(_,u){},styles:[""]}),h}()},4929:function(U,I,s){function M(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o}function C(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function x(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(y){try{l(r.next(y))}catch(j){i(j)}}function O(y){try{l(r.throw(y))}catch(j){i(j)}}function l(y){y.done?o(y.value):function a(o){return o instanceof n?o:new n(function(i){i(o)})}(y.value).then(c,O)}l((r=r.apply(t,e||[])).next())})}s.d(I,{gn:function(){return M},w6:function(){return C},mG:function(){return x}})}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.02.00/ng-edit/projects_ng-dialogs_src_app_import-app_services_import-app_service_ts-projects_ng-dialogs_src-6cc7d4.0c33ca0a21335f35.js.map