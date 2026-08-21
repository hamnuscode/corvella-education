"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Ambient background furniture. Deliberately faint: it should register as
 * texture, not as a graphic. Drift is CSS driven so it costs nothing on the
 * main thread and is switched off under prefers-reduced-motion.
 */
/* Fixed so the layout is identical on server and client. */
const MOTES = [
  { left: "12%", top: "24%", size: 4, delay: "0s", duration: "13s" },
  { left: "27%", top: "68%", size: 3, delay: "2.4s", duration: "17s" },
  { left: "48%", top: "16%", size: 3, delay: "5.1s", duration: "15s" },
  { left: "66%", top: "74%", size: 5, delay: "1.2s", duration: "19s" },
  { left: "81%", top: "34%", size: 3, delay: "3.6s", duration: "14s" },
  { left: "92%", top: "62%", size: 4, delay: "6.3s", duration: "16s" },
] as const;

export function Backdrop({
  tone = "light",
  grid = true,
  orbs = true,
  arch = false,
  motes = true,
  className = "",
}: {
  tone?: "light" | "dark";
  grid?: boolean;
  orbs?: boolean;
  arch?: boolean;
  motes?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {grid ? (
        <div
          className={`absolute inset-0 ${dark ? "hairline-grid opacity-70" : "hairline-grid-light"} ${
            reduce ? "" : "pan-grid"
          }`}
        />
      ) : null}

      {orbs ? (
        <>
          <div
            className={`absolute -left-[12%] top-[-18%] h-[26rem] w-[26rem] rounded-full blur-[110px] ${
              dark ? "bg-steel/25" : "bg-brand/[0.07]"
            } ${reduce ? "" : "animate-drift"}`}
          />
          <div
            className={`absolute -right-[14%] bottom-[-22%] h-[24rem] w-[24rem] rounded-full blur-[110px] ${
              dark ? "bg-brand/40" : "bg-amber/[0.09]"
            } ${reduce ? "" : "animate-drift-slow"}`}
          />
        </>
      ) : null}

      {motes && !reduce ? (
        <>
          {MOTES.map((m, i) => (
            <span
              key={i}
              className={`animate-mote absolute rounded-full ${
                dark ? "bg-steel/50" : "bg-brand/25"
              }`}
              style={{
                left: m.left,
                top: m.top,
                width: m.size,
                height: m.size,
                animationDelay: m.delay,
                animationDuration: m.duration,
              }}
            />
          ))}
        </>
      ) : null}

      {arch ? (
        <div
          className={`arch absolute left-1/2 top-[8%] h-[78%] w-[34rem] -translate-x-1/2 border sm:w-[44rem] ${
            dark ? "border-paper/[0.07]" : "border-ink/[0.05]"
          }`}
        />
      ) : null}
    </div>
  );
}
