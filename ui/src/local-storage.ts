import { EntryHash } from "@holochain/client";
import { createStore, del, entries, get, set } from "idb-keyval";
import { Base64 } from "js-base64";

const store = createStore("HC_ZOME_FILE_STORAGE", "IMAGES");

interface CachedFile {
  fileB64: string;
  name: string;
  lastModified: number | undefined;
  type: string;

  lastRead: number;
}

export async function storeFile(fileHash: EntryHash, file: File) {
  await set(
    fileHash,
    {
      fileB64: Base64.fromUint8Array(new Uint8Array(await file.arrayBuffer())),
      name: file.name,
      lastModified: file.lastModified,
      type: file.type,
      lastRead: Date.now(),
    } as CachedFile,
    store,
  );
  clearOldItems();
}

export async function getFile(imageHash: EntryHash): Promise<File | undefined> {
  const cachedFile: CachedFile | undefined = await get(imageHash, store);

  if (!cachedFile) return undefined;

  const file = new File(
    [new Blob([Base64.toUint8Array(cachedFile.fileB64)])],
    cachedFile.name,
    {
      lastModified: cachedFile.lastModified,
      type: cachedFile.type,
    },
  );

  storeFile(imageHash, file);

  return file;
}

const FILE_CLEAR_MS = 7 * 24 * 60 * 60 * 1000; // 3 days

async function clearOldItems() {
  const files = await entries<EntryHash, CachedFile>(store);

  for (const [fileHash, file] of files) {
    if (Date.now() - file.lastRead > FILE_CLEAR_MS) {
      await del(fileHash, store);
    }
  }
}
