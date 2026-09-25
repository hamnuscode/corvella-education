"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CorvellaMark } from "@/components/brand/Logo";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { site, whatsappLink } from "@/lib/site";

const assurances = [
  { icon: Clock3, text: "About a minute" },
  { icon: ShieldCheck, text: "Free, no obligation" },
  { icon: MessageCircle, text: "A real adviser replies" },
];

export function CTABand({
  title = "Find out where you stand.",
  body = "Four questions, one honest answer. If a route is open to you we will name it. If it is not yet, we will tell you what to fix first.",
  primaryHref = "/apply",
  primaryLabel = "Check your eligibility",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 text-paper lg:py-24">
      {/* Ambient ground behind the glass */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-[8%] top-[-30%] h-[34rem] w-[34rem] rounded-full bg-steel/30 blur-[120px] ${
            reduce ? "" : "animate-drift"
          }`}
        />
        <div
          className={`absolute -right-[6%] bottom-[-34%] h-[32rem] w-[32rem] rounded-full bg-brand/55 blur-[120px] ${
            reduce ? "" : "animate-drift-slow"
          }`}
        />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/12 blur-[130px]" />
        <div className="absolute inset-0 hairline-grid opacity-50" />
        <FloatingShapes tone="dark" />
      </div>

      <Container className="relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative overflow-hidden rounded-[2rem] px-7 py-10 sm:px-12 sm:py-14"
        >
          {/* The doorway, drawn faintly across the glass */}
          <div
            aria-hidden
            className="arch pointer-events-none absolute -right-16 -top-10 hidden h-[130%] w-[24rem] border border-paper/10 sm:block"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/[0.07] px-3 py-1.5">
                <CorvellaMark variant="reversed" className="h-4 w-4" idPrefix="cta" />
                <span className="label text-paper/70">Free eligibility check</span>
              </span>

              <h2 className="display-lg mt-6 max-w-xl text-paper">{title}</h2>
              <p className="lede mt-5 max-w-lg text-paper/72">{body}</p>

              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {assurances.map((a) => (
                  <li key={a.text} className="flex items-center gap-2 text-[0.87rem] text-paper/65">
                    <a.icon size={15} className="text-amber" aria-hidden />
                    {a.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ButtonLink href={primaryHref} variant="amber" size="lg" className="w-full">
                {primaryLabel}
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </ButtonLink>
              <ButtonLink
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink(`Hello ${site.name}, I would like to check if I am eligible to study.`)}
                variant="glassGhost"
                size="lg"
                className="w-full"
                sweep={false}
              >
                <MessageCircle size={18} aria-hidden />
                Message us on WhatsApp
              </ButtonLink>
              <p className="mt-1 text-center text-[0.8rem] text-paper/45">
                Or call {site.contact.phone}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
