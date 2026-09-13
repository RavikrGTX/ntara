import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}

const NAVIGATION_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Skills Intelligence", href: "/platform#skills" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Schools", href: "/schools" },
      { label: "Government", href: "/government" },
      { label: "Colleges & Industry", href: "/colleges-industry" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About NTARA", href: "/about" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ntara",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/ntara",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ntara",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ntara",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative overflow-hidden bg-brand-navy-deep text-white border-t border-white/[0.08]"
    >
      {/* Decorative Oversized Watermark Wordmark (Ultra-low opacity, purely decorative, non-interfering) */}
      <div
        className="pointer-events-none select-none absolute bottom-0 left-0 right-0 overflow-hidden flex justify-center z-0 translate-y-[35%]"
        aria-hidden="true"
      >
        <span className="font-heading font-extrabold text-[18vw] leading-none tracking-tight text-white/[0.018] uppercase">
          NTARA
        </span>
      </div>

      <Container size="default" className="relative z-10">
        {/* Main Footer Section */}
        <div className="pt-16 pb-14 sm:pt-20 sm:pb-18 lg:pt-24 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left / Brand Area */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-5 sm:space-y-6">
              {/* Brand Wordmark with subtle dual accent dot */}
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-deep rounded py-0.5"
                aria-label="NTARA Homepage"
              >
                <span className="font-heading font-extrabold text-2xl sm:text-[1.75rem] tracking-tight text-white">
                  NTARA
                </span>
                <span
                  className="size-1.5 rounded-full bg-brand-blue translate-y-0.5"
                  aria-hidden="true"
                />
                <span
                  className="size-1.5 rounded-full bg-brand-teal translate-y-0.5 -ml-0.5 opacity-90"
                  aria-hidden="true"
                />
              </Link>

              {/* Mission Statement */}
              <p className="font-heading font-bold text-lg sm:text-xl text-white leading-snug tracking-tight max-w-md">
                Building India&apos;s Future-Ready Generation.
              </p>

              {/* Institutional Descriptor */}
              <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                AI-powered Skill Intelligence Platform connecting students,
                institutions, government and industry.
              </p>

              {/* Primary Footer CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-11 px-5 sm:px-6 rounded-lg sm:rounded-full text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_2px_12px_rgba(29,99,255,0.25)] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-deep group"
                >
                  <span>Partner with NTARA</span>
                  <ArrowRight
                    className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Right / Navigation Columns */}
            <nav
              aria-label="Footer Navigation"
              className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:pl-10"
            >
              {NAVIGATION_COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col space-y-4">
                  <h3 className="font-heading font-bold text-xs uppercase tracking-[0.14em] text-white/90">
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-sans text-sm text-slate-400 hover:text-brand-blue transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:text-brand-blue focus-visible:underline rounded-xs"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Social Channels */}
        <div className="py-6 sm:py-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-5 text-xs font-sans text-slate-400">
          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 order-2 md:order-1 text-center sm:text-left">
            <p>© 2026 NTARA. All rights reserved.</p>

            <ul className="flex items-center gap-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-blue transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:text-brand-blue focus-visible:underline rounded-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 order-1 md:order-2"
            aria-label="Social media channels"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NTARA on ${social.label}`}
                className="size-8.5 inline-flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] hover:scale-105 active:scale-95 transition-all duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-deep"
              >
                {social.icon({ className: "size-4" })}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
