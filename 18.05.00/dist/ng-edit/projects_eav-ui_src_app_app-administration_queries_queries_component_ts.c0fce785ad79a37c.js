"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_queries_queries_component_ts"],{2357:(P,B,n)=>{n.r(B),n.d(B,{QueriesComponent:()=>S});var e=n(9148),p=n(4175),b=n(7941),u=n(3840),C=n(2159),g=n(2938),f=n(6360),z=n(261),F=n(3454),R=n(2437),d=n(1828),$=n(251),i=n(52),o=n(4575),l=n(4601),E=n(3216),h=n(334),v=n(7037),y=n(8471),T=n(2785),j=n(4699),A=n(6460),c=function(a){return a[a.Edit=0]="Edit",a[a.Metadata=1]="Metadata",a[a.Rest=2]="Rest",a[a.Clone=3]="Clone",a[a.Permissions=4]="Permissions",a[a.Export=5]="Export",a[a.Delete=6]="Delete",a}(c||{}),M=n(6256),I=n(5060),_=n(1034);function G(a,D){if(1&a&&(e.j41(0,"a",3)(1,"mat-icon",9),e.EFF(2," local_offer "),e.k0s()()),2&a){const t=e.XpG();e.Y8G("href",t.params.urlTo(t.actions.Metadata,t.item),e.B4B),e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function x(a,D){if(1&a&&(e.j41(0,"div",4)(1,"mat-icon",10),e.EFF(2," local_offer "),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",null==t.item.Metadata?null:t.item.Metadata.length)("matBadgeHidden",!(null!=t.item.Metadata&&t.item.Metadata.length))}}function O(a,D){if(1&a&&(e.j41(0,"a",5)(1,"mat-icon",9),e.EFF(2," person "),e.k0s()()),2&a){const t=e.XpG();e.Y8G("href",t.params.urlTo(t.actions.Permissions,t.item),e.B4B),e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function k(a,D){if(1&a&&(e.j41(0,"div",4)(1,"mat-icon",10),e.EFF(2," person "),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("matBadge",t.item._Permissions.Count)("matBadgeHidden",!t.item._Permissions.Count)}}function N(a,D){if(1&a){const t=e.RV6();e.j41(0,"a",11),e.nrm(1,"mat-icon",12),e.j41(2,"span"),e.EFF(3,"REST API"),e.k0s()(),e.j41(4,"button",13),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.params.do(s.actions.Clone,s.item))}),e.j41(5,"mat-icon"),e.EFF(6,"file_copy"),e.k0s(),e.j41(7,"span"),e.EFF(8,"Copy"),e.k0s()(),e.j41(9,"button",13),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.params.do(s.actions.Export,s.item))}),e.j41(10,"mat-icon"),e.EFF(11,"cloud_download"),e.k0s(),e.j41(12,"span"),e.EFF(13,"Export"),e.k0s()(),e.j41(14,"button",14),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.params.do(s.actions.Delete,s.item))}),e.j41(15,"mat-icon"),e.EFF(16,"delete"),e.k0s(),e.j41(17,"span"),e.EFF(18,"Delete"),e.k0s()()}if(2&a){const t=e.XpG();e.Y8G("href",t.params.urlTo(t.actions.Rest,t.item),e.B4B),e.R7$(14),e.Y8G("disabled",t.item._EditInfo.DisableDelete)}}let Q=(()=>{class a{constructor(){this.actions=c}agInit(t){this.params=t,this.item=this.params.data,this.enablePermissions=this.params.getEnablePermissions()}refresh(t){return!0}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-queries-actions"]],standalone:!0,features:[e.aNF],decls:14,vars:6,consts:[["menu","matMenu"],[1,"actions-component"],["matRipple","","tippy","Edit",1,"eav-grid-action-button","default-link","highlight",3,"href"],["matRipple","","tippy","Metadata",1,"eav-grid-action-button","default-link","highlight",3,"href"],[1,"eav-grid-action-button","disabled"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","default-link","highlight",3,"href"],["matRipple","","tippy","More",1,"eav-grid-action-button","highlight",3,"matMenuTriggerFor"],[1,"grid-more-menu"],["matMenuContent",""],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["matBadgeColor","accent","matBadgeSize","small","matBadgeDisabled","true","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"],["mat-menu-item","",1,"default-link",3,"href"],["svgIcon","code-curly"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click","disabled"]],template:function(r,s){if(1&r&&(e.j41(0,"div",1)(1,"a",2)(2,"mat-icon"),e.EFF(3,"edit"),e.k0s()(),e.DNE(4,G,3,3,"a",3)(5,x,3,2,"div",4)(6,O,3,3,"a",5)(7,k,3,2,"div",4),e.j41(8,"div",6)(9,"mat-icon"),e.EFF(10,"more_horiz"),e.k0s()()(),e.j41(11,"mat-menu",7,0),e.DNE(13,N,19,2,"ng-template",8),e.k0s()),2&r){const m=e.sdS(12);e.R7$(),e.Y8G("href",s.params.urlTo(s.actions.Edit,s.item),e.B4B),e.R7$(3),e.vxM(s.item._EditInfo.DisableMetadata?-1:4),e.R7$(),e.vxM(s.item._EditInfo.DisableMetadata?5:-1),e.R7$(),e.vxM(!s.item._EditInfo.DisableEdit&&s.enablePermissions?6:-1),e.R7$(),e.vxM(s.item._EditInfo.DisableEdit||!s.enablePermissions?7:-1),e.R7$(),e.Y8G("matMenuTriggerFor",m)}},dependencies:[I.pZ,I.r6,u.m_,u.An,M.Y,M.k,_.Cn,_.kk,_.fb,_.z8,_.Cp,l.e],encapsulation:2})}}return a})();var X=n(3347),L=n(9841);let S=(()=>{class a{#t;#s;#r;#a;#o;constructor(t){this.snackBar=t,this.#t=(0,g.d)(A.xR),this.#s=(0,g.d)(f.D),this.#r=(0,g.d)(T.o),this.#a=(0,g.d)(y.c),this.#o=(0,g.d)(j.L),this.gridOptions=this.buildGridOptions(),this.#i=(0,e.vPA)(0),this.queries=(0,e.EWP)(()=>(this.#i(),this.#t.getAllSig(i.YX.contentTypes.query,void 0)))}#i;ngOnInit(){this.#a.doOnDialogClosed(()=>this.#n()),this.#o.getCurrent$().subscribe(t=>{this.enablePermissions=t.Context.Enable.AppPermissions})}#n(){this.#i.update(t=>t+1)}#e(t){return"#"+this.#a.urlSubRoute(t)}urlToImportQuery(){return this.#e("import")}#d(t){return this.#e(`edit/${(0,E.s)({items:[null==t?h.c.newFromType(i.YX.contentTypes.query,{TestParameters:i.YX.pipelineDesigner.testParameters}):h.c.editId(t.Id)]})}`)}importQuery(t){this.#a.navRelative(["import"],{state:{files:t}})}urlToNewQuery(){return this.#e(`edit/${(0,E.s)({items:[h.c.newFromType(i.YX.contentTypes.query,{TestParameters:i.YX.pipelineDesigner.testParameters})]})}`)}#l(t){return this.#e(`../../query/${(0,E.s)({items:[h.c.editId(t.Id)]})}`)}#m(t){return this.#e(F.H.getUrlEntity(t.Guid,`Metadata for Query: ${t.Name} (${t.Id})`))}#c(t){return this.#e(R.k.getUrlEntity(t.Guid))}#g(t){return this.#e(z.N.getUrlQueryInAdmin(t.Guid))}cloneQuery(t){this.snackBar.open("Copying..."),this.#t.clonePipeline(t.Id).subscribe(()=>{this.snackBar.open("Copied",null,{duration:2e3}),this.#n()})}exportQuery(t){this.#s.exportEntity(t.Id,"Query",!0)}deleteQuery(t){confirm(`Delete Pipeline '${t.Name}' (${t.Id})?`)&&(this.snackBar.open("Deleting..."),this.#t.delete(t.Id).subscribe(r=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.#n()}))}buildGridOptions(){return{...$.C,columnDefs:[{...d.r.IdWithDefaultRenderer,cellClass:r=>("id-action no-padding no-outline "+(r.data._EditInfo.ReadOnly?"disabled":"")).split(" "),cellRendererParams:d.r.idFieldParamsTooltipGetter()},{...d.r.TextWide,field:"Name",sort:"asc",cellClass:r=>(r.data._EditInfo.DisableEdit?"no-outline":"primary-action highlight").split(" "),cellRenderer:r=>`<a href="${this.#l(r.data)}" target="_blank" class="default-link" style="display: block; width: 100%; height: 100%;">\n              ${r.data.Name}\n            </a>`},{...d.r.TextWideFlex3,field:"Description"},{...d.r.ActionsPinnedRight4,cellRenderer:Q,cellRendererParams:{getEnablePermissions:()=>this.enablePermissions,do:(s,m)=>{switch(s){case c.Clone:return this.cloneQuery(m);case c.Export:return this.exportQuery(m);case c.Delete:return this.deleteQuery(m)}},urlTo:(s,m)=>{switch(s){case c.Edit:return this.#d(m);case c.Metadata:return this.#m(m);case c.Rest:return this.#g(m);case c.Permissions:return this.#c(m)}}}}]}}static{this.\u0275fac=function(r){return new(r||a)(e.rXU(X.UG))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-queries"]],standalone:!0,features:[e.aNF],decls:12,vars:5,consts:[[1,"grid-wrapper","mat-tab-grid-wrapper"],["appDragAndDrop","",1,"ag-theme-material",3,"filesDropped","rowData","gridOptions","allowedFileTypes"],[1,"eav-dialog-actions"],["mat-button","","tippy","Import query","tippyPlacement","top",1,"eav-button__with-icon",3,"href"],[1,"eav-icon"],["mat-fab","","mat-elevation-z24","","tippy","Create a new query","tippyPlacement","top",1,"grid-fab",3,"href"]],template:function(r,s){1&r&&(e.j41(0,"div",0)(1,"ag-grid-angular",1),e.bIt("filesDropped",function(Y){return s.importQuery(Y)}),e.k0s(),e.j41(2,"mat-dialog-actions",2)(3,"a",3)(4,"mat-icon",4),e.EFF(5,"cloud_upload"),e.k0s(),e.j41(6,"span"),e.EFF(7,"Query"),e.k0s()(),e.j41(8,"a",5)(9,"mat-icon"),e.EFF(10,"add"),e.k0s()()()(),e.nrm(11,"router-outlet")),2&r&&(e.R7$(),e.Y8G("rowData",s.queries()())("gridOptions",s.gridOptions)("allowedFileTypes","json"),e.R7$(2),e.Y8G("href",s.urlToImportQuery(),e.B4B),e.R7$(5),e.Y8G("href",s.urlToNewQuery(),e.B4B))},dependencies:[b.E7,p.Hl,p.It,p.FH,u.m_,u.An,C.n3,v.p,L.xs,o.S,l.e],encapsulation:2})}}return a})()},6256:(P,B,n)=>{n.d(B,{Y:()=>R,k:()=>F});var e=n(9148),p=n(5060),b=n(2102),u=n(316);let C=0;const g="mat-badge-content",f=new Set;let z=(()=>{class d{static{this.\u0275fac=function(o){return new(o||d)}}static{this.\u0275cmp=e.VBU({type:d,selectors:[["ng-component"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(o,l){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-app-error));color:var(--mat-badge-text-color, var(--mat-app-on-error));font-family:var(--mat-badge-text-font, var(--mat-app-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-app-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-app-corner-full))}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color, var(--mat-app-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size);padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size);padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size);padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}}return d})(),F=(()=>{class d{get color(){return this._color}set color(i){this._setColor(i),this._color=i}get content(){return this._content}set content(i){this._updateRenderedContent(i)}get description(){return this._description}set description(i){this._updateDescription(i)}constructor(i,o,l,E,h){this._ngZone=i,this._elementRef=o,this._ariaDescriber=l,this._renderer=E,this._animationMode=h,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=C++,this._isInitialized=!1,this._interactivityChecker=(0,e.WQX)(b.Z7),this._document=(0,e.WQX)(u.qQ);const v=(0,e.WQX)(e.o8S);if(!f.has(v)){f.add(v);const y=(0,e.a0P)(z,{environmentInjector:(0,e.WQX)(e.uvJ)});v.onDestroy(()=>{f.delete(v),y.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const i=this._renderer.createElement("span"),o="mat-badge-active";return i.setAttribute("id",`mat-badge-content-${this._id}`),i.setAttribute("aria-hidden","true"),i.classList.add(g),"NoopAnimations"===this._animationMode&&i.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(i),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{i.classList.add(o)})}):i.classList.add(o),i}_updateRenderedContent(i){const o=`${i??""}`.trim();this._isInitialized&&o&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=o),this._content=o}_updateDescription(i){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!i||this._isHostInteractive())&&this._removeInlineDescription(),this._description=i,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,i):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(i){const o=this._elementRef.nativeElement.classList;o.remove(`mat-badge-${this._color}`),i&&o.add(`mat-badge-${i}`)}_clearExistingBadges(){const i=this._elementRef.nativeElement.querySelectorAll(`:scope > .${g}`);for(const o of Array.from(i))o!==this._badgeElement&&o.remove()}static{this.\u0275fac=function(o){return new(o||d)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(b.vr),e.rXU(e.sFG),e.rXU(e.bc$,8))}}static{this.\u0275dir=e.FsC({type:d,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(o,l){2&o&&e.AVh("mat-badge-overlap",l.overlap)("mat-badge-above",l.isAbove())("mat-badge-below",!l.isAbove())("mat-badge-before",!l.isAfter())("mat-badge-after",l.isAfter())("mat-badge-small","small"===l.size)("mat-badge-medium","medium"===l.size)("mat-badge-large","large"===l.size)("mat-badge-hidden",l.hidden||!l.content)("mat-badge-disabled",l.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",e.L39],disabled:[2,"matBadgeDisabled","disabled",e.L39],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",e.L39]},standalone:!0,features:[e.GFd]})}}return d})(),R=(()=>{class d{static{this.\u0275fac=function(o){return new(o||d)}}static{this.\u0275mod=e.$C({type:d})}static{this.\u0275inj=e.G2t({imports:[b.Pd,p.yE,p.yE]})}}return d})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.05.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_queries_queries_component_ts.c0fce785ad79a37c.js.map