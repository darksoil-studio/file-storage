# `<upload-files>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<upload-files>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/file-storage-zome/dist/elements/upload-files.js'
```

2. Use it in the html side of your web-app like this:

```html
<upload-files>
</upload-files>
```

> [!WARNING]
> Like all the elements in this module, `<upload-files>` needs to be placed inside an initialized `<file-storage-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { FileStorageZomeMock } from "../../ui/src/mocks.ts";
import { FileStorageClient } from "../../ui/src/file-storage-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  if (!customElements.get('file-storage-context')) await import('../../ui/src/elements/file-storage-context.ts');
  if (!customElements.get('upload-files')) await import('../../ui/src/elements/upload-files.ts');
  
  render(html`
    <file-storage-context .client=${new FileStorageClient(new FileStorageZomeMock())}>
      <api-demo src="custom-elements.json" only="upload-files" exclude-knobs="store">
        <template data-element="upload-files" data-target="host">
          <upload-files></upload-files>
        </template>
      </api-demo>
     </file-storage-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<upload-files>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="upload-files">
</api-docs>
