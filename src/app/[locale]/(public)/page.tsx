"use client";
import { useGSAP } from "@gsap/react";
import gsap, { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { ScreenFour } from "@/app/[locale]/(public)/screen-four";
import { ScreenOne } from "@/app/[locale]/(public)/screen-one";
import { ScreenThree } from "@/app/[locale]/(public)/screen-three";
import { ScreenTwo } from "@/app/[locale]/(public)/screen-two";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Page() {
  const screenRef = useRef<HTMLDivElement>(null);

  // 스크롤 처리
  useGSAP(() => {
    if (!screenRef.current) return;
    const scroller = screenRef.current;
    const sections = scroller.querySelectorAll(":scope>section");

    sections.forEach((section) => {
      if (!section.classList.contains("slider")) {
        ScrollTrigger.create({
          trigger: section,
          scroller: scroller,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          snap: 1,
          animation: gsap.to(section, { opacity: 0 }),
          // markers: true,
        });
      }
    });
  });

  return (
    <div
      ref={screenRef}
      className={cn(
        "tw:size-full",
        "tw:scroll-y tw:scrollbar-none",
        "tw:[&>section]:size-full",
        "tw:bg-[#9fdbef]",
      )}
    >
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
    </div>
  );
}
