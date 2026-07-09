import TestimonialCard from "./TestimonialCard";

import { getTestimonials } from "@/lib/content";

export default function TestimonialGrid() {
  const { items } = getTestimonials();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((testimonial) => (
        <TestimonialCard
          key={`${testimonial.name}-${testimonial.service}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}
