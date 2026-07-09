import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getHero } from "@/lib/content";

export default function HeroActions() {
  const hero = getHero();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        className="h-12 rounded-full px-8 bg-primary text-white hover:opacity-90 font-medium shadow-lg"
      >
        <Link href={hero.primaryButton.href}>{hero.primaryButton.label}</Link>
      </Button>

      <Button size="lg" variant="outline" className="h-12 rounded-full px-6">
        <Link href={hero.secondaryButton.href}>
          {hero.secondaryButton.label}
        </Link>
      </Button>
    </div>
  );
}
