import * as React from "react";
import { Container, Eyebrow } from "@/components/ui/Section";

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-mist bg-paper-2">
      <div aria-hidden className="absolute inset-0 hairline-grid-light" />
      {/* A doorway standing behind the title. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[38rem] -translate-x-1/2 arch border border-mist/90 bg-gradient-to-b from-white/70 to-transparent opacity-80 sm:w-[46rem]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-5 text-ink">{title}</h1>
          {lede ? <p className="lede mt-7 max-w-2xl text-quiet">{lede}</p> : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
