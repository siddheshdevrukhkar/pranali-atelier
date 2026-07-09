import { PriceItem as PriceItemType } from "@/types/pricelist";

type PriceItemProps = {
  item: PriceItemType;
};

export default function PriceItem({ item }: PriceItemProps) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className="truncate text-sm text-neutral-700">{item.name}</span>

      <div className="flex-1 border-b border-dashed border-neutral-200" />

      <span className="whitespace-nowrap text-sm font-semibold text-primary">
        {item.price}/-
      </span>
    </div>
  );
}
