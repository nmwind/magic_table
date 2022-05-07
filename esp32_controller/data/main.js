"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[179],{503:()=>{function Q(n){return"function"==typeof n}function Zs(n){const t=n(i=>{Error.call(i),i.stack=(new Error).stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}const Ys=Zs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((i,r)=>`${r+1}) ${i.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});function Ni(n,e){if(n){const t=n.indexOf(e);0<=t&&n.splice(t,1)}}class dt{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const s of t)s.remove(this);else t.remove(this);const{initialTeardown:i}=this;if(Q(i))try{i()}catch(s){e=s instanceof Ys?s.errors:[s]}const{_teardowns:r}=this;if(r){this._teardowns=null;for(const s of r)try{jh(s)}catch(o){e=null!=e?e:[],o instanceof Ys?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ys(e)}}add(e){var t;if(e&&e!==this)if(this.closed)jh(e);else{if(e instanceof dt){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(t=this._teardowns)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ni(t,e)}remove(e){const{_teardowns:t}=this;t&&Ni(t,e),e instanceof dt&&e._removeParent(this)}}dt.EMPTY=(()=>{const n=new dt;return n.closed=!0,n})();const Bh=dt.EMPTY;function Hh(n){return n instanceof dt||n&&"closed"in n&&Q(n.remove)&&Q(n.add)&&Q(n.unsubscribe)}function jh(n){Q(n)?n():n.unsubscribe()}const ri={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Xs={setTimeout(...n){const{delegate:e}=Xs;return((null==e?void 0:e.setTimeout)||setTimeout)(...n)},clearTimeout(n){const{delegate:e}=Xs;return((null==e?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Uh(n){Xs.setTimeout(()=>{const{onUnhandledError:e}=ri;if(!e)throw n;e(n)})}function Br(){}const Iw=gl("C",void 0,void 0);function gl(n,e,t){return{kind:n,value:e,error:t}}let si=null;function Js(n){if(ri.useDeprecatedSynchronousErrorHandling){const e=!si;if(e&&(si={errorThrown:!1,error:null}),n(),e){const{errorThrown:t,error:i}=si;if(si=null,t)throw i}}else n()}class _l extends dt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Hh(e)&&e.add(this)):this.destination=Nw}static create(e,t,i){return new yl(e,t,i)}next(e){this.isStopped?bl(function Fw(n){return gl("N",n,void 0)}(e),this):this._next(e)}error(e){this.isStopped?bl(function kw(n){return gl("E",void 0,n)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?bl(Iw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class yl extends _l{constructor(e,t,i){let r;if(super(),Q(e))r=e;else if(e){let s;({next:r,error:t,complete:i}=e),this&&ri.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe()):s=e,r=null==r?void 0:r.bind(s),t=null==t?void 0:t.bind(s),i=null==i?void 0:i.bind(s)}this.destination={next:r?vl(r):Br,error:vl(null!=t?t:$h),complete:i?vl(i):Br}}}function vl(n,e){return(...t)=>{try{n(...t)}catch(i){ri.useDeprecatedSynchronousErrorHandling?function Ow(n){ri.useDeprecatedSynchronousErrorHandling&&si&&(si.errorThrown=!0,si.error=n)}(i):Uh(i)}}}function $h(n){throw n}function bl(n,e){const{onStoppedNotification:t}=ri;t&&Xs.setTimeout(()=>t(n,e))}const Nw={closed:!0,next:Br,error:$h,complete:Br},Dl="function"==typeof Symbol&&Symbol.observable||"@@observable";function eo(n){return n}let Se=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){const i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){const s=function Pw(n){return n&&n instanceof _l||function Rw(n){return n&&Q(n.next)&&Q(n.error)&&Q(n.complete)}(n)&&Hh(n)}(t)?t:new yl(t,i,r);return Js(()=>{const{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return new(i=Gh(i))((r,s)=>{let o;o=this.subscribe(a=>{try{t(a)}catch(l){s(l),null==o||o.unsubscribe()}},s,r)})}_subscribe(t){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(t)}[Dl](){return this}pipe(...t){return function zh(n){return 0===n.length?eo:1===n.length?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}(t)(this)}toPromise(t){return new(t=Gh(t))((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Gh(n){var e;return null!==(e=null!=n?n:ri.Promise)&&void 0!==e?e:Promise}const Lw=Zs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let pe=(()=>{class n extends Se{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const i=new qh(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Lw}next(t){Js(()=>{if(this._throwIfClosed(),!this.isStopped){const i=this.observers.slice();for(const r of i)r.next(t)}})}error(t){Js(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Js(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:i,isStopped:r,observers:s}=this;return i||r?Bh:(s.push(t),new dt(()=>Ni(s,t)))}_checkFinalizedStatuses(t){const{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){const t=new Se;return t.source=this,t}}return n.create=(e,t)=>new qh(e,t),n})();class qh extends pe{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===i||i.call(t,e)}error(e){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===i||i.call(t,e)}complete(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)}_subscribe(e){var t,i;return null!==(i=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==i?i:Bh}}function nt(n){return e=>{if(function Vw(n){return Q(null==n?void 0:n.lift)}(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}class ht extends _l{constructor(e,t,i,r,s){super(e),this.onFinalize=s,this._next=t?function(o){try{t(o)}catch(a){e.error(a)}}:super._next,this._error=r?function(o){try{r(o)}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(o){e.error(o)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;const{closed:t}=this;super.unsubscribe(),!t&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}function Ke(n,e){return nt((t,i)=>{let r=0;t.subscribe(new ht(i,s=>{i.next(n.call(e,s,r++))}))})}
/*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */function oi(n){return this instanceof oi?(this.v=n,this):new oi(n)}function jw(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=t.apply(n,e||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(f){return new Promise(function(p,m){s.push([h,f,p,m])>1||a(h,f)})})}function a(h,f){try{!function l(h){h.value instanceof oi?Promise.resolve(h.value.v).then(c,u):d(s[0][2],h)}(i[h](f))}catch(p){d(s[0][3],p)}}function c(h){a("next",h)}function u(h){a("throw",h)}function d(h,f){h(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Uw(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,e=n[Symbol.asyncIterator];return e?e.call(n):(n=function Qh(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(n),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){!function r(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}(a,l,(o=n[s](o)).done,o.value)})}}}const Cl=n=>n&&"number"==typeof n.length&&"function"!=typeof n;function Zh(n){return Q(null==n?void 0:n.then)}function Yh(n){return Q(n[Dl])}function Xh(n){return Symbol.asyncIterator&&Q(null==n?void 0:n[Symbol.asyncIterator])}function Jh(n){return new TypeError(`You provided ${null!==n&&"object"==typeof n?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const ef=function zw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function tf(n){return Q(null==n?void 0:n[ef])}function nf(n){return jw(this,arguments,function*(){const t=n.getReader();try{for(;;){const{value:i,done:r}=yield oi(t.read());if(r)return yield oi(void 0);yield yield oi(i)}}finally{t.releaseLock()}})}function rf(n){return Q(null==n?void 0:n.getReader)}function Gt(n){if(n instanceof Se)return n;if(null!=n){if(Yh(n))return function Gw(n){return new Se(e=>{const t=n[Dl]();if(Q(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(n);if(Cl(n))return function qw(n){return new Se(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}(n);if(Zh(n))return function Ww(n){return new Se(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Uh)})}(n);if(Xh(n))return sf(n);if(tf(n))return function Kw(n){return new Se(e=>{for(const t of n)if(e.next(t),e.closed)return;e.complete()})}(n);if(rf(n))return function Qw(n){return sf(nf(n))}(n)}throw Jh(n)}function sf(n){return new Se(e=>{(function Zw(n,e){var t,i,r,s;return function Bw(n,e,t,i){return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(d){o(d)}}function l(u){try{c(i.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):function r(s){return s instanceof t?s:new t(function(o){o(s)})}(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}(this,void 0,void 0,function*(){try{for(t=Uw(n);!(i=yield t.next()).done;)if(e.next(i.value),e.closed)return}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})})(n,e).catch(t=>e.error(t))})}function Pn(n,e,t,i=0,r=!1){const s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Hr(n,e,t=1/0){return Q(e)?Hr((i,r)=>Ke((s,o)=>e(i,s,r,o))(Gt(n(i,r))),t):("number"==typeof e&&(t=e),nt((i,r)=>function Yw(n,e,t,i,r,s,o,a){const l=[];let c=0,u=0,d=!1;const h=()=>{d&&!l.length&&!c&&e.complete()},f=m=>c<i?p(m):l.push(m),p=m=>{s&&e.next(m),c++;let y=!1;Gt(t(m,u++)).subscribe(new ht(e,v=>{null==r||r(v),s?f(v):e.next(v)},()=>{y=!0},void 0,()=>{if(y)try{for(c--;l.length&&c<i;){const v=l.shift();o?Pn(e,o,()=>p(v)):p(v)}h()}catch(v){e.error(v)}}))};return n.subscribe(new ht(e,f,()=>{d=!0,h()})),()=>{null==a||a()}}(i,r,n,t)))}function af(n=1/0){return Hr(eo,n)}const El=new Se(n=>n.complete());function lf(n){return n&&Q(n.schedule)}function Ml(n){return n[n.length-1]}function to(n){return lf(Ml(n))?n.pop():void 0}function cf(n,e=0){return nt((t,i)=>{t.subscribe(new ht(i,r=>Pn(i,n,()=>i.next(r),e),()=>Pn(i,n,()=>i.complete(),e),r=>Pn(i,n,()=>i.error(r),e)))})}function uf(n,e=0){return nt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function df(n,e){if(!n)throw new Error("Iterable cannot be null");return new Se(t=>{Pn(t,e,()=>{const i=n[Symbol.asyncIterator]();Pn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function jr(n,e){return e?function oC(n,e){if(null!=n){if(Yh(n))return function tC(n,e){return Gt(n).pipe(uf(e),cf(e))}(n,e);if(Cl(n))return function iC(n,e){return new Se(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}(n,e);if(Zh(n))return function nC(n,e){return Gt(n).pipe(uf(e),cf(e))}(n,e);if(Xh(n))return df(n,e);if(tf(n))return function rC(n,e){return new Se(t=>{let i;return Pn(t,e,()=>{i=n[ef](),Pn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){return void t.error(o)}s?t.complete():t.next(r)},0,!0)}),()=>Q(null==i?void 0:i.return)&&i.return()})}(n,e);if(rf(n))return function sC(n,e){return df(nf(n),e)}(n,e)}throw Jh(n)}(n,e):Gt(n)}function hf(...n){const e=to(n),t=function eC(n,e){return"number"==typeof Ml(n)?n.pop():e}(n,1/0),i=n;return i.length?1===i.length?Gt(i[0]):af(t)(jr(i,e)):El}function Ur(n){return n<=0?()=>El:nt((e,t)=>{let i=0;e.subscribe(new ht(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function ff(n={}){const{connector:e=(()=>new pe),resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o=null,a=null,l=null,c=0,u=!1,d=!1;const h=()=>{null==a||a.unsubscribe(),a=null},f=()=>{h(),o=l=null,u=d=!1},p=()=>{const m=o;f(),null==m||m.unsubscribe()};return nt((m,y)=>{c++,!d&&!u&&h();const v=l=null!=l?l:e();y.add(()=>{c--,0===c&&!d&&!u&&(a=Sl(p,r))}),v.subscribe(y),o||(o=new yl({next:_=>v.next(_),error:_=>{d=!0,h(),a=Sl(f,t,_),v.error(_)},complete:()=>{u=!0,h(),a=Sl(f,i),v.complete()}}),jr(m).subscribe(o))})(s)}}function Sl(n,e,...t){return!0===e?(n(),null):!1===e?null:e(...t).pipe(Ur(1)).subscribe(()=>n())}
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(n){for(let e in n)if(n[e]===re)return e;throw Error("Could not find renamed property on target object.")}function Al(n,e){for(const t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function te(n){if("string"==typeof n)return n;if(Array.isArray(n))return"["+n.map(te).join(", ")+"]";if(null==n)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;const e=n.toString();if(null==e)return""+e;const t=e.indexOf("\n");return-1===t?e:e.substring(0,t)}function xl(n,e){return null==n||""===n?null===e?"":e:null==e||""===e?n:n+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const aC=re({__forward_ref__:re});function Y(n){return n.__forward_ref__=Y,n.toString=function(){return te(this())},n}function H(n){return pf(n)?n():n}function pf(n){return"function"==typeof n&&n.hasOwnProperty(aC)&&n.__forward_ref__===Y}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class M extends Error{constructor(e,t){super(function Tl(n,e){return`NG0${Math.abs(n)}${e?": "+e:""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t)),this.code=e}}function R(n){return"string"==typeof n?n:null==n?"":String(n)}function Ge(n){return"function"==typeof n?n.name||n.toString():"object"==typeof n&&null!=n&&"function"==typeof n.type?n.type.name||n.type.toString():R(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function no(n,e){const t=e?` in ${e}`:"";throw new M(-201,`No provider for ${Ge(n)} found${t}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _t(n,e){null==n&&function de(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(null==i?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}(e,n,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function P(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ae(n){return{providers:n.providers||[],imports:n.imports||[]}}function Il(n){return mf(n,io)||mf(n,_f)}function mf(n,e){return n.hasOwnProperty(e)?n[e]:null}function gf(n){return n&&(n.hasOwnProperty(kl)||n.hasOwnProperty(pC))?n[kl]:null}const io=re({\u0275prov:re}),kl=re({\u0275inj:re}),_f=re({ngInjectableDef:re}),pC=re({ngInjectorDef:re});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var V=(()=>((V=V||{})[V.Default=0]="Default",V[V.Host=1]="Host",V[V.Self=2]="Self",V[V.SkipSelf=4]="SkipSelf",V[V.Optional=8]="Optional",V))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Fl;function Ln(n){const e=Fl;return Fl=n,e}function yf(n,e,t){const i=Il(n);return i&&"root"==i.providedIn?void 0===i.value?i.value=i.factory():i.value:t&V.Optional?null:void 0!==e?e:void no(te(n),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vn(n){return{toString:n}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var qt=(()=>((qt=qt||{})[qt.OnPush=0]="OnPush",qt[qt.Default=1]="Default",qt))(),Wt=(()=>{return(n=Wt||(Wt={}))[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",Wt;var n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const gC="undefined"!=typeof globalThis&&globalThis,_C="undefined"!=typeof window&&window,yC="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,ie=gC||"undefined"!=typeof global&&global||_C||yC,Ri={},se=[],ro=re({\u0275cmp:re}),Ol=re({\u0275dir:re}),Nl=re({\u0275pipe:re}),vf=re({\u0275mod:re}),Sn=re({\u0275fac:re}),$r=re({__NG_ELEMENT_ID__:re});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let vC=0;function je(n){return Vn(()=>{const t={},i={type:n.type,providersResolver:null,decls:n.decls,vars:n.vars,factory:null,template:n.template||null,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:t,inputs:null,outputs:null,exportAs:n.exportAs||null,onPush:n.changeDetection===qt.OnPush,directiveDefs:null,pipeDefs:null,selectors:n.selectors||se,viewQuery:n.viewQuery||null,features:n.features||null,data:n.data||{},encapsulation:n.encapsulation||Wt.Emulated,id:"c",styles:n.styles||se,_:null,setInput:null,schemas:n.schemas||null,tView:null},r=n.directives,s=n.features,o=n.pipes;return i.id+=vC++,i.inputs=Cf(n.inputs,t),i.outputs=Cf(n.outputs),s&&s.forEach(a=>a(i)),i.directiveDefs=r?()=>("function"==typeof r?r():r).map(bf):null,i.pipeDefs=o?()=>("function"==typeof o?o():o).map(Df):null,i})}function bf(n){return Qe(n)||function Bn(n){return n[Ol]||null}(n)}function Df(n){return function ai(n){return n[Nl]||null}(n)}const wf={};function he(n){return Vn(()=>{const e={type:n.type,bootstrap:n.bootstrap||se,declarations:n.declarations||se,imports:n.imports||se,exports:n.exports||se,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null};return null!=n.id&&(wf[n.id]=n.type),e})}function Cf(n,e){if(null==n)return Ri;const t={};for(const i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}const I=je;function Qe(n){return n[ro]||null}function kt(n,e){const t=n[vf]||null;if(!t&&!0===e)throw new Error(`Type ${te(n)} does not have '\u0275mod' property.`);return t}const j=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function an(n){return Array.isArray(n)&&"object"==typeof n[1]}function Qt(n){return Array.isArray(n)&&!0===n[1]}function Ll(n){return 0!=(8&n.flags)}function lo(n){return 2==(2&n.flags)}function co(n){return 1==(1&n.flags)}function Zt(n){return null!==n.template}function MC(n){return 0!=(512&n[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function di(n,e){return n.hasOwnProperty(Sn)?n[Sn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xC{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yt(){return Mf}function Mf(n){return n.type.prototype.ngOnChanges&&(n.setInput=IC),TC}function TC(){const n=Af(this),e=null==n?void 0:n.current;if(e){const t=n.previous;if(t===Ri)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function IC(n,e,t,i){const r=Af(n)||function kC(n,e){return n[Sf]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n,{previous:Ri,current:null}),s=r.current||(r.current={}),o=r.previous,a=this.declaredInputs[t],l=o[a];s[a]=new xC(l&&l.currentValue,e,o===Ri),n[i]=e}Yt.ngInherit=!0;const Sf="__ngSimpleChanges__";function Af(n){return n[Sf]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ul;function we(n){return!!n.listen}const xf={createRenderer:(n,e)=>function $l(){return void 0!==Ul?Ul:"undefined"!=typeof document?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Te(n){for(;Array.isArray(n);)n=n[0];return n}function uo(n,e){return Te(e[n])}function Nt(n,e){return Te(e[n.index])}function zl(n,e){return n.data[e]}function vt(n,e){const t=e[n];return an(t)?t:t[0]}function Tf(n){return 4==(4&n[2])}function Gl(n){return 128==(128&n[2])}function Hn(n,e){return null==e?null:n[e]}function If(n){n[18]=0}function ql(n,e){n[5]+=e;let t=n,i=n[3];for(;null!==i&&(1===e&&1===t[5]||-1===e&&0===t[5]);)i[5]+=e,t=i,i=i[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const N={lFrame:Vf(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function kf(){return N.bindingsEnabled}function b(){return N.lFrame.lView}function K(){return N.lFrame.tView}function ln(n){return N.lFrame.contextLView=n,n[8]}function Oe(){let n=Ff();for(;null!==n&&64===n.type;)n=n.parent;return n}function Ff(){return N.lFrame.currentTNode}function cn(n,e){const t=N.lFrame;t.currentTNode=n,t.isParent=e}function Wl(){return N.lFrame.isParent}function Kl(){N.lFrame.isParent=!1}function ho(){return N.isInCheckNoChangesMode}function fo(n){N.isInCheckNoChangesMode=n}function ji(){return N.lFrame.bindingIndex++}function KC(n,e){const t=N.lFrame;t.bindingIndex=t.bindingRootIndex=n,Ql(e)}function Ql(n){N.lFrame.currentDirectiveIndex=n}function Zl(n){const e=N.lFrame.currentDirectiveIndex;return-1===e?null:n[e]}function Rf(){return N.lFrame.currentQueryIndex}function Yl(n){N.lFrame.currentQueryIndex=n}function ZC(n){const e=n[1];return 2===e.type?e.declTNode:1===e.type?n[6]:null}function Pf(n,e,t){if(t&V.SkipSelf){let r=e,s=n;for(;!(r=r.parent,null!==r||t&V.Host||(r=ZC(s),null===r||(s=s[15],10&r.type))););if(null===r)return!1;e=r,n=s}const i=N.lFrame=Lf();return i.currentTNode=e,i.lView=n,!0}function po(n){const e=Lf(),t=n[1];N.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Lf(){const n=N.lFrame,e=null===n?null:n.child;return null===e?Vf(n):e}function Vf(n){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return null!==n&&(n.child=e),e}function Bf(){const n=N.lFrame;return N.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}const Hf=Bf;function mo(){const n=Bf();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function rt(){return N.lFrame.selectedIndex}function jn(n){N.lFrame.selectedIndex=n}function Ce(){const n=N.lFrame;return zl(n.tView,n.selectedIndex)}function go(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){const s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=s;o&&(n.contentHooks||(n.contentHooks=[])).push(-t,o),a&&((n.contentHooks||(n.contentHooks=[])).push(t,a),(n.contentCheckHooks||(n.contentCheckHooks=[])).push(t,a)),l&&(n.viewHooks||(n.viewHooks=[])).push(-t,l),c&&((n.viewHooks||(n.viewHooks=[])).push(t,c),(n.viewCheckHooks||(n.viewCheckHooks=[])).push(t,c)),null!=u&&(n.destroyHooks||(n.destroyHooks=[])).push(t,u)}}function _o(n,e,t){$f(n,e,3,t)}function yo(n,e,t,i){(3&n[2])===t&&$f(n,e,t,i)}function Xl(n,e){let t=n[2];(3&t)===e&&(t&=2047,t+=1,n[2]=t)}function $f(n,e,t,i){const s=null!=i?i:-1,o=e.length-1;let a=0;for(let l=void 0!==i?65535&n[18]:0;l<o;l++)if("number"==typeof e[l+1]){if(a=e[l],null!=i&&a>=i)break}else e[l]<0&&(n[18]+=65536),(a<s||-1==s)&&(iE(n,t,e,l),n[18]=(4294901760&n[18])+l+2),l++}function iE(n,e,t,i){const r=t[i]<0,s=t[i+1],a=n[r?-t[i]:t[i]];if(r){if(n[2]>>11<n[18]>>16&&(3&n[2])===e){n[2]+=2048;try{s.call(a)}finally{}}}else try{s.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kr{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}}function vo(n,e,t){const i=we(n);let r=0;for(;r<t.length;){const s=t[r];if("number"==typeof s){if(0!==s)break;r++;const o=t[r++],a=t[r++],l=t[r++];i?n.setAttribute(e,a,l,o):e.setAttributeNS(o,a,l)}else{const o=s,a=t[++r];ec(o)?i&&n.setProperty(e,o,a):i?n.setAttribute(e,o,a):e.setAttribute(o,a),r++}}return r}function zf(n){return 3===n||4===n||6===n}function ec(n){return 64===n.charCodeAt(0)}function bo(n,e){if(null!==e&&0!==e.length)if(null===n||0===n.length)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){const r=e[i];"number"==typeof r?t=r:0===t||Gf(n,t,r,null,-1===t||2===t?e[++i]:null)}}return n}function Gf(n,e,t,i,r){let s=0,o=n.length;if(-1===e)o=-1;else for(;s<n.length;){const a=n[s++];if("number"==typeof a){if(a===e){o=-1;break}if(a>e){o=s-1;break}}}for(;s<n.length;){const a=n[s];if("number"==typeof a)break;if(a===t){if(null===i)return void(null!==r&&(n[s+1]=r));if(i===n[s+1])return void(n[s+2]=r)}s++,null!==i&&s++,null!==r&&s++}-1!==o&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),null!==i&&n.splice(s++,0,i),null!==r&&n.splice(s++,0,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qf(n){return-1!==n}function Ui(n){return 32767&n}function $i(n,e){let t=function lE(n){return n>>16}(n),i=e;for(;t>0;)i=i[15],t--;return i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let tc=!0;function Do(n){const e=tc;return tc=n,e}let cE=0;function Zr(n,e){const t=ic(n,e);if(-1!==t)return t;const i=e[1];i.firstCreatePass&&(n.injectorIndex=e.length,nc(i.data,n),nc(e,null),nc(i.blueprint,null));const r=wo(n,e),s=n.injectorIndex;if(qf(r)){const o=Ui(r),a=$i(r,e),l=a[1].data;for(let c=0;c<8;c++)e[s+c]=a[o+c]|l[o+c]}return e[s+8]=r,s}function nc(n,e){n.push(0,0,0,0,0,0,0,0,e)}function ic(n,e){return-1===n.injectorIndex||n.parent&&n.parent.injectorIndex===n.injectorIndex||null===e[n.injectorIndex+8]?-1:n.injectorIndex}function wo(n,e){if(n.parent&&-1!==n.parent.injectorIndex)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;null!==r;){const s=r[1],o=s.type;if(i=2===o?s.declTNode:1===o?r[6]:null,null===i)return-1;if(t++,r=r[15],-1!==i.injectorIndex)return i.injectorIndex|t<<16}return-1}function Co(n,e,t){!function uE(n,e,t){let i;"string"==typeof t?i=t.charCodeAt(0)||0:t.hasOwnProperty($r)&&(i=t[$r]),null==i&&(i=t[$r]=cE++);const r=255&i;e.data[n+(r>>5)]|=1<<r}(n,e,t)}function Qf(n,e,t){if(t&V.Optional)return n;no(e,"NodeInjector")}function Zf(n,e,t,i){if(t&V.Optional&&void 0===i&&(i=null),0==(t&(V.Self|V.Host))){const r=n[9],s=Ln(void 0);try{return r?r.get(e,i,t&V.Optional):yf(e,i,t&V.Optional)}finally{Ln(s)}}return Qf(i,e,t)}function Yf(n,e,t,i=V.Default,r){if(null!==n){const s=function pE(n){if("string"==typeof n)return n.charCodeAt(0)||0;const e=n.hasOwnProperty($r)?n[$r]:void 0;return"number"==typeof e?e>=0?255&e:hE:e}(t);if("function"==typeof s){if(!Pf(e,n,i))return i&V.Host?Qf(r,t,i):Zf(e,t,i,r);try{const o=s(i);if(null!=o||i&V.Optional)return o;no(t)}finally{Hf()}}else if("number"==typeof s){let o=null,a=ic(n,e),l=-1,c=i&V.Host?e[16][6]:null;for((-1===a||i&V.SkipSelf)&&(l=-1===a?wo(n,e):e[a+8],-1!==l&&ep(i,!1)?(o=e[1],a=Ui(l),e=$i(l,e)):a=-1);-1!==a;){const u=e[1];if(Jf(s,a,u.data)){const d=fE(a,e,t,o,i,c);if(d!==Xf)return d}l=e[a+8],-1!==l&&ep(i,e[1].data[a+8]===c)&&Jf(s,a,e)?(o=u,a=Ui(l),e=$i(l,e)):a=-1}}}return Zf(e,t,i,r)}const Xf={};function hE(){return new zi(Oe(),b())}function fE(n,e,t,i,r,s){const o=e[1],a=o.data[n+8],u=Eo(a,o,t,null==i?lo(a)&&tc:i!=o&&0!=(3&a.type),r&V.Host&&s===a);return null!==u?Yr(e,o,u,a):Xf}function Eo(n,e,t,i,r){const s=n.providerIndexes,o=e.data,a=1048575&s,l=n.directiveStart,u=s>>20,h=r?a+u:n.directiveEnd;for(let f=i?a:a+u;f<h;f++){const p=o[f];if(f<l&&t===p||f>=l&&p.type===t)return f}if(r){const f=o[l];if(f&&Zt(f)&&f.type===t)return l}return null}function Yr(n,e,t,i){let r=n[t];const s=e.data;if(function rE(n){return n instanceof Kr}(r)){const o=r;o.resolving&&function lC(n,e){const t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new M(-200,`Circular dependency in DI detected for ${n}${t}`)}(Ge(s[t]));const a=Do(o.canSeeViewProviders);o.resolving=!0;const l=o.injectImpl?Ln(o.injectImpl):null;Pf(n,i,V.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nE(n,e,t){const{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){const o=Mf(e);(t.preOrderHooks||(t.preOrderHooks=[])).push(n,o),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n,o)}r&&(t.preOrderHooks||(t.preOrderHooks=[])).push(0-n,r),s&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n,s),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n,s))}(t,s[t],e)}finally{null!==l&&Ln(l),Do(a),o.resolving=!1,Hf()}}return r}function Jf(n,e,t){return!!(t[e+(n>>5)]&1<<n)}function ep(n,e){return!(n&V.Self||n&V.Host&&e)}class zi{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Yf(this._tNode,this._lView,e,i,t)}}function Ie(n){return Vn(()=>{const e=n.prototype.constructor,t=e[Sn]||rc(e),i=Object.prototype;let r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){const s=r[Sn]||rc(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function rc(n){return pf(n)?()=>{const e=rc(H(n));return e&&e()}:di(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Wi="__parameters__";function Qi(n,e,t){return Vn(()=>{const i=function sc(n){return function(...t){if(n){const i=n(...t);for(const r in i)this[r]=i[r]}}}(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;const o=new r(...s);return a.annotation=o,a;function a(l,c,u){const d=l.hasOwnProperty(Wi)?l[Wi]:Object.defineProperty(l,Wi,{value:[]})[Wi];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),l}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class x{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=P({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rt(n,e){void 0===e&&(e=n);for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)?(e===n&&(e=n.slice(0,t)),Rt(i,e)):e!==n&&e.push(i)}return e}function un(n,e){n.forEach(t=>Array.isArray(t)?un(t,e):e(t))}function np(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Mo(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function es(n,e){const t=[];for(let i=0;i<n;i++)t.push(e);return t}function bt(n,e,t){let i=Zi(n,e);return i>=0?n[1|i]=t:(i=~i,function yE(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(1===r)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;)n[r]=n[r-2],r--;n[e]=t,n[e+1]=i}}(n,i,e,t)),i}function ac(n,e){const t=Zi(n,e);if(t>=0)return n[1|t]}function Zi(n,e){return function sp(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){const s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n,e,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ts={},cc="__NG_DI_FLAG__",Ao="ngTempTokenPath",ME=/\n/gm,ap="__source",AE=re({provide:String,useValue:re});let ns;function lp(n){const e=ns;return ns=n,e}function xE(n,e=V.Default){if(void 0===ns)throw new M(203,"");return null===ns?yf(n,void 0,e):ns.get(n,e&V.Optional?null:void 0,e)}function E(n,e=V.Default){return(function mC(){return Fl}()||xE)(H(n),e)}const xo=E;function uc(n){const e=[];for(let t=0;t<n.length;t++){const i=H(n[t]);if(Array.isArray(i)){if(0===i.length)throw new M(900,"");let r,s=V.Default;for(let o=0;o<i.length;o++){const a=i[o],l=TE(a);"number"==typeof l?-1===l?r=a.token:s|=l:r=a}e.push(E(r,s))}else e.push(E(i))}return e}function is(n,e){return n[cc]=e,n.prototype[cc]=e,n}function TE(n){return n[cc]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hi=is(Qi("Optional"),8),rs=is(Qi("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Io;function Xi(n){var e;return(null===(e=function fc(){if(void 0===Io&&(Io=null,ie.trustedTypes))try{Io=ie.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch(n){}return Io}())||void 0===e?void 0:e.createHTML(n))||n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fi{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class UE extends fi{getTypeName(){return"HTML"}}class $E extends fi{getTypeName(){return"Style"}}class zE extends fi{getTypeName(){return"Script"}}class GE extends fi{getTypeName(){return"URL"}}class qE extends fi{getTypeName(){return"ResourceURL"}}function Dt(n){return n instanceof fi?n.changingThisBreaksApplicationSecurity:n}function dn(n,e){const t=_p(n);if(null!=t&&t!==e){if("ResourceURL"===t&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${t} (see https://g.co/ng/security#xss)`)}return t===e}function _p(n){return n instanceof fi&&n.getTypeName()||null}class XE{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{const t=(new window.DOMParser).parseFromString(Xi(e),"text/html").body;return null===t?this.inertDocumentHelper.getInertBodyElement(e):(t.removeChild(t.firstChild),t)}catch(t){return null}}}class JE{constructor(e){if(this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const t=this.inertDocument.createElement("html");this.inertDocument.appendChild(t);const i=this.inertDocument.createElement("body");t.appendChild(i)}}getInertBodyElement(e){const t=this.inertDocument.createElement("template");if("content"in t)return t.innerHTML=Xi(e),t;const i=this.inertDocument.createElement("body");return i.innerHTML=Xi(e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(i),i}stripCustomNsAttrs(e){const t=e.attributes;for(let r=t.length-1;0<r;r--){const o=t.item(r).name;("xmlns:ns1"===o||0===o.indexOf("ns1:"))&&e.removeAttribute(o)}let i=e.firstChild;for(;i;)i.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(i),i=i.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const t0=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,n0=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function os(n){return(n=String(n)).match(t0)||n.match(n0)?n:"unsafe:"+n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function hn(n){const e={};for(const t of n.split(","))e[t]=!0;return e}function as(...n){const e={};for(const t of n)for(const i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}const bp=hn("area,br,col,hr,img,wbr"),Dp=hn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),wp=hn("rp,rt"),mc=as(bp,as(Dp,hn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),as(wp,hn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),as(wp,Dp)),gc=hn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),_c=hn("srcset"),Cp=as(gc,_c,hn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),hn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),r0=hn("script,style,template");class s0{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,i=!0;for(;t;)if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild)t=t.firstChild;else for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let r=this.checkClobberedElement(t,t.nextSibling);if(r){t=r;break}t=this.checkClobberedElement(t,t.parentNode)}return this.buf.join("")}startElement(e){const t=e.nodeName.toLowerCase();if(!mc.hasOwnProperty(t))return this.sanitizedSomething=!0,!r0.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);const i=e.attributes;for(let r=0;r<i.length;r++){const s=i.item(r),o=s.name,a=o.toLowerCase();if(!Cp.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=s.value;gc[a]&&(l=os(l)),_c[a]&&(n=l,l=(n=String(n)).split(",").map(e=>os(e.trim())).join(", ")),this.buf.push(" ",o,'="',Ep(l),'"')}var n;return this.buf.push(">"),!0}endElement(e){const t=e.nodeName.toLowerCase();mc.hasOwnProperty(t)&&!bp.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(Ep(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}}const o0=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,a0=/([^\#-~ |!])/g;function Ep(n){return n.replace(/&/g,"&amp;").replace(o0,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(a0,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Fo;function Mp(n,e){let t=null;try{Fo=Fo||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yp(n){const e=new JE(n);return function e0(){try{return!!(new window.DOMParser).parseFromString(Xi(""),"text/html")}catch(n){return!1}}()?new XE(e):e}(n);let i=e?String(e):"";t=Fo.getInertBodyElement(i);let r=5,s=i;do{if(0===r)throw new Error("Failed to sanitize html because the input is unstable");r--,i=s,s=t.innerHTML,t=Fo.getInertBodyElement(i)}while(i!==s);return Xi((new s0).sanitizeChildren(yc(t)||t))}finally{if(t){const i=yc(t)||t;for(;i.firstChild;)i.removeChild(i.firstChild)}}}function yc(n){return"content"in n&&function l0(n){return n.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===n.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?n.content:null}var ee=(()=>((ee=ee||{})[ee.NONE=0]="NONE",ee[ee.HTML=1]="HTML",ee[ee.STYLE=2]="STYLE",ee[ee.SCRIPT=3]="SCRIPT",ee[ee.URL=4]="URL",ee[ee.RESOURCE_URL=5]="RESOURCE_URL",ee))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Tp="__ngContext__";function Ye(n,e){n[Tp]=e}function bc(n){const e=function cs(n){return n[Tp]||null}(n);return e?Array.isArray(e)?e:e.lView:null}function wc(n){return n.ngOriginalError}function M0(n,...e){n.error(...e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $n{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),i=function E0(n){return n&&n.ngErrorLogger||M0}(e);i(this._console,"ERROR",e),t&&i(this._console,"ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&wc(e);for(;t&&wc(t);)t=wc(t);return t||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const R0=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(ie))();function fn(n){return n instanceof Function?n():n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var wt=(()=>((wt=wt||{})[wt.Important=1]="Important",wt[wt.DashCase=2]="DashCase",wt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ec(n,e){return undefined(n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function us(n){const e=n[3];return Qt(e)?e[3]:e}function Mc(n){return Vp(n[13])}function Sc(n){return Vp(n[4])}function Vp(n){for(;null!==n&&!Qt(n);)n=n[4];return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function er(n,e,t,i,r){if(null!=i){let s,o=!1;Qt(i)?s=i:an(i)&&(o=!0,i=i[0]);const a=Te(i);0===n&&null!==t?null==r?zp(e,t,a):pi(e,t,a,r||null,!0):1===n&&null!==t?pi(e,t,a,r||null,!0):2===n?function Yp(n,e,t){const i=Oo(n,e);i&&function Q0(n,e,t,i){we(n)?n.removeChild(e,t,i):e.removeChild(t)}(n,i,e,t)}(e,a,o):3===n&&e.destroyNode(a),null!=s&&function X0(n,e,t,i,r){const s=t[7];s!==Te(t)&&er(e,n,i,s,r);for(let a=10;a<t.length;a++){const l=t[a];ds(l[1],l,n,e,i,s)}}(e,n,s,t,r)}}function xc(n,e,t){if(we(n))return n.createElement(e,t);{const i=null!==t?function RC(n){const e=n.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(t):null;return null===i?n.createElement(e):n.createElementNS(i,e)}}function Hp(n,e){const t=n[9],i=t.indexOf(e),r=e[3];1024&e[2]&&(e[2]&=-1025,ql(r,-1)),t.splice(i,1)}function Tc(n,e){if(n.length<=10)return;const t=10+e,i=n[t];if(i){const r=i[17];null!==r&&r!==n&&Hp(r,i),e>0&&(n[t-1][4]=i[4]);const s=Mo(n,10+e);!function j0(n,e){ds(n,e,e[j],2,null,null),e[0]=null,e[6]=null}(i[1],i);const o=s[19];null!==o&&o.detachView(s[1]),i[3]=null,i[4]=null,i[2]&=-129}return i}function jp(n,e){if(!(256&e[2])){const t=e[j];we(t)&&t.destroyNode&&ds(n,e,t,3,null,null),function z0(n){let e=n[13];if(!e)return Ic(n[1],n);for(;e;){let t=null;if(an(e))t=e[13];else{const i=e[10];i&&(t=i)}if(!t){for(;e&&!e[4]&&e!==n;)an(e)&&Ic(e[1],e),e=e[3];null===e&&(e=n),an(e)&&Ic(e[1],e),t=e&&e[4]}e=t}}(e)}}function Ic(n,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function K0(n,e){let t;if(null!=n&&null!=(t=n.destroyHooks))for(let i=0;i<t.length;i+=2){const r=e[t[i]];if(!(r instanceof Kr)){const s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){const a=r[s[o]],l=s[o+1];try{l.call(a)}finally{}}else try{s.call(r)}finally{}}}}(n,e),function W0(n,e){const t=n.cleanup,i=e[7];let r=-1;if(null!==t)for(let s=0;s<t.length-1;s+=2)if("string"==typeof t[s]){const o=t[s+1],a="function"==typeof o?o(e):Te(e[o]),l=i[r=t[s+2]],c=t[s+3];"boolean"==typeof c?a.removeEventListener(t[s],l,c):c>=0?i[r=c]():i[r=-c].unsubscribe(),s+=2}else{const o=i[r=t[s+1]];t[s].call(o)}if(null!==i){for(let s=r+1;s<i.length;s++)i[s]();e[7]=null}}(n,e),1===e[1].type&&we(e[j])&&e[j].destroy();const t=e[17];if(null!==t&&Qt(e[3])){t!==e[3]&&Hp(t,e);const i=e[19];null!==i&&i.detachView(n)}}}function Up(n,e,t){return function $p(n,e,t){let i=e;for(;null!==i&&40&i.type;)i=(e=i).parent;if(null===i)return t[0];if(2&i.flags){const r=n.data[i.directiveStart].encapsulation;if(r===Wt.None||r===Wt.Emulated)return null}return Nt(i,t)}(n,e.parent,t)}function pi(n,e,t,i,r){we(n)?n.insertBefore(e,t,i,r):e.insertBefore(t,i,r)}function zp(n,e,t){we(n)?n.appendChild(e,t):e.appendChild(t)}function Gp(n,e,t,i,r){null!==i?pi(n,e,t,i,r):zp(n,e,t)}function Oo(n,e){return we(n)?n.parentNode(e):e.parentNode}function qp(n,e,t){return Kp(n,e,t)}let Kp=function Wp(n,e,t){return 40&n.type?Nt(n,t):null};function No(n,e,t,i){const r=Up(n,i,e),s=e[j],a=qp(i.parent||e[6],i,e);if(null!=r)if(Array.isArray(t))for(let l=0;l<t.length;l++)Gp(s,r,t[l],a,!1);else Gp(s,r,t,a,!1)}function Ro(n,e){if(null!==e){const t=e.type;if(3&t)return Nt(e,n);if(4&t)return Fc(-1,n[e.index]);if(8&t){const i=e.child;if(null!==i)return Ro(n,i);{const r=n[e.index];return Qt(r)?Fc(-1,r):Te(r)}}if(32&t)return Ec(e,n)()||Te(n[e.index]);{const i=Zp(n,e);return null!==i?Array.isArray(i)?i[0]:Ro(us(n[16]),i):Ro(n,e.next)}}return null}function Zp(n,e){return null!==e?n[16][6].projection[e.projection]:null}function Fc(n,e){const t=10+n+1;if(t<e.length){const i=e[t],r=i[1].firstChild;if(null!==r)return Ro(i,r)}return e[7]}function Oc(n,e,t,i,r,s,o){for(;null!=t;){const a=i[t.index],l=t.type;if(o&&0===e&&(a&&Ye(Te(a),i),t.flags|=4),64!=(64&t.flags))if(8&l)Oc(n,e,t.child,i,r,s,!1),er(e,n,r,a,s);else if(32&l){const c=Ec(t,i);let u;for(;u=c();)er(e,n,r,u,s);er(e,n,r,a,s)}else 16&l?Xp(n,e,i,t,r,s):er(e,n,r,a,s);t=o?t.projectionNext:t.next}}function ds(n,e,t,i,r,s){Oc(t,i,n.firstChild,e,r,s,!1)}function Xp(n,e,t,i,r,s){const o=t[16],l=o[6].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++)er(e,n,r,l[c],s);else Oc(n,e,l,o[3],r,s,!0)}function Jp(n,e,t){we(n)?n.setAttribute(e,"style",t):e.style.cssText=t}function Nc(n,e,t){we(n)?""===t?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t):e.className=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function em(n,e,t){let i=n.length;for(;;){const r=n.indexOf(e,t);if(-1===r)return r;if(0===r||n.charCodeAt(r-1)<=32){const s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tm="ng-template";function eM(n,e,t){let i=0;for(;i<n.length;){let r=n[i++];if(t&&"class"===r){if(r=n[i],-1!==em(r.toLowerCase(),e,0))return!0}else if(1===r){for(;i<n.length&&"string"==typeof(r=n[i++]);)if(r.toLowerCase()===e)return!0;return!1}}return!1}function nm(n){return 4===n.type&&n.value!==tm}function tM(n,e,t){return e===(4!==n.type||t?n.value:tm)}function nM(n,e,t){let i=4;const r=n.attrs||[],s=function sM(n){for(let e=0;e<n.length;e++)if(zf(n[e]))return e;return n.length}(r);let o=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!o)if(4&i){if(i=2|1&i,""!==l&&!tM(n,l,t)||""===l&&1===e.length){if(Xt(i))return!1;o=!0}}else{const c=8&i?l:e[++a];if(8&i&&null!==n.attrs){if(!eM(n.attrs,c,t)){if(Xt(i))return!1;o=!0}continue}const d=iM(8&i?"class":l,r,nm(n),t);if(-1===d){if(Xt(i))return!1;o=!0;continue}if(""!==c){let h;h=d>s?"":r[d+1].toLowerCase();const f=8&i?h:null;if(f&&-1!==em(f,c,0)||2&i&&c!==h){if(Xt(i))return!1;o=!0}}}}else{if(!o&&!Xt(i)&&!Xt(l))return!1;if(o&&Xt(l))continue;o=!1,i=l|1&i}}return Xt(i)||o}function Xt(n){return 0==(1&n)}function iM(n,e,t,i){if(null===e)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){const o=e[r];if(o===n)return r;if(3===o||6===o)s=!0;else{if(1===o||2===o){let a=e[++r];for(;"string"==typeof a;)a=e[++r];continue}if(4===o)break;if(0===o){r+=4;continue}}r+=s?1:2}return-1}return function oM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){const i=n[t];if("number"==typeof i)return-1;if(i===e)return t;t++}return-1}(e,n)}function im(n,e,t=!1){for(let i=0;i<e.length;i++)if(nM(n,e[i],t))return!0;return!1}function aM(n,e){e:for(let t=0;t<e.length;t++){const i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function rm(n,e){return n?":not("+e.trim()+")":e}function lM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if("string"==typeof o)if(2&i){const a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else 8&i?r+="."+o:4&i&&(r+=" "+o);else""!==r&&!Xt(o)&&(e+=rm(s,r),r=""),i=o,s=s||!Xt(i);t++}return""!==r&&(e+=rm(s,r)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const L={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xe(n){sm(K(),b(),rt()+n,ho())}function sm(n,e,t,i){if(!i)if(3==(3&e[2])){const s=n.preOrderCheckHooks;null!==s&&_o(e,s,t)}else{const s=n.preOrderHooks;null!==s&&yo(e,s,0,t)}jn(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Po(n,e){return n<<17|e<<2}function Jt(n){return n>>17&32767}function Rc(n){return 2|n}function Tn(n){return(131068&n)>>2}function Pc(n,e){return-131069&n|e<<2}function Lc(n){return 1|n}function gm(n,e){const t=n.contentQueries;if(null!==t)for(let i=0;i<t.length;i+=2){const r=t[i],s=t[i+1];if(-1!==s){const o=n.data[s];Yl(r),o.contentQueries(2,e[s],s)}}}function hs(n,e,t,i,r,s,o,a,l,c){const u=e.blueprint.slice();return u[0]=r,u[2]=140|i,If(u),u[3]=u[15]=n,u[8]=t,u[10]=o||n&&n[10],u[j]=a||n&&n[j],u[12]=l||n&&n[12]||null,u[9]=c||n&&n[9]||null,u[6]=s,u[16]=2==e.type?n[16]:u,u}function tr(n,e,t,i,r){let s=n.data[e];if(null===s)s=function qc(n,e,t,i,r){const s=Ff(),o=Wl(),l=n.data[e]=function SM(n,e,t,i,r,s){return{type:t,index:i,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,o?s:s&&s.parent,t,e,i,r);return null===n.firstChild&&(n.firstChild=l),null!==s&&(o?null==s.child&&null!==l.parent&&(s.child=l):null===s.next&&(s.next=l)),l}(n,e,t,i,r),function WC(){return N.lFrame.inI18n}()&&(s.flags|=64);else if(64&s.type){s.type=t,s.value=i,s.attrs=r;const o=function Wr(){const n=N.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}();s.injectorIndex=null===o?-1:o.injectorIndex}return cn(s,!0),s}function nr(n,e,t,i){if(0===t)return-1;const r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function fs(n,e,t){po(e);try{const i=n.viewQuery;null!==i&&tu(1,i,t);const r=n.template;null!==r&&_m(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&gm(n,e),n.staticViewQueries&&tu(2,n.viewQuery,t);const s=n.components;null!==s&&function CM(n,e){for(let t=0;t<e.length;t++)zM(n,e[t])}(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[2]&=-5,mo()}}function ir(n,e,t,i){const r=e[2];if(256==(256&r))return;po(e);const s=ho();try{If(e),function Of(n){return N.lFrame.bindingIndex=n}(n.bindingStartIndex),null!==t&&_m(n,e,t,2,i);const o=3==(3&r);if(!s)if(o){const c=n.preOrderCheckHooks;null!==c&&_o(e,c,null)}else{const c=n.preOrderHooks;null!==c&&yo(e,c,0,null),Xl(e,0)}if(function UM(n){for(let e=Mc(n);null!==e;e=Sc(e)){if(!e[2])continue;const t=e[9];for(let i=0;i<t.length;i++){const r=t[i],s=r[3];0==(1024&r[2])&&ql(s,1),r[2]|=1024}}}(e),function jM(n){for(let e=Mc(n);null!==e;e=Sc(e))for(let t=10;t<e.length;t++){const i=e[t],r=i[1];Gl(i)&&ir(r,i,r.template,i[8])}}(e),null!==n.contentQueries&&gm(n,e),!s)if(o){const c=n.contentCheckHooks;null!==c&&_o(e,c)}else{const c=n.contentHooks;null!==c&&yo(e,c,1),Xl(e,1)}!function DM(n,e){const t=n.hostBindingOpCodes;if(null!==t)try{for(let i=0;i<t.length;i++){const r=t[i];if(r<0)jn(~r);else{const s=r,o=t[++i],a=t[++i];KC(o,s),a(2,e[s])}}}finally{jn(-1)}}(n,e);const a=n.components;null!==a&&function wM(n,e){for(let t=0;t<e.length;t++)$M(n,e[t])}(e,a);const l=n.viewQuery;if(null!==l&&tu(2,l,i),!s)if(o){const c=n.viewCheckHooks;null!==c&&_o(e,c)}else{const c=n.viewHooks;null!==c&&yo(e,c,2),Xl(e,2)}!0===n.firstUpdatePass&&(n.firstUpdatePass=!1),s||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,ql(e[3],-1))}finally{mo()}}function EM(n,e,t,i){const r=e[10],s=!ho(),o=Tf(e);try{s&&!o&&r.begin&&r.begin(),o&&fs(n,e,i),ir(n,e,t,i)}finally{s&&!o&&r.end&&r.end()}}function _m(n,e,t,i,r){const s=rt(),o=2&i;try{jn(-1),o&&e.length>20&&sm(n,e,20,ho()),t(i,r)}finally{jn(s)}}function Wc(n,e,t){!kf()||(function OM(n,e,t,i){const r=t.directiveStart,s=t.directiveEnd;n.firstCreatePass||Zr(t,e),Ye(i,e);const o=t.initialInputs;for(let a=r;a<s;a++){const l=n.data[a],c=Zt(l);c&&VM(e,t,l);const u=Yr(e,n,a,t);Ye(u,e),null!==o&&BM(0,a-r,u,l,0,o),c&&(vt(t.index,e)[8]=u)}}(n,e,t,Nt(t,e)),128==(128&t.flags)&&function NM(n,e,t){const i=t.directiveStart,r=t.directiveEnd,o=t.index,a=function QC(){return N.lFrame.currentDirectiveIndex}();try{jn(o);for(let l=i;l<r;l++){const c=n.data[l],u=e[l];Ql(l),(null!==c.hostBindings||0!==c.hostVars||null!==c.hostAttrs)&&Sm(c,u)}}finally{jn(-1),Ql(a)}}(n,e,t))}function Kc(n,e,t=Nt){const i=e.localNames;if(null!==i){let r=e.index+1;for(let s=0;s<i.length;s+=2){const o=i[s+1],a=-1===o?t(e,n):n[o];n[r++]=a}}}function vm(n){const e=n.tView;return null===e||e.incompleteFirstPass?n.tView=Bo(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts):e}function Bo(n,e,t,i,r,s,o,a,l,c){const u=20+i,d=u+r,h=function MM(n,e){const t=[];for(let i=0;i<e;i++)t.push(i<n?null:L);return t}(u,d),f="function"==typeof c?c():c;return h[1]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:l,consts:f,incompleteFirstPass:!1}}function wm(n,e,t,i){const r=Fm(e);null===t?r.push(i):(r.push(t),n.firstCreatePass&&Om(n).push(i,r.length-1))}function Cm(n,e,t){for(let i in n)if(n.hasOwnProperty(i)){const r=n[i];(t=null===t?{}:t).hasOwnProperty(i)?t[i].push(e,r):t[i]=[e,r]}return t}function Ct(n,e,t,i,r,s,o,a){const l=Nt(e,t);let u,c=e.inputs;!a&&null!=c&&(u=c[i])?(Pm(n,t,u,i,r),lo(e)&&function TM(n,e){const t=vt(e,n);16&t[2]||(t[2]|=64)}(t,e.index)):3&e.type&&(i=function xM(n){return"class"===n?"className":"for"===n?"htmlFor":"formaction"===n?"formAction":"innerHtml"===n?"innerHTML":"readonly"===n?"readOnly":"tabindex"===n?"tabIndex":n}(i),r=null!=o?o(r,e.value||"",i):r,we(s)?s.setProperty(l,i,r):ec(i)||(l.setProperty?l.setProperty(i,r):l[i]=r))}function Qc(n,e,t,i){let r=!1;if(kf()){const s=function RM(n,e,t){const i=n.directiveRegistry;let r=null;if(i)for(let s=0;s<i.length;s++){const o=i[s];im(t,o.selectors,!1)&&(r||(r=[]),Co(Zr(t,e),n,o.type),Zt(o)?(Am(n,t),r.unshift(o)):r.push(o))}return r}(n,e,t),o=null===i?null:{"":-1};if(null!==s){r=!0,xm(t,n.data.length,s.length);for(let u=0;u<s.length;u++){const d=s[u];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,c=nr(n,e,s.length,null);for(let u=0;u<s.length;u++){const d=s[u];t.mergedAttrs=bo(t.mergedAttrs,d.hostAttrs),Tm(n,t,e,c,d),LM(c,d,o),null!==d.contentQueries&&(t.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(t.flags|=128);const h=d.type.prototype;!a&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t.index),a=!0),!l&&(h.ngOnChanges||h.ngDoCheck)&&((n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t.index),l=!0),c++}!function AM(n,e){const i=e.directiveEnd,r=n.data,s=e.attrs,o=[];let a=null,l=null;for(let c=e.directiveStart;c<i;c++){const u=r[c],d=u.inputs,h=null===s||nm(e)?null:HM(d,s);o.push(h),a=Cm(d,c,a),l=Cm(u.outputs,c,l)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=a,e.outputs=l}(n,t)}o&&function PM(n,e,t){if(e){const i=n.localNames=[];for(let r=0;r<e.length;r+=2){const s=t[e[r+1]];if(null==s)throw new M(-301,!1);i.push(e[r],s)}}}(t,i,o)}return t.mergedAttrs=bo(t.mergedAttrs,t.attrs),r}function Mm(n,e,t,i,r,s){const o=s.hostBindings;if(o){let a=n.hostBindingOpCodes;null===a&&(a=n.hostBindingOpCodes=[]);const l=~e.index;(function FM(n){let e=n.length;for(;e>0;){const t=n[--e];if("number"==typeof t&&t<0)return t}return 0})(a)!=l&&a.push(l),a.push(i,r,o)}}function Sm(n,e){null!==n.hostBindings&&n.hostBindings(1,e)}function Am(n,e){e.flags|=2,(n.components||(n.components=[])).push(e.index)}function LM(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Zt(e)&&(t[""]=n)}}function xm(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Tm(n,e,t,i,r){n.data[i]=r;const s=r.factory||(r.factory=di(r.type)),o=new Kr(s,Zt(r),null);n.blueprint[i]=o,t[i]=o,Mm(n,e,0,i,nr(n,t,r.hostVars,L),r)}function VM(n,e,t){const i=Nt(e,n),r=vm(t),s=n[10],o=Ho(n,hs(n,r,null,t.onPush?64:16,i,e,s,s.createRenderer(i,t),null,null));n[e.index]=o}function pn(n,e,t,i,r,s){const o=Nt(n,e);!function Zc(n,e,t,i,r,s,o){if(null==s)we(n)?n.removeAttribute(e,r,t):e.removeAttribute(r);else{const a=null==o?R(s):o(s,i||"",r);we(n)?n.setAttribute(e,r,a,t):t?e.setAttributeNS(t,r,a):e.setAttribute(r,a)}}(e[j],o,s,n.value,t,i,r)}function BM(n,e,t,i,r,s){const o=s[e];if(null!==o){const a=i.setInput;for(let l=0;l<o.length;){const c=o[l++],u=o[l++],d=o[l++];null!==a?i.setInput(t,d,c,u):t[u]=d}}}function HM(n,e){let t=null,i=0;for(;i<e.length;){const r=e[i];if(0!==r)if(5!==r){if("number"==typeof r)break;n.hasOwnProperty(r)&&(null===t&&(t=[]),t.push(r,n[r],e[i+1])),i+=2}else i+=2;else i+=4}return t}function Im(n,e,t,i){return new Array(n,!0,!1,e,null,0,i,t,null,null)}function $M(n,e){const t=vt(e,n);if(Gl(t)){const i=t[1];80&t[2]?ir(i,t,i.template,t[8]):t[5]>0&&Yc(t)}}function Yc(n){for(let i=Mc(n);null!==i;i=Sc(i))for(let r=10;r<i.length;r++){const s=i[r];if(1024&s[2]){const o=s[1];ir(o,s,o.template,s[8])}else s[5]>0&&Yc(s)}const t=n[1].components;if(null!==t)for(let i=0;i<t.length;i++){const r=vt(t[i],n);Gl(r)&&r[5]>0&&Yc(r)}}function zM(n,e){const t=vt(e,n),i=t[1];(function GM(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])})(i,t),fs(i,t,t[8])}function Ho(n,e){return n[13]?n[14][4]=e:n[13]=e,n[14]=e,e}function Xc(n){for(;n;){n[2]|=64;const e=us(n);if(MC(n)&&!e)return n;n=e}return null}function eu(n,e,t){const i=e[10];i.begin&&i.begin();try{ir(n,e,n.template,t)}catch(r){throw Rm(e,r),r}finally{i.end&&i.end()}}function km(n){!function Jc(n){for(let e=0;e<n.components.length;e++){const t=n.components[e],i=bc(t),r=i[1];EM(r,i,r.template,t)}}(n[8])}function tu(n,e,t){Yl(0),e(n,t)}const QM=(()=>Promise.resolve(null))();function Fm(n){return n[7]||(n[7]=[])}function Om(n){return n.cleanup||(n.cleanup=[])}function Nm(n,e,t){return(null===n||Zt(n))&&(t=function VC(n){for(;Array.isArray(n);){if("object"==typeof n[1])return n;n=n[0]}return null}(t[e.index])),t[j]}function Rm(n,e){const t=n[9],i=t?t.get($n,null):null;i&&i.handleError(e)}function Pm(n,e,t,i,r){for(let s=0;s<t.length;){const o=t[s++],a=t[s++],l=e[o],c=n.data[o];null!==c.setInput?c.setInput(l,r,i,a):l[a]=r}}function In(n,e,t){const i=uo(e,n);!function Bp(n,e,t){we(n)?n.setValue(e,t):e.textContent=t}(n[j],i,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jo(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(null!==e)for(let o=0;o<e.length;o++){const a=e[o];"number"==typeof a?s=a:1==s?r=xl(r,a):2==s&&(i=xl(i,a+": "+e[++o]+";"))}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nu=new x("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lm{get(e,t=ts){if(t===ts){const i=new Error(`NullInjectorError: No provider for ${te(e)}!`);throw i.name="NullInjectorError",i}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const iu=new x("Set Injector scope."),ps={},XM={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ru;function Vm(){return void 0===ru&&(ru=new Lm),ru}function Bm(n,e=null,t=null,i){const r=Hm(n,e,t,i);return r._resolveInjectorDefTypes(),r}function Hm(n,e=null,t=null,i){return new JM(n,t,e||Vm(),i)}class JM{constructor(e,t,i,r=null){this.parent=i,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];t&&un(t,a=>this.processProvider(a,e,t)),un([e],a=>this.processInjectorType(a,[],s)),this.records.set(nu,rr(void 0,this));const o=this.records.get(iu);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof e?null:te(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=ts,i=V.Default){this.assertNotDestroyed();const r=lp(this),s=Ln(void 0);try{if(!(i&V.SkipSelf)){let a=this.records.get(e);if(void 0===a){const l=function aS(n){return"function"==typeof n||"object"==typeof n&&n instanceof x}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&Il(e);a=l&&this.injectableDefInScope(l)?rr(su(e),ps):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}return(i&V.Self?Vm():this.parent).get(e,t=i&V.Optional&&t===ts?null:t)}catch(o){if("NullInjectorError"===o.name){if((o[Ao]=o[Ao]||[]).unshift(te(e)),r)throw o;return function IE(n,e,t,i){const r=n[Ao];throw e[ap]&&r.unshift(e[ap]),n.message=function kE(n,e,t,i=null){n=n&&"\n"===n.charAt(0)&&"\u0275"==n.charAt(1)?n.substr(2):n;let r=te(e);if(Array.isArray(e))r=e.map(te).join(" -> ");else if("object"==typeof e){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+("string"==typeof a?JSON.stringify(a):te(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(ME,"\n  ")}`}("\n"+n.message,r,t,i),n.ngTokenPath=r,n[Ao]=null,n}(o,e,"R3InjectorError",this.source)}throw o}finally{Ln(s),lp(r)}}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((i,r)=>e.push(te(r))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new M(205,!1)}processInjectorType(e,t,i){if(!(e=H(e)))return!1;let r=gf(e);const s=null==r&&e.ngModule||void 0,o=void 0===s?e:s,a=-1!==i.indexOf(o);if(void 0!==s&&(r=gf(s)),null==r)return!1;if(null!=r.imports&&!a){let u;i.push(o);try{un(r.imports,d=>{this.processInjectorType(d,t,i)&&(void 0===u&&(u=[]),u.push(d))})}finally{}if(void 0!==u)for(let d=0;d<u.length;d++){const{ngModule:h,providers:f}=u[d];un(f,p=>this.processProvider(p,h,f||se))}}this.injectorDefTypes.add(o);const l=di(o)||(()=>new o);this.records.set(o,rr(l,ps));const c=r.providers;if(null!=c&&!a){const u=e;un(c,d=>this.processProvider(d,u,c))}return void 0!==s&&void 0!==e.providers}processProvider(e,t,i){let r=sr(e=H(e))?e:H(e&&e.provide);const s=function tS(n,e,t){return Um(n)?rr(void 0,n.useValue):rr(jm(n),ps)}(e);if(sr(e)||!0!==e.multi)this.records.get(r);else{let o=this.records.get(r);o||(o=rr(void 0,ps,!0),o.factory=()=>uc(o.multi),this.records.set(r,o)),r=e,o.multi.push(e)}this.records.set(r,s)}hydrate(e,t){return t.value===ps&&(t.value=XM,t.value=t.factory()),"object"==typeof t.value&&t.value&&function oS(n){return null!==n&&"object"==typeof n&&"function"==typeof n.ngOnDestroy}(t.value)&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;const t=H(e.providedIn);return"string"==typeof t?"any"===t||t===this.scope:this.injectorDefTypes.has(t)}}function su(n){const e=Il(n),t=null!==e?e.factory:di(n);if(null!==t)return t;if(n instanceof x)throw new M(204,!1);if(n instanceof Function)return function eS(n){const e=n.length;if(e>0)throw es(e,"?"),new M(204,!1);const t=function hC(n){const e=n&&(n[io]||n[_f]);if(e){const t=function fC(n){if(n.hasOwnProperty("name"))return n.name;const e=(""+n).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(n);return console.warn(`DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${t}" class.`),e}return null}(n);return null!==t?()=>t.factory(n):()=>new n}(n);throw new M(204,!1)}function jm(n,e,t){let i;if(sr(n)){const r=H(n);return di(r)||su(r)}if(Um(n))i=()=>H(n.useValue);else if(function iS(n){return!(!n||!n.useFactory)}(n))i=()=>n.useFactory(...uc(n.deps||[]));else if(function nS(n){return!(!n||!n.useExisting)}(n))i=()=>E(H(n.useExisting));else{const r=H(n&&(n.useClass||n.provide));if(!function sS(n){return!!n.deps}(n))return di(r)||su(r);i=()=>new r(...uc(n.deps))}return i}function rr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Um(n){return null!==n&&"object"==typeof n&&AE in n}function sr(n){return"function"==typeof n}let Pt=(()=>{class n{static create(t,i){var r;if(Array.isArray(t))return Bm({name:""},i,t,"");{const s=null!==(r=t.name)&&void 0!==r?r:"";return Bm({name:s},t.parent,t.providers,s)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return n.THROW_IF_NOT_FOUND=ts,n.NULL=new Lm,n.\u0275prov=P({token:n,providedIn:"any",factory:()=>E(nu)}),n.__NG_ELEMENT_ID__=-1,n})();function mS(n,e){go(bc(n)[1],Oe())}function B(n){let e=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eg(n){return Object.getPrototypeOf(n.prototype).constructor}(n.type),t=!0;const i=[n];for(;e;){let r;if(Zt(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new M(903,"");r=e.\u0275dir}if(r){if(t){i.push(r);const o=n;o.inputs=lu(n.inputs),o.declaredInputs=lu(n.declaredInputs),o.outputs=lu(n.outputs);const a=r.hostBindings;a&&vS(n,a);const l=r.viewQuery,c=r.contentQueries;if(l&&_S(n,l),c&&yS(n,c),Al(n.inputs,r.inputs),Al(n.declaredInputs,r.declaredInputs),Al(n.outputs,r.outputs),Zt(r)&&r.data.animation){const u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}const s=r.features;if(s)for(let o=0;o<s.length;o++){const a=s[o];a&&a.ngInherit&&a(n),a===B&&(t=!1)}}e=Object.getPrototypeOf(e)}!function gS(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){const r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=bo(r.hostAttrs,t=bo(t,r.hostAttrs))}}(i)}function lu(n){return n===Ri?{}:n===se?[]:n}function _S(n,e){const t=n.viewQuery;n.viewQuery=t?(i,r)=>{e(i,r),t(i,r)}:e}function yS(n,e){const t=n.contentQueries;n.contentQueries=t?(i,r,s)=>{e(i,r,s),t(i,r,s)}:e}function vS(n,e){const t=n.hostBindings;n.hostBindings=t?(i,r)=>{e(i,r),t(i,r)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Uo=null;function or(){if(!Uo){const n=ie.Symbol;if(n&&n.iterator)Uo=n.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const i=e[t];"entries"!==i&&"size"!==i&&Map.prototype[i]===Map.prototype.entries&&(Uo=i)}}}return Uo}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ms(n){return!!function cu(n){return null!==n&&("function"==typeof n||"object"==typeof n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)&&(Array.isArray(n)||!(n instanceof Map)&&or()in n)}function Je(n,e,t){return!Object.is(n[e],t)&&(n[e]=t,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $e(n,e,t,i){const r=b();return Je(r,ji(),e)&&(K(),pn(Ce(),r,n,e,t,i)),$e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qn(n,e,t,i,r,s,o,a){const l=b(),c=K(),u=n+20,d=c.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function SS(n,e,t,i,r,s,o,a,l){const c=e.consts,u=tr(e,n,4,o||null,Hn(c,a));Qc(e,t,u,Hn(c,l)),go(e,u);const d=u.tViews=Bo(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c);return null!==e.queries&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}(u,c,l,e,t,i,r,s,o):c.data[u];cn(d,!1);const h=l[j].createComment("");No(c,l,h,d),Ye(h,l),Ho(l,l[u]=Im(h,l,h,d)),co(d)&&Wc(c,l,d),null!=o&&Kc(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gn(n){return function Hi(n,e){return n[e]}(function qC(){return N.lFrame.contextLView}(),20+n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function g(n,e=V.Default){const t=b();return null===t?E(n,e):Yf(Oe(),t,H(n),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function et(n,e,t){const i=b();return Je(i,ji(),e)&&Ct(K(),Ce(),i,n,e,i[j],t,!1),et}function pu(n,e,t,i,r){const o=r?"class":"style";Pm(n,t,e.inputs[o],o,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(n,e,t,i){const r=b(),s=K(),o=20+n,a=r[j],l=r[o]=xc(a,e,function tE(){return N.lFrame.currentNamespace}()),c=s.firstCreatePass?function KS(n,e,t,i,r,s,o){const a=e.consts,c=tr(e,n,2,r,Hn(a,s));return Qc(e,t,c,Hn(a,o)),null!==c.attrs&&jo(c,c.attrs,!1),null!==c.mergedAttrs&&jo(c,c.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,c),c}(o,s,r,0,e,t,i):s.data[o];cn(c,!0);const u=c.mergedAttrs;null!==u&&vo(a,l,u);const d=c.classes;null!==d&&Nc(a,l,d);const h=c.styles;return null!==h&&Jp(a,l,h),64!=(64&c.flags)&&No(s,r,l,c),0===function jC(){return N.lFrame.elementDepthCount}()&&Ye(l,r),function UC(){N.lFrame.elementDepthCount++}(),co(c)&&(Wc(s,r,c),function ym(n,e,t){if(Ll(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const o=n.data[s];o.contentQueries&&o.contentQueries(1,t[s],s)}}}(s,c,r)),null!==i&&Kc(r,c),$}function X(){let n=Oe();Wl()?Kl():(n=n.parent,cn(n,!1));const e=n;!function $C(){N.lFrame.elementDepthCount--}();const t=K();return t.firstCreatePass&&(go(t,n),Ll(n)&&t.queries.elementEnd(n)),null!=e.classesWithoutHost&&function oE(n){return 0!=(16&n.flags)}(e)&&pu(t,e,b(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function aE(n){return 0!=(32&n.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&pu(t,e,b(),e.stylesWithoutHost,!1),X}function Vt(n,e,t,i){return $(n,e,t,i),X(),Vt}function Go(){return b()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qo(n){return!!n&&"function"==typeof n.then}const wg=function Dg(n){return!!n&&"function"==typeof n.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ge(n,e,t,i){const r=b(),s=K(),o=Oe();return Cg(s,r,r[j],o,n,e,!!t,i),ge}function _u(n,e){const t=Oe(),i=b(),r=K();return Cg(r,i,Nm(Zl(r.data),t,i),t,n,e,!1),_u}function Cg(n,e,t,i,r,s,o,a){const l=co(i),u=n.firstCreatePass&&Om(n),d=e[8],h=Fm(e);let f=!0;if(3&i.type||a){const y=Nt(i,e),v=a?a(y):y,_=h.length,D=a?A=>a(Te(A[i.index])):i.index;if(we(t)){let A=null;if(!a&&l&&(A=function ZS(n,e,t,i){const r=n.cleanup;if(null!=r)for(let s=0;s<r.length-1;s+=2){const o=r[s];if(o===t&&r[s+1]===i){const a=e[7],l=r[s+2];return a.length>l?a[l]:null}"string"==typeof o&&(s+=2)}return null}(n,e,r,i.index)),null!==A)(A.__ngLastListenerFn__||A).__ngNextListenerFn__=s,A.__ngLastListenerFn__=s,f=!1;else{s=yu(i,e,d,s,!1);const z=t.listen(v,r,s);h.push(s,z),u&&u.push(r,D,_,_+1)}}else s=yu(i,e,d,s,!0),v.addEventListener(r,s,o),h.push(s),u&&u.push(r,D,_,o)}else s=yu(i,e,d,s,!1);const p=i.outputs;let m;if(f&&null!==p&&(m=p[r])){const y=m.length;if(y)for(let v=0;v<y;v+=2){const _e=e[m[v]][m[v+1]].subscribe(s),be=h.length;h.push(s,_e),u&&u.push(r,i.index,be,-(be+1))}}}function Eg(n,e,t,i){try{return!1!==t(i)}catch(r){return Rm(n,r),!1}}function yu(n,e,t,i,r){return function s(o){if(o===Function)return i;const a=2&n.flags?vt(n.index,e):e;0==(32&e[2])&&Xc(a);let l=Eg(e,0,i,o),c=s.__ngNextListenerFn__;for(;c;)l=Eg(e,0,c,o)&&l,c=c.__ngNextListenerFn__;return r&&!1===l&&(o.preventDefault(),o.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _r(n=1){return function YC(n){return(N.lFrame.contextLView=function XC(n,e){for(;n>0;)e=e[15],n--;return e}(n,N.lFrame.contextLView))[8]}(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function YS(n,e){let t=null;const i=function rM(n){const e=n.attrs;if(null!=e){const t=e.indexOf(5);if(0==(1&t))return e[t+1]}return null}(n);for(let r=0;r<e.length;r++){const s=e[r];if("*"!==s){if(null===i?im(n,s,!0):aM(i,s))return r}else t=r}return t}function ot(n){const e=b()[16][6];if(!e.projection){const i=e.projection=es(n?n.length:1,null),r=i.slice();let s=e.child;for(;null!==s;){const o=n?YS(s,n):0;null!==o&&(r[o]?r[o].projectionNext=s:i[o]=s,r[o]=s),s=s.next}}}function ye(n,e=0,t){const i=b(),r=K(),s=tr(r,20+n,16,null,t||null);null===s.projection&&(s.projection=e),Kl(),64!=(64&s.flags)&&function Y0(n,e,t){Xp(e[j],0,e,t,Up(n,t,e),qp(t.parent||e[6],t,e))}(r,i,s)}function Ng(n,e,t,i,r){const s=n[t+1],o=null===e;let a=i?Jt(s):Tn(s),l=!1;for(;0!==a&&(!1===l||o);){const u=n[a+1];eA(n[a],e)&&(l=!0,n[a+1]=i?Lc(u):Rc(u)),a=i?Jt(u):Tn(u)}l&&(n[t+1]=i?Rc(s):Lc(s))}function eA(n,e){return null===n||null==e||(Array.isArray(n)?n[1]:n)===e||!(!Array.isArray(n)||"string"!=typeof e)&&Zi(n,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vr(n,e,t){return tn(n,e,t,!1),vr}function Ee(n,e){return tn(n,e,null,!0),Ee}function tn(n,e,t,i){const r=b(),s=K(),o=function xn(n){const e=N.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}(2);s.firstUpdatePass&&function Ug(n,e,t,i){const r=n.data;if(null===r[t+1]){const s=r[rt()],o=function jg(n,e){return e>=n.expandoStartIndex}(n,t);(function qg(n,e){return 0!=(n.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(s,i)&&null===e&&!o&&(e=!1),e=function cA(n,e,t,i){const r=Zl(n);let s=i?e.residualClasses:e.residualStyles;if(null===r)0===(i?e.classBindings:e.styleBindings)&&(t=_s(t=bu(null,n,e,t,i),e.attrs,i),s=null);else{const o=e.directiveStylingLast;if(-1===o||n[o]!==r)if(t=bu(r,n,e,t,i),null===s){let l=function uA(n,e,t){const i=t?e.classBindings:e.styleBindings;if(0!==Tn(i))return n[Jt(i)]}(n,e,i);void 0!==l&&Array.isArray(l)&&(l=bu(null,n,e,l[1],i),l=_s(l,e.attrs,i),function dA(n,e,t,i){n[Jt(t?e.classBindings:e.styleBindings)]=i}(n,e,i,l))}else s=function hA(n,e,t){let i;const r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++)i=_s(i,n[s].hostAttrs,t);return _s(i,e.attrs,t)}(n,e,i)}return void 0!==s&&(i?e.residualClasses=s:e.residualStyles=s),t}(r,s,e,i),function XS(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Jt(o),l=Tn(o);n[i]=t;let u,c=!1;if(Array.isArray(t)){const d=t;u=d[1],(null===u||Zi(d,u)>0)&&(c=!0)}else u=t;if(r)if(0!==l){const h=Jt(n[a+1]);n[i+1]=Po(h,a),0!==h&&(n[h+1]=Pc(n[h+1],i)),n[a+1]=function dM(n,e){return 131071&n|e<<17}(n[a+1],i)}else n[i+1]=Po(a,0),0!==a&&(n[a+1]=Pc(n[a+1],i)),a=i;else n[i+1]=Po(l,0),0===a?a=i:n[l+1]=Pc(n[l+1],i),l=i;c&&(n[i+1]=Rc(n[i+1])),Ng(n,u,i,!0),Ng(n,u,i,!1),function JS(n,e,t,i,r){const s=r?n.residualClasses:n.residualStyles;null!=s&&"string"==typeof e&&Zi(s,e)>=0&&(t[i+1]=Lc(t[i+1]))}(e,u,n,i,s),o=Po(a,l),s?e.classBindings=o:e.styleBindings=o}(r,s,e,t,o,i)}}(s,n,o,i),e!==L&&Je(r,o,e)&&function zg(n,e,t,i,r,s,o,a){if(!(3&e.type))return;const l=n.data,c=l[a+1];Wo(function lm(n){return 1==(1&n)}(c)?Gg(l,e,t,r,Tn(c),o):void 0)||(Wo(s)||function am(n){return 2==(2&n)}(c)&&(s=Gg(l,null,t,r,a,o)),function J0(n,e,t,i,r){const s=we(n);if(e)r?s?n.addClass(t,i):t.classList.add(i):s?n.removeClass(t,i):t.classList.remove(i);else{let o=-1===i.indexOf("-")?void 0:wt.DashCase;if(null==r)s?n.removeStyle(t,i,o):t.style.removeProperty(i);else{const a="string"==typeof r&&r.endsWith("!important");a&&(r=r.slice(0,-10),o|=wt.Important),s?n.setStyle(t,i,r,o):t.style.setProperty(i,r,a?"important":"")}}}(i,o,uo(rt(),t),r,s))}(s,s.data[rt()],r,r[j],n,r[o+1]=function mA(n,e){return null==n||("string"==typeof e?n+=e:"object"==typeof n&&(n=te(Dt(n)))),n}(e,t),i,o)}function bu(n,e,t,i,r){let s=null;const o=t.directiveEnd;let a=t.directiveStylingLast;for(-1===a?a=t.directiveStart:a++;a<o&&(s=e[a],i=_s(i,s.hostAttrs,r),s!==n);)a++;return null!==n&&(t.directiveStylingLast=a),i}function _s(n,e,t){const i=t?1:2;let r=-1;if(null!==e)for(let s=0;s<e.length;s++){const o=e[s];"number"==typeof o?r=o:r===i&&(Array.isArray(n)||(n=void 0===n?[]:["",n]),bt(n,o,!!t||e[++s]))}return void 0===n?null:n}function Gg(n,e,t,i,r,s){const o=null===e;let a;for(;r>0;){const l=n[r],c=Array.isArray(l),u=c?l[1]:l,d=null===u;let h=t[r+1];h===L&&(h=d?se:void 0);let f=d?ac(h,i):u===i?h:void 0;if(c&&!Wo(f)&&(f=ac(l,i)),Wo(f)&&(a=f,o))return a;const p=n[r+1];r=o?Jt(p):Tn(p)}if(null!==e){let l=s?e.residualClasses:e.residualStyles;null!=l&&(a=ac(l,i))}return a}function Wo(n){return void 0!==n}function Bt(n,e=""){const t=b(),i=K(),r=n+20,s=i.firstCreatePass?tr(i,r,1,e,null):i.data[r],o=t[r]=function Ac(n,e){return we(n)?n.createText(e):n.createTextNode(e)}(t[j],e);No(i,t,o,s),cn(s,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ko(n){return Du("",n,""),Ko}function Du(n,e,t){const i=b(),r=function lr(n,e,t,i){return Je(n,ji(),t)?e+R(t)+i:L}(i,n,e,t);return r!==L&&In(i,rt(),r),Du}function Cu(n,e,t){const i=b();if(Je(i,ji(),e)){const s=K(),o=Ce();Ct(s,o,i,n,e,Nm(Zl(s.data),o,i),t,!0)}return Cu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Qo="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let h_=Qo;function Su(n,e,t,i,r){if(n=H(n),Array.isArray(n))for(let s=0;s<n.length;s++)Su(n[s],e,t,i,r);else{const s=K(),o=b();let a=sr(n)?n:H(n.provide),l=jm(n);const c=Oe(),u=1048575&c.providerIndexes,d=c.directiveStart,h=c.providerIndexes>>20;if(sr(n)||!n.multi){const f=new Kr(l,r,g),p=xu(a,e,r?u:u+h,d);-1===p?(Co(Zr(c,o),s,a),Au(s,n,e.length),e.push(a),c.directiveStart++,c.directiveEnd++,r&&(c.providerIndexes+=1048576),t.push(f),o.push(f)):(t[p]=f,o[p]=f)}else{const f=xu(a,e,u+h,d),p=xu(a,e,u,u+h),m=f>=0&&t[f],y=p>=0&&t[p];if(r&&!y||!r&&!m){Co(Zr(c,o),s,a);const v=function Nx(n,e,t,i,r){const s=new Kr(n,t,g);return s.multi=[],s.index=e,s.componentProviders=0,P_(s,r,i&&!t),s}(r?Ox:Fx,t.length,r,i,l);!r&&y&&(t[p].providerFactory=v),Au(s,n,e.length,0),e.push(a),c.directiveStart++,c.directiveEnd++,r&&(c.providerIndexes+=1048576),t.push(v),o.push(v)}else Au(s,n,f>-1?f:p,P_(t[r?p:f],l,!r&&i));!r&&i&&y&&t[p].componentProviders++}}}function Au(n,e,t,i){const r=sr(e),s=function rS(n){return!!n.useClass}(e);if(r||s){const l=(s?H(e.useClass):e).prototype.ngOnDestroy;if(l){const c=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){const u=c.indexOf(t);-1===u?c.push(t,[i,l]):c[u+1].push(i,l)}else c.push(t,l)}}}function P_(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function xu(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function Fx(n,e,t,i){return Tu(this.multi,[])}function Ox(n,e,t,i){const r=this.multi;let s;if(this.providerFactory){const o=this.providerFactory.componentProviders,a=Yr(t,t[1],this.providerFactory.index,i);s=a.slice(0,o),Tu(r,s);for(let l=o;l<a.length;l++)s.push(a[l])}else s=[],Tu(r,s);return s}function Tu(n,e){for(let t=0;t<n.length;t++)e.push((0,n[t])());return e}function J(n,e=[]){return t=>{t.providersResolver=(i,r)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kx(n,e,t){const i=K();if(i.firstCreatePass){const r=Zt(n);Su(t,i.data,i.blueprint,r,!0),Su(e,i.data,i.blueprint,r,!1)}}(i,r?r(n):n,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class L_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lx{resolveComponentFactory(e){throw function Px(n){const e=Error(`No component factory found for ${te(n)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=n,e}(e)}}let ea=(()=>{class n{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return n.NULL=new Lx,n})();function Vx(){return wr(Oe(),b())}function wr(n,e){return new ce(Nt(n,e))}let ce=(()=>{class n{constructor(t){this.nativeElement=t}}return n.__NG_ELEMENT_ID__=Vx,n})();function Bx(n){return n instanceof ce?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ws{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ux=(()=>{class n{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return n.\u0275prov=P({token:n,providedIn:"root",factory:()=>null}),n})();class Cr{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const $x=new Cr("13.3.6"),Iu={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ta(n,e,t,i,r=!1){for(;null!==t;){const s=e[t.index];if(null!==s&&i.push(Te(s)),Qt(s))for(let a=10;a<s.length;a++){const l=s[a],c=l[1].firstChild;null!==c&&ta(l[1],l,c,i)}const o=t.type;if(8&o)ta(n,e,t.child,i);else if(32&o){const a=Ec(t,e);let l;for(;l=a();)i.push(l)}else if(16&o){const a=Zp(e,t);if(Array.isArray(a))i.push(...a);else{const l=us(e[16]);ta(l[1],l,a,i,!0)}}t=r?t.projectionNext:t.next}return i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cs{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,t=e[1];return ta(t,e,t.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Qt(e)){const t=e[8],i=t?t.indexOf(this):-1;i>-1&&(Tc(e,i),Mo(t,i))}this._attachedToViewContainer=!1}jp(this._lView[1],this._lView)}onDestroy(e){wm(this._lView[1],this._lView,null,e)}markForCheck(){Xc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){eu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function WM(n,e,t){fo(!0);try{eu(n,e,t)}finally{fo(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new M(902,"");this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function $0(n,e){ds(n,e,e[j],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new M(902,"");this._appRef=e}}class zx extends Cs{constructor(e){super(e),this._view=e}detectChanges(){km(this._view)}checkNoChanges(){!function KM(n){fo(!0);try{km(n)}finally{fo(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class B_ extends ea{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=Qe(e);return new ku(t,this.ngModule)}}function H_(n){const e=[];for(let t in n)n.hasOwnProperty(t)&&e.push({propName:n[t],templateName:t});return e}class ku extends L_{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=function cM(n){return n.map(lM).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return H_(this.componentDef.inputs)}get outputs(){return H_(this.componentDef.outputs)}create(e,t,i,r){const s=(r=r||this.ngModule)?function qx(n,e){return{get:(t,i,r)=>{const s=n.get(t,Iu,r);return s!==Iu||i===Iu?s:e.get(t,i,r)}}}(e,r.injector):e,o=s.get(ws,xf),a=s.get(Ux,null),l=o.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",u=i?function Dm(n,e,t){if(we(n))return n.selectRootElement(e,t===Wt.ShadowDom);let i="string"==typeof e?n.querySelector(e):e;return i.textContent="",i}(l,i,this.componentDef.encapsulation):xc(o.createRenderer(null,this.componentDef),c,function Gx(n){const e=n.toLowerCase();return"svg"===e?"svg":"math"===e?"math":null}(c)),d=this.componentDef.onPush?576:528,h=function Jm(n,e){return{components:[],scheduler:n||R0,clean:QM,playerHandler:e||null,flags:0}}(),f=Bo(0,null,null,1,0,null,null,null,null,null),p=hs(null,f,h,d,null,null,o,l,a,s);let m,y;po(p);try{const v=function Ym(n,e,t,i,r,s){const o=t[1];t[20]=n;const l=tr(o,20,2,"#host",null),c=l.mergedAttrs=e.hostAttrs;null!==c&&(jo(l,c,!0),null!==n&&(vo(r,n,c),null!==l.classes&&Nc(r,n,l.classes),null!==l.styles&&Jp(r,n,l.styles)));const u=i.createRenderer(n,e),d=hs(t,vm(e),null,e.onPush?64:16,t[20],l,i,u,s||null,null);return o.firstCreatePass&&(Co(Zr(l,t),o,e.type),Am(o,l),xm(l,t.length,1)),Ho(t,d),t[20]=d}(u,this.componentDef,p,o,l);if(u)if(i)vo(l,u,["ng-version",$x.full]);else{const{attrs:_,classes:D}=function uM(n){const e=[],t=[];let i=1,r=2;for(;i<n.length;){let s=n[i];if("string"==typeof s)2===r?""!==s&&e.push(s,n[++i]):8===r&&t.push(s);else{if(!Xt(r))break;r=s}i++}return{attrs:e,classes:t}}(this.componentDef.selectors[0]);_&&vo(l,u,_),D&&D.length>0&&Nc(l,u,D.join(" "))}if(y=zl(f,20),void 0!==t){const _=y.projection=[];for(let D=0;D<this.ngContentSelectors.length;D++){const A=t[D];_.push(null!=A?Array.from(A):null)}}m=function Xm(n,e,t,i,r){const s=t[1],o=function kM(n,e,t){const i=Oe();n.firstCreatePass&&(t.providersResolver&&t.providersResolver(t),Tm(n,i,e,nr(n,e,1,null),t));const r=Yr(e,n,i.directiveStart,i);Ye(r,e);const s=Nt(i,e);return s&&Ye(s,e),r}(s,t,e);if(i.components.push(o),n[8]=o,r&&r.forEach(l=>l(o,e)),e.contentQueries){const l=Oe();e.contentQueries(1,o,l.directiveStart)}const a=Oe();return!s.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(jn(a.index),Mm(t[1],a,0,a.directiveStart,a.directiveEnd,e),Sm(e,o)),o}(v,this.componentDef,p,h,[mS]),fs(f,p,null)}finally{mo()}return new Kx(this.componentType,m,wr(y,p),p,y)}}class Kx extends class Rx{}{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new zx(r),this.componentType=e}get injector(){return new zi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Er{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Mr=new Map;class $_ extends Er{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new B_(this);const i=kt(e);this._bootstrapComponents=fn(i.bootstrap),this._r3Injector=Hm(e,t,[{provide:Er,useValue:this},{provide:ea,useValue:this.componentFactoryResolver}],te(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=Pt.THROW_IF_NOT_FOUND,i=V.Default){return e===Pt||e===Er||e===nu?this:this._r3Injector.get(e,t,i)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Fu extends class Zx{}{constructor(e){super(),this.moduleType=e,null!==kt(e)&&function Yx(n){const e=new Set;!function t(i){const r=kt(i,!0),s=r.id;null!==s&&(function j_(n,e,t){if(e&&e!==t)throw new Error(`Duplicate module registered for ${n} - ${te(e)} vs ${te(e.name)}`)}(s,Mr.get(s),i),Mr.set(s,i));const o=fn(r.imports);for(const a of o)e.has(a)||(e.add(a),t(a))}(n)}(e)}create(e){return new $_(this.moduleType,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ou(n){return e=>{setTimeout(n,void 0,e)}}const fe=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pT extends pe{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){var r,s,o;let a=e,l=t||(()=>null),c=i;if(e&&"object"==typeof e){const d=e;a=null===(r=d.next)||void 0===r?void 0:r.bind(d),l=null===(s=d.error)||void 0===s?void 0:s.bind(d),c=null===(o=d.complete)||void 0===o?void 0:o.bind(d)}this.__isAsync&&(l=Ou(l),a&&(a=Ou(a)),c&&(c=Ou(c)));const u=super.subscribe({next:a,error:l,complete:c});return e instanceof dt&&e.add(u),u}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mT(){return this._results[or()]()}class Sr{constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const t=or(),i=Sr.prototype;i[t]||(i[t]=mT)}get changes(){return this._changes||(this._changes=new fe)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){const i=this;i.dirty=!1;const r=Rt(e);(this._changesDetected=!function gE(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}(i._results,r,t))&&(i._results=r,i.length=r.length,i.last=r[this.length-1],i.first=r[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let kn=(()=>{class n{}return n.__NG_ELEMENT_ID__=yT,n})();const gT=kn,_T=class extends gT{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}createEmbeddedView(e){const t=this._declarationTContainer.tViews,i=hs(this._declarationLView,t,e,16,null,t.declTNode,null,null,null,null);i[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(i[19]=s.createEmbeddedView(t)),fs(t,i,e),new Cs(i)}};function yT(){return na(Oe(),b())}function na(n,e){return 4&n.type?new _T(e,n,wr(n,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vn=(()=>{class n{}return n.__NG_ELEMENT_ID__=vT,n})();function vT(){return X_(Oe(),b())}const bT=vn,Z_=class extends bT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return wr(this._hostTNode,this._hostLView)}get injector(){return new zi(this._hostTNode,this._hostLView)}get parentInjector(){const e=wo(this._hostTNode,this._hostLView);if(qf(e)){const t=$i(e,this._hostLView),i=Ui(e);return new zi(t[1].data[i+8],t)}return new zi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const t=Y_(this._lContainer);return null!==t&&t[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,t,i){const r=e.createEmbeddedView(t||{});return this.insert(r,i),r}createComponent(e,t,i,r,s){const o=e&&!function Jr(n){return"function"==typeof n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let a;if(o)a=t;else{const d=t||{};a=d.index,i=d.injector,r=d.projectableNodes,s=d.ngModuleRef}const l=o?e:new ku(Qe(e)),c=i||this.parentInjector;if(!s&&null==l.ngModule){const h=(o?c:this.parentInjector).get(Er,null);h&&(s=h)}const u=l.create(c,r,void 0,s);return this.insert(u.hostView,a),u}insert(e,t){const i=e._lView,r=i[1];if(function HC(n){return Qt(n[3])}(i)){const u=this.indexOf(e);if(-1!==u)this.detach(u);else{const d=i[3],h=new Z_(d,d[6],d[3]);h.detach(h.indexOf(e))}}const s=this._adjustIndex(t),o=this._lContainer;!function G0(n,e,t,i){const r=10+i,s=t.length;i>0&&(t[r-1][4]=e),i<s-10?(e[4]=t[r],np(t,10+i,e)):(t.push(e),e[4]=null),e[3]=t;const o=e[17];null!==o&&t!==o&&function q0(n,e){const t=n[9];e[16]!==e[3][3][16]&&(n[2]=!0),null===t?n[9]=[e]:t.push(e)}(o,e);const a=e[19];null!==a&&a.insertView(n),e[2]|=128}(r,i,o,s);const a=Fc(s,o),l=i[j],c=Oo(l,o[7]);return null!==c&&function U0(n,e,t,i,r,s){i[0]=r,i[6]=e,ds(n,i,t,1,r,s)}(r,o[6],l,i,c,a),e.attachToViewContainerRef(),np(Nu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){const t=Y_(this._lContainer);return null!==t?t.indexOf(e):-1}remove(e){const t=this._adjustIndex(e,-1),i=Tc(this._lContainer,t);i&&(Mo(Nu(this._lContainer),t),jp(i[1],i))}detach(e){const t=this._adjustIndex(e,-1),i=Tc(this._lContainer,t);return i&&null!=Mo(Nu(this._lContainer),t)?new Cs(i):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}};function Y_(n){return n[8]}function Nu(n){return n[8]||(n[8]=[])}function X_(n,e){let t;const i=e[n.index];if(Qt(i))t=i;else{let r;if(8&n.type)r=Te(i);else{const s=e[j];r=s.createComment("");const o=Nt(n,e);pi(s,Oo(s,o),r,function Z0(n,e){return we(n)?n.nextSibling(e):e.nextSibling}(s,o),!1)}e[n.index]=t=Im(i,e,r,n),Ho(e,t)}return new Z_(t,n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ru{constructor(e){this.queryList=e,this.matches=null}clone(){return new Ru(this.queryList)}setDirty(){this.queryList.setDirty()}}class Pu{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const i=null!==e.contentQueries?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){const o=t.getByIndex(s);r.push(this.queries[o.indexInDeclarationView].clone())}return new Pu(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==iy(e,t).matches&&this.queries[t].setDirty()}}class J_{constructor(e,t,i=null){this.predicate=e,this.flags=t,this.read=i}}class Lu{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){const r=null!==t?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,null!==t?t.push(s):t=[s])}return null!==t?new Lu(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Vu{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new Vu(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const t=this._declarationNodeIndex;let i=e.parent;for(;null!==i&&8&i.type&&i.index!==t;)i=i.parent;return t===(null!==i?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){const i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){const s=i[r];this.matchTNodeWithReadOption(e,t,CT(t,s)),this.matchTNodeWithReadOption(e,t,Eo(t,e,s,!1,!1))}else i===kn?4&t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Eo(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(null!==i){const r=this.metadata.read;if(null!==r)if(r===ce||r===vn||r===kn&&4&t.type)this.addMatch(t.index,-2);else{const s=Eo(t,e,r,!1,!1);null!==s&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function CT(n,e){const t=n.localNames;if(null!==t)for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1];return null}function MT(n,e,t,i){return-1===t?function ET(n,e){return 11&n.type?wr(n,e):4&n.type?na(n,e):null}(e,n):-2===t?function ST(n,e,t){return t===ce?wr(e,n):t===kn?na(e,n):t===vn?X_(e,n):void 0}(n,e,i):Yr(n,n[1],t,e)}function ey(n,e,t,i){const r=e[19].queries[i];if(null===r.matches){const s=n.data,o=t.matches,a=[];for(let l=0;l<o.length;l+=2){const c=o[l];a.push(c<0?null:MT(e,s[c],o[l+1],t.metadata.read))}r.matches=a}return r.matches}function Bu(n,e,t,i){const r=n.queries.getByIndex(t),s=r.matches;if(null!==s){const o=ey(n,e,r,t);for(let a=0;a<s.length;a+=2){const l=s[a];if(l>0)i.push(o[a/2]);else{const c=s[a+1],u=e[-l];for(let d=10;d<u.length;d++){const h=u[d];h[17]===h[3]&&Bu(h[1],h,c,i)}if(null!==u[9]){const d=u[9];for(let h=0;h<d.length;h++){const f=d[h];Bu(f[1],f,c,i)}}}}}return i}function Pe(n){const e=b(),t=K(),i=Rf();Yl(i+1);const r=iy(t,i);if(n.dirty&&Tf(e)===(2==(2&r.metadata.flags))){if(null===r.matches)n.reset([]);else{const s=r.crossesNgTemplate?Bu(t,e,i,[]):ey(t,e,r,i);n.reset(s,Bx),n.notifyOnChanges()}return!0}return!1}function yi(n,e,t){const i=K();i.firstCreatePass&&(ny(i,new J_(n,e,t),-1),2==(2&e)&&(i.staticViewQueries=!0)),ty(i,b(),e)}function Et(n,e,t,i){const r=K();if(r.firstCreatePass){const s=Oe();ny(r,new J_(e,t,i),s.index),function xT(n,e){const t=n.contentQueries||(n.contentQueries=[]);e!==(t.length?t[t.length-1]:-1)&&t.push(n.queries.length-1,e)}(r,n),2==(2&t)&&(r.staticContentQueries=!0)}ty(r,b(),t)}function Le(){return function AT(n,e){return n[19].queries[e].queryList}(b(),Rf())}function ty(n,e,t){const i=new Sr(4==(4&t));wm(n,e,i,i.destroy),null===e[19]&&(e[19]=new Pu),e[19].queries.push(new Ru(i))}function ny(n,e,t){null===n.queries&&(n.queries=new Lu),n.queries.track(new Vu(e,t))}function iy(n,e){return n.queries.getByIndex(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sa(...n){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const by=new x("Application Initializer");let Gu=(()=>{class n{constructor(t){this.appInits=t,this.resolve=sa,this.reject=sa,this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}runInitializers(){if(this.initialized)return;const t=[],i=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const s=this.appInits[r]();if(qo(s))t.push(s);else if(wg(s)){const o=new Promise((a,l)=>{s.subscribe({complete:a,error:l})});t.push(o)}}Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),0===t.length&&i(),this.initialized=!0}}return n.\u0275fac=function(t){return new(t||n)(E(by,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const As=new x("AppId",{providedIn:"root",factory:function Dy(){return`${qu()}${qu()}${qu()}`}});function qu(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const wy=new x("Platform Initializer"),Wu=new x("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),qT=new x("appBootstrapListener"),Fn=new x("LocaleId",{providedIn:"root",factory:()=>xo(Fn,V.Optional|V.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WT(){return"undefined"!=typeof $localize&&$localize.locale||Qo}()}),YT=(()=>Promise.resolve(0))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ku(n){"undefined"==typeof Zone?YT.then(()=>{n&&n.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ne{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new fe(!1),this.onMicrotaskEmpty=new fe(!1),this.onStable=new fe(!1),this.onError=new fe(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function XT(){let n=ie.requestAnimationFrame,e=ie.cancelAnimationFrame;if("undefined"!=typeof Zone&&n&&e){const t=n[Zone.__symbol__("OriginalDelegate")];t&&(n=t);const i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i)}return{nativeRequestAnimationFrame:n,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function tI(n){const e=()=>{!function eI(n){n.isCheckStableRunning||-1!==n.lastRequestAnimationFrameId||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(ie,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Zu(n),n.isCheckStableRunning=!0,Qu(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Zu(n))}(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{try{return Cy(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||n.shouldCoalesceRunChangeDetection)&&e(),Ey(n)}},onInvoke:(t,i,r,s,o,a,l)=>{try{return Cy(n),t.invoke(r,s,o,a,l)}finally{n.shouldCoalesceRunChangeDetection&&e(),Ey(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&("microTask"==s.change?(n._hasPendingMicrotasks=s.microTask,Zu(n),Qu(n)):"macroTask"==s.change&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}(r)}static isInAngularZone(){return"undefined"!=typeof Zone&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ne.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ne.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,JT,sa,sa);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}}const JT={};function Qu(n){if(0==n._nesting&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Zu(n){n.hasPendingMicrotasks=!!(n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&-1!==n.lastRequestAnimationFrameId)}function Cy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Ey(n){n._nesting--,Qu(n)}class nI{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new fe,this.onMicrotaskEmpty=new fe,this.onStable=new fe,this.onError=new fe}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Yu=(()=>{class n{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ne.assertNotInAngularZone(),Ku(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ku(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>!i.updateCb||!i.updateCb(t)||(clearTimeout(i.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,i,r){let s=-1;i&&i>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(o=>o.timeoutId!==s),t(this._didWork,this.getPendingTasks())},i)),this._callbacks.push({doneCb:t,timeoutId:s,updateCb:r})}whenStable(t,i,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,i,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,i,r){return[]}}return n.\u0275fac=function(t){return new(t||n)(E(ne))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})(),iI=(()=>{class n{constructor(){this._applications=new Map,Xu.addToWindow(this)}registerApplication(t,i){this._applications.set(t,i)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,i=!0){return Xu.findTestabilityInTree(this,t,i)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"platform"}),n})();class rI{addToWindow(e){}findTestabilityInTree(e,t,i){return null}}let Xu=new rI,vi=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const My=new x("AllowMultipleToken"),Sy=new x("PlatformOnDestroy");function Ay(n,e,t=[]){const i=`Platform: ${e}`,r=new x(i);return(s=[])=>{let o=Ju();if(!o||o.injector.get(My,!1)){const a=[...t,...s,{provide:r,useValue:!0}];n?n(a):function lI(n){if(vi&&!vi.get(My,!1))throw new M(400,"");vi=n;const e=n.get(xy),t=n.get(wy,null);t&&t.forEach(i=>i())}(function uI(n=[],e){return Pt.create({name:e,providers:[{provide:iu,useValue:"platform"},{provide:Sy,useValue:()=>vi=null},...n]})}(a,i))}return function cI(n){const e=Ju();if(!e)throw new M(401,"");return e}()}}function Ju(){var n;return null!==(n=null==vi?void 0:vi.get(xy))&&void 0!==n?n:null}let xy=(()=>{class n{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,i){const a=function dI(n,e){let t;return t="noop"===n?new nI:("zone.js"===n?void 0:n)||new ne({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),t}(i?i.ngZone:void 0,{ngZoneEventCoalescing:i&&i.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:i&&i.ngZoneRunCoalescing||!1}),l=[{provide:ne,useValue:a}];return a.run(()=>{const c=Pt.create({providers:l,parent:this.injector,name:t.moduleType.name}),u=t.create(c),d=u.injector.get($n,null);if(!d)throw new M(402,"");return a.runOutsideAngular(()=>{const h=a.onError.subscribe({next:f=>{d.handleError(f)}});u.onDestroy(()=>{ed(this._modules,u),h.unsubscribe()})}),function hI(n,e,t){try{const i=t();return qo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}(d,a,()=>{const h=u.injector.get(Gu);return h.runInitializers(),h.donePromise.then(()=>(function HA(n){_t(n,"Expected localeId to be defined"),"string"==typeof n&&(h_=n.toLowerCase().replace(/_/g,"-"))}(u.injector.get(Fn,Qo)||Qo),this._moduleDoBootstrap(u),u))})})}bootstrapModule(t,i=[]){const r=Ty({},i);return function oI(n,e,t){const i=new Fu(t);return Promise.resolve(i)}(0,0,t).then(s=>this.bootstrapModuleFactory(s,r))}_moduleDoBootstrap(t){const i=t.injector.get(Iy);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(r=>i.bootstrap(r));else{if(!t.instance.ngDoBootstrap)throw new M(403,"");t.instance.ngDoBootstrap(i)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new M(404,"");this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());const t=this._injector.get(Sy,null);null==t||t(),this._destroyed=!0}get destroyed(){return this._destroyed}}return n.\u0275fac=function(t){return new(t||n)(E(Pt))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"platform"}),n})();function Ty(n,e){return Array.isArray(e)?e.reduce(Ty,n):Object.assign(Object.assign({},n),e)}let Iy=(()=>{class n{constructor(t,i,r,s){this._zone=t,this._injector=i,this._exceptionHandler=r,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new Se(l=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{l.next(this._stable),l.complete()})}),a=new Se(l=>{let c;this._zone.runOutsideAngular(()=>{c=this._zone.onStable.subscribe(()=>{ne.assertNotInAngularZone(),Ku(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,l.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{ne.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{l.next(!1)}))});return()=>{c.unsubscribe(),u.unsubscribe()}});this.isStable=hf(o,a.pipe(ff()))}bootstrap(t,i){if(!this._initStatus.done)throw new M(405,"");let r;r=t instanceof L_?t:this._injector.get(ea).resolveComponentFactory(t),this.componentTypes.push(r.componentType);const s=function aI(n){return n.isBoundToModule}(r)?void 0:this._injector.get(Er),a=r.create(Pt.NULL,[],i||r.selector,s),l=a.location.nativeElement,c=a.injector.get(Yu,null),u=c&&a.injector.get(iI);return c&&u&&u.registerApplication(l,c),a.onDestroy(()=>{this.detachView(a.hostView),ed(this.components,a),u&&u.unregisterApplication(l)}),this._loadComponent(a),a}tick(){if(this._runningTick)throw new M(101,"");try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){const i=t;ed(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(qT,[]).concat(this._bootstrapListeners).forEach(r=>r(t))}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return n.\u0275fac=function(t){return new(t||n)(E(ne),E(Pt),E($n),E(Gu))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function ed(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Fy=!0,bn=(()=>{class n{}return n.__NG_ELEMENT_ID__=mI,n})();function mI(n){return function gI(n,e,t){if(lo(n)&&!t){const i=vt(n.index,e);return new Cs(i,i)}return 47&n.type?new Cs(e[16],e):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Oe(),b(),16==(16&n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ly{constructor(){}supports(e){return ms(e)}create(e){return new wI(e)}}const DI=(n,e)=>e;class wI{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||DI}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){const o=!i||t&&t.currentIndex<By(i,r,s)?t:i,a=By(o,r,s),l=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,null==o.previousIndex)r++;else{s||(s=[]);const c=a-r,u=l-r;if(c!=u){for(let h=0;h<c;h++){const f=h<s.length?s[h]:s[h]=0,p=f+h;u<=p&&p<c&&(s[h]=f+1)}s[o.previousIndex]=u-c}}a!==l&&e(o,a,l)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!ms(e))throw new M(900,"");return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let r,s,o,t=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),null!==t&&Object.is(t.trackById,o)?(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)):(t=this._mismatch(t,s,o,a),i=!0),t=t._next}else r=0,function MS(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{const t=n[or()]();let i;for(;!(i=t.next()).done;)e(i.value)}}(e,a=>{o=this._trackByFn(r,a),null!==t&&Object.is(t.trackById,o)?(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)):(t=this._mismatch(t,a,o,r),i=!0),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(i,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new CI(t,i),s,r),e}_verifyReinsertion(e,t,i,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null);return null!==s?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,s=e._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Vy),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,i=e._next;return null===t?this._itHead=i:t._next=i,null===i?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Vy),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class CI{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class EI{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;null!==i;i=i._nextDup)if((null===t||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){const t=e._prevDup,i=e._nextDup;return null===t?this._head=i:t._nextDup=i,null===i?this._tail=t:i._prevDup=t,null===this._head}}class Vy{constructor(){this.map=new Map}put(e){const t=e.trackById;let i=this.map.get(t);i||(i=new EI,this.map.set(t,i)),i.add(e)}get(e,t){const r=this.map.get(e);return r?r.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function By(n,e,t){const i=n.previousIndex;if(null===i)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jy(){return new la([new Ly])}let la=(()=>{class n{constructor(t){this.factories=t}static create(t,i){if(null!=i){const r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||jy()),deps:[[n,new rs,new hi]]}}find(t){const i=this.factories.find(r=>r.supports(t));if(null!=i)return i;throw new M(901,"")}}return n.\u0275prov=P({token:n,providedIn:"root",factory:jy}),n})();const TI=Ay(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let II=(()=>{class n{constructor(t){}}return n.\u0275fac=function(t){return new(t||n)(E(Iy))},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})(),ca=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Di(){return ca}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oe=new x("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class wk{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Jy=(()=>{class n{constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(null==r.previousIndex)i.createEmbeddedView(this._template,new wk(r.item,this._ngForOf,-1,-1),null===o?void 0:o);else if(null==o)i.remove(null===s?void 0:s);else if(null!==s){const a=i.get(s);i.move(a,o),ev(a,r)}});for(let r=0,s=i.length;r<s;r++){const a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{ev(i.get(r.currentIndex),r)})}static ngTemplateContextGuard(t,i){return!0}}return n.\u0275fac=function(t){return new(t||n)(g(vn),g(kn),g(la))},n.\u0275dir=I({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),n})();function ev(n,e){n.context.$implicit=e.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let va=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new Ck,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){tv("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){tv("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}}return n.\u0275fac=function(t){return new(t||n)(g(vn),g(kn))},n.\u0275dir=I({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),n})();class Ck{constructor(){this.$implicit=null,this.ngIf=null}}function tv(n,e){if(e&&!e.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${te(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let yd=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rv="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vd extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class nF extends class OI{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function FI(n){ca||(ca=n)}(new vd)}onAndCancel(e,t,i){return e.addEventListener(t,i,!1),()=>{e.removeEventListener(t,i,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=function iF(){return ks=ks||document.querySelector("base"),ks?ks.getAttribute("href"):null}();return null==t?null:function rF(n){ba=ba||document.createElement("a"),ba.setAttribute("href",n);const e=ba.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}resetBaseElement(){ks=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function vk(n,e){e=encodeURIComponent(e);for(const t of n.split(";")){const i=t.indexOf("="),[r,s]=-1==i?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(document.cookie,e)}}let ba,ks=null;const ov=new x("TRANSITION_ID"),oF=[{provide:by,useFactory:function sF(n,e,t){return()=>{t.get(Gu).donePromise.then(()=>{const i=Di(),r=e.querySelectorAll(`style[ng-transition="${n}"]`);for(let s=0;s<r.length;s++)i.remove(r[s])})}},deps:[ov,oe,Pt],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bd{static init(){!function sI(n){Xu=n}(new bd)}addToWindow(e){ie.getAngularTestability=(i,r=!0)=>{const s=e.findTestabilityInTree(i,r);if(null==s)throw new Error("Could not find testability for element.");return s},ie.getAllAngularTestabilities=()=>e.getAllTestabilities(),ie.getAllAngularRootElements=()=>e.getAllRootElements(),ie.frameworkStabilizers||(ie.frameworkStabilizers=[]),ie.frameworkStabilizers.push(i=>{const r=ie.getAllAngularTestabilities();let s=r.length,o=!1;const a=function(l){o=o||l,s--,0==s&&i(o)};r.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(e,t,i){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:i?Di().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}let aF=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Da=new x("EventManagerPlugins");let wa=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>r.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}addGlobalEventListener(t,i,r){return this._findPluginFor(i).addGlobalEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){const i=this._eventNameToPlugin.get(t);if(i)return i;const r=this._plugins;for(let s=0;s<r.length;s++){const o=r[s];if(o.supports(t))return this._eventNameToPlugin.set(t,o),o}throw new Error(`No event manager plugin found for event ${t}`)}}return n.\u0275fac=function(t){return new(t||n)(E(Da),E(ne))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();class av{constructor(e){this._doc=e}addGlobalEventListener(e,t,i){const r=Di().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let lv=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(t){const i=new Set;t.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),i.add(r))}),this.onStylesAdded(i)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})(),Fs=(()=>{class n extends lv{constructor(t){super(),this._doc=t,this._hostNodes=new Map,this._hostNodes.set(t.head,[])}_addStylesToHost(t,i,r){t.forEach(s=>{const o=this._doc.createElement("style");o.textContent=s,r.push(i.appendChild(o))})}addHost(t){const i=[];this._addStylesToHost(this._stylesSet,t,i),this._hostNodes.set(t,i)}removeHost(t){const i=this._hostNodes.get(t);i&&i.forEach(cv),this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach((i,r)=>{this._addStylesToHost(t,r,i)})}ngOnDestroy(){this._hostNodes.forEach(t=>t.forEach(cv))}}return n.\u0275fac=function(t){return new(t||n)(E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();function cv(n){Di().remove(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},wd=/%COMP%/g;function Ca(n,e,t){for(let i=0;i<e.length;i++){let r=e[i];Array.isArray(r)?Ca(n,r,t):(r=r.replace(wd,n),t.push(r))}return t}function hv(n){return e=>{if("__ngUnwrap__"===e)return n;!1===n(e)&&(e.preventDefault(),e.returnValue=!1)}}let Ea=(()=>{class n{constructor(t,i,r){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new Cd(t)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;switch(i.encapsulation){case Wt.Emulated:{let r=this.rendererByCompId.get(i.id);return r||(r=new fF(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,r)),r.applyToHost(t),r}case 1:case Wt.ShadowDom:return new pF(this.eventManager,this.sharedStylesHost,t,i);default:if(!this.rendererByCompId.has(i.id)){const r=Ca(i.id,i.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(t){return new(t||n)(E(wa),E(Fs),E(As))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();class Cd{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?document.createElementNS(Dd[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,i){e&&e.insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i="string"==typeof e?document.querySelector(e):e;if(!i)throw new Error(`The selector "${e}" did not match any elements`);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;const s=Dd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){const r=Dd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(wt.DashCase|wt.Important)?e.style.setProperty(t,i,r&wt.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&wt.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e[t]=i}setValue(e,t){e.nodeValue=t}listen(e,t,i){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,hv(i)):this.eventManager.addEventListener(e,t,hv(i))}}class fF extends Cd{constructor(e,t,i,r){super(e),this.component=i;const s=Ca(r+"-"+i.id,i.styles,[]);t.addStyles(s),this.contentAttr=function uF(n){return"_ngcontent-%COMP%".replace(wd,n)}(r+"-"+i.id),this.hostAttr=function dF(n){return"_nghost-%COMP%".replace(wd,n)}(r+"-"+i.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}}class pF extends Cd{constructor(e,t,i,r){super(e),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=Ca(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const a=document.createElement("style");a.textContent=s[o],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let mF=(()=>{class n extends av{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}}return n.\u0275fac=function(t){return new(t||n)(E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pv=["alt","control","meta","shift"],_F={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},mv={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},yF={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let vF=(()=>{class n extends av{constructor(t){super(t)}supports(t){return null!=n.parseEventName(t)}addEventListener(t,i,r){const s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Di().onAndCancel(t,s.domEventName,o))}static parseEventName(t){const i=t.toLowerCase().split("."),r=i.shift();if(0===i.length||"keydown"!==r&&"keyup"!==r)return null;const s=n._normalizeKey(i.pop());let o="";if(pv.forEach(l=>{const c=i.indexOf(l);c>-1&&(i.splice(c,1),o+=l+".")}),o+=s,0!=i.length||0===s.length)return null;const a={};return a.domEventName=r,a.fullKey=o,a}static getEventFullKey(t){let i="",r=function bF(n){let e=n.key;if(null==e){if(e=n.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===n.location&&mv.hasOwnProperty(e)&&(e=mv[e]))}return _F[e]||e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);return r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),pv.forEach(s=>{s!=r&&yF[s](t)&&(i+=s+".")}),i+=r,i}static eventCallback(t,i,r){return s=>{n.getEventFullKey(s)===t&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return"esc"===t?"escape":t}}return n.\u0275fac=function(t){return new(t||n)(E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();const EF=Ay(TI,"browser",[{provide:Wu,useValue:rv},{provide:wy,useValue:function DF(){vd.makeCurrent(),bd.init()},multi:!0},{provide:oe,useFactory:function CF(){return function PC(n){Ul=n}(document),document},deps:[]}]),MF=[{provide:iu,useValue:"root"},{provide:$n,useFactory:function wF(){return new $n},deps:[]},{provide:Da,useClass:mF,multi:!0,deps:[oe,ne,Wu]},{provide:Da,useClass:vF,multi:!0,deps:[oe]},{provide:Ea,useClass:Ea,deps:[wa,Fs,As]},{provide:ws,useExisting:Ea},{provide:lv,useExisting:Fs},{provide:Fs,useClass:Fs,deps:[oe]},{provide:Yu,useClass:Yu,deps:[ne]},{provide:wa,useClass:wa,deps:[Da,ne]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class tF{},useClass:aF,deps:[]}];let gv=(()=>{class n{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:n,providers:[{provide:As,useValue:t.appId},{provide:ov,useExisting:As},oF]}}}return n.\u0275fac=function(t){return new(t||n)(E(n,12))},n.\u0275mod=he({type:n}),n.\u0275inj=ae({providers:MF,imports:[yd,II]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */"undefined"!=typeof window&&window;let Md=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:function(t){let i=null;return i=t?new(t||n):E(vv),i},providedIn:"root"}),n})(),vv=(()=>{class n extends Md{constructor(t){super(),this._doc=t}sanitize(t,i){if(null==i)return null;switch(t){case ee.NONE:return i;case ee.HTML:return dn(i,"HTML")?Dt(i):Mp(this._doc,String(i)).toString();case ee.STYLE:return dn(i,"Style")?Dt(i):i;case ee.SCRIPT:if(dn(i,"Script"))return Dt(i);throw new Error("unsafe value used in a script context");case ee.URL:return _p(i),dn(i,"URL")?Dt(i):os(String(i));case ee.RESOURCE_URL:if(dn(i,"ResourceURL"))return Dt(i);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(t){return function WE(n){return new UE(n)}(t)}bypassSecurityTrustStyle(t){return function KE(n){return new $E(n)}(t)}bypassSecurityTrustScript(t){return function QE(n){return new zE(n)}(t)}bypassSecurityTrustUrl(t){return function ZE(n){return new GE(n)}(t)}bypassSecurityTrustResourceUrl(t){return function YE(n){return new qE(n)}(t)}}return n.\u0275fac=function(t){return new(t||n)(E(oe))},n.\u0275prov=P({token:n,factory:function(t){let i=null;return i=t?new t:function RF(n){return new vv(n.get(oe))}(E(Pt)),i},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const{isArray:PF}=Array,{getPrototypeOf:LF,prototype:VF,keys:BF}=Object;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const{isArray:UF}=Array;function bv(n){return Ke(e=>function $F(n,e){return UF(e)?n(...e):n(e)}(n,e))}function zF(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Dv(...n){const e=function Jw(n){return Q(Ml(n))?n.pop():void 0}(n),{args:t,keys:i}=function HF(n){if(1===n.length){const e=n[0];if(PF(e))return{args:e,keys:null};if(function jF(n){return n&&"object"==typeof n&&LF(n)===VF}(e)){const t=BF(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}(n),r=new Se(s=>{const{length:o}=t;if(!o)return void s.complete();const a=new Array(o);let l=o,c=o;for(let u=0;u<o;u++){let d=!1;Gt(t[u]).subscribe(new ht(s,h=>{d||(d=!0,c--),a[u]=h},()=>l--,void 0,()=>{(!l||!d)&&(c||s.next(i?zF(i,a):a),s.complete())}))}});return e?r.pipe(bv(e)):r}
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ub=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $d=new x("NgModelWithFormControlWarning");let Yd,Sb=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[ub]]}),n})(),Ab=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[Sb]}),n})(),z1=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:$d,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[Sb]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */try{Yd="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(n){Yd=!1}let Ls,Na,Ei,Jd,Dn=(()=>{class n{constructor(t){this._platformId=t,this.isBrowser=this._platformId?function Jk(n){return n===rv}(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Yd)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return n.\u0275fac=function(t){return new(t||n)(E(Wu))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xd(n){return function G1(){if(null==Ls&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ls=!0}))}finally{Ls=Ls||!1}return Ls}()?n:!!n.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vs(){if("object"!=typeof document||!document)return 0;if(null==Na){const n=document.createElement("div"),e=n.style;n.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";const t=document.createElement("div"),i=t.style;i.width="2px",i.height="1px",n.appendChild(t),document.body.appendChild(n),Na=0,0===n.scrollLeft&&(n.scrollLeft=1,Na=0===n.scrollLeft?1:2),n.remove()}return Na}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bs(n){return n.composedPath?n.composedPath()[0]:n.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Tb=new Set;let Ir,Z1=(()=>{class n{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):X1}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function Y1(n){if(!Tb.has(n))try{Ir||(Ir=document.createElement("style"),Ir.setAttribute("type","text/css"),document.head.appendChild(Ir)),Ir.sheet&&(Ir.sheet.insertRule(`@media ${n} {body{ }}`,0),Tb.add(n))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return n.\u0275fac=function(t){return new(t||n)(E(Dn))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function X1(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const J1=new x("cdk-dir-doc",{providedIn:"root",factory:function eO(){return xo(oe)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}),tO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ib=(()=>{class n{constructor(t){if(this.value="ltr",this.change=new fe,t){const r=t.documentElement?t.documentElement.dir:null;this.value=function nO(n){const e=(null==n?void 0:n.toLowerCase())||"";return"auto"===e&&"undefined"!=typeof navigator&&(null==navigator?void 0:navigator.language)?tO.test(navigator.language)?"rtl":"ltr":"rtl"===e?"rtl":"ltr"}((t.body?t.body.dir:null)||r||"ltr")}}ngOnDestroy(){this.change.complete()}}return n.\u0275fac=function(t){return new(t||n)(E(J1,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),kb=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class iO extends pe{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){const{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}}function Yn(...n){return jr(n,to(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Pa(n,e,t){const i=Q(n)||e||t?{next:n,error:e,complete:t}:n;return i?nt((r,s)=>{var o;null===(o=i.subscribe)||void 0===o||o.call(i);let a=!0;r.subscribe(new ht(s,l=>{var c;null===(c=i.next)||void 0===c||c.call(i,l),s.next(l)},()=>{var l;a=!1,null===(l=i.complete)||void 0===l||l.call(i),s.complete()},l=>{var c;a=!1,null===(c=i.error)||void 0===c||c.call(i,l),s.error(l)},()=>{var l,c;a&&(null===(l=i.unsubscribe)||void 0===l||l.call(i)),null===(c=i.finalize)||void 0===c||c.call(i)}))}):eo}class bO extends dt{constructor(e,t){super()}schedule(e,t=0){return this}}const La={setInterval(...n){const{delegate:e}=La;return((null==e?void 0:e.setInterval)||setInterval)(...n)},clearInterval(n){const{delegate:e}=La;return((null==e?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0};class eh extends bO{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const i=this.id,r=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(r,i,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,i=0){return La.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;La.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(e,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r,i=!1;try{this.work(e)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Ni(i,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}}const Pb={now:()=>(Pb.delegate||Date).now(),delegate:void 0};class Hs{constructor(e,t=Hs.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,i){return new this.schedulerActionCtor(this,e).schedule(i,t)}}Hs.now=Pb.now;class th extends Hs{constructor(e,t=Hs.now){super(e,t),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let i;this._active=!0;do{if(i=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}}const Lb=new th(eh),Vb=Lb;function wn(n,e){return nt((t,i)=>{let r=0;t.subscribe(new ht(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Bb(n,e=eo){return n=null!=n?n:wO,nt((t,i)=>{let r,s=!0;t.subscribe(new ht(i,o=>{const a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function wO(n,e){return n===e}function tt(n){return nt((e,t)=>{Gt(n).subscribe(new ht(t,()=>t.complete(),Br)),!t.closed&&e.subscribe(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Be(n){return null!=n&&"false"!=`${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Va(n,e=0){return function CO(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?Number(n):e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Mi(n){return n instanceof ce?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ub=(()=>{class n{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return function TO(n){return!!(n.offsetWidth||n.offsetHeight||"function"==typeof n.getClientRects&&n.getClientRects().length)}(t)&&"visible"===getComputedStyle(t).visibility}isTabbable(t){if(!this._platform.isBrowser)return!1;const i=function xO(n){try{return n.frameElement}catch(e){return null}}(function LO(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t));if(i&&(-1===zb(i)||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),s=zb(t);return t.hasAttribute("contenteditable")?-1!==s:!("iframe"===r||"object"===r||this._platform.WEBKIT&&this._platform.IOS&&!function RO(n){let e=n.nodeName.toLowerCase(),t="input"===e&&n.type;return"text"===t||"password"===t||"select"===e||"textarea"===e}(t))&&("audio"===r?!!t.hasAttribute("controls")&&-1!==s:"video"===r?-1!==s&&(null!==s||this._platform.FIREFOX||t.hasAttribute("controls")):t.tabIndex>=0)}isFocusable(t,i){return function PO(n){return!function kO(n){return function OO(n){return"input"==n.nodeName.toLowerCase()}(n)&&"hidden"==n.type}(n)&&(function IO(n){let e=n.nodeName.toLowerCase();return"input"===e||"select"===e||"button"===e||"textarea"===e}(n)||function FO(n){return function NO(n){return"a"==n.nodeName.toLowerCase()}(n)&&n.hasAttribute("href")}(n)||n.hasAttribute("contenteditable")||$b(n))}(t)&&!this.isDisabled(t)&&((null==i?void 0:i.ignoreVisibility)||this.isVisible(t))}}return n.\u0275fac=function(t){return new(t||n)(E(Dn))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function $b(n){if(!n.hasAttribute("tabindex")||void 0===n.tabIndex)return!1;let e=n.getAttribute("tabindex");return!(!e||isNaN(parseInt(e,10)))}function zb(n){if(!$b(n))return null;const e=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}class VO{constructor(e,t,i,r,s=!1){this._element=e,this._checker=t,this._ngZone=i,this._document=r,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}destroy(){const e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){const t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return"start"==e?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){const t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){const i=this._getFirstTabbableElement(t);return null==i||i.focus(e),!!i}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){const t=this._getRegionBoundary("start");return t&&t.focus(e),!!t}focusLastTabbableElement(e){const t=this._getRegionBoundary("end");return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const t=e.children;for(let i=0;i<t.length;i++){const r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const t=e.children;for(let i=t.length-1;i>=0;i--){const r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){const e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(Ur(1)).subscribe(e)}}let BO=(()=>{class n{constructor(t,i,r){this._checker=t,this._ngZone=i,this._document=r}create(t,i=!1){return new VO(t,this._checker,this._ngZone,this._document,i)}}return n.\u0275fac=function(t){return new(t||n)(E(Ub),E(ne),E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gb(n){return 0===n.buttons||0===n.offsetX&&0===n.offsetY}function qb(n){const e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const HO=new x("cdk-input-modality-detector-options"),jO={ignoreKeys:[18,17,224,91,16]},kr=Xd({passive:!0,capture:!0});let UO=(()=>{class n{constructor(t,i,r,s){this._platform=t,this._mostRecentTarget=null,this._modality=new iO(null),this._lastTouchMs=0,this._onKeydown=o=>{var a,l;(null===(l=null===(a=this._options)||void 0===a?void 0:a.ignoreKeys)||void 0===l?void 0:l.some(c=>c===o.keyCode))||(this._modality.next("keyboard"),this._mostRecentTarget=Bs(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<650||(this._modality.next(Gb(o)?"keyboard":"mouse"),this._mostRecentTarget=Bs(o))},this._onTouchstart=o=>{qb(o)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bs(o))},this._options=Object.assign(Object.assign({},jO),s),this.modalityDetected=this._modality.pipe(function DO(n){return wn((e,t)=>n<=t)}(1)),this.modalityChanged=this.modalityDetected.pipe(Bb()),t.isBrowser&&i.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,kr),r.addEventListener("mousedown",this._onMousedown,kr),r.addEventListener("touchstart",this._onTouchstart,kr)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,kr),document.removeEventListener("mousedown",this._onMousedown,kr),document.removeEventListener("touchstart",this._onTouchstart,kr))}}return n.\u0275fac=function(t){return new(t||n)(E(Dn),E(ne),E(oe),E(HO,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zO=new x("cdk-focus-monitor-default-options"),Ba=Xd({passive:!0,capture:!0});let Ha=(()=>{class n{constructor(t,i,r,s,o){this._ngZone=t,this._platform=i,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new pe,this._rootNodeFocusAndBlurListener=a=>{const l=Bs(a),c="focus"===a.type?this._onFocus:this._onBlur;for(let u=l;u;u=u.parentElement)c.call(this,a,u)},this._document=s,this._detectionMode=(null==o?void 0:o.detectionMode)||0}monitor(t,i=!1){const r=Mi(t);if(!this._platform.isBrowser||1!==r.nodeType)return Yn(null);const s=function K1(n){if(function W1(){if(null==Jd){const n="undefined"!=typeof document?document.head:null;Jd=!(!n||!n.createShadowRoot&&!n.attachShadow)}return Jd}()){const e=n.getRootNode?n.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}(r)||this._getDocument(),o=this._elementInfo.get(r);if(o)return i&&(o.checkChildren=!0),o.subject;const a={checkChildren:i,subject:new pe,rootNode:s};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){const i=Mi(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){const s=Mi(t);s===this._getDocument().activeElement?this._getClosestElementsInfo(s).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),"function"==typeof s.focus&&s.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(t){return 1===this._detectionMode||!!(null==t?void 0:t.contains(this._inputModalityDetector._mostRecentTarget))}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused","touch"===i),t.classList.toggle("cdk-keyboard-focused","keyboard"===i),t.classList.toggle("cdk-mouse-focused","mouse"===i),t.classList.toggle("cdk-program-focused","program"===i)}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{this._origin=t,this._originFromTouchInteraction="touch"===t&&i,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(t,i){const r=this._elementInfo.get(i),s=Bs(t);!r||!r.checkChildren&&i!==s||this._originChanged(i,this._getFocusOrigin(s),r)}_onBlur(t,i){const r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r.subject,null))}_emitOrigin(t,i){this._ngZone.run(()=>t.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;const i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ba),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ba)}),this._rootNodeFocusListenerCount.set(i,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(tt(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(t){const i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){const r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ba),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ba),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r.subject,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){const i=[];return this._elementInfo.forEach((r,s)=>{(s===t||r.checkChildren&&s.contains(t))&&i.push([s,r])}),i}}return n.\u0275fac=function(t){return new(t||n)(E(ne),E(Dn),E(UO),E(oe,8),E(zO,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Kb="cdk-high-contrast-black-on-white",Qb="cdk-high-contrast-white-on-black",ih="cdk-high-contrast-active";let GO=(()=>{class n{constructor(t,i){this._platform=t,this._document=i}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),s){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(ih),t.remove(Kb),t.remove(Qb),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?(t.add(ih),t.add(Kb)):2===i&&(t.add(ih),t.add(Qb))}}}return n.\u0275fac=function(t){return new(t||n)(E(Dn),E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zb(...n){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function qO(){return af(1)}()(jr(n,to(n)))}function ja(...n){const e=to(n);return nt((t,i)=>{(e?Zb(n,t,e):Zb(n,t)).subscribe(i)})}
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */class Yb{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Nn="*";function KO(n,e){return{type:7,name:n,definitions:e,options:{}}}function Xb(n,e=null){return{type:4,styles:e,timings:n}}function Jb(n,e=null){return{type:2,steps:n,options:e}}function Ua(n){return{type:6,styles:n,offset:null}}function eD(n,e,t){return{type:0,name:n,styles:e,options:t}}function tD(n,e,t=null){return{type:1,expr:n,animation:e,options:t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nD(n){Promise.resolve(null).then(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class js{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){nD(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class iD{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,i=0,r=0;const s=this.players.length;0==s?nD(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(i=>{const r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){const e=this.players.reduce((t,i)=>null===t||i.totalTime>t.totalTime?i:t,null);return null!=e?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const W=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rD(n){return new M(3e3,W)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xN(){return"undefined"!=typeof window&&void 0!==window.document}function sh(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function Xn(n){switch(n.length){case 0:return new js;case 1:return n[0];default:return new iD(n)}}function sD(n,e,t,i,r={},s={}){const o=[],a=[];let l=-1,c=null;if(i.forEach(u=>{const d=u.offset,h=d==l,f=h&&c||{};Object.keys(u).forEach(p=>{let m=p,y=u[p];if("offset"!==p)switch(m=e.normalizePropertyName(m,o),y){case"!":y=r[p];break;case Nn:y=s[p];break;default:y=e.normalizeStyleValue(p,m,y,o)}f[m]=y}),h||a.push(f),c=f,l=d}),o.length)throw function _N(n){return new M(3502,W)}();return a}function oh(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&ah(t,"start",n)));break;case"done":n.onDone(()=>i(t&&ah(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&ah(t,"destroy",n)))}}function ah(n,e,t){const i=t.totalTime,s=lh(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,null==i?n.totalTime:i,!!t.disabled),o=n._data;return null!=o&&(s._data=o),s}function lh(n,e,t,i,r="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function Mt(n,e,t){let i;return n instanceof Map?(i=n.get(e),i||n.set(e,i=t)):(i=n[e],i||(i=n[e]=t)),i}function oD(n){const e=n.indexOf(":");return[n.substring(1,e),n.substr(e+1)]}let ch=(n,e)=>!1,aD=(n,e,t)=>[],lD=null;function uh(n){const e=n.parentNode||n.host;return e===lD?null:e}(sh()||"undefined"!=typeof Element)&&(xN()?(lD=(()=>document.documentElement)(),ch=(n,e)=>{for(;e;){if(e===n)return!0;e=uh(e)}return!1}):ch=(n,e)=>n.contains(e),aD=(n,e,t)=>{if(t)return Array.from(n.querySelectorAll(e));const i=n.querySelector(e);return i?[i]:[]});let Si=null,cD=!1;function uD(n){Si||(Si=function IN(){return"undefined"!=typeof document?document.body:null}()||{},cD=!!Si.style&&"WebkitAppearance"in Si.style);let e=!0;return Si.style&&!function TN(n){return"ebkit"==n.substring(1,6)}(n)&&(e=n in Si.style,!e&&cD&&(e="Webkit"+n.charAt(0).toUpperCase()+n.substr(1)in Si.style)),e}const dD=ch,hD=aD;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let fD=(()=>{class n{validateStyleProperty(t){return uD(t)}matchesElement(t,i){return!1}containsElement(t,i){return dD(t,i)}getParentElement(t){return uh(t)}query(t,i,r){return hD(t,i,r)}computeStyle(t,i,r){return r||""}animate(t,i,r,s,o,a=[],l){return new js(r,s)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})(),dh=(()=>{class n{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return n.NOOP=new fD,n})();const hh="ng-enter",za="ng-leave",Ga="ng-trigger",qa=".ng-trigger",mD="ng-animating",fh=".ng-animating";function Ai(n){if("number"==typeof n)return n;const e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:ph(parseFloat(e[1]),e[2])}function ph(n,e){return"s"===e?1e3*n:n}function Wa(n,e,t){return n.hasOwnProperty("duration")?n:function ON(n,e,t){let r,s=0,o="";if("string"==typeof n){const a=n.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===a)return e.push(rD()),{duration:0,delay:0,easing:""};r=ph(parseFloat(a[1]),a[2]);const l=a[3];null!=l&&(s=ph(parseFloat(l),a[4]));const c=a[5];c&&(o=c)}else r=n;if(!t){let a=!1,l=e.length;r<0&&(e.push(function QO(){return new M(3100,W)}()),a=!0),s<0&&(e.push(function ZO(){return new M(3101,W)}()),a=!0),a&&e.splice(l,0,rD())}return{duration:r,delay:s,easing:o}}(n,e,t)}function Fr(n,e={}){return Object.keys(n).forEach(t=>{e[t]=n[t]}),e}function Jn(n,e,t={}){if(e)for(let i in n)t[i]=n[i];else Fr(n,t);return t}function _D(n,e,t){return t?e+":"+t+";":""}function yD(n){let e="";for(let t=0;t<n.style.length;t++){const i=n.style.item(t);e+=_D(0,i,n.style.getPropertyValue(i))}for(const t in n.style)n.style.hasOwnProperty(t)&&!t.startsWith("_")&&(e+=_D(0,PN(t),n.style[t]));n.setAttribute("style",e)}function Cn(n,e,t){n.style&&(Object.keys(e).forEach(i=>{const r=gh(i);t&&!t.hasOwnProperty(i)&&(t[i]=n.style[r]),n.style[r]=e[i]}),sh()&&yD(n))}function xi(n,e){n.style&&(Object.keys(e).forEach(t=>{const i=gh(t);n.style[i]=""}),sh()&&yD(n))}function Us(n){return Array.isArray(n)?1==n.length?n[0]:Jb(n):n}const mh=new RegExp("{{\\s*(.+?)\\s*}}","g");function vD(n){let e=[];if("string"==typeof n){let t;for(;t=mh.exec(n);)e.push(t[1]);mh.lastIndex=0}return e}function Ka(n,e,t){const i=n.toString(),r=i.replace(mh,(s,o)=>{let a=e[o];return e.hasOwnProperty(o)||(t.push(function XO(n){return new M(3003,W)}()),a=""),a.toString()});return r==i?n:r}function Qa(n){const e=[];let t=n.next();for(;!t.done;)e.push(t.value),t=n.next();return e}const RN=/-+([a-z0-9])/g;function gh(n){return n.replace(RN,(...e)=>e[1].toUpperCase())}function PN(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function St(n,e,t){switch(e.type){case 7:return n.visitTrigger(e,t);case 0:return n.visitState(e,t);case 1:return n.visitTransition(e,t);case 2:return n.visitSequence(e,t);case 3:return n.visitGroup(e,t);case 4:return n.visitAnimate(e,t);case 5:return n.visitKeyframes(e,t);case 6:return n.visitStyle(e,t);case 8:return n.visitReference(e,t);case 9:return n.visitAnimateChild(e,t);case 10:return n.visitAnimateRef(e,t);case 11:return n.visitQuery(e,t);case 12:return n.visitStagger(e,t);default:throw function JO(n){return new M(3004,W)}()}}function bD(n,e){return window.getComputedStyle(n)[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function UN(n,e){const t=[];return"string"==typeof n?n.split(/\s*,\s*/).forEach(i=>function $N(n,e,t){if(":"==n[0]){const l=function zN(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(function fN(n){return new M(3016,W)}()),"* => *"}}(n,t);if("function"==typeof l)return void e.push(l);n=l}const i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==i||i.length<4)return t.push(function hN(n){return new M(3015,W)}()),e;const r=i[1],s=i[2],o=i[3];e.push(DD(r,o));"<"==s[0]&&!("*"==r&&"*"==o)&&e.push(DD(o,r))}(i,t,e)):t.push(n),t}const Ja=new Set(["true","1"]),el=new Set(["false","0"]);function DD(n,e){const t=Ja.has(n)||el.has(n),i=Ja.has(e)||el.has(e);return(r,s)=>{let o="*"==n||n==r,a="*"==e||e==s;return!o&&t&&"boolean"==typeof r&&(o=r?Ja.has(n):el.has(n)),!a&&i&&"boolean"==typeof s&&(a=s?Ja.has(e):el.has(e)),o&&a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const GN=new RegExp("s*:selfs*,?","g");function _h(n,e,t,i){return new qN(n).build(e,t,i)}class qN{constructor(e){this._driver=e}build(e,t,i){const r=new QN(t);this._resetContextStyleTimingState(r);const s=St(this,Us(e),r);return r.unsupportedCSSPropertiesFound.size&&r.unsupportedCSSPropertiesFound.keys(),s}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0;const s=[],o=[];return"@"==e.name.charAt(0)&&t.errors.push(function tN(){return new M(3006,W)}()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),0==a.type){const l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,t))}),l.name=c}else if(1==a.type){const l=this.visitTransition(a,t);i+=l.queryCount,r+=l.depCount,o.push(l)}else t.errors.push(function nN(){return new M(3007,W)}())}),{type:7,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){const i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){const s=new Set,o=r||{};i.styles.forEach(a=>{if(tl(a)){const l=a;Object.keys(l).forEach(c=>{vD(l[c]).forEach(u=>{o.hasOwnProperty(u)||s.add(u)})})}}),s.size&&(Qa(s.values()),t.errors.push(function iN(n,e){return new M(3008,W)}()))}return{type:0,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const i=St(this,Us(e.animation),t);return{type:1,matchers:UN(e.expr,t.errors),animation:i,queryCount:t.queryCount,depCount:t.depCount,options:Ti(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(i=>St(this,i,t)),options:Ti(e.options)}}visitGroup(e,t){const i=t.currentTime;let r=0;const s=e.steps.map(o=>{t.currentTime=i;const a=St(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:3,steps:s,options:Ti(e.options)}}visitAnimate(e,t){const i=function YN(n,e){if(n.hasOwnProperty("duration"))return n;if("number"==typeof n)return yh(Wa(n,e).duration,0,"");const t=n;if(t.split(/\s+/).some(s=>"{"==s.charAt(0)&&"{"==s.charAt(1))){const s=yh(0,0,"");return s.dynamic=!0,s.strValue=t,s}const r=Wa(t,e);return yh(r.duration,r.delay,r.easing)}(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:Ua({});if(5==s.type)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;const c={};i.easing&&(c.easing=i.easing),o=Ua(c)}t.currentTime+=i.duration+i.delay;const l=this.visitStyle(o,t);l.isEmptyStep=a,r=l}return t.currentAnimateTimings=null,{type:4,timings:i,style:r,options:null}}visitStyle(e,t){const i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){const i=[];Array.isArray(e.styles)?e.styles.forEach(o=>{"string"==typeof o?o==Nn?i.push(o):t.errors.push(function rN(n){return new M(3002,W)}()):i.push(o)}):i.push(e.styles);let r=!1,s=null;return i.forEach(o=>{if(tl(o)){const a=o,l=a.easing;if(l&&(s=l,delete a.easing),!r)for(let c in a)if(a[c].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:i,easing:s,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){const i=t.currentAnimateTimings;let r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{"string"!=typeof o&&Object.keys(o).forEach(a=>{if(!this._driver.validateStyleProperty(a))return delete o[a],void t.unsupportedCSSPropertiesFound.add(a);const l=t.collectedStyles[t.currentQuerySelector],c=l[a];let u=!0;c&&(s!=r&&s>=c.startTime&&r<=c.endTime&&(t.errors.push(function sN(n,e,t,i,r){return new M(3010,W)}()),u=!1),s=c.startTime),u&&(l[a]={startTime:s,endTime:r}),t.options&&function NN(n,e,t){const i=e.params||{},r=vD(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(function YO(n){return new M(3001,W)}())})}(o[a],t.options,t.errors)})})}visitKeyframes(e,t){const i={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(function oN(){return new M(3011,W)}()),i;let s=0;const o=[];let a=!1,l=!1,c=0;const u=e.steps.map(v=>{const _=this._makeStyleAst(v,t);let D=null!=_.offset?_.offset:function ZN(n){if("string"==typeof n)return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(tl(t)&&t.hasOwnProperty("offset")){const i=t;e=parseFloat(i.offset),delete i.offset}});else if(tl(n)&&n.hasOwnProperty("offset")){const t=n;e=parseFloat(t.offset),delete t.offset}return e}(_.styles),A=0;return null!=D&&(s++,A=_.offset=D),l=l||A<0||A>1,a=a||A<c,c=A,o.push(A),_});l&&t.errors.push(function aN(){return new M(3012,W)}()),a&&t.errors.push(function lN(){return new M(3200,W)}());const d=e.steps.length;let h=0;s>0&&s<d?t.errors.push(function cN(){return new M(3202,W)}()):0==s&&(h=1/(d-1));const f=d-1,p=t.currentTime,m=t.currentAnimateTimings,y=m.duration;return u.forEach((v,_)=>{const D=h>0?_==f?1:h*_:o[_],A=D*y;t.currentTime=p+m.delay+A,m.duration=A,this._validateStyleAst(v,t),v.offset=D,i.styles.push(v)}),i}visitReference(e,t){return{type:8,animation:St(this,Us(e.animation),t),options:Ti(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:Ti(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:Ti(e.options)}}visitQuery(e,t){const i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;const[s,o]=function WN(n){const e=!!n.split(/\s*,\s*/).find(t=>":self"==t);return e&&(n=n.replace(GN,"")),n=n.replace(/@\*/g,qa).replace(/@\w+/g,t=>qa+"-"+t.substr(1)).replace(/:animating/g,fh),[n,e]}(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,Mt(t.collectedStyles,t.currentQuerySelector,{});const a=St(this,Us(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:11,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:Ti(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(function uN(){return new M(3013,W)}());const i="full"===e.timings?{duration:0,delay:0,easing:"full"}:Wa(e.timings,t.errors,!0);return{type:12,animation:St(this,Us(e.animation),t),timings:i,options:null}}}class QN{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function tl(n){return!Array.isArray(n)&&"object"==typeof n}function Ti(n){return n?(n=Fr(n)).params&&(n.params=function KN(n){return n?Fr(n):null}(n.params)):n={},n}function yh(n,e,t){return{duration:n,delay:e,easing:t}}function vh(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}class nl{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const eR=new RegExp(":enter","g"),nR=new RegExp(":leave","g");function bh(n,e,t,i,r,s={},o={},a,l,c=[]){return(new iR).buildKeyframes(n,e,t,i,r,s,o,a,l,c)}class iR{buildKeyframes(e,t,i,r,s,o,a,l,c,u=[]){c=c||new nl;const d=new Dh(e,t,c,r,s,u,[]);d.options=l,d.currentTimeline.setStyles([o],null,d.errors,l),St(this,i,d);const h=d.timelines.filter(f=>f.containsAnimation());if(Object.keys(a).length){let f;for(let p=h.length-1;p>=0;p--){const m=h[p];if(m.element===t){f=m;break}}f&&!f.allowOnlyTimelineStyles()&&f.setStyles([a],null,d.errors,l)}return h.length?h.map(f=>f.buildKeyframes()):[vh(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const i=t.subInstructions.get(t.element);if(i){const r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){const i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime;const o=null!=i.duration?Ai(i.duration):null,a=null!=i.delay?Ai(i.delay):null;return 0!==o&&e.forEach(l=>{const c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),St(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const i=t.subContextCount;let r=t;const s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),null!=s.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=il);const o=Ai(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>St(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const i=[];let r=t.currentTimeline.currentTime;const s=e.options&&e.options.delay?Ai(e.options.delay):0;e.steps.forEach(o=>{const a=t.createSubContext(e.options);s&&a.delayNextStep(s),St(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const i=e.strValue;return Wa(t.params?Ka(i,t.params,t.errors):i,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());const s=e.style;5==s.type?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.getCurrentStyleProperties().length&&i.forwardFrame();const s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{a.forwardTime((l.offset||0)*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){const i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Ai(r.delay):0;s&&(6===t.previousNode.type||0==i&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=il);let o=i;const a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{t.currentQueryIndex=u;const d=t.createSubContext(e.options,c);s&&d.delayNextStep(s),c===t.element&&(l=d.currentTimeline),St(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe(),o=Math.max(o,d.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1);let l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime}const u=t.currentTimeline;l&&u.delayNextStep(l);const d=u.currentTime;St(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-d+(r.startTime-i.currentTimeline.startTime)}}const il={};class Dh{constructor(e,t,i,r,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=il,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=l||new rl(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const i=e;let r=this.options;null!=i.duration&&(r.duration=Ai(i.duration)),null!=i.delay&&(r.delay=Ai(i.delay));const s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=Ka(s[a],o,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){const r=t||this.element,s=new Dh(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=il,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){const r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=i?i:0)+e.delay,easing:""},s=new rR(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=(e=e.replace(eR,"."+this._enterClassName)).replace(nR,"."+this._leaveClassName);let c=this._driver.query(this.element,e,1!=i);0!==i&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&0==a.length&&o.push(function dN(n){return new M(3014,W)}()),a}}class rl{constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new rl(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(t=>{this._backFill[t]=this._globalTimelineStyles[t]||Nn,this._currentKeyframe[t]=Nn}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&(this._previousKeyframe.easing=t);const s=r&&r.params||{},o=function sR(n,e){const t={};let i;return n.forEach(r=>{"*"===r?(i=i||Object.keys(e),i.forEach(s=>{t[s]=Nn})):Jn(r,!1,t)}),t}(e,this._globalTimelineStyles);Object.keys(o).forEach(a=>{const l=Ka(o[a],s,i);this._pendingStyles[a]=l,this._localTimelineStyles.hasOwnProperty(a)||(this._backFill[a]=this._globalTimelineStyles.hasOwnProperty(a)?this._globalTimelineStyles[a]:Nn),this._updateStyle(a,l)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(i=>{this._currentKeyframe[i]=e[i]}),Object.keys(this._localTimelineStyles).forEach(i=>{this._currentKeyframe.hasOwnProperty(i)||(this._currentKeyframe[i]=this._localTimelineStyles[i])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const i=this._styleSummary[t],r=e._styleSummary[t];(!i||r.time>i.time)&&this._updateStyle(t,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,i=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((a,l)=>{const c=Jn(a,!0);Object.keys(c).forEach(u=>{const d=c[u];"!"==d?e.add(u):d==Nn&&t.add(u)}),i||(c.offset=l/this.duration),r.push(c)});const s=e.size?Qa(e.values()):[],o=t.size?Qa(t.values()):[];if(i){const a=r[0],l=Fr(a);a.offset=0,l.offset=1,r=[a,l]}return vh(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}}class rR extends rl{constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){const s=[],o=i+t,a=t/o,l=Jn(e[0],!1);l.offset=0,s.push(l);const c=Jn(e[0],!1);c.offset=ED(a),s.push(c);const u=e.length-1;for(let d=1;d<=u;d++){let h=Jn(e[d],!1);h.offset=ED((t+h.offset*i)/o),s.push(h)}i=o,t=0,r="",e=s}return vh(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}}function ED(n,e=3){const t=Math.pow(10,e-1);return Math.round(n*t)/t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class wh{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class oR extends wh{normalizePropertyName(e,t){return gh(e)}normalizeStyleValue(e,t,i,r){let s="";const o=i.toString().trim();if(aR[t]&&0!==i&&"0"!==i)if("number"==typeof i)s="px";else{const a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&0==a[1].length&&r.push(function eN(n,e){return new M(3005,W)}())}return o+s}}const aR=(()=>function lR(n){const e={};return n.forEach(t=>e[t]=!0),e}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function MD(n,e,t,i,r,s,o,a,l,c,u,d,h){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:h}}const Ch={};class SD{constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return function cR(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){const r=this._stateStyles["*"],s=this._stateStyles[e],o=r?r.buildStyles(t,i):{};return s?s.buildStyles(t,i):o}build(e,t,i,r,s,o,a,l,c,u){const d=[],h=this.ast.options&&this.ast.options.params||Ch,p=this.buildStyles(i,a&&a.params||Ch,d),m=l&&l.params||Ch,y=this.buildStyles(r,m,d),v=new Set,_=new Map,D=new Map,A="void"===r,z={params:Object.assign(Object.assign({},h),m)},_e=u?[]:bh(e,t,this.ast.animation,s,o,p,y,z,c,d);let be=0;if(_e.forEach(xt=>{be=Math.max(xt.duration+xt.delay,be)}),d.length)return MD(t,this._triggerName,i,r,A,p,y,[],[],_,D,be,d);_e.forEach(xt=>{const Tt=xt.element,Pr=Mt(_,Tt,{});xt.preStyleProps.forEach(on=>Pr[on]=!0);const Rn=Mt(D,Tt,{});xt.postStyleProps.forEach(on=>Rn[on]=!0),Tt!==t&&v.add(Tt)});const At=Qa(v.values());return MD(t,this._triggerName,i,r,A,p,y,_e,At,_,D,be)}}class uR{constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){const i={},r=Fr(this.defaultParams);return Object.keys(e).forEach(s=>{const o=e[s];null!=o&&(r[s]=o)}),this.styles.styles.forEach(s=>{if("string"!=typeof s){const o=s;Object.keys(o).forEach(a=>{let l=o[a];l.length>1&&(l=Ka(l,r,t));const c=this.normalizer.normalizePropertyName(a,t);l=this.normalizer.normalizeStyleValue(a,c,l,t),i[c]=l})}}),i}}class hR{constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,this.transitionFactories=[],this.states={},t.states.forEach(r=>{this.states[r.name]=new uR(r.style,r.options&&r.options.params||{},i)}),AD(this.states,"true","1"),AD(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new SD(e,r,this.states))}),this.fallbackTransition=function fR(n,e,t){return new SD(n,{type:1,animation:{type:2,steps:[],options:null},matchers:[(o,a)=>!0],options:null,queryCount:0,depCount:0},e)}(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}}function AD(n,e,t){n.hasOwnProperty(e)?n.hasOwnProperty(t)||(n[t]=n[e]):n.hasOwnProperty(t)&&(n[e]=n[t])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pR=new nl;class mR{constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i,this._animations={},this._playersById={},this.players=[]}register(e,t){const i=[],s=_h(this._driver,t,i,[]);if(i.length)throw function yN(n){return new M(3503,W)}();this._animations[e]=s}_buildPlayer(e,t,i){const r=e.element,s=sD(0,this._normalizer,0,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){const r=[],s=this._animations[e];let o;const a=new Map;if(s?(o=bh(this._driver,t,s,hh,za,{},{},i,pR,r),o.forEach(u=>{const d=Mt(a,u.element,{});u.postStyleProps.forEach(h=>d[h]=null)})):(r.push(function vN(){return new M(3300,W)}()),o=[]),r.length)throw function bN(n){return new M(3504,W)}();a.forEach((u,d)=>{Object.keys(u).forEach(h=>{u[h]=this._driver.computeStyle(d,h,Nn)})});const c=Xn(o.map(u=>{const d=a.get(u.element);return this._buildPlayer(u,{},d)}));return this._playersById[e]=c,c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw function DN(n){return new M(3301,W)}();return t}listen(e,t,i,r){const s=lh(t,"","","");return oh(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if("register"==i)return void this.register(e,r[0]);if("create"==i)return void this.create(e,t,r[0]||{});const s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xD="ng-animate-queued",Eh="ng-animate-disabled",bR=[],TD={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},DR={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},$t="__ng_removed";class Mh{constructor(e,t=""){this.namespaceId=t;const i=e&&e.hasOwnProperty("value");if(this.value=function MR(n){return null!=n?n:null}(i?e.value:e),i){const s=Fr(e);delete s.value,this.options=s}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const i=this.options.params;Object.keys(t).forEach(r=>{null==i[r]&&(i[r]=t[r])})}}}const $s="void",Sh=new Mh($s);class wR{constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,zt(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.hasOwnProperty(t))throw function wN(n,e){return new M(3302,W)}();if(null==i||0==i.length)throw function CN(n){return new M(3303,W)}();if(!function SR(n){return"start"==n||"done"==n}(i))throw function EN(n,e){return new M(3400,W)}();const s=Mt(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);const a=Mt(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||(zt(e,Ga),zt(e,Ga+"-"+t),a[t]=Sh),()=>{this._engine.afterFlush(()=>{const l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw function MN(n){return new M(3401,W)}();return t}trigger(e,t,i,r=!0){const s=this._getTrigger(t),o=new Ah(this.id,t,e);let a=this._engine.statesByElement.get(e);a||(zt(e,Ga),zt(e,Ga+"-"+t),this._engine.statesByElement.set(e,a={}));let l=a[t];const c=new Mh(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a[t]=c,l||(l=Sh),c.value!==$s&&l.value===c.value){if(!function TR(n,e){const t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){const s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}(l.params,c.params)){const m=[],y=s.matchStyles(l.value,l.params,m),v=s.matchStyles(c.value,c.params,m);m.length?this._engine.reportError(m):this._engine.afterFlush(()=>{xi(e,y),Cn(e,v)})}return}const h=Mt(this._engine.playersByElement,e,[]);h.forEach(m=>{m.namespaceId==this.id&&m.triggerName==t&&m.queued&&m.destroy()});let f=s.matchTransition(l.value,c.value,e,c.params),p=!1;if(!f){if(!r)return;f=s.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:f,fromState:l,toState:c,player:o,isFallbackTransition:p}),p||(zt(e,xD),o.onStart(()=>{Or(e,xD)})),o.onDone(()=>{let m=this.players.indexOf(o);m>=0&&this.players.splice(m,1);const y=this._engine.playersByElement.get(e);if(y){let v=y.indexOf(o);v>=0&&y.splice(v,1)}}),this.players.push(o),h.push(o),o}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,i)=>{delete t[e]}),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const i=this._engine.driver.query(e,qa,!0);i.forEach(r=>{if(r[$t])return;const s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){const s=this._engine.statesByElement.get(e),o=new Map;if(s){const a=[];if(Object.keys(s).forEach(l=>{if(o.set(l,s[l].value),this._triggers[l]){const c=this.trigger(e,l,$s,r);c&&a.push(c)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Xn(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){const r=new Set;t.forEach(s=>{const o=s.name;if(r.has(o))return;r.add(o);const l=this._triggers[o].fallbackTransition,c=i[o]||Sh,u=new Mh($s),d=new Ah(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,t){const i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){const s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{const s=e[$t];(!s||s===TD)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){zt(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(i=>{const r=i.player;if(r.destroyed)return;const s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){const l=lh(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,oh(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{const s=i.transition.ast.depCount,o=r.transition.ast.depCount;return 0==s||0==o?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(i=>i.element===e)||t,t}}class CR{constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(r,s)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){const i=new wR(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){const i=this._namespaceList,r=this.namespacesByHostElement,s=i.length-1;if(s>=0){let o=!1;if(void 0!==this.driver.getParentElement){let a=this.driver.getParentElement(t);for(;a;){const l=r.get(a);if(l){const c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}}else for(let a=s;a>=0;a--)if(this.driver.containsElement(i[a].hostElement,t)){i.splice(a+1,0,e),o=!0;break}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){if(!e)return;const i=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(i.hostElement),delete this._namespaceLookup[e];const r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1)}),this.afterFlushAnimationsDone(()=>i.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,i=this.statesByElement.get(e);if(i){const r=Object.keys(i);for(let s=0;s<r.length;s++){const o=i[r[s]].namespaceId;if(o){const a=this._fetchNamespace(o);a&&t.add(a)}}}return t}trigger(e,t,i,r){if(sl(t)){const s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!sl(t))return;const s=t[$t];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;const o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){const o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),zt(e,Eh)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Or(e,Eh))}removeNode(e,t,i,r){if(sl(t)){const s=e?this._fetchNamespace(e):null;if(s?s.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),i){const o=this.namespacesByHostElement.get(t);o&&o.id!==e&&o.removeNode(t,r)}}else this._onRemovalComplete(t,r)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[$t]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return sl(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,qa,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,fh,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Xn(this.players).onDone(()=>e());e()})}processLeaveNode(e){var t;const i=e[$t];if(i&&i.setForRemoval){if(e[$t]=TD,i.namespaceId){this.destroyInnerAnimations(e);const r=this._fetchNamespace(i.namespaceId);r&&r.clearElementCache(e)}this._onRemovalComplete(e,i.setForRemoval)}(null===(t=e.classList)||void 0===t?void 0:t.contains(Eh))&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(r=>{this.markElementAsDisabled(r,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++)zt(this.collectedEnterElements[i],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++)this.processLeaveNode(this.collectedLeaveElements[i]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){const i=this._whenQuietFns;this._whenQuietFns=[],t.length?Xn(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw function SN(n){return new M(3402,W)}()}_flushAnimations(e,t){const i=new nl,r=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(S=>{u.add(S);const T=this.driver.query(S,".ng-animate-queued",!0);for(let O=0;O<T.length;O++)u.add(T[O])});const d=this.bodyNode,h=Array.from(this.statesByElement.keys()),f=FD(h,this.collectedEnterElements),p=new Map;let m=0;f.forEach((S,T)=>{const O=hh+m++;p.set(T,O),S.forEach(Z=>zt(Z,O))});const y=[],v=new Set,_=new Set;for(let S=0;S<this.collectedLeaveElements.length;S++){const T=this.collectedLeaveElements[S],O=T[$t];O&&O.setForRemoval&&(y.push(T),v.add(T),O.hasAnimation?this.driver.query(T,".ng-star-inserted",!0).forEach(Z=>v.add(Z)):_.add(T))}const D=new Map,A=FD(h,Array.from(v));A.forEach((S,T)=>{const O=za+m++;D.set(T,O),S.forEach(Z=>zt(Z,O))}),e.push(()=>{f.forEach((S,T)=>{const O=p.get(T);S.forEach(Z=>Or(Z,O))}),A.forEach((S,T)=>{const O=D.get(T);S.forEach(Z=>Or(Z,O))}),y.forEach(S=>{this.processLeaveNode(S)})});const z=[],_e=[];for(let S=this._namespaceList.length-1;S>=0;S--)this._namespaceList[S].drainQueuedTransitions(t).forEach(O=>{const Z=O.player,ze=O.element;if(z.push(Z),this.collectedEnterElements.length){const ut=ze[$t];if(ut&&ut.setForMove){if(ut.previousTriggersValues&&ut.previousTriggersValues.has(O.triggerName)){const Fi=ut.previousTriggersValues.get(O.triggerName),ii=this.statesByElement.get(O.element);ii&&ii[O.triggerName]&&(ii[O.triggerName].value=Fi)}return void Z.destroy()}}const En=!d||!this.driver.containsElement(d,ze),It=D.get(ze),ni=p.get(ze),De=this._buildInstruction(O,i,ni,It,En);if(De.errors&&De.errors.length)return void _e.push(De);if(En)return Z.onStart(()=>xi(ze,De.fromStyles)),Z.onDestroy(()=>Cn(ze,De.toStyles)),void r.push(Z);if(O.isFallbackTransition)return Z.onStart(()=>xi(ze,De.fromStyles)),Z.onDestroy(()=>Cn(ze,De.toStyles)),void r.push(Z);const Tw=[];De.timelines.forEach(ut=>{ut.stretchStartingKeyframe=!0,this.disabledNodes.has(ut.element)||Tw.push(ut)}),De.timelines=Tw,i.append(ze,De.timelines),o.push({instruction:De,player:Z,element:ze}),De.queriedElements.forEach(ut=>Mt(a,ut,[]).push(Z)),De.preStyleProps.forEach((ut,Fi)=>{const ii=Object.keys(ut);if(ii.length){let Oi=l.get(Fi);Oi||l.set(Fi,Oi=new Set),ii.forEach(Vh=>Oi.add(Vh))}}),De.postStyleProps.forEach((ut,Fi)=>{const ii=Object.keys(ut);let Oi=c.get(Fi);Oi||c.set(Fi,Oi=new Set),ii.forEach(Vh=>Oi.add(Vh))})});if(_e.length){const S=[];_e.forEach(T=>{S.push(function AN(n,e){return new M(3505,W)}())}),z.forEach(T=>T.destroy()),this.reportError(S)}const be=new Map,At=new Map;o.forEach(S=>{const T=S.element;i.has(T)&&(At.set(T,T),this._beforeAnimationBuild(S.player.namespaceId,S.instruction,be))}),r.forEach(S=>{const T=S.element;this._getPreviousPlayers(T,!1,S.namespaceId,S.triggerName,null).forEach(Z=>{Mt(be,T,[]).push(Z),Z.destroy()})});const xt=y.filter(S=>ND(S,l,c)),Tt=new Map;kD(Tt,this.driver,_,c,Nn).forEach(S=>{ND(S,l,c)&&xt.push(S)});const Rn=new Map;f.forEach((S,T)=>{kD(Rn,this.driver,new Set(S),l,"!")}),xt.forEach(S=>{const T=Tt.get(S),O=Rn.get(S);Tt.set(S,Object.assign(Object.assign({},T),O))});const on=[],Lr=[],Vr={};o.forEach(S=>{const{element:T,player:O,instruction:Z}=S;if(i.has(T)){if(u.has(T))return O.onDestroy(()=>Cn(T,Z.toStyles)),O.disabled=!0,O.overrideTotalTime(Z.totalTime),void r.push(O);let ze=Vr;if(At.size>1){let It=T;const ni=[];for(;It=It.parentNode;){const De=At.get(It);if(De){ze=De;break}ni.push(It)}ni.forEach(De=>At.set(De,ze))}const En=this._buildAnimation(O.namespaceId,Z,be,s,Rn,Tt);if(O.setRealPlayer(En),ze===Vr)on.push(O);else{const It=this.playersByElement.get(ze);It&&It.length&&(O.parentPlayer=Xn(It)),r.push(O)}}else xi(T,Z.fromStyles),O.onDestroy(()=>Cn(T,Z.toStyles)),Lr.push(O),u.has(T)&&r.push(O)}),Lr.forEach(S=>{const T=s.get(S.element);if(T&&T.length){const O=Xn(T);S.setRealPlayer(O)}}),r.forEach(S=>{S.parentPlayer?S.syncPlayerEvents(S.parentPlayer):S.destroy()});for(let S=0;S<y.length;S++){const T=y[S],O=T[$t];if(Or(T,za),O&&O.hasAnimation)continue;let Z=[];if(a.size){let En=a.get(T);En&&En.length&&Z.push(...En);let It=this.driver.query(T,fh,!0);for(let ni=0;ni<It.length;ni++){let De=a.get(It[ni]);De&&De.length&&Z.push(...De)}}const ze=Z.filter(En=>!En.destroyed);ze.length?AR(this,T,ze):this.processLeaveNode(T)}return y.length=0,on.forEach(S=>{this.players.push(S),S.onDone(()=>{S.destroy();const T=this.players.indexOf(S);this.players.splice(T,1)}),S.play()}),on}elementContainsData(e,t){let i=!1;const r=t[$t];return r&&r.setForRemoval&&(i=!0),this.playersByElement.has(t)&&(i=!0),this.playersByQueriedElement.has(t)&&(i=!0),this.statesByElement.has(t)&&(i=!0),this._fetchNamespace(e).elementContainsData(t)||i}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){const a=this.playersByQueriedElement.get(e);a&&(o=a)}else{const a=this.playersByElement.get(e);if(a){const l=!s||s==$s;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||o.push(c)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){const s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:t.triggerName;for(const l of t.timelines){const c=l.element,u=c!==s,d=Mt(i,c,[]);this._getPreviousPlayers(c,u,o,a,t.toState).forEach(f=>{const p=f.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),f.destroy(),d.push(f)})}xi(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){const a=t.triggerName,l=t.element,c=[],u=new Set,d=new Set,h=t.timelines.map(p=>{const m=p.element;u.add(m);const y=m[$t];if(y&&y.removedBeforeQueried)return new js(p.duration,p.delay);const v=m!==l,_=function xR(n){const e=[];return OD(n,e),e}((i.get(m)||bR).map(be=>be.getRealPlayer())).filter(be=>!!be.element&&be.element===m),D=s.get(m),A=o.get(m),z=sD(0,this._normalizer,0,p.keyframes,D,A),_e=this._buildPlayer(p,z,_);if(p.subTimeline&&r&&d.add(m),v){const be=new Ah(e,a,m);be.setRealPlayer(_e),c.push(be)}return _e});c.forEach(p=>{Mt(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>function ER(n,e,t){let i;if(n instanceof Map){if(i=n.get(e),i){if(i.length){const r=i.indexOf(t);i.splice(r,1)}0==i.length&&n.delete(e)}}else if(i=n[e],i){if(i.length){const r=i.indexOf(t);i.splice(r,1)}0==i.length&&delete n[e]}return i}(this.playersByQueriedElement,p.element,p))}),u.forEach(p=>zt(p,mD));const f=Xn(h);return f.onDestroy(()=>{u.forEach(p=>Or(p,mD)),Cn(l,t.toStyles)}),d.forEach(p=>{Mt(r,p,[]).push(f)}),f}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new js(e.duration,e.delay)}}class Ah{constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i,this._player=new js,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(i=>oh(e,t,void 0,i))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){Mt(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function sl(n){return n&&1===n.nodeType}function ID(n,e){const t=n.style.display;return n.style.display=null!=e?e:"none",t}function kD(n,e,t,i,r){const s=[];t.forEach(l=>s.push(ID(l)));const o=[];i.forEach((l,c)=>{const u={};l.forEach(d=>{const h=u[d]=e.computeStyle(c,d,r);(!h||0==h.length)&&(c[$t]=DR,o.push(c))}),n.set(c,u)});let a=0;return t.forEach(l=>ID(l,s[a++])),o}function FD(n,e){const t=new Map;if(n.forEach(a=>t.set(a,[])),0==e.length)return t;const r=new Set(e),s=new Map;function o(a){if(!a)return 1;let l=s.get(a);if(l)return l;const c=a.parentNode;return l=t.has(c)?c:r.has(c)?1:o(c),s.set(a,l),l}return e.forEach(a=>{const l=o(a);1!==l&&t.get(l).push(a)}),t}function zt(n,e){var t;null===(t=n.classList)||void 0===t||t.add(e)}function Or(n,e){var t;null===(t=n.classList)||void 0===t||t.remove(e)}function AR(n,e,t){Xn(t).onDone(()=>n.processLeaveNode(e))}function OD(n,e){for(let t=0;t<n.length;t++){const i=n[t];i instanceof iD?OD(i.players,e):e.push(i)}}function ND(n,e,t){const i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}class ol{constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i,this._triggerCache={},this.onRemovalComplete=(r,s)=>{},this._transitionEngine=new CR(e,t,i),this._timelineEngine=new mR(e,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){const o=e+"-"+r;let a=this._triggerCache[o];if(!a){const l=[],u=_h(this._driver,s,l,[]);if(l.length)throw function gN(n,e){return new M(3404,W)}();a=function dR(n,e,t){return new hR(n,e,t)}(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i,r){this._transitionEngine.removeNode(e,t,r||!1,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if("@"==i.charAt(0)){const[s,o]=oD(i);this._timelineEngine.command(s,t,o,r)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if("@"==i.charAt(0)){const[o,a]=oD(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kR=(()=>{class n{constructor(t,i,r){this._element=t,this._startStyles=i,this._endStyles=r,this._state=0;let s=n.initialStylesByElement.get(t);s||n.initialStylesByElement.set(t,s={}),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Cn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Cn(this._element,this._initialStyles),this._endStyles&&(Cn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(xi(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(xi(this._element,this._endStyles),this._endStyles=null),Cn(this._element,this._initialStyles),this._state=3)}}return n.initialStylesByElement=new WeakMap,n})();function xh(n){let e=null;const t=Object.keys(n);for(let i=0;i<t.length;i++){const r=t[i];FR(r)&&(e=e||{},e[r]=n[r])}return e}function FR(n){return"display"===n||"position"===n}class RD{constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,i){return e.animate(t,i)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};if(this.hasStarted()){const t=this._finalKeyframe;Object.keys(t).forEach(i=>{"offset"!=i&&(e[i]=this._finished?t[i]:bD(this.element,i))})}this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}}class OR{validateStyleProperty(e){return uD(e)}matchesElement(e,t){return!1}containsElement(e,t){return dD(e,t)}getParentElement(e){return uh(e)}query(e,t,i){return hD(e,t,i)}computeStyle(e,t,i){return window.getComputedStyle(e)[t]}animate(e,t,i,r,s,o=[]){const l={duration:i,delay:r,fill:0==r?"both":"forwards"};s&&(l.easing=s);const c={},u=o.filter(h=>h instanceof RD);(function LN(n,e){return 0===n||0===e})(i,r)&&u.forEach(h=>{let f=h.currentSnapshot;Object.keys(f).forEach(p=>c[p]=f[p])}),t=function VN(n,e,t){const i=Object.keys(t);if(i.length&&e.length){let s=e[0],o=[];if(i.forEach(a=>{s.hasOwnProperty(a)||o.push(a),s[a]=t[a]}),o.length)for(var r=1;r<e.length;r++){let a=e[r];o.forEach(function(l){a[l]=bD(n,l)})}}return e}(e,t=t.map(h=>Jn(h,!1)),c);const d=function IR(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=xh(e[0]),e.length>1&&(i=xh(e[e.length-1]))):e&&(t=xh(e)),t||i?new kR(n,t,i):null}(e,t);return new RD(e,t,l,d)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let NR=(()=>{class n extends Yb{constructor(t,i){super(),this._nextAnimationId=0,this._renderer=t.createRenderer(i.body,{id:"0",encapsulation:Wt.None,styles:[],data:{animation:[]}})}build(t){const i=this._nextAnimationId.toString();this._nextAnimationId++;const r=Array.isArray(t)?Jb(t):t;return PD(this._renderer,null,i,"register",[r]),new RR(i,this._renderer)}}return n.\u0275fac=function(t){return new(t||n)(E(ws),E(oe))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();class RR extends class WO{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new PR(this._id,e,t||{},this._renderer)}}class PR{constructor(e,t,i,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",i)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return PD(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){var e,t;return null!==(t=null===(e=this._renderer.engine.players[+this.id])||void 0===e?void 0:e.getPosition())&&void 0!==t?t:0}}function PD(n,e,t,i,r){return n.setProperty(e,`@@${t}:${i}`,r)}const LD="@.disabled";let LR=(()=>{class n{constructor(t,i,r){this.delegate=t,this.engine=i,this._zone=r,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),i.onRemovalComplete=(s,o)=>{const a=null==o?void 0:o.parentNode(s);a&&o.removeChild(a,s)}}createRenderer(t,i){const s=this.delegate.createRenderer(t,i);if(!(t&&i&&i.data&&i.data.animation)){let u=this._rendererCache.get(s);return u||(u=new VD("",s,this.engine),this._rendererCache.set(s,u)),u}const o=i.id,a=i.id+"-"+this._currentId;this._currentId++,this.engine.register(a,t);const l=u=>{Array.isArray(u)?u.forEach(l):this.engine.registerTrigger(o,a,t,u.name,u)};return i.data.animation.forEach(l),new VR(this,a,s,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(t,i,r){t>=0&&t<this._microtaskId?this._zone.run(()=>i(r)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(s=>{const[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([i,r]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return n.\u0275fac=function(t){return new(t||n)(E(ws),E(ol),E(ne))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();class VD{constructor(e,t,i){this.namespaceId=e,this.delegate=t,this.engine=i,this.destroyNode=this.delegate.destroyNode?r=>t.destroyNode(r):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i){this.engine.onRemove(this.namespaceId,t,this.delegate,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){"@"==t.charAt(0)&&t==LD?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.delegate.listen(e,t,i)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class VR extends VD{constructor(e,t,i,r){super(t,i,r),this.factory=e,this.namespaceId=t}setProperty(e,t,i){"@"==t.charAt(0)?"."==t.charAt(1)&&t==LD?this.disableAnimations(e,i=void 0===i||!!i):this.engine.process(this.namespaceId,e,t.substr(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i){if("@"==t.charAt(0)){const r=function BR(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}(e);let s=t.substr(1),o="";return"@"!=s.charAt(0)&&([s,o]=function HR(n){const e=n.indexOf(".");return[n.substring(0,e),n.substr(e+1)]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)),this.engine.listen(this.namespaceId,r,s,o,a=>{this.factory.scheduleListenerCallback(a._data||-1,i,a)})}return this.delegate.listen(e,t,i)}}let jR=(()=>{class n extends ol{constructor(t,i,r){super(t.body,i,r)}ngOnDestroy(){this.flush()}}return n.\u0275fac=function(t){return new(t||n)(E(oe),E(dh),E(wh))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();const Ii=new x("AnimationModuleType"),BD=[{provide:Yb,useClass:NR},{provide:wh,useFactory:function UR(){return new oR}},{provide:ol,useClass:jR},{provide:ws,useFactory:function $R(n,e,t){return new LR(n,e,t)},deps:[Ea,ol,ne]}],HD=[{provide:dh,useFactory:()=>new OR},{provide:Ii,useValue:"BrowserAnimations"},...BD],zR=[{provide:dh,useClass:fD},{provide:Ii,useValue:"NoopAnimations"},...BD];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let GR=(()=>{class n{static withConfig(t){return{ngModule:n,providers:t.disableAnimations?zR:HD}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({providers:HD,imports:[gv]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const WR=new x("mat-sanity-checks",{providedIn:"root",factory:function qR(){return!0}});let He=(()=>{class n{constructor(t,i,r){this._sanityChecks=i,this._document=r,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!function Q1(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}}return n.\u0275fac=function(t){return new(t||n)(E(GO),E(WR,8),E(oe))},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[kb],kb]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Th(n){return class extends n{constructor(...e){super(...e),this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=Be(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ll(n,e){return class extends n{constructor(...t){super(...t),this.defaultColor=e,this.color=e}get color(){return this._color}set color(t){const i=t||this.defaultColor;i!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),i&&this._elementRef.nativeElement.classList.add(`mat-${i}`),this._color=i)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nr(n){return class extends n{constructor(...e){super(...e),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Be(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let UD=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=I({type:n,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zs(n,e,t){n.nativeElement.classList.toggle(e,t)}let zD=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He],He]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ZR{constructor(e,t,i){this._renderer=e,this.element=t,this.config=i,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const GD={enterDuration:225,exitDuration:150},Ih=Xd({passive:!0}),qD=["mousedown","touchstart"],WD=["mouseup","mouseleave","touchend","touchcancel"];class XR{constructor(e,t,i,r){this._target=e,this._ngZone=t,this._isPointerDown=!1,this._activeRipples=new Set,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=Mi(i))}fadeInRipple(e,t,i={}){const r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=Object.assign(Object.assign({},GD),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);const o=i.radius||function eP(n,e,t){const i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}(e,t,r),a=e-r.left,l=t-r.top,c=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=a-o+"px",u.style.top=l-o+"px",u.style.height=2*o+"px",u.style.width=2*o+"px",null!=i.color&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u),function JR(n){window.getComputedStyle(n).getPropertyValue("opacity")}(u),u.style.transform="scale(1)";const d=new ZR(this,u,i);return d.state=0,this._activeRipples.add(d),i.persistent||(this._mostRecentTransientRipple=d),this._runTimeoutOutsideZone(()=>{const h=d===this._mostRecentTransientRipple;d.state=1,!i.persistent&&(!h||!this._isPointerDown)&&d.fadeOut()},c),d}fadeOutRipple(e){const t=this._activeRipples.delete(e);if(e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),this._activeRipples.size||(this._containerRect=null),!t)return;const i=e.element,r=Object.assign(Object.assign({},GD),e.config.animation);i.style.transitionDuration=`${r.exitDuration}ms`,i.style.opacity="0",e.state=2,this._runTimeoutOutsideZone(()=>{e.state=3,i.remove()},r.exitDuration)}fadeOutAll(){this._activeRipples.forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._activeRipples.forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=Mi(e);!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,this._registerEvents(qD))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(WD),this._pointerUpEventsRegistered=!0)}_onMousedown(e){const t=Gb(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!qb(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._activeRipples.forEach(e=>{!e.config.persistent&&(1===e.state||e.config.terminateOnPointerUp&&0===e.state)&&e.fadeOut()}))}_runTimeoutOutsideZone(e,t=0){this._ngZone.runOutsideAngular(()=>setTimeout(e,t))}_registerEvents(e){this._ngZone.runOutsideAngular(()=>{e.forEach(t=>{this._triggerElement.addEventListener(t,this,Ih)})})}_removeTriggerEvents(){this._triggerElement&&(qD.forEach(e=>{this._triggerElement.removeEventListener(e,this,Ih)}),this._pointerUpEventsRegistered&&WD.forEach(e=>{this._triggerElement.removeEventListener(e,this,Ih)}))}}const tP=new x("mat-ripple-global-options");let Rr=(()=>{class n{constructor(t,i,r,s,o){this._elementRef=t,this._animationMode=o,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new XR(this,i,t,r)}get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:Object.assign(Object.assign(Object.assign({},this._globalOptions.animation),"NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return"number"==typeof t?this._rippleRenderer.fadeInRipple(t,i,Object.assign(Object.assign({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,Object.assign(Object.assign({},this.rippleConfig),t))}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(ne),g(Dn),g(tP,8),g(Ii,8))},n.\u0275dir=I({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){2&t&&Ee("mat-ripple-unbounded",i.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),n})(),kh=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He],He]}),n})(),KD=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He]]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const iP=["*",[["mat-toolbar-row"]]],rP=["*","mat-toolbar-row"],sP=ll(class{constructor(n){this._elementRef=n}});let QD=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=I({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),n})(),oP=(()=>{class n extends sP{constructor(t,i,r){super(t),this._platform=i,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(Dn),g(oe))},n.\u0275cmp=je({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,i,r){if(1&t&&Et(r,QD,5),2&t){let s;Pe(s=Le())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,i){2&t&&Ee("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",0===i._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[B],ngContentSelectors:rP,decls:2,vars:0,template:function(t,i){1&t&&(ot(iP),ye(0),ye(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),n})(),aP=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He],He]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const lP=["mat-button",""],cP=["*"],dP=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],hP=ll(Th(Nr(class{constructor(n){this._elementRef=n}})));let fP=(()=>{class n extends hP{constructor(t,i,r){super(t),this._focusMonitor=i,this._animationMode=r,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const s of dP)this._hasHostAttributes(s)&&this._getHostElement().classList.add(s);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,i){t?this._focusMonitor.focusVia(this._getHostElement(),t,i):this._getHostElement().focus(i)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(i=>this._getHostElement().hasAttribute(i))}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(Ha),g(Ii,8))},n.\u0275cmp=je({type:n,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,i){if(1&t&&yi(Rr,5),2&t){let r;Pe(r=Le())&&(i.ripple=r.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,i){2&t&&($e("disabled",i.disabled||null),Ee("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-button-disabled",i.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[B],attrs:lP,ngContentSelectors:cP,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,i){1&t&&(ot(),$(0,"span",0),ye(1),X(),Vt(2,"span",1)(3,"span",2)),2&t&&(Xe(2),Ee("mat-button-ripple-round",i.isRoundButton||i.isIconButton),et("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",i.isIconButton)("matRippleTrigger",i._getHostElement()))},directives:[Rr],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),n})(),pP=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[kh,He],He]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ZD(n){return nt((e,t)=>{let s,i=null,r=!1;i=e.subscribe(new ht(t,void 0,void 0,o=>{s=Gt(n(o,ZD(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}
/**
       * @license Angular v13.3.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yP{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ei{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const i=t.indexOf(":");if(i>0){const r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let i=e[t];const r=t.toLowerCase();"string"==typeof i&&(i=[i]),i.length>0&&(this.headers.set(r,i),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof ei?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new ei;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof ei?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if("string"==typeof i&&(i=[i]),0===i.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":const s=e.value;if(s){let o=this.headers.get(t);if(!o)return;o=o.filter(a=>-1===s.indexOf(a)),0===o.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vP{encodeKey(e){return YD(e)}encodeValue(e){return YD(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const DP=/%(\d[a-f0-9])/gi,wP={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function YD(n){return encodeURIComponent(n).replace(DP,(e,t)=>{var i;return null!==(i=wP[t])&&void 0!==i?i:e})}function XD(n){return`${n}`}class ti{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new vP,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function bP(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const s=r.indexOf("="),[o,a]=-1==s?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const i=e.fromObject[t];this.map.set(t,Array.isArray(i)?i:[i])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(i=>{const r=e[i];Array.isArray(r)?r.forEach(s=>{t.push({param:i,value:s,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new ti({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(XD(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let i=this.map.get(e.param)||[];const r=i.indexOf(XD(e.value));-1!==r&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class CP{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function JD(n){return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer}function ew(n){return"undefined"!=typeof Blob&&n instanceof Blob}function tw(n){return"undefined"!=typeof FormData&&n instanceof FormData}class Gs{constructor(e,t,i,r){let s;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function EP(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==i?i:null,s=r):s=i,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new ei),this.context||(this.context=new CP),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=t;else{const a=t.indexOf("?");this.urlWithParams=t+(-1===a?"?":a<t.length-1?"&":"")+o}}else this.params=new ti,this.urlWithParams=t}serializeBody(){return null===this.body?null:JD(this.body)||ew(this.body)||tw(this.body)||function MP(n){return"undefined"!=typeof URLSearchParams&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof ti?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||tw(this.body)?null:ew(this.body)?this.body.type||null:JD(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof ti?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const i=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,u=e.params||this.params;const d=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((h,f)=>h.set(f,e.setHeaders[f]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((h,f)=>h.set(f,e.setParams[f]),u)),new Gs(i,r,o,{params:u,headers:c,context:d,reportProgress:l,responseType:s,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var We=(()=>((We=We||{})[We.Sent=0]="Sent",We[We.UploadProgress=1]="UploadProgress",We[We.ResponseHeader=2]="ResponseHeader",We[We.DownloadProgress=3]="DownloadProgress",We[We.Response=4]="Response",We[We.User=5]="User",We))();class Fh extends class SP{constructor(e,t=200,i="OK"){this.headers=e.headers||new ei,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}{constructor(e={}){super(e),this.type=We.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new Fh({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Oh(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let iw=(()=>{class n{constructor(t){this.handler=t}request(t,i,r={}){let s;if(t instanceof Gs)s=t;else{let l,c;l=r.headers instanceof ei?r.headers:new ei(r.headers),r.params&&(c=r.params instanceof ti?r.params:new ti({fromObject:r.params})),s=new Gs(t,i,void 0!==r.body?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const o=Yn(s).pipe(function _P(n,e){return Q(e)?Hr(n,e,1):Hr(n,1)}(l=>this.handler.handle(l)));if(t instanceof Gs||"events"===r.observe)return o;const a=o.pipe(wn(l=>l instanceof Fh));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(Ke(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(Ke(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(Ke(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(Ke(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:(new ti).append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,Oh(r,i))}post(t,i,r={}){return this.request("POST",t,Oh(r,i))}put(t,i,r={}){return this.request("PUT",t,Oh(r,i))}}return n.\u0275fac=function(t){return new(t||n)(E(yP))},n.\u0275prov=P({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const xP=["*"];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let cl;function qs(n){var e;return(null===(e=function TP(){if(void 0===cl&&(cl=null,"undefined"!=typeof window)){const n=window;void 0!==n.trustedTypes&&(cl=n.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return cl}())||void 0===e?void 0:e.createHTML(n))||n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rw(n){return Error(`Unable to find icon with the name "${n}"`)}function sw(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function ow(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}class ki{constructor(e,t,i){this.url=e,this.svgText=t,this.options=i}}let ul=(()=>{class n{constructor(t,i,r,s){this._httpClient=t,this._sanitizer=i,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=r}addSvgIcon(t,i,r){return this.addSvgIconInNamespace("",t,i,r)}addSvgIconLiteral(t,i,r){return this.addSvgIconLiteralInNamespace("",t,i,r)}addSvgIconInNamespace(t,i,r,s){return this._addSvgIconConfig(t,i,new ki(r,null,s))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,i,r,s){const o=this._sanitizer.sanitize(ee.HTML,r);if(!o)throw ow(r);const a=qs(o);return this._addSvgIconConfig(t,i,new ki("",a,s))}addSvgIconSet(t,i){return this.addSvgIconSetInNamespace("",t,i)}addSvgIconSetLiteral(t,i){return this.addSvgIconSetLiteralInNamespace("",t,i)}addSvgIconSetInNamespace(t,i,r){return this._addSvgIconSetConfig(t,new ki(i,null,r))}addSvgIconSetLiteralInNamespace(t,i,r){const s=this._sanitizer.sanitize(ee.HTML,i);if(!s)throw ow(i);const o=qs(s);return this._addSvgIconSetConfig(t,new ki("",o,r))}registerFontClassAlias(t,i=t){return this._fontCssClassesByAlias.set(t,i),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const i=this._sanitizer.sanitize(ee.RESOURCE_URL,t);if(!i)throw sw(t);const r=this._cachedIconsByUrl.get(i);return r?Yn(dl(r)):this._loadSvgIconFromConfig(new ki(t,null)).pipe(Pa(s=>this._cachedIconsByUrl.set(i,s)),Ke(s=>dl(s)))}getNamedSvgIcon(t,i=""){const r=aw(i,t);let s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(i,t),s)return this._svgIconConfigs.set(r,s),this._getSvgFromConfig(s);const o=this._iconSetConfigs.get(i);return o?this._getSvgFromIconSetConfigs(t,o):
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function mP(n,e){const t=Q(n)?n:()=>n,i=r=>r.error(t());return new Se(e?r=>e.schedule(i,0,r):i)}(rw(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Yn(dl(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ke(i=>dl(i)))}_getSvgFromIconSetConfigs(t,i){const r=this._extractIconWithNameFromAnySet(t,i);return r?Yn(r):Dv(i.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(ZD(a=>{const c=`Loading icon set URL: ${this._sanitizer.sanitize(ee.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),Yn(null)})))).pipe(Ke(()=>{const o=this._extractIconWithNameFromAnySet(t,i);if(!o)throw rw(t);return o}))}_extractIconWithNameFromAnySet(t,i){for(let r=i.length-1;r>=0;r--){const s=i[r];if(s.svgText&&s.svgText.toString().indexOf(t)>-1){const o=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(o,t,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Pa(i=>t.svgText=i),Ke(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Yn(null):this._fetchIcon(t).pipe(Pa(i=>t.svgText=i))}_extractSvgIconFromSet(t,i,r){const s=t.querySelector(`[id="${i}"]`);if(!s)return null;const o=s.cloneNode(!0);if(o.removeAttribute("id"),"svg"===o.nodeName.toLowerCase())return this._setSvgAttributes(o,r);if("symbol"===o.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(o),r);const a=this._svgElementFromString(qs("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,r)}_svgElementFromString(t){const i=this._document.createElement("DIV");i.innerHTML=t;const r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){const i=this._svgElementFromString(qs("<svg></svg>")),r=t.attributes;for(let s=0;s<r.length;s++){const{name:o,value:a}=r[s];"id"!==o&&i.setAttribute(o,a)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&i.appendChild(t.childNodes[s].cloneNode(!0));return i}_setSvgAttributes(t,i){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),i&&i.viewBox&&t.setAttribute("viewBox",i.viewBox),t}_fetchIcon(t){var i;const{url:r,options:s}=t,o=null!==(i=null==s?void 0:s.withCredentials)&&void 0!==i&&i;if(!this._httpClient)throw function IP(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==r)throw Error(`Cannot fetch icon from URL "${r}".`);const a=this._sanitizer.sanitize(ee.RESOURCE_URL,r);if(!a)throw sw(r);const l=this._inProgressUrlFetches.get(a);if(l)return l;const c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(Ke(u=>qs(u)),function gP(n){return nt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}(()=>this._inProgressUrlFetches.delete(a)),ff());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(t,i,r){return this._svgIconConfigs.set(aw(t,i),r),this}_addSvgIconSetConfig(t,i){const r=this._iconSetConfigs.get(t);return r?r.push(i):this._iconSetConfigs.set(t,[i]),this}_svgElementFromConfig(t){if(!t.svgElement){const i=this._svgElementFromString(t.svgText);this._setSvgAttributes(i,t.options),t.svgElement=i}return t.svgElement}_getIconConfigFromResolvers(t,i){for(let r=0;r<this._resolvers.length;r++){const s=this._resolvers[r](i,t);if(s)return FP(s)?new ki(s.url,null,s.options):new ki(s,null)}}}return n.\u0275fac=function(t){return new(t||n)(E(iw,8),E(Md),E(oe,8),E($n))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function dl(n){return n.cloneNode(!0)}function aw(n,e){return n+":"+e}function FP(n){return!(!n.url||!n.options)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const OP=ll(class{constructor(n){this._elementRef=n}}),NP=new x("mat-icon-location",{providedIn:"root",factory:function RP(){const n=xo(oe),e=n?n.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),lw=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],PP=lw.map(n=>`[${n}]`).join(", "),LP=/^url\(['"]?#(.*?)['"]?\)$/;let VP=(()=>{class n extends OP{constructor(t,i,r,s,o){super(t),this._iconRegistry=i,this._location=s,this._errorHandler=o,this._inline=!1,this._currentIconFetch=dt.EMPTY,r||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=Be(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const i=this._cleanupFontValue(t);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const i=this._cleanupFontValue(t);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const i=t.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let i=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){const r=t.childNodes[i];(1!==r.nodeType||"svg"===r.nodeName.toLowerCase())&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,i=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();i!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),i&&t.classList.add(i),this._previousFontSetClass=i),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const i=this._elementsWithExternalReferences;i&&i.forEach((r,s)=>{r.forEach(o=>{s.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){const i=t.querySelectorAll(PP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<i.length;s++)lw.forEach(o=>{const a=i[s],l=a.getAttribute(o),c=l?l.match(LP):null;if(c){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:o,value:c[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[i,r]=this._splitIconName(t);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Ur(1)).subscribe(s=>this._setSvgElement(s),s=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${i}:${r}! ${s.message}`))})}}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(ul),function Gi(n){return function dE(n,e){if("class"===e)return n.classes;if("style"===e)return n.styles;const t=n.attrs;if(t){const i=t.length;let r=0;for(;r<i;){const s=t[r];if(zf(s))break;if(0===s)r+=2;else if("number"==typeof s)for(r++;r<i&&"string"==typeof t[r];)r++;else{if(s===e)return t[r+1];r+=2}}}return null}(Oe(),n)}("aria-hidden"),g(NP),g($n))},n.\u0275cmp=je({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,i){2&t&&($e("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet),Ee("mat-icon-inline",i.inline)("mat-icon-no-color","primary"!==i.color&&"accent"!==i.color&&"warn"!==i.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[B],ngContentSelectors:xP,decls:1,vars:0,template:function(t,i){1&t&&(ot(),ye(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),n})(),BP=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He],He]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const HP=["addListener","removeListener"],jP=["addEventListener","removeEventListener"],UP=["on","off"];function Ws(n,e,t,i){if(Q(t)&&(i=t,t=void 0),i)return Ws(n,e,t).pipe(bv(i));const[r,s]=function GP(n){return Q(n.addEventListener)&&Q(n.removeEventListener)}(n)?jP.map(o=>a=>n[o](e,a,t)):function $P(n){return Q(n.addListener)&&Q(n.removeListener)}(n)?HP.map(cw(n,e)):function zP(n){return Q(n.on)&&Q(n.off)}(n)?UP.map(cw(n,e)):[];if(!r&&Cl(n))return Hr(o=>Ws(o,e,t))(Gt(n));if(!r)throw new TypeError("Invalid event target");return new Se(o=>{const a=(...l)=>o.next(1<l.length?l:l[0]);return r(a),()=>s(a)})}function cw(n,e){return t=>i=>n[t](e,i)}const Ks={schedule(n){let e=requestAnimationFrame,t=cancelAnimationFrame;const{delegate:i}=Ks;i&&(e=i.requestAnimationFrame,t=i.cancelAnimationFrame);const r=e(s=>{t=void 0,n(s)});return new dt(()=>null==t?void 0:t(r))},requestAnimationFrame(...n){const{delegate:e}=Ks;return((null==e?void 0:e.requestAnimationFrame)||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:e}=Ks;return((null==e?void 0:e.cancelAnimationFrame)||cancelAnimationFrame)(...n)},delegate:void 0};new class WP extends th{flush(e){this._active=!0,this._scheduled=void 0;const{actions:t}=this;let i,r=-1;e=e||t.shift();const s=t.length;do{if(i=e.execute(e.state,e.delay))break}while(++r<s&&(e=t.shift()));if(this._active=!1,i){for(;++r<s&&(e=t.shift());)e.unsubscribe();throw i}}}(class qP extends eh{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,i=0){return null!==i&&i>0?super.requestAsyncId(e,t,i):(e.actions.push(this),e._scheduled||(e._scheduled=Ks.requestAnimationFrame(()=>e.flush(void 0))))}recycleAsyncId(e,t,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(e,t,i);0===e.actions.length&&(Ks.cancelAnimationFrame(t),e._scheduled=void 0)}});let Nh,QP=1;const hl={};function uw(n){return n in hl&&(delete hl[n],!0)}const ZP={setImmediate(n){const e=QP++;return hl[e]=!0,Nh||(Nh=Promise.resolve()),Nh.then(()=>uw(e)&&n()),e},clearImmediate(n){uw(n)}},{setImmediate:YP,clearImmediate:XP}=ZP,fl={setImmediate(...n){const{delegate:e}=fl;return((null==e?void 0:e.setImmediate)||YP)(...n)},clearImmediate(n){const{delegate:e}=fl;return((null==e?void 0:e.clearImmediate)||XP)(n)},delegate:void 0};new class eL extends th{flush(e){this._active=!0,this._scheduled=void 0;const{actions:t}=this;let i,r=-1;e=e||t.shift();const s=t.length;do{if(i=e.execute(e.state,e.delay))break}while(++r<s&&(e=t.shift()));if(this._active=!1,i){for(;++r<s&&(e=t.shift());)e.unsubscribe();throw i}}}(class JP extends eh{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,i=0){return null!==i&&i>0?super.requestAsyncId(e,t,i):(e.actions.push(this),e._scheduled||(e._scheduled=fl.setImmediate(e.flush.bind(e,void 0))))}recycleAsyncId(e,t,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(e,t,i);0===e.actions.length&&(fl.clearImmediate(t),e._scheduled=void 0)}});function dw(n,e=Vb){return function nL(n){return nt((e,t)=>{let i=!1,r=null,s=null,o=!1;const a=()=>{if(null==s||s.unsubscribe(),s=null,i){i=!1;const c=r;r=null,t.next(c)}o&&t.complete()},l=()=>{s=null,o&&t.complete()};e.subscribe(new ht(t,c=>{i=!0,r=c,s||Gt(n(c)).subscribe(s=new ht(t,a,l))},()=>{o=!0,(!i||!s||s.closed)&&t.complete()}))})}(()=>function rL(n=0,e,t=Vb){let i=-1;return null!=e&&(lf(e)?t=e:i=e),new Se(r=>{let s=function iL(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;s<0&&(s=0);let o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=i?this.schedule(void 0,i):r.complete())},s)})}(n,e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rh=(()=>{class n{constructor(t,i,r){this._ngZone=t,this._platform=i,this._scrolled=new pe,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){const i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=20){return this._platform.isBrowser?new Se(i=>{this._globalSubscription||this._addGlobalListener();const r=t>0?this._scrolled.pipe(dw(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Yn()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){const r=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(wn(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(t){const i=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,t)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,i){let r=Mi(i),s=t.getElementRef().nativeElement;do{if(r==s)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>Ws(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(t){return new(t||n)(E(ne),E(Dn),E(oe,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Qs=(()=>{class n{constructor(t,i,r,s){this.elementRef=t,this.scrollDispatcher=i,this.ngZone=r,this.dir=s,this._destroyed=new pe,this._elementScrolled=new Se(o=>this.ngZone.runOutsideAngular(()=>Ws(this.elementRef.nativeElement,"scroll").pipe(tt(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){const i=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==t.left&&(t.left=r?t.end:t.start),null==t.right&&(t.right=r?t.start:t.end),null!=t.bottom&&(t.top=i.scrollHeight-i.clientHeight-t.bottom),r&&0!=Vs()?(null!=t.left&&(t.right=i.scrollWidth-i.clientWidth-t.left),2==Vs()?t.left=t.right:1==Vs()&&(t.left=t.right?-t.right:t.right)):null!=t.right&&(t.left=i.scrollWidth-i.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){const i=this.elementRef.nativeElement;!function q1(){if(null==Ei){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Ei=!1,Ei;if("scrollBehavior"in document.documentElement.style)Ei=!0;else{const n=Element.prototype.scrollTo;Ei=!!n&&!/\{\s*\[native code\]\s*\}/.test(n.toString())}}return Ei}()?(null!=t.top&&(i.scrollTop=t.top),null!=t.left&&(i.scrollLeft=t.left)):i.scrollTo(t)}measureScrollOffset(t){const i="left",r="right",s=this.elementRef.nativeElement;if("top"==t)return s.scrollTop;if("bottom"==t)return s.scrollHeight-s.clientHeight-s.scrollTop;const o=this.dir&&"rtl"==this.dir.value;return"start"==t?t=o?r:i:"end"==t&&(t=o?i:r),o&&2==Vs()?t==i?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:o&&1==Vs()?t==i?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==i?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(Rh),g(ne),g(Ib,8))},n.\u0275dir=I({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),n})(),aL=(()=>{class n{constructor(t,i,r){this._platform=t,this._change=new pe,this._changeListener=s=>{this._change.next(s)},this._document=r,i.runOutsideAngular(()=>{if(t.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=this._document,i=this._getWindow(),r=t.documentElement,s=r.getBoundingClientRect();return{top:-s.top||t.body.scrollTop||i.scrollY||r.scrollTop||0,left:-s.left||t.body.scrollLeft||i.scrollX||r.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(dw(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(t){return new(t||n)(E(Dn),E(ne),E(oe,8))},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),hw=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fw(n){return Ke(()=>n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pl=["*"],lL=["content"];function cL(n,e){if(1&n){const t=Go();$(0,"div",2),ge("click",function(){return ln(t),_r()._onBackdropClicked()}),X()}2&n&&Ee("mat-drawer-shown",_r()._isShowingBackdrop())}function uL(n,e){1&n&&($(0,"mat-drawer-content"),ye(1,2),X())}const dL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],hL=["mat-drawer","mat-drawer-content","*"];function fL(n,e){if(1&n){const t=Go();$(0,"div",2),ge("click",function(){return ln(t),_r()._onBackdropClicked()}),X()}2&n&&Ee("mat-drawer-shown",_r()._isShowingBackdrop())}function pL(n,e){1&n&&($(0,"mat-sidenav-content"),ye(1,2),X())}const mL=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],gL=["mat-sidenav","mat-sidenav-content","*"],pw={transformDrawer:KO("transform",[eD("open, open-instant",Ua({transform:"none",visibility:"visible"})),eD("void",Ua({"box-shadow":"none",visibility:"hidden"})),tD("void => open-instant",Xb("0ms")),tD("void <=> open, open-instant => void",Xb("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},yL=new x("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function vL(){return!1}}),Ph=new x("MAT_DRAWER_CONTAINER");let ml=(()=>{class n extends Qs{constructor(t,i,r,s,o){super(r,s,o),this._changeDetectorRef=t,this._container=i}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}}return n.\u0275fac=function(t){return new(t||n)(g(bn),g(Y(()=>gw)),g(ce),g(Rh),g(ne))},n.\u0275cmp=je({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,i){2&t&&vr("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},features:[J([{provide:Qs,useExisting:n}]),B],ngContentSelectors:pl,decls:1,vars:0,template:function(t,i){1&t&&(ot(),ye(0))},encapsulation:2,changeDetection:0}),n})(),mw=(()=>{class n{constructor(t,i,r,s,o,a,l,c){this._elementRef=t,this._focusTrapFactory=i,this._focusMonitor=r,this._platform=s,this._ngZone=o,this._interactivityChecker=a,this._doc=l,this._container=c,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new pe,this._animationEnd=new pe,this._animationState="void",this.openedChange=new fe(!0),this._openedStream=this.openedChange.pipe(wn(u=>u),Ke(()=>{})),this.openedStart=this._animationStarted.pipe(wn(u=>u.fromState!==u.toState&&0===u.toState.indexOf("open")),fw(void 0)),this._closedStream=this.openedChange.pipe(wn(u=>!u),Ke(()=>{})),this.closedStart=this._animationStarted.pipe(wn(u=>u.fromState!==u.toState&&"void"===u.toState),fw(void 0)),this._destroyed=new pe,this.onPositionChanged=new fe,this._modeChanged=new pe,this.openedChange.subscribe(u=>{u?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{Ws(this._elementRef.nativeElement,"keydown").pipe(wn(u=>27===u.keyCode&&!this.disableClose&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ra(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}(u)),tt(this._destroyed)).subscribe(u=>this._ngZone.run(()=>{this.close(),u.stopPropagation(),u.preventDefault()}))}),this._animationEnd.pipe(Bb((u,d)=>u.fromState===d.fromState&&u.toState===d.toState)).subscribe(u=>{const{fromState:d,toState:h}=u;(0===h.indexOf("open")&&"void"===d||"void"===h&&0===d.indexOf("open"))&&this.openedChange.emit(this._opened)})}get position(){return this._position}set position(t){(t="end"===t?"end":"start")!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Be(t)}get autoFocus(){const t=this._autoFocus;return null==t?"side"===this.mode?"dialog":"first-tabbable":t}set autoFocus(t){("true"===t||"false"===t||null==t)&&(t=Be(t)),this._autoFocus=t}get opened(){return this._opened}set opened(t){this.toggle(Be(t))}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const r=()=>{t.removeEventListener("blur",r),t.removeEventListener("mousedown",r),t.removeAttribute("tabindex")};t.addEventListener("blur",r),t.addEventListener("mousedown",r)})),t.focus(i)}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;const t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{!i&&"function"==typeof this._elementRef.nativeElement.focus&&t.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){"dialog"!==this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){const t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState(),"end"===this._position&&this._updatePositionInParent("end")}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){var t;this._focusTrap&&this._focusTrap.destroy(),null===(t=this._anchor)||void 0===t||t.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);const r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,i,r){return this._opened=t,t?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",i&&this._restoreFocus(r)),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Ur(1)).subscribe(o=>s(o?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}_updatePositionInParent(t){const i=this._elementRef.nativeElement,r=i.parentNode;"end"===t?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(BO),g(Ha),g(Dn),g(ne),g(Ub),g(oe,8),g(Ph,8))},n.\u0275cmp=je({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(1&t&&yi(lL,5),2&t){let r;Pe(r=Le())&&(i._content=r.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){1&t&&_u("@transform.start",function(s){return i._animationStarted.next(s)})("@transform.done",function(s){return i._animationEnd.next(s)}),2&t&&($e("align",null),Cu("@transform",i._animationState),Ee("mat-drawer-end","end"===i.position)("mat-drawer-over","over"===i.mode)("mat-drawer-push","push"===i.mode)("mat-drawer-side","side"===i.mode)("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:pl,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(t,i){1&t&&(ot(),$(0,"div",0,1),ye(2),X())},directives:[Qs],encapsulation:2,data:{animation:[pw.transformDrawer]},changeDetection:0}),n})(),gw=(()=>{class n{constructor(t,i,r,s,o,a=!1,l){this._dir=t,this._element=i,this._ngZone=r,this._changeDetectorRef=s,this._animationMode=l,this._drawers=new Sr,this.backdropClick=new fe,this._destroyed=new pe,this._doCheckSubject=new pe,this._contentMargins={left:null,right:null},this._contentMarginChanges=new pe,t&&t.change.pipe(tt(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),o.change().pipe(tt(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=a}get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Be(t)}get hasBackdrop(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride}set hasBackdrop(t){this._backdropOverride=null==t?null:Be(t)}get scrollable(){return this._userContent||this._content}ngAfterContentInit(){this._allDrawers.changes.pipe(ja(this._allDrawers),tt(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ja(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(function nh(n,e=Lb){return nt((t,i)=>{let r=null,s=null,o=null;const a=()=>{if(r){r.unsubscribe(),r=null;const c=s;s=null,i.next(c)}};function l(){const c=o+n,u=e.now();if(u<c)return r=this.schedule(void 0,c-u),void i.add(r);a()}t.subscribe(new ht(i,c=>{s=c,o=e.now(),r||(r=e.schedule(l,n),i.add(r))},()=>{a(),i.complete()},void 0,()=>{s=r=null}))})}(10),tt(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened)if("side"==this._left.mode)t+=this._left._getWidth();else if("push"==this._left.mode){const r=this._left._getWidth();t+=r,i-=r}if(this._right&&this._right.opened)if("side"==this._right.mode)i+=this._right._getWidth();else if("push"==this._right.mode){const r=this._right._getWidth();i+=r,t-=r}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(wn(i=>i.fromState!==i.toState),tt(this._drawers.changes)).subscribe(i=>{"open-instant"!==i.toState&&"NoopAnimations"!==this._animationMode&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),"side"!==t.mode&&t.openedChange.pipe(tt(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){!t||t.onPositionChanged.pipe(tt(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe(Ur(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(t){t&&t._modeChanged.pipe(tt(hf(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){const i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{"end"==t.position?this._end=t:this._start=t}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._canHaveBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}_canHaveBackdrop(t){return"side"!==t.mode||!!this._backdropOverride}_isDrawerOpen(t){return null!=t&&t.opened}}return n.\u0275fac=function(t){return new(t||n)(g(Ib,8),g(ce),g(ne),g(bn),g(aL),g(yL),g(Ii,8))},n.\u0275cmp=je({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,r){if(1&t&&(Et(r,ml,5),Et(r,mw,5)),2&t){let s;Pe(s=Le())&&(i._content=s.first),Pe(s=Le())&&(i._allDrawers=s)}},viewQuery:function(t,i){if(1&t&&yi(ml,5),2&t){let r;Pe(r=Le())&&(i._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){2&t&&Ee("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[J([{provide:Ph,useExisting:n}])],ngContentSelectors:hL,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){1&t&&(ot(dL),qn(0,cL,1,2,"div",0),ye(1),ye(2,1),qn(3,uL,2,0,"mat-drawer-content",1)),2&t&&(et("ngIf",i.hasBackdrop),Xe(3),et("ngIf",!i._content))},directives:[ml,va],styles:['.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n'],encapsulation:2,changeDetection:0}),n})(),Lh=(()=>{class n extends ml{constructor(t,i,r,s,o){super(t,i,r,s,o)}}return n.\u0275fac=function(t){return new(t||n)(g(bn),g(Y(()=>yw)),g(ce),g(Rh),g(ne))},n.\u0275cmp=je({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(t,i){2&t&&vr("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},features:[J([{provide:Qs,useExisting:n}]),B],ngContentSelectors:pl,decls:1,vars:0,template:function(t,i){1&t&&(ot(),ye(0))},encapsulation:2,changeDetection:0}),n})(),_w=(()=>{class n extends mw{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Be(t)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Va(t)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Va(t)}}return n.\u0275fac=function(){let e;return function(i){return(e||(e=Ie(n)))(i||n)}}(),n.\u0275cmp=je({type:n,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(t,i){2&t&&($e("align",null),vr("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),Ee("mat-drawer-end","end"===i.position)("mat-drawer-over","over"===i.mode)("mat-drawer-push","push"===i.mode)("mat-drawer-side","side"===i.mode)("mat-drawer-opened",i.opened)("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[B],ngContentSelectors:pl,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(t,i){1&t&&(ot(),$(0,"div",0,1),ye(2),X())},directives:[Qs],encapsulation:2,data:{animation:[pw.transformDrawer]},changeDetection:0}),n})(),yw=(()=>{class n extends gw{}return n.\u0275fac=function(){let e;return function(i){return(e||(e=Ie(n)))(i||n)}}(),n.\u0275cmp=je({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,i,r){if(1&t&&(Et(r,Lh,5),Et(r,_w,5)),2&t){let s;Pe(s=Le())&&(i._content=s.first),Pe(s=Le())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,i){2&t&&Ee("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[J([{provide:Ph,useExisting:n}]),B],ngContentSelectors:gL,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){1&t&&(ot(mL),qn(0,fL,1,2,"div",0),ye(1),ye(2,1),qn(3,pL,2,0,"mat-sidenav-content",1)),2&t&&(et("ngIf",i.hasBackdrop),Xe(3),et("ngIf",!i._content))},directives:[Lh,va],styles:['.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n'],encapsulation:2,changeDetection:0}),n})(),bL=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[yd,He,hw],hw,He]}),n})(),DL=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[He],He]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const bw=["*"],CL=[[["","mat-list-avatar",""],["","mat-list-icon",""],["","matListAvatar",""],["","matListIcon",""]],[["","mat-line",""],["","matLine",""]],"*"],EL=["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]","[mat-line], [matLine]","*"],TL=Th(Nr(class{})),IL=Nr(class{}),kL=new x("MatList"),Dw=new x("MatNavList");let FL=(()=>{class n extends TL{constructor(){super(...arguments),this._stateChanges=new pe}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return n.\u0275fac=function(){let e;return function(i){return(e||(e=Ie(n)))(i||n)}}(),n.\u0275cmp=je({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-nav-list","mat-list-base"],inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matNavList"],features:[J([{provide:Dw,useExisting:n}]),B,Yt],ngContentSelectors:bw,decls:1,vars:0,template:function(t,i){1&t&&(ot(),ye(0))},styles:['.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n'],encapsulation:2,changeDetection:0}),n})(),ww=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=I({type:n,selectors:[["","mat-list-avatar",""],["","matListAvatar",""]],hostAttrs:[1,"mat-list-avatar"]}),n})(),Cw=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=I({type:n,selectors:[["","mat-list-icon",""],["","matListIcon",""]],hostAttrs:[1,"mat-list-icon"]}),n})(),OL=(()=>{class n extends IL{constructor(t,i,r,s){super(),this._element=t,this._isInteractiveList=!1,this._destroyed=new pe,this._disabled=!1,this._isInteractiveList=!!(r||s&&"action-list"===s._getListType()),this._list=r||s;const o=this._getHostElement();"button"===o.nodeName.toLowerCase()&&!o.hasAttribute("type")&&o.setAttribute("type","button"),this._list&&this._list._stateChanges.pipe(tt(this._destroyed)).subscribe(()=>{i.markForCheck()})}get disabled(){return this._disabled||!(!this._list||!this._list.disabled)}set disabled(t){this._disabled=Be(t)}ngAfterContentInit(){!function $D(n,e,t="mat"){n.changes.pipe(ja(n)).subscribe(({length:i})=>{zs(e,`${t}-2-line`,!1),zs(e,`${t}-3-line`,!1),zs(e,`${t}-multi-line`,!1),2===i||3===i?zs(e,`${t}-${i}-line`,!0):i>3&&zs(e,`${t}-multi-line`,!0)})}(this._lines,this._element)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_isRippleDisabled(){return!this._isInteractiveList||this.disableRipple||!(!this._list||!this._list.disableRipple)}_getHostElement(){return this._element.nativeElement}}return n.\u0275fac=function(t){return new(t||n)(g(ce),g(bn),g(Dw,8),g(kL,8))},n.\u0275cmp=je({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,i,r){if(1&t&&(Et(r,ww,5),Et(r,Cw,5),Et(r,UD,5)),2&t){let s;Pe(s=Le())&&(i._avatar=s.first),Pe(s=Le())&&(i._icon=s.first),Pe(s=Le())&&(i._lines=s)}},hostAttrs:[1,"mat-list-item","mat-focus-indicator"],hostVars:6,hostBindings:function(t,i){2&t&&Ee("mat-list-item-disabled",i.disabled)("mat-list-item-avatar",i._avatar||i._icon)("mat-list-item-with-avatar",i._avatar||i._icon)},inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matListItem"],features:[B],ngContentSelectors:EL,decls:6,vars:2,consts:[[1,"mat-list-item-content"],["mat-ripple","",1,"mat-list-item-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-list-text"]],template:function(t,i){1&t&&(ot(CL),$(0,"span",0),Vt(1,"span",1),ye(2),$(3,"span",2),ye(4,1),X(),ye(5,2),X()),2&t&&(Xe(1),et("matRippleTrigger",i._getHostElement())("matRippleDisabled",i._isRippleDisabled()))},directives:[Rr],encapsulation:2,changeDetection:0}),n})(),BL=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[zD,kh,He,KD,yd],zD,He,KD,DL]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function HL(n,e){if(1&n&&($(0,"a",14),Bt(1),X()),2&n){const t=e.$implicit;Xe(1),Ko(t)}}function jL(n,e){if(1&n&&($(0,"p"),Bt(1),X()),2&n){const t=e.$implicit;Xe(1),Ko(t)}}let UL=(()=>{class n{constructor(t,i){this.fillerNav=Array.from({length:5},(r,s)=>`Nav Item ${s+1}`),this.fillerContent=Array.from({length:2},()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),this.mobileQuery=i.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>t.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}}return n.\u0275fac=function(t){return new(t||n)(g(bn),g(Z1))},n.\u0275cmp=je({type:n,selectors:[["esp-root"]],decls:37,vars:8,consts:[[1,"example-container"],["color","primary",1,"example-toolbar"],["mat-icon-button","",3,"click"],[1,"example-app-name"],[1,"toolbar-spacer"],[1,"example-sidenav-container"],["fixedTopGap","56","fixedBottomGap","56",3,"mode","fixedInViewport"],["snav",""],["mat-list-item","","routerLink",".",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["color","primary",1,"toolbarNav"],[1,"toolbarRowInfo"],[1,"toolbarRowCommands"],[1,"material-icons","color_blue"],["mat-list-item","","routerLink","."]],template:function(t,i){if(1&t){const r=Go();$(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row")(3,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(4,"mat-icon"),Bt(5,"menu"),X()(),$(6,"h1",3),Bt(7,"Responsive App"),X(),Vt(8,"span",4),$(9,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(10,"mat-icon"),Bt(11,"done"),X()(),$(12,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(13,"mat-icon"),Bt(14,"clear"),X()()()(),$(15,"mat-sidenav-container",5)(16,"mat-sidenav",6,7)(18,"mat-nav-list"),qn(19,HL,2,1,"a",8),X()(),$(20,"mat-sidenav-content"),qn(21,jL,2,1,"p",9),X()()(),$(22,"mat-toolbar",10),Vt(23,"mat-toolbar-row",11),$(24,"mat-toolbar-row",12)(25,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(26,"mat-icon",13),Bt(27,"arrow_back"),X()(),$(28,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(29,"mat-icon",13),Bt(30,"arrow_forward"),X()(),$(31,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(32,"mat-icon",13),Bt(33,"info"),X()(),$(34,"button",2),ge("click",function(){return ln(r),gn(17).toggle()}),$(35,"mat-icon",13),Bt(36,"settings"),X()()()()}2&t&&(Ee("example-is-mobile",i.mobileQuery.matches),Xe(15),vr("margin-top",i.mobileQuery.matches?56:0,"px"),Xe(1),et("mode",i.mobileQuery.matches?"over":"side")("fixedInViewport",i.mobileQuery.matches),Xe(3),et("ngForOf",i.fillerNav),Xe(2),et("ngForOf",i.fillerContent))},directives:[oP,QD,fP,VP,yw,_w,FL,Jy,OL,Lh],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}h1.example-app-name[_ngcontent-%COMP%]{margin-left:8px}.example-sidenav-container[_ngcontent-%COMP%]{flex:1}.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.toolbarNav[_ngcontent-%COMP%]{position:fixed;bottom:0;z-index:1000;display:flex;box-shadow:2px 2px 4px 5px #ccc}.toolbarRowCommands[_ngcontent-%COMP%]{justify-content:space-between}.material-icons.color_blue[_ngcontent-%COMP%]:hover{color:#0ff}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),n})(),Mw=(()=>{class n{create(t){return"undefined"==typeof MutationObserver?null:new MutationObserver(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),GL=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({providers:[Mw]}),n})(),xw=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({}),n})(),iV=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n}),n.\u0275inj=ae({imports:[[kh,He,GL,xw],He,xw]}),n})(),rV=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=he({type:n,bootstrap:[UL]}),n.\u0275inj=ae({providers:[],imports:[[gv,GR,aP,bL,iV,Ab,BP,Ab,BL,pP,z1]]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(function pI(){Fy=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(),EF().bootstrapModule(rV).catch(n=>console.error(n))}},Q=>{Q(Q.s=503)}]);