type Point = [number, number];

export function getBezierCurve(
  w: number,
  h: number,
  amp: number,
  skew = 0.5,
) {
  const P0: Point = [0, h / 2];
  const P1: Point = [skew * w, h / 2 - amp];
  const P2: Point = [(1 - skew) * w, h / 2 + amp];
  const P3: Point = [w, h / 2];

  return [P0, P1, P2, P3];
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
