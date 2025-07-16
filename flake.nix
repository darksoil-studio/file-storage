{
  description = "Template for Holochain app development";

  inputs = {
    holochain-utils.url = "github:darksoil-studio/holochain-utils/main-0.5";
    nixpkgs.follows = "holochain-utils/nixpkgs";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-ci.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-ci.cachix.org-1:5IUSkZc0aoRS53rfkvH9Kid40NpyjwCMCzwRTXy+QN8="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs@{ ... }:
    inputs.holochain-utils.inputs.holonix.inputs.flake-parts.lib.mkFlake {
      inherit inputs;
    } {
      # Import all `dnas/*/dna.nix` files
      imports = [
        ./dnas/file_storage_provider/zomes/integrity/file_storage/zome.nix
        ./dnas/file_storage_provider/zomes/coordinator/file_storage/zome.nix
        ./dnas/file_storage_provider/workdir/dna.nix
        ./dnas/file_storage_provider/workdir/happ.nix
        ./dnas/file_storage_consumer/zomes/integrity/file_storage_gateway/zome.nix
        ./dnas/file_storage_consumer/zomes/coordinator/file_storage_gateway/zome.nix
        ./dnas/file_storage_consumer/workdir/dna.nix
        ./dnas/file_storage_consumer/workdir/happ.nix
        inputs.holochain-utils.outputs.flakeModules.builders
      ];

      systems =
        builtins.attrNames inputs.holochain-utils.inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, lib, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.holochain-utils.devShells.synchronized-pnpm
            inputs'.holochain-utils.devShells.default
          ];

          packages = [
            inputs'.holochain-utils.packages.holochain
            inputs'.holochain-utils.packages.hc-scaffold-zome
            inputs'.holochain-utils.packages.hc-playground
            inputs'.holochain-utils.packages.hc-pilot
          ];
        };
        devShells.npm-ci = inputs'.holochain-utils.devShells.synchronized-pnpm;

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.holochain-utils.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "file-storage \
                --integrity-zome-name file_storage_integrity \
                --coordinator-zome-name file_storage \
                --remote-zome-git-url github:darksoil-studio/file-storage \
                --remote-zome-git-branch main-0.5 \
                --remote-npm-package-name @darksoil-studio/file-storage-zome \
                --context-element file-storage-context \
                --context-element-import @darksoil-studio/file-storage-zome/dist/elements/file-storage-context.js"
          '';
        };

      };
    };
}
