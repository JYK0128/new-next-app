import { blogRouter, fileRouter, userRouter } from "@/trpc/routers";
import { router } from "@/trpc/trpc";


export const appRouter = router({
  user: userRouter,
  file: fileRouter,
  blog: blogRouter,
});

export type AppRouter = typeof appRouter;
