import Image from "next/image";
import { Compass, Handshake, HeartHandshake, MessagesSquare } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { photo } from "@/lib/site";

const principles = [
  {
    icon: HeartHandshake,
    title: "Free for students, always",
    body: "Our advice costs you nothing. We are funded by the universities we work with when a student enrols.",
  },
  {
    icon: MessagesSquare,
    title: "One adviser, start to finish",
    body: "You get someone who knows your story, so you never have to explain it twice.",
  },
  {
    icon: Compass,
    title: "The course first",
    body: "We start from where you want to end up and work backwards to the right course for you.",
  },
  {
    icon: Handshake,
    title: "Honest, warm advice",
    body: "We will tell you what is realistic and how to get there. No pressure, just clear guidance.",
  },
];

export function AboutStrip() {
  return (
    <Section id="about" tone="tinted" backdrop={{ orbs: true, arch: true, shapes: true }}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="display-lg mt-4 text-ink">
              A friendly admissions team on your side
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-[1.01rem] leading-relaxed text-quiet">
              <p>
                University in the UK is far more open than most people imagine. The routes are there.
                They are just rarely explained in plain words.
              </p>
              <p>
                That is where we come in. We tell you clearly what you can apply for, do the paperwork
                alongside you, and stay with you through student finance and into your first term.
              </p>
            </div>

            <Reveal delay={0.08}>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-mist">
                <Image
                  src={photo.campusAutumn}
                  alt="Students walking through a tree lined university campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <ButtonLink href="/services" variant="primary" size="md" className="mt-7">
              See how we help
            </ButtonLink>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="card-lift group h-full rounded-2xl border border-mist bg-paper p-6 hover:bg-white">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-paper"
                  >
                    <p.icon size={18} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.08rem] font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-quiet">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
