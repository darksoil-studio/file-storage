{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: {
    packages.file_storage =
      inputs.tnesh-stack.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

