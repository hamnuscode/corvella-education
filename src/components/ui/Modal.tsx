"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

const noop = () => () => {};
/** False during render on the server, true once hydrated. */
function useMounted() {
  return React.useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mounted = useMounted();

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the dialog while it is open.
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const frame = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("input, button")?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  /*
   * Rendered into <body>. Sections on this site carry `isolate` and
   * `overflow-clip`, which put a dialog rendered in place inside their stacking
   * context and inside their clip: it drew underneath the sticky header and had
   * its top cut off. A portal takes it out of both.
   */
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[70] overflow-y-auto">
          <motion.div
            className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          {/* min-h-full inside the scroller centres the dialog when it fits and
              lets it scroll from the very top when it does not. */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={title}
              aria-describedby={description ? "modal-description" : undefined}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[34rem] rounded-3xl border border-mist bg-paper p-6 shadow-[0_40px_90px_-30px_rgb(16_24_35/0.55)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <h2 className="display-md text-ink">{title}</h2>
                  {description ? (
                    <p
                      id="modal-description"
                      className="mt-3 text-[0.95rem] leading-relaxed text-quiet"
                    >
                      {description}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-mist bg-paper text-quiet transition-colors hover:bg-paper-2 hover:text-ink"
                >
                  <X size={18} aria-hidden />
                </button>
              </div>

              <div className="mt-7">{children}</div>
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
