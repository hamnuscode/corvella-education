import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function CTABand({
  title = "Find out where you stand. It takes a minute.",
  body = "Answer four questions and we will tell you which route into a UK university is realistic for you. If the answer is not yet, we will say that too, and tell you what to fix.",
  primaryHref = "/apply",
  primaryLabel = "Check your eligibility",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-iris text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[30rem] w-[30rem] rounded-full bg-sheen/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[12%] h-[26rem] w-[26rem] rounded-full bg-beacon/20 blur-[110px]"
      />
      <Container className="relative py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="display-lg max-w-2xl text-paper">{title}</h2>
            <p className="lede mt-6 max-w-xl text-paper/75">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Link
              href={primaryHref}
              className="inline-flex h-[3.4rem] flex-1 items-center justify-center gap-2 rounded-2xl bg-beacon px-7 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              {primaryLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={site.contact.whatsappHref}
              className="inline-flex h-[3.4rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-paper/30 px-7 font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              <MessageCircle size={18} aria-hidden />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
