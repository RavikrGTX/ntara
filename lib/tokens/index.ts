/**
 * NTARA Design System Tokens
 *
 * Core Brand Pillars:
 * - Primary: Deep Navy (#0B132B)
 * - Base: Pure White (#FFFFFF) & Soft Neutral (#F8FAFC)
 * - Strategic Accent: Electric Blue (#1D63FF)
 * - Secondary Accent: Subtle Teal (#0D9488)
 */

export * from "./motion";

export const colors = {
  brand: {
    navy: {
      deep: "#060B18",
      DEFAULT: "#0B132B",
      surface: "#111B38",
      muted: "#1E2D56",
    },
    blue: {
      subtle: "#EFF5FF",
      DEFAULT: "#1D63FF",
      hover: "#154ECE",
      border: "#DBEAFE",
    },
    teal: {
      subtle: "#F0FDFA",
      DEFAULT: "#0D9488",
      hover: "#0F766E",
      border: "#CCFBF1",
    },
  },
  neutral: {
    0: "#FFFFFF",
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
} as const;

export const typography = {
  fonts: {
    heading: "var(--font-manrope), system-ui, sans-serif",
    sans: "var(--font-inter), system-ui, sans-serif",
  },
  scale: {
    display: {
      size: "clamp(2.5rem, 5vw + 1rem, 4.25rem)",
      lineHeight: "1.08",
      letterSpacing: "-0.03em",
      weight: "700",
    },
    h1: {
      size: "clamp(2.125rem, 3.5vw + 0.75rem, 3.25rem)",
      lineHeight: "1.15",
      letterSpacing: "-0.025em",
      weight: "700",
    },
    h2: {
      size: "clamp(1.75rem, 2.5vw + 0.5rem, 2.375rem)",
      lineHeight: "1.22",
      letterSpacing: "-0.02em",
      weight: "600",
    },
    h3: {
      size: "clamp(1.375rem, 1.5vw + 0.5rem, 1.625rem)",
      lineHeight: "1.3",
      letterSpacing: "-0.015em",
      weight: "600",
    },
    h4: {
      size: "clamp(1.125rem, 1vw + 0.5rem, 1.25rem)",
      lineHeight: "1.4",
      letterSpacing: "-0.01em",
      weight: "600",
    },
    bodyLarge: {
      size: "1.125rem",
      lineHeight: "1.65",
      letterSpacing: "-0.01em",
      weight: "400",
    },
    body: {
      size: "1rem",
      lineHeight: "1.6",
      letterSpacing: "0",
      weight: "400",
    },
    small: {
      size: "0.875rem",
      lineHeight: "1.5",
      letterSpacing: "0",
      weight: "400",
    },
    caption: {
      size: "0.75rem",
      lineHeight: "1.4",
      letterSpacing: "0.02em",
      weight: "400",
    },
  },
} as const;

export const layout = {
  maxWidth: {
    narrow: "56rem",   // 896px
    default: "80rem",  // 1280px
    wide: "90rem",     // 1440px
  },
  padding: {
    mobile: "1.25rem", // 20px
    tablet: "2rem",    // 32px
    desktop: "3rem",   // 48px
  },
  sectionSpacing: {
    compact: "py-10 sm:py-12 lg:py-16",
    standard: "py-16 sm:py-20 lg:py-24",
    generous: "py-20 sm:py-28 lg:py-36",
  },
} as const;
