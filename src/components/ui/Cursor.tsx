"use client";

import * as React from "react";

/**
 * A small faded amber circle that follows the pointer. The native cursor is
 * left alone, so nothing about clicking or text selection changes; this only
 * adds a little light.
 *
 * Smoothness comes from a single rAF loop lerping towards the last known
 * pointer position, rather than writing a transform on every pointermove
 * event. It never mounts for coarse pointers or when reduced motion is asked
 * for.
 */
const QUERIES = ["(pointer: fine)", "(prefers-reduced-motion: reduce)"] as const;

function subscribe(onChange: () => void) {
  const lists = QUERIES.map((q) => window.matchMedia(q));
  lists.forEach((l) => l.addEventListener("change", onChange));
  return () => lists.forEach((l) => l.removeEventListener("change", onChange));
}

/** False during SSR, so the circle only ever appears after hydration. */
function useCursorWanted() {
  return React.useSyncExternalStore(
    subscribe,
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function Cursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const enabled = useCursorWanted();

  React.useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    if (!dot) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const at = { ...target };
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
    };

    const tick = () => {
      at.x += (target.x - at.x) * 0.16;
      at.y += (target.y - at.y) * 0.16;
      dot.style.transform = `translate3d(${at.x}px, ${at.y}px, 0) translate(-50%, -50%)`;
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
        ref={dotRef}
        className="absolute left-0 top-0 h-[5.5rem] w-[5.5rem] rounded-full opacity-0 transition-opacity duration-400 will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgb(240 169 60 / 0.26), rgb(240 169 60 / 0.10) 48%, transparent 74%)",
        }}
      />
    </div>
  );
}
