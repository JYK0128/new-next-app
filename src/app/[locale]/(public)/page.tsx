"use client";
import { useGSAP } from "@gsap/react";
import * as d3 from "d3";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Page() {
  const screenRef = useRef<HTMLDivElement | null>(null);




  useGSAP(() => {
    if (!screenRef.current) return;
    const scroller = screenRef.current;
    const sections = scroller.querySelectorAll(":scope>section");

    sections.forEach((section) => {
      if (section.id === "slider") {
        const slider = section;
        const contents = slider.children;

        ScrollTrigger.create({
          trigger: slider,
          scroller: scroller,
          pin: true,
          scrub: 1,
          snap: 1 / (contents.length - 1),
          animation: gsap.to(contents, {
            xPercent: -100 * (contents.length - 1),
            ease: "none",
          }),
          // markers: true,
        });
      }
      else {
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
      )}
    >
      <section>Header</section>

      <section
        id="slider"
        className={cn(
          "tw:relative",
          "tw:flex tw:overflow-x-hidden",
          "tw:[&>div]:flex-none tw:[&>div]:size-full",
        )}
      >
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </section>
      <section id="dummy" />

      <section>Footer</section>
    </div>
  );
}
