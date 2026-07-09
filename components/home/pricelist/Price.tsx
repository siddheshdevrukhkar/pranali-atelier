import PageSection from "@/components/shared/PageSection";
import { getPriceList } from "@/lib/content";

import PriceGrid from "@/components/home/pricelist/PriceGrid";

export default function Price() {
  const pricelist = getPriceList();

  return (
    <PageSection
      eyebrow={pricelist.eyebrow}
      title={pricelist.title}
      description={pricelist.description}
      align="center"
      background="default"
      id="pricing"
    >
      <PriceGrid limit={4} preview />
    </PageSection>
  );
}
