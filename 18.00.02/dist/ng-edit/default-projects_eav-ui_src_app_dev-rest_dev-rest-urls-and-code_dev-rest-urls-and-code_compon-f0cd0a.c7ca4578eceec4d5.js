"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"],{5630:(k,h,o)=>{o.d(h,{X:()=>y});var E=o(519),e=o(9512),s=o(3840),c=o(4175),F=o(353),r=o(7896),t=o(7580),a=o(3347),p=o(6443);function d(i,m){1&i&&(t.j41(0,"span"),t.EFF(1," (for the demo to work it will add context parameters) "),t.k0s())}function u(i,m){if(1&i&&(t.EFF(0," \xa0 "),t.j41(1,"a",4),t.EFF(2,"Open in Browser"),t.k0s(),t.DNE(3,d,2,0,"span")),2&i){const n=t.XpG(2).$implicit,l=t.XpG();t.R7$(),t.Y8G("href",n.browseUrl,t.B4B),t.R7$(2),t.vxM(3,l.data.scenario.useVirtual?3:-1)}}function _(i,m){if(1&i){const n=t.RV6();t.j41(0,"p")(1,"button",3),t.bIt("click",function(){t.eBV(n);const f=t.XpG().$implicit,g=t.XpG();return t.Njj(g.callApiGet(f.url))}),t.EFF(2,"Call and Output to Console"),t.k0s(),t.DNE(3,u,4,2),t.k0s()}if(2&i){const n=t.XpG().$implicit;t.R7$(3),t.vxM(3,n.browseUrl?3:-1)}}function x(i,m){if(1&i&&(t.j41(0,"app-info-box",8),t.nrm(1,"span",9),t.k0s()),2&i){const n=m.$implicit;t.Y8G("type",n.type),t.R7$(),t.Y8G("innerHtml",n.message,t.npT)}}function C(i,m){if(1&i){const n=t.RV6();t.j41(0,"h4"),t.EFF(1),t.k0s(),t.j41(2,"p"),t.EFF(3),t.k0s(),t.j41(4,"div",5)(5,"pre",6),t.EFF(6),t.k0s(),t.j41(7,"button",7),t.bIt("click",function(){const f=t.eBV(n).$implicit,g=t.XpG(2);return t.Njj(g.copyCode(f.code))}),t.j41(8,"mat-icon"),t.EFF(9,"copy"),t.k0s()()(),t.Z7z(10,x,2,2,"app-info-box",8,t.fX1)}if(2&i){const n=m.$implicit;t.R7$(),t.JRh(n.title),t.R7$(2),t.JRh(n.description),t.R7$(3),t.JRh(n.code),t.R7$(4),t.Dyx(n.hints)}}function j(i,m){if(1&i&&(t.j41(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"div",1)(4,"code"),t.EFF(5),t.k0s(),t.EFF(6,": "),t.j41(7,"code"),t.EFF(8),t.k0s(),t.j41(9,"span"),t.EFF(10),t.k0s()()()(),t.j41(11,"mat-panel-description",2)(12,"h4"),t.EFF(13),t.k0s(),t.j41(14,"p"),t.EFF(15," HTTP Verb: "),t.j41(16,"code"),t.EFF(17),t.k0s(),t.nrm(18,"br"),t.EFF(19),t.j41(20,"code"),t.EFF(21),t.k0s()(),t.DNE(22,_,4,1,"p"),t.Z7z(23,C,12,3,null,null,t.fX1),t.k0s()()),2&i){const n=m.$implicit,l=t.XpG();t.R7$(5),t.JRh(n.verb),t.R7$(3),t.JRh(n.url),t.R7$(2),t.SpI("\xa0to ",n.teaser,""),t.R7$(3),t.JRh(n.instructions),t.R7$(4),t.JRh(n.verb),t.R7$(2),t.SpI(" ",l.data.scenario.useVirtual?"Virtual":"Absolute"," Url: "),t.R7$(2),t.JRh(n.url),t.R7$(),t.vxM(22,n.enableButton?22:-1),t.R7$(),t.Dyx(n.code)}}let y=(()=>{class i{constructor(n,l){this.snackBar=n,this.http=l}callApiGet(n){this.http.get(n).subscribe(l=>{console.log(`Called ${n} and got this:`,l),this.openSnackBar(`Called ${n}. You can see the full result in the F12 console`,"API call returned")}),this.openSnackBar(`Calling ${n}. You can see the full result in the F12 console`,"API call sent")}copyCode(n){(0,E.l)(n),this.openSnackBar("Copied to clipboard")}openSnackBar(n,l){this.snackBar.open(n,l,{duration:2e3})}static#e=this.\u0275fac=function(l){return new(l||i)(t.rXU(a.UG),t.rXU(p.Qq))};static#t=this.\u0275cmp=t.VBU({type:i,selectors:[["app-dev-rest-urls-and-code"]],inputs:{data:"data"},standalone:!0,features:[t.aNF],decls:3,vars:0,consts:[["multi","",1,"rest-urls-accordion"],[1,"rest-urls-title"],[2,"display","block"],["mat-raised-button","",3,"click"],["target","_blank",3,"href"],[1,"code-example"],[1,"code-example__text"],["mat-icon-button","","tippy","Copy to clipboard",1,"code-example__copy",3,"click"],[3,"type"],[3,"innerHtml"]],template:function(l,f){1&l&&(t.j41(0,"mat-accordion",0),t.Z7z(1,j,25,8,"mat-expansion-panel",null,t.fX1),t.k0s()),2&l&&(t.R7$(),t.Dyx(f.data.apiCalls))},dependencies:[F.MY,F.BS,F.GK,F.Z2,F.WN,F.Q6,c.Hl,c.$z,c.iY,r.e,s.m_,s.An,e.F],styles:["[_nghost-%COMP%]     code, code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px;background-color:#eee}pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:keep-all}.rest-urls-accordion[_ngcontent-%COMP%]{display:block;margin:8px}.rest-urls-title[_ngcontent-%COMP%]{display:flex;align-items:center}.code-example[_ngcontent-%COMP%]{position:relative}.code-example__text[_ngcontent-%COMP%]{min-height:40px}.code-example__copy[_ngcontent-%COMP%]{position:absolute;top:0;right:0}.params-form[_ngcontent-%COMP%]{display:flex;max-width:600px}.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type){margin-left:8px}.form-with-textarea[_ngcontent-%COMP%]{max-width:600px}"]})}return i})()},9512:(k,h,o)=>{o.d(h,{F:()=>r});var E=o(9852),e=o(3840),s=o(7580);const c=["*"];function F(t,a){if(1&t&&s.nrm(0,"strong",0)(1,"br"),2&t){const p=s.XpG();s.Y8G("innerHTML",p.title,s.npT)}}let r=(()=>{class t{constructor(){}getIcon(){return E.V[this.type]}static#e=this.\u0275fac=function(d){return new(d||t)};static#t=this.\u0275cmp=s.VBU({type:t,selectors:[["app-info-box"]],inputs:{type:"type",title:"title"},standalone:!0,features:[s.aNF],ngContentSelectors:c,decls:5,vars:5,consts:[[3,"innerHTML"]],template:function(d,u){1&d&&(s.NAR(),s.j41(0,"p")(1,"mat-icon"),s.EFF(2),s.k0s(),s.DNE(3,F,2,1),s.SdG(4),s.k0s()),2&d&&(s.ZvI("icon-box ",u.type,""),s.R7$(2),s.JRh(u.getIcon()),s.R7$(),s.vxM(3,u.title?3:-1))},dependencies:[e.m_,e.An],styles:["p.warning[_ngcontent-%COMP%]{background-color:#f08080}p.alert[_ngcontent-%COMP%]{background-color:#ffffe0}p.tip[_ngcontent-%COMP%]{background-color:#aadaf8}p.info[_ngcontent-%COMP%]{background-color:#90ee90}p.icon-box[_ngcontent-%COMP%]{padding:5px 5px 5px 60px;margin:5px}p.icon-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:-40px}"]})}return t})()},2422:(k,h,o)=>{o.d(h,{R:()=>t});var E=o(9512),e=o(7580);function s(a,p){1&a&&(e.j41(0,"app-info-box",0),e.EFF(1," Virtual REST URLs are short. They will be resolved internally to the full length (based on the dnn-version, current portal, etc.) thanks to $2sxc JS API. This happens when you use the "),e.j41(2,"a",3),e.EFF(3," $2sxc("),e.j41(4,"em"),e.EFF(5,"id-or-htmlnode"),e.k0s(),e.EFF(6,").webApi.get(...) "),e.k0s(),e.EFF(7," or if you use "),e.j41(8,"a",4),e.EFF(9," sxc-angular (npm package) "),e.k0s(),e.EFF(10," (which also passes url-resolving through $2sxc). "),e.k0s())}function c(a,p){1&a&&(e.j41(0,"app-info-box",1),e.EFF(1," To use the REST API from external, you usually will want to set some permissions for "),e.j41(2,"code"),e.EFF(3,"Anonymous"),e.k0s(),e.EFF(4,". As of now, no such permissions are configured. "),e.k0s())}function F(a,p){1&a&&(e.j41(0,"app-info-box",2),e.EFF(1," It seems that you have some permissions configured for "),e.j41(2,"code"),e.EFF(3,"Anonymous"),e.k0s(),e.EFF(4,". This is correct if you plan on using the REST endpoints from externally. Please make sure that they are the ones you need, and that you don't accidentally open up too much. "),e.k0s())}function r(a,p){if(1&a&&(e.EFF(0," The code also looked up an item of this type and will use it's ID "),e.j41(1,"code"),e.EFF(2),e.k0s(),e.EFF(3," in the examples. ")),2&a){const d=e.XpG();e.R7$(2),e.JRh(d.data.itemId)}}let t=(()=>{class a{constructor(){}static#e=this.\u0275fac=function(u){return new(u||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-dev-rest-tab-examples-intro"]],inputs:{data:"data"},standalone:!0,features:[e.aNF],decls:15,vars:7,consts:[["type","info"],["type","warning"],["type","alert"],["href","https://docs.2sxc.org/specs/js/sxcewebapi.html","target","_blank"],["href","https://go.2sxc.org/js-angular","target","_blank"]],template:function(u,_){1&u&&(e.DNE(0,s,11,0,"app-info-box",0)(1,c,5,0,"app-info-box",1)(2,F,5,0,"app-info-box",2),e.j41(3,"p"),e.EFF(4," The examples below use real values to make it easier to get started. The values used are the current content-type "),e.j41(5,"code"),e.EFF(6),e.k0s(),e.EFF(7,", the current Module ID "),e.j41(8,"code"),e.EFF(9),e.k0s(),e.EFF(10," and the folder of the current App folder "),e.j41(11,"code"),e.EFF(12),e.k0s(),e.EFF(13," (where needed). "),e.DNE(14,r,4,1),e.k0s()),2&u&&(e.vxM(0,_.data.scenario.useVirtual?0:-1),e.R7$(),e.vxM(1,_.data.scenario.needsAnonymous&&!_.data.permissionsHasAnonymous?1:-1),e.R7$(),e.vxM(2,_.data.scenario.needsAnonymous&&_.data.permissionsHasAnonymous?2:-1),e.R7$(4),e.JRh(_.data.name),e.R7$(3),e.JRh(_.data.moduleId),e.R7$(3),e.JRh(_.data.folder),e.R7$(2),e.vxM(14,_.data.itemId?14:-1))},dependencies:[E.F],styles:["[_nghost-%COMP%]     code, code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px;background-color:#eee}pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:keep-all}.rest-urls-accordion[_ngcontent-%COMP%]{display:block;margin:8px}.rest-urls-title[_ngcontent-%COMP%]{display:flex;align-items:center}.code-example[_ngcontent-%COMP%]{position:relative}.code-example__text[_ngcontent-%COMP%]{min-height:40px}.code-example__copy[_ngcontent-%COMP%]{position:absolute;top:0;right:0}.params-form[_ngcontent-%COMP%]{display:flex;max-width:600px}.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type){margin-left:8px}.form-with-textarea[_ngcontent-%COMP%]{max-width:600px}"]})}return a})()},3966:(k,h,o)=>{o.d(h,{J:()=>s});var E=o(9512),e=o(7580);let s=(()=>{class c{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(t){return new(t||c)};static#t=this.\u0275cmp=e.VBU({type:c,selectors:[["app-dev-rest-tab-headers"]],inputs:{data:"data"},standalone:!0,features:[e.aNF],decls:182,vars:1,consts:[["type","tip"],["type","info","title","Site & Language are <em>not</em> part of the Context."]],template:function(t,a){1&t&&(e.j41(0,"h2"),e.EFF(1,"HTTP Headers, Security and Context"),e.k0s(),e.j41(2,"p"),e.EFF(3," HTTP headers and url-parameters are used for "),e.j41(4,"strong"),e.EFF(5,"Security"),e.k0s(),e.EFF(6," and "),e.j41(7,"strong"),e.EFF(8,"Context"),e.k0s(),e.EFF(9,". We'll explain the "),e.j41(10,"em"),e.EFF(11,"Security"),e.k0s(),e.EFF(12," part further below, and start with "),e.j41(13,"em"),e.EFF(14,"Context"),e.k0s(),e.EFF(15,". When you work with WebApi endpoints, there are two distinct scenarios:\n"),e.k0s(),e.j41(16,"h3"),e.EFF(17,"Using WebApi with Context"),e.k0s(),e.j41(18,"p"),e.EFF(19," In this case the endpoint knows what "),e.j41(20,"strong"),e.EFF(21,"Page"),e.k0s(),e.EFF(22," and what "),e.j41(23,"strong"),e.EFF(24,"module"),e.k0s(),e.EFF(25," the request is for. This "),e.j41(26,"strong"),e.EFF(27,"Context"),e.k0s(),e.EFF(28," is then used to "),e.j41(29,"em"),e.EFF(30,"auto-detect"),e.k0s(),e.EFF(31," the app (so you can use "),e.j41(32,"code"),e.EFF(33,"/auto/"),e.k0s(),e.EFF(34," in the url). "),e.nrm(35,"br"),e.EFF(36," It can also be used for for security checks - so you can set "),e.j41(37,"strong"),e.EFF(38,"Permissions"),e.k0s(),e.EFF(39," like "),e.j41(40,"code"),e.EFF(41,"Allow READ If the user may see the module"),e.k0s(),e.EFF(42,".\n"),e.k0s(),e.j41(43,"app-info-box",0),e.EFF(44," TIP: In the case of "),e.j41(45,"strong"),e.EFF(46,"Queries"),e.k0s(),e.EFF(47," the "),e.j41(48,"strong"),e.EFF(49,"Context"),e.k0s(),e.EFF(50," can also provide parameters which were configured in the module.\n"),e.k0s(),e.j41(51,"h3"),e.EFF(52,"Using WebApi without Context"),e.k0s(),e.j41(53,"p"),e.EFF(54," If the "),e.j41(55,"strong"),e.EFF(56,"Context"),e.k0s(),e.EFF(57," is not known, the endpoint cannot "),e.j41(58,"em"),e.EFF(59,"auto-detect"),e.k0s(),e.EFF(60," the the app, so instead of "),e.j41(61,"code"),e.EFF(62,"/auto/"),e.k0s(),e.EFF(63," you must supply the correct app-name in the url, in this case "),e.j41(64,"code"),e.EFF(65),e.k0s(),e.EFF(66,". "),e.nrm(67,"br"),e.EFF(68," You also must specify more specific "),e.j41(69,"strong"),e.EFF(70,"Permissions"),e.k0s(),e.EFF(71," like "),e.j41(72,"code"),e.EFF(73,"Allow READ if user is in group Members"),e.k0s(),e.EFF(74," or "),e.j41(75,"code"),e.EFF(76,"Allow READ for all ANONYMOUS users"),e.k0s(),e.EFF(77,".\n"),e.k0s(),e.j41(78,"app-info-box",1),e.EFF(79," Technically the context needs more information than we just talked about, like what "),e.j41(80,"strong"),e.EFF(81,"Site"),e.k0s(),e.EFF(82," are we on and what "),e.j41(83,"strong"),e.EFF(84,"Language"),e.k0s(),e.EFF(85," is being used. This information is already in the URL. So the root (before any "),e.j41(86,"code"),e.EFF(87,"/api/"),e.k0s(),e.EFF(88,") paths already contains that information.\n"),e.k0s(),e.j41(89,"h2"),e.EFF(90,"How to get the Context"),e.k0s(),e.j41(91,"h3"),e.EFF(92,"How the Context is Defined"),e.k0s(),e.j41(93,"p"),e.EFF(94," The context always requires a "),e.j41(95,"code"),e.EFF(96,"PageId"),e.k0s(),e.EFF(97," (in DNN it is hisorically called the "),e.j41(98,"code"),e.EFF(99,"TabId"),e.k0s(),e.EFF(100,") and the "),e.j41(101,"code"),e.EFF(102,"ModuleId"),e.k0s(),e.EFF(103,". This lets the system look up the configuration for this module and figure out everything else.\n"),e.k0s(),e.j41(104,"h3"),e.EFF(105,"Supplying Context in HTTP Headers (default)"),e.k0s(),e.j41(106,"p"),e.EFF(107," The standard behavior is to include the Context information in hidden "),e.j41(108,"strong"),e.EFF(109,"HTTP headers"),e.k0s(),e.EFF(110,". This requires a bit more JavaScript code to attach the headers, but most of the APIs like the "),e.j41(111,"code"),e.EFF(112,"$2sxc"),e.k0s(),e.EFF(113," will do this automatically when used from within a 2sxc-App. These are the context headers provided by $2sxc:\n"),e.k0s(),e.j41(114,"ul")(115,"li")(116,"code"),e.EFF(117,"PageId"),e.k0s(),e.EFF(118," - this is the page we're on (number). "),e.j41(119,"em"),e.EFF(120,"this header is new in v11.11"),e.k0s()(),e.j41(121,"li")(122,"s")(123,"code"),e.EFF(124,"TabId"),e.k0s()(),e.EFF(125," - "),e.j41(126,"em"),e.EFF(127,"obsolete"),e.k0s(),e.EFF(128," this is also the page id (number). "),e.j41(129,"em"),e.EFF(130,"just but for backward compatibility"),e.k0s()(),e.j41(131,"li")(132,"code"),e.EFF(133,"ModuleId"),e.k0s(),e.EFF(134," - this is the module id (number) "),e.k0s(),e.j41(135,"li")(136,"code"),e.EFF(137,"ContentBlockId"),e.k0s(),e.EFF(138," - this in an internal ID for working in inner-content (number). You will usually not care about this. "),e.k0s()(),e.j41(139,"h3"),e.EFF(140,"Supplying Context as URL Parameters "),e.j41(141,"code"),e.EFF(142,"?PageId=..."),e.k0s()(),e.j41(143,"p"),e.EFF(144," The headers above ("),e.j41(145,"code"),e.EFF(146,"PageId"),e.k0s(),e.EFF(147,", "),e.j41(148,"code"),e.EFF(149,"ModuleId"),e.k0s(),e.EFF(150,") can also be added to the URL and will have the same effect.\n"),e.k0s(),e.j41(151,"h2"),e.EFF(152,"Security Headers"),e.k0s(),e.j41(153,"p"),e.EFF(154," In addition to context headers, a request can also include "),e.j41(155,"strong"),e.EFF(156,"Security"),e.k0s(),e.EFF(157," headers:\n"),e.k0s(),e.j41(158,"ol")(159,"li")(160,"code"),e.EFF(161,"RequestVerificationToken"),e.k0s(),e.EFF(162," - this is a crypto key to prove that the request originated from the same site. It's only included in POST/PUT/DELETE but not GET requests. "),e.k0s()(),e.j41(163,"p"),e.EFF(164," These are only used on "),e.j41(165,"code"),e.EFF(166,"PUT"),e.k0s(),e.EFF(167,", "),e.j41(168,"code"),e.EFF(169,"POST"),e.k0s(),e.EFF(170,", "),e.j41(171,"code"),e.EFF(172,"DELETE"),e.k0s(),e.EFF(173," etc. but not on "),e.j41(174,"code"),e.EFF(175,"GET"),e.k0s(),e.EFF(176," requests.\n"),e.k0s(),e.j41(177,"app-info-box",0),e.EFF(178," This header is only usefull to verify that the request came from a real DNN page. The 2sxc-api "),e.j41(179,"code"),e.EFF(180,"$2sxc"),e.k0s(),e.EFF(181," will add this automatically for you, so you don't need to do anything if you use that.\n"),e.k0s()),2&t&&(e.R7$(65),e.JRh(a.data.folder))},dependencies:[E.F],encapsulation:2})}return c})()},6768:(k,h,o)=>{o.d(h,{M:()=>F});var E=o(4079),e=o(7580);function s(r,t){if(1&r&&(e.j41(0,"p")(1,"em"),e.EFF(2),e.k0s()()),2&r){const a=e.XpG().$implicit;e.R7$(2),e.SpI(" ",a.notes," ")}}function c(r,t){if(1&r&&(e.j41(0,"h4"),e.EFF(1),e.k0s(),e.j41(2,"p"),e.EFF(3),e.k0s(),e.DNE(4,s,3,1,"p")),2&r){const a=t.$implicit;e.R7$(),e.SpI("Scenario: ",a.name,""),e.R7$(2),e.SpI(" ",a.description," "),e.R7$(),e.vxM(4,a.notes?4:-1)}}let F=(()=>{class r{constructor(){this.scenarios=E.vm}ngOnInit(){}static#e=this.\u0275fac=function(p){return new(p||r)};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-dev-rest-tab-introduction"]],inputs:{data:"data"},standalone:!0,features:[e.aNF],decls:32,vars:1,consts:[["href","https://docs.2sxc.org/web-api/index.html","target","_blank"],["href","https://docs.2sxc.org/web-api/headless/index.html","target","_blank"]],template:function(p,d){1&p&&(e.j41(0,"p"),e.EFF(1," All data can be used in JavaScript, SPAs or anywhere with the REST API (see "),e.j41(2,"a",0),e.EFF(3,"docs"),e.k0s(),e.EFF(4,"). Use this for things like:\n"),e.k0s(),e.j41(5,"ul")(6,"li")(7,"a",0),e.EFF(8,"WebAPI in 2sxc"),e.k0s()(),e.j41(9,"li")(10,"a",1),e.EFF(11,"Using DNN/2sxc as a headless CMS"),e.k0s()(),e.j41(12,"li"),e.EFF(13,"Create SPAs in DNN/2sxc"),e.k0s(),e.j41(14,"li"),e.EFF(15,"Get data for mobile apps"),e.k0s(),e.j41(16,"li"),e.EFF(17,"Share data to other platforms"),e.k0s()(),e.j41(18,"p"),e.EFF(19," Just set off HTTP "),e.j41(20,"code"),e.EFF(21,"GET"),e.k0s(),e.EFF(22," requests or similar to the endpoint like "),e.j41(23,"code"),e.EFF(24),e.k0s(),e.EFF(25,". You can find the full list with example code in the next tabs. Make sure you also read about permissions and HTTP headers.\n"),e.k0s(),e.j41(26,"h3"),e.EFF(27,"Scenarios Explained (dropdown on top)"),e.k0s(),e.j41(28,"p"),e.EFF(29," The examples / code / permission infos will change based on the scenario you choose.\n"),e.k0s(),e.Z7z(30,c,5,3,null,null,e.fX1)),2&p&&(e.R7$(24),e.JRh(d.data.root),e.R7$(6),e.Dyx(d.scenarios))},encapsulation:2})}return r})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a.c7ca4578eceec4d5.js.map