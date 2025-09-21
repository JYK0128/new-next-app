import { TRPCError } from "@trpc/server";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

import { FileUploadSchema } from "@/.generated/schema";
import { withCreate } from "@/lib/prisma";
import { uuid } from "@/lib/utils";
import { protectedProcedure, router } from "@/trpc/trpc";
extendZodWithOpenApi(z);

export const fileRouter = router({
  upload: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/file/upload",
        tags: ["file"],
        contentTypes: ["multipart/form-data"],
      },
    })
    .input(z.preprocess(
      (data) => {
        if (data instanceof FormData) {
          return Object.fromEntries((data as FormData).entries());
        }
      },
      z.object({
        file: z.instanceof(File).openapi({ type: "string", format: "binary" }),
      }),
    ))
    .output(FileUploadSchema)
    .mutation(async ({ ctx: { prisma, user }, input }) => {
      if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

      const { file } = input;
      const ext = path.extname(file.name);

      const id = uuid();
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const filePath = path.join(uploadsDir, `${id}${ext}`);
      fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

      return await prisma.fileUpload.create({
        data: {
          id: id,
          name: file.name,
          size: file.size,
          type: file.type,
          url: `/uploads/${id}${ext}`,
          ...withCreate(user.id),
        },
      });
    }),
});
