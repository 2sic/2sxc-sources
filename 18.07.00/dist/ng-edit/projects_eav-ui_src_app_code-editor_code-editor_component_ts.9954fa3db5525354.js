"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_code-editor_code-editor_component_ts"],{2383:(X,k,c)=>{c.r(k),c.d(k,{CodeEditorComponent:()=>se});var F=c(316),P=c(6443),t=c(7580),v=c(4175),S=c(3840),y=c(1134),T=c(436),x=c(852),j=c(1873),R=c(1870),N=c(6647),Q=c(9452),L=c(8537),$=c(2938),q=c(6068),tt=c(2760),z=c(7836),et=c(3176),H=c(8172),V=c(9333),D=c(4601),nt=c(5699),f=c(3826),ot=c(8873),A=c(3347);function it(i,l){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s(),t.nrm(2,"br")),2&i){const e=t.XpG();t.R7$(),t.Lme('"',e.snackBarData.fileName,'" also has a code-behind file "',e.snackBarData.codeFile,'".')}}function st(i,l){if(1&i&&t.EFF(0),2&i){const e=t.XpG(2);t.SpI(' You are editing "',e.snackBarData.edition,'" edition. ')}}function at(i,l){1&i&&t.EFF(0," You may be editing an edition which is not the one you see. ")}function rt(i,l){if(1&i&&(t.j41(0,"div"),t.DNE(1,st,1,1),t.EFF(2),t.DNE(3,at,1,0),t.EFF(4," See "),t.j41(5,"a",3),t.EFF(6,"docs"),t.k0s(),t.EFF(7,". "),t.k0s()),2&i){const e=t.XpG();t.R7$(),t.vxM(e.snackBarData.edition?1:-1),t.R7$(),t.Lme(" There are ",e.snackBarData.otherEditions,' other editions of "',e.snackBarData.fileName,'". '),t.R7$(),t.vxM(e.snackBarData.edition?-1:3)}}function lt(i,l){if(1&i){const e=t.RV6();t.j41(0,"button",4),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.openCodeBehind())}),t.EFF(1," Open code-behind file "),t.k0s()}}let ct=(()=>{class i{constructor(e,o){this.snackRef=e,this.snackBarData=o}openCodeBehind(){this.snackBarData.openCodeBehind=!0,this.snackRef.dismissWithAction()}static{this.\u0275fac=function(o){return new(o||i)(t.rXU(A.TQ),t.rXU(A.ht))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-code-and-edition-warnings"]],decls:5,vars:3,consts:[[1,"messages"],[1,"actions"],["mat-button","","color","primary"],["href","https://go.2sxc.org/polymorphism","target","_blank"],["mat-button","","color","primary",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"div",0),t.DNE(1,it,3,2)(2,rt,8,4,"div"),t.k0s(),t.j41(3,"div",1),t.DNE(4,lt,2,0,"button",2),t.k0s()),2&o&&(t.R7$(),t.vxM(n.snackBarData.codeFile?1:-1),t.R7$(),t.vxM(n.snackBarData.otherEditions?2:-1),t.R7$(2),t.vxM(n.snackBarData.codeFile?4:-1))},dependencies:[v.Hl,v.$z],styles:[".messages[_ngcontent-%COMP%]{font-size:14px}.messages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.actions[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}"]})}}return i})();var pt=c(6657);function dt(i){return new pt.v(i,"./i18n/code-editor.",`.js?${window.sxcVersion}`)}const Y={Templates:"Templates",Snippets:"Snippets"};var W=c(4646),M=c(4981),_t=c(9914);let mt=(()=>{class i{transform(e){if(null!=e)return Array.isArray(e)?e:Object.values(e)}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275pipe=t.EJ8({name:"objectToArray",type:i,pure:!0})}}return i})();function ht(i,l){if(1&i){const e=t.RV6();t.j41(0,"mat-icon",9),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,s=t.XpG(5);return t.Njj(s.toggleMore(n.key))}),t.EFF(1),t.k0s()}if(2&i){const e=t.XpG().$implicit,o=t.XpG(5);t.R7$(),t.SpI(" ",o.toggledMores.includes(e.key)?"more_vert":"more_horiz"," ")}}function gt(i,l){if(1&i&&(t.j41(0,"div")(1,"a",11),t.EFF(2),t.k0s()()),2&i){const e=l.$implicit;t.R7$(),t.Y8G("href",e.url,t.B4B),t.R7$(),t.JRh(e.name)}}function ut(i,l){if(1&i&&(t.j41(0,"div",8),t.nrm(1,"div",10),t.nI1(2,"safeHtml"),t.Z7z(3,gt,3,2,"div",null,t.fX1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.Y8G("innerHTML",t.bMT(2,1,e.help),t.npT),t.R7$(2),t.Dyx(e.links)}}function ft(i,l){if(1&i&&(t.j41(0,"div")(1,"a",11),t.EFF(2),t.k0s()()),2&i){const e=l.$implicit;t.R7$(),t.Y8G("href",e.url,t.B4B),t.R7$(),t.JRh(e.name)}}function Ct(i,l){if(1&i&&(t.j41(0,"div",13),t.nrm(1,"div",10),t.nI1(2,"safeHtml"),t.Z7z(3,ft,3,2,"div",null,t.fX1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.Y8G("innerHTML",t.bMT(2,1,e.help),t.npT),t.R7$(2),t.Dyx(e.links)}}function vt(i,l){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",4)(2,"div",12),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(7);return t.Njj(s.addSnippet(n.snip))}),t.EFF(3),t.k0s(),t.j41(4,"mat-icon",7),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(7);return t.Njj(s.toggleInfo(n.key))}),t.EFF(5,"info"),t.k0s()(),t.DNE(6,Ct,5,3,"div",13),t.k0s()}if(2&i){const e=l.$implicit,o=t.XpG(7);t.R7$(2),t.Y8G("tippy",e.snip),t.R7$(),t.SpI(" ",e.label," "),t.R7$(3),t.vxM(o.toggledInfos.includes(e.key)?6:-1)}}function yt(i,l){if(1&i&&(t.Z7z(0,vt,7,3,"div",null,t.fX1),t.nI1(2,"objectToArray")),2&i){const e=t.XpG().$implicit;t.Dyx(t.bMT(2,0,e.more))}}function Ft(i,l){if(1&i){const e=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(5);return t.Njj(s.addSnippet(n.snip))}),t.EFF(3),t.k0s(),t.DNE(4,ht,2,1,"mat-icon",6),t.j41(5,"mat-icon",7),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(5);return t.Njj(s.toggleInfo(n.key))}),t.EFF(6,"info"),t.k0s()(),t.DNE(7,ut,5,3,"div",8)(8,yt,3,2),t.k0s()}if(2&i){const e=l.$implicit,o=t.XpG(5);t.R7$(2),t.Y8G("tippy",e.snip),t.R7$(),t.SpI(" ",e.label," "),t.R7$(),t.vxM(e.more?4:-1),t.R7$(3),t.vxM(o.toggledInfos.includes(e.key)?7:-1),t.R7$(),t.vxM(o.toggledMores.includes(e.key)?8:-1)}}function bt(i,l){if(1&i&&(t.Z7z(0,Ft,9,5,"div",3,t.fX1),t.nI1(2,"objectToArray")),2&i){const e=t.XpG().$implicit;t.Dyx(t.bMT(2,0,e.value))}}function xt(i,l){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",2),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(3);return t.Njj(s.toggleFolder(n.key))}),t.j41(2,"mat-icon"),t.EFF(3),t.k0s(),t.j41(4,"span"),t.EFF(5),t.nI1(6,"translate"),t.k0s()(),t.DNE(7,bt,3,2),t.k0s()}if(2&i){const e=l.$implicit,o=t.XpG(2).$implicit,n=t.XpG();t.R7$(),t.Y8G("tippyTranslate","SourceEditorSnippets."+o.key+"."+e.key+".Help"),t.R7$(2),t.SpI(" ",n.toggledFolders.includes(e.key)?"keyboard_arrow_down":"keyboard_arrow_right"," "),t.R7$(2),t.JRh(t.bMT(6,4,"SourceEditorSnippets."+o.key+"."+e.key+".Title")),t.R7$(2),t.vxM(n.toggledFolders.includes(e.key)?7:-1)}}function Tt(i,l){if(1&i&&(t.Z7z(0,xt,8,6,"div",null,t.fX1),t.nI1(2,"keyvalue")),2&i){const e=t.XpG().$implicit;t.Dyx(t.bMT(2,0,e.value))}}function kt(i,l){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",1),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.toggleSection(n.key))}),t.j41(2,"mat-icon"),t.EFF(3),t.k0s(),t.j41(4,"span"),t.EFF(5),t.nI1(6,"translate"),t.k0s()(),t.DNE(7,Tt,3,2),t.k0s()}if(2&i){const e=l.$implicit,o=t.XpG();t.R7$(),t.Y8G("tippyTranslate","SourceEditorSnippets."+e.key+".Help"),t.R7$(2),t.SpI(" ",o.toggledSections.includes(e.key)?"keyboard_arrow_down":"keyboard_arrow_right"," "),t.R7$(2),t.JRh(t.bMT(6,4,"SourceEditorSnippets."+e.key+".Title")),t.R7$(2),t.vxM(o.toggledSections.includes(e.key)?7:-1)}}let St=(()=>{class i{constructor(){this.snippets=(0,t.hFB)(),this.insertSnippet=(0,t.CGW)(),this.toggledSections=[],this.toggledFolders=[],this.toggledInfos=[],this.toggledMores=[]}addSnippet(e){this.insertSnippet.emit(e)}toggleSection(e){M.f.toggleInArray(e,this.toggledSections)}toggleFolder(e){M.f.toggleInArray(e,this.toggledFolders)}toggleInfo(e){M.f.toggleInArray(e,this.toggledInfos)}toggleMore(e){M.f.toggleInArray(e,this.toggledMores)}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-code-snippets"]],inputs:{snippets:[1,"snippets"]},outputs:{insertSnippet:"insertSnippet"},decls:4,vars:2,consts:[[1,"editor-active-explorer","fancy-scrollbar-dark"],["tippyShowDelay","750",1,"collapsible-header","section",3,"click","tippyTranslate"],["tippyShowDelay","750",1,"collapsible-header","folder",3,"click","tippyTranslate"],[1,"snippet"],[1,"snippet-label"],["matRipple","","tippyShowDelay","750",1,"text",3,"click","tippy"],["tippy","Show More","tippyShowDelay","750"],["tippy","Show Help","tippyShowDelay","750","appClickStopPropagation","",3,"click"],[1,"snippet-help"],["tippy","Show More","tippyShowDelay","750",3,"click"],[1,"text",3,"innerHTML"],["target","_blank",3,"href"],["matRipple","","tippyShowDelay","750",1,"text","text-more",3,"click","tippy"],[1,"snippet-help","snippet-help-more"]],template:function(o,n){1&o&&(t.j41(0,"div",0),t.Z7z(1,kt,8,6,"div",null,t.fX1),t.nI1(3,"keyvalue"),t.k0s()),2&o&&(t.R7$(),t.Dyx(t.bMT(3,0,n.snippets())))},dependencies:[S.m_,S.An,W.pZ,W.r6,F.lG,x.h,x.D9,mt,V.c,D.e,_t.$],styles:[".collapsible-header[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;overflow:hidden;white-space:nowrap;-webkit-user-select:none;user-select:none;padding:3px 0}.collapsible-header.section[_ngcontent-%COMP%]{background-color:#383838;font-weight:500}.collapsible-header.folder[_ngcontent-%COMP%]{padding-left:8px}.collapsible-header.folder[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.collapsible-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.snippet[_ngcontent-%COMP%]{padding-right:8px}.snippet[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.snippet-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;user-select:none}.snippet-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{cursor:pointer;padding:3px 0 3px 32px;flex:1 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.snippet-label[_ngcontent-%COMP%]   .text-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-label[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;width:18px;height:18px;font-size:18px}.snippet-help[_ngcontent-%COMP%]{padding:3px 18px 3px 32px}.snippet-help-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px;font-style:oblique;word-break:break-word}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]     p{margin:0}"]})}}return i})();var O=c(1034);function U(i){if(!i)return[];const l=[];for(const e of i){let o=l;const n=e.Path.split("/"),s=n[n.length-1];let a="";for(let r=0;r<n.length;r++){const p=n[r];a+=r?`/${p}`:p;const _=o.find(d=>d.name===p);if(_)o=_.children;else{const d={depth:r,name:p,pathFromRoot:a,isShared:e.Shared,isFolder:p!==s,...p!==s&&{children:[]}};o.push(d),o=d.children}}}return l}let Et=(()=>{class i{constructor(e){this.sanitizer=e}transform(e,o){let n;return n=o?8*e:0===e?8:8*e+16,this.sanitizer.bypassSecurityTrustStyle(`padding-left: ${n}px;`)}static{this.\u0275fac=function(o){return new(o||i)(t.rXU(T.up,16))}}static{this.\u0275pipe=t.EJ8({name:"depthPadding",type:i,pure:!0})}}return i})(),wt=(()=>{class i{transform(e){return null==e||e.sort((o,n)=>o.isFolder<n.isFolder?1:o.isFolder>n.isFolder?-1:0),e}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275pipe=t.EJ8({name:"sortItems",type:i,pure:!0})}}return i})();const K=i=>({item:i}),Pt=i=>({active:i}),Ot=i=>({"app-shared-root":i});function It(i,l){1&i&&t.eu8(0)}function jt(i,l){if(1&i&&t.DNE(0,It,1,0,"ng-container",6),2&i){const e=l.$implicit;t.XpG();const o=t.sdS(6);t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,K,e))}}function Rt(i,l){if(1&i){const e=t.RV6();t.j41(0,"div",8),t.nI1(1,"depthPadding"),t.bIt("click",function(){t.eBV(e);const n=t.XpG().item,s=t.XpG();return t.Njj(s.openTemplate(n.pathFromRoot,n.isShared))}),t.EFF(2),t.k0s()}if(2&i){const e=t.XpG().item,o=t.XpG();t.Aen(t.i5U(1,5,e.depth,e.isFolder)),t.Y8G("ngClass",t.eq3(8,Pt,o.isToggled(e.pathFromRoot,e.isShared)))("tippy",e.name),t.R7$(2),t.SpI(" ",e.name," ")}}function $t(i,l){1&i&&t.eu8(0)}function Vt(i,l){if(1&i&&t.DNE(0,$t,1,0,"ng-container",6),2&i){const e=l.$implicit;t.XpG(4);const o=t.sdS(6);t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,K,e))}}function Dt(i,l){if(1&i&&(t.Z7z(0,Vt,1,4,"ng-container",null,t.fX1),t.nI1(2,"sortItems")),2&i){const e=t.XpG(2).item;t.Dyx(t.bMT(2,0,e.children))}}function At(i,l){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",9),t.nI1(2,"depthPadding"),t.bIt("click",function(){t.eBV(e);const n=t.XpG().item,s=t.XpG();return t.Njj(s.toggleItem(n.pathFromRoot,n.isShared))}),t.j41(3,"div",10)(4,"mat-icon"),t.EFF(5),t.k0s(),t.j41(6,"span"),t.EFF(7),t.k0s()(),t.j41(8,"div",11),t.bIt("click",function(){t.eBV(e);const n=t.XpG().item,s=t.XpG();return t.Njj(s.addFile(n.pathFromRoot,n.isShared))}),t.j41(9,"mat-icon"),t.EFF(10,"add"),t.k0s()()(),t.DNE(11,Dt,3,2),t.k0s()}if(2&i){const e=t.XpG().item,o=t.XpG();t.R7$(),t.Aen(t.i5U(2,7,e.depth+1,e.isFolder)),t.Y8G("ngClass",t.eq3(10,Ot,e.depth<0)),t.R7$(2),t.Y8G("tippy",e.name),t.R7$(2),t.SpI(" ",o.isToggled(e.pathFromRoot,e.isShared)?"keyboard_arrow_down":"keyboard_arrow_right"," "),t.R7$(2),t.JRh(e.name),t.R7$(4),t.vxM(o.isToggled(e.pathFromRoot,e.isShared)?11:-1)}}function Gt(i,l){if(1&i&&t.DNE(0,Rt,3,10,"div",7)(1,At,12,12,"div"),2&i){const e=l.item;t.vxM(e.isFolder?-1:0),t.R7$(),t.vxM(e.isFolder?1:-1)}}let Bt=(()=>{class i{constructor(){this.view=(0,t.hFB)(),this.templates=(0,t.hFB)(),this.openView=(0,t.CGW)(),this.createTemplate=(0,t.CGW)(),this.toggledItemsApp=[],this.toggledItemsShared=[]}ngOnChanges(e){if(null!=e.templates&&(this.tree=function Mt(i){return[{depth:-1,name:"App Files",pathFromRoot:"",isShared:!1,isFolder:!0,children:U(i.filter(e=>!e.Shared))},{depth:-1,name:"Shared App Files",pathFromRoot:"",isShared:!0,isFolder:!0,children:U(i.filter(e=>e.Shared))}]}(this.templates())),null!=e.view){const o=e.view?.previousValue;o&&this.toggleItem(o.FileName,o.IsShared),this.view()&&this.showFileInTree(this.view().FileName,this.view().IsShared)}}isToggled(e,o){return(o?this.toggledItemsShared:this.toggledItemsApp).includes(e)}openTemplate(e,o){this.openView.emit({key:e,shared:o})}toggleItem(e,o){M.f.toggleInArray(e,o?this.toggledItemsShared:this.toggledItemsApp)}addFile(e,o){this.createTemplate.emit({folder:e,isShared:o})}showFileInTree(e,o){if(null==e)return;const n=o?this.toggledItemsShared:this.toggledItemsApp;if(n.includes(e))return;const s=["",...e.split("/")];let a="";for(const r of s)a=a?`${a}/${r}`:r,!n.includes(a)&&this.toggleItem(a,o)}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-code-templates"]],inputs:{view:[1,"view"],templates:[1,"templates"]},outputs:{openView:"openView",createTemplate:"createTemplate"},features:[t.OA$],decls:19,vars:3,consts:[["fileOrFolder",""],["menu","matMenu"],[1,"editor-active-explorer","fancy-scrollbar-dark","explorer-wrapper"],[1,"create-button-wrapper"],["mat-icon-button","","tippy","Create file","tippyPlacement","left",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["tippyShowDelay","750",1,"file",3,"style","ngClass","tippy"],["tippyShowDelay","750",1,"file",3,"click","ngClass","tippy"],[1,"folder-name-wrapper",3,"click","ngClass"],["tippyShowDelay","750",1,"folder-name",3,"tippy"],["tippy","Create file in this folder","tippyShowDelay","750","appClickStopPropagation","",1,"add-item",3,"click"]],template:function(o,n){if(1&o){const s=t.RV6();t.j41(0,"div",2)(1,"div"),t.Z7z(2,jt,1,4,"ng-container",null,t.fX1),t.nI1(4,"sortItems"),t.DNE(5,Gt,2,2,"ng-template",null,0,t.C5r),t.k0s(),t.j41(7,"div",3)(8,"button",4)(9,"mat-icon"),t.EFF(10,"add"),t.k0s()(),t.j41(11,"mat-menu",null,1)(13,"button",5),t.bIt("click",function(){return t.eBV(s),t.Njj(n.addFile("",!1))}),t.j41(14,"span"),t.EFF(15,"App"),t.k0s()(),t.j41(16,"button",5),t.bIt("click",function(){return t.eBV(s),t.Njj(n.addFile("",!0))}),t.j41(17,"span"),t.EFF(18,"Shared (global)"),t.k0s()()()()()}if(2&o){const s=t.sdS(12);t.R7$(2),t.Dyx(t.bMT(4,1,n.tree)),t.R7$(6),t.Y8G("matMenuTriggerFor",s)}},dependencies:[F.T3,F.YU,S.m_,S.An,v.Hl,v.iY,O.Cn,O.kk,O.fb,O.Cp,Et,wt,V.c,D.e],styles:[".explorer-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.create-button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.file[_ngcontent-%COMP%]{cursor:pointer;padding:4px 0 4px 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;user-select:none}.file[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.file.active[_ngcontent-%COMP%]{background-color:#37373d}.folder-name-wrapper[_ngcontent-%COMP%]{display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center}.folder-name-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.folder-name-wrapper[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;white-space:nowrap;padding:3px 0;flex:1 1 auto}.folder-name-wrapper[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%]{margin-right:4px;display:none;align-items:center;justify-content:center;padding:3px}.folder-name-wrapper.app-shared-root[_ngcontent-%COMP%]{color:#fff;font-weight:500}.folder-name-wrapper[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.folder-name-wrapper[_ngcontent-%COMP%]:hover   .add-item[_ngcontent-%COMP%]{display:flex}"]})}}return i})();var Xt=c(9686),J=c(271),Nt=c(5959),Lt=c(1726),zt=c(6474);let Yt=(()=>{class i extends zt.D{constructor(e){super(),this.translate=e}getTooltips(e){return this.getHttpApiUrl("admin/Code/InlineHelp",{params:{language:e}})}getSnippets(e){return this.getHttp("../ng-assets/snippets.json.js").pipe((0,J.T)(o=>{const n=this.filterAwayNotNeededSnippetsList(o.snippets,e),s=this.extractInputTypeSnippets(n),a=this.initSnippetsWithConfig(s.standardArray,e,s.inputTypeSnippets);return{list:s.standardArray,sets:a}}))}filterAwayNotNeededSnippetsList(e,o){const n=["@","["],s=r=>r.Type.indexOf("Razor")>-1?0:1,a=[];for(const r of e){const p=n.indexOf(r.set[0]);(-1===p||p===s(o))&&(p===s(o)&&(r.set=r.set.substring(1)),a.push(r))}return a}extractInputTypeSnippets(e){const o=[],n=[];for(const r of e)"\\"===r.set[0]?(r.set=r.set.substring(1),n.push(r)):o.push(r);return{standardArray:o,inputTypeSnippets:this.catalogInputTypeSnippets(n)}}catalogInputTypeSnippets(e){const o={};for(const n of e)void 0===o[n.subset]&&(o[n.subset]=[]),o[n.subset].push(n);return o}initSnippetsWithConfig(e,o,n){const s=this.makeTree(e);return s.Content=Object.assign({},s.Content,{Fields:{},PresentationFields:{}}),o.TypeContent&&this.loadContentType(s.Content.Fields,o.TypeContent,"Content",o,n),o.TypeContentPresentation&&this.loadContentType(s.Content.PresentationFields,o.TypeContentPresentation,"Content.Presentation",o,n),o.HasList?(s.List=Object.assign({},s.List,{Fields:{},PresentationFields:{}}),o.TypeList&&this.loadContentType(s.List.Fields,o.TypeList,"Header",o,n),o.TypeListPresentation&&this.loadContentType(s.List.PresentationFields,o.TypeListPresentation,"Header.Presentation",o,n)):delete s.List,o.HasApp&&(s.App.Resources={},s.App.Settings={},this.loadContentType(s.App.Resources,"App-Resources","App.Resources",o,n),this.loadContentType(s.App.Settings,"App-Settings","App.Settings",o,n)),s}makeTree(e){const o={};for(const n of e){void 0===o[n.set]&&(o[n.set]={}),void 0===o[n.set][n.subset]&&(o[n.set][n.subset]=[]);const s={key:n.name,label:this.label(n.set,n.subset,n.name),snip:n.content,help:n.help||this.help(n.set,n.subset,n.name),links:this.linksList(n.links)};o[n.set][n.subset].push(s)}return o}label(e,o,n){const s=this.getHelpKey(e,o,n,".Key");let a=this.translate.instant(s);return a===s&&(a=n),a}getHelpKey(e,o,n,s){return"SourceEditorSnippets."+e+"."+o+"."+n+s}help(e,o,n){const s=this.getHelpKey(e,o,n,".Help");let a=this.translate.instant(s);return a===s&&(a=""),a}linksList(e){if(!e)return null;const o=[],n=e.split("\n");for(const s of n){const a=s.split(":");if(3===a.length){const r={name:a[0].trim(),url:a[1].trim()+":"+a[2].trim()};o.push(r)}}return 0===o.length?null:o}loadContentType(e,o,n,s,a){this.getFields(s.AppId,o).subscribe(r=>{for(const p of r){const _=p.StaticName;e[_]={key:_,label:_,snip:this.valuePlaceholder(n,_,s),help:p.Metadata.merged.Notes||" ("+p.Type.toLowerCase()+") "};const d=(0,Xt.A)(e[_]);this.attachSnippets(e,n,_,p.InputType,d,a)}if(r.length){const p=["EntityId","EntityTitle","EntityGuid","EntityType","IsPublished","Modified"];for(let _=0;_<p.length;_++)e[p[_]]={key:p[_],label:p[_],snip:this.valuePlaceholder(n,p[_],s),help:this.translate.instant("SourceEditorSnippets.StandardFields."+p[_]+".Help")}}})}valuePlaceholder(e,o,n){return n.Type.indexOf("Razor")>-1?"@"+e+"."+o:"["+e.replace(".",":")+":"+o+"]"}getFields(e,o){return this.getHttpApiUrl(Nt.z,{params:{appid:e.toString(),staticName:o}}).pipe((0,J.T)(n=>{n=n.filter(s=>s.Type!==Lt.O.Empty);for(const s of n){if(!s.Metadata)continue;const a=s.Metadata;a.merged={...a.All,...a[s.Type],...a[s.InputType]}}return n}))}attachSnippets(e,o,n,s,a,r){let p=r[s];if(s.indexOf("-")){const d=s.substring(0,s.indexOf("-"));if(d){const u=r[d];u&&(p=p?p.concat(u):u)}}if(!p)return;void 0===e[n].more&&(e[n].more={});const _=e[n].more;for(let d=0;d<p.length;d++)try{_[n+"-"+p[d].name]=Object.assign({},a,{key:n+" - "+p[d].name,label:p[d].name,snip:this.localizeGenericSnippet(p[d].content,o,n),collapse:!0})}finally{}}localizeGenericSnippet(e,o,n){return e.replace(/(\$\{[0-9]+\:)var(\})/gi,"$1"+o+"$2").replace(/(\$\{[0-9]+\:)prop(\})/gi,"$1"+n+"$2")}static{this.\u0275fac=function(o){return new(o||i)(t.KVO(x.c$))}}static{this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac})}}return i})();var Wt=c(9996),Ut=c(2159),Kt=c(7941);const Jt=i=>({"sxc-dark":i}),Z=i=>({active:i}),Zt=(i,l,e)=>({active:i,modified:l,loading:e});function Qt(i,l){1&i&&(t.j41(0,"mat-icon",13),t.EFF(1,"share"),t.k0s())}function qt(i,l){1&i&&(t.j41(0,"mat-icon",16),t.EFF(1,"circle"),t.k0s())}function te(i,l){1&i&&t.nrm(0,"mat-spinner",17)}function ee(i,l){if(1&i){const e=t.RV6();t.j41(0,"div",11),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.openView(n.viewKey))}),t.j41(1,"div",12),t.DNE(2,Qt,2,0,"mat-icon",13),t.j41(3,"span",14),t.EFF(4),t.k0s()(),t.j41(5,"div",15),t.DNE(6,qt,2,0,"mat-icon",16)(7,te,1,0,"mat-spinner",17),t.j41(8,"mat-icon",18),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.closeEditor(n.viewKey))}),t.EFF(9,"close"),t.k0s()()()}if(2&i){const e=l.$implicit;t.Y8G("ngClass",t.sMw(6,Zt,e.isActive,e.isModified,e.isLoading)),t.R7$(),t.Y8G("tippy",e.label),t.R7$(),t.vxM(e.viewKey.shared?2:-1),t.R7$(2),t.JRh(e.label),t.R7$(2),t.vxM(e.isModified?6:-1),t.R7$(),t.vxM(e.isLoading?7:-1)}}function ne(i,l){if(1&i&&(t.j41(0,"div",7),t.Z7z(1,ee,10,10,"div",10,t.fX1),t.k0s()),2&i){const e=t.XpG();t.R7$(),t.Dyx(e.tabs())}}function oe(i,l){if(1&i){const e=t.RV6();t.j41(0,"app-monaco-editor",19),t.bIt("valueChanged",function(n){let s;t.eBV(e);const a=t.XpG();return t.Njj(a.codeChanged(n,null==(s=a.active())?null:s.viewKey))}),t.k0s()}if(2&i){let e,o,n,s;const a=t.XpG();t.Y8G("filename",null==(e=a.active())?null:e.view.FileName)("value",null==(o=a.active())?null:o.view.Code)("options",a.monacoOptions)("snippets",null==(n=a.active())?null:n.editorSnipps)("tooltips",null==(s=a.active())?null:s.tooltips)("autoFocus",!0)}}function ie(i,l){if(1&i){const e=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.save())}),t.j41(1,"mat-icon"),t.EFF(2,"done"),t.k0s()()}}let se=(()=>{class i extends et.${#n;#i;#s;#e;#t;#o;constructor(e,o,n,s,a,r){super(),this.context=e,this.route=o,this.snackBar=n,this.zone=s,this.matDialog=a,this.viewContainerRef=r,this.Explorers=Y,this.activeExplorer=Y.Templates,this.monacoOptions={theme:"2sxc-dark",tabSize:2,fixedOverflowWidgets:!0},this.#n=(0,$.d)(Wt.F),this.#i=(0,$.d)(Yt),this.#s=(0,$.d)(T.hE),this.templates=(0,t.vPA)([]),this.activeView=(0,t.vPA)(void 0),this.#e=(0,t.vPA)([]),this.#t=(0,t.vPA)([]),this.active=(0,t.EWP)(()=>{const d=this.activeView();return this.#t().find(u=>f.a.objectsEqual(u.viewKey,d))}),this.tabs=(0,t.EWP)(()=>{const d=this.#e(),u=this.activeView(),C=this.#t();return d.map(g=>{const m=C.find(h=>f.a.objectsEqual(h.viewKey,g));return{viewKey:g,label:m?.view?.FileName??g.key,isActive:f.a.objectsEqual(g,u),isModified:m?.view?.Code!==m?.savedCode,isLoading:null==m?.view}})}),this.context.init(this.route);const p=JSON.parse(sessionStorage.getItem(H.Ul)),_="true"===(sessionStorage.getItem(H.P3)??"false");p.forEach(d=>{d.Path.startsWith("/")&&(d.Path=d.Path.substring(1)),d.IsShared??=_}),this.#o=p,(0,t.QZP)(()=>{const d=this.templates(),u=this.#e();if(0===d.length)return;let C=this.#t();const g=u.filter(m=>!C.some(h=>f.a.objectsEqual(h.viewKey,m)));0!==g.length&&((0,j.p)(g.map(m=>{const h={viewKey:m};C=[...C,h];const b=this.#n.get(m.key,m.shared,this.#o).pipe((0,R.u)()),E=b.pipe((0,N.n)(w=>this.#i.getSnippets(w))),I=b.pipe((0,N.n)(w=>this.#i.getTooltips(w.Extension.substring(1))));return(0,j.p)([(0,Q.of)(m),b,E,I])})).subscribe(m=>{let h=this.#t();m.forEach(([b,E,I,w])=>{const B=h.findIndex(re=>f.a.objectsEqual(re.viewKey,b));if(B<0)return;const ae={viewKey:b,view:E,explorerSnipps:I.sets,editorSnipps:I.list,tooltips:w,savedCode:E.Code};h=[...h.slice(0,B),ae,...h.slice(B+1)],this.#a(b,E,d)}),this.#t.set(h)}),this.#t.set(C))}),(0,t.QZP)(()=>{const d=this.activeView(),u=this.#t();if(!u)return;const C=u.find(b=>f.a.objectsEqual(b.viewKey,d)),g="Code Editor",m=null==C?g:`${C.view?.FileName} - ${g}`;m!==this.#s.getTitle()&&(console.log("newTitle",m),this.#s.setTitle(m))})}ngOnInit(){const e=this.#o.map(o=>({key:o.EntityId?.toString()??o.Path,shared:o.IsShared}));this.activeView.set(e[0]),this.#e.set(e),this.#r(),this.#n.getAll().subscribe(o=>{this.templates.set(o)})}ngOnDestroy(){super.ngOnDestroy()}toggleExplorer(e){this.activeExplorer=this.activeExplorer!==e?e:null}createTemplate(e){const o={folder:e.folder,global:e.isShared,purpose:"api"===e.folder||e.folder?.startsWith("api/")?"Api":void 0};this.matDialog.open(q.g,{autoFocus:!1,data:o,viewContainerRef:this.viewContainerRef,width:"650px"}).afterClosed().subscribe(s=>{s&&this.#n.create(s.name,e.isShared,s.templateKey).subscribe(()=>{this.#n.getAll().subscribe(a=>{this.templates.set(a)})})})}insertSnippet(e){this.monacoEditorRef?.insertSnippet(e)}codeChanged(e,o){let n=this.#t();const s=n.findIndex(p=>f.a.objectsEqual(p.viewKey,o)),a=n[s],r={...a,view:{...a.view,Code:e}};n=[...n.slice(0,s),r,...n.slice(s+1)],this.#t.set(n)}openView(e){e=this.#t().find(s=>!f.a.objectsEqual(s.viewKey,e)&&s.view?.FileName===e.key&&s.view?.IsShared===e.shared)?.viewKey??e;const o=this.activeView();f.a.objectsEqual(o,e)||this.activeView.set(e);const n=this.#e();if(!n.some(s=>f.a.objectsEqual(s,e))){const s=[...n,e];this.#e.set(s)}}closeEditor(e){const o=this.#e(),n=o.filter(a=>!f.a.objectsEqual(a,e)),s=this.activeView();if(f.a.objectsEqual(s,e)){const a=o[o.findIndex(r=>f.a.objectsEqual(r,s))-1]??n[0];this.activeView.set(a)}this.#e.set(n)}save(e){e??=this.activeView();const o=this.#t().find(s=>f.a.objectsEqual(s.viewKey,e));if(null==o?.view)return;this.snackBar.open("Saving...");const n=o.view.Code;this.#n.save(e.key,e.shared,o.view,this.#o).subscribe({next:s=>{if(!s)return void this.snackBar.open("Failed",null,{duration:2e3});let a=[...this.#t()];const r=a.findIndex(d=>f.a.objectsEqual(d.viewKey,e));if(r<0)return;const _={...a[r],savedCode:n};a=[...a.slice(0,r),_,...a.slice(r+1)],this.#t.set(a),this.snackBar.open("Saved",null,{duration:2e3})},error:()=>this.snackBar.open("Failed",null,{duration:2e3})})}#a(e,o,n){const s=o.FileName,a=s.indexOf("/")>-1?s.lastIndexOf("/")+1:0,r=0===a?"":s.substring(0,a),p=s.substring(a),d=p.substring(0,p.length-o.Extension.length)+".code"+o.Extension,u=n.find(g=>g.Path===r+d&&g.Shared===o.IsShared),C=n.filter(g=>g.Path.endsWith(p)&&g.Shared===o.IsShared).length-1;if(u||C){const g={fileName:p,codeFile:u?.Path,edition:this.#o.find(h=>h.EntityId?.toString()===e.key&&h.IsShared===o.IsShared&&h.Path===o.FileName)?.Edition,otherEditions:C,openCodeBehind:!1},m=this.snackBar.openFromComponent(ct,{data:g,duration:1e4});m.onAction().subscribe(()=>{m.containerInstance.snackBarConfig.data.openCodeBehind&&this.openView({key:u?.Path,shared:u?.Shared})})}}#r(){this.zone.runOutsideAngular(()=>{this.subscriptions.add((0,L.R)(window,"beforeunload").subscribe(e=>{this.#t().some(n=>null!=n.view&&n.view.Code!==n.savedCode)&&(e.preventDefault(),e.returnValue="")})),this.subscriptions.add((0,L.R)(window,"keydown").subscribe(e=>{(0,tt.J)(e)&&(e.preventDefault(),this.zone.run(()=>this.save()))}))})}static{this.\u0275fac=function(o){return new(o||i)(t.rXU(ot.o),t.rXU(Ut.nX),t.rXU(A.UG),t.rXU(t.SKi),t.rXU(Kt.bZ),t.rXU(t.c1b))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-code-editor"]],viewQuery:function(o,n){if(1&o&&t.GBs(z.K,5),2&o){let s;t.mGM(s=t.lsd())&&(n.monacoEditorRef=s.first)}},features:[t.Jv_([{provide:x.Wr,useFactory:dt,deps:[P.Qq]},x.c$]),t.Vt3],decls:14,vars:17,consts:[["appToggleDebug","",1,"editor-root",3,"ngClass"],[1,"editor-side-toolbar"],["tippy","Templates",1,"button",3,"click","ngClass"],["tippy","Snippets",1,"button",3,"click","ngClass"],[3,"openView","createTemplate","hidden","view","templates"],[3,"insertSnippet","hidden","snippets"],[1,"editor-group"],[1,"tabs-container","fancy-scrollbar-dark"],[3,"filename","value","options","snippets","tooltips","autoFocus"],["mat-fab","","mat-elevation-z24","","tippy","Click to save or CTRL + S"],[1,"tab",3,"ngClass"],[1,"tab",3,"click","ngClass"],["tippyShowDelay","750",1,"tab-label-container",3,"tippy"],[1,"icon-shared"],[1,"tab-label"],[1,"tab-actions-container"],[1,"tab-action","icon-modified"],["mode","indeterminate","diameter","14","color","white",1,"spinner"],["tippy","Close","appClickStopPropagation","",1,"tab-action","icon-close",3,"click"],[3,"valueChanged","filename","value","options","snippets","tooltips","autoFocus"],["mat-fab","","mat-elevation-z24","","tippy","Click to save or CTRL + S",3,"click"]],template:function(o,n){if(1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.bIt("click",function(){return n.toggleExplorer(n.Explorers.Templates)}),t.j41(3,"mat-icon"),t.EFF(4,"file_copy"),t.k0s()(),t.j41(5,"div",3),t.bIt("click",function(){return n.toggleExplorer(n.Explorers.Snippets)}),t.j41(6,"mat-icon"),t.EFF(7,"code"),t.k0s()()(),t.j41(8,"app-code-templates",4),t.bIt("openView",function(a){return n.openView(a)})("createTemplate",function(a){return n.createTemplate(a)}),t.k0s(),t.j41(9,"app-code-snippets",5),t.bIt("insertSnippet",function(a){return n.insertSnippet(a)}),t.k0s(),t.j41(10,"div",6),t.DNE(11,ne,3,0,"div",7)(12,oe,1,6,"app-monaco-editor",8),t.k0s(),t.DNE(13,ie,3,0,"button",9),t.k0s()),2&o){let s,a,r;t.Y8G("ngClass",t.eq3(11,Jt,"2sxc-dark"===n.monacoOptions.theme)),t.R7$(2),t.Y8G("ngClass",t.eq3(13,Z,n.activeExplorer===n.Explorers.Templates)),t.R7$(3),t.Y8G("ngClass",t.eq3(15,Z,n.activeExplorer===n.Explorers.Snippets)),t.R7$(3),t.Y8G("hidden",n.activeExplorer!==n.Explorers.Templates)("view",null==(s=n.active())?null:s.view)("templates",n.templates()),t.R7$(),t.Y8G("hidden",n.activeExplorer!==n.Explorers.Snippets)("snippets",null==(a=n.active())?null:a.explorerSnipps),t.R7$(2),t.vxM(n.tabs().length>0?11:-1),t.R7$(),t.vxM(null!=(r=n.active())&&r.view?12:-1),t.R7$(),t.vxM(n.activeView()?13:-1)}},dependencies:[F.YU,S.m_,S.An,Bt,St,y.D6,y.LG,z.K,v.Hl,v.Sr,V.c,D.e,nt.V,P.q1,x.h],styles:[".sxc-dark[_ngcontent-%COMP%]{background-color:#1e1e1e}.editor-group[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]{display:flex;height:35px;background-color:#252526;overflow:hidden}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]:hover{overflow-x:auto}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;align-items:center;cursor:pointer;color:#ccc;font-size:13px;padding-left:10px;border-right:1px solid rgb(37,37,38);background-color:#2d2d2d;-webkit-user-select:none;user-select:none}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%]   .icon-shared[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;margin-right:4px}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-actions-container[_ngcontent-%COMP%]{height:100%;width:28px;display:flex;align-items:center;justify-content:center}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%]{display:none;align-items:center;justify-content:center;width:16px;height:16px;padding:2px;font-size:16px;border-radius:5px}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action.icon-modified[_ngcontent-%COMP%]{width:10px;height:10px;font-size:10px}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%]:hover{background-color:#5a5d5e4f}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:none}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#fff;background-color:#1e1e1e}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover   .icon-close[_ngcontent-%COMP%]{display:flex}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).modified   .icon-modified[_ngcontent-%COMP%]{display:flex}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).loading   .spinner[_ngcontent-%COMP%]{display:block}.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover):not(.modified):not(.loading).active   .icon-close[_ngcontent-%COMP%]{display:flex}.mat-mdc-fab[_ngcontent-%COMP%]{position:absolute;right:48px;bottom:32px;z-index:10}"]})}}return i})()},5699:(X,k,c)=>{c.d(k,{V:()=>t});var F=c(7580),P=c(9431);let t=(()=>{class v{constructor(y){this.globalConfigService=y}onClick(y){(navigator.platform.match("Mac")?y.metaKey:y.ctrlKey)&&y.shiftKey&&y.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())}static{this.\u0275fac=function(T){return new(T||v)(F.rXU(P.B))}}static{this.\u0275dir=F.FsC({type:v,selectors:[["","appToggleDebug",""]],hostBindings:function(T,x){1&T&&F.bIt("click",function(R){return x.onClick(R)})}})}}return v})()},1726:(X,k,c)=>{c.d(k,{O:()=>F});const F={Boolean:"Boolean",Custom:"Custom",DateTime:"DateTime",Empty:"Empty",Entity:"Entity",Hyperlink:"Hyperlink",Number:"Number",String:"String"}}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.07.00/dist/ng-edit/projects_eav-ui_src_app_code-editor_code-editor_component_ts.9954fa3db5525354.js.map