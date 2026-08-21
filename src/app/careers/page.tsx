import type { Metadata } from "next";
import { Coins, Network, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Become a consultant",
  description:
    "Refer students to Corvella Education. If you already talk to people who want to study, tell us and we will explain how referring works.",
  alternates: { canonical: "/careers" },
};

const points = [
  {
    icon: Network,
    title: "You already have the network",
    body: "Community leaders, tutors, employers and people who run local groups usually know several people thinking about studying. That is the whole job.",
  },
  {
    icon: UserRoundCheck,
    title: "We take it from the introduction",
    body: "You pass on a name and a contact detail, with their permission. Our advisers do the eligibility check, the application and the funding support.",
  },
  {
    icon: Coins,
    title: "Paid per enrolment",
    body: "Referral terms are agreed in writing before you start, and paid when a referred student actually enrols. [Confirm your terms here.]",
  },
  {
    icon: ShieldCheck,
    title: "Honest referrals only",
    body: "We will not accept a referral where the student has been promised something we cannot deliver. If they are not eligible, we tell them, not you.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers and referrals"
        title="Know people who want to study? Introduce them."
        lede="Corvella works with student referral consultants: people who already talk to adults thinking about university and want a straightforward way to point them somewhere useful."
      />

      <Section tone="paper">
        <Container>
          <SectionHead
            eyebrow="How it works"
            title="A short version, with nothing hidden in the small print"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-mist bg-paper-2 p-8">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-iris-100 text-iris">
                    <p.icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-6 font-display text-[1.25rem] font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-quiet">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="display-lg text-ink">Tell us about yourself</h2>
              <p className="mt-5 text-[0.97rem] leading-relaxed text-quiet">
                Send this form and we will come back to you with how referrals work at Corvella, what
                we can pay and what we expect. There is no cost to join and no target to hit.
              </p>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-quiet">
                You can also email{" "}
                <a
                  href={`mailto:${site.contact.referralEmail}`}
                  className="font-semibold text-iris underline underline-offset-2"
                >
                  {site.contact.referralEmail}
                </a>{" "}
                with the subject line Referral.
              </p>
              <p className="mt-8 rounded-2xl border border-dashed border-mist p-5 text-[0.83rem] leading-relaxed text-quiet">
                Add your real referral terms, payment schedule and any compliance wording before this
                page goes live.
              </p>
            </div>

            <div className="rounded-3xl border border-mist bg-paper p-6 sm:p-9">
              <EnquiryForm variant="referral" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
