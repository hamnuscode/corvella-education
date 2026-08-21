"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

/**
 * Start every new page at the top.
 *
 * The router does scroll to the top on navigation, but `scroll-behavior: smooth`
 * on <html> turns that into an animation that runs from wherever the previous
 * page was left, which reads as the new page opening part way down. Here the
 * behaviour is forced to auto for the one frame it takes to jump, then put back
 * so in page anchor links keep their smooth scroll.
 *
 * A hash in the URL is left alone, since that is a deliberate request for a
 * specific section.
 */
export function ScrollReset() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (window.location.hash) return;

    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const frame = requestAnimationFrame(() => {
      html.style.scrollBehavior = previous;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
