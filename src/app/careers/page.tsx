import type { Metadata } from "next";
import { Coins, Network, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { banners, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refer a student",
  description:
    "Know someone who would love to study? Introduce them to Corvella Education and we will look after them from there.",
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
    body: "Referral terms are agreed in writing before you start, and paid once a referred student has enrolled and passed the university\u2019s cooling off period.",
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
      <PageBanner {...banners.careers} />

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
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand">
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
                You can also message us on WhatsApp, or email{" "}
                <a
                  href={`mailto:${site.contact.referralEmail}`}
                  className="font-semibold text-brand underline underline-offset-2"
                >
                  {site.contact.referralEmail}
                </a>{" "}
                with the subject line Referral.
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
