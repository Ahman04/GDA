import type React from "react";

import { cn } from "@/lib/utils";

interface RainbowBordersButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: "theme" | "alt" | "whiteFlash";
}

export function RainbowBordersButton({
  children = "Get Started",
  href,
  className,
  onClick,
  variant = "theme",
}: RainbowBordersButtonProps) {
  const borderClass =
    variant === "alt"
      ? "rainbow-border-alt"
      : variant === "whiteFlash"
        ? "rainbow-border-white-flash"
        : "rainbow-border";
  const toneClass =
    variant === "alt"
      ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
      : variant === "whiteFlash"
        ? "bg-white text-[hsl(var(--deep-blue))]"
        : "bg-[hsl(var(--deep-blue))] text-[hsl(var(--deep-blue-foreground))]";

  const baseClassName = cn(
    borderClass,
    toneClass,
    "relative inline-flex h-10 min-w-[140px] items-center justify-center gap-2.5 rounded-xl px-4 text-sm font-black transition-all duration-200 hover:scale-[1.01]",
    className,
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClassName}>
      {children}
    </button>
  );
}
