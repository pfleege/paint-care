// src/lib/blob-shape/index.ts
/**
 * Deterministic organic blob generator (same output on server and client,
 * so there are no hydration mismatches). Returns an SVG path in a 0–100 box.
 * The prime number 9973 is used to give a good scatter, while the number
 * 2147483647 is the maximum value for a 32-bit signed binary integer, which
 * thus maximizes the randomization.
 */
function randomNumberGenerator(seed: number) {
  let s = Math.abs(Math.floor(seed * 9973 + 7)) % 2147483647 || 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

// Number of points determines how lumpy the outline will be - lower number = smoother shape
export function blobShape(seed: number, points = 45): string {
  const rand = randomNumberGenerator(seed);

  const pts = Array.from({ length: points }, (_, i) => {
    // Spreading points evenly around the circle -> 8 points = 45 deg (360/8)
    const angle = (i / points) * Math.PI * 2;
    // The point distance from center = gives the wobbliness (31 - 50)
    // Box is 100x100 -> Max rad = 50. Min is 62% of that.
    const radius = 50 * (0.6 + rand() * 0.38);
    // Converting angle/radious to X and Y coordinates
    return [
      50 + Math.cos(angle) * radius,
      50 + Math.sin(angle) * radius,
    ] as const;
  });

  // Turns our points into a smooth curve
  const f = (n: number) => n.toFixed(2); // Rounding to 2 decimals
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`; // M(x,y) = SVG draw starting point

  for (let i = 0; i < points; i++) {
    // The modula makes the last point connect to the first, closing the shape
    const p0 = pts[(i - 1 + points) % points];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % points];
    const p3 = pts[(i + 2) % points];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    // Converts the generated Catmull-Rom curve into Bézier control points
    d += `C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d + "Z";
}
