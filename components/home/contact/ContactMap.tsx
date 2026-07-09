import { getContact } from "@/lib/content";

export default function ContactMap() {
  const { googleMap } = getContact();

  return (
    <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-200 p-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Studio Location
        </p>

        <h3 className="mt-2 text-2xl font-semibold">Find Us</h3>

        <p className="mt-2 text-neutral-600">
          We&#39;d love to welcome you to our studio.
        </p>
      </div>

      <iframe
        src={googleMap}
        className="h-[640px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
