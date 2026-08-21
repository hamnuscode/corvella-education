"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Pointer tracked tilt with a glare that follows the cursor. Kept shallow on
 * purpose: enough to feel like an object, not enough to be a toy. Under
 * prefers-reduced-motion it renders as a plain wrapper.
 */
export function Tilt3D({
  children,
  className = "",
  max = 7,
  glare = true,
  radiusClass = "rounded-2xl",
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  /** Must match the child's corner radius, or the glare shows square corners. */
  radiusClass?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
    el.style.setProperty("--glare", "1");
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--glare", "0");
  };

  return (
    <div className={`[perspective:900px] ${className}`}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="relative h-full [transform-style:preserve-3d]"
        style={
          {
            transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
            transition: "transform 380ms cubic-bezier(0.16,1,0.3,1)",
          } as React.CSSProperties
        }
      >
        {children}
        {glare ? (
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 overflow-hidden opacity-[var(--glare,0)] transition-opacity duration-300 ${radiusClass}`}
            style={{
              background:
                "radial-gradient(22rem 22rem at var(--gx,50%) var(--gy,50%), rgb(255 255 255 / 0.5), transparent 60%)",
              mixBlendMode: "soft-light",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
