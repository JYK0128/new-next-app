import { generateOpenApiDocument } from "trpc-to-openapi";

import { appRouter } from "@/trpc/routers/_app";


// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "CRUD API",
  version: "1.0.0",
  baseUrl: "http://localhost:3000/api",
});
