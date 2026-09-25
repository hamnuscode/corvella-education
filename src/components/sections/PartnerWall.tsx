"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/site";

function LogoCard({
  name,
  file,
  fixedWidth = true,
}: {
  name: string;
  file: string;
  fixedWidth?: boolean;
}) {
  return (
    <div
      className={`group grid h-24 place-items-center rounded-xl border border-mist bg-white px-6 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_10px_30px_-18px_rgba(23,19,52,0.55)] sm:h-28 ${
        fixedWidth ? "w-[13.5rem] shrink-0 sm:w-[15rem]" : "w-full"
      }`}
    >
      <Image
        src={`/partners/${file}`}
        alt={name}
        width={260}
        height={110}
        className="h-auto max-h-[3.4rem] w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[3.9rem]"
      />
    </div>
  );
}

/**
 * Marquee adapted from the React Bits "LogoLoop" pattern: two duplicated tracks
 * scrolling on a CSS animation, paused on hover and switched to a static,
 * scrollable grid when the visitor prefers reduced motion.
 */
export function PartnerWall({ compact = true }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const half = Math.ceil(partners.length / 2);
  const rows = [partners.slice(0, half), partners.slice(half)];

  return (
    <Section id="partners" tone="paper" backdrop={{ orbs: true }}>
      <Container>
        <SectionHead
          eyebrow="Our university partners"
          title="Real degrees from real UK universities"
          lede="We work with established universities right across the UK. Which ones suit you depends on your subject, your background and the intake you are aiming for, and we will help you choose."
          align="center"
        />
      </Container>

      {reduce ? (
        <Container className="mt-14">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <LogoCard key={p.file} name={p.name} file={p.file} fixedWidth={false} />
            ))}
          </div>
        </Container>
      ) : (
        <div className="mt-14 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          {rows.map((row, r) => (
            <div key={r} className="group flex overflow-hidden">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1}
                  className={`flex shrink-0 gap-4 pr-4 ${
                    r === 0 ? "animate-[marquee_46s_linear_infinite]" : "animate-[marquee-rev_54s_linear_infinite]"
                  } group-hover:[animation-play-state:paused]`}
                >
                  {row.map((p) => (
                    <LogoCard key={`${copy}-${p.file}`} name={p.name} file={p.file} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {compact ? (
        <Container className="mt-12">
          <Reveal>
            <p className="mx-auto max-w-xl text-center text-[0.88rem] leading-relaxed text-quiet">
              Partner lists change as agreements are renewed, so do check with us before you make
              plans around one particular university. We will always tell you what is available now.
            </p>
          </Reveal>
        </Container>
      ) : null}
    </Section>
  );
}
