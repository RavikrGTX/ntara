"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

const FOUNDATIONAL_SKILLS = [
  "Life Skills",
  "Communication & Leadership",
  "Digital Literacy",
  "Foundational AI Awareness",
  "Physical Fitness & Health Awareness",
  "Mental Well-being & Emotional Strength",
  "Career Readiness",
];

const ADVANCED_SKILLS = [
  "AI & Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Full Stack Development",
  "Software Testing",
  "Business Intelligence",
  "Data Engineering",
  "Finance & Analytics",
  "Emerging Technologies",
];

export function SkillsThatMatter() {
  const [activeTab, setActiveTab] = React.useState<"foundational" | "advanced">(
    "foundational"
  );

  const skills =
    activeTab === "foundational" ? FOUNDATIONAL_SKILLS : ADVANCED_SKILLS;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-subtle border border-brand-blue/20">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-brand-blue">
              SKILLS THAT MATTER
            </span>
          </div>

          {/* Headline */}
          <h2
            id="skills-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy leading-tight tracking-tight"
          >
            Building skills for what&apos;s next.
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            NTARA works across foundational capabilities and advanced technical
            skills.
          </p>
        </div>

        {/* Pill-Style Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            role="tablist"
            aria-label="Skill Categories"
            className="inline-flex p-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-2xs"
          >
            <button
              role="tab"
              id="tab-foundational"
              aria-controls="panel-foundational"
              aria-selected={activeTab === "foundational"}
              tabIndex={activeTab === "foundational" ? 0 : -1}
              onClick={() => setActiveTab("foundational")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                activeTab === "foundational"
                  ? "bg-brand-blue text-white shadow-xs"
                  : "text-neutral-600 hover:text-brand-navy"
              }`}
            >
              Foundational Skills
            </button>

            <button
              role="tab"
              id="tab-advanced"
              aria-controls="panel-advanced"
              aria-selected={activeTab === "advanced"}
              tabIndex={activeTab === "advanced" ? 0 : -1}
              onClick={() => setActiveTab("advanced")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                activeTab === "advanced"
                  ? "bg-brand-blue text-white shadow-xs"
                  : "text-neutral-600 hover:text-brand-navy"
              }`}
            >
              Advanced &amp; Technical Skills
            </button>
          </div>
        </div>

        {/* Skill Tiles Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:border-brand-blue/40 transition-colors duration-150"
                >
                  <span
                    className="size-2 rounded-full bg-brand-blue shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-heading font-medium text-xs sm:text-sm text-brand-navy tracking-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
