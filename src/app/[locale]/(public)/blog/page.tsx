"use client";
import { useQuery } from "@tanstack/react-query";
import { Pen } from "lucide-react";

import type { BlogPost } from "@/.generated/schema";
import { AspectImage, Button, Card, CardContent, Separator } from "@/components";
import { useRouter } from "@/i18n/navigation";
import { useSession } from "@/lib/auth-client";
import { useTRPC } from "@/lib/trpc";
import { cn, slugify, toShortId } from "@/lib/utils";

export default function Page() {
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.blog.list.queryOptions({}));
  const { data: session } = useSession();

  const movePost = (post: BlogPost) => () => {
    const slug = slugify(post.title);
    const uuid = toShortId(post.id);
    router.push(`/blog/${uuid}/${slug}`);
  };

  return (
    <div className="tw:scroll-y tw:p-5">
      {!!session?.user && (
        <div className="tw:flex tw:justify-end">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => router.push("/blog/new")}
          >
            <Pen />
          </Button>
        </div>
      )}
      {!data?.length && (
        <div className={cn(
          "tw:text-muted-foreground",
          "tw:absolute tw:inset-0 tw:size-full tw:pointer-events-none",
          "tw:flex tw:justify-center tw:items-center",
        )}
        >
          No Contents
        </div>
      )}
      <div className="tw:grid tw:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tw:gap-5">
        {data?.map((post) => (
          <Card key={post.id} onClick={movePost(post)}>
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
    </div>
  );
}
