import { SquarePen } from "lucide-react";

import { auth } from "@/auth";
import { Button, Separator } from "@/components";
import { Link } from "@/i18n/navigation";
import { toLongId } from "@/lib/utils";
import { getTrpc } from "@/trpc/server";


type Props = {
  params: Promise<{
    id: string
    slug: string
  }>
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const trpc = await getTrpc();
  const post = await trpc.blog.item({ id: toLongId(id) });
  const session = await auth();

  return (
    <article className="tw:scroll-y">
      <header className="tw:flex tw:flex-col tw:gap-1 tw:items-center tw:pt-10">
        <div className="tw:px-20 tw:text-xl tw:font-bold">
          {post.title}
        </div>
        <div className="tw:flex tw:items-center">
          <div>{post.updatedAt.toLocaleString()}</div>
          {!!session?.user && (
            <div>
              <Link href={`/blog/edit/${id}`}>
                <Button size="icon" variant="ghost">
                  <SquarePen />
                </Button>
              </Link>
            </div>
          )}
        </div>
        <Separator orientation="horizontal" />
      </header>
      <div
        className="sun-editor-editable tw:p-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
