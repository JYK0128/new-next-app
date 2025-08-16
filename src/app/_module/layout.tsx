import type { PropsWithChildren } from "react";

import Header from "@/app/_module/header";


export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div id="root" className="tw:grid tw:grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="tw:scroll-y">
        {children}
      </div>
    </div>
  );
}
