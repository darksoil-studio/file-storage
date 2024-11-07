import{r as x,x as b,i as v}from"./file-storage-client.BAoHvIwp.js";import{s as f,n as g,f as P,t as m}from"./context.COmYBtx_.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class u extends w{constructor(t,o,i){var s,n;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=e=>{const r=e.composedPath()[0];e.context===this.context&&r!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,r,e.subscribe))},this.onProviderRequest=e=>{const r=e.composedPath()[0];if(e.context!==this.context||r===this.host)return;const l=new Set;for(const[h,{consumerHost:d}]of this.subscriptions)l.has(h)||(l.add(h),d.dispatchEvent(new f(this.context,h,!0)));e.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new C(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O({context:c}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new u(this,{context:c}))}),{get(){return t.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),t.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{t.constructor.addInitializer(e=>{i.set(e,new u(e,{context:c}))});const s=Object.getOwnPropertyDescriptor(t,o);let n;if(s===void 0){const e=new WeakMap;n={get(){return e.get(this)},set(r){i.get(this).setValue(r),e.set(this,r)},configurable:!0,enumerable:!0}}else{const e=s.set;n={...s,set(r){i.get(this).setValue(r),e==null||e.call(this,r)}}}return void Object.defineProperty(t,o,n)}}}var j=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=(c,t,o,i)=>{for(var s=i>1?void 0:i?y(t,o):t,n=c.length-1,e;n>=0;n--)(e=c[n])&&(s=(i?e(t,o,s):e(s))||s);return i&&s&&j(t,o,s),s};let a=class extends x{render(){return b`<slot></slot>`}};a.styles=v`
    :host {
      display: contents;
    }
  `;p([O({context:P}),g({type:Object})],a.prototype,"client",2);a=p([m("file-storage-context")],a);export{a as FileStorageContext};
