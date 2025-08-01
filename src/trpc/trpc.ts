import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import type { OpenApiMeta } from "trpc-to-openapi";

import { Context } from "./context";


const t = initTRPC
  .context<Context>()
  .meta<OpenApiMeta>()
  .create({ transformer: SuperJSON });

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const procedure = t.procedure;
