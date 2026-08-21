"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

/**
 * Scroll entrance. Adapted from the React Bits "AnimatedContent" pattern,
 * restyled to the Corvella easing and reduced-motion rules.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  if (reduce) return <Comp className={className}>{children}</Comp>;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

/**
 * Word by word headline reveal. Adapted from React Bits "SplitText".
 */
export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.78, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
