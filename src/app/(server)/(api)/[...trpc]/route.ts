import type { NextRequest } from "next/server";
import { createOpenApiFetchHandler } from "trpc-to-openapi";

import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/routers/_app";

const handler = (req: NextRequest) =>
  createOpenApiFetchHandler({
    endpoint: "/api",
    req,
    router: appRouter,
    createContext,
  });

export {
  handler as DELETE,
  handler as GET,
  handler as HEAD,
  handler as OPTIONS,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
