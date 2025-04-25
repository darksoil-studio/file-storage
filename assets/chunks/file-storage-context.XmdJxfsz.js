import{r as b,F as f,x as v,i as g}from"./file-storage-client.DirEwFOt.js";import{s as C,n as m,a as p,c as w,f as y,t as O}from"./context.BFnEO7jR.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class d extends P{constructor(t,o,i){var s,r;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=e=>{const n=e.composedPath()[0];e.context===this.context&&n!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,n,e.subscribe))},this.onProviderRequest=e=>{const n=e.composedPath()[0];if(e.context!==this.context||n===this.host)return;const u=new Set;for(const[h,{consumerHost:x}]of this.subscriptions)u.has(h)||(u.add(h),x.dispatchEvent(new C(this.context,h,!0)));e.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(r=(s=this.host).addController)==null||r.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E({context:c}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new d(this,{context:c}))}),{get(){return t.get.call(this)},set(s){var r;return(r=i.get(this))==null||r.setValue(s),t.set.call(this,s)},init(s){var r;return(r=i.get(this))==null||r.setValue(s),s}};{t.constructor.addInitializer(e=>{i.set(e,new d(e,{context:c}))});const s=Object.getOwnPropertyDescriptor(t,o);let r;if(s===void 0){const e=new WeakMap;r={get(){return e.get(this)},set(n){i.get(this).setValue(n),e.set(this,n)},configurable:!0,enumerable:!0}}else{const e=s.set;r={...s,set(n){i.get(this).setValue(n),e==null||e.call(this,n)}}}return void Object.defineProperty(t,o,r)}}}const j=m("tnesh/appClientContext");var V=Object.defineProperty,$=Object.getOwnPropertyDescriptor,l=(c,t,o,i)=>{for(var s=i>1?void 0:i?$(t,o):t,r=c.length-1,e;r>=0;r--)(e=c[r])&&(s=(i?e(t,o,s):e(s))||s);return i&&s&&V(t,o,s),s};let a=class extends b{constructor(){super(...arguments),this.zome="file_storage"}connectedCallback(){if(super.connectedCallback(),!this.client){if(!this.role)throw new Error('<file-storage-context> must have a role="YOUR_DNA_ROLE" property, eg: <file-storage-context role="role1">');if(!this.appClient)throw new Error(`<file-storage-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <file-storage-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <file-storage-context .store=\${store}>)`);this.client=new f(this.appClient,this.role,this.zome)}}render(){return v`<slot></slot>`}};a.styles=g`
    :host {
      display: contents;
    }
  `;l([E({context:y}),p({type:Object})],a.prototype,"client",2);l([w({context:j,subscribe:!0})],a.prototype,"appClient",2);l([p()],a.prototype,"role",2);l([p()],a.prototype,"zome",2);a=l([O("file-storage-context")],a);export{a as FileStorageContext};
