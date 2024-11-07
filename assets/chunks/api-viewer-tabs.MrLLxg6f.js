import{i as M}from"./reactive-element.CHpx6ykd.js";import{j as P,i as y,t as x,e as C,T as v,n as f,x as L,A as g}from"./property.DRFXEFyz.js";const se=M`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-secondary-color: rgba(0, 0, 0, 0.54);
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-tag-background-color: #e2e3e5;
    --ave-tag-border-color: #d6d8db;
    --ave-tag-color: #383d41;
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #fff;
      color: #000;
    }
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:N}=P,I=s=>s===null||typeof s!="object"&&typeof s!="function",oe=(s,e)=>(s==null?void 0:s._$litType$)!==void 0,ie=s=>{var e;return((e=s==null?void 0:s._$litType$)===null||e===void 0?void 0:e.h)!=null},j=s=>s.strings===void 0,$=()=>document.createComment(""),re=(s,e,t)=>{var o;const i=s._$AA.parentNode,r=s._$AB;if(t===void 0){const l=i.insertBefore($(),r),n=i.insertBefore($(),r);t=new N(l,n,s,s.options)}else{const l=t._$AB.nextSibling,n=t._$AM,d=n!==s;if(d){let c;(o=t._$AQ)===null||o===void 0||o.call(t,s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==n._$AU&&t._$AP(c)}if(l!==r||d){let c=t._$AA;for(;c!==l;){const a=c.nextSibling;i.insertBefore(c,r),c=a}}}return t},H={},ne=(s,e=H)=>s._$AH=e,ae=s=>s._$AH,le=s=>{s._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(s,e)=>{var t,o;const i=s._$AN;if(i===void 0)return!1;for(const r of i)(o=(t=r)._$AO)===null||o===void 0||o.call(t,e,!1),u(r,e);return!0},m=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},E=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),F(e)}};function z(s){this._$AN!==void 0?(m(this),this._$AM=s,E(this)):this._$AM=s}function q(s,e=!1,t=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let r=t;r<o.length;r++)u(o[r],!1),m(o[r]);else o!=null&&(u(o,!1),m(o));else u(this,s)}const F=s=>{var e,t,o,i;s.type==x.CHILD&&((e=(o=s)._$AP)!==null&&e!==void 0||(o._$AP=q),(t=(i=s)._$AQ)!==null&&t!==void 0||(i._$AQ=z))};let D=class extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),E(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(u(this,e),m(this))}setValue(e){if(j(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class U{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.Z=t))}resume(){var e;(e=this.Z)===null||e===void 0||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=s=>!I(s)&&typeof s.then=="function",w=1073741823;class B extends D{constructor(){super(...arguments),this._$C_t=w,this._$Cwt=[],this._$Cq=new O(this),this._$CK=new U}render(...e){var t;return(t=e.find(o=>!A(o)))!==null&&t!==void 0?t:v}update(e,t){const o=this._$Cwt;let i=o.length;this._$Cwt=t;const r=this._$Cq,l=this._$CK;this.isConnected||this.disconnected();for(let n=0;n<t.length&&!(n>this._$C_t);n++){const d=t[n];if(!A(d))return this._$C_t=n,d;n<i&&d===o[n]||(this._$C_t=w,i=0,Promise.resolve(d).then(async c=>{for(;l.get();)await l.get();const a=r.deref();if(a!==void 0){const h=a._$Cwt.indexOf(d);h>-1&&h<a._$C_t&&(a._$C_t=h,a.setValue(c))}}))}return v}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const de=C(B);function k(s){return!!s&&Array.isArray(s.modules)&&s.modules.some(e=>{var t,o;return((t=e.exports)==null?void 0:t.some(i=>i.kind==="custom-element-definition"))||((o=e.declarations)==null?void 0:o.some(i=>i.customElement))})}const R=s=>s.kind==="custom-element-definition",V=s=>s.customElement,S=s=>!(s.privacy==="private"||s.privacy==="protected");async function Y(s){try{const t=await(await fetch(s)).json();if(k(t))return t;throw new Error(`No element definitions found at ${s}`)}catch(e){return console.error(e),null}}function he(s,e){const t=(s.modules??[]).flatMap(o=>{var i;return((i=o.exports)==null?void 0:i.filter(R))??[]});return e?t.filter(o=>e.includes(o.name)):t}const ue=(s,e,t)=>{var d,c;const o=t?e.findIndex(a=>(a==null?void 0:a.name)===t):0,i=e[o];if(!i)return null;const{name:r,module:l}=i.declaration,n=l?(c=(d=s.modules.find(a=>a.path===l.replace(/^\//,"")))==null?void 0:d.declarations)==null?void 0:c.find(a=>a.name===r):s.modules.flatMap(a=>a.declarations).find(a=>(a==null?void 0:a.name)===r);if(!n||!V(n))throw new Error(`Could not find declaration for ${t}`);return{customElement:!0,name:i.name,description:n==null?void 0:n.description,slots:n.slots??[],attributes:n.attributes??[],members:n.members??[],events:n.events??[],cssParts:n.cssParts??[],cssProperties:[...n.cssProperties??[]].sort((a,h)=>a.name>h.name?1:-1)}},fe=(s=[])=>s.filter(e=>e.kind==="field"&&S(e)),pe=(s=[])=>s.filter(e=>e.kind==="method"&&S(e));function p(s,e,t,o){var i=arguments.length,r=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,o);else for(var n=s.length-1;n>=0;n--)(l=s[n])&&(r=(i<3?l(r):i>3?l(e,t,r):l(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}const me=L`
  <div part="warning">No custom elements found in the JSON file.</div>
