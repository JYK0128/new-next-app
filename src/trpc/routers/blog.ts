import { BlogPost } from "@prisma/client";
import * as cheerio from "cheerio";
import { z } from "zod";

import { uuid, withCreate } from "@/lib/prisma";
import { protectedProcedure, publicProcedure, router } from "@/trpc/trpc";

export const blogRouter = router({
  save: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/blog/save",
        tags: ["blog"],
      },
    })
    .input(z.object({
      title: z.string(),
      content: z.string(),
    }))
    .output(z
      .custom<BlogPost>(),
    )
    .mutation(async ({ ctx: { prisma, user }, input }) => {
      const id = uuid();

      let thumbnail: string | undefined;
      const $ = cheerio.load(input.content);
      const mediaUrl = $("img, iframe").first().attr("src");
      const youtube = mediaUrl?.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (youtube) {
        thumbnail = `https://img.youtube.com/vi/${youtube[1]}/maxresdefault.jpg`;
      }
      else {
        thumbnail = mediaUrl;
      }

      return await prisma.blogPost.create({
        data: {
          id: id,
          title: input.title,
          thumbnail: thumbnail,
          content: input.content,
          ...withCreate(user.id),
        },
      });
    }),

  list: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/blog/list",
        tags: ["blog"],
      },
    })
    .input(z.object({
    }))
    .output(z
      .custom<BlogPost>()
      .array(),
    )
    .query(({ ctx: { prisma } }) => {
      return prisma.blogPost.findMany();
    }),

  item: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/blog/list/:id",
        tags: ["blog"],
      },
    })
    .input(z.object({
      id: z.string(),
    }))
    .output(z
      .custom<BlogPost>(),
    )
    .query(({ ctx: { prisma }, input }) => {
      return prisma.blogPost.findUniqueOrThrow({
        where: {
          id: input.id,
        },
      });
    }),
});
