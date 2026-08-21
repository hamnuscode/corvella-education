import type { Metadata } from "next";
import { Clock3, PhoneCall, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EligibilityCheck } from "@/components/EligibilityCheck";
import { ArchPanel } from "@/components/ui/ArchPanel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/lib/site";

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
      <PageHeader
        eyebrow="Apply now"
        title="Two steps. The check, then your details."
        lede="Start with the eligibility check to see which route is open to you. Then send us your details and an adviser will confirm your options and what to do next."
      >
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {assurances.map((a) => (
            <li key={a.text} className="flex items-center gap-2.5 text-[0.9rem] text-quiet">
              <a.icon size={16} className="text-iris" aria-hidden />
              {a.text}
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div id="check" className="scroll-mt-28">
                <p className="label text-iris">Step one</p>
                <h2 className="display-md mt-3 text-ink">Check your eligibility</h2>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  Four questions about where you are now. No sign up, and nothing is stored.
                </p>
                <ArchPanel
                  label="Four questions"
                  halo={false}
                  className="mt-9"
                  idPrefix="apply-arch"
                >
                  <EligibilityCheck ctaHref="#details" ctaLabel="Go to step two" />
                </ArchPanel>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div id="details" className="scroll-mt-28">
                <p className="label text-iris">Step two</p>
                <h2 className="display-md mt-3 text-ink">Send us your details</h2>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  Fill this in and an adviser will come back to you with the courses you can apply
                  for, the documents you will need, and the next intake you could realistically make.
                </p>
                <div className="mt-9 rounded-3xl border border-mist bg-paper-2 p-6 sm:p-8">
                  <EnquiryForm variant="apply" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FAQ items={faqs.slice(0, 6)} tone="tinted" title="Before you send it" eyebrow="Common questions" />
    </>
  );
}
