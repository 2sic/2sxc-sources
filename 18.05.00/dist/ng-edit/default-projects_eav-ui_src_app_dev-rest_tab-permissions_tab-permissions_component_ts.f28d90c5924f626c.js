"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_dev-rest_tab-permissions_tab-permissions_component_ts"],{1426:(y,u,i)=>{i.d(u,{Q:()=>D});var e=i(9148),c=i(6256),g=i(4175),_=i(3840),b=i(2938),p=i(2437),d=i(1828),v=i(251),f=i(4601),E=i(7037),n=i(8471),B=i(9841);function t(o,l){if(1&o&&(e.j41(0,"mat-icon",1),e.EFF(1," person "),e.k0s()),2&o){const m=e.XpG();e.Y8G("matBadge",m.data().permissions.length)}}function a(o,l){1&o&&(e.j41(0,"mat-icon"),e.EFF(1,"person"),e.k0s())}function s(o,l){1&o&&(e.j41(0,"p",2)(1,"mat-icon"),e.EFF(2,"warning"),e.k0s(),e.EFF(3," Warning: you don't have any permissions configured. So only Super-Users (Host) will be able to use the API endpoints. "),e.k0s())}let D=(()=>{class o{constructor(){this.data=(0,e.hFB)(),this.#e=(0,b.d)(n.c),this.gridOptions=this.buildGridOptions()}#e;openPermissions(){this.#e.navRelative([p.k.getUrlContentType(this.data().permissionTarget)])}buildGridOptions(){return{...v.C,columnDefs:[{...d.r.Id},{...d.r.TextWide,headerName:"Name",field:"Title"},{...d.r.TextWide,field:"Identity"},{...d.r.TextWide,field:"Condition"},{field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline"}]}}static{this.\u0275fac=function(h){return new(h||o)}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-dev-rest-tab-permissions"]],inputs:{data:[1,"data"]},standalone:!0,features:[e.aNF],decls:37,vars:10,consts:[["mat-icon-button","","tippy","Open permissions",3,"click"],["matBadgeColor","accent","matBadgeSize","small","matBadgePosition","below after","aria-hidden","false",3,"matBadge"],[1,"warning","info-box"],[1,"ag-theme-material",3,"rowData","gridOptions"]],template:function(h,r){1&h&&(e.j41(0,"h3"),e.EFF(1),e.k0s(),e.j41(2,"p"),e.EFF(3," This target "),e.j41(4,"code"),e.EFF(5),e.k0s(),e.EFF(6),e.j41(7,"button",0),e.bIt("click",function(){return r.openPermissions()}),e.DNE(8,t,2,1,"mat-icon",1)(9,a,2,0,"mat-icon"),e.k0s()(),e.DNE(10,s,4,0,"p",2),e.nrm(11,"ag-grid-angular",3),e.j41(12,"h4"),e.EFF(13,"Super-Users (Host) can use all Endpoints"),e.k0s(),e.j41(14,"p"),e.EFF(15," As a super-user you can always access these REST endpoints, so this will make development easy. Just remember to change the content-type permissions when you publish your work to public pages.\n"),e.k0s(),e.j41(16,"h4"),e.EFF(17,"Set permissions for visitors to use this"),e.k0s(),e.j41(18,"p"),e.EFF(19," To let JavaScript access the REST endpoints for normal users, you must set the permissions of the content-type. Usually you will just want to set it like "),e.j41(20,"em"),e.EFF(21,"if user has view-permissions, let him read this content-type"),e.k0s(),e.EFF(22,". In rare cases (eg. JS based forms) you may also want to give it some write permissions. Just be careful. If you give write permissions, you will usually "),e.j41(23,"em"),e.EFF(24,"only"),e.k0s(),e.EFF(25," want to give create, but not edit.\n"),e.k0s(),e.j41(26,"h4"),e.EFF(27,"Setting permissions for use outside of DNN"),e.k0s(),e.j41(28,"p"),e.EFF(29," When calling API endpoints from a DNN page you will usually use the "),e.j41(30,"code"),e.EFF(31,"$2sxc"),e.k0s(),e.EFF(32," or the DNN Services-Framework. These automatically add some HTTP-Headers (see tab about HTTP Headers) which let DNN determine that the API-Call was made on a specific page/module - and DNN uses this to check the permissions.\n"),e.k0s(),e.j41(33,"p"),e.EFF(34,' IF you are calling the endpoint from outside of DNN then these headers will be missing. Because of this, permissions saying "If has VIEW permissions, allow read" will fail - because DNN cannot determine if the user has view permissions.\n'),e.k0s(),e.j41(35,"p"),e.EFF(36,' So to enable use from external, the condition must be "If has ANONYMOUS permissions, allow ...". Because the ANONYMOUS check passes even if DNN doesn\'t know what page the module is on.\n'),e.k0s()),2&h&&(e.R7$(),e.SpI("Permissions (",r.data().permissions.length,")"),e.R7$(4),e.JRh(r.data().name),e.R7$(),e.SpI(" has ",r.data().permissions.length," permissions configured. "),e.R7$(2),e.vxM(r.data().permissions.length?8:-1),e.R7$(),e.vxM(r.data().permissions.length?-1:9),e.R7$(),e.vxM(r.data().permissions.length?-1:10),e.R7$(),e.xc7("height",33+48*r.data().permissions.length+"px"),e.Y8G("rowData",r.data().permissions)("gridOptions",r.gridOptions))},dependencies:[g.Hl,g.iY,f.e,_.m_,_.An,c.Y,c.k,E.p,B.xs],encapsulation:2})}}return o})()},6256:(y,u,i)=>{i.d(u,{Y:()=>E,k:()=>f});var e=i(9148),c=i(5060),g=i(2102),_=i(316);let b=0;const p="mat-badge-content",d=new Set;let v=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["ng-component"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(a,s){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-app-error));color:var(--mat-badge-text-color, var(--mat-app-on-error));font-family:var(--mat-badge-text-font, var(--mat-app-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-app-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-app-corner-full))}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color, var(--mat-app-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size);padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size);padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size);padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}}return n})(),f=(()=>{class n{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}constructor(t,a,s,D,o){this._ngZone=t,this._elementRef=a,this._ariaDescriber=s,this._renderer=D,this._animationMode=o,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=b++,this._isInitialized=!1,this._interactivityChecker=(0,e.WQX)(g.Z7),this._document=(0,e.WQX)(_.qQ);const l=(0,e.WQX)(e.o8S);if(!d.has(l)){d.add(l);const m=(0,e.a0P)(v,{environmentInjector:(0,e.WQX)(e.uvJ)});l.onDestroy(()=>{d.delete(l),m.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const t=this._renderer.createElement("span"),a="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(p),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(a)})}):t.classList.add(a),t}_updateRenderedContent(t){const a=`${t??""}`.trim();this._isInitialized&&a&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=a),this._content=a}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){const a=this._elementRef.nativeElement.classList;a.remove(`mat-badge-${this._color}`),t&&a.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${p}`);for(const a of Array.from(t))a!==this._badgeElement&&a.remove()}static{this.\u0275fac=function(a){return new(a||n)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(g.vr),e.rXU(e.sFG),e.rXU(e.bc$,8))}}static{this.\u0275dir=e.FsC({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(a,s){2&a&&e.AVh("mat-badge-overlap",s.overlap)("mat-badge-above",s.isAbove())("mat-badge-below",!s.isAbove())("mat-badge-before",!s.isAfter())("mat-badge-after",s.isAfter())("mat-badge-small","small"===s.size)("mat-badge-medium","medium"===s.size)("mat-badge-large","large"===s.size)("mat-badge-hidden",s.hidden||!s.content)("mat-badge-disabled",s.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",e.L39],disabled:[2,"matBadgeDisabled","disabled",e.L39],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",e.L39]},standalone:!0,features:[e.GFd]})}}return n})(),E=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[g.Pd,c.yE,c.yE]})}}return n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.05.00/dist/ng-edit/default-projects_eav-ui_src_app_dev-rest_tab-permissions_tab-permissions_component_ts.f28d90c5924f626c.js.map