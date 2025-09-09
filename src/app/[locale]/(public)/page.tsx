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

    // start, end 두지점을 동일값으로 지정하여 양음수 각 1개씩 end 포인트 추출
    // start값이 변해도 end 값이 변하지 않는 두 지점에서 start 값 찾아 근사값 도출
    /* 패턴
      1600, 900, 300, "vertical", 700
      start: -1.834 // -0.834 -0.497 // 0.166 1.666 2.666
      end: -1.166 // -0.166 0.834 // 1.333 2.333
      p1: -0.497, 0.834
      p2: -1.497, -0.166
      pn: -2.497, -1.166

      1600, 900, 600, "vertical", 700
      start: -2.806 -1.806 // -0.806, 0.194 // 1.696 2.696
      end: -2.194 -1.194 // -0.194, 0.806 // 1.304 2.304
      p1: -0.41, 0.806
      p2: -1.41, -0.194
      pn: -2.41, -1.194

      1600, 900, 1200, "vertical", 700
      start: -0.778 -1.778 // -0.778 0.222 // 1.729 2.729
      end: -2.222 -1.222 // -0.222 0.778 // 1.271 2.271
      p1: -0.329, 0.778
      p2: -1.329, -0.222
      pn: -2.329, -1.222
    */

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
          start: -1.329,
          end: -0.222,
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

        contents.forEach((content, index) => {
          ScrollTrigger.create({
            trigger: content,
            start: "left center",
            scrub: 1,
            animation: gsap.fromTo(content,
              { opacity: 0 },
              { opacity: 2 },
            ),
            containerAnimation: scrollTween,
            markers: true,
          });
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
