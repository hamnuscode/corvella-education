"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Slow furniture drifting behind the content: arches, rings and a couple of
 * soft discs. Positions and timings are a fixed list rather than random, so
 * the server and the client render the same thing.
 *
 * Everything here is outline or very low alpha. If you can read it as a shape
 * without looking for it, it is too strong.
 */
const SHAPES = [
  { kind: "arch", left: "6%", top: "12%", w: 132, h: 168, anim: "animate-float-a", delay: "0s" },
  { kind: "ring", left: "84%", top: "18%", w: 92, h: 92, anim: "animate-float-b", delay: "3s" },
  { kind: "arch", left: "72%", top: "62%", w: 96, h: 122, anim: "animate-float-c", delay: "7s" },
  { kind: "disc", left: "18%", top: "72%", w: 116, h: 116, anim: "animate-float-b", delay: "11s" },
  { kind: "ring", left: "44%", top: "8%", w: 58, h: 58, anim: "animate-float-c", delay: "5s" },
  { kind: "arch", left: "32%", top: "48%", w: 66, h: 84, anim: "animate-float-a", delay: "15s" },
] as const;

export function FloatingShapes({ tone = "light" }: { tone?: "light" | "dark" }) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const line = dark ? "rgb(255 255 255 / 0.09)" : "rgb(16 24 35 / 0.06)";
  const fill = dark ? "rgb(94 155 214 / 0.07)" : "rgb(43 95 146 / 0.045)";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {SHAPES.map((s, i) => (
        <span
          key={i}
          className={`absolute block ${reduce ? "" : s.anim} ${
            s.kind === "arch" ? "arch" : "rounded-full"
          }`}
          style={{
            left: s.left,
            top: s.top,
            width: s.w,
            height: s.h,
            animationDelay: s.delay,
            border: s.kind === "disc" ? undefined : `1px solid ${line}`,
            background: s.kind === "disc" ? fill : undefined,
            filter: s.kind === "disc" ? "blur(1px)" : undefined,
          }}
        />
      ))}
    </div>
  );
}
