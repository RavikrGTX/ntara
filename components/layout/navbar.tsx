"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Schools", href: "/schools" },
  { label: "Government", href: "/government" },
  { label: "Colleges & Industry", href: "/colleges-industry" },
  { label: "Impact", href: "/impact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  // Monitor scroll position with passive event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus trapping within mobile drawer
  React.useEffect(() => {
    if (!mobileMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const currentMenu = menuRef.current;
    currentMenu.addEventListener("keydown", handleTab);
    return () => currentMenu.removeEventListener("keydown", handleTab);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/80 shadow-[0_1px_3px_0_rgb(11_19_43/0.03)]"
          : "bg-background/80 backdrop-blur-xs border-b border-transparent"
      )}
    >
      <Container
        size="default"
        className={cn(
          "flex items-center justify-between transition-all duration-200",
          isScrolled ? "h-16" : "h-20"
        )}
      >
        {/* NTARA Wordmark (Clean, institutional, no fake icons) */}
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm py-1"
          aria-label="NTARA Homepage"
        >
          <span className="font-heading font-extrabold text-2xl sm:text-[1.65rem] tracking-tight text-foreground transition-colors group-hover:text-brand-navy">
            NTARA
          </span>
          <span
            className="size-1.5 rounded-full bg-brand-blue translate-y-0.5"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                  isActive
                    ? "text-brand-blue font-semibold"
                    : "text-foreground-muted hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "accent", size: "default" }),
              "h-9.5 px-4.5 text-sm font-medium tracking-tight shadow-sm"
            )}
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center size-10 rounded-lg text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-dialog"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="size-5.5" aria-hidden="true" />
            ) : (
              <Menu className="size-5.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer / Dialog */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[65px] bg-brand-navy-deep/40 backdrop-blur-xs transition-opacity motion-reduce:transition-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={menuRef}
            className="relative bg-background border-b border-border shadow-xl px-5 sm:px-8 py-6 max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <nav aria-label="Mobile Primary Navigation" className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                      isActive
                        ? "bg-secondary text-brand-blue font-semibold"
                        : "text-foreground hover:bg-secondary/80"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "accent", size: "lg" }),
                    "w-full justify-center text-sm font-semibold"
                  )}
                >
                  Partner With Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
