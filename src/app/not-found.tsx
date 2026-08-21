import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { CorvellaMark } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/40 blur-[110px]"
      />
      <Container className="relative flex min-h-[72vh] flex-col items-center justify-center py-24 text-center">
        <CorvellaMark variant="reversed" className="h-14 w-14 opacity-90" idPrefix="nf" />
        <p className="label mt-8 text-amber">Error 404</p>
        <h1 className="display-xl mt-5 max-w-2xl text-paper">This door does not open</h1>
        <p className="lede mt-6 max-w-lg text-paper/70">
          The page you asked for is not here. It may have moved, or the link may be out of date.
          Try one of these instead.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-amber px-7 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            Back to home
            <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/apply"
            className="inline-flex h-[3.25rem] items-center justify-center rounded-2xl border border-paper/25 px-7 font-semibold text-paper transition-colors hover:bg-paper/10"
          >
            Check your eligibility
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-[3.25rem] items-center justify-center rounded-2xl border border-paper/25 px-7 font-semibold text-paper transition-colors hover:bg-paper/10"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
