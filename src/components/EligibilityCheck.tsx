"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";

type Answers = Record<string, string>;

const questions = [
  {
    id: "level",
    label: "Highest qualification",
    question: "What have you finished studying so far?",
    options: [
      { value: "none", label: "Nothing formal, or I left school early" },
      { value: "gcse", label: "GCSEs or equivalent" },
      { value: "level3", label: "A levels, BTEC or an Access course" },
      { value: "degree", label: "A degree or a diploma I could top up" },
    ],
  },
  {
    id: "where",
    label: "Where you are",
    question: "Where will you be applying from?",
    options: [
      { value: "uk", label: "I live in the UK" },
      { value: "intl", label: "I am outside the UK" },
    ],
  },
  {
    id: "mode",
    label: "How you study",
    question: "How much time can you give it?",
    options: [
      { value: "full", label: "Full time, I can study most days" },
      { value: "part", label: "Part time, I work as well" },
      { value: "online", label: "Online or blended, very few campus days" },
    ],
  },
  {
    id: "when",
    label: "Your timing",
    question: "When would you like to start?",
    options: [
      { value: "next", label: "The next intake" },
      { value: "year", label: "Some time in the next year" },
      { value: "looking", label: "Still working it out" },
    ],
  },
] as const;

type Outcome = { verdict: string; headline: string; body: string; steps: string[] };

function assess(a: Answers): Outcome {
  const intl = a.where === "intl";
  const level = a.level;

  let headline: string;
  let body: string;
  const steps: string[] = [];

  if (level === "degree") {
    headline = "Postgraduate routes look open to you";
    body =
      "With a degree or a diploma that can be topped up, you can usually apply straight to a master's or a top up year. Some courses will also count your work experience.";
    steps.push("Send us your transcript or certificate so we can confirm the level");
  } else if (level === "level3") {
    headline = "You can likely apply for year one directly";
    body =
      "A level 3 qualification such as A levels, a BTEC or an Access to HE diploma is normally enough for direct entry to the first year of a degree. How old it is matters less than people think.";
    steps.push("Check which subjects your qualification opens up");
  } else {
    headline = "A foundation year is your most likely way in";
    body =
      "You do not need A levels. A foundation year sits in front of the degree, brings you up to first year standard and then rolls straight into it. Work experience strengthens the application.";
    steps.push("List your work history, including anything unpaid");
  }

  if (intl) {
    steps.push("Prepare English language evidence and your passport");
    body += " As an international applicant you will also need English language evidence and the right visa, which the Home Office decides.";
  } else {
    steps.push("Start your Student Finance England application early, it takes time");
  }

  if (a.mode === "part" || a.mode === "online") {
    steps.push("Ask us for courses with evening, weekend or low attendance patterns");
  }
  if (a.when === "next") {
    steps.push("Get your documents together now, places for the next intake close first");
  }

  return {
    verdict: intl ? "International applicant" : "UK applicant",
    headline,
    body,
    steps: steps.slice(0, 4),
  };
}

export function EligibilityCheck({
  variant = "compact",
  ctaHref = "/apply",
  ctaLabel = "Continue your application",
  className = "",
}: {
  variant?: "compact" | "full";
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
}) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({});
  const reduce = useReducedMotion();
  const liveRef = React.useRef<HTMLDivElement>(null);

  const done = step >= questions.length;
  const current = questions[Math.min(step, questions.length - 1)];
  const outcome = done ? assess(answers) : null;
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  const pick = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div
      className={`relative flex flex-col ${
        variant === "full" ? "min-h-[30rem]" : "min-h-[25.5rem]"
      } ${className}`}
    >
      {/* progress */}
      <div className="flex items-center justify-between gap-4 px-1">
        <p className="label text-quiet">
          {done ? "Your result" : `Step ${step + 1} of ${questions.length}`}
        </p>
        <p className="label text-brand">{done ? "Complete" : current.label}</p>
      </div>
      <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-mist">
        <motion.div
          className="h-full rounded-full bg-brand"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: reduce ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div ref={liveRef} aria-live="polite" className="mt-7 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {!done ? (
            <motion.div key={current.id} {...anim}>
              <h3 className="display-md text-ink">{current.question}</h3>
              <div role="group" aria-label={current.question} className="mt-6 flex flex-col gap-2.5">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => pick(opt.value)}
                    className="group flex min-h-[3.25rem] w-full items-center justify-between gap-4 rounded-xl border border-mist bg-paper px-4 py-3 text-left text-[0.95rem] font-medium text-ink transition-all duration-200 hover:-translate-y-px hover:border-brand hover:bg-brand-100"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight
                      size={17}
                      aria-hidden
                      className="shrink-0 text-quiet transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" {...anim}>
              <p className="label text-brand">{outcome!.verdict}</p>
              <h3 className="display-md mt-3 text-ink">{outcome!.headline}</h3>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-quiet">{outcome!.body}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {outcome!.steps.map((s) => (
                  <li key={s} className="flex gap-3 text-[0.92rem] leading-snug text-ink">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-xl bg-paper-2 px-4 py-3 text-[0.82rem] leading-relaxed text-quiet">
                This is a guide, not an offer. An adviser will confirm your options properly once we
                have your details.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-7 flex items-center gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => (done ? reset() : setStep((s) => s - 1))}
            className="inline-flex h-11 items-center gap-2 rounded-xl px-3 text-[0.88rem] font-semibold text-quiet transition-colors hover:bg-ink/[0.05] hover:text-ink"
          >
            {done ? <RotateCcw size={15} aria-hidden /> : <ArrowLeft size={15} aria-hidden />}
            {done ? "Start again" : "Back"}
          </button>
        ) : (
          <p className="text-[0.82rem] text-quiet">Takes about a minute. No sign up.</p>
        )}

        {done ? (
          <Link
            href={ctaHref}
            className="ml-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-[0.94rem] font-semibold text-paper transition-colors hover:bg-brand-600"
          >
            {ctaLabel}
            <ArrowRight size={17} aria-hidden />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
