import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

import { NAVIGATION } from "@/lib/constants";

import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[#D9CEC2]/70
        bg-gradient-to-b
        from-[#F8F4EF]/95
        via-[#F3ECE4]/90
        to-[#ECE4DA]/85
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-[#F8F4EF]/80
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <Button
            className="
              rounded-full
              bg-primary
              px-6
              text-white
              shadow-lg
              shadow-primary/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-primary/30
            "
          >
            Book Appointment
          </Button>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
