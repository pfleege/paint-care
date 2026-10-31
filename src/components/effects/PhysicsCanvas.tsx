// src/components/effects/PhysicsCanvas.tsx

"use client";

import { useEffect, useRef } from "react";

export default function PhysicsCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapEl = wrap.current;
    const canvas = canvasRef.current;
    if (!wrapEl || !canvas) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      // Load matter-js physics library
      const Matter = (await import("matter-js")).default;
      //   Check if user has left the page
      if (disposed) return;
      const { Engine, Bodies, Composite } = Matter;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      //   Width + height definition of elements
      const w = wrapEl.clientWidth;
      const h = wrapEl.clientHeight; // 1/2 -> prevents elongation when 2x canvas height

      //   Width + height of canvas
      canvas.width = w;
      canvas.height = h; // -> canvas 2xh = elements drop 1/2 way down

      //   Create a physics world with gravity
      const engine = Engine.create();
      const T = 200; // wall thickness
      Composite.add(engine.world, [
        Bodies.rectangle(w / 2, h + T / 2, w * 2, T, { isStatic: true }), // Bottom wall
        Bodies.rectangle(-T / 2, h / 2, T, h * 4, { isStatic: true }), // Left wall
        Bodies.rectangle(w + T / 2, h / 2, T, h * 4, { isStatic: true }), // Right wall
        // Bodies.rectangle(w / 2, h + T / 2, w * 2, h, { isStatic: true }), // Adds a platform above the bottom
      ]);

      const timer = window.setInterval(() => {
        const r = 22 + Math.random() * 26;
        Composite.add(
          engine.world,
          Bodies.circle(w * (0.15 + Math.random() * 0.7), -60, r, {
            restitution: 0.65,
          }),
        );
      }, 220); // Adds new circle every 220ms

      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        Engine.update(engine, 1000 / 60); // Update frequency
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(25,215,12,0.8)"; // HEX, rgb or named
        ctx.shadowColor = "gray";
        ctx.shadowOffsetY = 1;
        ctx.shadowOffsetX = 2;
        for (const body of Composite.allBodies(engine.world)) {
          if (body.isStatic) continue;
          ctx.beginPath();
          ctx.arc(
            body.position.x,
            body.position.y,
            body.circleRadius ?? 30,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.clearInterval(timer);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={wrap} className="relative h-104 w-full overflow-hidden bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
