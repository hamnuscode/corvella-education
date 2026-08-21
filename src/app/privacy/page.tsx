import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Corvella Education handles the personal information you give us.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "Who we are",
    p: [
      `${site.name} is a UK education consultancy and a partner agency of ${site.parent.name}. ${site.company.registration}`,
      "If you have a question about your data, contact us using the details on our contact page.",
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you send an enquiry we collect your name, email address, phone number, what you told us about your situation, and how you heard about us.",
      "If you use the eligibility check, your answers stay in your browser and are not sent to us unless you go on to submit the enquiry form.",
    ],
  },
  {
    h: "Why we collect it",
    p: [
      "We use your details to answer your enquiry, to assess which courses you may be eligible for, and to support your application to a university in our partner network.",
      "[Add your lawful basis for processing here, for example consent or legitimate interests.]",
    ],
  },
  {
    h: "Who we share it with",
    p: [
      `Where you ask us to progress an application, we share the details you gave us with ${site.parent.name} and with the university you are applying to.`,
      "[List any other processors you use here, for example your CRM, email provider or analytics tool.]",
    ],
  },
  {
    h: "How long we keep it",
    p: ["[State your retention period here, for example enquiry records kept for X years.]"],
  },
  {
    h: "Your rights",
    p: [
      "You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. You can also object to how we use it.",
      "If you are not happy with how we respond, you can complain to the Information Commissioner's Office.",
    ],
  },
  {
    h: "Cookies",
    p: ["[Describe any cookies or analytics you use, and how visitors can control them.]"],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        lede="This is placeholder wording that covers the right ground. Have it reviewed and completed before you go live."
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[42rem]">
            <p className="rounded-2xl border border-dashed border-mist bg-paper-2 p-5 text-[0.85rem] leading-relaxed text-quiet">
              Placeholder document. Anything in square brackets needs completing, and the whole
              policy should be checked by someone qualified before publication.
            </p>

            <div className="mt-10 flex flex-col gap-10">
              {sections.map((s) => (
                <section key={s.h}>
                  <h2 className="display-md text-ink">{s.h}</h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {s.p.map((para) => (
                      <p key={para} className="text-[1.02rem] leading-[1.75] text-ink/80">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-12 text-[0.85rem] text-quiet">Last updated: [date]</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
