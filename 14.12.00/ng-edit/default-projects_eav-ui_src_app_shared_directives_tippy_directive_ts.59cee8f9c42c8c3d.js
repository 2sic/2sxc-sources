"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"],{6190:(si,mr,Ot)=>{function ge(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function F(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function rt(e){var t=F(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function xe(e){return e instanceof F(e).Element||e instanceof Element}function Y(e){return e instanceof F(e).HTMLElement||e instanceof HTMLElement}function Et(e){return"undefined"!=typeof ShadowRoot&&(e instanceof F(e).ShadowRoot||e instanceof ShadowRoot)}function K(e){return e?(e.nodeName||"").toLowerCase():null}function oe(e){return((xe(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return ge(oe(e)).left+rt(e).scrollLeft}function te(e){return F(e).getComputedStyle(e)}function it(e){var t=te(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function yr(e,t,r){void 0===r&&(r=!1);var i=oe(t),o=ge(e),a=Y(t),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!r)&&(("body"!==K(t)||it(i))&&(s=function gr(e){return e!==F(e)&&Y(e)?function hr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):rt(e)}(t)),Y(t)?((u=ge(t)).x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=nt(i))),{x:o.left+s.scrollLeft-u.x,y:o.top+s.scrollTop-u.y,width:o.width,height:o.height}}function ot(e){var t=ge(e),r=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function $e(e){return"html"===K(e)?e:e.assignedSlot||e.parentNode||(Et(e)?e.host:null)||oe(e)}function xt(e){return["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:Y(e)&&it(e)?e:xt($e(e))}function Te(e,t){var r;void 0===t&&(t=[]);var i=xt(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),a=F(i),s=o?[a].concat(a.visualViewport||[],it(i)?i:[]):i,u=t.concat(s);return o?u:u.concat(Te($e(s)))}function br(e){return["table","td","th"].indexOf(K(e))>=0}function Tt(e){return Y(e)&&"fixed"!==te(e).position?e.offsetParent:null}function Ce(e){for(var t=F(e),r=Tt(e);r&&br(r)&&"static"===te(r).position;)r=Tt(r);return r&&("html"===K(r)||"body"===K(r)&&"static"===te(r).position)?t:r||function wr(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Y(e)&&"fixed"===te(e).position)return null;for(var o=$e(e);Y(o)&&["html","body"].indexOf(K(o))<0;){var a=te(o);if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return o;o=o.parentNode}return null}(e)||t}Ot.d(mr,{$:()=>zn});var $="top",X="bottom",q="right",H="left",at="auto",De=[$,X,q,H],ye="start",Ct="viewport",Ae="popper",Dt=De.reduce(function(e,t){return e.concat([t+"-"+ye,t+"-end"])},[]),At=[].concat(De,[at]).reduce(function(e,t){return e.concat([t,t+"-"+ye,t+"-end"])},[]),Mr=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function jr(e){var t=new Map,r=new Set,i=[];function o(a){r.add(a.name),[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(u){if(!r.has(u)){var p=t.get(u);p&&o(p)}}),i.push(a)}return e.forEach(function(a){t.set(a.name,a)}),e.forEach(function(a){r.has(a.name)||o(a)}),i}function Br(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(i){return!(i&&"function"==typeof i.getBoundingClientRect)})}function _r(e){void 0===e&&(e={});var r=e.defaultModifiers,i=void 0===r?[]:r,o=e.defaultOptions,a=void 0===o?Pt:o;return function(u,p,l){void 0===l&&(l=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:u,popper:p},attributes:{},styles:{}},x=[],E=!1,O={state:c,setOptions:function(v){g(),c.options=Object.assign({},a,c.options,v),c.scrollParents={reference:xe(u)?Te(u):u.contextElement?Te(u.contextElement):[],popper:Te(p)};var w=function kr(e){var t=jr(e);return Mr.reduce(function(r,i){return r.concat(t.filter(function(o){return o.phase===i}))},[])}(function Ir(e){var t=e.reduce(function(r,i){var o=r[i.name];return r[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(i,c.options.modifiers)));return c.orderedModifiers=w.filter(function(j){return j.enabled}),function h(){c.orderedModifiers.forEach(function(m){var w=m.options,n=m.effect;if("function"==typeof n){var b=n({state:c,name:m.name,instance:O,options:void 0===w?{}:w});x.push(b||function(){})}})}(),O.update()},forceUpdate:function(){if(!E){var v=c.elements,w=v.reference,C=v.popper;if(St(w,C)){c.rects={reference:yr(w,Ce(C),"fixed"===c.options.strategy),popper:ot(C)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(k){return c.modifiersData[k.name]=Object.assign({},k.data)});for(var b=0;b<c.orderedModifiers.length;b++)if(!0!==c.reset){var d=c.orderedModifiers[b],A=d.fn,D=d.options;"function"==typeof A&&(c=A({state:c,options:void 0===D?{}:D,name:d.name,instance:O})||c)}else c.reset=!1,b=-1}}},update:Br(function(){return new Promise(function(m){O.forceUpdate(),m(c)})}),destroy:function(){g(),E=!0}};if(!St(u,p))return O;function g(){x.forEach(function(m){return m()}),x=[]}return O.setOptions(l).then(function(m){!E&&l.onFirstUpdate&&l.onFirstUpdate(m)}),O}}var He={passive:!0};function J(e){return e.split("-")[0]}function Pe(e){return e.split("-")[1]}function ut(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Rt(e){var p,t=e.reference,r=e.element,i=e.placement,o=i?J(i):null,a=i?Pe(i):null,s=t.x+t.width/2-r.width/2,u=t.y+t.height/2-r.height/2;switch(o){case $:p={x:s,y:t.y-r.height};break;case X:p={x:s,y:t.y+t.height};break;case q:p={x:t.x+t.width,y:u};break;case H:p={x:t.x-r.width,y:u};break;default:p={x:t.x,y:t.y}}var l=o?ut(o):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case ye:p[l]=p[l]-(t[c]/2-r[c]/2);break;case"end":p[l]=p[l]+(t[c]/2-r[c]/2)}}return p}var ae=Math.max,Se=Math.min,Ue=Math.round,Ur={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Lt(e){var t,r=e.popper,i=e.popperRect,o=e.placement,a=e.offsets,s=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,c=!0===l?function Wr(e){var r=e.y,o=window.devicePixelRatio||1;return{x:Ue(Ue(e.x*o)/o)||0,y:Ue(Ue(r*o)/o)||0}}(a):"function"==typeof l?l(a):a,x=c.x,E=void 0===x?0:x,O=c.y,h=void 0===O?0:O,g=a.hasOwnProperty("x"),m=a.hasOwnProperty("y"),v=H,w=$,C=window;if(p){var n=Ce(r),b="clientHeight",d="clientWidth";n===F(r)&&"static"!==te(n=oe(r)).position&&(b="scrollHeight",d="scrollWidth"),n=n,o===$&&(w=X,h-=n[b]-i.height,h*=u?1:-1),o===H&&(v=q,E-=n[d]-i.width,E*=u?1:-1)}var D,A=Object.assign({position:s},p&&Ur);return Object.assign({},A,u?((D={})[w]=m?"0":"",D[v]=g?"0":"",D.transform=(C.devicePixelRatio||1)<2?"translate("+E+"px, "+h+"px)":"translate3d("+E+"px, "+h+"px, 0)",D):((t={})[w]=m?h+"px":"",t[v]=g?E+"px":"",t.transform="",t))}const Mt={name:"applyStyles",enabled:!0,phase:"write",fn:function Xr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var i=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!Y(a)||!K(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){var u=o[s];!1===u?a.removeAttribute(s):a.setAttribute(s,!0===u?"":u)}))})},effect:function qr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},u=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]).reduce(function(p,l){return p[l]="",p},{});!Y(o)||!K(o)||(Object.assign(o.style,u),Object.keys(a).forEach(function(p){o.removeAttribute(p)}))})}},requires:["computeStyles"]};var Jr={left:"right",right:"left",bottom:"top",top:"bottom"};function We(e){return e.replace(/left|right|bottom|top/g,function(t){return Jr[t]})}var Qr={start:"end",end:"start"};function jt(e){return e.replace(/start|end/g,function(t){return Qr[t]})}function kt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Et(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ft(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Bt(e,t){return t===Ct?ft(function Zr(e){var t=F(e),r=oe(e),i=t.visualViewport,o=r.clientWidth,a=r.clientHeight,s=0,u=0;return i&&(o=i.width,a=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,u=i.offsetTop)),{width:o,height:a,x:s+nt(e),y:u}}(e)):Y(t)?function tn(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ft(function en(e){var t,r=oe(e),i=rt(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=ae(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=ae(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-i.scrollLeft+nt(e),p=-i.scrollTop;return"rtl"===te(o||r).direction&&(u+=ae(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:u,y:p}}(oe(e)))}function _t(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Nt(e,t){return t.reduce(function(r,i){return r[i]=e,r},{})}function Re(e,t){void 0===t&&(t={});var i=t.placement,o=void 0===i?e.placement:i,a=t.boundary,s=void 0===a?"clippingParents":a,u=t.rootBoundary,p=void 0===u?Ct:u,l=t.elementContext,c=void 0===l?Ae:l,x=t.altBoundary,E=void 0!==x&&x,O=t.padding,h=void 0===O?0:O,g=_t("number"!=typeof h?h:Nt(h,De)),v=e.elements.reference,w=e.rects.popper,C=e.elements[E?c===Ae?"reference":Ae:c],n=function nn(e,t,r){var i="clippingParents"===t?function rn(e){var t=Te($e(e)),i=["absolute","fixed"].indexOf(te(e).position)>=0&&Y(e)?Ce(e):e;return xe(i)?t.filter(function(o){return xe(o)&&kt(o,i)&&"body"!==K(o)}):[]}(e):[].concat(t),o=[].concat(i,[r]),s=o.reduce(function(u,p){var l=Bt(e,p);return u.top=ae(l.top,u.top),u.right=Se(l.right,u.right),u.bottom=Se(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Bt(e,o[0]));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(xe(C)?C:C.contextElement||oe(e.elements.popper),s,p),b=ge(v),d=Rt({reference:b,element:w,strategy:"absolute",placement:o}),A=ft(Object.assign({},w,d)),D=c===Ae?A:b,R={top:n.top-D.top+g.top,bottom:D.bottom-n.bottom+g.bottom,left:n.left-D.left+g.left,right:D.right-n.right+g.right},j=e.modifiersData.offset;if(c===Ae&&j){var k=j[o];Object.keys(R).forEach(function(M){var L=[q,X].indexOf(M)>=0?1:-1,B=[$,X].indexOf(M)>=0?"y":"x";R[M]+=k[B]*L})}return R}function Fe(e,t,r){return ae(e,Se(t,r))}function Vt(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function $t(e){return[$,q,X,H].some(function(t){return e[t]>=0})}var yn=_r({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function Nr(e){var t=e.state,r=e.instance,i=e.options,o=i.scroll,a=void 0===o||o,s=i.resize,u=void 0===s||s,p=F(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",r.update,He)}),u&&p.addEventListener("resize",r.update,He),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",r.update,He)}),u&&p.removeEventListener("resize",r.update,He)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function $r(e){var t=e.state;t.modifiersData[e.name]=Rt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Fr(e){var t=e.state,r=e.options,i=r.gpuAcceleration,o=void 0===i||i,a=r.adaptive,s=void 0===a||a,u=r.roundOffsets,p=void 0===u||u,c={placement:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Lt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Lt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Mt,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Gr(e){var t=e.state,i=e.name,o=e.options.offset,a=void 0===o?[0,0]:o,s=At.reduce(function(c,x){return c[x]=function zr(e,t,r){var i=J(e),o=[H,$].indexOf(i)>=0?-1:1,a="function"==typeof r?r(Object.assign({},t,{placement:e})):r,s=a[0],u=a[1];return s=s||0,u=(u||0)*o,[H,q].indexOf(i)>=0?{x:u,y:s}:{x:s,y:u}}(x,t.rects,a),c},{}),u=s[t.placement],l=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u.x,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=s}},{name:"flip",enabled:!0,phase:"main",fn:function sn(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=r.mainAxis,a=void 0===o||o,s=r.altAxis,u=void 0===s||s,p=r.fallbackPlacements,l=r.padding,c=r.boundary,x=r.rootBoundary,E=r.altBoundary,O=r.flipVariations,h=void 0===O||O,g=r.allowedAutoPlacements,m=t.options.placement,v=J(m),C=p||(v!==m&&h?function an(e){if(J(e)===at)return[];var t=We(e);return[jt(e),t,jt(t)]}(m):[We(m)]),n=[m].concat(C).reduce(function(ee,V){return ee.concat(J(V)===at?function on(e,t){void 0===t&&(t={});var o=t.boundary,a=t.rootBoundary,s=t.padding,u=t.flipVariations,p=t.allowedAutoPlacements,l=void 0===p?At:p,c=Pe(t.placement),x=c?u?Dt:Dt.filter(function(h){return Pe(h)===c}):De,E=x.filter(function(h){return l.indexOf(h)>=0});0===E.length&&(E=x);var O=E.reduce(function(h,g){return h[g]=Re(e,{placement:g,boundary:o,rootBoundary:a,padding:s})[J(g)],h},{});return Object.keys(O).sort(function(h,g){return O[h]-O[g]})}(t,{placement:V,boundary:c,rootBoundary:x,padding:l,flipVariations:h,allowedAutoPlacements:g}):V)},[]),b=t.rects.reference,d=t.rects.popper,A=new Map,D=!0,R=n[0],j=0;j<n.length;j++){var k=n[j],M=J(k),L=Pe(k)===ye,B=[$,X].indexOf(M)>=0,z=B?"width":"height",re=Re(t,{placement:k,boundary:c,rootBoundary:x,altBoundary:E,padding:l}),U=B?L?q:H:L?X:$;b[z]>d[z]&&(U=We(U));var I=We(U),ne=[];if(a&&ne.push(re[M]<=0),u&&ne.push(re[U]<=0,re[I]<=0),ne.every(function(ee){return ee})){R=k,D=!1;break}A.set(k,ne)}if(D)for(var de=function(V){var pe=n.find(function(je){var ce=A.get(je);if(ce)return ce.slice(0,V).every(function(we){return we})});if(pe)return R=pe,"break"},G=h?3:1;G>0&&"break"!==de(G);G--);t.placement!==R&&(t.modifiersData[i]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function pn(e){var t=e.state,r=e.options,i=e.name,o=r.mainAxis,a=void 0===o||o,s=r.altAxis,u=void 0!==s&&s,E=r.tether,O=void 0===E||E,h=r.tetherOffset,g=void 0===h?0:h,m=Re(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),v=J(t.placement),w=Pe(t.placement),C=!w,n=ut(v),b=function fn(e){return"x"===e?"y":"x"}(n),d=t.modifiersData.popperOffsets,A=t.rects.reference,D=t.rects.popper,R="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,j={x:0,y:0};if(d){if(a||u){var k="y"===n?$:H,M="y"===n?X:q,L="y"===n?"height":"width",B=d[n],z=d[n]+m[k],re=d[n]-m[M],U=O?-D[L]/2:0,I=w===ye?A[L]:D[L],ne=w===ye?-D[L]:-A[L],Z=t.elements.arrow,de=O&&Z?ot(Z):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ve=G[k],ee=G[M],V=Fe(0,A[L],de[L]),pe=C?A[L]/2-U-V-ve-R:I-V-ve-R,je=C?-A[L]/2+U+V+ee+R:ne+V+ee+R,ce=t.elements.arrow&&Ce(t.elements.arrow),ie=t.modifiersData.offset?t.modifiersData.offset[t.placement][n]:0,ke=d[n]+pe-ie-(ce?"y"===n?ce.clientTop||0:ce.clientLeft||0:0),Be=d[n]+je-ie;if(a){var Ie=Fe(O?Se(z,ke):z,B,O?ae(re,Be):re);d[n]=Ie,j[n]=Ie-B}if(u){var me=d[b],_e=me+m["x"===n?$:H],Ne=me-m["x"===n?X:q],Ve=Fe(O?Se(_e,ke):_e,me,O?ae(Ne,Be):Ne);d[b]=Ve,j[b]=Ve-me}}t.modifiersData[i]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function dn(e){var t,r=e.state,i=e.name,o=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,u=J(r.placement),p=ut(u),c=[H,q].indexOf(u)>=0?"height":"width";if(a&&s){var x=function(t,r){return _t("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:Nt(t,De))}(o.padding,r),E=ot(a),O="y"===p?$:H,h="y"===p?X:q,g=r.rects.reference[c]+r.rects.reference[p]-s[p]-r.rects.popper[c],m=s[p]-r.rects.reference[p],v=Ce(a),w=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,d=w/2-E[c]/2+(g/2-m/2),A=Fe(x[O],d,w-E[c]-x[h]);r.modifiersData[i]=((t={})[p]=A,t.centerOffset=A-d,t)}},effect:function vn(e){var t=e.state,i=e.options.element,o=void 0===i?"[data-popper-arrow]":i;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!kt(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function hn(e){var t=e.state,r=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,s=Re(t,{elementContext:"reference"}),u=Re(t,{altBoundary:!0}),p=Vt(s,i),l=Vt(u,o,a),c=$t(p),x=$t(l);t.modifiersData[r]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:x},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":x})}}]}),Ht="tippy-content",Wt="tippy-arrow",Ft="tippy-svg-arrow",se={passive:!0,capture:!0},Yt=function(){return document.body};function pt(e,t,r){if(Array.isArray(e)){var i=e[t];return null==i?Array.isArray(r)?r[t]:r:i}return e}function ct(e,t){var r={}.toString.call(e);return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function Xt(e,t){return"function"==typeof e?e.apply(void 0,t):e}function qt(e,t){return 0===t?e:function(i){clearTimeout(r),r=setTimeout(function(){e(i)},t)};var r}function ue(e){return[].concat(e)}function zt(e,t){-1===e.indexOf(t)&&e.push(t)}function be(e){return[].slice.call(e)}function Kt(e){return Object.keys(e).reduce(function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t},{})}function le(){return document.createElement("div")}function Ye(e){return["Element","Fragment"].some(function(t){return ct(e,t)})}function vt(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function Le(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function mt(e,t,r){var i=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(o){e[i](o,r)})}function Zt(e,t){for(var r=t;r;){var i;if(e.contains(r))return!0;r=null==r.getRootNode||null==(i=r.getRootNode())?void 0:i.host}return!1}var Q={isTouch:!1},er=0;function Dn(){Q.isTouch||(Q.isTouch=!0,window.performance&&document.addEventListener("mousemove",tr))}function tr(){var e=performance.now();e-er<20&&(Q.isTouch=!1,document.removeEventListener("mousemove",tr)),er=e}function An(){var e=document.activeElement;(function Jt(e){return!(!e||!e._tippy||e._tippy.reference!==e)})(e)&&e.blur&&!e._tippy.state.isVisible&&e.blur()}var Rn=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),N=Object.assign({appendTo:Yt,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),kn=Object.keys(N);function ar(e){var r=(e.plugins||[]).reduce(function(i,o){var u,a=o.name;return a&&(i[a]=void 0!==e[a]?e[a]:null!=(u=N[a])?u:o.defaultValue),i},{});return Object.assign({},e,r)}function sr(e,t){var r=Object.assign({},t,{content:Xt(t.content,[e])},t.ignoreAttributes?{}:function In(e,t){return(t?Object.keys(ar(Object.assign({},N,{plugins:t}))):kn).reduce(function(o,a){var s=(e.getAttribute("data-tippy-"+a)||"").trim();if(!s)return o;if("content"===a)o[a]=s;else try{o[a]=JSON.parse(s)}catch(u){o[a]=s}return o},{})}(e,t.plugins));return r.aria=Object.assign({},N.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}function ht(e,t){e.innerHTML=t}function ur(e){var t=le();return!0===e?t.className=Wt:(t.className=Ft,Ye(e)?t.appendChild(e):ht(t,e)),t}function fr(e,t){Ye(t.content)?(ht(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?ht(e,t.content):e.textContent=t.content)}function Xe(e){var t=e.firstElementChild,r=be(t.children);return{box:t,content:r.find(function(i){return i.classList.contains(Ht)}),arrow:r.find(function(i){return i.classList.contains(Wt)||i.classList.contains(Ft)}),backdrop:r.find(function(i){return i.classList.contains("tippy-backdrop")})}}function pr(e){var t=le(),r=le();r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var i=le();function o(a,s){var u=Xe(t),p=u.box,l=u.content,c=u.arrow;s.theme?p.setAttribute("data-theme",s.theme):p.removeAttribute("data-theme"),"string"==typeof s.animation?p.setAttribute("data-animation",s.animation):p.removeAttribute("data-animation"),s.inertia?p.setAttribute("data-inertia",""):p.removeAttribute("data-inertia"),p.style.maxWidth="number"==typeof s.maxWidth?s.maxWidth+"px":s.maxWidth,s.role?p.setAttribute("role",s.role):p.removeAttribute("role"),(a.content!==s.content||a.allowHTML!==s.allowHTML)&&fr(l,e.props),s.arrow?c?a.arrow!==s.arrow&&(p.removeChild(c),p.appendChild(ur(s.arrow))):p.appendChild(ur(s.arrow)):c&&p.removeChild(c)}return i.className=Ht,i.setAttribute("data-state","hidden"),fr(i,e.props),t.appendChild(r),r.appendChild(i),o(e.props,e.props),{popper:t,onUpdate:o}}pr.$$tippy=!0;var Nn=1,qe=[],ze=[];function Vn(e,t){var i,o,a,c,x,E,g,r=sr(e,Object.assign({},N,ar(Kt(t)))),s=!1,u=!1,p=!1,l=!1,O=[],h=qt(Je,r.interactiveDebounce),m=Nn++,w=function En(e){return e.filter(function(t,r){return e.indexOf(t)===r})}(r.plugins),n={id:m,reference:e,popper:le(),popperInstance:null,props:r,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:w,clearDelayTimeouts:function Qn(){clearTimeout(i),clearTimeout(o),cancelAnimationFrame(a)},setProps:function Zn(f){if(!n.state.isDestroyed){I("onBeforeUpdate",[n,f]),Be();var y=n.props,T=sr(e,Object.assign({},y,Kt(f),{ignoreAttributes:!0}));n.props=T,ke(),y.interactiveDebounce!==T.interactiveDebounce&&(de(),h=qt(Je,T.interactiveDebounce)),y.triggerTarget&&!T.triggerTarget?ue(y.triggerTarget).forEach(function(S){S.removeAttribute("aria-expanded")}):T.triggerTarget&&e.removeAttribute("aria-expanded"),Z(),U(),A&&A(y,T),n.popperInstance&&(Ne(),yt().forEach(function(S){requestAnimationFrame(S._tippy.popperInstance.forceUpdate)})),I("onAfterUpdate",[n,f])}},setContent:function ei(f){n.setProps({content:f})},show:function ti(){var f=n.state.isVisible,y=n.state.isDestroyed,T=!n.state.isEnabled,S=Q.isTouch&&!n.props.touch,P=pt(n.props.duration,0,N.duration);if(!(f||y||T||S||L().hasAttribute("disabled")||(I("onShow",[n],!1),!1===n.props.onShow(n)))){if(n.state.isVisible=!0,M()&&(d.style.visibility="visible"),U(),V(),n.state.isMounted||(d.style.transition="none"),M()){var _=z();vt([_.box,_.content],0)}E=function(){var he;if(n.state.isVisible&&!l){if(l=!0,d.style.transition=n.props.moveTransition,M()&&n.props.animation){var bt=z(),et=bt.box,Ee=bt.content;vt([et,Ee],P),Le([et,Ee],"visible")}ne(),Z(),zt(ze,n),null==(he=n.popperInstance)||he.forceUpdate(),I("onMount",[n]),n.props.animation&&M()&&function ce(f,y){we(f,y)}(P,function(){n.state.isShown=!0,I("onShown",[n])})}},function Gn(){var y,f=n.props.appendTo,T=L();(y=n.props.interactive&&f===Yt||"parent"===f?T.parentNode:Xt(f,[T])).contains(d)||y.appendChild(d),n.state.isMounted=!0,Ne()}()}},hide:function ri(){var f=!n.state.isVisible,y=n.state.isDestroyed,T=!n.state.isEnabled,S=pt(n.props.duration,1,N.duration);if(!(f||y||T)&&(I("onHide",[n],!1),!1!==n.props.onHide(n))){if(n.state.isVisible=!1,n.state.isShown=!1,l=!1,s=!1,M()&&(d.style.visibility="hidden"),de(),pe(),U(!0),M()){var P=z(),_=P.box,W=P.content;n.props.animation&&(vt([_,W],S),Le([_,W],"hidden"))}ne(),Z(),n.props.animation?M()&&function je(f,y){we(f,function(){!n.state.isVisible&&d.parentNode&&d.parentNode.contains(d)&&y()})}(S,n.unmount):n.unmount()}},hideWithInteractivity:function ni(f){B().addEventListener("mousemove",h),zt(qe,h),h(f)},enable:function Kn(){n.state.isEnabled=!0},disable:function Jn(){n.hide(),n.state.isEnabled=!1},unmount:function ii(){n.state.isVisible&&n.hide(),n.state.isMounted&&(Ve(),yt().forEach(function(f){f._tippy.unmount()}),d.parentNode&&d.parentNode.removeChild(d),ze=ze.filter(function(f){return f!==n}),n.state.isMounted=!1,I("onHidden",[n]))},destroy:function oi(){n.state.isDestroyed||(n.clearDelayTimeouts(),n.unmount(),Be(),delete e._tippy,n.state.isDestroyed=!0,I("onDestroy",[n]))}};if(!r.render)return n;var b=r.render(n),d=b.popper,A=b.onUpdate;d.setAttribute("data-tippy-root",""),d.id="tippy-"+n.id,n.popper=d,e._tippy=n,d._tippy=n;var D=w.map(function(f){return f.fn(n)}),R=e.hasAttribute("aria-expanded");return ke(),Z(),U(),I("onCreate",[n]),r.showOnCreate&&dr(),d.addEventListener("mouseenter",function(){n.props.interactive&&n.state.isVisible&&n.clearDelayTimeouts()}),d.addEventListener("mouseleave",function(){n.props.interactive&&n.props.trigger.indexOf("mouseenter")>=0&&B().addEventListener("mousemove",h)}),n;function j(){var f=n.props.touch;return Array.isArray(f)?f:[f,0]}function k(){return"hold"===j()[0]}function M(){var f;return!(null==(f=n.props.render)||!f.$$tippy)}function L(){return g||e}function B(){var f=L().parentNode;return f?function Qt(e){var t,i=ue(e)[0];return null!=i&&null!=(t=i.ownerDocument)&&t.body?i.ownerDocument:document}(f):document}function z(){return Xe(d)}function re(f){return n.state.isMounted&&!n.state.isVisible||Q.isTouch||c&&"focus"===c.type?0:pt(n.props.delay,f?0:1,N.delay)}function U(f){void 0===f&&(f=!1),d.style.pointerEvents=n.props.interactive&&!f?"":"none",d.style.zIndex=""+n.props.zIndex}function I(f,y,T){var S;void 0===T&&(T=!0),D.forEach(function(P){P[f]&&P[f].apply(P,y)}),T&&(S=n.props)[f].apply(S,y)}function ne(){var f=n.props.aria;if(f.content){var y="aria-"+f.content,T=d.id;ue(n.props.triggerTarget||e).forEach(function(P){var _=P.getAttribute(y);if(n.state.isVisible)P.setAttribute(y,_?_+" "+T:T);else{var W=_&&_.replace(T,"").trim();W?P.setAttribute(y,W):P.removeAttribute(y)}})}}function Z(){!R&&n.props.aria.expanded&&ue(n.props.triggerTarget||e).forEach(function(y){n.props.interactive?y.setAttribute("aria-expanded",n.state.isVisible&&y===L()?"true":"false"):y.removeAttribute("aria-expanded")})}function de(){B().removeEventListener("mousemove",h),qe=qe.filter(function(f){return f!==h})}function G(f){if(!Q.isTouch||!p&&"mousedown"!==f.type){var y=f.composedPath&&f.composedPath()[0]||f.target;if(!n.props.interactive||!Zt(d,y)){if(ue(n.props.triggerTarget||e).some(function(T){return Zt(T,y)})){if(Q.isTouch||n.state.isVisible&&n.props.trigger.indexOf("click")>=0)return}else I("onClickOutside",[n,f]);!0===n.props.hideOnClick&&(n.clearDelayTimeouts(),n.hide(),u=!0,setTimeout(function(){u=!1}),n.state.isMounted||pe())}}}function ve(){p=!0}function ee(){p=!1}function V(){var f=B();f.addEventListener("mousedown",G,!0),f.addEventListener("touchend",G,se),f.addEventListener("touchstart",ee,se),f.addEventListener("touchmove",ve,se)}function pe(){var f=B();f.removeEventListener("mousedown",G,!0),f.removeEventListener("touchend",G,se),f.removeEventListener("touchstart",ee,se),f.removeEventListener("touchmove",ve,se)}function we(f,y){var T=z().box;function S(P){P.target===T&&(mt(T,"remove",S),y())}if(0===f)return y();mt(T,"remove",x),mt(T,"add",S),x=S}function ie(f,y,T){void 0===T&&(T=!1),ue(n.props.triggerTarget||e).forEach(function(P){P.addEventListener(f,y,T),O.push({node:P,eventType:f,handler:y,options:T})})}function ke(){k()&&(ie("touchstart",Ie,{passive:!0}),ie("touchend",Qe,{passive:!0})),function On(e){return e.split(/\s+/).filter(Boolean)}(n.props.trigger).forEach(function(f){if("manual"!==f)switch(ie(f,Ie),f){case"mouseenter":ie("mouseleave",Qe);break;case"focus":ie(Rn?"focusout":"blur",me);break;case"focusin":ie("focusout",me)}})}function Be(){O.forEach(function(f){f.node.removeEventListener(f.eventType,f.handler,f.options)}),O=[]}function Ie(f){var y,T=!1;if(n.state.isEnabled&&!_e(f)&&!u){var S="focus"===(null==(y=c)?void 0:y.type);c=f,g=f.currentTarget,Z(),!n.state.isVisible&&function dt(e){return ct(e,"MouseEvent")}(f)&&qe.forEach(function(P){return P(f)}),"click"===f.type&&(n.props.trigger.indexOf("mouseenter")<0||s)&&!1!==n.props.hideOnClick&&n.state.isVisible?T=!0:dr(f),"click"===f.type&&(s=!T),T&&!S&&Ze(f)}}function Je(f){var y=f.target,T=L().contains(y)||d.contains(y);"mousemove"===f.type&&T||function Cn(e,t){var r=t.clientX,i=t.clientY;return e.every(function(o){var a=o.popperRect,s=o.popperState,p=o.props.interactiveBorder,l=function Gt(e){return e.split("-")[0]}(s.placement),c=s.modifiersData.offset;return!c||a.top-i+("bottom"===l?c.top.y:0)>p||i-a.bottom-("top"===l?c.bottom.y:0)>p||a.left-r+("right"===l?c.left.x:0)>p||r-a.right-("left"===l?c.right.x:0)>p})}(yt().concat(d).map(function(P){var _,Oe=null==(_=P._tippy.popperInstance)?void 0:_.state;return Oe?{popperRect:P.getBoundingClientRect(),popperState:Oe,props:r}:null}).filter(Boolean),f)&&(de(),Ze(f))}function Qe(f){if(!(_e(f)||n.props.trigger.indexOf("click")>=0&&s)){if(n.props.interactive)return void n.hideWithInteractivity(f);Ze(f)}}function me(f){n.props.trigger.indexOf("focusin")<0&&f.target!==L()||n.props.interactive&&f.relatedTarget&&d.contains(f.relatedTarget)||Ze(f)}function _e(f){return!!Q.isTouch&&k()!==f.type.indexOf("touch")>=0}function Ne(){Ve();var f=n.props,y=f.popperOptions,T=f.placement,S=f.offset,P=f.getReferenceClientRect,_=f.moveTransition,W=M()?Xe(d).arrow:null,Oe=P?{getBoundingClientRect:P,contextElement:P.contextElement||L()}:e,he=[{name:"offset",options:{offset:S}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!_}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(et){var Ee=et.state;if(M()){var wt=z().box;["placement","reference-hidden","escaped"].forEach(function(tt){"placement"===tt?wt.setAttribute("data-placement",Ee.placement):Ee.attributes.popper["data-popper-"+tt]?wt.setAttribute("data-"+tt,""):wt.removeAttribute("data-"+tt)}),Ee.attributes.popper={}}}}];M()&&W&&he.push({name:"arrow",options:{element:W,padding:3}}),he.push.apply(he,(null==y?void 0:y.modifiers)||[]),n.popperInstance=yn(Oe,d,Object.assign({},y,{placement:T,onFirstUpdate:E,modifiers:he}))}function Ve(){n.popperInstance&&(n.popperInstance.destroy(),n.popperInstance=null)}function yt(){return be(d.querySelectorAll("[data-tippy-root]"))}function dr(f){n.clearDelayTimeouts(),f&&I("onTrigger",[n,f]),V();var y=re(!0),T=j(),P=T[1];Q.isTouch&&"hold"===T[0]&&P&&(y=P),y?i=setTimeout(function(){n.show()},y):n.show()}function Ze(f){if(n.clearDelayTimeouts(),I("onUntrigger",[n,f]),n.state.isVisible){if(!(n.props.trigger.indexOf("mouseenter")>=0&&n.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(f.type)>=0&&s)){var y=re(!1);y?o=setTimeout(function(){n.state.isVisible&&n.hide()},y):a=requestAnimationFrame(function(){n.hide()})}}else pe()}}function fe(e,t){void 0===t&&(t={});var r=N.plugins.concat(t.plugins||[]);!function Pn(){document.addEventListener("touchstart",Dn,se),window.addEventListener("blur",An)}();var i=Object.assign({},t,{plugins:r}),u=function Tn(e){return Ye(e)?[e]:function xn(e){return ct(e,"NodeList")}(e)?be(e):Array.isArray(e)?e:be(document.querySelectorAll(e))}(e).reduce(function(p,l){var c=l&&Vn(l,i);return c&&p.push(c),p},[]);return Ye(e)?u[0]:u}fe.defaultProps=N,fe.setDefaultProps=function(t){Object.keys(t).forEach(function(i){N[i]=t[i]})},fe.currentInput=Q,Object.assign({},Mt,{effect:function(t){var r=t.state,i={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,i.popper),r.styles=i,r.elements.arrow&&Object.assign(r.elements.arrow.style,i.arrow)}}),fe.setDefaultProps({render:pr});const qn=fe;var Ke=Ot(3184);let zn=(()=>{class e{constructor(r){this.elementRef=r}ngOnChanges(r){if(null==this.tooltip&&(this.tooltip=qn(this.elementRef.nativeElement,{animation:"scale-subtle",arrow:!1,duration:[100,50],placement:"bottom",theme:"2sxc"})),null!=r.tippy&&this.tooltip.setContent(this.tippy),null!=r.tippyDisabled&&(this.tippyDisabled?this.tooltip.disable():this.tooltip.enable()),null!=r.tippyPlacement&&this.tooltip.setProps({placement:this.tippyPlacement}),null!=r.tippyShowDelay){const i="number"==typeof this.tippyShowDelay?this.tippyShowDelay:parseInt(this.tippyShowDelay,10);this.tooltip.setProps({delay:[i,null]})}}ngOnDestroy(){var r;null===(r=this.tooltip)||void 0===r||r.destroy()}}return e.\u0275fac=function(r){return new(r||e)(Ke.Y36(Ke.SBq))},e.\u0275dir=Ke.lG2({type:e,selectors:[["","tippy",""]],inputs:{tippy:"tippy",tippyDisabled:"tippyDisabled",tippyPlacement:"tippyPlacement",tippyShowDelay:"tippyShowDelay"},features:[Ke.TTD]}),e})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/14.12.00/ng-edit/default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts.59cee8f9c42c8c3d.js.map