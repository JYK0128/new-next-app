import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { random } from "lodash-es";
import { useRef } from "react";

export function ScreenOne() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // canvas
  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // 이미지 로드
    const sunImg = new Image();
    sunImg.src = "sun.svg";

    const cloudImg = new Image();
    cloudImg.src = "cloud.svg";

    const sun = { x: 50, y: 50, w: 100, h: 100, angle: 0 };

    // 구름 여러 개 생성
    const clouds = Array.from({ length: 10 }).map(() => ({
      x: random(100, 1500),
      y: random(100, 800),
      w: 100,
    }));

    // 애니메이션 정의
    gsap.to(sun, {
      angle: 360,
      repeat: -1,
      duration: 2,
      ease: "none",
    });

    clouds.forEach((cloud) => {
      gsap.to(cloud, {
        x: random(0, 1) ? 1600 : -100,
        duration: random(15, 30),
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
        modifiers: {
          x: (x) => {
            const num = parseFloat(x);
            if (num >= 1600) return "-100";  // 오른쪽 끝 -> 왼쪽 시작
            if (num <= -100) return "1600";  // 왼쪽 끝 -> 오른쪽 시작
            return x;
          },
        },
        onRepeat: () => {
          cloud.y = random(100, 800); // 새로운 높이
        },
      });
    });

    // 렌더 루프
    function render() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        // 태양 회전
        if (sunImg.complete) {
          ctx.save();
          ctx.translate(sun.x + sun.w / 2, sun.y + sun.h / 2);
          ctx.rotate((sun.angle * Math.PI) / 180);
          ctx.drawImage(sunImg, -sun.w / 2, -sun.h / 2, sun.w, sun.h);
          ctx.restore();
        }

        // 구름
        if (cloudImg.complete) {
          clouds.forEach((c) => {
            ctx.drawImage(cloudImg, c.x, c.y, c.w, c.w * 0.6);
          });
        }
      }
      requestAnimationFrame(render);
    }

    render();
  });

  return (
    <section className="tw:relative">
      <canvas
        ref={canvasRef}
        width={1600}
        height={900}
        className="tw:size-full tw:absolute"
      />
    </section>
  );
}
