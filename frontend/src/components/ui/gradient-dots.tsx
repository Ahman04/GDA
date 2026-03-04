"use client";

import type React from "react";

import { motion } from "framer-motion";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
  dotColor?: string;
  dotColorAlt?: string;
  animateHue?: boolean;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = "var(--background)",
  dotColor = "hsl(var(--primary) / 0.22)",
  dotColorAlt = "hsl(var(--foreground) / 0.08)",
  animateHue = false,
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;

  return (
    <motion.div
      className={`absolute inset-0 ${className ?? ""}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, ${dotColor} 1.8px, transparent 2.2px),
          radial-gradient(circle at 50% 50%, ${dotColorAlt} 1.4px, transparent 2px),
          radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.12), transparent 65%),
          radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.05), transparent 70%),
          radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 75%),
          radial-gradient(ellipse at 50% 50%, hsl(var(--foreground) / 0.04), transparent 78%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px,
          ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: animateHue ? ["hue-rotate(0deg)", "hue-rotate(360deg)"] : "none",
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
        filter: {
          duration: animateHue ? colorCycleDuration : 0,
          ease: "linear",
          repeat: animateHue ? Number.POSITIVE_INFINITY : 0,
        },
      }}
      {...props}
    />
  );
}
