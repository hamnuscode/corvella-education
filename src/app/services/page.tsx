import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, MessagesSquare, Wallet, Briefcase, Check } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { accentHex, banners, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Free eligibility assessment, interview practice, student finance guidance and career support for UK university applicants.",
  alternates: { canonical: "/services" },
};

const icons = { ClipboardCheck, MessagesSquare, Wallet, Briefcase } as const;

export default function ServicesPage() {
  return (
    <>
      <PageBanner {...banners.services} />

      <Section tone="paper" className="!py-0" backdrop={{ orbs: true }}>
        <Container>
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const hex = accentHex[service.accent];
            const flip = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 border-b border-mist py-14 last:border-b-0 lg:py-20"
              >
                <div
                  className={`grid items-center gap-10 lg:gap-16 ${
                    flip ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"
                  }`}
                >
                  <Reveal className={flip ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-mist">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 540px"
                        className="object-cover"
                      />
                      <span
                        aria-hidden
                        className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-paper shadow-lg"
                        style={{ color: hex }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
                    <p className="label" style={{ color: hex }}>
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display-md mt-3 text-ink">{service.title}</h2>
                    <p className="lede mt-5 text-quiet">{service.body}</p>

                    <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 bg-paper p-5 text-[0.92rem] leading-snug text-ink"
                        >
                          <Check size={16} className="mt-0.5 shrink-0" style={{ color: hex }} aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ButtonLink href="/apply" size="md" className="mt-8">
                      Get started
                    </ButtonLink>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
