import { useGSAP } from "@gsap/react";
import * as d3 from "d3";
import gsap from "gsap/all";
import { random } from "lodash-es";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);


export function ScreenOne() {
  const aniRef = useRef<SVGSVGElement | null>(null);

  // Scene 애니메이션 처리
  useGSAP(() => {
    if (!aniRef.current) return;

    const svg = d3.select(aniRef.current);

    const sun = svg.append("image")
      .attr("href", "sun.svg")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 100);

    gsap.to(sun.node(), {
      rotate: 360,
      repeat: -1,
      ease: "none",
      duration: 2,
      transformOrigin: "50% 50%",
    });

    const clouds = Array.from({ length: 10 }, (_, i) => {
      return svg.append("image")
        .attr("href", "cloud.svg")
        .attr("x", random(100, 1500))
        .attr("y", random(100, 800))
        .attr("width", 100);
    });

    clouds.forEach((cloud) => {
      gsap.to(cloud.node(), {
        duration: random(15, 30),
        ease: "none",
        repeat: -1,
        attr: { x: 1600 },       // 'attr' 옵션 사용!
        repeatRefresh: true,
        modifiers: {
          // x 값이 끝에 도달하면 순간 이동하도록 조정
          x: (x) => {
            if (parseFloat(x) >= 1600) return "-100"; // 화면 왼쪽으로 순간 이동
            return x;
          },
        },
      });
    });
  });

  return (
    <section className="tw:relative">
      <svg
        ref={aniRef}
        viewBox="0 0 1600 900"
        className="tw:size-full tw:absolute"
        preserveAspectRatio="none"
      />
    </section>
  );
}
