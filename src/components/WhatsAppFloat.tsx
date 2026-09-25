"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

/** Quick contact, available on every page. */
export function WhatsAppFloat() {
  const reduce = useReducedMotion();
  const href = whatsappLink(
    `Hello ${site.name}, I would like to ask about studying at a UK university.`,
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-5 right-5 z-[55] flex items-center gap-0 overflow-hidden rounded-full bg-[#1fa855] px-4 text-paper shadow-[0_12px_30px_-10px_rgb(31_168_85/0.75)] transition-[gap,background-color] duration-300 hover:bg-[#1a8f48] sm:bottom-7 sm:right-7"
      style={{ height: "3.5rem" }}
    >
      {reduce ? null : (
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#1fa855] opacity-25 [animation-duration:2.8s]"
        />
      )}
      <span className="relative grid place-items-center">
        <WhatsAppIcon size={26} />
      </span>
      <span className="relative max-w-0 whitespace-nowrap text-[0.92rem] font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:pl-2.5 group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
