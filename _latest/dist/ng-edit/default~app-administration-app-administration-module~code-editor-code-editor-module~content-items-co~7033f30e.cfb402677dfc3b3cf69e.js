(window.webpackJsonp=window.webpackJsonp||[]).push([[4,36],{"0adC":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("D57K"),r=n("sEIs"),o=n("bwdy"),a=n("ZTXN"),c=n("YtkY"),s=n("Ohay"),u=n("xVbo"),l=n("jIqt"),d=n("0Woy"),p=n("uuTa"),h=n("LCtb"),f=n("EM62"),v=n("ywpU"),g=function(){function t(t,e){this.router=t,this.languageInstanceService=e}return t.prototype.ngOnDestroy=function(){this.childFormResult$.complete(),this.subscription.unsubscribe()},t.prototype.init=function(t,e,n){this.route=t,this.dialogRef=n,this.subscription=new o.a,this.childFormResult$=new a.a,this.initHideHeader(e),this.initChildFormResult(),this.refreshOnChildVersionsClosed()},t.prototype.isExpanded=function(t,e){var n=t.toString();return this.route.params.pipe(Object(c.a)((function(t){return t.detailsEntityGuid===e&&t.detailsFieldId===n})),Object(s.a)())},t.prototype.childFormResult=function(t,e){return this.childFormResult$.pipe(Object(u.a)((function(n){return n.updateEntityGuid===e&&n.updateFieldId===t&&null!=n.result})),Object(c.a)((function(t){return t.result})))},t.prototype.childFormClosed=function(){return this.childFormResult$.pipe(Object(c.a)((function(t){return null})))},t.prototype.expand=function(t,e,n,i){var r=this.route.snapshot.params,o="edit/"+r.items+(null!=r.detailsEntityGuid&&null!=r.detailsFieldId?"/details/"+r.detailsEntityGuid+"/"+r.detailsFieldId:""),a="edit/"+r.items+(t?"/details/"+n+"/"+e:""),c=Object(h.a)(this.route),s=c.lastIndexOf(o);if(!(s<=0)){var u=c.substring(0,s)+c.substring(s).replace(o,a);this.router.navigate([u],{state:i&&{componentTag:i}})}},t.prototype.open=function(t,e,n){var i=Object(p.a)(n),r=this.route.snapshot.params;if(null!=r.detailsEntityGuid&&null!=r.detailsFieldId)this.router.navigate(["edit/"+i],{relativeTo:this.route});else{var o="edit/"+r.items,a="edit/"+r.items+"/update/"+e+"/"+t+"/edit/"+i,c=Object(h.a)(this.route),s=c.lastIndexOf(o);if(!(s<=0)){var u=c.substring(0,s)+c.substring(s).replace(o,a);this.router.navigate([u])}}},t.prototype.initHideHeader=function(t){var e=this;this.subscription.add(this.route.params.pipe(Object(c.a)((function(t){return null!=t.detailsEntityGuid&&null!=t.detailsFieldId})),Object(s.a)()).subscribe((function(n){e.languageInstanceService.updateHideHeader(t,n)})))},t.prototype.initChildFormResult=function(){var t=this;this.subscription.add(this.router.events.pipe(Object(u.a)((function(t){return t instanceof r.b})),Object(l.a)(!!this.route.snapshot.firstChild),Object(c.a)((function(){return!!t.route.snapshot.firstChild})),Object(d.a)(),Object(u.a)((function(t){var e=Object(i.f)(t,2);return e[0]&&!e[1]})),Object(c.a)((function(){var e,n=t.route.snapshot.params,i=null!=n.detailsEntityGuid&&null!=n.detailsFieldId,r=i?n.detailsEntityGuid:n.updateEntityGuid,o=i?n.detailsFieldId:n.updateFieldId,a=null===(e=t.router.getCurrentNavigation().extras)||void 0===e?void 0:e.state;return{updateEntityGuid:r,updateFieldId:parseInt(o,10),result:a}}))).subscribe((function(e){t.childFormResult$.next(e);var n=t.route.snapshot.params;if(null!=n.updateEntityGuid&&null!=n.updateFieldId){var i="edit/"+n.items+"/update/"+n.updateEntityGuid+"/"+n.updateFieldId,r="edit/"+n.items,o=Object(h.a)(t.route),a=o.lastIndexOf(i);if(!(a<=0)){var c=o.substring(0,a)+o.substring(a).replace(i,r);t.router.navigate([c])}}})))},t.prototype.refreshOnChildVersionsClosed=function(){var t=this;this.subscription.add(this.router.events.pipe(Object(u.a)((function(t){return t instanceof r.b})),Object(l.a)(!!this.route.snapshot.firstChild),Object(c.a)((function(){return!!t.route.snapshot.firstChild})),Object(d.a)(),Object(u.a)((function(t){var e=Object(i.f)(t,2);return e[0]&&!e[1]})),Object(c.a)((function(){var e;return null===(e=t.router.getCurrentNavigation().extras)||void 0===e?void 0:e.state})),Object(u.a)((function(t){return null!=(null==t?void 0:t.refreshEdit)}))).subscribe((function(e){if(e.refreshEdit){var n=t.route.snapshot.params,i="edit/"+n.items,r="edit/refresh/"+n.items,o=Object(h.a)(t.route),a=o.lastIndexOf(i);if(!(a<=0)){var c=o.substring(0,a)+o.substring(a).replace(i,r);t.dialogRef.close({navigateUrl:c})}}})))},t.\u0275fac=function(e){return new(e||t)(f.Wb(r.c),f.Wb(v.a))},t.\u0275prov=f.Ib({token:t,factory:t.\u0275fac}),t}()},"2FQU":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("J+dc"),r=n("merk"),o=n("xWkI"),a=n("EM62"),c=n("3oUN"),s=n("W1gw"),u=function(){function t(t,e){this.store=t,this.snackBar=e}return t.prototype.loadDebugEnabled=function(t){this.store.dispatch(o.a({debugEnabled:t}))},t.prototype.toggleDebugEnabled=function(){var t;this.store.dispatch(o.b()),this.store.select(r.c).pipe(Object(i.a)(1)).subscribe((function(e){t=e})),this.snackBar.open(t?"debug mode enabled":"debug mode disabled",null,{duration:3e3})},t.prototype.getDebugEnabled=function(){return this.store.select(r.c)},t.\u0275fac=function(e){return new(e||t)(a.Wb(c.i),a.Wb(s.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"39Ct":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("EM62"),r=n("bFHC"),o=n("e4iD"),a=function(){function t(t,e){this.matIconRegistry=t,this.domSanitizer=e,this.icons=[{name:"apple",html:'<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">\r\n<style type="text/css">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id="Layer_1">\r\n\t<path d="M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z"/>\r\n</g>\r\n<g id="Layer_3" class="st0">\r\n</g>\r\n<g id="Icon">\r\n\t<path d="M32,20c3.7,0,6,2.1,6,5.47C38,33.21,33.01,40,30.06,40c-0.25-0.04-0.93-0.35-1.38-0.56c-1.25-0.58-2.8-1.3-4.68-1.3\r\n\t\ts-3.43,0.72-4.68,1.3C18.87,39.65,18.19,39.97,18,40c-3.01,0-8-6.79-8-14.53C10,22.1,12.3,20,16,20c2.44,0,5.29,1.17,6.17,1.62\r\n\t\tL24,22.56l1.83-0.94C26.64,21.2,29.53,20,32,20 M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44\r\n\t\tc2,0,4-1.85,6-1.85S28,44,30,44c6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z"/>\r\n</g>\r\n</svg>\r\n'},{name:"appleFilled",html:'<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">\r\n<style type="text/css">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id="Layer_1">\r\n\t<path d="M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z"/>\r\n</g>\r\n<g id="Layer_3" class="st0">\r\n</g>\r\n<g id="Icon">\r\n\t<path d="M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44c2,0,4-1.85,6-1.85S28,44,30,44\r\n\t\tc6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z"/>\r\n</g>\r\n</svg>\r\n'},{name:"draft-branch",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 39.2 28.2 71.8 65.5 78.7-.8 17.2-5 30.4-12.7 40-17.5 21.8-53.1 25.2-90.7 28.7-28.2 2.6-57.4 5.4-80.4 16.9-3.4 1.7-6.7 3.6-9.7 5.7V158.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-36.9-24.9-67.9-58.9-77.2 5-9.6 12.3-14.6 19-18 17.5-8.8 42.5-11.2 68.9-13.7 42.6-4 86.7-8.1 112.7-40.5 12.4-15.5 19-35.5 19.8-60.7C357.3 214 384 182.1 384 144zM32 80c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 352c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.4 21.4-47.9 47.8-48h.6c26.3.2 47.6 21.7 47.6 48zm187.8-241.5L304 192c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48c0 22.4-15.4 41.2-36.2 46.5z"/></svg>'},{name:"file",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z"/></svg>'},{name:"file-archive",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z"/></svg>'},{name:"file-audio",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-77.6-66.6c38.5-26 61.6-69.3 61.6-115.7 0-24.7-6.5-48.9-18.9-70.1-12-20.6-29.1-37.8-49.6-50-7.1-4.2-16.3-1.9-20.6 5.2-4.2 7.1-1.9 16.3 5.2 20.6 33.1 19.7 53.7 55.8 53.7 94.3 0 36.5-18.1 70.4-48.3 90.9-6.9 4.6-8.7 14-4 20.8 2.9 4.3 7.6 6.6 12.4 6.6 3.1 0 6-.8 8.5-2.6zm-26.6-38.3c26-17.3 41.5-46.2 41.5-77.4 0-32.9-17.7-63.7-46.2-80.3-7.2-4.2-16.3-1.7-20.5 5.4-4.2 7.2-1.7 16.3 5.4 20.5 19.3 11.2 31.3 32 31.3 54.3 0 21.1-10.5 40.7-28.1 52.4-6.9 4.6-8.8 13.9-4.2 20.8 2.9 4.4 7.7 6.7 12.5 6.7 2.8.1 5.7-.7 8.3-2.4zm-27-38.2c13.7-8.5 21.8-23.1 21.8-39.2 0-17-9.3-32.5-24.2-40.6-7.3-3.9-16.4-1.2-20.3 6.1-3.9 7.3-1.2 16.4 6.1 20.3 5.2 2.8 8.5 8.3 8.5 14.2 0 5.6-2.9 10.8-7.6 13.7-7 4.4-9.2 13.6-4.8 20.7 2.8 4.6 7.7 7.1 12.8 7.1 2.5 0 5.2-.7 7.7-2.3zM138 266.7v74.7L112 322H94v-36h18l26-19.3m17.9-50.7c-2.9 0-6 1.1-8.4 3.5L104 256H76c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h28l43.5 36.5c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V228c0-7.2-5.9-12-12.1-12z"/></svg>'},{name:"file-code",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zm-22.627 22.628a15.89 15.89 0 0 1 4.195 7.431H256V32.491a15.88 15.88 0 0 1 7.431 4.195l83.883 83.883zM336 480H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304c0 8.837-7.163 16-16 16zm-161.471-67.404l-25.928-7.527a5.1 5.1 0 0 1-3.476-6.32l58.027-199.869a5.1 5.1 0 0 1 6.32-3.476l25.927 7.527a5.1 5.1 0 0 1 3.476 6.32L180.849 409.12a5.1 5.1 0 0 1-6.32 3.476zm-48.446-47.674l18.492-19.724a5.101 5.101 0 0 0-.351-7.317L105.725 304l38.498-33.881a5.1 5.1 0 0 0 .351-7.317l-18.492-19.724a5.1 5.1 0 0 0-7.209-.233L57.61 300.279a5.1 5.1 0 0 0 0 7.441l61.263 57.434a5.1 5.1 0 0 0 7.21-.232zm139.043.232l61.262-57.434a5.1 5.1 0 0 0 0-7.441l-61.262-57.434a5.1 5.1 0 0 0-7.209.233l-18.492 19.724a5.101 5.101 0 0 0 .351 7.317L278.275 304l-38.499 33.881a5.1 5.1 0 0 0-.351 7.317l18.492 19.724a5.1 5.1 0 0 0 7.209.232z"/></svg>'},{name:"file-excel",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM211.7 308l50.5-81.8c4.8-8-.9-18.2-10.3-18.2h-4.1c-4.1 0-7.9 2.1-10.1 5.5-31 48.5-36.4 53.5-45.7 74.5-17.2-32.2-8.4-16-45.8-74.5-2.2-3.4-6-5.5-10.1-5.5H132c-9.4 0-15.1 10.3-10.2 18.2L173 308l-59.1 89.5c-5.1 8 .6 18.5 10.1 18.5h3.5c4.1 0 7.9-2.1 10.1-5.5 37.2-58 45.3-62.5 54.4-82.5 31.5 56.7 44.3 67.2 54.4 82.6 2.2 3.4 6 5.4 10 5.4h3.6c9.5 0 15.2-10.4 10.1-18.4L211.7 308z"/></svg>'},{name:"file-image",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"/></svg>'},{name:"file-pdf",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"/></svg>'},{name:"file-powerpoint",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM204.3 208H140c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-60.4h44.3c38.7 0 67.7-27.3 67.7-69 0-38.6-23.8-66.6-67.7-66.6zm26 97.7c-7.5 7.6-17.8 11.4-31 11.4H160V233h39.7c12.9 0 23.1 3.7 30.6 11.1 15.3 15.1 15 46.5 0 61.6z"/></svg>'},{name:"file-text",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"/></svg>'},{name:"file-video",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M224 280.593C224 267.01 212.989 256 199.407 256H88.593C75.011 256 64 267.01 64 280.593v110.815C64 404.99 75.011 416 88.593 416h110.814C212.989 416 224 404.99 224 391.407V381l27.971 27.971a23.998 23.998 0 0 0 16.97 7.029H296c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-27.059a24.003 24.003 0 0 0-16.97 7.029L224 291v-10.407zM192 384H96v-96h96v96zm80.255-96H288v96h-15.745L224 342.826v-13.652L272.255 288zm97.686-190.059l-83.883-83.882A47.996 47.996 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 32.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882a15.882 15.882 0 0 1 4.195 7.431H256V32.491zM352 464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V48c0-8.837 7.164-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304z"/></svg>'},{name:"file-word",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-53.6-246.5c-6.8 32.8-32.5 139.7-33.4 150.3-5.8-29.1-.7 1.6-41.8-150.9-1.4-5.2-6.2-8.9-11.6-8.9h-6.4c-5.4 0-10.2 3.6-11.6 8.9-38.3 142.3-37.4 140.6-39.4 154.7-4.1-23.9 2.1-2.9-34.4-154.4-1.3-5.4-6.1-9.2-11.7-9.2h-7.2c-7.8 0-13.5 7.3-11.6 14.9 9.5 38 34.5 137.4 42.2 168 1.3 5.3 6.1 9.1 11.6 9.1h17c5.4 0 10.2-3.7 11.6-8.9 34.2-127.7 33.5-123.4 36.7-142.9 6.5 31.1.2 7 36.7 142.9 1.4 5.2 6.2 8.9 11.6 8.9h14c5.5 0 13.7-3.7 15.1-9l42.8-168c1.9-7.6-3.8-15-11.6-15h-6.8c-5.7 0-10.6 4-11.8 9.5z"/></svg>'},{name:"folder",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z"/></svg>'},{name:"folder-plus",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 272h-72v-72c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v72h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h72c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z"/></svg>'},{name:"sitemap",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 352h-32v-97.59c0-16.77-13.62-30.41-30.41-30.41H336v-64h48c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h48v64H94.41C77.62 224 64 237.64 64 254.41V352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32H96v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-32v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-480 32v96H32v-96h96zm240 0v96h-96v-96h96zM256 128V32h128v96H256zm352 352h-96v-96h96v96z"/></svg>'}]}return t.prototype.load=function(){var t=this;this.icons.forEach((function(e){t.matIconRegistry.addSvgIconLiteral(e.name,t.domSanitizer.bypassSecurityTrustHtml(e.html))}))},t.\u0275fac=function(e){return new(e||t)(i.Wb(r.c),i.Wb(o.b))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac}),t}()},"3AMH":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("EM62"),r=n("e4iD"),o=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)},t.\u0275fac=function(e){return new(e||t)(i.Mb(r.b))},t.\u0275pipe=i.Lb({name:"safeResourceUrl",type:t,pure:!0}),t}()},"6fnQ":function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l}));var i=n("EM62"),r=n("vobO"),o=n("JXuk"),a=n("B5/E"),c="admin/appfiles/all",s="admin/appfiles/asset",u="admin/appfiles/create",l=function(){function t(t,e,n){this.http=t,this.eavService=e,this.dnnContext=n}return t.prototype.getAll=function(t){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(c),{params:{appId:this.eavService.eavConfig.appId.toString(),global:t.toString(),withSubfolders:"true"}})},t.prototype.create=function(t,e){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(u),{},{params:{appId:this.eavService.eavConfig.appId.toString(),global:e.toString(),path:t}})},t.\u0275fac=function(e){return new(e||t)(i.Wb(r.b),i.Wb(o.a),i.Wb(a.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac}),t}()},IMfk:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("EM62"),r=function(){function t(){this.defaultIcon="file",this.checkImgRegEx=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/i,this.customExtensions={doc:"file-word",docx:"file-word",xls:"file-excel",xlsx:"file-excel",ppt:"file-powerpoint",pptx:"file-powerpoint",pdf:"file-pdf",mp3:"file-audio",avi:"file-video",mpg:"file-video",mpeg:"file-video",mov:"file-video",mp4:"file-video",zip:"file-archive",rar:"file-archive",txt:"file-text",html:"file-code",css:"file-code",xml:"file-code",xsl:"file-code"},this.matExtensions={vcf:"person"}}return t.prototype.getExtension=function(t){return t.substr(t.lastIndexOf(".")+1).toLowerCase()},t.prototype.getIconClass=function(t){var e=this.getExtension(t);return this.matExtensions[e]||this.customExtensions[e]||this.defaultIcon},t.prototype.isKnownType=function(t){return null!=this.matExtensions[this.getExtension(t)]},t.prototype.isImage=function(t){return this.checkImgRegEx.test(t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac=function(e){return new(e||t)}}),t}()},JXuk:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return p}));var i=n("ZTXN"),r=n("0ELX"),o=n("gZep"),a=n("EM62"),c=n("vobO"),s=n("3oUN"),u=n("B5/E"),l=n("Iv+g"),d="cms/edit/",p=function(){function t(t,e,n,r){this.http=t,this.store=e,this.dnnContext=n,this.context=r,this.forceConnectorSave$=new i.a,this.formValueChange$=new i.a,this.formDisabledChange$=new i.a}return t.prototype.ngOnDestroy=function(){this.forceConnectorSave$.complete(),this.formValueChange$.complete(),this.formDisabledChange$.complete()},t.prototype.setEavConfig=function(t){this.eavConfig={zoneId:this.context.zoneId.toString(),appId:this.context.appId.toString(),appRoot:t.App.Url,lang:t.Language.Current,langPri:t.Language.Primary,langs:t.Language.All,moduleId:this.context.moduleId.toString(),partOfPage:sessionStorage.getItem(r.k),portalRoot:t.Site.Url,tabId:this.context.tabId.toString(),systemRoot:window.location.pathname.split("/dist/")[0]+"/",versioningOptions:this.getVersioningOptions("true"===sessionStorage.getItem(r.k),sessionStorage.getItem(r.m))}},t.prototype.fetchFormData=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(d+"load"),t,{params:{appId:this.context.appId.toString()}})},t.prototype.saveItem=function(t){this.store.dispatch(new o.d(t))},t.prototype.saveItemSuccess=function(t){this.store.dispatch(new o.f(t))},t.prototype.saveItemError=function(t){this.store.dispatch(new o.e(t))},t.prototype.saveFormData=function(t){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(d+"save"),t,{params:{appId:this.eavConfig.appId.toString(),partOfPage:this.eavConfig.partOfPage}})},t.prototype.getVersioningOptions=function(t,e){if(!t)return{show:!0,hide:!0,branch:!0};var n=e||"";switch(n){case"":case"DraftOptional":return{show:!0,hide:!0,branch:!0};case"DraftRequired":return{branch:!0,hide:!0};default:return console.error("invalid versioning requiremenets: "+n),{}}},t.\u0275fac=function(e){return new(e||t)(a.Wb(c.b),a.Wb(s.i),a.Wb(u.a),a.Wb(l.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t}()},LCtb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("D57K");function r(t){for(var e,n,r,o,a=t;a.firstChild;)a=a.firstChild;var c="";try{for(var s=Object(i.h)(a.snapshot.pathFromRoot),u=s.next();!u.done;u=s.next()){var l=u.value;if(!(l.url.length<=0))try{for(var d=(r=void 0,Object(i.h)(l.url)),p=d.next();!p.done;p=d.next()){var h=p.value;h.path&&(c+="/"+h.path)}}catch(f){r={error:f}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}}catch(v){e={error:v}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return c}},Scw0:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("4UCL"),r=n("EM62"),o=n("JXuk"),a=".css",c=".js",s=function(){function t(t){this.eavService=t,this.loadedFiles=[]}return t.prototype.load=function(t,e){var n=this.sortByType(t);this.insertToDom(n,e,0)},t.prototype.sortByType=function(t){var e=this,n=[],i=[];return t.forEach((function(t){var r={path:e.resolveSpecialPaths(t),type:null,loaded:!1,domEl:null};r.path.endsWith(a)?(r.type=a,n.push(r)):r.path.endsWith(c)&&(r.type=c,i.push(r))})),n.concat(i)},t.prototype.insertToDom=function(t,e,n){var i=this,r=t[n];if(n++,r){r.path=r.path+"?sxcver="+sxcVersion;var o=this.loadedFiles.find((function(t){return t.path===r.path}));if(o)if(o.loaded)this.insertToDom(t,e,n);else{var s=function(){r.loaded=!0,i.insertToDom(t,e,n),o.domEl.removeEventListener("load",s),o.domEl.removeEventListener("error",s)};o.domEl.addEventListener("load",s),o.domEl.addEventListener("error",s)}else{r.type===a?(r.domEl=document.createElement("link"),r.domEl.rel="stylesheet",r.domEl.href=r.path):r.type===c&&(r.domEl=document.createElement("script"),r.domEl.type="module",r.domEl.src=r.path);var u=function(){r.loaded=!0,i.insertToDom(t,e,n),r.domEl.removeEventListener("load",u),r.domEl.removeEventListener("error",u)};r.domEl.addEventListener("load",u),r.domEl.addEventListener("error",u),document.querySelector("head").appendChild(r.domEl),this.loadedFiles.push(r)}}else e()},t.prototype.resolveSpecialPaths=function(t){return t.replace(/\[System:Path\]/i,i.a.getUrlPrefix("system",this.eavService.eavConfig)).replace(/\[Zone:Path\]/i,i.a.getUrlPrefix("zone",this.eavService.eavConfig)).replace(/\[App:Path\]/i,i.a.getUrlPrefix("app",this.eavService.eavConfig))},t.\u0275fac=function(e){return new(e||t)(r.Wb(o.a))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t}()},b67o:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var i=n("xVbo"),r=n("TLy2"),o=n("7ntQ"),a=n("JXuk"),c=n("EM62"),s=n("vobO"),u=n("Iv+g"),l=n("B5/E"),d="admin/entity/",p="admin/entity/list",h=function(){function t(t,e,n,i){this.http=t,this.eavService=e,this.context=n,this.dnnContext=i}return t.prototype.getAvailableEntities=function(t,e){var n=null!=this.eavService.eavConfig?this.eavService.eavConfig:this.context;return this.http.post(this.dnnContext.$2sxc.http.apiUrl(a.b+"EntityPicker"),t,{params:{contentTypeName:e,appId:n.appId.toString()}})},t.prototype.reactiveEntities=function(t){var e=this;return t.pipe(Object(i.a)((function(t){return null!=t})),Object(r.a)((function(t){return e.getAvailableEntities(t.filter,t.contentTypeName).pipe(Object(o.a)())})))},t.prototype.delete=function(t,e,n){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(d+"delete"),{params:{contentType:t,id:e,appId:this.eavService.eavConfig.appId.toString(),force:n.toString()}})},t.\u0275fac=function(e){return new(e||t)(c.Wb(s.b),c.Wb(a.a),c.Wb(u.a),c.Wb(l.a))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac}),t}()},gZep:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return s}));var i="[Item] SAVE_ITEM_ATTRIBUTES_VALUES",r="[Item] SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS",o="[Item] SAVE_ITEM_ATTRIBUTES_VALUES_ERROR",a=function(){return function(t){this.item=t,this.type=i}}(),c=function(){return function(t){this.data=t,this.type=r}}(),s=function(){return function(t){this.error=t,this.type=o}}()},gatd:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("EM62"),r=n("vobO"),o=n("B5/E"),a=function(){function t(t,e){this.http=t,this.dnnContext=e}return t.prototype.getAvailableEntities=function(t,e,n){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("app/auto/query/"+t+"?includeGuid="+e+(n?"&"+n:"")))},t.\u0275fac=function(e){return new(e||t)(i.Wb(r.b),i.Wb(o.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac}),t}()},iKpp:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("D57K"),r=n("OZ4H"),o=n("EM62"),a=n("JXuk"),c=n("s2Ay"),s=n("3AMH"),u=function(){function t(t,e){this.dialogData=t,this.eavService=e}return t.prototype.ngOnInit=function(){var t,e,n=this.dialogData.connector,r=this.eavService.eavConfig.portalRoot+"Default.aspx?tabid="+this.eavService.eavConfig.tabId+"&ctl=webformsbridge&mid="+this.eavService.eavConfig.moduleId+"&dnnprintmode=true&SkinSrc=%5bG%5dSkins%2f_default%2fNo+Skin&ContainerSrc=%5bG%5dContainers%2f_default%2fNo+Container&type="+n.dialogType,o=Object.keys(n.params);try{for(var a=Object(i.h)(o),c=a.next();!c.done;c=a.next()){var s=c.value,u=n.params[s];null!=u&&""!==u&&(r+="&"+s+"="+encodeURIComponent(u))}}catch(l){t={error:l}}finally{try{c&&!c.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}this.iframeSrc=r},t.prototype.iframeLoaded=function(t){var e=t.target,n=e.contentWindow||e;null!=n&&null!=n.connectBridge&&n.connectBridge(this.dialogData.connector)},t.\u0275fac=function(e){return new(e||t)(o.Mb(r.a),o.Mb(a.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-dnn-bridge"]],decls:7,vars:3,consts:[[1,"modal-header"],["translate","Fields.Hyperlink.PagePicker.Title",1,"modal-title"],[1,"modal-body",2,"height","370px","width","600px"],[2,"width","100%","height","350px","border","0",3,"src","load"],[1,"modal-footer"]],template:function(t,e){1&t&&(o.Sb(0,"div"),o.Sb(1,"div",0),o.Nb(2,"h3",1),o.Rb(),o.Sb(3,"div",2),o.Sb(4,"iframe",3),o.ac("load",(function(t){return e.iframeLoaded(t)})),o.fc(5,"safeResourceUrl"),o.Rb(),o.Rb(),o.Nb(6,"div",4),o.Rb()),2&t&&(o.Ab(4),o.kc("src",o.gc(5,1,e.iframeSrc),o.Cc))},directives:[c.a],pipes:[s.a],styles:[""],changeDetection:0}),t}(),l=n("vobO"),d=n("B5/E"),p=function(){function t(t,e,n,i){this.http=t,this.dnnContext=e,this.eavService=n,this.dialog=i}return t.prototype.open=function(t,e,n){var i,r={connector:{params:e,valueChanged:function(t){i.close(),n(t)},dialogType:t}};return i=this.dialog.open(u,{data:r,width:"650px"})},t.prototype.getUrlOfId=function(t,e,n,r){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("cms/edit/lookupLink"),{params:Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({link:t},n&&{guid:n}),e&&{contentType:e}),r&&{field:r}),{appid:this.eavService.eavConfig.appId.toString()})})},t.\u0275fac=function(e){return new(e||t)(o.Wb(l.b),o.Wb(d.a),o.Wb(a.a),o.Wb(r.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac}),t}()},kfUh:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("D57K"),r=function(){function t(t){this.zone=t,this.eventListeners=[]}return t.prototype.attach=function(t){var e=this;this.zone.runOutsideAngular((function(){function n(){!function(t){var e,n;try{for(var r=Object(i.h)(t),o=r.next();!o.done;o=r.next())clearTimeout(o.value)}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}t.splice(0,t.length)}(windowBodyTimeouts),document.body.classList.add(draggingClass)}function r(){document.body.classList.remove(draggingClass)}t.addEventListener("dragover",n,{passive:!0}),t.addEventListener("drop",r,{passive:!0}),e.eventListeners.push({element:t,type:"dragover",listener:n},{element:t,type:"drop",listener:r})}))},t.prototype.detach=function(){var t=this;this.zone.runOutsideAngular((function(){t.eventListeners.forEach((function(t){t.element.removeEventListener(t.type,t.listener)}))}))},t}()},ywpU:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("D57K"),r=n("t8nT"),o=n("ZTXN"),a=n("YtkY"),c=n("Ohay"),s=n("EM62"),u=function(t){function e(e){var n=t.call(this,"LanguageInstance",e)||this;return n.localizationWrapperMenuChangeSource=new o.a,n.localizationWrapperMenuChange$=n.localizationWrapperMenuChangeSource.asObservable(),n}return Object(i.d)(e,t),e.prototype.ngOnDestroy=function(){this.localizationWrapperMenuChangeSource.complete()},e.prototype.addLanguageInstance=function(t,e,n,i,r){this.addOneToCache({formId:t,currentLanguage:e,defaultLanguage:n,uiLanguage:i,hideHeader:r})},e.prototype.getCurrentLanguage=function(t){return this.entities$.pipe(Object(a.a)((function(e){var n;return null===(n=e.find((function(e){return e.formId===t})))||void 0===n?void 0:n.currentLanguage})),Object(c.a)((function(t,e){return t===e})))},e.prototype.getDefaultLanguage=function(t){return this.entities$.pipe(Object(a.a)((function(e){var n;return null===(n=e.find((function(e){return e.formId===t})))||void 0===n?void 0:n.defaultLanguage})),Object(c.a)((function(t,e){return t===e})))},e.prototype.getHideHeader=function(t){return this.entities$.pipe(Object(a.a)((function(e){var n;return null===(n=e.find((function(e){return e.formId===t})))||void 0===n?void 0:n.hideHeader})),Object(c.a)((function(t,e){return t===e})))},e.prototype.updateCurrentLanguage=function(t,e){this.updateOneInCache({formId:t,currentLanguage:e})},e.prototype.updateHideHeader=function(t,e){this.updateOneInCache({formId:t,hideHeader:e})},e.prototype.removeLanguageInstance=function(t){this.removeOneFromCache(t)},e.prototype.triggerLocalizationWrapperMenuChange=function(){this.localizationWrapperMenuChangeSource.next()},e.\u0275fac=function(t){return new(t||e)(s.Wb(r.b))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(r.a)}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.11.03/ng-edit/default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~7033f30e.cfb402677dfc3b3cf69e.js.map