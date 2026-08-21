import type { Metadata } from "next";
import { BadgePoundSterling, CalendarClock, FileCheck2, LifeBuoy } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { fundingFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Funding and student finance",
  description:
    "How tuition fee loans, maintenance loans and grants work for UK students, and how Corvella helps you complete the Student Finance England application.",
  alternates: { canonical: "/funding" },
};

const helpBlocks = [
  {
    icon: FileCheck2,
    title: "We fill the form in with you",
    body: "The Student Finance England application asks for details most people do not have to hand. We go through it with you, section by section, so it goes in right the first time.",
  },
  {
    icon: CalendarClock,
    title: "We keep the deadlines",
    body: "University offers and student finance run on different clocks. We track both and tell you what needs doing next, before it becomes urgent.",
  },
  {
    icon: BadgePoundSterling,
    title: "We explain what you get",
    body: "Tuition fee loan, maintenance loan, grants and extra support are four different things. We explain which ones apply to you and roughly what to expect.",
  },
  {
    icon: LifeBuoy,
    title: "We help when it goes wrong",
    body: "Missing evidence, a rejected application, a change of circumstances. These happen often and they are usually fixable. Tell us and we will work out the next step.",
  },
];

export default function FundingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Funding and student finance"
        title="Most eligible students do not pay tuition up front"
        lede="If you qualify for student finance, your tuition is covered by a loan paid straight to the university, and you can apply separately for a maintenance loan towards living costs. Here is how it works and where we come in."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Tuition fee loan",
                b: "Covers your course fees. It is paid directly to the university, so the money never passes through your account.",
              },
              {
                t: "Maintenance loan",
                b: "Helps with rent, travel and daily costs. What you get depends on where you live, whether you live with parents, and your household income.",
              },
              {
                t: "Grants and extra support",
                b: "Extra help exists for students with children, adult dependants or a disability. These are not loans and are not repaid.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-mist bg-paper-2 p-8">
                  <h2 className="font-display text-[1.3rem] font-bold text-ink">{item.t}</h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-quiet">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 rounded-2xl border border-dashed border-mist bg-paper-2 p-6 text-[0.9rem] leading-relaxed text-quiet">
              We have deliberately left the amounts out. Loan limits, thresholds and repayment rates
              are set by the government and change from year to year, and publishing a stale figure
              helps nobody. Check the current rates on the official GOV.UK student finance pages, or
              ask us and we will look them up with you.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <SectionHead
            eyebrow="How we help"
            title="The form is the part people put off. So we do it together."
            lede="Funding applications fail on small things: a missing National Insurance number, a household income figure that does not match, an evidence upload nobody chased."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {helpBlocks.map((block, i) => (
              <Reveal as="li" key={block.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-mist bg-paper p-8">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-iris-100 text-iris">
                    <block.icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-6 font-display text-[1.25rem] font-bold leading-tight text-ink">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-quiet">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <FAQ
        items={fundingFaqs}
        eyebrow="Repayment"
        title="What repaying a student loan actually looks like"
      />

      <CTABand
        title="Want help with your funding application?"
        body="Start with the eligibility check. If you qualify for a course, we will take you through the student finance application next."
      />
    </>
  );
}
