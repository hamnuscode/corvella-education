"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import Image from "next/image";
import { accentHex, reviews } from "@/lib/site";

/**
 * Reviews as a card wall rather than one quote at a time, so the whole thing is
 * readable at a glance. Cards stretch to a shared row height and the quote flexes,
 * which keeps every footer on the same line. On small screens it becomes a
 * swipeable rail.
 */
export function Reviews() {
  const reduce = useReducedMotion();

  return (
    <Section tone="tinted" backdrop={{ orbs: true }}>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Student reviews</Eyebrow>
          <h2 className="display-lg mt-4 text-ink">Kind words from people we have helped</h2>
          <p className="lede mt-5 text-quiet">
            Every student arrives with a different story. These are the moments they told us
            mattered most.
          </p>
        </div>
      </Container>

      {/* mobile: swipeable rail */}
      <div className="mt-12 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-4 no-scrollbar sm:px-7 lg:hidden">
        {reviews.map((r) => (
          <ReviewCard key={r.name} review={r} className="w-[19rem] shrink-0 snap-center" />
        ))}
      </div>

      {/* desktop: aligned wall */}
      <Container className="mt-12 hidden lg:block">
        <div className="grid grid-cols-3 items-stretch gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
                <ReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      </Container>

      <Container className="mt-10">
        <p className="label text-center text-quiet">
          Sample reviews, shown so you can see the layout
        </p>
      </Container>
    </Section>
  );
}

function ReviewCard({
  review,
  className = "",
}: {
  review: (typeof reviews)[number];
  className?: string;
}) {
  const hex = accentHex[review.accent];
  return (
    <figure
      className={`card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper p-7 ${className}`}
      style={{ ["--accent" as string]: hex }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${hex}, transparent)` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-60"
        style={{ background: `radial-gradient(closest-side, ${hex}1a, transparent)` }}
      />

      <div className="flex items-center justify-between">
        <span className="flex gap-0.5" aria-label="Five out of five">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-amber text-amber" aria-hidden />
          ))}
        </span>
        <Quote size={26} aria-hidden style={{ color: hex, opacity: 0.22 }} />
      </div>

      <blockquote className="mt-5 flex-1 font-display text-[1.12rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
        {review.quote}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-mist pt-5">
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={review.photo}
            alt={`${review.name}, student`}
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <span className="min-w-0">
          <span className="block font-display text-[0.98rem] font-bold text-ink">{review.name}</span>
          <span className="block truncate text-[0.82rem] text-quiet">{review.course}</span>
          <span className="block truncate text-[0.82rem] font-medium" style={{ color: hex }}>
            {review.university}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
