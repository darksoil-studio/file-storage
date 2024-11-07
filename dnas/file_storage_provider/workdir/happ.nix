{ inputs, ... }:

{
  perSystem = { inputs', lib, self', system, ... }: {
    packages.file_storage_provider_test_happ =
      inputs.tnesh-stack.outputs.builders.${system}.happ {
        happManifest = ./happ.yaml;

        dnas = {
          # Include here the DNA packages for this hApp, e.g.:
          # my_dna = inputs'.some_input.packages.my_dna;
          # This overrides all the "bundled" properties for the hApp manifest 
          file_storage_provider = self'.packages.file_storage_provider_test_dna;
          file_storage_consumer = self'.packages.file_storage_consumer_test_dna;
        };
      };
  };
}
