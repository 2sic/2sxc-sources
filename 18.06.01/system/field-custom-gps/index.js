(()=>{"use strict";var t={941:(t,e,n)=>{n.d(e,{Tq:()=>He});const r={production:!1};function o(t){return"function"==typeof t}var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)};function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function a(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function l(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var u,h=((u=function(t){var e;e=this,Error.call(e),e.stack=(new Error).stack,this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}).prototype=Object.create(Error.prototype),u.prototype.constructor=u,u);function p(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,r,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=a(s),p=u.next();!p.done;p=u.next())p.value.remove(this)}catch(e){t={error:e}}finally{try{p&&!p.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}else s.remove(this);var d=this.initialTeardown;if(o(d))try{d()}catch(t){i=t instanceof h?t.errors:[t]}var g=this._finalizers;if(g){this._finalizers=null;try{for(var v=a(g),m=v.next();!m.done;m=v.next()){var b=m.value;try{f(b)}catch(t){i=null!=i?i:[],t instanceof h?i=l(l([],c(i)),c(t.errors)):i.push(t)}}}catch(t){n={error:t}}finally{try{m&&!m.done&&(r=v.return)&&r.call(v)}finally{if(n)throw n.error}}}if(i)throw new h(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)f(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var n=this._finalizers;n&&p(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function f(t){o(t)?t():t.unsubscribe()}d.EMPTY;var g={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=g.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,l([t,e],c(n))):setTimeout.apply(void 0,l([t,e],c(n)))},clearTimeout:function(t){var e=g.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function v(){}var m=b("C",void 0,void 0);function b(t,e,n){return{kind:t,value:e,error:n}}var y=function(t){function e(e){var n,r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,((n=e)instanceof d||n&&"closed"in n&&o(n.remove)&&o(n.add)&&o(n.unsubscribe))&&e.add(r)):r.destination=S,r}return s(e,t),e.create=function(t,e,n){return new w(t,e,n)},e.prototype.next=function(t){this.isStopped?j(function(t){return b("N",t,void 0)}(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?j(b("E",void 0,t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?j(m,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(d);Function.prototype.bind;var _=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){x(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){x(t)}else x(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){x(t)}},t}(),w=function(t){function e(e,n,r){var i,s=t.call(this)||this;return i=o(e)||!e?{next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:e,s.destination=new _(i),s}return s(e,t),e}(y);function x(t){!function(t){g.setTimeout((function(){throw t}))}(t)}function j(t,e){var n=null;n&&g.setTimeout((function(){return n(t,e)}))}var S={closed:!0,next:v,error:function(t){throw t},complete:v},O=function(t){function e(e,n,r,o,i,s){var a=t.call(this,e)||this;return a.onFinalize=i,a.shouldUnsubscribe=s,a._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,a._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,a}return s(e,t),e.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},e}(y);function k(t){return t}function L(t,e,n){var r,i=o(t)||e||n?{next:t,error:e,complete:n}:t;return i?(r=function(t,e){var n;null===(n=i.subscribe)||void 0===n||n.call(i);var r,o,s,a,c=!0;t.subscribe((r=function(t){var n;null===(n=i.next)||void 0===n||n.call(i,t),e.next(t)},o=function(){var t;c=!1,null===(t=i.complete)||void 0===t||t.call(i),e.complete()},s=function(t){var n;c=!1,null===(n=i.error)||void 0===n||n.call(i,t),e.error(t)},a=function(){var t,e;c&&(null===(t=i.unsubscribe)||void 0===t||t.call(i)),null===(e=i.finalize)||void 0===e||e.call(i)},new O(e,r,o,s,a)))},function(t){if(function(t){return o(null==t?void 0:t.lift)}(t))return t.lift((function(t){try{return r(t,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}):k}class I{constructor(t,e,n=!0,r=!0){this.logger=t,this.name=e,this.enabled=n,this.jsonify=r}generateFn(t,e,n){if(!this.enabled||!this.logger.enabled)return t=>t;const r=`${this.name}/${t}${e?`-${e}`:""}`;let o=0;return t=>t.pipe(L((t=>{const e=null==t?t:this.jsonify?JSON.parse(JSON.stringify(t)):t;return this.logger.a(r+" #"+o++,{showData:e})})))}rxTap(t,{enabled:e=!0,jsonify:n=!0}={enabled:!0,jsonify:!0}){return new I(this.logger,`${this.name}-${t}`,e,n)}pipe(t){return this.generateFn("pipe",t)}map(t){return this.generateFn("map",t)}filter(t){return this.generateFn("filter",t)}shareReplay(t){return this.generateFn("shareReplay",t)}distinctUntilChanged(t){return this.generateFn("distinctUntilChanged",t)}start(){return this.generateFn("start")}end(){return this.generateFn("end")}step(t){return this.generateFn("step"+t)}part(t){return this.generateFn("part",t)}read(t){return this.generateFn("read",t)}}class C{constructor(){this.enabled=!1}values(t,e){}a(t,e){}r(t,e,n){return t}rSilent(t,e){return t}rNull(t){return null}rTrue(t){throw!0}rFalse(t){throw!1}end(t,e){}}class E{constructor(t){this.svcId="noop",this.name="noop",this.enableChildren=!1,this.specs=t??{}}get enabled(){return!1}extendName(t){return this}inherit(t){}forceEnable(t){}a(t,e){}aIfInList(t,e,n,r){}aIf(t,e,n){}rxTap(t,e){return new I(this,"noop")}fn(t,e,n){return new C}fnCond(t,e,n,r){return new C}fnIf(t,e,n){return new C}fnIfInList(t,e,n,r,o){return new C}}function F({message:t,callStack:e=!1,data:n=null}){if(t="🪵 "+t,1==e)console.groupCollapsed(`${t}`,n),console.trace(),console.groupEnd();else{if(!n)return console.log(`${t}`);const e=Object.keys(n);if(0===e.length)return console.log(`${t}`);if(1===e.length){const r=e[0],o=n[r];return"string"==typeof o?console.log(`${t} [string:${o.length}] '${r}'='${o}'`):console.log(`${t} [${typeof o}] '${r}'=`,o)}console.log(`${t} [${e.length} data-items]`,n)}}class ${constructor(t,e,n,r){this.parent=t,this.fnName=e,this.#t(n,r)}get enabled(){return this.parent.enabled}#t(t,e,n=!0){this.parent.enabled&&(t??="",t&&n&&(t=` ${t}`),e="function"==typeof e?e():e,F({message:`${this.parent.nameWithSvcId}.${this.fnName}()${t}`,data:e}))}a(t,e){this.#t("/"+t,e,!1)}values(t,e){t&&this.parent.enabled&&(e=e?` ${e} `:"",this.#t("/values"+e,t,!1))}r(t,e){return this.#t("/return"+(e?" "+e:""),{result:t},!1),t}rSilent(t,e){return this.#t("/return"+(e?" "+e:""),null,!1),t}rNull(t){return this.#t("/return NULL"+(t?" "+t:""),null,!1),null}rTrue(t){return this.#t("/return TRUE"+(t?" "+t:""),null,!1),!0}rFalse(t){return this.#t("/return FALSE"+(t?" "+t:""),null,!1),!1}end(t,e){this.#t("/end"+(t?" "+t:""),e,!1)}}class A{get enabled(){return this.#e}#e;#n(t){this.#e=t&&!r.production}constructor(t){this.svcId=Math.random().toString(36).substring(2,5),this.#r(t.name),this.#e=t.enabled,this.enableChildren=t.enableChildren??!1,this.specs=t.specs}#r(t){this.name=t,this.nameWithSvcId=`${t}-${this.svcId}`}extendName(t){return this.#r(`${this.name}${t}`),this}inherit(t){this.enabled||(this.#n(t.enabled),t.enabled&&this.a(`Enabled: Inheriting log settings from parent ${t.nameWithSvcId}`))}forceEnable(t){null==t||this.enabled||(t&&this.a("Enabled: Forced to enable log"),this.#n(t))}#t(t,e,n=!0){this.enabled&&(t??="",t&&n&&(t=` ${t}`),e="function"==typeof e?e():e,F({message:`${this.nameWithSvcId}${t}`,data:e}))}a(t,e){this.#t(t,e)}aIf(t,e,n){this.enabled&&this.#o(t)&&this.#t(n,e)}aIfInList(t,e,n,r){this.enabled&&this.#i(t,e)&&this.#t(r,n)}rxTap(t,{enabled:e=!0,jsonify:n=!0}={enabled:!0,jsonify:!0}){return new I(this,t,e,n)}fn(t,e,n){return new $(this,t,n,e)}fnCond(t,e,n,r){return t||!this.enabled?this.fn(e,n,r):new C}fnIf(t,e,n){return this.enabled&&this.#o(t)?this.fn(t,e,n):new C}fnIfInList(t,e,n,r,o){return this.enabled&&this.#o(t)&&this.#i(e,n)?this.fn(`${t}[${n}]`,r,o):new C}#o(t){return this.specs&&!(!this.specs[t]&&!this.specs.all)}#i(t,e){const n=this.specs?.[t];return n&&(n.includes(e)||n.includes("*"))}}class z{constructor(t,e,n){this.storage=t,this.prefix=e,this.configName=n,this.#s=this.prefix+(this.configName?`:${this.configName}`:"")}#s;get cache(){return this.#a??=this.#c()??{}}#a;get(t){return this.cache[t]}add(t,e){this.cache[t]=e,this.#l(this.cache)}remove(t){delete this.cache[t],this.#l(this.cache)}reset(){this.#l(this.#a={})}getNamesInStoreWithPrefix(){return Array.from(this.storage).filter((([t])=>t===this.prefix||t.startsWith(this.prefix+":"))).map((([t])=>t))}#l(t){this.storage.setItem(this.#s,JSON.stringify(t))}#c(){const t=this.storage.getItem(this.#s);return t?JSON.parse(t):{}}}class T extends z{constructor(t,e){super(window.sessionStorage,t,e)}}const M=function(t,e){return t===e||t!=t&&e!=e},P=function(t,e){for(var n=t.length;n--;)if(M(t[n][0],e))return n;return-1};var N=Array.prototype.splice;function H(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}H.prototype.clear=function(){this.__data__=[],this.size=0},H.prototype.delete=function(t){var e=this.__data__,n=P(e,t);return!(n<0||(n==e.length-1?e.pop():N.call(e,n,1),--this.size,0))},H.prototype.get=function(t){var e=this.__data__,n=P(e,t);return n<0?void 0:e[n][1]},H.prototype.has=function(t){return P(this.__data__,t)>-1},H.prototype.set=function(t,e){var n=this.__data__,r=P(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};const U=H,q="object"==typeof global&&global&&global.Object===Object&&global;var G="object"==typeof self&&self&&self.Object===Object&&self;const D=q||G||Function("return this")(),W=D.Symbol;var R=Object.prototype,B=R.hasOwnProperty,K=R.toString,J=W?W.toStringTag:void 0;var V=Object.prototype.toString;var Z=W?W.toStringTag:void 0;const Y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Z&&Z in Object(t)?function(t){var e=B.call(t,J),n=t[J];try{t[J]=void 0;var r=!0}catch(t){}var o=K.call(t);return r&&(e?t[J]=n:delete t[J]),o}(t):function(t){return V.call(t)}(t)},Q=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},X=function(t){if(!Q(t))return!1;var e=Y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},tt=D["__core-js_shared__"];var et,nt=(et=/[^.]+$/.exec(tt&&tt.keys&&tt.keys.IE_PROTO||""))?"Symbol(src)_1."+et:"";var rt=Function.prototype.toString;const ot=function(t){if(null!=t){try{return rt.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var it=/^\[object .+?Constructor\]$/,st=Function.prototype,at=Object.prototype,ct=st.toString,lt=at.hasOwnProperty,ut=RegExp("^"+ct.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ht=function(t){return!(!Q(t)||(e=t,nt&&nt in e))&&(X(t)?ut:it).test(ot(t));var e},pt=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(n)?n:void 0},dt=pt(D,"Map"),ft=pt(Object,"create");var gt=Object.prototype.hasOwnProperty;var vt=Object.prototype.hasOwnProperty;function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=function(){this.__data__=ft?ft(null):{},this.size=0},mt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},mt.prototype.get=function(t){var e=this.__data__;if(ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},mt.prototype.has=function(t){var e=this.__data__;return ft?void 0!==e[t]:vt.call(e,t)},mt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};const bt=mt,yt=function(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map};function _t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_t.prototype.clear=function(){this.size=0,this.__data__={hash:new bt,map:new(dt||U),string:new bt}},_t.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},_t.prototype.get=function(t){return yt(this,t).get(t)},_t.prototype.has=function(t){return yt(this,t).has(t)},_t.prototype.set=function(t,e){var n=yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};const wt=_t;function xt(t){var e=this.__data__=new U(t);this.size=e.size}xt.prototype.clear=function(){this.__data__=new U,this.size=0},xt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof U){var r=n.__data__;if(!dt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new wt(r)}return n.set(t,e),this.size=n.size,this};const jt=xt;function St(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new wt;++e<n;)this.add(t[e])}St.prototype.add=St.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},St.prototype.has=function(t){return this.__data__.has(t)};const Ot=St,kt=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Lt=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var h=-1,p=!0,d=2&n?new Ot:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var f=t[h],g=e[h];if(r)var v=s?r(g,f,h,e,t,i):r(f,g,h,t,e,i);if(void 0!==v){if(v)continue;p=!1;break}if(d){if(!kt(e,(function(t,e){if(s=e,!d.has(s)&&(f===t||o(f,t,n,r,i)))return d.push(e);var s}))){p=!1;break}}else if(f!==g&&!o(f,g,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p},It=D.Uint8Array,Ct=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},Et=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n};var Ft=W?W.prototype:void 0,$t=Ft?Ft.valueOf:void 0;const At=Array.isArray;var zt=Object.prototype.propertyIsEnumerable,Tt=Object.getOwnPropertySymbols;const Mt=Tt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s)}return i}(Tt(t),(function(e){return zt.call(t,e)})))}:function(){return[]},Pt=function(t){return null!=t&&"object"==typeof t},Nt=function(t){return Pt(t)&&"[object Arguments]"==Y(t)};var Ht=Object.prototype,Ut=Ht.hasOwnProperty,qt=Ht.propertyIsEnumerable;const Gt=Nt(function(){return arguments}())?Nt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!qt.call(t,"callee")};var Dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Wt=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,Rt=Wt&&Wt.exports===Dt?D.Buffer:void 0;const Bt=(Rt?Rt.isBuffer:void 0)||function(){return!1};var Kt=/^(?:0|[1-9]\d*)$/;const Jt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Kt.test(t))&&t>-1&&t%1==0&&t<e},Vt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var Zt={};Zt["[object Float32Array]"]=Zt["[object Float64Array]"]=Zt["[object Int8Array]"]=Zt["[object Int16Array]"]=Zt["[object Int32Array]"]=Zt["[object Uint8Array]"]=Zt["[object Uint8ClampedArray]"]=Zt["[object Uint16Array]"]=Zt["[object Uint32Array]"]=!0,Zt["[object Arguments]"]=Zt["[object Array]"]=Zt["[object ArrayBuffer]"]=Zt["[object Boolean]"]=Zt["[object DataView]"]=Zt["[object Date]"]=Zt["[object Error]"]=Zt["[object Function]"]=Zt["[object Map]"]=Zt["[object Number]"]=Zt["[object Object]"]=Zt["[object RegExp]"]=Zt["[object Set]"]=Zt["[object String]"]=Zt["[object WeakMap]"]=!1;var Yt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Qt=Yt&&"object"==typeof module&&module&&!module.nodeType&&module,Xt=Qt&&Qt.exports===Yt&&q.process,te=function(){try{return Qt&&Qt.require&&Qt.require("util").types||Xt&&Xt.binding&&Xt.binding("util")}catch(t){}}(),ee=te&&te.isTypedArray;const ne=ee?(re=ee,function(t){return re(t)}):function(t){return Pt(t)&&Vt(t.length)&&!!Zt[Y(t)]};var re,oe=Object.prototype.hasOwnProperty;const ie=function(t,e){var n=At(t),r=!n&&Gt(t),o=!n&&!r&&Bt(t),i=!n&&!r&&!o&&ne(t),s=n||r||o||i,a=s?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=a.length;for(var l in t)!e&&!oe.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Jt(l,c))||a.push(l);return a};var se=Object.prototype;const ae=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object);var ce=Object.prototype.hasOwnProperty;const le=function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||se))return ae(t);var e,n,r=[];for(var o in Object(t))ce.call(t,o)&&"constructor"!=o&&r.push(o);return r},ue=function(t){return null!=(e=t)&&Vt(e.length)&&!X(e)?ie(t):le(t);var e},he=function(t){return function(t,e,n){var r=e(t);return At(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,ue,Mt)};var pe=Object.prototype.hasOwnProperty;const de=pt(D,"DataView"),fe=pt(D,"Promise"),ge=pt(D,"Set"),ve=pt(D,"WeakMap");var me="[object Map]",be="[object Promise]",ye="[object Set]",_e="[object WeakMap]",we="[object DataView]",xe=ot(de),je=ot(dt),Se=ot(fe),Oe=ot(ge),ke=ot(ve),Le=Y;(de&&Le(new de(new ArrayBuffer(1)))!=we||dt&&Le(new dt)!=me||fe&&Le(fe.resolve())!=be||ge&&Le(new ge)!=ye||ve&&Le(new ve)!=_e)&&(Le=function(t){var e=Y(t),n="[object Object]"==e?t.constructor:void 0,r=n?ot(n):"";if(r)switch(r){case xe:return we;case je:return me;case Se:return be;case Oe:return ye;case ke:return _e}return e});const Ie=Le;var Ce="[object Arguments]",Ee="[object Array]",Fe="[object Object]",$e=Object.prototype.hasOwnProperty;const Ae=function(t,e,n,r,o,i){var s=At(t),a=At(e),c=s?Ee:Ie(t),l=a?Ee:Ie(e),u=(c=c==Ce?Fe:c)==Fe,h=(l=l==Ce?Fe:l)==Fe,p=c==l;if(p&&Bt(t)){if(!Bt(e))return!1;s=!0,u=!1}if(p&&!u)return i||(i=new jt),s||ne(t)?Lt(t,e,n,r,o,i):function(t,e,n,r,o,i,s){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new It(t),new It(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return M(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=Ct;case"[object Set]":var c=1&r;if(a||(a=Et),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;r|=2,s.set(t,e);var u=Lt(a(t),a(e),r,o,i,s);return s.delete(t),u;case"[object Symbol]":if($t)return $t.call(t)==$t.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&$e.call(t,"__wrapped__"),f=h&&$e.call(e,"__wrapped__");if(d||f){var g=d?t.value():t,v=f?e.value():e;return i||(i=new jt),o(g,v,n,r,i)}}return!!p&&(i||(i=new jt),function(t,e,n,r,o,i){var s=1&n,a=he(t),c=a.length;if(c!=he(e).length&&!s)return!1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:pe.call(e,u)))return!1}var h=i.get(t),p=i.get(e);if(h&&p)return h==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var f=s;++l<c;){var g=t[u=a[l]],v=e[u];if(r)var m=s?r(v,g,u,e,t,i):r(g,v,u,t,e,i);if(!(void 0===m?g===v||o(g,v,n,r,i):m)){d=!1;break}f||(f="constructor"==u)}if(d&&!f){var b=t.constructor,y=e.constructor;b==y||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(d=!1)}return i.delete(t),i.delete(e),d}(t,e,n,r,o,i))},ze=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Ae(e,n,r,o,t,i))},Te=function(t,e){return ze(t,e)};let Me;const Pe="logSpecs";class Ne{static getSpecs(t){const e=Ne.singleton();e.debug;const n=e.cache[t.name];if(n)return n;const r=e.state.cache[t.name],o={enabled:!1,...t,...r};return e.cache[t.name]=o,o}static singleton(){if(Me)return Me;const t=window;return t.logManager?Me=t.logManager:(t.logManager=Me=new Ne,Me)}constructor(){this.cache={},this.state=new T(Pe)}updateSpecs(t){Object.keys(t).forEach((e=>{const n=this.cache[e];Te(n?.specs,t[e].specs)||(this.cache[e]=t[e],this.state.add(e,t[e]))}))}get allSpecs(){return this.cache}get allConfigured(){return this.state.cache}get mergeAllSpecs(){const t={...this.cache};return Object.keys(this.state.cache).forEach((e=>{t[e]={...t[e],...this.state.cache[e]}})),Object.keys(t).forEach((e=>{e.startsWith(Pe)&&delete t[e]})),t}get specsOfConfigured(){const t=this.state.cache;return Object.keys(t).map((e=>this.cache[e]||t[e]))}configure(t){delete this.cache[t.name],this.state.add(t.name,t)}toggle(t,e){const n=this.cache[t],r=this.state.cache[t],o={name:t,enabled:e??!r?.enabled,specs:r?.specs||n?.specs||{}};return this.configure(o),e}}function He(t,e,n,o=!1){const i=t?"string"==typeof t?t:(t?Object.keys(t)[0]:null)??"unknown":"unknown",s={enabled:o&&!r.production,name:i,specs:e??{}},a=Ne.getSpecs(s);return a.enabled?new A(a):new E(e)}},600:(t,e,n)=>{n.d(e,{Z:()=>o,Ul:()=>r,Af:()=>i,m5:()=>s});const r={mapMarker:'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">\x3c!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>',person:'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 320 512">\x3c!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/></svg>'};function o(t,e){return`${t}<style>\n${e}\n</style>`}function i(t){if(t&&t.trim().startsWith("{")&&t.trim().endsWith("}"))return JSON.parse(t.replace("latitude","lat").replace("longitude","lng"));throw new Error("Invalid JSON string")}function s(t){return JSON.stringify(t).replace("lat","latitude").replace("lng","longitude")}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(941),e=n(600);const r="field-custom-gps-dialog";class o extends HTMLElement{constructor(){super(),this.log=(0,t.Tq)({FieldCustomGpsDialog:o}),this.log.a(`${r} constructor called`),this.fieldInitialized=!1}connectedCallback(){if(this.fieldInitialized)return;this.fieldInitialized=!0,this.log.a(`${r} connectedCallback called`),this.eventListeners=[],this.innerHTML=(0,e.Z)('<div class="custom-gps-container">\r\n  <div class="map-info">\r\n    <div class="input-component">\r\n      <label for="lat">Lat:</label>\r\n      <input id="lat" type="number" step="0.001" />\r\n    </div>\r\n    &nbsp;\r\n    <div class="input-component">\r\n      <label for="lng">Lng:</label>\r\n      <input id="lng" type="number" step="0.001" />\r\n    </div>\r\n    <a id="icon-pin" class="btn"></a>\r\n  </div>\r\n\r\n  <div id="address-mask-container" class="map-info address-mask-container hidden">\r\n    <a id="icon-search" class="btn"></a>\r\n    <input id="formatted-address-container" type="text" />\r\n  </div>\r\n\r\n  <div id="map" class="map-info__map" />\r\n</div>\r\n',".custom-gps-container{display:flex;flex-direction:column;height:100%}.map-info{flex:0 0 32px;display:flex;flex-wrap:wrap;align-items:center;padding:4px;padding-left:14px;border-bottom:1px solid #e1e1e1;background:#fff}.map-info #icon-pin{margin-left:1rem;padding:.5rem}.map-info label,.map-info #icon-search{margin-right:8px;display:flex;justify-content:center;align-items:center;font-size:12px;text-transform:uppercase;padding:4px}.map-info #icon-search i{font-size:14px;width:14px;height:14px;font-weight:bold}.map-info input{margin-right:8px;padding:4px 16px;border:none;background:rgba(0,0,0,0);outline:none !important}.address-mask-container{flex-wrap:nowrap}.map-info__map{flex:1 1 auto;width:100%;display:block}.hidden{display:none}.btn{border:1px solid silver;border-radius:4px}.btn:hover{background-color:rgba(69,79,99,.08);cursor:pointer}.input-component{display:flex;background-color:rgba(69,79,99,.08);padding:4px;border-radius:4px 4px 0 0;border-bottom:1px solid silver;margin:8px 0}.input-component:hover{border-bottom:1px solid #002753}"),this.latInput=this.querySelector("#lat"),this.lngInput=this.querySelector("#lng");const t=this.querySelector("#address-mask-container");this.iconSearch=this.querySelector("#icon-search"),this.iconSearch.insertAdjacentHTML("afterbegin",e.Ul.search),this.iconPin=this.querySelector("#icon-pin"),this.iconPin.insertAdjacentHTML("afterbegin",e.Ul.person);const n=this.querySelector("#formatted-address-container");this.mapContainer=this.querySelector("#map");const o=this.connector._experimental,i=o.allInputTypeNames.map((t=>t.name)),s=this.connector.field.settings;i.includes(s.LatField)&&(this.latFieldName=s.LatField),i.includes(s.LongField)&&(this.lngFieldName=s.LongField);const a=s.AddressMask||s["Address Mask"];this.addressMask=o.getFieldMask(a,"Gps"),this.log.a(`${r} addressMask:`,{addressMaskSetting:a}),a&&(t.classList.remove("hidden"),n.value=this.addressMask.result());const c=o.getSettings("Settings.GoogleMaps.DefaultCoordinates");this.defaultCoordinates={lat:c.Latitude,lng:c.Longitude};const l=o.getSettings("Settings.GoogleMaps.ApiKey").ApiKey;this.connector.loadScript("google",`https://maps.googleapis.com/maps/api/js?key=${l}&callback=Function.prototype`,(()=>{this.mapScriptLoaded()}))}mapScriptLoaded(){if(this.log.a(`${r} mapScriptLoaded called`),this.map=new google.maps.Map(this.mapContainer,{zoom:15,center:this.defaultCoordinates,gestureHandling:"greedy",streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}}),this.marker=new google.maps.Marker({position:this.defaultCoordinates,map:this.map,draggable:!0}),this.geocoder=new google.maps.Geocoder,this.connector.data.value)try{this.updateHtml((0,e.Af)(this.connector.data.value))}catch(t){console.error("Invalid data.value:",this.connector.data.value),this.updateHtml(this.defaultCoordinates)}else this.updateHtml(this.defaultCoordinates);const t=()=>{this.onLatLngInputChange()};this.latInput.addEventListener("change",t),this.lngInput.addEventListener("change",t);const n=()=>{this.autoSelect()};this.iconSearch.addEventListener("click",n),this.iconPin.addEventListener("click",(()=>{this.setLocation()})),this.eventListeners.push({element:this.latInput,type:"change",listener:t},{element:this.lngInput,type:"change",listener:t},{element:this.iconSearch,type:"click",listener:n}),this.marker.addListener("dragend",(t=>{this.onMarkerDragend(t)}))}setLocation(){if(navigator.geolocation){const t=this.querySelector("#formatted-address-container");t.value="Locating...",navigator.geolocation.getCurrentPosition((e=>{const n={lat:e.coords.latitude,lng:e.coords.longitude};this.updateHtml(n),this.updateForm(n),this.geocoder.geocode({location:n},((e,n)=>{n===google.maps.GeocoderStatus.OK&&e[0]?t.value=e[0].formatted_address:t.value="Unable to retrieve address"}))}),(t=>{console.error("Error getting location:",t)}))}else console.error("Geolocation is not supported by this browser.")}updateHtml(t){this.latInput.value=t.lat?.toString()??"",this.lngInput.value=t.lng?.toString()??"",this.map.setCenter(t),this.marker.setPosition(t)}updateForm(t){this.connector.data.update((0,e.m5)(t)),this.latFieldName&&this.connector._experimental.updateField(this.latFieldName,t.lat),this.lngFieldName&&this.connector._experimental.updateField(this.lngFieldName,t.lng)}onLatLngInputChange(){this.log.a(`${r} input changed`);const t={lat:this.latInput.value.length>0?parseFloat(this.latInput.value):null,lng:this.lngInput.value.length>0?parseFloat(this.lngInput.value):null};this.updateHtml(t),this.updateForm(t)}autoSelect(){this.log.a(`${r} geocoder called`);const t=this.querySelector("#formatted-address-container").value;this.geocoder.geocode({address:t},((e,n)=>{if(n===google.maps.GeocoderStatus.OK){const t=e[0].geometry.location,n={lat:t.lat(),lng:t.lng()};this.updateHtml(n),this.updateForm(n)}else alert(`Could not locate address: ${t}`)}))}onMarkerDragend(t){this.log.a(`${r} marker changed`);const e={lat:t.latLng.lat(),lng:t.latLng.lng()};this.updateHtml(e),this.updateForm(e)}disconnectedCallback(){this.log.a(`${r} disconnectedCallback called`),google?.maps.event.clearInstanceListeners(this.marker),google?.maps.event.clearInstanceListeners(this.map),this.eventListeners.forEach((({element:t,type:e,listener:n})=>{t.removeEventListener(e,n)})),this.addressMask.destroy()}}customElements.get(r)||customElements.define(r,o)})(),(()=>{var t=n(941),e=n(600);const r="field-custom-gps";class o extends HTMLElement{constructor(){super(),this.log=(0,t.Tq)({FieldCustomGps:o}),this.log.a(`${r} constructor called`),this.fieldInitialized=!1}connectedCallback(){if(this.fieldInitialized)return;this.fieldInitialized=!0,this.log.a(`${r} connectedCallback called`),this.innerHTML=(0,e.Z)('<div class="custom-gps-preview">\r\n  <div class="custom-gps-preview__text">\r\n    Lat: <span id="lat-container"></span>, Lng: <span id="lng-container"></span>\r\n  </div>\r\n  <div class="custom-gps-preview__spacer"></div>\r\n  <div id="map-icon-container" class="custom-gps-preview__map-icon"></div>\r\n</div>\r\n',".custom-gps-preview{width:100%;display:flex;align-items:center;position:absolute;top:0;bottom:0;font-size:16px;line-height:20px;margin-bottom:-2px;cursor:pointer}.custom-gps-preview__text{flex-shrink:0;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.custom-gps-preview__spacer{flex-grow:1}.custom-gps-preview__map-icon{flex-shrink:0;margin-right:4px;display:flex;align-items:center;justify-content:center}.custom-gps-preview__map-icon svg{width:20px;height:20px;line-height:20px}"),this.querySelector("#map-icon-container").innerHTML=e.Ul.mapMarker,this.latContainer=this.querySelector("#lat-container"),this.lngContainer=this.querySelector("#lng-container"),this.eventListeners=[];const t=()=>{this.expand()};this.addEventListener("click",t),this.eventListeners.push({element:this,type:"click",listener:t});const n=this.connector._experimental.getSettings("Settings.GoogleMaps.DefaultCoordinates");this.defaultCoordinates={lat:n.Latitude,lng:n.Longitude},this.connector.data.value?this.updateHtml((0,e.Af)(this.connector.data.value)):this.updateHtml(this.defaultCoordinates),this.connector.data.onValueChange((t=>{if(t){const n=(0,e.Af)(t);this.updateHtml(n)}else this.updateHtml(this.defaultCoordinates)}))}updateHtml(t){this.latContainer.innerText=t.lat?.toString()??"",this.lngContainer.innerText=t.lng?.toString()??""}expand(){this.connector.dialog.open()}disconnectedCallback(){this.log.a(`${r} disconnectedCallback called`),this.eventListeners.forEach((({element:t,type:e,listener:n})=>{t.removeEventListener(e,n)}))}}customElements.get(r)||customElements.define(r,o)})()})();
//# sourceMappingURL=https://sources.2sxc.org/18.07.00/system/field-custom-gps/index.js.map