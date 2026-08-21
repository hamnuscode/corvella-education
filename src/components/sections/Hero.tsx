"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { SplitReveal } from "@/components/ui/Reveal";
import { EligibilityCheck } from "@/components/EligibilityCheck";
import { ArchPanel } from "@/components/ui/ArchPanel";
import { ArchDepth } from "@/components/ui/ArchDepth";
import { Tilt3D } from "@/components/ui/Tilt3D";


/**
 * Ambient steel field. Adapted from the React Bits "Aurora" background:
 * the same idea of slow drifting colour fields, rebuilt with the Corvella
 * raven iridescence palette and layered behind a hairline grid.
 */
function SheenField() {
  const reduce = useReducedMotion();

  const blobs = [
    { className: "left-[-14%] top-[-24%] h-[38rem] w-[38rem] bg-steel", d: 19, x: 62, y: 42 },
    { className: "right-[-12%] top-[2%] h-[32rem] w-[32rem] bg-brand", d: 23, x: -72, y: 58 },
    { className: "left-[26%] bottom-[-32%] h-[34rem] w-[34rem] bg-amber/60", d: 27, x: 48, y: -52 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-[0.38] blur-[100px] ${b.className}`}
          animate={reduce ? undefined : { x: [0, b.x, 0], y: [0, b.y, 0] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 hairline-grid pan-grid opacity-70" />
      {/* The doorway, extruded, standing behind the panel. */}
      <ArchDepth className="absolute right-[-6%] top-[8%] hidden h-[78%] w-[34rem] lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <SheenField />

      <Container className="relative pt-16 pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* Left: the thesis */}
          <div className="max-w-xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="label inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.06] px-3.5 py-2 text-paper/70"
            >
              <span aria-hidden className="inline-block h-[7px] w-[7px] rounded-full bg-amber" />
              Partner agency of FBA UK Ltd
            </motion.p>

            <h1 className="display-xl mt-7 text-paper">
              <SplitReveal text="The door you" delay={0.06} />
              <br />
              <SplitReveal text="thought was" delay={0.14} />
              <br />
              <span className="relative inline-block">
                <SplitReveal text="closed." delay={0.24} />
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-amber"
                />
              </span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lede mt-8 text-paper/72"
            >
              You do not need A levels to study at a UK university. Answer four questions and we will
              tell you, honestly, which route is open to you.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/apply" variant="amber" size="lg">
                Check your eligibility
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </ButtonLink>
              <ButtonLink href="/courses" variant="glassGhost" size="lg" sweep={false}>
                Browse courses
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/12 pt-7"
            >
              {["Free for students", "No sign up needed", "An honest yes or no"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-[0.88rem] text-paper/60">
                  <Check size={14} className="text-amber" aria-hidden />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: the signature. A doorway you can actually walk through. */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[27rem] lg:mx-0 lg:max-w-none"
          >
            <Tilt3D max={5} glare={false}>
              <ArchPanel label="Free eligibility check" idPrefix="hero-arch">
                <EligibilityCheck />
              </ArchPanel>
            </Tilt3D>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
