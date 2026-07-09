import PageSection from "@/components/shared/PageSection";

import TestimonialGrid from "./TestimonialGrid";

import { getTestimonials } from "@/lib/content";

export default function Testimonial() {
  const content = getTestimonials();

  return (
    <PageSection
      id="testimonials"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      background="default"
    >
      <TestimonialGrid />
    </PageSection>
  );
}
