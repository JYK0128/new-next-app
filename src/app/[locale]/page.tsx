import { Suspense } from "react";

import { ClientComponent } from "@/app/[locale]/_comp/ClientComponent";
import { PrismaComponent } from "@/app/[locale]/_comp/PrismaComponent";
import { QueryComponent } from "@/app/[locale]/_comp/QueryComponent";
import { ServerComponent } from "@/app/[locale]/_comp/ServerComponent";

export default async function Home() {
  return (
    <div className="tw:flex tw:gap-2">
      <Suspense fallback={<div>로딩중...</div>}>
        <ServerComponent />
      </Suspense>
      <ClientComponent />

      <Suspense fallback={<div>로딩중...</div>}>
        <PrismaComponent />
      </Suspense>
      <QueryComponent />
    </div>
  );
}
