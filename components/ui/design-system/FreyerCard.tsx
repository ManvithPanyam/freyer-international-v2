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
        "bg-[#FFFFFF] border border-[#DCDCD7] rounded-xl transition-all duration-200",
        hoverEffect
          ? "hover:border-[#17181B] hover:shadow-md"
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
      "bg-[#17181B] hover:bg-[#E33B12] text-[#F7F6F2] hover:text-white transition-colors border border-transparent shadow-sm",
    secondary:
      "bg-transparent hover:bg-[#17181B] text-[#17181B] hover:text-[#F7F6F2] border border-[#17181B] transition-colors",
    ghost:
      "bg-transparent hover:bg-[#17181B]/[0.05] text-[#17181B] hover:text-[#E33B12] border border-transparent transition-colors",
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
