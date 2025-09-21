import type { PropsWithChildren } from "react";

import { Chat } from "@/app/_module/chat";
import Header from "@/app/_module/header";


export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div id="root" className="tw:relative">
      <div className="tw:size-full tw:grid tw:grid-rows-[auto_1fr_auto]">
        <Header />
        <main>
          {children}
        </main>
        <footer />
      </div>
      <Chat />
    </div>
  );
}
