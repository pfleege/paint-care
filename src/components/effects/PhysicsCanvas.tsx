// src/components/effects/PhysicsCanvas.tsx

"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cnj } from "@/utils/class-name-joiner";

type Meta = { color: string; label?: string; shape: "circle" | "block" };

const PALETTE = [
  "#FF6B57",
  "#FFC93C",
  "#35C79A",
  "#4BA3FF",
  "#9A6BFF",
  "#FF8DBA",
];

type Props = {
  letters?: string[];
  className?: string;
  ariaLabel?: string;
};

/*
 * Matter.js physics canvas:
 * Coloured letter blocks and balls tumble into a rounded
 * "box" and can be grabbed with a mouse. The physics library is only loaded
 * once the box scrolls into view, and the simulation pauses when it leaves.
 */

export default function PhysicsCanvas({
  letters = ["P", "L", "A", "Y"],
  className,
  ariaLabel = "Coloured letters and balls tumbling around. On a computer you can grab and throw them.",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const started = useInView(wrap, { once: true, margin: "200px" }); // Activate once in viewport
  const reduce = useReducedMotion(); // Control animation (stop) for OS users with reduced motion activated

  useEffect(() => {
    if (!started || reduce) return;
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
      const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint } =
        Matter;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let w = wrapEl.clientWidth;
      let h = wrapEl.clientHeight;
      const sizeCanvas = () => {
        w = wrapEl.clientWidth;
        h = wrapEl.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      };
      sizeCanvas();

      //   Create a physics world with gravity
      const engine = Engine.create();
      const meta = new Map<number, Meta>();
      const T = 200; // wall thickness
      const walls = {
        floor: Bodies.rectangle(w / 2, h + T / 2, w * 2, T, { isStatic: true }),
        left: Bodies.rectangle(-T / 2, h / 2, T, h * 4, { isStatic: true }),
        right: Bodies.rectangle(w + T / 2, h / 2, T, h * 4, { isStatic: true }),
      };
      Composite.add(engine.world, Object.values(walls));

      const size = w < 520 ? 0.75 : 1; // Scale to 75% on small screens
      let spawned = 0;
      const total = w < 520 ? 14 : 20; // Set number of items based on canvas size
      const spawn = () => {
        const i = spawned++;
        const x = w * (0.15 + Math.random() * 0.7);
        const color = PALETTE[i % PALETTE.length];
        let body: Matter.Body;
        if (i < letters.length) {
          const s = 78 * size;
          body = Bodies.rectangle(x, -60, s, s, {
            chamfer: { radius: 18 * size },
            restitution: 0.5,
            friction: 0.3,
          });
          meta.set(body.id, { color, label: letters[i], shape: "block" });
        } else {
          const r = (22 + Math.random() * 26) * size;
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

      // Mouse dragging (desktop). Touch/wheel listeners are removed so the
      // page can still scroll on phones and trackpads.
      const mouse = Mouse.create(canvas);
      mouse.pixelRatio = dpr;
      const m = mouse as unknown as Record<string, EventListener>;
      const el = mouse.element;
      el.removeEventListener("wheel", m.mousewheel);
      el.removeEventListener("mousewheel", m.mousewheel);
      el.removeEventListener("DOMMouseScroll", m.mousewheel);
      el.removeEventListener("touchstart", m.mousedown);
      el.removeEventListener("touchmove", m.mousemove);
      el.removeEventListener("touchend", m.mouseup);
      const drag = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      Composite.add(engine.world, drag);

      // Pause simulation when not in view -> switch visible variable value
      let visible = true;
      const io = new IntersectionObserver(
        ([entry]) => (visible = entry.isIntersecting),
      );
      io.observe(wrapEl);

      // Re-measuring and re-sizing the canvas
      const ro = new ResizeObserver(() => {
        sizeCanvas();
        Body.setPosition(walls.floor, { x: w / 2, y: h + T / 2 });
        Body.setPosition(walls.right, { x: w + T / 2, y: h / 2 });
      });
      ro.observe(wrapEl);

      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        Engine.update(engine, 1000 / 60); // Update frequency

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.clearInterval(spawnTimer);
        io.disconnect(); // IntersectionObserver
        ro.disconnect(); // ResizeObserver
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [started, reduce, letters]);

  return (
    <div
      ref={wrap}
      className={cnj("relative h-104 w-full overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={ariaLabel}
        className="absolute inset-0 h-full w-full touch-pan-y"
      />
    </div>
  );
}
