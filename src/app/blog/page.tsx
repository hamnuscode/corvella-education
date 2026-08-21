import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { posts, accentHex } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain guidance on getting into a UK university as an adult: entry routes, funding, studying around work and changing career.",
  alternates: { canonical: "/blog" },
};

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Straight answers to the questions people are embarrassed to ask"
        lede="Short, plain pieces on getting in, paying for it and fitting study around a life you already have."
      />

      <Section tone="paper">
        <Container>
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="card-lift group grid gap-8 overflow-hidden rounded-3xl border border-mist bg-paper-2 p-7 hover:bg-white sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"
            >
              <div>
                <p className="label flex items-center gap-3 text-brand">
                  Featured
                  <span aria-hidden className="h-px w-8 bg-mist" />
                  <span className="text-quiet">{featured.category}</span>
                </p>
                <h2 className="display-md mt-5 max-w-2xl text-ink">{featured.title}</h2>
                <p className="lede mt-5 max-w-xl text-quiet">{featured.excerpt}</p>
                <p className="label mt-7 text-quiet">
                  <time dateTime={featured.date}>{dateFmt.format(new Date(featured.date))}</time>
                  <span aria-hidden className="mx-2.5">/</span>
                  {featured.readingTime}
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="arch mx-auto grid aspect-[3/4] w-full max-w-[15rem] place-items-center border border-mist bg-gradient-to-b from-brand-100 via-sky-100 to-paper">
                  <ArrowUpRight
                    size={40}
                    className="text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </div>
            </Link>
          </Reveal>

          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-paper p-7 hover:bg-white"
                  style={{ ["--accent" as string]: accentHex[post.accent] }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "var(--accent)" }}
                  />
                  <p className="label" style={{ color: "var(--accent)" }}>
                    {post.category}
                  </p>
                  <h2 className="mt-4 font-display text-[1.28rem] font-bold leading-snug tracking-[-0.02em] text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-quiet">{post.excerpt}</p>
                  <p className="label mt-auto pt-7 text-quiet">
                    <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
                    <span aria-hidden className="mx-2.5">/</span>
                    {post.readingTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>


        </Container>
      </Section>

      <CTABand />
    </>
  );
}
