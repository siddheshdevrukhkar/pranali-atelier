import { Check } from "lucide-react";

type AboutFeaturesProps = {
  features: string[];
};

export default function AboutFeatures({ features }: AboutFeaturesProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-4 w-4 text-primary" />
          </div>

          <span className="font-medium">{feature}</span>
        </div>
      ))}
    </div>
  );
}
