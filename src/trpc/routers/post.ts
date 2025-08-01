import { z } from "zod";

import { procedure, router } from "@/trpc/trpc";

export const postRouter = router({
  getAll: procedure
    .meta({
      openapi: {
        method: "GET",
        path: "/post/getAll",
        tags: ["post"],
      },
    })
    .input(z.object({
    }))
    .output(z.object({
      id: z.number(),
      title: z.string(),
    }).array())
    .query(() => {
      return [{ id: 1, title: "Hello tRPC" }];
    }),
});
