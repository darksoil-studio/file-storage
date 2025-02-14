import{d as Oe,e as $e,i as ct,T as Re,x as T,r as ie,c as Te}from"./file-storage-client.3r7EJNPm.js";import{a as v,b as ne,t as re,c as ke,f as _e}from"./context.DSQk-eGX.js";import{c as _t,_ as m,S as Lt,e as ht,a as se,b as ae,w as zt,d as Le,l as ze}from"./runtime.Awr-4tTd.js";import{a as De}from"./reactive-element.CHpx6ykd.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=t=>(...e)=>({_$litDirective$:t,values:e});class Me{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}function Ne(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&Oe(e),toAttribute:e=>e&&$e(e)},reflect:!0}}function Ie(t){return`data:image/svg+xml;utf8,${je(t)}`}function je(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var We=ct`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=Fe(class extends Me{constructor(t){var e;if(super(t),t.type!==Be.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Re}});var Dt=class extends Lt{constructor(){super(...arguments),this.effect="none"}render(){return T`
      <div
        part="base"
        class=${gt({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Dt.styles=[_t,We];m([v()],Dt.prototype,"effect",2);Dt.define("sl-skeleton");var He=ct`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ue=ct`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const $t=new Set,ot=new Map;let G,Bt="ltr",Ft="en";const le=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(le){const t=new MutationObserver(he);Bt=document.documentElement.dir||"ltr",Ft=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ce(...t){t.map(e=>{const o=e.$code.toLowerCase();ot.has(o)?ot.set(o,Object.assign(Object.assign({},ot.get(o)),e)):ot.set(o,e),G||(G=e)}),he()}function he(){le&&(Bt=document.documentElement.dir||"ltr",Ft=document.documentElement.lang||navigator.language),[...$t.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ve=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$t.add(this.host)}hostDisconnected(){$t.delete(this.host)}dir(){return`${this.host.dir||Bt}`.toLowerCase()}lang(){return`${this.host.lang||Ft}`.toLowerCase()}getTranslationData(e){var o,i;const n=new Intl.Locale(e.replace(/_/g,"-")),r=n==null?void 0:n.language.toLowerCase(),s=(i=(o=n==null?void 0:n.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=ot.get(`${r}-${s}`),l=ot.get(r);return{locale:n,language:r,region:s,primary:a,secondary:l}}exists(e,o){var i;const{primary:n,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(n&&n[e]||r&&r[e]||o.includeFallback&&G&&G[e])}term(e,...o){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(n&&n[e])r=n[e];else if(G&&G[e])r=G[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var ue={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ce(ue);var Ye=ue,de=class extends Ve{};ce(Ye);const q=Math.min,O=Math.max,mt=Math.round,pt=Math.floor,M=t=>({x:t,y:t}),qe={left:"right",right:"left",bottom:"top",top:"bottom"},Ke={start:"end",end:"start"};function Rt(t,e,o){return O(t,q(e,o))}function rt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function pe(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(K(t))?"y":"x"}function Nt(t){return pe(Z(t))}function Xe(t,e,o){o===void 0&&(o=!1);const i=st(t),n=Nt(t),r=Mt(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=yt(s)),[s,yt(s)]}function Ge(t){const e=yt(t);return[Tt(t),e,Tt(e)]}function Tt(t){return t.replace(/start|end/g,e=>Ke[e])}function Ze(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:s;default:return[]}}function Je(t,e,o,i){const n=st(t);let r=Ze(K(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(Tt)))),r}function yt(t){return t.replace(/left|right|bottom|top/g,e=>qe[e])}function Qe(t){return{top:0,right:0,bottom:0,left:0,...t}}function fe(t){return typeof t!="number"?Qe(t):{top:t,right:t,bottom:t,left:t}}function vt(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function Yt(t,e,o){let{reference:i,floating:n}=t;const r=Z(e),s=Nt(e),a=Mt(s),l=K(e),c=r==="y",h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,f=i[a]/2-n[a]/2;let u;switch(l){case"top":u={x:h,y:i.y-n.height};break;case"bottom":u={x:h,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-n.width,y:d};break;default:u={x:i.x,y:i.y}}switch(st(e)){case"start":u[s]-=f*(o&&c?-1:1);break;case"end":u[s]+=f*(o&&c?-1:1);break}return u}const to=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:d}=Yt(c,i,l),f=i,u={},p=0;for(let g=0;g<a.length;g++){const{name:w,fn:y}=a[g],{x:b,y:x,data:A,reset:C}=await y({x:h,y:d,initialPlacement:i,placement:f,strategy:n,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});h=b??h,d=x??d,u={...u,[w]:{...u[w],...A}},C&&p<=50&&(p++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):C.rects),{x:h,y:d}=Yt(c,f,l)),g=-1)}return{x:h,y:d,placement:f,strategy:n,middlewareData:u}};async function It(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:u=0}=rt(e,t),p=fe(u),w=a[f?d==="floating"?"reference":"floating":d],y=vt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),b=d==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),A=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},C=vt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:l}):b);return{top:(y.top-C.top+p.top)/A.y,bottom:(C.bottom-y.bottom+p.bottom)/A.y,left:(y.left-C.left+p.left)/A.x,right:(C.right-y.right+p.right)/A.x}}const eo=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=rt(t,e)||{};if(c==null)return{};const d=fe(h),f={x:o,y:i},u=Nt(n),p=Mt(u),g=await s.getDimensions(c),w=u==="y",y=w?"top":"left",b=w?"bottom":"right",x=w?"clientHeight":"clientWidth",A=r.reference[p]+r.reference[u]-f[u]-r.floating[p],C=f[u]-r.reference[u],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let k=R?R[x]:0;(!k||!await(s.isElement==null?void 0:s.isElement(R)))&&(k=a.floating[x]||r.floating[p]);const j=A/2-C/2,D=k/2-g[p]/2-1,_=q(d[y],D),H=q(d[b],D),B=_,U=k-g[p]-H,S=k/2-g[p]/2+j,et=Rt(B,S,U),W=!l.arrow&&st(n)!=null&&S!==et&&r.reference[p]/2-(S<B?_:H)-g[p]/2<0,F=W?S<B?S-B:S-U:0;return{[u]:f[u]+F,data:{[u]:et,centerOffset:S-et-F,...W&&{alignmentOffset:F}},reset:W}}}),oo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...w}=rt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=K(n),b=Z(a),x=K(a)===a,A=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=f||(x||!g?[yt(a)]:Ge(a)),R=p!=="none";!f&&R&&C.push(...Je(a,g,p,A));const k=[a,...C],j=await It(e,w),D=[];let _=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&D.push(j[y]),d){const S=Xe(n,s,A);D.push(j[S[0]],j[S[1]])}if(_=[..._,{placement:n,overflows:D}],!D.every(S=>S<=0)){var H,B;const S=(((H=r.flip)==null?void 0:H.index)||0)+1,et=k[S];if(et)return{data:{index:S,overflows:_},reset:{placement:et}};let W=(B=_.filter(F=>F.overflows[0]<=0).sort((F,V)=>F.overflows[1]-V.overflows[1])[0])==null?void 0:B.placement;if(!W)switch(u){case"bestFit":{var U;const F=(U=_.filter(V=>{if(R){const Y=Z(V.placement);return Y===b||Y==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(Y=>Y>0).reduce((Y,Se)=>Y+Se,0)]).sort((V,Y)=>V[1]-Y[1])[0])==null?void 0:U[0];F&&(W=F);break}case"initialPlacement":W=a;break}if(n!==W)return{reset:{placement:W}}}return{}}}};async function io(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=K(o),a=st(o),l=Z(o)==="y",c=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,d=rt(e,t);let{mainAxis:f,crossAxis:u,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(u=a==="end"?p*-1:p),l?{x:u*h,y:f*c}:{x:f*c,y:u*h}}const no=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:s,middlewareData:a}=e,l=await io(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}}},ro=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:y,y:b}=w;return{x:y,y:b}}},...l}=rt(t,e),c={x:o,y:i},h=await It(e,l),d=Z(K(n)),f=pe(d);let u=c[f],p=c[d];if(r){const w=f==="y"?"top":"left",y=f==="y"?"bottom":"right",b=u+h[w],x=u-h[y];u=Rt(b,u,x)}if(s){const w=d==="y"?"top":"left",y=d==="y"?"bottom":"right",b=p+h[w],x=p-h[y];p=Rt(b,p,x)}const g=a.fn({...e,[f]:u,[d]:p});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[f]:r,[d]:s}}}}}},so=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:n,rects:r,platform:s,elements:a}=e,{apply:l=()=>{},...c}=rt(t,e),h=await It(e,c),d=K(n),f=st(n),u=Z(n)==="y",{width:p,height:g}=r.floating;let w,y;d==="top"||d==="bottom"?(w=d,y=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,w=f==="end"?"top":"bottom");const b=g-h.top-h.bottom,x=p-h.left-h.right,A=q(g-h[w],b),C=q(p-h[y],x),R=!e.middlewareData.shift;let k=A,j=C;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(j=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(k=b),R&&!f){const _=O(h.left,0),H=O(h.right,0),B=O(h.top,0),U=O(h.bottom,0);u?j=p-2*(_!==0||H!==0?_+H:O(h.left,h.right)):k=g-2*(B!==0||U!==0?B+U:O(h.top,h.bottom))}await l({...e,availableWidth:j,availableHeight:k});const D=await s.getDimensions(a.floating);return p!==D.width||g!==D.height?{reset:{rects:!0}}:{}}}};function xt(){return typeof window<"u"}function at(t){return ge(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(ge(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ge(t){return xt()?t instanceof Node||t instanceof $(t).Node:!1}function L(t){return xt()?t instanceof Element||t instanceof $(t).Element:!1}function N(t){return xt()?t instanceof HTMLElement||t instanceof $(t).HTMLElement:!1}function qt(t){return!xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function ut(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function ao(t){return["table","td","th"].includes(at(t))}function Et(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function jt(t){const e=Wt(),o=L(t)?z(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function lo(t){let e=X(t);for(;N(e)&&!nt(e);){if(jt(e))return e;if(Et(e))return null;e=X(e)}return null}function Wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(at(t))}function z(t){return $(t).getComputedStyle(t)}function Ct(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function X(t){if(at(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qt(t)&&t.host||I(t);return qt(e)?e.host:e}function me(t){const e=X(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ut(e)?e:me(e)}function lt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=me(t),r=n===((i=t.ownerDocument)==null?void 0:i.body),s=$(n);if(r){const a=kt(s);return e.concat(s,s.visualViewport||[],ut(n)?n:[],a&&o?lt(a):[])}return e.concat(n,lt(n,[],o))}function kt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ye(t){const e=z(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=N(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,a=mt(o)!==r||mt(i)!==s;return a&&(o=r,i=s),{width:o,height:i,$:a}}function Ht(t){return L(t)?t:t.contextElement}function it(t){const e=Ht(t);if(!N(e))return M(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=ye(e);let s=(r?mt(o.width):o.width)/i,a=(r?mt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const co=M(0);function ve(t){const e=$(t);return!Wt()||!e.visualViewport?co:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ho(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==$(t)?!1:e}function J(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=Ht(t);let s=M(1);e&&(i?L(i)&&(s=it(i)):s=it(t));const a=ho(r,o,i)?ve(r):M(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,h=n.width/s.x,d=n.height/s.y;if(r){const f=$(r),u=i&&L(i)?$(i):i;let p=f,g=kt(p);for(;g&&i&&u!==p;){const w=it(g),y=g.getBoundingClientRect(),b=z(g),x=y.left+(g.clientLeft+parseFloat(b.paddingLeft))*w.x,A=y.top+(g.clientTop+parseFloat(b.paddingTop))*w.y;l*=w.x,c*=w.y,h*=w.x,d*=w.y,l+=x,c+=A,p=$(g),g=kt(p)}}return vt({width:h,height:d,x:l,y:c})}function Ut(t,e){const o=Ct(t).scrollLeft;return e?e.left+o:J(I(t)).left+o}function we(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),n=i.left+e.scrollLeft-(o?0:Ut(t,i)),r=i.top+e.scrollTop;return{x:n,y:r}}function uo(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r=n==="fixed",s=I(i),a=e?Et(e.floating):!1;if(i===s||a&&r)return o;let l={scrollLeft:0,scrollTop:0},c=M(1);const h=M(0),d=N(i);if((d||!d&&!r)&&((at(i)!=="body"||ut(s))&&(l=Ct(i)),N(i))){const u=J(i);c=it(i),h.x=u.x+i.clientLeft,h.y=u.y+i.clientTop}const f=s&&!d&&!r?we(s,l,!0):M(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+f.x,y:o.y*c.y-l.scrollTop*c.y+h.y+f.y}}function po(t){return Array.from(t.getClientRects())}function fo(t){const e=I(t),o=Ct(t),i=t.ownerDocument.body,n=O(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=O(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Ut(t);const a=-o.scrollTop;return z(i).direction==="rtl"&&(s+=O(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:a}}function go(t,e){const o=$(t),i=I(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const c=Wt();(!c||c&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:s,x:a,y:l}}function mo(t,e){const o=J(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=N(t)?it(t):M(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,l=n*r.x,c=i*r.y;return{width:s,height:a,x:l,y:c}}function Kt(t,e,o){let i;if(e==="viewport")i=go(t,o);else if(e==="document")i=fo(I(t));else if(L(e))i=mo(e,o);else{const n=ve(t);i={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return vt(i)}function be(t,e){const o=X(t);return o===e||!L(o)||nt(o)?!1:z(o).position==="fixed"||be(o,e)}function yo(t,e){const o=e.get(t);if(o)return o;let i=lt(t,[],!1).filter(a=>L(a)&&at(a)!=="body"),n=null;const r=z(t).position==="fixed";let s=r?X(t):t;for(;L(s)&&!nt(s);){const a=z(s),l=jt(s);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||ut(s)&&!l&&be(t,s))?i=i.filter(h=>h!==s):n=a,s=X(s)}return e.set(t,i),i}function vo(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?Et(e)?[]:yo(e,this._c):[].concat(o),i],a=s[0],l=s.reduce((c,h)=>{const d=Kt(e,h,n);return c.top=O(d.top,c.top),c.right=q(d.right,c.right),c.bottom=q(d.bottom,c.bottom),c.left=O(d.left,c.left),c},Kt(e,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function wo(t){const{width:e,height:o}=ye(t);return{width:e,height:o}}function bo(t,e,o){const i=N(e),n=I(e),r=o==="fixed",s=J(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=M(0);if(i||!i&&!r)if((at(e)!=="body"||ut(n))&&(a=Ct(e)),i){const f=J(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else n&&(l.x=Ut(n));const c=n&&!i&&!r?we(n,a):M(0),h=s.left+a.scrollLeft-l.x-c.x,d=s.top+a.scrollTop-l.y-c.y;return{x:h,y:d,width:s.width,height:s.height}}function Pt(t){return z(t).position==="static"}function Xt(t,e){if(!N(t)||z(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return I(t)===o&&(o=o.ownerDocument.body),o}function xe(t,e){const o=$(t);if(Et(t))return o;if(!N(t)){let n=X(t);for(;n&&!nt(n);){if(L(n)&&!Pt(n))return n;n=X(n)}return o}let i=Xt(t,e);for(;i&&ao(i)&&Pt(i);)i=Xt(i,e);return i&&nt(i)&&Pt(i)&&!jt(i)?o:i||lo(t)||o}const xo=async function(t){const e=this.getOffsetParent||xe,o=this.getDimensions,i=await o(t.floating);return{reference:bo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Eo(t){return z(t).direction==="rtl"}const ft={convertOffsetParentRelativeRectToViewportRelativeRect:uo,getDocumentElement:I,getClippingRect:vo,getOffsetParent:xe,getElementRects:xo,getClientRects:po,getDimensions:wo,getScale:it,isElement:L,isRTL:Eo};function Co(t,e){let o=null,i;const n=I(t);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:c,top:h,width:d,height:f}=t.getBoundingClientRect();if(a||e(),!d||!f)return;const u=pt(h),p=pt(n.clientWidth-(c+d)),g=pt(n.clientHeight-(h+f)),w=pt(c),b={rootMargin:-u+"px "+-p+"px "+-g+"px "+-w+"px",threshold:O(0,q(1,l))||1};let x=!0;function A(C){const R=C[0].intersectionRatio;if(R!==l){if(!x)return s();R?s(!1,R):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(A,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(A,b)}o.observe(t)}return s(!0),r}function Ao(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Ht(t),h=n||r?[...c?lt(c):[],...lt(e)]:[];h.forEach(y=>{n&&y.addEventListener("scroll",o,{passive:!0}),r&&y.addEventListener("resize",o)});const d=c&&a?Co(c,o):null;let f=-1,u=null;s&&(u=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),o()}),c&&!l&&u.observe(c),u.observe(e));let p,g=l?J(t):null;l&&w();function w(){const y=J(t);g&&(y.x!==g.x||y.y!==g.y||y.width!==g.width||y.height!==g.height)&&o(),g=y,p=requestAnimationFrame(w)}return o(),()=>{var y;h.forEach(b=>{n&&b.removeEventListener("scroll",o),r&&b.removeEventListener("resize",o)}),d==null||d(),(y=u)==null||y.disconnect(),u=null,l&&cancelAnimationFrame(p)}}const Po=no,So=ro,Oo=oo,Gt=so,$o=eo,Ro=(t,e,o)=>{const i=new Map,n={platform:ft,...o},r={...n.platform,_c:i};return to(t,e,{...n,platform:r})};function To(t){return ko(t)}function St(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ko(t){for(let e=t;e;e=St(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=St(t);e;e=St(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function _o(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var E=class extends Lt{constructor(){super(...arguments),this.localize=new de(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,r=0,s=0,a=0,l=0,c=0,h=0;o?t.top<e.top?(i=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(i=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(i=t.right,n=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(i=e.right,n=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||_o(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Ao(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Po({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Gt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Oo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(So({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Gt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push($o({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>ft.getOffsetParent(o,To):ft.getOffsetParent;Ro(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:se(ae({},ft),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=n.arrow.x,c=n.arrow.y;let h="",d="",f="",u="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?p:"",u=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":p,u=s?p:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:f,left:u,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${gt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${gt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};E.styles=[_t,Ue];m([ht(".popup")],E.prototype,"popup",2);m([ht(".popup__arrow")],E.prototype,"arrowEl",2);m([v()],E.prototype,"anchor",2);m([v({type:Boolean,reflect:!0})],E.prototype,"active",2);m([v({reflect:!0})],E.prototype,"placement",2);m([v({reflect:!0})],E.prototype,"strategy",2);m([v({type:Number})],E.prototype,"distance",2);m([v({type:Number})],E.prototype,"skidding",2);m([v({type:Boolean})],E.prototype,"arrow",2);m([v({attribute:"arrow-placement"})],E.prototype,"arrowPlacement",2);m([v({attribute:"arrow-padding",type:Number})],E.prototype,"arrowPadding",2);m([v({type:Boolean})],E.prototype,"flip",2);m([v({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],E.prototype,"flipFallbackPlacements",2);m([v({attribute:"flip-fallback-strategy"})],E.prototype,"flipFallbackStrategy",2);m([v({type:Object})],E.prototype,"flipBoundary",2);m([v({attribute:"flip-padding",type:Number})],E.prototype,"flipPadding",2);m([v({type:Boolean})],E.prototype,"shift",2);m([v({type:Object})],E.prototype,"shiftBoundary",2);m([v({attribute:"shift-padding",type:Number})],E.prototype,"shiftPadding",2);m([v({attribute:"auto-size"})],E.prototype,"autoSize",2);m([v()],E.prototype,"sync",2);m([v({type:Object})],E.prototype,"autoSizeBoundary",2);m([v({attribute:"auto-size-padding",type:Number})],E.prototype,"autoSizePadding",2);m([v({attribute:"hover-bridge",type:Boolean})],E.prototype,"hoverBridge",2);var Ee=new Map,Lo=new WeakMap;function zo(t){return t??{keyframes:[],options:{duration:0}}}function Zt(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ce(t,e){Ee.set(t,zo(e))}function Jt(t,e,o){const i=Lo.get(t);if(i!=null&&i[e])return Zt(i[e],o.dir);const n=Ee.get(e);return n?Zt(n,o.dir):{keyframes:[],options:{duration:0}}}function Qt(t,e){return new Promise(o=>{function i(n){n.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function te(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,se(ae({},o),{duration:Do()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function ee(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Do(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function oe(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var P=class extends Lt{constructor(){super(),this.localize=new de(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ee(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ee(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await oe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Jt(this,"tooltip.show",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await oe(this.body);const{keyframes:o,options:i}=Jt(this,"tooltip.hide",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return T`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${gt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};P.styles=[_t,He];P.dependencies={"sl-popup":E};m([ht("slot:not([name])")],P.prototype,"defaultSlot",2);m([ht(".tooltip__body")],P.prototype,"body",2);m([ht("sl-popup")],P.prototype,"popup",2);m([v()],P.prototype,"content",2);m([v()],P.prototype,"placement",2);m([v({type:Boolean,reflect:!0})],P.prototype,"disabled",2);m([v({type:Number})],P.prototype,"distance",2);m([v({type:Boolean,reflect:!0})],P.prototype,"open",2);m([v({type:Number})],P.prototype,"skidding",2);m([v()],P.prototype,"trigger",2);m([v({type:Boolean})],P.prototype,"hoist",2);m([zt("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);m([zt(["content","distance","hoist","placement","skidding"])],P.prototype,"handleOptionsChange",1);m([zt("disabled")],P.prototype,"handleDisabledChange",1);Ce("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ce("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});P.define("sl-tooltip");var dt=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let Q=class extends ie{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return T`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
				src="${Ie(Le)}"
			></sl-icon>
		`}renderFull(){return T` <div class="column center-content" style="flex: 1">
			${this.renderIcon()}
			<div style="width: 500px; text-align: center" class="column">
				${this.headline?T` <span style="margin-bottom: 8px">${this.headline} </span>`:T``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return T`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};Q.styles=[ne,ct`
			:host {
				display: flex;
			}
		`];dt([v({attribute:"tooltip"})],Q.prototype,"tooltip",void 0);dt([v()],Q.prototype,"headline",void 0);dt([v()],Q.prototype,"error",void 0);dt([v({attribute:"icon-size"})],Q.prototype,"iconSize",void 0);Q=dt([re("display-error")],Q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=Symbol();class Fo{constructor(e,o,i){this.i=0,this.status=0,this.autoRun=!0,this.t=e,this.t.addController(this);const n=typeof o=="object"?o:{task:o,args:i};this.o=n.task,this.h=n.args,this.l=n.onComplete,this.u=n.onError,n.autoRun!==void 0&&(this.autoRun=n.autoRun)}get taskComplete(){return this.v||(this.status===1?this.v=new Promise((e,o)=>{this.m=e,this._=o}):this.status===3?this.v=Promise.reject(this.k):this.v=Promise.resolve(this.p)),this.v}hostUpdated(){this.performTask()}async performTask(){var e;const o=(e=this.h)===null||e===void 0?void 0:e.call(this);this.shouldRun(o)&&await this.run(o)}shouldRun(e){return this.autoRun&&this.T(e)}async run(e){var o,i,n,r,s;let a,l;e!=null||(e=(o=this.h)===null||o===void 0?void 0:o.call(this)),this.status!==1&&(this.v=void 0,this.m=void 0,this._=void 0),this.status=1,queueMicrotask(()=>this.t.requestUpdate());const c=++this.i;try{a=await this.o(e)}catch(h){l=h}if(this.i===c){if(a===Bo)this.status=0;else{if(l===void 0){try{(i=this.l)===null||i===void 0||i.call(this,a)}catch{}this.status=2,(n=this.m)===null||n===void 0||n.call(this,a)}else{try{(r=this.u)===null||r===void 0||r.call(this,l)}catch{}this.status=3,(s=this._)===null||s===void 0||s.call(this,l)}this.p=a,this.k=l}this.t.requestUpdate()}}get value(){return this.p}get error(){return this.k}render(e){var o,i,n,r;switch(this.status){case 0:return(o=e.initial)===null||o===void 0?void 0:o.call(e);case 1:return(i=e.pending)===null||i===void 0?void 0:i.call(e);case 2:return(n=e.complete)===null||n===void 0?void 0:n.call(e,this.value);case 3:return(r=e.error)===null||r===void 0?void 0:r.call(e,this.error);default:this.status}}T(e){const o=this.g;return this.g=e,Array.isArray(e)&&Array.isArray(o)?e.length===o.length&&e.some((i,n)=>De(i,o[n])):e!==o}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=t=>typeof t!="string"&&"strTag"in t,No=(t,e,o)=>{let i=t[0];for(let n=1;n<t.length;n++)i+=e[n-1],i+=t[n];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io=t=>Mo(t)?No(t.strings,t.values):t;let jo=Io;function tt(t){return new Promise((e,o)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>o(t.error)})}function Ae(t,e){const o=indexedDB.open(t);o.onupgradeneeded=()=>o.result.createObjectStore(e);const i=tt(o);return(n,r)=>i.then(s=>r(s.transaction(e,n).objectStore(e)))}let Ot;function At(){return Ot||(Ot=Ae("keyval-store","keyval")),Ot}function Wo(t,e=At()){return e("readonly",o=>tt(o.get(t)))}function Ho(t,e,o=At()){return o("readwrite",i=>(i.put(e,t),tt(i.transaction)))}function Uo(t,e=At()){return e("readwrite",o=>(o.delete(t),tt(o.transaction)))}function Vo(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},tt(t.transaction)}function Yo(t=At()){return t("readonly",e=>{if(e.getAll&&e.getAllKeys)return Promise.all([tt(e.getAllKeys()),tt(e.getAll())]).then(([i,n])=>i.map((r,s)=>[r,n[s]]));const o=[];return t("readonly",i=>Vo(i,n=>o.push([n.key,n.value])).then(()=>o))})}const wt=Ae("HC_ZOME_FILE_STORAGE","IMAGES");async function Pe(t,e){await Ho(t,{image:e,lastRead:Date.now()},wt),Xo()}async function qo(t){const e=await Wo(t,wt);if(e)return Pe(t,e.image),e.image}const Ko=7*24*60*60*1e3;async function Xo(){const t=await Yo(wt);for(const[e,o]of t)Date.now()-o.lastRead>Ko&&await Uo(e,wt)}var Go=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Vt=(t,e,o,i)=>{for(var n=i>1?void 0:i?Zo(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(i?s(e,o,n):s(n))||n);return i&&n&&Go(e,o,n),n};let bt=class extends ie{constructor(){super(...arguments),this._renderImage=new Fo(this,async([t])=>{const e=await qo(t);if(e)return e;const o=await this.client.downloadFile(t),i=await o.arrayBuffer(),n=`data:${o.type};base64,${Te(new Uint8Array(i))}`;return Pe(t,n),n},()=>[this.imageHash])}renderImage(t){return T`<div style="flex:1"><img src="${t}" part="image" style="object-fit: cover; overflow: hidden; width: 100%; height: 100%"></img></div>`}render(){return this._renderImage.render({complete:t=>this.renderImage(t),pending:()=>T`<sl-skeleton
          style="flex: 1; --border-radius: 0"
          effect="pulse"
        ></sl-skeleton> `,error:t=>T`<display-error
          .headline=${jo("Error fetching the image")}
          .error=${t}
        ></display-error>`})}static get styles(){return[ne,ct`
        :host {
          display: flex;
        }
      `]}};Vt([v(Ne("image-hash"))],bt.prototype,"imageHash",2);Vt([ke({context:_e})],bt.prototype,"client",2);bt=Vt([ze(),re("show-image")],bt);export{bt as ShowImage};
