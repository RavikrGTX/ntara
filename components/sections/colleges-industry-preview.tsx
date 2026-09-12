import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";

const KEY_SKILLS = [
  "AI & Data",
  "Cybersecurity",
  "Cloud",
  "Full Stack",
  "Analytics",
];

export function CollegesIndustryPreview() {
  return (
    <section
      id="colleges-industry-preview"
      aria-labelledby="colleges-industry-heading"
      className="relative overflow-hidden bg-neutral-50/50 py-16 sm:py-24 lg:py-32 border-b border-neutral-200/70"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Messaging & Narrative */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs">
              <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
                For Colleges &amp; Industry
              </span>
            </div>

            {/* Headline */}
            <h2
              id="colleges-industry-heading"
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.12] tracking-tight"
            >
              From education to{" "}
              <span className="text-brand-blue">opportunity.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed">
              Connecting higher education with emerging skills and the evolving
              needs of employers.
            </p>

            {/* Bridge Positioning */}
            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
              NTARA provides the institutional bridge between campus academic
              foundations and real-world employment — aligning students with
              India&apos;s leading technology employers and high-growth startup
              ecosystems.
            </p>

            {/* Small Skill Preview Pills */}
            <div className="pt-2 space-y-2.5">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                Key Skill Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {KEY_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-neutral-700 border border-neutral-200/90 shadow-2xs hover:border-brand-blue/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Restrained CTA Link */}
            <div className="pt-3">
              <Link
                href="/colleges-industry"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded py-1 px-1 -ml-1"
              >
                <span>Explore Colleges &amp; Industry</span>
                <ArrowRight
                  className="size-4 group-hover:translate-x-1 transition-transform duration-150"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual Story (Colleges -> Skills -> Industry) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* 01 — COLLEGES: Larger Featured Image */}
            <div className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs transition-shadow duration-300 hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <Image
                  src="/images/colleges-industry/colleges.jpg"
                  alt="Indian college students collaborating in an engineering lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                {/* Floating Stage Tag */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-navy/85 backdrop-blur-sm text-white text-xs font-heading font-semibold tracking-wider uppercase shadow-xs">
                  <span className="size-1.5 rounded-full bg-brand-blue" />
                  01 · Colleges
                </div>
                {/* Caption on Image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <p className="font-heading font-bold text-sm sm:text-base tracking-tight leading-snug">
                    Academic Foundations &amp; Campus Collaboration
                  </p>
                  <p className="font-sans text-xs text-white/80 mt-0.5">
                    Building core fundamentals across engineering and technology disciplines.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Progression Indicator (Colleges to Skills) */}
            <div className="flex items-center justify-center gap-2 py-0.5" aria-hidden="true">
              <div className="h-4 w-px bg-neutral-200" />
              <ArrowDown className="size-3.5 text-brand-blue/70" />
              <div className="h-4 w-px bg-neutral-200" />
            </div>

            {/* Supporting Two-Column Progression: 02 Skills -> 03 Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative items-stretch">
              {/* Subtle directional connector cue between Card 02 and Card 03 on desktop */}
              <div
                className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 size-7 rounded-full bg-white border border-neutral-200/90 shadow-sm items-center justify-center text-brand-blue pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="size-3.5" />
              </div>

              {/* 02 — SKILLS: Applied Technical Specialization */}
              <div className="group relative rounded-xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs transition-shadow duration-300 hover:shadow-md flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/colleges-industry/skills.jpg"
                    alt="Indian students mastering applied data science and software development"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-navy/85 backdrop-blur-sm text-white text-xs font-heading font-semibold tracking-wider uppercase shadow-xs">
                    <span className="size-1.5 rounded-full bg-brand-teal" />
                    02 · Skills
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-heading font-bold text-xs sm:text-sm tracking-tight leading-snug">
                      Applied Technology Mastery
                    </p>
                    <p className="font-sans text-[0.6875rem] text-white/80 mt-0.5">
                      Hands-on AI, Cloud, Cybersecurity &amp; Full Stack programs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Downward Connector (Between 02 Skills & 03 Industry) */}
              <div className="flex sm:hidden items-center justify-center gap-2 py-0.5" aria-hidden="true">
                <div className="h-3 w-px bg-neutral-200" />
                <ArrowDown className="size-3 text-brand-blue/70" />
                <div className="h-3 w-px bg-neutral-200" />
              </div>

              {/* 03 — INDUSTRY: Employer & Startup Ecosystem */}
              <div className="group relative rounded-xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs transition-shadow duration-300 hover:shadow-md flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/colleges-industry/industry.jpg"
                    alt="Young Indian technology professionals collaborating in modern office"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-navy/85 backdrop-blur-sm text-white text-xs font-heading font-semibold tracking-wider uppercase shadow-xs">
                    <span className="size-1.5 rounded-full bg-brand-blue" />
                    03 · Industry
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-heading font-bold text-xs sm:text-sm tracking-tight leading-snug">
                      Employer &amp; Startup Ecosystem
                    </p>
                    <p className="font-sans text-[0.6875rem] text-white/80 mt-0.5">
                      Direct pathways into dynamic enterprises and fast-scaling teams.
                    </p>
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
