"use strict";(self.webpackChunkng_dialogs=self.webpackChunkng_dialogs||[]).push([["default-projects_ng-dialogs_src_app_create-file-dialog_index_ts"],{1183:function(ee,L,o){o.d(L,{t:function(){return I}});var S=o(8069),D=o(8047),M=o(635),_=o(8598),v=o(7133),V=o(8784),B=o(2425),$="admin/AppFiles/asset",I=function(){var A=function(){function F(Z,r,c){(0,S.Z)(this,F),this.http=Z,this.context=r,this.dnnContext=c}return(0,D.Z)(F,[{key:"get",value:function(r,c,C){return this.http.get(this.dnnContext.$2sxc.http.apiUrl($),{params:Object.assign({appId:this.context.appId,global:c},this.templateIdOrPath(r,c,C))}).pipe((0,M.U)(function(d){if("auto"===d.Type.toLocaleLowerCase())switch(d.Extension.toLocaleLowerCase()){case".cs":case".cshtml":d.Type="Razor";break;case".html":case".css":case".js":d.Type="Token"}return d}))}},{key:"save",value:function(r,c,C,d){return this.http.post(this.dnnContext.$2sxc.http.apiUrl($),C,{params:Object.assign({appId:this.context.appId,global:c},this.templateIdOrPath(r,c,d))})}},{key:"getAllNew",value:function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/AppFiles/AppFiles"),{params:{appId:this.context.appId}}).pipe((0,M.U)(function(r){var c=r.Files;return c.forEach(function(C){var d;null!==(d=C.Shared)&&void 0!==d||(C.Shared=!1)}),c}))}},{key:"getAll",value:function(r,c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/AppFiles/all"),{params:Object.assign(Object.assign({appId:this.context.appId,global:r},c&&{mask:c}),{withSubfolders:"true"})})}},{key:"getWebApis",value:function(r){return this.getAll(r,"*Controller.cs").pipe((0,M.U)(function(c){return c.map(function(d){var E=d.lastIndexOf("/"),w=d.lastIndexOf("."),N=d.substring(0,E),Q=d.substring(E+1,w);return{path:d,folder:N,name:Q}})}))}},{key:"getWebApiDetails",value:function(r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/ApiExplorer/inspect"),{params:{appId:this.context.appId,zoneId:this.context.zoneId,path:r}})}},{key:"getPredefinedTemplates",value:function(r,c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/AppFiles/GetTemplates"),{params:Object.assign(Object.assign({},r&&{purpose:r}),c&&{type:c})})}},{key:"getPreview",value:function(r,c,C){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/AppFiles/preview"),{params:{appId:this.context.appId,path:r,templateKey:C,global:c}})}},{key:"create",value:function(r,c,C){return this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/AppFiles/create"),{},{params:{appId:this.context.appId,global:c,purpose:"auto",path:r,templateKey:C}})}},{key:"templateIdOrPath",value:function(r,c,C){var d;if(/^[0-9]*$/g.test(r)){var E=null===(d=C.find(function(w){var N;return(null===(N=w.EntityId)||void 0===N?void 0:N.toString())===r&&w.IsShared===c}))||void 0===d?void 0:d.Path;return Object.assign({templateId:r},null!=E&&{path:E})}return{path:r}}}]),F}();return A.\u0275fac=function(Z){return new(Z||A)(v.LFG(V.eN),v.LFG(_._),v.LFG(B._y))},A.\u0275prov=v.Yz7({token:A,factory:A.\u0275fac}),A}()},4909:function(ee,L,o){o.d(L,{U:function(){return fe},q:function(){return me}});var S=o(7797),D=o(2090),M=o(8069),_=o(8047),v=o(587),V=o(5758),B=o(7714),j=o(6317),U=o(6562),$=o(6936),Y=o(745),k=o(1640),J=o(8947),O=o(4874),I=o(8977),A=o(635),F=o(9337),Z=o(1944),r=o(3945),c=o(4987),C={leading:!0,trailing:!1};function d(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,a=i.leading,t=i.trailing;return(0,Z.e)(function(p,y){var T=!1,P=null,u=null,l=!1,s=function(){null==u||u.unsubscribe(),u=null,t&&(m(),l&&y.complete())},f=function(){u=null,l&&y.complete()},h=function(g){return u=(0,c.Xf)(n(g)).subscribe(new r.Q(y,s,f))},m=function(){if(T){T=!1;var g=P;P=null,y.next(g),!l&&h(g)}};p.subscribe(new r.Q(y,function(x){T=!0,P=x,(!u||u.closed)&&(a?m():h(x))},function(){l=!0,(!(t&&T&&u)||u.closed)&&y.complete()}))})}var w=o(2673),N=o(5656),Q=o(1183),e=o(7133),K=o(6362),R=o(4770),G=o(1434),W=o(4683),te=function(){var n=function(){function i(a,t){(0,M.Z)(this,i),this.matInput=a,this.elementRef=t,this.autofocusSelectValue=!1}return(0,_.Z)(i,[{key:"ngOnInit",value:function(){var t=this;setTimeout(function(){t.matInput.focus(),t.toBoolean(t.autofocusSelectValue)&&t.elementRef.nativeElement.setSelectionRange(0,t.matInput.value.length)})}},{key:"toBoolean",value:function(t){if("boolean"==typeof t)return t;if("string"==typeof t){var p=t.toLocaleLowerCase();return"true"===p||"false"!==p&&void 0}return null==t?t:void 0}}]),i}();return n.\u0275fac=function(a){return new(a||n)(e.Y36(W.Nt),e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","appMatInputAutofocus",""]],inputs:{autofocusSelectValue:"autofocusSelectValue"}}),n}(),X=o(7317),ne=o(1130),ae=o(3135),q=o(4742);function oe(n,i){if(1&n&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&n){var a=i.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}function ie(n,i){if(1&n&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&n){var a=i.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}function le(n,i){if(1&n&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&n){var a=i.$implicit;e.Q6J("value",a.Key),e.xp6(1),e.hij(" ",a.Name," ")}}function re(n,i){1&n&&(e.TgZ(0,"app-field-hint",21),e._uU(1," This field is required "),e.qZA()),2&n&&e.Q6J("isError",!0)}function se(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-spinner",22),e._UZ(2,"div",23),e.BQk())}var H=function(i){return{disabled:i}};function pe(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",24),e.TgZ(2,"label",25),e._uU(3,"Preview"),e.qZA(),e.qZA(),e.TgZ(4,"pre",26),e._uU(5),e.qZA(),e.BQk()),2&n){var a=e.oxw().ngIf;e.xp6(2),e.Q6J("ngClass",e.VKq(3,H,a.loadingPreview)),e.xp6(2),e.Q6J("ngClass",e.VKq(5,H,a.loadingPreview)),e.xp6(1),e.Oqu(a.preview)}}function ue(n,i){if(1&n&&(e.TgZ(0,"div",27),e._uU(1),e.qZA()),2&n){var a=e.oxw().ngIf;e.xp6(1),e.hij(" ",a.previewError," ")}}function ce(n,i){if(1&n){var a=e.EpF();e.ynx(0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"span"),e._uU(4,"Create"),e.qZA(),e.TgZ(5,"span",3),e._uU(6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"form",4),e.TgZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"div",7),e.TgZ(11,"mat-form-field",8),e.TgZ(12,"mat-label"),e._uU(13,"Platform"),e.qZA(),e.TgZ(14,"mat-select",9),e.YNc(15,oe,2,2,"mat-option",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",7),e.TgZ(17,"mat-form-field",8),e.TgZ(18,"mat-label"),e._uU(19,"Purpose"),e.qZA(),e.TgZ(20,"mat-select",11),e.YNc(21,ie,2,2,"mat-option",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"mat-form-field",8),e.TgZ(24,"mat-label"),e._uU(25,"Template"),e.qZA(),e.TgZ(26,"mat-select",13),e.YNc(27,le,2,2,"mat-option",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",12),e.TgZ(29,"mat-form-field",8),e.TgZ(30,"mat-label"),e._uU(31,"Name"),e.qZA(),e._UZ(32,"input",14),e.qZA(),e.YNc(33,re,2,1,"app-field-hint",15),e.qZA(),e.qZA(),e.TgZ(34,"div",16),e.YNc(35,se,3,0,"ng-container",0),e.TgZ(36,"button",17),e.NdJ("click",function(){return e.CHM(a),e.oxw().closeDialog()}),e._uU(37,"Cancel"),e.qZA(),e.TgZ(38,"button",18),e.NdJ("click",function(){return e.CHM(a),e.oxw().confirm()}),e._uU(39," Create "),e.qZA(),e.qZA(),e.YNc(40,pe,6,7,"ng-container",0),e.YNc(41,ue,2,1,"div",19),e.qZA(),e.BQk()}if(2&n){var t=i.ngIf,p=e.oxw();e.xp6(6),e.Oqu(p.controls.finalName.value||(p.controls.folder.value?p.controls.folder.value.trim()+"/":"")),e.xp6(1),e.Q6J("formGroup",p.form),e.xp6(8),e.Q6J("ngForOf",t.platforms),e.xp6(6),e.Q6J("ngForOf",t.purposes),e.xp6(6),e.Q6J("ngForOf",t.templates),e.xp6(6),e.Q6J("ngIf",p.controls.name.touched&&(null==p.controls.name.errors?null:p.controls.name.errors.required)),e.xp6(2),e.Q6J("ngIf",t.loadingPreview),e.xp6(3),e.Q6J("disabled",!p.form.valid||t.loadingPreview||!t.previewValid),e.xp6(2),e.Q6J("ngIf",t.preview),e.xp6(1),e.Q6J("ngIf",!t.loadingPreview&&t.previewError)}}var fe=function(){var n=function(){function i(a,t,p){(0,M.Z)(this,i),this.dialogData=a,this.dialogRef=t,this.sourceService=p,this.hostClass="dialog-component",this.all="All"}return(0,_.Z)(i,[{key:"ngOnInit",value:function(){this.subscription=new B.w0,this.templates$=new j.X([]),this.loadingPreview$=new j.X(!1),this.buildForm(),this.fetchTemplates(),this.buildTemplateVars()}},{key:"ngOnDestroy",value:function(){this.templates$.complete(),this.loadingPreview$.complete(),this.subscription.unsubscribe()}},{key:"closeDialog",value:function(t){this.dialogRef.close(t)}},{key:"confirm",value:function(){var t=this.form.getRawValue();this.closeDialog({name:t.finalName,templateKey:t.templateKey})}},{key:"fetchTemplates",value:function(){var t=this;this.sourceService.getPredefinedTemplates(this.dialogData.purpose,this.dialogData.type).subscribe(function(p){t.controls.templateKey.value!==p.Default&&t.controls.templateKey.patchValue(p.Default),t.templates$.next(p.Templates)})}},{key:"buildForm",value:function(){var p,y,t=this;this.form=new v.cw({platform:new v.NI(this.all),purpose:new v.NI({value:null!==(p=this.dialogData.purpose)&&void 0!==p?p:this.all,disabled:null!=this.dialogData.purpose}),templateKey:new v.NI(null,v.kI.required),name:new v.NI(null,v.kI.required),finalName:new v.NI({value:null,disabled:!0}),folder:new v.NI({value:null!==(y=this.dialogData.folder)&&void 0!==y?y:"",disabled:!0})}),this.controls=this.form.controls,this.subscription.add((0,U.a)([this.templates$,this.controls.templateKey.valueChanges.pipe((0,O.O)(this.controls.templateKey.value),(0,I.x)())]).subscribe(function(T){var s,P=(0,D.Z)(T,2),l=P[1],f=P[0].find(function(m){return m.Key===l}),h=null!==(s=null==f?void 0:f.SuggestedFileName)&&void 0!==s?s:null;t.controls.name.value!==h&&t.controls.name.patchValue(h)})),this.subscription.add((0,U.a)([this.templates$,this.controls.templateKey.valueChanges.pipe((0,O.O)(this.controls.templateKey.value),(0,I.x)()),this.controls.name.valueChanges.pipe((0,O.O)(this.controls.name.value),(0,I.x)()),this.controls.folder.valueChanges.pipe((0,O.O)(this.controls.folder.value),(0,I.x)())]).subscribe(function(T){var h,m,x,P=(0,D.Z)(T,4),l=P[1],s=P[2],f=P[3],g=P[0].find(function(z){return z.Key===l}),b=null;s&&(f=f.trim(),s=N.vl.sanitizePath(s.trim()),s="".concat(null!==(h=null==g?void 0:g.Prefix)&&void 0!==h?h:"").concat(s).concat(null!==(m=null==g?void 0:g.Suffix)&&void 0!==m?m:"").concat(null!==(x=null==g?void 0:g.Extension)&&void 0!==x?x:""),b="".concat(f?"".concat(f,"/"):"").concat(s).replace(/\/{2,}/g,"/")),t.controls.finalName.value!==b&&t.controls.finalName.patchValue(b)}))}},{key:"buildTemplateVars",value:function(){var t=this,p=this.templates$.pipe((0,A.U)(function(u){var l=(0,S.Z)({},t.all,t.all);return u.forEach(function(s){var f;null===(f=s.Platforms)||void 0===f||f.forEach(function(h){l[h]=h})}),Object.keys(l)})),y=this.templates$.pipe((0,A.U)(function(u){var l=(0,S.Z)({},t.all,t.all);return u.forEach(function(s){l[s.Purpose]=s.Purpose}),Object.keys(l)})),T=(0,U.a)([this.templates$,this.controls.platform.valueChanges.pipe((0,O.O)(this.controls.platform.value),(0,I.x)()),this.controls.purpose.valueChanges.pipe((0,O.O)(this.controls.purpose.value),(0,I.x)())]).pipe((0,A.U)(function(u){var l=(0,D.Z)(u,3),f=l[1],h=l[2];return l[0].filter(function(x){var g,b;return(f===t.all||null!==(b=null===(g=x.Platforms)||void 0===g?void 0:g.includes(f))&&void 0!==b&&b)&&(h===t.all||x.Purpose===h)})}),(0,F.b)(function(u){var l,s;if(!u.some(function(h){return h.Key===t.controls.templateKey.value})){var f=null!==(s=null===(l=u[0])||void 0===l?void 0:l.Key)&&void 0!==s?s:null;t.controls.templateKey.value!==f&&t.controls.templateKey.patchValue(f)}})),P=(0,U.a)([this.controls.finalName.valueChanges.pipe((0,O.O)(this.controls.finalName.value),(0,I.x)()),this.controls.templateKey.valueChanges.pipe((0,O.O)(this.controls.templateKey.value),(0,I.x)())]).pipe(function E(n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,t=(0,J.H)(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:$.z);return d(function(){return t},a)}(100,$.z,{leading:!0,trailing:!0}),(0,F.b)(function(){t.loadingPreview$.next(!0)}),(0,w.w)(function(u){var l=(0,D.Z)(u,2),s=l[0],f=l[1];return s&&f?(0,k.D)([t.sourceService.getPreview(s,t.dialogData.global,f),(0,J.H)(500)]).pipe((0,A.U)(function(h){return(0,D.Z)(h,1)[0]})):(0,Y.of)(void 0)}),(0,F.b)(function(){t.loadingPreview$.next(!1)}));this.templateVars$=(0,U.a)([p,y,T,P,this.loadingPreview$]).pipe((0,A.U)(function(u){var g,l=(0,D.Z)(u,5),m=l[3];return{platforms:l[0],purposes:l[1],templates:l[2],loadingPreview:l[4],preview:null==m?void 0:m.Preview,previewValid:null!==(g=null==m?void 0:m.IsValid)&&void 0!==g&&g,previewError:null==m?void 0:m.Error}}))}}]),i}();return n.\u0275fac=function(a){return new(a||n)(e.Y36(V.WI),e.Y36(V.so),e.Y36(Q.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-file-dialog"]],hostVars:1,hostBindings:function(a,t){2&a&&e.Ikx("className",t.hostClass)},decls:2,vars:3,consts:[[4,"ngIf"],["mat-dialog-title",""],[1,"dialog-title-box","hide-scrollbar"],[1,"file-name"],[1,"dialog-form",3,"formGroup"],[1,"dialog-form-content","fancy-scrollbar-light"],[1,"field-container","multiple"],[1,"multiple-field"],["appearance","standard","color","accent"],["formControlName","platform"],[3,"value",4,"ngFor","ngForOf"],["formControlName","purpose"],[1,"field-container"],["formControlName","templateKey"],["matInput","","type","text","formControlName","name","required","","appMatInputAutofocus","","autofocusSelectValue","true"],[3,"isError",4,"ngIf"],[1,"dialog-form-actions"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","type","button","color","accent",3,"disabled","click"],["class","preview-error",4,"ngIf"],[3,"value"],[3,"isError"],["mode","indeterminate","diameter","20","color","accent"],[1,"spacer"],[1,"preview-label-box"],[1,"preview-label",3,"ngClass"],[1,"fancy-scrollbar-light",3,"ngClass"],[1,"preview-error"]],template:function(a,t){1&a&&(e.YNc(0,ce,42,10,"ng-container",0),e.ALo(1,"async")),2&a&&e.Q6J("ngIf",e.lcZ(1,1,t.templateVars$))},directives:[K.O5,v._Y,v.JL,v.sg,R.KE,R.hX,G.gD,v.JJ,v.u,K.sg,W.Nt,v.Fj,v.Q7,te,X.lW,ne.ey,ae.Y,q.$g,K.mk],pipes:[K.Ov],styles:[".dialog-title-box[_ngcontent-%COMP%]{justify-content:flex-start;align-items:baseline;line-height:normal;white-space:nowrap;overflow-x:auto}.dialog-title-box[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{font-size:20px;margin-left:8px;background-color:#d3d3d3}.field-container[_ngcontent-%COMP%]:not(:first-of-type){margin-top:8px}.field-container.multiple[_ngcontent-%COMP%]{display:flex}.field-container.multiple[_ngcontent-%COMP%]   .multiple-field[_ngcontent-%COMP%]{flex:1}.field-container.multiple[_ngcontent-%COMP%]   .multiple-field[_ngcontent-%COMP%]:not(:first-of-type){margin-left:8px}.dialog-form-content[_ngcontent-%COMP%], .dialog-form-actions[_ngcontent-%COMP%]{flex-shrink:0}pre[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1;font-family:monospace}pre.disabled[_ngcontent-%COMP%]{color:#1d273d3d}.preview-label-box[_ngcontent-%COMP%]{position:relative}.preview-label-box[_ngcontent-%COMP%]   .preview-label[_ngcontent-%COMP%]{position:absolute;top:-20px;left:0px;font-size:12px;color:#0009;pointer-events:none}.preview-label-box[_ngcontent-%COMP%]   .preview-label.disabled[_ngcontent-%COMP%]{color:#1d273d70}.preview-error[_ngcontent-%COMP%]{margin-bottom:10px;font-size:14px;color:red}pre[_ngcontent-%COMP%]{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px;overflow-x:auto}"]}),n}(),de=o(8598),ve=o(8450),me=function(){var n=(0,_.Z)(function i(){(0,M.Z)(this,i)});return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[de._,Q.t],imports:[[K.ez,ve.q,X.ot,G.LD,v.UX,R.lN,W.c,q.Cq]]}),n}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/13.02.00/ng-edit/default-projects_ng-dialogs_src_app_create-file-dialog_index_ts.1d774a747ebe72ca.js.map