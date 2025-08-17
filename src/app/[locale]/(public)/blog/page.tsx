"use client";
import type { BlogPost } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, Separator } from "@/components";
import { AspectImage } from "@/components/custom";
import { useRouter } from "@/i18n/navigation";
import { useTRPC } from "@/lib/trpc";
import { shortUUID, slugify } from "@/lib/utils";


export default function Page() {
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.blog.list.queryOptions({}));

  const movePost = (post: BlogPost) => () => {
    const slug = slugify(post.title).substring(0, 50);
    const uuid = shortUUID(post.id);
    router.push(`/blog/${uuid}/${slug}`);
  };

  return (
    <div className="tw:flex tw:gap-5">
      {data?.map((post) => (
        <Card
          key={post.id}
          className="tw:w-[300px]"
          onClick={movePost(post)}
        >
          <CardContent className="tw:flex tw:flex-col tw:gap-5">
            <AspectImage src={post.thumbnail} />
            <Separator orientation="horizontal" />
            <div className="tw:truncate tw:text-xl tw:font-bold">
              {post.title}
            </div>
            <div className="tw:text-right">
              {post.createdAt.toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
