import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section, SectionHead, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { CTABand } from "@/components/sections/CTABand";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { courseLevels, subjectAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Undergraduate, postgraduate and online or blended courses at UK universities, including foundation year routes for students without A levels.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Degrees you can actually start from where you are"
        lede="Three ways in, depending on what you have already done and how much time you have. Tell us your subject and we will tell you which of these fits."
      />

      <Section tone="paper">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-3">
            {courseLevels.map((level, i) => (
              <Reveal as="li" key={level.slug} delay={i * 0.08} className="h-full">
                <Tilt3D className="h-full" max={6} radiusClass="rounded-t-[9rem] rounded-b-3xl">
                <div className="flex h-full flex-col rounded-t-[9rem] rounded-b-3xl border border-mist bg-paper-2 px-8 pb-8 pt-12 transition-colors duration-300 hover:border-brand/35 hover:bg-white">
                  <p className="label text-center text-brand">{level.label}</p>
                  <h2 className="mt-5 text-center font-display text-[1.5rem] font-bold leading-tight text-ink">
                    {level.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-quiet">{level.body}</p>
                  <ul className="mt-7 flex flex-col gap-2.5 border-t border-mist pt-6">
                    {level.meta.map((m) => (
                      <li key={m} className="flex items-start gap-2.5 text-[0.88rem] text-ink">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                </Tilt3D>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Subject areas</Eyebrow>
              <h2 className="display-lg mt-4 text-ink">What you can study</h2>
              <p className="mt-5 text-[0.97rem] leading-relaxed text-quiet">
                These are the subject areas we most often place students into across the partner
                network. Availability changes by university and by intake, so treat this as a
                starting point and ask us about your subject.
              </p>
              <Link
                href="/apply"
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-600"
              >
                Ask about your subject
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2">
              {subjectAreas.map((subject) => (
                <li
                  key={subject}
                  className="bg-paper px-5 py-4 text-[0.95rem] font-medium text-ink transition-colors hover:bg-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHead
            eyebrow="Entry routes"
            title="No A levels is not the end of the conversation"
            lede="These are the three routes that most often work for people without traditional qualifications."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Foundation year",
                body: "An extra year attached to the front of a degree. You study on campus or online, get up to first year standard, then continue into the degree without reapplying.",
              },
              {
                name: "Access to Higher Education",
                body: "A one year diploma designed for adults returning to study. It is widely recognised by UK universities and can be done part time at a local college.",
              },
              {
                name: "Work experience entry",
                body: "Some courses will accept significant relevant experience in place of formal qualifications, sometimes with a short assessment or an interview.",
              },
            ].map((route, i) => (
              <Reveal key={route.name} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-mist bg-paper-2 p-8">
                  <h3 className="font-display text-[1.25rem] font-bold text-ink">{route.name}</h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-quiet">{route.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <PartnerWall />
      <CTABand
        title="Not sure which course fits?"
        body="Answer four quick questions and we will tell you which level you can enter at and which subjects are open to you."
      />
    </>
  );
}
