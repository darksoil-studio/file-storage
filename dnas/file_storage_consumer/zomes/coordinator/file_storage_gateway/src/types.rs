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

impl FileStorageRequest {
    pub fn request_type(&self) -> String {
        match self {
            FileStorageRequest::CreateFileChunk(_) => "CreateFileChuck",
            FileStorageRequest::GetFileChunk(_) => "GetFileChuck",
            FileStorageRequest::CreateFileMetadata(_) => "CreateFileMetadata",
            FileStorageRequest::GetFileMetadata(_) => "GetFileMetadata",
        }
        .to_string()
    }
}
