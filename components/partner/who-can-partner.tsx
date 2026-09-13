"use client";

import * as React from "react";
import { Landmark, GraduationCap, Briefcase, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

interface PartnerAudience {
  title: string;
  description: string;
  icon: React.ElementType;
}

const PARTNER_AUDIENCES: PartnerAudience[] = [
  {
    title: "Government",
    description: "Scale skill-development initiatives.",
    icon: Landmark,
  },
  {
    title: "Schools & Institutions",
    description: "Prepare students for a changing world.",
    icon: GraduationCap,
  },
  {
    title: "Industry",
    description: "Connect skills with opportunity.",
    icon: Briefcase,
  },
  {
    title: "CSR & Social Impact",
    description: "Support meaningful education and skill initiatives.",
    icon: HeartHandshake,
  },
];

export function WhoCanPartner() {
  return (
    <section
      id="who-can-partner"
      aria-labelledby="who-can-partner-heading"
      className="relative overflow-hidden bg-neutral-50/70 py-16 sm:py-24 lg:py-28 border-b border-neutral-200/70"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-2xs">
            <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="font-heading font-semibold text-xs tracking-widest uppercase text-neutral-600">
              WHO CAN PARTNER
            </span>
          </div>

          {/* Headline */}
          <h2
            id="who-can-partner-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy leading-tight tracking-tight"
          >
            Let&apos;s build together.
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            NTARA works with organizations committed to building stronger pathways
            from learning to opportunity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_AUDIENCES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-start bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-7 transition-all duration-200 hover:border-brand-blue/35 hover:shadow-[0_8px_24px_-6px_rgba(11,19,43,0.06)]"
              >
                {/* Clean Small Icon Frame */}
                <div
                  className="size-11 rounded-lg bg-brand-blue-subtle text-brand-blue flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </div>

                {/* Card Title */}
                <h3 className="font-heading font-bold text-lg text-brand-navy tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
