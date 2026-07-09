import Link from "next/link";

import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { getContact } from "@/lib/content";

export default function ContactContent() {
  const contact = getContact();

  return (
    <div
      className="
        rounded-[2rem]
        bg-[#FDFBF7]
        p-10
        shadow-sm
      "
    >
      <div className="space-y-8">
        {/* Address */}

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <MapPin className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Visit Studio</h3>

            <p className="mt-2 leading-7 text-neutral-600">
              {contact.address.studio}
              <br />
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.state}
            </p>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Phone */}

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Phone className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Call Us</h3>

            <Link
              href={`tel:${contact.phone}`}
              className="mt-2 block text-neutral-600 transition hover:text-primary"
            >
              {contact.phone}
            </Link>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Email */}

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Mail className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Email</h3>

            <Link
              href={`mailto:${contact.email}`}
              className="mt-2 block text-neutral-600 transition hover:text-primary"
            >
              {contact.email}
            </Link>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Instagram */}

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <FaInstagram className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Instagram</h3>

            <Link
              href={contact.instagram}
              target="_blank"
              className="mt-2 block text-neutral-600 transition hover:text-primary"
            >
              @glamnails
            </Link>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Hours */}

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Clock3 className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Working Hours</h3>

            {contact.workingHours.map((item) => (
              <div
                key={item.day}
                className="mt-2 flex justify-between gap-8 text-neutral-600"
              >
                <span>{item.day}</span>

                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button size="lg" className="mt-10 mx-auto flex w-fit rounded-full px-8">
        <Link
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          className="inline-flex items-center gap-2"
        >
          Book Appointment
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      </Button>
    </div>
  );
}
