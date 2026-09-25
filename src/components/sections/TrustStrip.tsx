import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  { icon: Sparkles, text: "Free advice for every student" },
  { icon: ShieldCheck, text: "Real degrees from UK universities" },
  { icon: HeartHandshake, text: "One adviser, start to finish" },
];

export function TrustStrip() {
  return (
    <div className="border-b border-mist bg-paper-2">
      <Container className="grid gap-5 py-7 sm:grid-cols-3">
        {POINTS.map((p, i) => (
          <Reveal key={p.text} delay={i * 0.06} className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-100 text-brand"
            >
              <p.icon size={17} strokeWidth={1.9} />
            </span>
            <span className="text-[0.92rem] font-medium text-ink">{p.text}</span>
          </Reveal>
        ))}
      </Container>
    </div>
  );
}
