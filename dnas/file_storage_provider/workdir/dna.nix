{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.file_storage_provider_test_dna =
      inputs.holochain-utils.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          file_storage_integrity = self'.packages.file_storage_integrity;
          file_storage = self'.builders.file_storage_provider {
            file_storage_gateway_role = "file_storage_consumer";
          };
        };
      };
  };
}

