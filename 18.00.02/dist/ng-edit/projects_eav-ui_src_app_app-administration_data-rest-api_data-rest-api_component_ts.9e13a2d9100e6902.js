"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_data-rest-api_data-rest-api_component_ts"],{9086:(g,d,t)=>{t.r(d),t.d(d,{DataRestApiComponent:()=>A});var h=t(5445),p=t(5797),c=t(5175),E=t(316),s=t(4456),a=t(4175),i=t(3777),M=t(3840),P=t(2159),D=t(5437),C=t(7037),m=t(8471),n=t(7580),r=t(5944),l=t(5060);function v(o,T){if(1&o&&(n.j41(0,"mat-option",3),n.EFF(1),n.k0s()),2&o){const e=T.$implicit;n.Y8G("value",e.StaticName),n.R7$(),n.SpI(" ",e.Label," ")}}function I(o,T){1&o&&n.Z7z(0,v,2,2,"mat-option",3,n.fX1),2&o&&n.Dyx(T.sort())}let A=(()=>{class o{#n;#t;constructor(e){this.fb=e,this.#n=(0,D.d)(h.gs),this.#t=(0,D.d)(m.c),this.contentTypes$=new p.t(void 0),this.contentTypes=[]}ngOnInit(){this.fetchData(),this.contentTypeForm=this.fb.group({contentType:[""]})}fetchData(){this.#n.retrieveContentTypes("Default").subscribe(e=>{this.contentTypes$.next(e);const _=this.#t.url.split("/"),u=_[_.length-1],O=e.find(R=>R.StaticName===u);O&&this.contentTypeForm.get("contentType").setValue(O.StaticName)})}openRestApi(e){e&&this.#t.navParentFirstChild([`${e}`])}static#e=this.\u0275fac=function(_){return new(_||o)(n.rXU(s.ok))};static#a=this.\u0275cmp=n.VBU({type:o,selectors:[["app-data-rest-api"]],standalone:!0,features:[n.aNF],decls:8,vars:4,consts:[[3,"formGroup"],["color","accent",1,"eav-mat-form-field"],["formControlName","contentType",3,"valueChange"],[3,"value"]],template:function(_,u){if(1&_&&(n.j41(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),n.EFF(3,"Content-Type"),n.k0s(),n.j41(4,"mat-select",2),n.bIt("valueChange",function(R){return u.openRestApi(R)}),n.DNE(5,I,2,0),n.nI1(6,"async"),n.k0s()()(),n.nrm(7,"router-outlet")),2&_){let O;n.Y8G("formGroup",u.contentTypeForm),n.R7$(5),n.vxM(5,(O=n.bMT(6,2,u.contentTypes$))?5:-1,O)}},dependencies:[c.Ve,r.rl,r.nJ,c.VO,l.wT,a.Hl,i.Hu,M.m_,s.X1,s.qT,s.BC,s.cb,s.j4,s.JD,E.Jj,P.n3,C.p]})}return o})()},5445:(g,d,t)=>{t.d(d,{Cu:()=>a.Cu,JL:()=>a.JL,Mk:()=>a.Mk,ei:()=>a.ei,gs:()=>p.g,tr:()=>h.t,vN:()=>a.vN,xR:()=>a.xR,y0:()=>i.y});var h=t(1479),p=t(7693),a=(t(1475),t(320),t(8624),t(6460)),i=t(2570)},6460:(g,d,t)=>{t.d(d,{Cu:()=>l,JL:()=>v,Mk:()=>n,ei:()=>r,vN:()=>I,xR:()=>A});var h=t(4600),p=t(6647),c=t(271),E=t(693),s=t(8873),a=t(9234),i=t(7580),M=t(6443),P=t(4821);const n="admin/query/Run",r="admin/query/DebugStream",l="admin/query/Save",v="admin/query/Get",I="admin/query/DataSources";let A=(()=>{class o{constructor(e,_,u){this.http=e,this.context=_,this.dnnContext=u}getAll(e){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(a.Gg),{params:{appId:this.context.appId.toString(),contentType:e}})}importQuery(e){return(0,h.H)((0,E.n)(e)).pipe((0,p.n)(_=>this.http.post(this.dnnContext.$2sxc.http.apiUrl("admin/query/import"),{AppId:this.context.appId.toString(),ContentBase64:_})),(0,c.T)(_=>({Success:_,Messages:[]})))}clonePipeline(e){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/query/Clone"),{params:{Id:e.toString(),appId:this.context.appId.toString()}})}delete(e){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("admin/query/Delete"),{params:{appId:this.context.appId.toString(),Id:e.toString()}})}static#n=this.\u0275fac=function(_){return new(_||o)(i.KVO(M.Qq),i.KVO(s.o),i.KVO(P.ob))};static#t=this.\u0275prov=i.jDH({token:o,factory:o.\u0275fac})}return o})()},2570:(g,d,t)=>{t.d(d,{y:()=>C});var h=t(8873),p=t(7580),c=t(6443),E=t(4821);const s="admin/view/",a=s+"all",i=s+"delete",M=s+"import",P=s+"polymorphism",D=s+"usage";let C=(()=>{class m{constructor(r,l,v){this.http=r,this.context=l,this.dnnContext=v}getAll(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(a),{params:{appId:this.context.appId.toString()}})}delete(r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(i),{params:{appId:this.context.appId.toString(),Id:r.toString()}})}import(r){const l=new FormData;return l.append("File",r),this.http.post(this.dnnContext.$2sxc.http.apiUrl(M),l,{params:{appId:this.context.appId.toString(),zoneId:this.context.zoneId.toString()}})}export(r){const l=this.dnnContext.$2sxc.http.apiUrl(s+"json")+"?appId="+this.context.appId+"&viewId="+r;window.open(l,"_blank","")}getPolymorphism(){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(P),{params:{appId:this.context.appId.toString()}})}getUsage(r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(D),{params:{appId:this.context.appId.toString(),guid:r}})}static#n=this.\u0275fac=function(l){return new(l||m)(p.KVO(c.Qq),p.KVO(h.o),p.KVO(E.ob))};static#t=this.\u0275prov=p.jDH({token:m,factory:m.\u0275fac})}return m})()},693:(g,d,t)=>{function h(c){return new Promise((E,s)=>{const a=new FileReader;a.readAsDataURL(c),a.onload=()=>{E(a.result.split(",")[1])},a.onerror=i=>{s(i)}})}function p(c){return new Promise((E,s)=>{const a=new FileReader;a.readAsText(c),a.onload=()=>{E(a.result)},a.onerror=i=>{s(i)}})}t.d(d,{d:()=>p,n:()=>h})}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.02/dist/ng-edit/projects_eav-ui_src_app_app-administration_data-rest-api_data-rest-api_component_ts.9e13a2d9100e6902.js.map