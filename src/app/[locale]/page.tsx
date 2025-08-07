import { Suspense } from "react";

import { ApiComponent, ClientComponent, GraphqlComponent, PrismaComponent, ServerComponent, TrpcComponent } from "@/app/[locale]/_comp";
import { LoginComponent } from "@/app/[locale]/_comp/LoginComponent";
import { LogoutComponent } from "@/app/[locale]/_comp/LogoutComponent";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <div>
        {JSON.stringify(session?.user)}
      </div>
      <div>
        <LoginComponent />
        <LogoutComponent />
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
