import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import { auth } from "@/auth";


export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) {
    notFound();
  }

  return children;
}
