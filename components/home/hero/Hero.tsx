import Container from "@/components/shared/Container";

import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-default">
      <Container>
        <div className="grid min-h-[85vh] items-center gap-16 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <HeroContent />
          <HeroMedia />
        </div>
      </Container>
    </section>
  );
}
