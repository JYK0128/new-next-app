"use client";
import { useGSAP } from "@gsap/react";
import * as d3 from "d3";
import gsap, { MotionPathPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

import { getBezierCurve, getBezierPoint } from "@/lib/d3";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, MotionPathPlugin);

export default function Page() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // SVG 처리
  useGSAP(() => {
    if (!svgRef.current) return;
    if (!screenRef.current) return;
    const scroller = screenRef.current;
    const slider = svgRef.current.parentElement;
    const svg = d3.select(svgRef.current);
    const pathData = d3.path();

    const [p0, p1, p2, p3] = getBezierCurve(1600, 900, 1400);
    pathData.moveTo(...p0);
    pathData.bezierCurveTo(...p1, ...p2, ...p3);

    // 경로
    const path = svg
      .append("path")
      .attr("d", pathData.toString())
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "12,8");

    gsap.to(path.node(), {
      strokeDashoffset: -20,
      repeat: -1,
      ease: "none",
      duration: 1,
    });

    // 정지 포인트
    const points = getBezierPoint(
      [p0, p1, p2, p3],
      ...[0.1, 0.5, 0.9],
    );

    points.forEach(([x, y]) => {
      svg
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 10)
        .attr("fill", "red");
    });

    // 움직이는 요소
    const mover = svg
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "blue");

    const pathNode = path.node();
    if (!pathNode) return;

    ScrollTrigger.create({
      trigger: slider,
      scroller: scroller,
      scrub: 1,
      animation: gsap.to(mover.node(), {
        ease: "none",
        motionPath: {
          path: pathNode,
          align: pathNode,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: -0.527,
          end: 0.845,
        },
      }),
    });

    return () => {
      svg.selectAll("*").remove();
    };
  }, []);

  // 애니메이션 처리
  useGSAP(() => {
    if (!screenRef.current) return;
    const scroller = screenRef.current;
    const sections = scroller.querySelectorAll(":scope>section");

    sections.forEach((section) => {
      if (section.id === "slider") {
        const slider = section;
        const contents = slider.querySelectorAll("div");

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
          onToggle: ({ isActive }) => {
            gsap.to(slider, { opacity: +isActive, ease: "none" });
          },
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
        style={{ opacity: 0 }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 1600 900"
          className="tw:size-full tw:absolute"
          preserveAspectRatio="none"
        />
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </section>
      <section id="dummy" />

      <section>Footer</section>
    </div>
  );
}
