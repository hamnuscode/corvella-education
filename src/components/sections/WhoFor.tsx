import Image from "next/image";
import { Sparkles, Clock, Compass, CalendarCheck } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { audience, accentHex } from "@/lib/site";

const icons = { Sparkles, Clock, Compass, CalendarCheck } as const;

export function WhoFor() {
  return (
    <Section id="who-for" tone="paper" backdrop={{ orbs: true, arch: true }}>
      <Container>
        <SectionHead
          eyebrow="Who we help"
          title="Everyone starts somewhere. This could be your somewhere."
          lede="Many of the students we work with once thought university was out of reach. We love showing them that it is not."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={item.title} delay={i * 0.07} className="h-full">
                  <div
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper"
                    style={{ ["--accent" as string]: accentHex.brand }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span
                        aria-hidden
                        className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-paper"
                      >
                        <Icon size={19} strokeWidth={1.9} />
                      </span>
                      <h3 className="mt-4 font-display text-[1.1rem] font-bold leading-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-quiet">{item.body}</p>
                    </div>
                  </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href="/apply" size="lg">
            Check your eligibility
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
