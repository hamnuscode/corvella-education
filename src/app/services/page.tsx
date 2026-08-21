import type { Metadata } from "next";
import { ClipboardCheck, FileText, Wallet, Briefcase, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Free eligibility assessment, full admissions support, student finance and funding guidance, and career support for UK university applicants.",
  alternates: { canonical: "/services" },
};

const icons = { ClipboardCheck, FileText, Wallet, Briefcase } as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything between deciding and starting"
        lede="Four services, all free to students. Take one of them or all four. Most people start with the eligibility check and carry on from there."
      />

      <Section tone="paper" className="py-0 sm:py-0 lg:py-0">
        <Container>
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 border-b border-mist py-14 last:border-b-0 lg:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                  <Reveal>
                    <div className="lg:sticky lg:top-28">
                      <span
                        aria-hidden
                        className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-paper"
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <p className="label mt-6 text-iris">Service {String(i + 1).padStart(2, "0")}</p>
                      <h2 className="display-md mt-3 text-ink">{service.title}</h2>
                    </div>
                  </Reveal>

                  <Reveal delay={0.08}>
                    <p className="lede text-quiet">{service.body}</p>
                    <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-3 bg-paper p-5 text-[0.93rem] leading-snug text-ink">
                          <Check size={16} className="mt-0.5 shrink-0 text-sheen-700" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <div className="rounded-3xl border border-mist bg-paper p-8 sm:p-12">
            <h2 className="display-md max-w-2xl text-ink">What we do not do</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  t: "We do not handle your money",
                  b: "Your tuition loan and maintenance loan go through Student Finance England and your university, never through us.",
                },
                {
                  t: "We do not give financial advice",
                  b: "We explain how student funding works and help you complete the forms. We are not regulated financial advisers.",
                },
                {
                  t: "We do not decide visas",
                  b: "For international students, visa decisions sit with the Home Office. We make sure your university paperwork is correct.",
                },
              ].map((item) => (
                <li key={item.t}>
                  <h3 className="text-[1.02rem] font-bold text-ink">{item.t}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-quiet">{item.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
