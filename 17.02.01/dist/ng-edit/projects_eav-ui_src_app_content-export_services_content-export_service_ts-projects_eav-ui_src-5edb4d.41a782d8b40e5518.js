"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-export_services_content-export_service_ts-projects_eav-ui_src-5edb4d"],{1292:(I,u,t)=>{t.d(u,{M:()=>l});var a=t(692),m=t(4172),h=t(6028),r=t(4896),_=t(3392);let l=(()=>{class o{constructor(i,c){this.context=i,this.dnnContext=c}exportContent(i,c){const e=c?"&selectedids="+c.join():"",p=this.dnnContext.$2sxc.http.apiUrl(m.ue+"Download")+"?appId="+this.context.appId+"&language="+i.language+"&defaultLanguage="+i.defaultLanguage+"&contentType="+i.contentTypeStaticName+"&recordExport="+i.recordExport+"&resourcesReferences="+i.resourcesReferences+"&languageReferences="+i.languageReferences+e;window.open(p,"_blank","")}exportJson(i){const c=this.dnnContext.$2sxc.http.apiUrl(a.O+"Json")+"?appId="+this.context.appId+"&name="+i;window.open(c,"_blank","")}exportEntity(i,c,e){const p=this.dnnContext.$2sxc.http.apiUrl(m.ue+"Json")+"?appId="+this.context.appId+"&id="+i+"&prefix="+c+"&withMetadata="+e;window.open(p,"_blank","")}static#t=this.\u0275fac=function(c){return new(c||o)(r.CoB(h.e),r.CoB(_.es))};static#e=this.\u0275prov=r.wxM({token:o,factory:o.\u0275fac})}return o})()},6036:(I,u,t)=>{t.d(u,{q:()=>e});var a=t(9616),m=t(9432),h=t(604),r=t(3764),_=t(4172),l=t(616),o=t(6028),g=t(4896),i=t(1332),c=t(3392);let e=(()=>{class p{constructor(s,d,E){this.http=s,this.context=d,this.dnnContext=E}getAll(s){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_.U1),{params:{appId:this.context.appId.toString(),contentType:s}})}getColumns(s){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(r.yK),{params:{appId:this.context.appId.toString(),staticName:s}})}importItem(s){return(0,a.Q)((0,l.S)(s)).pipe((0,m.G)(d=>this.http.post(this.dnnContext.$2sxc.http.apiUrl(_.ue+"upload"),{AppId:this.context.appId.toString(),ContentBase64:d})),(0,h.k)(d=>({Success:d,Messages:[]})))}static#t=this.\u0275fac=function(d){return new(d||p)(g.CoB(i.KK),g.CoB(o.e),g.CoB(c.es))};static#e=this.\u0275prov=g.wxM({token:p,factory:p.\u0275fac})}return p})()},4328:(I,u,t)=>{t.d(u,{q:()=>l});var a=t(4172),m=t(6028),h=t(4896),r=t(1332),_=t(3392);let l=(()=>{class o{constructor(i,c,e){this.http=i,this.context=c,this.dnnContext=e}create(i,c){return this.http.post(`app/auto/data/${i}`,c,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(i,c,e){return this.http.post(`app/auto/data/${i}/${c}`,e,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(i,c,e){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(a.ue+"delete"),{params:{contentType:i,id:c.toString(),appId:this.context.appId.toString(),force:e.toString()}})}static#t=this.\u0275fac=function(c){return new(c||o)(h.CoB(r.KK),h.CoB(m.e),h.CoB(_.es))};static#e=this.\u0275prov=h.wxM({token:o,factory:o.\u0275fac})}return o})()},3764:(I,u,t)=>{t.d(u,{Ck:()=>c,yK:()=>g});var a=t(604),m=t(692),h=t(6028),r=t(4896),_=t(1332),l=t(3392);const o="admin/field/",g="admin/field/all",i="admin/field/GetSharedFields";let c=(()=>{class e{constructor(n,s,d){this.http=n,this.context=s,this.dnnContext=d}apiUrl(n){return this.dnnContext.$2sxc.http.apiUrl(n)}typeListRetrieve(){return this.http.get(this.apiUrl(o+"DataTypes"),{params:{appid:this.context.appId.toString()}})}getInputTypesList(){return this.http.get(this.apiUrl(o+"InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe((0,a.k)(n=>n.map(d=>({dataType:d.Type.substring(0,d.Type.indexOf("-")),inputType:d.Type,label:d.Label,description:d.Description,isDefault:d.IsDefault,isObsolete:d.IsObsolete,isRecommended:d.IsRecommended,obsoleteMessage:d.ObsoleteMessage,icon:d.IsDefault?"star":d.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.http.get(this.apiUrl(o+"ReservedNames"))}getFields(n){return this.http.get(this.apiUrl(g),{params:{appid:this.context.appId.toString(),staticName:n}}).pipe((0,a.k)(s=>{if(s)for(const d of s){if(!d.Metadata)continue;const E=d.Metadata;E.merged={...E.All,...E[d.Type],...E[d.InputType]}}return s}))}getShareableFields(){return this.http.get(this.apiUrl(i),{params:{appid:this.context.appId.toString()}})}getShareableFieldsFor(n){return this.http.get(this.apiUrl(i),{params:{appid:this.context.appId.toString(),attributeId:n.toString()}})}addInheritedField(n,s,d,E){return this.http.post(this.apiUrl(o+"AddInheritedField"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:n.toString(),SourceType:s,SourceField:d,name:E}})}share(n,s=!0){return this.http.post(this.apiUrl(o+"Share"),null,{params:{appid:this.context.appId.toString(),attributeId:n.toString(),share:s}})}inherit(n,s){return this.http.post(this.apiUrl(o+"Inherit"),null,{params:{appid:this.context.appId.toString(),attributeId:n.toString(),inheritMetadataOf:s}})}reOrder(n,s){return this.http.post(this.apiUrl(o+"Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:s.Id.toString(),order:JSON.stringify(n)}})}setTitle(n,s){return this.http.post(this.apiUrl(m.O+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:s.Id.toString(),attributeId:n.Id.toString()}})}rename(n,s,d){return this.http.post(this.apiUrl(o+"Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:s.toString(),attributeId:n.toString(),newName:d}})}delete(n,s){if(n.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl(o+"Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:s.Id.toString(),attributeId:n.Id.toString()}})}add(n,s){return this.http.post(this.apiUrl(o+"Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:s.toString(),Id:n.Id.toString(),Type:n.Type,InputType:n.InputType,StaticName:n.StaticName,IsTitle:n.IsTitle.toString(),Index:n.SortOrder.toString()}})}updateInputType(n,s,d){return this.http.post(this.apiUrl(o+"InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:n.toString(),field:s,inputType:d}})}static#t=this.\u0275fac=function(s){return new(s||e)(r.CoB(_.KK),r.CoB(h.e),r.CoB(l.es))};static#e=this.\u0275prov=r.wxM({token:e,factory:e.\u0275fac})}return e})()},7028:(I,u,t)=>{t.d(u,{K:()=>m});var a=t(9224);class m{static getRoutes(){const r={path:"metadata/:targetType/:keyType/:key",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2022_card_mjs"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("default-projects_eav-ui_src_app_permissions_index_ts"),t.e("common"),t.e("projects_eav-ui_src_app_metadata_metadata_module_ts-projects_eav-ui_src_app_shared_components-d0de86")]).then(t.bind(t,7752)).then(l=>l.MetadataModule),data:{title:"Metadata"}};return[r,{...r,path:`${r.path}/title/:title`},{...r,path:`${r.path}/contentType/:contentTypeStaticName`},{...r,path:`${r.path}/title/:title/contentType/:contentTypeStaticName`}]}static getUrl(r,_,l,o,g){let i=`metadata/${r}/${_}/${l}`;return o&&(i+=`/title/${encodeURIComponent(o)}`),g&&(i+=`/contentType/${g}`),i}static getUrlApp(r,_){return this.getUrl(a._K.metadata.app.targetType,a._K.metadata.app.keyType,r.toString(),_)}static getUrlAttribute(r,_,l){return this.getUrl(a._K.metadata.attribute.targetType,a._K.metadata.attribute.keyType,r.toString(),_,l)}static getUrlContentType(r,_){return this.getUrl(a._K.metadata.contentType.targetType,a._K.metadata.contentType.keyType,r,_)}static getUrlEntity(r,_,l){return this.getUrl(a._K.metadata.entity.targetType,a._K.metadata.entity.keyType,r,_,l)}}},616:(I,u,t)=>{function a(h){return new Promise((r,_)=>{const l=new FileReader;l.readAsDataURL(h),l.onload=()=>{r(l.result.split(",")[1])},l.onerror=o=>{_(o)}})}function m(h){return new Promise((r,_)=>{const l=new FileReader;l.readAsText(h),l.onload=()=>{r(l.result)},l.onerror=o=>{_(o)}})}t.d(u,{M:()=>m,S:()=>a})},32:(I,u,t)=>{t.d(u,{S:()=>o,g:()=>g});var a=t(4896),m=t(6176),h=t(2664),r=t(5056);let _=0;const l="mat-badge-content";let o=(()=>{class i{get color(){return this._color}set color(e){this._setColor(e),this._color=e}get content(){return this._content}set content(e){this._updateRenderedContent(e)}get description(){return this._description}set description(e){this._updateDescription(e)}constructor(e,p,n,s,d){this._ngZone=e,this._elementRef=p,this._ariaDescriber=n,this._renderer=s,this._animationMode=d,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=_++,this._isInitialized=!1,this._interactivityChecker=(0,a.uUt)(h.OE),this._document=(0,a.uUt)(r.Ud)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const e=this._renderer.createElement("span"),p="mat-badge-active";return e.setAttribute("id",`mat-badge-content-${this._id}`),e.setAttribute("aria-hidden","true"),e.classList.add(l),"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(p)})}):e.classList.add(p),e}_updateRenderedContent(e){const p=`${e??""}`.trim();this._isInitialized&&p&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=p),this._content=p}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){const p=this._elementRef.nativeElement.classList;p.remove(`mat-badge-${this._color}`),e&&p.add(`mat-badge-${e}`)}_clearExistingBadges(){const e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${l}`);for(const p of Array.from(e))p!==this._badgeElement&&p.remove()}static#t=this.\u0275fac=function(p){return new(p||i)(a.GI1(a.WW2),a.GI1(a.GMv),a.GI1(h.o9),a.GI1(a.q87),a.GI1(a.qwP,8))};static#e=this.\u0275dir=a.Sc5({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(p,n){2&p&&a.eAK("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small","small"===n.size)("mat-badge-medium","medium"===n.size)("mat-badge-large","large"===n.size)("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap",a.cZD],disabled:["matBadgeDisabled","disabled",a.cZD],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden",a.cZD]},features:[a.QJr]})}return i})(),g=(()=>{class i{static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275mod=a.a4G({type:i});static#n=this.\u0275inj=a.s3X({imports:[h.Ux,m.AN,m.AN]})}return i})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.02.01/dist/ng-edit/projects_eav-ui_src_app_content-export_services_content-export_service_ts-projects_eav-ui_src-5edb4d.41a782d8b40e5518.js.map