import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "default" | "white";
};

export default function Section({
  id,
  className,
  children,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        background === "default" && "bg-[#FDFBF7]",
        background === "white" && "bg-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
