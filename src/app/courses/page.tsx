import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap } from "lucide-react";
import { PageBanner, SectionBanner } from "@/components/PageBanner";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { accentHex, banners, courseLevels, photo, subjectGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Undergraduate, postgraduate and flexible online courses at UK universities, including foundation year routes for students without A levels.",
  alternates: { canonical: "/courses" },
};

const routes = [
  {
    name: "Foundation year",
    image: photo.campusPath,
    accent: "brand" as const,
    body: "An extra year at the front of your degree. You study, get ready, and roll straight into year one at the same university. No second application.",
  },
  {
    name: "Access to Higher Education",
    image: photo.openBook,
    accent: "sky" as const,
    body: "A one year diploma made for adults returning to study. Widely recognised by UK universities and often available part time at a local college.",
  },
  {
    name: "Work experience entry",
    image: photo.meeting,
    accent: "ochre" as const,
    body: "Some courses welcome strong, relevant experience in place of formal qualifications, sometimes with a short interview or piece of written work.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageBanner {...banners.courses} />

      <Section tone="paper" backdrop={{ orbs: true }}>
        <Container>
          <SectionHead
            eyebrow="Choose your level"
            title="Three ways to study, all of them real degrees"
            lede="Pick the one that fits your life today. We will help you with the rest."
          />

          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {courseLevels.map((level, i) => {
              const hex = accentHex[level.accent];
              return (
                <Reveal as="li" key={level.slug} delay={i * 0.08} className="h-full">
                  <Tilt3D className="h-full" max={5} radiusClass="rounded-3xl">
                    <div
                      id={level.slug}
                      className="card-lift group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-mist bg-paper hover:bg-white"
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
                          aria-hidden
                          className="absolute inset-0"
                          style={{ background: `linear-gradient(140deg, ${hex}cc, ${hex}4d 60%, transparent)` }}
                        />
                        <span className="label absolute left-5 top-5 rounded-full bg-paper/95 px-3 py-1.5 text-ink">
                          {level.label}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h2 className="font-display text-[1.3rem] font-bold leading-tight text-ink">
                          {level.title}
                        </h2>
                        <p className="mt-3 text-[0.93rem] leading-relaxed text-quiet">{level.body}</p>
                        <ul className="mt-6 flex flex-col gap-2.5 border-t border-mist pt-5">
                          {level.meta.map((m) => (
                            <li key={m} className="flex items-start gap-2.5 text-[0.86rem] text-ink">
                              <Check size={15} className="mt-0.5 shrink-0" style={{ color: hex }} aria-hidden />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Tilt3D>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="tinted" backdrop={{ orbs: true }}>
        <Container>
          <SectionHead
            eyebrow="Subject areas"
            title="What would you love to study?"
            lede="These are the areas we place students into most often. Availability changes by university and intake, so ask us about your subject."
          />

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjectGroups.map((group, i) => {
              const hex = accentHex[group.accent];
              return (
                <Reveal as="li" key={group.name} delay={(i % 3) * 0.07} className="h-full">
                  <div
                    className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper hover:bg-white"
                    style={{ ["--accent" as string]: hex }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={group.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(150deg, ${hex}d9, ${hex}40 65%, transparent)` }}
                      />
                      <h3 className="absolute inset-x-5 bottom-4 flex items-center gap-2 font-display text-[1.15rem] font-bold text-paper">
                        <GraduationCap size={18} aria-hidden />
                        {group.name}
                      </h3>
                    </div>
                    <ul className="flex flex-1 flex-col gap-2 p-6">
                      {group.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2.5 text-[0.9rem] text-quiet">
                          <span
                            aria-hidden
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: hex }}
                          />
                          {ex}
                        </li>
                      ))}
                    </ul>
                    <div className="px-6 pb-6">
                      <Link
                        href="/apply"
                        className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold"
                        style={{ color: hex }}
                      >
                        Ask about this subject
                        <ArrowRight size={15} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <p className="mt-10 rounded-2xl border border-dashed border-mist bg-paper p-6 text-[0.86rem] leading-relaxed text-quiet">
            This subject list is a temporary placeholder. Send us the course finder document and we
            will replace it with your real course list, grouped by level and subject.
          </p>
        </Container>
      </Section>

      <Section tone="paper" backdrop={{ orbs: true }}>
        <Container>
          <SectionBanner
            image={photo.lecture}
            eyebrow="Entry routes"
            heading="No A levels? There is still a way in."
            line="These are the three routes that work best for adults returning to study."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {routes.map((route, i) => {
              const hex = accentHex[route.accent];
              return (
                <Reveal key={route.name} delay={i * 0.07} className="h-full">
                  <div
                    className="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-paper-2"
                    style={{ ["--accent" as string]: hex }}
                  >
                    <div className="relative aspect-[16/8] overflow-hidden">
                      <Image src={route.image} alt="" fill sizes="360px" className="object-cover" />
                      <span
                        aria-hidden
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(140deg, ${hex}cc, transparent)` }}
                      />
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-[1.2rem] font-bold text-ink">{route.name}</h3>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-quiet">{route.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <ButtonLink href="/apply" size="lg">
              Check your eligibility
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <PartnerWall />
      <CTABand
        title="Not sure which course fits?"
        body="Answer four quick questions and we will show you the level you can start at and the subjects open to you."
      />
    </>
  );
}
