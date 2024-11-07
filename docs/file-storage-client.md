# FileStorageClient

Typescript class that receives an `AppClient` and exposes functions to upload and retrieve full files.

This class is really important in this module, as it includes the process of chunking and aggregation of the chunks necessary to store and retrieve files in holochain.

```ts
import { EntryHash } from '@holochain/client';
import { FileStorageClient } from "@darksoil-studio/file-storage-zome";

const client = new FileStorageClient(appClient, 'my-role-name');

const fileHash: EntryHash = await client.uploadFile(file);
console.log(await client.downloadFile(fileHash)); // Will print the file
```

> [!NOTE]
> Learn how to setup the `AppClient` object [here](https://www.npmjs.com/package/@holochain/client).
