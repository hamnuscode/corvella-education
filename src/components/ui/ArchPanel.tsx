import * as React from "react";
import { CorvellaMark } from "@/components/brand/Logo";

/**
 * A panel shaped like the site's doorway. The top is a true semicircle, so the
 * usable content box does not start until roughly half the panel width down.
 * The crown fills that space deliberately rather than letting content spill
 * outside the curve.
 */
export function ArchPanel({
  label,
  children,
  halo = true,
  className = "",
  idPrefix = "arch",
}: {
  label: string;
  children: React.ReactNode;
  halo?: boolean;
  className?: string;
  idPrefix?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {halo ? <div aria-hidden className="arch absolute -inset-4 bg-paper/[0.07] sm:-inset-5" /> : null}
      <div className="arch relative border border-mist bg-paper px-6 pb-7 pt-9 text-ink shadow-[0_30px_80px_-34px_rgba(23,19,52,0.55)] sm:px-8 sm:pt-14">
        <div className="flex flex-col items-center gap-3 pb-6 sm:pb-9">
          <CorvellaMark variant="colour" className="h-8 w-8" idPrefix={idPrefix} />
          <p className="label text-center text-quiet">{label}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
