import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageBanner, SectionBanner } from "@/components/PageBanner";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CourseFinder } from "@/components/CourseFinder";
import { CTABand } from "@/components/sections/CTABand";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { accentHex, banners, courseLevels, photo } from "@/lib/site";
import { courseCounts } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Search CertHE, foundation, undergraduate and master's courses at UK universities. Day, evening, weekend, blended and online study.",
  alternates: { canonical: "/courses" },
};

const routes = [
  {
    name: "Start with a CertHE",
    image: photo.routeFoundation,
    accent: "brand" as const,
    body: "One year of university level study with no A levels needed. Finish it and you can carry straight on into a degree, often at the same university.",
  },
  {
    name: "Take a foundation year",
    image: photo.routeAccess,
    accent: "sky" as const,
    body: "A preparation year attached to the front of a degree. One application, one offer, and a gentle run up before year one begins.",
  },
  {
    name: "Use your experience",
    image: photo.routeExperience,
    accent: "ochre" as const,
    body: "Some courses welcome strong, relevant work experience in place of formal qualifications. Tell us what you have done and we will check.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageBanner
        {...banners.courses}
        line={`Search ${courseCounts.total} courses across ${courseCounts.universities} UK universities, and we will help you pick.`}
      />

      {/* levels */}
      <Section tone="paper" backdrop={{ orbs: true }}>
        <Container>
          <SectionHead
            eyebrow="Choose your level"
            title="Four ways in, whatever you have studied before"
            lede="Start where it suits you. Plenty of our students begin at the first step and carry all the way through to a degree."
          />

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courseLevels.map((level, i) => {
              const hex = accentHex[level.accent];
              const count =
                courseCounts.byLevel.find((b) => b.level === level.level)?.count ?? 0;
              return (
                <Reveal as="li" key={level.slug} delay={i * 0.07} className="h-full">
                  <div
                    id={level.slug}
                    className="card-lift group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-mist bg-paper"
                    style={{ ["--accent" as string]: hex }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={level.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <span
                        className="label absolute left-4 top-4 rounded-full px-3 py-1.5 text-paper shadow-sm"
                        style={{ background: hex }}
                      >
                        {level.label}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-[1.12rem] font-bold leading-tight text-ink">
                        {level.title}
                      </h2>
                      <p className="mt-2.5 text-[0.89rem] leading-relaxed text-quiet">{level.body}</p>
                      <ul className="mt-5 flex flex-col gap-2 border-t border-mist pt-4">
                        {level.meta.map((m) => (
                          <li key={m} className="flex items-start gap-2 text-[0.83rem] text-ink">
                            <Check size={14} className="mt-0.5 shrink-0" style={{ color: hex }} aria-hidden />
                            {m}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-[0.82rem] font-semibold" style={{ color: hex }}>
                        {count} courses
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* the finder */}
      <Section id="finder" tone="tinted" backdrop={{ orbs: true }}>
        <Container className="mb-10">
          <SectionHead
            eyebrow="Course finder"
            title="Find the one that fits"
            lede="Filter by level, subject, how you want to study and university. Tap Ask on any course and we will come straight back to you."
          />
        </Container>
        <CourseFinder />
      </Section>

      {/* routes in */}
      <Section tone="paper" backdrop={{ orbs: true }}>
        <Container>
          <SectionBanner
            image={photo.coursesRoutes}
            eyebrow="Entry routes"
            heading="No A levels? There is still a way in."
            line="These three routes work well for adults coming back to study."
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
                      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: hex }} />
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

          <Reveal delay={0.1}>
            <div className="mt-10 grid items-center gap-8 overflow-hidden rounded-3xl border border-mist bg-paper-2 lg:grid-cols-[1fr_1fr]">
              <div className="order-2 p-7 sm:p-10 lg:order-1">
                <p className="label text-brand">Ways to study</p>
                <h3 className="display-md mt-3 text-ink">Days, evenings, weekends or online</h3>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">
                  Our partner universities run daytime, evening, weekend, blended and fully online
                  timetables. If you work, there is very likely a pattern that fits your week.
                </p>
                <Link
                  href="/courses#finder"
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-600"
                >
                  Filter by how you study
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
              <div className="relative order-1 h-56 w-full sm:h-72 lg:order-2 lg:h-full lg:min-h-[18rem]">
                <Image
                  src={photo.levelOnline}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

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
