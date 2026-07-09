import { getAbout } from "@/lib/content";

import AboutFeatures from "./AboutFeatures";

export default function AboutContent() {
  const about = getAbout();

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mt-8">
        <AboutFeatures features={about.features} />
      </div>
    </div>
  );
}
