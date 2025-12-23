import{b as pe}from"./chunk-43T4DH5V.js";import{a as re}from"./chunk-ORK43FFD.js";import{a as oe}from"./chunk-V5UC4TMG.js";import{c as E}from"./chunk-HJXR3IL7.js";import{a as z}from"./chunk-ENHI5GWA.js";import{a as le,c as ce}from"./chunk-DAEXUMJT.js";import{e as ae,h as se}from"./chunk-ME7PJXWA.js";import{f as b,l as C}from"./chunk-QVLOO535.js";import{c as $}from"./chunk-XREQECMQ.js";import{b as Z,i as ee,j as te}from"./chunk-4LV77BQU.js";import{b as I,c as S}from"./chunk-23CS2WID.js";import{a as A}from"./chunk-OIHIMR2W.js";import{c as X,e as K}from"./chunk-OYQCZWOE.js";import{b as T,c as ie,d as ne}from"./chunk-G33ZJSCE.js";import{ca as Y}from"./chunk-DX662RXJ.js";import{Aa as B,Ab as J,Bb as L,Cb as j,Db as p,Eb as d,Kc as q,Lc as y,Pb as w,Rb as Q,Sa as m,U,X as F,Y as G,Za as c,db as g,ec as u,fc as x,g as R,gc as V,u as P,v as N,wb as O,yb as H,zb as W}from"./chunk-46QINP2S.js";var ge={alert:"warning",info:"menu_book",tip:"star",warning:"warning"},v=class{constructor(n,t,e=""){this.type=n,this.message=t,this.link=e,this.icon=ge[n]}};var f=class{constructor(n,t,e,i,a,s,l=[],h=null){this.virtual=n,this.verb=t,this.url=e,this.teaser=i,this.instructions=a,this.enableButton=s,this.code=l,this.browseUrl=h}};var r=class{constructor(n,t,e,i,a=[]){this.title=n,this.description=t,this.code=e,this.runInConsole=i,this.hints=a,this.code=this.code.trim()}};function De(o,n,t,e,i){let a=e[0]!=="/"&&!e.startsWith("http");e=e+"/";let s=e+i,l=a?`?PageId=${t.tabId}&ModuleId=${t.moduleId}`:"",h=o.http.apiUrl(e)+l,fe=o.http.apiUrl(s)+l;return[new f(a,"GET",e,"read all","Read list of all items",!0,de(n,e,t),h),new f(a,"GET",s,"read one","Read a single item #"+i,!0,de(n,s,t),fe),new f(a,"POST",e,"create","Create an item",!1,xe(n,e,t.moduleId)),new f(a,"POST",s,"update","Update the item #"+i,!1,ve(n,s,t.moduleId)),new f(a,"DELETE",s,"delete","Delete item #"+i,!1,we(n,s,t.moduleId))]}function de(o,n,t){let e=t.moduleId,i=n[0]!=="/",a=[],s=`${n}?PageId=${t.tabId}&ModuleId=${e}`;o.inSameContext&&a.push(new r("Example with global $2sxc and event-context","This example finds the context information from the HTML where an action started.",`
<button onclick="$2sxc(this).webApi.fetchJson('${n}').then(data => console.log(data))">
  get it
</button>`,!1,[M])),o.in2sxc&&a.push(new r(`Example with global $2sxc and a Module-Id ${e}`,"This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.",`
// get the sxc-controller for this module
var sxc = $2sxc(${e});
// now get the data in the promise
sxc.webApi.fetchJson('${n}')
  .then(data => {
    console.log(data)
  });`,!1,[M]),new r("Same example as one-liner","This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.",`$2sxc(${e}).webApi.get('${n}').then(data => console.log('just got:', data));`,!0)),o.in2sxc&&o.inSameContext&&a.push(new r("Example where you get the Module-Id from Razor","This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.",`
// this will be replaced on the server with the ID
var moduleId = @Dnn.Module.ModuleID;
var sxc = $2sxc(moduleId);
var promise = sxc.webApi.fetchJson('${n}');`,!1,[M]));let l=i?`$2sxc.http.apiUrl('${n}')`:`'${n}'`,h=i?`$2sxc.http.apiUrl('${s}')`:`'${s}'`;return o.inSameSite?(a.push(new r("Using jQuery inside DNN",`This example uses jQuery instead of the $2sxc to do the AJAX call.
      It shows you how to resolve the virtual path for use in other ways.`,`
var endpoint = ${l};
$.ajax({
  url:endpoint,
  beforeSend: $.dnnSF(${e}).setModuleHeaders
}).then(data => {
  console.log('Got this data:', data);
})`,!1,[])),a.push(new r("Using jQuery as single-liner",`The same example as above, just as single-liner so you can test it directly in the F12 console.
      This will only work if you're on a DNN page with this module.`,`$.ajax({url: ${l}, beforeSend: $.dnnSF(${e}).setModuleHeaders }).then(data => console.log(data))`,!1,[])),a.push(new r("Using jQuery and add Context in URL",`This example uses jQuery instead of the $2sxc to do the AJAX call.
      But instead of using the DNN Services Framework it adds relevant headers to the url.`,`
$.ajax(${h}).then(data => {
  console.log('Got this data:', data);
})`,!1,[])),a.push(new r("Using jQuery with url-context as single-liner",`The same example as above, just as single-liner so you can test it directly in the F12 console.
      This will work on a DNN page which has jQuery activated. `,`$.ajax(${h}).then(data => console.log(data))`,!1,[]))):(a.push(new r("Using jQuery in another Site or External",`This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,
      because they would be either missing, or give wrong context-headers.`,`
$.ajax('${n}').then(data => {
  console.log('Got this data:', data);
})`,!1,[_])),a.push(new r("Using jQuery with Context in URL","This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.",`
$.ajax('${s}').then(data => {
  console.log('Got this data:', data);
})`,!1,[_]))),a}function xe(o,n,t){let e=!o.inSameContext;return[new r("Basic Example",`This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`,`// get the sxc-controller for this module
var sxc = $2sxc(${t});

// The object we'll send to get created. It's just a simple object with properties
var newThing = {
  property1: 17,
  property2: 'Some Text',
  // related items like tags can be assigned with IDs
  // which you would usually get from somewhere first
  propertyPointingToOtherIds: [74,50203],
};

// now create it and get the id back
sxc.webApi.fetchJson('${n}', newThing)
  .then(data => {
    console.log('Got this ID information: ', data)
  });`,!1,e?[D]:[])]}function ve(o,n,t){let e=!o.inSameContext;return[new r("Basic Example",`This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`,`// get the sxc-controller for this module
var sxc = $2sxc(${t});

// The object we'll send to update the data. It's just a simple object with properties
var updateProperty1And2 = {
  property1: 2742,
  property2: 'Changed Text',
};

// now update the item
sxc.webApi.fetchJson('${n}', updateProperty1And2)
  .then(data => {
    console.log('Update completed', data)
  });`,!1,e?[D]:[])]}function we(o,n,t){let e=!o.inSameContext;return[new r("Basic Example",`This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`,`// get the sxc-controller for this module
var sxc = $2sxc(${t});

// delete the item
sxc.webApi.fetchJson('${n}')
  .then(data => {
    console.log('Delete completed', data)
  });`,!1,e?[D]:[])]}var M=new v("tip",`The <code>$2sxc</code> is a helper JS from 2sxc. It's always included for super-users (hosts).
But if you need normal visitors to use the API, you must request it in your Razor using @Edit.Enable(...).
<a href="https://go.2sxc.org/js-2sxc-root" target="_blank">see docs</a>`),D=new v("warning",`WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,
but you'll have to compare it with the GET examples to be sure you have the right headers etc. `,""),_=new v("alert","IMPORTANT: This will only work if you set anonymous permissions on the content-type.");var k=[{key:"internal",in2sxc:!0,useVirtual:!0,inSameSite:!0,inSameContext:!0,name:"JS in this App on a page (easiest)",description:`Internal access means that your JS code is running in a 2sxc-module on a DNN-page.
    This is the default access.
    In this scenario, various headers are included in the request,
    incl. the module it's coming from, which allows various automatic things to happen.
    This results in simpler REST requests.`,notes:`This mode makes it easy to re-distribute your app, as you can perform API calls relative to the module that's hosting it.
    This means, that even if you export/import the app to another system, the API-calls stay the same.`},{key:"internal2",in2sxc:!0,useVirtual:!0,inSameSite:!0,inSameContext:!1,name:"JS in a DIFFERENT 2sxc App on the SAME site",description:"When using JS from another app, you cannot auto-detect of the app, so the path is slightly different.",notes:""},{key:"external",in2sxc:!1,useVirtual:!1,inSameSite:!1,inSameContext:!1,needsAnonymous:!0,name:"External (other website, mobile device, etc.)",description:`External access means that the JS code could be on another page / module in DNN (which is not the same app),
    or it could be coming from a mobile App, or another website altogether.
    In this case, automatic app-detection can't work, as various headers are missing, and you must access the endpoint more explicitly.`,notes:`This mode requires you to define the exact, full URL, so if you create copies of this app on another system,
    the URL must be updated to access that system specifically.
    Note that our samples are in JS, you'll have to figure it out yourself for other programming languages.`}];function Se(o,n){if(o&1&&(p(0,"p",5)(1,"em"),u(2),d()()),o&2){let t=Q();m(2),x(t.dialogData.notes)}}var he=(()=>{class o{constructor(t,e){this.dialog=t,this.dialogData=e}ngOnInit(){}closeDialog(){this.dialog.close()}static{this.\u0275fac=function(e){return new(e||o)(c(T),c(ie))}}static{this.\u0275cmp=g({type:o,selectors:[["app-help-popup"]],decls:12,vars:3,consts:[[1,"eav-dialog","eav-no-scrollbar"],["mat-mdc-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content"],[1,"dialog-description"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),u(4),d(),p(5,"button",3),w("click",function(){return i.closeDialog()}),p(6,"mat-icon"),u(7,"close"),d()()()(),p(8,"div",4)(9,"p",5),u(10),d(),O(11,Se,3,1,"p",5),d()()),e&2&&(m(4),x(i.dialogData.name),m(6),V(" ",i.dialogData.body," "),m(),H(i.dialogData.notes?11:-1))},dependencies:[C,b,$,S,I],encapsulation:2})}}return o})();function be(o,n){if(o&1&&(p(0,"mat-option",3),u(1),d()),o&2){let t=n.$implicit;j("value",t.key),m(),x(t.name)}}var it=(()=>{class o{constructor(t){this.dialog=t,this.label=y(),this.items=y(),this.valueInput=y(),this.value=B(""),this.valueChange=q()}ngOnInit(){this.value.set(this.valueInput())}selectionChange(t){this.value.set(t);let e=this.items().find(i=>i.key===this.value());this.valueChange.emit(e)}showHelp(){let t=this.items().find(i=>i.key===this.value()),e={name:t.name,body:t.description,notes:t.notes};this.dialog.open(he,{autoFocus:!1,data:e,width:"500px"})}static{this.\u0275fac=function(e){return new(e||o)(c(ne))}}static{this.\u0275cmp=g({type:o,selectors:[["app-selector-with-help"]],inputs:{label:[1,"label"],items:[1,"items"],valueInput:[1,"valueInput"]},outputs:{valueChange:"valueChange"},decls:10,vars:2,consts:[[1,"selector"],["color","accent",1,"selector__dropdown","eav-mat-form-field"],[3,"selectionChange","value"],[3,"value"],["mat-icon-button","","tippy","Show help",3,"click"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),u(3),d(),p(4,"mat-select",2),w("selectionChange",function(s){return i.selectionChange(s.value)}),J(5,be,2,2,"mat-option",3,W),d()(),p(7,"button",4),w("click",function(){return i.showHelp()}),p(8,"mat-icon"),u(9,"help_outline"),d()()()),e&2&&(m(3),x(i.label()),m(),j("value",i.value),m(),L(i.items()))},dependencies:[te,ee,Z,ce,le,ae,se,C,b,$,S,I],styles:[`.selector[_ngcontent-%COMP%]{width:400px;max-width:100%;display:flex;align-items:center}.selector__dropdown[_ngcontent-%COMP%]{flex:1 1 auto}
/*# sourceMappingURL=header-selector-GKELPGXR.css.map */`]})}}return o})();var jt=(()=>{class o{#e;#t;constructor(t,e,i,a,s,l){this.context=t,this.dialog=e,this.dnnContext=i,this.router=a,this.route=s,this.permissionsService=l,this.#e=A(oe),this.#t=A(re),this.scenarios=k,this.scenario$=new R(k[0]),this.dialogSettings$=this.#e.getCurrent$()}buildPermissionStream(t){return N([this.#t.childDialogClosed$().pipe(F([])),this.route.paramMap.pipe(P(e=>e.get(t)))]).pipe(G(([e,i])=>this.permissionsService.getAll(E.metadata.entity.targetType,E.metadata.entity.keyType,i)),U())}rootBasedOnScenario(t,e){let i=document.location.protocol+"//"+document.location.host;return e.useVirtual?t:(e.inSameSite?"":i)+this.dnnContext.$2sxc.http.apiUrl(t)}buildBaseViewModel(t,e,i,a,s,l){return{apiCalls:null,name:t,currentScenario:l,folder:encodeURI(i.Context.App.Folder),moduleId:this.context.moduleId,root:s,scenario:l,permissions:a,permissionsHasAnonymous:a?.filter(h=>h.Condition.indexOf(".Anonymous")>0).length>0,permissionTarget:e}}changeScenario(t){this.scenario$.next(t)}ngOnDestroy(){this.scenario$.complete()}closeDialog(){this.dialog.close()}static{this.\u0275fac=function(e){return new(e||o)(c(Y),c(T),c(z),c(K),c(X),c(pe))}}static{this.\u0275cmp=g({type:o,selectors:[["app-dev-rest-base"]],decls:0,vars:0,template:function(e,i){},encapsulation:2})}}return o})();export{jt as a,ge as b,it as c,f as d,r as e,De as f,M as g,D as h,_ as i,k as j};
//# sourceMappingURL=https://sources.2sxc.org/21.00.00/dist/ng-edit/chunk-OPPDVHDF.js.map
