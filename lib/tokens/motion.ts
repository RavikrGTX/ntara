/**
 * NTARA Motion Foundation
 *
 * Principles:
 * - Smooth, subtle, responsive (180ms - 350ms)
 * - Restrained displacement (6px - 12px max)
 * - Purposeful and never distracting
 * - Respects prefers-reduced-motion preferences
 */

export const motionDurations = {
  instant: 0.1,    // 100ms: micro-toggles, state switches
  fast: 0.18,      // 180ms: button presses, small popovers
  base: 0.28,      // 280ms: standard UI transitions, cards
  deliberate: 0.42,// 420ms: modal sheets, large content panels
} as const;

export const motionEasings = {
  // Natural deceleration for incoming UI
  easeOutQuint: [0.22, 1, 0.36, 1],
  // Balanced transition for interactive states
  easeInOutCubic: [0.65, 0, 0.35, 1],
  // Crisp standard institutional easing
  standard: [0.16, 1, 0.3, 1],
} as const;

export const motionSprings = {
  subtle: {
    type: "spring",
    stiffness: 380,
    damping: 30,
    mass: 0.8,
  },
  gentle: {
    type: "spring",
    stiffness: 240,
    damping: 26,
    mass: 1,
  },
} as const;

export const motionTransitions = {
  fast: {
    duration: motionDurations.fast,
    ease: motionEasings.standard,
  },
  base: {
    duration: motionDurations.base,
    ease: motionEasings.standard,
  },
  deliberate: {
    duration: motionDurations.deliberate,
    ease: motionEasings.easeOutQuint,
  },
  springSubtle: motionSprings.subtle,
} as const;

/**
 * Standard Framer Motion variants for subtle institutional interaction.
 * Low travel distance (8px) ensures it feels technological, not playful.
 */
export const institutionalVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: motionTransitions.base,
    },
  },
  fadeSlideUp: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.deliberate,
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  },
} as const;
