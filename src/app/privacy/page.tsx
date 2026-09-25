import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { banners, site } from "@/lib/site";

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
      `${site.name} is a UK education consultancy. ${site.company.registration}`,
      "We are the data controller for the information you give us through this website. If you have a question about your data, contact us using the details on our contact page.",
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you send an enquiry we collect your name, email address, phone number, what you told us about your situation, and how you heard about us. Enquiry forms hand off to WhatsApp, so the message also sits in your own WhatsApp account.",
      "If you use the eligibility check, your answers stay in your browser and are never sent to us unless you go on to submit the enquiry form.",
      "Our hosting provider records standard server logs, including IP addresses, for security and reliability. These are not used to identify individual visitors.",
    ],
  },
  {
    h: "Why we collect it",
    p: [
      "We use your details to answer your enquiry, to assess which courses you may be eligible for, and to support your application to a university in our partner network.",
      "Our lawful basis is legitimate interests: you have contacted us asking for help with a university application, and we need your details to provide it. Where we send you marketing that is not a direct answer to your enquiry, we rely on your consent, and you can withdraw it at any time.",
    ],
  },
  {
    h: "Who we share it with",
    p: [
      "Where you ask us to progress an application, we share the details you gave us with the university you are applying to.",
      "We also use service providers who process data on our behalf: our website host, our email provider, and our customer records system. They act on our instructions and may not use your data for their own purposes.",
      "We do not sell your data, and we do not share it with advertisers.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "Enquiries that do not lead to an application are deleted after two years.",
      "Where you enrol on a course through us, we keep your record for six years after your last contact with us, so we can answer questions about your application and meet our own record keeping obligations.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. You can also object to how we use it, or ask us to restrict it while a question is resolved.",
      "Email us and we will respond within one month. There is no charge.",
      "If you are not happy with how we respond, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
  {
    h: "Cookies",
    p: [
      "This site sets no advertising or tracking cookies, and it does not use third party analytics.",
      "If that changes, this page will be updated and you will be asked for consent before any non essential cookie is set.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageBanner {...banners.privacy} />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[42rem]">
            <p className="rounded-2xl border border-mist bg-paper-2 p-5 text-[0.85rem] leading-relaxed text-quiet">
              This policy describes how the site is built and how we intend to work. Have it checked
              by someone qualified before you rely on it, and update it whenever your tools or
              processes change.
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

            <p className="mt-12 text-[0.85rem] text-quiet">Last updated: 22 August 2026</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
