import * as React from "react";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Backdrop } from "@/components/ui/Backdrop";
import { Reveal } from "@/components/ui/Reveal";

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
      <Backdrop orbs arch grid={false} />
      {/* A doorway standing behind the title. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[38rem] -translate-x-1/2 arch border border-mist/80 bg-gradient-to-b from-white/60 to-transparent sm:w-[46rem]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Reveal y={10}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal y={16} delay={0.06}>
            <h1 className="display-xl mt-5 text-ink">{title}</h1>
          </Reveal>
          {lede ? (
            <Reveal y={16} delay={0.13}>
              <p className="lede mt-7 max-w-2xl text-quiet">{lede}</p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal y={16} delay={0.2}>
              <div className="mt-9">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
