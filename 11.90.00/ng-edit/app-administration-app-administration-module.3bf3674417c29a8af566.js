(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{S36y:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return c}));var i=n("D57K"),o=n("YtkY"),a=n("EM62"),r=n("vobO"),p=n("Iv+g"),l=n("B5/E"),u="admin/type/",c=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.apiUrl=function(t){return this.dnnContext.$2sxc.http.apiUrl(t)},t.prototype.retrieveContentType=function(t){return this.http.get(this.apiUrl(u+"get"),{params:{appId:this.context.appId.toString(),contentTypeId:t}})},t.prototype.retrieveContentTypes=function(t){return this.http.get(this.apiUrl(u+"list"),{params:{appId:this.context.appId.toString(),scope:t}})},t.prototype.getScopes=function(){return this.http.get(this.apiUrl(u+"scopes"),{params:{appId:this.context.appId.toString()}}).pipe(Object(o.a)((function(t){return Object.keys(t).map((function(e){return{name:t[e],value:e}}))})))},t.prototype.save=function(t){return this.http.post(this.apiUrl(u+"save"),t,{params:{appid:this.context.appId.toString()}})},t.prototype.delete=function(t){return this.http.delete(this.apiUrl(u+"delete"),{params:{appid:this.context.appId.toString(),staticName:t.StaticName}})},t.prototype.import=function(t){var e,n,o=new FormData;try{for(var a=Object(i.h)(t),r=a.next();!r.done;r=a.next())o.append("File",r.value)}catch(p){e={error:p}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return this.http.post(this.apiUrl(u+"import"),o,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})},t.prototype.createGhost=function(t){return this.http.post(this.apiUrl(u+"addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:t}})},t.\u0275fac=function(e){return new(e||t)(a.Wb(r.b),a.Wb(p.a),a.Wb(l.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t}()},i2HA:function(t,e,n){"use strict";n.r(e),n.d(e,"AppAdministrationModule",(function(){return nt}));var i=n("W6oE"),o=n("2kYt"),a=n("nIj0"),r=n("f3iV"),p=n("PBFl"),l=n("Meci"),u=n("+Tre"),c=n("mFH5"),s=n("OZ4H"),d=n("3Uyd"),h=n("bFHC"),m=n("Cd2c"),b=n("Jb3d"),f=n("csyo"),C=n("F1o0"),g=n("R7+U"),I=n("W1gw"),y=n("KZIX"),O=n("Y2X+"),P=n("//S1"),A=n("2aC0"),v=n("Bwh1"),T=n("55Ui"),S=n("Iv+g"),E=n("H0VJ"),j=n("O6Xb"),w=n("D57K"),x=n("sEIs"),M=n("it7M"),N=n("PJ+w"),U=n("UYYG"),_=n("nXrb"),R=n("mQU2"),D={name:"APP_ADMINISTRATION_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"XySb"))];case 1:return[2,t.sent().AppAdministrationNavComponent]}}))}))}},z={name:"EDIT_CONTENT_TYPE_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"YLeX"))];case 1:return[2,t.sent().EditContentTypeComponent]}}))}))}},J={name:"EXPORT_APP_PARTS",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(37)]).then(n.bind(null,"0bV3"))];case 1:return[2,t.sent().ExportAppPartsComponent]}}))}))}},V={name:"EXPORT_APP",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,n.e(36).then(n.bind(null,"qtGM"))];case 1:return[2,t.sent().ExportAppComponent]}}))}))}},F={name:"IMPORT_APP_PARTS",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(40)]).then(n.bind(null,"4rFR"))];case 1:return[2,t.sent().ImportAppPartsComponent]}}))}))}},G={name:"IMPORT_CONTENT_TYPE_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"NtNJ"))];case 1:return[2,t.sent().ImportContentTypeComponent]}}))}))}},W={name:"IMPORT_QUERY_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(42)]).then(n.bind(null,"TFsy"))];case 1:return[2,t.sent().ImportQueryComponent]}}))}))}},Y={name:"IMPORT_VIEW_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,Promise.all([n.e(0),n.e(43)]).then(n.bind(null,"bBWv"))];case 1:return[2,t.sent().ImportViewComponent]}}))}))}},B={name:"VIEWS_USAGE_DIALOG",initContext:!1,panelSize:"large",panelClass:null,getComponent:function(){return Object(w.b)(this,void 0,void 0,(function(){return Object(w.e)(this,(function(t){switch(t.label){case 0:return[4,n.e(58).then(n.bind(null,"r5Qb"))];case 1:return[2,t.sent().ViewsUsageComponent]}}))}))}},Q=n("EM62"),X=[{path:"",component:_.a,data:{dialog:D},children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:R.a,data:{title:"App Home"}},{path:"data",component:R.a,children:[{path:"import",component:_.a,data:{dialog:G,title:"Import Content Type"}},{path:"items/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(9),n.e(0),n.e(28)]).then(n.bind(null,"DUJ2")).then((function(t){return t.ContentItemsModule}))}},{matcher:M.a,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(6),n.e(14),n.e(13),n.e(10),n.e(0),n.e(34)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))}},{matcher:M.c,loadChildren:function(){return n.e(16).then(n.bind(null,"orgq")).then((function(t){return t.RefreshEditModule}))}},{path:":scope/add",component:_.a,data:{dialog:z,title:"Add Content Type"}},{path:":scope/:contentTypeStaticName/edit",component:_.a,data:{dialog:z,title:"Edit Content Type"}},N.e.route,{path:"fields/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(0),n.e(30)]).then(n.bind(null,"tjG3")).then((function(t){return t.ContentTypeFieldsModule}))},data:{title:"Content Type Fields"}},{path:"export/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(23)]).then(n.bind(null,"+hKU")).then((function(t){return t.ContentExportModule}))},data:{title:"Export Items"}},{path:":contentTypeStaticName/import",loadChildren:function(){return Promise.all([n.e(1),n.e(25)]).then(n.bind(null,"W/vD")).then((function(t){return t.ContentImportModule}))},data:{title:"Import Items"}},U.a.route],data:{title:"App Data"}},{path:"queries",component:R.a,children:[{path:"import",component:_.a,data:{dialog:W,title:"Import Query"}},{matcher:M.a,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(6),n.e(14),n.e(13),n.e(10),n.e(0),n.e(34)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))},data:{title:"Edit Query Name and Description",history:!1}},Object(w.a)(Object(w.a)({},U.a.route),{data:{title:"Query Permissions"}}),N.e.route],data:{title:"App Queries"}},{path:"views",component:R.a,children:[{path:"import",component:_.a,data:{dialog:Y,title:"Import View"}},{path:"usage/:guid",component:_.a,data:{dialog:B}},{matcher:M.a,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(6),n.e(14),n.e(13),n.e(10),n.e(0),n.e(34)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))},data:{title:"Edit View"}},{matcher:M.c,loadChildren:function(){return n.e(16).then(n.bind(null,"orgq")).then((function(t){return t.RefreshEditModule}))}},Object(w.a)(Object(w.a)({},U.a.route),{data:{title:"View Permissions"}})],data:{title:"App Views"}},{path:"web-api",component:R.a,data:{title:"App WebApi"},children:[N.e.route]},{path:"app",component:R.a,children:[{matcher:M.a,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(6),n.e(14),n.e(13),n.e(10),n.e(0),n.e(34)]).then(n.bind(null,"B+J5")).then((function(t){return t.EditModule}))},data:{title:"Edit App Properties"}},{matcher:M.c,loadChildren:function(){return n.e(16).then(n.bind(null,"orgq")).then((function(t){return t.RefreshEditModule}))}},{path:"fields/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(0),n.e(30)]).then(n.bind(null,"tjG3")).then((function(t){return t.ContentTypeFieldsModule}))},data:{title:"Edit Fields of App Settings & Resources"}},Object(w.a)(Object(w.a)({},U.a.route),{data:{title:"App Permissions"}}),{path:"export",component:_.a,data:{dialog:V,title:"Export App"}},{path:"export/parts",component:_.a,data:{dialog:J,title:"Export App Parts"}},{path:"import/parts",component:_.a,data:{dialog:F,title:"Import App Parts"}}],data:{title:"Manage App"}}]}],k=function(){function t(){}return t.\u0275mod=Q.Kb({type:t}),t.\u0275inj=Q.Jb({factory:function(e){return new(e||t)},imports:[[x.g.forChild(X)],x.g]}),t}(),q=n("KoVM"),K=n("S36y"),L=n("bkzA"),H=n("q3Tv"),Z=n("WlMA"),$=n("frVg"),tt=n("uzd0"),et=n("p2eq"),nt=function(){function t(){}return t.\u0275mod=Q.Kb({type:t}),t.\u0275inj=Q.Jb({factory:function(e){return new(e||t)},providers:[S.a,q.a,K.a,$.a,tt.a,v.a,et.a,T.a,H.a,L.a,Z.a,E.a,A.a],imports:[[k,j.a,s.g,o.c,p.c,h.b,O.b,i.b.withComponents([]),y.e,a.m,m.c,g.b,C.c,f.a,u.b,d.b,l.j,c.s,P.c,I.d,b.c,r.b]]}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.21.02/ng-edit/app-administration-app-administration-module.3bf3674417c29a8af566.js.map