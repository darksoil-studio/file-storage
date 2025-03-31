use std::fmt::Debug;

use hdk::prelude::*;

use file_storage_gateway_integrity::*;

use crate::{
    types::FileStorageRequest,
    utils::{create_link_relaxed, delete_link_relaxed},
};

#[hdk_extern(infallible)]
fn scheduled_remove_inactive_providers(_: Option<Schedule>) -> Option<Schedule> {
    if let Err(err) = remove_inactive_providers() {
        error!("Failed to remove inactive providers: {err:?}");
    }

    Some(Schedule::Persisted("*/60 * * * * * *".into())) // Every 60 seconds
}

pub fn remove_inactive_providers() -> ExternResult<()> {
    let providers_links = get_links(
        GetLinksInputBuilder::try_new(
            providers_path().path_entry_hash()?,
            LinkTypes::GatewayProviderAgent,
        )?
        .build(),
    )?;

    let my_pub_key = agent_info()?.agent_latest_pubkey;

    for provider_link in providers_links.clone() {
        let Some(provider) = provider_link.target.into_agent_pub_key() else {
            continue;
        };
        if provider.eq(&my_pub_key) {
            continue;
        }
        let available = check_provider_is_available(&provider);

        if available.is_err() {
            warn!("Marking provider as not available: {provider}");
            delete_link_relaxed(provider_link.create_link_hash)?;
        }
    }

    let providers: Vec<AgentPubKey> = providers_links
        .into_iter()
        .filter_map(|link| link.target.into_agent_pub_key())
        .collect();

    if !providers.contains(&my_pub_key) {
        let path = providers_path();
        create_link_relaxed(
            path.path_entry_hash()?,
            my_pub_key,
            LinkTypes::GatewayProviderAgent,
            (),
        )?;
    }

    Ok(())
}

pub fn check_provider_is_available(provider: &AgentPubKey) -> ExternResult<()> {
    let response = call_remote(
        provider.clone(),
        zome_info()?.name,
        "available_as_provider".into(),
        None,
        (),
    )?;

    match response {
        ZomeCallResponse::Ok(bytes) => {
            let available: bool = bytes.decode().map_err(|err| wasm_error!(err))?;
            if !available {
                return Err(wasm_error!("Not available"));
            }
            Ok(())
        }
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Failed to handle file storage request".into()
        ))),
    }
}

#[hdk_extern]
pub fn available_as_provider() -> ExternResult<bool> {
    Ok(true)
}

#[hdk_extern]
pub fn announce_as_provider(_: ()) -> ExternResult<()> {
    let agent_info = agent_info()?;

    let path = providers_path();
    create_link(
        path.path_entry_hash()?,
        agent_info.agent_latest_pubkey,
        LinkTypes::GatewayProviderAgent,
        (),
    )?;

    // grant unrestricted access to accept_cap_claim so other agents can send us claims
    let functions = GrantedFunctions::Listed(BTreeSet::from([
        (
            zome_info()?.name,
            FunctionName::from("handle_file_storage_request"),
        ),
        (
            zome_info()?.name,
            FunctionName::from("available_as_provider"),
        ),
    ]));

    create_cap_grant(CapGrantEntry {
        tag: "".into(),
        // empty access converts to unrestricted
        access: ().into(),
        functions,
    })?;

    schedule("scheduled_remove_inactive_providers")?;

    Ok(())
}

pub fn get_all_providers() -> ExternResult<Vec<AgentPubKey>> {
    let links = get_links(
        GetLinksInputBuilder::try_new(
            providers_path().path_entry_hash()?,
            LinkTypes::GatewayProviderAgent,
        )?
        .build(),
    )?;

    let providers_pub_keys = links
        .into_iter()
        .filter_map(|link| link.target.into_agent_pub_key())
        .collect();

    Ok(providers_pub_keys)
}

#[hdk_extern]
pub fn handle_file_storage_request(request: FileStorageRequest) -> ExternResult<ExternIO> {
    let now = sys_time()?;

    match &request {
        FileStorageRequest::CreateFileChunk(_file_chunk) => {
            info!("Received file storage request with id {now}: CreateFileChunk.",);
        }
        _ => {
            info!("Received file storage request with id {now}: {request:?}.",);
        }
    };

    let response = match request {
        FileStorageRequest::CreateFileChunk(file_chunk) => {
            bridged_call("create_file_chunk".into(), file_chunk)
        }
        FileStorageRequest::CreateFileMetadata(input) => {
            bridged_call("create_file_metadata".into(), input)
        }
        FileStorageRequest::GetFileChunk(entry_hash) => {
            bridged_call("get_file_chunk".into(), entry_hash)
        }
        FileStorageRequest::GetFileMetadata(entry_hash) => {
            bridged_call("get_file_metadata".into(), entry_hash)
        }
    }?;
    info!("Processed the file storage request with id {now}.");

    Ok(response)
}

/** Helpers */

fn providers_path() -> Path {
    Path::from("file_storage_providers")
}

pub const FILE_STORAGE_PROVIDER_ZOME_NAME: &'static str = "file_storage";
pub const FILE_STORAGE_PROVIDER_ROLE_ID: &'static str = "file_storage_provider";

fn bridged_call<I: Serialize + Debug>(fn_name: String, payload: I) -> ExternResult<ExternIO> {
    let response = call(
        CallTargetCell::OtherRole(FILE_STORAGE_PROVIDER_ROLE_ID.into()),
        ZomeName::from(String::from(FILE_STORAGE_PROVIDER_ZOME_NAME)),
        fn_name.into(),
        None,
        payload,
    )?;

    match response {
        ZomeCallResponse::Ok(bytes) => Ok(bytes),
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Failed to handle file storage request".into()
        ))),
    }
}
