import type { AppUser } from "@prisma/client";
import { z } from "zod";

import { procedure, router } from "@/trpc/trpc";

export const userRouter = router({
  getAll: procedure
    .meta({
      openapi: {
        method: "GET",
        path: "/user/getUsers",
        tags: ["user"],
      },
    })
    .input(z.object({
    }))
    .output(z
      .custom<AppUser>()
      .array(),
    )
    .query(({ ctx: { prisma } }) => {
      return prisma.appUser.findMany();
    }),
});
