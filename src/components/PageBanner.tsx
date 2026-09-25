import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Section";

/**
 * Every page opens with one of these: a photograph, a short heading and a
 * single line. The scrim is heavy on the left so the type always sits on solid
 * colour, and lightens towards the right so the image still reads.
 */
export function PageBanner({
  image,
  eyebrow,
  heading,
  line,
  children,
}: {
  image: string;
  eyebrow: string;
  heading: string;
  line?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-clip bg-ink text-paper">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,rgb(16_24_35/0.95)_0%,rgb(16_24_35/0.86)_42%,rgb(16_24_35/0.5)_78%,rgb(16_24_35/0.4)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div
        aria-hidden
        className="arch pointer-events-none absolute -right-10 top-6 hidden h-[86%] w-[22rem] border border-paper/10 lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="label inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/[0.08] px-3.5 py-2 text-paper/80">
            <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-amber" />
            {eyebrow}
          </p>
          <h1 className="display-xl mt-6 text-paper">{heading}</h1>
          {line ? <p className="lede mt-6 max-w-xl text-paper/80">{line}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

/** The same treatment, sized for a section inside a page rather than a page top. */
export function SectionBanner({
  image,
  eyebrow,
  heading,
  line,
  className = "",
}: {
  image: string;
  eyebrow: string;
  heading: string;
  line?: string;
  className?: string;
}) {
  return (
    <div className={`relative isolate overflow-hidden rounded-3xl bg-ink text-paper ${className}`}>
      <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 1100px" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,rgb(16_24_35/0.93)_0%,rgb(16_24_35/0.8)_46%,rgb(16_24_35/0.45)_100%)]"
      />
      <div className="relative px-7 py-12 sm:px-12 sm:py-16">
        <p className="label text-amber">{eyebrow}</p>
        <h2 className="display-lg mt-4 max-w-xl text-paper">{heading}</h2>
        {line ? <p className="lede mt-5 max-w-lg text-paper/80">{line}</p> : null}
      </div>
    </div>
  );
}
