import { Hero } from "@/components/sections/hero";
import { Challenge } from "@/components/sections/challenge";
import { EcosystemPreview } from "@/components/sections/ecosystem-preview";
import { SchoolsPreview } from "@/components/sections/schools-preview";
import { GovernmentPreview } from "@/components/sections/government-preview";
import { CollegesIndustryPreview } from "@/components/sections/colleges-industry-preview";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <Challenge />
      <EcosystemPreview />
      <SchoolsPreview />
      <GovernmentPreview />
      <CollegesIndustryPreview />
      <FinalCta />
    </main>
  );
}
