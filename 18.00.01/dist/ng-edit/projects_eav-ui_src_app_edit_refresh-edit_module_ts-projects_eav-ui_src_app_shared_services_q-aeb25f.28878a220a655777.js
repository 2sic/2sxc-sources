"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_edit_refresh-edit_module_ts-projects_eav-ui_src_app_shared_services_q-aeb25f"],{5668:(f,h,a)=>{a.r(h),a.d(h,{RefreshEditComponent:()=>d,RefreshEditModule:()=>b});var s=a(2159),p=a(4798),l=a(8559);let d=(()=>{class c{constructor(r,t){const e=t.snapshot.params,n=`edit/refresh/${e.items}`,i=`edit/${e.items}`,u=p.b.calculatePathFromRoot(t),o=u.lastIndexOf(n);if(o<=0)return;const g=u.substring(0,o)+u.substring(o).replace(n,i);r.navigate([g])}static#t=this.\u0275fac=function(t){return new(t||c)(l.rXU(s.Ix),l.rXU(s.nX))};static#e=this.\u0275cmp=l.VBU({type:c,selectors:[["ng-component"]],standalone:!0,features:[l.aNF],decls:0,vars:0,template:function(t,e){},encapsulation:2})}return c})();const E=[{path:"",component:d,data:{title:"Refreshing Edit Dialog"}}];let b=(()=>{class c{static#t=this.\u0275fac=function(t){return new(t||c)};static#e=this.\u0275mod=l.$C({type:c});static#s=this.\u0275inj=l.G2t({imports:[s.iI.forChild(E)]})}return c})()},4839:(f,h,a)=>{a.d(h,{c:()=>c});var s=a(8147),p=a(4979),l=a(8873),d=a(8559),E=a(6443);let c=(()=>{class _ extends p.V{constructor(t,e){super(new s.B("QueryService",!1)),this.http=t,this.context=e}getAvailableEntities(t,e,n,i){this.log.a("getAvailableEntities",{queryUrl:t,params:e,fields:n,entitiesFilter:i});const u=!!e,v=(((e?.toLocaleLowerCase()??"").includes("appid=")?"":`&appId=${this.context.appId}`)+(u?`&${e}`:"")+"&$select="+(n??"")).substring(1);return this.http.post(`app/auto/query/${t}?${v}`,{Guids:i})}getEntities({contentTypes:t,itemIds:e,fields:n,log:i}){this.log.a(`getEntities(${i})`,{contentTypes:t,itemIds:e,fields:n});const o=("&typeNames="+(t?.join(",")??"")+`&appId=${this.context.appId}&itemIds=`+(e?.join(",")??"")+"&$select="+(n??"")).substring(1);return this.http.post(`app/auto/query/System.EntityPicker/Default?${o}`,{})}static#t=this.\u0275fac=function(e){return new(e||_)(d.KVO(E.Qq),d.KVO(l.o))};static#e=this.\u0275prov=d.jDH({token:_,factory:_.\u0275fac})}return _})()},9074:(f,h,a)=>{a.d(h,{br:()=>c,ot:()=>_});var s=a(8559),p=a(6042);function c(r,t){!t?.injector&&(0,s.Af3)(c);const e=t?.injector??(0,s.WQX)(s.zZn),n=new p.m(1),i=(0,s.QZP)(()=>{let u;try{u=r()}catch(o){return void(0,s.O8t)(()=>n.error(o))}(0,s.O8t)(()=>n.next(u))},{injector:e,manualCleanup:!0});return e.get(s.abz).onDestroy(()=>{i.destroy(),n.complete()}),n.asObservable()}function _(r,t){const e=!t?.manualCleanup;e&&!t?.injector&&(0,s.Af3)(_);const n=e?t?.injector?.get(s.abz)??(0,s.WQX)(s.abz):null;let i;i=(0,s.vPA)(t?.requireSync?{kind:0}:{kind:1,value:t?.initialValue});const u=r.subscribe({next:o=>i.set({kind:1,value:o}),error:o=>{if(t?.rejectErrors)throw o;i.set({kind:2,error:o})}});return n?.onDestroy(u.unsubscribe.bind(u)),(0,s.EWP)(()=>{const o=i();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new s.wOt(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.00.01/dist/ng-edit/projects_eav-ui_src_app_edit_refresh-edit_module_ts-projects_eav-ui_src_app_shared_services_q-aeb25f.28878a220a655777.js.map