import { Star, ShieldCheck, HandCoins } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ratings } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="border-b border-mist bg-paper-2">
      <Container className="flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between md:gap-10">
        <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {ratings.map((r) => (
            <div key={r.source} className="flex items-center gap-2.5">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber text-amber" />
                ))}
              </span>
              <span className="text-[0.92rem] font-semibold text-ink">{r.score}</span>
              <span className="label text-quiet">on {r.source}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.88rem] text-quiet">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand" aria-hidden />
            Trusted by students since 2021
          </span>
          <span className="flex items-center gap-2">
            <HandCoins size={16} className="text-brand" aria-hidden />
            Our support is free for students
          </span>
        </Reveal>
      </Container>
    </div>
  );
}
