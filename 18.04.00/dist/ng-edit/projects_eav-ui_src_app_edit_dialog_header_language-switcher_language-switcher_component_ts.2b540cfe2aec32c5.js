"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_edit_dialog_header_language-switcher_language-switcher_component_ts"],{9035:(Y,f,l)=>{l.r(f),l.d(f,{LanguageSwitcherComponent:()=>Z});var e=l(9148),h=l(4175),c=l(3840),m=l(7167),v=l(4601),_=l(4435),y=l(8265),E=l(2093),L=l(9977),d=l(7941),g=l(4950),w=l(5175);function C(o){const s=[],t={};return o.forEach(n=>{const i=S(n.Culture);t[i]?t[i]++:t[i]=1}),o.forEach(n=>{const i=S(n.Culture);s.push({...n,label:t[i]>1?`${i} (${n.NameId})`:i})}),s}function S(o){return o.substring(0,o.includes("(")?o.indexOf("(")-1:100).toLocaleUpperCase()}var B=l(5060);const b=(o,s)=>s.Code;function F(o,s){if(1&o&&(e.j41(0,"mat-option",8),e.EFF(1),e.k0s()),2&o){const t=s.$implicit;e.FS9("value",t.Code.toLocaleLowerCase()),e.R7$(),e.JRh(t.label)}}function k(o,s){if(1&o&&(e.j41(0,"mat-option",8),e.EFF(1),e.k0s()),2&o){const t=s.$implicit;e.FS9("value",t.Code.toLocaleLowerCase()),e.R7$(),e.JRh(t.label)}}let M=(()=>{class o{#t;#e;constructor(t){this.dialog=t,this.#t=(0,e.WQX)(L.g),this.#e=(0,e.WQX)(m.L),this.options=C(this.#t.getAll())}closeDialog(){this.dialog.close()}setLabelLanguage(t,n){this.#e.setLabel(t)}getLabelLanguage(){return this.#e.getLabelStored()}setUiLanguage(t,n){this.#e.setUi(t)}getUiLanguage(){return this.#e.getUiStored()}static{this.\u0275fac=function(n){return new(n||o)(e.rXU(d.CP))}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-separate-languages-header"]],standalone:!0,features:[e.aNF],decls:30,vars:2,consts:[[1,"eav-dialog"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"eav-dialog-content"],["tippy","Changes the language for all texts and labels","appearance","fill","color","accent"],[3,"selectionChange","value"],["value",""],[3,"value"],["tippy","Changes the language for all UI Elements","appearance","fill","color","accent"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3,"Language UI Settings (BETA)"),e.k0s(),e.j41(4,"button",3),e.bIt("click",function(){return i.closeDialog()}),e.j41(5,"mat-icon"),e.EFF(6,"close"),e.k0s()()(),e.j41(7,"div",4)(8,"p"),e.EFF(9," By default, the UI language will match the current language of the content. But sometimes you may prefer to to have a different behavior. "),e.k0s(),e.j41(10,"h3"),e.EFF(11,"Choose language"),e.k0s(),e.j41(12,"mat-form-field",5)(13,"mat-label"),e.EFF(14,"Labels and Help Texts"),e.k0s(),e.j41(15,"mat-select",6),e.bIt("selectionChange",function(r){return i.setLabelLanguage(r.value,"labels")}),e.j41(16,"mat-option",7),e.EFF(17,"Always same as content (default)"),e.k0s(),e.Z7z(18,F,2,2,"mat-option",8,b),e.k0s()(),e.nrm(20,"br")(21,"br"),e.j41(22,"mat-form-field",9)(23,"mat-label"),e.EFF(24,"UI Elements"),e.k0s(),e.j41(25,"mat-select",6),e.bIt("selectionChange",function(r){return i.setUiLanguage(r.value,"ui")}),e.j41(26,"mat-option",7),e.EFF(27,"Always same as content (default)"),e.k0s(),e.Z7z(28,k,2,2,"mat-option",8,b),e.k0s()()()()),2&n&&(e.R7$(15),e.Y8G("value",i.getLabelLanguage()),e.R7$(3),e.Dyx(i.options),e.R7$(7),e.Y8G("value",i.getUiLanguage()),e.R7$(3),e.Dyx(i.options))},dependencies:[d.hM,c.m_,c.An,h.Hl,h.iY,v.e,g.RG,g.rl,g.nJ,w.Ve,w.VO,B.wT],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]})}}return o})();class X{constructor(s,t){this.ngZone=s,this.header=t,this.moveThreshold=2,this.stopClick=!1,this.eventListeners=[],this.ngZone.runOutsideAngular(()=>{const n=i=>{this.checkIfMouseMoved(i)};document.addEventListener("mouseup",n,{passive:!0}),this.eventListeners.push({element:document,type:"mouseup",listener:n})})}lngButtonDown(s){this.ngZone.runOutsideAngular(()=>{this.saveInitialPosition(s)})}lngButtonClick(s){this.ngZone.runOutsideAngular(()=>{this.doMove(s)})}stopClickIfMouseMoved(){return this.stopClick}destroy(){this.ngZone.runOutsideAngular(()=>{this.eventListeners.forEach(({element:s,type:t,listener:n})=>{s.removeEventListener(t,n)}),this.eventListeners=null})}saveInitialPosition(s){this.stopClick=!1,this.positionX=s.pageX,this.positionY=s.pageY}checkIfMouseMoved(s){this.positionX&&this.positionY?(this.stopClick=Math.abs(this.positionX+this.positionY-(s.pageX+s.pageY))>this.moveThreshold,this.positionX=null,this.positionY=null):this.stopClick=!1}doMove(s){if(this.stopClick)return;const t=s.target,n=t.getBoundingClientRect().left,i=t.getBoundingClientRect().width,a=this.header.getBoundingClientRect().left,r=this.header.getBoundingClientRect().width;this.header.scrollLeft+=n+i/2-(a+r/2)}}class D{constructor(s,t,n){this.ngZone=s,this.header=t,this.areButtonsDisabled=n,this.eventListeners=[],this.ngZone.runOutsideAngular(()=>{const i=this.registerScroll.bind(this);this.header.addEventListener("pointerdown",i,{passive:!0}),this.headerDownListener={element:this.header,type:"pointerdown",listener:i}})}destroy(){this.ngZone.runOutsideAngular(()=>{this.headerDownListener.element.removeEventListener(this.headerDownListener.type,this.headerDownListener.listener),this.headerDownListener=null,this.eventListeners.forEach(({element:s,type:t,listener:n})=>{s.removeEventListener(t,n)}),this.eventListeners=null}),this.ngZone=null,this.header=null,this.areButtonsDisabled=null}registerScroll(s){if(this.areButtonsDisabled()||0!==s.button)return;window.getSelection().removeAllRanges(),this.oldScrollBehavior=getComputedStyle(this.header).getPropertyValue("scroll-behavior"),this.header.style.scrollBehavior="auto",this.positionX=s.pageX;const n=a=>{this.doScroll(a)},i=()=>{this.removeScroll()};document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",i,{passive:!0}),document.addEventListener("pointerleave",i,{passive:!0}),this.eventListeners.push({element:document,type:"pointermove",listener:n},{element:document,type:"pointerup",listener:i},{element:document,type:"pointerleave",listener:i})}removeScroll(){this.header.style.scrollBehavior=this.oldScrollBehavior,this.eventListeners.forEach(({element:s,type:t,listener:n})=>{s.removeEventListener(t,n)}),this.eventListeners.splice(0,this.eventListeners.length)}doScroll(s){const t=s.pageX;t<this.positionX?this.header.scrollLeft+=this.positionX-t:t>this.positionX&&(this.header.scrollLeft+=-(t-this.positionX)),this.positionX=t}}class R{constructor(s,t,n,i){this.ngZone=s,this.header=t,this.leftShadow=n,this.rightShadow=i,this.hidden="hidden",this.eventListeners=[],this.ngZone.runOutsideAngular(()=>{this.calculateShadows();const a=()=>{this.calculateShadows()};this.header.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),this.eventListeners.push({element:this.header,type:"scroll",listener:a},{element:window,type:"resize",listener:a})})}destroy(){this.ngZone.runOutsideAngular(()=>{this.eventListeners.forEach(({element:s,type:t,listener:n})=>{s.removeEventListener(t,n)}),this.eventListeners=null}),this.ngZone=null,this.header=null,this.leftShadow=null,this.rightShadow=null}calculateShadows(){this.maxScrollLeft=this.header.scrollWidth-this.header.clientWidth,0===this.maxScrollLeft?this.hideBoth():0===this.header.scrollLeft?this.hideLeft():this.header.scrollLeft===this.maxScrollLeft?this.hideRight():this.showBoth()}hideBoth(){this.leftShadow.classList.add(this.hidden),this.rightShadow.classList.add(this.hidden)}hideLeft(){this.leftShadow.classList.add(this.hidden),this.rightShadow.classList.remove(this.hidden)}hideRight(){this.leftShadow.classList.remove(this.hidden),this.rightShadow.classList.add(this.hidden)}showBoth(){this.leftShadow.classList.remove(this.hidden),this.rightShadow.classList.remove(this.hidden)}}var O=l(3347),P=l(852);const x=["scrollable"],I=["leftShadow"],j=["rightShadow"];function T(o,s){if(1&o){const t=e.RV6();e.j41(0,"mat-icon",10),e.bIt("click",function(){e.eBV(t);const i=e.XpG(3);return e.Njj(i.languageSettings())}),e.EFF(1,"settings"),e.k0s()}}function U(o,s){if(1&o&&(e.j41(0,"button",7),e.EFF(1),e.DNE(2,T,2,0,"mat-icon",9),e.k0s()),2&o){const t=e.XpG().$implicit,n=e.XpG();e.Y8G("tippy",t.Culture)("tippyDisabled",n.disabled()),e.R7$(),e.SpI(" ",t.label," "),e.R7$(),e.vxM(2)}}function G(o,s){if(1&o){const t=e.RV6();e.j41(0,"button",11),e.bIt("mousedown",function(i){e.eBV(t);const a=e.XpG(2);return e.Njj(a.lngButtonMouseDown(i))})("click",function(i){e.eBV(t);const a=e.XpG().$implicit,r=e.XpG();return e.Njj(r.lngButtonClick(i,a))}),e.EFF(1),e.k0s()}if(2&o){const t=e.XpG().$implicit,n=e.XpG();e.Y8G("tippy",t.Culture)("tippyDisabled",n.disabled()),e.R7$(),e.SpI(" ",t.label," ")}}function $(o,s){if(1&o&&e.DNE(0,U,3,4,"button",7)(1,G,2,3,"button",8),2&o){const t=s.$implicit,n=e.XpG();e.vxM(n.current()===t.NameId?0:1)}}let Z=(()=>{class o{constructor(t,n,i,a,r,u,p,A,H){this.languageService=t,this.languageInstanceService=n,this.ngZone=i,this.formConfig=a,this.snackBar=r,this.translate=u,this.userLanguageSvc=p,this.matDialog=A,this.viewContainerRef=H,this.log=(0,_.T)({LanguageSwitcherComponent:o}),this.disabled=(0,e.hFB)(),this.current=(0,e.EWP)(()=>this.formConfig.language().current),this.buttons=C(this.languageService.getAll())}ngAfterViewInit(){this.showShadowsHelper=new R(this.ngZone,this.headerRef.nativeElement,this.leftShadowRef.nativeElement,this.rightShadowRef.nativeElement),this.mouseScrollHelper=new D(this.ngZone,this.headerRef.nativeElement,()=>this.disabled()),this.centerSelectedHelper=new X(this.ngZone,this.headerRef.nativeElement)}ngOnDestroy(){this.centerSelectedHelper?.destroy(),this.mouseScrollHelper?.destroy(),this.showShadowsHelper?.destroy()}lngButtonMouseDown(t){this.centerSelectedHelper.lngButtonDown(t)}lngButtonClick(t,n){const i=this.log.fn("lngButtonClick");if(this.disabled())return this.snackBar.open(this.translate.instant("Message.CantSwitchLanguage"),null,{duration:3e3,verticalPosition:"top"}),i.end("disabled");if(this.centerSelectedHelper.lngButtonClick(t),!this.centerSelectedHelper.stopClickIfMouseMoved()){this.languageInstanceService.setCurrent(this.formConfig.config.formId,n.NameId);const a=this.userLanguageSvc.getUiCode(n.NameId);this.translate.use(a)}}languageSettings(){this.matDialog.open(M,{autoFocus:!1,viewContainerRef:this.viewContainerRef,width:"750px"})}static{this.\u0275fac=function(n){return new(n||o)(e.rXU(L.g),e.rXU(E.A),e.rXU(e.SKi),e.rXU(y.S),e.rXU(O.UG),e.rXU(P.c$),e.rXU(m.L),e.rXU(d.bZ),e.rXU(e.c1b))}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-language-switcher"]],viewQuery:function(n,i){if(1&n&&(e.GBs(x,5),e.GBs(I,5),e.GBs(j,5)),2&n){let a;e.mGM(a=e.lsd())&&(i.headerRef=a.first),e.mGM(a=e.lsd())&&(i.leftShadowRef=a.first),e.mGM(a=e.lsd())&&(i.rightShadowRef=a.first)}},inputs:{disabled:[1,"disabled"]},standalone:!0,features:[e.aNF],decls:9,vars:1,consts:[["leftShadow",""],["rightShadow",""],["scrollable",""],[1,"scrollable__overlay"],[1,"scrollable__overlay--left-shadow"],[1,"scrollable__overlay--right-shadow"],["tippyTranslate","Message.CantSwitchLanguage",1,"scrollable","lang-switch",3,"tippyDisabled"],["mat-flat-button","","color","accent",1,"lang-switch__button","hover-area",3,"tippy","tippyDisabled"],["mat-flat-button","","color","white",1,"lang-switch__button",3,"tippy","tippyDisabled"],["iconPositionEnd","","tippy","Language Settings",1,"hover-only"],["iconPositionEnd","","tippy","Language Settings",1,"hover-only",3,"click"],["mat-flat-button","","color","white",1,"lang-switch__button",3,"mousedown","click","tippy","tippyDisabled"]],template:function(n,i){1&n&&(e.j41(0,"div",3),e.nrm(1,"div",4,0)(3,"div",5,1),e.j41(5,"div",6,2),e.Z7z(7,$,2,1,null,null,e.fX1),e.k0s()()),2&n&&(e.R7$(5),e.Y8G("tippyDisabled",!i.disabled()),e.R7$(2),e.Dyx(i.buttons))},dependencies:[h.Hl,h.$z,c.An,v.e],styles:['.scrollable__overlay[_ngcontent-%COMP%]{position:relative;height:100%}.scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%]{content:"";position:absolute;top:0;display:block;z-index:1;pointer-events:none;height:100%;width:80px;background-image:linear-gradient(90deg,#fff 8px,#fff0)}@media (max-width: 600px){.scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%]{width:24px}}.scrollable__overlay--right-shadow[_ngcontent-%COMP%]{right:0;background-image:linear-gradient(270deg,#fff 8px,#fff0)}.scrollable[_ngcontent-%COMP%]{overflow:hidden;scroll-behavior:smooth;height:100%;touch-action:none}.lang-switch[_ngcontent-%COMP%]{display:flex}.lang-switch__button[_ngcontent-%COMP%]{height:100%;flex-shrink:0;border-radius:0;margin-left:0!important;color:#0006;border-bottom:none;font-size:12px;line-height:54px;padding:0 6px;background-color:#fff!important}.lang-switch__button.mat-accent[_ngcontent-%COMP%]{color:#002753;border-bottom:2px solid #002753;background-color:inherit}.hidden[_ngcontent-%COMP%]{visibility:hidden}.hover-area[_ngcontent-%COMP%]   .hover-only[_ngcontent-%COMP%]{display:none}.hover-area[_ngcontent-%COMP%]:hover   .hover-only[_ngcontent-%COMP%]{display:block}']})}}return o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.04.00/dist/ng-edit/projects_eav-ui_src_app_edit_dialog_header_language-switcher_language-switcher_component_ts.2b540cfe2aec32c5.js.map