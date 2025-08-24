import type { SentMessageInfo } from "nodemailer";
import { Readable } from "stream";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

import { mailer } from "@/lib/mailer";
import { publicProcedure, router } from "@/trpc/trpc";
extendZodWithOpenApi(z);

export const inquiryRouter = router({
  inquiry: publicProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/inquiry",
        tags: ["inquiry"],
        contentTypes: ["multipart/form-data"],
      },
    })
    .input(z.preprocess(
      (data) => {
        if (data instanceof FormData) {
          const fields = Object.fromEntries(data.entries());
          return { ...fields, files: data.getAll("files") };
        }
      },
      z.object({
        email: z.string().email(),
        title: z.string().min(1),
        content: z.string().min(1),
        files: z.instanceof(File).array()
          .openapi({ type: "array", items: { type: "string", format: "binary" } }),
      }),
    ))
    .output(z.custom<SentMessageInfo>())
    .mutation(async ({ input }) => {
      return mailer.sendMail({
        replyTo: input.email,
        to: `${process.env.GOOGLE_MAIL_USER}@gmail.com`,
        subject: input.title,
        html: input.content,
        attachments: input.files.filter(Boolean).map((file) => ({
          filename: file.name,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content: Readable.fromWeb(file.stream() as any),
        })),
      });
    }),
});
