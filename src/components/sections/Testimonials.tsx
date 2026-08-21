"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { testimonials } from "@/lib/site";

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
    }, 7000);
    return () => clearInterval(t);
  }, [count, reduce]);

  const active = testimonials[index];

  return (
    <Section tone="tinted">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>In their words</Eyebrow>
            <h2 className="display-lg mt-4 max-w-lg text-ink">What students say about working with us</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous quote"
              className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-paper text-ink transition-colors hover:border-ink/30 hover:bg-white"
            >
              <ArrowLeft size={17} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next quote"
              className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-paper text-ink transition-colors hover:border-ink/30 hover:bg-white"
            >
              <ArrowRight size={17} aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-mist bg-paper p-8 sm:p-12 lg:p-14">
          <Quote size={34} className="text-iris/25" aria-hidden />
          <div className="relative mt-6 min-h-[11rem] sm:min-h-[9rem]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.figure
                key={index}
                initial={reduce ? false : { opacity: 0, x: dir * 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -26 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-display text-[1.4rem] font-semibold leading-snug text-ink sm:text-[1.75rem]">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[0.95rem] font-semibold text-ink">{active.name}</span>
                  <span aria-hidden className="text-mist">/</span>
                  <span className="text-[0.9rem] text-quiet">{active.detail}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-6 border-t border-mist pt-6">
            <div className="flex gap-2" role="tablist" aria-label="Choose a quote">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Quote ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-iris" : "w-2 bg-mist hover:bg-quiet/40"
                  }`}
                />
              ))}
            </div>
            <p className="label text-quiet">Sample quotes</p>
          </div>
        </div>

        <p className="mt-5 text-[0.83rem] text-quiet">
          These are written samples used to show the layout. Replace them with real quotes once you
          have permission from the students.
        </p>
      </Container>
    </Section>
  );
}
