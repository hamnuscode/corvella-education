"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { Field, TextArea, TextInput } from "@/components/ui/Field";
import { SelectMenu } from "@/components/ui/SelectMenu";
import { submitForm, FORM_ENDPOINT } from "@/lib/submitForm";
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
  { name: string; submit: string; success: string; messageLabel: string; messageHint: string }
> = {
  apply: {
    name: "application-enquiry",
    submit: "Send my details",
    success:
      "Thanks. Your details are with us. An adviser will come back to you within [X] working days with your options.",
    messageLabel: "What do you want to study, and where are you now?",
    messageHint: "A few lines is plenty. Tell us your subject, your work situation and when you want to start.",
  },
  contact: {
    name: "general-contact",
    submit: "Send message",
    success: "Thanks. Your message is with us and we will reply within [X] working days.",
    messageLabel: "Your message",
    messageHint: "Tell us what you need and we will point you to the right person.",
  },
  referral: {
    name: "consultant-referral",
    submit: "Send referral enquiry",
    success: "Thanks. We will be in touch about referring students to Corvella.",
    messageLabel: "Tell us about the students you work with",
    messageHint: "Who do you already talk to, and roughly how many people would you expect to refer?",
  },
};

export function EnquiryForm({ variant = "apply" }: { variant?: Variant }) {
  const cfg = config[variant];
  const reduce = useReducedMotion();
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [state, setState] = React.useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = React.useState("");

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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values, rules, labels);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }
    setState("sending");
    setServerError("");
    const res = await submitForm(cfg.name, values);
    if (res.ok) {
      setState("done");
    } else {
      setState("error");
      setServerError(res.message);
    }
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
        <span aria-hidden className="grid h-12 w-12 place-items-center rounded-full bg-brand text-paper">
          <Check size={22} strokeWidth={2.6} />
        </span>
        <h3 className="display-md mt-6 text-ink">Sent.</h3>
        <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-ink/70">{cfg.success}</p>
        {!FORM_ENDPOINT ? (
          <p className="mt-6 rounded-xl bg-paper px-4 py-3 text-[0.8rem] leading-relaxed text-quiet">
            Demo mode. Nothing was actually sent. Set FORM_ENDPOINT in src/lib/submitForm.ts to
            connect this form.
          </p>
        ) : null}
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
            placeholder="Amina"
          />
        </Field>
        <Field label="Last name" name="lastName" required error={errors.lastName}>
          <TextInput
            name="lastName"
            autoComplete="family-name"
            value={values.lastName ?? ""}
            onChange={set("lastName")}
            error={errors.lastName}
            placeholder="Hussain"
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
            placeholder="you@example.com"
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

      {serverError ? (
        <p role="alert" className="rounded-xl bg-[#fbe9ea] px-4 py-3 text-[0.88rem] font-medium text-[#a8202f]">
          {serverError}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-brand px-7 font-semibold text-paper transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {state === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            <>
              {cfg.submit}
              <Send size={17} aria-hidden />
            </>
          )}
        </button>
        <p className="text-[0.8rem] leading-relaxed text-quiet">
          We use your details only to answer your enquiry. See our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
            privacy policy
          </a>
          .
        </p>
      </div>

      {!FORM_ENDPOINT ? (
        <p className="rounded-xl border border-dashed border-mist bg-paper-2 px-4 py-3 text-[0.8rem] leading-relaxed text-quiet">
          <strong className="font-semibold text-ink">Demo endpoint.</strong> This form validates and
          shows a success state, but does not send anywhere yet. Connect it in
          <code className="mx-1 rounded bg-paper px-1.5 py-0.5 font-mono text-[0.75rem]">src/lib/submitForm.ts</code>.
        </p>
      ) : null}
    </form>
  );
}
