import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Briefcase, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="NTARA Introduction"
      className="relative overflow-hidden bg-white text-foreground pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Subtle, airy ambient background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-blue/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-teal/[0.03] blur-[140px]" />
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Editorial Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7 z-10">
            {/* Positioning Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-subtle border border-brand-blue/20">
              <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="font-heading font-semibold text-xs tracking-widest uppercase text-brand-blue">
                Skill Intelligence Platform
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-heading font-extrabold text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.08] tracking-[-0.03em] text-brand-navy max-w-2xl">
              Building India’s{" "}
              <span className="text-brand-blue">Future-Ready</span>{" "}
              Generation
            </h1>

            {/* Supporting Copy (Direct from client brief) */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
              An AI-powered Skill Intelligence Platform connecting students,
              institutions, government and industry.
            </p>

            {/* Strategic CTAs (Directly styled after reference) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/platform"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_4px_16px_rgba(29,99,255,0.28)] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Explore NTARA
              </Link>

              {/* Secondary CTA (Arrow link style from reference) */}
              <Link
                href="/partner"
                className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-blue transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="size-4.5 text-neutral-400 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </Link>
            </div>

            {/* Ecosystem Pillars (Horizontal multi-column layout inspired by reference metrics) */}
            <div className="pt-8 sm:pt-10 mt-2 border-t border-neutral-200/80 w-full max-w-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                    Students
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-0.5">
                    Future-Ready Skills
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                    Institutions
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-0.5">
                    Schools &amp; Colleges
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                    Government
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-0.5">
                    Policy &amp; Scale
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                    Industry
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-0.5">
                    Workforce Demand
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Portrait Frame with Floating Perimeter Badges */}
          <div className="lg:col-span-5 flex items-center justify-center w-full pt-4 lg:pt-0">
            <div className="relative flex items-center justify-center">
              {/* Outer Decorative Accent Arc (Inspired by reference) */}
              <svg
                className="absolute -inset-5 sm:-inset-6 w-[calc(100%+2.5rem)] sm:w-[calc(100%+3rem)] h-[calc(100%+2.5rem)] sm:h-[calc(100%+3rem)] pointer-events-none select-none -z-0"
                viewBox="0 0 100 100"
                fill="none"
              >
                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D63FF" />
                    <stop offset="100%" stopColor="#0D9488" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  stroke="url(#arcGradient)"
                  strokeWidth="1.25"
                  strokeDasharray="40 180"
                  strokeLinecap="round"
                  className="opacity-70"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  stroke="url(#arcGradient)"
                  strokeWidth="1.25"
                  strokeDasharray="60 220"
                  strokeLinecap="round"
                  transform="rotate(180 50 50)"
                  className="opacity-60"
                />
              </svg>

              {/* Main Circular Image Frame */}
              <div className="relative size-[300px] sm:size-[380px] lg:size-[430px] rounded-full overflow-hidden border-[6px] sm:border-8 border-white shadow-[0_20px_50px_-15px_rgba(11,19,43,0.14)] bg-neutral-100 z-10">
                {/* 
                  PLACEHOLDER IMAGE:
                  To use your actual image, place it in /public/images/ and change the src below.
                  Example: src="/images/my-actual-photo.jpg"
                */}
                <Image
                  src="/images/hero-placeholder.svg"
                  alt="NTARA Skill Intelligence Platform - Future-ready generation"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Badge 1: Top-Right (Government & Policy) */}
              <div
                className="absolute -top-2 right-0 sm:right-2 z-20 bg-white rounded-2xl p-2.5 sm:p-3 border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(11,19,43,0.1)] flex items-center gap-2.5 transition-transform hover:scale-105 duration-200"
                aria-label="Government & Administration"
              >
                <div className="size-8 sm:size-9 rounded-xl bg-brand-teal-subtle text-brand-teal flex items-center justify-center">
                  <Building2 className="size-4.5 sm:size-5" />
                </div>
                <div className="pr-1 hidden sm:block">
                  <div className="text-xs font-bold font-heading text-brand-navy leading-tight">
                    Government
                  </div>
                  <div className="text-[0.65rem] text-neutral-500 font-sans">
                    State &amp; District Scale
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Mid-Left (Skill Intelligence AI Core) */}
              <div
                className="absolute left-[-12px] sm:left-[-24px] top-1/2 -translate-y-1/2 z-20 bg-white rounded-2xl p-2.5 sm:p-3 border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(11,19,43,0.1)] flex items-center gap-2.5 transition-transform hover:scale-105 duration-200"
                aria-label="Skill Intelligence Core"
              >
                <div className="size-8 sm:size-9 rounded-xl bg-brand-blue-subtle text-brand-blue flex items-center justify-center">
                  <Cpu className="size-4.5 sm:size-5" />
                </div>
                <div className="pr-1 hidden sm:block">
                  <div className="text-xs font-bold font-heading text-brand-navy leading-tight">
                    Skill Intelligence
                  </div>
                  <div className="text-[0.65rem] text-neutral-500 font-sans">
                    AI-Powered Pathways
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Bottom-Right (Industry & Careers) */}
              <div
                className="absolute -bottom-2 right-4 sm:right-8 z-20 bg-white rounded-2xl p-2.5 sm:p-3 border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(11,19,43,0.1)] flex items-center gap-2.5 transition-transform hover:scale-105 duration-200"
                aria-label="Industry Demand"
              >
                <div className="size-8 sm:size-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Briefcase className="size-4.5 sm:size-5" />
                </div>
                <div className="pr-1 hidden sm:block">
                  <div className="text-xs font-bold font-heading text-brand-navy leading-tight">
                    Industry
                  </div>
                  <div className="text-[0.65rem] text-neutral-500 font-sans">
                    Workforce Alignment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
