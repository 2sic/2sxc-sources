"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_services_content-types_service_ts-projects_eav-ui_-a8fb8f"],{7693:(v,l,e)=>{e.d(l,{X:()=>I,g:()=>c});var _=e(271),E=e(8873),i=e(8559),u=e(6443),r=e(4821);const I="admin/type/",d="admin/type/scopes";let c=(()=>{class p{constructor(t,s,m){this.http=t,this.context=s,this.dnnContext=m}apiUrl(t){return this.dnnContext.$2sxc.http.apiUrl(t)}retrieveContentType(t){return this.http.get(this.apiUrl("admin/type/get"),{params:{appId:this.context.appId.toString(),contentTypeId:t}})}retrieveContentTypes(t){return this.http.get(this.apiUrl("admin/type/list"),{params:{appId:this.context.appId.toString(),scope:t}})}getScopes(){return this.http.get(this.apiUrl(d),{params:{appId:this.context.appId.toString()}}).pipe((0,_.T)(t=>{const s=t.old;return Object.keys(s).map(D=>({name:s[D],value:D}))}))}getScopesV2(){return this.http.get(this.apiUrl(d),{params:{appId:this.context.appId.toString()}}).pipe((0,_.T)(t=>t.scopes))}save(t){return this.http.post(this.apiUrl("admin/type/save"),t,{params:{appid:this.context.appId.toString()}})}delete(t){return this.http.delete(this.apiUrl("admin/type/delete"),{params:{appid:this.context.appId.toString(),staticName:t.StaticName}})}import(t){const s=new FormData;for(const m of t)s.append("File",m);return this.http.post(this.apiUrl("admin/type/import"),s,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}createGhost(t){return this.http.post(this.apiUrl("admin/type/addghost"),null,{params:{appid:this.context.appId.toString(),sourceStaticName:t}})}static#t=this.\u0275fac=function(s){return new(s||p)(i.KVO(u.Qq),i.KVO(E.o),i.KVO(r.ob))};static#e=this.\u0275prov=i.jDH({token:p,factory:p.\u0275fac})}return p})()},1772:(v,l,e)=>{e.d(l,{I:()=>d,u:()=>h});var _=e(6647),E=e(9452),i=e(3550),u=e(8873),r=e(8559),I=e(6443),O=e(4821);const h="admin/app/";let d=(()=>{class a{constructor(n,o,c){this.http=n,this.context=o,this.dnnContext=c}importApp(n,o,c=!1){const p=new FormData;return p.append("File",n),p.append("Name",o??""),this.http.post(this.dnnContext.$2sxc.http.apiUrl(h+"Import"),p,{params:{zoneId:this.context.zoneId.toString()}}).pipe((0,_.n)(g=>{if(c&&g.Messages[0]?.MessageType===i.G1.Warning){const t=prompt(g.Messages[0].Text+" Would you like to install it using another folder name?");if(t)return this.importApp(n,t,!0)}return(0,E.of)(g)}))}static#t=this.\u0275fac=function(o){return new(o||a)(r.KVO(I.Qq),r.KVO(u.o),r.KVO(O.ob))};static#e=this.\u0275prov=r.jDH({token:a,factory:a.\u0275fac})}return a})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_app-administration_services_content-types_service_ts-projects_eav-ui_-a8fb8f.56f79e1c502d8dee.js.map