import { initTRPC, TRPCError } from "@trpc/server";
import SuperJSON from "superjson";
import type { OpenApiMeta } from "trpc-to-openapi";

import type { Context } from "@/trpc/context";


const t = initTRPC
  .context<Context>()
  .meta<OpenApiMeta>()
  .create({ transformer: SuperJSON });

export const createCaller = t.createCallerFactory;
export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const { user } = ctx;

  if (!user?.idToken) throw new TRPCError({
    code: "UNAUTHORIZED",
    message: "invalid token",
  });

  return next({ ctx: { ...ctx, user } });
});

