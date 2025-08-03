import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";

import { gqlSchema } from "@/graphql";

const config: CodegenConfig = {
  schema: printSchema(gqlSchema),
  documents: ["./src/app/[locale]/**/*.tsx"],
  generates: {
    "./src/.generated/gql/": {
      preset: "client",
      plugins: [],
    },
    "./src/.generated/gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  watch: process.env.NODE_ENV === "development",
};
export default config;
