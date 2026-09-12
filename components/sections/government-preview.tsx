import * as React from "react";
import Link from "next/link";
import {
  Landmark,
  MapPin,
  School,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { IndiaMap } from "@/components/ui/india-map";

interface FlowStep {
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: "blue" | "teal";
  isCenter?: boolean;
}

const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "Government",
    subtitle: "Policy & Scale",
    icon: Landmark,
    accent: "blue",
  },
  {
    step: "02",
    title: "Districts",
    subtitle: "Local Implementation",
    icon: MapPin,
    accent: "teal",
  },
  {
    step: "03",
    title: "Schools",
    subtitle: "Program Delivery",
    icon: School,
    accent: "blue",
    isCenter: true,
  },
  {
    step: "04",
    title: "Students",
    subtitle: "Assessment & Development",
    icon: Users,
    accent: "teal",
  },
  {
    step: "05",
    title: "Outcomes",
    subtitle: "Measurement & Insight",
    icon: BarChart3,
    accent: "blue",
  },
];

export function GovernmentPreview() {
  return (
    <section
      id="government-preview"
      aria-labelledby="government-preview-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-neutral-200/70"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/70 shadow-xs">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              For Government
            </span>
          </div>

          {/* Headline */}
          <h2
            id="government-preview-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.12] tracking-tight"
          >
            From policy to{" "}
            <span className="text-brand-blue">measurable outcomes.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            NTARA enables state and district governments to implement skill
            development programs at scale with centralized analytics and
            transparent, measurable impact.
          </p>
        </div>

        {/* 5-Step Journey: Desktop Horizontal Flow */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop Layout (hidden on mobile, flex on md/lg) */}
          <div className="hidden md:flex items-center justify-between relative max-w-5xl mx-auto">
            {/* Background Horizontal Hairline Connecting Line */}
            <div
              className="absolute top-[44px] left-[60px] right-[60px] h-px bg-neutral-200 -z-0"
              aria-hidden="true"
            />

            {FLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isBlue = item.accent === "blue";
              const isCenter = item.isCenter;

              return (
                <div
                  key={item.step}
                  className="relative z-10 flex flex-col items-center text-center flex-1 group"
                >
                  {/* PERFECT INDIA MAP SILHOUETTE (Positioned specifically behind Stage 03 - Schools) */}
                  {isCenter && (
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[340px] h-[390px] lg:w-[400px] lg:h-[460px] pointer-events-none -z-10 select-none flex items-center justify-center opacity-[0.18] transition-opacity duration-300 group-hover:opacity-[0.26] text-brand-blue"
                      aria-hidden="true"
                    >
                      <IndiaMap className="w-full h-full text-brand-blue" />
                    </div>
                  )}

                  {/* Circular Node Housing */}
                  <div className="relative flex items-center justify-center">
                    {/* Outer Concentric Ring */}
                    <div
                      className={`rounded-full p-2.5 transition-all duration-300 ${
                        isCenter
                          ? "bg-brand-blue/5 ring-1 ring-brand-blue/25 scale-110 shadow-[0_4px_24px_-4px_rgba(29,99,255,0.18)]"
                          : isBlue
                          ? "bg-brand-blue/[0.04] ring-1 ring-brand-blue/15"
                          : "bg-brand-teal/[0.04] ring-1 ring-brand-teal/15"
                      }`}
                    >
                      {/* Inner Circular Node */}
                      <div
                        className={`size-16 lg:size-[4.5rem] rounded-full bg-white flex items-center justify-center border shadow-sm transition-transform duration-200 group-hover:scale-105 ${
                          isCenter
                            ? "border-brand-blue/40 text-brand-blue shadow-md"
                            : isBlue
                            ? "border-neutral-200 text-brand-blue"
                            : "border-neutral-200 text-brand-teal"
                        }`}
                      >
                        <Icon className={isCenter ? "size-7.5" : "size-6"} />
                      </div>
                    </div>

                    {/* Directional Arrow between steps (Desktop) */}
                    {idx < FLOW_STEPS.length - 1 && (
                      <div
                        className="absolute -right-5 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="size-2 rounded-full bg-brand-blue/60" />
                      </div>
                    )}
                  </div>

                  {/* Step Metadata */}
                  <div className="mt-5 space-y-1 max-w-[130px]">
                    <div
                      className={`font-heading font-bold text-xs tracking-wider ${
                        isCenter
                          ? "text-brand-blue"
                          : isBlue
                          ? "text-brand-blue"
                          : "text-brand-teal"
                      }`}
                    >
                      {item.step}
                    </div>

                    <h3
                      className={`font-heading font-bold tracking-tight ${
                        isCenter
                          ? "text-base lg:text-lg text-brand-navy"
                          : "text-sm lg:text-base text-brand-navy"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs text-neutral-500 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Flow (< md screens) */}
          <div className="md:hidden relative max-w-xs sm:max-w-sm mx-auto pt-4 pb-4">
            {/* Center Vertical Hairline Connecting Line */}
            <div
              className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-neutral-200 z-0"
              aria-hidden="true"
            />

            {/* Mobile India Silhouette Backdrop Centered Behind Schools */}
            <div
              className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[420px] pointer-events-none z-0 opacity-[0.22] text-brand-blue select-none flex items-center justify-center"
              aria-hidden="true"
            >
              <IndiaMap className="w-full h-full text-brand-blue" />
            </div>

            <div className="relative z-10 flex flex-col space-y-7">
              {FLOW_STEPS.map((item, idx) => {
                const Icon = item.icon;
                const isBlue = item.accent === "blue";
                const isCenter = item.isCenter;

                return (
                  <div
                    key={item.step}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Circular Node Housing (Exact same design as desktop) */}
                    <div className="relative flex items-center justify-center">
                      {/* Outer Concentric Ring */}
                      <div
                        className={`rounded-full p-2 transition-all duration-300 ${
                          isCenter
                            ? "bg-brand-blue/10 ring-1 ring-brand-blue/30 scale-110 shadow-[0_4px_24px_-4px_rgba(29,99,255,0.22)]"
                            : isBlue
                            ? "bg-brand-blue/[0.05] ring-1 ring-brand-blue/15"
                            : "bg-brand-teal/[0.05] ring-1 ring-brand-teal/15"
                        }`}
                      >
                        {/* Inner Circular Node */}
                        <div
                          className={`size-14 rounded-full bg-white flex items-center justify-center border shadow-sm ${
                            isCenter
                              ? "border-brand-blue/40 text-brand-blue shadow-md"
                              : isBlue
                              ? "border-neutral-200 text-brand-blue"
                              : "border-neutral-200 text-brand-teal"
                          }`}
                        >
                          <Icon className={isCenter ? "size-6.5" : "size-5.5"} />
                        </div>
                      </div>

                      {/* Directional Downward Indicator on Hairline */}
                      {idx < FLOW_STEPS.length - 1 && (
                        <div
                          className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-brand-blue/60 z-10 pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step Metadata below circular node (Pure, unboxed design matching desktop) */}
                    <div className="mt-2.5 space-y-0.5 max-w-[150px]">
                      <div
                        className={`font-heading font-bold text-xs tracking-wider ${
                          isCenter
                            ? "text-brand-blue"
                            : isBlue
                            ? "text-brand-blue"
                            : "text-brand-teal"
                        }`}
                      >
                        {item.step}
                      </div>

                      <h3
                        className={`font-heading font-bold tracking-tight text-brand-navy ${
                          isCenter ? "text-base" : "text-sm"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-neutral-500 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtle Text CTA below the flow */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            href="/government"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded py-1 px-2"
          >
            <span>Explore Government Solutions</span>
            <ArrowRight
              className="size-4 group-hover:translate-x-1 transition-transform duration-150"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

