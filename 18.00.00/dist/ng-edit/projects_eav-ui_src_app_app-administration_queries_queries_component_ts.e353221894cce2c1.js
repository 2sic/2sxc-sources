"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_queries_queries_component_ts"],{5964:(A,_,s)=>{s.r(_),s.d(_,{QueriesComponent:()=>W});var o=s(9184),E=s(5797),v=s(9999),y=s(271),B=s(6360),C=s(261),h=s(3454),M=s(2437),z=s(1735),j=s(6378),l=s(251),I=s(52),r=s(3216),d=s(2785),c=s(4079),g=function(a){return a[a.Edit=0]="Edit",a[a.Metadata=1]="Metadata",a[a.Rest=2]="Rest",a[a.Clone=3]="Clone",a[a.Permissions=4]="Permissions",a[a.Export=5]="Export",a[a.Delete=6]="Delete",a}(g||{});class x{agInit(u){this.params=u,this.item=this.params.data}refresh(u){return!0}}var p=s(1034),b=s(6256),f=s(3840),T=s(5060),e=s(8559);function G(a,u){if(1&a){const t=e.RV6();e.j41(0,"div",9),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Metadata,i.item))}),e.j41(1,"mat-icon",10),e.EFF(2," local_offer "),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function N(a,u){if(1&a&&(e.j41(0,"div",4)(1,"mat-icon",11),e.EFF(2," local_offer "),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function Q(a,u){if(1&a){const t=e.RV6();e.j41(0,"div",12),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Permissions,i.item))}),e.j41(1,"mat-icon",10),e.EFF(2," person "),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function $(a,u){if(1&a&&(e.j41(0,"div",4)(1,"mat-icon",11),e.EFF(2," person "),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function k(a,u){if(1&a){const t=e.RV6();e.j41(0,"button",13),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Rest,i.item))}),e.nrm(1,"mat-icon",14),e.j41(2,"span"),e.EFF(3,"REST API"),e.k0s()(),e.j41(4,"button",13),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Clone,i.item))}),e.j41(5,"mat-icon"),e.EFF(6,"file_copy"),e.k0s(),e.j41(7,"span"),e.EFF(8,"Copy"),e.k0s()(),e.j41(9,"button",13),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Export,i.item))}),e.j41(10,"mat-icon"),e.EFF(11,"cloud_download"),e.k0s(),e.j41(12,"span"),e.EFF(13,"Export"),e.k0s()(),e.j41(14,"button",15),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.params.do(i.actions.Delete,i.item))}),e.j41(15,"mat-icon"),e.EFF(16,"delete"),e.k0s(),e.j41(17,"span"),e.EFF(18,"Delete"),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(14),e.Y8G("disabled",t.item._EditInfo.DisableDelete)}}let O=(()=>{class a extends x{constructor(){super(...arguments),this.actions=g}agInit(t){super.agInit(t),this.enablePermissions=this.params.getEnablePermissions()}static#e=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=e.xGo(a)))(i||a)}})();static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-queries-actions"]],standalone:!0,features:[e.Vt3,e.aNF],decls:14,vars:5,consts:[["menu","matMenu"],[1,"actions-component"],["matRipple","","tippy","Edit",1,"eav-grid-action-button","highlight",3,"click"],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","highlight"],[1,"eav-grid-action-button","disabled"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["matMenuContent",""],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight",3,"click"],["mat-menu-item","",3,"click"],["svgIcon","code-curly"],["mat-menu-item","",3,"click","disabled"]],template:function(n,i){if(1&n){const m=e.RV6();e.j41(0,"div",1)(1,"div",2),e.bIt("click",function(){return e.eBV(m),e.Njj(i.params.do(i.actions.Edit,i.item))}),e.j41(2,"mat-icon"),e.EFF(3,"edit"),e.k0s()(),e.DNE(4,G,3,2,"div",3)(5,N,3,2,"div",4)(6,Q,3,2,"div",5)(7,$,3,2,"div",4),e.j41(8,"div",6)(9,"mat-icon"),e.EFF(10,"more_horiz"),e.k0s()()(),e.j41(11,"mat-menu",7,0),e.DNE(13,k,19,1,"ng-template",8),e.k0s()}if(2&n){const m=e.sdS(12);e.R7$(4),e.vxM(4,i.item._EditInfo.DisableMetadata?-1:4),e.R7$(),e.vxM(5,i.item._EditInfo.DisableMetadata?5:-1),e.R7$(),e.vxM(6,!i.item._EditInfo.DisableEdit&&i.enablePermissions?6:-1),e.R7$(),e.vxM(7,i.item._EditInfo.DisableEdit||!i.enablePermissions?7:-1),e.R7$(),e.Y8G("matMenuTriggerFor",m)}},dependencies:[T.pZ,T.r6,f.m_,f.An,b.Y,b.k,p.Cn,p.kk,p.fb,p.z8,p.Cp],encapsulation:2})}return a})();var X=s(2743),S=s(316),R=s(4175),V=s(7941),L=s(7037),D=s(1828),U=s(4575),F=s(5437),H=s(3347),Y=s(9841);function w(a,u){if(1&a){const t=e.RV6();e.j41(0,"div",0)(1,"ag-grid-angular",1),e.bIt("filesDropped",function(i){e.eBV(t);const m=e.XpG();return e.Njj(m.importQuery(i))}),e.k0s(),e.j41(2,"mat-dialog-actions",2)(3,"button",3),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.importQuery())}),e.j41(4,"mat-icon",4),e.EFF(5,"cloud_upload"),e.k0s(),e.j41(6,"span"),e.EFF(7,"Query"),e.k0s()(),e.j41(8,"button",5),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.editQuery(null))}),e.j41(9,"mat-icon"),e.EFF(10,"add"),e.k0s()()()()}if(2&a){const t=e.XpG();e.R7$(),e.Y8G("rowData",u.queries)("gridOptions",t.gridOptions)("allowedFileTypes","json")}}let W=(()=>{class a extends z.V{constructor(t,n,i,m){super(t,n),this.router=t,this.route=n,this.snackBar=i,this.dialogConfigSvc=m,this.pipelinesService=(0,F.d)(c.xR),this.contentExportService=(0,F.d)(B.D),this.dialogService=(0,F.d)(d.o),this.queries$=new E.t(void 0),this.gridOptions=this.buildGridOptions(),this.viewModel$=(0,v.z)([this.queries$]).pipe((0,y.T)(([P])=>({queries:P})))}ngOnInit(){this.fetchQueries(),this.subscriptions.add(this.childDialogClosed$().subscribe(()=>{this.fetchQueries()})),this.dialogConfigSvc.getCurrent$().subscribe(t=>{this.enablePermissions=t.Context.Enable.AppPermissions})}ngOnDestroy(){this.queries$.complete(),super.ngOnDestroy()}fetchQueries(){this.pipelinesService.getAll(I.YX.contentTypes.query).subscribe(t=>{this.queries$.next(t)})}importQuery(t){this.router.navigate(["import"],{relativeTo:this.route.parent.firstChild,state:{files:t}})}doMenuAction(t,n){switch(t){case g.Edit:return this.editQuery(n);case g.Metadata:return this.openMetadata(n);case g.Rest:return this.router.navigate([C.N.getUrlQueryInAdmin(n.Guid)],{relativeTo:this.route.parent.firstChild});case g.Clone:return this.cloneQuery(n);case g.Permissions:return this.openPermissions(n);case g.Export:return this.exportQuery(n);case g.Delete:return this.deleteQuery(n)}}editQuery(t){const i=(0,r.s)({items:[null==t?{ContentTypeName:I.YX.contentTypes.query,Prefill:{TestParameters:I.YX.pipelineDesigner.testParameters}}:{EntityId:t.Id}]});this.router.navigate([`edit/${i}`],{relativeTo:this.route.parent.firstChild})}enablePermissionsGetter(){return this.enablePermissions}openVisualQueryDesigner(t){t._EditInfo.ReadOnly||this.dialogService.openQueryDesigner(t.Id)}openMetadata(t){const n=h.H.getUrlEntity(t.Guid,`Metadata for Query: ${t.Name} (${t.Id})`);this.router.navigate([n],{relativeTo:this.route.parent.firstChild})}cloneQuery(t){this.snackBar.open("Copying..."),this.pipelinesService.clonePipeline(t.Id).subscribe(()=>{this.snackBar.open("Copied",null,{duration:2e3}),this.fetchQueries()})}openPermissions(t){this.router.navigate([M.k.getUrlEntity(t.Guid)],{relativeTo:this.route.parent.firstChild})}exportQuery(t){this.contentExportService.exportEntity(t.Id,"Query",!0)}deleteQuery(t){confirm(`Delete Pipeline '${t.Name}' (${t.Id})?`)&&(this.snackBar.open("Deleting..."),this.pipelinesService.delete(t.Id).subscribe(n=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchQueries()}))}buildGridOptions(){return{...l.C,columnDefs:[{...D.r.Id,cellClass:n=>("id-action no-padding no-outline "+(n.data._EditInfo.ReadOnly?"disabled":"")).split(" "),cellRenderer:j.L,cellRendererParams:{tooltipGetter:i=>`ID: ${i.Id}\nGUID: ${i.Guid}`}},{...D.r.TextWide,field:"Name",sort:"asc",cellClass:n=>(n.data._EditInfo.DisableEdit?"no-outline":"primary-action highlight").split(" "),onCellClicked:n=>{this.openVisualQueryDesigner(n.data)}},{...D.r.TextWideFlex3,field:"Description"},{...D.r.ActionsPinnedRight4,cellRenderer:O,cellRendererParams:{getEnablePermissions:()=>this.enablePermissionsGetter(),do:(i,m)=>this.doMenuAction(i,m)}}]}}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(o.Ix),e.rXU(o.nX),e.rXU(H.UG),e.rXU(X.b))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-queries"]],standalone:!0,features:[e.Vt3,e.aNF],decls:3,vars:3,consts:[[1,"grid-wrapper","mat-tab-grid-wrapper"],["appDragAndDrop","",1,"ag-theme-material",3,"filesDropped","rowData","gridOptions","allowedFileTypes"],[1,"eav-dialog-actions"],["mat-button","","tippy","Import query",1,"eav-button__with-icon",3,"click"],[1,"eav-icon"],["mat-fab","","mat-elevation-z24","","tippy","Create a new query",1,"grid-fab",3,"click"]],template:function(n,i){if(1&n&&(e.DNE(0,w,11,3,"div",0),e.nI1(1,"async"),e.nrm(2,"router-outlet")),2&n){let m;e.vxM(0,(m=e.bMT(1,1,i.viewModel$))?0:-1,m)}},dependencies:[V.E7,R.Hl,R.$z,R.Sr,f.m_,f.An,o.n3,S.Jj,L.p,Y.xs,U.S],styles:[".eav-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.eav-dialog-actions[_ngcontent-%COMP%]   .eav-button__with-icon[_ngcontent-%COMP%]   .eav-icon[_ngcontent-%COMP%]{font-size:24px;height:24px;width:24px}"]})}return a})()},6256:(A,_,s)=>{s.d(_,{Y:()=>j,k:()=>z});var o=s(8559),E=s(5060),v=s(2102),y=s(316);let B=0;const C="mat-badge-content",h=new Set;let M=(()=>{class l{static#e=this.\u0275fac=function(d){return new(d||l)};static#t=this.\u0275cmp=o.VBU({type:l,selectors:[["ng-component"]],standalone:!0,features:[o.aNF],decls:0,vars:0,template:function(d,c){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}return l})(),z=(()=>{class l{get color(){return this._color}set color(r){this._setColor(r),this._color=r}get content(){return this._content}set content(r){this._updateRenderedContent(r)}get description(){return this._description}set description(r){this._updateDescription(r)}constructor(r,d,c,g,x){this._ngZone=r,this._elementRef=d,this._ariaDescriber=c,this._renderer=g,this._animationMode=x,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=B++,this._isInitialized=!1,this._interactivityChecker=(0,o.WQX)(v.Z7),this._document=(0,o.WQX)(y.qQ);const p=(0,o.WQX)(o.o8S);if(!h.has(p)){h.add(p);const b=(0,o.a0P)(M,{environmentInjector:(0,o.WQX)(o.uvJ)});p.onDestroy(()=>{h.delete(p),0===h.size&&b.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const r=this._renderer.createElement("span"),d="mat-badge-active";return r.setAttribute("id",`mat-badge-content-${this._id}`),r.setAttribute("aria-hidden","true"),r.classList.add(C),"NoopAnimations"===this._animationMode&&r.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(r),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{r.classList.add(d)})}):r.classList.add(d),r}_updateRenderedContent(r){const d=`${r??""}`.trim();this._isInitialized&&d&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=d),this._content=d}_updateDescription(r){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!r||this._isHostInteractive())&&this._removeInlineDescription(),this._description=r,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,r):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(r){const d=this._elementRef.nativeElement.classList;d.remove(`mat-badge-${this._color}`),r&&d.add(`mat-badge-${r}`)}_clearExistingBadges(){const r=this._elementRef.nativeElement.querySelectorAll(`:scope > .${C}`);for(const d of Array.from(r))d!==this._badgeElement&&d.remove()}static#e=this.\u0275fac=function(d){return new(d||l)(o.rXU(o.SKi),o.rXU(o.aKT),o.rXU(v.vr),o.rXU(o.sFG),o.rXU(o.bc$,8))};static#t=this.\u0275dir=o.FsC({type:l,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(d,c){2&d&&o.AVh("mat-badge-overlap",c.overlap)("mat-badge-above",c.isAbove())("mat-badge-below",!c.isAbove())("mat-badge-before",!c.isAfter())("mat-badge-after",c.isAfter())("mat-badge-small","small"===c.size)("mat-badge-medium","medium"===c.size)("mat-badge-large","large"===c.size)("mat-badge-hidden",c.hidden||!c.content)("mat-badge-disabled",c.disabled)},inputs:{color:[o.Mj6.None,"matBadgeColor","color"],overlap:[o.Mj6.HasDecoratorInputTransform,"matBadgeOverlap","overlap",o.L39],disabled:[o.Mj6.HasDecoratorInputTransform,"matBadgeDisabled","disabled",o.L39],position:[o.Mj6.None,"matBadgePosition","position"],content:[o.Mj6.None,"matBadge","content"],description:[o.Mj6.None,"matBadgeDescription","description"],size:[o.Mj6.None,"matBadgeSize","size"],hidden:[o.Mj6.HasDecoratorInputTransform,"matBadgeHidden","hidden",o.L39]},standalone:!0,features:[o.GFd]})}return l})(),j=(()=>{class l{static#e=this.\u0275fac=function(d){return new(d||l)};static#t=this.\u0275mod=o.$C({type:l});static#i=this.\u0275inj=o.G2t({imports:[v.Pd,E.yE,E.yE]})}return l})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_queries_queries_component_ts.e353221894cce2c1.js.map