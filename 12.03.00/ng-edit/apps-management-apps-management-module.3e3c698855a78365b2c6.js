(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3iQy":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e("fXoL"),a=e("tk/3"),i=e("GJBw"),r=function(){function t(t,n){this.http=t,this.dnnContext=n}return t.prototype.getAll=function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/zone/getlanguages"))},t.prototype.toggle=function(t,n){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/zone/switchlanguage"),{params:{cultureCode:t,enable:n.toString()}})},t.prototype.save=function(t,n){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/zone/switchlanguage"),{params:{cultureCode:t,enable:n.toString()}})},t.\u0275fac=function(n){return new(n||t)(o.Zb(a.b),o.Zb(i.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()},JEo7:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e("fXoL"),a=e("tk/3"),i=e("GJBw"),r=function(){function t(t,n){this.http=t,this.dnnContext=n}return t.prototype.getAll=function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/List"))},t.prototype.getManageFeaturesUrl=function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/RemoteManageUrl"))},t.prototype.saveFeatures=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/feature/Save"),t)},t.\u0275fac=function(n){return new(n||t)(o.Zb(a.b),o.Zb(i.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()},U5jY:function(t,n,e){"use strict";e.r(n),e.d(n,"AppsManagementModule",function(){return G});var o=e("gwh1"),a=e("ofXK"),i=e("3Pt+"),r=e("bTqV"),u=e("Wp6s"),p=e("FKr1"),s=e("0IaG"),c=e("NFeN"),h=e("qFsG"),l=e("STbY"),f=e("Xa2L"),d=e("1jcm"),g=e("wZkO"),b=e("Qu3c"),m=e("JbvS"),w=e("1O52"),C=e("Sbq5"),x=e("H6vc"),v=e("tyNb"),y=e("odua"),L=e("BJZ3"),M=e("mrSG"),A={name:"APPS_MANAGEMENT_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:function(){return Object(M.b)(this,void 0,void 0,function(){return Object(M.e)(this,function(t){switch(t.label){case 0:return[4,Promise.all([e.e(4),e.e(0),e.e(20)]).then(e.bind(null,"M3FF"))];case 1:return[2,t.sent().AppsManagementNavComponent]}})})}},S=e("fXoL"),Z=[{path:"",component:y.a,data:{dialog:A},children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:L.a,children:[{path:"import",loadChildren:function(){return Promise.all([e.e(1),e.e(39)]).then(e.bind(null,"nfsb")).then(function(t){return t.ImportAppModule})}}],data:{title:"Apps in this Zone"}},{path:"settings",component:L.a,data:{title:"System Settings"}},{path:"languages",component:L.a,data:{title:"Zone Languages"}},{path:"features",component:L.a,data:{title:"Zone Features"}},{path:"sxc-insights",component:L.a,data:{title:"Debug Insights"}},{path:":appId",loadChildren:function(){return Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(5),e.e(6),e.e(9),e.e(8),e.e(10),e.e(0),e.e(17)]).then(e.bind(null,"Ru9k")).then(function(t){return t.AppAdministrationModule})}}]}],k=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S.Nb({type:t}),t.\u0275inj=S.Mb({imports:[[v.d.forChild(Z)],v.d]}),t}(),U=e("L6al"),J=e("3iQy"),P=e("JEo7"),F=e("poP/"),G=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S.Nb({type:t}),t.\u0275inj=S.Mb({providers:[w.a,U.a,J.a,P.a,F.a,C.a],imports:[[k,x.a,s.e,a.c,o.b.withComponents([]),r.b,c.b,f.a,b.b,d.b,g.e,p.q,m.c,u.e,i.h,h.c,l.c]]}),t}()},"poP/":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e("fXoL"),a=e("tk/3"),i=e("GJBw"),r=function(){function t(t,n){this.http=t,this.dnnContext=n}return t.prototype.activatePageLog=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("sys/log/EnableDebug"),{params:{duration:t.toString()}})},t.\u0275fac=function(n){return new(n||t)(o.Zb(a.b),o.Zb(i.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/12.03.00/ng-edit/apps-management-apps-management-module.3e3c698855a78365b2c6.js.map