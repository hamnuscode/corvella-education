"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";

const inputBase =
  "w-full rounded-xl border bg-paper px-4 text-[0.97rem] text-ink transition-colors placeholder:text-quiet/55 focus:border-brand";

export function Field({
  label,
  name,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="label text-quiet">
        {label}
        {required ? <span className="text-brand"> *</span> : <span className="font-normal text-quiet"> (optional)</span>}
      </label>
      {children}
      {hint && !error ? <p className="text-[0.8rem] leading-relaxed text-quiet">{hint}</p> : null}
      {error ? (
        <p id={`${name}-error`} className="flex items-center gap-1.5 text-[0.8rem] font-medium text-[#a8202f]">
          <AlertCircle size={13} aria-hidden />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput({
  name,
  error,
  ...rest
}: { name: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={name}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`${inputBase} h-12 ${error ? "border-[#a8202f]" : "border-mist"}`}
      {...rest}
    />
  );
}

export function TextArea({
  name,
  error,
  ...rest
}: { name: string; error?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      id={name}
      name={name}
      rows={5}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`${inputBase} resize-y py-3 leading-relaxed ${error ? "border-[#a8202f]" : "border-mist"}`}
      {...rest}
    />
  );
}
