import * as React from "react";
import { accentHex, type Accent } from "@/lib/site";

/**
 * Monogram portrait. Deliberately not a photograph: putting a stock headshot
 * next to a named student implies that person gave their picture, which is a
 * claim the site cannot make. Initials on the student's accent colour read as
 * a finished portrait without pretending to be one.
 */
export function Avatar({
  name,
  accent = "brand",
  size = 56,
  className = "",
}: {
  name: string;
  accent?: Accent;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const hex = accentHex[accent];

  return (
    <span
      aria-hidden
      className={`relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg, color-mix(in srgb, ${hex} 22%, white), color-mix(in srgb, ${hex} 6%, white))`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${hex} 26%, transparent)`,
      }}
    >
      <span
        className="absolute inset-0"
        style={{
          background: `radial-gradient(75% 65% at 30% 18%, color-mix(in srgb, white 70%, transparent), transparent 70%)`,
        }}
      />
      <span
        className="relative font-display font-extrabold leading-none"
        style={{ color: hex, fontSize: size * 0.36, letterSpacing: "-0.02em" }}
      >
        {initials}
      </span>
    </span>
  );
}
