"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_queries_queries_component_ts"],{5964:(j,E,i)=>{i.r(E),i.d(E,{QueriesComponent:()=>V});var s=i(2159),D=i(6360),u=i(261),b=i(3454),_=i(2437),g=i(251),c=i(52),R=i(3216),B=i(334),P=i(2785),m=i(6460),h=function(n){return n[n.Edit=0]="Edit",n[n.Metadata=1]="Metadata",n[n.Rest=2]="Rest",n[n.Clone=3]="Clone",n[n.Permissions=4]="Permissions",n[n.Export=5]="Export",n[n.Delete=6]="Delete",n}(h||{});class o{agInit(M){this.params=M,this.item=this.params.data}refresh(M){return!0}}var d=i(1034),l=i(6256),C=i(3840),I=i(5060),e=i(7580);function v(n,M){if(1&n){const t=e.RV6();e.j41(0,"div",9),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Metadata,a.item))}),e.j41(1,"mat-icon",10),e.EFF(2," local_offer "),e.k0s()()}if(2&n){const t=e.XpG();e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function T(n,M){if(1&n&&(e.j41(0,"div",4)(1,"mat-icon",11),e.EFF(2," local_offer "),e.k0s()()),2&n){const t=e.XpG();e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function p(n,M){if(1&n){const t=e.RV6();e.j41(0,"div",12),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Permissions,a.item))}),e.j41(1,"mat-icon",10),e.EFF(2," person "),e.k0s()()}if(2&n){const t=e.XpG();e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function f(n,M){if(1&n&&(e.j41(0,"div",4)(1,"mat-icon",11),e.EFF(2," person "),e.k0s()()),2&n){const t=e.XpG();e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function A(n,M){if(1&n){const t=e.RV6();e.j41(0,"button",13),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Rest,a.item))}),e.nrm(1,"mat-icon",14),e.j41(2,"span"),e.EFF(3,"REST API"),e.k0s()(),e.j41(4,"button",13),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Clone,a.item))}),e.j41(5,"mat-icon"),e.EFF(6,"file_copy"),e.k0s(),e.j41(7,"span"),e.EFF(8,"Copy"),e.k0s()(),e.j41(9,"button",13),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Export,a.item))}),e.j41(10,"mat-icon"),e.EFF(11,"cloud_download"),e.k0s(),e.j41(12,"span"),e.EFF(13,"Export"),e.k0s()(),e.j41(14,"button",15),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.params.do(a.actions.Delete,a.item))}),e.j41(15,"mat-icon"),e.EFF(16,"delete"),e.k0s(),e.j41(17,"span"),e.EFF(18,"Delete"),e.k0s()()}if(2&n){const t=e.XpG();e.R7$(14),e.Y8G("disabled",t.item._EditInfo.DisableDelete)}}let Q=(()=>{class n extends o{constructor(){super(...arguments),this.actions=h}agInit(t){super.agInit(t),this.enablePermissions=this.params.getEnablePermissions()}static#e=this.\u0275fac=(()=>{let t;return function(a){return(t||(t=e.xGo(n)))(a||n)}})();static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-queries-actions"]],standalone:!0,features:[e.Vt3,e.aNF],decls:14,vars:5,consts:[["menu","matMenu"],[1,"actions-component"],["matRipple","","tippy","Edit",1,"eav-grid-action-button","highlight",3,"click"],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","highlight"],[1,"eav-grid-action-button","disabled"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["matMenuContent",""],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight",3,"click"],["mat-menu-item","",3,"click"],["svgIcon","code-curly"],["mat-menu-item","",3,"click","disabled"]],template:function(r,a){if(1&r){const y=e.RV6();e.j41(0,"div",1)(1,"div",2),e.bIt("click",function(){return e.eBV(y),e.Njj(a.params.do(a.actions.Edit,a.item))}),e.j41(2,"mat-icon"),e.EFF(3,"edit"),e.k0s()(),e.DNE(4,v,3,2,"div",3)(5,T,3,2,"div",4)(6,p,3,2,"div",5)(7,f,3,2,"div",4),e.j41(8,"div",6)(9,"mat-icon"),e.EFF(10,"more_horiz"),e.k0s()()(),e.j41(11,"mat-menu",7,0),e.DNE(13,A,19,1,"ng-template",8),e.k0s()}if(2&r){const y=e.sdS(12);e.R7$(4),e.vxM(4,a.item._EditInfo.DisableMetadata?-1:4),e.R7$(),e.vxM(5,a.item._EditInfo.DisableMetadata?5:-1),e.R7$(),e.vxM(6,!a.item._EditInfo.DisableEdit&&a.enablePermissions?6:-1),e.R7$(),e.vxM(7,a.item._EditInfo.DisableEdit||!a.enablePermissions?7:-1),e.R7$(),e.Y8G("matMenuTriggerFor",y)}},dependencies:[I.pZ,I.r6,C.m_,C.An,l.Y,l.k,d.Cn,d.kk,d.fb,d.z8,d.Cp],encapsulation:2})}return n})();var x=i(4175),k=i(7941),N=i(7037),z=i(1828),G=i(4575),F=i(5437),S=i(4699),L=i(8471),U=i(7993),$=i(3347),X=i(9841);let V=(()=>{class n{#e;#t;#n;#a;#s;constructor(t){this.snackBar=t,this.#e=(0,F.d)(m.xR),this.#t=(0,F.d)(D.D),this.#n=(0,F.d)(P.o),this.#a=(0,F.d)(L.c),this.#s=(0,F.d)(S.L),this.gridOptions=this.buildGridOptions(),this.queries=(0,U.KX)("queries",[])}ngOnInit(){this.#i(),this.#a.doOnDialogClosed(()=>this.#i()),this.#s.getCurrent$().subscribe(t=>{this.enablePermissions=t.Context.Enable.AppPermissions})}#i(){this.#e.getAll(c.YX.contentTypes.query).subscribe(t=>this.queries.set(t))}importQuery(t){this.#a.navParentFirstChild(["import"],{state:{files:t}})}doMenuAction(t,r){switch(t){case h.Edit:return this.editQuery(r);case h.Metadata:return this.openMetadata(r);case h.Rest:return this.#a.navParentFirstChild([u.N.getUrlQueryInAdmin(r.Guid)]);case h.Clone:return this.cloneQuery(r);case h.Permissions:return this.openPermissions(r);case h.Export:return this.exportQuery(r);case h.Delete:return this.deleteQuery(r)}}editQuery(t){const r={items:[null==t?B.c.newFromType(c.YX.contentTypes.query,{TestParameters:c.YX.pipelineDesigner.testParameters}):B.c.editId(t.Id)]},a=(0,R.s)(r);this.#a.navParentFirstChild([`edit/${a}`])}openVisualQueryDesigner(t){t._EditInfo.ReadOnly||this.#n.openQueryDesigner(t.Id)}openMetadata(t){const r=b.H.getUrlEntity(t.Guid,`Metadata for Query: ${t.Name} (${t.Id})`);this.#a.navParentFirstChild([r])}cloneQuery(t){this.snackBar.open("Copying..."),this.#e.clonePipeline(t.Id).subscribe(()=>{this.snackBar.open("Copied",null,{duration:2e3}),this.#i()})}openPermissions(t){this.#a.navParentFirstChild([_.k.getUrlEntity(t.Guid)])}exportQuery(t){this.#t.exportEntity(t.Id,"Query",!0)}deleteQuery(t){confirm(`Delete Pipeline '${t.Name}' (${t.Id})?`)&&(this.snackBar.open("Deleting..."),this.#e.delete(t.Id).subscribe(r=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.#i()}))}buildGridOptions(){return{...g.C,columnDefs:[{...z.r.IdWithDefaultRenderer,cellClass:r=>("id-action no-padding no-outline "+(r.data._EditInfo.ReadOnly?"disabled":"")).split(" "),cellRendererParams:z.r.idFieldParamsTooltipGetter()},{...z.r.TextWide,field:"Name",sort:"asc",cellClass:r=>(r.data._EditInfo.DisableEdit?"no-outline":"primary-action highlight").split(" "),onCellClicked:r=>{this.openVisualQueryDesigner(r.data)}},{...z.r.TextWideFlex3,field:"Description"},{...z.r.ActionsPinnedRight4,cellRenderer:Q,cellRendererParams:{getEnablePermissions:()=>this.enablePermissions,do:(a,y)=>this.doMenuAction(a,y)}}]}}static#o=this.\u0275fac=function(r){return new(r||n)(e.rXU($.UG))};static#r=this.\u0275cmp=e.VBU({type:n,selectors:[["app-queries"]],standalone:!0,features:[e.aNF],decls:12,vars:3,consts:[[1,"grid-wrapper","mat-tab-grid-wrapper"],["appDragAndDrop","",1,"ag-theme-material",3,"filesDropped","rowData","gridOptions","allowedFileTypes"],[1,"eav-dialog-actions"],["mat-button","","tippy","Import query",1,"eav-button__with-icon",3,"click"],[1,"eav-icon"],["mat-fab","","mat-elevation-z24","","tippy","Create a new query",1,"grid-fab",3,"click"]],template:function(r,a){1&r&&(e.j41(0,"div",0)(1,"ag-grid-angular",1),e.bIt("filesDropped",function(O){return a.importQuery(O)}),e.k0s(),e.j41(2,"mat-dialog-actions",2)(3,"button",3),e.bIt("click",function(){return a.importQuery()}),e.j41(4,"mat-icon",4),e.EFF(5,"cloud_upload"),e.k0s(),e.j41(6,"span"),e.EFF(7,"Query"),e.k0s()(),e.j41(8,"button",5),e.bIt("click",function(){return a.editQuery(null)}),e.j41(9,"mat-icon"),e.EFF(10,"add"),e.k0s()()()(),e.nrm(11,"router-outlet")),2&r&&(e.R7$(),e.Y8G("rowData",a.queries())("gridOptions",a.gridOptions)("allowedFileTypes","json"))},dependencies:[k.E7,x.Hl,x.$z,x.Sr,C.m_,C.An,s.n3,N.p,X.xs,G.S]})}return n})()},6460:(j,E,i)=>{i.d(E,{Cu:()=>l,JL:()=>C,Mk:()=>o,ei:()=>d,vN:()=>I,xR:()=>e});var s=i(4600),D=i(6647),u=i(271),b=i(693),_=i(8873),g=i(9234),c=i(7580),R=i(6443),B=i(4821);const o="admin/query/Run",d="admin/query/DebugStream",l="admin/query/Save",C="admin/query/Get",I="admin/query/DataSources";let e=(()=>{class v{constructor(p,f,A){this.http=p,this.context=f,this.dnnContext=A}getAll(p){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(g.Gg),{params:{appId:this.context.appId.toString(),contentType:p}})}importQuery(p){return(0,s.H)((0,b.n)(p)).pipe((0,D.n)(f=>this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/query/import"),{AppId:this.context.appId.toString(),ContentBase64:f})),(0,u.T)(f=>({Success:f,Messages:[]})))}clonePipeline(p){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/query/Clone"),{params:{Id:p.toString(),appId:this.context.appId.toString()}})}delete(p){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("admin/query/Delete"),{params:{appId:this.context.appId.toString(),Id:p.toString()}})}static#e=this.\u0275fac=function(f){return new(f||v)(c.KVO(R.Qq),c.KVO(_.o),c.KVO(B.ob))};static#t=this.\u0275prov=c.jDH({token:v,factory:v.\u0275fac})}return v})()},693:(j,E,i)=>{function s(u){return new Promise((b,_)=>{const g=new FileReader;g.readAsDataURL(u),g.onload=()=>{b(g.result.split(",")[1])},g.onerror=c=>{_(c)}})}function D(u){return new Promise((b,_)=>{const g=new FileReader;g.readAsText(u),g.onload=()=>{b(g.result)},g.onerror=c=>{_(c)}})}i.d(E,{d:()=>D,n:()=>s})},6256:(j,E,i)=>{i.d(E,{Y:()=>P,k:()=>B});var s=i(7580),D=i(5060),u=i(2102),b=i(316);let _=0;const g="mat-badge-content",c=new Set;let R=(()=>{class m{static#e=this.\u0275fac=function(d){return new(d||m)};static#t=this.\u0275cmp=s.VBU({type:m,selectors:[["ng-component"]],standalone:!0,features:[s.aNF],decls:0,vars:0,template:function(d,l){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}return m})(),B=(()=>{class m{get color(){return this._color}set color(o){this._setColor(o),this._color=o}get content(){return this._content}set content(o){this._updateRenderedContent(o)}get description(){return this._description}set description(o){this._updateDescription(o)}constructor(o,d,l,C,I){this._ngZone=o,this._elementRef=d,this._ariaDescriber=l,this._renderer=C,this._animationMode=I,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=_++,this._isInitialized=!1,this._interactivityChecker=(0,s.WQX)(u.Z7),this._document=(0,s.WQX)(b.qQ);const e=(0,s.WQX)(s.o8S);if(!c.has(e)){c.add(e);const v=(0,s.a0P)(R,{environmentInjector:(0,s.WQX)(s.uvJ)});e.onDestroy(()=>{c.delete(e),0===c.size&&v.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const o=this._renderer.createElement("span"),d="mat-badge-active";return o.setAttribute("id",`mat-badge-content-${this._id}`),o.setAttribute("aria-hidden","true"),o.classList.add(g),"NoopAnimations"===this._animationMode&&o.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(o),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{o.classList.add(d)})}):o.classList.add(d),o}_updateRenderedContent(o){const d=`${o??""}`.trim();this._isInitialized&&d&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=d),this._content=d}_updateDescription(o){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!o||this._isHostInteractive())&&this._removeInlineDescription(),this._description=o,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,o):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(o){const d=this._elementRef.nativeElement.classList;d.remove(`mat-badge-${this._color}`),o&&d.add(`mat-badge-${o}`)}_clearExistingBadges(){const o=this._elementRef.nativeElement.querySelectorAll(`:scope > .${g}`);for(const d of Array.from(o))d!==this._badgeElement&&d.remove()}static#e=this.\u0275fac=function(d){return new(d||m)(s.rXU(s.SKi),s.rXU(s.aKT),s.rXU(u.vr),s.rXU(s.sFG),s.rXU(s.bc$,8))};static#t=this.\u0275dir=s.FsC({type:m,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(d,l){2&d&&s.AVh("mat-badge-overlap",l.overlap)("mat-badge-above",l.isAbove())("mat-badge-below",!l.isAbove())("mat-badge-before",!l.isAfter())("mat-badge-after",l.isAfter())("mat-badge-small","small"===l.size)("mat-badge-medium","medium"===l.size)("mat-badge-large","large"===l.size)("mat-badge-hidden",l.hidden||!l.content)("mat-badge-disabled",l.disabled)},inputs:{color:[s.Mj6.None,"matBadgeColor","color"],overlap:[s.Mj6.HasDecoratorInputTransform,"matBadgeOverlap","overlap",s.L39],disabled:[s.Mj6.HasDecoratorInputTransform,"matBadgeDisabled","disabled",s.L39],position:[s.Mj6.None,"matBadgePosition","position"],content:[s.Mj6.None,"matBadge","content"],description:[s.Mj6.None,"matBadgeDescription","description"],size:[s.Mj6.None,"matBadgeSize","size"],hidden:[s.Mj6.HasDecoratorInputTransform,"matBadgeHidden","hidden",s.L39]},standalone:!0,features:[s.GFd]})}return m})(),P=(()=>{class m{static#e=this.\u0275fac=function(d){return new(d||m)};static#t=this.\u0275mod=s.$C({type:m});static#n=this.\u0275inj=s.G2t({imports:[u.Pd,D.yE,D.yE]})}return m})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/projects_eav-ui_src_app_app-administration_queries_queries_component_ts.0f965e2134d1e1f9.js.map