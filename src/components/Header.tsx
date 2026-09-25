"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { CorvellaLogo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 40, restDelta: 0.001 });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const marker = hovered ?? nav.find((i) => isActive(i.href))?.href ?? null;

  return (
    <>
      {/*
        The blur lives on an inner layer, never on <header>. An element with
        backdrop-filter becomes the containing block for fixed-position
        descendants, which is what previously trapped the mobile panel inside
        the header once the page was scrolled.
      */}
      <header className="sticky top-0 z-50">
        <div
          aria-hidden
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled
              ? "border-b border-mist bg-paper/85 [backdrop-filter:blur(20px)_saturate(160%)]"
              : "border-b border-transparent bg-paper"
          }`}
        />

        {/* How far down the page you are, drawn as a hairline under the bar. */}
        <motion.div
          aria-hidden
          style={{ scaleX: reduce ? 0 : progress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-brand via-steel to-amber"
        />

        <Container
          className={`relative flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-[4.25rem] lg:h-[4.5rem]" : "h-[4.5rem] lg:h-[5.25rem]"
          }`}
        >
          <Link href="/" aria-label={`${site.name} home`} className="group shrink-0 rounded-lg">
            <CorvellaLogo
              markClassName={`transition-all duration-300 group-hover:rotate-[-8deg] ${
                scrolled ? "h-8 w-8 lg:h-9 lg:w-9" : "h-9 w-9 lg:h-10 lg:w-10"
              }`}
            />
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHovered(item.href)}
                  onFocus={() => setHovered(item.href)}
                  className={`relative rounded-full px-3.5 py-2 text-[0.93rem] font-medium transition-colors duration-200 ${
                    active || hovered === item.href ? "text-ink" : "text-quiet"
                  }`}
                >
                  {marker === item.href ? (
                    <motion.span
                      layoutId="nav-marker"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-brand-100"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 480, damping: 38, mass: 0.7 }
                      }
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden
                      className="absolute inset-x-3.5 -bottom-[3px] h-[2.5px] rounded-full bg-brand"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 34 }
                      }
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/apply"
              className="group relative hidden h-10 items-center gap-2 overflow-hidden rounded-full bg-ink px-5 text-[0.88rem] font-semibold text-paper transition-colors duration-200 hover:bg-brand sm:inline-flex"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 transition-opacity duration-200 group-hover:animate-[sweep_0.9s_ease-out] group-hover:opacity-100"
              />
              <span className="relative">Check eligibility</span>
              <ArrowRight
                size={15}
                aria-hidden
                className="relative transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-11 w-11 place-items-center rounded-xl border border-mist bg-paper text-ink transition-colors hover:bg-paper-2 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={reduce ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* Rendered outside <header> so no blurred ancestor can capture it. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-[4.25rem] lg:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 dot-field opacity-60" />
            <Container className="relative flex min-h-full flex-col py-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-mist py-4 font-display text-2xl font-extrabold tracking-tight ${
                        isActive(item.href) ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight size={20} className="text-quiet" aria-hidden />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-brand font-semibold text-paper"
                >
                  Check your eligibility
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-[3.25rem] w-full items-center justify-center rounded-2xl border border-mist bg-paper font-semibold text-ink"
                >
                  Talk to an adviser
                </Link>
              </div>

              <p className="label mt-auto pt-10 text-quiet">Free advice for every student</p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
