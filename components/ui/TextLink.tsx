import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  icon?: boolean | React.ReactNode;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

/**
 * TextLink component:
 * Designed for inline editorial navigation cues.
 * Satisfies WCAG 2.5.5 touch target spacing (min 24px vertical tap area via py-1.5 inline-flex box)
 * without rendering as an artificial button shape.
 */
export function TextLink({
  children,
  href,
  icon = false,
  external = false,
  className = "",
  onClick,
  ...props
}: TextLinkProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors duration-150 py-1.5 px-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e1390f] rounded-xs select-none min-h-[24px]";

  const iconElement =
    icon === true ? (
      <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f] shrink-0" />
    ) : React.isValidElement(icon) ? (
      icon
    ) : null;

  const content = (
    <>
      <span className="hover:underline underline-offset-4 decoration-white/30">{children}</span>
      {iconElement}
    </>
  );

  const mergedClasses = twMerge(clsx(baseClasses, className));

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={mergedClasses}
          onClick={onClick}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={mergedClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={mergedClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
