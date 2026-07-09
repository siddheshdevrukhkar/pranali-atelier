"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { NAVIGATION } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        }
      />

      <SheetContent side="right" className="w-80 bg-[#FDFBF7] opacity-100">
        <div className="flex h-full flex-col p-5">
          <Logo />

          <nav className="mt-10 flex flex-col gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button className="mt-auto rounded-full bg-primary text-white">
            Book Appointment
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
