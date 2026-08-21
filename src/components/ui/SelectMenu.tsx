"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

/**
 * A themed listbox. The native <select> popup cannot be styled, so this is a
 * custom control that keeps the keyboard behaviour people expect: arrows to
 * move, Home and End to jump, Enter or Space to choose, Escape to close, and
 * type ahead on printable keys.
 */
export function SelectMenu({
  name,
  value,
  onChange,
  options,
  placeholder = "Choose one",
  error,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  error?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const typed = React.useRef({ query: "", at: 0 });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({
      block: "nearest",
    });
  }, [open, active]);

  const choose = (i: number) => {
    onChange(options[i]);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
      e.preventDefault();
      setActive(Math.max(0, options.indexOf(value)));
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Tab") {
      setOpen(false);
    } else if (e.key.length === 1) {
      const now = Date.now();
      typed.current.query = now - typed.current.at > 700 ? e.key : typed.current.query + e.key;
      typed.current.at = now;
      const hit = options.findIndex((o) =>
        o.toLowerCase().startsWith(typed.current.query.toLowerCase()),
      );
      if (hit >= 0) setActive(hit);
    }
  };

  const listId = `${name}-listbox`;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={name}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onClick={() => {
          setActive(Math.max(0, options.indexOf(value)));
          setOpen((v) => !v);
        }}
        onKeyDown={onKeyDown}
        className={`flex h-12 w-full items-center justify-between gap-3 rounded-xl border bg-paper px-4 text-left text-[0.97rem] transition-colors ${
          error ? "border-[#a8202f]" : open ? "border-brand" : "border-mist hover:border-quiet/50"
        } ${value ? "text-ink" : "text-quiet/70"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          size={17}
          aria-hidden
          className={`shrink-0 text-quiet transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label="How did you hear about us"
            tabIndex={-1}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.985 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-64 origin-top overflow-y-auto rounded-xl border border-mist bg-paper p-1.5 shadow-[0_24px_50px_-24px_rgb(11_38_33/0.45)]"
          >
            {options.map((option, i) => {
              const selected = option === value;
              return (
                <li key={option} role="option" aria-selected={selected} data-active={i === active}>
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(i)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[0.92rem] transition-colors ${
                      i === active ? "bg-brand-100 text-ink" : "text-quiet"
                    }`}
                  >
                    <span>{option}</span>
                    {selected ? (
                      <Check size={15} className="shrink-0 text-brand" aria-hidden />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
