"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function PlatformFinalCta() {
  return (
    <section
      id="platform-cta"
      aria-labelledby="platform-cta-heading"
      className="relative overflow-hidden bg-brand-blue-subtle/70 py-16 sm:py-20 lg:py-24 border-t border-brand-blue/15"
    >
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-brand-blue/20">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-brand-blue">
              BUILD WHAT&apos;S NEXT
            </span>
          </div>

          {/* Headline */}
          <h2
            id="platform-cta-heading"
            className="font-heading font-bold sm:font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-brand-navy leading-tight tracking-tight"
          >
            Let&apos;s build a future-ready India together.
          </h2>

          {/* Primary Action Button */}
          <div className="pt-2">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_4px_16px_rgba(29,99,255,0.22)] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 group"
            >
              <span>Partner with NTARA</span>
              <ArrowRight
                className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
