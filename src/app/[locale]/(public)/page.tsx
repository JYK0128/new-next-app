import { getTranslations } from "next-intl/server";

import { InquiryForm } from "@/app/[locale]/(public)/inquiry-form";
import { cn } from "@/lib/utils";


export default async function Page() {
  const t = await getTranslations();

  return (
    <div className={cn(
      "tw:size-full",
      "tw:flex tw:justify-center tw:items-center",
      // "tw:bg-[#121212] tw:text-[#e0e0e0]",
    )}
    >
      <div className="tw:m-auto">
        {t("welcome.title")}
        <br />
        {t("welcome.message", { name: t("name") })}
      </div>
      <div className="tw:m-auto">
        <InquiryForm />
      </div>
    </div>
  );
}
