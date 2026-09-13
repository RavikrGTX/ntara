"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const AUDIENCE_CARDS = [
  {
    title: "Students",
    description: "Build skills. Grow. Prepare.",
    icon: GraduationCap,
  },
  {
    title: "Institutions",
    description: "Enable. Guide. Scale.",
    icon: Building2,
  },
  {
    title: "Government",
    description: "Plan. Implement. Impact.",
    icon: Landmark,
  },
  {
    title: "Industry",
    description: "Engage. Hire. Innovate.",
    icon: Briefcase,
  },
];

export function PlatformHero() {
  return (
    <section
      id="platform-hero"
      aria-labelledby="platform-hero-heading"
      className="relative overflow-hidden bg-white pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      {/* Soft ambient atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[450px] h-[450px] rounded-full bg-brand-teal/[0.02] blur-[130px]" />
      </div>

      <Container size="default">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 sm:space-y-7">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-subtle border border-brand-blue/20"
          >
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-brand-blue">
              AI-POWERED SKILL INTELLIGENCE PLATFORM
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="platform-hero-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.65rem] xl:text-[4rem] text-brand-navy leading-[1.1] tracking-tight"
          >
            Connecting learning to{" "}
            <span className="text-brand-blue">real opportunity.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl"
          >
            NTARA connects students, educational institutions, government and
            industry to build a future-ready generation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            {/* Primary CTA */}
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

            {/* Secondary CTA */}
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm sm:text-base font-semibold text-brand-navy bg-white hover:bg-neutral-50 border border-neutral-300 shadow-2xs hover:border-neutral-400 transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 group"
            >
              <span>Explore the Platform</span>
              <ArrowRight
                className="ml-2 size-4 text-neutral-500 group-hover:text-brand-navy group-hover:translate-x-1 transition-all duration-150 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        {/* Four Connected Audience Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-18 lg:mt-20 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {AUDIENCE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-white rounded-xl border border-neutral-200/90 p-5 sm:p-6 text-center flex flex-col items-center space-y-2.5 transition-all duration-200 hover:border-brand-blue/40 hover:shadow-card"
                >
                  <div
                    className="size-10 rounded-lg bg-brand-blue-subtle text-brand-blue flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </div>
                  <h2 className="font-heading font-bold text-base sm:text-lg text-brand-navy tracking-tight">
                    {card.title}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
