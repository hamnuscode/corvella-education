"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import * as React from "react";

/** Adapted from the React Bits "CountUp" component. */
export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce || !inView) {
      if (reduce) node.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
