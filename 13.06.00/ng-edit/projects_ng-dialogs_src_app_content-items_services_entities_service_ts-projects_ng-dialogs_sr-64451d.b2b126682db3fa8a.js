"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["projects_ng-dialogs_src_app_content-items_services_entities_service_ts-projects_ng-dialogs_sr-64451d"],{8130:(A,E,s)=>{s.d(E,{g:()=>a});var l=s(7638),u=s(8598),n=s(3184),e=s(8784),f=s(2425);let a=(()=>{class d{constructor(m,c,g){this.http=m,this.context=c,this.dnnContext=g}create(m,c){return this.http.post(`app/auto/data/${m}`,c,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(m,c,g){return this.http.post(`app/auto/data/${m}/${c}`,g,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(m,c,g){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(l.Uo+"delete"),{params:{contentType:m,id:c.toString(),appId:this.context.appId.toString(),force:g.toString()}})}}return d.\u0275fac=function(m){return new(m||d)(n.LFG(e.eN),n.LFG(u._),n.LFG(f._y))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac}),d})()},7396:(A,E,s)=>{function l(n){return new Promise((e,f)=>{const a=new FileReader;a.readAsDataURL(n),a.onload=()=>{e(a.result.split(",")[1])},a.onerror=d=>{f(d)}})}function u(n){return new Promise((e,f)=>{const a=new FileReader;a.readAsText(n),a.onload=()=>{e(a.result)},a.onerror=d=>{f(d)}})}s.d(E,{s:()=>l,B:()=>u})},4742:(A,E,s)=>{s.d(E,{Ou:()=>p,Cq:()=>R});var l=s(6484),u=s(4390),n=s(6362),e=s(3184),f=s(1130),a=s(7481),d=s(7714),k=s(9051);function m(o,r){if(1&o&&(e.O4$(),e._UZ(0,"circle",4)),2&o){const t=e.oxw(),i=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}function c(o,r){if(1&o&&(e.O4$(),e._UZ(0,"circle",4)),2&o){const t=e.oxw(),i=e.MAs(1);e.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}const D=(0,f.pj)(class{constructor(o){this._elementRef=o}},"primary"),O=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function L(){return{diameter:100}}});class p extends D{constructor(r,t,i,h,_,S,v,T){super(r),this._document=i,this._diameter=100,this._value=0,this._resizeSubscription=d.w0.EMPTY,this.mode="determinate";const M=p._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),M.has(i.head)||M.set(i.head,new Set([100])),this._noopAnimations="NoopAnimations"===h&&!!_&&!_._forceAnimations,"mat-spinner"===r.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),_&&(_.diameter&&(this.diameter=_.diameter),_.strokeWidth&&(this.strokeWidth=_.strokeWidth)),t.isBrowser&&t.SAFARI&&v&&S&&T&&(this._resizeSubscription=v.change(150).subscribe(()=>{"indeterminate"===this.mode&&T.run(()=>S.markForCheck())}))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,l.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,l.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,l.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,u.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){var t;const i=50*(null!==(t=r.currentScale)&&void 0!==t?t:1);return`${i}% ${i}%`}_attachStyleNode(){const r=this._styleRoot,t=this._diameter,i=p._diameters;let h=i.get(r);if(!h||!h.has(t)){const _=this._document.createElement("style");_.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),_.textContent=this._getAnimationText(),r.appendChild(_),h||(h=new Set,i.set(r,h)),h.add(t)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}p._diameters=new WeakMap,p.\u0275fac=function(r){return new(r||p)(e.Y36(e.SBq),e.Y36(u.t4),e.Y36(n.K0,8),e.Y36(a.Qb,8),e.Y36(O),e.Y36(e.sBO),e.Y36(k.rL),e.Y36(e.R0b))},p.\u0275cmp=e.Xpm({type:p,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(r,t){2&r&&(e.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,t){1&r&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,m,1,11,"circle",2),e.YNc(3,c,1,9,"circle",3),e.qZA()),2&r&&(e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===t.mode),e.uIk("viewBox",t._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},directives:[n.RF,n.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.BQ,n.ez],f.BQ]}),o})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.06.00/ng-edit/projects_ng-dialogs_src_app_content-items_services_entities_service_ts-projects_ng-dialogs_sr-64451d.b2b126682db3fa8a.js.map