(window.webpackJsonp=window.webpackJsonp||[]).push([[51,52],{Bkot:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var r=e("tyNb"),o=e("EaDK"),i=e("odua"),a=e("IrWj"),c=e("fXoL"),u=[{path:"",component:i.a,data:{dialog:a.a},children:[{matcher:o.a,loadChildren:function(){return Promise.all([e.e(1),e.e(2),e.e(5),e.e(6),e.e(14),e.e(13),e.e(15),e.e(10),e.e(0),e.e(35)]).then(e.bind(null,"32/c")).then(function(t){return t.EditModule})}},{matcher:o.c,loadChildren:function(){return e.e(17).then(e.bind(null,"nxWM")).then(function(t){return t.RefreshEditModule})}}]}],s=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({imports:[[r.d.forChild(u)],r.d]}),t}()},CLg8:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("qb9A"),o=e("fXoL"),i=e("LQlA"),a=e("wBq4"),c=function(){function t(t,n){this.metadataService=t,this.entitiesService=n}return t.prototype.getAll=function(t,n,e){return this.metadataService.getMetadata(t,n,e,r.a.contentTypes.permissions)},t.prototype.delete=function(t){return this.entitiesService.delete(r.a.contentTypes.permissions,t,!1)},t.\u0275fac=function(n){return new(n||t)(o.Zb(i.a),o.Zb(a.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()},IrWj:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("mrSG"),o={name:"SET_PERMISSIONS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:function(){return Object(r.b)(this,void 0,void 0,function(){return Object(r.e)(this,function(t){switch(t.label){case 0:return[4,Promise.all([e.e(4),e.e(50)]).then(e.bind(null,"tIKv"))];case 1:return[2,t.sent().PermissionsComponent]}})})}}},LQlA:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("fXoL"),o=e("tk/3"),i=e("1O52"),a=e("GJBw"),c=function(){function t(t,n,e){this.http=t,this.context=n,this.dnnContext=e}return t.prototype.getMetadata=function(t,n,e,r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/metadata/get"),{params:{appId:this.context.appId.toString(),targetType:t.toString(),keyType:n,key:e,contentType:r}})},t.\u0275fac=function(n){return new(n||t)(r.Zb(o.b),r.Zb(i.a),r.Zb(a.a))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac}),t}()},vhtq:function(t,n,e){"use strict";e.r(n),e.d(n,"PermissionsModule",function(){return w});var r=e("gwh1"),o=e("ofXK"),i=e("bTqV"),a=e("FKr1"),c=e("0IaG"),u=e("NFeN"),s=e("dNgK"),f=e("Qu3c"),p=e("wBq4"),d=e("1O52"),h=e("H6vc"),l=e("Bkot"),b=e("LQlA"),m=e("CLg8"),v=e("fXoL"),w=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v.Nb({type:t}),t.\u0275inj=v.Mb({providers:[d.a,m.a,b.a,p.a],imports:[[o.c,l.a,h.a,c.e,i.b,u.b,f.b,r.b.withComponents([]),a.q,s.c]]}),t}()},wBq4:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("5t3I"),o=e("fXoL"),i=e("tk/3"),a=e("1O52"),c=e("GJBw"),u=function(){function t(t,n,e){this.http=t,this.context=n,this.dnnContext=e}return t.prototype.delete=function(t,n,e){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(r.s+"delete"),{params:{contentType:t,id:n.toString(),appId:this.context.appId.toString(),force:e.toString()}})},t.\u0275fac=function(n){return new(n||t)(o.Zb(i.b),o.Zb(a.a),o.Zb(c.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/12.02.01/ng-edit/permissions-module.c70770eb5db230e299a6.js.map