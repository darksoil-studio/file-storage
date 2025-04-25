{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: {
    packages.file_storage =
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
    builders.file_storage_provider = { file_storage_gateway_role }:
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        zomeEnvironmentVars = {
          FILE_STORAGE_GATEWAY_ROLE = file_storage_gateway_role;
        };
      };
  };
}

