"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_app-administration_app-admin-helpers_ts-projects_eav-ui_src_a-463e21"],{4778:(D,d,e)=>{e.d(d,{h:()=>c});var o=e(941);class c{static getLightSpeedEditParams(u){return{items:[{ContentTypeName:o.Zy.appMetadata.LightSpeed.ContentTypeName,For:{Target:o.Zy.metadata.app.target,TargetType:o.Zy.metadata.app.targetType,Number:u,Singleton:!0}}]}}}},5457:(D,d,e)=>{e.d(d,{C:()=>o});const o={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage"}},9669:(D,d,e)=>{e.d(d,{B:()=>y});var o=e(1329),c=e(6317),p=e(6562),u=e(635),t=e(3184),l=e(5758),a=e(5916),f=e(6362),_=e(2376),C=e(5590),O=e(7514);function E(s,h){if(1&s){const r=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){return t.CHM(r),t.oxw(2).openDialog()}),t.ALo(1,"translate"),t.TgZ(2,"mat-icon"),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"translate"),t.qZA()()()}if(2&s){const r=t.oxw().ngIf;t.Q6J("tippy",t.xi3(1,7,"Features.Tooltip",r.feature)),t.xp6(2),t.Gre("icon icon-",r.icon,""),t.xp6(1),t.Oqu(r.icon),t.xp6(3),t.Oqu(t.lcZ(7,10,"Features.FeatureNotActivated")),t.xp6(3),t.Oqu(t.lcZ(10,12,"Features.ClickToFindOutMore"))}}function P(s,h){if(1&s&&(t.ynx(0),t.YNc(1,E,11,14,"div",2),t.BQk()),2&s){const r=h.ngIf;t.xp6(1),t.Q6J("ngIf",r.show)}}function F(s,h){1&s&&(t.TgZ(0,"div"),t._uU(1,"loading..."),t.qZA())}let y=(()=>{class s extends o.B{constructor(r,I,M,A){super(r,I,A,M),this.asInfo$=new c.X(!1),this.viewModel$=(0,p.a)([this.feature$,this.asInfo$,this.show$]).pipe((0,u.U)(([i,g,n])=>({feature:i,icon:g?"info":"warning",show:n})))}set asInfo(r){this.asInfo$.next(r)}}return s.\u0275fac=function(r){return new(r||s)(t.Y36(l.uw),t.Y36(t.s_b),t.Y36(a.k),t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-feature-text-info"]],inputs:{asInfo:"asInfo"},features:[t.qOj],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["class","feature-text-info",3,"tippy","click",4,"ngIf"],[1,"feature-text-info",3,"tippy","click"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(r,I){if(1&r&&(t.YNc(0,P,2,1,"ng-container",0),t.ALo(1,"async"),t.YNc(2,F,2,0,"ng-template",null,1,t.W1O)),2&r){const M=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,I.viewModel$))("ngIfElse",M)}},directives:[f.O5,_.$,C.Hw],pipes:[f.Ov,O.X$],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]}),s})()},1329:(D,d,e)=>{e.d(d,{B:()=>A});var o=e(5758),c=e(6562),p=e(635),u=e(9673),t=e(3184),l=e(2528),a=e(3265),f=e(6362),_=e(2376),C=e(7317),O=e(5590),E=e(1555),P=e(7514);function F(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"div",12)(4,"span",13),t.NdJ("click",function(){const v=t.CHM(n).ngIf;return t.oxw(2).copyToClipboard(v)}),t._uU(5),t.qZA()()()}if(2&i){const n=g.ngIf;t.xp6(4),t.Q6J("tippy",n),t.xp6(1),t.Oqu(n)}}function y(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){const v=t.CHM(n).ngIf;return t.oxw(2).findOutMore(v)}),t.TgZ(1,"mat-icon"),t._uU(2,"open_in_new"),t.qZA(),t._uU(3),t.ALo(4,"translate"),t.qZA()}2&i&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"Features.FindOutMore")," "))}function s(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"div"),t._uU(4),t.qZA()()(),t._UZ(5,"p",3),t.ALo(6,"safeHtml"),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",7)(13,"span"),t._uU(14),t.ALo(15,"translate"),t.qZA()()(),t.YNc(16,F,6,2,"div",8),t.qZA(),t.TgZ(17,"div",9),t.YNc(18,y,5,3,"button",10),t.TgZ(19,"button",11),t.NdJ("click",function(){return t.CHM(n),t.oxw().closeDialog()}),t._uU(20),t.ALo(21,"translate"),t.qZA()()()}if(2&i){const n=g.ngIf;t.xp6(4),t.Oqu(n.feature.Name),t.xp6(1),t.Q6J("innerHtml",t.lcZ(6,7,n.feature.Description),t.oJD),t.xp6(5),t.Oqu(t.lcZ(11,9,"Features.Status")),t.xp6(4),t.Oqu(t.lcZ(15,11,n.feature.Enabled?"Features.Active":"Features.NotActive")),t.xp6(2),t.Q6J("ngIf",n.feature.NameId),t.xp6(2),t.Q6J("ngIf",n.feature.Link),t.xp6(2),t.hij(" ",t.lcZ(21,13,"Features.Close")," ")}}let h=(()=>{class i{constructor(n,m,x,v){this.dialogData=n,this.dialogRef=m,this.snackBar=x,this.featureDetailService=v}ngOnInit(){this.viewModel$=(0,c.a)([this.featureDetailService.getFeatureDetails(this.dialogData)]).pipe((0,p.U)(([n])=>({feature:n})))}copyToClipboard(n){(0,u.v)(n),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}findOutMore(n){window.open(n,"_blank")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(o.WI),t.Y36(o.so),t.Y36(l.ux),t.Y36(a.f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-feature-info-dialog"]],decls:2,vars:3,consts:[[4,"ngIf"],["mat-dialog-title",""],[1,"dialog-title-box"],[1,"dialog-description",3,"innerHtml"],[1,"info-box"],[1,"info-row"],[1,"info-row__label"],[1,"info-row__value"],["class","info-row",4,"ngIf"],[1,"dialog-component-actions"],["mat-raised-button","","class","dialog-component-button","color","accent",3,"click",4,"ngIf"],["mat-raised-button","",1,"dialog-component-button",3,"click"],[1,"info-row__value","click"],[3,"tippy","click"],["mat-raised-button","","color","accent",1,"dialog-component-button",3,"click"]],template:function(n,m){1&n&&(t.YNc(0,s,22,15,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,m.viewModel$))},directives:[f.O5,_.$,C.lW,O.Hw],pipes:[f.Ov,E.z,P.X$],styles:[".info-box[_ngcontent-%COMP%]{margin-top:32px}.info-row[_ngcontent-%COMP%]{display:flex;overflow-wrap:anywhere;margin-top:4px;margin-bottom:4px;font-size:14px}.info-row__label[_ngcontent-%COMP%]{flex:1;font-weight:500}.info-row__value[_ngcontent-%COMP%]{flex:3}.info-row__value.click[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.dialog-component-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:16px}.dialog-component-button[_ngcontent-%COMP%]{margin-left:8px}"]}),i})();var r=e(6317),I=e(2673),M=e(5916);let A=(()=>{class i{constructor(n,m,x,v){this.dialog=n,this.viewContainerRef=m,this.changeDetectorRef=x,this.featuresService=v,this.featureNameId$=new r.X(null),this.showIf$=new r.X(!1),this.feature$=this.featureNameId$.pipe((0,I.w)(T=>this.featuresService.get$(T))),this.show$=(0,c.a)([this.feature$,this.showIf$]).pipe((0,p.U)(([T,w])=>{var Z;return w==(null!==(Z=null==T?void 0:T.Enabled)&&void 0!==Z&&Z)}))}set featureNameId(n){this.featureNameId$.next(n)}set showIf(n){this.showIf$.next(1==n)}openDialog(){i.openDialog(this.dialog,this.featureNameId$.value,this.viewContainerRef,this.changeDetectorRef)}static openDialog(n,m,x,v){n.open(h,{autoFocus:!1,data:m,viewContainerRef:x,width:"600px"}),v.markForCheck()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(o.uw),t.Y36(t.s_b),t.Y36(t.sBO),t.Y36(M.k))},i.\u0275dir=t.lG2({type:i,inputs:{featureNameId:"featureNameId",showIf:"showIf"}}),i})()},5958:(D,d,e)=>{e.d(d,{U:()=>u});var o=e(3184),c=e(8390),p=e(587);let u=(()=>{class t{constructor(){this.filter=""}agInit(a){this.filterParams=a}isFilterActive(){return""!==this.filter}doesFilterPass(a){const _=this.filterParams.valueGetter({api:this.filterParams.api,colDef:this.filterParams.colDef,column:this.filterParams.column,columnApi:this.filterParams.columnApi,context:this.filterParams.context,data:a.node.data,getValue:C=>a.node.data[C],node:a.node});return null!=_&&_.toString()===this.filter}getModel(){if(this.isFilterActive())return{filterType:"boolean",filter:this.filter}}setModel(a){this.filter=a?a.filter:""}afterGuiAttached(a){}filterChanged(){this.filterParams.filterChangedCallback()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-boolean-filter"]],decls:7,vars:1,consts:[[3,"ngModel","ngModelChange"],["value",""],["value","true"],["value","false"]],template:function(a,f){1&a&&(o.TgZ(0,"mat-radio-group",0),o.NdJ("ngModelChange",function(C){return f.filter=C})("ngModelChange",function(){return f.filterChanged()}),o.TgZ(1,"mat-radio-button",1),o._uU(2,"All"),o.qZA(),o.TgZ(3,"mat-radio-button",2),o._uU(4,"True"),o.qZA(),o.TgZ(5,"mat-radio-button",3),o._uU(6,"False"),o.qZA()()),2&a&&o.Q6J("ngModel",f.filter)},directives:[c.VQ,p.JJ,p.On,c.U0],styles:[".mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:12px;width:160px;height:104px}"]}),t})()},6108:(D,d,e)=>{e.d(d,{D:()=>p});var o=e(1745),c=e(3184);let p=(()=>{class u{constructor(l){this.globalConfigService=l}onClick(l){(navigator.platform.match("Mac")?l.metaKey:l.ctrlKey)&&l.shiftKey&&l.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())}}return u.\u0275fac=function(l){return new(l||u)(c.Y36(o.bE))},u.\u0275dir=c.lG2({type:u,selectors:[["","appToggleDebug",""]],hostBindings:function(l,a){1&l&&c.NdJ("click",function(_){return a.onClick(_)})}}),u})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.05.00/ng-edit/default-projects_eav-ui_src_app_app-administration_app-admin-helpers_ts-projects_eav-ui_src_a-463e21.5aeba9ef04e547fd.js.map