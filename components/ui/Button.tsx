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
    "inline-flex items-center justify-center font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-150 rounded select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E33B12] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2] disabled:opacity-60 disabled:pointer-events-none active:scale-[0.99]";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs gap-2 min-h-[36px]",
    md: "px-5 py-2.5 text-xs gap-2.5 min-h-[42px]",
    lg: "px-7 py-3.5 text-xs gap-3 min-h-[48px]",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#17181B] hover:bg-[#E33B12] text-[#F7F6F2] hover:text-white shadow-md hover:shadow-lg transition-colors border border-transparent",
    secondary:
      "bg-transparent hover:bg-[#17181B] text-[#17181B] hover:text-[#F7F6F2] border border-[#17181B] transition-colors",
    ghost:
      "bg-transparent hover:bg-[#17181B]/[0.05] text-[#17181B] hover:text-[#E33B12] border border-transparent transition-colors",
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
