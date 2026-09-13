"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

interface JourneyStep {
  step: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    title: "School",
    description: "Build foundational skills.",
  },
  {
    step: "02",
    title: "Skill Development",
    description: "Strengthen capabilities for the future.",
  },
  {
    step: "03",
    title: "College",
    description: "Develop deeper expertise.",
  },
  {
    step: "04",
    title: "Industry",
    description: "Connect with real-world requirements.",
  },
  {
    step: "05",
    title: "Opportunity",
    description: "Build stronger pathways to what comes next.",
    isHighlight: true,
  },
];

export function ContinuousJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-neutral-50/70 py-20 sm:py-28 lg:py-32 border-b border-neutral-200/70"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-18">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-2xs">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              A CONTINUOUS JOURNEY
            </span>
          </div>

          {/* Headline */}
          <h2
            id="journey-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy leading-tight tracking-tight"
          >
            From education to opportunity.
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            A connected journey for a future-ready generation.
          </p>
        </div>

        {/* 5-Step Progression Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop & Tablet: Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 items-stretch">
            {JOURNEY_STEPS.map((item, index) => {
              const isLast = index === JOURNEY_STEPS.length - 1;
              return (
                <div key={item.step} className="relative flex flex-col h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`h-full rounded-xl p-5 flex flex-col justify-between space-y-4 transition-all duration-200 ${
                      item.isHighlight
                        ? "bg-brand-blue text-white shadow-[0_8px_20px_-4px_rgba(29,99,255,0.28)]"
                        : "bg-white text-brand-navy border border-neutral-200/90 shadow-2xs hover:border-brand-blue/35"
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-heading font-bold px-2 py-0.5 rounded ${
                          item.isHighlight
                            ? "bg-white/20 text-white"
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Copy */}
                    <div className="space-y-1.5">
                      <h3
                        className={`font-heading font-bold text-base tracking-tight ${
                          item.isHighlight ? "text-white" : "text-brand-navy"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`font-sans text-xs leading-relaxed ${
                          item.isHighlight
                            ? "text-white/90"
                            : "text-neutral-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Desktop connector arrow */}
                  {!isLast && (
                    <div
                      className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-neutral-300 pointer-events-none"
                      aria-hidden="true"
                    >
                      <ArrowRight className="size-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
