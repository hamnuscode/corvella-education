import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { CorvellaLogo, CorvellaMark } from "@/components/brand/Logo";
import { photo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand assets",
  description: "The Corvella Education logo, colour palette and typography.",
  alternates: { canonical: "/brand" },
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Ink", hex: "#101823", note: "Text and dark surfaces" },
  { name: "Brand", hex: "#2b5f92", note: "Primary actions and links" },
  { name: "Steel", hex: "#5e9bd6", note: "Glows and accents on dark, not small text on light" },
  { name: "Focus", hex: "#3e7bb8", note: "Focus rings. Clears 3:1 on both paper and ink" },
  { name: "Amber", hex: "#f0a93c", note: "Accent and the logo eye, never body text on light" },
  { name: "Paper", hex: "#f5f7fa", note: "Page background" },
  { name: "Paper 2", hex: "#e9eef5", note: "Alternating section background" },
  { name: "Mist", hex: "#d4dce7", note: "Borders and dividers" },
  { name: "Quiet", hex: "#54637a", note: "Secondary text" },
];

const files = [
  { label: "Mark, full colour", href: "/brand/corvella-mark.svg" },
  { label: "Mark, monochrome", href: "/brand/corvella-mark-mono.svg" },
  { label: "Mark, reversed", href: "/brand/corvella-mark-reversed.svg" },
  { label: "Lockup, full colour", href: "/brand/corvella-lockup.svg" },
  { label: "Lockup, reversed", href: "/brand/corvella-lockup-reversed.svg" },
  { label: "Lockup, monochrome", href: "/brand/corvella-lockup-mono.svg" },
  { label: "App icon 512", href: "/brand/icon-512.png" },
  { label: "App icon 192", href: "/brand/icon-192.png" },
];

export default function BrandPage() {
  return (
    <>
      <PageBanner
        image={photo.brandCampus}
        eyebrow="Brand"
        heading="The Corvella mark"
        line="A C that is also a raven's head, with the arch it grew out of now carried by the layout."
      />

      <Section tone="paper">
        <Container>
          <SectionHead eyebrow="Logo" title="Three versions, one shape" />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-mist bg-paper p-8">
              <p className="label text-quiet">Full colour</p>
              <div className="mt-8 grid place-items-center">
                <CorvellaMark variant="colour" className="h-28 w-28" idPrefix="b1" />
              </div>
              <p className="mt-8 text-[0.85rem] text-quiet">For light backgrounds.</p>
            </div>
            <div className="rounded-2xl border border-mist bg-paper-2 p-8 text-ink">
              <p className="label text-quiet">Monochrome</p>
              <div className="mt-8 grid place-items-center">
                <CorvellaMark variant="mono" className="h-28 w-28" idPrefix="b2" />
              </div>
              <p className="mt-8 text-[0.85rem] text-quiet">One flat colour, takes currentColor.</p>
            </div>
            <div className="rounded-2xl border border-ink bg-ink p-8">
              <p className="label text-paper/50">Reversed</p>
              <div className="mt-8 grid place-items-center">
                <CorvellaMark variant="reversed" className="h-28 w-28" idPrefix="b3" />
              </div>
              <p className="mt-8 text-[0.85rem] text-paper/60">For dark backgrounds.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-mist bg-paper p-8">
              <p className="label text-quiet">Lockup on light</p>
              <div className="mt-10 grid place-items-center">
                <CorvellaLogo markClassName="h-14 w-14" idPrefix="b4" className="scale-125" />
              </div>
            </div>
            <div className="rounded-2xl border border-ink bg-ink p-8">
              <p className="label text-paper/50">Lockup on dark</p>
              <div className="mt-10 grid place-items-center">
                <CorvellaLogo variant="reversed" markClassName="h-14 w-14" idPrefix="b5" className="scale-125" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-8 rounded-2xl border border-mist bg-paper-2 p-8">
            <p className="label w-full text-quiet">Small sizes</p>
            {[24, 32, 40, 56].map((size) => (
              <div key={size} className="flex flex-col items-center gap-3">
                <CorvellaMark variant="colour" style={{ width: size, height: size }} idPrefix={`bs${size}`} />
                <span className="label text-quiet">{size}px</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tinted">
        <Container>
          <SectionHead eyebrow="Palette" title="Six colours, used with discipline" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((c) => (
              <li key={c.name} className="overflow-hidden rounded-2xl border border-mist bg-paper">
                <div className="h-24" style={{ background: c.hex }} />
                <div className="p-5">
                  <p className="font-display text-[1.1rem] font-bold text-ink">{c.name}</p>
                  <p className="label mt-1 text-quiet">{c.hex}</p>
                  <p className="mt-2 text-[0.85rem] text-quiet">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-mist bg-paper p-8">
              <p className="label text-quiet">Display</p>
              <p className="mt-4 font-display text-[2.6rem] font-extrabold leading-none tracking-[-0.035em] text-ink">
                Schibsted Grotesk
              </p>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-quiet">
                Headings, quotes and the small uppercase labels. Weights 600 to 800, tracking pulled
                in tight. Warm terminals keep it from feeling corporate.
              </p>
            </div>
            <div className="rounded-2xl border border-mist bg-paper p-8">
              <p className="label text-quiet">Body</p>
              <p className="mt-4 text-[2.6rem] font-medium leading-none tracking-[-0.02em] text-ink">
                Geist
              </p>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-quiet">
                Everything you actually read. Neutral on purpose, so the display face carries the
                voice and the body copy stays out of the way.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHead eyebrow="Files" title="Download the assets" />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2">
            {files.map((f) => (
              <li key={f.href}>
                <a
                  href={f.href}
                  download
                  className="flex items-center justify-between gap-4 bg-paper px-6 py-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-white hover:text-brand"
                >
                  {f.label}
                  <Download size={17} aria-hidden className="text-quiet" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
