import Heading from "./Heading";
import Text from "./Text";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCenter && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      )}

      <Heading>{title}</Heading>

      {description && (
        <Text
          className={cn("max-w-2xl text-neutral-600", isCenter && "mx-auto")}
        >
          {description}
        </Text>
      )}
    </div>
  );
}
