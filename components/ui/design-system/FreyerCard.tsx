import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { THEME_TOKENS } from "./tokens";

interface FreyerCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function FreyerCard({
  id,
  children,
  className = "",
  hoverEffect = true,
  onClick,
}: FreyerCardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={[
        "bg-[#181A1F]/90 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-200",
        hoverEffect
          ? "hover:border-white/25 hover:bg-[#20222A] hover:shadow-xl hover:shadow-black/40"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

interface FreyerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
}

export function FreyerButton({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = true,
  className = "",
  ...props
}: FreyerButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-150 rounded select-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-[11px] gap-2",
    md: "px-6 py-3 text-xs gap-2.5",
    lg: "px-8 py-4 text-xs gap-3",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#e1390f] hover:bg-[#c42f0b] text-white shadow-xl shadow-[#e1390f]/20 hover:shadow-[#e1390f]/35 hover:scale-[1.01] active:scale-[0.99]",
    secondary:
      "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 hover:border-white/35 backdrop-blur-sm",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-white/70 hover:text-white border border-transparent",
  }[variant];

  const content = (
    <>
      {children}
      {icon && <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {content}
    </button>
  );
}
