import { z } from "zod";

import { AppUserSchema } from "@/.generated/schema";
import { publicProcedure, router } from "@/trpc/trpc";


export const userRouter = router({
  getAll: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/user/getUsers",
        tags: ["user"],
      },
    })
    .input(z.object({
    }))
    .output(AppUserSchema.array())
    .query(({ ctx: { prisma } }) => {
      return prisma.appUser.findMany();
    }),
});
