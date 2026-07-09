import PriceCategory from "./PriceCategory";

import { getPriceList } from "@/lib/content";

type PriceGridProps = {
  limit?: number;
  preview?: boolean;
};

export default function PriceGrid({ limit, preview = false }: PriceGridProps) {
  const { categories } = getPriceList();

  const displayedCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {displayedCategories.map((category) => (
        <PriceCategory
          key={category.title}
          category={category}
          preview={preview}
        />
      ))}
    </div>
  );
}
