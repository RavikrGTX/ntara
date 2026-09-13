"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function PartnerHero() {
  return (
    <section
      id="partner-hero"
      aria-labelledby="partner-hero-heading"
      className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-100"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-brand-blue/[0.035] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-brand-teal/[0.025] blur-[140px]" />
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-[2px] bg-brand-teal rounded-full"
                aria-hidden="true"
              />
              <span className="font-heading font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase text-neutral-500">
                PARTNER WITH NTARA
              </span>
            </div>

            {/* Dominant Headline */}
            <h1
              id="partner-hero-heading"
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] text-brand-navy leading-[1.12] tracking-tight"
            >
              Build the{" "}
              <span className="text-brand-blue">future-ready generation</span>{" "}
              together.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
              Partner with NTARA to connect education, skills, government and
              industry.
            </p>

            {/* Primary Action */}
            <div className="pt-2">
              <Link
                href="#partner-form"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_4px_16px_rgba(29,99,255,0.22)] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Single Authentic Realistic Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Subtle accent halo */}
              <div
                className="absolute -inset-2 sm:-inset-3 bg-linear-to-tr from-brand-blue/[0.04] to-brand-teal/[0.04] rounded-3xl -z-10 blur-sm pointer-events-none"
                aria-hidden="true"
              />

              {/* Clean rounded frame */}
              <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_16px_40px_-12px_rgba(11,19,43,0.09)] bg-neutral-100">
                <Image
                  src="/images/partner-hero.jpg"
                  alt="Indian education leaders and young professionals collaborating in a modern institution"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
