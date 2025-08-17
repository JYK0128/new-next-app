import { auth } from "@/auth";
import prisma from "@/lib/prisma";


export const createContext = async () => {
  const { user } = await auth() || {};
  return { prisma, user };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
