import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { accentHex, stats } from "@/lib/site";

const glow: Record<string, string> = {
  brand: "#5e9bd6",
  sky: "#38b6d8",
  ochre: "#f0a93c",
  coral: "#e8735a",
};

export function Stats() {
  return (
    <Section tone="ink" backdrop={{ grid: true, orbs: true, motes: true }}>
      <Container>
        <Eyebrow tone="light">Corvella in numbers</Eyebrow>

        <dl className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const accent = "accent" in stat ? (stat.accent as keyof typeof accentHex) : "brand";
            return (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="group relative border-t border-paper/15 pt-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[-1px] h-[2px] w-0 transition-[width] duration-700 group-hover:w-full"
                    style={{ background: glow[accent] }}
                  />
                  <dt className="label text-paper/45">{stat.label}</dt>
                  <dd
                    className="mt-3 font-display text-[2.9rem] font-extrabold leading-none tracking-[-0.04em] text-paper transition-[text-shadow] duration-500 lg:text-[3.4rem]"
                    style={{ textShadow: `0 0 42px color-mix(in srgb, ${glow[accent]} 45%, transparent)` }}
                  >
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </Section>
  );
}
