"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts"],{7693:(M,D,t)=>{t.d(D,{X:()=>u,g:()=>l});var c=t(9148),h=t(271),o=t(6474);const u="admin/type/",d="admin/type/get",e="admin/type/list",i="admin/type/scopes";let l=(()=>{class m extends o.D{retrieveContentType(r){return this.getHttpApiUrl(d,{params:{appId:this.appId,contentTypeId:r}})}retrieveContentTypeSig(r,_){return this.getSignal(d,{params:{appId:this.appId,contentTypeId:r}},_)}retrieveContentTypes(r){return this.getHttpApiUrl(e,{params:{appId:this.appId,scope:r}})}retrieveContentTypesSig(r,_){return this.getSignal(e,{params:{appId:this.appId,scope:r}},_)}getScopes(){return this.getHttpApiUrl(i,{params:{appId:this.appId}}).pipe((0,h.T)(r=>{const _=r.old;return Object.keys(_).map(O=>({name:_[O],value:O}))}))}getScopesSig(r){const _=this.getSignal(i,{params:{appId:this.appId}},r);return(0,c.EWP)(()=>{const O=_();if(!O||!O.old)return[];const v=O.old;return Object.keys(v).map(y=>({name:v[y],value:y}))})}getScopesV2(){return this.getHttpApiUrl(i,{params:{appId:this.appId}}).pipe((0,h.T)(r=>r.scopes))}save(r){return this.http.post(this.apiUrl("admin/type/save"),r,{params:{appid:this.appId}})}delete(r){return this.http.delete(this.apiUrl("admin/type/delete"),{params:{appid:this.appId,staticName:r.StaticName}})}import(r){const _=new FormData;for(const I of r)_.append("File",I);return this.http.post(this.apiUrl("admin/type/import"),_,{params:{appId:this.appId,zoneId:this.zoneId}})}createGhost(r){return this.http.post(this.apiUrl("admin/type/addghost"),null,{params:{appid:this.appId,sourceStaticName:r}})}static{this.\u0275fac=(()=>{let r;return function(I){return(r||(r=c.xGo(m)))(I||m)}})()}static{this.\u0275prov=c.jDH({token:m,factory:m.\u0275fac})}}return m})()},1475:(M,D,t)=>{t.d(D,{j:()=>d});var c=t(6474),h=t(8624),o=t(9148);let d=(()=>{class e extends c.D{getContentInfo(n,p){return this.getSignal("admin/appParts/get",{params:{appid:this.appId,zoneId:this.zoneId,scope:n}},p)}exportParts(n,p,s){const g=this.apiUrl(h.Q+"Export")+"?appId="+this.appId+"&zoneId="+this.zoneId+"&contentTypeIdsString="+n.join(";")+"&entityIdsString="+p.join(";")+"&templateIdsString="+s.join(";");window.open(g,"_blank","")}static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=o.xGo(e)))(s||e)}})()}static{this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac})}}return e})()},320:(M,D,t)=>{t.d(D,{t:()=>e});var c=t(1772),h=t(6474),o=t(9148);let e=(()=>{class i extends h.D{getAppInfo(p){return this.getSignal("admin/app/Statistics",{params:{appid:this.appId,zoneId:this.zoneId}},p)}exportAppUrl(){return`${this.apiUrl(`${c.u}Export`)}?appId=${this.appId}&zoneId=${this.zoneId}`}exportForVersionControl({includeContentGroups:p,resetAppGuid:s,withFiles:g}){return this.getHttpApiUrl("admin/app/SaveData",{params:{appid:this.appId,zoneId:this.zoneId,includeContentGroups:p.toString(),resetAppGuid:s.toString(),withPortalFiles:g.toString()}})}static{this.\u0275fac=(()=>{let p;return function(g){return(p||(p=o.xGo(i)))(g||i)}})()}static{this.\u0275prov=o.jDH({token:i,factory:i.\u0275fac})}}return i})()},8624:(M,D,t)=>{t.d(D,{Q:()=>u,S:()=>d});var c=t(1772),h=t(6474),o=t(9148);const u="admin/appParts/";let d=(()=>{class e extends h.D{importAppParts(n){const p=new FormData;return p.append("File",n),this.http.post(this.apiUrl(u+"Import"),p,{params:{appId:this.appId,zoneId:this.zoneId}})}resetApp(n){return this.http.post(this.apiUrl(c.u+"Reset"),{},{params:{appId:this.appId,zoneId:this.zoneId,withPortalFiles:n.toString()}})}static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=o.xGo(e)))(s||e)}})()}static{this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac})}}return e})()},5445:(M,D,t)=>{t.d(D,{Cu:()=>e.Cu,JL:()=>e.JL,Mk:()=>e.Mk,X6:()=>h.X,ei:()=>e.ei,gs:()=>h.g,tr:()=>c.t,vN:()=>e.vN,xR:()=>e.xR,y0:()=>i.y});var c=t(1479),h=t(7693),e=(t(1475),t(320),t(8624),t(6460)),i=t(2570)},6460:(M,D,t)=>{t.d(D,{Cu:()=>m,JL:()=>P,Mk:()=>g,ei:()=>l,vN:()=>r,xR:()=>_});var c=t(4600),h=t(6647),o=t(271),u=t(693),d=t(9234),e=t(6474),i=t(9148);const g="admin/query/Run",l="admin/query/DebugStream",m="admin/query/Save",P="admin/query/Get",r="admin/query/DataSources";let _=(()=>{class I extends e.D{getAll(v){return this.getHttpApiUrl(d.Gg,{params:{appId:this.appId,contentType:v}})}getAllSig(v,y){return this.getSignal(d.Gg,{params:{appId:this.appId,contentType:v}},y)}importQuery(v){return(0,c.H)((0,u.n)(v)).pipe((0,h.n)(y=>this.http.post(this.apiUrl("admin/query/import"),{AppId:this.appId,ContentBase64:y})),(0,o.T)(y=>({Success:y,Messages:[]})))}clonePipeline(v){return this.getHttpApiUrl("admin/query/Clone",{params:{Id:v.toString(),appId:this.appId}})}delete(v){return this.http.delete(this.apiUrl("admin/query/Delete"),{params:{appId:this.appId,Id:v.toString()}})}static{this.\u0275fac=(()=>{let v;return function(T){return(v||(v=i.xGo(I)))(T||I)}})()}static{this.\u0275prov=i.jDH({token:I,factory:I.\u0275fac})}}return I})()},2570:(M,D,t)=>{t.d(D,{y:()=>p});var c=t(6474),h=t(9148);let p=(()=>{class s extends c.D{getAll(){return this.getSignal("admin/view/all",{params:{appId:this.appId}})}delete(l){return this.getHttpApiUrl("admin/view/delete",{params:{appId:this.appId,Id:l.toString()}})}import(l){const m=new FormData;return m.append("File",l),this.http.post(this.apiUrl("admin/view/import"),m,{params:{appId:this.appId,zoneId:this.zoneId}})}export(l){const m=this.apiUrl("admin/view/json")+"?appId="+this.appId+"&viewId="+l;window.open(m,"_blank","")}getPolymorphism(){return this.getSignal("admin/view/polymorphism",{params:{appId:this.appId}})}getUsage(l){return this.getSignal("admin/view/usage",{params:{appId:this.appId,guid:l}})}static{this.\u0275fac=(()=>{let l;return function(P){return(l||(l=h.xGo(s)))(P||s)}})()}static{this.\u0275prov=h.jDH({token:s,factory:s.\u0275fac})}}return s})()},1772:(M,D,t)=>{t.d(D,{I:()=>i,u:()=>e});var c=t(6647),h=t(9452),o=t(3550),u=t(6474),d=t(9148);const e="admin/app/";let i=(()=>{class n extends u.D{importApp(s,g,l=!1){const m=new FormData;return m.append("File",s),m.append("Name",g??""),this.http.post(this.apiUrl(e+"Import"),m,{params:{zoneId:this.zoneId}}).pipe((0,c.n)(P=>{if(l&&P.Messages[0]?.MessageType===o.G1.Warning){const r=prompt(P.Messages[0].Text+" Would you like to install it using another folder name?");if(r)return this.importApp(s,r,!0)}return(0,h.of)(P)}))}static{this.\u0275fac=(()=>{let s;return function(l){return(s||(s=d.xGo(n)))(l||n)}})()}static{this.\u0275prov=d.jDH({token:n,factory:n.\u0275fac})}}return n})()},5959:(M,D,t)=>{t.d(D,{h:()=>T,z:()=>d});var c=t(271),h=t(5445),o=t(6474),u=t(9148);const d="admin/field/all",P=h.X6+"SetTitle",O="admin/field/GetSharedFields";let T=(()=>{class f extends o.D{paramsAppId(a={}){return{params:{appid:this.appId,...a}}}typeListRetrieve(){return this.getHttpApiUrl("admin/field/DataTypes",this.paramsAppId())}getInputTypesList(){return this.getHttpApiUrl("admin/field/InputTypes",this.paramsAppId()).pipe((0,c.T)(a=>a.map(A=>({dataType:A.Type.substring(0,A.Type.indexOf("-")),inputType:A.Type,label:A.Label,description:A.Description,isDefault:A.IsDefault,isObsolete:A.IsObsolete,isRecommended:A.IsRecommended,obsoleteMessage:A.ObsoleteMessage,icon:A.IsDefault?"star":A.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.getHttpApiUrl("admin/field/ReservedNames")}getFields(a){return this.getHttpApiUrl(d,this.paramsAppId({staticName:a})).pipe((0,c.T)(E=>{if(E)for(const A of E){if(!A.Metadata)continue;const U=A.Metadata;U.merged={...U.All,...U[A.Type],...U[A.InputType]}}return E}))}getShareableFields(){return this.getHttpApiUrl(O,this.paramsAppId())}getShareableFieldsFor(a){return this.#t(O,a)}getAncestors(a){return this.#t("admin/field/GetAncestors",a)}getDescendants(a){return this.#t("admin/field/GetDescendants",a)}#t(a,E){return this.getHttpApiUrl(a,this.paramsAppId({attributeId:E}))}addInheritedField(a,E,A,U){return this.http.post(this.apiUrl("admin/field/AddInheritedField"),null,this.paramsAppId({contentTypeId:a.toString(),sourceType:E,sourceField:A,name:U}))}share(a,E=!0){return this.http.post(this.apiUrl("admin/field/Share"),null,{params:{appid:this.appId,attributeId:a.toString(),share:E}})}inherit(a,E){return this.http.post(this.apiUrl("admin/field/Inherit"),null,{params:{appid:this.appId,attributeId:a.toString(),inheritMetadataOf:E}})}reOrder(a,E){return this.http.post(this.apiUrl("admin/field/Sort"),null,{params:{appid:this.appId,contentTypeId:E.Id.toString(),order:JSON.stringify(a)}})}setTitle(a,E){return this.http.post(this.apiUrl(P),null,{params:{appid:this.appId,contentTypeId:E.Id.toString(),attributeId:a.Id.toString()}})}rename(a,E,A){return this.http.post(this.apiUrl("admin/field/Rename"),null,{params:{appid:this.appId,contentTypeId:E.toString(),attributeId:a.toString(),newName:A}})}delete(a,E){if(a.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl("admin/field/Delete"),{params:{appid:this.appId,contentTypeId:E.Id.toString(),attributeId:a.Id.toString()}})}add(a,E){return this.http.post(this.apiUrl("admin/field/Add"),null,{params:{AppId:this.appId,ContentTypeId:E.toString(),Id:a.Id.toString(),Type:a.Type,InputType:a.InputType,StaticName:a.StaticName,IsTitle:a.IsTitle.toString(),Index:a.SortOrder.toString()}})}updateInputType(a,E,A){return this.http.post(this.apiUrl("admin/field/InputType"),null,{params:{appId:this.appId,attributeId:a,field:E,inputType:A}})}static{this.\u0275fac=(()=>{let a;return function(A){return(a||(a=u.xGo(f)))(A||f)}})()}static{this.\u0275prov=u.jDH({token:f,factory:f.\u0275fac})}}return f})()},693:(M,D,t)=>{function c(o){return new Promise((u,d)=>{const e=new FileReader;e.readAsDataURL(o),e.onload=()=>{u(e.result.split(",")[1])},e.onerror=i=>{d(i)}})}function h(o){return new Promise((u,d)=>{const e=new FileReader;e.readAsText(o),e.onload=()=>{u(e.result)},e.onerror=i=>{d(i)}})}t.d(D,{d:()=>h,n:()=>c})},9234:(M,D,t)=>{t.d(D,{Gg:()=>l,Tr:()=>m,gb:()=>g});var c=t(1567),h=t(6647),o=t(6301),u=t(271),d=t(2938),e=t(4435),i=t(6474),n=t(4839),p=t(9148);const s={all:!1,getEntities:!1,getAvailableEntities:!1,delete:!1},g="admin/entity/",l="admin/entity/list";let m=(()=>{class P extends i.D{constructor(){super(...arguments),this.log=(0,e.T)({EntityService:P},s),this.queryService=(0,d.d)(n.c)}getEntities$(_){return this.log.fnIf("getEntities"),_.pipe((0,c.p)(I=>null!=I),(0,h.n)(I=>this.getAvailableEntities(I.contentTypeName).pipe((0,o.t)(1))))}getAvailableEntities(_,I){return this.log.fnIf("getAvailableEntities"),this.queryService.getEntities({contentTypes:[_],itemIds:I,fields:"Id,Guid,Title",log:"getAvailableEntities"}).pipe((0,u.T)(v=>v.Default))}delete(_,I,O,v,y,T){return this.log.fnIf("delete",{appId:_,contentType:I,entityId:O,force:v,parentId:y,parent}),this.http.delete(this.apiUrl(g+"delete"),{params:{contentType:I,id:O.toString(),appId:_,force:v.toString(),...y&&{parentId:y.toString()},...y&&T&&{parentField:T}}})}static{this.\u0275fac=(()=>{let _;return function(O){return(_||(_=p.xGo(P)))(O||P)}})()}static{this.\u0275prov=p.jDH({token:P,factory:P.\u0275fac})}}return P})()},4839:(M,D,t)=>{t.d(D,{c:()=>e});var c=t(4435),h=t(8873),o=t(9148),u=t(6443);const d={all:!1,getAvailableEntities:!1,getEntities:!1};let e=(()=>{class i{constructor(p,s){this.http=p,this.context=s,this.log=(0,c.T)({QueryService:i},d)}getFromQuery(p,s,g,l){this.log.fnIf("getAvailableEntities",{queryUrl:p,params:s,fields:g,entitiesFilter:l});const m=!!s,I=(((s?.toLocaleLowerCase()??"").includes("appid=")?"":`&appId=${this.context.appId}`)+(m?`&${s}`:"")+"&$select="+(g??"")).substring(1);return this.http.post(`app/auto/query/${p}?${I}`,{Guids:l})}getEntities({contentTypes:p,itemIds:s,fields:g,log:l}){this.log.fnIf("getEntities",{log:l,contentTypes:p,itemIds:s,fields:g});const P=("&typeNames="+(p?.join(",")??"")+`&appId=${this.context.appId}&itemIds=`+(s?.join(",")??"")+"&$select="+(g??"")).substring(1);return this.http.post(`app/auto/query/System.EntityPicker/Default?${P}`,{})}static{this.\u0275fac=function(s){return new(s||i)(o.KVO(u.Qq),o.KVO(h.o))}}static{this.\u0275prov=o.jDH({token:i,factory:i.\u0275fac})}}return i})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.03.00/dist/ng-edit/default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts.74109485473c3b06.js.map