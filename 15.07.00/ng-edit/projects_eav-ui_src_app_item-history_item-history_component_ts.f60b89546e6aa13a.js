"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_item-history_item-history_component_ts"],{3839:(nt,x,s)=>{s.r(x),s.d(x,{ItemHistoryComponent:()=>tt});var u=s(6317),f=s(6562),y=s(635);function w(e,o,n){const i=JSON.parse(e.Json).Entity.Attributes,a="live"===n?function O(e){let o=e[0];for(const n of e)n.VersionNumber<=o.VersionNumber||(o=n);return o}(o):o.find(l=>l.VersionNumber===e.VersionNumber-1),r=a?JSON.parse(a.Json).Entity.Attributes:null,c=[];return null!=i&&Object.entries(i).forEach(([l,_])=>{Object.keys(_).forEach(p=>{null==c.find(m=>m.name===p&&m.dataType===l)&&c.push({name:p,dataType:l})})}),null!=r&&Object.entries(r).forEach(([l,_])=>{Object.keys(_).forEach(p=>{null==c.find(m=>m.name===p&&m.dataType===l)&&c.push({name:p,dataType:l})})}),c.map(l=>{var _,p;const m=null===(_=null==i?void 0:i[l.dataType])||void 0===_?void 0:_[l.name],b=null===(p=null==r?void 0:r[l.dataType])||void 0===p?void 0:p[l.name];return{name:l.name,dataType:l.dataType,change:v(m,b,!0),values:A(m,b)}})}function A(e,o){const n=[];return null!=e&&Object.keys(e).forEach(a=>{n.includes(a)||n.push(a)}),null!=o&&Object.keys(o).forEach(a=>{n.includes(a)||n.push(a)}),n.map(a=>{const r=null==e?void 0:e[a],c=null==o?void 0:o[a];return{langKey:a,value:r,oldValue:c,change:v(r,c)}})}function v(e,o,n=!1){let i;return n&&("object"==typeof e&&(e=I(e)),"object"==typeof o&&(o=I(o))),i=null!=e&&null!=o?JSON.stringify(e)!==JSON.stringify(o)?"changed":"none":null!=e?"new":"deleted",i}function I(e){return"object"!=typeof e?e:Object.keys(e).sort().reduce((o,n)=>Object.assign(Object.assign({},o),{[n]:e[n]}),{})}var H=s(2972),t=s(3184),C=s(5758),N=s(2977),$=s(2528),h=s(6362),S=s(7317),J=s(2376),M=s(5590),P=s(4770),Q=s(1434),z=s(1130),g=s(6531),U=s(1967);function E(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",9)(1,"mat-form-field",10)(2,"mat-select",11),t.NdJ("selectionChange",function(a){return t.CHM(n),t.oxw(2).compareChange(a.value)}),t.TgZ(3,"mat-option",12),t._uU(4,"Compare with: Previous"),t.qZA(),t.TgZ(5,"mat-option",13),t._uU(6,"Compare with: Live"),t.qZA()()()()}if(2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("value",n.compareWith)}}function j(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Loading..."),t.qZA())}function Y(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"No previous versions of this item found"),t.qZA())}function F(e,o){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n.values[0]?null:n.values[0].value," ")}}function V(e,o){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.Gre("history-",n.change,""),t.xp6(1),t.hij(" ","deleted"===n.change?n.oldValue:n.value," ")}}function k(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",29),t._uU(2),t.qZA(),t.TgZ(3,"div",30),t._uU(4),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(n.value),t.xp6(2),t.Oqu(n.oldValue)}}function B(e,o){if(1&e&&(t.TgZ(0,"div",26)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div",27),t.YNc(4,V,2,4,"div",28),t.YNc(5,k,5,2,"ng-container",0),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.Gre("detail-row__label history-",n.change,""),t.xp6(1),t.hij("",n.langKey,":"),t.xp6(2),t.Q6J("ngIf","changed"!==n.change),t.xp6(1),t.Q6J("ngIf","changed"===n.change)}}function L(e,o){if(1&e&&(t.TgZ(0,"div",24),t.YNc(1,B,6,6,"div",25),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.values)}}function q(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",20)(1,"div",21),t.NdJ("click",function(){const r=t.CHM(n).$implicit,c=t.oxw(2).$implicit;return t.oxw(3).attributeExpandedToggle(c.versionNumber,r.name)}),t.TgZ(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"div"),t.YNc(5,F,2,1,"ng-container",0),t.qZA(),t.TgZ(6,"div",22)(7,"i"),t._uU(8),t.qZA()()(),t.YNc(9,L,2,1,"div",23),t.qZA()}if(2&e){const n=o.$implicit,i=t.oxw(2).$implicit,a=t.oxw(3);t.xp6(2),t.Gre("row-main__label history-",n.change,""),t.xp6(1),t.hij(" ",n.name," "),t.xp6(1),t.Gre("row-main__value history-",n.change,""),t.xp6(1),t.Q6J("ngIf",!a.expandedAttributes[i.versionNumber+n.name]),t.xp6(3),t.hij("[",n.dataType,"]"),t.xp6(1),t.Q6J("ngIf",a.expandedAttributes[i.versionNumber+n.name])}}function W(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2).$implicit;return t.oxw(3).restore(a.changeSetId)}),t._uU(1," Restore "),t.qZA()}}function D(e,o){if(1&e&&(t.ynx(0),t.YNc(1,q,10,10,"div",17),t.TgZ(2,"div",18),t.YNc(3,W,2,0,"button",19),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.attributes),t.xp6(2),t.Q6J("ngIf",!n.isLastVersion)}}function R(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-expansion-panel",16),t.NdJ("expandedChange",function(a){const c=t.CHM(n).$implicit;return t.oxw(3).panelExpandedChange(a,c.versionNumber)}),t.TgZ(1,"mat-expansion-panel-header")(2,"mat-panel-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-panel-description"),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.YNc(7,D,4,2,"ng-container",0),t.qZA()}if(2&e){const n=o.$implicit,i=t.oxw(3);t.Q6J("expanded",i.expandedPanels[n.versionNumber]),t.xp6(3),t.hij("Version ",n.versionNumber,""),t.xp6(2),t.Oqu(t.xi3(6,4,n.timeStamp,"yyyy-MM-dd hh:mm")),t.xp6(2),t.Q6J("ngIf",i.expandedPanels[n.versionNumber])}}function X(e,o){if(1&e&&(t.TgZ(0,"mat-accordion",14),t.YNc(1,R,8,7,"mat-expansion-panel",15),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",n.historyItems)}}function G(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-paginator",32),t.NdJ("page",function(a){return t.CHM(n),t.oxw(2).pageChange(a)}),t.qZA()}if(2&e){const n=t.oxw().ngIf,i=t.oxw();t.Q6J("length",n.length)("pageSize",n.pageSize)("pageSizeOptions",i.pageSizeOptions)}}function K(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div"),t._uU(4,"Item History"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return t.CHM(n),t.oxw().closeDialog()}),t.TgZ(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t.TgZ(8,"p",4),t._uU(9,"Check version history for this item and restore the version you need."),t.qZA(),t.YNc(10,E,7,1,"div",5),t.TgZ(11,"div",6),t.YNc(12,j,2,0,"div",0),t.YNc(13,Y,2,0,"div",0),t.YNc(14,X,2,1,"mat-accordion",7),t.qZA(),t.YNc(15,G,1,3,"mat-paginator",8),t.BQk()}if(2&e){const n=o.ngIf;t.xp6(10),t.Q6J("ngIf",(null==n.historyItems?null:n.historyItems.length)>0),t.xp6(2),t.Q6J("ngIf",null===n.historyItems),t.xp6(1),t.Q6J("ngIf",0===(null==n.historyItems?null:n.historyItems.length)),t.xp6(1),t.Q6J("ngIf",(null==n.historyItems?null:n.historyItems.length)>0),t.xp6(1),t.Q6J("ngIf",(null==n.historyItems?null:n.historyItems.length)>0)}}let tt=(()=>{class e{constructor(n,i,a,r){this.dialogRef=n,this.route=i,this.versionsService=a,this.snackBar=r,this.hostClass="dialog-component",this.pageSizeOptions=[10,20,50],this.expandedPanels={},this.expandedAttributes={},this.itemId=parseInt(this.route.snapshot.paramMap.get("itemId"),10),this.versions$=new u.X(null),this.page$=new u.X(1),this.pageSize$=new u.X(this.pageSizeOptions[0]),this.compareWith$=new u.X("live"),this.historyItems$=(0,f.a)([this.versions$,this.page$,this.pageSize$,this.compareWith$]).pipe((0,y.U)(([c,d,l,_])=>function T(e,o,n,i){return null==e||null==o||null==n||null==i?null:function Z(e,o,n){return e.map(i=>({changeSetId:i.ChangeSetId,attributes:w(i,o,n),historyId:i.HistoryId,timeStamp:i.TimeStamp,user:i.User,versionNumber:i.VersionNumber,isLastVersion:!o.some(r=>r.VersionNumber===i.VersionNumber+1)}))}(e.slice((o-1)*n,o*n),e,i)}(c,d,l,_))),this.templateVars$=(0,f.a)([this.versions$,this.historyItems$,this.pageSize$,this.compareWith$]).pipe((0,y.U)(([c,d,l,_])=>({length:null==c?void 0:c.length,historyItems:d,pageSize:l,compareWith:_})))}ngOnInit(){this.versionsService.fetchVersions(this.itemId).subscribe(n=>{this.versions$.next(n)})}ngOnDestroy(){this.versions$.complete(),this.page$.complete(),this.pageSize$.complete(),this.compareWith$.complete()}closeDialog(){this.dialogRef.close()}compareChange(n){this.compareWith$.next(n)}panelExpandedChange(n,i){this.expandedPanels[i]=n}attributeExpandedToggle(n,i){this.expandedAttributes[n+i]=!this.expandedAttributes[n+i]}pageChange(n){const i=n.pageIndex+1;i!==this.page$.value&&(this.expandedPanels={},this.expandedAttributes={},this.page$.next(i));const a=n.pageSize;a!==this.pageSize$.value&&this.pageSize$.next(a)}restore(n){this.snackBar.open("Restoring previous version..."),this.versionsService.restore(this.itemId,n).subscribe(i=>{this.snackBar.open("Previous version restored. Will reload edit dialog",null,{duration:3e3}),this.dialogRef.close({refreshEdit:!0})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.so),t.Y36(N.gz),t.Y36(H.Z),t.Y36($.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-item-history"]],hostVars:1,hostBindings:function(n,i){2&n&&t.Ikx("className",i.hostClass)},decls:2,vars:3,consts:[[4,"ngIf"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-description"],["class","compare-box",4,"ngIf"],[1,"dialog-component-content","fancy-scrollbar-light"],["multi","","class","history-tables",4,"ngIf"],["color","accent","showFirstLastButtons","true",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"compare-box"],["appearance","standard","color","accent",1,"compare-box__dropdown"],["name","Scope",3,"value","selectionChange"],["value","previous"],["value","live"],["multi","",1,"history-tables"],[3,"expanded","expandedChange",4,"ngFor","ngForOf"],[3,"expanded","expandedChange"],["class","table-row",4,"ngFor","ngForOf"],[1,"row-actions"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[1,"table-row"],[1,"table-row__main","row-main",3,"click"],[1,"row-main__type"],["class","table-row__details",4,"ngIf"],[1,"table-row__details"],["class","detail-row",4,"ngFor","ngForOf"],[1,"detail-row"],[1,"detail-row__value"],[3,"class",4,"ngIf"],[1,"history-new"],[1,"history-deleted","history-deleted__value"],["mat-raised-button","","color","accent",3,"click"],["color","accent","showFirstLastButtons","true",3,"length","pageSize","pageSizeOptions","page"]],template:function(n,i){1&n&&(t.YNc(0,K,16,5,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.templateVars$))},directives:[h.O5,C.uh,S.lW,J.$,M.Hw,P.KE,Q.gD,z.ey,g.pp,h.sg,g.ib,g.yz,g.yK,g.u4,U.NW],pipes:[h.Ov,h.uU],styles:[".compare-box[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end;height:40px}.compare-box__dropdown[_ngcontent-%COMP%]{width:192px;margin-top:-14px;font-size:14px;height:auto}.mat-accordion[_ngcontent-%COMP%]{display:block;padding:4px 0}.mat-expansion-panel-header[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]{font-size:14px}.table-row__main[_ngcontent-%COMP%]{display:flex}.table-row__details[_ngcontent-%COMP%]{display:block}.row-main[_ngcontent-%COMP%]{cursor:pointer;padding:4px 0}.row-main__label[_ngcontent-%COMP%]{width:160px;flex:0 0 auto}.row-main__value[_ngcontent-%COMP%]{flex:1 1 auto}.row-main__type[_ngcontent-%COMP%]{flex:0 0 auto;font-size:12px}.row-main__type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-of-type){margin-right:2px}.detail-row[_ngcontent-%COMP%]{display:flex;padding-bottom:4px;cursor:default}.detail-row__label[_ngcontent-%COMP%]{width:160px;flex:0 0 auto}.detail-row__value[_ngcontent-%COMP%]{flex:1 1 auto}.row-actions[_ngcontent-%COMP%]{margin-top:16px;display:flex;justify-content:flex-end}"]}),e})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/15.07.00/ng-edit/projects_eav-ui_src_app_item-history_item-history_component_ts.f60b89546e6aa13a.js.map