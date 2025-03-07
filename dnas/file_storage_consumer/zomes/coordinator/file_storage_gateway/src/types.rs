use std::fmt::Debug;

use file_storage_integrity::*;
use hdk::prelude::*;

#[derive(Serialize, Deserialize, Debug)]
pub enum FileStorageRequest {
    CreateFileChunk(FileChunk),
    GetFileChunk(EntryHash),
    CreateFileMetadata(FileMetadata),
    GetFileMetadata(EntryHash),
}
