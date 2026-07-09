import { Gem, Heart, Palette, Sparkles, LucideIcon, Check } from "lucide-react";

import { Card } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  icon: string;
  services: string[];
};

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  gem: Gem,
  palette: Palette,
  heart: Heart,
};

export default function ServiceCard({
  title,
  icon,
  services,
}: ServiceCardProps) {
  const Icon = icons[icon] ?? Sparkles;

  return (
    <Card className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50">
        <Icon className="h-7 w-7 text-pink-500" />
      </div>

      <h3 className="mb-5 font-heading text-2xl font-semibold">{title}</h3>

      <ul className="space-y-3">
        {services.map((service) => (
          <li
            key={service}
            className="flex items-center gap-3 text-neutral-600"
          >
            <Check className="h-4 w-4 text-pink-500" />

            <span>{service}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
