import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { partners, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "University partners",
  description:
    "The UK universities in the FBA UK Ltd partner network that Corvella Education works with.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our university partners"
        title="The universities behind the offers we make"
        lede="Corvella works through the FBA UK Ltd partner network. These are established UK universities awarding their own degrees. Which of them is open to you depends on your subject, your background and the intake you are aiming for."
      />

      <Section tone="paper">
        <Container>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p, i) => (
              <Reveal as="li" key={p.file} delay={Math.min(i, 8) * 0.04}>
                <div className="group grid h-32 place-items-center rounded-2xl border border-mist bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-iris/30 hover:shadow-[0_16px_40px_-24px_rgba(23,19,52,0.6)] sm:h-36">
                  <Image
                    src={`/partners/${p.file}`}
                    alt={p.name}
                    width={260}
                    height={110}
                    className="h-auto max-h-[3.6rem] w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:max-h-[4.2rem]"
                  />
                </div>
                <p className="mt-3 px-1 text-center text-[0.78rem] leading-snug text-quiet">{p.name}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-8 rounded-3xl border border-mist bg-paper-2 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="label text-quiet">Our parent network</p>
                <a
                  href={site.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-xl border border-mist bg-white px-6 py-5"
                >
                  <Image
                    src="/brand/fba-uk-ltd-ink.webp"
                    alt="FBA UK Ltd"
                    width={200}
                    height={62}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              <p className="text-[0.97rem] leading-relaxed text-quiet">
                {site.parent.line} Partner lists change as agreements are renewed, so always confirm
                with us before you make plans around a specific university.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand
        title="Want to know which of these will take you?"
        body="The eligibility check narrows it down in about a minute, then an adviser confirms it properly."
      />
    </>
  );
}
