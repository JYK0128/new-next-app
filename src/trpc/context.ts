import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";


export const createContext = async ({ req }: FetchCreateContextFnOptions) => {
  const { user } = await auth() || {};
  return { prisma, user, req };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
