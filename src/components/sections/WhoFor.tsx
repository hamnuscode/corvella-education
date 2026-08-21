import { GraduationCap, Clock, Compass, CalendarCheck } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { audience, accentHex } from "@/lib/site";

const icons = { GraduationCap, Clock, Compass, CalendarCheck } as const;

export function WhoFor() {
  return (
    <Section id="who-for" tone="paper" backdrop={{ orbs: true, arch: true }}>
      <Container>
        <SectionHead
          eyebrow="Who this is for"
          title="Most of the people we help were told university was not for them"
          lede="If one of these sounds like your situation, there is almost certainly a route in. It may not be the one you were expecting."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={item.title} delay={i * 0.07} className="h-full">
                <Tilt3D className="h-full" radiusClass="rounded-t-[8rem] rounded-b-2xl">
                <div
                  className="card-lift group relative h-full overflow-hidden rounded-t-[8rem] rounded-b-2xl border border-mist bg-paper-2 px-6 pb-7 pt-10 hover:bg-white"
                  style={{ ["--accent" as string]: accentHex[item.accent] }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(70% 100% at 50% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="relative mx-auto grid h-12 w-12 place-items-center rounded-full transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "color-mix(in srgb, var(--accent) 13%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="relative mt-6 text-center font-display text-[1.12rem] font-bold leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-center text-[0.92rem] leading-relaxed text-quiet">
                    {item.body}
                  </p>
                </div>
                </Tilt3D>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
