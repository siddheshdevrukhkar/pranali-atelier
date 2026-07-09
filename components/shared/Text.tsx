import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-base leading-7 text-neutral-600",
        className,
      )}
    >
      {children}
    </p>
  );
}
