"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40"],{8237:(D,b,i)=>{i.r(b),i.d(b,{LanguagePermissionsComponent:()=>c});var e=i(9148),h=i(4175),m=i(7941),g=i(3840),f=i(2159),p=i(2938),u=i(7130),_=i(4096),v=i(1828),E=i(251),n=i(7037),B=i(8471),t=i(6256),a=i(5060),s=i(4601);let z=(()=>{class r{agInit(d){this.params=d,this.language=this.params.data}refresh(d){return!0}openPermissions(){this.params.onOpenPermissions(this.language)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-languages-permissions-actions"]],standalone:!0,features:[e.aNF],decls:4,vars:2,consts:[[1,"actions-component"],["matRipple","","tippy","Permissions",1,"eav-grid-action-button","highlight",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge","matBadgeHidden"]],template:function(o,l){1&o&&(e.j41(0,"div",0)(1,"div",1),e.bIt("click",function(){return l.openPermissions()}),e.j41(2,"mat-icon",2),e.EFF(3," person "),e.k0s()()()),2&o&&(e.R7$(2),e.Y8G("matBadge",l.language.Permissions.Count)("matBadgeHidden",!l.language.Permissions.Count))},dependencies:[a.pZ,a.r6,g.m_,g.An,t.Y,t.k,s.e],encapsulation:2})}}return r})();var y=i(9841);let c=(()=>{class r{#a;#t;constructor(d){this.dialog=d,this.gridOptions=this.#i(),this.#a=(0,p.d)(u.U),this.#t=(0,p.d)(B.c),this.#e=(0,e.vPA)(0),this.languages=(0,e.EWP)(()=>(this.#e(),this.#a.getLanguagesPermissions(void 0)))}#e;ngOnInit(){this.#t.doOnDialogClosed(()=>{this.#e.set(this.#e()+1)})}closeDialog(){this.dialog.close()}openPermissions(d){this.#t.navRelative([_.k4.getUrlLanguage(d.NameId)])}#i(){return{...E.C,columnDefs:[{...v.r.IdWithDefaultRenderer,field:"Code",filter:"agTextColumnFilter",cellRendererParams:{tooltipGetter:l=>`ID: ${l.Code}`}},{...v.r.TextWide,field:"Name",sort:"asc",valueGetter:o=>o.data.Culture},{...v.r.ActionsPinnedRight1,cellRenderer:z,cellRendererParams:{onOpenPermissions:l=>this.openPermissions(l)}}]}}static{this.\u0275fac=function(o){return new(o||r)(e.rXU(m.CP))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-language-permissions"]],standalone:!0,features:[e.aNF],decls:14,vars:2,consts:[[1,"eav-dialog","nav-component-wrapper"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content","nav-component-wrapper"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],["align","end"]],template:function(o,l){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3,"Language permissions"),e.k0s(),e.j41(4,"button",3),e.bIt("click",function(){return l.closeDialog()}),e.j41(5,"mat-icon"),e.EFF(6,"close"),e.k0s()()(),e.j41(7,"div",4)(8,"p"),e.EFF(9," If no language permissions are defined, all editors can edit all languages. As soon as you set any language permission, only the specified users (or users in the specified groups) can edit these permissions. "),e.k0s(),e.nrm(10,"router-outlet"),e.j41(11,"div",5),e.nrm(12,"ag-grid-angular",6),e.k0s(),e.nrm(13,"mat-dialog-actions",7),e.k0s()()),2&o&&(e.R7$(12),e.Y8G("rowData",l.languages()())("gridOptions",l.gridOptions))},dependencies:[h.Hl,h.iY,g.m_,g.An,f.n3,m.E7,n.p,y.xs],encapsulation:2})}}return r})()},6256:(D,b,i)=>{i.d(b,{Y:()=>E,k:()=>v});var e=i(9148),h=i(5060),m=i(2102),g=i(316);let f=0;const p="mat-badge-content",u=new Set;let _=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["ng-component"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(a,s){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-app-error));color:var(--mat-badge-text-color, var(--mat-app-on-error));font-family:var(--mat-badge-text-font, var(--mat-app-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-app-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-app-corner-full))}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color, var(--mat-app-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size);padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size);padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size);padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}}return n})(),v=(()=>{class n{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}constructor(t,a,s,z,y){this._ngZone=t,this._elementRef=a,this._ariaDescriber=s,this._renderer=z,this._animationMode=y,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=f++,this._isInitialized=!1,this._interactivityChecker=(0,e.WQX)(m.Z7),this._document=(0,e.WQX)(g.qQ);const c=(0,e.WQX)(e.o8S);if(!u.has(c)){u.add(c);const r=(0,e.a0P)(_,{environmentInjector:(0,e.WQX)(e.uvJ)});c.onDestroy(()=>{u.delete(c),r.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const t=this._renderer.createElement("span"),a="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(p),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(a)})}):t.classList.add(a),t}_updateRenderedContent(t){const a=`${t??""}`.trim();this._isInitialized&&a&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=a),this._content=a}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){const a=this._elementRef.nativeElement.classList;a.remove(`mat-badge-${this._color}`),t&&a.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${p}`);for(const a of Array.from(t))a!==this._badgeElement&&a.remove()}static{this.\u0275fac=function(a){return new(a||n)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(m.vr),e.rXU(e.sFG),e.rXU(e.bc$,8))}}static{this.\u0275dir=e.FsC({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(a,s){2&a&&e.AVh("mat-badge-overlap",s.overlap)("mat-badge-above",s.isAbove())("mat-badge-below",!s.isAbove())("mat-badge-before",!s.isAfter())("mat-badge-after",s.isAfter())("mat-badge-small","small"===s.size)("mat-badge-medium","medium"===s.size)("mat-badge-large","large"===s.size)("mat-badge-hidden",s.hidden||!s.content)("mat-badge-disabled",s.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",e.L39],disabled:[2,"matBadgeDisabled","disabled",e.L39],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",e.L39]},standalone:!0,features:[e.GFd]})}}return n})(),E=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[m.Pd,h.yE,h.yE]})}}return n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.06.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40.cbef6806246e950e.js.map