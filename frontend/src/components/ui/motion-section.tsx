import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { staggerContainer, viewport } from "@/lib/motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  amount?: number;
};

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export function MotionSection({
  children,
  className,
  variants = staggerContainer,
  amount = viewport.amount,
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewport.once, amount }}
      variants={prefersReducedMotion ? reducedMotionVariants : variants}
    >
      {children}
    </motion.div>
  );
}
