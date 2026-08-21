import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhoFor } from "@/components/sections/WhoFor";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { SuccessStory } from "@/components/sections/SuccessStory";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corvella Education | UK university admissions support",
  description:
    "Study at a UK university, even without A levels. Free eligibility check, full admissions support, student finance guidance and career support. Partner agency of FBA UK Ltd.",
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
  description:
    "UK university admissions and education consultancy. Partner agency of FBA UK Ltd.",
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustStrip />
      <WhoFor />
      <AboutStrip />
      <ServicesGrid />
      <PartnerWall />
      <Stats />
      <Testimonials />
      <SuccessStory />
      <FAQ />
      <CTABand />
    </>
  );
}
