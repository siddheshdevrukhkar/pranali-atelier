import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageSection from "@/components/shared/PageSection";
import { getGallery } from "@/lib/content";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  const gallery = getGallery();

  return (
    <PageSection
      id="gallery"
      eyebrow={gallery.eyebrow}
      title={gallery.title}
      description={gallery.description}
      align="center"
      background="white"
    >
      <GalleryGrid limit={8} />

      <div className="mt-12 flex justify-center">
        <Link href="/gallery">
          <Button
            size="lg"
            className="rounded-full bg-black px-8 text-white hover:bg-neutral-800"
          >
            Explore Full Gallery →
          </Button>
        </Link>
      </div>
    </PageSection>
  );
}
