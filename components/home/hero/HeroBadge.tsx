import { getHero } from "@/lib/content";

export default function HeroBadge() {
  const hero = getHero();

  return (
    <div className="inline-flex items-center w-max gap-2 rounded-full border border-default bg-white px-4 py-2 shadow-sm">
      <span>{hero.badge.icon}</span>
      <span className="text-sm font-medium">{hero.badge.text}</span>
    </div>
  );
}
