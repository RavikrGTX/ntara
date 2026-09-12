import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Landmark,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";
import { Container } from "@/components/ui/container";

interface Stakeholder {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: "blue" | "teal";
}

const STAKEHOLDERS: Record<string, Stakeholder> = {
  students: {
    id: "students",
    title: "Students",
    subtitle: "Build future-ready skills.",
    icon: GraduationCap,
    accent: "blue",
  },
  institutions: {
    id: "institutions",
    title: "Institutions",
    subtitle: "Schools & Colleges",
    icon: Building2,
    accent: "teal",
  },
  government: {
    id: "government",
    title: "Government",
    subtitle: "Scale & Measure initiatives.",
    icon: Landmark,
    accent: "blue",
  },
  industry: {
    id: "industry",
    title: "Industry",
    subtitle: "Workforce & Opportunity.",
    icon: BriefcaseBusiness,
    accent: "teal",
  },
};

export function EcosystemPreview() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-neutral-200/70"
    >
      {/* Subtle, soft ambient depth */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-blue/[0.03] blur-[140px]" />
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-teal/[0.02] blur-[150px]" />
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Messaging */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/70 shadow-xs">
              <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
                The NTARA Ecosystem
              </span>
            </div>

            {/* Headline */}
            <h2
              id="ecosystem-heading"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.125rem] text-brand-navy leading-[1.12] tracking-tight"
            >
              One connected ecosystem.{" "}
              <span className="text-brand-blue block sm:inline">
                From learning to opportunity.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg">
              NTARA connects students, institutions, government and industry
              through a shared understanding of skills, development and readiness.
            </p>

            {/* Subtle CTA */}
            <div className="pt-2">
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                <span>See How It Connects</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Ecosystem Visualization */}
          <div className="lg:col-span-7 flex items-center justify-center w-full">
            {/* Desktop / Large Screen Composition */}
            <div
              className="hidden sm:block relative w-full max-w-[620px] h-[430px] select-none"
              role="img"
              aria-label="Ecosystem diagram showing NTARA connecting Students, Institutions, Government, and Industry"
            >
              {/* Curved SVG Connector Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                viewBox="0 0 620 430"
                fill="none"
              >
                {/* Outer Faint Concentric Orbit */}
                <circle
                  cx="310"
                  cy="215"
                  r="105"
                  stroke="rgba(11, 19, 43, 0.05)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle
                  cx="310"
                  cy="215"
                  r="85"
                  stroke="rgba(29, 99, 255, 0.12)"
                  strokeWidth="1"
                />

                {/* Path 1: Students (Top-Left) -> Center */}
                <path
                  d="M 215 90 C 265 90, 250 160, 258 175"
                  stroke="#1D63FF"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <circle cx="215" cy="90" r="3" fill="#1D63FF" />
                <circle cx="258" cy="175" r="4" fill="#1D63FF" />

                {/* Path 2: Government (Bottom-Left) -> Center */}
                <path
                  d="M 215 340 C 265 340, 250 270, 258 255"
                  stroke="#1D63FF"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <circle cx="215" cy="340" r="3" fill="#1D63FF" />
                <circle cx="258" cy="255" r="4" fill="#1D63FF" />

                {/* Path 3: Institutions (Top-Right) -> Center */}
                <path
                  d="M 405 90 C 355 90, 370 160, 362 175"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <circle cx="405" cy="90" r="3" fill="#0D9488" />
                <circle cx="362" cy="175" r="4" fill="#0D9488" />

                {/* Path 4: Industry (Bottom-Right) -> Center */}
                <path
                  d="M 405 340 C 355 340, 370 270, 362 255"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <circle cx="405" cy="340" r="3" fill="#0D9488" />
                <circle cx="362" cy="255" r="4" fill="#0D9488" />
              </svg>

              {/* Central Hub: NTARA Skill Intelligence Platform */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="size-40 sm:size-44 rounded-full bg-white border border-neutral-200/90 shadow-[0_12px_36px_-8px_rgba(11,19,43,0.08)] flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-[1.02]">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-brand-navy">
                    NTARA
                  </span>
                  <span className="text-[0.7rem] text-neutral-500 font-sans mt-0.5 max-w-[110px] leading-tight">
                    Skill Intelligence Platform
                  </span>
                </div>
              </div>

              {/* Card 1: Top-Left (Students) */}
              <div className="absolute top-5 left-0 z-10 w-[215px]">
                <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-[0_8px_24px_-6px_rgba(11,19,43,0.06)] flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:border-neutral-200">
                  <div className="size-10 rounded-xl bg-brand-blue-subtle text-brand-blue flex items-center justify-center shrink-0">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy leading-tight">
                      {STAKEHOLDERS.students.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-snug">
                      {STAKEHOLDERS.students.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Bottom-Left (Government) */}
              <div className="absolute bottom-5 left-0 z-10 w-[215px]">
                <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-[0_8px_24px_-6px_rgba(11,19,43,0.06)] flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:border-neutral-200">
                  <div className="size-10 rounded-xl bg-brand-blue-subtle text-brand-blue flex items-center justify-center shrink-0">
                    <Landmark className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy leading-tight">
                      {STAKEHOLDERS.government.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-snug">
                      {STAKEHOLDERS.government.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Top-Right (Institutions) */}
              <div className="absolute top-5 right-0 z-10 w-[215px]">
                <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-[0_8px_24px_-6px_rgba(11,19,43,0.06)] flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:border-neutral-200">
                  <div className="size-10 rounded-xl bg-brand-teal-subtle text-brand-teal flex items-center justify-center shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy leading-tight">
                      {STAKEHOLDERS.institutions.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-snug">
                      {STAKEHOLDERS.institutions.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom-Right (Industry) */}
              <div className="absolute bottom-5 right-0 z-10 w-[215px]">
                <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-[0_8px_24px_-6px_rgba(11,19,43,0.06)] flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:border-neutral-200">
                  <div className="size-10 rounded-xl bg-brand-teal-subtle text-brand-teal flex items-center justify-center shrink-0">
                    <BriefcaseBusiness className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy leading-tight">
                      {STAKEHOLDERS.industry.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-snug">
                      {STAKEHOLDERS.industry.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Recomposed Layout (< sm screens) */}
            <div className="sm:hidden w-full flex flex-col items-center space-y-4">
              {/* Central Hub */}
              <div className="size-36 rounded-full bg-white border border-neutral-200 shadow-md flex flex-col items-center justify-center text-center p-3">
                <span className="font-heading font-extrabold text-xl tracking-tight text-brand-navy">
                  NTARA
                </span>
                <span className="text-[0.65rem] text-neutral-500 font-sans mt-0.5 leading-tight max-w-[100px]">
                  Skill Intelligence Platform
                </span>
              </div>

              {/* 4 Connected Stakeholder Cards */}
              <div className="w-full grid grid-cols-1 gap-3 pt-2">
                {Object.values(STAKEHOLDERS).map((item) => {
                  const Icon = item.icon;
                  const isBlue = item.accent === "blue";
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-xs flex items-center gap-3"
                    >
                      <div
                        className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isBlue
                            ? "bg-brand-blue-subtle text-brand-blue"
                            : "bg-brand-teal-subtle text-brand-teal"
                        }`}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-brand-navy">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-500 font-sans">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
