import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, MessagesSquare, Wallet, Briefcase, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services, accentHex } from "@/lib/site";

const icons = { ClipboardCheck, MessagesSquare, Wallet, Briefcase } as const;

export function ServicesGrid({ tone = "tinted" }: { tone?: "paper" | "tinted" }) {
  return (
    <Section id="services" tone={tone} backdrop={{ orbs: true }}>
      <Container>
        <SectionHead
          eyebrow="What we do"
          title="Four things we do properly"
          lede="From your first question to your first term, all of it free for students."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const hex = accentHex[service.accent];
            return (
              <Reveal as="li" key={service.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/services#${service.slug}`}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper hover:bg-white"
                  style={{ ["--accent" as string]: hex }}
                >
                  <span aria-hidden className="h-1.5 w-full" style={{ background: hex }} />
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 560px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <span className="flex items-center justify-between">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-2xl"
                        style={{ background: `${hex}1f`, color: hex }}
                      >
                        <Icon size={21} strokeWidth={1.9} aria-hidden />
                      </span>
                      <ArrowUpRight
                        size={20}
                        aria-hidden
                        className="text-quiet transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    <h3 className="mt-5 font-display text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-quiet">{service.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href="/services" size="lg">
            Explore our services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
