"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const STEPS = [
  {
    step: "01",
    title: "CAPTURE LEARNING",
    description: "Understand what students learn across school and college.",
    highlight: false,
  },
  {
    step: "02",
    title: "BUILD READINESS",
    description:
      "Develop and understand skills, capabilities and future readiness.",
    highlight: false,
  },
  {
    step: "03",
    title: "UNLOCK OPPORTUNITY",
    description:
      "Create stronger pathways between skills, education and opportunity.",
    highlight: true,
  },
];

export function HowSkillIntelligenceWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-neutral-50/70 py-16 sm:py-24 lg:py-28 border-b border-neutral-200/70"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-2xs">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              HOW SKILL INTELLIGENCE WORKS
            </span>
          </div>

          {/* Headline */}
          <h2
            id="how-it-works-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy leading-tight tracking-tight"
          >
            From learning to opportunity.
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            Helping transform learning into stronger readiness for what comes next.
          </p>
        </div>

        {/* 3 Horizontal Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-200 ${
                item.highlight
                  ? "bg-brand-blue text-white shadow-[0_12px_28px_-6px_rgba(29,99,255,0.28)]"
                  : "bg-white text-brand-navy border border-neutral-200/90 shadow-2xs hover:border-brand-blue/35 hover:shadow-card"
              }`}
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center justify-center size-8 rounded-lg font-heading font-bold text-xs ${
                    item.highlight
                      ? "bg-white/20 text-white"
                      : "bg-brand-blue text-white"
                  }`}
                >
                  {item.step}
                </span>
              </div>

              {/* Text Group */}
              <div className="space-y-2">
                <h3
                  className={`font-heading font-bold text-base sm:text-lg tracking-tight ${
                    item.highlight ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-sans text-sm leading-relaxed ${
                    item.highlight ? "text-white/90" : "text-neutral-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
