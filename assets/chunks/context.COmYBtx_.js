import{b as l,f as u}from"./file-storage-client.BAoHvIwp.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends Event{constructor(s,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>(s,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,s)}):customElements.define(e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:u},p=(e=d,s,t)=>{const{kind:r,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,e),r==="accessor"){const{name:n}=t;return{set(a){const c=s.get.call(this);s.set.call(this,a),this.requestUpdate(n,c,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(r==="setter"){const{name:n}=t;return function(a){const c=this[n];s.call(this,a),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+r)};function g(e){return(s,t)=>typeof t=="object"?p(e,s,t):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,s,t)}const v="hc_zome_file_storage/file-storage-client";export{v as f,g as n,f as s,m as t};
