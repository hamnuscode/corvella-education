"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Avatar } from "@/components/ui/Avatar";
import { accentHex, testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(((next % count) + count) % count);
  };

  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 7500);
    return () => clearInterval(t);
  }, [count, reduce]);

  const active = testimonials[index];
  const hex = accentHex[active.accent];

  return (
    <Section tone="tinted" backdrop={{ orbs: true }}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>In their words</Eyebrow>
            <h2 className="display-lg mt-4 max-w-lg text-ink">
              What students say about working with us
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous quote"
              className="card-lift grid h-11 w-11 place-items-center rounded-full border border-mist bg-paper text-ink hover:bg-white"
            >
              <ArrowLeft size={17} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next quote"
              className="card-lift grid h-11 w-11 place-items-center rounded-full border border-mist bg-paper text-ink hover:bg-white"
            >
              <ArrowRight size={17} aria-hidden />
            </button>
          </div>
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-3xl border border-mist bg-paper p-8 transition-shadow duration-500 sm:p-12 lg:p-14"
          style={{
            ["--accent" as string]: hex,
            boxShadow: `0 26px 60px -34px color-mix(in srgb, ${hex} 60%, transparent)`,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{
              background: `radial-gradient(70% 60% at 88% 4%, color-mix(in srgb, ${hex} 11%, transparent), transparent 68%)`,
            }}
          />
          <span
            aria-hidden
            className="absolute left-0 top-0 h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${hex}, transparent)` }}
          />

          <Quote size={34} aria-hidden className="relative" style={{ color: hex, opacity: 0.28 }} />

          <div className="relative mt-6 min-h-[12rem] sm:min-h-[10rem]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.figure
                key={index}
                initial={reduce ? false : { opacity: 0, x: dir * 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -26 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-display text-[1.4rem] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Avatar name={active.name} accent={active.accent} size={54} />
                  <span>
                    <span className="block font-display text-[1.02rem] font-bold text-ink">
                      {active.name}
                    </span>
                    <span className="mt-0.5 block text-[0.88rem] text-quiet">
                      {active.course}
                    </span>
                    <span className="block text-[0.88rem] font-medium" style={{ color: hex }}>
                      {active.university}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="relative mt-8 flex items-center justify-between gap-6 border-t border-mist pt-6">
            <div className="flex gap-2" role="tablist" aria-label="Choose a quote">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Quote from ${t.name}`}
                  onClick={() => go(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "1.75rem" : "0.5rem",
                    background: i === index ? accentHex[t.accent] : "var(--color-mist)",
                  }}
                />
              ))}
            </div>
            <p className="label text-quiet">
              {index + 1} / {count}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
