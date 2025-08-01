import { procedure, router } from "@/trpc/trpc";


export const postRouter = router({
  getAll: procedure.query(() => {
    return [{ id: 1, title: "Hello tRPC" }];
  }),
});
