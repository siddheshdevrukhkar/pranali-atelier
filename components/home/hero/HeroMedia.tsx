import HeroBackground from "./HeroBackground";
import HeroCircles from "./HeroCircles";
import HeroImage from "./HeroImage";

export default function HeroMedia() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <HeroBackground />
      <div className="relative z-20">
        <HeroImage />
      </div>
      <HeroCircles />
    </div>
  );
}
