import PageSection from "@/components/shared/PageSection";

import WhyChooseGrid from "./WhyChooseGrid";

import { getWhyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  const content = getWhyChooseUs();

  return (
    <PageSection
      id="why-choose-us"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      background="white"
    >
      <WhyChooseGrid />
    </PageSection>
  );
}
