"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { SplitReveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { EligibilityCheck } from "@/components/EligibilityCheck";
import { ArchPanel } from "@/components/ui/ArchPanel";
import { CorvellaMark } from "@/components/brand/Logo";

/**
 * The hero is a doorway you are standing in front of.
 *
 * Depth is built in layers: an ambient field at the back, then an extruded
 * arch tunnel receding along Z, then warm light spilling out of the opening,
 * then the eligibility panel sitting in the mouth of it. The whole assembly
 * leans towards the pointer and drifts back as you scroll away from it.
 */

const DOOR_LAYERS = 14;

function DoorFrame() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--lean-y", `${x * 10}deg`);
        el.style.setProperty("--lean-x", `${-y * 6}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduce]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [perspective:1400px]"
      style={{ perspectiveOrigin: "50% 44%" }}
    >
      <div
        ref={ref}
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{
          transform: "rotateY(var(--lean-y, 0deg)) rotateX(var(--lean-x, 0deg))",
          transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Light coming through the opening, furthest back */}
        <div
          className="arch absolute inset-0"
          style={{
            transform: `translateZ(${-DOOR_LAYERS * 15}px) scale(0.9)`,
            background:
              "radial-gradient(58% 46% at 50% 76%, rgb(240 169 60 / 0.34), rgb(56 182 216 / 0.12) 46%, transparent 74%)",
          }}
        />
        {Array.from({ length: DOOR_LAYERS }).map((_, i) => {
          const t = i / (DOOR_LAYERS - 1);
          return (
            <div
              key={i}
              className="arch absolute inset-0 border"
              style={{
                transform: `translateZ(${-i * 15}px) scale(${1 - t * 0.1})`,
                borderColor: `rgb(255 255 255 / ${(0.34 - t * 0.28).toFixed(3)})`,
                borderWidth: i === 0 ? 2 : 1,
                boxShadow: i === 0 ? "0 0 60px -20px rgb(94 155 214 / 0.55)" : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function AmbientField() {
  const reduce = useReducedMotion();
  const blobs = [
    { className: "left-[-16%] top-[-26%] h-[40rem] w-[40rem] bg-steel", d: 19, x: 60, y: 40 },
    { className: "right-[-14%] top-[0%] h-[34rem] w-[34rem] bg-brand", d: 24, x: -70, y: 55 },
    { className: "left-[24%] bottom-[-34%] h-[36rem] w-[36rem] bg-sky-bright/70", d: 28, x: 46, y: -50 },
    { className: "right-[18%] bottom-[-20%] h-[24rem] w-[24rem] bg-amber/45", d: 33, x: -40, y: -30 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-[0.36] blur-[110px] ${b.className}`}
          animate={reduce ? undefined : { x: [0, b.x, 0], y: [0, b.y, 0] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 hairline-grid pan-grid opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // The door recedes as you leave it behind.
  const doorScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const doorFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const copyLift = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} className="relative isolate overflow-clip bg-ink text-paper">
      <AmbientField />

      <Container className="relative pb-20 pt-14 sm:pt-18 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <motion.div style={reduce ? undefined : { y: copyLift }} className="max-w-xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="label inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.06] px-3.5 py-2 text-paper/70"
            >
              <CorvellaMark variant="reversed" className="h-3.5 w-3.5" idPrefix="hero-badge" />
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
                  transition={{ duration: 0.7, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-gradient-to-r from-amber via-amber to-sky-bright"
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
              {[
                { text: "Free for students", tone: "text-amber" },
                { text: "No sign up needed", tone: "text-sky-bright" },
                { text: "An honest yes or no", tone: "text-steel" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2 text-[0.88rem] text-paper/62">
                  <Check size={14} className={item.tone} aria-hidden />
                  {item.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* The doorway itself, with the check standing in the opening. */}
          <motion.div
            style={reduce ? undefined : { scale: doorScale, opacity: doorFade }}
            className="relative mx-auto w-full max-w-[27rem] lg:mx-0 lg:max-w-none"
          >
            <div className="relative py-8 sm:py-10">
              <DoorFrame />
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto w-[86%] sm:w-[84%]"
              >
                <ArchPanel label="Free eligibility check" halo={false} idPrefix="hero-arch">
                  <EligibilityCheck />
                </ArchPanel>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
