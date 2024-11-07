import{_ as i,c as t,a2 as a,o as e}from"./chunks/framework.CQ46jkEd.js";const g=JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"setup.md","filePath":"setup.md"}'),l={name:"setup.md"};function n(h,s,p,o,k,r){return e(),t("div",null,s[0]||(s[0]=[a(`<h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>This guide assumes that you have scaffolded a hApp with the <a href="https://darksoil.studio/tnesh-stack" target="_blank" rel="noreferrer">TNESH stack template</a>.</p></div><ol><li>Run this to scaffold this zome in your hApp:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github:darksoil-studio/file-storage/main-0.3#scaffold</span></span></code></pre></div><p>This will do the following:</p><ul><li>Add the flake input for that repository in your <code>flake.nix</code>.</li><li>Add the appropriate zome packages to the <code>dna.nix</code> that you select.</li><li>Add the UI package for that zome in the local NPM package that you select.</li></ul><p>Now you only need to integrate the zome&#39;s frontend in your web-app.</p><ol start="2"><li>Connect to Holochain with the <code>AppClient</code>, and create the <code>RolesStore</code> with it:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RolesStore, RolesClient } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@darksoil-studio/file-storage-zome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { AppWebsocket } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@holochain/client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setupRolesStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // TODO: change &quot;MY_APP_NAME&quot; for the roleId that you can find in your &quot;happ.yaml&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AppWebsocket.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // TODO: change &quot;MY_CELL_ROLE&quot; for the roleId that you can find in your &quot;happ.yaml&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RolesStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RolesClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(client, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;MY_CELL_ROLE&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>Import the <code>&lt;roles-context&gt;</code> element and add it to your html <strong>wrapping the whole section of your page in which you are going to be placing</strong> the other elements from <code>@darksoil-studio/file-storage-zome</code>:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This can be placed in the index.js, at the top level of your web-app.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@darksoil-studio/file-storage-zome/elements/roles-context.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>And then add the <code>&lt;roles-context&gt;</code> element in your html:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Add here other elements from @darksoil-studio/file-storage-zome --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="4"><li>Attach the <code>rolesStore</code> to the <code>&lt;roles-context&gt;</code> element:</li></ol><ul><li>Go to <a href="https://holochain-open-dev.github.io/reusable-modules/frontend/frameworks/" target="_blank" rel="noreferrer">this page</a>, select the framework you are using, and follow its example.</li></ul><p>You need to set the <code>store</code> property of it to your already instantiated <code>RolesStore</code> object:</p><ul><li>If you <strong>are using some JS framework</strong>:</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PF3hD" id="tab-SIAKN_2" checked><label data-title="React" for="tab-SIAKN_2">React</label><input type="radio" name="group-PF3hD" id="tab-oXNekpA"><label data-title="Angular" for="tab-oXNekpA">Angular</label><input type="radio" name="group-PF3hD" id="tab-2lF-S82"><label data-title="Vue" for="tab-2lF-S82">Vue</label><input type="radio" name="group-PF3hD" id="tab-v4OOIKZ"><label data-title="Svelte" for="tab-v4OOIKZ">Svelte</label><input type="radio" name="group-PF3hD" id="tab-gLwbv-B"><label data-title="Lit" for="tab-gLwbv-B">Lit</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> store</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rolesStore}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> [store]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rolesStore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :store</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rolesStore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> store</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rolesStore}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .store</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rolesStore}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><p>OR</p><ul><li>If you <strong>are not using any framework</strong>:</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> contextElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;roles-context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">contextElement.store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store;</span></span></code></pre></div><blockquote><p>You can read more about the context pattern <a href="https://holochain-open-dev.github.io/reusable-modules/frontend/using/#context" target="_blank" rel="noreferrer">here</a>.</p></blockquote><ol start="5"><li><a href="./.html?path=/docs/frontend-elements">Choose which elements you need</a> and import them like this:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@darksoil-studio/file-storage-zome/dist/elements/roles-context.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>And then they are ready be used inside the <code>&lt;roles-context&gt;</code> just like any other HTML tag.</p><p>This will define all the elements from this module in the global <code>CustomElementsRegistry</code>. You can read more about Custom Elements <a href="https://developers.google.com/web/fundamentals/web-components/customelements" target="_blank" rel="noreferrer">here</a>.</p><ol start="6"><li>Add your preferred shoelace theme in your <code>&lt;head&gt;</code> tag:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path/to/shoelace/dist/themes/light.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>You can read more about how to initialize the shoelace theme <a href="https://shoelace.style/getting-started/themes?id=activating-themes" target="_blank" rel="noreferrer">here</a>.</p><hr><p>That&#39;s it! You have now integrated both the backend and the frontend for the profiles module.</p><h1 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h1><p>You can see a full working example of the UI working in <a href="https://github.com/darksoil-studio/file-storage-zome/blob/main/ui/demo/index.html" target="_blank" rel="noreferrer">here</a>.</p>`,33)]))}const c=i(l,[["render",n]]);export{g as __pageData,c as default};
