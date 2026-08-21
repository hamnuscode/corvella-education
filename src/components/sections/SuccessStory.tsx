import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  { when: "Where she started", what: "Left school at sixteen with no A levels, working in retail management for nine years." },
  { when: "What we did", what: "Matched her to a business degree with a foundation year, then rebuilt her personal statement around her work history." },
  { when: "The funding", what: "Completed the Student Finance England application together, including the maintenance loan for living costs." },
  { when: "Where she is now", what: "In the second year of her degree, still working part time, on track to graduate." },
];

export function SuccessStory() {
  return (
    <Section tone="paper" backdrop={{ orbs: true, arch: true }}>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0">
              {/* The doorway again: portrait sits inside the arch. */}
              <div className="arch relative aspect-[3/4] overflow-hidden border border-mist bg-gradient-to-b from-brand-100 to-paper-2">
                <div className="absolute inset-0 hairline-grid-light" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <p className="label text-quiet">Photo placeholder</p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-quiet">
                    Drop a real student photo here, with their written permission.
                  </p>
                </div>
                <div className="absolute left-1/2 top-[28%] -translate-x-1/2">
                  <span className="font-display text-[4.5rem] font-extrabold leading-none text-brand/15">
                    [ ]
                  </span>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-[1.15rem] font-bold text-ink">[Student name]</p>
                <p className="mt-1 text-[0.88rem] text-quiet">[Course], [University], started [year]</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Eyebrow>A real success story</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">
              Nine years in retail, then a place on a business degree
            </h2>
            <p className="lede mt-6 text-quiet">
              This is the shape of a typical Corvella case: someone who assumed the door had shut,
              a route they had never heard of, and a lot of paperwork done properly. Swap the
              details below for a real story once you have a student who is happy to be named.
            </p>

            <ol className="mt-10 flex flex-col">
              {timeline.map((item, i) => (
                <Reveal as="li" key={item.when} delay={i * 0.06}>
                  <div className="flex gap-5 border-t border-mist py-5">
                    <span className="label w-[3.2rem] shrink-0 pt-1 text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.02rem] font-bold text-ink">{item.when}</h3>
                      <p className="mt-1.5 text-[0.93rem] leading-relaxed text-quiet">{item.what}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Link
              href="/apply"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-600"
            >
              Start your own check
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
