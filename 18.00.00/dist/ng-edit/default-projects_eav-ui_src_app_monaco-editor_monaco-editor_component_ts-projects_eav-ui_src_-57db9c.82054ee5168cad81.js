"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_monaco-editor_monaco-editor_component_ts-projects_eav-ui_src_-57db9c"],{8801:(y,f,g)=>{g.d(f,{K:()=>u});var e=g(8559);const v="area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr".split(",").map(d=>d.trim().toLocaleLowerCase());class h{constructor(r,t,s,c,o,n,p){this.monaco=r,this.filename=t,this.snippets=n,this.tooltips=p,this.globalCache=this.createGlobalCache(r),this.defineThemes(this.globalCache,this.monaco),this.cachedValue=s,this.editorInstance=this.createInstance(this.monaco,t,s,c,o),this.completionItemProviders=this.addSnippets(this.monaco,this.editorInstance),this.resizeObserver=this.createResizeObserver(c,this.editorInstance),this.restoreState(this.globalCache,this.editorInstance),this.addEvents(this.editorInstance)}destroy(){this.saveState(this.globalCache,this.editorInstance),this.resizeObserver.disconnect(),this.completionItemProviders.forEach(r=>r.dispose()),this.jsTypingsLib?.dispose(),this.editorInstance.getModel().dispose(),this.editorInstance.dispose()}updateValue(r){this.cachedValue!==r&&(this.cachedValue=r,this.editorInstance.getModel().setValue(r))}focus(){this.editorInstance.focus()}onValueChange(r){this.valueChangedCallback=r}onFocus(r){this.focusedCallback=r}onBlur(r){this.blurredCallback=r}insertSnippet(r){this.editorInstance.getContribution("snippetController2").insert(r)}setSnippets(r){this.snippets=r}setTooltips(r){this.tooltips=r}setJsonSchema(r){const t=this.editorInstance.getModel().uri.toString(),s=this.monaco.languages.json.jsonDefaults.diagnosticsOptions,c=s.schemas?.some(p=>p.fileMatch[0]===t)??!1,o="link"===r?.type?{uri:r.value,fileMatch:[t]}:"raw"===r?.type?{uri:t,fileMatch:[t],schema:JSON.parse(r.value)}:void 0;if(!c&&!o)return;const n={...s,enableSchemaRequest:!0,schemas:c&&!o?s.schemas.filter(p=>p.fileMatch[0]!==t):c?s.schemas.map(p=>p.fileMatch[0]===t?o:p):[...s.schemas??[],o]};this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(n)}setJsonComments(r){if(!r)return;const t={...this.monaco.languages.json.jsonDefaults.diagnosticsOptions,comments:r};this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(t)}setJsDiagnostics(r){if(!r)return;const t={...this.monaco.languages.typescript.javascriptDefaults.getDiagnosticsOptions(),...r};this.monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(t)}setJsTypings(r){r?this.jsTypingsLib=this.monaco.languages.typescript.javascriptDefaults.addExtraLib(r,`js-typings-${this.filename}`):this.jsTypingsLib?.dispose()}createGlobalCache(r){return null==r._2sxc&&(r._2sxc={themesAreDefined:!1,savedStates:{}}),r._2sxc}defineThemes(r,t){r.themesAreDefined||(r.themesAreDefined=!0,t.editor.defineTheme("2sxc-dark",{base:"vs-dark",inherit:!0,rules:[{token:"metatag.cs",foreground:"ffff00"}],colors:{}}))}createInstance(r,t,s,c,o){const n=r.editor.create(c,o),p=r.Uri.file(t),i=r.editor.createModel(s,void 0,p);return n.setModel(i),n}saveState(r,t){const s=t.getModel().uri.toString(),c=JSON.stringify(t.saveViewState());null==r.savedStates[s]?r.savedStates[s]={viewState:c}:r.savedStates[s].viewState=c}restoreState(r,t){const s=t.getModel().uri.toString(),c=r.savedStates[s];if(null==c)return;const o=JSON.parse(c.viewState);t.restoreViewState(o)}addSnippets(r,t){return[r.languages.registerCompletionItemProvider(t.getModel().getLanguageId(),{triggerCharacters:[">"],provideCompletionItems:(c,o)=>{if(t.getModel()!==c)return{suggestions:[]};const n=c.getValueInRange({startLineNumber:o.lineNumber,startColumn:1,endLineNumber:o.lineNumber,endColumn:o.column});if(">"!==n[n.length-1])return{suggestions:[]};const i=n.lastIndexOf("<");if(-1===i)return{suggestions:[]};const l=n.substring(i);let a=0;if(Array.from(l).forEach(k=>{'"'===k&&a++}),a%2!=0)return{suggestions:[]};if(l.startsWith("</"))return{suggestions:[]};if(l.indexOf(">")!==l.length-1)return{suggestions:[]};let _=l.indexOf(" ");if(-1===_&&(_=l.indexOf(">")),-1===_)return{suggestions:[]};const b=l.substring(1,_);return b?v.includes(b.toLocaleLowerCase())?{suggestions:[]}:/[a-zA-Z0-9_-]/.test(b)?{suggestions:[{label:`</${b}>`,kind:r.languages.CompletionItemKind.Snippet,insertText:`$0</${b}>`,insertTextRules:r.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:{startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:o.column,endColumn:o.column}}]}:{suggestions:[]}:{suggestions:[]}}}),r.languages.registerCompletionItemProvider(t.getModel().getLanguageId(),{provideCompletionItems:(c,o)=>{if(null==this.snippets||t.getModel()!==c)return{suggestions:[]};const n=c.getWordUntilPosition(o);return{suggestions:this.snippets.map(i=>i.content?{label:i.name,kind:r.languages.CompletionItemKind.Snippet,documentation:`${i.title??""}\n${i.help??""}\n${i.links??""}`,insertText:i.content,insertTextRules:r.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:{startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:n.startColumn,endColumn:n.endColumn}}:void 0).filter(i=>!!i)}}}),r.languages.registerHoverProvider(t.getModel().getLanguageId(),{provideHover:(c,o)=>{if(null==this.tooltips||t.getModel()!==c)return;const n=c.getWordAtPosition(o);if(!n)return;const p=this.tooltips.find(i=>i.Term===n.word);return p?{contents:p.Help.map(i=>({value:i})),range:{startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:n.startColumn,endColumn:n.endColumn}}:void 0}})]}createResizeObserver(r,t){const s=new ResizeObserver(()=>{t.layout()});return s.observe(r),s}addEvents(r){r.getModel().onDidChangeContent(()=>{const t=r.getModel().getValue();t!==this.cachedValue&&(this.cachedValue=t,this.valueChangedCallback?.(t))}),r.onDidFocusEditorWidget(()=>{this.focusedCallback?.()}),r.onDidBlurEditorWidget(()=>{this.blurredCallback?.()})}}const C=["editor"];let u=(()=>{class d{constructor(){this.autoFocus=!1,this.valueChanged=new e.bkB,this.focused=new e.bkB,this.blurred=new e.bkB}ngAfterViewInit(){window.require.config({paths:{vs:["https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.46.0/min/vs"]}}),window.require(["vs/editor/editor.main"],t=>{this.monaco=t,this.createEditor(this.autoFocus)})}ngOnChanges(t){null!=t.filename&&null!=this.monacoInstance&&(this.monacoInstance.destroy(),this.createEditor(!0)),null!=t.value&&this.monacoInstance?.updateValue(this.value),null!=t.jsonSchema&&this.monacoInstance?.setJsonSchema(this.jsonSchema),null!=t.jsonComments&&this.monacoInstance?.setJsonComments(this.jsonComments),null!=t.snippets&&this.monacoInstance?.setSnippets(this.snippets),null!=t.tooltips&&this.monacoInstance?.setTooltips(this.tooltips),null!=t.jsTypings&&this.monacoInstance?.setJsTypings(this.jsTypings),null!=t.jsDiagnostics&&this.monacoInstance?.setJsDiagnostics(this.jsDiagnostics)}insertSnippet(t){this.monacoInstance?.insertSnippet(t),this.monacoInstance?.focus()}ngOnDestroy(){this.monacoInstance?.destroy()}createEditor(t){this.monacoInstance=new h(this.monaco,this.filename,this.value,this.editorRef.nativeElement,this.options,this.snippets,this.tooltips),this.monacoInstance.setJsonSchema(this.jsonSchema),this.monacoInstance.setJsonComments(this.jsonComments),this.monacoInstance.setJsTypings(this.jsTypings),this.monacoInstance.setJsDiagnostics(this.jsDiagnostics),this.monacoInstance.onValueChange(s=>{this.valueChanged.emit(s)}),this.monacoInstance.onFocus(()=>{this.focused.emit()}),this.monacoInstance.onBlur(()=>{this.blurred.emit()}),t&&this.monacoInstance.focus()}static#e=this.\u0275fac=function(s){return new(s||d)};static#r=this.\u0275cmp=e.VBU({type:d,selectors:[["app-monaco-editor"]],viewQuery:function(s,c){if(1&s&&e.GBs(C,5),2&s){let o;e.mGM(o=e.lsd())&&(c.editorRef=o.first)}},inputs:{filename:"filename",value:"value",snippets:"snippets",tooltips:"tooltips",options:"options",jsonSchema:"jsonSchema",jsonComments:"jsonComments",jsTypings:"jsTypings",jsDiagnostics:"jsDiagnostics",autoFocus:"autoFocus"},outputs:{valueChanged:"valueChanged",focused:"focused",blurred:"blurred"},standalone:!0,features:[e.OA$,e.aNF],decls:2,vars:0,consts:[["editor",""],[1,"editor"]],template:function(s,c){1&s&&e.nrm(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:hidden}.editor[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}"]})}return d})()},5699:(y,f,g)=>{g.d(f,{V:()=>v});var e=g(4902),m=g(8559);let v=(()=>{class h{constructor(u){this.globalConfigService=u}onClick(u){(navigator.platform.match("Mac")?u.metaKey:u.ctrlKey)&&u.shiftKey&&u.altKey&&(this.globalConfigService.toggleDebugEnabled(),window.getSelection().removeAllRanges())}static#e=this.\u0275fac=function(d){return new(d||h)(m.rXU(e.Bj))};static#r=this.\u0275dir=m.FsC({type:h,selectors:[["","appToggleDebug",""]],hostBindings:function(d,r){1&d&&m.bIt("click",function(s){return r.onClick(s)})},standalone:!0})}return h})()},9914:(y,f,g)=>{g.d(f,{$:()=>v});var e=g(8559),m=g(436);let v=(()=>{class h{constructor(u){this.sanitizer=u}transform(u){return this.sanitizer.bypassSecurityTrustHtml(u)}static#e=this.\u0275fac=function(d){return new(d||h)(e.rXU(m.up,16))};static#r=this.\u0275pipe=e.EJ8({name:"safeHtml",type:h,pure:!0,standalone:!0})}return h})()},1134:(y,f,g)=>{g.d(f,{D6:()=>o,LG:()=>s});var e=g(8559),m=g(316),v=g(5060);const h=["determinateSpinner"];function C(n,p){if(1&n&&(e.qSk(),e.j41(0,"svg",11),e.nrm(1,"circle",12),e.k0s()),2&n){const i=e.XpG();e.BMQ("viewBox",i._viewBox()),e.R7$(),e.xc7("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),e.BMQ("r",i._circleRadius())}}const u=new e.nKC("mat-progress-spinner-default-options",{providedIn:"root",factory:function d(){return{diameter:r}}}),r=100;let s=(()=>{class n{get color(){return this._color||this._defaultColor}set color(i){this._color=i}constructor(i,l,a){this._elementRef=i,this._defaultColor="primary",this._value=0,this._diameter=r,this._noopAnimations="NoopAnimations"===l&&!!a&&!a._forceAnimations,this.mode="mat-spinner"===i.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",a&&(a.color&&(this.color=this._defaultColor=a.color),a.diameter&&(this.diameter=a.diameter),a.strokeWidth&&(this.strokeWidth=a.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,i||0))}get diameter(){return this._diameter}set diameter(i){this._diameter=i||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=i||0}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#e=this.\u0275fac=function(l){return new(l||n)(e.rXU(e.aKT),e.rXU(e.bc$,8),e.rXU(u))};static#r=this.\u0275cmp=e.VBU({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(l,a){if(1&l&&e.GBs(h,5),2&l){let _;e.mGM(_=e.lsd())&&(a._determinateCircle=_.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(l,a){2&l&&(e.BMQ("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===a.mode?a.value:null)("mode",a.mode),e.HbH("mat-"+a.color),e.xc7("width",a.diameter,"px")("height",a.diameter,"px")("--mdc-circular-progress-size",a.diameter+"px")("--mdc-circular-progress-active-indicator-width",a.diameter+"px"),e.AVh("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===a.mode))},inputs:{color:"color",mode:"mode",value:[e.Mj6.HasDecoratorInputTransform,"value","value",e.Udg],diameter:[e.Mj6.HasDecoratorInputTransform,"diameter","diameter",e.Udg],strokeWidth:[e.Mj6.HasDecoratorInputTransform,"strokeWidth","strokeWidth",e.Udg]},exportAs:["matProgressSpinner"],standalone:!0,features:[e.GFd,e.aNF],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(l,a){if(1&l&&(e.DNE(0,C,2,8,"ng-template",null,0,e.C5r),e.j41(2,"div",2,1),e.qSk(),e.j41(4,"svg",3),e.nrm(5,"circle",4),e.k0s()(),e.joV(),e.j41(6,"div",5)(7,"div",6)(8,"div",7),e.eu8(9,8),e.k0s(),e.j41(10,"div",9),e.eu8(11,8),e.k0s(),e.j41(12,"div",10),e.eu8(13,8),e.k0s()()()),2&l){const _=e.sdS(1);e.R7$(4),e.BMQ("viewBox",a._viewBox()),e.R7$(),e.xc7("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),e.BMQ("r",a._circleRadius()),e.R7$(4),e.Y8G("ngTemplateOutlet",_),e.R7$(2),e.Y8G("ngTemplateOutlet",_),e.R7$(2),e.Y8G("ngTemplateOutlet",_)}},dependencies:[m.T3],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return n})(),o=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#r=this.\u0275mod=e.$C({type:n});static#t=this.\u0275inj=e.G2t({imports:[m.MD,v.yE]})}return n})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.00/dist/ng-edit/default-projects_eav-ui_src_app_monaco-editor_monaco-editor_component_ts-projects_eav-ui_src_-57db9c.82054ee5168cad81.js.map