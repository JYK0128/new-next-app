import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";

import { gqlSchema } from "@/graphql";

const config: CodegenConfig = {
  schema: printSchema(gqlSchema),
  documents: ["./src/app/[locale]/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/.generated/gql/": {
      preset: "client",
    },
    "./src/.generated/gql/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
  watch: process.env.NODE_ENV === "development" && ["./src/app/[locale]/**/*.tsx", "./src/graphql/schema/**/*.ts"],
};
export default config;
