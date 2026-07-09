import { getServices } from "@/lib/content";

import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  const content = getServices();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {content.categories.map((category) => (
        <ServiceCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          services={category.services}
        />
      ))}
    </div>
  );
}
