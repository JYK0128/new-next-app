"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTransition } from "react";

// eslint-disable-next-line sonarjs/no-globals-shadowing
export default function Error({ reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const t = useTranslations();

  const onRefresh = () => {
    router.refresh();
    startTransition(reset);
  };

  return (
    <div>
      <h2>
        {t("error")}
      </h2>
      <button onClick={onRefresh}>
        {t("refresh")}
      </button>
    </div>
  );
}
