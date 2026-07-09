import PageSection from "@/components/shared/PageSection";

import ContactContent from "./ContactContent";
import ContactMap from "./ContactMap";

import { getContact } from "@/lib/content";

export default function Contact() {
  const content = getContact();

  return (
    <PageSection
      id="contact"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      background="white"
    >
      <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
        <ContactContent />

        <ContactMap />
      </div>
    </PageSection>
  );
}
