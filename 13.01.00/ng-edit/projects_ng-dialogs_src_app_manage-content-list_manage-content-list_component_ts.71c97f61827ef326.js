"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_manage-content-list_manage-content-list_component_ts"],{7329:function(Y,v,o){o.r(v),o.d(v,{ManageContentListComponent:function(){return H}});var P=o(6170),m=o(2090),T=o(8069),D=o(8047),p=o(6554),l=o(2977),f=o(6317),I=o(6562),L=o(7714),C=o(635),x=o(116),A=o(4874),Z=o(679),M=o(5137),y=o(4830),t=o(7133),E=o(5758),b=o(2528),g=o(6362),U=o(7317),B=o(785),k=o(5590),R=o(2634);function W(a,r){if(1&a){var e=t.EpF();t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).editHeader()}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA(),t.qZA(),t.BQk()}if(2&a){var n=t.oxw(2).ngIf;t.xp6(2),t.Oqu(n.header.Title)}}function K(a,r){1&a&&(t.ynx(0),t._uU(1,"(this list has no header)"),t.BQk())}function $(a,r){if(1&a&&(t.ynx(0),t.TgZ(1,"p",11),t._uU(2," You can manage the list header here (if it is defined): "),t.qZA(),t.TgZ(3,"p",11),t.YNc(4,W,6,1,"ng-container",7),t.YNc(5,K,2,0,"ng-container",7),t.qZA(),t.BQk()),2&a){var e=t.oxw().ngIf;t.xp6(4),t.Q6J("ngIf",e.header.Type),t.xp6(1),t.Q6J("ngIf",!e.header.Type)}}function j(a,r){if(1&a){var e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",17),t.NdJ("click",function(){t.CHM(e);var i=t.oxw().$implicit;return t.oxw(2).editItem(i.Id)}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA(),t.qZA(),t.qZA()}}function G(a,r){if(1&a&&(t.TgZ(0,"div",13),t.TgZ(1,"div",14),t.TgZ(2,"mat-icon",15),t._uU(3,"drag_handle"),t.qZA(),t.TgZ(4,"span",16),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,j,4,0,"div",7),t.qZA()),2&a){var e=r.$implicit;t.xp6(4),t.hYB("tippy","",e.Title," (",e.Id,")"),t.xp6(1),t.AsE(" ",e.Title," (",e.Id,") "),t.xp6(1),t.Q6J("ngIf",0!==e.Id)}}function F(a,r){if(1&a){var e=t.EpF();t.TgZ(0,"div",6),t.YNc(1,$,6,2,"ng-container",7),t.TgZ(2,"p",8),t._uU(3,"Sort the items by dragging as you need, then save:"),t.qZA(),t.TgZ(4,"div",9),t.NdJ("cdkDropListDropped",function(c){return t.CHM(e),t.oxw().drop(c)}),t.YNc(5,G,7,5,"div",10),t.qZA(),t.qZA()}if(2&a){var n=r.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(4),t.Q6J("ngForOf",n.items)("ngForTrackBy",i.trackByFn)}}var H=function(){var a=function(){function r(e,n,i,s,c){(0,T.Z)(this,r),this.dialogRef=e,this.contentGroupService=n,this.route=i,this.router=s,this.snackBar=c,this.hostClass="dialog-component",this.items$=new f.X(null),this.header$=new f.X(null),this.templateVars$=(0,I.a)([this.items$,this.header$]).pipe((0,C.U)(function(d){var _=(0,m.Z)(d,2);return{items:_[0],header:_[1]}})),this.contentGroup={id:null,guid:this.route.snapshot.paramMap.get("guid"),part:this.route.snapshot.paramMap.get("part"),index:parseInt(this.route.snapshot.paramMap.get("index"),10)},this.reordered=!1,this.subscription=new L.w0}return(0,D.Z)(r,[{key:"ngOnInit",value:function(){this.fetchList(),this.fetchHeader(),this.refreshOnChildClosed()}},{key:"ngOnDestroy",value:function(){this.items$.complete(),this.header$.complete(),this.subscription.unsubscribe()}},{key:"closeDialog",value:function(){this.dialogRef.close()}},{key:"saveList",value:function(){var n=this;this.snackBar.open("Saving..."),this.contentGroupService.saveList(this.contentGroup,this.items$.value).subscribe(function(i){n.snackBar.open("Saved"),n.closeDialog()})}},{key:"editHeader",value:function(){var i=(0,M.f)({items:[{Group:{Guid:this.contentGroup.guid,Index:0,Part:"listcontent",Add:0===this.header$.value.Id}},{Group:{Guid:this.contentGroup.guid,Index:0,Part:"listpresentation",Add:0===this.header$.value.Id}}]});this.router.navigate(["edit/".concat(i)],{relativeTo:this.route})}},{key:"editItem",value:function(n){var s=(0,M.f)({items:[{EntityId:n}]});this.router.navigate(["edit/".concat(s)],{relativeTo:this.route})}},{key:"drop",value:function(n){var i=(0,P.Z)(this.items$.value);(0,p.bA)(i,n.previousIndex,n.currentIndex),this.items$.next(i),this.reordered=!0}},{key:"trackByFn",value:function(n,i){return"".concat(i.Index,"+").concat(i.Id)}},{key:"fetchList",value:function(){var n=this;this.contentGroupService.getList(this.contentGroup).subscribe(function(i){if(n.reordered){var s=n.items$.value.map(function(_){return _.Id});if(n.items$.value.length!==i.length||i.some(function(_){return!s.includes(_.Id)}))n.snackBar.open("List was changed from somewhere else. Order of items is reset",null,{duration:5e3});else{var d=n.items$.value.map(function(_){return _.Index});i.sort(function(_,h){var u=d.indexOf(_.Index),O=d.indexOf(h.Index);return-1===u||-1===O?0:u-O})}}n.items$.next(i)})}},{key:"fetchHeader",value:function(){var n=this;this.contentGroupService.getHeader(this.contentGroup).subscribe(function(i){n.header$.next(i)})}},{key:"refreshOnChildClosed",value:function(){var n=this;this.subscription.add(this.router.events.pipe((0,x.h)(function(i){return i instanceof l.m2}),(0,A.O)(!!this.route.snapshot.firstChild),(0,C.U)(function(){return!!n.route.snapshot.firstChild}),(0,Z.G)(),(0,x.h)(function(i){var s=(0,m.Z)(i,2);return s[0]&&!s[1]})).subscribe(function(){n.fetchList(),n.fetchHeader()}))}}]),r}();return a.\u0275fac=function(e){return new(e||a)(t.Y36(E.so),t.Y36(y.e),t.Y36(l.gz),t.Y36(l.F0),t.Y36(b.ux))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-manage-content-list"]],hostVars:1,hostBindings:function(e,n){2&e&&t.Ikx("className",n.hostClass)},decls:11,vars:3,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],["class","dialog-component-content fancy-scrollbar-light",4,"ngIf"],[1,"dialog-component-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click"],[1,"dialog-component-content","fancy-scrollbar-light"],[4,"ngIf"],[1,"dialog-description","sort-title"],["cdkDropList","",1,"dnd-list",3,"cdkDropListDropped"],["class","dnd-item","cdkDrag","",4,"ngFor","ngForOf","ngForTrackBy"],[1,"dialog-description"],["mat-icon-button","","tippy","Edit header",3,"click"],["cdkDrag","",1,"dnd-item"],[1,"dnd-item__title"],["tippy","Drag to reorder the list",1,"dnd-item__title-icon"],[1,"dnd-item__title-text",3,"tippy"],["mat-icon-button","","tippy","Edit item","appMousedownStopPropagation","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Manage content-item lists"),t.qZA(),t.qZA(),t._UZ(3,"router-outlet"),t.YNc(4,F,6,3,"div",2),t.ALo(5,"async"),t.TgZ(6,"div",3),t.TgZ(7,"button",4),t.NdJ("click",function(){return n.closeDialog()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return n.saveList()}),t._uU(10,"Save"),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.templateVars$)))},directives:[E.uh,l.lC,g.O5,U.lW,p.Wj,g.sg,B.$,k.Hw,p.Zt,R.d],pipes:[g.Ov],styles:[".sort-title[_ngcontent-%COMP%]{padding-top:16px}.dnd-list[_ngcontent-%COMP%]{margin:16px 0;border:1px solid #ccc;border-radius:4px;overflow:hidden}.dnd-item[_ngcontent-%COMP%]{cursor:move;height:40px;border-bottom:1px solid #ccc;padding:0 8px;display:flex;align-items:center;justify-content:space-between;background:white;box-sizing:border-box;font-size:14px}.dnd-item[_ngcontent-%COMP%]:last-child{border:none}.dnd-item__title[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden}.dnd-item__title-icon[_ngcontent-%COMP%]{margin-right:8px;opacity:.4}.dnd-item__title-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dnd-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dnd-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),a}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.01.00/ng-edit/projects_ng-dialogs_src_app_manage-content-list_manage-content-list_component_ts.71c97f61827ef326.js.map