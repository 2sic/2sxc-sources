"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts"],{3960:(A,l,t)=>{t.r(l),t.d(l,{QueriesRestApiComponent:()=>o});var m=t(316),a=t(4456),r=t(4175),u=t(3777),d=t(3840),s=t(5175),_=t(2159),O=t(5797),v=t(2938),E=t(52),C=t(7037),i=t(8471),c=t(5445),e=t(9148),y=t(4950),g=t(5060);function h(n,M){if(1&n&&(e.j41(0,"mat-option",3),e.EFF(1),e.k0s()),2&n){const p=M.$implicit;e.Y8G("value",p.Guid),e.R7$(),e.SpI(" ",p.Name," ")}}function T(n,M){1&n&&e.Z7z(0,h,2,2,"mat-option",3,e.fX1),2&n&&e.Dyx(M.sort())}let o=(()=>{class n{#e;#t;constructor(p){this.fb=p,this.#e=(0,v.d)(c.xR),this.#t=(0,v.d)(i.c),this.queryTypes$=new O.t(void 0)}ngOnInit(){this.fetchQueries(),this.queryTypeForm=this.fb.group({queryType:[""]})}fetchQueries(){this.#e.getAll(E.YX.contentTypes.query).subscribe(p=>{this.queryTypes$.next(p);const D=this.#t.url.split("/"),I=D[D.length-1],P=p.find(R=>R.Guid===I);P&&this.queryTypeForm.get("queryType").setValue(P.Guid)})}openRestApi(p){p&&this.#t.navParentFirstChild([`${p}`])}static{this.\u0275fac=function(D){return new(D||n)(e.rXU(a.ok))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-web-api-rest-api"]],standalone:!0,features:[e.aNF],decls:8,vars:4,consts:[[3,"formGroup"],["color","accent",1,"eav-mat-form-field"],["formControlName","queryType",3,"valueChange"],[3,"value"]],template:function(D,I){if(1&D&&(e.j41(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),e.EFF(3,"Query"),e.k0s(),e.j41(4,"mat-select",2),e.bIt("valueChange",function(R){return I.openRestApi(R)}),e.DNE(5,T,2,0),e.nI1(6,"async"),e.k0s()()(),e.nrm(7,"router-outlet")),2&D){let P;e.Y8G("formGroup",I.queryTypeForm),e.R7$(5),e.vxM((P=e.bMT(6,2,I.queryTypes$))?5:-1,P)}},dependencies:[s.Ve,y.rl,y.nJ,s.VO,g.wT,r.Hl,u.Hu,d.m_,a.X1,a.qT,a.BC,a.cb,a.j4,a.JD,m.Jj,_.n3,C.p],encapsulation:2})}}return n})()},5445:(A,l,t)=>{t.d(l,{Cu:()=>s.Cu,JL:()=>s.JL,Mk:()=>s.Mk,X6:()=>a.X,ei:()=>s.ei,gs:()=>a.g,tr:()=>m.t,vN:()=>s.vN,xR:()=>s.xR,y0:()=>_.y});var m=t(1479),a=t(7693),s=(t(1475),t(320),t(8624),t(6460)),_=t(2570)},6460:(A,l,t)=>{t.d(l,{Cu:()=>c,JL:()=>e,Mk:()=>C,ei:()=>i,vN:()=>y,xR:()=>g});var m=t(4600),a=t(6647),r=t(271),u=t(693),d=t(9234),s=t(6474),_=t(9148);const C="admin/query/Run",i="admin/query/DebugStream",c="admin/query/Save",e="admin/query/Get",y="admin/query/DataSources";let g=(()=>{class h extends s.D{getAll(o){return this.http.get(this.apiUrl(d.Gg),{params:{appId:this.appId,contentType:o}})}importQuery(o){return(0,m.H)((0,u.n)(o)).pipe((0,a.n)(n=>this.http.post(this.apiUrl("admin/query/import"),{AppId:this.appId,ContentBase64:n})),(0,r.T)(n=>({Success:n,Messages:[]})))}clonePipeline(o){return this.http.get(this.apiUrl("admin/query/Clone"),{params:{Id:o.toString(),appId:this.appId}})}delete(o){return this.http.delete(this.apiUrl("admin/query/Delete"),{params:{appId:this.appId,Id:o.toString()}})}static{this.\u0275fac=(()=>{let o;return function(M){return(o||(o=_.xGo(h)))(M||h)}})()}static{this.\u0275prov=_.jDH({token:h,factory:h.\u0275fac})}}return h})()},2570:(A,l,t)=>{t.d(l,{y:()=>v});var m=t(6474),a=t(9148);const r="admin/view/",u=r+"all",d=r+"delete",s=r+"import",_=r+"polymorphism",O=r+"usage";let v=(()=>{class E extends m.D{getAll(){return this.http.get(this.apiUrl(u),{params:{appId:this.appId}})}delete(i){return this.http.get(this.apiUrl(d),{params:{appId:this.appId,Id:i.toString()}})}import(i){const c=new FormData;return c.append("File",i),this.http.post(this.apiUrl(s),c,{params:{appId:this.appId,zoneId:this.zoneId}})}export(i){const c=this.apiUrl(r+"json")+"?appId="+this.appId+"&viewId="+i;window.open(c,"_blank","")}getPolymorphism(){return this.http.get(this.apiUrl(_),{params:{appId:this.appId}})}getUsage(i){return this.http.get(this.apiUrl(O),{params:{appId:this.appId,guid:i}})}static{this.\u0275fac=(()=>{let i;return function(e){return(i||(i=a.xGo(E)))(e||E)}})()}static{this.\u0275prov=a.jDH({token:E,factory:E.\u0275fac})}}return E})()},693:(A,l,t)=>{function m(r){return new Promise((u,d)=>{const s=new FileReader;s.readAsDataURL(r),s.onload=()=>{u(s.result.split(",")[1])},s.onerror=_=>{d(_)}})}function a(r){return new Promise((u,d)=>{const s=new FileReader;s.readAsText(r),s.onload=()=>{u(s.result)},s.onerror=_=>{d(_)}})}t.d(l,{d:()=>a,n:()=>m})}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.02.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts.bb6f41c57f409479.js.map