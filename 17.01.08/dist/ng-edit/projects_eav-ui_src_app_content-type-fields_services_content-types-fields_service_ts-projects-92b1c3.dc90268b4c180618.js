"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-92b1c3"],{3764:(g,m,t)=>{t.d(m,{Ck:()=>y,yK:()=>u});var e=t(604),h=t(692),c=t(6028),s=t(4896),n=t(1332),d=t(3392);const p="admin/field/",u="admin/field/all",_="admin/field/GetSharedFields";let y=(()=>{class i{constructor(a,r,o){this.http=a,this.context=r,this.dnnContext=o}apiUrl(a){return this.dnnContext.$2sxc.http.apiUrl(a)}typeListRetrieve(){return this.http.get(this.apiUrl(p+"DataTypes"),{params:{appid:this.context.appId.toString()}})}getInputTypesList(){return this.http.get(this.apiUrl(p+"InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe((0,e.k)(a=>a.map(o=>({dataType:o.Type.substring(0,o.Type.indexOf("-")),inputType:o.Type,label:o.Label,description:o.Description,isDefault:o.IsDefault,isObsolete:o.IsObsolete,isRecommended:o.IsRecommended,obsoleteMessage:o.ObsoleteMessage,icon:o.IsDefault?"star":o.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.http.get(this.apiUrl(p+"ReservedNames"))}getFields(a){return this.http.get(this.apiUrl(u),{params:{appid:this.context.appId.toString(),staticName:a}}).pipe((0,e.k)(r=>{if(r)for(const o of r){if(!o.Metadata)continue;const E=o.Metadata;E.merged={...E.All,...E[o.Type],...E[o.InputType]}}return r}))}getShareableFields(){return this.http.get(this.apiUrl(_),{params:{appid:this.context.appId.toString()}})}getShareableFieldsFor(a){return this.http.get(this.apiUrl(_),{params:{appid:this.context.appId.toString(),attributeId:a.toString()}})}addInheritedField(a,r,o,E){return this.http.post(this.apiUrl(p+"AddInheritedField"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:a.toString(),SourceType:r,SourceField:o,name:E}})}share(a,r=!0){return this.http.post(this.apiUrl(p+"Share"),null,{params:{appid:this.context.appId.toString(),attributeId:a.toString(),share:r}})}inherit(a,r){return this.http.post(this.apiUrl(p+"Inherit"),null,{params:{appid:this.context.appId.toString(),attributeId:a.toString(),inheritMetadataOf:r}})}reOrder(a,r){return this.http.post(this.apiUrl(p+"Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),order:JSON.stringify(a)}})}setTitle(a,r){return this.http.post(this.apiUrl(h.O+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),attributeId:a.Id.toString()}})}rename(a,r,o){return this.http.post(this.apiUrl(p+"Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.toString(),attributeId:a.toString(),newName:o}})}delete(a,r){if(a.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl(p+"Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),attributeId:a.Id.toString()}})}add(a,r){return this.http.post(this.apiUrl(p+"Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:r.toString(),Id:a.Id.toString(),Type:a.Type,InputType:a.InputType,StaticName:a.StaticName,IsTitle:a.IsTitle.toString(),Index:a.SortOrder.toString()}})}updateInputType(a,r,o){return this.http.post(this.apiUrl(p+"InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:a.toString(),field:r,inputType:o}})}static#t=this.\u0275fac=function(r){return new(r||i)(s.CoB(n.KK),s.CoB(c.e),s.CoB(d.es))};static#e=this.\u0275prov=s.wxM({token:i,factory:i.\u0275fac})}return i})()},4460:(g,m,t)=>{t.d(m,{y:()=>i});var e=t(5056),h=t(4672),c=t(2328),s=t(988),n=t(8752),d=t(1224),p=t(12),u=t(8512),_=t(3572),y=t(4896);let i=(()=>{class l{static#t=this.\u0275fac=function(o){return new(o||l)};static#e=this.\u0275mod=y.a4G({type:l});static#a=this.\u0275inj=y.s3X({providers:[_.I],imports:[e.MD,h.oJ,c.oB,u.NR,s.q,n.O0.forChild((0,d.C)(p.I))]})}return l})()},3572:(g,m,t)=>{t.d(m,{I:()=>n});var e=t(4896),h=t(1332),c=t(3392);let n=(()=>{class d{constructor(u,_){this.http=u,this.dnnContext=_}getFeatureDetails(u){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:u}})}static#t=this.\u0275fac=function(_){return new(_||d)(e.CoB(h.KK),e.CoB(c.es))};static#e=this.\u0275prov=e.wxM({token:d,factory:d.\u0275fac})}return d})()},7028:(g,m,t)=>{t.d(m,{K:()=>h});var e=t(9224);class h{static getRoutes(){const s={path:"metadata/:targetType/:keyType/:key",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2022_card_mjs"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("default-projects_eav-ui_src_app_permissions_index_ts"),t.e("common"),t.e("projects_eav-ui_src_app_metadata_metadata_module_ts-projects_eav-ui_src_app_shared_components-d0de86")]).then(t.bind(t,7752)).then(d=>d.MetadataModule),data:{title:"Metadata"}};return[s,{...s,path:`${s.path}/title/:title`},{...s,path:`${s.path}/contentType/:contentTypeStaticName`},{...s,path:`${s.path}/title/:title/contentType/:contentTypeStaticName`}]}static getUrl(s,n,d,p,u){let _=`metadata/${s}/${n}/${d}`;return p&&(_+=`/title/${encodeURIComponent(p)}`),u&&(_+=`/contentType/${u}`),_}static getUrlApp(s,n){return this.getUrl(e._K.metadata.app.targetType,e._K.metadata.app.keyType,s.toString(),n)}static getUrlAttribute(s,n,d){return this.getUrl(e._K.metadata.attribute.targetType,e._K.metadata.attribute.keyType,s.toString(),n,d)}static getUrlContentType(s,n){return this.getUrl(e._K.metadata.contentType.targetType,e._K.metadata.contentType.keyType,s,n)}static getUrlEntity(s,n,d){return this.getUrl(e._K.metadata.entity.targetType,e._K.metadata.entity.keyType,s,n,d)}}},4720:(g,m,t)=>{t.d(m,{N:()=>h});var e=t(9224);let h=(()=>{class c{static#t=this.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>t.e("projects_eav-ui_src_app_permissions_permissions_module_ts").then(t.bind(t,680)).then(n=>n.PermissionsModule),data:{title:"Permissions"}};static getUrl(n,d,p){return`permissions/${n}/${d}/${p}`}static getUrlApp(n){return this.getUrl(e._K.metadata.app.targetType,e._K.metadata.app.keyType,n.toString())}static getUrlAttribute(n){return this.getUrl(e._K.metadata.attribute.targetType,e._K.metadata.attribute.keyType,n.toString())}static getUrlContentType(n){return this.getUrlEntity(n)}static getUrlEntity(n){return this.getUrl(e._K.metadata.entity.targetType,e._K.metadata.entity.keyType,n)}static getUrlLanguage(n){return this.getUrl(e._K.metadata.language.targetType,e._K.metadata.language.keyType,n)}}return c})()},1224:(g,m,t)=>{t.d(m,{C:()=>c});var e=t(1332),h=t(8752);function c(s){return{loader:{provide:h._E,useFactory:s,deps:[e.KK]},defaultLanguage:"en",isolate:!0}}},12:(g,m,t)=>{t.d(m,{I:()=>h});var e=t(8228);function h(c){return new e.A(c,"./i18n/",`.js?${window.sxcVersion}`)}},8228:(g,m,t)=>{t.d(m,{A:()=>c});var e=t(1672),h=t(8916);class c{constructor(n,d,p){this.http=n,this.prefix=d,this.suffix=p}getTranslation(n){return this.http.get(`${this.prefix}${n}${this.suffix}`).pipe((0,e.a)(d=>(console.warn(`Translation: Failed to get language '${n}' from ${this.prefix}`,d),(0,h.of)({}))))}}},32:(g,m,t)=>{t.d(m,{S:()=>p,g:()=>u});var e=t(4896),h=t(6176),c=t(2664),s=t(5056);let n=0;const d="mat-badge-content";let p=(()=>{class _{get color(){return this._color}set color(i){this._setColor(i),this._color=i}get content(){return this._content}set content(i){this._updateRenderedContent(i)}get description(){return this._description}set description(i){this._updateDescription(i)}constructor(i,l,a,r,o){this._ngZone=i,this._elementRef=l,this._ariaDescriber=a,this._renderer=r,this._animationMode=o,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=n++,this._isInitialized=!1,this._interactivityChecker=(0,e.uUt)(c.OE),this._document=(0,e.uUt)(s.Ud)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const i=this._renderer.createElement("span"),l="mat-badge-active";return i.setAttribute("id",`mat-badge-content-${this._id}`),i.setAttribute("aria-hidden","true"),i.classList.add(d),"NoopAnimations"===this._animationMode&&i.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(i),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{i.classList.add(l)})}):i.classList.add(l),i}_updateRenderedContent(i){const l=`${i??""}`.trim();this._isInitialized&&l&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=l),this._content=l}_updateDescription(i){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!i||this._isHostInteractive())&&this._removeInlineDescription(),this._description=i,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,i):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(i){const l=this._elementRef.nativeElement.classList;l.remove(`mat-badge-${this._color}`),i&&l.add(`mat-badge-${i}`)}_clearExistingBadges(){const i=this._elementRef.nativeElement.querySelectorAll(`:scope > .${d}`);for(const l of Array.from(i))l!==this._badgeElement&&l.remove()}static#t=this.\u0275fac=function(l){return new(l||_)(e.GI1(e.WW2),e.GI1(e.GMv),e.GI1(c.o9),e.GI1(e.q87),e.GI1(e.qwP,8))};static#e=this.\u0275dir=e.Sc5({type:_,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(l,a){2&l&&e.eAK("mat-badge-overlap",a.overlap)("mat-badge-above",a.isAbove())("mat-badge-below",!a.isAbove())("mat-badge-before",!a.isAfter())("mat-badge-after",a.isAfter())("mat-badge-small","small"===a.size)("mat-badge-medium","medium"===a.size)("mat-badge-large","large"===a.size)("mat-badge-hidden",a.hidden||!a.content)("mat-badge-disabled",a.disabled)},inputs:{color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap",e.cZD],disabled:["matBadgeDisabled","disabled",e.cZD],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden",e.cZD]},features:[e.QJr]})}return _})(),u=(()=>{class _{static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275mod=e.a4G({type:_});static#a=this.\u0275inj=e.s3X({imports:[c.Ux,h.AN,h.AN]})}return _})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/17.01.08/dist/ng-edit/projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-92b1c3.dc90268b4c180618.js.map