export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  review: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  description: string;
  items: Testimonial[];
}
