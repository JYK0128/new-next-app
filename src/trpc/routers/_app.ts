import { userRouter } from "@/trpc/routers/user";
import { router } from "@/trpc/trpc";


export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
