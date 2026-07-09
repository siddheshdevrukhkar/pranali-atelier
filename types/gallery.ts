export interface GalleryImage {
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
}
