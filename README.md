# @darksoil-studio/file-storage

Stores files (and their Content-Type metadata) as fragments, and recovers them later by their hash.

A client may choose to be part of the file_storage_provider DNA (holding portions of the stored
files), or may join the file_storage_consumer DNA which allows access to the files' data, but does
not host it.

## Testing

Starts a Holochain Playground and some File Upload windows:

```
$ nix develop
$ pnpm install
$ pnpm start
```
