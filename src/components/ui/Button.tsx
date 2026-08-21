import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary" | "ghost" | "amber" | "glass" | "glassGhost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-paper shadow-[0_10px_28px_-14px_rgb(10_107_92/0.9)] hover:bg-brand-600 hover:shadow-[0_16px_34px_-14px_rgb(10_107_92/0.95)]",
  secondary:
    "border border-mist bg-paper text-ink hover:border-ink/25 hover:bg-white hover:shadow-[0_10px_26px_-18px_rgb(11_38_33/0.6)]",
  ghost: "text-ink hover:bg-ink/[0.06]",
  amber:
    "bg-amber text-ink shadow-[0_10px_28px_-14px_rgb(242_169_59/0.85)] hover:brightness-[1.05] hover:shadow-[0_16px_34px_-14px_rgb(242_169_59/0.95)]",
  glass: "glass text-paper hover:border-white/40",
  glassGhost:
    "border border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 rounded-full px-4 text-[0.85rem]",
  md: "h-11 rounded-full px-5.5 text-[0.94rem]",
  lg: "h-[3.4rem] rounded-full px-8 text-[1rem]",
};

/** A light sweep that crosses the button once on hover. */
function Sweep() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 transition-opacity duration-150 group-hover:animate-[sweep_0.85s_ease-out] group-hover:opacity-100"
    />
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  sweep?: boolean;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  sweep = true,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {sweep ? <Sweep /> : null}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  sweep = true,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {sweep ? <Sweep /> : null}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
