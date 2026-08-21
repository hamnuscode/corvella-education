"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Ambient background furniture. Deliberately faint: it should register as
 * texture, not as a graphic. Drift is CSS driven so it costs nothing on the
 * main thread and is switched off under prefers-reduced-motion.
 */
export function Backdrop({
  tone = "light",
  grid = true,
  orbs = true,
  arch = false,
  className = "",
}: {
  tone?: "light" | "dark";
  grid?: boolean;
  orbs?: boolean;
  arch?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {grid ? (
        <div className={`absolute inset-0 ${dark ? "hairline-grid opacity-70" : "hairline-grid-light"}`} />
      ) : null}

      {orbs ? (
        <>
          <div
            className={`absolute -left-[12%] top-[-18%] h-[26rem] w-[26rem] rounded-full blur-[110px] ${
              dark ? "bg-jade/25" : "bg-brand/[0.07]"
            } ${reduce ? "" : "animate-drift"}`}
          />
          <div
            className={`absolute -right-[14%] bottom-[-22%] h-[24rem] w-[24rem] rounded-full blur-[110px] ${
              dark ? "bg-brand/40" : "bg-amber/[0.09]"
            } ${reduce ? "" : "animate-drift-slow"}`}
          />
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
