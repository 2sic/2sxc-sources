(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{jl54:function(t,e,n){"use strict";n.r(e),n.d(e,"PermissionsModule",(function(){return M}));var o=n("W6oE"),i=n("2kYt"),a=n("PBFl"),r=n("mFH5"),l=n("OZ4H"),s=n("bFHC"),c=n("W1gw"),u=n("Y2X+"),d=n("GTfO"),p=n("Iv+g"),f=n("O6Xb"),h=n("sEIs"),g=n("it7M"),b=n("nXrb"),v=n("D57K"),C={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:function(){return Object(v.b)(this,void 0,void 0,(function(){return Object(v.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(4),n.e(0),n.e(51)]).then(n.bind(null,"SST1"))];case 1:return[2,t.sent().PermissionsComponent]}}))}))}},m=n("EM62"),w=[{path:"",component:b.a,data:{dialog:C},children:[{matcher:g.a,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(6),n.e(8),n.e(12),n.e(15),n.e(14),n.e(13),n.e(0),n.e(35)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))}},{matcher:g.c,loadChildren:function(){return Promise.all([n.e(0),n.e(36)]).then(n.bind(null,"orgq")).then((function(t){return t.RefreshEditModule}))}}]}],O=function(){function t(){}return t.\u0275mod=m.Kb({type:t}),t.\u0275inj=m.Jb({factory:function(e){return new(e||t)},imports:[[h.d.forChild(w)],h.d]}),t}(),y=n("ykZ8"),D=n("SNUn"),M=function(){function t(){}return t.\u0275mod=m.Kb({type:t}),t.\u0275inj=m.Jb({factory:function(e){return new(e||t)},providers:[p.a,D.a,y.a,d.a],imports:[[i.c,O,f.a,l.f,a.c,s.b,u.b,o.b.withComponents([]),r.s,c.c]]}),t}()},nXrb:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("D57K"),i=n("J+dc"),a=n("50eG"),r=n("EM62"),l=n("OZ4H"),s=n("sEIs"),c=n("Iv+g"),u=function(){function t(t,e,n,o,i,a){var r;this.dialog=t,this.viewContainerRef=e,this.router=n,this.route=o,this.context=i,this.changeDetectorRef=a;var l=this.router.getCurrentNavigation();this.dialogData=(null===(r=null==l?void 0:l.extras)||void 0===r?void 0:r.state)||{}}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.data.dialog;if(null==e)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");Object(a.a)("Open dialog:",e.name,"Context id:",this.context.id,"Context:",this.context),e.getComponent().then((function(n){e.initContext&&t.context.init(t.route),t.dialogRef=t.dialog.open(n,{data:t.dialogData,backdropClass:"dialog-backdrop",panelClass:Object(o.g)(["dialog-panel","dialog-panel-"+e.panelSize,e.showScrollbar?"show-scrollbar":"no-scrollbar"],e.panelClass?e.panelClass:[]),viewContainerRef:t.viewContainerRef,autoFocus:!1,closeOnNavigation:!1,position:{top:"0"}}),t.dialogRef.afterClosed().pipe(Object(i.a)(1)).subscribe((function(n){Object(a.a)("Dialog was closed:",e.name,"Data:",n);var o=n;if(null==(null==o?void 0:o.navigateUrl))if(t.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(i){}else t.router.navigate(["./"],t.route.snapshot.url.length>0?{relativeTo:t.route.parent,state:n}:{relativeTo:t.route.parent.parent,state:n});else t.router.navigate([o.navigateUrl])})),t.changeDetectorRef.markForCheck()}))},t.prototype.ngOnDestroy=function(){this.dialogRef.close()},t.\u0275fac=function(e){return new(e||t)(r.Mb(l.b),r.Mb(r.Q),r.Mb(s.c),r.Mb(s.a),r.Mb(c.a),r.Mb(r.h))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(t,e){},styles:[""],changeDetection:0}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.10.00/ng-edit/permissions-permissions-module.43cff3b7c6b3fd97158f.js.map