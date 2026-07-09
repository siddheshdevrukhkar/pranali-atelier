import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/images/about/about-placeholder.png"
        alt="About Pranali Atelier"
        width={500}
        height={600}
        className="rounded-[40px] object-cover shadow-xl"
      />
    </div>
  );
}
