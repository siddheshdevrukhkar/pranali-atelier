import { getHero } from "@/lib/content";

import Display from "@/components/shared/Display";
import Text from "@/components/shared/Text";

import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  const hero = getHero();

  return (
    <div className="flex flex-col justify-center space-y-10">
      <HeroBadge />
      <div className="space-y-5">
        <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
          {hero.eyebrow}
        </span>

        <Display className="max-w-xl">{hero.title}</Display>

        <Text className="max-w-md text-lg leading-8 text-neutral-600">
          {hero.description}
        </Text>
      </div>

      <div className="pt-2">
        <HeroActions />
      </div>
      <div className="pt-4">
        <HeroStats />
      </div>
    </div>
  );
}
