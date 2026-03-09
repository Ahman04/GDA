import type React from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface RainbowBordersButtonProps {
  children?: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: "theme" | "alt" | "whiteFlash";
}

export function RainbowBordersButton({
  children = "Get Started",
  href,
  to,
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
    "relative inline-flex h-10 min-w-[140px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl px-4 text-sm font-black ring-offset-background transition-[transform,colors,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className,
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClassName}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClassName}>
      {children}
    </button>
  );
}
