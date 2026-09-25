import * as React from "react";
import { CorvellaMark } from "@/components/brand/Logo";

/**
 * The doorway panel.
 *
 * Built like an actual door rather than a dome on a box: two outline rings
 * standing behind it read as an architrave, the panel carries a keystone at the
 * apex, and light spills down from the top of the arch. The shape is elliptical
 * so the crown stays shallow, which leaves room for the label without wasting
 * half the panel on empty curve.
 */
export function ArchPanel({
  label,
  children,
  frame = true,
  tone = "light",
  className = "",
  idPrefix = "arch",
}: {
  label: string;
  children: React.ReactNode;
  /** Outline rings behind the panel. Turn off where something else frames it. */
  frame?: boolean;
  tone?: "light" | "dark";
  className?: string;
  idPrefix?: string;
}) {
  const dark = tone === "dark";
  const ring = dark ? "border-paper/15" : "border-mist";
  const ringFaint = dark ? "border-paper/[0.08]" : "border-mist/60";

  return (
    <div className={`relative ${className}`}>
      {frame ? (
        <>
          <div
            aria-hidden
            className={`arch-door pointer-events-none absolute -left-7 -right-7 -top-8 bottom-0 border ${ringFaint}`}
          />
          <div
            aria-hidden
            className={`arch-door pointer-events-none absolute -left-3.5 -right-3.5 -top-4 bottom-0 border ${ring}`}
          />
        </>
      ) : null}

      <div
        className={`arch-door relative overflow-hidden border text-ink shadow-[0_30px_80px_-34px_rgb(16_24_35/0.45)] ${
          dark ? "border-paper/20 bg-paper" : "border-mist bg-paper"
        }`}
      >
        {/* light coming through the top of the doorway */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-56"
          style={{
            background:
              "radial-gradient(68% 100% at 50% 0%, rgb(240 169 60 / 0.2), rgb(94 155 214 / 0.1) 45%, transparent 72%)",
          }}
        />

        <div className="relative px-6 pb-7 pt-7 sm:px-8 sm:pt-8">
          <div className="flex flex-col items-center gap-3 pb-7">
            {/* keystone */}
            <span aria-hidden className="h-5 w-[3px] rounded-full bg-amber/70" />
            <span className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-paper shadow-[0_2px_10px_-4px_rgb(16_24_35/0.35)]">
              <CorvellaMark variant="colour" className="h-6 w-6" idPrefix={idPrefix} />
            </span>
            <p className="label text-center text-quiet">{label}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
