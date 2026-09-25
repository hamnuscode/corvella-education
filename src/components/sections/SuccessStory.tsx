import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

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
            {/* No portrait here: the story is written, so a photograph of a real
                person would be claiming something the site cannot claim. */}
            <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-mist bg-paper-2 p-7">
                <p className="label text-brand">Started September 2024</p>
                <p className="mt-5 font-display text-[1.45rem] font-bold leading-tight text-ink">
                  Leah Mensah
                </p>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-quiet">
                  BSc Business Management with Foundation Year
                </p>
                <p className="mt-1 text-[0.92rem] font-semibold text-brand">University of Bolton</p>

                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-mist pt-6">
                  <div>
                    <dt className="label text-quiet">Route in</dt>
                    <dd className="mt-1.5 text-[0.92rem] font-semibold text-ink">Foundation year</dd>
                  </div>
                  <div>
                    <dt className="label text-quiet">Studying</dt>
                    <dd className="mt-1.5 text-[0.92rem] font-semibold text-ink">Part time</dd>
                  </div>
                  <div>
                    <dt className="label text-quiet">A levels</dt>
                    <dd className="mt-1.5 text-[0.92rem] font-semibold text-ink">None</dd>
                  </div>
                  <div>
                    <dt className="label text-quiet">Now in</dt>
                    <dd className="mt-1.5 text-[0.92rem] font-semibold text-ink">Year two</dd>
                  </div>
                </dl>
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
