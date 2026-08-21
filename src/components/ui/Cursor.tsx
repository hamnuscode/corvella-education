"use client";

import * as React from "react";

/**
 * A soft shaded halo that trails the pointer. The native cursor is left alone,
 * so nothing about clicking or text selection changes; this only adds light.
 *
 * Smoothness comes from a single rAF loop lerping towards the last known
 * pointer position, rather than writing transforms on every pointermove event.
 * It never mounts for coarse pointers or when reduced motion is requested.
 */
const QUERIES = ["(pointer: fine)", "(prefers-reduced-motion: reduce)"] as const;

function subscribe(onChange: () => void) {
  const lists = QUERIES.map((q) => window.matchMedia(q));
  lists.forEach((l) => l.addEventListener("change", onChange));
  return () => lists.forEach((l) => l.removeEventListener("change", onChange));
}

/** False during SSR, so the halo only ever appears after hydration. */
function useHaloWanted() {
  return React.useSyncExternalStore(
    subscribe,
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function Cursor() {
  const haloRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);
  const enabled = useHaloWanted();

  React.useEffect(() => {
    if (!enabled) return;
    const halo = haloRef.current;
    const dot = dotRef.current;
    if (!halo || !dot) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const slow = { ...target };
    const fast = { ...target };
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        halo.style.opacity = "1";
        dot.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      halo.style.opacity = "0";
      dot.style.opacity = "0";
    };

    // Two trailing speeds read as depth: a tight dot and a lazy halo behind it.
    const tick = () => {
      slow.x += (target.x - slow.x) * 0.085;
      slow.y += (target.y - slow.y) * 0.085;
      fast.x += (target.x - fast.x) * 0.28;
      fast.y += (target.y - fast.y) * 0.28;
      halo.style.transform = `translate3d(${slow.x}px, ${slow.y}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${fast.x}px, ${fast.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div
        ref={haloRef}
        className="absolute left-0 top-0 h-[11rem] w-[11rem] rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgb(43 95 146 / 0.16), rgb(15 116 144 / 0.08) 45%, transparent 72%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-6 w-6 rounded-full opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgb(240 169 60 / 0.28), rgb(240 169 60 / 0.08) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}
