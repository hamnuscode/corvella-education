import type { Metadata } from "next";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhoFor } from "@/components/sections/WhoFor";
import { CoursesTeaser } from "@/components/sections/CoursesTeaser";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DoorSection } from "@/components/sections/DoorSection";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { Reviews } from "@/components/sections/Reviews";
import { SuccessStory } from "@/components/sections/SuccessStory";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corvella Education | UK university admissions support",
  description:
    "Study at a UK university, even without A levels. Free eligibility check, interview practice, student finance guidance and career support.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  description: "UK university admissions and education consultancy.",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroCarousel />
      <TrustStrip />
      <WhoFor />
      <CoursesTeaser />
      <ServicesGrid />
      <DoorSection />
      <AboutStrip />
      <PartnerWall />
      <Reviews />
      <SuccessStory />
      <FAQ />
      <CTABand />
    </>
  );
}
