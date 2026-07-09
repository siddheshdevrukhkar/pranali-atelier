import { cn } from "@/lib/utils";

type DisplayProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Display({ children, className }: DisplayProps) {
  return (
    <h1
      className={cn(
        "font-heading text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
