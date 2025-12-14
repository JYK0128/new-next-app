import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const createContext = async () => {
  const session = await auth();
  return { prisma, user: session?.user };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
