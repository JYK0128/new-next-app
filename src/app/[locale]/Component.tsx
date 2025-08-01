"use client";

import { useTranslations } from "next-intl";


export const Component = () => {
  const t = useTranslations();

  return <div>{t("welcome")}</div>;
};
