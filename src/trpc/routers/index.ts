import { blogRouter } from "@/trpc/routers/blog";
import { fileRouter } from "@/trpc/routers/upload";
import { userRouter } from "@/trpc/routers/user";
import { router } from "@/trpc/trpc";

export const appRouter = router({
  user: userRouter,
  file: fileRouter,
  blog: blogRouter,
});

export type AppRouter = typeof appRouter;
