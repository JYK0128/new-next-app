import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import { auth } from "@/auth";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    notFound();
  }

  return children;
}
