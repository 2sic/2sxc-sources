import {A as Ae,P as Pe,C as Ce}from'./chunk-BKBWaFpU.js';import {f as fn,x as xn}from'./chunk-DkHP1Mn9.js';import {C as Ct$1}from'./chunk-BDpU1i8k.js';import {S}from'./chunk-Cef4MioX.js';import {F as Ft$1,t as it,at as l,au as d,u as ue,W,a3 as Qt,j as jb,D as oe,A as yt$1,ap as ti,aq as je,K as Ks,a as wy,c as M_,y as yd,l as kT,d as pC,n as FT,aw as Ey,aM as Y,aj as Eg,as as N,bj as rr,bk as en,m,aU as Vd,bm as be,cF as so,bv as PS,bn as Pt$1,H as Ht$1,bx as FS,bX as eh,p as py,di as th,e as wd,f as fy,by as dy,b1 as Ee,ce as ke,bz as I,Y as YT,P as zT,E as jT,ab as LT,e0 as ly,G as BT,ae as zy,Q as Hp,U as Up,R as r_}from'./main-RLZDMJKP.js';import'./chunk-BcZYkIX-.js';import {L as Lt$1,R as Rt$1}from'./chunk-3GV9srft.js';import {W as W$1,j as je$1}from'./chunk-BHb9Qvef.js';import'./chunk-FigxxvaU.js';import'./chunk-C7DtPr8-.js';import'./chunk-KxYaZ0CL.js';import'./chunk-CHNg4A0o.js';import {z}from'./chunk-BCWY2NDx.js';import'./chunk-DSAih7A1.js';import {V}from'./chunk-BcxaMtzh.js';function St(e,r){if(e&1&&(Ks(0,"mat-option",17),M_(1),yd()),e&2){let t=r.$implicit;fy("value",t),pC(),wd(" ",t," ");}}function Pt(e,r){if(e&1){let t=zT();Ks(0,"mat-form-field",14)(1,"mat-select",16,0),wy("selectionChange",function(i){Hp(t);let s=YT(2);return Up(s._changePageSize(i.value))}),jT(3,St,2,2,"mat-option",17,LT),yd(),Ks(5,"div",18),wy("click",function(){Hp(t);let i=r_(2);return Up(i.open())}),yd()();}if(e&2){let t=YT(2);fy("appearance",t._formFieldAppearance)("color",t.color),pC(),fy("value",t.pageSize)("disabled",t.disabled),ly("aria-labelledby",t._pageSizeLabelId),fy("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),pC(2),BT(t._displayedPageSizeOptions);}}function zt(e,r){if(e&1&&(Ks(0,"div",15),M_(1),yd()),e&2){let t=YT(2);pC(),zy(t.pageSize);}}function It(e,r){if(e&1&&(Ks(0,"div",3)(1,"div",13),M_(2),yd(),kT(3,Pt,6,7,"mat-form-field",14),kT(4,zt,2,1,"div",15),yd()),e&2){let t=YT();pC(),dy("id",t._pageSizeLabelId),pC(),wd(" ",t._intl.itemsPerPageLabel," "),pC(),FT(t._displayedPageSizeOptions.length>1?3:-1),pC(),FT(t._displayedPageSizeOptions.length<=1?4:-1);}}function Mt(e,r){if(e&1){let t=zT();Ks(0,"button",19),wy("click",function(){Hp(t);let i=YT();return Up(i._buttonClicked(0,i._previousButtonsDisabled()))}),eh(),Ks(1,"svg",8),py(2,"path",20),yd()();}if(e&2){let t=YT();fy("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),dy("aria-label",t._intl.firstPageLabel);}}function wt(e,r){if(e&1){let t=zT();Ks(0,"button",21),wy("click",function(){Hp(t);let i=YT();return Up(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),eh(),Ks(1,"svg",8),py(2,"path",22),yd()();}if(e&2){let t=YT();fy("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),dy("aria-label",t._intl.lastPageLabel);}}var Ot=(()=>{class e{changes=new Ee;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,a,i)=>{if(i==0||a==0)return `0 of ${i}`;i=Math.max(i,0);let s=t*a,v=s<i?Math.min(s+a,i):s+a;return `${s+1} \u2013 ${v} of ${i}`};static \u0275fac=function(a){return new(a||e)};static \u0275prov=ke({token:e,factory:e.\u0275fac})}return e})(),Tt=50;var Dt=new I("MAT_PAGINATOR_DEFAULT_OPTIONS"),A=(()=>{class e{_intl=m(Ot);_changeDetectorRef=m(Vd);_formFieldAppearance;_pageSizeLabelId=m(be).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=false;_initializedStream=new so(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck();}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck();}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions();}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>PS(a,0)),this._updateDisplayedPageSizeOptions();}_pageSizeOptions=[];hidePageSize=false;showFirstLastButtons=false;selectConfig={};disabled=false;page=new Pt$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=m(Dt,{optional:true});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:i,pageSizeOptions:s,hidePageSize:v,showFirstLastButtons:x}=a;i!=null&&(this._pageSize=i),s!=null&&(this._pageSizeOptions=s),v!=null&&(this.hidePageSize=v),x!=null&&(this.showFirstLastButtons=x);}this._formFieldAppearance=a?.formFieldAppearance||"outline";}ngOnInit(){this._isInitialized=true,this._updateDisplayedPageSizeOptions(),this._initializedStream.next();}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe();}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1);}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1);}firstPage(){this.hasPreviousPage()&&this._navigate(0);}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1);}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(i);}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Tt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck());}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length});}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a));}_buttonClicked(t,a){a||this._navigate(t);}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=jb({type:e,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",PS],length:[2,"length","length",PS],pageSize:[2,"pageSize","pageSize",PS],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",FS],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",FS],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",FS]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(a,i){a&1&&(Ks(0,"div",1)(1,"div",2),kT(2,It,5,4,"div",3),Ks(3,"div",4)(4,"div",5),M_(5),yd(),kT(6,Mt,3,5,"button",6),Ks(7,"button",7),wy("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),eh(),Ks(8,"svg",8),py(9,"path",9),yd()(),th(),Ks(10,"button",10),wy("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),eh(),Ks(11,"svg",8),py(12,"path",11),yd()(),kT(13,wt,3,5,"button",12),yd()()()),a&2&&(pC(2),FT(i.hidePageSize?-1:2),pC(3),wd(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),pC(),FT(i.showFirstLastButtons?6:-1),pC(),fy("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),dy("aria-label",i._intl.previousPageLabel),pC(3),fy("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),dy("aria-label",i._intl.nextPageLabel),pC(3),FT(i.showFirstLastButtons?13:-1));},dependencies:[je,Rt$1,W$1,Ht$1,Ct$1],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return e})(),Ct=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=rr({type:e});static \u0275inj=en({imports:[oe,Lt$1,Ce,A]})}return e})();var Bt="cms/history/restore",yt=(()=>{class e extends Y{#t=Ft$1(S);fetchVersions(t,a=null){return this.#t.get({source:"System.ItemHistory",params:{EntityId:t},noCamel:true})}restore(t,a){return this.http.post(this.apiUrl(Bt),{entityId:t},{params:{appId:this.appId,changeId:a.toString()}})}static{this.\u0275fac=(()=>{let t;return function(i){return (t||(t=Eg(e)))(i||e)}})();}static{this.\u0275prov=N({token:e,factory:e.\u0275fac});}}return e})();var Lt=(e,r)=>r.versionNumber;function Et(e,r){if(e&1){let t=zT();Ks(0,"div",3)(1,"mat-form-field",4)(2,"mat-select",5),wy("selectionChange",function(i){Hp(t);let s=YT(2);return Up(s.compareChange(i.value))}),Ks(3,"mat-option",6),M_(4,"Compare with: Previous"),yd(),Ks(5,"mat-option",7),M_(6,"Compare with: Live"),yd()()()();}if(e&2){let t=YT(2);pC(2),fy("value",t.compareWith());}}function Ft(e,r){e&1&&kT(0,Et,7,1,"div",3),e&2&&FT(r.length>0?0:-1);}function Vt(e,r){e&1&&(Ks(0,"div"),M_(1,"Loading..."),yd());}function At(e,r){e&1&&(Ks(0,"div"),M_(1,"No previous versions of this item found"),yd());}function Ht(e,r){if(e&1){let t=zT();Ks(0,"app-history-item",10),wy("restore",function(i){Hp(t);let s=YT(3);return Up(s.restore(i))}),yd();}if(e&2){let t=r.$implicit;fy("historyItem",t);}}function Rt(e,r){if(e&1&&(Ks(0,"mat-accordion",8),jT(1,Ht,1,1,"app-history-item",9,Lt),yd()),e&2){let t=YT();pC(),BT(t);}}function Nt(e,r){if(e&1&&kT(0,Vt,2,0,"div")(1,At,2,0,"div")(2,Rt,3,0,"mat-accordion",8),e&2){let t=r;FT(t===null?0:t.length===0?1:2);}}function jt(e,r){if(e&1){let t=zT();Ks(0,"mat-paginator",12),wy("page",function(i){Hp(t);let s=YT(2);return Up(s.pageChange(i))}),yd();}if(e&2){let t=YT(2);fy("length",t.version()?.length??0)("pageSize",t.pageSize())("pageSizeOptions",t.pageSizeOptions);}}function Gt(e,r){e&1&&kT(0,jt,1,3,"mat-paginator",11),e&2&&FT(r.length>0?0:-1);}var Be=(()=>{class e{#t;constructor(t,a,i){this.dialog=t,this.route=a,this.snackBar=i,this.hostClass="dialog-component",this.#t=Ft$1(yt),this.#i=parseInt(this.route.snapshot.paramMap.get("itemId"),10),this.version=this.#t.fetchVersions(this.#i),this.pageSizeOptions=[10,20,50],this.expandedPanels={},this.expandedAttributes={},this.#e=it(1),this.pageSize=l("pageSize",this.pageSizeOptions[0]),this.compareWith=it("live"),this.historyItems=d("historyItems",()=>Ae(this.version(),this.#e(),this.pageSize(),this.compareWith()));}#i;#e;compareChange(t){this.compareWith.set(t);}panelExpandedChange(t,a){this.expandedPanels[a]=t;}attributeExpandedToggle(t,a){this.expandedAttributes[t+a]=!this.expandedAttributes[t+a];}pageChange(t){let a=t.pageIndex+1;a!==this.#e()&&(this.expandedPanels={},this.expandedAttributes={},this.#e.set(a)),this.pageSize.set(t.pageSize);}restore(t){this.snackBar.open("Restoring previous version..."),this.#t.restore(this.#i,t).subscribe(a=>{this.snackBar.open("Previous version restored. Will reload edit dialog",null,{duration:3e3}),this.dialog.close({refreshEdit:true});});}static{this.\u0275fac=function(a){return new(a||e)(ue(V),ue(W),ue(Qt))};}static{this.\u0275cmp=jb({type:e,selectors:[["app-item-history"]],hostVars:1,hostBindings:function(a,i){a&2&&Ey("className",i.hostClass);},decls:10,vars:3,consts:[[1,"eav-dialog","eav-no-scrollbar"],[3,"close"],[1,"eav-dialog-content"],[1,"eav-compare-box"],["color","accent",1,"eav-mat-form-field","eav-compare-box__dropdown"],["name","Scope",3,"selectionChange","value"],["value","previous"],["value","live"],["multi","",1,"eav-history-tables"],[3,"historyItem"],[3,"restore","historyItem"],["color","accent","showFirstLastButtons","true",3,"length","pageSize","pageSizeOptions"],["color","accent","showFirstLastButtons","true",3,"page","length","pageSize","pageSizeOptions"]],template:function(a,i){if(a&1&&(Ks(0,"div",0)(1,"app-dialog-header",1),wy("close",function(){return i.dialog.close()}),M_(2," Item History "),yd(),Ks(3,"div",2)(4,"p"),M_(5,"Check version history for this item and restore the version you need."),yd(),kT(6,Ft,1,1),Ks(7,"div"),kT(8,Nt,3,1),yd(),kT(9,Gt,1,1),yd()()),a&2){let s,v,x;pC(6),FT((s=i.historyItems())?6:-1,s),pC(2),FT((v=i.historyItems())?8:-1,v),pC(),FT((x=i.historyItems())?9:-1,x);}},dependencies:[oe,yt$1,ti,je,Lt$1,Rt$1,W$1,je$1,fn,xn,Ct,A,Pe,z],styles:[`.eav-compare-box[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end;height:40px}.eav-compare-box__dropdown[_ngcontent-%COMP%]{width:220px;margin-top:-14px;font-size:14px;height:auto}.eav-accordion[_ngcontent-%COMP%]{display:block;padding:4px 0}.eav-expansion-panel-header[_ngcontent-%COMP%], .eav-table-row[_ngcontent-%COMP%]{font-size:14px}.eav-table-row__main[_ngcontent-%COMP%]{display:flex}.eav-table-row__details[_ngcontent-%COMP%]{display:block}.eav-row-main[_ngcontent-%COMP%]{cursor:pointer;padding:4px 0}.eav-row-main__label[_ngcontent-%COMP%]{width:160px;flex:0 0 auto}.eav-row-main__value[_ngcontent-%COMP%]{flex:1 1 auto}.eav-row-main__type[_ngcontent-%COMP%]{flex:0 0 auto;font-size:12px}.eav-row-main__type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-of-type){margin-right:2px}.eav-detail-row[_ngcontent-%COMP%]{display:flex;padding-bottom:4px;cursor:default}.eav-detail-row__label[_ngcontent-%COMP%]{width:160px;flex:0 0 auto}.eav-detail-row__value[_ngcontent-%COMP%]{flex:1 1 auto}.eav-row-actions[_ngcontent-%COMP%]{margin-top:16px;display:flex;justify-content:flex-end}
/*# sourceMappingURL=item-history-Y4YX5OPK.css.map */`]});}}return e})();export{Be as ItemHistoryComponent};//# sourceMappingURL=https://sources.2sxc.org/22.00.00/dist/ng-edit/item-history-BINFJRva.js.map
