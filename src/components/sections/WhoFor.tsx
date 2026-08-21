import { GraduationCap, Clock, Compass, CalendarCheck } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { audience } from "@/lib/site";

const icons = { GraduationCap, Clock, Compass, CalendarCheck } as const;

export function WhoFor() {
  return (
    <Section id="who-for" tone="paper">
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
              <Reveal as="li" key={item.title} delay={i * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-t-[8rem] rounded-b-2xl border border-mist bg-paper-2 px-6 pb-7 pt-10 transition-all duration-300 hover:-translate-y-1 hover:border-iris/35 hover:bg-white">
                  <span
                    aria-hidden
                    className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-iris-100 text-iris transition-colors duration-300 group-hover:bg-iris group-hover:text-paper"
                  >
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-6 text-center text-[1.12rem] font-bold leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-center text-[0.92rem] leading-relaxed text-quiet">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
