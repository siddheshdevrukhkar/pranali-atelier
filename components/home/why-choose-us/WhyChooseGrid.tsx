import WhyChooseCard from "./WhyChooseCard";

import { getWhyChooseUs } from "@/lib/content";

export default function WhyChooseGrid() {
  const { items } = getWhyChooseUs();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <WhyChooseCard key={item.title} item={item} />
      ))}
    </div>
  );
}
