import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Accordion, type QA } from "@/components/ui/Accordion";
import { faqs } from "@/lib/site";

export function FAQ({
  items = faqs,
  eyebrow = "Questions",
  title = "The things people ask us first",
  tone = "paper",
}: {
  items?: readonly QA[];
  eyebrow?: string;
  title?: string;
  tone?: "paper" | "tinted";
}) {
  return (
    <Section id="faq" tone={tone}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">{title}</h2>
            <p className="mt-5 text-[0.97rem] leading-relaxed text-quiet">
              If your question is not here, ask us directly. You will get a straight answer, not a
              sales call.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-iris transition-colors hover:text-iris-600"
            >
              Ask us a question
            </Link>
          </div>

          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
