import type { Metadata } from "next";
import { Clock3, PhoneCall, ShieldCheck } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EligibilityFlow } from "@/components/EligibilityFlow";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQ } from "@/components/sections/FAQ";
import { banners, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply now and check your eligibility",
  description:
    "Run a free eligibility check for a UK university course, then send us your details. An adviser will confirm your options.",
  alternates: { canonical: "/apply" },
};

const assurances = [
  { icon: Clock3, text: "The check takes about a minute" },
  { icon: ShieldCheck, text: "Free, with no obligation to apply" },
  { icon: PhoneCall, text: "A real adviser reviews every enquiry" },
];

export default function ApplyPage() {
  return (
    <>
      <PageBanner {...banners.apply}>
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {assurances.map((a) => (
            <li key={a.text} className="flex items-center gap-2.5 text-[0.9rem] text-paper/75">
              <a.icon size={16} className="text-amber" aria-hidden />
              {a.text}
            </li>
          ))}
        </ul>
      </PageBanner>

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div id="check" className="scroll-mt-28">
                <p className="label text-brand">Step one</p>
                <h2 className="display-md mt-3 text-ink">Check your eligibility</h2>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  Four questions about where you are now. No sign up, and nothing is stored.
                </p>
                <div className="mt-14 sm:mt-16">
                  <EligibilityFlow label="Four questions" idPrefix="apply" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div id="details" className="scroll-mt-28">
                <p className="label text-brand">Get started</p>
                <h2 className="display-md mt-3 text-ink">Get started</h2>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  Prefer to send your details straight away? Fill this in and we will open WhatsApp
                  with everything ready to go. An adviser will come back to you with your options.
                </p>
                <div className="mt-9 rounded-3xl border border-mist bg-paper-2 p-6 sm:p-8">
                  <EnquiryForm variant="apply" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FAQ items={faqs.slice(0, 6)} tone="tinted" title="Before you get started" eyebrow="Common questions" />
    </>
  );
}
