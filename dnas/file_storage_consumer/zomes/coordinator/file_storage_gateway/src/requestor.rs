use file_storage_integrity::*;
use hdk::prelude::*;

use crate::{provider, types::FileStorageRequest};

#[hdk_extern]
pub fn create_file_chunk(create_chunk: FileChunk) -> ExternResult<EntryHash> {
    let result = make_file_storage_request(FileStorageRequest::CreateFileChunk(create_chunk))?;

    Ok(result.decode().map_err(|err| wasm_error!(err))?)
}

#[hdk_extern]
pub fn create_file_metadata(file_metadata: FileMetadata) -> ExternResult<EntryHash> {
    let result = make_file_storage_request(FileStorageRequest::CreateFileMetadata(file_metadata))?;

    Ok(result.decode().map_err(|err| wasm_error!(err))?)
}

#[hdk_extern]
pub fn get_file_metadata(file_hash: EntryHash) -> ExternResult<FileMetadata> {
    let result = make_file_storage_request(FileStorageRequest::GetFileMetadata(file_hash))?;

    Ok(result.decode().map_err(|err| wasm_error!(err))?)
}

#[hdk_extern]
pub fn get_file_chunk(file_chunk_hash: EntryHash) -> ExternResult<FileChunk> {
    let result = make_file_storage_request(FileStorageRequest::GetFileChunk(file_chunk_hash))?;

    Ok(result.decode().map_err(|err| wasm_error!(err))?)
}

/** Functions */

fn make_file_storage_request(request: FileStorageRequest) -> ExternResult<ExternIO> {
    let providers = provider::get_all_providers()?;

    for provider in providers {
        let response = call_remote(
            provider,
            zome_info()?.name,
            "handle_file_storage_request".into(),
            None,
            &request,
        );

        match response {
            Ok(ZomeCallResponse::Ok(result)) => {
                return Ok(result.decode().map_err(|err| wasm_error!(err))?);
            }
            _ => warn!("{:?}", response),
        }
    }

    Err(wasm_error!(WasmErrorInner::Guest(
        "There are no file storage provider nodes able to handle the request".into()
    )))
}
