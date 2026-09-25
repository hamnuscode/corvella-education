"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { slides } from "@/lib/site";

const HOLD = 6500;

export function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [paused, setPaused] = React.useState(false);
  const reduce = useReducedMotion();
  const count = slides.length;
  const touch = React.useRef<number | null>(null);

  const go = React.useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [index, count],
  );

  React.useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, HOLD);
    return () => clearTimeout(t);
  }, [index, paused, reduce, count]);

  const active = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Corvella Education highlights"
      className="relative isolate overflow-clip bg-ink text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}
    >
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-brand/45 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-steel/25 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-0 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* words on solid ground */}
          <div
            className="py-12 sm:py-14 lg:py-16"
            aria-live="polite"
            aria-atomic="true"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -28 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="label inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/[0.08] px-3.5 py-2 text-paper/80">
                  <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-amber" />
                  {active.eyebrow}
                </p>
                <h1 className="display-xl mt-6 text-paper">{active.heading}</h1>
                <p className="lede mt-6 max-w-lg text-paper/80">{active.line}</p>
                <Link
                  href={active.cta.href}
                  className="group mt-9 inline-flex h-[3.4rem] items-center justify-center gap-2 rounded-full bg-amber px-8 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {active.cta.label}
                  <ArrowRight
                    size={18}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* the photograph, with nothing laid over it */}
          <div className="relative -mx-5 pb-10 sm:-mx-7 lg:mx-0 lg:py-10">
            <div className="arch-photo relative h-64 overflow-hidden sm:h-80 lg:h-[30rem]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.7 }, scale: { duration: 8, ease: "linear" } }}
                >
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 620px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>

        {/* controls */}
        <Container className="relative pb-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose a slide">
              {slides.map((s, i) => (
                <button
                  key={s.heading}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.heading}
                  onClick={() => go(i)}
                  className="relative h-1.5 overflow-hidden rounded-full bg-paper/25 transition-all duration-300"
                  style={{ width: i === index ? "3rem" : "1.25rem" }}
                >
                  {i === index ? (
                    <motion.span
                      key={`${index}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-amber"
                      initial={{ width: reduce || paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: reduce || paused ? 0 : HOLD / 1000, ease: "linear" }}
                    />
                  ) : null}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper/15"
              >
                {paused ? <Play size={15} aria-hidden /> : <Pause size={15} aria-hidden />}
              </button>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper/15"
              >
                <ArrowLeft size={16} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper/15"
              >
                <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          </div>
        </Container>
    </section>
  );
}
