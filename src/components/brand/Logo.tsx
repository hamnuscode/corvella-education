import * as React from "react";

/**
 * Corvella mark: an open doorway (the arch that runs through the whole site)
 * with a raven's head cut out of it. The beacon eye is the only spot colour.
 */
export const ARCH_PATH =
  "M3 29 V16 C3 8.82 8.82 3 16 3 C23.18 3 29 8.82 29 16 V29 Z";
export const RAVEN_PATH =
  "M26.9 15.4 C21.8 12.5 17.0 10.3 13.4 9.5 C9.8 8.7 7.2 11.0 7.2 14.6 C7.2 18.4 9.6 21.9 13.6 21.7 C16.2 21.6 18.1 20.4 18.7 18.8 C21.2 17.9 24.3 16.6 26.9 15.4 Z";
export const RAVEN_TRANSFORM = "translate(-1.0 1.2)";

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
  const archFill =
    variant === "reversed" ? "#f7f6fb" : variant === "mono" ? "currentColor" : "#3d2fbf";
  const eye = variant === "colour" ? "#ffc24b" : null;

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
        <rect width="32" height="32" fill="#000" />
        <path d={ARCH_PATH} fill="#fff" />
        <path d={RAVEN_PATH} transform={RAVEN_TRANSFORM} fill="#000" />
      </mask>
      <rect width="32" height="32" fill={archFill} mask={`url(#${maskId})`} />
      {eye ? <circle cx="11.9" cy="14.8" r="1.25" fill={eye} /> : null}
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
          className={`font-display text-[1.32rem] font-extrabold tracking-[-0.035em] ${
            reversed ? "text-paper" : "text-ink"
          }`}
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          Corvella
        </span>
        {showEdu ? (
          <span
            className={`label mt-1 text-[0.58rem] tracking-[0.28em] ${
              reversed ? "text-paper/60" : "text-quiet"
            }`}
          >
            Education
          </span>
        ) : null}
      </span>
    </span>
  );
}
