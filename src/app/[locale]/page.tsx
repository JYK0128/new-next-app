import { Suspense } from "react";

import { ClientComponent, GraphqlComponent, PrismaComponent, ServerComponent, TrpcComponent } from "@/app/[locale]/_comp";

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
      <TrpcComponent />
      <GraphqlComponent />
    </div>
  );
}
