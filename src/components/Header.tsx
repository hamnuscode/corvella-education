"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CorvellaLogo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

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

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-mist bg-paper/88 backdrop-blur-xl" : "border-b border-transparent bg-paper"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-[5rem]">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0 rounded-lg">
          <CorvellaLogo markClassName="h-9 w-9 lg:h-10 lg:w-10" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-[0.93rem] font-medium transition-colors ${
                  active ? "text-ink" : "text-quiet hover:text-ink"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-iris"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/apply" size="sm" className="hidden sm:inline-flex">
            Check your eligibility
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-mist bg-paper text-ink transition-colors hover:bg-paper-2 lg:hidden"
          >
            {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-50 overflow-y-auto border-t border-mist bg-paper lg:hidden"
          >
            <Container className="flex min-h-full flex-col py-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-mist py-4 font-display text-2xl font-bold text-ink"
                    >
                      {item.label}
                      <ArrowUpRight size={20} className="text-quiet" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href="/apply" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Check your eligibility
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Talk to an adviser
                </ButtonLink>
              </div>

              <p className="label mt-auto pt-10 text-quiet">
                Partner agency of FBA UK Ltd
              </p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
