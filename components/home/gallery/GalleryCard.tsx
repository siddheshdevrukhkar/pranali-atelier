import Image from "next/image";

type GalleryCardProps = {
  image: string;
  alt: string;
};

export default function GalleryCard({ image, alt }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
