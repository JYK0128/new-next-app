import { blogRouter } from "@/trpc/routers/blog";
import { chatRouter } from "@/trpc/routers/chat";
import { inquiryRouter } from "@/trpc/routers/inquiry";
import { fileRouter } from "@/trpc/routers/upload";
import { userRouter } from "@/trpc/routers/user";
import { router } from "@/trpc/trpc";

export const appRouter = router({
  user: userRouter,
  chat: chatRouter,
  file: fileRouter,
  blog: blogRouter,
  inquiry: inquiryRouter,
});

export type AppRouter = typeof appRouter;
