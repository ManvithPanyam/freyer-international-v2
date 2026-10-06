import React from "react";
import Image from "next/image";

/**
 * ManifestCredentialStrip — Server Component
 *
 * Sits at the bottom edge of the hero section (h-[72px]).
 * Full-width dark bar displaying five trust credentials.
 * Desktop: centered horizontal row.
 * Mobile: horizontally scrollable snap row, ~2.3 items visible.
 */

const CREDENTIALS = [
  {
    src: "/images/IATA.png",
    alt: "IATA Cargo Agent certification logo",
    caption: "IATA Cargo Agent",
  },
  {
    src: "/images/wca.png",
    alt: "WCA World Member logo",
    caption: "WCA World Member",
  },
  {
    src: "/images/SCN.png",
    alt: "SCN Partner logo",
    caption: "SCN Partner",
  },
  {
    src: "/images/aeo-logo.jpg",
    alt: "CBIC AEO-LO certified logo",
    caption: "CBIC AEO-LO · INAAQCA4076M0F243",
  },
  {
    src: "/images/amtoi.png",
    alt: "AMTOI Member logo",
    caption: "AMTOI Member",
  },
] as const;

export function ManifestCredentialStrip() {
  return (
    <div
      aria-label="Industry credentials and memberships"
      className="w-full bg-[#121316] border-t border-white/[0.08] h-[72px] flex items-center"
    >
      {/*
        Desktop: flex row centered.
        Mobile: horizontal scroll with snap — shows ~2.3 items via overflow-x-auto.
        The inner ul uses scroll-snap-type; each li uses scroll-snap-align-start.
      */}
      <ul
        className={[
          /* Mobile scroll container */
          "flex items-center gap-0",
          "overflow-x-auto scroll-smooth",
          "[scroll-snap-type:x_mandatory]",
          "[-webkit-overflow-scrolling:touch]",
          "scrollbar-none [&::-webkit-scrollbar]:hidden",
          /* Desktop: center the row */
          "lg:justify-center lg:w-full lg:overflow-x-visible",
        ].join(" ")}
        role="list"
      >
        {CREDENTIALS.map(({ src, alt, caption }) => (
          <li
            key={src}
            role="listitem"
            className={[
              "flex flex-col items-center justify-center gap-1.5",
              "min-w-[120px] px-6 h-full shrink-0",
              /* Snap alignment on mobile */
              "[scroll-snap-align:start]",
              /* Grayscale + dim by default, full colour on hover */
              "group",
            ].join(" ")}
          >
            {/* Logo image */}
            <div className="relative h-6 w-auto flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                height={24}
                width={64}
                className={[
                  "h-6 w-auto object-contain",
                  "grayscale brightness-[0.7]",
                  "group-hover:grayscale-0 group-hover:brightness-100",
                  "transition-[filter] duration-150",
                ].join(" ")}
              />
            </div>

            {/* Caption */}
            <span
              className={[
                "font-['var(--font-ibm-plex-mono)',ui-monospace,monospace]",
                "text-[10px] uppercase tracking-[0.12em]",
                "text-[#71717A] whitespace-nowrap",
                "group-hover:text-[#A1A1AA] transition-colors duration-150",
              ].join(" ")}
            >
              {caption}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
