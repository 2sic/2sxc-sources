(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"N/cS":function(t,e,n){"use strict";n.r(e),n.d(e,"ReplaceContentModule",(function(){return x}));var o=n("qvOF"),a=n("2kYt"),i=n("nIj0"),r=n("ulve"),l=n("PBFl"),c=n("OZ4H"),s=n("29Wa"),u=n("bFHC"),d=n("Cd2c"),p=n("R7+U"),f=n("W1gw"),g=n("Y2X+"),h=n("PlBB"),b=n("Iv+g"),v=n("O6Xb"),C=n("sEIs"),w=n("it7M"),m=n("nXrb"),O=n("D57K"),y={name:"REPLACE_CONTENT_DIALOG",initContext:!0,panelSize:"small",panelClass:null,getComponent:function(){return Object(O.b)(this,void 0,void 0,(function(){return Object(O.e)(this,(function(t){switch(t.label){case 0:return[4,n.e(57).then(n.bind(null,"1yen"))];case 1:return[2,t.sent().ReplaceContentComponent]}}))}))}},D=n("EM62"),R=[{path:"",component:m.a,data:{dialog:y},children:[{matcher:w.a,loadChildren:function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(2),n.e(7),n.e(8),n.e(16),n.e(15),n.e(12),n.e(17),n.e(0),n.e(37)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))},data:{history:!1}}]}],M=function(){function t(){}return t.\u0275mod=D.Kb({type:t}),t.\u0275inj=D.Jb({factory:function(e){return new(e||t)},imports:[[C.g.forChild(R)],C.g]}),t}(),x=function(){function t(){}return t.\u0275mod=D.Kb({type:t}),t.\u0275inj=D.Jb({factory:function(e){return new(e||t)},providers:[b.a,h.a],imports:[[a.c,M,v.a,c.g,l.c,u.b,g.b,s.e,p.b,i.m,f.d,r.b,d.c,o.g]]}),t}()},nXrb:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("D57K"),a=n("J+dc"),i=n("qW2U"),r=n("EM62"),l=n("OZ4H"),c=n("sEIs"),s=n("Iv+g"),u=function(){function t(t,e,n,o,a,i){var r;this.dialog=t,this.viewContainerRef=e,this.router=n,this.route=o,this.context=a,this.changeDetectorRef=i;var l=this.router.getCurrentNavigation();this.dialogData=(null===(r=null==l?void 0:l.extras)||void 0===r?void 0:r.state)||{}}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.data.dialog;if(null==e)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");Object(i.a)("Open dialog:",e.name,"Context id:",this.context.id,"Context:",this.context),e.getComponent().then((function(n){e.initContext&&t.context.init(t.route),t.dialogRef=t.dialog.open(n,{data:t.dialogData,backdropClass:"dialog-backdrop",panelClass:Object(o.g)(["dialog-panel","dialog-panel-"+e.panelSize,e.showScrollbar?"show-scrollbar":"no-scrollbar"],e.panelClass?e.panelClass:[]),viewContainerRef:t.viewContainerRef,autoFocus:!1,closeOnNavigation:!1,position:{top:"0"}}),t.dialogRef.afterClosed().pipe(Object(a.a)(1)).subscribe((function(n){Object(i.a)("Dialog was closed:",e.name,"Data:",n);var o=n;if(null==(null==o?void 0:o.navigateUrl))if(t.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(a){}else t.router.navigate(["./"],t.route.snapshot.url.length>0?{relativeTo:t.route.parent,state:n}:{relativeTo:t.route.parent.parent,state:n});else t.router.navigate([o.navigateUrl])})),t.changeDetectorRef.markForCheck()}))},t.prototype.ngOnDestroy=function(){this.dialogRef.close()},t.\u0275fac=function(e){return new(e||t)(r.Mb(l.b),r.Mb(r.Q),r.Mb(c.c),r.Mb(c.a),r.Mb(s.a),r.Mb(r.h))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(t,e){},styles:[""],changeDetection:0}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.21.00/ng-edit/replace-content-replace-content-module.3fab3df63297eaefe685.js.map