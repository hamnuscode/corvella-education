"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

/**
 * The doorway, extruded. A stack of arch outlines pushed back along Z inside a
 * perspective container, so you look down the depth of it rather than at a flat
 * shape. It turns slowly on its own and leans a little towards the pointer.
 */
export function ArchDepth({
  layers = 12,
  gap = 13,
  className = "",
  tone = "dark",
}: {
  layers?: number;
  gap?: number;
  className?: string;
  tone?: "dark" | "light";
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--lean-y", `${x * 13}deg`);
        el.style.setProperty("--lean-x", `${-y * 8}deg`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduce]);

  const stroke = tone === "dark" ? "255 255 255" : "16 24 35";

  return (
    <div
      aria-hidden
      className={`pointer-events-none [perspective:1300px] ${className}`}
      style={{ perspectiveOrigin: "50% 42%" }}
    >
      <div
        ref={ref}
        className={`relative h-full w-full [transform-style:preserve-3d] ${
          reduce ? "" : "animate-turn"
        }`}
        style={
          {
            transform: "rotateY(var(--lean-y, 0deg)) rotateX(var(--lean-x, 0deg))",
            transition: "transform 420ms cubic-bezier(0.16,1,0.3,1)",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: layers }).map((_, i) => {
          const t = i / (layers - 1);
          return (
            <div
              key={i}
              className="arch absolute inset-0 border"
              style={{
                transform: `translateZ(${-i * gap}px) scale(${1 - t * 0.075})`,
                borderColor: `rgb(${stroke} / ${(0.3 - t * 0.235).toFixed(3)})`,
                borderWidth: i === 0 ? 1.5 : 1,
              }}
            />
          );
        })}
        {/* The light at the end of it */}
        <div
          className="arch absolute inset-0"
          style={{
            transform: `translateZ(${-layers * gap}px) scale(${1 - 0.075})`,
            background:
              tone === "dark"
                ? "radial-gradient(60% 45% at 50% 72%, rgb(240 169 60 / 0.2), transparent 70%)"
                : "radial-gradient(60% 45% at 50% 72%, rgb(43 95 146 / 0.12), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
