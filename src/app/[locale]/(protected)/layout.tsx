import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { auth } from "@/auth";


export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/login");
  }

  return (
    <div id="root" className="tw:grid tw:grid-rows-[auto_1fr_auto]">
      <header>
        header
      </header>
      <div>
        {children}
      </div>
    </div>
  );
}
