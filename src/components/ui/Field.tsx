"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";

const inputBase =
  "w-full rounded-xl border bg-paper px-4 text-[0.97rem] text-ink transition-colors placeholder:text-quiet/55 focus:border-iris";

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
        {required ? <span className="text-iris"> *</span> : <span className="font-normal text-quiet"> (optional)</span>}
      </label>
      {children}
      {hint && !error ? <p className="text-[0.8rem] leading-relaxed text-quiet">{hint}</p> : null}
      {error ? (
        <p id={`${name}-error`} className="flex items-center gap-1.5 text-[0.8rem] font-medium text-[#b0203f]">
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
      className={`${inputBase} h-12 ${error ? "border-[#b0203f]" : "border-mist"}`}
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
      className={`${inputBase} resize-y py-3 leading-relaxed ${error ? "border-[#b0203f]" : "border-mist"}`}
      {...rest}
    />
  );
}

export function Select({
  name,
  error,
  children,
  ...rest
}: { name: string; error?: string } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      id={name}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`${inputBase} h-12 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%235a5580" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>')] bg-[length:18px] bg-[right_0.9rem_center] bg-no-repeat pr-11 ${
        error ? "border-[#b0203f]" : "border-mist"
      }`}
      {...rest}
    >
      {children}
    </select>
  );
}
