(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+UDY":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("EM62"),o=function(){function e(){this.cleanBadPath=function(e){if(!e)return e;var t="_";return e.replace(/[\?<>\\:\*\|":]/g,t).replace(/[\x00-\x1f\x80-\x9f]/g,t).replace(/^\.+$/,t).replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,t).replace(/[\. ]+$/,t)}}return e.prototype.removeFromStart=function(e,t){if(!e)return e;for(;e.substring(0,1)===t;)e=e.substring(1);return e},e.prototype.removeFromEnd=function(e,t){if(!e)return e;for(;e.substring(e.length-1,e.length)===t;)e=e.substring(0,e.length-1);return e},e.prototype.sanitizePath=function(e){return e?(e=this.removeFromStart(e,"/"),e=this.removeFromEnd(e,"/"),e=this.removeFromStart(e,"\\"),e=this.removeFromEnd(e,"\\"),e=this.cleanBadPath(e)):e},e.prototype.sanitizeName=function(e){return e?this.sanitizePath(e).replace(/\//g,"_"):e},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}()},"/Foi":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var i=n("D57K"),o=n("YtkY"),r=n("S36y"),a=n("EM62"),c=n("vobO"),s=n("Iv+g"),p=n("B5/E"),l="admin/field/all",u=function(){function e(e,t,n){this.http=e,this.context=t,this.dnnContext=n}return e.prototype.apiUrl=function(e){return this.dnnContext.$2sxc.http.apiUrl(e)},e.prototype.typeListRetrieve=function(){return this.http.get(this.apiUrl("admin/field/DataTypes"),{params:{appid:this.context.appId.toString()}})},e.prototype.getInputTypesList=function(){return this.http.get(this.apiUrl("admin/field/InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe(Object(o.a)((function(e){return e.map((function(e){return{dataType:e.Type.substring(0,e.Type.indexOf("-")),inputType:e.Type,label:e.Label,description:e.Description}}))})))},e.prototype.getFields=function(e){return this.http.get(this.apiUrl(l),{params:{appid:this.context.appId.toString(),staticName:e.StaticName}}).pipe(Object(o.a)((function(e){var t,n;if(e)try{for(var o=Object(i.h)(e),r=o.next();!r.done;r=o.next()){var a=r.value;if(a.Metadata){var c=a.Metadata,s=c.All,p=c[a.Type],l=c[a.InputType];c.merged=Object(i.a)(Object(i.a)(Object(i.a)({},s),p),l)}}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return e})))},e.prototype.reOrder=function(e,t){return this.http.post(this.apiUrl("admin/field/Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:t.Id.toString(),order:JSON.stringify(e)}})},e.prototype.setTitle=function(e,t){return this.http.post(this.apiUrl(r.b+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:t.Id.toString(),attributeId:e.Id.toString()}})},e.prototype.rename=function(e,t,n){return this.http.post(this.apiUrl("admin/field/Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:t.Id.toString(),attributeId:e.Id.toString(),newName:n}})},e.prototype.delete=function(e,t){if(e.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl("admin/field/Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:t.Id.toString(),attributeId:e.Id.toString()}})},e.prototype.add=function(e,t){return this.http.post(this.apiUrl("admin/field/Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:t.toString(),Id:e.Id.toString(),Type:e.Type,InputType:e.InputType,StaticName:e.StaticName,IsTitle:e.IsTitle.toString(),Index:e.SortOrder.toString()}})},e.prototype.updateInputType=function(e,t,n){return this.http.post(this.apiUrl("admin/field/InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:e.toString(),field:t,inputType:n}})},e.\u0275fac=function(t){return new(t||e)(a.Wb(c.b),a.Wb(s.a),a.Wb(p.a))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac}),e}()},iluC:function(e,t,n){"use strict";n.r(t),n.d(t,"translateLoaderFactory",(function(){return Oe})),n.d(t,"CodeEditorModule",(function(){return Ie}));var i=n("2kYt"),o=n("vobO"),r=n("nIj0"),a=n("PBFl"),c=n("mFH5"),s=n("OZ4H"),p=n("bFHC"),l=n("R7+U"),u=n("W1gw"),d=n("Y2X+"),f=n("s2Ay"),h=n("i8O3"),g=n("+UDY"),b=n("Iv+g"),m=n("H0VJ"),v=n("O6Xb"),y=n("sEIs"),S=n("D57K"),x=n("C05f"),w=n("HM3f"),k=n("bwdy"),T=n("P4Xx"),O=n("KTx3"),I=n("YtkY"),C=n("Q+Kz"),A=n("0ELX"),M=n("EM62"),P=n("1/u/"),R={mode:"ace/mode/razor",wrap:!0,useSoftTabs:!0,theme:"ace/theme/sqlserver",fontSize:14,fontFamily:"Consolas, Courier New, monospace",showGutter:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},F=["editor"],$=function(){function e(e){this.zone=e,this.value="",this.propagateChange=function(){},this.propagateTouched=function(){}}return e.prototype.ngOnInit=function(){Object(P.a)([{test:"ace",src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ace.min.js"},{test:null,src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ext-modelist.min.js"},{test:null,src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ext-language_tools.min.js"}],this.aceLoaded.bind(this))},e.prototype.ngOnChanges=function(e){var t,n,i,o,r=this,a=null===(t=e.filename)||void 0===t?void 0:t.currentValue,c=null===(n=e.snippets)||void 0===n?void 0:n.currentValue;this.updateValues(a,c),this.editor&&(null===(i=e.toggleResize)||void 0===i?void 0:i.currentValue)!==(null===(o=e.toggleResize)||void 0===o?void 0:o.previousValue)&&this.zone.runOutsideAngular((function(){setTimeout((function(){r.editor.resize()}),50)}))},e.prototype.insertSnippet=function(e){var t=this;this.zone.runOutsideAngular((function(){ace.require("ace/snippets").snippetManager.insertSnippet(t.editor,e),t.editor.focus()}))},e.prototype.writeValue=function(e){var t=this;this.value=e||"",this.editor&&this.zone.runOutsideAngular((function(){var e=t.editor.getCursorPosition();t.editor.setValue(t.value,-1),t.editor.moveCursorToPosition(e)}))},e.prototype.registerOnChange=function(e){this.propagateChange=e},e.prototype.registerOnTouched=function(e){this.propagateTouched=e},e.prototype.ngOnDestroy=function(){var e=this;this.zone.runOutsideAngular((function(){e.editor.destroy(),e.editor.container.remove(),e.editor=null}))},e.prototype.aceLoaded=function(){var e=this;this.zone.runOutsideAngular((function(){ace.config.set("basePath","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11"),e.editor=ace.edit(e.editorRef.nativeElement,R),e.editor.$blockScrolling=1/0,e.editor.session.setValue(e.value),e.updateValues(e.filename,e.snippets),e.editor.on("change",e.onEditorValueChange.bind(e)),e.editor.on("blur",e.onEditorBlurred.bind(e)),e.editor.focus()}))},e.prototype.onEditorValueChange=function(){var e=this;this.zone.run((function(){e.propagateChange(e.editor.getValue())}))},e.prototype.onEditorBlurred=function(){var e=this;this.zone.run((function(){e.propagateTouched(e.editor.getValue())}))},e.prototype.updateValues=function(e,t){var n=this;this.editor&&this.zone.runOutsideAngular((function(){if(e){var i=ace.require("ace/ext/modelist").getModeForPath(e).mode;n.editor.session.setMode(i)}t&&ace.require("ace/snippets").snippetManager.register(n.snippets)}))},e.\u0275fac=function(t){return new(t||e)(M.Mb(M.A))},e.\u0275cmp=M.Gb({type:e,selectors:[["app-ace-editor"]],viewQuery:function(e,t){var n;1&e&&M.Sc(F,!0),2&e&&M.xc(n=M.bc())&&(t.editorRef=n.first)},inputs:{filename:"filename",snippets:"snippets",toggleResize:"toggleResize"},features:[M.zb([{provide:r.k,useExisting:Object(M.U)((function(){return e})),multi:!0}]),M.yb],decls:2,vars:0,consts:[[2,"width","100%","height","100%"],["editor",""]],template:function(e,t){1&e&&M.Nb(0,"div",0,1)},styles:["[_nghost-%COMP%] {display: block; width: 100%; height: 100%}"],changeDetection:0}),e}(),j=n("ZTXN"),_=function(){function e(e){this.snackBar=e,this.defaultDuration=3e3,this.processingMessage=!1,this.messageQueue=[]}return e.prototype.add=function(e,t,n){void 0===n&&(n={duration:this.defaultDuration});var i=new j.a;return this.messageQueue.push({message:e,action:t,config:n,triggered$:i}),this.processingMessage||this.showSnackBar(),i.asObservable()},e.prototype.showSnackBar=function(){var e=this,t=this.messageQueue.shift();if(null!=t){this.processingMessage=!0;var n=this.snackBar.open(t.message,t.action,t.config);n.afterDismissed().subscribe((function(){t.triggered$.complete(),e.showSnackBar()})),n.onAction().subscribe((function(){t.triggered$.next()}))}else this.processingMessage=!1},e.prototype.ngOnDestroy=function(){var e,t;try{for(var n=Object(S.h)(this.messageQueue),i=n.next();!i.done;i=n.next())i.value.triggered$.complete()}catch(o){e={error:o}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.messageQueue=null},e.\u0275fac=function(t){return new(t||e)(M.Wb(u.b))},e.\u0275prov=M.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),L=n("geKs"),E=n("B5/E"),z=function(){function e(e,t,n){this.http=e,this.context=t,this.dnnContext=n}return e.prototype.get=function(e){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(L.b),{params:Object(S.a)({appId:this.context.appId.toString()},this.templateIdOrPath(e))}).pipe(Object(I.a)((function(e){if("auto"===e.Type.toLowerCase())switch(e.Extension.toLowerCase()){case".cs":case".cshtml":e.Type="Razor";break;case".html":case".css":case".js":e.Type="Token"}return e})))},e.prototype.save=function(e,t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(L.b),t,{params:Object(S.a)({appId:this.context.appId.toString()},this.templateIdOrPath(e))})},e.prototype.getTemplates=function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(L.d),{params:{appId:this.context.appId.toString(),global:"false",withSubfolders:"true"}})},e.prototype.createTemplate=function(e){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(L.c),{},{params:{appId:this.context.appId.toString(),global:"false",path:e}})},e.prototype.templateIdOrPath=function(e){return"number"==typeof e?{templateId:e.toString()}:{path:e}},e.\u0275fac=function(t){return new(t||e)(M.Wb(o.b),M.Wb(b.a),M.Wb(E.a))},e.\u0275prov=M.Ib({token:e,factory:e.\u0275fac}),e}(),N=n("9RHM"),D=n("DGvA"),H=n("/Foi"),B=function(){function e(e,t,n){this.http=e,this.dnnContext=t,this.translate=n,this.keyPrefixes=["@","["],this.keyPrefixIndex=function(e){return e.Type.indexOf("Razor")>-1?0:1}}return e.prototype.getSnippets=function(e){return Object(S.b)(this,void 0,void 0,(function(){var t,n,i;return Object(S.e)(this,(function(o){switch(o.label){case 0:return[4,this.http.get("../ng-assets/snippets.json.js").toPromise()];case 1:return t=o.sent(),n=this.filterAwayNotNeededSnippetsList(t.snippets,e),i=this.extractInputTypeSnippets(n),[2,{sets:this.initSnippetsWithConfig(i.standardArray,e,i.inputTypeSnippets),list:i.standardArray}]}}))}))},e.prototype.filterAwayNotNeededSnippetsList=function(e,t){var n,i,o=[];try{for(var r=Object(S.h)(e),a=r.next();!a.done;a=r.next()){var c=a.value,s=this.keyPrefixes.indexOf(c.set[0]);-1!==s&&s!==this.keyPrefixIndex(t)||(s===this.keyPrefixIndex(t)&&(c.set=c.set.substr(1)),o.push(c))}}catch(p){n={error:p}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return o},e.prototype.extractInputTypeSnippets=function(e){var t,n,i=[],o=[];try{for(var r=Object(S.h)(e),a=r.next();!a.done;a=r.next()){var c=a.value;"\\"===c.set[0]?(c.set=c.set.substr(1),o.push(c)):i.push(c)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{standardArray:i,inputTypeSnippets:this.catalogInputTypeSnippets(o)}},e.prototype.catalogInputTypeSnippets=function(e){var t,n,i={};try{for(var o=Object(S.h)(e),r=o.next();!r.done;r=o.next()){var a=r.value;void 0===i[a.subset]&&(i[a.subset]=[]),i[a.subset].push(a)}}catch(c){t={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i},e.prototype.initSnippetsWithConfig=function(e,t,n){return(e=this.makeTree(e)).Content=Object.assign({},e.Content,{Fields:{},PresentationFields:{}}),t.TypeContent&&this.loadContentType(e.Content.Fields,t.TypeContent,"Content",t,n),t.TypeContentPresentation&&this.loadContentType(e.Content.PresentationFields,t.TypeContentPresentation,"Content.Presentation",t,n),t.HasList?(e.List=Object.assign({},e.List,{Fields:{},PresentationFields:{}}),t.TypeList&&this.loadContentType(e.List.Fields,t.TypeList,"Header",t,n),t.TypeListPresentation&&this.loadContentType(e.List.PresentationFields,t.TypeListPresentation,"Header.Presentation",t,n)):delete e.List,t.HasApp&&(e.App.Resources={},e.App.Settings={},this.loadContentType(e.App.Resources,"App-Resources","App.Resources",t,n),this.loadContentType(e.App.Settings,"App-Settings","App.Settings",t,n)),e},e.prototype.makeTree=function(e){var t,n,i={};try{for(var o=Object(S.h)(e),r=o.next();!r.done;r=o.next()){var a=r.value;void 0===i[a.set]&&(i[a.set]={}),void 0===i[a.set][a.subset]&&(i[a.set][a.subset]=[]);var c={key:a.name,label:this.label(a.set,a.subset,a.name),snip:a.content,help:a.help||this.help(a.set,a.subset,a.name),links:this.linksList(a.links)};i[a.set][a.subset].push(c)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i},e.prototype.label=function(e,t,n){var i=this.getHelpKey(e,t,n,".Key"),o=this.translate.instant(i);return o===i&&(o=n),o},e.prototype.getHelpKey=function(e,t,n,i){return"SourceEditorSnippets."+e+"."+t+"."+n+i},e.prototype.help=function(e,t,n){var i=this.getHelpKey(e,t,n,".Help"),o=this.translate.instant(i);return o===i&&(o=""),o},e.prototype.linksList=function(e){var t,n;if(!e)return null;var i=[],o=e.split("\n");try{for(var r=Object(S.h)(o),a=r.next();!a.done;a=r.next()){var c=a.value.split(":");3===c.length&&i.push({name:c[0].trim(),url:c[1].trim()+":"+c[2].trim()})}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return 0===i.length?null:i},e.prototype.loadContentType=function(e,t,n,i,o){var r=this;this.getFields(i.AppId,t).then((function(t){var a,c;try{for(var s=Object(S.h)(t),p=s.next();!p.done;p=s.next()){var l=p.value,u=l.StaticName;e[u]={key:u,label:u,snip:r.valuePlaceholder(n,u,i),help:l.Metadata.merged.Notes||" ("+l.Type.toLowerCase()+") "};var d=Object(N.a)(e[u]);r.attachSnippets(e,n,u,l.InputType,d,o)}}catch(g){a={error:g}}finally{try{p&&!p.done&&(c=s.return)&&c.call(s)}finally{if(a)throw a.error}}var f=["EntityId","EntityTitle","EntityGuid","EntityType","IsPublished","Modified"];if(t.length)for(var h=0;h<f.length;h++)e[f[h]]={key:f[h],label:f[h],snip:r.valuePlaceholder(n,f[h],i),help:r.translate.instant("SourceEditorSnippets.StandardFields."+f[h]+".Help")}}))},e.prototype.valuePlaceholder=function(e,t,n){return n.Type.indexOf("Razor")>-1?"@"+e+"."+t:"["+e.replace(".",":")+":"+t+"]"},e.prototype.getFields=function(e,t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(H.b),{params:{appid:e.toString(),staticName:t}}).toPromise().then((function(e){var t,n;if(e=e.filter((function(e){return e.Type!==D.a.Empty})))try{for(var i=Object(S.h)(e),o=i.next();!o.done;o=i.next()){var r=o.value;if(r.Metadata){var a=r.Metadata,c=a.All,s=a[r.Type],p=a[r.InputType];a.merged=Object(S.a)(Object(S.a)(Object(S.a)({},c),s),p)}}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return e}))},e.prototype.attachSnippets=function(e,t,n,i,o,r){var a=r[i];if(i.indexOf("-")){var c=i.substr(0,i.indexOf("-"));if(c){var s=r[c];s&&(a=a?a.concat(s):s)}}if(a){void 0===e[n].more&&(e[n].more=[]);for(var p=e[n].more,l=0;l<a.length;l++)try{p[n+"-"+a[l].name]=Object.assign({},o,{key:n+" - "+a[l].name,label:a[l].name,snip:this.localizeGenericSnippet(a[l].content,t,n),collapse:!0})}finally{}}},e.prototype.localizeGenericSnippet=function(e,t,n){return e.replace(/(\$\{[0-9]+\:)var(\})/gi,"$1"+t+"$2").replace(/(\$\{[0-9]+\:)prop(\})/gi,"$1"+n+"$2")},e.\u0275fac=function(t){return new(t||e)(M.Wb(o.b),M.Wb(E.a),M.Wb(f.e))},e.\u0275prov=M.Ib({token:e,factory:e.\u0275fac}),e}(),V=n("e4iD"),U=n("Zfm5"),K=function(){function e(){}return e.prototype.transform=function(e){return null==e||e.sort((function(e,t){return e.isFolder<t.isFolder?1:e.isFolder>t.isFolder?-1:0})),e},e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=M.Lb({name:"sortItems",type:e,pure:!0}),e}(),W=function(){function e(e){this.sanitizer=e}return e.prototype.transform=function(e,t){return this.sanitizer.bypassSecurityTrustStyle("padding-left: "+(t?8*e:0===e?8:8*e+16)+"px;")},e.\u0275fac=function(t){return new(t||e)(M.Mb(V.b))},e.\u0275pipe=M.Lb({name:"depthPadding",type:e,pure:!0}),e}();function Q(e,t){1&e&&M.Ob(0)}var G=function(e){return{item:e}};function Y(e,t){if(1&e&&(M.Qb(0),M.Lc(1,Q,1,0,"ng-container",5),M.Pb()),2&e){var n=t.$implicit;M.ec();var i=M.yc(5);M.Ab(1),M.kc("ngTemplateOutlet",i)("ngTemplateOutletContext",M.oc(2,G,n))}}var J=function(e){return{active:e}};function q(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div",8),M.ac("click",(function(){M.Ac(n);var e=M.ec().item;return M.ec().openTemplate(e.pathFromRoot)})),M.fc(1,"depthPadding"),M.Nc(2),M.Rb()}if(2&e){var i=M.ec().item,o=M.ec();M.Hc(M.hc(1,5,i.depth,i.isFolder)),M.kc("ngClass",M.oc(8,J,o.toggledItems.includes(i.pathFromRoot)))("matTooltip",i.name),M.Ab(2),M.Pc(" ",i.name," ")}}function X(e,t){1&e&&M.Ob(0)}function Z(e,t){if(1&e&&(M.Qb(0),M.Lc(1,X,1,0,"ng-container",5),M.Pb()),2&e){var n=t.$implicit;M.ec(4);var i=M.yc(5);M.Ab(1),M.kc("ngTemplateOutlet",i)("ngTemplateOutletContext",M.oc(2,G,n))}}function ee(e,t){if(1&e&&(M.Qb(0),M.Lc(1,Z,2,4,"ng-container",1),M.fc(2,"sortItems"),M.Pb()),2&e){var n=M.ec(2).item;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.children))}}function te(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",9),M.ac("click",(function(){M.Ac(n);var e=M.ec().item;return M.ec().toggleItem(e.pathFromRoot)})),M.fc(2,"depthPadding"),M.Sb(3,"div",10),M.Sb(4,"mat-icon"),M.Nc(5),M.Rb(),M.Sb(6,"span"),M.Nc(7),M.Rb(),M.Rb(),M.Sb(8,"div",11),M.ac("click",(function(){M.Ac(n);var e=M.ec().item;return M.ec().addFile(e.pathFromRoot)})),M.Sb(9,"mat-icon"),M.Nc(10,"add"),M.Rb(),M.Rb(),M.Rb(),M.Lc(11,ee,3,3,"ng-container",7),M.Rb()}if(2&e){var i=M.ec().item,o=M.ec();M.Ab(1),M.Hc(M.hc(2,6,i.depth,i.isFolder)),M.Ab(2),M.kc("matTooltip",i.name),M.Ab(2),M.Pc(" ",o.toggledItems.includes(i.pathFromRoot)?"keyboard_arrow_down":"keyboard_arrow_right"," "),M.Ab(2),M.Oc(i.name),M.Ab(4),M.kc("ngIf",o.toggledItems.includes(i.pathFromRoot))}}function ne(e,t){if(1&e&&(M.Lc(0,q,3,10,"div",6),M.Lc(1,te,12,9,"div",7)),2&e){var n=t.item;M.kc("ngIf",!n.isFolder),M.Ab(1),M.kc("ngIf",n.isFolder)}}var ie=function(){function e(e){this.dialogService=e,this.createTemplate=new M.n,this.toggledItems=[]}return e.prototype.ngOnInit=function(){},e.prototype.ngOnChanges=function(e){var t,n;(null===(t=e.templates)||void 0===t?void 0:t.currentValue)&&(this.tree=function(e){var t,n;if(!e)return[];var i=[];try{for(var o=Object(S.h)(e),r=o.next();!r.done;r=o.next())for(var a=i,c=r.value.split("/"),s=c[c.length-1],p="",l=function(e){var t=c[e];p+=e?"/"+t:t;var n=a.find((function(e){return e.name===t}));if(n)a=n.children;else{var i=Object(S.a)({depth:e,name:t,pathFromRoot:p,isFolder:t!==s},t!==s&&{children:[]});a.push(i),a=i.children}},u=0;u<c.length;u++)l(u)}catch(d){t={error:d}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i}(this.templates)),(null===(n=e.view)||void 0===n?void 0:n.currentValue)&&this.showFileInTree(this.view.FileName)},e.prototype.openTemplate=function(e){this.dialogService.openCodeFile(e)},e.prototype.toggleItem=function(e){var t,n,i;-1===(i=(n=this.toggledItems).indexOf(t=e))?n.push(t):n.splice(i,1)},e.prototype.addFile=function(e){this.createTemplate.emit(e)},e.prototype.showFileInTree=function(e){var t,n;if(null!=e&&!this.toggledItems.includes(e)){var i=e.split("/"),o="";try{for(var r=Object(S.h)(i),a=r.next();!a.done;a=r.next()){var c=a.value;this.toggledItems.includes(o=o?o+"/"+c:c)||this.toggleItem(o)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.\u0275fac=function(t){return new(t||e)(M.Mb(m.a))},e.\u0275cmp=M.Gb({type:e,selectors:[["app-code-templates"]],inputs:{view:"view",templates:"templates"},outputs:{createTemplate:"createTemplate"},features:[M.yb],decls:10,vars:3,consts:[[1,"editor-active-explorer","fancy-scrollbar-dark","explorer-wrapper"],[4,"ngFor","ngForOf"],["fileOrFolder",""],[1,"create-button-wrapper"],["mat-icon-button","","matTooltip","Create file",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","file","matTooltipShowDelay","750",3,"style","ngClass","matTooltip","click",4,"ngIf"],[4,"ngIf"],["matTooltipShowDelay","750",1,"file",3,"ngClass","matTooltip","click"],[1,"folder-name-wrapper",3,"click"],["matTooltipShowDelay","750",1,"folder-name",3,"matTooltip"],["matTooltipShowDelay","750","matTooltip","Create file in this folder","appClickStopPropagation","",1,"add-item",3,"click"]],template:function(e,t){1&e&&(M.Sb(0,"div",0),M.Sb(1,"div"),M.Lc(2,Y,2,4,"ng-container",1),M.fc(3,"sortItems"),M.Lc(4,ne,2,2,"ng-template",null,2,M.Mc),M.Rb(),M.Sb(6,"div",3),M.Sb(7,"button",4),M.ac("click",(function(){return t.addFile()})),M.Sb(8,"mat-icon"),M.Nc(9,"add"),M.Rb(),M.Rb(),M.Rb(),M.Rb()),2&e&&(M.Ab(2),M.kc("ngForOf",M.gc(3,1,t.tree)))},directives:[i.l,a.a,d.a,p.a,i.r,i.m,i.k,U.a],pipes:[K,W],styles:[".explorer-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.create-button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.file[_ngcontent-%COMP%]{cursor:pointer;padding:4px 0 4px 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none}.file[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.file.active[_ngcontent-%COMP%]{background-color:#37373d}.folder-name-wrapper[_ngcontent-%COMP%]{display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}.folder-name-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.folder-name-wrapper[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;white-space:nowrap;padding:3px 0;flex:1 1 auto}.folder-name-wrapper[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%]{margin-right:4px;display:none;align-items:center;justify-content:center;padding:3px}.folder-name-wrapper[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.folder-name-wrapper[_ngcontent-%COMP%]:hover   .add-item[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e}();function oe(e,t){var n=t.indexOf(e);-1===n?t.push(e):t.splice(n,1)}var re=function(){function e(){}return e.prototype.transform=function(e){return typeof e!=typeof{}?e:Object.keys(e).map((function(t){return e[t]}))},e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=M.Lb({name:"objectToArray",type:e,pure:!0}),e}(),ae=n("KSFr");function ce(e,t){if(1&e){var n=M.Tb();M.Sb(0,"mat-icon",12),M.ac("click",(function(){M.Ac(n);var e=M.ec().$implicit;return M.ec(5).toggleMore(e)})),M.Nc(1),M.Rb()}if(2&e){var i=M.ec().$implicit,o=M.ec(5);M.Ab(1),M.Pc(" ",o.toggledMores.includes(i)?"more_vert":"more_horiz"," ")}}function se(e,t){if(1&e&&(M.Sb(0,"div"),M.Sb(1,"a",15),M.Nc(2),M.Rb(),M.Rb()),2&e){var n=t.$implicit;M.Ab(1),M.kc("href",n.url,M.Dc),M.Ab(1),M.Oc(n.name)}}function pe(e,t){if(1&e&&(M.Sb(0,"div",13),M.Nb(1,"div",14),M.fc(2,"safeHtml"),M.Lc(3,se,3,2,"div",1),M.Rb()),2&e){var n=M.ec().$implicit;M.Ab(1),M.kc("innerHTML",M.gc(2,2,n.help),M.Bc),M.Ab(2),M.kc("ngForOf",n.links)}}function le(e,t){if(1&e&&(M.Sb(0,"div"),M.Sb(1,"a",15),M.Nc(2),M.Rb(),M.Rb()),2&e){var n=t.$implicit;M.Ab(1),M.kc("href",n.url,M.Dc),M.Ab(1),M.Oc(n.name)}}function ue(e,t){if(1&e&&(M.Sb(0,"div",18),M.Nb(1,"div",14),M.fc(2,"safeHtml"),M.Lc(3,le,3,2,"div",1),M.Rb()),2&e){var n=M.ec().$implicit;M.Ab(1),M.kc("innerHTML",M.gc(2,2,n.help),M.Bc),M.Ab(2),M.kc("ngForOf",n.links)}}function de(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",7),M.Sb(2,"div",16),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec(7).addSnippet(e.snip)})),M.Nc(3),M.Rb(),M.Sb(4,"mat-icon",10),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec(7).toggleInfo(e)})),M.Nc(5," info "),M.Rb(),M.Rb(),M.Lc(6,ue,4,4,"div",17),M.Rb()}if(2&e){var i=t.$implicit,o=M.ec(7);M.Ab(2),M.kc("matTooltip",i.snip),M.Ab(1),M.Pc(" ",i.label," "),M.Ab(3),M.kc("ngIf",o.toggledInfos.includes(i))}}function fe(e,t){if(1&e&&(M.Qb(0),M.Lc(1,de,7,3,"div",1),M.fc(2,"objectToArray"),M.Pb()),2&e){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.more))}}function he(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div",6),M.Sb(1,"div",7),M.Sb(2,"div",8),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec(5).addSnippet(e.snip)})),M.Nc(3),M.Rb(),M.Lc(4,ce,2,1,"mat-icon",9),M.Sb(5,"mat-icon",10),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec(5).toggleInfo(e)})),M.Nc(6," info "),M.Rb(),M.Rb(),M.Lc(7,pe,4,4,"div",11),M.Lc(8,fe,3,3,"ng-container",3),M.Rb()}if(2&e){var i=t.$implicit,o=M.ec(5);M.Ab(2),M.kc("matTooltip",i.snip),M.Ab(1),M.Pc(" ",i.label," "),M.Ab(1),M.kc("ngIf",i.more),M.Ab(3),M.kc("ngIf",o.toggledInfos.includes(i)),M.Ab(1),M.kc("ngIf",o.toggledMores.includes(i))}}function ge(e,t){if(1&e&&(M.Qb(0),M.Lc(1,he,9,5,"div",5),M.fc(2,"objectToArray"),M.Pb()),2&e){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.value))}}function be(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",4),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec(3).toggleFolder(e)})),M.fc(2,"translate"),M.Sb(3,"mat-icon"),M.Nc(4),M.Rb(),M.Sb(5,"span"),M.Nc(6),M.fc(7,"translate"),M.Rb(),M.Rb(),M.Lc(8,ge,3,3,"ng-container",3),M.Rb()}if(2&e){var i=t.$implicit,o=M.ec(2).$implicit,r=M.ec();M.Ab(1),M.kc("matTooltip",M.gc(2,4,"SourceEditorSnippets."+o.key+"."+i.key+".Help")),M.Ab(3),M.Oc(r.toggledFolders.includes(i)?"keyboard_arrow_down":"keyboard_arrow_right"),M.Ab(2),M.Oc(M.gc(7,6,"SourceEditorSnippets."+o.key+"."+i.key+".Title")),M.Ab(2),M.kc("ngIf",r.toggledFolders.includes(i))}}function me(e,t){if(1&e&&(M.Qb(0),M.Lc(1,be,9,8,"div",1),M.fc(2,"keyvalue"),M.Pb()),2&e){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.value))}}function ve(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",2),M.ac("click",(function(){M.Ac(n);var e=t.$implicit;return M.ec().toggleSection(e)})),M.fc(2,"translate"),M.Sb(3,"mat-icon"),M.Nc(4),M.Rb(),M.Sb(5,"span"),M.Nc(6),M.fc(7,"translate"),M.Rb(),M.Rb(),M.Lc(8,me,3,3,"ng-container",3),M.Rb()}if(2&e){var i=t.$implicit,o=M.ec();M.Ab(1),M.kc("matTooltip",M.gc(2,4,"SourceEditorSnippets."+i.key+".Help")),M.Ab(3),M.Oc(o.toggledSections.includes(i)?"keyboard_arrow_down":"keyboard_arrow_right"),M.Ab(2),M.Oc(M.gc(7,6,"SourceEditorSnippets."+i.key+".Title")),M.Ab(2),M.kc("ngIf",o.toggledSections.includes(i))}}var ye=function(){function e(){this.insertSnippet=new M.n,this.toggledSections=[],this.toggledFolders=[],this.toggledInfos=[],this.toggledMores=[]}return e.prototype.ngOnInit=function(){},e.prototype.addSnippet=function(e){this.insertSnippet.emit(e)},e.prototype.toggleSection=function(e){oe(e,this.toggledSections)},e.prototype.toggleFolder=function(e){oe(e,this.toggledFolders)},e.prototype.toggleInfo=function(e){oe(e,this.toggledInfos)},e.prototype.toggleMore=function(e){oe(e,this.toggledMores)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=M.Gb({type:e,selectors:[["app-code-snippets"]],inputs:{snippets:"snippets"},outputs:{insertSnippet:"insertSnippet"},decls:3,vars:3,consts:[[1,"editor-active-explorer","fancy-scrollbar-dark"],[4,"ngFor","ngForOf"],["matTooltipShowDelay","750",1,"collapsible-header","section",3,"matTooltip","click"],[4,"ngIf"],["matTooltipShowDelay","750",1,"collapsible-header","folder",3,"matTooltip","click"],["class","snippet",4,"ngFor","ngForOf"],[1,"snippet"],[1,"snippet-label"],["matRipple","","matTooltipShowDelay","750",1,"text",3,"matTooltip","click"],["matTooltip","Show More","matTooltipShowDelay","750",3,"click",4,"ngIf"],["matTooltip","Show Help","matTooltipShowDelay","750","appClickStopPropagation","",3,"click"],["class","snippet-help",4,"ngIf"],["matTooltip","Show More","matTooltipShowDelay","750",3,"click"],[1,"snippet-help"],[1,"text",3,"innerHTML"],["target","_blank",3,"href"],["matRipple","","matTooltipShowDelay","750",1,"text","text-more",3,"matTooltip","click"],["class","snippet-help snippet-help-more",4,"ngIf"],[1,"snippet-help","snippet-help-more"]],template:function(e,t){1&e&&(M.Sb(0,"div",0),M.Lc(1,ve,9,8,"div",1),M.fc(2,"keyvalue"),M.Rb()),2&e&&(M.Ab(1),M.kc("ngForOf",M.gc(2,1,t.snippets)))},directives:[i.l,d.a,p.a,i.m,c.q,U.a],pipes:[i.g,f.d,re,ae.a],styles:[".collapsible-header[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;overflow:hidden;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:3px 0}.collapsible-header.section[_ngcontent-%COMP%]{background-color:#383838;font-weight:500}.collapsible-header.folder[_ngcontent-%COMP%]{padding-left:8px}.collapsible-header.folder[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.collapsible-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.snippet[_ngcontent-%COMP%]{padding-right:8px}.snippet[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.snippet-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none}.snippet-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{cursor:pointer;padding:3px 0 3px 32px;flex:1 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.snippet-label[_ngcontent-%COMP%]   .text-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-label[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;width:18px;height:18px;font-size:18px}.snippet-help[_ngcontent-%COMP%]{padding:3px 18px 3px 32px}.snippet-help-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px;font-style:oblique;word-break:break-word}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]     p{margin:0}"],changeDetection:0}),e}();function Se(e,t){if(1&e){var n=M.Tb();M.Sb(0,"app-ace-editor",9),M.ac("ngModelChange",(function(e){return M.Ac(n),M.ec(2).codeChanged(e)})),M.Rb()}if(2&e){var i=M.ec().ngIf,o=M.ec();M.kc("filename",i.view.FileName)("ngModel",i.view.Code)("snippets",i.editorSnipps)("toggleResize",!o.activeExplorer)}}var xe=function(e){return{active:e}};function we(e,t){if(1&e){var n=M.Tb();M.Sb(0,"div",1),M.Sb(1,"div",2),M.Sb(2,"div",3),M.ac("click",(function(){M.Ac(n);var e=M.ec();return e.toggleExplorer(e.explorer.templates)})),M.Sb(3,"mat-icon"),M.Nc(4,"file_copy"),M.Rb(),M.Rb(),M.Sb(5,"div",4),M.ac("click",(function(){M.Ac(n);var e=M.ec();return e.toggleExplorer(e.explorer.snippets)})),M.Sb(6,"mat-icon"),M.Nc(7,"code"),M.Rb(),M.Rb(),M.Rb(),M.Sb(8,"app-code-templates",5),M.ac("createTemplate",(function(e){return M.Ac(n),M.ec().createTemplate(e)})),M.Rb(),M.Sb(9,"app-code-snippets",6),M.ac("insertSnippet",(function(e){return M.Ac(n),M.ec().changeInsertSnipp(e)})),M.Rb(),M.Lc(10,Se,1,4,"app-ace-editor",7),M.Sb(11,"button",8),M.ac("click",(function(){return M.Ac(n),M.ec().save()})),M.Sb(12,"mat-icon"),M.Nc(13,"done"),M.Rb(),M.Rb(),M.Rb()}if(2&e){var i=t.ngIf,o=M.ec();M.Ab(2),M.kc("ngClass",M.oc(8,xe,o.activeExplorer===o.explorer.templates)),M.Ab(3),M.kc("ngClass",M.oc(10,xe,o.activeExplorer===o.explorer.snippets)),M.Ab(3),M.kc("hidden",o.activeExplorer!==o.explorer.templates)("view",i.view)("templates",i.templates),M.Ab(1),M.kc("hidden",o.activeExplorer!==o.explorer.snippets)("snippets",i.explorerSnipps),M.Ab(1),M.kc("ngIf",i.view)}}var ke=[{path:"",component:function(){function e(e,t,n,i,o,r,a,c,s,p){this.context=e,this.route=t,this.snackBar=n,this.snackBarStack=i,this.sourceService=o,this.snippetsService=r,this.zone=a,this.titleService=c,this.dialogService=s,this.sanitizeService=p,this.explorer={templates:"templates",snippets:"snippets"},this.activeExplorer=this.explorer.templates,this.view$=new x.a(null),this.templates$=new x.a(null),this.explorerSnipps$=new x.a(null),this.editorSnipps$=new x.a(null),this.templateVars$=Object(w.a)([this.view$,this.templates$,this.explorerSnipps$,this.editorSnipps$]).pipe(Object(I.a)((function(e){var t=Object(S.f)(e,4);return{view:t[0],templates:t[1],explorerSnipps:t[2],editorSnipps:t[3]}}))),this.subscription=new k.a,this.context.init(this.route),this.calculateViewKey(),this.attachListeners()}return e.prototype.ngOnInit=function(){var e=this,t=this.sourceService.get(this.viewKey),n=this.sourceService.getTemplates();Object(T.a)([t,n]).subscribe((function(t){var n=Object(S.f)(t,2),i=n[0],o=n[1];e.view$.next(i),e.savedCode=e.view$.value.Code,e.titleService.setTitle(e.view$.value.FileName+" - Code Editor"),e.templates$.next(o),e.showCodeAndEditionWarnings(i,o),e.snippetsService.getSnippets(e.view$.value).then((function(t){e.explorerSnipps$.next(t.sets),e.editorSnipps$.next(t.list)}))}))},e.prototype.ngOnDestroy=function(){this.view$.complete(),this.templates$.complete(),this.explorerSnipps$.complete(),this.editorSnipps$.complete(),this.subscription.unsubscribe()},e.prototype.toggleExplorer=function(e){this.activeExplorer=this.activeExplorer===e?null:e},e.prototype.createTemplate=function(e){var t=this,n="File name:",i=C.b;("api"===e||(null==e?void 0:e.startsWith("api/")))&&(n="Controller name:",i=C.a);var o=prompt(n,i);null!==o&&0!==o.length&&(o=this.sanitizeService.sanitizePath(o),null!=e&&(o=e+"/"+o),this.sourceService.createTemplate(o).subscribe((function(e){t.sourceService.getTemplates().subscribe((function(e){t.templates$.next(e)}))})))},e.prototype.changeInsertSnipp=function(e){this.aceEditorRef.insertSnippet(e)},e.prototype.codeChanged=function(e){this.view$.next(Object(S.a)(Object(S.a)({},this.view$.value),{Code:e}))},e.prototype.save=function(){var e=this;this.snackBar.open("Saving...");var t=this.view$.value.Code;this.sourceService.save(this.viewKey,this.view$.value).subscribe({next:function(n){n?(e.savedCode=t,t=null,e.snackBar.open("Saved",null,{duration:2e3})):e.snackBar.open("Failed",null,{duration:2e3})},error:function(){e.snackBar.open("Failed",null,{duration:2e3})}})},e.prototype.calculateViewKey=function(){var e=sessionStorage.getItem(A.h),t=JSON.parse(e)[0];this.viewKey=t.EntityId||t.Path},e.prototype.showCodeAndEditionWarnings=function(e,t){var n=this,i=e.FileName,o=i.indexOf("/")>-1?i.lastIndexOf("/")+1:0,r=0===o?"":i.substring(0,o),a=i.substring(o),c=a.substring(0,a.length-e.Extension.length)+".code"+e.Extension,s=t.find((function(e){return e===r+c})),p=t.filter((function(e){return e.endsWith(a)})).length-1;s&&this.snackBarStack.add("This template also has a code-behind file '"+s+"'.","Open").subscribe((function(){n.dialogService.openCodeFile(s)})),p&&this.snackBarStack.add("There are "+p+" other editions of this. You may be editing an edition which is not the one you see.","Help").subscribe((function(){window.open("https://r.2sxc.org/polymorphism","_blank")}))},e.prototype.attachListeners=function(){var e=this;this.zone.runOutsideAngular((function(){e.subscription.add(Object(O.a)(window,"beforeunload").subscribe((function(t){e.savedCode!==e.view$.value.Code&&(t.preventDefault(),t.returnValue="")}))),e.subscription.add(Object(O.a)(window,"keydown").subscribe((function(t){83===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(t.preventDefault(),e.zone.run((function(){e.save()})))})))}))},e.\u0275fac=function(t){return new(t||e)(M.Mb(b.a),M.Mb(y.a),M.Mb(u.b),M.Mb(_),M.Mb(z),M.Mb(B),M.Mb(M.A),M.Mb(V.c),M.Mb(m.a),M.Mb(g.a))},e.\u0275cmp=M.Gb({type:e,selectors:[["app-code-editor"]],viewQuery:function(e,t){var n;1&e&&M.Sc($,!0),2&e&&M.xc(n=M.bc())&&(t.aceEditorRef=n.first)},decls:2,vars:3,consts:[["class","editor-root",4,"ngIf"],[1,"editor-root"],[1,"editor-side-toolbar"],["matTooltip","Templates",1,"button",3,"ngClass","click"],["matTooltip","Snippets",1,"button",3,"ngClass","click"],[3,"hidden","view","templates","createTemplate"],[3,"hidden","snippets","insertSnippet"],[3,"filename","ngModel","snippets","toggleResize","ngModelChange",4,"ngIf"],["mat-fab","","mat-elevation-z24","","matTooltip","Click to save or CTRL + S",3,"click"],[3,"filename","ngModel","snippets","toggleResize","ngModelChange"]],template:function(e,t){1&e&&(M.Lc(0,we,14,12,"div",0),M.fc(1,"async")),2&e&&M.kc("ngIf",M.gc(1,1,t.templateVars$))},directives:[i.m,d.a,i.k,p.a,ie,ye,a.a,$,r.m,r.p],pipes:[i.b],styles:[".mat-fab[_ngcontent-%COMP%]{position:absolute;right:48px;bottom:32px;z-index:10}"],changeDetection:0}),e}()}],Te=function(){function e(){}return e.\u0275mod=M.Kb({type:e}),e.\u0275inj=M.Jb({factory:function(t){return new(t||e)},imports:[[y.d.forChild(ke)],y.d]}),e}();function Oe(e){return new h.a(e,"./i18n/code-editor.",".js?"+sxcVersion)}var Ie=function(){function e(){}return e.\u0275mod=M.Kb({type:e}),e.\u0275inj=M.Jb({factory:function(t){return new(t||e)},providers:[b.a,z,m.a,B,g.a,f.e],imports:[[Te,v.a,i.c,s.f,a.b,p.b,d.b,u.c,r.h,l.b,c.r,f.c.forChild({loader:{provide:f.b,useFactory:Oe,deps:[o.b]},defaultLanguage:"en",isolate:!0})]]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.07.03/ng-edit/code-editor-code-editor-module.3d7f4e78eb5de38c849b.js.map