{ inputs, ... }:

{
  perSystem = { inputs', config, pkgs, system, lib, options, ... }: {
    packages.file_storage_integrity =
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

