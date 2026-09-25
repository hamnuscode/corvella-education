import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Section";

/**
 * Split banner: the words sit on solid ink, the photograph sits beside them
 * completely untouched. Nothing is laid over the image, so the picture reads at
 * full strength and the type never has to fight it. On small screens the photo
 * stacks above the copy rather than going behind it.
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
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-brand/45 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="py-12 sm:py-16 lg:py-20">
            <p className="label inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/[0.08] px-3.5 py-2 text-paper/80">
              <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-amber" />
              {eyebrow}
            </p>
            <h1 className="display-xl mt-6 text-paper">{heading}</h1>
            {line ? <p className="lede mt-6 max-w-lg text-paper/80">{line}</p> : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          <div className="relative -mx-5 mb-12 sm:-mx-7 lg:mx-0 lg:my-10">
            <div className="arch-photo relative h-60 overflow-hidden sm:h-72 lg:h-full lg:min-h-[23rem]">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A photo and a headline side by side, for use inside a page. */
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
    <div
      className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-mist bg-paper-2 lg:grid-cols-[1fr_1fr] ${className}`}
    >
      <div className="order-2 p-7 sm:p-10 lg:order-1">
        <p className="label text-brand">{eyebrow}</p>
        <h2 className="display-lg mt-4 text-ink">{heading}</h2>
        {line ? <p className="lede mt-5 text-quiet">{line}</p> : null}
      </div>
      <div className="relative order-1 h-56 w-full sm:h-72 lg:order-2 lg:h-full lg:min-h-[20rem]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
