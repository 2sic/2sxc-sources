"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"],{4601:(gr,ot,Oe)=>{Oe.d(ot,{e:()=>me});var B=Oe(9148),U=Oe(9470),De=Oe(852);let me=(()=>{class I{#e;constructor(q,K){this.elementRef=q,this.translate=K,this.tippy=(0,B.hFB)(),this.tippyTranslate=(0,B.hFB)(),this.tippyDisabled=(0,B.hFB)(),this.tippyPlacement=(0,B.hFB)(),this.tippyShowDelay=(0,B.hFB)(),this.tippyAllowHtml=(0,B.hFB)(),this.tippyArrow=(0,B.hFB)(),this.tippyFontSize=(0,B.hFB)()}ngOnChanges(q){if(null==this.#e&&(this.#e=(0,U.Ay)(this.elementRef.nativeElement,{animation:"scale-subtle",arrow:!!this.tippyArrow(),duration:[100,50],placement:"bottom",theme:"2sxc",allowHTML:!!this.tippyAllowHtml()})),null!=q.tippy||null!=q.tippyTranslate||null!=q.tippyFontSize){const K=this.tippyTranslate()?.toString()??"",H=K?this.translate?.instant(K)??K:this.tippy()?.toString()??"";H?this.#e.enable():this.#e.disable();const ee=this.tippyAllowHtml()&&"larger"===this.tippyFontSize()?`<div style="font-size: larger">${H}</div>`:H;this.#e.setContent(ee)}if(null!=q.tippyDisabled&&(this.tippyDisabled()?this.#e.disable():this.#e.enable()),null!=q.tippyPlacement&&this.#e.setProps({placement:this.tippyPlacement()}),null!=q.tippyShowDelay){const K=parseInt(this.tippyShowDelay(),10);this.#e.setProps({delay:[K,null]})}}ngOnDestroy(){this.#e?.destroy()}static{this.\u0275fac=function(K){return new(K||I)(B.rXU(B.aKT),B.rXU(De.c$,8))}}static{this.\u0275dir=B.FsC({type:I,selectors:[["","tippy",""],["","tippyTranslate",""]],inputs:{tippy:[1,"tippy"],tippyTranslate:[1,"tippyTranslate"],tippyDisabled:[1,"tippyDisabled"],tippyPlacement:[1,"tippyPlacement"],tippyShowDelay:[1,"tippyShowDelay"],tippyAllowHtml:[1,"tippyAllowHtml"],tippyArrow:[1,"tippyArrow"],tippyFontSize:[1,"tippyFontSize"]},standalone:!0,features:[B.OA$]})}}return I})()},9470:(gr,ot,Oe)=>{function B(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function U(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function De(e){var t=U(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function me(e){return e instanceof U(e).Element||e instanceof Element}function I(e){return e instanceof U(e).HTMLElement||e instanceof HTMLElement}function Tt(e){return!(typeof ShadowRoot>"u")&&(e instanceof U(e).ShadowRoot||e instanceof ShadowRoot)}function H(e){return e?(e.nodeName||"").toLowerCase():null}function ee(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function at(e){return B(ee(e)).left+De(e).scrollLeft}function oe(e){return U(e).getComputedStyle(e)}function st(e){var t=oe(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function yr(e,t,r){void 0===r&&(r=!1);var i=ee(t),o=B(e),a=I(t),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!r)&&(("body"!==H(t)||st(i))&&(s=function K(e){return e!==U(e)&&I(e)?function q(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):De(e)}(t)),I(t)?((u=B(t)).x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=at(i))),{x:o.left+s.scrollLeft-u.x,y:o.top+s.scrollTop-u.y,width:o.width,height:o.height}}function ut(e){var t=B(e),r=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function We(e){return"html"===H(e)?e:e.assignedSlot||e.parentNode||(Tt(e)?e.host:null)||ee(e)}function Ct(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:I(e)&&st(e)?e:Ct(We(e))}function Pe(e,t){var r;void 0===t&&(t=[]);var i=Ct(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),a=U(i),s=o?[a].concat(a.visualViewport||[],st(i)?i:[]):i,u=t.concat(s);return o?u:u.concat(Pe(We(s)))}function br(e){return["table","td","th"].indexOf(H(e))>=0}function At(e){return I(e)&&"fixed"!==oe(e).position?e.offsetParent:null}function Se(e){for(var t=U(e),r=At(e);r&&br(r)&&"static"===oe(r).position;)r=At(r);return r&&("html"===H(r)||"body"===H(r)&&"static"===oe(r).position)?t:r||function wr(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&I(e)&&"fixed"===oe(e).position)return null;for(var o=We(e);I(o)&&["html","body"].indexOf(H(o))<0;){var a=oe(o);if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return o;o=o.parentNode}return null}(e)||t}Oe.d(ot,{Ay:()=>qn,cJ:()=>Nn});var W="top",G="bottom",J="right",z="left",ft="auto",Me=[W,G,J,z],Ee="start",pt="end",Dt="viewport",Re="popper",Pt=Me.reduce(function(e,t){return e.concat([t+"-"+Ee,t+"-"+pt])},[]),St=[].concat(Me,[ft]).reduce(function(e,t){return e.concat([t,t+"-"+Ee,t+"-"+pt])},[]),Lr=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function _r(e){var t=new Map,r=new Set,i=[];function o(a){r.add(a.name),[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(u){if(!r.has(u)){var p=t.get(u);p&&o(p)}}),i.push(a)}return e.forEach(function(a){t.set(a.name,a)}),e.forEach(function(a){r.has(a.name)||o(a)}),i}function jr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}var Mt={placement:"bottom",modifiers:[],strategy:"absolute"};function Rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(i){return!(i&&"function"==typeof i.getBoundingClientRect)})}function kr(e){void 0===e&&(e={});var r=e.defaultModifiers,i=void 0===r?[]:r,o=e.defaultOptions,a=void 0===o?Mt:o;return function(u,p,l){void 0===l&&(l=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Mt,a),modifiersData:{},elements:{reference:u,popper:p},attributes:{},styles:{}},x=[],E=!1,O={state:c,setOptions:function(v){g(),c.options=Object.assign({},a,c.options,v),c.scrollParents={reference:me(u)?Pe(u):u.contextElement?Pe(u.contextElement):[],popper:Pe(p)};var w=function Br(e){var t=_r(e);return Lr.reduce(function(r,i){return r.concat(t.filter(function(o){return o.phase===i}))},[])}(function Ir(e){var t=e.reduce(function(r,i){var o=r[i.name];return r[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(i,c.options.modifiers)));return c.orderedModifiers=w.filter(function(_){return _.enabled}),function h(){c.orderedModifiers.forEach(function(m){var w=m.options,n=m.effect;if("function"==typeof n){var b=n({state:c,name:m.name,instance:O,options:void 0===w?{}:w});x.push(b||function(){})}})}(),O.update()},forceUpdate:function(){if(!E){var v=c.elements,w=v.reference,C=v.popper;if(Rt(w,C)){c.rects={reference:yr(w,Se(C),"fixed"===c.options.strategy),popper:ut(C)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var b=0;b<c.orderedModifiers.length;b++)if(!0!==c.reset){var d=c.orderedModifiers[b],D=d.fn,A=d.options;"function"==typeof D&&(c=D({state:c,options:void 0===A?{}:A,name:d.name,instance:O})||c)}else c.reset=!1,b=-1}}},update:jr(function(){return new Promise(function(m){O.forceUpdate(),m(c)})}),destroy:function(){g(),E=!0}};if(!Rt(u,p))return O;function g(){x.forEach(function(m){return m()}),x=[]}return O.setOptions(l).then(function(m){!E&&l.onFirstUpdate&&l.onFirstUpdate(m)}),O}}var ze={passive:!0};function te(e){return e.split("-")[0]}function Le(e){return e.split("-")[1]}function ct(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Lt(e){var p,t=e.reference,r=e.element,i=e.placement,o=i?te(i):null,a=i?Le(i):null,s=t.x+t.width/2-r.width/2,u=t.y+t.height/2-r.height/2;switch(o){case W:p={x:s,y:t.y-r.height};break;case G:p={x:s,y:t.y+t.height};break;case J:p={x:t.x+t.width,y:u};break;case z:p={x:t.x-r.width,y:u};break;default:p={x:t.x,y:t.y}}var l=o?ct(o):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case Ee:p[l]=p[l]-(t[c]/2-r[c]/2);break;case pt:p[l]=p[l]+(t[c]/2-r[c]/2)}}return p}var fe=Math.max,_e=Math.min,Xe=Math.round,Ur={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _t(e){var t,r=e.popper,i=e.popperRect,o=e.placement,a=e.offsets,s=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,c=!0===l?function Vr(e){var r=e.y,o=window.devicePixelRatio||1;return{x:Xe(Xe(e.x*o)/o)||0,y:Xe(Xe(r*o)/o)||0}}(a):"function"==typeof l?l(a):a,x=c.x,E=void 0===x?0:x,O=c.y,h=void 0===O?0:O,g=a.hasOwnProperty("x"),m=a.hasOwnProperty("y"),v=z,w=W,C=window;if(p){var n=Se(r),b="clientHeight",d="clientWidth";n===U(r)&&"static"!==oe(n=ee(r)).position&&(b="scrollHeight",d="scrollWidth"),o===W&&(w=G,h-=n[b]-i.height,h*=u?1:-1),o===z&&(v=J,E-=n[d]-i.width,E*=u?1:-1)}var A,D=Object.assign({position:s},p&&Ur);return Object.assign({},D,u?((A={})[w]=m?"0":"",A[v]=g?"0":"",A.transform=(C.devicePixelRatio||1)<2?"translate("+E+"px, "+h+"px)":"translate3d("+E+"px, "+h+"px, 0)",A):((t={})[w]=m?h+"px":"",t[v]=g?E+"px":"",t.transform="",t))}const Bt={name:"applyStyles",enabled:!0,phase:"write",fn:function Xr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var i=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!I(a)||!H(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){var u=o[s];!1===u?a.removeAttribute(s):a.setAttribute(s,!0===u?"":u)}))})},effect:function Yr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},u=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]).reduce(function(p,l){return p[l]="",p},{});!I(o)||!H(o)||(Object.assign(o.style,u),Object.keys(a).forEach(function(p){o.removeAttribute(p)}))})}},requires:["computeStyles"]};var Jr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ye(e){return e.replace(/left|right|bottom|top/g,function(t){return Jr[t]})}var Qr={start:"end",end:"start"};function jt(e){return e.replace(/start|end/g,function(t){return Qr[t]})}function It(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Tt(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function lt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function kt(e,t){return t===Dt?lt(function Zr(e){var t=U(e),r=ee(e),i=t.visualViewport,o=r.clientWidth,a=r.clientHeight,s=0,u=0;return i&&(o=i.width,a=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,u=i.offsetTop)),{width:o,height:a,x:s+at(e),y:u}}(e)):I(t)?function tn(e){var t=B(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):lt(function en(e){var t,r=ee(e),i=De(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=fe(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=fe(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-i.scrollLeft+at(e),p=-i.scrollTop;return"rtl"===oe(o||r).direction&&(u+=fe(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:u,y:p}}(ee(e)))}function Ht(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Nt(e,t){return t.reduce(function(r,i){return r[i]=e,r},{})}function Be(e,t){void 0===t&&(t={});var i=t.placement,o=void 0===i?e.placement:i,a=t.boundary,s=void 0===a?"clippingParents":a,u=t.rootBoundary,p=void 0===u?Dt:u,l=t.elementContext,c=void 0===l?Re:l,x=t.altBoundary,E=void 0!==x&&x,O=t.padding,h=void 0===O?0:O,g=Ht("number"!=typeof h?h:Nt(h,Me)),v=e.elements.reference,w=e.rects.popper,C=e.elements[E?c===Re?"reference":Re:c],n=function nn(e,t,r){var i="clippingParents"===t?function rn(e){var t=Pe(We(e)),i=["absolute","fixed"].indexOf(oe(e).position)>=0&&I(e)?Se(e):e;return me(i)?t.filter(function(o){return me(o)&&It(o,i)&&"body"!==H(o)}):[]}(e):[].concat(t),o=[].concat(i,[r]),s=o.reduce(function(u,p){var l=kt(e,p);return u.top=fe(l.top,u.top),u.right=_e(l.right,u.right),u.bottom=_e(l.bottom,u.bottom),u.left=fe(l.left,u.left),u},kt(e,o[0]));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(me(C)?C:C.contextElement||ee(e.elements.popper),s,p),b=B(v),d=Lt({reference:b,element:w,strategy:"absolute",placement:o}),D=lt(Object.assign({},w,d)),A=c===Re?D:b,M={top:n.top-A.top+g.top,bottom:A.bottom-n.bottom+g.bottom,left:n.left-A.left+g.left,right:A.right-n.right+g.right},_=e.modifiersData.offset;if(c===Re&&_){var j=_[o];Object.keys(M).forEach(function(L){var R=[J,G].indexOf(L)>=0?1:-1,k=[W,G].indexOf(L)>=0?"y":"x";M[L]+=j[k]*R})}return M}function qe(e,t,r){return fe(e,_e(t,r))}function $t(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ut(e){return[W,J,G,z].some(function(t){return e[t]>=0})}var yn=kr({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function Fr(e){var t=e.state,r=e.instance,i=e.options,o=i.scroll,a=void 0===o||o,s=i.resize,u=void 0===s||s,p=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",r.update,ze)}),u&&p.addEventListener("resize",r.update,ze),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",r.update,ze)}),u&&p.removeEventListener("resize",r.update,ze)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function Nr(e){var t=e.state;t.modifiersData[e.name]=Lt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Wr(e){var t=e.state,r=e.options,i=r.gpuAcceleration,o=void 0===i||i,a=r.adaptive,s=void 0===a||a,u=r.roundOffsets,p=void 0===u||u,c={placement:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,_t(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,_t(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Bt,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Kr(e){var t=e.state,i=e.name,o=e.options.offset,a=void 0===o?[0,0]:o,s=St.reduce(function(c,x){return c[x]=function qr(e,t,r){var i=te(e),o=[z,W].indexOf(i)>=0?-1:1,a="function"==typeof r?r(Object.assign({},t,{placement:e})):r,s=a[0],u=a[1];return s=s||0,u=(u||0)*o,[z,J].indexOf(i)>=0?{x:u,y:s}:{x:s,y:u}}(x,t.rects,a),c},{}),u=s[t.placement],l=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u.x,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=s}},{name:"flip",enabled:!0,phase:"main",fn:function sn(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=r.mainAxis,a=void 0===o||o,s=r.altAxis,u=void 0===s||s,p=r.fallbackPlacements,l=r.padding,c=r.boundary,x=r.rootBoundary,E=r.altBoundary,O=r.flipVariations,h=void 0===O||O,g=r.allowedAutoPlacements,m=t.options.placement,v=te(m),C=p||(v!==m&&h?function an(e){if(te(e)===ft)return[];var t=Ye(e);return[jt(e),t,jt(t)]}(m):[Ye(m)]),n=[m].concat(C).reduce(function(ie,V){return ie.concat(te(V)===ft?function on(e,t){void 0===t&&(t={});var o=t.boundary,a=t.rootBoundary,s=t.padding,u=t.flipVariations,p=t.allowedAutoPlacements,l=void 0===p?St:p,c=Le(t.placement),x=c?u?Pt:Pt.filter(function(h){return Le(h)===c}):Me,E=x.filter(function(h){return l.indexOf(h)>=0});0===E.length&&(E=x);var O=E.reduce(function(h,g){return h[g]=Be(e,{placement:g,boundary:o,rootBoundary:a,padding:s})[te(g)],h},{});return Object.keys(O).sort(function(h,g){return O[h]-O[g]})}(t,{placement:V,boundary:c,rootBoundary:x,padding:l,flipVariations:h,allowedAutoPlacements:g}):V)},[]),b=t.rects.reference,d=t.rects.popper,D=new Map,A=!0,M=n[0],_=0;_<n.length;_++){var j=n[_],L=te(j),R=Le(j)===Ee,k=[W,G].indexOf(L)>=0,Q=k?"width":"height",ae=Be(t,{placement:j,boundary:c,rootBoundary:x,altBoundary:E,padding:l}),X=k?R?J:z:R?G:W;b[Q]>d[Q]&&(X=Ye(X));var F=Ye(X),se=[];if(a&&se.push(ae[L]<=0),u&&se.push(ae[X]<=0,ae[F]<=0),se.every(function(ie){return ie})){M=j,A=!1;break}D.set(j,se)}if(A)for(var ge=function(V){var de=n.find(function(ke){var ve=D.get(ke);if(ve)return ve.slice(0,V).every(function(Te){return Te})});if(de)return M=de,"break"},Z=h?3:1;Z>0&&"break"!==ge(Z);Z--);t.placement!==M&&(t.modifiersData[i]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function pn(e){var t=e.state,r=e.options,i=e.name,o=r.mainAxis,a=void 0===o||o,s=r.altAxis,u=void 0!==s&&s,E=r.tether,O=void 0===E||E,h=r.tetherOffset,g=void 0===h?0:h,m=Be(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),v=te(t.placement),w=Le(t.placement),C=!w,n=ct(v),b=function fn(e){return"x"===e?"y":"x"}(n),d=t.modifiersData.popperOffsets,D=t.rects.reference,A=t.rects.popper,M="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,_={x:0,y:0};if(d){if(a||u){var j="y"===n?W:z,L="y"===n?G:J,R="y"===n?"height":"width",k=d[n],Q=d[n]+m[j],ae=d[n]-m[L],X=O?-A[R]/2:0,F=w===Ee?D[R]:A[R],se=w===Ee?-A[R]:-D[R],ne=t.elements.arrow,ge=O&&ne?ut(ne):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ye=Z[j],ie=Z[L],V=qe(0,D[R],ge[R]),de=C?D[R]/2-X-V-ye-M:F-V-ye-M,ke=C?-D[R]/2+X+V+ie+M:se+V+ie+M,ve=t.elements.arrow&&Se(t.elements.arrow),ue=t.modifiersData.offset?t.modifiersData.offset[t.placement][n]:0,Fe=d[n]+de-ue-(ve?"y"===n?ve.clientTop||0:ve.clientLeft||0:0),He=d[n]+ke-ue;if(a){var Ne=qe(O?_e(Q,Fe):Q,k,O?fe(ae,He):ae);d[n]=Ne,_[n]=Ne-k}if(u){var be=d[b],$e=be+m["x"===n?W:z],Ue=be-m["x"===n?G:J],Ve=qe(O?_e($e,Fe):$e,be,O?fe(Ue,He):Ue);d[b]=Ve,_[b]=Ve-be}}t.modifiersData[i]=_}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function dn(e){var t,r=e.state,i=e.name,o=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,u=te(r.placement),p=ct(u),c=[z,J].indexOf(u)>=0?"height":"width";if(a&&s){var x=function(t,r){return Ht("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:Nt(t,Me))}(o.padding,r),E=ut(a),O="y"===p?W:z,h="y"===p?G:J,g=r.rects.reference[c]+r.rects.reference[p]-s[p]-r.rects.popper[c],m=s[p]-r.rects.reference[p],v=Se(a),w=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,d=w/2-E[c]/2+(g/2-m/2),D=qe(x[O],d,w-E[c]-x[h]);r.modifiersData[i]=((t={})[p]=D,t.centerOffset=D-d,t)}},effect:function vn(e){var t=e.state,i=e.options.element,o=void 0===i?"[data-popper-arrow]":i;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||It(t.elements.popper,o)&&(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function hn(e){var t=e.state,r=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,s=Be(t,{elementContext:"reference"}),u=Be(t,{altBoundary:!0}),p=$t(s,i),l=$t(u,o,a),c=Ut(p),x=Ut(l);t.modifiersData[r]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:x},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":x})}}]}),Vt="tippy-content",Wt="tippy-backdrop",zt="tippy-arrow",Xt="tippy-svg-arrow",pe={passive:!0,capture:!0},Yt=function(){return document.body};function dt(e,t,r){return Array.isArray(e)?e[t]??(Array.isArray(r)?r[t]:r):e}function vt(e,t){var r={}.toString.call(e);return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function qt(e,t){return"function"==typeof e?e.apply(void 0,t):e}function Kt(e,t){return 0===t?e:function(i){clearTimeout(r),r=setTimeout(function(){e(i)},t)};var r}function ce(e){return[].concat(e)}function Gt(e,t){-1===e.indexOf(t)&&e.push(t)}function xe(e){return[].slice.call(e)}function Qt(e){return Object.keys(e).reduce(function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t},{})}function he(){return document.createElement("div")}function Ke(e){return["Element","Fragment"].some(function(t){return vt(e,t)})}function Zt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function gt(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function je(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function yt(e,t,r){var i=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(o){e[i](o,r)})}function tr(e,t){for(var r=t;r;){var i;if(e.contains(r))return!0;r=null==r.getRootNode||null==(i=r.getRootNode())?void 0:i.host}return!1}var re={isTouch:!1},rr=0;function An(){re.isTouch||(re.isTouch=!0,window.performance&&document.addEventListener("mousemove",nr))}function nr(){var e=performance.now();e-rr<20&&(re.isTouch=!1,document.removeEventListener("mousemove",nr)),rr=e}function Dn(){var e=document.activeElement;Zt(e)&&e.blur&&!e._tippy.state.isVisible&&e.blur()}var Mn=!!(typeof window<"u"&&typeof document<"u")&&!!window.msCrypto,$=Object.assign({appendTo:Yt,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Bn=Object.keys($);function ur(e){var r=(e.plugins||[]).reduce(function(i,o){var u,a=o.name;return a&&(i[a]=void 0!==e[a]?e[a]:null!=(u=$[a])?u:o.defaultValue),i},{});return Object.assign({},e,r)}function fr(e,t){var r=Object.assign({},t,{content:qt(t.content,[e])},t.ignoreAttributes?{}:function In(e,t){return(t?Object.keys(ur(Object.assign({},$,{plugins:t}))):Bn).reduce(function(o,a){var s=(e.getAttribute("data-tippy-"+a)||"").trim();if(!s)return o;if("content"===a)o[a]=s;else try{o[a]=JSON.parse(s)}catch{o[a]=s}return o},{})}(e,t.plugins));return r.aria=Object.assign({},$.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}var kn=function(){return"innerHTML"};function bt(e,t){e[kn()]=t}function pr(e){var t=he();return!0===e?t.className=zt:(t.className=Xt,Ke(e)?t.appendChild(e):bt(t,e)),t}function cr(e,t){Ke(t.content)?(bt(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?bt(e,t.content):e.textContent=t.content)}function Ge(e){var t=e.firstElementChild,r=xe(t.children);return{box:t,content:r.find(function(i){return i.classList.contains(Vt)}),arrow:r.find(function(i){return i.classList.contains(zt)||i.classList.contains(Xt)}),backdrop:r.find(function(i){return i.classList.contains(Wt)})}}function lr(e){var t=he(),r=he();r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var i=he();function o(a,s){var u=Ge(t),p=u.box,l=u.content,c=u.arrow;s.theme?p.setAttribute("data-theme",s.theme):p.removeAttribute("data-theme"),"string"==typeof s.animation?p.setAttribute("data-animation",s.animation):p.removeAttribute("data-animation"),s.inertia?p.setAttribute("data-inertia",""):p.removeAttribute("data-inertia"),p.style.maxWidth="number"==typeof s.maxWidth?s.maxWidth+"px":s.maxWidth,s.role?p.setAttribute("role",s.role):p.removeAttribute("role"),(a.content!==s.content||a.allowHTML!==s.allowHTML)&&cr(l,e.props),s.arrow?c?a.arrow!==s.arrow&&(p.removeChild(c),p.appendChild(pr(s.arrow))):p.appendChild(pr(s.arrow)):c&&p.removeChild(c)}return i.className=Vt,i.setAttribute("data-state","hidden"),cr(i,e.props),t.appendChild(r),r.appendChild(i),o(e.props,e.props),{popper:t,onUpdate:o}}lr.$$tippy=!0;var Fn=1,Je=[],Qe=[];function Hn(e,t){var i,o,a,c,x,E,g,r=fr(e,Object.assign({},$,ur(Qt(t)))),s=!1,u=!1,p=!1,l=!1,O=[],h=Kt(et,r.interactiveDebounce),m=Fn++,w=function En(e){return e.filter(function(t,r){return e.indexOf(t)===r})}(r.plugins),n={id:m,reference:e,popper:he(),popperInstance:null,props:r,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:w,clearDelayTimeouts:function Qn(){clearTimeout(i),clearTimeout(o),cancelAnimationFrame(a)},setProps:function Zn(f){if(!n.state.isDestroyed){F("onBeforeUpdate",[n,f]),He();var y=n.props,T=fr(e,Object.assign({},y,Qt(f),{ignoreAttributes:!0}));n.props=T,Fe(),y.interactiveDebounce!==T.interactiveDebounce&&(ge(),h=Kt(et,T.interactiveDebounce)),y.triggerTarget&&!T.triggerTarget?ce(y.triggerTarget).forEach(function(S){S.removeAttribute("aria-expanded")}):T.triggerTarget&&e.removeAttribute("aria-expanded"),ne(),X(),D&&D(y,T),n.popperInstance&&(Ue(),Ot().forEach(function(S){requestAnimationFrame(S._tippy.popperInstance.forceUpdate)})),F("onAfterUpdate",[n,f])}},setContent:function ei(f){n.setProps({content:f})},show:function ti(){var f=n.state.isVisible,y=n.state.isDestroyed,T=!n.state.isEnabled,S=re.isTouch&&!n.props.touch,P=dt(n.props.duration,0,$.duration);if(!(f||y||T||S||R().hasAttribute("disabled")||(F("onShow",[n],!1),!1===n.props.onShow(n)))){if(n.state.isVisible=!0,L()&&(d.style.visibility="visible"),X(),V(),n.state.isMounted||(d.style.transition="none"),L()){var N=Q();gt([N.box,N.content],0)}E=function(){var we;if(n.state.isVisible&&!l){if(l=!0,d.style.transition=n.props.moveTransition,L()&&n.props.animation){var Et=Q(),nt=Et.box,Ae=Et.content;gt([nt,Ae],P),je([nt,Ae],"visible")}se(),ne(),Gt(Qe,n),null==(we=n.popperInstance)||we.forceUpdate(),F("onMount",[n]),n.props.animation&&L()&&function ve(f,y){Te(f,y)}(P,function(){n.state.isShown=!0,F("onShown",[n])})}},function Kn(){var y,f=n.props.appendTo,T=R();(y=n.props.interactive&&f===Yt||"parent"===f?T.parentNode:qt(f,[T])).contains(d)||y.appendChild(d),n.state.isMounted=!0,Ue()}()}},hide:function ri(){var f=!n.state.isVisible,y=n.state.isDestroyed,T=!n.state.isEnabled,S=dt(n.props.duration,1,$.duration);if(!(f||y||T)&&(F("onHide",[n],!1),!1!==n.props.onHide(n))){if(n.state.isVisible=!1,n.state.isShown=!1,l=!1,s=!1,L()&&(d.style.visibility="hidden"),ge(),de(),X(!0),L()){var P=Q(),N=P.box,Y=P.content;n.props.animation&&(gt([N,Y],S),je([N,Y],"hidden"))}se(),ne(),n.props.animation?L()&&function ke(f,y){Te(f,function(){!n.state.isVisible&&d.parentNode&&d.parentNode.contains(d)&&y()})}(S,n.unmount):n.unmount()}},hideWithInteractivity:function ni(f){k().addEventListener("mousemove",h),Gt(Je,h),h(f)},enable:function Gn(){n.state.isEnabled=!0},disable:function Jn(){n.hide(),n.state.isEnabled=!1},unmount:function ii(){n.state.isVisible&&n.hide(),n.state.isMounted&&(Ve(),Ot().forEach(function(f){f._tippy.unmount()}),d.parentNode&&d.parentNode.removeChild(d),Qe=Qe.filter(function(f){return f!==n}),n.state.isMounted=!1,F("onHidden",[n]))},destroy:function oi(){n.state.isDestroyed||(n.clearDelayTimeouts(),n.unmount(),He(),delete e._tippy,n.state.isDestroyed=!0,F("onDestroy",[n]))}};if(!r.render)return n;var b=r.render(n),d=b.popper,D=b.onUpdate;d.setAttribute("data-tippy-root",""),d.id="tippy-"+n.id,n.popper=d,e._tippy=n,d._tippy=n;var A=w.map(function(f){return f.fn(n)}),M=e.hasAttribute("aria-expanded");return Fe(),ne(),X(),F("onCreate",[n]),r.showOnCreate&&mr(),d.addEventListener("mouseenter",function(){n.props.interactive&&n.state.isVisible&&n.clearDelayTimeouts()}),d.addEventListener("mouseleave",function(){n.props.interactive&&n.props.trigger.indexOf("mouseenter")>=0&&k().addEventListener("mousemove",h)}),n;function _(){var f=n.props.touch;return Array.isArray(f)?f:[f,0]}function j(){return"hold"===_()[0]}function L(){var f;return!(null==(f=n.props.render)||!f.$$tippy)}function R(){return g||e}function k(){var f=R().parentNode;return f?function er(e){var t,i=ce(e)[0];return null!=i&&null!=(t=i.ownerDocument)&&t.body?i.ownerDocument:document}(f):document}function Q(){return Ge(d)}function ae(f){return n.state.isMounted&&!n.state.isVisible||re.isTouch||c&&"focus"===c.type?0:dt(n.props.delay,f?0:1,$.delay)}function X(f){void 0===f&&(f=!1),d.style.pointerEvents=n.props.interactive&&!f?"":"none",d.style.zIndex=""+n.props.zIndex}function F(f,y,T){var S;void 0===T&&(T=!0),A.forEach(function(P){P[f]&&P[f].apply(P,y)}),T&&(S=n.props)[f].apply(S,y)}function se(){var f=n.props.aria;if(f.content){var y="aria-"+f.content,T=d.id;ce(n.props.triggerTarget||e).forEach(function(P){var N=P.getAttribute(y);if(n.state.isVisible)P.setAttribute(y,N?N+" "+T:T);else{var Y=N&&N.replace(T,"").trim();Y?P.setAttribute(y,Y):P.removeAttribute(y)}})}}function ne(){!M&&n.props.aria.expanded&&ce(n.props.triggerTarget||e).forEach(function(y){n.props.interactive?y.setAttribute("aria-expanded",n.state.isVisible&&y===R()?"true":"false"):y.removeAttribute("aria-expanded")})}function ge(){k().removeEventListener("mousemove",h),Je=Je.filter(function(f){return f!==h})}function Z(f){if(!re.isTouch||!p&&"mousedown"!==f.type){var y=f.composedPath&&f.composedPath()[0]||f.target;if(!n.props.interactive||!tr(d,y)){if(ce(n.props.triggerTarget||e).some(function(T){return tr(T,y)})){if(re.isTouch||n.state.isVisible&&n.props.trigger.indexOf("click")>=0)return}else F("onClickOutside",[n,f]);!0===n.props.hideOnClick&&(n.clearDelayTimeouts(),n.hide(),u=!0,setTimeout(function(){u=!1}),n.state.isMounted||de())}}}function ye(){p=!0}function ie(){p=!1}function V(){var f=k();f.addEventListener("mousedown",Z,!0),f.addEventListener("touchend",Z,pe),f.addEventListener("touchstart",ie,pe),f.addEventListener("touchmove",ye,pe)}function de(){var f=k();f.removeEventListener("mousedown",Z,!0),f.removeEventListener("touchend",Z,pe),f.removeEventListener("touchstart",ie,pe),f.removeEventListener("touchmove",ye,pe)}function Te(f,y){var T=Q().box;function S(P){P.target===T&&(yt(T,"remove",S),y())}if(0===f)return y();yt(T,"remove",x),yt(T,"add",S),x=S}function ue(f,y,T){void 0===T&&(T=!1),ce(n.props.triggerTarget||e).forEach(function(P){P.addEventListener(f,y,T),O.push({node:P,eventType:f,handler:y,options:T})})}function Fe(){j()&&(ue("touchstart",Ne,{passive:!0}),ue("touchend",tt,{passive:!0})),function On(e){return e.split(/\s+/).filter(Boolean)}(n.props.trigger).forEach(function(f){if("manual"!==f)switch(ue(f,Ne),f){case"mouseenter":ue("mouseleave",tt);break;case"focus":ue(Mn?"focusout":"blur",be);break;case"focusin":ue("focusout",be)}})}function He(){O.forEach(function(f){f.node.removeEventListener(f.eventType,f.handler,f.options)}),O=[]}function Ne(f){var y,T=!1;if(n.state.isEnabled&&!$e(f)&&!u){var S="focus"===(null==(y=c)?void 0:y.type);c=f,g=f.currentTarget,ne(),!n.state.isVisible&&function ht(e){return vt(e,"MouseEvent")}(f)&&Je.forEach(function(P){return P(f)}),"click"===f.type&&(n.props.trigger.indexOf("mouseenter")<0||s)&&!1!==n.props.hideOnClick&&n.state.isVisible?T=!0:mr(f),"click"===f.type&&(s=!T),T&&!S&&rt(f)}}function et(f){var y=f.target,T=R().contains(y)||d.contains(y);"mousemove"===f.type&&T||function Cn(e,t){var r=t.clientX,i=t.clientY;return e.every(function(o){var a=o.popperRect,s=o.popperState,p=o.props.interactiveBorder,l=function Jt(e){return e.split("-")[0]}(s.placement),c=s.modifiersData.offset;return!c||a.top-i+("bottom"===l?c.top.y:0)>p||i-a.bottom-("top"===l?c.bottom.y:0)>p||a.left-r+("right"===l?c.left.x:0)>p||r-a.right-("left"===l?c.right.x:0)>p})}(Ot().concat(d).map(function(P){var N,Ce=null==(N=P._tippy.popperInstance)?void 0:N.state;return Ce?{popperRect:P.getBoundingClientRect(),popperState:Ce,props:r}:null}).filter(Boolean),f)&&(ge(),rt(f))}function tt(f){if(!($e(f)||n.props.trigger.indexOf("click")>=0&&s)){if(n.props.interactive)return void n.hideWithInteractivity(f);rt(f)}}function be(f){n.props.trigger.indexOf("focusin")<0&&f.target!==R()||n.props.interactive&&f.relatedTarget&&d.contains(f.relatedTarget)||rt(f)}function $e(f){return!!re.isTouch&&j()!==f.type.indexOf("touch")>=0}function Ue(){Ve();var f=n.props,y=f.popperOptions,T=f.placement,S=f.offset,P=f.getReferenceClientRect,N=f.moveTransition,Y=L()?Ge(d).arrow:null,Ce=P?{getBoundingClientRect:P,contextElement:P.contextElement||R()}:e,we=[{name:"offset",options:{offset:S}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!N}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(nt){var Ae=nt.state;if(L()){var xt=Q().box;["placement","reference-hidden","escaped"].forEach(function(it){"placement"===it?xt.setAttribute("data-placement",Ae.placement):Ae.attributes.popper["data-popper-"+it]?xt.setAttribute("data-"+it,""):xt.removeAttribute("data-"+it)}),Ae.attributes.popper={}}}}];L()&&Y&&we.push({name:"arrow",options:{element:Y,padding:3}}),we.push.apply(we,y?.modifiers||[]),n.popperInstance=yn(Ce,d,Object.assign({},y,{placement:T,onFirstUpdate:E,modifiers:we}))}function Ve(){n.popperInstance&&(n.popperInstance.destroy(),n.popperInstance=null)}function Ot(){return xe(d.querySelectorAll("[data-tippy-root]"))}function mr(f){n.clearDelayTimeouts(),f&&F("onTrigger",[n,f]),V();var y=ae(!0),T=_(),P=T[1];re.isTouch&&"hold"===T[0]&&P&&(y=P),y?i=setTimeout(function(){n.show()},y):n.show()}function rt(f){if(n.clearDelayTimeouts(),F("onUntrigger",[n,f]),n.state.isVisible){if(!(n.props.trigger.indexOf("mouseenter")>=0&&n.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(f.type)>=0&&s)){var y=ae(!1);y?o=setTimeout(function(){n.state.isVisible&&n.hide()},y):a=requestAnimationFrame(function(){n.hide()})}}else de()}}function le(e,t){void 0===t&&(t={});var r=$.plugins.concat(t.plugins||[]);!function Pn(){document.addEventListener("touchstart",An,pe),window.addEventListener("blur",Dn)}();var i=Object.assign({},t,{plugins:r}),u=function Tn(e){return Ke(e)?[e]:function xn(e){return vt(e,"NodeList")}(e)?xe(e):Array.isArray(e)?e:xe(document.querySelectorAll(e))}(e).reduce(function(p,l){var c=l&&Hn(l,i);return c&&p.push(c),p},[]);return Ke(e)?u[0]:u}le.defaultProps=$,le.setDefaultProps=function(t){Object.keys(t).forEach(function(i){$[i]=t[i]})},le.currentInput=re;var Nn=function(t){var r=void 0===t?{}:t,i=r.exclude,o=r.duration;Qe.forEach(function(a){var s=!1;if(i&&(s=Zt(i)?a.reference===i:a.popper===i.popper),!s){var u=a.props.duration;a.setProps({duration:o}),a.hide(),a.state.isDestroyed||a.setProps({duration:u})}})};Object.assign({},Bt,{effect:function(t){var r=t.state,i={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,i.popper),r.styles=i,r.elements.arrow&&Object.assign(r.elements.arrow.style,i.arrow)}}),le.setDefaultProps({render:lr});const qn=le}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.05.00/dist/ng-edit/default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts.fba7f5cb99bfce0d.js.map