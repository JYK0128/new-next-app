import { Suspense } from "react";

import { ApiComponent, ClientComponent, GraphqlComponent, PrismaComponent, ServerComponent, TrpcComponent } from "@/app/[locale]/_comp";
import { LoginComponent } from "@/app/[locale]/_comp/LoginComponent";

export default async function Home() {
  return (
    <div>
      <div>
        <LoginComponent />
      </div>
      <div className="tw:flex tw:gap-2">
        <Suspense fallback={<div>로딩중...</div>}>
          <ServerComponent />
        </Suspense>
        <ClientComponent />

        <Suspense fallback={<div>로딩중...</div>}>
          <PrismaComponent />
        </Suspense>
        <ApiComponent />
        <TrpcComponent />
        <GraphqlComponent />
      </div>
    </div>
  );
}
