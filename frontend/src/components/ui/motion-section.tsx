import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { staggerContainer, viewport } from "@/lib/motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  amount?: number;
  triggerOnView?: boolean;
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
  triggerOnView = true,
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const resolvedVariants = prefersReducedMotion ? reducedMotionVariants : variants;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate={triggerOnView ? undefined : "show"}
      whileInView={triggerOnView ? "show" : undefined}
      viewport={triggerOnView ? { once: viewport.once, amount } : undefined}
      variants={resolvedVariants}
    >
      {children}
    </motion.div>
  );
}
