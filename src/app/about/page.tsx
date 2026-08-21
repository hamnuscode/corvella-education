import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Handshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section, SectionHead, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Stats } from "@/components/sections/Stats";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Corvella Education is a UK university admissions consultancy and a partner agency of FBA UK Ltd. Here is how we work and what we will not do.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "We tell you when the answer is no",
    body: "If a course is not realistic for you this year, you will hear that from us. A place you cannot keep is worse than no place at all.",
  },
  {
    icon: MessagesSquare,
    title: "One person, start to finish",
    body: "You get an adviser who knows your case. You will not have to explain your situation again every time you call.",
  },
  {
    icon: Compass,
    title: "The course, then the university",
    body: "We start from where you want to end up and work backwards. The university comes second, not first.",
  },
  {
    icon: Handshake,
    title: "Free for students, always",
    body: "Our support costs you nothing. We are funded by the universities in the partner network when a student enrols.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Corvella"
        title="We work with the people the system forgot to plan for"
        lede="Corvella Education is a UK university admissions and education consultancy. Most of the people we help are adults: working, raising families, changing direction, and unsure whether university is even an option. Usually it is."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="display-lg mt-4 text-ink">
                Make the route in obvious, then walk it with you
              </h2>
              <div className="mt-7 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-quiet">
                <p>
                  Higher education in the UK is more open than most people think. The problem is not
                  usually eligibility. It is that nobody explains the routes, the forms are long, and
                  the language is built for eighteen year olds coming straight out of sixth form.
                </p>
                <p>
                  We exist to close that gap. We tell you in plain words what you can apply for, we
                  do the admin alongside you, and we stay with you through student finance and into
                  your first term.
                </p>
                <p>
                  We started in 2021 and we have kept the same rule since: no pressure, no
                  invented promises, and no course we would not recommend to someone we know.
                </p>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-mist bg-paper-2 p-8 lg:p-10">
                <h3 className="label text-quiet">Who we are part of</h3>
                <Link
                  href={site.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl border border-mist bg-white px-6 py-5"
                >
                  <Image
                    src="/brand/fba-uk-ltd-ink.webp"
                    alt="FBA UK Ltd"
                    width={200}
                    height={62}
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="mt-6 text-[0.97rem] leading-relaxed text-quiet">{site.parent.line}</p>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  That relationship is why we can put you in front of established UK universities.
                  FBA holds the partnerships. Corvella does the advising, the applications and the
                  day to day support.
                </p>
                <a
                  href={site.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-iris transition-colors hover:text-iris-600"
                >
                  Visit fbaukltd.com
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <SectionHead
            eyebrow="How we work"
            title="Four rules we do not bend"
            lede="These are the things that decide whether a student trusts us, so they are the things we hold to."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-mist bg-paper p-8">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-iris-100 text-iris">
                    <p.icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-6 font-display text-[1.3rem] font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-quiet">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>The team</Eyebrow>
              <h2 className="display-lg mt-4 text-ink">Small team, one adviser per student</h2>
            </div>
            <div className="flex flex-col gap-5 text-[1.02rem] leading-relaxed text-quiet">
              <p>
                Corvella is a small team of admissions advisers, funding specialists and student
                support staff. When you get in touch, one adviser picks up your case and keeps it.
              </p>
              <p>
                Between them they have worked on applications for people with no formal
                qualifications, people returning after twenty years away from study, and
                international applicants navigating UK requirements for the first time.
              </p>
              <p>
                We are online [Monday to Friday, 10am to 6pm] and we answer WhatsApp outside those
                hours where we can. If you can only talk in the evening, say so and we will work
                around it.
              </p>
              <p className="rounded-2xl border border-dashed border-mist bg-paper-2 p-5 text-[0.9rem]">
                Add real team member profiles here: name, role, a line on what they handle, and a
                photo. Until then this page speaks about the team collectively, which is honest.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Stats />
      <CTABand
        title="Ready to see what you can apply for?"
        primaryLabel="Check your eligibility"
      />
    </>
  );
}
