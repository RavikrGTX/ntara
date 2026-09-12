import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface SchoolStage {
  step: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  programs: string[];
}

const SCHOOL_STAGES: SchoolStage[] = [
  {
    step: "STEP 01",
    title: "Life & Well-being",
    description:
      "Building confidence, resilience, healthy habits and essential life skills.",
    imageSrc: "/images/schools-step-1.jpg",
    imageAlt: "Indian secondary school students collaborating and building life skills in school",
    programs: ["Life Skills", "Emotional Strength", "Health Awareness"],
  },
  {
    step: "STEP 02",
    title: "Future Skills",
    description:
      "Developing communication, digital literacy and awareness of emerging technology.",
    imageSrc: "/images/schools-step-2.jpg",
    imageAlt: "Indian school students engaged in computer lab and digital literacy learning",
    programs: ["Communication & Leadership", "Digital Literacy", "Foundational AI"],
  },
  {
    step: "STEP 03",
    title: "Career Readiness",
    description:
      "Helping students understand strengths, possibilities and the skills needed for the future.",
    imageSrc: "/images/schools-step-3.jpg",
    imageAlt: "Indian high school students exploring career projects and future technology exhibition",
    programs: ["Career Readiness", "Skill Discovery", "Future Pathways"],
  },
];

export function SchoolsPreview() {
  return (
    <section
      id="schools-preview"
      aria-labelledby="schools-preview-heading"
      className="relative overflow-hidden bg-neutral-50/60 py-16 sm:py-24 lg:py-32 border-b border-neutral-200/70"
    >
      <Container size="default">
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              For Schools · Classes 6–10
            </span>
          </div>

          {/* Headline */}
          <h2
            id="schools-preview-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-brand-navy leading-[1.15] tracking-tight"
          >
            Preparing students for more than the classroom.
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            NTARA helps schools build essential life, digital, communication and
            career-ready capabilities for students in Classes 6–10.
          </p>
        </div>

        {/* Three Visual Stages Progression */}
        <div className="relative mt-14 sm:mt-18 lg:mt-20">
          {/* Subtle connecting progression line (Desktop only) */}
          <div
            className="hidden lg:block absolute top-28 left-[18%] right-[18%] h-px border-t border-dashed border-neutral-200/90 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {SCHOOL_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Visual Frame */}
                <div className="relative size-48 sm:size-52 lg:size-56 rounded-full overflow-hidden border-4 border-white shadow-[0_12px_28px_-6px_rgba(11,19,43,0.09)] bg-neutral-100 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={stage.imageSrc}
                    alt={stage.imageAlt}
                    fill
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Step Badge & Content */}
                <div className="mt-6 flex flex-col items-center space-y-2.5 max-w-xs">
                  <span className="font-heading font-bold text-[0.725rem] tracking-wider uppercase text-brand-blue">
                    {stage.step}
                  </span>

                  <h3 className="font-heading font-bold text-xl sm:text-[1.35rem] tracking-tight text-brand-navy">
                    {stage.title}
                  </h3>

                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Subtle Included Competency Tags */}
                  <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                    {stage.programs.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.685rem] font-medium px-2.5 py-0.5 rounded-full bg-white border border-neutral-200/70 text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lightweight Learn More Link */}
                  <div className="pt-3">
                    <Link
                      href="/schools"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                    >
                      <span>Explore Program</span>
                      <ArrowRight
                        className="size-3.5 text-neutral-400 group-hover/link:text-brand-blue group-hover/link:translate-x-1 transition-all duration-150"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
