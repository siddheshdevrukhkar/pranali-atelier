import Link from "next/link";

import PageSection from "@/components/shared/PageSection";
import { Button } from "@/components/ui/button";

import PriceGrid from "./PriceGrid";

import { getPriceList } from "@/lib/content";

export default function PriceList() {
  const content = getPriceList();

  return (
    <PageSection
      id="pricelist"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <PriceGrid limit={4} />

      <div className="flex justify-center pt-4">
        <Button size="lg">
          <Link href="/pricelist">Explore Complete Pricing</Link>
        </Button>
      </div>
    </PageSection>
  );
}
