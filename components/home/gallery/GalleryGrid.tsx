import { getGallery } from "@/lib/content";

import GalleryCard from "./GalleryCard";

type GalleryGridProps = {
  limit?: number;
};

export default function GalleryGrid({ limit }: GalleryGridProps) {
  const gallery = getGallery();

  const images = limit ? gallery.images.slice(0, limit) : gallery.images;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((item) => (
        <GalleryCard key={item.image} image={item.image} alt={item.alt} />
      ))}
    </div>
  );
}
