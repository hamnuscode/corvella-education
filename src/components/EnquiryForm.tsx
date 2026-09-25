"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Field, TextArea, TextInput } from "@/components/ui/Field";
import { SelectMenu } from "@/components/ui/SelectMenu";
import { openWhatsApp, type FormKind } from "@/lib/submitForm";
import { validate, type Rule } from "@/lib/validate";

const HEARD_OPTIONS = [
  "Google or another search engine",
  "Facebook or Instagram",
  "TikTok or YouTube",
  "A friend or family member",
  "A Corvella consultant",
  "An event or a leaflet",
  "Somewhere else",
];

type Variant = "apply" | "contact" | "referral";

const config: Record<
  Variant,
  { kind: FormKind; submit: string; success: string; messageLabel: string; messageHint: string }
> = {
  apply: {
    kind: "application-enquiry",
    submit: "Send on WhatsApp",
    success:
      "Lovely. WhatsApp is opening with your details ready to send. Press send and an adviser will pick it up.",
    messageLabel: "What would you like to study?",
    messageHint: "A few lines is plenty. Tell us your subject, your situation and when you would like to start.",
  },
  contact: {
    kind: "general-contact",
    submit: "Send on WhatsApp",
    success: "Lovely. WhatsApp is opening with your message ready to send.",
    messageLabel: "Your message",
    messageHint: "Tell us what you need and we will point you to the right person.",
  },
  referral: {
    kind: "consultant-referral",
    submit: "Send on WhatsApp",
    success: "Thank you. WhatsApp is opening with your details ready to send.",
    messageLabel: "Tell us about the students you work with",
    messageHint: "Who do you already talk to, and roughly how many people might you introduce to us?",
  },
};

export function EnquiryForm({
  variant = "apply",
  context,
}: {
  variant?: Variant;
  /** Anything already known about the visitor, sent along with the form. */
  context?: Record<string, string>;
}) {
  const cfg = config[variant];
  const reduce = useReducedMotion();
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [state, setState] = React.useState<"idle" | "done">("idle");

  const labels: Record<string, string> = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    heard: "How you heard about us",
  };

  const rules: Record<string, Rule[]> = {
    firstName: ["required"],
    lastName: ["required"],
    email: ["required", "email"],
    phone: ["required", "phone"],
    message: ["required"],
    heard: ["required"],
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values, rules, labels);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    openWhatsApp(cfg.kind, { ...values, ...(context ?? {}) });
    setState("done");
  };

  if (state === "done") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-brand/30 bg-brand-100 p-8 sm:p-10"
        role="status"
      >
        <span aria-hidden className="grid h-12 w-12 place-items-center rounded-full bg-[#1fa855] text-paper">
          <Check size={22} strokeWidth={2.6} />
        </span>
        <h3 className="display-md mt-6 text-ink">Over to WhatsApp.</h3>
        <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-ink/70">{cfg.success}</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-mist bg-paper px-5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-white"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required error={errors.firstName}>
          <TextInput
            name="firstName"
            autoComplete="given-name"
            value={values.firstName ?? ""}
            onChange={set("firstName")}
            error={errors.firstName}
            placeholder="Emma"
          />
        </Field>
        <Field label="Last name" name="lastName" required error={errors.lastName}>
          <TextInput
            name="lastName"
            autoComplete="family-name"
            value={values.lastName ?? ""}
            onChange={set("lastName")}
            error={errors.lastName}
            placeholder="Wilson"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" required error={errors.email}>
          <TextInput
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email ?? ""}
            onChange={set("email")}
            error={errors.email}
            placeholder="emma.wilson@example.com"
          />
        </Field>
        <Field label="Phone" name="phone" required error={errors.phone}>
          <TextInput
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone ?? ""}
            onChange={set("phone")}
            error={errors.phone}
            placeholder="07000 000000"
          />
        </Field>
      </div>

      <Field
        label={cfg.messageLabel}
        name="message"
        required
        error={errors.message}
        hint={cfg.messageHint}
      >
        <TextArea
          name="message"
          value={values.message ?? ""}
          onChange={set("message")}
          error={errors.message}
        />
      </Field>

      <Field label="How did you hear about us?" name="heard" required error={errors.heard}>
        <SelectMenu
          name="heard"
          value={values.heard ?? ""}
          onChange={(v) => {
            setValues((prev) => ({ ...prev, heard: v }));
            setErrors((prev) => {
              if (!prev.heard) return prev;
              const next = { ...prev };
              delete next.heard;
              return next;
            });
          }}
          options={HEARD_OPTIONS}
          error={errors.heard}
        />
      </Field>


      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex h-[3.25rem] items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-7 font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a8f48]"
        >
          <WhatsAppIcon size={19} />
          {cfg.submit}
        </button>
        <p className="text-[0.8rem] leading-relaxed text-quiet">
          Your details open in WhatsApp so you can send them in one tap. See our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
