import { Suspense } from "react";

import { ClientComponent } from "@/app/[locale]/_comp/ClientComponent";
import { Component } from "@/app/[locale]/_comp/Component";
import { ServerComponent } from "@/app/[locale]/_comp/ServerComponent";

export default async function Home() {
  return (
    <div className="tw:flex tw:gap-2">
      <Suspense fallback={<div>로딩중...</div>}>
        <ServerComponent />
      </Suspense>
      <ClientComponent />

      <div />
      <Component />
    </div>
  );
}