`,ve=s=>{class e extends s{constructor(){super(...arguments),this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:o}=this;this.manifest?k(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):o&&this.lastSrc!==o&&(this.lastSrc=o,this.jsonFetched=Y(o))}}return p([f()],e.prototype,"src",void 0),p([f({attribute:!1})],e.prototype,"manifest",void 0),p([f({reflect:!0,converter:{fromAttribute:t=>t.split(","),toAttribute:t=>t.join(",")}})],e.prototype,"only",void 0),p([f()],e.prototype,"selected",void 0),e},be=s=>typeof s=="string"&&s.startsWith("'")&&s.endsWith("'")?s.slice(1,s.length-1):s;function _(s,...e){const t=document.createElement("template");return t.innerHTML=e.reduce((o,i,r)=>o+i+s[r+1],s[0]),t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends y{constructor(e){if(super(e),this.et=g,e.type!==x.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.ft=void 0,this.et=e;if(e===v)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}b.directiveName="unsafeHTML",b.resultType=1;const _e=C(b);let G=0;const K=_`
  <style>
    :host {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      max-width: 150px;
      overflow: hidden;
      min-height: 3rem;
      padding: 0 1rem;
      color: var(--ave-tab-color);
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--ave-tab-indicator-size);
      background-color: var(--ave-primary-color);
      opacity: 0;
    }

    :host([selected]) {
      color: var(--ave-tab-selected-color, var(--ave-primary-color));
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--ave-primary-color);
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    :host(:hover)::after {
      opacity: 0.08;
    }

    :host([focus-ring])::after {
      opacity: 0.12;
    }

    :host([active])::after {
      opacity: 0.16;
    }

    @media (max-width: 600px) {
      :host {
        justify-content: center;
        text-align: center;
      }

      :host::before {
        top: auto;
        right: 0;
        width: 100%;
        height: var(--ave-tab-indicator-size);
      }
    }
  </style>
  <slot></slot>
`;class T extends HTMLElement{get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}constructor(){super(),this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(K.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${G++}`)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",T);let Z=0;const Q=_`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }
  </style>
  <slot></slot>
`;class W extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(Q.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${Z++}`)}}customElements.define("api-viewer-panel",W);const J=_`
  <style>
    :host {
      display: flex;
      border-bottom-left-radius: var(--ave-border-radius);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      :host {
        flex-direction: column;
      }

      .tabs {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  </style>
  <div class="tabs">
    <slot name="tab"></slot>
  </div>
  <slot name="panel"></slot>
`;class X extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(J.content.cloneNode(!0));const t=e.querySelectorAll("slot");t[0].addEventListener("slotchange",()=>this._linkPanels()),t[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:e}=this;e.forEach(o=>{const i=o.nextElementSibling;o.setAttribute("aria-controls",i.id),i.setAttribute("aria-labelledby",o.id)});const t=e.find(o=>o.selected)||e[0];this._selectTab(t)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const{tabs:o}=this,i=o.length;for(let r=0;typeof e=="number"&&r<i;r++,e+=t||1)if(e<0?e=i-1:e>=i&&(e=0),!o[e].hasAttribute("hidden"))return e;return-1}_prevTab(e){const t=this._getAvailableIndex(e.findIndex(o=>o.selected)-1,-1);return e[(t+e.length)%e.length]}_nextTab(e){const t=this._getAvailableIndex(e.findIndex(o=>o.selected)+1,1);return e[t%e.length]}reset(){this.tabs.forEach(e=>{e.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const t=e.getAttribute("aria-controls"),o=this.querySelector(`#${t}`);o&&(e.selected=!0,o.hidden=!1)}handleEvent(e){const{target:t}=e;if(t&&t instanceof T){let o;if(e.type==="keydown"){const{tabs:i}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":o=this._prevTab(i);break;case"ArrowDown":case"ArrowRight":o=this._nextTab(i);break;case"Home":o=i[0];break;case"End":o=i[i.length-1];break;default:return}e.preventDefault()}else o=t;this._selectTab(o),o.focus()}}}customElements.define("api-viewer-tabs",X);export{ve as M,p as _,ue as a,fe as b,pe as c,ae as d,me as e,ne as f,he as g,k as h,re as i,le as j,de as m,_e as o,se as s,oe as t,be as u,ie as v};
