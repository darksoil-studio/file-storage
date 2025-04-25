{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.file_storage_consumer_test_dna =
      inputs.holochain-nix-builders.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          file_storage_gateway_integrity =
            self'.packages.file_storage_gateway_integrity;
          file_storage_gateway = self'.packages.file_storage_gateway;
        };
      };
  };
}

