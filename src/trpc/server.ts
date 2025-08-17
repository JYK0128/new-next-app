import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/routers/_app";
import { createCaller } from "@/trpc/trpc";

const caller = createCaller(appRouter);

export const getTrpc = async () => {
  const context = await createContext();
  return caller(context);
};
