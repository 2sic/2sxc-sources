"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_dev-rest_index_ts-projects_eav-ui_src_app_shared_components_f-c34542"],{50:(W,y,t)=>{t.d(y,{T:()=>n});var e=t(8071),x=t(3839),E=t(9736),_=t(1891),p=t(5584),i=t(2968),O=t(1217),P=t(8088),w=t(9097),M=t(196),I=t(2611),o=t(1699),c=t(6861),m=t(6232),g=t(91);let n=(()=>{var h;class C extends w.f{constructor(f,T,D,b,B,A,U){super(),this.context=T,this.dialogRef=D,this.dnnContext=b,this.router=B,this.route=A,this.permissionsService=U,this.scenarios=i.WD,this.scenario$=new e.X(i.WD[0]),this.dialogSettings$=f.getShared$()}buildPermissionStream(f){return(0,x.a)([(0,i.E4)(this.router,this.route),this.route.paramMap.pipe((0,E.U)(T=>T.get(f)))]).pipe((0,_.w)(([T,D])=>this.permissionsService.getAll(M.Zy.metadata.entity.targetType,M.Zy.metadata.entity.keyType,D)),(0,p.B)())}rootBasedOnScenario(f,T){const D=document.location.protocol+"//"+document.location.host;return T.useVirtual?f:(T.inSameSite?"":D)+this.dnnContext.$2sxc.http.apiUrl(f)}buildBaseViewModel(f,T,D,b,B,A){return{apiCalls:null,name:f,currentScenario:A,folder:encodeURI(D.Context.App.Folder),moduleId:this.context.moduleId,root:B,scenario:A,permissions:b,permissionsHasAnonymous:b?.filter(U=>U.Condition.indexOf(".Anonymous")>0).length>0,permissionTarget:T}}changeScenario(f){this.scenario$.next(f)}ngOnDestroy(){this.scenario$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}}return(h=C).\u0275fac=function(f){return new(f||h)(o.Y36(O.Kw),o.Y36(I._),o.Y36(c.so),o.Y36(m._y),o.Y36(g.F0),o.Y36(g.gz),o.Y36(P.qQ))},h.\u0275cmp=o.Xpm({type:h,selectors:[["app-dev-rest-base"]],features:[o.qOj],decls:0,vars:0,template:function(f,T){},encapsulation:2}),C})()},7662:(W,y,t)=>{t.d(y,{i:()=>x});const e="restapi";let x=(()=>{class _{static getUrlData(i){return`${e}/data/${i.StaticName}`}static getUrlQuery(i){return`${e}/query/${i}`}static getUrlWebApi(i){return`${e}/custom/${encodeURIComponent(i.path)}`}}return _.route={path:e,loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2022_list_mjs"),t.e("default-node_modules_angular_material_fesm2022_expansion_mjs"),t.e("projects_eav-ui_src_app_dev-rest_dev-rest_module_ts")]).then(t.bind(t,7876)).then(p=>p.DevRestModule)},_})()},2968:(W,y,t)=>{t.d(y,{WD:()=>E,oJ:()=>p,XE:()=>i,TA:()=>e.T,ii:()=>x.i,x_:()=>D,E4:()=>N,ji:()=>O,O$:()=>o,X8:()=>m,JP:()=>c});var e=t(50),x=t(7662);const E=[{key:"internal",in2sxc:!0,useVirtual:!0,inSameSite:!0,inSameContext:!0,name:"JS in this App on a page (easiest)",description:"Internal access means that your JS code is running in a 2sxc-module on a DNN-page.\n    This is the default access.\n    In this scenario, various headers are included in the request,\n    incl. the module it's coming from, which allows various automatic things to happen.\n    This results in simpler REST requests.",notes:"This mode makes it easy to re-distribute your app, as you can perform API calls relative to the module that's hosting it.\n    This means, that even if you export/import the app to another system, the API-calls stay the same."},{key:"internal2",in2sxc:!0,useVirtual:!0,inSameSite:!0,inSameContext:!1,name:"JS in a DIFFERENT 2sxc App on the SAME site",description:"When using JS from another app, you cannot auto-detect of the app, so the path is slightly different.",notes:""},{key:"external",in2sxc:!1,useVirtual:!1,inSameSite:!1,inSameContext:!1,needsAnonymous:!0,name:"External (other website, mobile device, etc.)",description:"External access means that the JS code could be on another page / module in DNN (which is not the same app),\n    or it could be coming from a mobile App, or another website altogether.\n    In this case, automatic app-detection can't work, as various headers are missing, and you must access the endpoint more explicitly.",notes:"This mode requires you to define the exact, full URL, so if you create copies of this app on another system,\n    the URL must be updated to access that system specifically.\n    Note that our samples are in JS, you'll have to figure it out yourself for other programming languages."}];var _=t(9413);class p{constructor(a,l,s,u,d,v,S=[],R=null){this.virtual=a,this.verb=l,this.url=s,this.teaser=u,this.instructions=d,this.enableButton=v,this.code=S,this.browseUrl=R}}class i{constructor(a,l,s,u,d=[]){this.title=a,this.description=l,this.code=s,this.runInConsole=u,this.hints=d,this.code=this.code.trim()}}function O(r,a,l,s,u){const d="/"!==s[0]&&!s.startsWith("http"),v=(s+="/")+u,S=d?`?PageId=${l.tabId}&ModuleId=${l.moduleId}`:"",R=r.http.apiUrl(s)+S,F=r.http.apiUrl(v)+S;return[new p(d,"GET",s,"read all","Read list of all items",!0,P(a,s,l),R),new p(d,"GET",v,"read one","Read a single item #"+u,!0,P(a,v,l),F),new p(d,"POST",s,"create","Create an item",!1,w(a,s,l.moduleId)),new p(d,"POST",v,"update","Update the item #"+u,!1,M(a,v,l.moduleId)),new p(d,"DELETE",v,"delete","Delete item #"+u,!1,I(a,v,l.moduleId))]}function P(r,a,l){const s=l.moduleId,u="/"!==a[0],d=[],v=`${a}?PageId=${l.tabId}&ModuleId=${s}`;r.inSameContext&&d.push(new i("Example with global $2sxc and event-context","This example finds the context information from the HTML where an action started.",`\n<button onclick="$2sxc(this).webApi.fetchJson('${a}').then(data => console.log(data))">\n  get it\n</button>`,!1,[o])),r.in2sxc&&d.push(new i(`Example with global $2sxc and a Module-Id ${s}`,"This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.",`\n// get the sxc-controller for this module\nvar sxc = $2sxc(${s});\n// now get the data in the promise\nsxc.webApi.fetchJson('${a}')\n  .then(data => {\n    console.log(data)\n  });`,!1,[o]),new i("Same example as one-liner","This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.",`$2sxc(${s}).webApi.get('${a}').then(data => console.log('just got:', data));`,!0)),r.in2sxc&&r.inSameContext&&d.push(new i("Example where you get the Module-Id from Razor","This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.",`\n// this will be replaced on the server with the ID\nvar moduleId = @Dnn.Module.ModuleID;\nvar sxc = $2sxc(moduleId);\nvar promise = sxc.webApi.fetchJson('${a}');`,!1,[o]));const S=u?`$2sxc.http.apiUrl('${a}')`:`'${a}'`,R=u?`$2sxc.http.apiUrl('${v}')`:`'${v}'`;return r.inSameSite?(d.push(new i("Using jQuery inside DNN","This example uses jQuery instead of the $2sxc to do the AJAX call.\n      It shows you how to resolve the virtual path for use in other ways.",`\nvar endpoint = ${S};\n$.ajax({\n  url:endpoint,\n  beforeSend: $.dnnSF(${s}).setModuleHeaders\n}).then(data => {\n  console.log('Got this data:', data);\n})`,!1,[])),d.push(new i("Using jQuery as single-liner","The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will only work if you're on a DNN page with this module.",`$.ajax({url: ${S}, beforeSend: $.dnnSF(${s}).setModuleHeaders }).then(data => console.log(data))`,!1,[])),d.push(new i("Using jQuery and add Context in URL","This example uses jQuery instead of the $2sxc to do the AJAX call.\n      But instead of using the DNN Services Framework it adds relevant headers to the url.",`\n$.ajax(${R}).then(data => {\n  console.log('Got this data:', data);\n})`,!1,[])),d.push(new i("Using jQuery with url-context as single-liner","The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will work on a DNN page which has jQuery activated. ",`$.ajax(${R}).then(data => console.log(data))`,!1,[]))):(d.push(new i("Using jQuery in another Site or External","This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,\n      because they would be either missing, or give wrong context-headers.",`\n$.ajax('${a}').then(data => {\n  console.log('Got this data:', data);\n})`,!1,[m])),d.push(new i("Using jQuery with Context in URL","This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.",`\n$.ajax('${v}').then(data => {\n  console.log('Got this data:', data);\n})`,!1,[m]))),d}function w(r,a,l){return[new i("Basic Example","This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.",`// get the sxc-controller for this module\nvar sxc = $2sxc(${l});\n\n// The object we'll send to get created. It's just a simple object with properties\nvar newThing = {\n  property1: 17,\n  property2: 'Some Text',\n  // related items like tags can be assigned with IDs\n  // which you would usually get from somewhere first\n  propertyPointingToOtherIds: [74,50203],\n};\n\n// now create it and get the id back\nsxc.webApi.fetchJson('${a}', newThing)\n  .then(data => {\n    console.log('Got this ID information: ', data)\n  });`,!1,r.inSameContext?[]:[c])]}function M(r,a,l){return[new i("Basic Example","This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.",`// get the sxc-controller for this module\nvar sxc = $2sxc(${l});\n\n// The object we'll send to update the data. It's just a simple object with properties\nvar updateProperty1And2 = {\n  property1: 2742,\n  property2: 'Changed Text',\n};\n\n// now update the item\nsxc.webApi.fetchJson('${a}', updateProperty1And2)\n  .then(data => {\n    console.log('Update completed', data)\n  });`,!1,r.inSameContext?[]:[c])]}function I(r,a,l){return[new i("Basic Example","This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.",`// get the sxc-controller for this module\nvar sxc = $2sxc(${l});\n\n// delete the item\nsxc.webApi.fetchJson('${a}')\n  .then(data => {\n    console.log('Delete completed', data)\n  });`,!1,r.inSameContext?[]:[c])]}const o=new _.k("tip",'The <code>$2sxc</code> is a helper JS from 2sxc. It\'s always included for super-users (hosts).\nBut if you need normal visitors to use the API, you must request it in your Razor using @Edit.Enable(...).\n<a href="https://go.2sxc.org/js-2sxc-root" target="_blank">see docs</a>'),c=new _.k("warning","WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,\nbut you'll have to compare it with the GET examples to be sure you have the right headers etc. ",""),m=new _.k("alert","IMPORTANT: This will only work if you set anonymous permissions on the content-type.");var g=t(6861),n=t(1699),h=t(6575),C=t(9498),$=t(895),f=t(6515);function T(r,a){if(1&r&&(n.TgZ(0,"p",4)(1,"em"),n._uU(2),n.qZA()()),2&r){const l=n.oxw();n.xp6(2),n.Oqu(l.dialogData.notes)}}let D=(()=>{var r;class a{constructor(s,u){this.dialogRef=s,this.dialogData=u}ngOnInit(){}closeDialog(){this.dialogRef.close()}}return(r=a).\u0275fac=function(s){return new(s||r)(n.Y36(g.so),n.Y36(g.WI))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-help-popup"]],decls:11,vars:3,consts:[["mat-mdc-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"dialog-component-content","fancy-scrollbar-light"],[1,"dialog-description"],["class","dialog-description",4,"ngIf"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div"),n._uU(3),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return u.closeDialog()}),n.TgZ(5,"mat-icon"),n._uU(6,"close"),n.qZA()()()(),n.TgZ(7,"div",3)(8,"p",4),n._uU(9),n.qZA(),n.YNc(10,T,3,1,"p",5),n.qZA()),2&s&&(n.xp6(3),n.Oqu(u.dialogData.name),n.xp6(6),n.hij(" ",u.dialogData.body," "),n.xp6(1),n.Q6J("ngIf",u.dialogData.notes))},dependencies:[h.O5,C.$,$.RK,f.Hw],encapsulation:2}),a})();t(3051);var B=t(91),A=t(4520),U=t(5043),j=t(9736),L=t(9422);function N(r,a){return r.events.pipe((0,A.h)(l=>l instanceof B.m2),(0,U.O)(!!a.snapshot.firstChild),(0,j.U)(()=>!!a.snapshot.firstChild),(0,L.G)(),(0,A.h)(([l,s])=>l&&!s),(0,U.O)([]))}},9413:(W,y,t)=>{t.d(y,{k:()=>x,p:()=>e});const e={alert:"warning",info:"menu_book",tip:"star",warning:"warning"};class x{constructor(_,p,i=""){this.type=_,this.message=p,this.link=i,this.icon=e[_]}}},3051:(W,y,t)=>{t.d(y,{r:()=>o});var e=t(1699),x=t(2968),E=t(6861),_=t(6575),p=t(9498),i=t(895),O=t(1268),P=t(6355),w=t(257),M=t(6515);function I(c,m){if(1&c&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&c){const g=m.$implicit;e.Q6J("value",g.key),e.xp6(1),e.Oqu(g.name)}}let o=(()=>{var c;class m{constructor(n){this.dialog=n,this.valueChange=new e.vpe}ngOnInit(){}selectionChange(n){this.value=n;const h=this.items.find(C=>C.key===this.value);this.valueChange.emit(h)}showHelp(){const n=this.items.find(C=>C.key===this.value);this.dialog.open(x.x_,{autoFocus:!1,data:{name:n.name,body:n.description,notes:n.notes},width:"500px"})}}return(c=m).\u0275fac=function(n){return new(n||c)(e.Y36(E.uw))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-selector-with-help"]],inputs:{label:"label",items:"items",value:"value"},outputs:{valueChange:"valueChange"},decls:9,vars:3,consts:[[1,"selector"],["color","accent",1,"eav-form-field","selector__dropdown"],[3,"value","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","","tippy","Show help",3,"click"],[3,"value"]],template:function(n,h){1&n&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),e._uU(3),e.qZA(),e.TgZ(4,"mat-select",2),e.NdJ("selectionChange",function($){return h.selectionChange($.value)}),e.YNc(5,I,2,2,"mat-option",3),e.qZA()(),e.TgZ(6,"button",4),e.NdJ("click",function(){return h.showHelp()}),e.TgZ(7,"mat-icon"),e._uU(8,"help_outline"),e.qZA()()()),2&n&&(e.xp6(3),e.Oqu(h.label),e.xp6(1),e.Q6J("value",h.value),e.xp6(1),e.Q6J("ngForOf",h.items))},dependencies:[_.sg,p.$,i.RK,O.KE,O.hX,P.gD,w.ey,M.Hw],styles:[".selector[_ngcontent-%COMP%]{width:400px;max-width:100%;display:flex;align-items:center}.selector__dropdown[_ngcontent-%COMP%]{flex:1 1 auto}"]}),m})()},9851:(W,y,t)=>{t.d(y,{Y:()=>I});var e=t(1699),x=t(6575),E=t(1268);function _(o,c){1&o&&e.GkF(0)}function p(o,c){if(1&o&&(e.TgZ(0,"mat-hint"),e.YNc(1,_,1,0,"ng-container",3),e.qZA()),2&o){e.oxw();const m=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function i(o,c){1&o&&e.GkF(0)}function O(o,c){if(1&o&&(e.TgZ(0,"mat-error"),e.YNc(1,i,1,0,"ng-container",3),e.qZA()),2&o){e.oxw();const m=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function P(o,c){1&o&&e.Hsn(0)}const w=function(o){return{"hint-box__short":o}},M=["*"];let I=(()=>{var o;class c{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}}return(o=c).\u0275fac=function(g){return new(g||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:M,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(g,n){1&g&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(){return n.toggleIsShort()}),e.YNc(1,p,2,1,"mat-hint",1),e.YNc(2,O,2,1,"mat-error",1),e.qZA(),e.YNc(3,P,1,0,"ng-template",null,2,e.W1O)),2&g&&(e.Q6J("ngClass",e.VKq(4,w,n.isShort))("ngSwitch",n.isError),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0))},dependencies:[x.mk,x.tP,x.RF,x.n9,E.bx,E.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),c})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.08.00/dist/ng-edit/default-projects_eav-ui_src_app_dev-rest_index_ts-projects_eav-ui_src_app_shared_components_f-c34542.bd24e26d8fdf681e.js.map