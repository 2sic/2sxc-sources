"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b"],{2487:(E,u,i)=>{i.d(u,{Z:()=>p});var e=i(3840),h=i(4601),o=i(6838),n=i(9148);function k(m,v){if(1&m){const r=n.RV6();n.j41(0,"mat-icon",1),n.bIt("click",function(){n.eBV(r);const C=n.XpG();return n.Njj(C.openDialog())}),n.EFF(1,"diamond"),n.k0s()}}let p=(()=>{class m extends o.x{static{this.\u0275fac=(()=>{let r;return function(C){return(r||(r=n.xGo(m)))(C||m)}})()}static{this.\u0275cmp=n.VBU({type:m,selectors:[["app-feature-icon"]],standalone:!0,features:[n.Vt3,n.aNF],decls:1,vars:1,consts:[["tippyTranslate","Features.NotActivated",1,"feature-icon"],["tippyTranslate","Features.NotActivated",1,"feature-icon",3,"click"]],template:function(b,C){1&b&&n.DNE(0,k,2,0,"mat-icon",0),2&b&&n.vxM(C.show()?0:-1)},dependencies:[e.m_,e.An,h.e],encapsulation:2})}}return m})()},8136:(E,u,i)=>{i.d(u,{T:()=>e});const e={AppSyncWithSiteFiles:"AppSyncWithSiteFiles",WysiwygPasteFormatted:"WysiwygPasteFormatted",PasteImageFromClipboard:"PasteImageFromClipboard",EditUiShowNotes:"EditUiShowNotes",EditUiShowMetadataFor:"EditUiShowMetadataFor",NoSponsoredByToSic:"NoSponsoredByToSic",EditUiTranslateWithGoogle:"EditUiTranslateWithGoogle",LightSpeed:"LightSpeedOutputCache",ContentSecurityPolicy:"ContentSecurityPolicy",PermissionsByLanguage:"PermissionsByLanguage",ContentTypeFieldsReuseDefinitions:"ContentTypeFieldsReuseDefinitions",AppExportAssetsAdvanced:"AppExportAssetsAdvanced",PickerUiCheckbox:"PickerUiCheckbox",PickerUiRadio:"PickerUiRadio",PickerSourceCsv:"PickerSourceCsv",PickerSourceAppAssets:"PickerSourceAppAssets",PickerFormulas:"PickerFormulas",PickerUiMoreInfo:"PickerUiMoreInfo"}},5469:(E,u,i)=>{i.d(u,{L:()=>r});var e=i(9148),h=i(3840),o=i(852),n=i(4601),k=i(7993),p=i(6838);const m=["*"];function v(b,C){if(1&b){const s=e.RV6();e.j41(0,"div",1),e.nI1(1,"translate"),e.bIt("click",function(){e.eBV(s);const f=e.XpG();return e.Njj(f.openDialog())}),e.j41(2,"mat-icon"),e.EFF(3),e.k0s(),e.j41(4,"div",2)(5,"div",3),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",4),e.EFF(9),e.nI1(10,"translate"),e.k0s(),e.SdG(11),e.k0s()()}if(2&b){const s=e.XpG();e.Y8G("tippy",e.i5U(1,7,"Features.Tooltip",s.feature())),e.R7$(2),e.ZvI("icon icon-",s.icon(),""),e.R7$(),e.JRh(s.icon()),e.R7$(3),e.JRh(e.bMT(7,10,"Features.FeatureNotActivated")),e.R7$(3),e.JRh(e.bMT(10,12,"Features.ClickToFindOutMore"))}}let r=(()=>{class b extends p.x{constructor(){super(),this.asInfo=(0,e.hFB)(!1),this.icon=(0,k.bo)("icon",()=>this.asInfo()?"info":"warning")}static{this.\u0275fac=function(x){return new(x||b)}}static{this.\u0275cmp=e.VBU({type:b,selectors:[["app-feature-text-info"]],inputs:{asInfo:[1,"asInfo"]},standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:m,decls:1,vars:1,consts:[[1,"feature-text-info",3,"tippy"],[1,"feature-text-info",3,"click","tippy"],[1,"feature-text-info-content"],[1,"feature-text-info-title"],[1,"feature-text-info-subtitle"]],template:function(x,f){1&x&&(e.NAR(),e.DNE(0,v,12,14,"div",0)),2&x&&e.vxM(f.show()?0:-1)},dependencies:[h.m_,h.An,o.h,o.D9,n.e],styles:[".feature-text-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:4px;padding:5px;margin-bottom:10px}.feature-text-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px}.feature-text-info-title[_ngcontent-%COMP%]{font-size:large}.feature-text-info-subtitle[_ngcontent-%COMP%]{font-size:medium}.icon[_ngcontent-%COMP%]{font-size:45px;height:fit-content;width:fit-content}.icon-warning[_ngcontent-%COMP%]{color:red}"]})}}return b})()},5943:(E,u,i)=>{i.d(u,{N:()=>n});var e=i(6474),h=i(9148);let n=(()=>{class k extends e.D{getFeatureDetails(m){return this.http.get(this.apiUrl("admin/feature/details"),{params:{nameId:m}})}static{this.\u0275fac=(()=>{let m;return function(r){return(m||(m=h.xGo(k)))(r||k)}})()}static{this.\u0275prov=h.jDH({token:k,factory:k.\u0275fac})}}return k})()},6838:(E,u,i)=>{i.d(u,{x:()=>T,j:()=>d});var e=i(9148),h=i(7941),o=i(7993),n=i(4175),k=i(3777),p=i(3840),m=i(852),v=i(2938),r=i(4601),b=i(9914),C=i(5081),s=i(5943),x=i(3347);function f(_,c){if(1&_){const a=e.RV6();e.j41(0,"div",1)(1,"div",2),e.EFF(2,"ID:"),e.k0s(),e.j41(3,"div",7)(4,"span",8),e.bIt("click",function(){const l=e.eBV(a),g=e.XpG(2);return e.Njj(g.clipboard.copyToClipboard(l))}),e.EFF(5),e.k0s()()()}if(2&_){const a=c;e.R7$(4),e.Y8G("tippy",a),e.R7$(),e.JRh(a)}}function y(_,c){if(1&_){const a=e.RV6();e.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e.EFF(3),e.k0s()(),e.j41(4,"mat-card-content"),e.nrm(5,"p",0),e.nI1(6,"safeHtml"),e.j41(7,"div",1)(8,"div",2),e.EFF(9),e.nI1(10,"translate"),e.k0s(),e.j41(11,"div",3)(12,"span"),e.EFF(13),e.nI1(14,"translate"),e.k0s()()(),e.DNE(15,f,6,2,"div",1),e.k0s(),e.j41(16,"mat-card-actions",4)(17,"a",5)(18,"mat-icon"),e.EFF(19,"open_in_new"),e.k0s(),e.EFF(20),e.nI1(21,"translate"),e.k0s(),e.j41(22,"button",6),e.bIt("click",function(){e.eBV(a);const l=e.XpG();return e.Njj(l.dialog.close())}),e.EFF(23),e.nI1(24,"translate"),e.k0s()()()}if(2&_){let a;const t=c;e.R7$(3),e.JRh(t.name),e.R7$(2),e.Y8G("innerHtml",e.bMT(6,8,t.description),e.npT),e.R7$(4),e.SpI("",e.bMT(10,10,"Features.Status"),":"),e.R7$(4),e.JRh(e.bMT(14,12,t.isEnabled?"Features.Active":"Features.NotActive")),e.R7$(2),e.vxM((a=t.nameId)?15:-1,a),e.R7$(2),e.Y8G("href",t.link,e.B4B),e.R7$(3),e.SpI(" ",e.bMT(21,14,"Features.FindOutMore")," "),e.R7$(3),e.SpI(" ",e.bMT(24,16,"Features.Close")," ")}}let I=(()=>{class _{#e;constructor(a,t,l){this.dialogData=a,this.dialog=t,this.snackBar=l,this.#e=(0,v.d)(s.N),this.featureDetails=(0,o.KX)("feature",null),this.clipboard=(0,v.d)(C.W),this.#e.getFeatureDetails(this.dialogData).subscribe(g=>this.featureDetails.set(g))}static{this.\u0275fac=function(t){return new(t||_)(e.rXU(h.Vh),e.rXU(h.CP),e.rXU(x.UG))}}static{this.\u0275cmp=e.VBU({type:_,selectors:[["app-feature-info-dialog"]],standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[[3,"innerHtml"],[1,"eav-info-row"],[1,"eav-info-row__label"],[1,"eav-info-row__value"],["align","end"],["target","_blank","mat-raised-button","","color","accent",1,"eav-card-action-button",3,"href"],["mat-raised-button","",1,"eav-card-action-button",3,"click"],[1,"eav-info-row__value","eav_click"],[3,"click","tippy"]],template:function(t,l){if(1&t&&e.DNE(0,y,25,18,"mat-card"),2&t){let g;e.vxM((g=l.featureDetails())?0:-1,g)}},dependencies:[k.Hu,k.RN,k.YY,k.m2,k.MM,k.dh,n.Hl,n.It,n.$z,p.m_,p.An,m.h,m.D9,r.e,b.$],encapsulation:2})}}return _})();var F=i(4824);let T=(()=>{class _{#e;#t;#c;#a;constructor(){this.featureNameId=e.hFB.required(),this.showIf=(0,e.hFB)(!1),this.#e=(0,e.WQX)(h.bZ),this.#t=(0,e.WQX)(e.c1b),this.#c=(0,e.WQX)(e.gRc),this.#a=(0,e.WQX)(F.t),this.feature=(0,o.bo)("feature",()=>this.#a.getCurrent(this.featureNameId())),this.show=(0,o.bo)("show",()=>{const a=this.feature();return null!=a&&this.showIf()==(a?.isEnabled??!1)})}openDialog(){d(this.#e,this.featureNameId(),this.#t,this.#c)}static{this.\u0275fac=function(t){return new(t||_)}}static{this.\u0275dir=e.FsC({type:_,inputs:{featureNameId:[1,"featureNameId"],showIf:[1,"showIf"]}})}}return _})();function d(_,c,a,t){_.open(I,{autoFocus:!1,data:c,viewContainerRef:a,width:"400px"}),t?.markForCheck()}},3758:(E,u,i)=>{i.d(u,{F:()=>C});var e=i(316),h=i(4950),o=i(9148);const n=["*"],k=s=>({"hint-box__short":s});function p(s,x){1&s&&o.eu8(0)}function m(s,x){if(1&s&&(o.j41(0,"mat-hint"),o.DNE(1,p,1,0,"ng-container",2),o.k0s()),2&s){o.XpG();const f=o.sdS(4);o.R7$(),o.Y8G("ngTemplateOutlet",f)}}function v(s,x){1&s&&o.eu8(0)}function r(s,x){if(1&s&&(o.j41(0,"mat-error"),o.DNE(1,v,1,0,"ng-container",2),o.k0s()),2&s){o.XpG();const f=o.sdS(4);o.R7$(),o.Y8G("ngTemplateOutlet",f)}}function b(s,x){1&s&&o.SdG(0)}let C=(()=>{class s{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}static{this.\u0275fac=function(y){return new(y||s)}}static{this.\u0275cmp=o.VBU({type:s,selectors:[["app-field-hint"]],inputs:{isError:"isError"},standalone:!0,features:[o.aNF],ngContentSelectors:n,decls:5,vars:4,consts:[["content",""],[1,"hint-box",3,"click","ngClass"],[4,"ngTemplateOutlet"]],template:function(y,I){if(1&y){const F=o.RV6();o.NAR(),o.j41(0,"div",1),o.bIt("click",function(){return o.eBV(F),o.Njj(I.toggleIsShort())}),o.DNE(1,m,2,1,"mat-hint")(2,r,2,1,"mat-error"),o.k0s(),o.DNE(3,b,1,0,"ng-template",null,0,o.C5r)}if(2&y){let F;o.Y8G("ngClass",o.eq3(2,k,I.isShort)),o.R7$(),o.vxM(!1===(F=I.isError)?1:!0===F?2:-1)}},dependencies:[h.RG,h.MV,h.TL,e.YU,e.T3],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}}return s})()},9333:(E,u,i)=>{i.d(u,{c:()=>o});var e=i(4435),h=i(9148);let o=(()=>{class n{constructor(){this.log=(0,e.T)({ClickStopPropagationDirective:n}),this.log.a("constructor")}onClick(p){this.log.a("onClick",{event:p}),p.stopPropagation()}static{this.\u0275fac=function(m){return new(m||n)}}static{this.\u0275dir=h.FsC({type:n,selectors:[["","appClickStopPropagation",""]],hostBindings:function(m,v){1&m&&h.bIt("click",function(b){return v.onClick(b)})},standalone:!0})}}return n})()},7024:(E,u,i)=>{i.d(u,{So:()=>f,g7:()=>T});var e=i(9148),h=i(4456),o=i(5060);const n=["input"],k=["label"],p=["*"],m=new e.nKC("mat-checkbox-default-options",{providedIn:"root",factory:v});function v(){return{color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1}}var r=function(d){return d[d.Init=0]="Init",d[d.Checked=1]="Checked",d[d.Unchecked=2]="Unchecked",d[d.Indeterminate=3]="Indeterminate",d}(r||{});const b={provide:h.kq,useExisting:(0,e.Rfq)(()=>f),multi:!0};class C{}let s=0;const x=v();let f=(()=>{class d{focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(c){const a=new C;return a.source=this,a.checked=c,a}_getAnimationTargetElement(){return this._inputElement?.nativeElement}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(c,a,t,l,g,M){this._elementRef=c,this._changeDetectorRef=a,this._ngZone=t,this._animationMode=g,this._options=M,this._animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"},this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.bkB,this.indeterminateChange=new e.bkB,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=r.Init,this._controlValueAccessorChangeFn=()=>{},this._validatorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||x,this.color=this._options.color||x.color,this.tabIndex=parseInt(l)||0,this.id=this._uniqueId="mat-mdc-checkbox-"+ ++s,this.disabledInteractive=M?.disabledInteractive??!1}ngOnChanges(c){c.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(c){c!=this.checked&&(this._checked=c,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(c){c!==this.disabled&&(this._disabled=c,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(c){const a=c!=this._indeterminate;this._indeterminate=c,a&&(this._transitionCheckState(this._indeterminate?r.Indeterminate:this.checked?r.Checked:r.Unchecked),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(c){this.checked=!!c}registerOnChange(c){this._controlValueAccessorChangeFn=c}registerOnTouched(c){this._onTouched=c}setDisabledState(c){this.disabled=c}validate(c){return this.required&&!0!==c.value?{required:!0}:null}registerOnValidatorChange(c){this._validatorChangeFn=c}_transitionCheckState(c){let a=this._currentCheckState,t=this._getAnimationTargetElement();if(a!==c&&t&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,c),this._currentCheckState=c,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);const l=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(l)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const c=this._options?.clickAction;this.disabled||"noop"===c?(this.disabled&&this.disabledInteractive||!this.disabled&&"noop"===c)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==c&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?r.Checked:r.Unchecked),this._emitChangeEvent())}_onInteractionEvent(c){c.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(c,a){if("NoopAnimations"===this._animationMode)return"";switch(c){case r.Init:if(a===r.Checked)return this._animationClasses.uncheckedToChecked;if(a==r.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case r.Unchecked:return a===r.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case r.Checked:return a===r.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case r.Indeterminate:return a===r.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(c){const a=this._inputElement;a&&(a.nativeElement.indeterminate=c)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(c){c.target&&this._labelElement.nativeElement.contains(c.target)&&c.stopPropagation()}static{this.\u0275fac=function(a){return new(a||d)(e.rXU(e.aKT),e.rXU(e.gRc),e.rXU(e.SKi),e.kS0("tabindex"),e.rXU(e.bc$,8),e.rXU(m,8))}}static{this.\u0275cmp=e.VBU({type:d,selectors:[["mat-checkbox"]],viewQuery:function(a,t){if(1&a&&(e.GBs(n,5),e.GBs(k,5),e.GBs(o.r6,5)),2&a){let l;e.mGM(l=e.lsd())&&(t._inputElement=l.first),e.mGM(l=e.lsd())&&(t._labelElement=l.first),e.mGM(l=e.lsd())&&(t.ripple=l.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(a,t){2&a&&(e.Mr5("id",t.id),e.BMQ("tabindex",null)("aria-label",null)("aria-labelledby",null),e.HbH(t.color?"mat-"+t.color:"mat-accent"),e.AVh("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mdc-checkbox--disabled",t.disabled)("mat-mdc-checkbox-disabled",t.disabled)("mat-mdc-checkbox-checked",t.checked)("mat-mdc-checkbox-disabled-interactive",t.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],id:"id",required:[2,"required","required",e.L39],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",e.L39],tabIndex:[2,"tabIndex","tabIndex",c=>null==c?void 0:(0,e.Udg)(c)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",e.L39],checked:[2,"checked","checked",e.L39],disabled:[2,"disabled","disabled",e.L39],indeterminate:[2,"indeterminate","indeterminate",e.L39]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],standalone:!0,features:[e.Jv_([b,{provide:h.cz,useExisting:d,multi:!0}]),e.GFd,e.OA$,e.aNF],ngContentSelectors:p,decls:15,vars:20,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(a,t){if(1&a){const l=e.RV6();e.NAR(),e.j41(0,"div",3),e.bIt("click",function(M){return e.eBV(l),e.Njj(t._preventBubblingFromLabel(M))}),e.j41(1,"div",4,0)(3,"div",5),e.bIt("click",function(){return e.eBV(l),e.Njj(t._onTouchTargetClick())}),e.k0s(),e.j41(4,"input",6,1),e.bIt("blur",function(){return e.eBV(l),e.Njj(t._onBlur())})("click",function(){return e.eBV(l),e.Njj(t._onInputClick())})("change",function(M){return e.eBV(l),e.Njj(t._onInteractionEvent(M))}),e.k0s(),e.nrm(6,"div",7),e.j41(7,"div",8),e.qSk(),e.j41(8,"svg",9),e.nrm(9,"path",10),e.k0s(),e.joV(),e.nrm(10,"div",11),e.k0s(),e.nrm(11,"div",12),e.k0s(),e.j41(12,"label",13,2),e.SdG(14),e.k0s()()}if(2&a){const l=e.sdS(2);e.Y8G("labelPosition",t.labelPosition),e.R7$(4),e.AVh("mdc-checkbox--selected",t.checked),e.Y8G("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled&&!t.disabledInteractive)("id",t.inputId)("required",t.required)("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex),e.BMQ("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-checked",t.indeterminate?"mixed":null)("aria-disabled",!(!t.disabled||!t.disabledInteractive)||null)("name",t.name)("value",t.value),e.R7$(7),e.Y8G("matRippleTrigger",l)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),e.R7$(),e.Y8G("for",t.inputId)}},dependencies:[o.r6,o.tO],styles:['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}}return d})(),T=(()=>{class d{static{this.\u0275fac=function(a){return new(a||d)}}static{this.\u0275mod=e.$C({type:d})}static{this.\u0275inj=e.G2t({imports:[f,o.yE,o.yE]})}}return d})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.02.00/dist/ng-edit/default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b.fa6ea4096674820f.js.map