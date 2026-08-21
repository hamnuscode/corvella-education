import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary" | "ghost" | "beacon";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-[transform,background-color,color,box-shadow] duration-200 ease-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-iris text-paper hover:bg-iris-600 shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-12px_rgba(61,47,191,0.9)]",
  secondary:
    "bg-paper text-ink border border-mist hover:border-ink/30 hover:bg-white",
  ghost: "text-ink hover:bg-ink/[0.06]",
  beacon: "bg-beacon text-ink hover:brightness-[1.06]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 rounded-lg px-3.5 text-[0.83rem]",
  md: "h-11 rounded-xl px-5 text-[0.94rem]",
  lg: "h-[3.25rem] rounded-2xl px-7 text-[1rem]",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
