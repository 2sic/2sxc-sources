"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts"],{3436:(I,C,i)=>{i.r(C),i.d(C,{ManageContentListComponent:()=>G});var _=i(6554),p=i(6317),x=i(6562),v=i(635),f=i(9337),h=i(2225),u=i(9989),O=i(4536),g=i(60),t=i(3184),a=i(2977),l=i(5758),P=i(2528),D=i(7514),L=i(6362),A=i(9051),Z=i(7317),B=i(2376),b=i(5590),U=i(4240);function y(o,r){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"button",13),t.NdJ("click",function(){return t.CHM(n),t.oxw(3).editHeader()}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA()(),t.BQk()}if(2&o){const n=t.oxw(2).ngIf;t.xp6(2),t.Oqu(n.header.Title)}}function $(o,r){1&o&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.BQk()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"ManageContentList.NoHeader")))}function R(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"p",12),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",12),t.YNc(5,y,6,1,"ng-container",8),t.YNc(6,$,3,3,"ng-container",8),t.qZA(),t.BQk()),2&o){const n=t.oxw().ngIf;t.xp6(2),t.hij(" ",t.lcZ(3,3,"ManageContentList.Description")," "),t.xp6(3),t.Q6J("ngIf",n.header.Type),t.xp6(1),t.Q6J("ngIf",!n.header.Type)}}function k(o,r){1&o&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ManageContentList.SortItems")," "))}function K(o,r){1&o&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ManageContentList.SortLotsOfItems")," "))}function W(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",15)(1,"div",16)(2,"mat-icon",17),t._uU(3,"drag_handle"),t.qZA(),t.TgZ(4,"span",18),t._uU(5),t.qZA()(),t.TgZ(6,"div")(7,"button",19),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw(2).addFromExisting(c.Index)}),t.ALo(8,"translate"),t.TgZ(9,"mat-icon"),t._uU(10,"playlist_add"),t.qZA()(),t.TgZ(11,"button",19),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw(2).addBelow(c.Index)}),t.ALo(12,"translate"),t.TgZ(13,"mat-icon"),t._uU(14,"add"),t.qZA()(),t.TgZ(15,"button",19),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw(2).remove(c)}),t.ALo(16,"translate"),t.TgZ(17,"mat-icon"),t._uU(18,"remove"),t.qZA()(),t.TgZ(19,"button",19),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw(2).editItem(c.Id)}),t.ALo(20,"translate"),t.TgZ(21,"mat-icon"),t._uU(22,"edit"),t.qZA()()()()}if(2&o){const n=r.$implicit,e=t.oxw(2);t.xp6(4),t.hYB("tippy","",n.Title," (",n.Id,")"),t.xp6(1),t.AsE(" ",n.Title," (",n.Id,") "),t.xp6(2),t.Q6J("tippy",t.lcZ(8,12,"Fields.Entity.AddExistingItem"))("disabled",0===n.Id),t.xp6(4),t.Q6J("tippy",t.lcZ(12,14,"Fields.Entity.AddItemBelow"))("disabled",0===n.Id||e.reordered),t.xp6(4),t.Q6J("tippy",t.lcZ(16,16,"Fields.Entity.Remove"))("disabled",e.reordered),t.xp6(4),t.Q6J("tippy",t.lcZ(20,18,"Fields.Entity.Edit"))("disabled",0===n.Id)}}function F(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",7),t.YNc(1,R,7,5,"ng-container",8),t.YNc(2,k,3,3,"p",9),t.YNc(3,K,3,3,"p",9),t.TgZ(4,"div",10),t.NdJ("cdkDropListDropped",function(s){return t.CHM(n),t.oxw().drop(s)}),t.YNc(5,W,23,20,"div",11),t.qZA()()}if(2&o){const n=r.ngIf,e=t.oxw();t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(1),t.Q6J("ngIf",n.items&&(null==n.items?null:n.items.length)<25),t.xp6(1),t.Q6J("ngIf",(null==n.items?null:n.items.length)>=25),t.xp6(2),t.Q6J("ngForOf",n.items)("ngForTrackBy",e.trackByFn)}}let G=(()=>{class o extends g.H{constructor(n,e,s,c,d,m,T){super(n,e),this.router=n,this.route=e,this.dialogRef=s,this.contentGroupService=c,this.snackBar=d,this.translate=m,this.appDialogConfigService=T,this.hostClass="dialog-component",this.items$=new p.X(null),this.header$=new p.X(null),this.viewModel$=(0,x.a)([this.items$,this.header$]).pipe((0,v.U)(([M,E])=>({items:M,header:E}))),this.contentGroup={id:null,guid:this.route.snapshot.paramMap.get("guid"),part:this.route.snapshot.paramMap.get("part"),index:parseInt(this.route.snapshot.paramMap.get("index"),10)},this.reordered=!1}ngOnInit(){this.fetchList(),this.fetchHeader(),this.fetchDialogSettings(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchList(!0),this.fetchHeader()}))}ngOnDestroy(){this.items$.complete(),this.header$.complete(),super.ngOnDestroy()}fetchDialogSettings(){this.appDialogConfigService.getShared$().pipe((0,f.b)(n=>{this.translate.setDefaultLang(n.Context.Language.Primary.split("-")[0]),this.translate.use(n.Context.Language.Current.split("-")[0])})).subscribe()}closeDialog(){this.dialogRef.close()}saveList(){this.snackBar.open("Saving..."),this.contentGroupService.saveList(this.contentGroup,this.items$.value).subscribe(()=>{this.snackBar.open("Saved",null,{duration:2e3}),this.fetchList(),this.fetchHeader()})}saveAndCloseList(){this.snackBar.open("Saving..."),this.contentGroupService.saveList(this.contentGroup,this.items$.value).subscribe(()=>{this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()})}editHeader(){const e=(0,h.f)({items:[{Add:0===this.header$.value.Id,Index:0,Parent:this.contentGroup.guid,Field:"listcontent"},{Add:0===this.header$.value.Id,Index:0,Parent:this.contentGroup.guid,Field:"listpresentation"}]});this.router.navigate([`edit/${e}`],{relativeTo:this.route})}editItem(n){const s=(0,h.f)({items:[{EntityId:n}]});this.router.navigate([`edit/${s}`],{relativeTo:this.route})}addFromExisting(n){this.router.navigate([`${this.contentGroup.guid}/${this.contentGroup.part}/${n+1}/replace`],{relativeTo:this.route,queryParams:{add:!0}})}addBelow(n){const s=(0,h.f)({items:[{Add:!0,Index:n+1,Parent:this.contentGroup.guid,Field:this.contentGroup.part}]});this.router.navigate([`edit/${s}`],{relativeTo:this.route})}remove(n){!confirm(this.translate.instant("ManageContentList.ConfirmRemove"))||(this.snackBar.open("Removing..."),this.contentGroupService.removeItem(this.contentGroup,n.Index).subscribe(()=>{this.snackBar.open("Removed",null,{duration:2e3}),this.fetchList()}))}drop(n){const e=[...this.items$.value];(0,_.bA)(e,n.previousIndex,n.currentIndex),this.items$.next(e),this.reordered=!0}trackByFn(n,e){return`${e.Index}+${e.Id}`}fetchList(n=!1){this.contentGroupService.getList(this.contentGroup).subscribe(e=>{if(this.reordered){const s=this.items$.value.map(d=>d.Id);if(this.items$.value.length===e.length&&!e.some(d=>!s.includes(d.Id))&&n){const d=this.items$.value.map(m=>m.Index);e.sort((m,T)=>{const M=d.indexOf(m.Index),E=d.indexOf(T.Index);return-1===M||-1===E?0:M-E})}else n&&this.snackBar.open("List was changed from somewhere else. Order of items is reset",null,{duration:5e3})}this.items$.next(e),this.reordered=!1})}fetchHeader(){this.contentGroupService.getHeader(this.contentGroup).subscribe(n=>{this.header$.next(n)})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.F0),t.Y36(a.gz),t.Y36(l.so),t.Y36(u.e),t.Y36(P.ux),t.Y36(D.sK),t.Y36(O.Kw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-manage-content-list"]],hostVars:1,hostBindings:function(n,e){2&n&&t.Ikx("className",e.hostClass)},features:[t.qOj],decls:18,vars:15,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],["class","dialog-component-content fancy-scrollbar-light","cdkScrollable","",4,"ngIf"],[1,"dialog-component-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","accent",3,"tippy","click"],["cdkScrollable","",1,"dialog-component-content","fancy-scrollbar-light"],[4,"ngIf"],["class","dialog-description sort-title",4,"ngIf"],["cdkDropList","",1,"dnd-list",3,"cdkDropListDropped"],["class","dnd-item","cdkDrag","",4,"ngFor","ngForOf","ngForTrackBy"],[1,"dialog-description"],["mat-icon-button","","tippy","Edit header",3,"click"],[1,"dialog-description","sort-title"],["cdkDrag","",1,"dnd-item"],[1,"dnd-item__title"],["tippy","Drag to reorder the list",1,"dnd-item__title-icon"],[1,"dnd-item__title-text",3,"tippy"],["mat-icon-button","","appMousedownStopPropagation","",3,"tippy","disabled","click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.ALo(3,"translate"),t.qZA()(),t._UZ(4,"router-outlet"),t.YNc(5,F,6,5,"div",2),t.ALo(6,"async"),t.TgZ(7,"div",3)(8,"button",4),t.NdJ("click",function(){return e.closeDialog()}),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return e.saveList()}),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"button",6),t.NdJ("click",function(){return e.saveAndCloseList()}),t.ALo(15,"translate"),t.TgZ(16,"mat-icon"),t._uU(17,"done"),t.qZA()()()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,5,"ManageContentList.Title")),t.xp6(3),t.Q6J("ngIf",t.lcZ(6,7,e.viewModel$)),t.xp6(4),t.Oqu(t.lcZ(10,9,"General.Buttons.Cancel")),t.xp6(3),t.Oqu(t.lcZ(13,11,"General.Buttons.Save")),t.xp6(2),t.Q6J("tippy",t.lcZ(15,13,"Form.Buttons.SaveAndClose")))},directives:[l.uh,a.lC,L.O5,A.PQ,Z.lW,B.$,b.Hw,_.Wj,L.sg,_.Zt,U.d],pipes:[D.X$,L.Ov],styles:[".sort-title[_ngcontent-%COMP%]{padding-top:16px}.dnd-list[_ngcontent-%COMP%]{margin:16px 0;border:1px solid #ccc;border-radius:4px;overflow:hidden}.dnd-item[_ngcontent-%COMP%]{cursor:move;height:40px;border-bottom:1px solid #ccc;padding:0 8px;display:flex;align-items:center;justify-content:space-between;background:white;box-sizing:border-box;font-size:14px}.dnd-item[_ngcontent-%COMP%]:last-child{border:none}.dnd-item__title[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;max-width:80%}.dnd-item__title-icon[_ngcontent-%COMP%]{margin-right:8px;opacity:.4}.dnd-item__title-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dnd-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dnd-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),o})()},60:(I,C,i)=>{i.d(C,{H:()=>O});var _=i(2977),p=i(116),x=i(4874),v=i(635),f=i(679),h=i(5904),u=i(3184);let O=(()=>{class g extends h.f{constructor(a,l){super(),this.router=a,this.route=l}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,p.h)(a=>a instanceof _.m2),(0,x.O)(!!this.route.snapshot.firstChild.firstChild),(0,v.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,f.G)(),(0,p.h)(([a,l])=>a&&!l))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,p.h)(a=>a instanceof _.m2),(0,x.O)(!!this.route.snapshot.firstChild),(0,v.U)(()=>!!this.route.snapshot.firstChild),(0,f.G)(),(0,p.h)(([a,l])=>a&&!l))}}return g.\u0275fac=function(a){return new(a||g)(u.Y36(_.F0),u.Y36(_.gz))},g.\u0275dir=u.lG2({type:g,features:[u.qOj]}),g})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.03.00/ng-edit/projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts.c02b27fd70487ce1.js.map