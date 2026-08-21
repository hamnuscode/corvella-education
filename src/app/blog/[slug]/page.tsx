import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { Backdrop } from "@/components/ui/Backdrop";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { posts } from "@/lib/site";
import { getPostBody } from "@/lib/postContent";

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { blocks, isSample } = getPostBody(slug);
  const index = posts.findIndex((p) => p.slug === slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <>
      <article>
        <div className="relative overflow-hidden border-b border-mist bg-paper-2">
          <Backdrop orbs arch grid={false} />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[34rem] -translate-x-1/2 arch border border-mist/90 bg-gradient-to-b from-white/70 to-transparent"
          />
          <Container className="relative py-14 sm:py-20">
            <Link
              href="/blog"
              className="label inline-flex items-center gap-2 text-quiet transition-colors hover:text-ink"
            >
              <ArrowLeft size={14} aria-hidden />
              All articles
            </Link>
            <p className="label mt-9 text-brand">{post.category}</p>
            <h1 className="display-lg mt-4 max-w-3xl text-ink">{post.title}</h1>
            <p className="label mt-7 text-quiet">
              <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
              <span aria-hidden className="mx-2.5">/</span>
              {post.readingTime}
            </p>
          </Container>
        </div>

        <Section tone="paper">
          <Container>
            <div className="mx-auto max-w-[42rem]">
              {isSample ? (
                <p className="mb-10 rounded-2xl border border-dashed border-mist bg-paper-2 p-5 text-[0.85rem] leading-relaxed text-quiet">
                  Sample article. Add the real body for this post in{" "}
                  <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-[0.75rem]">
                    src/lib/postContent.ts
                  </code>
                  .
                </p>
              ) : null}

              <p className="lede text-quiet">{post.excerpt}</p>

              <div className="mt-10 flex flex-col gap-6">
                {blocks.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={i} className="display-md mt-6 text-ink">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={i} className="flex flex-col gap-3 border-l-2 border-brand/30 pl-6">
                        {block.items.map((item) => (
                          <li key={item} className="text-[1.02rem] leading-relaxed text-ink/85">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="my-4 rounded-2xl bg-paper-2 p-7 font-display text-[1.3rem] font-semibold leading-snug text-ink"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={i} className="text-[1.05rem] leading-[1.75] text-ink/85">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <Reveal>
                <div className="mt-14 rounded-2xl border border-mist bg-paper-2 p-7">
                  <p className="font-display text-[1.2rem] font-bold text-ink">
                    Want to know where you actually stand?
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-quiet">
                    The eligibility check takes about a minute and gives you a straight answer.
                  </p>
                  <Link
                    href="/apply"
                    className="group mt-5 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-600"
                  >
                    Check your eligibility
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </Reveal>

              <Link
                href={`/blog/${next.slug}`}
                className="group mt-10 flex items-center justify-between gap-6 rounded-2xl border border-mist p-6 transition-colors hover:border-brand/35 hover:bg-paper-2"
              >
                <span>
                  <span className="label block text-quiet">Read next</span>
                  <span className="mt-2 block font-display text-[1.08rem] font-bold leading-snug text-ink">
                    {next.title}
                  </span>
                </span>
                <ArrowRight
                  size={20}
                  className="shrink-0 text-quiet transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </Container>
        </Section>
      </article>

      <CTABand />
    </>
  );
}
