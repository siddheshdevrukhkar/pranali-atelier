import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
