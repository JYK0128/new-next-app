import { SquarePen } from "lucide-react";
import type { PropsWithChildren } from "react";

import { auth } from "@/auth";
import { Button, Separator } from "@/components";
import { longUUID } from "@/lib/utils";
import { getTrpc } from "@/trpc/server";


type Props = {
  params: Promise<{
    id: string
    slug: string
  }>
};

export default async function Page({ params }: PropsWithChildren<Props>) {
  const { id } = await params;
  const trpc = await getTrpc();
  const post = await trpc.blog.item({ id: longUUID(id) });
  const session = await auth();

  return (
    <article className="tw:scroll-y">
      <header className="tw:flex tw:flex-col tw:gap-1 tw:items-end">
        <div className="tw:px-20 tw:text-xl tw:font-bold">{post.title}</div>
        <div className="tw:flex tw:items-center">
          <div>{post.createdAt.toLocaleString()}</div>
          {!!session?.user && (
            <div>
              <Button size="icon" variant="ghost">
                <SquarePen />
              </Button>
            </div>
          )}
        </div>
        <Separator orientation="horizontal" />
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
