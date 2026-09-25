import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { ButtonLink } from "@/components/ui/Button";
import { accentHex, courseLevels, subjectGroups } from "@/lib/site";

export function CoursesTeaser() {
  return (
    <Section id="courses" tone="paper" backdrop={{ orbs: true }}>
      <Container>
        <SectionHead
          eyebrow="Courses"
          title="Find something you will enjoy studying"
          lede="Pick a level, then a subject. Every card takes you straight to the details."
        />

        {/* levels */}
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {courseLevels.map((level, i) => {
            const hex = accentHex[level.accent];
            return (
              <Reveal as="li" key={level.slug} delay={i * 0.07} className="h-full">
                <Tilt3D className="h-full" max={5} radiusClass="rounded-3xl">
                  <Link
                    href={`/courses#${level.slug}`}
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper hover:bg-white"
                    style={{ ["--accent" as string]: hex }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={level.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 380px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <span
                        className="label absolute left-4 top-4 rounded-full px-3 py-1.5 text-paper shadow-sm"
                        style={{ background: hex }}
                      >
                        {level.label}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-[1.25rem] font-bold leading-tight text-ink">
                        {level.title}
                      </h3>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-quiet">{level.body}</p>
                      <span
                        className="mt-5 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold"
                        style={{ color: hex }}
                      >
                        See these courses
                        <ArrowUpRight
                          size={15}
                          aria-hidden
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </Tilt3D>
              </Reveal>
            );
          })}
        </ul>

        {/* subject groups */}
        <h3 className="display-md mt-16 text-ink">Popular subject areas</h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectGroups.map((group, i) => {
            const hex = accentHex[group.accent];
            return (
              <Reveal as="li" key={group.name} delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href="/courses"
                  className="card-lift group flex h-full gap-4 overflow-hidden rounded-2xl border border-mist bg-paper p-4 hover:bg-white"
                  style={{ ["--accent" as string]: hex }}
                >
                  <span className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={group.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </span>
                  <span className="min-w-0 flex-1 py-1">
                    <span className="flex items-center gap-2 font-display text-[1.02rem] font-bold leading-tight text-ink">
                      <GraduationCap size={16} aria-hidden style={{ color: hex }} />
                      {group.name}
                    </span>
                    <span className="mt-1.5 block text-[0.83rem] leading-relaxed text-quiet">
                      {group.examples.slice(0, 3).join(", ")}
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href="/courses" size="lg">
            See all courses
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
