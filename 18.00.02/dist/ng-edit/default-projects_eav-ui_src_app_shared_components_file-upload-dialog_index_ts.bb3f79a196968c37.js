"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"],{3176:(k,v,r)=>{r.d(v,{$:()=>h});var e=r(7092),m=r(7580);let h=(()=>{class a{constructor(){this.subscriptions=new e.yU}ngOnDestroy(){this.subscriptions.unsubscribe()}static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275cmp=m.VBU({type:a,selectors:[["app-base-component"]],decls:0,vars:0,template:function(_,o){},encapsulation:2})}return a})()},3550:(k,v,r)=>{r.d(v,{jj:()=>J,G1:()=>C,HL:()=>u});var e=r(7580),m=r(7941),h=r(8537),a=r(1567),T=r(271),d=r(8764),_=r(6647),o=r(1318),p=r(9452),g=r(4334),b=r(3176);const C={Warning:0,Success:1,Error:2},u={App:0,AppPart:1,ContentType:2,ContentItem:3,Query:4,View:5};var O=r(2987),l=r(8873),y=r(4147),n=r(316),E=r(1134),R=r(9914),S=r(4575),x=r(4175),F=r(5437),w=r(3347),A=r(436);const B=["installerWindow"],j=(s,f,t)=>({"sxc-message-warning":s,"sxc-message-success":f,"sxc-message-error":t});function I(s,f){1&s&&e.nrm(0,"mat-spinner",6)}function $(s,f){1&s&&(e.j41(0,"div"),e.EFF(1,"Select or drop file"),e.k0s())}function W(s,f){if(1&s&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&s){const t=f.$implicit;e.R7$(),e.JRh(t.name)}}function G(s,f){if(1&s){const t=e.RV6();e.j41(0,"button",14),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.toggleShowAppCatalog())}),e.EFF(1," Get recommended Apps from Catalog "),e.k0s()}if(2&s){const t=e.XpG();e.Y8G("disabled",t.uploading())}}function L(s,f){1&s&&(e.j41(0,"div",15),e.EFF(1," Upload succeeded. See the messages below for more information. "),e.k0s())}function N(s,f){1&s&&(e.j41(0,"div",16),e.EFF(1," Upload failed. See the messages below for more information. "),e.k0s())}function K(s,f){if(1&s&&(e.j41(0,"div",17),e.EFF(1),e.k0s()),2&s){const t=f.$implicit,c=e.XpG(2);e.Y8G("ngClass",e.sMw(2,j,t.MessageType===c.FileUploadMessageTypes.Warning,t.MessageType===c.FileUploadMessageTypes.Success,t.MessageType===c.FileUploadMessageTypes.Error)),e.R7$(),e.SpI(" ",t.Text," ")}}function z(s,f){if(1&s&&(e.j41(0,"div",11),e.DNE(1,L,2,0,"div",15)(2,N,2,0,"div",16),e.Z7z(3,K,2,6,"div",17,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.vxM(1,t.result().Success?1:-1),e.R7$(),e.vxM(2,t.result().Success?-1:2),e.R7$(),e.Dyx(t.result().Messages)}}function X(s,f){if(1&s&&e.nrm(0,"iframe",18,1),2&s){const t=e.XpG(2);e.Y8G("src",t.remoteInstallerUrl,e.f$h)}}function H(s,f){if(1&s&&(e.j41(0,"div",19),e.nrm(1,"mat-progress-spinner",20),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&s){const t=e.XpG(2);e.R7$(),e.Y8G("mode","indeterminate"),e.R7$(2),e.SpI("Installing ",null==t.currentPackage?null:t.currentPackage.displayName,"..")}}function V(s,f){if(1&s&&e.DNE(0,X,2,1,"iframe",18)(1,H,4,2,"div",19),2&s){const t=e.XpG();e.vxM(0,t.ready?0:-1),e.R7$(),e.vxM(1,t.showProgress?1:-1)}}function Y(s,f){if(1&s){const t=e.RV6();e.j41(0,"button",21),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.closeDialog())}),e.EFF(1,"Cancel"),e.k0s(),e.j41(2,"button",22),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.upload())}),e.EFF(3," Upload "),e.k0s()}if(2&s){const t=e.XpG();e.R7$(2),e.Y8G("disabled",!t.files().length||t.uploading()||!!t.result())}}function Q(s,f){if(1&s){const t=e.RV6();e.j41(0,"button",23),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.closeDialog(!0))}),e.EFF(1,"Close"),e.k0s()}}let J=(()=>{class s extends b.${constructor(t,c,i,D,P,U){super(),this.dialogData=t,this.dialogRef=c,this.snackBar=i,this.sanitizer=D,this.context=P,this.changeDetectorRef=U,this.hostClass="dialog-component",this.uploading=(0,e.vPA)(!1),this.showAppCatalog=(0,e.vPA)(!1),this.result=(0,e.vPA)(void 0),this.files=(0,e.vPA)([]),this.FileUploadMessageTypes=C,this.UploadTypes=u,this.showProgress=!1,this.remoteInstallerUrl="",this.ready=!1,this.installerService=(0,F.d)(y.e),this.installSettingsService=(0,F.d)(O.n),this.alreadyProcessing=!1,this.messages$=(0,h.R)(window,"message").pipe((0,a.p)(()=>!this.alreadyProcessing),(0,a.p)(M=>"https://2sxc.org"===M.origin),(0,T.T)(M=>{try{return JSON.parse(M.data)}catch(Z){return void console.error("error procesing message. Message was "+M.data,Z)}}),(0,a.p)(M=>M&&Number(M.moduleId)===this.context.moduleId)),(0,e.QZP)(()=>{this.files(),null!=this.result()&&(console.log("result changed"),this.result.set(void 0))}),this.subscriptions.add(this.installSettingsService.settings$.subscribe(M=>{this.settings=M,this.remoteInstallerUrl=this.sanitizer.bypassSecurityTrustResourceUrl(M.remoteUrl),this.ready=!0}))}ngOnInit(){null!=this.dialogData.files&&this.filesDropped(this.dialogData.files),this.installSettingsService.loadGettingStarted(!1),this.subscriptions.add(this.messages$.pipe((0,a.p)(t=>"specs"===t.action),(0,d.M)(()=>{const t=this.installerWindow.nativeElement,c={action:"specs",data:{installedApps:this.settings.installedApps,rules:this.settings.installedApps.map(D=>({target:"guid",appGuid:D.guid,mode:"f",url:""}))}},i=JSON.stringify(c);t.contentWindow.postMessage(i,"*"),console.log("debug: just sent specs message:"+i,c,t)})).subscribe()),this.subscriptions.add(this.messages$.pipe((0,a.p)(t=>"install"===t.action),(0,T.T)(t=>Object.values(t.packages)),(0,a.p)(t=>{const i=`Do you want to install these packages?\n\n${t.reduce((D,P)=>`${D} - ${P.displayName}\n`,"")}\nThis takes about 10 seconds per package. Don't reload the page while it's installing.`;return confirm(i)}),(0,_.n)(t=>(this.alreadyProcessing=!0,this.showProgress=!0,this.changeDetectorRef.detectChanges(),this.installerService.installPackages(t,c=>this.currentPackage=c))),(0,d.M)(()=>{this.showProgress=!1,this.changeDetectorRef.detectChanges(),alert("Installation complete \u{1f44d}"),window.top.location.reload()}),(0,o.W)(t=>(console.error("Error: ",t),this.showProgress=!1,this.alreadyProcessing=!1,this.changeDetectorRef.detectChanges(),alert(`An error occurred: Package ${this.currentPackage.displayName}\n\n${t.error?.Message??t.error?.message??""}\n\n${t.message}\n\nPlease try again later or check how to manually install content-templates: https://azing.org/2sxc/r/0O4OymoA`),(0,p.of)(t)))).subscribe())}ngOnDestroy(){super.ngOnDestroy()}closeDialog(t){this.dialogRef.close(t)}filesDropped(t){this.setFiles(t),this.upload()}filesChanged(t){const i=Array.from(t.target.files);this.setFiles(i)}upload(){this.uploading.set(!0),this.subscriptions.add(this.dialogData.upload$(this.files()).pipe((0,g.s)(1)).subscribe({next:t=>{this.uploading.set(!1),this.result.set(t)},error:()=>{this.uploading.set(!1),this.result.set(void 0),this.snackBar.open("Upload failed. Please check console for more information",void 0,{duration:3e3})}}))}toggleShowAppCatalog(){this.showAppCatalog.set(!this.showAppCatalog())}setFiles(t){this.dialogData.multiple||(t=t.slice(0,1)),this.files.set(t)}static#e=this.\u0275fac=function(c){return new(c||s)(e.rXU(m.Vh),e.rXU(m.CP),e.rXU(w.UG),e.rXU(A.up),e.rXU(l.o),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-file-upload-dialog"]],viewQuery:function(c,i){if(1&c&&e.GBs(B,5),2&c){let D;e.mGM(D=e.lsd())&&(i.installerWindow=D.first)}},hostVars:1,hostBindings:function(c,i){2&c&&e.Mr5("className",i.hostClass)},inputs:{uploadType:"uploadType"},standalone:!0,features:[e.Vt3,e.aNF],decls:21,vars:15,consts:[["fileInput",""],["installerWindow",""],["appDragAndDrop","",1,"eav-dialog",3,"filesDropped","allowedFileTypes"],[1,"eav-dialog-header"],[1,"eav-dialog-header__title",3,"innerHtml"],[1,"eav-dialog-content"],["mode","indeterminate","diameter","20","color","accent"],[3,"innerHtml"],["mat-raised-button","","tippy","Open file browser",3,"click","disabled"],["type","file","multiple","",1,"hide",3,"change"],["mat-raised-button","","tippy","Open app catalog",1,"eav-app-catalog-button",3,"disabled"],[1,"eav-result-container"],["align","end"],["mat-raised-button","","color","accent"],["mat-raised-button","","tippy","Open app catalog",1,"eav-app-catalog-button",3,"click","disabled"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],[1,"eav-app-catalog-iframe",3,"src"],[1,"eav-progress"],[3,"mode"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-raised-button","","color","accent",3,"click"]],template:function(c,i){if(1&c){const D=e.RV6();e.j41(0,"div",2),e.bIt("filesDropped",function(U){return e.eBV(D),e.Njj(i.filesDropped(U))}),e.j41(1,"div",3),e.nrm(2,"div",4),e.nI1(3,"safeHtml"),e.k0s(),e.j41(4,"div",5),e.DNE(5,I,1,0,"mat-spinner",6),e.nrm(6,"p",7),e.nI1(7,"safeHtml"),e.j41(8,"div")(9,"button",8),e.bIt("click",function(){e.eBV(D);const U=e.sdS(14);return e.Njj(U.click())}),e.DNE(10,$,2,0,"div"),e.Z7z(11,W,2,1,"div",null,e.fX1),e.k0s(),e.j41(13,"input",9,0),e.bIt("change",function(U){return e.eBV(D),e.Njj(i.filesChanged(U))}),e.k0s(),e.DNE(15,G,2,1,"button",10),e.k0s(),e.DNE(16,z,5,2,"div",11)(17,V,2,2),e.k0s(),e.j41(18,"mat-dialog-actions",12),e.DNE(19,Y,4,1)(20,Q,2,0,"button",13),e.k0s()()}if(2&c){let D,P;e.Y8G("allowedFileTypes",i.dialogData.allowedFileTypes),e.R7$(2),e.Y8G("innerHtml",e.bMT(3,11,i.dialogData.title),e.npT),e.R7$(3),e.vxM(5,i.uploading()?5:-1),e.R7$(),e.Y8G("innerHtml",e.bMT(7,13,i.dialogData.description),e.npT),e.R7$(3),e.Y8G("disabled",i.uploading()),e.R7$(),e.vxM(10,i.files().length?-1:10),e.R7$(),e.Dyx(i.files()),e.R7$(4),e.vxM(15,i.uploadType==i.UploadTypes.App?15:-1),e.R7$(),e.vxM(16,i.result()?16:-1),e.R7$(),e.vxM(17,i.uploadType==i.UploadTypes.App&&i.showAppCatalog()?17:-1),e.R7$(2),e.vxM(19,null!=(D=i.result())&&D.Success?-1:19),e.R7$(),e.vxM(20,null!=(P=i.result())&&P.Success?20:-1)}},dependencies:[n.YU,m.hM,m.E7,E.D6,E.LG,R.$,S.S,x.Hl,x.$z],styles:[".eav-result-container[_ngcontent-%COMP%]{margin-top:16px}.eav-app-catalog-button[_ngcontent-%COMP%]{margin-left:12px}.eav-app-catalog-iframe[_ngcontent-%COMP%]{margin-top:16px;width:100%;height:500px;border:none}.eav-progress[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;width:100%;background:#fffc;display:flex;justify-content:center;flex-direction:column;text-align:center}.eav-progress[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%]{margin:0 auto}.eav-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:48px}"]})}return s})()},3140:(k,v,r)=>{r.d(v,{J:()=>h});var e=r(7092),m=r(7580);let h=(()=>{class a{constructor(){this.subscriptions=new e.yU}ngOnDestroy(){this.subscriptions.unsubscribe()}static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275dir=m.FsC({type:a})}return a})()},4575:(k,v,r)=>{r.d(v,{S:()=>T});var e=r(7580),m=r(8537),h=r(3140),a=r(3347);let T=(()=>{class d extends h.J{constructor(o,p,g){super(),this.zone=p,this.snackBar=g,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new e.bkB,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=o.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscriptions.add((0,m.R)(this.element,"dragover").subscribe(o=>{o.preventDefault(),o.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscriptions.add((0,m.R)(this.element,"dragleave").subscribe(o=>{o.preventDefault(),o.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(o){o.preventDefault(),o.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let g=Array.from(o.dataTransfer.files);g=this.filterTypes(g,this.allowedFileTypes),g.length>0&&this.filesDropped.emit(g)}clearTimeouts(){for(const o of this.timeouts)clearTimeout(o);this.timeouts=[]}filterTypes(o,p){if(""===p)return o;const g=p.split(",").map(C=>C.toLocaleLowerCase()),b=o.filter(C=>{const u=C.name.lastIndexOf(".");if(u<=0)return!1;const O=C.name.substring(u+1).toLocaleLowerCase();return g.includes(O)});if(o.length!==b.length){const C=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(b.length?"Some files were filtered out. This drop location only accepts file types: "+C:"This drop location only accepts file types: "+C,null,{duration:5e3})}return b}static#e=this.\u0275fac=function(p){return new(p||d)(e.rXU(e.aKT),e.rXU(e.SKi),e.rXU(a.UG))};static#t=this.\u0275dir=e.FsC({type:d,selectors:[["","appDragAndDrop",""]],hostBindings:function(p,g){1&p&&e.bIt("drop",function(C){return g.onDrop(C)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},standalone:!0,features:[e.Vt3]})}return d})()},9914:(k,v,r)=>{r.d(v,{$:()=>h});var e=r(7580),m=r(436);let h=(()=>{class a{constructor(d){this.sanitizer=d}transform(d){return this.sanitizer.bypassSecurityTrustHtml(d)}static#e=this.\u0275fac=function(_){return new(_||a)(e.rXU(m.up,16))};static#t=this.\u0275pipe=e.EJ8({name:"safeHtml",type:a,pure:!0,standalone:!0})}return a})()},2987:(k,v,r)=>{r.d(v,{n:()=>d});var e=r(271),m=r(3037),h=r(4205),a=r(7580),T=r(6443);let d=(()=>{class _{constructor(p){this.http=p,this.installSettingsSubject=new h.B,this.settings$=this.installSettingsSubject.asObservable(),this.settings$.pipe((0,e.T)(()=>!0),(0,m.Z)(!1)).subscribe()}loadGettingStarted(p){this.http.get(`sys/install/InstallSettings?isContentApp=${p}`).subscribe(g=>this.installSettingsSubject.next(g))}static#e=this.\u0275fac=function(g){return new(g||_)(a.KVO(T.Qq))};static#t=this.\u0275prov=a.jDH({token:_,factory:_.\u0275fac})}return _})()},4147:(k,v,r)=>{r.d(v,{e:()=>T});var e=r(6647),m=r(9452),h=r(7580),a=r(6443);let T=(()=>{class d{constructor(o){this.http=o}installPackages(o,p){return o.reduce((g,b)=>g.pipe((0,e.n)(()=>b.url?(p(b),this.http.post(`sys/install/RemotePackage?packageUrl=${b.url}`,{})):(0,m.of)(!0))),(0,m.of)(!0))}static#e=this.\u0275fac=function(p){return new(p||d)(h.KVO(a.Qq))};static#t=this.\u0275prov=h.jDH({token:d,factory:d.\u0275fac})}return d})()},1134:(k,v,r)=>{r.d(v,{D6:()=>C,LG:()=>g});var e=r(7580),m=r(316),h=r(5060);const a=["determinateSpinner"];function T(u,O){if(1&u&&(e.qSk(),e.j41(0,"svg",11),e.nrm(1,"circle",12),e.k0s()),2&u){const l=e.XpG();e.BMQ("viewBox",l._viewBox()),e.R7$(),e.xc7("stroke-dasharray",l._strokeCircumference(),"px")("stroke-dashoffset",l._strokeCircumference()/2,"px")("stroke-width",l._circleStrokeWidth(),"%"),e.BMQ("r",l._circleRadius())}}const d=new e.nKC("mat-progress-spinner-default-options",{providedIn:"root",factory:function _(){return{diameter:o}}}),o=100;let g=(()=>{class u{get color(){return this._color||this._defaultColor}set color(l){this._color=l}constructor(l,y,n){this._elementRef=l,this._defaultColor="primary",this._value=0,this._diameter=o,this._noopAnimations="NoopAnimations"===y&&!!n&&!n._forceAnimations,this.mode="mat-spinner"===l.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",n&&(n.color&&(this.color=this._defaultColor=n.color),n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(l){this._value=Math.max(0,Math.min(100,l||0))}get diameter(){return this._diameter}set diameter(l){this._diameter=l||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(l){this._strokeWidth=l||0}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const l=2*this._circleRadius()+this.strokeWidth;return`0 0 ${l} ${l}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#e=this.\u0275fac=function(y){return new(y||u)(e.rXU(e.aKT),e.rXU(e.bc$,8),e.rXU(d))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(y,n){if(1&y&&e.GBs(a,5),2&y){let E;e.mGM(E=e.lsd())&&(n._determinateCircle=E.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(y,n){2&y&&(e.BMQ("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===n.mode?n.value:null)("mode",n.mode),e.HbH("mat-"+n.color),e.xc7("width",n.diameter,"px")("height",n.diameter,"px")("--mdc-circular-progress-size",n.diameter+"px")("--mdc-circular-progress-active-indicator-width",n.diameter+"px"),e.AVh("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===n.mode))},inputs:{color:"color",mode:"mode",value:[e.Mj6.HasDecoratorInputTransform,"value","value",e.Udg],diameter:[e.Mj6.HasDecoratorInputTransform,"diameter","diameter",e.Udg],strokeWidth:[e.Mj6.HasDecoratorInputTransform,"strokeWidth","strokeWidth",e.Udg]},exportAs:["matProgressSpinner"],standalone:!0,features:[e.GFd,e.aNF],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(y,n){if(1&y&&(e.DNE(0,T,2,8,"ng-template",null,0,e.C5r),e.j41(2,"div",2,1),e.qSk(),e.j41(4,"svg",3),e.nrm(5,"circle",4),e.k0s()(),e.joV(),e.j41(6,"div",5)(7,"div",6)(8,"div",7),e.eu8(9,8),e.k0s(),e.j41(10,"div",9),e.eu8(11,8),e.k0s(),e.j41(12,"div",10),e.eu8(13,8),e.k0s()()()),2&y){const E=e.sdS(1);e.R7$(4),e.BMQ("viewBox",n._viewBox()),e.R7$(),e.xc7("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),e.BMQ("r",n._circleRadius()),e.R7$(4),e.Y8G("ngTemplateOutlet",E),e.R7$(2),e.Y8G("ngTemplateOutlet",E),e.R7$(2),e.Y8G("ngTemplateOutlet",E)}},dependencies:[m.T3],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return u})(),C=(()=>{class u{static#e=this.\u0275fac=function(y){return new(y||u)};static#t=this.\u0275mod=e.$C({type:u});static#r=this.\u0275inj=e.G2t({imports:[m.MD,h.yE]})}return u})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts.bb3f79a196968c37.js.map