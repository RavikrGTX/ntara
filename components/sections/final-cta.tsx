"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36 border-t border-neutral-200/70"
    >
      {/* Calm, ambient atmospheric accents (very subtle institutional depth) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft, low-opacity curved glow on the right inspired by reference */}
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-brand-blue/[0.035] blur-[120px]" />
        {/* Extremely faint teal accent wash near bottom edge */}
        <div className="absolute -bottom-24 left-1/3 w-[420px] h-[420px] rounded-full bg-brand-teal/[0.02] blur-[140px]" />
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Closing Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6 sm:space-y-7"
          >
            {/* Eyebrow with subtle teal accent line */}
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-[2px] bg-brand-teal rounded-full"
                aria-hidden="true"
              />
              <span className="font-heading font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase text-neutral-500">
                READY TO BUILD WHAT&apos;S NEXT?
              </span>
            </div>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="font-heading font-bold sm:font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3rem] text-brand-navy leading-[1.14] tracking-tight"
            >
              Building India&apos;s{" "}
              <span className="text-brand-blue">future-ready generation</span>{" "}
              starts with collaboration.
            </h2>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              Connect with NTARA to explore partnerships across education,
              government and industry.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 sm:px-7 rounded-xl sm:rounded-full text-sm sm:text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_4px_16px_rgba(29,99,255,0.22)] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 group"
              >
                <span>Partner with NTARA</span>
                <ArrowRight
                  className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150"
                  aria-hidden="true"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/platform"
                className="inline-flex items-center justify-center h-12 px-6 sm:px-7 rounded-xl sm:rounded-full text-sm sm:text-base font-semibold text-brand-navy bg-white hover:bg-neutral-50/80 border border-neutral-300 shadow-2xs hover:border-neutral-400 transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight
                  className="ml-2 size-4 text-neutral-500 group-hover:text-brand-navy group-hover:translate-x-1 transition-all duration-150"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Single High-Quality Realistic Institutional Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl lg:max-w-none">
              {/* Subtle backframe glow / halo accent */}
              <div
                className="absolute -inset-2 sm:-inset-3 bg-linear-to-tr from-brand-blue/[0.04] to-brand-teal/[0.04] rounded-3xl -z-10 blur-sm pointer-events-none"
                aria-hidden="true"
              />

              {/* Clean rounded image frame with very subtle styling */}
              <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_16px_40px_-12px_rgba(11,19,43,0.09)] bg-neutral-100">
                <Image
                  src="/images/final-cta-students.jpg"
                  alt="Indian students collaborating in a contemporary learning and technology environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
