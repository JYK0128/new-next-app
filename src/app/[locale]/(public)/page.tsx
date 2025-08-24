"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { InquiryForm } from "@/app/[locale]/(public)/inquiry-form";
import { cn } from "@/lib/utils";


export default function Page() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.registerPlugin(SplitText);

    const split = new SplitText(ref.current, { type: "chars, words" });

    ref.current.classList.toggle("tw:invisible");
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.6,
    });

    return () => {
      split.revert();
      gsap.killTweensOf(split.chars);
    };
  });


  return (
    <div className={cn(
      "tw:size-full tw:scroll-y",
    )}
    >
      <div ref={ref} className="tw:size-full tw:m-auto tw:invisible">
        {t("welcome.title")}
        <br />
        {t("welcome.message", { name: t("name") })}
      </div>
      <div className="tw:size-full tw:m-auto">
        <InquiryForm />
      </div>
    </div>
  );
}
