(window.webpackJsonp=window.webpackJsonp||[]).push([[21,52],{"+UDY":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("EM62"),o=function(){function t(){this.cleanBadPath=function(t){if(!t)return t;var e="_";return t.replace(/[\?<>\\:\*\|":]/g,e).replace(/[\x00-\x1f\x80-\x9f]/g,e).replace(/^\.+$/,e).replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,e).replace(/[\. ]+$/,e)}}return t.prototype.removeFromStart=function(t,e){if(!t)return t;for(;t.substring(0,1)===e;)t=t.substring(1);return t},t.prototype.removeFromEnd=function(t,e){if(!t)return t;for(;t.substring(t.length-1,t.length)===e;)t=t.substring(0,t.length-1);return t},t.prototype.sanitizePath=function(t){return t?(t=this.removeFromStart(t,"/"),t=this.removeFromEnd(t,"/"),t=this.removeFromStart(t,"\\"),t=this.removeFromEnd(t,"\\"),t=this.cleanBadPath(t)):t},t.prototype.sanitizeName=function(t){return t?this.sanitizePath(t).replace(/\//g,"_"):t},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac=function(e){return new(e||t)}}),t}()},"/Foi":function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var i=n("D57K"),o=n("YtkY"),r=n("S36y"),a=n("EM62"),c=n("vobO"),s=n("Iv+g"),p=n("B5/E"),l="admin/field/all",u=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.apiUrl=function(t){return this.dnnContext.$2sxc.http.apiUrl(t)},t.prototype.typeListRetrieve=function(){return this.http.get(this.apiUrl("admin/field/DataTypes"),{params:{appid:this.context.appId.toString()}})},t.prototype.getInputTypesList=function(){return this.http.get(this.apiUrl("admin/field/InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe(Object(o.a)((function(t){return t.map((function(t){return{dataType:t.Type.substring(0,t.Type.indexOf("-")),inputType:t.Type,label:t.Label,description:t.Description}}))})))},t.prototype.getFields=function(t){return this.http.get(this.apiUrl(l),{params:{appid:this.context.appId.toString(),staticName:t.StaticName}}).pipe(Object(o.a)((function(t){var e,n;if(t)try{for(var o=Object(i.h)(t),r=o.next();!r.done;r=o.next()){var a=r.value;if(a.Metadata){var c=a.Metadata,s=c.All,p=c[a.Type],l=c[a.InputType];c.merged=Object(i.a)(Object(i.a)(Object(i.a)({},s),p),l)}}}catch(u){e={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return t})))},t.prototype.reOrder=function(t,e){return this.http.post(this.apiUrl("admin/field/Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),order:JSON.stringify(t)}})},t.prototype.setTitle=function(t,e){return this.http.post(this.apiUrl(r.b+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),attributeId:t.Id.toString()}})},t.prototype.rename=function(t,e,n){return this.http.post(this.apiUrl("admin/field/Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),attributeId:t.Id.toString(),newName:n}})},t.prototype.delete=function(t,e){if(t.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl("admin/field/Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:e.Id.toString(),attributeId:t.Id.toString()}})},t.prototype.add=function(t,e){return this.http.post(this.apiUrl("admin/field/Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:e.toString(),Id:t.Id.toString(),Type:t.Type,InputType:t.InputType,StaticName:t.StaticName,IsTitle:t.IsTitle.toString(),Index:t.SortOrder.toString()}})},t.prototype.updateInputType=function(t,e,n){return this.http.post(this.apiUrl("admin/field/InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:t.toString(),field:e,inputType:n}})},t.\u0275fac=function(e){return new(e||t)(a.Wb(c.b),a.Wb(s.a),a.Wb(p.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t}()},S36y:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return l}));var i=n("D57K"),o=n("YtkY"),r=n("EM62"),a=n("vobO"),c=n("Iv+g"),s=n("B5/E"),p="admin/type/",l=function(){function t(t,e,n){this.http=t,this.context=e,this.dnnContext=n}return t.prototype.apiUrl=function(t){return this.dnnContext.$2sxc.http.apiUrl(t)},t.prototype.retrieveContentType=function(t){return this.http.get(this.apiUrl(p+"get"),{params:{appId:this.context.appId.toString(),contentTypeId:t}})},t.prototype.retrieveContentTypes=function(t){return this.http.get(this.apiUrl(p+"list"),{params:{appId:this.context.appId.toString(),scope:t}})},t.prototype.getScopes=function(){return this.http.get(this.apiUrl(p+"scopes"),{params:{appId:this.context.appId.toString()}}).pipe(Object(o.a)((function(t){return Object.keys(t).map((function(e){return{name:t[e],value:e}}))})))},t.prototype.save=function(t){return this.http.post(this.apiUrl(p+"save"),t,{params:{appid:this.context.appId.toString()}})},t.prototype.delete=function(t){return this.http.delete(this.apiUrl(p+"delete"),{params:{appid:this.context.appId.toString(),staticName:t.StaticName}})},t.prototype.import=function(t){var e,n,o=new FormData;try{for(var r=Object(i.h)(t),a=r.next();!a.done;a=r.next())o.append("File",a.value)}catch(c){e={error:c}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return this.http.post(this.apiUrl(p+"import"),o,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})},t.prototype.createGhost=function(t){return this.http.post(this.apiUrl(p+"addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:t}})},t.\u0275fac=function(e){return new(e||t)(r.Wb(a.b),r.Wb(c.a),r.Wb(s.a))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t}()},geKs:function(t,e,n){"use strict";n.d(e,"f",(function(){return i.d})),n.d(e,"d",(function(){return i.b})),n.d(e,"e",(function(){return i.c})),n.d(e,"a",(function(){return o.a})),n.d(e,"h",(function(){return r.c})),n.d(e,"g",(function(){return r.b})),n.d(e,"b",(function(){return r.a})),n.d(e,"c",(function(){return a.a}));var i=n("6fnQ"),o=(n("iKpp"),n("kfUh"),n("JXuk")),r=(n("0adC"),n("b67o")),a=(n("IMfk"),n("2FQU"));n("39Ct"),n("gatd"),n("Scw0")},iluC:function(t,e,n){"use strict";n.r(e),n.d(e,"translateLoaderFactoryCode",(function(){return kt})),n.d(e,"CodeEditorModule",(function(){return It}));var i=n("2kYt"),o=n("nIj0"),r=n("PBFl"),a=n("mFH5"),c=n("OZ4H"),s=n("bFHC"),p=n("R7+U"),l=n("W1gw"),u=n("Y2X+"),d=n("s2Ay"),f=n("+UDY"),h=n("Iv+g"),g=n("H0VJ"),b=n("O6Xb"),m=n("OVst"),v=n("sEIs"),y=n("D57K"),S=n("C05f"),x=n("HM3f"),w=n("bwdy"),O=n("P4Xx"),T=n("KTx3"),k=n("YtkY"),I=n("Q+Kz"),C=n("0ELX"),M=n("EM62"),A=n("1/u/"),P={mode:"ace/mode/razor",wrap:!0,useSoftTabs:!0,theme:"ace/theme/sqlserver",fontSize:14,fontFamily:"Consolas, Courier New, monospace",showGutter:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},F=["editor"],R=function(){function t(t){this.zone=t,this.value="",this.propagateChange=function(){},this.propagateTouched=function(){}}return t.prototype.ngOnInit=function(){Object(A.a)([{test:"ace",src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ace.min.js"},{test:null,src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ext-modelist.min.js"},{test:null,src:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11/ext-language_tools.min.js"}],this.aceLoaded.bind(this))},t.prototype.ngOnChanges=function(t){var e,n,i,o,r=this,a=null===(e=t.filename)||void 0===e?void 0:e.currentValue,c=null===(n=t.snippets)||void 0===n?void 0:n.currentValue;this.updateValues(a,c),this.editor&&(null===(i=t.toggleResize)||void 0===i?void 0:i.currentValue)!==(null===(o=t.toggleResize)||void 0===o?void 0:o.previousValue)&&this.zone.runOutsideAngular((function(){setTimeout((function(){r.editor.resize()}),50)}))},t.prototype.insertSnippet=function(t){var e=this;this.zone.runOutsideAngular((function(){ace.require("ace/snippets").snippetManager.insertSnippet(e.editor,t),e.editor.focus()}))},t.prototype.writeValue=function(t){var e=this;this.value=t||"",this.editor&&this.zone.runOutsideAngular((function(){var t=e.editor.getCursorPosition();e.editor.setValue(e.value,-1),e.editor.moveCursorToPosition(t)}))},t.prototype.registerOnChange=function(t){this.propagateChange=t},t.prototype.registerOnTouched=function(t){this.propagateTouched=t},t.prototype.ngOnDestroy=function(){var t=this;this.zone.runOutsideAngular((function(){t.editor.destroy(),t.editor.container.remove(),t.editor=null}))},t.prototype.aceLoaded=function(){var t=this;this.zone.runOutsideAngular((function(){ace.config.set("basePath","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11"),t.editor=ace.edit(t.editorRef.nativeElement,P),t.editor.$blockScrolling=1/0,t.editor.session.setValue(t.value),t.updateValues(t.filename,t.snippets),t.editor.on("change",t.onEditorValueChange.bind(t)),t.editor.on("blur",t.onEditorBlurred.bind(t)),t.editor.focus()}))},t.prototype.onEditorValueChange=function(){var t=this;this.zone.run((function(){t.propagateChange(t.editor.getValue())}))},t.prototype.onEditorBlurred=function(){var t=this;this.zone.run((function(){t.propagateTouched(t.editor.getValue())}))},t.prototype.updateValues=function(t,e){var n=this;this.editor&&this.zone.runOutsideAngular((function(){if(t){var i=ace.require("ace/ext/modelist").getModeForPath(t).mode;n.editor.session.setMode(i)}e&&ace.require("ace/snippets").snippetManager.register(n.snippets)}))},t.\u0275fac=function(e){return new(e||t)(M.Mb(M.A))},t.\u0275cmp=M.Gb({type:t,selectors:[["app-ace-editor"]],viewQuery:function(t,e){var n;1&t&&M.Tc(F,!0),2&t&&M.xc(n=M.bc())&&(e.editorRef=n.first)},inputs:{filename:"filename",snippets:"snippets",toggleResize:"toggleResize"},features:[M.zb([{provide:o.q,useExisting:Object(M.U)((function(){return t})),multi:!0}]),M.yb],decls:2,vars:0,consts:[[2,"width","100%","height","100%"],["editor",""]],template:function(t,e){1&t&&M.Nb(0,"div",0,1)},styles:["[_nghost-%COMP%] {display: block; width: 100%; height: 100%}"],changeDetection:0}),t}(),j=n("ZTXN"),$=function(){function t(t){this.snackBar=t,this.defaultDuration=3e3,this.processingMessage=!1,this.messageQueue=[]}return t.prototype.add=function(t,e,n){void 0===n&&(n={duration:this.defaultDuration});var i=new j.a;return this.messageQueue.push({message:t,action:e,config:n,triggered$:i}),this.processingMessage||this.showSnackBar(),i.asObservable()},t.prototype.showSnackBar=function(){var t=this,e=this.messageQueue.shift();if(null!=e){this.processingMessage=!0;var n=this.snackBar.open(e.message,e.action,e.config);n.afterDismissed().subscribe((function(){e.triggered$.complete(),t.showSnackBar()})),n.onAction().subscribe((function(){e.triggered$.next()}))}else this.processingMessage=!1},t.prototype.ngOnDestroy=function(){var t,e;try{for(var n=Object(y.h)(this.messageQueue),i=n.next();!i.done;i=n.next())i.value.triggered$.complete()}catch(o){t={error:o}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.messageQueue=null},t.\u0275fac=function(e){return new(e||t)(M.Wb(l.b))},t.\u0275prov=M.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),_=n("geKs"),E=n("vobO"),z=n("B5/E"),D=function(){function t(t,e,n){var i;this.http=t,this.context=e,this.dnnContext=n,this.isShared=null!==(i=sessionStorage.getItem(C.h))&&void 0!==i?i:(!1).toString()}return t.prototype.get=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_.d),{params:Object(y.a)({appId:this.context.appId.toString(),global:this.isShared},this.templateIdOrPath(t))}).pipe(Object(k.a)((function(t){if("auto"===t.Type.toLowerCase())switch(t.Extension.toLowerCase()){case".cs":case".cshtml":t.Type="Razor";break;case".html":case".css":case".js":t.Type="Token"}return t})))},t.prototype.save=function(t,e){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_.d),e,{params:Object(y.a)({appId:this.context.appId.toString(),global:this.isShared},this.templateIdOrPath(t))})},t.prototype.getTemplates=function(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_.f),{params:{appId:this.context.appId.toString(),global:this.isShared,withSubfolders:"true"}})},t.prototype.createTemplate=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_.e),{},{params:{appId:this.context.appId.toString(),global:this.isShared,path:t}})},t.prototype.templateIdOrPath=function(t){return"number"==typeof t?{templateId:t.toString()}:{path:t}},t.\u0275fac=function(e){return new(e||t)(M.Wb(E.b),M.Wb(h.a),M.Wb(z.a))},t.\u0275prov=M.Ib({token:t,factory:t.\u0275fac}),t}(),L=n("9RHM"),U=n("DGvA"),N=n("/Foi"),B=function(){function t(t,e,n){this.http=t,this.dnnContext=e,this.translate=n,this.keyPrefixes=["@","["],this.keyPrefixIndex=function(t){return t.Type.indexOf("Razor")>-1?0:1}}return t.prototype.getSnippets=function(t){return Object(y.b)(this,void 0,void 0,(function(){var e,n,i;return Object(y.e)(this,(function(o){switch(o.label){case 0:return[4,this.http.get("../ng-assets/snippets.json.js").toPromise()];case 1:return e=o.sent(),n=this.filterAwayNotNeededSnippetsList(e.snippets,t),i=this.extractInputTypeSnippets(n),[2,{sets:this.initSnippetsWithConfig(i.standardArray,t,i.inputTypeSnippets),list:i.standardArray}]}}))}))},t.prototype.filterAwayNotNeededSnippetsList=function(t,e){var n,i,o=[];try{for(var r=Object(y.h)(t),a=r.next();!a.done;a=r.next()){var c=a.value,s=this.keyPrefixes.indexOf(c.set[0]);-1!==s&&s!==this.keyPrefixIndex(e)||(s===this.keyPrefixIndex(e)&&(c.set=c.set.substr(1)),o.push(c))}}catch(p){n={error:p}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return o},t.prototype.extractInputTypeSnippets=function(t){var e,n,i=[],o=[];try{for(var r=Object(y.h)(t),a=r.next();!a.done;a=r.next()){var c=a.value;"\\"===c.set[0]?(c.set=c.set.substr(1),o.push(c)):i.push(c)}}catch(s){e={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{standardArray:i,inputTypeSnippets:this.catalogInputTypeSnippets(o)}},t.prototype.catalogInputTypeSnippets=function(t){var e,n,i={};try{for(var o=Object(y.h)(t),r=o.next();!r.done;r=o.next()){var a=r.value;void 0===i[a.subset]&&(i[a.subset]=[]),i[a.subset].push(a)}}catch(c){e={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i},t.prototype.initSnippetsWithConfig=function(t,e,n){return(t=this.makeTree(t)).Content=Object.assign({},t.Content,{Fields:{},PresentationFields:{}}),e.TypeContent&&this.loadContentType(t.Content.Fields,e.TypeContent,"Content",e,n),e.TypeContentPresentation&&this.loadContentType(t.Content.PresentationFields,e.TypeContentPresentation,"Content.Presentation",e,n),e.HasList?(t.List=Object.assign({},t.List,{Fields:{},PresentationFields:{}}),e.TypeList&&this.loadContentType(t.List.Fields,e.TypeList,"Header",e,n),e.TypeListPresentation&&this.loadContentType(t.List.PresentationFields,e.TypeListPresentation,"Header.Presentation",e,n)):delete t.List,e.HasApp&&(t.App.Resources={},t.App.Settings={},this.loadContentType(t.App.Resources,"App-Resources","App.Resources",e,n),this.loadContentType(t.App.Settings,"App-Settings","App.Settings",e,n)),t},t.prototype.makeTree=function(t){var e,n,i={};try{for(var o=Object(y.h)(t),r=o.next();!r.done;r=o.next()){var a=r.value;void 0===i[a.set]&&(i[a.set]={}),void 0===i[a.set][a.subset]&&(i[a.set][a.subset]=[]);var c={key:a.name,label:this.label(a.set,a.subset,a.name),snip:a.content,help:a.help||this.help(a.set,a.subset,a.name),links:this.linksList(a.links)};i[a.set][a.subset].push(c)}}catch(s){e={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i},t.prototype.label=function(t,e,n){var i=this.getHelpKey(t,e,n,".Key"),o=this.translate.instant(i);return o===i&&(o=n),o},t.prototype.getHelpKey=function(t,e,n,i){return"SourceEditorSnippets."+t+"."+e+"."+n+i},t.prototype.help=function(t,e,n){var i=this.getHelpKey(t,e,n,".Help"),o=this.translate.instant(i);return o===i&&(o=""),o},t.prototype.linksList=function(t){var e,n;if(!t)return null;var i=[],o=t.split("\n");try{for(var r=Object(y.h)(o),a=r.next();!a.done;a=r.next()){var c=a.value.split(":");3===c.length&&i.push({name:c[0].trim(),url:c[1].trim()+":"+c[2].trim()})}}catch(s){e={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return 0===i.length?null:i},t.prototype.loadContentType=function(t,e,n,i,o){var r=this;this.getFields(i.AppId,e).then((function(e){var a,c;try{for(var s=Object(y.h)(e),p=s.next();!p.done;p=s.next()){var l=p.value,u=l.StaticName;t[u]={key:u,label:u,snip:r.valuePlaceholder(n,u,i),help:l.Metadata.merged.Notes||" ("+l.Type.toLowerCase()+") "};var d=Object(L.a)(t[u]);r.attachSnippets(t,n,u,l.InputType,d,o)}}catch(g){a={error:g}}finally{try{p&&!p.done&&(c=s.return)&&c.call(s)}finally{if(a)throw a.error}}var f=["EntityId","EntityTitle","EntityGuid","EntityType","IsPublished","Modified"];if(e.length)for(var h=0;h<f.length;h++)t[f[h]]={key:f[h],label:f[h],snip:r.valuePlaceholder(n,f[h],i),help:r.translate.instant("SourceEditorSnippets.StandardFields."+f[h]+".Help")}}))},t.prototype.valuePlaceholder=function(t,e,n){return n.Type.indexOf("Razor")>-1?"@"+t+"."+e:"["+t.replace(".",":")+":"+e+"]"},t.prototype.getFields=function(t,e){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(N.b),{params:{appid:t.toString(),staticName:e}}).toPromise().then((function(t){var e,n;if(t=t.filter((function(t){return t.Type!==U.a.Empty})))try{for(var i=Object(y.h)(t),o=i.next();!o.done;o=i.next()){var r=o.value;if(r.Metadata){var a=r.Metadata,c=a.All,s=a[r.Type],p=a[r.InputType];a.merged=Object(y.a)(Object(y.a)(Object(y.a)({},c),s),p)}}}catch(l){e={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return t}))},t.prototype.attachSnippets=function(t,e,n,i,o,r){var a=r[i];if(i.indexOf("-")){var c=i.substr(0,i.indexOf("-"));if(c){var s=r[c];s&&(a=a?a.concat(s):s)}}if(a){void 0===t[n].more&&(t[n].more=[]);for(var p=t[n].more,l=0;l<a.length;l++)try{p[n+"-"+a[l].name]=Object.assign({},o,{key:n+" - "+a[l].name,label:a[l].name,snip:this.localizeGenericSnippet(a[l].content,e,n),collapse:!0})}finally{}}},t.prototype.localizeGenericSnippet=function(t,e,n){return t.replace(/(\$\{[0-9]+\:)var(\})/gi,"$1"+e+"$2").replace(/(\$\{[0-9]+\:)prop(\})/gi,"$1"+n+"$2")},t.\u0275fac=function(e){return new(e||t)(M.Wb(E.b),M.Wb(z.a),M.Wb(d.e))},t.\u0275prov=M.Ib({token:t,factory:t.\u0275fac}),t}(),H=n("e4iD"),V=n("Zfm5"),K=function(){function t(){}return t.prototype.transform=function(t){return null==t||t.sort((function(t,e){return t.isFolder<e.isFolder?1:t.isFolder>e.isFolder?-1:0})),t},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=M.Lb({name:"sortItems",type:t,pure:!0}),t}(),Q=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t,e){return this.sanitizer.bypassSecurityTrustStyle("padding-left: "+(e?8*t:0===t?8:8*t+16)+"px;")},t.\u0275fac=function(e){return new(e||t)(M.Mb(H.b))},t.\u0275pipe=M.Lb({name:"depthPadding",type:t,pure:!0}),t}();function W(t,e){1&t&&M.Ob(0)}var Y=function(t){return{item:t}};function G(t,e){if(1&t&&(M.Qb(0),M.Mc(1,W,1,0,"ng-container",5),M.Pb()),2&t){var n=e.$implicit;M.ec();var i=M.yc(5);M.Ab(1),M.kc("ngTemplateOutlet",i)("ngTemplateOutletContext",M.oc(2,Y,n))}}var q=function(t){return{active:t}};function J(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div",8),M.ac("click",(function(){M.Ac(n);var t=M.ec().item;return M.ec().openTemplate(t.pathFromRoot)})),M.fc(1,"depthPadding"),M.Oc(2),M.Rb()}if(2&t){var i=M.ec().item,o=M.ec();M.Ic(M.hc(1,5,i.depth,i.isFolder)),M.kc("ngClass",M.oc(8,q,o.toggledItems.includes(i.pathFromRoot)))("matTooltip",i.name),M.Ab(2),M.Qc(" ",i.name," ")}}function X(t,e){1&t&&M.Ob(0)}function Z(t,e){if(1&t&&(M.Qb(0),M.Mc(1,X,1,0,"ng-container",5),M.Pb()),2&t){var n=e.$implicit;M.ec(4);var i=M.yc(5);M.Ab(1),M.kc("ngTemplateOutlet",i)("ngTemplateOutletContext",M.oc(2,Y,n))}}function tt(t,e){if(1&t&&(M.Qb(0),M.Mc(1,Z,2,4,"ng-container",1),M.fc(2,"sortItems"),M.Pb()),2&t){var n=M.ec(2).item;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.children))}}function et(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",9),M.ac("click",(function(){M.Ac(n);var t=M.ec().item;return M.ec().toggleItem(t.pathFromRoot)})),M.fc(2,"depthPadding"),M.Sb(3,"div",10),M.Sb(4,"mat-icon"),M.Oc(5),M.Rb(),M.Sb(6,"span"),M.Oc(7),M.Rb(),M.Rb(),M.Sb(8,"div",11),M.ac("click",(function(){M.Ac(n);var t=M.ec().item;return M.ec().addFile(t.pathFromRoot)})),M.Sb(9,"mat-icon"),M.Oc(10,"add"),M.Rb(),M.Rb(),M.Rb(),M.Mc(11,tt,3,3,"ng-container",7),M.Rb()}if(2&t){var i=M.ec().item,o=M.ec();M.Ab(1),M.Ic(M.hc(2,6,i.depth,i.isFolder)),M.Ab(2),M.kc("matTooltip",i.name),M.Ab(2),M.Qc(" ",o.toggledItems.includes(i.pathFromRoot)?"keyboard_arrow_down":"keyboard_arrow_right"," "),M.Ab(2),M.Pc(i.name),M.Ab(4),M.kc("ngIf",o.toggledItems.includes(i.pathFromRoot))}}function nt(t,e){if(1&t&&(M.Mc(0,J,3,10,"div",6),M.Mc(1,et,12,9,"div",7)),2&t){var n=e.item;M.kc("ngIf",!n.isFolder),M.Ab(1),M.kc("ngIf",n.isFolder)}}var it=function(){function t(t){this.dialogService=t,this.createTemplate=new M.n,this.toggledItems=[]}return t.prototype.ngOnInit=function(){},t.prototype.ngOnChanges=function(t){var e,n;(null===(e=t.templates)||void 0===e?void 0:e.currentValue)&&(this.tree=function(t){var e,n;if(!t)return[];var i=[];try{for(var o=Object(y.h)(t),r=o.next();!r.done;r=o.next())for(var a=i,c=r.value.split("/"),s=c[c.length-1],p="",l=function(t){var e=c[t];p+=t?"/"+e:e;var n=a.find((function(t){return t.name===e}));if(n)a=n.children;else{var i=Object(y.a)({depth:t,name:e,pathFromRoot:p,isFolder:e!==s},e!==s&&{children:[]});a.push(i),a=i.children}},u=0;u<c.length;u++)l(u)}catch(d){e={error:d}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}(this.templates)),(null===(n=t.view)||void 0===n?void 0:n.currentValue)&&this.showFileInTree(this.view.FileName)},t.prototype.openTemplate=function(t){this.dialogService.openCodeFile(t)},t.prototype.toggleItem=function(t){var e,n,i;-1===(i=(n=this.toggledItems).indexOf(e=t))?n.push(e):n.splice(i,1)},t.prototype.addFile=function(t){this.createTemplate.emit(t)},t.prototype.showFileInTree=function(t){var e,n;if(null!=t&&!this.toggledItems.includes(t)){var i=t.split("/"),o="";try{for(var r=Object(y.h)(i),a=r.next();!a.done;a=r.next()){var c=a.value;this.toggledItems.includes(o=o?o+"/"+c:c)||this.toggleItem(o)}}catch(s){e={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.\u0275fac=function(e){return new(e||t)(M.Mb(g.a))},t.\u0275cmp=M.Gb({type:t,selectors:[["app-code-templates"]],inputs:{view:"view",templates:"templates"},outputs:{createTemplate:"createTemplate"},features:[M.yb],decls:10,vars:3,consts:[[1,"editor-active-explorer","fancy-scrollbar-dark","explorer-wrapper"],[4,"ngFor","ngForOf"],["fileOrFolder",""],[1,"create-button-wrapper"],["mat-icon-button","","matTooltip","Create file",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","file","matTooltipShowDelay","750",3,"style","ngClass","matTooltip","click",4,"ngIf"],[4,"ngIf"],["matTooltipShowDelay","750",1,"file",3,"ngClass","matTooltip","click"],[1,"folder-name-wrapper",3,"click"],["matTooltipShowDelay","750",1,"folder-name",3,"matTooltip"],["matTooltipShowDelay","750","matTooltip","Create file in this folder","appClickStopPropagation","",1,"add-item",3,"click"]],template:function(t,e){1&t&&(M.Sb(0,"div",0),M.Sb(1,"div"),M.Mc(2,G,2,4,"ng-container",1),M.fc(3,"sortItems"),M.Mc(4,nt,2,2,"ng-template",null,2,M.Nc),M.Rb(),M.Sb(6,"div",3),M.Sb(7,"button",4),M.ac("click",(function(){return e.addFile()})),M.Sb(8,"mat-icon"),M.Oc(9,"add"),M.Rb(),M.Rb(),M.Rb(),M.Rb()),2&t&&(M.Ab(2),M.kc("ngForOf",M.gc(3,1,e.tree)))},directives:[i.s,r.b,u.a,s.a,i.A,i.t,i.q,V.a],pipes:[K,Q],styles:[".explorer-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.create-button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.file[_ngcontent-%COMP%]{cursor:pointer;padding:4px 0 4px 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none}.file[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.file.active[_ngcontent-%COMP%]{background-color:#37373d}.folder-name-wrapper[_ngcontent-%COMP%]{display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}.folder-name-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.folder-name-wrapper[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%]{display:flex;align-items:center;overflow:hidden;white-space:nowrap;padding:3px 0;flex:1 1 auto}.folder-name-wrapper[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%]{margin-right:4px;display:none;align-items:center;justify-content:center;padding:3px}.folder-name-wrapper[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.folder-name-wrapper[_ngcontent-%COMP%]:hover   .add-item[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t}();function ot(t,e){var n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}var rt=function(){function t(){}return t.prototype.transform=function(t){return typeof t!=typeof{}?t:Object.keys(t).map((function(e){return t[e]}))},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=M.Lb({name:"objectToArray",type:t,pure:!0}),t}(),at=n("KSFr");function ct(t,e){if(1&t){var n=M.Tb();M.Sb(0,"mat-icon",12),M.ac("click",(function(){M.Ac(n);var t=M.ec().$implicit;return M.ec(5).toggleMore(t)})),M.Oc(1),M.Rb()}if(2&t){var i=M.ec().$implicit,o=M.ec(5);M.Ab(1),M.Qc(" ",o.toggledMores.includes(i)?"more_vert":"more_horiz"," ")}}function st(t,e){if(1&t&&(M.Sb(0,"div"),M.Sb(1,"a",15),M.Oc(2),M.Rb(),M.Rb()),2&t){var n=e.$implicit;M.Ab(1),M.kc("href",n.url,M.Dc),M.Ab(1),M.Pc(n.name)}}function pt(t,e){if(1&t&&(M.Sb(0,"div",13),M.Nb(1,"div",14),M.fc(2,"safeHtml"),M.Mc(3,st,3,2,"div",1),M.Rb()),2&t){var n=M.ec().$implicit;M.Ab(1),M.kc("innerHTML",M.gc(2,2,n.help),M.Bc),M.Ab(2),M.kc("ngForOf",n.links)}}function lt(t,e){if(1&t&&(M.Sb(0,"div"),M.Sb(1,"a",15),M.Oc(2),M.Rb(),M.Rb()),2&t){var n=e.$implicit;M.Ab(1),M.kc("href",n.url,M.Dc),M.Ab(1),M.Pc(n.name)}}function ut(t,e){if(1&t&&(M.Sb(0,"div",18),M.Nb(1,"div",14),M.fc(2,"safeHtml"),M.Mc(3,lt,3,2,"div",1),M.Rb()),2&t){var n=M.ec().$implicit;M.Ab(1),M.kc("innerHTML",M.gc(2,2,n.help),M.Bc),M.Ab(2),M.kc("ngForOf",n.links)}}function dt(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",7),M.Sb(2,"div",16),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec(7).addSnippet(t.snip)})),M.Oc(3),M.Rb(),M.Sb(4,"mat-icon",10),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec(7).toggleInfo(t)})),M.Oc(5," info "),M.Rb(),M.Rb(),M.Mc(6,ut,4,4,"div",17),M.Rb()}if(2&t){var i=e.$implicit,o=M.ec(7);M.Ab(2),M.kc("matTooltip",i.snip),M.Ab(1),M.Qc(" ",i.label," "),M.Ab(3),M.kc("ngIf",o.toggledInfos.includes(i))}}function ft(t,e){if(1&t&&(M.Qb(0),M.Mc(1,dt,7,3,"div",1),M.fc(2,"objectToArray"),M.Pb()),2&t){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.more))}}function ht(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div",6),M.Sb(1,"div",7),M.Sb(2,"div",8),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec(5).addSnippet(t.snip)})),M.Oc(3),M.Rb(),M.Mc(4,ct,2,1,"mat-icon",9),M.Sb(5,"mat-icon",10),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec(5).toggleInfo(t)})),M.Oc(6," info "),M.Rb(),M.Rb(),M.Mc(7,pt,4,4,"div",11),M.Mc(8,ft,3,3,"ng-container",3),M.Rb()}if(2&t){var i=e.$implicit,o=M.ec(5);M.Ab(2),M.kc("matTooltip",i.snip),M.Ab(1),M.Qc(" ",i.label," "),M.Ab(1),M.kc("ngIf",i.more),M.Ab(3),M.kc("ngIf",o.toggledInfos.includes(i)),M.Ab(1),M.kc("ngIf",o.toggledMores.includes(i))}}function gt(t,e){if(1&t&&(M.Qb(0),M.Mc(1,ht,9,5,"div",5),M.fc(2,"objectToArray"),M.Pb()),2&t){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.value))}}function bt(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",4),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec(3).toggleFolder(t)})),M.fc(2,"translate"),M.Sb(3,"mat-icon"),M.Oc(4),M.Rb(),M.Sb(5,"span"),M.Oc(6),M.fc(7,"translate"),M.Rb(),M.Rb(),M.Mc(8,gt,3,3,"ng-container",3),M.Rb()}if(2&t){var i=e.$implicit,o=M.ec(2).$implicit,r=M.ec();M.Ab(1),M.kc("matTooltip",M.gc(2,4,"SourceEditorSnippets."+o.key+"."+i.key+".Help")),M.Ab(3),M.Pc(r.toggledFolders.includes(i)?"keyboard_arrow_down":"keyboard_arrow_right"),M.Ab(2),M.Pc(M.gc(7,6,"SourceEditorSnippets."+o.key+"."+i.key+".Title")),M.Ab(2),M.kc("ngIf",r.toggledFolders.includes(i))}}function mt(t,e){if(1&t&&(M.Qb(0),M.Mc(1,bt,9,8,"div",1),M.fc(2,"keyvalue"),M.Pb()),2&t){var n=M.ec().$implicit;M.Ab(1),M.kc("ngForOf",M.gc(2,1,n.value))}}function vt(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div"),M.Sb(1,"div",2),M.ac("click",(function(){M.Ac(n);var t=e.$implicit;return M.ec().toggleSection(t)})),M.fc(2,"translate"),M.Sb(3,"mat-icon"),M.Oc(4),M.Rb(),M.Sb(5,"span"),M.Oc(6),M.fc(7,"translate"),M.Rb(),M.Rb(),M.Mc(8,mt,3,3,"ng-container",3),M.Rb()}if(2&t){var i=e.$implicit,o=M.ec();M.Ab(1),M.kc("matTooltip",M.gc(2,4,"SourceEditorSnippets."+i.key+".Help")),M.Ab(3),M.Pc(o.toggledSections.includes(i)?"keyboard_arrow_down":"keyboard_arrow_right"),M.Ab(2),M.Pc(M.gc(7,6,"SourceEditorSnippets."+i.key+".Title")),M.Ab(2),M.kc("ngIf",o.toggledSections.includes(i))}}var yt=function(){function t(){this.insertSnippet=new M.n,this.toggledSections=[],this.toggledFolders=[],this.toggledInfos=[],this.toggledMores=[]}return t.prototype.ngOnInit=function(){},t.prototype.addSnippet=function(t){this.insertSnippet.emit(t)},t.prototype.toggleSection=function(t){ot(t,this.toggledSections)},t.prototype.toggleFolder=function(t){ot(t,this.toggledFolders)},t.prototype.toggleInfo=function(t){ot(t,this.toggledInfos)},t.prototype.toggleMore=function(t){ot(t,this.toggledMores)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=M.Gb({type:t,selectors:[["app-code-snippets"]],inputs:{snippets:"snippets"},outputs:{insertSnippet:"insertSnippet"},decls:3,vars:3,consts:[[1,"editor-active-explorer","fancy-scrollbar-dark"],[4,"ngFor","ngForOf"],["matTooltipShowDelay","750",1,"collapsible-header","section",3,"matTooltip","click"],[4,"ngIf"],["matTooltipShowDelay","750",1,"collapsible-header","folder",3,"matTooltip","click"],["class","snippet",4,"ngFor","ngForOf"],[1,"snippet"],[1,"snippet-label"],["matRipple","","matTooltipShowDelay","750",1,"text",3,"matTooltip","click"],["matTooltip","Show More","matTooltipShowDelay","750",3,"click",4,"ngIf"],["matTooltip","Show Help","matTooltipShowDelay","750","appClickStopPropagation","",3,"click"],["class","snippet-help",4,"ngIf"],["matTooltip","Show More","matTooltipShowDelay","750",3,"click"],[1,"snippet-help"],[1,"text",3,"innerHTML"],["target","_blank",3,"href"],["matRipple","","matTooltipShowDelay","750",1,"text","text-more",3,"matTooltip","click"],["class","snippet-help snippet-help-more",4,"ngIf"],[1,"snippet-help","snippet-help-more"]],template:function(t,e){1&t&&(M.Sb(0,"div",0),M.Mc(1,vt,9,8,"div",1),M.fc(2,"keyvalue"),M.Rb()),2&t&&(M.Ab(1),M.kc("ngForOf",M.gc(2,1,e.snippets)))},directives:[i.s,u.a,s.a,i.t,a.r,V.a],pipes:[i.l,d.d,rt,at.a],styles:[".collapsible-header[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;overflow:hidden;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:3px 0}.collapsible-header.section[_ngcontent-%COMP%]{background-color:#383838;font-weight:500}.collapsible-header.folder[_ngcontent-%COMP%]{padding-left:8px}.collapsible-header.folder[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.collapsible-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.snippet[_ngcontent-%COMP%]{padding-right:8px}.snippet[_ngcontent-%COMP%]:hover{background-color:#2a2d2e}.snippet-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none}.snippet-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{cursor:pointer;padding:3px 0 3px 32px;flex:1 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.snippet-label[_ngcontent-%COMP%]   .text-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-label[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;width:18px;height:18px;font-size:18px}.snippet-help[_ngcontent-%COMP%]{padding:3px 18px 3px 32px}.snippet-help-more[_ngcontent-%COMP%]{padding-left:40px}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px;font-style:oblique;word-break:break-word}.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]     p{margin:0}"],changeDetection:0}),t}();function St(t,e){if(1&t){var n=M.Tb();M.Sb(0,"app-ace-editor",9),M.ac("ngModelChange",(function(t){return M.Ac(n),M.ec(2).codeChanged(t)})),M.Rb()}if(2&t){var i=M.ec().ngIf,o=M.ec();M.kc("filename",i.view.FileName)("ngModel",i.view.Code)("snippets",i.editorSnipps)("toggleResize",!o.activeExplorer)}}var xt=function(t){return{active:t}};function wt(t,e){if(1&t){var n=M.Tb();M.Sb(0,"div",1),M.Sb(1,"div",2),M.Sb(2,"div",3),M.ac("click",(function(){M.Ac(n);var t=M.ec();return t.toggleExplorer(t.explorer.templates)})),M.Sb(3,"mat-icon"),M.Oc(4,"file_copy"),M.Rb(),M.Rb(),M.Sb(5,"div",4),M.ac("click",(function(){M.Ac(n);var t=M.ec();return t.toggleExplorer(t.explorer.snippets)})),M.Sb(6,"mat-icon"),M.Oc(7,"code"),M.Rb(),M.Rb(),M.Rb(),M.Sb(8,"app-code-templates",5),M.ac("createTemplate",(function(t){return M.Ac(n),M.ec().createTemplate(t)})),M.Rb(),M.Sb(9,"app-code-snippets",6),M.ac("insertSnippet",(function(t){return M.Ac(n),M.ec().changeInsertSnipp(t)})),M.Rb(),M.Mc(10,St,1,4,"app-ace-editor",7),M.Sb(11,"button",8),M.ac("click",(function(){return M.Ac(n),M.ec().save()})),M.Sb(12,"mat-icon"),M.Oc(13,"done"),M.Rb(),M.Rb(),M.Rb()}if(2&t){var i=e.ngIf,o=M.ec();M.Ab(2),M.kc("ngClass",M.oc(8,xt,o.activeExplorer===o.explorer.templates)),M.Ab(3),M.kc("ngClass",M.oc(10,xt,o.activeExplorer===o.explorer.snippets)),M.Ab(3),M.kc("hidden",o.activeExplorer!==o.explorer.templates)("view",i.view)("templates",i.templates),M.Ab(1),M.kc("hidden",o.activeExplorer!==o.explorer.snippets)("snippets",i.explorerSnipps),M.Ab(1),M.kc("ngIf",i.view)}}var Ot=[{path:"",component:function(){function t(t,e,n,i,o,r,a,c,s,p){this.context=t,this.route=e,this.snackBar=n,this.snackBarStack=i,this.sourceService=o,this.snippetsService=r,this.zone=a,this.titleService=c,this.dialogService=s,this.sanitizeService=p,this.explorer={templates:"templates",snippets:"snippets"},this.activeExplorer=this.explorer.templates,this.view$=new S.a(null),this.templates$=new S.a(null),this.explorerSnipps$=new S.a(null),this.editorSnipps$=new S.a(null),this.templateVars$=Object(x.a)([this.view$,this.templates$,this.explorerSnipps$,this.editorSnipps$]).pipe(Object(k.a)((function(t){var e=Object(y.f)(t,4);return{view:e[0],templates:e[1],explorerSnipps:e[2],editorSnipps:e[3]}}))),this.subscription=new w.a,this.context.init(this.route),this.calculateViewKey(),this.attachListeners()}return t.prototype.ngOnInit=function(){var t=this,e=this.sourceService.get(this.viewKey),n=this.sourceService.getTemplates();Object(O.a)([e,n]).subscribe((function(e){var n=Object(y.f)(e,2),i=n[0],o=n[1];t.view$.next(i),t.savedCode=t.view$.value.Code,t.titleService.setTitle(t.view$.value.FileName+" - Code Editor"),t.templates$.next(o),t.showCodeAndEditionWarnings(i,o),t.snippetsService.getSnippets(t.view$.value).then((function(e){t.explorerSnipps$.next(e.sets),t.editorSnipps$.next(e.list)}))}))},t.prototype.ngOnDestroy=function(){this.view$.complete(),this.templates$.complete(),this.explorerSnipps$.complete(),this.editorSnipps$.complete(),this.subscription.unsubscribe()},t.prototype.toggleExplorer=function(t){this.activeExplorer=this.activeExplorer===t?null:t},t.prototype.createTemplate=function(t){var e=this,n="File name:",i=I.b;("api"===t||(null==t?void 0:t.startsWith("api/")))&&(n="Controller name:",i=I.a);var o=prompt(n,i);null!==o&&0!==o.length&&(o=this.sanitizeService.sanitizePath(o),null!=t&&(o=t+"/"+o),this.sourceService.createTemplate(o).subscribe((function(t){e.sourceService.getTemplates().subscribe((function(t){e.templates$.next(t)}))})))},t.prototype.changeInsertSnipp=function(t){this.aceEditorRef.insertSnippet(t)},t.prototype.codeChanged=function(t){this.view$.next(Object(y.a)(Object(y.a)({},this.view$.value),{Code:t}))},t.prototype.save=function(){var t=this;this.snackBar.open("Saving...");var e=this.view$.value.Code;this.sourceService.save(this.viewKey,this.view$.value).subscribe({next:function(n){n?(t.savedCode=e,e=null,t.snackBar.open("Saved",null,{duration:2e3})):t.snackBar.open("Failed",null,{duration:2e3})},error:function(){t.snackBar.open("Failed",null,{duration:2e3})}})},t.prototype.calculateViewKey=function(){var t=sessionStorage.getItem(C.i),e=JSON.parse(t)[0];this.viewKey=e.EntityId||e.Path},t.prototype.showCodeAndEditionWarnings=function(t,e){var n=this,i=t.FileName,o=i.indexOf("/")>-1?i.lastIndexOf("/")+1:0,r=0===o?"":i.substring(0,o),a=i.substring(o),c=a.substring(0,a.length-t.Extension.length)+".code"+t.Extension,s=e.find((function(t){return t===r+c})),p=e.filter((function(t){return t.endsWith(a)})).length-1;s&&this.snackBarStack.add("This template also has a code-behind file '"+s+"'.","Open").subscribe((function(){n.dialogService.openCodeFile(s)})),p&&this.snackBarStack.add("There are "+p+" other editions of this. You may be editing an edition which is not the one you see.","Help").subscribe((function(){window.open("https://r.2sxc.org/polymorphism","_blank")}))},t.prototype.attachListeners=function(){var t=this;this.zone.runOutsideAngular((function(){t.subscription.add(Object(T.a)(window,"beforeunload").subscribe((function(e){t.savedCode!==t.view$.value.Code&&(e.preventDefault(),e.returnValue="")}))),t.subscription.add(Object(T.a)(window,"keydown").subscribe((function(e){83===e.keyCode&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)&&(e.preventDefault(),t.zone.run((function(){t.save()})))})))}))},t.\u0275fac=function(e){return new(e||t)(M.Mb(h.a),M.Mb(v.a),M.Mb(l.b),M.Mb($),M.Mb(D),M.Mb(B),M.Mb(M.A),M.Mb(H.c),M.Mb(g.a),M.Mb(f.a))},t.\u0275cmp=M.Gb({type:t,selectors:[["app-code-editor"]],viewQuery:function(t,e){var n;1&t&&M.Tc(R,!0),2&t&&M.xc(n=M.bc())&&(e.aceEditorRef=n.first)},decls:2,vars:3,consts:[["class","editor-root",4,"ngIf"],[1,"editor-root"],[1,"editor-side-toolbar"],["matTooltip","Templates",1,"button",3,"ngClass","click"],["matTooltip","Snippets",1,"button",3,"ngClass","click"],[3,"hidden","view","templates","createTemplate"],[3,"hidden","snippets","insertSnippet"],[3,"filename","ngModel","snippets","toggleResize","ngModelChange",4,"ngIf"],["mat-fab","","mat-elevation-z24","","matTooltip","Click to save or CTRL + S",3,"click"],[3,"filename","ngModel","snippets","toggleResize","ngModelChange"]],template:function(t,e){1&t&&(M.Mc(0,wt,14,12,"div",0),M.fc(1,"async")),2&t&&M.kc("ngIf",M.gc(1,1,e.templateVars$))},directives:[i.t,u.a,i.q,s.a,it,yt,r.b,R,o.s,o.v],pipes:[i.b],styles:[".mat-fab[_ngcontent-%COMP%]{position:absolute;right:48px;bottom:32px;z-index:10}"],changeDetection:0}),t}()}],Tt=function(){function t(){}return t.\u0275mod=M.Kb({type:t}),t.\u0275inj=M.Jb({factory:function(e){return new(e||t)},imports:[[v.d.forChild(Ot)],v.d]}),t}();function kt(t){return new m.a(t,"./i18n/code-editor.",".js?"+sxcVersion)}var It=function(){function t(){}return t.\u0275mod=M.Kb({type:t}),t.\u0275inj=M.Jb({factory:function(e){return new(e||t)},providers:[h.a,D,g.a,B,f.a,d.e],imports:[[Tt,b.a,i.c,c.f,r.c,s.b,u.b,l.c,o.m,p.b,a.s,d.c.forChild(Object(m.b)(kt))]]}),t}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.11.02/ng-edit/code-editor-code-editor-module.810a1523ca5dec7b3134.js.map