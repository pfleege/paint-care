// src/components/effects/PhysicsCanvas.tsx

"use client";

import { useEffect, useRef } from "react";

type Meta = { color: string; label?: string; shape: "circle" | "block" };

const PALETTE = [
  "#FF6B57",
  "#FFC93C",
  "#35C79A",
  "#4BA3FF",
  "#9A6BFF",
  "#FF8DBA",
];

type Props = { letters?: string[] };

export default function PhysicsCanvas({
  letters = ["P", "L", "A", "Y"],
}: Props) {
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
      const { Engine, Bodies, Body, Composite } = Matter;

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

      const meta = new Map<number, Meta>();
      let spawned = 0;
      const total = 20; // Total number of elements being dropped
      const spawn = () => {
        const i = spawned++;
        const x = w * (0.15 + Math.random() * 0.7);
        const color = PALETTE[i % PALETTE.length];
        let body: Matter.Body;
        if (i < letters.length) {
          const s = 78;
          body = Bodies.rectangle(x, -60, s, s, {
            chamfer: { radius: 18 },
            restitution: 0.5,
            friction: 0.3,
          });
          meta.set(body.id, { color, label: letters[i], shape: "block" });
        } else {
          const r = 22 + Math.random() * 26;
          body = Bodies.circle(x, -60, r, { restitution: 0.65, friction: 0.1 });
          meta.set(body.id, { color, shape: "circle" });
        }
        Body.setAngle(body, Math.random() * Math.PI);
        Composite.add(engine.world, body);
      };
      const spawnTimer = window.setInterval(() => {
        spawn();
        if (spawned >= total) window.clearInterval(spawnTimer);
      }, 220);

      //   const timer = window.setInterval(() => {
      //     const r = 22 + Math.random() * 26;
      //     Composite.add(
      //       engine.world,
      //       Bodies.circle(w * (0.15 + Math.random() * 0.7), -60, r, {
      //         restitution: 0.65,
      //       }),
      //     );
      //   }, 220); // Adds new circle every 220ms

      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        Engine.update(engine, 1000 / 60); // Update frequency
        ctx.clearRect(0, 0, w, h);
        for (const body of Composite.allBodies(engine.world)) {
          const info = meta.get(body.id);
          if (!info) continue;
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.fillStyle = info.color;
          ctx.beginPath();
          if (info.shape === "circle") {
            ctx.arc(0, 0, body.circleRadius ?? 30, 0, Math.PI * 2);
          } else {
            const s = (body.bounds.max.x - body.bounds.min.x) / 1.2;
            ctx.roundRect(-s / 2, -s / 2, s, s, s * 0.28);
          }
          ctx.fill();
          if (info.label) {
            ctx.fillStyle = "#2A2150";
            ctx.font = '600 44px "Fredoka Variable", ui-rounded, sans-serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(info.label, 0, 3);
          }
          ctx.restore();
        }
      };
      tick();
      //   const tick = () => {
      //     raf = requestAnimationFrame(tick);
      //     Engine.update(engine, 1000 / 60); // Update frequency
      //     ctx.clearRect(0, 0, w, h);
      //     ctx.fillStyle = "rgba(25,215,12,0.8)"; // HEX, rgb or named
      //     ctx.shadowColor = "gray";
      //     ctx.shadowOffsetY = 1;
      //     ctx.shadowOffsetX = 2;
      //     for (const body of Composite.allBodies(engine.world)) {
      //       if (body.isStatic) continue;
      //       ctx.beginPath();
      //       ctx.arc(
      //         body.position.x,
      //         body.position.y,
      //         body.circleRadius ?? 30,
      //         0,
      //         Math.PI * 2,
      //       );
      //       ctx.fill();
      //     }
      //   };
      //   tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.clearInterval(spawnTimer);
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
