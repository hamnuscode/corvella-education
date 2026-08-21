import * as React from "react";

/**
 * Corvella mark: a C that is also a raven's head in profile.
 *
 * A thick ring, opened on the right. The counter is pushed down and left so the
 * stroke thickens across the crown, and the upper terminal is cut on a line
 * tangent to the counter, which turns it into a beak that flows out of the head
 * rather than being stuck on. The amber dot is the eye and the only spot colour.
 */
const RING_OUTER = { cx: 16, cy: 16, r: 13.2 };
const COUNTER = { cx: 15, cy: 17.2, r: 6.9 };
const OPENING = "M16.62 10.49 L28.96 13.48 L40 -6 L40 42 L37.55 30.54 L16 16 Z";
const EYE = { cx: 16.65, cy: 6.64, r: 1.45 };

type MarkVariant = "colour" | "mono" | "reversed";

export function CorvellaMark({
  variant = "colour",
  className,
  title,
  idPrefix = "cv",
  style,
}: {
  variant?: MarkVariant;
  className?: string;
  title?: string;
  idPrefix?: string;
  style?: React.CSSProperties;
}) {
  const maskId = `${idPrefix}-mark-mask`;
  const fill =
    variant === "reversed" ? "#f5f7fa" : variant === "mono" ? "currentColor" : "#2b5f92";
  const knockOutEye = variant !== "colour";

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <circle {...RING_OUTER} fill="#fff" />
        <circle {...COUNTER} fill="#000" />
        <path d={OPENING} fill="#000" />
        {knockOutEye ? <circle {...EYE} fill="#000" /> : null}
      </mask>
      <rect width="32" height="32" fill={fill} mask={`url(#${maskId})`} />
      {variant === "colour" ? <circle {...EYE} fill="#f0a93c" /> : null}
    </svg>
  );
}

export function CorvellaLogo({
  variant = "colour",
  className,
  markClassName = "h-9 w-9",
  showEdu = true,
  idPrefix = "cv",
}: {
  variant?: MarkVariant;
  className?: string;
  markClassName?: string;
  showEdu?: boolean;
  idPrefix?: string;
}) {
  const reversed = variant === "reversed";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <CorvellaMark variant={variant} className={markClassName} idPrefix={idPrefix} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.3rem] font-extrabold tracking-[-0.04em] ${
            reversed ? "text-paper" : "text-ink"
          }`}
        >
          Corvella
        </span>
        {showEdu ? (
          <span
            className={`label mt-[0.3rem] text-[0.56rem] tracking-[0.24em] ${
              reversed ? "text-paper/55" : "text-quiet"
            }`}
          >
            Education
          </span>
        ) : null}
      </span>
    </span>
  );
}
