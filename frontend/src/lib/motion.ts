import type { Transition, Variants } from "framer-motion";

export const motionEase: Transition["ease"] = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.2,
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: motionEase,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: motionEase,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: motionEase,
    },
  },
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.2,
    ease: motionEase,
  },
};

export const hoverScale = {
  scale: 1.03,
  transition: {
    duration: 0.2,
    ease: motionEase,
  },
};
