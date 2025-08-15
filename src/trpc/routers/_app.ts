import { fileRouter, userRouter } from "@/trpc/routers";
import { router } from "@/trpc/trpc";


export const appRouter = router({
  user: userRouter,
  file: fileRouter,
});

export type AppRouter = typeof appRouter;
