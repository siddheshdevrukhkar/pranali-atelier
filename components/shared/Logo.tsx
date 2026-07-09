import Image from "next/image";
import Link from "next/link";

import { getBrand } from "@/lib/content";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg" | "xl";

type LogoProps = {
  href?: string;
  size?: LogoSize;
  iconOnly?: boolean;
  showTagline?: boolean;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: {
    image: 40,
    title: "text-sm md:text-lg",
    tagline: "text-[9px] md:text-[10px]",
  },
  md: {
    image: 52,
    title: "text-base md:text-xl",
    tagline: "text-[10px] md:text-xs",
  },
  lg: {
    image: 64,
    title: "text-xl md:text-2xl",
    tagline: "text-xs md:text-sm",
  },
  xl: {
    image: 80,
    title: "text-2xl md:text-3xl",
    tagline: "text-sm md:text-base",
  },
} satisfies Record<
  LogoSize,
  {
    image: number;
    title: string;
    tagline: string;
  }
>;

export default function Logo({
  href = "/",
  size = "md",
  iconOnly = false,
  showTagline = true,
  className,
  priority = false,
}: LogoProps) {
  const brand = getBrand();
  const current = sizes[size];

  return (
    <Link
      href={href}
      aria-label={brand.name}
      className={cn(
        "inline-flex items-center gap-2 md:gap-3 transition-opacity duration-200 hover:opacity-90",
        className,
      )}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={current.image}
        height={current.image}
        priority={priority}
        className="shrink-0 object-contain"
      />

      {!iconOnly && (
        <>
          <div
            className="hidden h-12 w-px rounded-full bg-neutral-300 md:block"
            aria-hidden="true"
          />
          <div className="leading-none">
            <span
              className={cn(
                "font-heading font-semibold uppercase tracking-[0.15em]",
                current.title,
              )}
            >
              {brand.name}
            </span>

            {showTagline && (
              <p
                className={cn(
                  "hidden md:block mt-1 text-muted-foreground uppercase tracking-[0.35em]",
                  current.tagline,
                )}
              >
                {brand.tagline}
              </p>
            )}
          </div>
        </>
      )}
    </Link>
  );
}
