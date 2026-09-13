import type { Metadata } from "next";
import { PartnerHero } from "@/components/partner/partner-hero";
import { WhoCanPartner } from "@/components/partner/who-can-partner";
import { PartnershipForm } from "@/components/partner/partnership-form";

export const metadata: Metadata = {
  title: "Partner With NTARA | Building India's Future-Ready Generation",
  description:
    "Partner with NTARA to connect education, skills, government and industry and build pathways toward a future-ready generation.",
  openGraph: {
    title: "Partner With NTARA | Building India's Future-Ready Generation",
    description:
      "Partner with NTARA to connect education, skills, government and industry and build pathways toward a future-ready generation.",
  },
};

export default function PartnerPage() {
  return (
    <main className="flex-1 bg-white">
      {/* 1. Hero */}
      <PartnerHero />

      {/* 2. Who Can Partner */}
      <WhoCanPartner />

      {/* 3. Simple Contact / Partnership Form */}
      <PartnershipForm />

      {/* 4. Footer is globally rendered by RootLayout */}
    </main>
  );
}
