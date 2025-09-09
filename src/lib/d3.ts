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
