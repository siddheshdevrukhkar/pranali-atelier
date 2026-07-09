import { ArrowRight, Sparkles } from "lucide-react";

import PriceItem from "./PriceItem";

import { PriceCategory as PriceCategoryType } from "@/types/pricelist";

type PriceCategoryProps = {
  category: PriceCategoryType;
  preview?: boolean;
};

export default function PriceCategory({
  category,
  preview = false,
}: PriceCategoryProps) {
  const items = preview ? category.items.slice(0, 3) : category.items;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>

          <h3 className="text-lg font-semibold">{category.title}</h3>

          {!preview && (
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {category.description}
            </p>
          )}
        </div>

        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-500">
          {category.items.length}
        </span>
      </div>

      {/* Services */}
      <div className="flex-1">
        {items.map((item) => (
          <PriceItem key={item.name} item={item} />
        ))}

        {preview && category.items.length > 3 && (
          <p className="mt-3 text-sm font-medium text-primary">
            +{category.items.length - 3} more services
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t pt-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            From
          </p>

          <p className="text-lg font-bold text-primary">
            {category.items[0].price}/-
          </p>
        </div>

        <ArrowRight className="h-5 w-5 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </article>
  );
}
