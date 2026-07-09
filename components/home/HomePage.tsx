import About from "./about/About";
import Contact from "./contact/Contact";
import Gallery from "./gallery/Gallery";
import Hero from "./hero/Hero";
import Price from "./pricelist/Price";
import Services from "./services/Services";
import Testimonial from "./testimonials/Testimonial";
import WhyChooseUs from "./why-choose-us/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Price />
      <WhyChooseUs />
      <Testimonial />
      <Contact />
    </main>
  );
}
