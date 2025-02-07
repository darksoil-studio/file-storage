{
  description = "Template for Holochain app development";

  inputs = {
    nixpkgs.follows = "holonix/nixpkgs";
    holonix.url = "github:holochain/holonix/main-0.4";
    playground.url = "github:darksoil-studio/holochain-playground/main-0.4";
    tnesh-stack.url = "github:darksoil-studio/tnesh-stack/main-0.4";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/main-0.4";
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
    inputs.holonix.inputs.flake-parts.lib.mkFlake { inherit inputs; } {
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
        inputs.tnesh-stack.outputs.flakeModules.builders
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, lib, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.tnesh-stack.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.tnesh-stack.packages.holochain
            inputs'.tnesh-stack.packages.hc-scaffold-zome
            inputs'.playground.packages.hc-playground
            inputs'.p2p-shipyard.packages.hc-pilot
            (pkgs.writeShellScriptBin "npm-git-version" ''
              commit=$(${pkgs.git}/bin/git rev-parse HEAD)
              version=$(cat $1 | ${pkgs.jq}/bin/jq '.version' -r)
              new_version=$version-rev.$commit
              ${pkgs.nodejs_20}/bin/npm version $new_version
            '')
          ];
        };

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.tnesh-stack.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "file-storage \
                --integrity-zome-name file_storage_integrity \
                --coordinator-zome-name file_storage \
                --remote-zome-git-url github:darksoil-studio/file-storage \
                --remote-zome-git-branch main-0.4 \
                --remote-npm-package-name @darksoil-studio/file-storage-zome \
                --remote-npm-package-path ui \
                --context-element file-storage-context \
                --context-element-import @darksoil-studio/file-storage-zome/dist/elements/file-storage-context.js"
          '';
        };

      };
    };
}
