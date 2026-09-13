import type { Metadata } from "next";
import { PlatformHero } from "@/components/platform/platform-hero";
import { HowSkillIntelligenceWorks } from "@/components/platform/how-it-works";
import { SkillsThatMatter } from "@/components/platform/skills-that-matter";
import { ContinuousJourney } from "@/components/platform/continuous-journey";
import { PlatformFinalCta } from "@/components/platform/platform-final-cta";

export const metadata: Metadata = {
  title: "Platform | AI-Powered Skill Intelligence | NTARA",
  description:
    "NTARA connects students, educational institutions, government and industry through an AI-powered skill intelligence platform to build a future-ready generation.",
  openGraph: {
    title: "Platform | AI-Powered Skill Intelligence | NTARA",
    description:
      "NTARA connects students, educational institutions, government and industry through an AI-powered skill intelligence platform to build a future-ready generation.",
  },
};

export default function PlatformPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Section 1: Hero */}
      <PlatformHero />

      {/* Section 2: How Skill Intelligence Works */}
      <HowSkillIntelligenceWorks />

      {/* Section 3: Skills That Matter */}
      <SkillsThatMatter />

      {/* Section 4: A Continuous Journey */}
      <ContinuousJourney />

      {/* Section 5: Final CTA */}
      <PlatformFinalCta />
    </main>
  );
}
