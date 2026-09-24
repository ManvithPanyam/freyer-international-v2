import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: boolean | React.ReactNode;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = false,
  external = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-150 rounded select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1390f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121316] disabled:opacity-60 disabled:pointer-events-none active:scale-[0.99]";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs gap-2 min-h-[36px]",
    md: "px-5 py-2.5 text-xs gap-2.5 min-h-[42px]",
    lg: "px-7 py-3.5 text-xs gap-3 min-h-[48px]",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#e1390f] hover:bg-[#c42f0b] text-white shadow-xl shadow-[#e1390f]/20 hover:shadow-[#e1390f]/35 hover:scale-[1.01]",
    secondary:
      "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 hover:border-white/35 backdrop-blur-sm",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-white/70 hover:text-white border border-transparent",
  };

  const mergedClasses = twMerge(
    clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)
  );

  const iconElement =
    icon === true ? (
      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
    ) : React.isValidElement(icon) ? (
      icon
    ) : null;

  const content = (
    <>
      {children}
      {iconElement}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={mergedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={mergedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
