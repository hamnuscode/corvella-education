import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Accordion, type QA } from "@/components/ui/Accordion";
import { faqs, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FAQ({
  items = faqs,
  eyebrow = "Questions",
  title = "Your questions, answered",
  tone = "paper",
}: {
  items?: readonly QA[];
  eyebrow?: string;
  title?: string;
  tone?: "paper" | "tinted";
}) {
  return (
    <Section id="faq" tone={tone} backdrop={{ orbs: true }}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">{title}</h2>
            <p className="mt-5 text-[0.97rem] leading-relaxed text-quiet">
              If your question is not here, just ask. You will get a friendly, straight answer.
            </p>
            <a
              href={whatsappLink(`Hello ${site.name}, I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#1fa855] px-6 font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a8f48]"
            >
              <WhatsAppIcon size={18} />
              Ask us a question
            </a>
          </div>

          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
