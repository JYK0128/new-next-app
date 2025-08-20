import { generateOpenApiDocument } from "trpc-to-openapi";

import { appRouter } from "@/trpc/routers";


// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "CRUD API",
  version: "1.0.0",
  baseUrl: `${process.env.NEXT_SITE_DOMAIN}/api`,
  docsUrl: `${process.env.NEXT_SITE_DOMAIN}/api-docs`,
  filter: (ctx) => {
    return !ctx.metadata.openapi.tags?.includes("file");
  },
});
