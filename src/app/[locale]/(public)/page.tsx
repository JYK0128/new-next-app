"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { InquiryForm } from "@/app/[locale]/(public)/inquiry-form";
import { cn } from "@/lib/utils";


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Page() {
  const t = useTranslations();
  const textRef = useRef<HTMLDivElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    textRef.current.classList.remove("tw:invisible");

    const split = SplitText.create(textRef.current, {
      type: "chars, words",
      onSplit: (self) => {
        gsap.from(self.chars, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power3.out",
          duration: 0.6,
        });
      },
    });

    return () => {
      split.revert();
    };
  });

  useGSAP(() => {
    if (!screenRef.current) return;

    const scroller = screenRef.current;
    const tweenList = Array.from(screenRef.current.children).map((child) => ScrollTrigger.create({
      trigger: child,
      scroller,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    }));

    return () => {
      tweenList.forEach((tween) => tween.kill());
    };
  });


  return (
    <div
      ref={screenRef}
      className={cn(
        "tw:size-full tw:[&>div]:bg-background",
        "tw:scroll-y tw:scrollbar-none",
        "tw:snap-y tw:snap-mandatory tw:[&>div]:snap-start",
      )}
    >
      <div className="tw:size-full tw:m-auto">
        <div ref={textRef} className="tw:invisible">
          {t("welcome.title")}
          <br />
          {t("welcome.message", { name: t("name") })}
        </div>
      </div>
      <div className="tw:size-full tw:m-auto">
        <div
          className={cn(
            "tw:size-full tw:[&>div]:bg-background",
            "tw:flex tw:flex-nowrap tw:[&>div]:flex-none",
            "tw:scroll-x tw:scrollbar-none",
            "tw:snap-x tw:snap-mandatory tw:[&>div]:snap-start",
          )}
        >
          <div className="tw:size-full">Slide 01</div>
          <div className="tw:size-full">Slide 02</div>
          <div className="tw:size-full">Slide 03</div>
        </div>
      </div>
      <div className="tw:size-full tw:m-auto">
        <InquiryForm />
      </div>
    </div>
  );
}
