import Image from "next/image";
import { ArrowUpRight, Compass, Handshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const principles = [
  {
    icon: ShieldCheck,
    title: "We tell you when the answer is no",
    body: "If a course is not realistic for you this year, you will hear it from us. A place you cannot keep is worse than no place at all.",
  },
  {
    icon: MessagesSquare,
    title: "One adviser, start to finish",
    body: "You will not have to explain your situation again every time you call. One person keeps your case.",
  },
  {
    icon: Compass,
    title: "The course, then the university",
    body: "We start from where you want to end up and work backwards. The university comes second.",
  },
  {
    icon: Handshake,
    title: "Free for students, always",
    body: "Our support costs you nothing. We are funded by the universities in the partner network when a student enrols.",
  },
];

export function AboutStrip() {
  return (
    <Section id="about" tone="tinted" backdrop={{ orbs: true, arch: true, shapes: true }}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">
              An admissions team for people the system forgot to plan for
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-[1.01rem] leading-relaxed text-quiet">
              <p>
                Higher education in the UK is more open than most people think. The problem is rarely
                eligibility. It is that nobody explains the routes, the forms are long, and the
                language is written for eighteen year olds coming out of sixth form.
              </p>
              <p>
                Corvella exists to close that gap. We tell you in plain words what you can apply for,
                we do the admin alongside you, and we stay with you through student finance and into
                your first term. We started in 2021 and the rule has not changed: no pressure, no
                invented promises, and no course we would not recommend to someone we know.
              </p>
            </div>

            <Reveal delay={0.1}>
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex flex-wrap items-center gap-5 rounded-2xl border border-mist bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white"
              >
                <span className="rounded-xl border border-mist bg-white px-4 py-3">
                  <Image
                    src="/brand/fba-uk-ltd-ink.webp"
                    alt="FBA UK Ltd"
                    width={160}
                    height={50}
                    className="h-7 w-auto"
                  />
                </span>
                <span className="flex-1 text-[0.88rem] leading-relaxed text-quiet">
                  {site.parent.line}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-quiet transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-mist bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-paper"
                  >
                    <p.icon size={18} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.08rem] font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-quiet">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
