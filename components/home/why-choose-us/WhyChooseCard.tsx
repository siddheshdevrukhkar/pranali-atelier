import {
  Award,
  Gem,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { WhyChooseItem } from "@/types/why-choose-us";

const icons = {
  Award,
  Gem,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
};

type Props = {
  item: WhyChooseItem;
};

export default function WhyChooseCard({ item }: Props) {
  const Icon = icons[item.icon as keyof typeof icons] ?? Sparkles;

  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-neutral-200
        hover:border-primary/20
        bg-[#FDFBF7]
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

      <p className="leading-7 text-neutral-600">{item.description}</p>
    </article>
  );
}
