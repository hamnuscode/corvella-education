import * as React from "react";
import { Backdrop } from "@/components/ui/Backdrop";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-7 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "paper",
  backdrop,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "tinted" | "ink" | "none";
  backdrop?: false | { grid?: boolean; orbs?: boolean; arch?: boolean };
}) {
  const tones = {
    paper: "bg-paper",
    tinted: "bg-paper-2",
    ink: "bg-ink text-paper",
    none: "",
  } as const;
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {backdrop ? (
        <Backdrop
          tone={tone === "ink" ? "dark" : "light"}
          grid={backdrop.grid ?? false}
          orbs={backdrop.orbs ?? true}
          arch={backdrop.arch ?? false}
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={`label flex items-center gap-2.5 ${tone === "light" ? "text-paper/55" : "text-quiet"} ${className}`}>
      <span
        aria-hidden
        className={`inline-block h-[7px] w-[7px] rounded-full ${tone === "light" ? "bg-amber" : "bg-brand"}`}
      />
      {children}
    </p>
  );
}

/** The signature doorway frame. Semicircular top, flat base. */
export function Arch({
  children,
  className = "",
  as: Comp = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "figure";
}) {
  return <Comp className={`arch overflow-hidden ${className}`}>{children}</Comp>;
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className={`display-lg mt-4 ${tone === "light" ? "text-paper" : "text-ink"}`}>{title}</h2>
      {lede ? (
        <p className={`lede mt-5 ${tone === "light" ? "text-paper/70" : "text-quiet"}`}>{lede}</p>
      ) : null}
    </div>
  );
}
