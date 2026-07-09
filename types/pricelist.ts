export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceCategory {
  title: string;
  icon: string;
  description: string;
  items: PriceItem[];
}

export interface PriceListContent {
  eyebrow: string;
  title: string;
  description: string;
  categories: PriceCategory[];
}
