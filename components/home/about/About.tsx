import { getAbout } from "@/lib/content";

import PageSection from "@/components/shared/PageSection";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  const about = getAbout();

  return (
    <PageSection
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
      align="left"
      background="white"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <AboutImage />
        <AboutContent />
      </div>
    </PageSection>
  );
}
