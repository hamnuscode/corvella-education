"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SplitReveal } from "@/components/ui/Reveal";
import { EligibilityFlow } from "@/components/EligibilityFlow";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { CorvellaMark } from "@/components/brand/Logo";

const DOOR_LAYERS = 14;

/** The doorway, extruded, with the eligibility check standing in the opening. */
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
        <div
          className="arch absolute inset-0"
          style={{
            transform: `translateZ(${-DOOR_LAYERS * 15}px) scale(0.9)`,
            background:
              "radial-gradient(58% 46% at 50% 76%, rgb(240 169 60 / 0.36), rgb(56 182 216 / 0.12) 46%, transparent 74%)",
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

export function DoorSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="check" tone="ink" className="!py-0">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { className: "left-[-16%] top-[-26%] h-[38rem] w-[38rem] bg-steel", d: 19, x: 60, y: 40 },
          { className: "right-[-14%] top-[0%] h-[32rem] w-[32rem] bg-brand", d: 24, x: -70, y: 55 },
          { className: "left-[24%] bottom-[-34%] h-[34rem] w-[34rem] bg-sky-bright/70", d: 28, x: 46, y: -50 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-[0.34] blur-[110px] ${b.className}`}
            animate={reduce ? undefined : { x: [0, b.x, 0], y: [0, b.y, 0] }}
            transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hairline-grid pan-grid opacity-60" />
        <FloatingShapes tone="dark" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="max-w-xl">
            <p className="label inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.06] px-3.5 py-2 text-paper/70">
              <CorvellaMark variant="reversed" className="h-3.5 w-3.5" idPrefix="door-badge" />
              Free eligibility check
            </p>

            <h2 className="display-xl mt-7 text-paper">
              <SplitReveal text="The door" delay={0.04} />
              <br />
              <span className="relative inline-block">
                <SplitReveal text="is open." delay={0.14} />
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-gradient-to-r from-amber via-amber to-sky-bright"
                />
              </span>
            </h2>

            <p className="lede mt-8 text-paper/75">
              Four quick questions is all it takes. Tell us where you are today and we will show you
              the route into a UK university that suits you best.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/12 pt-7">
              {[
                { text: "Free for students", tone: "text-amber" },
                { text: "Takes about a minute", tone: "text-sky-bright" },
                { text: "A friendly, clear answer", tone: "text-steel" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2 text-[0.88rem] text-paper/65">
                  <Check size={14} className={item.tone} aria-hidden />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[27rem] lg:mx-0 lg:max-w-none">
            <div className="relative py-8 sm:py-10">
              <DoorFrame />
              <div className="relative mx-auto w-[86%] sm:w-[84%]">
                <EligibilityFlow frame={false} tone="dark" idPrefix="door" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
