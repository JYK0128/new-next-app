import { useGSAP } from "@gsap/react";
import * as d3 from "d3";
import gsap, { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { getBezierCurve, getBezierPoint } from "@/lib/d3";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export function ScreenTwo() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  // SVG 처리
  useGSAP(() => {
    if (!pathRef.current) return;
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scroller = slider.parentElement;

    const svg = d3.select(pathRef.current);
    const pathData = d3.path();

    const [p0, p1, p2, p3] = getBezierCurve(1600, 900, 1200, "vertical", 700);
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

    // 정박지
    const points = getBezierPoint(
      [p0, p1, p2, p3],
      ...[0.1, 0.5, 0.9],
    );

    points.forEach(([x, y]) => {
      svg
        .append("image")
        .attr("href", "island.svg")
        .attr("x", x - 50)
        .attr("y", y - 50)
        .attr("width", 100);
    });

    // 선박
    const mover = svg
      .append("image")
      .attr("href", "ship.svg")
      .attr("width", 100);

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
          alignOrigin: [1.5, 1],
          start: -0.329,
          end: 0.778,
        },
      }),
    });

    return () => {
      svg.selectAll("*").remove();
    };
  });

  // 슬라이더 처리
  useGSAP(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const scroller = slider.parentElement;
    const contents = slider.querySelectorAll(":scope>div");

    const scrollTween = gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        scroller: scroller,
        pin: true,
        scrub: 1,
        snap: 1 / (contents.length - 1),
        // markers: true,
      },
    });

    // bug: 현재화면의 투명도가 0.5
    contents.forEach((content) => {
      ScrollTrigger.create({
        trigger: content,
        start: "left center",
        scrub: 1,
        animation: gsap.fromTo(content,
          { opacity: 0 },
          { opacity: 2 },
        ),
        containerAnimation: scrollTween,
      });
    });
  });

  return (
    <>
      <section
        ref={sliderRef}
        className={cn(
          "slider",
          "tw:relative",
          "tw:flex tw:overflow-x-hidden",
          "tw:[&>div]:flex-none tw:[&>div]:size-full",
        )}
      >
        <svg
          ref={pathRef}
          viewBox="0 0 1600 900"
          className="tw:size-full tw:absolute"
          preserveAspectRatio="none"
        />
        <div className="tw:grid tw:grid-rows-3 tw:grid-cols-2">
          <div className="tw:[grid-area:1/1]">Content 1</div>
          <div className="tw:[grid-area:1/2]" />
        </div>
        <div className="tw:grid tw:grid-rows-3 tw:grid-cols-3">
          <div className="tw:[grid-area:2/1]">Content 2-1</div>
          <div className="tw:[grid-area:2/3]">Content 2-2</div>
        </div>
        <div className="tw:grid tw:grid-rows-3 tw:grid-cols-3">
          <div className="tw:[grid-area:3/1]">Content 3-1</div>
          <div className="tw:[grid-area:3/3]">Content 3-2</div>
        </div>
      </section>
      <section role="dummy" />
    </>
  );
}
