import { useGSAP } from "@gsap/react";
import gsap, { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export function ScreenThree() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  // openGL(2D - pixi.js)
  // openGL(3D - three.js)
  useGSAP(() => {
    if (!pathRef.current) return;
    if (!sliderRef.current) return;
  });

  return (
    <section
      ref={sliderRef}
      className={cn(
        "tw:relative",
        "tw:flex tw:overflow-x-hidden",
        "tw:[&>div]:flex-none tw:[&>div]:size-full",
      )}
    >
      pixi & three.js
    </section>
  );
}
