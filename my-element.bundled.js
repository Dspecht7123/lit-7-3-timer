/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;let n=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}};const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const r=window,l=r.trustedTypes,a=l?l.emptyScript:"",d=r.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:c};let p=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:u).toAttribute(i,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(h=r.reactiveElementVersions)&&void 0!==h?h:r.reactiveElementVersions=[]).push("1.6.1");const b=window,g=b.trustedTypes,w=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,m="?"+k,y=`<${m}>`,S=document,$=(t="")=>S.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,E=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),O=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),T=new WeakMap,N=S.createTreeWalker(S,129,null,!1),R=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",h=_;for(let i=0;i<s;i++){const s=t[i];let r,l,a=-1,d=0;for(;d<s.length&&(h.lastIndex=d,l=h.exec(s),null!==l);)d=h.lastIndex,h===_?"!--"===l[1]?h=x:void 0!==l[1]?h=E:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),h=z):void 0!==l[3]&&(h=z):h===z?">"===l[0]?(h=null!=n?n:_,a=-1):void 0===l[1]?a=-2:(a=h.lastIndex-l[2].length,r=l[1],h=void 0===l[3]?z:'"'===l[3]?j:U):h===j||h===U?h=z:h===x||h===E?h=_:(h=z,n=void 0);const u=h===z&&t[i+1].startsWith("/>")?" ":"";o+=h===_?s+y:a>=0?(e.push(r),s.slice(0,a)+"$lit$"+s.slice(a)+k+u):s+k+(-2===a?(e.push(void 0),i):u)}const r=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(r):r,e]};class P{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const h=t.length-1,r=this.parts,[l,a]=R(t,i);if(this.el=P.createElement(l,s),N.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=N.nextNode())&&r.length<h;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(k)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(k),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?J:"?"===i[1]?Z:"@"===i[1]?q:D})}else r.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(B.test(e.tagName)){const t=e.textContent.split(k),i=t.length-1;if(i>0){e.textContent=g?g.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],$()),N.nextNode(),r.push({type:2,index:++n});e.append(t[i],$())}}}else if(8===e.nodeType)if(e.data===m)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(k,t+1));)r.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function L(t,i,s=t,e){var n,o,h,r;if(i===O)return i;let l=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const a=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(h=(r=s)._$Co)&&void 0!==h?h:r._$Co=[])[e]=l:s._$Cl=l),void 0!==l&&(i=L(t,l._$AS(t,i.values),l,e)),i}class W{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);N.currentNode=n;let o=N.nextNode(),h=0,r=0,l=e[0];for(;void 0!==l;){if(h===l.index){let i;2===l.type?i=new H(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new V(o,this,t)),this.u.push(i),l=e[++r]}h!==(null==l?void 0:l.index)&&(o=N.nextNode(),h++)}return n}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{constructor(t,i,s,e){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=L(this,t,i),C(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==O&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(s);else{const t=new W(n,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new H(this.O($()),this.O($()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class D{constructor(t,i,s,e,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=L(this,t,i,0),o=!C(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const e=t;let h,r;for(t=n[0],h=0;h<n.length-1;h++)r=L(this,e[s+h],i,h),r===O&&(r=this._$AH[h]),o||(o=!C(r)||r!==this._$AH[h]),r===M?t=M:t!==M&&(t+=(null!=r?r:"")+n[h+1]),this._$AH[h]=r}o&&!e&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const K=g?g.emptyScript:"";class Z extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class q extends D{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=L(this,t,i,0))&&void 0!==s?s:M)===O)return;const e=this._$AH,n=t===M&&e!==M||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==M&&(e===M||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const F=b.litHtmlPolyfillSupport;null==F||F(P,H),(null!==(f=b.litHtmlVersions)&&void 0!==f?f:b.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let h=o._$litPart$;if(void 0===h){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=h=new H(i.insertBefore($(),t),t,void 0,null!=s?s:{})}return h._$AI(t),h})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):tt(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et=function(t,i,s,e){for(var n,o=arguments.length,h=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(i,s,h):n(i,s))||h);return o>3&&h&&Object.defineProperty(i,s,h),h};let nt=class extends X{constructor(){super(),this.intervalId=0,this.workoutCounter=0,this.setCounter=0,this.intervalState="start",this.intervalRunning=!1,this.backgroundColor="green",this.secondsPassed=3,this.message="",this.buttonText="Start",this.workoutSec=7,this.breakSec=3,this.intervals=6,this.setBreakSec=120,this.sets=10,this.beepLowAudio=new Audio("./beep_low.mp3"),this.beepHighAudio=new Audio("./beep_high.mp3")}render(){return I`
      <div class="container ${this.backgroundColor}">
        <h1>${this.secondsPassed}</h1>
        <p>${this.message}</p>
        <p>workouts: ${this.workoutCounter} / ${this.intervals}</p>
        <p>sets: ${this.setCounter} / ${this.sets}</p>
        <table class="table">
          <thead>
            <tr></tr>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <label for="workoutSec">workout:</label>
                </td>
                <td>
                  <input id="workoutSec" type="number" size="2" value=${this.workoutSec} @change=${this.onChangeWorkoutSec}>
                  <label for="">sec</label>
                </td>
            </tr>
            <tr>
                <td>
                  <label for="breakSec">break:</label>
                </td>
                <td>
                  <input id="breakSec" type="number" size="2" value=${this.breakSec} @change=${this.onChangeBreakSec}>
                  <label for="">sec</label>
                </td>
            </tr>
            <tr>
              <td>
                <label for="intervals">intervals:</label>
              </td>
              <td>
                <input id="intervals" type="number" size="2" value=${this.intervals} @change=${this.onChangeIntervals}>
              </td>
            </tr>
            <tr>
              <td>
                <label for="setBreakSec">set-break:</label>
              </td>
              <td>
                <input id="setBreakSec" type="number" size="3" value=${this.setBreakSec} @change=${this.onChangeSetBreakSec}>
                <label for="">sec</label>
              </td>
            </tr>
            <tr>
              <td>
                <label for="sets">sets:</label>
              </td>
              <td>
                <input id="sets" type="number" size="2" value=${this.sets} @change=${this.onChangeSets}>
              </td>
            </tr>
          </tbody>
        </table>
        
        
        
        <br>
        <button @click="${this._startInterval}" class="button">${this.buttonText}</button>
        <button @click="${this._resetInterval}" class="button">reset</button>
      </div>
      `}onChangeWorkoutSec(t){this.workoutSec=parseInt(t.target.value)}onChangeBreakSec(t){this.breakSec=parseInt(t.target.value)}onChangeSets(t){this.sets=parseInt(t.target.value)}onChangeIntervals(t){this.intervals=parseInt(t.target.value)}onChangeSetBreakSec(t){this.setBreakSec=parseInt(t.target.value)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){window.clearInterval(this.intervalId),this.intervalId=0}_startInterval(){this.intervalRunning?(this.intervalRunning=!1,this.buttonText="Start"):(this.intervalRunning=!0,this.buttonText="Pause",0===this.intervalId&&(this.intervalId=window.setInterval((()=>this.intervalController()),1e3)))}_resetInterval(){window.clearInterval(this.intervalId),this.intervalId=0,this.workoutCounter=0,this.setCounter=0,this.secondsPassed=3,this.buttonText="Start",this.intervalRunning=!1,this.backgroundColor="green",this.intervalState="start"}beepLow(){this.beepLowAudio.play()}beepHigh(){this.beepHighAudio.play()}handleStartState(){this.secondsPassed=this.workoutSec,this.intervalState="workout",this.backgroundColor="red",console.log("workout starts"),this.message="workout",this.beepHigh()}handleWorkoutState(){this.secondsPassed=this.breakSec,this.intervalState="workoutBreak",this.backgroundColor="green",console.log("workout break starts"),this.beepHigh(),this.message="break"}handleWorkoutBreak(){this.workoutCounter++,this.workoutCounter===this.intervals?(this.secondsPassed=this.setBreakSec,this.workoutCounter=0,this.intervalState="setBreak",this.backgroundColor="green",console.log("set break starts"),this.message="set break",this.beepHigh()):(this.secondsPassed=this.workoutSec,this.intervalState="workout",this.backgroundColor="red",console.log("workout starts"),this.message="workout",this.beepHigh())}handleSetBreakState(){this.setCounter++,this.setCounter===this.sets?(console.log("finished"),window.clearInterval(this.intervalId),this.intervalId=0,this.message="finished",this.backgroundColor="green"):(this.secondsPassed=this.workoutSec,this.intervalState="workout",this.backgroundColor="red",console.log("set break finished"),this.beepHigh(),this.message="workout")}intervalController(){this.intervalRunning&&(this.secondsPassed--,console.log(this.secondsPassed.toString()),0===this.secondsPassed?"start"===this.intervalState?this.handleStartState():"workout"===this.intervalState?this.handleWorkoutState():"workoutBreak"===this.intervalState?this.handleWorkoutBreak():"setBreak"===this.intervalState&&this.handleSetBreakState():this.secondsPassed<=2&&this.beepLow())}};nt.styles=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(e,t,s)})`
    .container {
      border-style: solid;
      border-radius: 5px;
      border-width: 1px;
      text-align: center;
      font-size: 2em;
    }
    .green {
      background-color: green;
    }
    .red {
      background-color: red;
    }
    .button {
      background-color: blue; 
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1em;
      margin-bottom: 1em;
    }
    input[type=number] {
      font-size: inherit;
      margin: 0.2em;
    }
    p {
      margin: 0;
    }
    table {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }
    h1 {
      margin: 0.2em;
    }
  `,et([it()],nt.prototype,"secondsPassed",void 0),et([it()],nt.prototype,"message",void 0),et([it()],nt.prototype,"buttonText",void 0),et([it()],nt.prototype,"workoutSec",void 0),et([it()],nt.prototype,"breakSec",void 0),et([it()],nt.prototype,"intervals",void 0),et([it()],nt.prototype,"setBreakSec",void 0),et([it()],nt.prototype,"sets",void 0),nt=et([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i))("my-element")],nt);export{nt as MyElement};
