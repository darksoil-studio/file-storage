{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.file_storage_provider_test_dna =
      inputs.tnesh-stack.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          file_storage_integrity = self'.packages.file_storage_integrity;
          file_storage = self'.packages.file_storage;
        };
      };
  };
}

