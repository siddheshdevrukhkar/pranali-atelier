import Image from "next/image";

import { getHero } from "@/lib/content";

export default function HeroCircles() {
  const hero = getHero();

  return (
    <>
      <Image
        src={hero.images.circle1}
        alt=""
        width={120}
        height={120}
        className="absolute z-30 -left-8 top-8 h-28 w-28 rounded-full border-[6px] border-white object-cover shadow-lg"
      />

      <Image
        src={hero.images.circle2}
        alt=""
        width={140}
        height={140}
        className="absolute z-30 -right-6 top-20 h-32 w-32 rounded-full border-[6px] border-white object-cover shadow-lg"
      />

      <Image
        src={hero.images.circle3}
        alt=""
        width={110}
        height={110}
        className="absolute z-30 bottom-8 right-16 h-24 w-24 rounded-full border-[6px] border-white object-cover shadow-lg"
      />
    </>
  );
}
