import { TRPCError } from "@trpc/server";
import fs from "fs";
import path from "path";
import * as uuid from "uuid";
import { z } from "zod";
import { zfd } from "zod-form-data";

import { withCreate } from "@/lib/prisma";
import { protectedProcedure, router } from "@/trpc/trpc";

export const fileRouter = router({
  upload: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/file/upload",
        tags: ["file"],
      },
    })
    .input(zfd.formData({
      file: zfd.file(),
    }))
    .output(z.object({
      errorMessage: z.string().optional(),
      result: z.object({
        url: z.string(),
        name: z.string(),
        size: z.number(),
      }).array(),
    }))
    .mutation(async ({ ctx: { prisma, user }, input }) => {
      if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

      const { file } = input;
      const ext = path.extname(file.name);

      const id = uuid.v7();
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const filePath = path.join(uploadsDir, `${id}${ext}`);
      fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

      await prisma.fileUpload.create({
        data: {
          id: id,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          ...withCreate(user.id),
        },
      });

      return {
        result: [{
          url: `/uploads/${id}${ext}`,
          name: file.name,
          size: file.size,
        }],
      };
    }),
});
