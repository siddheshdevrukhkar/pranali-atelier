import { getServices } from "@/lib/content";

import PageSection from "@/components/shared/PageSection";

import ServiceGrid from "./ServiceGrid";

export default function Services() {
  const services = getServices();

  return (
    <PageSection
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      description={services.description}
      align="center"
      background="default"
    >
      <ServiceGrid />
    </PageSection>
  );
}
