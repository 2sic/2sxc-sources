(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{SST1:function(e,t,i){"use strict";i.r(t);var n=i("D57K"),s=i("KLQV"),o=i("5/c3"),r=i("LiEJ"),a=i("LR82"),l=i("z5yO"),c=i("W/Ou"),p=i("Jg5f"),d=i("QagP"),u=i("JzAw"),h=i("QjRa"),m=i("o9tz"),b=i("uuTa"),f=i("1C3z"),y=i("OeRG"),g=i("Qc/f"),v=i("r4gC"),C=function(){function e(){}return e.prototype.agInit=function(e){this.params=e},e.prototype.refresh=function(e){return!0},e.prototype.deletePermission=function(){this.params.onDelete(this.params.data)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Jb({type:e,selectors:[["app-permissions-actions"]],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","matTooltip","Delete",1,"like-button","highlight",3,"click"]],template:function(e,t){1&e&&(f.Vb(0,"div",0),f.Vb(1,"div",1),f.dc("click",(function(){return t.deletePermission()})),f.Vb(2,"mat-icon"),f.Oc(3,"delete"),f.Ub(),f.Ub(),f.Ub())},directives:[y.q,g.a,v.a],styles:[""],changeDetection:0}),e}(),k=i("BLjT"),O=i("SNUn"),T=i("2pW/"),w=i("9HSk"),P=i("G6Ml"),D=i("8AiQ");i.d(t,"PermissionsComponent",(function(){return j}));var j=function(){function e(e,t,i,o,l){this.dialogRef=e,this.router=t,this.route=i,this.permissionsService=o,this.snackBar=l,this.permissions$=new r.a(null),this.modules=s.a,this.gridOptions=Object(n.a)(Object(n.a)({},h.a),{frameworkComponents:{idFieldComponent:u.a,permissionsActionsComponent:C},columnDefs:[{headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline",cellRenderer:"idFieldComponent",sortable:!0,filter:"agTextColumnFilter",valueGetter:this.idValueGetter},{headerName:"Name",field:"Title",flex:2,minWidth:250,cellClass:"primary-action highlight",sortable:!0,filter:"agTextColumnFilter",onCellClicked:this.editPermission.bind(this)},{headerName:"Identity",field:"Identity",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Condition",field:"Condition",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Grant",field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{width:40,cellClass:"secondary-action no-padding",cellRenderer:"permissionsActionsComponent",pinned:"right",cellRendererParams:{onDelete:this.deletePermission.bind(this)}}]}),this.subscription=new a.a,this.targetType=parseInt(this.route.snapshot.paramMap.get("type"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key")}return e.prototype.ngOnInit=function(){this.fetchPermissions(),this.refreshOnChildClosed()},e.prototype.ngOnDestroy=function(){this.permissions$.complete(),this.subscription.unsubscribe()},e.prototype.closeDialog=function(){this.dialogRef.close()},e.prototype.idValueGetter=function(e){var t=e.data;return"ID: "+t.Id+"\nGUID: "+t.Guid},e.prototype.fetchPermissions=function(){var e=this;this.permissionsService.getAll(this.targetType,this.keyType,this.key).subscribe((function(t){e.permissions$.next(t)}))},e.prototype.editPermission=function(e){var t,i,s;if(null==e){var o=void 0,r=Object.keys(m.a.metadata);try{for(var a=Object(n.i)(r),l=a.next();!l.done;l=a.next()){var c=l.value;if(m.a.metadata[c].type===this.targetType){o=m.a.metadata[c].target;break}}}catch(d){t={error:d}}finally{try{l&&!l.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}s={items:[{ContentTypeName:m.a.contentTypes.permissions,For:Object(n.a)(Object(n.a)(Object(n.a)({Target:o},this.keyType===m.a.keyTypes.guid&&{Guid:this.key}),this.keyType===m.a.keyTypes.number&&{Number:parseInt(this.key,10)}),this.keyType===m.a.keyTypes.string&&{String:this.key})}]}}else s={items:[{EntityId:e.data.Id}]};var p=Object(b.a)(s);this.router.navigate(["edit/"+p],{relativeTo:this.route})},e.prototype.deletePermission=function(e){var t=this;confirm("Delete '"+e.Title+"' ("+e.Id+")?")&&(this.snackBar.open("Deleting..."),this.permissionsService.delete(e.Id).subscribe((function(){t.snackBar.open("Deleted",null,{duration:2e3}),t.fetchPermissions()})))},e.prototype.refreshOnChildClosed=function(){var e=this;this.subscription.add(this.router.events.pipe(Object(l.a)((function(e){return e instanceof o.b})),Object(c.a)(!!this.route.snapshot.firstChild),Object(p.a)((function(){return!!e.route.snapshot.firstChild})),Object(d.a)(),Object(l.a)((function(e){var t=Object(n.f)(e,2);return t[0]&&!t[1]}))).subscribe((function(){e.fetchPermissions()})))},e.\u0275fac=function(t){return new(t||e)(f.Pb(k.g),f.Pb(o.c),f.Pb(o.a),f.Pb(O.a),f.Pb(T.b))},e.\u0275cmp=f.Jb({type:e,selectors:[["app-permissions"]],decls:15,vars:5,consts:[[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","matTooltip","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","modules","gridOptions"],["mat-fab","","mat-elevation-z24","","matTooltip","Create a new permission",1,"grid-fab",3,"click"]],template:function(e,t){1&e&&(f.Vb(0,"div",0),f.Vb(1,"div",1),f.Vb(2,"div",2),f.Vb(3,"div"),f.Oc(4,"Permissions"),f.Ub(),f.Vb(5,"button",3),f.dc("click",(function(){return t.closeDialog()})),f.Vb(6,"mat-icon"),f.Oc(7,"close"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Qb(8,"router-outlet"),f.Vb(9,"div",4),f.Qb(10,"ag-grid-angular",5),f.ic(11,"async"),f.Vb(12,"button",6),f.dc("click",(function(){return t.editPermission(null)})),f.Vb(13,"mat-icon"),f.Oc(14,"add"),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&e&&(f.Bb(10),f.nc("rowData",f.jc(11,3,t.permissions$))("modules",t.modules)("gridOptions",t.gridOptions))},directives:[k.h,w.a,g.a,v.a,o.e,P.a],pipes:[D.b],styles:[""],changeDetection:0}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.07.00/ng-edit/permissions-component.be9f619bf3008c8387a4.js.map