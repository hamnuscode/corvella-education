import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <Section tone="ink" backdrop={{ grid: true, orbs: true }}>
      <Container className="relative">
        <Eyebrow tone="light">Corvella in numbers</Eyebrow>

        <dl className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="border-t border-paper/15 pt-6">
              <dt className="label text-paper/45">{stat.label}</dt>
              <dd className="mt-3 font-display text-[2.9rem] font-extrabold leading-none tracking-tight text-paper lg:text-[3.4rem]">
                {"placeholder" in stat && stat.placeholder ? (
                  <span className="text-amber">{stat.placeholder}</span>
                ) : (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                )}
              </dd>
            </Reveal>
          ))}
        </dl>

        <p className="mt-10 max-w-xl text-[0.83rem] leading-relaxed text-paper/45">
          Figures shown in yellow are placeholders. We will not publish a number we cannot evidence,
          so these stay empty until you give us the real ones.
        </p>
      </Container>
    </Section>
  );
}
