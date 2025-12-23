import{H as i,ea as c,q as a,ud as l}from"./chunk-46QINP2S.js";var f=new l(()=>[]),m=(()=>{class s{constructor(){this.excludedUrls=["dist/ng-edit/i18n"]}intercept(o,e){let r=o.context.get(f);return e.handle(o).pipe(i(t=>r?.includes(t.status)?a(()=>t):(this.checkIfExcluded(t.url)||this.showDetailedHttpError(t),a(t))))}checkIfExcluded(o){for(let e of this.excludedUrls)if(o.includes(e))return!0;return!1}showDetailedHttpError(o){let e="Had an error talking to the server (status "+o.status+").",r=o.error;if(r){let t=r.Message;t&&(e+=`
Message: `+t);let n=r.MessageDetail||r.ExceptionMessage;n&&(e+=`
Detail: `+n),n&&n.indexOf("No action was found")===0&&(n.indexOf("that matches the name")>0?e+=`

Tip from 2sxc: you probably got the action-name wrong in your JS.`:n.indexOf("that matches the request.")>0&&(e+=`

Tip from 2sxc: Seems like the parameters are the wrong amount or type.`)),t&&t.indexOf("Controller")===0&&t.indexOf("not found")>0&&(e+=`

Tip from 2sxc: you probably spelled the controller name wrong or forgot to remove the word 'controller' from the call in JS. To call a controller called 'DemoController' only use 'Demo'.`),e+=`

if you are an advanced user you can learn more about what went wrong - discover how on 2sxc.org/help?tag=debug`}alert(e)}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=c({token:s,factory:s.\u0275fac})}}return s})();export{f as a,m as b};
//# sourceMappingURL=https://sources.2sxc.org/21.00.00/dist/ng-edit/chunk-M6AZRTKS.js.map
