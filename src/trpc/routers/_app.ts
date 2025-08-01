import { postRouter } from "@/trpc/routers/post";
import { router } from "@/trpc/trpc";


export const appRouter = router({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
