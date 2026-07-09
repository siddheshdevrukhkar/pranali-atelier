import Image from "next/image";

import { getHero } from "@/lib/content";

export default function HeroImage() {
  const hero = getHero();

  return (
    <Image
      src={hero.images.main}
      alt="Luxury Nail Studio"
      width={560}
      height={650}
      priority
      className="relative z-20 rounded-[42px] object-cover shadow-2xl"
    />
  );
}
