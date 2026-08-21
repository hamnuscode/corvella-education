import Link from "next/link";
import { ClipboardCheck, FileText, Wallet, Briefcase, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { services, accentHex } from "@/lib/site";

const icons = { ClipboardCheck, FileText, Wallet, Briefcase } as const;

export function ServicesGrid({ tone = "tinted" }: { tone?: "paper" | "tinted" }) {
  return (
    <Section id="services" tone={tone} backdrop={{ orbs: true }}>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="What we do"
            title="Four things, done properly"
            lede="We are not a course marketplace. We work through the whole thing with you and we tell you when something is not going to work."
          />
          <Link
            href="/services"
            className="label group inline-flex shrink-0 items-center gap-2 text-brand transition-colors hover:text-brand-600"
          >
            All services
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-mist bg-mist sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={service.slug} delay={i * 0.06} className="bg-paper">
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden p-8 transition-colors duration-300 hover:bg-white lg:p-10"
                  style={{ ["--accent" as string]: accentHex[service.accent] }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(80% 70% at 12% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="relative flex items-center justify-between">
                    <span
                      aria-hidden
                      className="grid h-11 w-11 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:text-paper"
                      style={{
                        background: "color-mix(in srgb, var(--accent) 13%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <ArrowUpRight
                      size={19}
                      aria-hidden
                      className="text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </span>
                  <h3 className="relative mt-7 font-display text-[1.4rem] font-bold leading-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-quiet">{service.short}</p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
