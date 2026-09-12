import * as React from "react";
import { ArrowRight, ArrowDown, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";

interface Stage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  state: "foundation" | "development" | "readiness";
  indicator: string;
}

const STAGES: Stage[] = [
  {
    step: "01",
    title: "LEARNING",
    subtitle: "Education Foundation",
    description: "Knowledge gained through education and coursework.",
    state: "foundation",
    indicator: "Curriculum & Academics",
  },
  {
    step: "02",
    title: "SKILLS",
    subtitle: "Demonstrated Capability",
    description: "Capabilities that can be understood, verified, and developed.",
    state: "development",
    indicator: "Measurable Competence",
  },
  {
    step: "03",
    title: "EMPLOYABILITY",
    subtitle: "Real-World Readiness",
    description: "Readiness for industry opportunities and the evolving workplace.",
    state: "readiness",
    indicator: "Economic Alignment",
  },
];

export function Challenge() {
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-heading"
      className="relative overflow-hidden bg-neutral-50/80 border-b border-neutral-200/80 py-16 sm:py-24 lg:py-32"
    >
      <Container size="default">
        {/* Section Header: The Problem Statement */}
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 shadow-xs">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              The Challenge
            </span>
          </div>

          {/* Headline */}
          <h2
            id="challenge-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.12] tracking-tight"
          >
            Learning is not the same as readiness.
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Education builds knowledge. The next challenge is understanding which
            skills learners have, which skills they need, and how those skills
            connect to real-world opportunities.
          </p>
        </div>

        {/* Visual Journey: LEARNING → SKILLS → EMPLOYABILITY */}
        <div className="mt-14 sm:mt-20">
          {/* Desktop / Tablet Horizontal Progression (lg:grid) */}
          <div className="hidden lg:grid grid-cols-3 gap-8 relative items-stretch">
            {STAGES.map((stage, idx) => (
              <div key={stage.step} className="relative flex flex-col justify-between">
                {/* Stage Surface Panel */}
                <div className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_2px_12px_-4px_rgba(11,19,43,0.04)] h-full flex flex-col justify-between transition-all duration-200 hover:border-neutral-300">
                  {/* Top metadata */}
                  <div>
                    <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                      <span className="font-heading font-bold text-sm tracking-wider text-neutral-400">
                        STAGE {stage.step}
                      </span>
                      <span className="text-[0.7rem] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                        {stage.indicator}
                      </span>
                    </div>

                    {/* Stage Name */}
                    <div className="pt-6">
                      <h3 className="font-heading font-extrabold text-2xl tracking-tight text-brand-navy">
                        {stage.title}
                      </h3>
                      <div className="text-xs font-semibold text-brand-blue font-heading tracking-wide uppercase mt-1">
                        {stage.subtitle}
                      </div>

                      <p className="text-sm font-sans text-neutral-600 leading-relaxed mt-3">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Stage Visual Indicator Bar */}
                  <div className="pt-6 mt-6 border-t border-neutral-100">
                    <div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          stage.state === "foundation"
                            ? "w-1/3 bg-neutral-300"
                            : stage.state === "development"
                            ? "w-2/3 bg-brand-blue"
                            : "w-full bg-brand-teal"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* The "Gap" Connector between stages */}
                {idx < STAGES.length - 1 && (
                  <div
                    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="size-9 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-400">
                      <ArrowRight className="size-4 text-brand-blue" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Stacked Progression */}
          <div className="lg:hidden flex flex-col space-y-6">
            {STAGES.map((stage, idx) => (
              <div key={stage.step} className="relative flex flex-col">
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="font-heading font-bold text-xs tracking-wider text-neutral-400">
                      STAGE {stage.step}
                    </span>
                    <span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      {stage.indicator}
                    </span>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-heading font-bold text-xl tracking-tight text-brand-navy">
                      {stage.title}
                    </h3>
                    <div className="text-xs font-semibold text-brand-blue font-heading tracking-wide uppercase mt-0.5">
                      {stage.subtitle}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mt-2 font-sans">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Mobile downward connector between stages */}
                {idx < STAGES.length - 1 && (
                  <div className="flex justify-center py-2 text-neutral-400" aria-hidden="true">
                    <div className="size-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                      <ArrowDown className="size-3.5 text-brand-blue" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* The Bridge / NTARA Role Introduction (Subtle transition to Platform) */}
          <div className="mt-10 sm:mt-14 rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-[0_2px_12px_-4px_rgba(11,19,43,0.03)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="size-9 rounded-xl bg-brand-blue-subtle text-brand-blue flex items-center justify-center shrink-0">
                  <Compass className="size-4.5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold font-heading text-brand-navy">
                    NTARA helps make the journey visible.
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
                    Bridging the gaps between classroom learning, verified skill
                    capabilities, and industry demand through AI-powered intelligence.
                  </p>
                </div>
              </div>

              <div className="shrink-0 pt-2 md:pt-0">
                <span className="text-xs font-semibold text-brand-blue tracking-wide uppercase font-heading inline-flex items-center gap-1">
                  Skill Intelligence Layer
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
