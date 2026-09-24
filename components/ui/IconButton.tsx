import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type IconButtonVariant = "dark" | "light";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode;
  "aria-label": string; // Explicitly mandatory
  variant?: IconButtonVariant;
}

/**
 * IconButton:
 * Standardized 40x40px circular touch-target primitive for icon-only actions (modals, drawers, dismissals).
 * Enforces mandatory aria-label and universal focus-visible ring.
 */
export function IconButton({
  icon,
  "aria-label": ariaLabel,
  variant = "dark",
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  const baseClasses =
    "w-10 h-10 min-w-[40px] min-h-[40px] rounded-full inline-flex items-center justify-center transition-colors duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1390f] focus-visible:ring-offset-2";

  const variantClasses: Record<IconButtonVariant, string> = {
    dark:
      "bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 text-white/70 hover:text-white focus-visible:ring-offset-[#121316] backdrop-blur-sm",
    light:
      "bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-900 focus-visible:ring-offset-white",
  };

  const mergedClasses = twMerge(
    clsx(baseClasses, variantClasses[variant], className)
  );

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={mergedClasses}
      {...props}
    >
      {icon}
    </button>
  );
}
