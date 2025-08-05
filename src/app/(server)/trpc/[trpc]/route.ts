import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { NextRequest } from "next/server";

import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/routers/_app";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };

