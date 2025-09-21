import { redirect } from "next/navigation";

import { toLongId, slugify } from "@/lib/utils";
import { getTrpc } from "@/trpc/server";

type Props = {
  params: Promise<{
    id: string
  }>
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const trpc = await getTrpc();
  const post = await trpc.blog.item({ id: toLongId(id) });
  const slug = slugify(post.title);

  redirect(`/blog/${id}/${encodeURIComponent(slug)}`);
}
