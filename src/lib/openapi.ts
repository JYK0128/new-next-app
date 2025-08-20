import { generateOpenApiDocument } from "trpc-to-openapi";

import { appRouter } from "@/trpc/routers";

export interface DocMeta {
  isPublic: boolean
}

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument<DocMeta>(appRouter, {
  title: "CRUD API",
  version: "1.0.0",
  baseUrl: `${process.env.NEXT_SITE_DOMAIN}/api`,
  docsUrl: `${process.env.NEXT_SITE_DOMAIN}/api-docs`,
  filter: ({ metadata }) => metadata.isPublic !== false,
});
