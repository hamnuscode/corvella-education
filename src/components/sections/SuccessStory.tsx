import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { photo } from "@/lib/site";

const timeline = [
  {
    when: "Where she started",
    what: "Left school at sixteen with no A levels, then nine years running the floor of a homeware shop in Croydon, four of them as duty manager.",
  },
  {
    when: "What we did",
    what: "Matched her to a business degree with a foundation year, then rebuilt her personal statement around rotas, stock loss and the two people she had trained up herself.",
  },
  {
    when: "The funding",
    what: "Completed the Student Finance England application together, tuition loan and maintenance loan, and got the evidence uploaded before the deadline.",
  },
  {
    when: "Where she is now",
    what: "Second year, still on three shifts a week, heading for a placement year in operations.",
  },
];

export function SuccessStory() {
  return (
    <Section tone="paper" backdrop={{ orbs: true, arch: true, shapes: true }}>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0">
              {/* The doorway again: portrait sits inside the arch. */}
              <div className="arch relative aspect-[3/4] overflow-hidden border border-mist bg-gradient-to-b from-brand-100 via-sky-100 to-paper">
                <div className="absolute inset-0 hairline-grid-light" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/3"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 50% 100%, color-mix(in srgb, #2b5f92 18%, transparent), transparent 70%)",
                  }}
                />
                <Image
                  src={photo.studentsCollab}
                  alt="A student working with an adviser at a table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 352px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="label rounded-full border border-paper/25 bg-paper/15 px-3 py-2 text-center text-paper backdrop-blur-md">
                    Started September 2024
                  </p>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-[1.15rem] font-bold text-ink">Leah Mensah</p>
                <p className="mt-1 text-[0.88rem] text-quiet">
                  BSc Business Management with Foundation Year
                </p>
                <p className="text-[0.88rem] font-medium text-brand">
                  University of Bolton
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Eyebrow>A real success story</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">
              Nine years in retail, then a place on a business degree
            </h2>
            <p className="lede mt-6 text-quiet">
              This is the shape of a typical Corvella case: someone who assumed the door had shut, a
              route they had never heard of, and a lot of paperwork done properly. Nine years behind
              a till is not a gap in a CV. Written down correctly, it is most of an entry
              requirement.
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
