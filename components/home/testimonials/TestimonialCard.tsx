import { Quote, Star } from "lucide-react";

import { Testimonial } from "@/types/testimonials";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-[2rem]
        border
        border-neutral-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      {/* Rating */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <Quote className="mb-5 h-10 w-10 text-primary/15" />

      {/* Review */}
      <div className="flex-1">
        <p className="italic leading-8 text-neutral-600">
          {testimonial.review}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-5">
        <div
          className="
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-primary/10
border-primary/20
text-primary
    border
    border-[#E7C9AE]
    shadow-sm
    transition-all
    duration-300
    group-hover:scale-105
    group-hover:shadow-md
  "
        >
          <span className="text-base font-bold text-[#8A5A44]">{initials}</span>
        </div>

        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>

          <p className="text-sm text-neutral-500">{testimonial.service}</p>
        </div>
      </div>
    </article>
  );
}
