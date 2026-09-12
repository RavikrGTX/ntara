import { Hero } from "@/components/sections/hero";
import { Challenge } from "@/components/sections/challenge";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <Challenge />
    </main>
  );
}
