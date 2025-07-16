{ inputs, ... }:

{
  perSystem = { inputs', config, pkgs, system, lib, options, ... }: {
    packages.file_storage_gateway =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

