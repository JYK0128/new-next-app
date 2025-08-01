"use client";

import { useTranslations } from "next-intl";


export function ClientComponent() {
  const t = useTranslations();

  return (
    <div>
      <div>클라이언트 컴포넌트</div>
      <div>
        다국어
        {t("welcome")}
      </div>
      <div>
        server:
        (Hydration 에러 발생)
      </div>
      <div>
        client:
        {process.env.NEXT_PUBLIC_ENV}
      </div>
    </div>
  );
}
