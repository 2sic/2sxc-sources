"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_shared_components_dialog-entry_dialog-entry_component_ts-node_mod-8968bd"],{5487:function(K,x,c){c.d(x,{r:function(){return v}});var O=c(6170),R=c(8069),b=c(8047),T=c(9295),P=c(5738),S=c(8598),h=c(7133),f=c(5758),p=c(2977),v=function(){var _=function(){function D(E,s,g,A,m,C){var I;(0,R.Z)(this,D),this.dialog=E,this.viewContainerRef=s,this.router=g,this.route=A,this.context=m,this.changeDetectorRef=C;var B=this.router.getCurrentNavigation();this.dialogData=(null===(I=null==B?void 0:B.extras)||void 0===I?void 0:I.state)||{}}return(0,b.Z)(D,[{key:"ngOnInit",value:function(){var s=this,g=this.route.snapshot.data.dialog;if(null==g)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,P.P)("Open dialog:",g.name,"Context id:",this.context.id,"Context:",this.context),g.getComponent().then(function(A){g.initContext&&s.context.init(s.route),s.dialogRef=s.dialog.open(A,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:s.dialogData,panelClass:["dialog-panel","dialog-panel-".concat(g.panelSize),g.showScrollbar?"show-scrollbar":"no-scrollbar"].concat((0,O.Z)(g.panelClass?g.panelClass:[])),position:{top:"0"},viewContainerRef:s.viewContainerRef}),s.dialogRef.afterClosed().pipe((0,T.q)(1)).subscribe(function(m){(0,P.P)("Dialog was closed:",g.name,"Data:",m);var C=m;if(null==(null==C?void 0:C.navigateUrl))if(s.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(I){}else s.router.navigate(["./"],s.route.snapshot.url.length>0?{relativeTo:s.route.parent,state:m}:{relativeTo:s.route.parent.parent,state:m});else s.router.navigate([C.navigateUrl])}),s.changeDetectorRef.markForCheck()})}},{key:"ngOnDestroy",value:function(){this.dialogRef.close()}}]),D}();return _.\u0275fac=function(E){return new(E||_)(h.Y36(f.uw),h.Y36(h.s_b),h.Y36(p.F0),h.Y36(p.gz),h.Y36(S._),h.Y36(h.sBO))},_.\u0275cmp=h.Xpm({type:_,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(E,s){},styles:[""]}),_}()},4929:function(K,x,c){function P(t,e,n,r){var a,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(a=t[u])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function h(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))(function(o,a){function u(y){try{l(r.next(y))}catch(M){a(M)}}function w(y){try{l(r.throw(y))}catch(M){a(M)}}function l(y){y.done?o(y.value):function i(o){return o instanceof n?o:new n(function(a){a(o)})}(y.value).then(u,w)}l((r=r.apply(t,e||[])).next())})}c.d(x,{gn:function(){return P},w6:function(){return h},mG:function(){return f}})},9975:function(K,x,c){c.d(x,{d:function(){return S},t:function(){return h}});var O=c(8069),R=c(8047),b=c(7133),T=c(6484),P=c(1130),S=function(){var f=function(){function p(){(0,O.Z)(this,p),this._vertical=!1,this._inset=!1}return(0,R.Z)(p,[{key:"vertical",get:function(){return this._vertical},set:function(_){this._vertical=(0,T.Ig)(_)}},{key:"inset",get:function(){return this._inset},set:function(_){this._inset=(0,T.Ig)(_)}}]),p}();return f.\u0275fac=function(v){return new(v||f)},f.\u0275cmp=b.Xpm({type:f,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(v,_){2&v&&(b.uIk("aria-orientation",_.vertical?"vertical":"horizontal"),b.ekj("mat-divider-vertical",_.vertical)("mat-divider-horizontal",!_.vertical)("mat-divider-inset",_.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(v,_){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),f}(),h=function(){var f=(0,R.Z)(function p(){(0,O.Z)(this,p)});return f.\u0275fac=function(v){return new(v||f)},f.\u0275mod=b.oAB({type:f}),f.\u0275inj=b.cJS({imports:[[P.BQ],P.BQ]}),f}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.01.00/ng-edit/projects_ng-dialogs_src_app_shared_components_dialog-entry_dialog-entry_component_ts-node_mod-8968bd.127c73a3566860a1.js.map