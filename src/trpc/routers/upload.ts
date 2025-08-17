import type { FileUpload } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { zfd } from "zod-form-data";

import { uuid, withCreate } from "@/lib/prisma";
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
    .output(z.custom<FileUpload>())
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
