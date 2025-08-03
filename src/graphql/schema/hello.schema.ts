import { builder } from "@/graphql/builder";

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello world!",
    }),
  }),
});
