"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { InquiryForm } from "@/app/[locale]/(public)/inquiry-form";


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
    const { scrollHeight, clientHeight, children } = screenRef.current;

    const scroll = ScrollTrigger.create({
      trigger: screenRef.current,
      scroller: screenRef.current,
      start: "top top",
      end: scrollHeight - clientHeight,
      scrub: true,
      snap: {
        snapTo: 1 / (children.length - 1),
        duration: 1,
        ease: "power4.inOut",
      },

      markers: true,
    });

    return () => {
      scroll.kill();
    };
  });


  return (
    <div ref={screenRef} className="tw:size-full tw:scroll-y">
      <div ref={textRef} className="tw:size-full tw:m-auto tw:invisible">
        {t("welcome.title")}
        <br />
        {t("welcome.message", { name: t("name") })}
      </div>
      <div className="tw:size-full tw:m-auto">
        가난하고, 배고픈 상태에요.
      </div>
      <div className="tw:size-full tw:m-auto">
        <InquiryForm />
      </div>
    </div>
  );
}
