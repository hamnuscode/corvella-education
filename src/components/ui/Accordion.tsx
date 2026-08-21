"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

export type QA = { q: string; a: string };

export function Accordion({ items, className = "" }: { items: readonly QA[]; className?: string }) {
  const [open, setOpen] = React.useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className={`divide-y divide-mist border-y border-mist ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-brand"
              >
                <span className="font-display text-[1.12rem] font-bold leading-snug text-ink sm:text-[1.25rem]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen ? "rotate-45 border-brand bg-brand text-paper" : "border-mist text-quiet"
                  }`}
                >
                  <Plus size={16} strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 pr-10 text-[0.97rem] leading-relaxed text-quiet">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
