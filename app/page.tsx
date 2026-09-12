import { Hero } from "@/components/sections/hero";
import { Challenge } from "@/components/sections/challenge";
import { EcosystemPreview } from "@/components/sections/ecosystem-preview";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <Challenge />
      <EcosystemPreview />
    </main>
  );
}
