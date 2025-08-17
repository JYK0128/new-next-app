import type { PropsWithChildren } from "react";

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

  return (
    <div>
      <div>
        {post.title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
