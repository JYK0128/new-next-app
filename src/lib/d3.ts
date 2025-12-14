type Point = [number, number];

export function getBezierCurve(
  w: number,
  h: number,
  amp: number,
  direction: "vertical" | "horizontal" = "horizontal",
  offset: { start: number, end: number } | number = 0,
  skew = 0.5,
) {
  if (typeof offset === "number") {
    offset = { start: offset, end: -offset };
  }

  // Horizontal curve
  if (direction === "horizontal") {
    const P0 = [0, h / 2 + offset.start];
    const P1 = [skew * w, h / 2 - amp];
    const P2 = [(1 - skew) * w, h / 2 + amp];
    const P3 = [w, h / 2 + offset.end];
    return [P0, P1, P2, P3] as Point[];
  }
  // Vertical curve
  else {
    const P0 = [w / 2 + offset.start, 0];
    const P1 = [w / 2 - amp, skew * h];
    const P2 = [w / 2 + amp, (1 - skew) * h];
    const P3 = [w / 2 + offset.end, h];
    return [P0, P1, P2, P3] as Point[];
  }
}

/**
 * scroll Trigger의 시작점과 끝점 찾는 방법
 * - start, end 두지점을 동일값으로 지정하여 양음수 각 1개씩 end 포인트 추출
 * - start값이 변해도 end 값이 변하지 않는 두 지점에서 start 값 찾아 근사값 도출
 *
 * 예시)
 * 1600, 900, 300, "vertical", 700
 *   - start: -1.834 // -0.834 -0.497 // 0.166 1.666 2.666
 *   - end: -1.166 // -0.166 0.834 // 1.333 2.333
 *   -- p1: -0.497, 0.834
 *   -- p2: -1.497, -0.166
 *   -- pn: -2.497, -1.166
 */
export function getBezierPoint(
  [p0, p1, p2, p3]: Point[],
  ...steps: number[]
): Point[] {
  return steps.map((t) => {
    const x
      = Math.pow(1 - t, 3) * p0[0]
        + 3 * Math.pow(1 - t, 2) * t * p1[0]
        + 3 * (1 - t) * Math.pow(t, 2) * p2[0]
        + Math.pow(t, 3) * p3[0];

    const y
      = Math.pow(1 - t, 3) * p0[1]
        + 3 * Math.pow(1 - t, 2) * t * p1[1]
        + 3 * (1 - t) * Math.pow(t, 2) * p2[1]
        + Math.pow(t, 3) * p3[1];

    return [x, y];
  });
}
